var xf=Object.defineProperty;var _f=(e,t,n)=>t in e?xf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ie=(e,t,n)=>_f(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zu={exports:{}},vl={},Ju={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),kf=Symbol.for("react.portal"),Sf=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Tf=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),Pf=Symbol.for("react.memo"),If=Symbol.for("react.lazy"),Cs=Symbol.iterator;function jf(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ec=Object.assign,tc={};function dr(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||qu}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nc(){}nc.prototype=dr.prototype;function po(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||qu}var mo=po.prototype=new nc;mo.constructor=po;ec(mo,dr.prototype);mo.isPureReactComponent=!0;var As=Array.isArray,rc=Object.prototype.hasOwnProperty,ho={current:null},ac={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)rc.call(t,r)&&!ac.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)a[r]===void 0&&(a[r]=c[r]);return{$$typeof:ra,type:e,key:l,ref:o,props:a,_owner:ho.current}}function Mf(e,t){return{$$typeof:ra,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function go(e){return typeof e=="object"&&e!==null&&e.$$typeof===ra}function zf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ns=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zf(""+e.key):t.toString(36)}function Ea(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ra:case kf:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+$l(o,0):r,As(a)?(n="",e!=null&&(n=e.replace(Ns,"$&/")+"/"),Ea(a,t,n,"",function(p){return p})):a!=null&&(go(a)&&(a=Mf(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ns,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",As(e))for(var c=0;c<e.length;c++){l=e[c];var u=r+$l(l,c);o+=Ea(l,t,n,u,a)}else if(u=jf(e),typeof u=="function")for(e=u.call(e),c=0;!(l=e.next()).done;)l=l.value,u=r+$l(l,c++),o+=Ea(l,t,n,u,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(e,t,n){if(e==null)return e;var r=[],a=0;return Ea(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Lf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Pa={transition:null},Rf={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Pa,ReactCurrentOwner:ho};function ic(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ua,forEach:function(e,t,n){ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ua(e,function(){t++}),t},toArray:function(e){return ua(e,function(t){return t})||[]},only:function(e){if(!go(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=dr;F.Fragment=Sf;F.Profiler=Af;F.PureComponent=po;F.StrictMode=Cf;F.Suspense=Ef;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;F.act=ic;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ec({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=ho.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)rc.call(t,u)&&!ac.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var p=0;p<u;p++)c[p]=arguments[p+2];r.children=c}return{$$typeof:ra,type:e.type,key:a,ref:l,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Tf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nf,_context:e},e.Consumer=e};F.createElement=lc;F.createFactory=function(e){var t=lc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:bf,render:e}};F.isValidElement=go;F.lazy=function(e){return{$$typeof:If,_payload:{_status:-1,_result:e},_init:Lf}};F.memo=function(e,t){return{$$typeof:Pf,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Pa.transition;Pa.transition={};try{e()}finally{Pa.transition=t}};F.unstable_act=ic;F.useCallback=function(e,t){return je.current.useCallback(e,t)};F.useContext=function(e){return je.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return je.current.useDeferredValue(e)};F.useEffect=function(e,t){return je.current.useEffect(e,t)};F.useId=function(){return je.current.useId()};F.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return je.current.useMemo(e,t)};F.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};F.useRef=function(e){return je.current.useRef(e)};F.useState=function(e){return je.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return je.current.useTransition()};F.version="18.3.1";Ju.exports=F;var A=Ju.exports;const Of=wf(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=A,$f=Symbol.for("react.element"),Ff=Symbol.for("react.fragment"),Bf=Object.prototype.hasOwnProperty,Hf=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gf={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Bf.call(t,r)&&!Gf.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:$f,type:e,key:l,ref:o,props:a,_owner:Hf.current}}vl.Fragment=Ff;vl.jsx=oc;vl.jsxs=oc;Zu.exports=vl;var h=Zu.exports,vi={},sc={exports:{}},We={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,O){var k=b.length;b.push(O);e:for(;0<k;){var B=k-1>>>1,Q=b[B];if(0<a(Q,O))b[B]=O,b[k]=Q,k=B;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var O=b[0],k=b.pop();if(k!==O){b[0]=k;e:for(var B=0,Q=b.length,gt=Q>>>1;B<gt;){var Ee=2*(B+1)-1,fn=b[Ee],Be=Ee+1,Gt=b[Be];if(0>a(fn,k))Be<Q&&0>a(Gt,fn)?(b[B]=Gt,b[Be]=k,B=Be):(b[B]=fn,b[Ee]=k,B=Ee);else if(Be<Q&&0>a(Gt,k))b[B]=Gt,b[Be]=k,B=Be;else break e}}return O}function a(b,O){var k=b.sortIndex-O.sortIndex;return k!==0?k:b.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var u=[],p=[],x=1,i=null,s=3,d=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var O=n(p);O!==null;){if(O.callback===null)r(p);else if(O.startTime<=b)r(p),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(p)}}function w(b){if(v=!1,y(b),!g)if(n(u)!==null)g=!0,ht(S);else{var O=n(p);O!==null&&Nt(w,O.startTime-b)}}function S(b,O){g=!1,v&&(v=!1,f(P),P=-1),d=!0;var k=s;try{for(y(O),i=n(u);i!==null&&(!(i.expirationTime>O)||b&&!z());){var B=i.callback;if(typeof B=="function"){i.callback=null,s=i.priorityLevel;var Q=B(i.expirationTime<=O);O=e.unstable_now(),typeof Q=="function"?i.callback=Q:i===n(u)&&r(u),y(O)}else r(u);i=n(u)}if(i!==null)var gt=!0;else{var Ee=n(p);Ee!==null&&Nt(w,Ee.startTime-O),gt=!1}return gt}finally{i=null,s=k,d=!1}}var N=!1,T=null,P=-1,j=5,M=-1;function z(){return!(e.unstable_now()-M<j)}function de(){if(T!==null){var b=e.unstable_now();M=b;var O=!0;try{O=T(!0,b)}finally{O?le():(N=!1,T=null)}}else N=!1}var le;if(typeof m=="function")le=function(){m(de)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,At=fe.port2;fe.port1.onmessage=de,le=function(){At.postMessage(null)}}else le=function(){_(de,0)};function ht(b){T=b,N||(N=!0,le())}function Nt(b,O){P=_(function(){b(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||d||(g=!0,ht(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(b){switch(s){case 1:case 2:case 3:var O=3;break;default:O=s}var k=s;s=O;try{return b()}finally{s=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,O){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var k=s;s=b;try{return O()}finally{s=k}},e.unstable_scheduleCallback=function(b,O,k){var B=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?B+k:B):k=B,b){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=k+Q,b={id:x++,callback:O,priorityLevel:b,startTime:k,expirationTime:Q,sortIndex:-1},k>B?(b.sortIndex=k,t(p,b),n(u)===null&&b===n(p)&&(v?(f(P),P=-1):v=!0,Nt(w,k-B))):(b.sortIndex=Q,t(u,b),g||d||(g=!0,ht(S))),b},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(b){var O=s;return function(){var k=s;s=O;try{return b.apply(this,arguments)}finally{s=k}}}})(cc);uc.exports=cc;var Vf=uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf=A,Qe=Vf;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dc=new Set,Fr={};function Pn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Fr[e]=t,e=0;e<t.length;e++)dc.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xi=Object.prototype.hasOwnProperty,Xf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ts={},bs={};function Yf(e){return xi.call(bs,e)?!0:xi.call(Ts,e)?!1:Xf.test(e)?bs[e]=!0:(Ts[e]=!0,!1)}function Qf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wf(e,t,n,r){if(t===null||typeof t>"u"||Qf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var yo=/[\-:]([a-z])/g;function vo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yo,vo);Ce[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yo,vo);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yo,vo);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,t,n,r){var a=Ce.hasOwnProperty(t)?Ce[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wf(t,n,a,r)&&(n=null),r||a===null?Yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),_o=Symbol.for("react.strict_mode"),_i=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),wo=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),ki=Symbol.for("react.suspense_list"),ko=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),Es=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Fl;function Nr(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Bl=!1;function Hl(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,c=l.length-1;1<=o&&0<=c&&a[o]!==l[c];)c--;for(;1<=o&&0<=c;o--,c--)if(a[o]!==l[c]){if(o!==1||c!==1)do if(o--,c--,0>c||a[o]!==l[c]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=c);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function Kf(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case Dn:return"Portal";case _i:return"Profiler";case _o:return"StrictMode";case wi:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pc:return(e.displayName||"Context")+".Consumer";case fc:return(e._context.displayName||"Context")+".Provider";case wo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ko:return t=e.displayName||null,t!==null?t:Si(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return Si(e(t))}catch{}}return null}function Zf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(t);case 8:return t===_o?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jf(e){var t=hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function da(e){e._valueTracker||(e._valueTracker=Jf(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ga(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yc(e,t){t=t.checked,t!=null&&xo(e,"checked",t,!1)}function Ai(e,t){yc(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ni(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ni(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ni(e,t,n){(t!=="number"||Ga(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function js(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Tr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function vc(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fa,_c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qf=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){qf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function wc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=wc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var ep=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ei(e,t){if(t){if(ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function So(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ji=null,Jn=null,qn=null;function zs(e){if(e=ia(e)){if(typeof ji!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Sl(t),ji(e.stateNode,e.type,t))}}function Sc(e){Jn?qn?qn.push(e):qn=[e]:Jn=e}function Cc(){if(Jn){var e=Jn,t=qn;if(qn=Jn=null,zs(e),t)for(e=0;e<t.length;e++)zs(t[e])}}function Ac(e,t){return e(t)}function Nc(){}var Gl=!1;function Tc(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return Ac(e,t,n)}finally{Gl=!1,(Jn!==null||qn!==null)&&(Nc(),Cc())}}function Hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Mi=!1;if(Dt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Mi=!1}function tp(e,t,n,r,a,l,o,c,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var Ir=!1,Va=null,Ua=!1,zi=null,np={onError:function(e){Ir=!0,Va=e}};function rp(e,t,n,r,a,l,o,c,u){Ir=!1,Va=null,tp.apply(np,arguments)}function ap(e,t,n,r,a,l,o,c,u){if(rp.apply(this,arguments),Ir){if(Ir){var p=Va;Ir=!1,Va=null}else throw Error(C(198));Ua||(Ua=!0,zi=p)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ls(e){if(In(e)!==e)throw Error(C(188))}function lp(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Ls(a),e;if(l===r)return Ls(a),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,c=a.child;c;){if(c===n){o=!0,n=a,r=l;break}if(c===r){o=!0,r=a,n=l;break}c=c.sibling}if(!o){for(c=l.child;c;){if(c===n){o=!0,n=l,r=a;break}if(c===r){o=!0,r=l,n=a;break}c=c.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Ec(e){return e=lp(e),e!==null?Pc(e):null}function Pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pc(e);if(t!==null)return t;e=e.sibling}return null}var Ic=Qe.unstable_scheduleCallback,Rs=Qe.unstable_cancelCallback,ip=Qe.unstable_shouldYield,op=Qe.unstable_requestPaint,oe=Qe.unstable_now,sp=Qe.unstable_getCurrentPriorityLevel,Co=Qe.unstable_ImmediatePriority,jc=Qe.unstable_UserBlockingPriority,Xa=Qe.unstable_NormalPriority,up=Qe.unstable_LowPriority,Mc=Qe.unstable_IdlePriority,xl=null,St=null;function cp(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(xl,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:pp,dp=Math.log,fp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/fp|0)|0}var pa=64,ma=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ya(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~a;c!==0?r=br(c):(l&=o,l!==0&&(r=br(l)))}else o=n&~a,o!==0?r=br(o):l!==0&&(r=br(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),a=1<<n,r|=e[n],t&=~a;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ft(l),c=1<<o,u=a[o];u===-1?(!(c&n)||c&r)&&(a[o]=mp(c,t)):u<=t&&(e.expiredLanes|=c),l&=~c}}function Li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zc(){var e=pa;return pa<<=1,!(pa&4194240)&&(pa=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function aa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ft(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function Ao(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Y=0;function Lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rc,No,Oc,Dc,$c,Ri=!1,ha=[],Jt=null,qt=null,en=null,Gr=new Map,Vr=new Map,Yt=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Os(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function xr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ia(t),t!==null&&No(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function vp(e,t,n,r,a){switch(t){case"focusin":return Jt=xr(Jt,e,t,n,r,a),!0;case"dragenter":return qt=xr(qt,e,t,n,r,a),!0;case"mouseover":return en=xr(en,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Gr.set(l,xr(Gr.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Vr.set(l,xr(Vr.get(l)||null,e,t,n,r,a)),!0}return!1}function Fc(e){var t=_n(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=bc(n),t!==null){e.blockedOn=t,$c(e.priority,function(){Oc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ia(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ii=r,n.target.dispatchEvent(r),Ii=null}else return t=ia(n),t!==null&&No(t),e.blockedOn=n,!1;t.shift()}return!0}function Ds(e,t,n){Ia(e)&&n.delete(t)}function xp(){Ri=!1,Jt!==null&&Ia(Jt)&&(Jt=null),qt!==null&&Ia(qt)&&(qt=null),en!==null&&Ia(en)&&(en=null),Gr.forEach(Ds),Vr.forEach(Ds)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,Ri||(Ri=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,xp)))}function Ur(e){function t(a){return _r(a,e)}if(0<ha.length){_r(ha[0],e);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&_r(Jt,e),qt!==null&&_r(qt,e),en!==null&&_r(en,e),Gr.forEach(t),Vr.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Fc(n),n.blockedOn===null&&Yt.shift()}var er=Ht.ReactCurrentBatchConfig,Qa=!0;function _p(e,t,n,r){var a=Y,l=er.transition;er.transition=null;try{Y=1,To(e,t,n,r)}finally{Y=a,er.transition=l}}function wp(e,t,n,r){var a=Y,l=er.transition;er.transition=null;try{Y=4,To(e,t,n,r)}finally{Y=a,er.transition=l}}function To(e,t,n,r){if(Qa){var a=Oi(e,t,n,r);if(a===null)ei(e,t,r,Wa,n),Os(e,r);else if(vp(a,e,t,n,r))r.stopPropagation();else if(Os(e,r),t&4&&-1<yp.indexOf(e)){for(;a!==null;){var l=ia(a);if(l!==null&&Rc(l),l=Oi(e,t,n,r),l===null&&ei(e,t,r,Wa,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else ei(e,t,r,null,n)}}var Wa=null;function Oi(e,t,n,r){if(Wa=null,e=So(r),e=_n(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wa=e,null}function Bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case Co:return 1;case jc:return 4;case Xa:case up:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var Wt=null,bo=null,ja=null;function Hc(){if(ja)return ja;var e,t=bo,n=t.length,r,a="value"in Wt?Wt.value:Wt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return ja=a.slice(e,1<r?1-r:void 0)}function Ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ga(){return!0}function $s(){return!1}function Ke(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ga:$s,this.isPropagationStopped=$s,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Ke(fr),la=re({},fr,{view:0,detail:0}),kp=Ke(la),Ul,Xl,wr,_l=re({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(Ul=e.screenX-wr.screenX,Xl=e.screenY-wr.screenY):Xl=Ul=0,wr=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Fs=Ke(_l),Sp=re({},_l,{dataTransfer:0}),Cp=Ke(Sp),Ap=re({},la,{relatedTarget:0}),Yl=Ke(Ap),Np=re({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tp=Ke(Np),bp=re({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=Ke(bp),Pp=re({},fr,{data:0}),Bs=Ke(Pp),Ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mp[e])?!!t[e]:!1}function Po(){return zp}var Lp=re({},la,{key:function(e){if(e.key){var t=Ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=Ke(Lp),Op=re({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hs=Ke(Op),Dp=re({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),$p=Ke(Dp),Fp=re({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Ke(Fp),Hp=re({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=Ke(Hp),Vp=[9,13,27,32],Io=Dt&&"CompositionEvent"in window,jr=null;Dt&&"documentMode"in document&&(jr=document.documentMode);var Up=Dt&&"TextEvent"in window&&!jr,Gc=Dt&&(!Io||jr&&8<jr&&11>=jr),Gs=" ",Vs=!1;function Vc(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Xp(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Vs=!0,Gs);case"textInput":return e=t.data,e===Gs&&Vs?null:e;default:return null}}function Yp(e,t){if(Fn)return e==="compositionend"||!Io&&Vc(e,t)?(e=Hc(),ja=bo=Wt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function Xc(e,t,n,r){Sc(r),t=Ka(t,"onChange"),0<t.length&&(n=new Eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Xr=null;function Wp(e){rd(e,0)}function wl(e){var t=Gn(e);if(gc(t))return e}function Kp(e,t){if(e==="change")return t}var Yc=!1;if(Dt){var Ql;if(Dt){var Wl="oninput"in document;if(!Wl){var Xs=document.createElement("div");Xs.setAttribute("oninput","return;"),Wl=typeof Xs.oninput=="function"}Ql=Wl}else Ql=!1;Yc=Ql&&(!document.documentMode||9<document.documentMode)}function Ys(){Mr&&(Mr.detachEvent("onpropertychange",Qc),Xr=Mr=null)}function Qc(e){if(e.propertyName==="value"&&wl(Xr)){var t=[];Xc(t,Xr,e,So(e)),Tc(Wp,t)}}function Zp(e,t,n){e==="focusin"?(Ys(),Mr=t,Xr=n,Mr.attachEvent("onpropertychange",Qc)):e==="focusout"&&Ys()}function Jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(Xr)}function qp(e,t){if(e==="click")return wl(t)}function em(e,t){if(e==="input"||e==="change")return wl(t)}function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:tm;function Yr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!xi.call(t,a)||!mt(e[a],t[a]))return!1}return!0}function Qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,t){var n=Qs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qs(n)}}function Wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(){for(var e=window,t=Ga();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ga(e.document)}return t}function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nm(e){var t=Kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wc(n.ownerDocument.documentElement,n)){if(r!==null&&jo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Ws(n,l);var o=Ws(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=Dt&&"documentMode"in document&&11>=document.documentMode,Bn=null,Di=null,zr=null,$i=!1;function Ks(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$i||Bn==null||Bn!==Ga(r)||(r=Bn,"selectionStart"in r&&jo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Yr(zr,r)||(zr=r,r=Ka(Di,"onSelect"),0<r.length&&(t=new Eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},Kl={},Zc={};Dt&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function kl(e){if(Kl[e])return Kl[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zc)return Kl[e]=t[n];return e}var Jc=kl("animationend"),qc=kl("animationiteration"),ed=kl("animationstart"),td=kl("transitionend"),nd=new Map,Zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){nd.set(e,t),Pn(t,[e])}for(var Zl=0;Zl<Zs.length;Zl++){var Jl=Zs[Zl],am=Jl.toLowerCase(),lm=Jl[0].toUpperCase()+Jl.slice(1);un(am,"on"+lm)}un(Jc,"onAnimationEnd");un(qc,"onAnimationIteration");un(ed,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(td,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Js(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ap(r,t,void 0,e),e.currentTarget=null}function rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,p=c.currentTarget;if(c=c.listener,u!==l&&a.isPropagationStopped())break e;Js(a,c,p),l=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,p=c.currentTarget,c=c.listener,u!==l&&a.isPropagationStopped())break e;Js(a,c,p),l=u}}}if(Ua)throw e=zi,Ua=!1,zi=null,e}function J(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var r=e+"__bubble";n.has(r)||(ad(t,e,2,!1),n.add(r))}function ql(e,t,n){var r=0;t&&(r|=4),ad(n,e,r,t)}var va="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[va]){e[va]=!0,dc.forEach(function(n){n!=="selectionchange"&&(im.has(n)||ql(n,!1,e),ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[va]||(t[va]=!0,ql("selectionchange",!1,t))}}function ad(e,t,n,r){switch(Bc(t)){case 1:var a=_p;break;case 4:a=wp;break;default:a=To}n=a.bind(null,t,n,e),a=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;c!==null;){if(o=_n(c),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}c=c.parentNode}}r=r.return}Tc(function(){var p=l,x=So(n),i=[];e:{var s=nd.get(e);if(s!==void 0){var d=Eo,g=e;switch(e){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":d=Rp;break;case"focusin":g="focus",d=Yl;break;case"focusout":g="blur",d=Yl;break;case"beforeblur":case"afterblur":d=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=$p;break;case Jc:case qc:case ed:d=Tp;break;case td:d=Bp;break;case"scroll":d=kp;break;case"wheel":d=Gp;break;case"copy":case"cut":case"paste":d=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Hs}var v=(t&4)!==0,_=!v&&e==="scroll",f=v?s!==null?s+"Capture":null:s;v=[];for(var m=p,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,f!==null&&(w=Hr(m,f),w!=null&&v.push(Wr(m,w,y)))),_)break;m=m.return}0<v.length&&(s=new d(s,g,null,n,x),i.push({event:s,listeners:v}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",s&&n!==Ii&&(g=n.relatedTarget||n.fromElement)&&(_n(g)||g[$t]))break e;if((d||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=p,g=g?_n(g):null,g!==null&&(_=In(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=p),d!==g)){if(v=Fs,w="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Hs,w="onPointerLeave",f="onPointerEnter",m="pointer"),_=d==null?s:Gn(d),y=g==null?s:Gn(g),s=new v(w,m+"leave",d,n,x),s.target=_,s.relatedTarget=y,w=null,_n(x)===p&&(v=new v(f,m+"enter",g,n,x),v.target=y,v.relatedTarget=_,w=v),_=w,d&&g)t:{for(v=d,f=g,m=0,y=v;y;y=Rn(y))m++;for(y=0,w=f;w;w=Rn(w))y++;for(;0<m-y;)v=Rn(v),m--;for(;0<y-m;)f=Rn(f),y--;for(;m--;){if(v===f||f!==null&&v===f.alternate)break t;v=Rn(v),f=Rn(f)}v=null}else v=null;d!==null&&qs(i,s,d,v,!1),g!==null&&_!==null&&qs(i,_,g,v,!0)}}e:{if(s=p?Gn(p):window,d=s.nodeName&&s.nodeName.toLowerCase(),d==="select"||d==="input"&&s.type==="file")var S=Kp;else if(Us(s))if(Yc)S=em;else{S=Jp;var N=Zp}else(d=s.nodeName)&&d.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(S=qp);if(S&&(S=S(e,p))){Xc(i,S,n,x);break e}N&&N(e,s,p),e==="focusout"&&(N=s._wrapperState)&&N.controlled&&s.type==="number"&&Ni(s,"number",s.value)}switch(N=p?Gn(p):window,e){case"focusin":(Us(N)||N.contentEditable==="true")&&(Bn=N,Di=p,zr=null);break;case"focusout":zr=Di=Bn=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Ks(i,n,x);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":Ks(i,n,x)}var T;if(Io)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Fn?Vc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gc&&n.locale!=="ko"&&(Fn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Fn&&(T=Hc()):(Wt=x,bo="value"in Wt?Wt.value:Wt.textContent,Fn=!0)),N=Ka(p,P),0<N.length&&(P=new Bs(P,e,null,n,x),i.push({event:P,listeners:N}),T?P.data=T:(T=Uc(n),T!==null&&(P.data=T)))),(T=Up?Xp(e,n):Yp(e,n))&&(p=Ka(p,"onBeforeInput"),0<p.length&&(x=new Bs("onBeforeInput","beforeinput",null,n,x),i.push({event:x,listeners:p}),x.data=T))}rd(i,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Hr(e,n),l!=null&&r.unshift(Wr(e,l,a)),l=Hr(e,t),l!=null&&r.push(Wr(e,l,a))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,p=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&p!==null&&(c=p,a?(u=Hr(n,l),u!=null&&o.unshift(Wr(n,u,c))):a||(u=Hr(n,l),u!=null&&o.push(Wr(n,u,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var om=/\r\n?/g,sm=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(sm,"")}function xa(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(C(425))}function Za(){}var Fi=null,Bi=null;function Hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,um=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,cm=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(dm)}:Gi;function dm(e){setTimeout(function(){throw e})}function ti(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ur(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),wt="__reactFiber$"+pr,Kr="__reactProps$"+pr,$t="__reactContainer$"+pr,Vi="__reactEvents$"+pr,fm="__reactListeners$"+pr,pm="__reactHandles$"+pr;function _n(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[wt])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function ia(e){return e=e[wt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Sl(e){return e[Kr]||null}var Ui=[],Vn=-1;function cn(e){return{current:e}}function q(e){0>Vn||(e.current=Ui[Vn],Ui[Vn]=null,Vn--)}function Z(e,t){Vn++,Ui[Vn]=e.current,e.current=t}var sn={},be=cn(sn),De=cn(!1),An=sn;function ar(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function $e(e){return e=e.childContextTypes,e!=null}function Ja(){q(De),q(be)}function ru(e,t,n){if(be.current!==sn)throw Error(C(168));Z(be,t),Z(De,n)}function ld(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,Zf(e)||"Unknown",a));return re({},n,r)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,An=be.current,Z(be,e),Z(De,De.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=ld(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,q(De),q(be),Z(be,e)):q(De),Z(De,n)}var zt=null,Cl=!1,ni=!1;function id(e){zt===null?zt=[e]:zt.push(e)}function mm(e){Cl=!0,id(e)}function dn(){if(!ni&&zt!==null){ni=!0;var e=0,t=Y;try{var n=zt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Cl=!1}catch(a){throw zt!==null&&(zt=zt.slice(e+1)),Ic(Co,dn),a}finally{Y=t,ni=!1}}return null}var Un=[],Xn=0,el=null,tl=0,et=[],tt=0,Nn=null,Lt=1,Rt="";function hn(e,t){Un[Xn++]=tl,Un[Xn++]=el,el=e,tl=t}function od(e,t,n){et[tt++]=Lt,et[tt++]=Rt,et[tt++]=Nn,Nn=e;var r=Lt;e=Rt;var a=32-ft(r)-1;r&=~(1<<a),n+=1;var l=32-ft(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Lt=1<<32-ft(t)+a|n<<a|r,Rt=l+e}else Lt=1<<l|n<<a|r,Rt=e}function Mo(e){e.return!==null&&(hn(e,1),od(e,1,0))}function zo(e){for(;e===el;)el=Un[--Xn],Un[Xn]=null,tl=Un[--Xn],Un[Xn]=null;for(;e===Nn;)Nn=et[--tt],et[tt]=null,Rt=et[--tt],et[tt]=null,Lt=et[--tt],et[tt]=null}var Ye=null,Xe=null,ee=!1,dt=null;function sd(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Xe=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Lt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Xe=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yi(e){if(ee){var t=Xe;if(t){var n=t;if(!lu(e,t)){if(Xi(e))throw Error(C(418));t=tn(n.nextSibling);var r=Ye;t&&lu(e,t)?sd(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ye=e)}}else{if(Xi(e))throw Error(C(418));e.flags=e.flags&-4097|2,ee=!1,Ye=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function _a(e){if(e!==Ye)return!1;if(!ee)return iu(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hi(e.type,e.memoizedProps)),t&&(t=Xe)){if(Xi(e))throw ud(),Error(C(418));for(;t;)sd(e,t),t=tn(t.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ye?tn(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=Xe;e;)e=tn(e.nextSibling)}function lr(){Xe=Ye=null,ee=!1}function Lo(e){dt===null?dt=[e]:dt.push(e)}var hm=Ht.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var c=a.refs;o===null?delete c[l]:c[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function wa(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ou(e){var t=e._init;return t(e._payload)}function cd(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function a(f,m){return f=ln(f,m),f.index=0,f.sibling=null,f}function l(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,m,y,w){return m===null||m.tag!==6?(m=ui(y,f.mode,w),m.return=f,m):(m=a(m,y),m.return=f,m)}function u(f,m,y,w){var S=y.type;return S===$n?x(f,m,y.props.children,w,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&ou(S)===m.type)?(w=a(m,y.props),w.ref=kr(f,m,y),w.return=f,w):(w=Fa(y.type,y.key,y.props,null,f.mode,w),w.ref=kr(f,m,y),w.return=f,w)}function p(f,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ci(y,f.mode,w),m.return=f,m):(m=a(m,y.children||[]),m.return=f,m)}function x(f,m,y,w,S){return m===null||m.tag!==7?(m=Cn(y,f.mode,w,S),m.return=f,m):(m=a(m,y),m.return=f,m)}function i(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ui(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:return y=Fa(m.type,m.key,m.props,null,f.mode,y),y.ref=kr(f,null,m),y.return=f,y;case Dn:return m=ci(m,f.mode,y),m.return=f,m;case Ut:var w=m._init;return i(f,w(m._payload),y)}if(Tr(m)||yr(m))return m=Cn(m,f.mode,y,null),m.return=f,m;wa(f,m)}return null}function s(f,m,y,w){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:c(f,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ca:return y.key===S?u(f,m,y,w):null;case Dn:return y.key===S?p(f,m,y,w):null;case Ut:return S=y._init,s(f,m,S(y._payload),w)}if(Tr(y)||yr(y))return S!==null?null:x(f,m,y,w,null);wa(f,y)}return null}function d(f,m,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(y)||null,c(m,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ca:return f=f.get(w.key===null?y:w.key)||null,u(m,f,w,S);case Dn:return f=f.get(w.key===null?y:w.key)||null,p(m,f,w,S);case Ut:var N=w._init;return d(f,m,y,N(w._payload),S)}if(Tr(w)||yr(w))return f=f.get(y)||null,x(m,f,w,S,null);wa(m,w)}return null}function g(f,m,y,w){for(var S=null,N=null,T=m,P=m=0,j=null;T!==null&&P<y.length;P++){T.index>P?(j=T,T=null):j=T.sibling;var M=s(f,T,y[P],w);if(M===null){T===null&&(T=j);break}e&&T&&M.alternate===null&&t(f,T),m=l(M,m,P),N===null?S=M:N.sibling=M,N=M,T=j}if(P===y.length)return n(f,T),ee&&hn(f,P),S;if(T===null){for(;P<y.length;P++)T=i(f,y[P],w),T!==null&&(m=l(T,m,P),N===null?S=T:N.sibling=T,N=T);return ee&&hn(f,P),S}for(T=r(f,T);P<y.length;P++)j=d(T,f,P,y[P],w),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?P:j.key),m=l(j,m,P),N===null?S=j:N.sibling=j,N=j);return e&&T.forEach(function(z){return t(f,z)}),ee&&hn(f,P),S}function v(f,m,y,w){var S=yr(y);if(typeof S!="function")throw Error(C(150));if(y=S.call(y),y==null)throw Error(C(151));for(var N=S=null,T=m,P=m=0,j=null,M=y.next();T!==null&&!M.done;P++,M=y.next()){T.index>P?(j=T,T=null):j=T.sibling;var z=s(f,T,M.value,w);if(z===null){T===null&&(T=j);break}e&&T&&z.alternate===null&&t(f,T),m=l(z,m,P),N===null?S=z:N.sibling=z,N=z,T=j}if(M.done)return n(f,T),ee&&hn(f,P),S;if(T===null){for(;!M.done;P++,M=y.next())M=i(f,M.value,w),M!==null&&(m=l(M,m,P),N===null?S=M:N.sibling=M,N=M);return ee&&hn(f,P),S}for(T=r(f,T);!M.done;P++,M=y.next())M=d(T,f,P,M.value,w),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?P:M.key),m=l(M,m,P),N===null?S=M:N.sibling=M,N=M);return e&&T.forEach(function(de){return t(f,de)}),ee&&hn(f,P),S}function _(f,m,y,w){if(typeof y=="object"&&y!==null&&y.type===$n&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ca:e:{for(var S=y.key,N=m;N!==null;){if(N.key===S){if(S=y.type,S===$n){if(N.tag===7){n(f,N.sibling),m=a(N,y.props.children),m.return=f,f=m;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&ou(S)===N.type){n(f,N.sibling),m=a(N,y.props),m.ref=kr(f,N,y),m.return=f,f=m;break e}n(f,N);break}else t(f,N);N=N.sibling}y.type===$n?(m=Cn(y.props.children,f.mode,w,y.key),m.return=f,f=m):(w=Fa(y.type,y.key,y.props,null,f.mode,w),w.ref=kr(f,m,y),w.return=f,f=w)}return o(f);case Dn:e:{for(N=y.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),m=a(m,y.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=ci(y,f.mode,w),m.return=f,f=m}return o(f);case Ut:return N=y._init,_(f,m,N(y._payload),w)}if(Tr(y))return g(f,m,y,w);if(yr(y))return v(f,m,y,w);wa(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),m=a(m,y),m.return=f,f=m):(n(f,m),m=ui(y,f.mode,w),m.return=f,f=m),o(f)):n(f,m)}return _}var ir=cd(!0),dd=cd(!1),nl=cn(null),rl=null,Yn=null,Ro=null;function Oo(){Ro=Yn=rl=null}function Do(e){var t=nl.current;q(nl),e._currentValue=t}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){rl=e,Ro=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(rl===null)throw Error(C(308));Yn=e,rl.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var wn=null;function $o(e){wn===null?wn=[e]:wn.push(e)}function fd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,$o(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ft(e,n)}return a=r.interleaved,a===null?(t.next=t,$o(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ft(e,n)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ao(e,n)}}function su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,r){var a=e.updateQueue;Xt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var u=c,p=u.next;u.next=null,o===null?l=p:o.next=p,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==o&&(c===null?x.firstBaseUpdate=p:c.next=p,x.lastBaseUpdate=u))}if(l!==null){var i=a.baseState;o=0,x=p=u=null,c=l;do{var s=c.lane,d=c.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:d,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var g=e,v=c;switch(s=t,d=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){i=g.call(d,i,s);break e}i=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,s=typeof g=="function"?g.call(d,i,s):g,s==null)break e;i=re({},i,s);break e;case 2:Xt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,s=a.effects,s===null?a.effects=[c]:s.push(c))}else d={eventTime:d,lane:s,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(p=x=d,u=i):x=x.next=d,o|=s;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;s=c,c=s.next,s.next=null,a.lastBaseUpdate=s,a.shared.pending=null}}while(!0);if(x===null&&(u=i),a.baseState=u,a.firstBaseUpdate=p,a.lastBaseUpdate=x,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);bn|=o,e.lanes=o,e.memoizedState=i}}function uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var oa={},Ct=cn(oa),Zr=cn(oa),Jr=cn(oa);function kn(e){if(e===oa)throw Error(C(174));return e}function Bo(e,t){switch(Z(Jr,t),Z(Zr,e),Z(Ct,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bi(t,e)}q(Ct),Z(Ct,t)}function or(){q(Ct),q(Zr),q(Jr)}function md(e){kn(Jr.current);var t=kn(Ct.current),n=bi(t,e.type);t!==n&&(Z(Zr,e),Z(Ct,n))}function Ho(e){Zr.current===e&&(q(Ct),q(Zr))}var te=cn(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=[];function Go(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}var La=Ht.ReactCurrentDispatcher,ai=Ht.ReactCurrentBatchConfig,Tn=0,ne=null,ge=null,_e=null,il=!1,Lr=!1,qr=0,gm=0;function Ae(){throw Error(C(321))}function Vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Uo(e,t,n,r,a,l){if(Tn=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,La.current=e===null||e.memoizedState===null?_m:wm,e=n(r,a),Lr){l=0;do{if(Lr=!1,qr=0,25<=l)throw Error(C(301));l+=1,_e=ge=null,t.updateQueue=null,La.current=km,e=n(r,a)}while(Lr)}if(La.current=ol,t=ge!==null&&ge.next!==null,Tn=0,_e=ge=ne=null,il=!1,t)throw Error(C(300));return e}function Xo(){var e=qr!==0;return qr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ne.memoizedState=_e=e:_e=_e.next=e,_e}function lt(){if(ge===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=_e===null?ne.memoizedState:_e.next;if(t!==null)_e=t,ge=e;else{if(e===null)throw Error(C(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},_e===null?ne.memoizedState=_e=e:_e=_e.next=e}return _e}function ea(e,t){return typeof t=="function"?t(e):t}function li(e){var t=lt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ge,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var c=o=null,u=null,p=l;do{var x=p.lane;if((Tn&x)===x)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var i={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(c=u=i,o=r):u=u.next=i,ne.lanes|=x,bn|=x}p=p.next}while(p!==null&&p!==l);u===null?o=r:u.next=c,mt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,ne.lanes|=l,bn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ii(e){var t=lt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);mt(l,t.memoizedState)||(Oe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function hd(){}function gd(e,t){var n=ne,r=lt(),a=t(),l=!mt(r.memoizedState,a);if(l&&(r.memoizedState=a,Oe=!0),r=r.queue,Yo(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,ta(9,vd.bind(null,n,r,a,t),void 0,null),we===null)throw Error(C(349));Tn&30||yd(n,t,a)}return a}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vd(e,t,n,r){t.value=n,t.getSnapshot=r,_d(t)&&wd(e)}function xd(e,t,n){return n(function(){_d(t)&&wd(e)})}function _d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function wd(e){var t=Ft(e,1);t!==null&&pt(t,e,1,-1)}function cu(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t.queue=e,e=e.dispatch=xm.bind(null,ne,e),[t.memoizedState,e]}function ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kd(){return lt().memoizedState}function Ra(e,t,n,r){var a=xt();ne.flags|=e,a.memoizedState=ta(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var a=lt();r=r===void 0?null:r;var l=void 0;if(ge!==null){var o=ge.memoizedState;if(l=o.destroy,r!==null&&Vo(r,o.deps)){a.memoizedState=ta(t,n,l,r);return}}ne.flags|=e,a.memoizedState=ta(1|t,n,l,r)}function du(e,t){return Ra(8390656,8,e,t)}function Yo(e,t){return Al(2048,8,e,t)}function Sd(e,t){return Al(4,2,e,t)}function Cd(e,t){return Al(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,Ad.bind(null,t,e),n)}function Qo(){}function Td(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ed(e,t,n){return Tn&21?(mt(n,t)||(n=zc(),ne.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function ym(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{Y=n,ai.transition=r}}function Pd(){return lt().memoizedState}function vm(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Id(e))jd(t,n);else if(n=fd(e,t,n,r),n!==null){var a=Ie();pt(n,e,r,a),Md(n,t,r)}}function xm(e,t,n){var r=an(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Id(e))jd(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,c=l(o,n);if(a.hasEagerState=!0,a.eagerState=c,mt(c,o)){var u=t.interleaved;u===null?(a.next=a,$o(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=fd(e,t,a,r),n!==null&&(a=Ie(),pt(n,e,r,a),Md(n,t,r))}}function Id(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function jd(e,t){Lr=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Md(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ao(e,n)}}var ol={readContext:at,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},_m={readContext:at,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vm.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:cu,useDebugValue:Qo,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=cu(!1),t=e[0];return e=ym.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,a=xt();if(ee){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),we===null)throw Error(C(349));Tn&30||yd(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,du(xd.bind(null,r,l,e),[e]),r.flags|=2048,ta(9,vd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=xt(),t=we.identifierPrefix;if(ee){var n=Rt,r=Lt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:at,useCallback:Td,useContext:at,useEffect:Yo,useImperativeHandle:Nd,useInsertionEffect:Sd,useLayoutEffect:Cd,useMemo:bd,useReducer:li,useRef:kd,useState:function(){return li(ea)},useDebugValue:Qo,useDeferredValue:function(e){var t=lt();return Ed(t,ge.memoizedState,e)},useTransition:function(){var e=li(ea)[0],t=lt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:gd,useId:Pd,unstable_isNewReconciler:!1},km={readContext:at,useCallback:Td,useContext:at,useEffect:Yo,useImperativeHandle:Nd,useInsertionEffect:Sd,useLayoutEffect:Cd,useMemo:bd,useReducer:ii,useRef:kd,useState:function(){return ii(ea)},useDebugValue:Qo,useDeferredValue:function(e){var t=lt();return ge===null?t.memoizedState=e:Ed(t,ge.memoizedState,e)},useTransition:function(){var e=ii(ea)[0],t=lt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:gd,useId:Pd,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nl={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),a=an(e),l=Ot(r,a);l.payload=t,n!=null&&(l.callback=n),t=nn(e,l,a),t!==null&&(pt(t,e,a,r),za(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),a=an(e),l=Ot(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=nn(e,l,a),t!==null&&(pt(t,e,a,r),za(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=an(e),a=Ot(n,r);a.tag=2,t!=null&&(a.callback=t),t=nn(e,a,r),t!==null&&(pt(t,e,r,n),za(t,e,r))}};function fu(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Yr(n,r)||!Yr(a,l):!0}function zd(e,t,n){var r=!1,a=sn,l=t.contextType;return typeof l=="object"&&l!==null?l=at(l):(a=$e(t)?An:be.current,r=t.contextTypes,l=(r=r!=null)?ar(e,a):sn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nl.enqueueReplaceState(t,t.state,null)}function Ki(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Fo(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=at(l):(l=$e(t)?An:be.current,a.context=ar(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Wi(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Nl.enqueueReplaceState(a,a.state,null),al(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=Kf(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function oi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function Ld(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,oo=r),Zi(e,t)},n}function Rd(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Zi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Zi(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sm;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Om.bind(null,e,t,n),t.then(e,e))}function hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var Cm=Ht.ReactCurrentOwner,Oe=!1;function Pe(e,t,n,r){t.child=e===null?dd(t,null,n,r):ir(t,e.child,n,r)}function yu(e,t,n,r,a){n=n.render;var l=t.ref;return tr(t,a),r=Uo(e,t,n,r,l,a),n=Xo(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ee&&n&&Mo(t),t.flags|=1,Pe(e,t,r,a),t.child)}function vu(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!ns(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Od(e,t,l,r,a)):(e=Fa(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Yr,n(o,r)&&e.ref===t.ref)return Bt(e,t,a)}return t.flags|=1,e=ln(l,r),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(Yr(l,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Bt(e,t,a)}return Ji(e,t,n,r,a)}function Dd(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Wn,Ue),Ue|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Wn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Z(Wn,Ue),Ue|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Z(Wn,Ue),Ue|=r;return Pe(e,t,a,n),t.child}function $d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,r,a){var l=$e(n)?An:be.current;return l=ar(t,l),tr(t,a),n=Uo(e,t,n,r,l,a),r=Xo(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ee&&r&&Mo(t),t.flags|=1,Pe(e,t,n,a),t.child)}function xu(e,t,n,r,a){if($e(n)){var l=!0;qa(t)}else l=!1;if(tr(t,a),t.stateNode===null)Oa(e,t),zd(t,n,r),Ki(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var u=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=at(p):(p=$e(n)?An:be.current,p=ar(t,p));var x=n.getDerivedStateFromProps,i=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";i||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==p)&&pu(t,o,r,p),Xt=!1;var s=t.memoizedState;o.state=s,al(t,r,o,a),u=t.memoizedState,c!==r||s!==u||De.current||Xt?(typeof x=="function"&&(Wi(t,n,x,r),u=t.memoizedState),(c=Xt||fu(t,n,c,r,s,u,p))?(i||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=p,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,pd(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:ut(t.type,c),o.props=p,i=t.pendingProps,s=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=$e(n)?An:be.current,u=ar(t,u));var d=n.getDerivedStateFromProps;(x=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==i||s!==u)&&pu(t,o,r,u),Xt=!1,s=t.memoizedState,o.state=s,al(t,r,o,a);var g=t.memoizedState;c!==i||s!==g||De.current||Xt?(typeof d=="function"&&(Wi(t,n,d,r),g=t.memoizedState),(p=Xt||fu(t,n,p,r,s,g,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=u,r=p):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return qi(e,t,n,r,l,a)}function qi(e,t,n,r,a,l){$d(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&au(t,n,!1),Bt(e,t,l);r=t.stateNode,Cm.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ir(t,e.child,null,l),t.child=ir(t,null,c,l)):Pe(e,t,c,l),t.memoizedState=r.state,a&&au(t,n,!0),t.child}function Fd(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),Bo(e,t.containerInfo)}function _u(e,t,n,r,a){return lr(),Lo(a),t.flags|=256,Pe(e,t,n,r),t.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function to(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bd(e,t,n){var r=t.pendingProps,a=te.current,l=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Z(te,a&1),e===null)return Yi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=El(o,r,0,null),e=Cn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=to(n),t.memoizedState=eo,e):Wo(t,o));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return Am(e,t,o,r,c,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,c=a.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ln(a,u),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?l=ln(c,l):(l=Cn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?to(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=eo,r}return l=e.child,e=l.sibling,r=ln(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wo(e,t){return t=El({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ka(e,t,n,r){return r!==null&&Lo(r),ir(t,e.child,null,n),e=Wo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Am(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=oi(Error(C(422))),ka(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=El({mode:"visible",children:r.children},a,0,null),l=Cn(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&ir(t,e.child,null,o),t.child.memoizedState=to(o),t.memoizedState=eo,l);if(!(t.mode&1))return ka(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(C(419)),r=oi(l,r,void 0),ka(e,t,o,r)}if(c=(o&e.childLanes)!==0,Oe||c){if(r=we,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ft(e,a),pt(r,e,a,-1))}return ts(),r=oi(Error(C(421))),ka(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Dm.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Xe=tn(a.nextSibling),Ye=t,ee=!0,dt=null,e!==null&&(et[tt++]=Lt,et[tt++]=Rt,et[tt++]=Nn,Lt=e.id,Rt=e.overflow,Nn=t),t=Wo(t,r.children),t.flags|=4096,t)}function wu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function si(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Hd(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(Pe(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wu(e,n,t);else if(e.tag===19)wu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(te,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),si(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ll(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}si(t,!0,n,null,l);break;case"together":si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nm(e,t,n){switch(t.tag){case 3:Fd(t),lr();break;case 5:md(t);break;case 1:$e(t.type)&&qa(t);break;case 4:Bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Z(nl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Bd(e,t,n):(Z(te,te.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);Z(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,Dd(e,t,n)}return Bt(e,t,n)}var Gd,no,Vd,Ud;Gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};no=function(){};Vd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,kn(Ct.current);var l=null;switch(n){case"input":a=Ci(e,a),r=Ci(e,r),l=[];break;case"select":a=re({},a,{value:void 0}),r=re({},r,{value:void 0}),l=[];break;case"textarea":a=Ti(e,a),r=Ti(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Za)}Ei(n,r);var o;n=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var c=a[p];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Fr.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var u=r[p];if(c=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&u!==c&&(u!=null||c!=null))if(p==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(l=l||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&J("scroll",e),l||c===u||(l=[])):(l=l||[]).push(p,u))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}};Ud=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tm(e,t,n){var r=t.pendingProps;switch(zo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return $e(t.type)&&Ja(),Ne(t),null;case 3:return r=t.stateNode,or(),q(De),q(be),Go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_a(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(co(dt),dt=null))),no(e,t),Ne(t),null;case 5:Ho(t);var a=kn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ne(t),null}if(e=kn(Ct.current),_a(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[wt]=t,r[Kr]=l,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(a=0;a<Er.length;a++)J(Er[a],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Ps(r,l),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},J("invalid",r);break;case"textarea":js(r,l),J("invalid",r)}Ei(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&xa(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&xa(r.textContent,c,e),a=["children",""+c]):Fr.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":da(r),Is(r,l,!0);break;case"textarea":da(r),Ms(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Za)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[wt]=t,e[Kr]=r,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Pi(n,r),n){case"dialog":J("cancel",e),J("close",e),a=r;break;case"iframe":case"object":case"embed":J("load",e),a=r;break;case"video":case"audio":for(a=0;a<Er.length;a++)J(Er[a],e);a=r;break;case"source":J("error",e),a=r;break;case"img":case"image":case"link":J("error",e),J("load",e),a=r;break;case"details":J("toggle",e),a=r;break;case"input":Ps(e,r),a=Ci(e,r),J("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=re({},r,{value:void 0}),J("invalid",e);break;case"textarea":js(e,r),a=Ti(e,r),J("invalid",e);break;default:a=r}Ei(n,a),c=a;for(l in c)if(c.hasOwnProperty(l)){var u=c[l];l==="style"?kc(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_c(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Br(e,u):typeof u=="number"&&Br(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Fr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&J("scroll",e):u!=null&&xo(e,l,u,o))}switch(n){case"input":da(e),Is(e,r,!1);break;case"textarea":da(e),Ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Zn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Ud(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=kn(Jr.current),kn(Ct.current),_a(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(l=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ne(t),null;case 13:if(q(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Xe!==null&&t.mode&1&&!(t.flags&128))ud(),lr(),t.flags|=98560,l=!1;else if(l=_a(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[wt]=t}else lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),l=!1}else dt!==null&&(co(dt),dt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ye===0&&(ye=3):ts())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return or(),no(e,t),e===null&&Qr(t.stateNode.containerInfo),Ne(t),null;case 10:return Do(t.type._context),Ne(t),null;case 17:return $e(t.type)&&Ja(),Ne(t),null;case 19:if(q(te),l=t.memoizedState,l===null)return Ne(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Sr(l,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ll(e),o!==null){for(t.flags|=128,Sr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(te,te.current&1|2),t.child}e=e.sibling}l.tail!==null&&oe()>ur&&(t.flags|=128,r=!0,Sr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ee)return Ne(t),null}else 2*oe()-l.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,Sr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=oe(),t.sibling=null,n=te.current,Z(te,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function bm(e,t){switch(zo(t),t.tag){case 1:return $e(t.type)&&Ja(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),q(De),q(be),Go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ho(t),null;case 13:if(q(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(te),null;case 4:return or(),null;case 10:return Do(t.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var Sa=!1,Te=!1,Em=typeof WeakSet=="function"?WeakSet:Set,E=null;function Qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function ro(e,t,n){try{n()}catch(r){ae(e,t,r)}}var ku=!1;function Pm(e,t){if(Fi=Qa,e=Kc(),jo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,p=0,x=0,i=e,s=null;t:for(;;){for(var d;i!==n||a!==0&&i.nodeType!==3||(c=o+a),i!==l||r!==0&&i.nodeType!==3||(u=o+r),i.nodeType===3&&(o+=i.nodeValue.length),(d=i.firstChild)!==null;)s=i,i=d;for(;;){if(i===e)break t;if(s===n&&++p===a&&(c=o),s===l&&++x===r&&(u=o),(d=i.nextSibling)!==null)break;i=s,s=i.parentNode}i=d}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bi={focusedElem:e,selectionRange:n},Qa=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),_);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return g=ku,ku=!1,g}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&ro(t,n,l)}a=a.next}while(a!==r)}}function Tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ao(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xd(e){var t=e.alternate;t!==null&&(e.alternate=null,Xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Kr],delete t[Vi],delete t[fm],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Za));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}var ke=null,ct=!1;function Vt(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Te||Qn(n,t);case 6:var r=ke,a=ct;ke=null,Vt(e,t,n),ke=r,ct=a,ke!==null&&(ct?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ct?(e=ke,n=n.stateNode,e.nodeType===8?ti(e.parentNode,n):e.nodeType===1&&ti(e,n),Ur(e)):ti(ke,n.stateNode));break;case 4:r=ke,a=ct,ke=n.stateNode.containerInfo,ct=!0,Vt(e,t,n),ke=r,ct=a;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ro(n,t,o),a=a.next}while(a!==r)}Vt(e,t,n);break;case 1:if(!Te&&(Qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ae(n,t,c)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Vt(e,t,n),Te=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function Cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Em),t.forEach(function(r){var a=$m.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:ke=c.stateNode,ct=!1;break e;case 3:ke=c.stateNode.containerInfo,ct=!0;break e;case 4:ke=c.stateNode.containerInfo,ct=!0;break e}c=c.return}if(ke===null)throw Error(C(160));Qd(l,o,a),ke=null,ct=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(p){ae(a,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wd(t,e),t=t.sibling}function Wd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{Rr(3,e,e.return),Tl(3,e)}catch(v){ae(e,e.return,v)}try{Rr(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&Qn(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&Qn(n,n.return),e.flags&32){var a=e.stateNode;try{Br(a,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&yc(a,l),Pi(c,o);var p=Pi(c,l);for(o=0;o<u.length;o+=2){var x=u[o],i=u[o+1];x==="style"?kc(a,i):x==="dangerouslySetInnerHTML"?_c(a,i):x==="children"?Br(a,i):xo(a,x,i,p)}switch(c){case"input":Ai(a,l);break;case"textarea":vc(a,l);break;case"select":var s=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?Zn(a,!!l.multiple,d,!1):s!==!!l.multiple&&(l.defaultValue!=null?Zn(a,!!l.multiple,l.defaultValue,!0):Zn(a,!!l.multiple,l.multiple?[]:"",!1))}a[Kr]=l}catch(v){ae(e,e.return,v)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(v){ae(e,e.return,v)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Jo=oe())),r&4&&Cu(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(p=Te)||x,st(t,e),Te=p):st(t,e),vt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(E=e,x=e.child;x!==null;){for(i=E=x;E!==null;){switch(s=E,d=s.child,s.tag){case 0:case 11:case 14:case 15:Rr(4,s,s.return);break;case 1:Qn(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Qn(s,s.return);break;case 22:if(s.memoizedState!==null){Nu(i);continue}}d!==null?(d.return=s,E=d):Nu(i)}x=x.sibling}e:for(x=null,i=e;;){if(i.tag===5){if(x===null){x=i;try{a=i.stateNode,p?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=i.stateNode,u=i.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=wc("display",o))}catch(v){ae(e,e.return,v)}}}else if(i.tag===6){if(x===null)try{i.stateNode.nodeValue=p?"":i.memoizedProps}catch(v){ae(e,e.return,v)}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;x===i&&(x=null),i=i.return}x===i&&(x=null),i.sibling.return=i.return,i=i.sibling}}break;case 19:st(t,e),vt(e),r&4&&Cu(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Br(a,""),r.flags&=-33);var l=Su(e);io(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,c=Su(e);lo(e,c,o);break;default:throw Error(C(161))}}catch(u){ae(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){E=e,Kd(e)}function Kd(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var a=E,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Sa;if(!o){var c=a.alternate,u=c!==null&&c.memoizedState!==null||Te;c=Sa;var p=Te;if(Sa=o,(Te=u)&&!p)for(E=a;E!==null;)o=E,u=o.child,o.tag===22&&o.memoizedState!==null?Tu(a):u!==null?(u.return=o,E=u):Tu(a);for(;l!==null;)E=l,Kd(l),l=l.sibling;E=a,Sa=c,Te=p}Au(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,E=l):Au(e)}}function Au(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||Tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&uu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uu(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var i=x.dehydrated;i!==null&&Ur(i)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Te||t.flags&512&&ao(t)}catch(s){ae(t,t.return,s)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Nu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Tu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tl(4,t)}catch(u){ae(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){ae(t,a,u)}}var l=t.return;try{ao(t)}catch(u){ae(t,l,u)}break;case 5:var o=t.return;try{ao(t)}catch(u){ae(t,o,u)}}}catch(u){ae(t,t.return,u)}if(t===e){E=null;break}var c=t.sibling;if(c!==null){c.return=t.return,E=c;break}E=t.return}}var jm=Math.ceil,sl=Ht.ReactCurrentDispatcher,Ko=Ht.ReactCurrentOwner,rt=Ht.ReactCurrentBatchConfig,V=0,we=null,ce=null,Se=0,Ue=0,Wn=cn(0),ye=0,na=null,bn=0,bl=0,Zo=0,Or=null,Re=null,Jo=0,ur=1/0,Mt=null,ul=!1,oo=null,rn=null,Ca=!1,Kt=null,cl=0,Dr=0,so=null,Da=-1,$a=0;function Ie(){return V&6?oe():Da!==-1?Da:Da=oe()}function an(e){return e.mode&1?V&2&&Se!==0?Se&-Se:hm.transition!==null?($a===0&&($a=zc()),$a):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Bc(e.type)),e):1}function pt(e,t,n,r){if(50<Dr)throw Dr=0,so=null,Error(C(185));aa(e,n,r),(!(V&2)||e!==we)&&(e===we&&(!(V&2)&&(bl|=n),ye===4&&Qt(e,Se)),Fe(e,r),n===1&&V===0&&!(t.mode&1)&&(ur=oe()+500,Cl&&dn()))}function Fe(e,t){var n=e.callbackNode;hp(e,t);var r=Ya(e,e===we?Se:0);if(r===0)n!==null&&Rs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rs(n),t===1)e.tag===0?mm(bu.bind(null,e)):id(bu.bind(null,e)),cm(function(){!(V&6)&&dn()}),n=null;else{switch(Lc(r)){case 1:n=Co;break;case 4:n=jc;break;case 16:n=Xa;break;case 536870912:n=Mc;break;default:n=Xa}n=af(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if(Da=-1,$a=0,V&6)throw Error(C(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=Ya(e,e===we?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var a=V;V|=2;var l=qd();(we!==e||Se!==t)&&(Mt=null,ur=oe()+500,Sn(e,t));do try{Lm();break}catch(c){Jd(e,c)}while(!0);Oo(),sl.current=l,V=a,ce!==null?t=0:(we=null,Se=0,t=ye)}if(t!==0){if(t===2&&(a=Li(e),a!==0&&(r=a,t=uo(e,a))),t===1)throw n=na,Sn(e,0),Qt(e,r),Fe(e,oe()),n;if(t===6)Qt(e,r);else{if(a=e.current.alternate,!(r&30)&&!Mm(a)&&(t=dl(e,r),t===2&&(l=Li(e),l!==0&&(r=l,t=uo(e,l))),t===1))throw n=na,Sn(e,0),Qt(e,r),Fe(e,oe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:gn(e,Re,Mt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=Jo+500-oe(),10<t)){if(Ya(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Gi(gn.bind(null,e,Re,Mt),t);break}gn(e,Re,Mt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-ft(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jm(r/1960))-r,10<r){e.timeoutHandle=Gi(gn.bind(null,e,Re,Mt),r);break}gn(e,Re,Mt);break;case 5:gn(e,Re,Mt);break;default:throw Error(C(329))}}}return Fe(e,oe()),e.callbackNode===n?Zd.bind(null,e):null}function uo(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=dl(e,t),e!==2&&(t=Re,Re=n,t!==null&&co(t)),e}function co(e){Re===null?Re=e:Re.push.apply(Re,e)}function Mm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!mt(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Zo,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function bu(e){if(V&6)throw Error(C(327));nr();var t=Ya(e,0);if(!(t&1))return Fe(e,oe()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=Li(e);r!==0&&(t=r,n=uo(e,r))}if(n===1)throw n=na,Sn(e,0),Qt(e,t),Fe(e,oe()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Re,Mt),Fe(e,oe()),null}function qo(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(ur=oe()+500,Cl&&dn())}}function En(e){Kt!==null&&Kt.tag===0&&!(V&6)&&nr();var t=V;V|=1;var n=rt.transition,r=Y;try{if(rt.transition=null,Y=1,e)return e()}finally{Y=r,rt.transition=n,V=t,!(V&6)&&dn()}}function es(){Ue=Wn.current,q(Wn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,um(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(zo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ja();break;case 3:or(),q(De),q(be),Go();break;case 5:Ho(r);break;case 4:or();break;case 13:q(te);break;case 19:q(te);break;case 10:Do(r.type._context);break;case 22:case 23:es()}n=n.return}if(we=e,ce=e=ln(e.current,null),Se=Ue=t,ye=0,na=null,Zo=bl=bn=0,Re=Or=null,wn!==null){for(t=0;t<wn.length;t++)if(n=wn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}wn=null}return e}function Jd(e,t){do{var n=ce;try{if(Oo(),La.current=ol,il){for(var r=ne.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}il=!1}if(Tn=0,_e=ge=ne=null,Lr=!1,qr=0,Ko.current=null,n===null||n.return===null){ye=1,na=t,ce=null;break}e:{var l=e,o=n.return,c=n,u=t;if(t=Se,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,x=c,i=x.tag;if(!(x.mode&1)&&(i===0||i===11||i===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var d=hu(o);if(d!==null){d.flags&=-257,gu(d,o,c,l,t),d.mode&1&&mu(l,p,t),t=d,u=p;var g=t.updateQueue;if(g===null){var v=new Set;v.add(u),t.updateQueue=v}else g.add(u);break e}else{if(!(t&1)){mu(l,p,t),ts();break e}u=Error(C(426))}}else if(ee&&c.mode&1){var _=hu(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),gu(_,o,c,l,t),Lo(sr(u,c));break e}}l=u=sr(u,c),ye!==4&&(ye=2),Or===null?Or=[l]:Or.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ld(l,u,t);su(l,f);break e;case 1:c=u;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(rn===null||!rn.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Rd(l,c,t);su(l,w);break e}}l=l.return}while(l!==null)}tf(n)}catch(S){t=S,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function qd(){var e=sl.current;return sl.current=ol,e===null?ol:e}function ts(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(bn&268435455)&&!(bl&268435455)||Qt(we,Se)}function dl(e,t){var n=V;V|=2;var r=qd();(we!==e||Se!==t)&&(Mt=null,Sn(e,t));do try{zm();break}catch(a){Jd(e,a)}while(!0);if(Oo(),V=n,sl.current=r,ce!==null)throw Error(C(261));return we=null,Se=0,ye}function zm(){for(;ce!==null;)ef(ce)}function Lm(){for(;ce!==null&&!ip();)ef(ce)}function ef(e){var t=rf(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?tf(e):ce=t,Ko.current=null}function tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bm(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,ce=null;return}}else if(n=Tm(n,t,Ue),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);ye===0&&(ye=5)}function gn(e,t,n){var r=Y,a=rt.transition;try{rt.transition=null,Y=1,Rm(e,t,n,r)}finally{rt.transition=a,Y=r}return null}function Rm(e,t,n,r){do nr();while(Kt!==null);if(V&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(gp(e,l),e===we&&(ce=we=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,af(Xa,function(){return nr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=rt.transition,rt.transition=null;var o=Y;Y=1;var c=V;V|=4,Ko.current=null,Pm(e,n),Wd(n,e),nm(Bi),Qa=!!Fi,Bi=Fi=null,e.current=n,Im(n),op(),V=c,Y=o,rt.transition=l}else e.current=n;if(Ca&&(Ca=!1,Kt=e,cl=a),l=e.pendingLanes,l===0&&(rn=null),cp(n.stateNode),Fe(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ul)throw ul=!1,e=oo,oo=null,e;return cl&1&&e.tag!==0&&nr(),l=e.pendingLanes,l&1?e===so?Dr++:(Dr=0,so=e):Dr=0,dn(),null}function nr(){if(Kt!==null){var e=Lc(cl),t=rt.transition,n=Y;try{if(rt.transition=null,Y=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,cl=0,V&6)throw Error(C(331));var a=V;for(V|=4,E=e.current;E!==null;){var l=E,o=l.child;if(E.flags&16){var c=l.deletions;if(c!==null){for(var u=0;u<c.length;u++){var p=c[u];for(E=p;E!==null;){var x=E;switch(x.tag){case 0:case 11:case 15:Rr(8,x,l)}var i=x.child;if(i!==null)i.return=x,E=i;else for(;E!==null;){x=E;var s=x.sibling,d=x.return;if(Xd(x),x===p){E=null;break}if(s!==null){s.return=d,E=s;break}E=d}}}var g=l.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}E=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Rr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var m=e.current;for(E=m;E!==null;){o=E;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,E=y;else e:for(o=m;E!==null;){if(c=E,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Tl(9,c)}}catch(S){ae(c,c.return,S)}if(c===o){E=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,E=w;break e}E=c.return}}if(V=a,dn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(xl,e)}catch{}r=!0}return r}finally{Y=n,rt.transition=t}}return!1}function Eu(e,t,n){t=sr(n,t),t=Ld(e,t,1),e=nn(e,t,1),t=Ie(),e!==null&&(aa(e,1,t),Fe(e,t))}function ae(e,t,n){if(e.tag===3)Eu(e,e,n);else for(;t!==null;){if(t.tag===3){Eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=sr(n,e),e=Rd(t,e,1),t=nn(t,e,1),e=Ie(),t!==null&&(aa(t,1,e),Fe(t,e));break}}t=t.return}}function Om(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Se&n)===n&&(ye===4||ye===3&&(Se&130023424)===Se&&500>oe()-Jo?Sn(e,0):Zo|=n),Fe(e,t)}function nf(e,t){t===0&&(e.mode&1?(t=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):t=1);var n=Ie();e=Ft(e,t),e!==null&&(aa(e,t,n),Fe(e,n))}function Dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nf(e,n)}function $m(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),nf(e,n)}var rf;rf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Nm(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,ee&&t.flags&1048576&&od(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oa(e,t),e=t.pendingProps;var a=ar(t,be.current);tr(t,n),a=Uo(null,t,r,e,a,n);var l=Xo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(l=!0,qa(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Fo(t),a.updater=Nl,t.stateNode=a,a._reactInternals=t,Ki(t,r,e,n),t=qi(null,t,r,!0,l,n)):(t.tag=0,ee&&l&&Mo(t),Pe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oa(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Bm(r),e=ut(r,e),a){case 0:t=Ji(null,t,r,e,n);break e;case 1:t=xu(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=vu(null,t,r,ut(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),Ji(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),xu(e,t,r,a,n);case 3:e:{if(Fd(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,a=l.element,pd(e,t),al(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=sr(Error(C(423)),t),t=_u(e,t,r,n,a);break e}else if(r!==a){a=sr(Error(C(424)),t),t=_u(e,t,r,n,a);break e}else for(Xe=tn(t.stateNode.containerInfo.firstChild),Ye=t,ee=!0,dt=null,n=dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===a){t=Bt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return md(t),e===null&&Yi(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Hi(r,a)?o=null:l!==null&&Hi(r,l)&&(t.flags|=32),$d(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&Yi(t),null;case 13:return Bd(e,t,n);case 4:return Bo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),yu(e,t,r,a,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,Z(nl,r._currentValue),r._currentValue=o,l!==null)if(mt(l.value,o)){if(l.children===a.children&&!De.current){t=Bt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){o=l.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ot(-1,n&-n),u.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?u.next=u:(u.next=x.next,x.next=u),p.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Qi(l.return,n,t),c.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(C(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Pe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,tr(t,n),a=at(a),r=r(a),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,a=ut(r,t.pendingProps),a=ut(r.type,a),vu(e,t,r,a,n);case 15:return Od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),Oa(e,t),t.tag=1,$e(r)?(e=!0,qa(t)):e=!1,tr(t,n),zd(t,r,a),Ki(t,r,a,n),qi(null,t,r,!0,e,n);case 19:return Hd(e,t,n);case 22:return Dd(e,t,n)}throw Error(C(156,t.tag))};function af(e,t){return Ic(e,t)}function Fm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new Fm(e,t,n,r)}function ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bm(e){if(typeof e=="function")return ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wo)return 11;if(e===ko)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fa(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")ns(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case $n:return Cn(n.children,a,l,t);case _o:o=8,a|=8;break;case _i:return e=nt(12,n,t,a|2),e.elementType=_i,e.lanes=l,e;case wi:return e=nt(13,n,t,a),e.elementType=wi,e.lanes=l,e;case ki:return e=nt(19,n,t,a),e.elementType=ki,e.lanes=l,e;case mc:return El(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fc:o=10;break e;case pc:o=9;break e;case wo:o=11;break e;case ko:o=14;break e;case Ut:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=nt(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Cn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function El(e,t,n,r){return e=nt(22,e,r,t),e.elementType=mc,e.lanes=n,e.stateNode={isHidden:!1},e}function ui(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function ci(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hm(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function rs(e,t,n,r,a,l,o,c,u){return e=new Hm(e,t,n,c,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=nt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(l),e}function Gm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lf(e){if(!e)return sn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if($e(n))return ld(e,n,t)}return t}function of(e,t,n,r,a,l,o,c,u){return e=rs(n,r,!0,e,a,l,o,c,u),e.context=lf(null),n=e.current,r=Ie(),a=an(n),l=Ot(r,a),l.callback=t??null,nn(n,l,a),e.current.lanes=a,aa(e,a,r),Fe(e,r),e}function Pl(e,t,n,r){var a=t.current,l=Ie(),o=an(a);return n=lf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(a,t,o),e!==null&&(pt(e,a,o,l),za(e,a,o)),o}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function as(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function Vm(){return null}var sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ls(e){this._internalRoot=e}Il.prototype.render=ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Pl(e,t,null,null)};Il.prototype.unmount=ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Pl(null,e,null,null)}),t[$t]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&Fc(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function Um(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var p=fl(o);l.call(p)}}var o=of(t,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=o,e[$t]=o.current,Qr(e.nodeType===8?e.parentNode:e),En(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var p=fl(u);c.call(p)}}var u=rs(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=u,e[$t]=u.current,Qr(e.nodeType===8?e.parentNode:e),En(function(){Pl(t,u,n,r)}),u}function Ml(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var c=a;a=function(){var u=fl(o);c.call(u)}}Pl(t,o,e,a)}else o=Um(n,t,e,a,r);return fl(o)}Rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&(Ao(t,n|1),Fe(t,oe()),!(V&6)&&(ur=oe()+500,dn()))}break;case 13:En(function(){var r=Ft(e,1);if(r!==null){var a=Ie();pt(r,e,1,a)}}),as(e,1)}};No=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Ie();pt(t,e,134217728,n)}as(e,134217728)}};Oc=function(e){if(e.tag===13){var t=an(e),n=Ft(e,t);if(n!==null){var r=Ie();pt(n,e,t,r)}as(e,t)}};Dc=function(){return Y};$c=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ji=function(e,t,n){switch(t){case"input":if(Ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Sl(r);if(!a)throw Error(C(90));gc(r),Ai(r,a)}}}break;case"textarea":vc(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};Ac=qo;Nc=En;var Xm={usingClientEntryPoint:!1,Events:[ia,Gn,Sl,Sc,Cc,qo]},Cr={findFiberByHostInstance:_n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ym={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ec(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||Vm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Aa.isDisabled&&Aa.supportsFiber)try{xl=Aa.inject(Ym),St=Aa}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(t))throw Error(C(200));return Gm(e,t,null,n)};We.createRoot=function(e,t){if(!is(e))throw Error(C(299));var n=!1,r="",a=sf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=rs(e,1,!1,null,null,n,!1,r,a),e[$t]=t.current,Qr(e.nodeType===8?e.parentNode:e),new ls(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ec(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return En(e)};We.hydrate=function(e,t,n){if(!jl(t))throw Error(C(200));return Ml(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!is(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=sf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=of(t,null,e,1,n??null,a,!1,l,o),e[$t]=t.current,Qr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Il(t)};We.render=function(e,t,n){if(!jl(t))throw Error(C(200));return Ml(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!jl(e))throw Error(C(40));return e._reactRootContainer?(En(function(){Ml(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};We.unstable_batchedUpdates=qo;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ml(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf)}catch(e){console.error(e)}}uf(),sc.exports=We;var It=sc.exports,ju=It;vi.createRoot=ju.createRoot,vi.hydrateRoot=ju.hydrateRoot;const Mu=({onStart:e,onSettings:t,onHelp:n})=>h.jsxs("div",{className:"cg-main-menu",children:[h.jsxs("div",{className:"cg-menu-bg",children:[h.jsx("div",{className:"cg-menu-bg-gradient"}),h.jsx("div",{className:"cg-menu-bg-pattern"}),h.jsx("div",{className:"cg-menu-geass-symbols",children:h.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:h.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),h.jsxs("div",{className:"cg-menu-content",children:[h.jsxs("div",{className:"cg-menu-header",children:[h.jsxs("div",{className:"cg-menu-title-decoration",children:[h.jsx("div",{className:"cg-title-line-left"}),h.jsx("div",{className:"cg-title-ornament",children:h.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:h.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),h.jsx("div",{className:"cg-title-line-right"})]}),h.jsxs("h1",{className:"cg-game-title",children:[h.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),h.jsx("span",{className:"cg-title-divider",children:":"}),h.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),h.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),h.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[h.jsx("div",{className:"cg-title-line-left"}),h.jsx("div",{className:"cg-title-ornament",children:h.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[h.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),h.jsx("div",{className:"cg-title-line-right"})]})]}),h.jsxs("nav",{className:"cg-menu-nav",children:[h.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M8 5v14l11-7z"})})}),h.jsx("span",{className:"cg-button-text",children:"开始游戏"}),h.jsx("div",{className:"cg-button-shimmer"})]}),h.jsxs("button",{className:"cg-menu-button",onClick:t,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),h.jsx("span",{className:"cg-button-text",children:"设置"})]}),h.jsxs("button",{className:"cg-menu-button",onClick:n,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),h.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),h.jsx("footer",{className:"cg-menu-footer",children:h.jsx("div",{className:"cg-footer-decoration",children:h.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),h.jsx("style",{children:`
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
      `})]}),pl=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function Qm(e){return pl.find(t=>t.id===e)}function _t(e){if(!e)return"未知角色";const t=Qm(e);return(t==null?void 0:t.name)||e}const Wm=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},Km=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let di=null;const ml=()=>(di===null&&(di=Wm()),di),Zm=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:a})=>{const[l,o]=A.useState(!1),[c,u]=A.useState(r),[p,x]=A.useState(!1),[i,s]=A.useState(!0),d=A.useRef(null),g=A.useRef(null),[v]=A.useState(()=>Math.floor(Math.random()*4)+1),_=n||v,f=A.useMemo(()=>Km(t),[t]),m=A.useCallback((y=!0)=>`${`avatars/${e}/${_}`}-${f}.${y?"webp":"png"}`,[e,_,f]);return A.useEffect(()=>{if(r||c)return;const y=new IntersectionObserver(S=>{S.forEach(N=>{N.isIntersecting&&u(!0)})},{rootMargin:"50px",threshold:.1}),w=g.current;return w&&y.observe(w),()=>{w&&y.unobserve(w),y.disconnect()}},[r,c]),A.useEffect(()=>{if(!c)return;(async()=>{if(ml()&&i){const S=new Image;S.src=m(!0),S.onload=()=>{o(!0),a==null||a()},S.onerror=()=>{s(!1)}}else{const S=new Image;S.src=m(!1),S.onload=()=>{o(!0),a==null||a()},S.onerror=()=>{x(!0)}}})()},[c,m,a,i]),h.jsxs("div",{ref:g,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"transparent",position:"relative"},children:[!l&&!p&&h.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},children:h.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),p&&h.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#dc2626",fontSize:t*.2},children:"?"}),c&&h.jsxs("picture",{children:[ml()&&i&&h.jsx("source",{srcSet:m(!0),type:"image/webp"}),h.jsx("img",{ref:d,src:m(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:l?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),h.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class hl{static preloadCharacter(t){const n=["small","medium","large"],r=ml();for(let a=1;a<=4;a++)n.forEach(l=>{const o=`avatars/${t}/${a}-${l}.webp`,c=`avatars/${t}/${a}-${l}.png`;if(r&&!this.preloadedAvatars.has(o)){const u=new Image;u.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(c)){const u=new Image;u.src=c,this.preloadedAvatars.add(c)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(ml()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const c=new Image;c.src=o,this.preloadedAvatars.add(o)}}const l=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(l)){const o=new Image;o.src=l,this.preloadedAvatars.add(l)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}ie(hl,"preloadedAvatars",new Set);const os=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>h.jsx(Zm,{characterId:e,size:t,avatarNumber:n??1,priority:r}),Jm=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[a,l]=A.useState(null),[o]=A.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),c=pl.find(p=>p.id===e);A.useEffect(()=>{e&&hl.preloadAvatar(e,o[e])},[e,o]);const u=p=>{const x=o[p];t(p,x)};return h.jsxs("div",{className:"cg-character-select",children:[h.jsxs("div",{className:"cg-select-bg",children:[h.jsx("div",{className:"cg-select-bg-gradient"}),h.jsx("div",{className:"cg-select-bg-pattern"})]}),h.jsxs("div",{className:"cg-select-content",children:[h.jsxs("header",{className:"cg-select-header",children:[h.jsxs("button",{className:"cg-back-button",onClick:r,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),h.jsx("span",{children:"返回"})]}),h.jsx("h2",{className:"cg-select-title",children:h.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),h.jsx("div",{className:"cg-select-placeholder"})]}),h.jsx("div",{className:"cg-character-grid",children:pl.map(p=>{const x=e===p.id,i=a===p.id;return h.jsxs("div",{className:`cg-character-card ${x?"cg-selected":""} ${i?"cg-hovered":""}`,onClick:()=>u(p.id),onMouseEnter:()=>l(p.id),onMouseLeave:()=>l(null),children:[h.jsxs("div",{className:"cg-card-frame",children:[h.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),h.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),h.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),h.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),h.jsx("div",{className:"cg-character-preview",children:h.jsx(os,{characterId:p.id,size:300,avatarNumber:o[p.id],priority:a===p.id||e===p.id})}),h.jsxs("div",{className:"cg-character-info",children:[h.jsx("h3",{className:"cg-character-name",children:p.name}),h.jsx("p",{className:"cg-character-name-en",children:p.nameEn}),h.jsx("div",{className:"cg-character-skill",children:h.jsx("span",{className:"cg-skill-name",children:p.skill.name})})]}),x&&h.jsx("div",{className:"cg-selected-indicator",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:h.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),h.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${p.color}40 0%, transparent 70%)`}})]},p.id)})}),c&&h.jsx("div",{className:"cg-character-detail",children:h.jsxs("div",{className:"cg-detail-frame",children:[h.jsxs("div",{className:"cg-detail-content",children:[h.jsx("p",{className:"cg-detail-description",children:c.description}),h.jsxs("div",{className:"cg-detail-skill",children:[h.jsx("span",{className:"cg-skill-label",children:"技能:"}),h.jsx("span",{className:"cg-skill-value",children:c.skill.name}),h.jsx("p",{className:"cg-skill-desc",children:c.skill.description})]})]}),h.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[h.jsx("span",{children:"确认选择"}),h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),h.jsx("style",{children:`
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
      `})]})},qm="/liars-game/assets/cards/card-back.svg",pn={play:1500,aiPlay:1500,challenge:1500,dodge:1500,hit:1500,skip:1500,think:1e3},mn={play:3,aiPlay:3,challenge:5,dodge:4,hit:4,skip:2,think:1},zu={play:{duration:pn.play,priority:mn.play,interruptible:!1},aiPlay:{duration:pn.aiPlay,priority:mn.aiPlay,interruptible:!1},challenge:{duration:pn.challenge,priority:mn.challenge,interruptible:!0},dodge:{duration:pn.dodge,priority:mn.dodge,interruptible:!0},hit:{duration:pn.hit,priority:mn.hit,interruptible:!0},skip:{duration:pn.skip,priority:mn.skip,interruptible:!0},think:{duration:pn.think,priority:mn.think,interruptible:!0}},cr={play:"出牌",aiPlay:"出牌",challenge:"质疑",dodge:"闪避",hit:"命中",skip:"跳过",think:"思考中..."},Lu={MAX_QUEUE_SIZE:10,BUFFER_TIME:100},cf={lelouch:{id:"lelouch",displayName:"鲁鲁修",colorTheme:"#d4af37"},cc:{id:"cc",displayName:"C.C.",colorTheme:"#22c55e"},suzaku:{id:"suzaku",displayName:"朱雀",colorTheme:"#3b82f6"},kallen:{id:"kallen",displayName:"卡莲",colorTheme:"#dc2626"}},eh={player:null,ai:"cc",ai2:"suzaku",ai3:"kallen"},th={lelouch:null,cc:"ai",suzaku:"ai2",kallen:"ai3"};function fi(e,t,n){const r=cf[e];return{characterId:e,displayName:r.displayName,playerId:t,animationTexts:{...cr,...n},colorTheme:r.colorTheme}}const Ru={player:{characterId:"lelouch",displayName:"玩家",playerId:"player",animationTexts:{...cr},colorTheme:"#d4af37"},ai:fi("cc","ai"),ai2:fi("suzaku","ai2"),ai3:fi("kallen","ai3")};class nh{constructor(){ie(this,"registry");ie(this,"playerCharacterId",null);this.registry={...Ru}}setPlayerCharacter(t){this.playerCharacterId=t;const n=cf[t];this.registry.player={characterId:t,displayName:n.displayName,playerId:"player",animationTexts:{...cr},colorTheme:n.colorTheme}}getPlayerCharacterId(){return this.playerCharacterId}getCharacterConfig(t){return this.registry[t]}getPlayerIdByCharacterId(t){return th[t]}getCharacterIdByPlayerId(t){return eh[t]}getDisplayName(t){const n=this.registry[t];return(n==null?void 0:n.displayName)||"未知角色"}getColorTheme(t){const n=this.registry[t];return(n==null?void 0:n.colorTheme)||"#d4af37"}getAnimationText(t,n){var a;const r=this.registry[t];return((a=r==null?void 0:r.animationTexts)==null?void 0:a[n])||cr[n]}reset(){this.registry={...Ru},this.playerCharacterId=null}getRegistry(){return{...this.registry}}}const df=new nh,rh=e=>df.setPlayerCharacter(e),ah=e=>df.getPlayerIdByCharacterId(e),lh=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,On=e=>({type:null,text:"",startTime:0,duration:0,playerId:e});function ih(){const[e,t]=A.useState({player:On("player"),ai:On("ai"),ai2:On("ai2"),ai3:On("ai3")}),[n,r]=A.useState({playerId:null,type:null,text:"",startTime:0}),[a,l]=A.useState({items:[],current:null,isProcessing:!1}),[o,c]=A.useState({show:!1,targetId:null}),u=A.useRef({}),p=A.useRef(!1),x=A.useCallback((_,f,m)=>{const y=zu[f],w=m||cr[f];t(S=>({...S,[_]:{type:f,text:w,startTime:Date.now(),duration:y.duration,playerId:_}})),u.current[_]&&clearTimeout(u.current[_]),u.current[_]=setTimeout(()=>{t(S=>({...S,[_]:On(_)}))},y.duration)},[]),i=A.useCallback((_,f,m)=>{u.current.persistent&&clearTimeout(u.current.persistent),r({playerId:_,type:f,text:m,startTime:Date.now()})},[]),s=A.useCallback(_=>{u.current[_]&&(clearTimeout(u.current[_]),delete u.current[_]),t(f=>({...f,[_]:On(_)}))},[]),d=A.useCallback(()=>{u.current.persistent&&(clearTimeout(u.current.persistent),delete u.current.persistent),r({playerId:null,type:null,text:"",startTime:0})},[]),g=A.useCallback((_,f,m,y)=>{const w=zu[f],S={id:lh(),playerId:_,type:f,text:m||cr[f],duration:w.duration,priority:y??w.priority,timestamp:Date.now()};l(N=>N.items.length>=Lu.MAX_QUEUE_SIZE?(console.warn("[Animation Queue] Queue is full, dropping oldest item"),{...N,items:[...N.items.slice(1),S]}):{...N,items:[...N.items,S]})},[]);return A.useEffect(()=>{if(p.current||a.items.length===0||a.isProcessing)return;p.current=!0;const f=[...a.items].sort((m,y)=>y.priority-m.priority)[0];return l(m=>({...m,current:f,isProcessing:!0,items:m.items.filter(y=>y.id!==f.id)})),x(f.playerId,f.type,f.text),u.current.queue=setTimeout(()=>{l(m=>({...m,current:null,isProcessing:!1})),p.current=!1},f.duration+Lu.BUFFER_TIME),()=>{u.current.queue&&clearTimeout(u.current.queue)}},[a.items,a.isProcessing,x]),A.useEffect(()=>()=>{Object.values(u.current).forEach(_=>{clearTimeout(_)}),u.current={}},[]),{animation:e.player,animations:e,persistentAnimation:n,playerChallengeAnimation:o,setPlayerChallengeAnimation:c,triggerAnimation:x,triggerPersistentAnimation:i,clearAnimation:s,clearPersistentAnimation:d,queue:a,enqueueAnimation:g}}function oh(){return{id:"challenge_initiated",condition:e=>{const n=e.lastAction||"",r=n.includes("发起质疑")&&n.includes("向");return console.log("[Challenge Trigger] condition check:",{lastAction:n,matches:r}),r},animationType:"challenge",getText:()=>"质疑",getPlayerId:e=>{const t=e,n=t.lastAction||"",r=n.match(/^(.+?)向/),a=r?r[1]:"";return console.log("[Challenge Trigger] getPlayerId:",{lastAction:n,challengerName:a}),Ba(a,t)},getData:e=>{const t=e,n=t.lastAction||"",r=n.match(/向(.+?)发起质疑/),a=r?r[1]:"",l=n.match(/^(.+?)向/),o=l?l[1]:"",c=Ba(a,t),u=Ba(o,t);return console.log("[Challenge Trigger] getData:",{targetName:a,targetId:c,challengerName:o,challengerId:u}),{targetId:c,challengerId:u,targetName:a,challengerName:o}}}}function sh(){return{id:"challenge_skipped",condition:e=>(e.lastAction||"").includes("选择不质疑"),animationType:"skip",getText:()=>"跳过",getPlayerId:e=>{const t=e,r=(t.lastAction||"").match(/^(.+?)选择不质疑/),a=r?r[1]:"";return Ba(a,t)}}}function uh(){return{id:"geass_dodge",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&(t.geassResult.isDodge||!t.geassResult.hit))},animationType:"dodge",getText:()=>"闪避",getPlayerId:e=>{var n,r,a;return((n=e.geassResult)==null?void 0:n.victimId)||((a=(r=e.turnState)==null?void 0:r.playedCards)==null?void 0:a.playerId)||"player"}}}function ch(){return{id:"geass_hit",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&t.geassResult.hit)},animationType:"hit",getText:()=>"命中",getPlayerId:e=>{var n,r,a;return((n=e.geassResult)==null?void 0:n.victimId)||((a=(r=e.turnState)==null?void 0:r.playedCards)==null?void 0:a.playerId)||"player"}}}function dh(){return{id:"card_played",condition:e=>{const n=e.lastAction||"";return n.includes("出牌")||n.includes("出了")},animationType:"play",getText:()=>"出牌",getPlayerId:e=>{var n,r;return((r=(n=e.turnState)==null?void 0:n.playedCards)==null?void 0:r.playerId)||"player"}}}function Ba(e,t){var l;if(!e||e.trim()==="")return"player";const n=e.trim();if(n==="玩家")return"player";console.log("[resolvePlayerIdByName] 尝试匹配AI:",{trimmedName:n,aiPlayers:(l=t.aiPlayers)==null?void 0:l.map(o=>({id:o.id,name:o.name}))});for(const o of t.aiPlayers||[])if(o.name===n)return console.log("[resolvePlayerIdByName] 匹配成功:",o.id),o.id;const a={鲁鲁修:"lelouch","C.C.":"cc",朱雀:"suzaku",卡莲:"kallen"}[n];if(a){const o=ah(a);if(o)return console.log("[resolvePlayerIdByName] 通过角色ID匹配成功:",o),o}return console.warn(`[Animation Trigger] Could not resolve player ID for name: ${n}`),"player"}const Ou=[oh(),sh(),uh(),ch(),dh()];class fh{constructor(){ie(this,"triggers",new Map);Ou.forEach(t=>{this.triggers.set(t.id,t)})}register(t){this.triggers.set(t.id,t)}unregister(t){this.triggers.delete(t)}get(t){return this.triggers.get(t)}getAll(){return Array.from(this.triggers.values())}parseGameState(t){const n=t.lastAction;console.log("[parseGameState] 开始解析:",{lastAction:n,phase:t.phase});for(const r of this.triggers.values())if(console.log("[parseGameState] 检查触发器:",r.id),r.condition(t)){console.log("[parseGameState] 触发器匹配成功:",r.id);const a=r.getData?r.getData(t):{};return{type:r.id,playerId:r.getPlayerId(t),timestamp:Date.now(),data:{animationType:r.animationType,text:r.getText(t),...a}}}return console.log("[parseGameState] 没有匹配的触发器"),null}reset(){this.triggers.clear(),Ou.forEach(t=>{this.triggers.set(t.id,t)})}}const ph=new fh,mh=e=>ph.parseGameState(e),ff={lelouch:{displayName:"鲁鲁修",colorTheme:"#d4af37"},cc:{displayName:"C.C.",colorTheme:"#22c55e"},suzaku:{displayName:"朱雀",colorTheme:"#3b82f6"},kallen:{displayName:"卡莲",colorTheme:"#dc2626"}},Ar=e=>{var t;return e&&((t=ff[e])==null?void 0:t.displayName)||"未知角色"},Na=e=>{var t;return e&&((t=ff[e])==null?void 0:t.colorTheme)||"#d4af37"},Du=e=>e&&{play:"cg-anim-play",aiPlay:"cg-anim-aiPlay",challenge:"cg-anim-challenge",dodge:"cg-anim-dodge",hit:"cg-anim-hit",skip:"",think:""}[e]||"",$u=e=>e?`cg-action-${e}`:"",hh=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:a=["cc","suzaku","kallen"],aiAvatars:l={},onToggleCardSelection:o,onConfirmPlay:c,onPass:u,onChallenge:p,onBackToMenu:x,onLelouchSkill:i,gameLog:s=[],isProcessing:d=!1,canUseSkill:g=!0,aiThinkingState:v})=>{var G,U,ve,se,yt,ze,it,W,pe,jn,K,Ze,He,X,Tt,xe,me,Mn,hr,zn,sa,Ge,ss,us,cs,ds,fs,ps,ms,hs,gs,ys,vs,xs;const[_,f]=A.useState(!1),[m,y]=A.useState(!1),w=A.useRef(null),S=A.useRef(null),N=A.useRef(s.length),T=A.useRef(null),P=typeof window<"u"&&window.innerWidth<=768,j=A.useRef(null),{animations:M,persistentAnimation:z,playerChallengeAnimation:de,triggerAnimation:le,triggerPersistentAnimation:fe,clearPersistentAnimation:At,setPlayerChallengeAnimation:ht}=ih();if(A.useEffect(()=>{n&&rh(n)},[n]),A.useEffect(()=>{if(w.current&&s.length>N.current){const L=w.current;L.scrollTo({top:L.scrollHeight,behavior:"smooth"})}N.current=s.length},[s]),A.useEffect(()=>{if(!P||!m)return;const L=()=>{T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{y(!1)},3e3)};L();const he=S.current;if(he){const Ve=["click","touchstart","scroll"];return Ve.forEach(bt=>{he.addEventListener(bt,L)}),()=>{Ve.forEach(bt=>{he.removeEventListener(bt,L)}),T.current&&clearTimeout(T.current)}}return()=>{T.current&&clearTimeout(T.current)}},[m,P]),A.useEffect(()=>{if(!e)return;const{lastAction:L,phase:he,geassResult:Ve}=e;if(console.log("[GameTable Animation] useEffect triggered:",{lastAction:L,processedAction:j.current,phase:he}),L&&L===j.current){console.log("[GameTable Animation] 跳过重复动作");return}const bt=mh(e);if(console.log("[GameTable Animation] parseGameStateForAnimation result:",bt),bt){const{playerId:Je,data:Le}=bt,Et=Le==null?void 0:Le.animationType,Ln=(Le==null?void 0:Le.text)||"";if(console.log("[Animation] 触发:",{playerId:Je,type:Et,text:Ln}),L&&(j.current=L),Et==="play"||Et==="aiPlay")fe(Je,Et==="play"?"play":"aiPlay","出牌中..."),le(Je,Et,Ln||"出牌");else if(Et==="challenge"){const ot=Le==null?void 0:Le.targetId,Pt=Le==null?void 0:Le.challengerId;console.log("[Animation] 质疑动画:",{playerId:Je,targetId:ot,challengerId:Pt,isPlayer:Je==="player"}),Je==="player"&&ot?(ht({show:!0,targetId:ot}),le(Je,"challenge","质疑中...")):ot?(le(Je,"challenge","质疑中..."),le(ot,"challenge","被质疑")):le(Je,"challenge",Ln||"质疑")}else le(Je,Et,Ln)}he==="challenge"&&z.playerId&&setTimeout(()=>{At()},500),Ve!=null&&Ve.activated&&de.show&&setTimeout(()=>{ht({show:!1,targetId:null})},500)},[e,le,fe,At,ht]),A.useEffect(()=>{n&&hl.preloadAvatar(n,r),a.forEach(L=>{const he=l[L]||1;hl.preloadAvatar(L,he)})},[n,r,a,l]),!e)return null;const{phase:Nt,liarCard:b,playerStats:O,aiPlayers:k,turnState:B}=e,Q=Nt==="player_turn",gt=Nt==="challenge",Ee=e.playerHand||[],fn=(B==null?void 0:B.turnNumber)||1,Be=gt,Gt=()=>{t.length>0&&c()},Ll=()=>f(!0),mr=()=>{y(L=>!L)},Rl=L=>{f(!1),i==null||i(L)},Ol=L=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[L]||L,D=L=>L==="joker"?"#d4af37":L==="hearts"||L==="diamonds"?"#dc2626":"#1a1a24",I=n,R=I?Ar(I):"玩家",$=Na(I),H=(L,he,Ve,bt,Je,Le,Et=!1,Ln=!0,ot="player")=>{const Pt=M[ot],gf=Du((Pt==null?void 0:Pt.type)||null),_s=(v==null?void 0:v.isThinking)&&(v==null?void 0:v.aiId)===ot,Dl=z.playerId===ot&&z.type,yf=Dl?Du(z.type):"",ws=de.show&&ot==="player",ks=de.show&&de.targetId===ot,Ss=(Pt==null?void 0:Pt.text)||"",vf=Dl?z.text:"";return h.jsxs("div",{className:`cg-character ${Et?"cg-character-top":""} ${Ln?"":"cg-character-dead"} ${gf} ${yf} ${_s?"cg-character-thinking":""} ${ws?"cg-player-challenging":""} ${ks?"cg-being-challenged":""}`,children:[Ss&&h.jsx("div",{className:`cg-action-text ${$u(Pt.type)}`,children:Ss}),Dl&&h.jsx("div",{className:`cg-action-text ${$u(z.type)} cg-persistent-text`,children:vf}),ws&&h.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"质疑中..."}),ks&&h.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"被质疑"}),_s&&h.jsx("div",{className:"cg-thinking-indicator",children:h.jsx("span",{className:"cg-thinking-dots",children:"..."})}),h.jsx("div",{className:"cg-character-avatar",children:he&&h.jsx(os,{characterId:he,size:120,avatarNumber:Le,priority:!0})}),h.jsxs("div",{className:"cg-character-info",children:[h.jsx("div",{className:"cg-character-name",style:{color:Je},children:L}),h.jsxs("div",{className:"cg-character-stats",children:[h.jsx("span",{className:"cg-hp-display",children:Array(Ve).fill("❤").join("")}),h.jsxs("span",{className:"cg-card-count",children:["🃏",bt]})]})]})]})};return h.jsxs("div",{className:"cg-game-table",children:[h.jsx("div",{className:"cg-top-bar",children:h.jsxs("button",{className:`cg-log-toggle-btn-top ${m?"expanded":""}`,onClick:mr,"aria-label":m?"收起记录":"展开记录",children:[h.jsx("span",{className:"cg-log-toggle-icon",children:"📜"}),h.jsx("span",{className:"cg-log-toggle-text",children:"记录"}),!m&&s.length>0&&h.jsx("span",{className:"cg-log-badge",children:s.length})]})}),h.jsxs("div",{className:"cg-main-layout",children:[h.jsxs("div",{ref:S,className:`cg-log-panel ${m?"expanded":"collapsed"}`,children:[h.jsxs("div",{className:"cg-log-header",children:[h.jsx("span",{children:"📜 游戏记录"}),h.jsx("button",{className:"cg-log-close-btn mobile-only",onClick:mr,children:"✕"})]}),h.jsx("div",{ref:w,className:"cg-log-content",children:s.map((L,he)=>h.jsx("div",{className:`cg-log-item ${L.includes("质疑")?"challenge":""} ${L.includes("Geass")?"geass":""}`,children:L},he))})]}),m&&h.jsx("div",{className:"cg-log-overlay",onClick:mr}),h.jsxs("div",{className:"cg-game-area",children:[h.jsx("div",{className:"cg-ai-top",children:H(Ar((G=k==null?void 0:k[2])==null?void 0:G.character),((U=k==null?void 0:k[2])==null?void 0:U.character)||a[2],((se=(ve=k==null?void 0:k[2])==null?void 0:ve.stats)==null?void 0:se.hp)||0,((ze=(yt=k==null?void 0:k[2])==null?void 0:yt.hand)==null?void 0:ze.length)||0,Na((it=k==null?void 0:k[2])==null?void 0:it.character),l[((W=k==null?void 0:k[2])==null?void 0:W.character)||a[2]]||1,!0,((pe=k==null?void 0:k[2])==null?void 0:pe.isActive)!==!1&&(((K=(jn=k==null?void 0:k[2])==null?void 0:jn.stats)==null?void 0:K.hp)||0)>0,"ai3")}),h.jsxs("div",{className:"cg-middle-section",children:[h.jsx("div",{className:"cg-ai-left",children:H(Ar((Ze=k==null?void 0:k[0])==null?void 0:Ze.character),((He=k==null?void 0:k[0])==null?void 0:He.character)||a[0],((Tt=(X=k==null?void 0:k[0])==null?void 0:X.stats)==null?void 0:Tt.hp)||0,((me=(xe=k==null?void 0:k[0])==null?void 0:xe.hand)==null?void 0:me.length)||0,Na((Mn=k==null?void 0:k[0])==null?void 0:Mn.character),l[((hr=k==null?void 0:k[0])==null?void 0:hr.character)||a[0]]||1,!1,((zn=k==null?void 0:k[0])==null?void 0:zn.isActive)!==!1&&(((Ge=(sa=k==null?void 0:k[0])==null?void 0:sa.stats)==null?void 0:Ge.hp)||0)>0,"ai")}),h.jsx("div",{className:"cg-table-area",children:h.jsx("div",{className:"cg-table",children:h.jsx("div",{className:"cg-table-inner",children:B!=null&&B.playedCards?h.jsxs("div",{className:"cg-played",children:[h.jsxs("div",{className:"cg-played-name",children:[B.playedCards.playerId==="player"?R:B.playedCards.playerId.startsWith("ai")?Ar((ss=k==null?void 0:k.find(L=>{var he;return L.id===((he=B.playedCards)==null?void 0:he.playerId)}))==null?void 0:ss.character):"未知玩家"," ","出牌"]}),h.jsx("div",{className:"cg-cards",children:B.playedCards.actualCards.map(L=>h.jsx("div",{className:"cg-card-small cg-card-back",children:h.jsx("img",{src:qm,alt:"牌背"})},L.id))}),h.jsxs("div",{className:"cg-card-count-display",children:[B.playedCards.cardIds.length," 张牌"]})]}):h.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),h.jsx("div",{className:"cg-ai-right",children:H(Ar((us=k==null?void 0:k[1])==null?void 0:us.character),((cs=k==null?void 0:k[1])==null?void 0:cs.character)||a[1],((fs=(ds=k==null?void 0:k[1])==null?void 0:ds.stats)==null?void 0:fs.hp)||0,((ms=(ps=k==null?void 0:k[1])==null?void 0:ps.hand)==null?void 0:ms.length)||0,Na((hs=k==null?void 0:k[1])==null?void 0:hs.character),l[((gs=k==null?void 0:k[1])==null?void 0:gs.character)||a[1]]||1,!1,((ys=k==null?void 0:k[1])==null?void 0:ys.isActive)!==!1&&(((xs=(vs=k==null?void 0:k[1])==null?void 0:vs.stats)==null?void 0:xs.hp)||0)>0,"ai2")})]}),h.jsxs("div",{className:"cg-player-section",children:[h.jsx("div",{className:"cg-player-info",children:H(R,n,O.hp,Ee.length,$,r,!1,!0,"player")}),h.jsxs("div",{className:"cg-hand-section",children:[h.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,Ee.length*26+22)}px`},children:Ee.map((L,he)=>{const Ve=t.includes(L.id);return h.jsxs("button",{className:`cg-card ${Ve?"selected":""} ${!Q||d?"disabled":""}`,onClick:()=>o(L.id),style:{left:`${he*26}px`,transform:Ve?"translateY(-8px)":"none",zIndex:Ve?Ee.length+10:Ee.length-he},disabled:!Q||d,children:[h.jsxs("div",{className:"cg-card-face",children:[h.jsx("div",{style:{color:D(L.suit),fontSize:"13px"},children:L.rank}),h.jsx("div",{style:{color:D(L.suit),fontSize:"15px"},children:Ol(L.suit)})]}),Ve&&h.jsx("div",{className:"cg-check",children:"✓"})]},L.id)})}),n==="lelouch"&&h.jsx("button",{className:"cg-skill-btn",onClick:Ll,disabled:d||!g||!Q,children:g?"绝对命令":"已使用"})]})]})]})]}),h.jsxs("div",{className:"cg-bottom-bar",children:[h.jsx("div",{className:"cg-bottom-left",children:h.jsx("button",{className:"cg-back-btn",onClick:x,children:"← 主页面"})}),h.jsxs("div",{className:"cg-bottom-center",children:[!Be&&h.jsxs("div",{className:"cg-status-text",children:[Q&&t.length===0&&"请选择要出的牌",Q&&t.length>0&&`已选择 ${t.length} 张牌`,gt&&!Be&&"等待其他玩家质疑...",!Q&&!gt&&"AI回合中..."]}),h.jsxs("div",{className:"cg-action-buttons",children:[Q&&t.length>0&&h.jsxs("button",{className:"cg-btn cg-btn-play",onClick:Gt,disabled:d,children:["出牌 (",t.length,")"]}),Be&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:p,disabled:d,children:"⚔️ 质疑"}),h.jsx("button",{className:"cg-btn cg-btn-skip",onClick:u,disabled:d,children:"不质疑"})]})]})]}),h.jsxs("div",{className:"cg-bottom-right",children:[h.jsxs("div",{className:"cg-round-display",children:[h.jsx("div",{className:"cg-round-label",children:"回合"}),h.jsx("div",{className:"cg-round-number",children:fn})]}),h.jsxs("div",{className:"cg-liar-display",children:[h.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),h.jsx("div",{className:"cg-liar-value",children:b})]})]})]}),_&&h.jsx("div",{className:"cg-modal",children:h.jsxs("div",{className:"cg-modal-content",children:[h.jsx("h3",{children:"选择新的骗子牌"}),h.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(L=>h.jsx("button",{className:L===b?"current":"",onClick:()=>Rl(L),children:L},L))}),h.jsx("button",{className:"cg-btn-skip",onClick:()=>f(!1),children:"取消"})]})}),h.jsx("style",{children:`
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
        .cg-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          filter: grayscale(0.5);
        }
        .cg-btn:disabled:hover {
          transform: none;
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
      `})]})},gh=({isWin:e,turnNumber:t,onRestart:n,onMainMenu:r})=>{const[a,l]=A.useState(!1),[o,c]=A.useState(!1);A.useEffect(()=>{e&&l(!0);const p=setTimeout(()=>c(!0),1e3);return()=>clearTimeout(p)},[e]);const u=e?"lelouch":"cc";return h.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[h.jsxs("div",{className:"cg-result-bg",children:[h.jsx("div",{className:"cg-result-bg-gradient"}),e?h.jsx("div",{className:"cg-result-bg-win",children:h.jsx("div",{className:"cg-victory-rays"})}):h.jsx("div",{className:"cg-result-bg-lose",children:h.jsx("div",{className:"cg-defeat-shadow"})})]}),a&&h.jsx(yh,{}),h.jsxs("div",{className:`cg-result-content ${o?"cg-animate-in":""}`,children:[h.jsxs("div",{className:"cg-result-header",children:[h.jsx("div",{className:"cg-result-badge",children:e?h.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[h.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((p,x)=>h.jsx("circle",{cx:50+35*Math.cos((x*72-90)*Math.PI/180),cy:50+35*Math.sin((x*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:h.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${x*.2}s`,repeatCount:"indefinite"})},x))]}):h.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[h.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),h.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:h.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),h.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),h.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),h.jsx("div",{className:"cg-result-character",children:h.jsxs("div",{className:"cg-character-showcase",children:[h.jsx(os,{characterId:u,size:200}),h.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),h.jsx("div",{className:"cg-result-score",children:h.jsxs("div",{className:"cg-score-simple",children:[h.jsx("span",{className:"cg-score-label",children:"回合数"}),h.jsx("span",{className:"cg-score-value",children:t})]})}),h.jsxs("div",{className:"cg-result-actions",children:[h.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:n,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),h.jsx("span",{children:"再来一局"})]}),h.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:r,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),h.jsx("span",{children:"返回主菜单"})]})]})]}),h.jsx("style",{children:`
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
      `})]})},yh=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return h.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>h.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var jt={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var i=this||n;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window<"u"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var s=this||n;if(i=parseFloat(i),s.ctx||x(),typeof i<"u"&&i>=0&&i<=1){if(s._volume=i,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),v=0;v<g.length;v++){var _=s._howls[d]._soundById(g[v]);_&&_._node&&(_._node.volume=_._volume*i)}return s}return s._volume},mute:function(i){var s=this||n;s.ctx||x(),s._muted=i,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i?0:s._volume,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),v=0;v<g.length;v++){var _=s._howls[d]._soundById(g[v]);_&&_._node&&(_._node.muted=i?!0:_._muted)}return s},stop:function(){for(var i=this||n,s=0;s<i._howls.length;s++)i._howls[s].stop();return i},unload:function(){for(var i=this||n,s=i._howls.length-1;s>=0;s--)i._howls[s].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close<"u"&&(i.ctx.close(),i.ctx=null,x()),i},codecs:function(i){return(this||n)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||n;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(i._canPlayEvent="canplay")}catch{i.noAudio=!0}else i.noAudio=!0;try{var s=new Audio;s.muted&&(i.noAudio=!0)}catch{}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return i}if(!s||typeof s.canPlayType!="function")return i;var d=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=i._navigator?i._navigator.userAgent:"",v=g.match(/OPR\/(\d+)/g),_=v&&parseInt(v[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,m=g.match(/Version\/(.*?) /),y=f&&m&&parseInt(m[1],10)<15;return i._codecs={mp3:!!(!_&&(d||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||n;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var s=function(d){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,i._releaseHtml5Audio(g)}catch{i.noAudio=!0;break}for(var v=0;v<i._howls.length;v++)if(!i._howls[v]._webAudio)for(var _=i._howls[v]._getSoundIds(),f=0;f<_.length;f++){var m=i._howls[v]._soundById(_[f]);m&&m._node&&!m._node._unlocked&&(m._node._unlocked=!0,m._node.load())}i._autoResume();var y=i.ctx.createBufferSource();y.buffer=i._scratchBuffer,y.connect(i.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),y.onended=function(){y.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<i._howls.length;w++)i._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),i}},_obtainHtml5Audio:function(){var i=this||n;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var s=this||n;return i._unlocked&&s._html5AudioPool.push(i),s},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<i._howls.length;s++)if(i._howls[s]._webAudio){for(var d=0;d<i._howls[s]._sounds.length;d++)if(!i._howls[s]._sounds[d]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(i.autoSuspend){i._suspendTimer=null,i.state="suspending";var g=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(g,g)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume>"u"||!n.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var s=0;s<i._howls.length;s++)i._howls[s]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var n=new t,r=function(i){var s=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(i)};r.prototype={init:function(i){var s=this;return n.ctx||x(),s._autoplay=i.autoplay||!1,s._format=typeof i.format!="string"?i.format:[i.format],s._html5=i.html5||!1,s._muted=i.mute||!1,s._loop=i.loop||!1,s._pool=i.pool||5,s._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,s._rate=i.rate||1,s._sprite=i.sprite||{},s._src=typeof i.src!="string"?i.src:[i.src],s._volume=i.volume!==void 0?i.volume:1,s._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=i.onend?[{fn:i.onend}]:[],s._onfade=i.onfade?[{fn:i.onfade}]:[],s._onload=i.onload?[{fn:i.onload}]:[],s._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],s._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],s._onpause=i.onpause?[{fn:i.onpause}]:[],s._onplay=i.onplay?[{fn:i.onplay}]:[],s._onstop=i.onstop?[{fn:i.onstop}]:[],s._onmute=i.onmute?[{fn:i.onmute}]:[],s._onvolume=i.onvolume?[{fn:i.onvolume}]:[],s._onrate=i.onrate?[{fn:i.onrate}]:[],s._onseek=i.onseek?[{fn:i.onseek}]:[],s._onunlock=i.onunlock?[{fn:i.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var i=this,s=null;if(n.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var d=0;d<i._src.length;d++){var g,v;if(i._format&&i._format[d])g=i._format[d];else{if(v=i._src[d],typeof v!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(v),g||(g=/\.([^.]+)$/.exec(v.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=i._src[d];break}}if(!s){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=s,i._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new a(i),i._webAudio&&o(i),i},play:function(i,s){var d=this,g=null;if(typeof i=="number")g=i,i=null;else{if(typeof i=="string"&&d._state==="loaded"&&!d._sprite[i])return null;if(typeof i>"u"&&(i="__default",!d._playLock)){for(var v=0,_=0;_<d._sounds.length;_++)d._sounds[_]._paused&&!d._sounds[_]._ended&&(v++,g=d._sounds[_]._id);v===1?i=null:g=null}}var f=g?d._soundById(g):d._inactiveSound();if(!f)return null;if(g&&!i&&(i=f._sprite||"__default"),d._state!=="loaded"){f._sprite=i,f._ended=!1;var m=f._id;return d._queue.push({event:"play",action:function(){d.play(m)}}),m}if(g&&!f._paused)return s||d._loadQueue("play"),f._id;d._webAudio&&n._autoResume();var y=Math.max(0,f._seek>0?f._seek:d._sprite[i][0]/1e3),w=Math.max(0,(d._sprite[i][0]+d._sprite[i][1])/1e3-y),S=w*1e3/Math.abs(f._rate),N=d._sprite[i][0]/1e3,T=(d._sprite[i][0]+d._sprite[i][1])/1e3;f._sprite=i,f._ended=!1;var P=function(){f._paused=!1,f._seek=y,f._start=N,f._stop=T,f._loop=!!(f._loop||d._sprite[i][2])};if(y>=T){d._ended(f);return}var j=f._node;if(d._webAudio){var M=function(){d._playLock=!1,P(),d._refreshBuffer(f);var fe=f._muted||d._muted?0:f._volume;j.gain.setValueAtTime(fe,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof j.bufferSource.start>"u"?f._loop?j.bufferSource.noteGrainOn(0,y,86400):j.bufferSource.noteGrainOn(0,y,w):f._loop?j.bufferSource.start(0,y,86400):j.bufferSource.start(0,y,w),S!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),S)),s||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?M():(d._playLock=!0,d.once("resume",M),d._clearTimer(f._id))}else{var z=function(){j.currentTime=y,j.muted=f._muted||d._muted||n._muted||j.muted,j.volume=f._volume*n.volume(),j.playbackRate=f._rate;try{var fe=j.play();if(fe&&typeof Promise<"u"&&(fe instanceof Promise||typeof fe.then=="function")?(d._playLock=!0,P(),fe.then(function(){d._playLock=!1,j._unlocked=!0,s?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(d._playLock=!1,P(),d._emit("play",f._id)),j.playbackRate=f._rate,j.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),S):(d._endTimers[f._id]=function(){d._ended(f),j.removeEventListener("ended",d._endTimers[f._id],!1)},j.addEventListener("ended",d._endTimers[f._id],!1))}catch(At){d._emit("playerror",f._id,At)}};j.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(j.src=d._src,j.load());var de=window&&window.ejecta||!j.readyState&&n._navigator.isCocoonJS;if(j.readyState>=3||de)z();else{d._playLock=!0,d._state="loading";var le=function(){d._state="loaded",z(),j.removeEventListener(n._canPlayEvent,le,!1)};j.addEventListener(n._canPlayEvent,le,!1),d._clearTimer(f._id)}}return f._id},pause:function(i){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(i)}}),s;for(var d=s._getSoundIds(i),g=0;g<d.length;g++){s._clearTimer(d[g]);var v=s._soundById(d[g]);if(v&&!v._paused&&(v._seek=s.seek(d[g]),v._rateSeek=0,v._paused=!0,s._stopFade(d[g]),v._node))if(s._webAudio){if(!v._node.bufferSource)continue;typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),s._cleanBuffer(v._node)}else(!isNaN(v._node.duration)||v._node.duration===1/0)&&v._node.pause();arguments[1]||s._emit("pause",v?v._id:null)}return s},stop:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(i)}}),d;for(var g=d._getSoundIds(i),v=0;v<g.length;v++){d._clearTimer(g[v]);var _=d._soundById(g[v]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,d._stopFade(g[v]),_._node&&(d._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),d._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&d._clearSound(_._node))),s||d._emit("stop",_._id))}return d},mute:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(i,s)}}),d;if(typeof s>"u")if(typeof i=="boolean")d._muted=i;else return d._muted;for(var g=d._getSoundIds(s),v=0;v<g.length;v++){var _=d._soundById(g[v]);_&&(_._muted=i,_._interval&&d._stopFade(_._id),d._webAudio&&_._node?_._node.gain.setValueAtTime(i?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:i),d._emit("mute",_._id))}return d},volume:function(){var i=this,s=arguments,d,g;if(s.length===0)return i._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length>=2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,s)}}),i;typeof g>"u"&&(i._volume=d),g=i._getSoundIds(g);for(var m=0;m<g.length;m++)f=i._soundById(g[m]),f&&(f._volume=d,s[2]||i._stopFade(g[m]),i._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*n.volume()),i._emit("volume",f._id))}else return f=g?i._soundById(g):i._sounds[0],f?f._volume:0;return i},fade:function(i,s,d,g){var v=this;if(v._state!=="loaded"||v._playLock)return v._queue.push({event:"fade",action:function(){v.fade(i,s,d,g)}}),v;i=Math.min(Math.max(0,parseFloat(i)),1),s=Math.min(Math.max(0,parseFloat(s)),1),d=parseFloat(d),v.volume(i,g);for(var _=v._getSoundIds(g),f=0;f<_.length;f++){var m=v._soundById(_[f]);if(m){if(g||v._stopFade(_[f]),v._webAudio&&!m._muted){var y=n.ctx.currentTime,w=y+d/1e3;m._volume=i,m._node.gain.setValueAtTime(i,y),m._node.gain.linearRampToValueAtTime(s,w)}v._startFadeInterval(m,i,s,d,_[f],typeof g>"u")}}return v},_startFadeInterval:function(i,s,d,g,v,_){var f=this,m=s,y=d-s,w=Math.abs(y/.01),S=Math.max(4,w>0?g/w:g),N=Date.now();i._fadeTo=d,i._interval=setInterval(function(){var T=(Date.now()-N)/g;N=Date.now(),m+=y*T,m=Math.round(m*100)/100,y<0?m=Math.max(d,m):m=Math.min(d,m),f._webAudio?i._volume=m:f.volume(m,i._id,!0),_&&(f._volume=m),(d<s&&m<=d||d>s&&m>=d)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,f.volume(d,i._id),f._emit("fade",i._id))},S)},_stopFade:function(i){var s=this,d=s._soundById(i);return d&&d._interval&&(s._webAudio&&d._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(d._interval),d._interval=null,s.volume(d._fadeTo,i),d._fadeTo=null,s._emit("fade",i)),s},loop:function(){var i=this,s=arguments,d,g,v;if(s.length===0)return i._loop;if(s.length===1)if(typeof s[0]=="boolean")d=s[0],i._loop=d;else return v=i._soundById(parseInt(s[0],10)),v?v._loop:!1;else s.length===2&&(d=s[0],g=parseInt(s[1],10));for(var _=i._getSoundIds(g),f=0;f<_.length;f++)v=i._soundById(_[f]),v&&(v._loop=d,i._webAudio&&v._node&&v._node.bufferSource&&(v._node.bufferSource.loop=d,d&&(v._node.bufferSource.loopStart=v._start||0,v._node.bufferSource.loopEnd=v._stop,i.playing(_[f])&&(i.pause(_[f],!0),i.play(_[f],!0)))));return i},rate:function(){var i=this,s=arguments,d,g;if(s.length===0)g=i._sounds[0]._id;else if(s.length===1){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof d=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,s)}}),i;typeof g>"u"&&(i._rate=d),g=i._getSoundIds(g);for(var m=0;m<g.length;m++)if(f=i._soundById(g[m]),f){i.playing(g[m])&&(f._rateSeek=i.seek(g[m]),f._playStart=i._webAudio?n.ctx.currentTime:f._playStart),f._rate=d,i._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,n.ctx.currentTime):f._node&&(f._node.playbackRate=d);var y=i.seek(g[m]),w=(i._sprite[f._sprite][0]+i._sprite[f._sprite][1])/1e3-y,S=w*1e3/Math.abs(f._rate);(i._endTimers[g[m]]||!f._paused)&&(i._clearTimer(g[m]),i._endTimers[g[m]]=setTimeout(i._ended.bind(i,f),S)),i._emit("rate",f._id)}}else return f=i._soundById(g),f?f._rate:i._rate;return i},seek:function(){var i=this,s=arguments,d,g;if(s.length===0)i._sounds.length&&(g=i._sounds[0]._id);else if(s.length===1){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):i._sounds.length&&(g=i._sounds[0]._id,d=parseFloat(s[0]))}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,s)}}),i;var f=i._soundById(g);if(f)if(typeof d=="number"&&d>=0){var m=i.playing(g);m&&i.pause(g,!0),f._seek=d,f._ended=!1,i._clearTimer(g),!i._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var y=function(){m&&i.play(g,!0),i._emit("seek",g)};if(m&&!i._webAudio){var w=function(){i._playLock?setTimeout(w,0):y()};setTimeout(w,0)}else y()}else if(i._webAudio){var S=i.playing(g)?n.ctx.currentTime-f._playStart:0,N=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(N+S*Math.abs(f._rate))}else return f._node.currentTime;return i},playing:function(i){var s=this;if(typeof i=="number"){var d=s._soundById(i);return d?!d._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(i){var s=this,d=s._duration,g=s._soundById(i);return g&&(d=s._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var i=this,s=i._sounds,d=0;d<s.length;d++)s[d]._paused||i.stop(s[d]._id),i._webAudio||(i._clearSound(s[d]._node),s[d]._node.removeEventListener("error",s[d]._errorFn,!1),s[d]._node.removeEventListener(n._canPlayEvent,s[d]._loadFn,!1),s[d]._node.removeEventListener("ended",s[d]._endFn,!1),n._releaseHtml5Audio(s[d]._node)),delete s[d]._node,i._clearTimer(s[d]._id);var g=n._howls.indexOf(i);g>=0&&n._howls.splice(g,1);var v=!0;for(d=0;d<n._howls.length;d++)if(n._howls[d]._src===i._src||i._src.indexOf(n._howls[d]._src)>=0){v=!1;break}return l&&v&&delete l[i._src],n.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,s,d,g){var v=this,_=v["_on"+i];return typeof s=="function"&&_.push(g?{id:d,fn:s,once:g}:{id:d,fn:s}),v},off:function(i,s,d){var g=this,v=g["_on"+i],_=0;if(typeof s=="number"&&(d=s,s=null),s||d)for(_=0;_<v.length;_++){var f=d===v[_].id;if(s===v[_].fn&&f||!s&&f){v.splice(_,1);break}}else if(i)g["_on"+i]=[];else{var m=Object.keys(g);for(_=0;_<m.length;_++)m[_].indexOf("_on")===0&&Array.isArray(g[m[_]])&&(g[m[_]]=[])}return g},once:function(i,s,d){var g=this;return g.on(i,s,d,1),g},_emit:function(i,s,d){for(var g=this,v=g["_on"+i],_=v.length-1;_>=0;_--)(!v[_].id||v[_].id===s||i==="load")&&(setTimeout((function(f){f.call(this,s,d)}).bind(g,v[_].fn),0),v[_].once&&g.off(i,v[_].fn,v[_].id));return g._loadQueue(i),g},_loadQueue:function(i){var s=this;if(s._queue.length>0){var d=s._queue[0];d.event===i&&(s._queue.shift(),s._loadQueue()),i||d.action()}return s},_ended:function(i){var s=this,d=i._sprite;if(!s._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(s._ended.bind(s,i),100),s;var g=!!(i._loop||s._sprite[d][2]);if(s._emit("end",i._id),!s._webAudio&&g&&s.stop(i._id,!0).play(i._id),s._webAudio&&g){s._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=n.ctx.currentTime;var v=(i._stop-i._start)*1e3/Math.abs(i._rate);s._endTimers[i._id]=setTimeout(s._ended.bind(s,i),v)}return s._webAudio&&!g&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,s._clearTimer(i._id),s._cleanBuffer(i._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(i._id,!0),s},_clearTimer:function(i){var s=this;if(s._endTimers[i]){if(typeof s._endTimers[i]!="function")clearTimeout(s._endTimers[i]);else{var d=s._soundById(i);d&&d._node&&d._node.removeEventListener("ended",s._endTimers[i],!1)}delete s._endTimers[i]}return s},_soundById:function(i){for(var s=this,d=0;d<s._sounds.length;d++)if(i===s._sounds[d]._id)return s._sounds[d];return null},_inactiveSound:function(){var i=this;i._drain();for(var s=0;s<i._sounds.length;s++)if(i._sounds[s]._ended)return i._sounds[s].reset();return new a(i)},_drain:function(){var i=this,s=i._pool,d=0,g=0;if(!(i._sounds.length<s)){for(g=0;g<i._sounds.length;g++)i._sounds[g]._ended&&d++;for(g=i._sounds.length-1;g>=0;g--){if(d<=s)return;i._sounds[g]._ended&&(i._webAudio&&i._sounds[g]._node&&i._sounds[g]._node.disconnect(0),i._sounds.splice(g,1),d--)}}},_getSoundIds:function(i){var s=this;if(typeof i>"u"){for(var d=[],g=0;g<s._sounds.length;g++)d.push(s._sounds[g]._id);return d}else return[i]},_refreshBuffer:function(i){var s=this;return i._node.bufferSource=n.ctx.createBufferSource(),i._node.bufferSource.buffer=l[s._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,n.ctx.currentTime),s},_cleanBuffer:function(i){var s=this,d=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!i.bufferSource)return s;if(n._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),d))try{i.bufferSource.buffer=n._scratchBuffer}catch{}return i.bufferSource=null,s},_clearSound:function(i){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(i){this._parent=i,this.init()};a.prototype={init:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,s._sounds.push(i),i.create(),i},create:function(){var i=this,s=i._parent,d=n._muted||i._muted||i._parent._muted?0:i._volume;return s._webAudio?(i._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),i._node.gain.setValueAtTime(d,n.ctx.currentTime),i._node.paused=!0,i._node.connect(n.masterGain)):n.noAudio||(i._node=n._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(n._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=s._src,i._node.preload=s._preload===!0?"auto":s._preload,i._node.volume=d*n.volume(),i._node.load()),i},reset:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,s=i._parent;s._duration=Math.ceil(i._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),i._node.removeEventListener(n._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,s=i._parent;s._duration===1/0&&(s._duration=Math.ceil(i._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var l={},o=function(i){var s=i._src;if(l[s]){i._duration=l[s].duration,p(i);return}if(/^data:[^;]+;base64,/.test(s)){for(var d=atob(s.split(",")[1]),g=new Uint8Array(d.length),v=0;v<d.length;++v)g[v]=d.charCodeAt(v);u(g.buffer,i)}else{var _=new XMLHttpRequest;_.open(i._xhr.method,s,!0),_.withCredentials=i._xhr.withCredentials,_.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(f){_.setRequestHeader(f,i._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}u(_.response,i)},_.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete l[s],i.load())},c(_)}},c=function(i){try{i.send()}catch{i.onerror()}},u=function(i,s){var d=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(v){v&&s._sounds.length>0?(l[s._src]=v,p(s,v)):d()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(i).then(g).catch(d):n.ctx.decodeAudioData(i,g,d)},p=function(i,s){s&&!i._duration&&(i._duration=s.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=s?parseInt(s[1],10):null;if(i&&d&&d<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof gr<"u"?(gr.HowlerGlobal=t,gr.Howler=n,gr.Howl=r,gr.Sound=a):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=a)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var a=r._howls.length-1;a>=0;a--)r._howls[a].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(r=typeof r!="number"?l._pos[1]:r,a=typeof a!="number"?l._pos[2]:a,typeof n=="number")l._pos=[n,r,a],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(n,r,a,l,o,c){var u=this;if(!u.ctx||!u.ctx.listener)return u;var p=u._orientation;if(r=typeof r!="number"?p[1]:r,a=typeof a!="number"?p[2]:a,l=typeof l!="number"?p[3]:l,o=typeof o!="number"?p[4]:o,c=typeof c!="number"?p[5]:c,typeof n=="number")u._orientation=[n,r,a,l,o,c],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(a,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(n,r,a,l,o,c);else return p;return u},Howl.prototype.init=function(n){return function(r){var a=this;return a._orientation=r.orientation||[1,0,0],a._stereo=r.stereo||null,a._pos=r.pos||null,a._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},a._onstereo=r.onstereo?[{fn:r.onstereo}]:[],a._onpos=r.onpos?[{fn:r.onpos}]:[],a._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"stereo",action:function(){a.stereo(n,r)}}),a;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")a._stereo=n,a._pos=[n,0,0];else return a._stereo;for(var o=a._getSoundIds(r),c=0;c<o.length;c++){var u=a._soundById(o[c]);if(u)if(typeof n=="number")u._stereo=n,u._pos=[n,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&t(u,l),l==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(n,0,0):u._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),a._emit("stereo",u._id);else return u._stereo}return a},Howl.prototype.pos=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,a,l)}}),o;if(r=typeof r!="number"?0:r,a=typeof a!="number"?-.5:a,typeof l>"u")if(typeof n=="number")o._pos=[n,r,a];else return o._pos;for(var c=o._getSoundIds(l),u=0;u<c.length;u++){var p=o._soundById(c[u]);if(p)if(typeof n=="number")p._pos=[n,r,a],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(a,Howler.ctx.currentTime)):p._panner.setPosition(n,r,a)),o._emit("pos",p._id);else return p._pos}return o},Howl.prototype.orientation=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,a,l)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,a=typeof a!="number"?o._orientation[2]:a,typeof l>"u")if(typeof n=="number")o._orientation=[n,r,a];else return o._orientation;for(var c=o._getSoundIds(l),u=0;u<c.length;u++){var p=o._soundById(c[u]);if(p)if(typeof n=="number")p._orientation=[n,r,a],p._node&&(p._panner||(p._pos||(p._pos=o._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(a,Howler.ctx.currentTime)):p._panner.setOrientation(n,r,a)),o._emit("orientation",p._id);else return p._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,a,l,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")a=r[0],typeof l>"u"&&(a.pannerAttr||(a.pannerAttr={coneInnerAngle:a.coneInnerAngle,coneOuterAngle:a.coneOuterAngle,coneOuterGain:a.coneOuterGain,distanceModel:a.distanceModel,maxDistance:a.maxDistance,refDistance:a.refDistance,rolloffFactor:a.rolloffFactor,panningModel:a.panningModel}),n._pannerAttr={coneInnerAngle:typeof a.pannerAttr.coneInnerAngle<"u"?a.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof a.pannerAttr.coneOuterAngle<"u"?a.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof a.pannerAttr.coneOuterGain<"u"?a.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof a.pannerAttr.distanceModel<"u"?a.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof a.pannerAttr.maxDistance<"u"?a.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof a.pannerAttr.refDistance<"u"?a.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof a.pannerAttr.rolloffFactor<"u"?a.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof a.pannerAttr.panningModel<"u"?a.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(a=r[0],l=parseInt(r[1],10));for(var c=n._getSoundIds(l),u=0;u<c.length;u++)if(o=n._soundById(c[u]),o){var p=o._pannerAttr;p={coneInnerAngle:typeof a.coneInnerAngle<"u"?a.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof a.coneOuterAngle<"u"?a.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof a.coneOuterGain<"u"?a.coneOuterGain:p.coneOuterGain,distanceModel:typeof a.distanceModel<"u"?a.distanceModel:p.distanceModel,maxDistance:typeof a.maxDistance<"u"?a.maxDistance:p.maxDistance,refDistance:typeof a.refDistance<"u"?a.refDistance:p.refDistance,rolloffFactor:typeof a.rolloffFactor<"u"?a.rolloffFactor:p.rolloffFactor,panningModel:typeof a.panningModel<"u"?a.panningModel:p.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=p.coneInnerAngle,x.coneOuterAngle=p.coneOuterAngle,x.coneOuterGain=p.coneOuterGain,x.distanceModel=p.distanceModel,x.maxDistance=p.maxDistance,x.refDistance=p.refDistance,x.rolloffFactor=p.rolloffFactor,x.panningModel=p.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,a=r._parent;r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,n.call(this),r._stereo?a.stereo(r._stereo):r._pos&&a.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,a=r._parent;return r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,r._stereo?a.stereo(r._stereo):r._pos?a.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,a._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(jt);const Ta={"main-menu":{volume:.4,loop:!0,preload:!0},"character-select":{volume:.35,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.5,loop:!1,preload:!1},victory:{volume:.5,loop:!1,preload:!0},defeat:{volume:.4,loop:!1,preload:!0},"game-over":{volume:.35,loop:!1,preload:!0}},pi={"card-play":{volume:.6,loop:!1},"card-shuffle":{volume:.5,loop:!1},"card-draw":{volume:.4,loop:!1},"card-flip":{volume:.5,loop:!1},challenge:{volume:.7,loop:!1},"challenge-success":{volume:.8,loop:!1},"challenge-fail":{volume:.6,loop:!1},"turn-start":{volume:.4,loop:!1},"turn-end":{volume:.3,loop:!1},"geass-activate":{volume:.8,loop:!1},"geass-hit":{volume:.9,loop:!1},"geass-miss":{volume:.5,loop:!1},"geass-immunity":{volume:.7,loop:!1},"button-click":{volume:.4,loop:!1},"button-hover":{volume:.2,loop:!1},"menu-open":{volume:.3,loop:!1},"menu-close":{volume:.3,loop:!1},"character-select":{volume:.5,loop:!1},"character-skill":{volume:.7,loop:!1},"damage-taken":{volume:.8,loop:!1},heal:{volume:.6,loop:!1},win:{volume:.8,loop:!1},lose:{volume:.6,loop:!1},"round-win":{volume:.7,loop:!1},"round-lose":{volume:.5,loop:!1}},Fu={"main-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","character-select":"https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3","game-normal":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","game-intense":"https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3","geass-activate":"https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3",victory:"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3",defeat:"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","game-over":"https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3"},Bu={"card-play":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","card-draw":"https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3","card-flip":"https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3",challenge:"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","challenge-success":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","challenge-fail":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","turn-end":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","geass-immunity":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3","button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","button-hover":"https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3","menu-open":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3","menu-close":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3","character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","character-skill":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","damage-taken":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3",heal:"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3",win:"https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",lose:"https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3","round-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","round-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"},vh={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},xn=class xn{constructor(){ie(this,"bgmMap",new Map);ie(this,"sfxMap",new Map);ie(this,"currentBGM",null);ie(this,"masterVolume",1);ie(this,"bgmVolume",1);ie(this,"sfxVolume",1);ie(this,"voiceVolume",1);ie(this,"isMuted",!1);ie(this,"initialized",!1);ie(this,"currentVoice",null)}static getInstance(){return xn.instance||(xn.instance=new xn),xn.instance}init(){this.initialized||(this.preloadBGM(["main-menu","victory","defeat"]),this.preloadSFX(["button-click","card-play","challenge"]),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成"))}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=Ta[n],a=new jt.Howl({src:[Fu[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,a)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=pi[n],a=new jt.Howl({src:[Bu[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,a)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const a=Ta[t];r=new jt.Howl({src:[Fu[t]],volume:0,loop:a.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const a=Ta[t];r.fade(0,a.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=pi[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new jt.Howl({src:[Bu[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=vh[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const a=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const l=new jt.Howl({src:[a],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=l,l.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),jt.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=Ta[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=pi[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,jt.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,jt.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};ie(xn,"instance");let fo=xn;const kt=fo.getInstance(),yn=e=>{kt&&kt.playBGM(e)},ue=e=>{kt&&kt.playSFX(e)},xh=()=>{kt&&kt.stopBGM()};class _h{constructor(){ie(this,"cards",[]);ie(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let a=0;a<6;a++){const l=t[a%4];this.cards.push({id:`${r}-${a}-${Math.random().toString(36).substr(2,9)}`,suit:l,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],a=[];for(let l=0;l<5;l++){const o=this.cards[l];o.owner="player",t.push(o)}for(let l=5;l<10;l++){const o=this.cards[l];o.owner="ai",n.push(o)}for(let l=10;l<15;l++){const o=this.cards[l];o.owner="ai2",r.push(o)}for(let l=15;l<20;l++){const o=this.cards[l];o.owner="ai3",a.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:a,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const a=this.cards.find(l=>l.id===r);a&&(a.owner="table",n.push(a))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(a=>a.owner===null).slice(0,t);for(const a of r)a.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const wh=1/3,kh=1/2,Sh=1,Ch=.1,Ah=.9,Nh=.5,Hu=.25,Gu=.15,Th=.2,bh=.8,Vu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class Eh{getBaseHitChance(t){return t===0?wh:t===1?kh:Sh}performGeass(t,n,r=null,a=0,l=0,o){let c=this.getBaseHitChance(l);if(c+=a,r==="cc"&&!n.ccReviveUsed&&Math.random()<c&&n.hp<=1&&Math.random()<Nh)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0,victimId:t};if(r==="suzaku"){const x=Math.random();if(console.log(`[GeassSystem] 朱雀闪避判定: roll=${x.toFixed(4)}, threshold=${Gu}`),x<Gu){const i=Math.random();if(console.log(`[GeassSystem] 朱雀反击判定: roll=${i.toFixed(4)}, threshold=${Hu}`),i<Hu){console.log(`[GeassSystem] 朱雀反击成功触发! target=${t}, attacker=${o}, counterDamage=1`);const s={activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并反击！",isCounter:!0,isDodge:!0,victimId:t,counterDamage:1};return o&&(s.counterTargetId=o),s}return console.log("[GeassSystem] 朱雀闪避成功，但反击未触发"),{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0,victimId:t}}}if(l<2&&(c=Math.max(Ch,Math.min(Ah,c))),Math.random()<c){const i={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},s=Vu[Math.floor(Math.random()*Vu.length)];return{activated:!0,hit:!0,damage:1,newStats:i,funnyAction:s.description,message:`Geass命中！${s.emoji} ${s.description}`,victimId:t}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！",victimId:t}}calculateKallenBoost(t){return t<2?0:Math.min(bh,Th*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const mi={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},hi={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},gi={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},yi={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},Ph={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:mi,skillName:mi.name,skillDescription:mi.description,stats:{hp:3,difficulty:4}},Ih={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:hi,skillName:hi.name,skillDescription:hi.description,stats:{hp:3,difficulty:2}},jh={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:gi,skillName:gi.name,skillDescription:gi.description,stats:{hp:4,difficulty:2}},Mh={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:yi,skillName:yi.name,skillDescription:yi.description,stats:{hp:3,difficulty:3}},zh={lelouch:Ph,cc:Ih,suzaku:jh,kallen:Mh};function zl(e){return zh[e]}function ba(e){const t=zl(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Kn(e){const t=zl(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function Uu(e){if(!Kn(e))return e;const t=zl(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function Lh(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function Rh(e){const t=zl(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Xu(e){return e.characterId==="kallen"&&Kn(e)?4:3}const gl={0:"player",1:"ai3",2:"ai2",3:"ai"},pf={player:0,ai3:1,ai2:2,ai:3},Oh={bottom:0,right:2,top:1,left:3},Dh={0:"bottom",1:"top",2:"right",3:"left"},yl={0:null,1:2,2:1,3:0},$h={0:3,1:2,2:1},mf={player:null,ai:0,ai2:1,ai3:2},Fh={0:"ai",1:"ai2",2:"ai3"},Bh={bottom:"player",top:"ai3",right:"ai2",left:"ai"},Hh={player:"bottom",ai3:"top",ai2:"right",ai:"left"};function hf(e){return gl[e]||null}function Ha(e){return pf[e]??null}function Gh(e){return yl[e]??null}function Vh(e){return mf[e]??null}function $r(e,t){const n=Gh(e);return n===null?null:t[n]||null}function vn(e,t){const n=Vh(e);return n===null?null:t[n]||null}function Zt(e){return{0:3,1:2,2:0,3:1}[e]??0}function Yu(e,t){const n=[];let r=e;for(let a=0;a<3;a++)if(r=Zt(r),r!==t){const l=hf(r);l&&n.push(l)}return n}function Uh(){const e=[];for(let a=0;a<4;a++){const l=gl[a];l&&pf[l]!==a&&e.push(`索引${a}和玩家ID${l}的映射不一致`)}for(let a=1;a<4;a++){const l=yl[a];l!==null&&$h[l]!==a&&e.push(`currentPlayerIndex=${a}和aiArrayIndex=${l}的映射不一致`)}const t=["ai","ai2","ai3"];for(const a of t){const l=mf[a];l!==null&&Fh[l]!==a&&e.push(`玩家ID${a}和aiArrayIndex=${l}的映射不一致`)}const n=["top","right","bottom","left"];for(const a of n){const l=Oh[a],o=Bh[a];Dh[l]!==a&&e.push(`UI位置${a}的索引映射不一致`),Hh[o]!==a&&e.push(`UI位置${a}的玩家ID映射不一致`),gl[l]!==o&&e.push(`UI位置${a}的索引和玩家ID映射不一致`)}const r=[1,2,0,3];for(let a=0;a<4;a++){const l=Zt(r[a]),o=r[(a+1)%4];l!==o&&e.push(`顺时针流转顺序错误: ${r[a]}的下一个应该是${o}，但得到${l}`)}return{valid:e.length===0,errors:e}}const Qu=Uh();Qu.valid?(console.log("[PlayerIndexMapper] 索引映射验证通过 - 版本3.1.0"),console.log("[PlayerIndexMapper] UI布局: 上方=卡莲, 右方=朱雀, 下方=玩家, 左方=C.C."),console.log("[PlayerIndexMapper] 顺时针顺序: 卡莲(上) → 朱雀(右) → 玩家(下) → C.C.(左) → 卡莲(上)")):console.error("[PlayerIndexMapper] 索引映射验证失败:",Qu.errors);class Xh{constructor(){ie(this,"cardSystem");ie(this,"geassSystem");ie(this,"state");this.cardSystem=new _h,this.geassSystem=new Eh,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0,firstPlayerIndex:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:a,ai2Cards:l,ai3Cards:o}=this.cardSystem.dealCards(),c=this.cardSystem.setLiarCard(),u=Math.floor(Math.random()*4),p=n||["cc","suzaku","kallen"],x=new Map;x.set("player",ba(t)),x.set("ai",ba(p[0])),x.set("ai2",ba(p[1])),x.set("ai3",ba(p[2]));const i=d=>({lelouch:"鲁鲁修",cc:"C.C.",suzaku:"朱雀",kallen:"卡莲"})[d]||d,s=d=>d==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:u===0?"player_turn":"ai_turn",liarCard:c,playerCharacter:t,currentPlayerIndex:u,playerHand:r,aiPlayers:[{id:"ai",name:i(p[0]),character:p[0],hand:a,stats:{hp:s(p[0]),maxHp:s(p[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:i(p[1]),character:p[1],hand:l,stats:{hp:s(p[1]),maxHp:s(p[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:i(p[2]),character:p[2],hand:o,stats:{hp:s(p[2]),maxHp:s(p[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:s(t),maxHp:s(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0,firstPlayerIndex:u},characterStates:x},this.state}getCurrentPlayerId(){return gl[this.state.currentPlayerIndex]||"player"}getNextPlayerIndex(){let t=Zt(this.state.currentPlayerIndex),n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=yl[t];if(r!=null){const a=this.state.aiPlayers[r];if(a&&a.isActive&&a.stats.hp>0)return t}}t=Zt(t),n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const a=Lh(r);this.state.characterStates.set(n,a)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const c of t){const u=this.state.playerHand.find(p=>p.id===c);if(!u)return!1;r.push(u)}const a=this.state.characterStates.get("player"),l=a?Xu(a):1;if(t.length>l)return!1;this.state.playerHand=this.state.playerHand.filter(c=>!t.includes(c.id));const o=r.some(c=>c.rank!==n&&!c.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){this.state.lastAction=`${t==="player"?"玩家":t}手牌耗尽，获得胜利！`,this.state.winner=t==="player"?"player":"ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,a=n.playerId;this.state.phase="geass";const l=r?a:t,o=p=>{if(p==="player")return"玩家";const x=vn(p,this.state.aiPlayers);return(x==null?void 0:x.name)||p},c=o(t),u=o(a);return this.state.lastAction=`${c}向${u}发起质疑！`,this.executeGeass(l,t),{success:!0,isBluff:r,targetId:a}}executeGeass(t,n){const r=this.state.characterStates.get(t);let a;if(t==="player")a=this.state.playerStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);if(!c)return;a=c.stats}let l=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(l=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,a,(r==null?void 0:r.characterId)||null,l,this.state.turnState.geassConsecutiveMisses,n);if(this.state.geassResult=o,console.log(`[executeGeass] 检查反击条件: hit=${o.hit}, isCounter=${o.isCounter}, challengerId=${n}`),!o.hit&&o.isCounter&&n){if(console.log(`[executeGeass] 朱雀反击触发! targetId=${t}, challengerId=${n}, damage=1`),n==="player"){const u=this.state.playerStats.hp;this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},console.log(`[executeGeass] 玩家受到反击伤害: ${u} -> ${this.state.playerStats.hp}`),this.state.playerStats.hp<=0&&this.checkGameOver()}else{const u=this.state.aiPlayers.find(p=>p.id===n);if(console.log(`[executeGeass] 查找质疑者AI: ${n}, found=${!!u}`),u){const p=u.stats.hp;u.stats={...u.stats,hp:Math.max(0,u.stats.hp-1)},console.log(`[executeGeass] AI ${n} 受到反击伤害: ${p} -> ${u.stats.hp}`),u.stats.hp<=0&&(u.isActive=!1,this.checkGameOver())}}this.state.lastAction=`${t==="player"?"玩家":t}发动枢木剑术反击！${n==="player"?"玩家":n}受到反弹伤害！`,console.log(`[executeGeass] 反击完成, lastAction=${this.state.lastAction}`);return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.stats=o.newStats)}if(o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0),o.newStats.hp<=0){if(t!=="player"){const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!Kn(n))return!1;const r=Uu(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const a=["Q","K","A"],o=(a.indexOf(this.state.liarCard)+1)%a.length;this.state.liarCard=a[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const a=t==="player"?"玩家":t;this.state.lastAction=`${a}发动了${_t(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?Kn(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:a,ai3Cards:l}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let c;if(t!==void 0)c=this.findNextActivePlayer(t);else{const u=this.getActivePlayerIndices();c=u[Math.floor(Math.random()*u.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=a,this.state.aiPlayers[2].hand=l,this.state.liarCard=o,this.state.phase=c===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=c,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:this.state.turnState.geassConsecutiveMisses,firstPlayerIndex:c},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((u,p)=>{this.state.characterStates.set(p,Rh(u))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=vn("ai2",this.state.aiPlayers);n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=vn("ai3",this.state.aiPlayers);r&&r.isActive&&r.stats.hp>0&&t.push(2);const a=vn("ai",this.state.aiPlayers);return a&&a.isActive&&a.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const a=(t+r)%4;if(n.includes(a))return a}return n[0]}getState(){return JSON.parse(JSON.stringify(this.state))}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(a=>a.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const a=this.state.characterStates.get("player"),l=a?this.getMaxPlayCount(a):1;this.state.playerSelectedCards.length<l&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}getMaxPlayCount(t){return t.characterId==="kallen"?4:3}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t){if(this.state.phase!=="ai_turn")return this.getState();const n=this.state.aiPlayers.find(o=>o.id===t);if(!n||n.hand.length===0)return this.getState();const r=Math.min(n.hand.length,Math.floor(Math.random()*2)+1),a=n.hand.slice(0,r).map(o=>o.id),l=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,a,l),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const a=this.state.aiPlayers.find(p=>p.id===t);if(!a)return!1;const l=[];for(const p of n){const x=a.hand.find(i=>i.id===p);if(!x)return!1;l.push(x)}const o=this.state.characterStates.get(t),c=o?Xu(o):1;if(n.length>c)return!1;a.hand=a.hand.filter(p=>!n.includes(p.id));const u=l.some(p=>p.rank!==r&&!p.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:l,playerId:t,isBluff:u},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...l],this.state.lastAction=`${a.name}出了${n.length}张牌，声称是${r}`,a.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?Kn(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!Kn(n))throw new Error("技能冷却中或已使用");const r=Uu(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(t=!1){var c;if(this.state.turnState.playedCards&&this.state.turnState.tableCards.push(...this.state.turnState.playedCards.actualCards),t){const u=this.state.turnState.lastPlayerId||((c=this.state.turnState.playedCards)==null?void 0:c.playerId);if(this.state.turnState.playedCards=null,this.state.lastAction="无人质疑，回合继续",u){const i=Ha(u);i!==null?(this.state.currentPlayerIndex=i,this.state.phase=i===0?"player_turn":"ai_turn",this.state.turnState.firstPlayerIndex=i):this.state.phase=this.state.currentPlayerIndex===0?"player_turn":"ai_turn"}else this.state.phase=this.state.currentPlayerIndex===0?"player_turn":"ai_turn";const x=u&&(i=>{if(i==="player")return"玩家";const s=vn(i,this.state.aiPlayers);return(s==null?void 0:s.name)||i})(u);return console.log(`[endChallengePhase] 无人质疑，${x}继续出牌，currentPlayerIndex: ${this.state.currentPlayerIndex}`),this.getState()}const n=this.state.turnState.firstPlayerIndex;let r=Zt(n),a=0;for(;a<4;){if(r===0){if(this.state.playerStats.hp>0)break}else{const u=yl[r];if(u!=null){const p=this.state.aiPlayers[u];if(p&&p.isActive&&p.stats.hp>0)break}}r=Zt(r),a++}this.state.currentPlayerIndex=r,this.state.phase=r===0?"player_turn":"ai_turn",this.state.turnState.firstPlayerIndex=r,this.state.turnState.turnNumber++,this.state.turnState.playedCards=null;const l=n===0?"玩家":n===1?"卡莲":n===2?"朱雀":"C.C.",o=r===0?"玩家":r===1?"卡莲":r===2?"朱雀":"C.C.";return console.log(`[endChallengePhase] 第${this.state.turnState.turnNumber}回合，先手角色: ${o}(索引${r})，上一回合先手: ${l}(索引${n})`),this.state.lastAction=`第${this.state.turnState.turnNumber}回合开始，${o}先手`,this.getState()}}const Yh="code-geass-game",Wu={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.removeItem(Yh)}catch(t){console.error("Failed to clear localStorage:",t)}}},Ku=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],Qh=(e,t)=>{let n=e,r=0;for(;r<4;){if(n===0){if(t.playerStats.hp>0)return n}else{const a=$r(n,t.aiPlayers);if(a&&a.isActive&&a.stats.hp>0)return n}n=Zt(n),r++}return e},Wh=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let a=t??null;if(!a&&r)if(r==="player")a=_t(n??void 0);else{const c=e.aiPlayers.find(u=>u.id===r);a=(c==null?void 0:c.name)??null}if(!a)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(a===_t(n??void 0))return{loserId:"player",actualLoserName:a};const l=e.aiPlayers.find(c=>c.name===a);return l?{loserId:l.id,actualLoserName:a}:(console.error(`[determineLoserId] 找不到AI: ${a}`),{loserId:null,actualLoserName:a})},Kh=(e,t,n,r)=>{ue("geass-hit");const a=Ku[Math.floor(Math.random()*Ku.length)];r(a),ue(a.soundType),n(`${t}受到Geass！`),n(`突然${a.description}`),n(`Geass命中！${t}HP-1`)},Zh=(e,t,n)=>{ue("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},Jh=(e,t)=>{setTimeout(()=>{yn(e==="player"?"victory":"defeat"),t("result")},2e3)},qh=(e,t,n,r,a,l,o,c,u)=>{const p=n.turnState.firstPlayerIndex;let x=Zt(p);x=Qh(x,n);const i=e.resetRound(x);l(i),o([]);const s=i.currentPlayerIndex===0,d=s?null:$r(i.currentPlayerIndex,i.aiPlayers),g=s?_t(r??void 0):d==null?void 0:d.name;a(`【第${i.turnState.turnNumber}回合】骗子牌是${i.liarCard}`),a(`${g}先手！`),c(!1),s||setTimeout(()=>{var v;(v=u.current)==null||v.call(u)},1500)},eg=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:a,setSelectedCards:l,setIsProcessing:o,setCurrentScreen:c,aiTurnRef:u})=>A.useCallback((p,x,i,s)=>{if(r(p),p.geassResult){const g=s||(i||"对手");p.geassResult.hit?Kh(p.geassResult,g,n,a):Zh(p.geassResult,g,n)}if(p.phase==="game_over"){Jh(p.winner,c);return}setTimeout(()=>{a(null);const d=e.current;if(!d)return;const g=d.getState(),{loserId:v,actualLoserName:_}=Wh(g,s,t);if(!v||!_){o(!1);return}qh(d,v,g,t,n,r,l,o,u)},2500)},[e,t,n,r,a,l,o,c,u]),qe={THINKING:1e3,PLAY_TO_CHALLENGE:2e3,CHALLENGE_TO_RESOLVE:2e3,GEASS_RESULT_DISPLAY:2e3,TURN_SWITCH:1e3,ROUND_START:600,NO_CHALLENGE_DISPLAY:2e3,CHALLENGE_DISPLAY:2e3,AI_CHALLENGE_INTERVAL:1500},tg=()=>{const[e,t]=A.useState("main-menu"),[n,r]=A.useState(null),[a,l]=A.useState(1),[o,c]=A.useState(["cc","suzaku","kallen"]),[u,p]=A.useState({}),x=A.useRef(null),[i,s]=A.useState(null),[d,g]=A.useState([]),[v,_]=A.useState(null),[f,m]=A.useState([]),[y,w]=A.useState(!1),S=A.useRef({pass:!1,challenge:!1}),[N,T]=A.useState({isThinking:!1,aiId:null}),[P,j]=A.useState({playedBy:null,checkedPlayers:[]}),M=A.useRef(null);A.useEffect(()=>((async()=>{try{await kt.preload(),console.log("音效预加载完成");const I=Wu.load("gameSettings");I&&(kt.setBGMVolume(I.musicVolume??.5),kt.setSFXVolume(I.soundVolume??.7)),yn("main-menu")}catch(I){console.warn("初始化失败:",I)}})(),()=>{xh()}),[]),A.useEffect(()=>{const D=kt.getStatus(),I={soundEnabled:D.enabled,musicEnabled:!0,soundVolume:D.sfxVolume,musicVolume:D.bgmVolume};Wu.save("gameSettings",I)},[]);const z=A.useCallback(D=>{g(I=>[...I,D])},[]),de=eg({gameEngineRef:x,selectedCharacter:n,addLog:z,setGameState:s,setCurrentFunnyAction:_,setSelectedCards:m,setIsProcessing:w,setCurrentScreen:D=>t(D),aiTurnRef:M}),le=A.useCallback(async(D,I)=>{var ze,it,W,pe,jn;console.log("[enterChallengePhase] ==================== 进入质疑阶段 ====================");const R=D.getState(),$=(ze=R.turnState.playedCards)==null?void 0:ze.playerId;if(!$){console.error("[enterChallengePhase] 没有出牌记录");return}const H=Ha($)??0,G=K=>{if(hf(K)==="player")return"玩家";const He=$r(K,R.aiPlayers);return(He==null?void 0:He.name)||"未知"};console.log(`[enterChallengePhase] 出牌者: ${$} (索引${H} - ${G(H)})`);const U=Yu(H,H);console.log(`[enterChallengePhase] 质疑顺序: ${U.join(" -> ")}`);for(let K=0;K<U.length;K++){const Ze=U[K],He=Ha(Ze)??0;if(console.log(`[enterChallengePhase] --- 第${K+1}轮质疑检查 ---`),console.log(`[enterChallengePhase] 当前: ${Ze} (索引${He}), 出牌者: ${$} (索引${H})`),Ze==="player"){console.log("[enterChallengePhase] 轮到玩家质疑，等待玩家决策"),j({playedBy:$,checkedPlayers:U.slice(0,K).filter(me=>me!=="player")});const xe=D.enterChallengePhase();s(xe),w(!1),z("等待玩家决策...");return}const X=vn(Ze,R.aiPlayers);if(console.log(`[enterChallengePhase] 检查AI: name=${X==null?void 0:X.name}, isActive=${X==null?void 0:X.isActive}, hp=${(it=X==null?void 0:X.stats)==null?void 0:it.hp}`),!X||!X.isActive||X.stats.hp<=0){console.log("[enterChallengePhase] AI已淘汰或无效，跳过:",X==null?void 0:X.name);continue}console.log(`[enterChallengePhase] ✅ 询问质疑者: ${X.name} (索引${He}), 出牌者是: ${$} (索引${H})`);const Tt=Math.random()<.3;if(console.log(`[enterChallengePhase] AI ${X.name} 决策: shouldChallenge=${Tt}`),Tt){ue("challenge");const xe=$==="player"?_t(n):((W=R.aiPlayers.find(Ge=>Ge.id===$))==null?void 0:W.name)||$;z(`${X.name}向${xe}发起质疑！`),It.flushSync(()=>{const Ge={...R,lastAction:`${X.name}向${xe}发起质疑！`};s(Ge)}),await new Promise(Ge=>setTimeout(Ge,qe.CHALLENGE_DISPLAY));const me=D.aiChallengeDecision(X.id),Mn=R.turnState.playedCards,hr=Mn?Mn.actualCards.some(Ge=>Ge.rank!==Mn.claimedRank&&!Ge.isJoker):!1;z(hr?`质疑成功！${xe}在撒谎！`:`质疑失败！${xe}没有撒谎！`);const zn=hr?$:X.id,sa=zn==="player"?_t(n):((pe=me.aiPlayers.find(Ge=>Ge.id===zn))==null?void 0:pe.name)||zn;s(me),de(me,X.name,xe,sa);return}else z(`${X.name}选择不质疑`),It.flushSync(()=>{const xe={...D.getState(),lastAction:`${X.name}选择不质疑`};s(xe)}),await new Promise(xe=>setTimeout(xe,100)),await new Promise(xe=>setTimeout(xe,qe.NO_CHALLENGE_DISPLAY))}console.log("[enterChallengePhase] ==================== 质疑阶段结束 ===================="),console.log(`[enterChallengePhase] 所有人都未质疑，原出牌者 ${$} (${G(H)}) 继续出牌`),z("无人质疑，回合继续"),j({playedBy:null,checkedPlayers:[]});const ve=D.endChallengePhase(!0);s(ve);const se=ve.turnState.lastPlayerId||((jn=ve.turnState.playedCards)==null?void 0:jn.playerId);se==="player"||!se?(w(!1),z("轮到玩家出牌")):setTimeout(()=>{var K;(K=M.current)==null||K.call(M)},qe.TURN_SWITCH)},[z,n,de]),fe=A.useCallback(()=>{if(console.log("[handleAITurn] 开始执行"),!x.current){console.log("[handleAITurn] 游戏引擎不存在，返回");return}const D=x.current,I=D.getState();if(console.log("[handleAITurn] 当前状态:",{phase:I.phase,currentPlayerIndex:I.currentPlayerIndex}),I.phase==="player_turn"||I.phase==="game_over"){console.log("[handleAITurn] 不是AI回合，跳过");return}const R=$r(I.currentPlayerIndex,I.aiPlayers);if(!R){console.log("[handleAITurn] AI不存在或当前是玩家回合, currentPlayerIndex:",I.currentPlayerIndex);return}const $=R.id;if(console.log("[handleAITurn] 当前AI:",R.name,"ID:",$,"currentPlayerIndex:",I.currentPlayerIndex),!R.isActive||R.stats.hp<=0){if(console.log("[handleAITurn] AI已淘汰，跳过:",R.name),I.aiPlayers.filter(U=>U.isActive&&U.stats.hp>0).length===0&&I.playerStats.hp>0){console.log("[handleAITurn] 只剩玩家存活，玩家获胜"),I.winner="player",I.phase="game_over",s({...I}),z("游戏结束！玩家获胜！"),w(!1);return}const G=(I.currentPlayerIndex+1)%4;I.currentPlayerIndex=G,s({...I}),G!==0?setTimeout(()=>{var U;return(U=M.current)==null?void 0:U.call(M)},qe.TURN_SWITCH):I.playerStats.hp<=0&&setTimeout(()=>{var U;return(U=M.current)==null?void 0:U.call(M)},qe.TURN_SWITCH);return}w(!0),ue("turn-start"),z(`${R.name} 的回合...`),T({isThinking:!0,aiId:$}),setTimeout(()=>{var H;try{console.log("[handleAITurn] AI开始出牌:",R.name),T({isThinking:!1,aiId:null});const G=D.aiPlayCards($);console.log("[handleAITurn] AI出牌完成, 新状态:",{phase:G.phase,playedBy:(H=G.turnState.playedCards)==null?void 0:H.playerId}),It.flushSync(()=>{s(G)});const U=G.turnState.playedCards;if(U){const ve=U.cardIds.length,se=U.claimedRank;z(`${R.name}出了${ve}张牌，声称是${se}`)}setTimeout(()=>{console.log("[handleAITurn] 进入质疑阶段"),le(D,G)},qe.PLAY_TO_CHALLENGE)}catch(G){console.error("AI出牌错误:",G),w(!1),T({isThinking:!1,aiId:null})}},qe.THINKING)},[z,le]);A.useEffect(()=>{M.current=fe},[fe]);const At=A.useCallback(()=>{ue("button-click"),t("character-select")},[]),ht=A.useCallback(()=>{ue("button-click"),t("settings")},[]),Nt=A.useCallback(()=>{ue("button-click"),t("help")},[]),b=A.useCallback((D,I)=>{ue("character-select"),r(D),l(I||Math.floor(Math.random()*4)+1)},[]),O=A.useCallback(()=>{if(!n)return;ue("button-click");const R=["lelouch","cc","suzaku","kallen"].filter(se=>se!==n).sort(()=>Math.random()-.5);c(R);const $={};R.forEach(se=>{$[se]=Math.floor(Math.random()*4)+1}),p($),x.current=new Xh;const H=x.current.initializeGame(n,R);s(H),m([]);const G=H.currentPlayerIndex===0,U=G?null:$r(H.currentPlayerIndex,H.aiPlayers),ve=G?_t(n):U==null?void 0:U.name;g(["游戏开始！",`【第1回合】骗子牌是${H.liarCard}`,`${ve}先手！`]),t("game-table"),yn("game-normal"),G||setTimeout(()=>{fe()},1500)},[n,fe]),k=A.useCallback(()=>{ue("button-click"),t("main-menu"),r(null)},[]),B=A.useCallback(()=>{ue("button-click"),t("main-menu"),r(null),s(null),g([]),m([]),_(null),yn("main-menu")},[]),Q=A.useCallback(D=>{if(!x.current||y)return;const I=x.current,R=I.getState();if(console.log("[handleToggleCardSelection] 当前阶段:",R.phase,"是否是玩家回合:",R.phase==="player_turn"),R.phase!=="player_turn"){console.log("[handleToggleCardSelection] 不是玩家回合，无法选择牌");return}I.toggleCardSelection(D);const $=I.getState();console.log("[handleToggleCardSelection] 选中状态更新:",$.playerSelectedCards),m($.playerSelectedCards),ue("button-click")},[y]),gt=A.useCallback(()=>{if(!x.current||f.length===0||y)return;w(!0),ue("card-play");const D=x.current;try{const I=D.playerPlayCards();It.flushSync(()=>{s(I)}),m([]);const R=_t(n),$=I.turnState.playedCards;if($){const H=$.cardIds.length,G=$.claimedRank;z(`${R}出了${H}张牌，声称是${G}`)}setTimeout(()=>{le(D,I)},qe.PLAY_TO_CHALLENGE)}catch(I){console.error("出牌错误:",I),w(!1)}},[f,y,z,n,le]),Ee=A.useCallback(async()=>{var ze,it;if(!x.current||y)return;w(!0),ue("challenge");const D=x.current,I=D.getState(),R=I.turnState.playedCards,$=R==null?void 0:R.playerId,H=_t(n),G=$==="player"?H:((ze=I.aiPlayers.find(W=>W.id===$))==null?void 0:ze.name)||$;z(`${H}向${G}发起质疑！`),It.flushSync(()=>{const W={...I,lastAction:`${H}向${G}发起质疑！`};s(W)}),await new Promise(W=>setTimeout(W,qe.CHALLENGE_DISPLAY));const U=D.playerChallengeDecision(!0),ve=R?R.actualCards.some(W=>W.rank!==R.claimedRank&&!W.isJoker):!1;z(ve?`质疑成功！${G}在撒谎！`:`质疑失败！${G}没有撒谎！`);const se=ve?$:"player",yt=se==="player"?H:((it=I.aiPlayers.find(W=>W.id===se))==null?void 0:it.name)||se;s(U),de(U,H,G,yt)},[y,z,n,de]),fn=A.useCallback(async()=>{var yt,ze,it;if(!x.current||y||S.current.pass)return;S.current.pass=!0,w(!0),ue("button-click");const D=x.current,I=D.getState(),R=(yt=I.turnState.playedCards)==null?void 0:yt.playerId,$=_t(n);z(`${$}选择不质疑`),It.flushSync(()=>{const W={...I,lastAction:`${$}选择不质疑`};s(W)}),await new Promise(W=>setTimeout(W,100)),await new Promise(W=>setTimeout(W,qe.NO_CHALLENGE_DISPLAY));const H=Ha(R||"player")??0,G=Yu(H,H);console.log("[handlePass] 质疑顺序:",G);const U=P.playedBy===R?P.checkedPlayers:[];console.log("[handlePass] 已经询问过的AI:",U);for(const W of G){if(W==="player")continue;if(U.includes(W)){console.log("[handlePass] AI已经询问过，跳过:",W);continue}const pe=vn(W,I.aiPlayers);if(!pe||!pe.isActive||pe.stats.hp<=0){console.log("[handlePass] AI已淘汰，跳过:",pe==null?void 0:pe.name);continue}if(Math.random()<.3){ue("challenge");const K=R==="player"?$:((ze=I.aiPlayers.find(me=>me.id===R))==null?void 0:ze.name)||R;z(`${pe.name}向${K}发起质疑！`),It.flushSync(()=>{const me={...D.getState(),lastAction:`${pe.name}向${K}发起质疑！`};s(me)}),await new Promise(me=>setTimeout(me,100));const Ze=D.aiChallengeDecision(pe.id),He=I.turnState.playedCards,X=He?He.actualCards.some(me=>me.rank!==He.claimedRank&&!me.isJoker):!1;z(X?`质疑成功！${K}在撒谎！`:`质疑失败！${K}没有撒谎！`);const Tt=X?R:pe.id,xe=Tt==="player"?$:((it=Ze.aiPlayers.find(me=>me.id===Tt))==null?void 0:it.name)||Tt;s(Ze),de(Ze,pe.name,K,xe);return}else z(`${pe.name}选择不质疑`),It.flushSync(()=>{const K={...D.getState(),lastAction:`${pe.name}选择不质疑`};s(K)}),await new Promise(K=>setTimeout(K,100)),await new Promise(K=>setTimeout(K,qe.NO_CHALLENGE_DISPLAY))}z("无人质疑，回合继续"),j({playedBy:null,checkedPlayers:[]});const ve=D.endChallengePhase(!0);s(ve);const se=ve.turnState.lastPlayerId;console.log(`[enterChallengePhase] 无人质疑，原出牌者 ${se} 继续出牌`),se==="player"?(w(!1),setTimeout(()=>{S.current.pass=!1},500)):setTimeout(()=>{fe(),S.current.pass=!1},qe.TURN_SWITCH)},[y,z,n,de,fe]),Be=A.useCallback(D=>{if(!x.current||n!=="lelouch")return;const I=x.current;if(!I.canPlayerUseSkill("player")){z("❌ 绝对命令使用次数已耗尽（每局限1次）");return}ue("geass-activate");const R=I.lelouchChangeLiarCard(D);s(R),z(`鲁鲁修发动绝对命令！骗子牌变为 ${D}`),z("⚠️ 绝对命令已使用，本局无法再次使用")},[n,z]),Gt=A.useCallback(()=>{ue("button-click"),t("character-select"),r(null),s(null),g([]),m([]),_(null),yn("main-menu")},[]),Ll=A.useCallback(()=>{ue("button-click"),t("main-menu"),r(null),s(null),g([]),m([]),_(null),yn("main-menu")},[]),mr=()=>{var D,I,R,$;switch(e){case"main-menu":return h.jsx(Mu,{onStart:At,onSettings:ht,onHelp:Nt});case"character-select":return h.jsx(Jm,{characters:pl,selectedId:n,selectedAvatar:a,onSelect:b,onConfirm:O,onBack:k});case"game-table":return i?h.jsx(hh,{gameState:i,selectedCards:f,selectedCharacter:n,selectedAvatar:a,aiCharacters:o,aiAvatars:u,onToggleCardSelection:Q,onConfirmPlay:gt,onPass:fn,onChallenge:Ee,onBackToMenu:B,onLelouchSkill:Be,gameLog:d,funnyAction:v,isProcessing:y,canUseSkill:((D=x.current)==null?void 0:D.canPlayerUseSkill("player"))??!0,aiThinkingState:N}):null;case"result":{const H=(i==null?void 0:i.winner)==="player",G=((I=i==null?void 0:i.playerStats)==null?void 0:I.geassSuccessCount)||0,U=((R=i==null?void 0:i.aiPlayers)==null?void 0:R.reduce((se,yt)=>{var ze;return se+(((ze=yt.stats)==null?void 0:ze.geassSuccessCount)||0)},0))||0,ve=(($=i==null?void 0:i.turnState)==null?void 0:$.turnNumber)||0;return h.jsx(gh,{isWin:H,playerScore:G,opponentScore:U,turnNumber:ve,onRestart:Gt,onMainMenu:Ll})}case"settings":return Rl();case"help":return Ol();default:return h.jsx(Mu,{onStart:At,onSettings:ht,onHelp:Nt})}},Rl=()=>h.jsxs("div",{className:"cg-placeholder-screen",children:[h.jsx("h2",{children:"设置"}),h.jsxs("div",{className:"cg-settings-content",children:[h.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),h.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),h.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),Ol=()=>h.jsxs("div",{className:"cg-placeholder-screen",children:[h.jsx("h2",{children:"游戏帮助"}),h.jsxs("div",{className:"cg-help-content",children:[h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"🎮 游戏规则"}),h.jsxs("ul",{children:[h.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),h.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),h.jsxs("li",{children:[h.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),h.jsx("li",{children:"质疑后翻牌验证："}),h.jsxs("li",{children:["• 出的牌",h.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),h.jsxs("li",{children:["• 出的牌",h.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),h.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),h.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"👤 角色技能详解"}),h.jsxs("ul",{children:[h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),h.jsx("br",{}),h.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),h.jsx("br",{}),h.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),h.jsx("br",{}),h.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),h.jsx("br",{}),h.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"🃏 特殊牌"}),h.jsx("ul",{children:h.jsxs("li",{children:[h.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),h.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return h.jsxs("div",{className:"cg-app",children:[mr(),h.jsx("style",{children:`
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
      `})]})},ng=vi.createRoot(document.getElementById("root"));ng.render(h.jsx(Of.StrictMode,{children:h.jsx(tg,{})}));
//# sourceMappingURL=index-2uYjIgyY.js.map
