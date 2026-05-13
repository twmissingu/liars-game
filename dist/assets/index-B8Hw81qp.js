var wf=Object.defineProperty;var kf=(e,t,n)=>t in e?wf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ee=(e,t,n)=>kf(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tc={exports:{}},hl={},nc={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),Cf=Symbol.for("react.portal"),Af=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),bf=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),jf=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),Is=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=Is&&e[Is]||e["@@iterator"],typeof e=="function"?e:null)}var rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ac=Object.assign,lc={};function rr(e,t,n){this.props=e,this.context=t,this.refs=lc,this.updater=n||rc}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ic(){}ic.prototype=rr.prototype;function fo(e,t,n){this.props=e,this.context=t,this.refs=lc,this.updater=n||rc}var po=fo.prototype=new ic;po.constructor=fo;ac(po,rr.prototype);po.isPureReactComponent=!0;var js=Array.isArray,oc=Object.prototype.hasOwnProperty,ho={current:null},sc={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)oc.call(t,r)&&!sc.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){for(var u=Array(c),f=0;f<c;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)a[r]===void 0&&(a[r]=c[r]);return{$$typeof:Zr,type:e,key:l,ref:o,props:a,_owner:ho.current}}function Rf(e,t){return{$$typeof:Zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr}function Lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ms=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lf(""+e.key):t.toString(36)}function Na(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Zr:case Cf:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Ll(o,0):r,js(a)?(n="",e!=null&&(n=e.replace(Ms,"$&/")+"/"),Na(a,t,n,"",function(f){return f})):a!=null&&(mo(a)&&(a=Rf(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ms,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",js(e))for(var c=0;c<e.length;c++){l=e[c];var u=r+Ll(l,c);o+=Na(l,t,n,u,a)}else if(u=zf(e),typeof u=="function")for(e=u.call(e),c=0;!(l=e.next()).done;)l=l.value,u=r+Ll(l,c++),o+=Na(l,t,n,u,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(e,t,n){if(e==null)return e;var r=[],a=0;return Na(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Ta={transition:null},Df={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:ho};function cc(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:aa,forEach:function(e,t,n){aa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return aa(e,function(){t++}),t},toArray:function(e){return aa(e,function(t){return t})||[]},only:function(e){if(!mo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=rr;$.Fragment=Af;$.Profiler=Tf;$.PureComponent=fo;$.StrictMode=Nf;$.Suspense=If;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;$.act=cc;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ac({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=ho.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)oc.call(t,u)&&!sc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var f=0;f<u;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:Zr,type:e.type,key:a,ref:l,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ef,_context:e},e.Consumer=e};$.createElement=uc;$.createFactory=function(e){var t=uc.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Pf,render:e}};$.isValidElement=mo;$.lazy=function(e){return{$$typeof:Mf,_payload:{_status:-1,_result:e},_init:Of}};$.memo=function(e,t){return{$$typeof:jf,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ta.transition;Ta.transition={};try{e()}finally{Ta.transition=t}};$.unstable_act=cc;$.useCallback=function(e,t){return Pe.current.useCallback(e,t)};$.useContext=function(e){return Pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Pe.current.useEffect(e,t)};$.useId=function(){return Pe.current.useId()};$.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Pe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};$.useRef=function(e){return Pe.current.useRef(e)};$.useState=function(e){return Pe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Pe.current.useTransition()};$.version="18.3.1";nc.exports=$;var A=nc.exports;const Ff=Sf(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f=A,Bf=Symbol.for("react.element"),Hf=Symbol.for("react.fragment"),Vf=Object.prototype.hasOwnProperty,Uf=$f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gf={key:!0,ref:!0,__self:!0,__source:!0};function dc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Vf.call(t,r)&&!Gf.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Bf,type:e,key:l,ref:o,props:a,_owner:Uf.current}}hl.Fragment=Hf;hl.jsx=dc;hl.jsxs=dc;tc.exports=hl;var m=tc.exports,mi={},fc={exports:{}},Xe={},pc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var k=E.length;E.push(L);e:for(;0<k;){var B=k-1>>>1,Y=E[B];if(0<a(Y,L))E[B]=L,E[k]=Y,k=B;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],k=E.pop();if(k!==L){E[0]=k;e:for(var B=0,Y=E.length,dt=Y>>>1;B<dt;){var Te=2*(B+1)-1,rn=E[Te],Fe=Te+1,jt=E[Fe];if(0>a(rn,k))Fe<Y&&0>a(jt,rn)?(E[B]=jt,E[Fe]=k,B=Fe):(E[B]=rn,E[Te]=k,B=Te);else if(Fe<Y&&0>a(jt,k))E[B]=jt,E[Fe]=k,B=Fe;else break e}}return L}function a(E,L){var k=E.sortIndex-L.sortIndex;return k!==0?k:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var u=[],f=[],x=1,i=null,s=3,d=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(E){for(var L=n(f);L!==null;){if(L.callback===null)r(f);else if(L.startTime<=E)r(f),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(f)}}function w(E){if(v=!1,y(E),!g)if(n(u)!==null)g=!0,We(C);else{var L=n(f);L!==null&&De(w,L.startTime-E)}}function C(E,L){g=!1,v&&(v=!1,p(I),I=-1),d=!0;var k=s;try{for(y(L),i=n(u);i!==null&&(!(i.expirationTime>L)||E&&!G());){var B=i.callback;if(typeof B=="function"){i.callback=null,s=i.priorityLevel;var Y=B(i.expirationTime<=L);L=e.unstable_now(),typeof Y=="function"?i.callback=Y:i===n(u)&&r(u),y(L)}else r(u);i=n(u)}if(i!==null)var dt=!0;else{var Te=n(f);Te!==null&&De(w,Te.startTime-L),dt=!1}return dt}finally{i=null,s=k,d=!1}}var N=!1,T=null,I=-1,j=5,O=-1;function G(){return!(e.unstable_now()-O<j)}function D(){if(T!==null){var E=e.unstable_now();O=E;var L=!0;try{L=T(!0,E)}finally{L?se():(N=!1,T=null)}}else N=!1}var se;if(typeof h=="function")se=function(){h(D)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Ye=fe.port2;fe.port1.onmessage=D,se=function(){Ye.postMessage(null)}}else se=function(){_(D,0)};function We(E){T=E,N||(N=!0,se())}function De(E,L){I=_(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){g||d||(g=!0,We(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(s){case 1:case 2:case 3:var L=3;break;default:L=s}var k=s;s=L;try{return E()}finally{s=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var k=s;s=E;try{return L()}finally{s=k}},e.unstable_scheduleCallback=function(E,L,k){var B=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?B+k:B):k=B,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=k+Y,E={id:x++,callback:L,priorityLevel:E,startTime:k,expirationTime:Y,sortIndex:-1},k>B?(E.sortIndex=k,t(f,E),n(u)===null&&E===n(f)&&(v?(p(I),I=-1):v=!0,De(w,k-B))):(E.sortIndex=Y,t(u,E),g||d||(g=!0,We(C))),E},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(E){var L=s;return function(){var k=s;s=L;try{return E.apply(this,arguments)}finally{s=k}}}})(hc);pc.exports=hc;var Xf=pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=A,Ge=Xf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mc=new Set,Mr={};function Sn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(Mr[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gi=Object.prototype.hasOwnProperty,Yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zs={},Rs={};function Wf(e){return gi.call(Rs,e)?!0:gi.call(zs,e)?!1:Yf.test(e)?Rs[e]=!0:(zs[e]=!0,!1)}function Kf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zf(e,t,n,r){if(t===null||typeof t>"u"||Kf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var go=/[\-:]([a-z])/g;function yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(go,yo);we[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(go,yo);we[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(go,yo);we[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function vo(e,t,n,r){var a=we.hasOwnProperty(t)?we[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zf(t,n,a,r)&&(n=null),r||a===null?Wf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),In=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),xo=Symbol.for("react.strict_mode"),yi=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),_o=Symbol.for("react.forward_ref"),vi=Symbol.for("react.suspense"),xi=Symbol.for("react.suspense_list"),wo=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),vc=Symbol.for("react.offscreen"),Ls=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Ls&&e[Ls]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ol;function xr(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Dl=!1;function Fl(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var a=f.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,c=l.length-1;1<=o&&0<=c&&a[o]!==l[c];)c--;for(;1<=o&&0<=c;o--,c--)if(a[o]!==l[c]){if(o!==1||c!==1)do if(o--,c--,0>c||a[o]!==l[c]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=c);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function Jf(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function _i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case In:return"Portal";case yi:return"Profiler";case xo:return"StrictMode";case vi:return"Suspense";case xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yc:return(e.displayName||"Context")+".Consumer";case gc:return(e._context.displayName||"Context")+".Provider";case _o:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wo:return t=e.displayName||null,t!==null?t:_i(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return _i(e(t))}catch{}}return null}function qf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _i(t);case 8:return t===xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ia(e){e._valueTracker||(e._valueTracker=ep(e))}function _c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $a(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wi(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Os(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wc(e,t){t=t.checked,t!=null&&vo(e,"checked",t,!1)}function ki(e,t){wc(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Si(e,t.type,n):t.hasOwnProperty("defaultValue")&&Si(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Si(e,t,n){(t!=="number"||$a(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _r=Array.isArray;function Un(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(_r(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function kc(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oa,Cc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function Ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function Nc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var np=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,t){if(t){if(np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ti(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ei=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,Gn=null,Xn=null;function Bs(e){if(e=ea(e)){if(typeof bi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=xl(t),bi(e.stateNode,e.type,t))}}function Tc(e){Gn?Xn?Xn.push(e):Xn=[e]:Gn=e}function Ec(){if(Gn){var e=Gn,t=Xn;if(Xn=Gn=null,Bs(e),t)for(e=0;e<t.length;e++)Bs(t[e])}}function bc(e,t){return e(t)}function Pc(){}var $l=!1;function Ic(e,t,n){if($l)return e(t,n);$l=!0;try{return bc(e,t,n)}finally{$l=!1,(Gn!==null||Xn!==null)&&(Pc(),Ec())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Pi=!1;if(Tt)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Pi=!1}function rp(e,t,n,r,a,l,o,c,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(x){this.onError(x)}}var Ar=!1,Ba=null,Ha=!1,Ii=null,ap={onError:function(e){Ar=!0,Ba=e}};function lp(e,t,n,r,a,l,o,c,u){Ar=!1,Ba=null,rp.apply(ap,arguments)}function ip(e,t,n,r,a,l,o,c,u){if(lp.apply(this,arguments),Ar){if(Ar){var f=Ba;Ar=!1,Ba=null}else throw Error(S(198));Ha||(Ha=!0,Ii=f)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hs(e){if(Cn(e)!==e)throw Error(S(188))}function op(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Hs(a),e;if(l===r)return Hs(a),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,c=a.child;c;){if(c===n){o=!0,n=a,r=l;break}if(c===r){o=!0,r=a,n=l;break}c=c.sibling}if(!o){for(c=l.child;c;){if(c===n){o=!0,n=l,r=a;break}if(c===r){o=!0,r=l,n=a;break}c=c.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Mc(e){return e=op(e),e!==null?zc(e):null}function zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zc(e);if(t!==null)return t;e=e.sibling}return null}var Rc=Ge.unstable_scheduleCallback,Vs=Ge.unstable_cancelCallback,sp=Ge.unstable_shouldYield,up=Ge.unstable_requestPaint,ce=Ge.unstable_now,cp=Ge.unstable_getCurrentPriorityLevel,So=Ge.unstable_ImmediatePriority,Lc=Ge.unstable_UserBlockingPriority,Va=Ge.unstable_NormalPriority,dp=Ge.unstable_LowPriority,Oc=Ge.unstable_IdlePriority,ml=null,vt=null;function fp(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:mp,pp=Math.log,hp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(pp(e)/hp|0)|0}var sa=64,ua=4194304;function wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ua(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~a;c!==0?r=wr(c):(l&=o,l!==0&&(r=wr(l)))}else o=n&~a,o!==0?r=wr(o):l!==0&&(r=wr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),a=1<<n,r|=e[n],t&=~a;return r}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-st(l),c=1<<o,u=a[o];u===-1?(!(c&n)||c&r)&&(a[o]=gp(c,t)):u<=t&&(e.expiredLanes|=c),l&=~c}}function ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dc(){var e=sa;return sa<<=1,!(sa&4194240)&&(sa=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-st(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function Co(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Q=0;function Fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $c,Ao,Bc,Hc,Vc,Mi=!1,ca=[],Ut=null,Gt=null,Xt=null,Lr=new Map,Or=new Map,Ft=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Us(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function fr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ea(t),t!==null&&Ao(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function _p(e,t,n,r,a){switch(t){case"focusin":return Ut=fr(Ut,e,t,n,r,a),!0;case"dragenter":return Gt=fr(Gt,e,t,n,r,a),!0;case"mouseover":return Xt=fr(Xt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Lr.set(l,fr(Lr.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Or.set(l,fr(Or.get(l)||null,e,t,n,r,a)),!0}return!1}function Uc(e){var t=fn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=jc(n),t!==null){e.blockedOn=t,Vc(e.priority,function(){Bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ea(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ei=r,n.target.dispatchEvent(r),Ei=null}else return t=ea(n),t!==null&&Ao(t),e.blockedOn=n,!1;t.shift()}return!0}function Gs(e,t,n){Ea(e)&&n.delete(t)}function wp(){Mi=!1,Ut!==null&&Ea(Ut)&&(Ut=null),Gt!==null&&Ea(Gt)&&(Gt=null),Xt!==null&&Ea(Xt)&&(Xt=null),Lr.forEach(Gs),Or.forEach(Gs)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,wp)))}function Dr(e){function t(a){return pr(a,e)}if(0<ca.length){pr(ca[0],e);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&pr(Ut,e),Gt!==null&&pr(Gt,e),Xt!==null&&pr(Xt,e),Lr.forEach(t),Or.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Uc(n),n.blockedOn===null&&Ft.shift()}var Qn=It.ReactCurrentBatchConfig,Ga=!0;function kp(e,t,n,r){var a=Q,l=Qn.transition;Qn.transition=null;try{Q=1,No(e,t,n,r)}finally{Q=a,Qn.transition=l}}function Sp(e,t,n,r){var a=Q,l=Qn.transition;Qn.transition=null;try{Q=4,No(e,t,n,r)}finally{Q=a,Qn.transition=l}}function No(e,t,n,r){if(Ga){var a=zi(e,t,n,r);if(a===null)Zl(e,t,r,Xa,n),Us(e,r);else if(_p(a,e,t,n,r))r.stopPropagation();else if(Us(e,r),t&4&&-1<xp.indexOf(e)){for(;a!==null;){var l=ea(a);if(l!==null&&$c(l),l=zi(e,t,n,r),l===null&&Zl(e,t,r,Xa,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Xa=null;function zi(e,t,n,r){if(Xa=null,e=ko(r),e=fn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xa=e,null}function Gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case So:return 1;case Lc:return 4;case Va:case dp:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var Bt=null,To=null,ba=null;function Xc(){if(ba)return ba;var e,t=To,n=t.length,r,a="value"in Bt?Bt.value:Bt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return ba=a.slice(e,1<r?1-r:void 0)}function Pa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function da(){return!0}function Xs(){return!1}function Qe(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?da:Xs,this.isPropagationStopped=Xs,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Qe(ar),qr=oe({},ar,{view:0,detail:0}),Cp=Qe(qr),Hl,Vl,hr,gl=oe({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Hl=e.screenX-hr.screenX,Vl=e.screenY-hr.screenY):Vl=Hl=0,hr=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),Qs=Qe(gl),Ap=oe({},gl,{dataTransfer:0}),Np=Qe(Ap),Tp=oe({},qr,{relatedTarget:0}),Ul=Qe(Tp),Ep=oe({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=Qe(Ep),Pp=oe({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ip=Qe(Pp),jp=oe({},ar,{data:0}),Ys=Qe(jp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rp[e])?!!t[e]:!1}function bo(){return Lp}var Op=oe({},qr,{key:function(e){if(e.key){var t=Mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bo,charCode:function(e){return e.type==="keypress"?Pa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=Qe(Op),Fp=oe({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ws=Qe(Fp),$p=oe({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bo}),Bp=Qe($p),Hp=oe({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=Qe(Hp),Up=oe({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=Qe(Up),Xp=[9,13,27,32],Po=Tt&&"CompositionEvent"in window,Nr=null;Tt&&"documentMode"in document&&(Nr=document.documentMode);var Qp=Tt&&"TextEvent"in window&&!Nr,Qc=Tt&&(!Po||Nr&&8<Nr&&11>=Nr),Ks=" ",Zs=!1;function Yc(e,t){switch(e){case"keyup":return Xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Yp(e,t){switch(e){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:(Zs=!0,Ks);case"textInput":return e=t.data,e===Ks&&Zs?null:e;default:return null}}function Wp(e,t){if(Mn)return e==="compositionend"||!Po&&Yc(e,t)?(e=Xc(),ba=To=Bt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qc&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Kc(e,t,n,r){Tc(r),t=Qa(t,"onChange"),0<t.length&&(n=new Eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Fr=null;function Zp(e){od(e,0)}function yl(e){var t=Ln(e);if(_c(t))return e}function Jp(e,t){if(e==="change")return t}var Zc=!1;if(Tt){var Gl;if(Tt){var Xl="oninput"in document;if(!Xl){var qs=document.createElement("div");qs.setAttribute("oninput","return;"),Xl=typeof qs.oninput=="function"}Gl=Xl}else Gl=!1;Zc=Gl&&(!document.documentMode||9<document.documentMode)}function eu(){Tr&&(Tr.detachEvent("onpropertychange",Jc),Fr=Tr=null)}function Jc(e){if(e.propertyName==="value"&&yl(Fr)){var t=[];Kc(t,Fr,e,ko(e)),Ic(Zp,t)}}function qp(e,t,n){e==="focusin"?(eu(),Tr=t,Fr=n,Tr.attachEvent("onpropertychange",Jc)):e==="focusout"&&eu()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Fr)}function th(e,t){if(e==="click")return yl(t)}function nh(e,t){if(e==="input"||e==="change")return yl(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:rh;function $r(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!gi.call(t,a)||!ct(e[a],t[a]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ed(){for(var e=window,t=$a();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$a(e.document)}return t}function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ah(e){var t=ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(r!==null&&Io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=nu(n,l);var o=nu(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lh=Tt&&"documentMode"in document&&11>=document.documentMode,zn=null,Ri=null,Er=null,Li=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Li||zn==null||zn!==$a(r)||(r=zn,"selectionStart"in r&&Io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&$r(Er,r)||(Er=r,r=Qa(Ri,"onSelect"),0<r.length&&(t=new Eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},Ql={},td={};Tt&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function vl(e){if(Ql[e])return Ql[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return Ql[e]=t[n];return e}var nd=vl("animationend"),rd=vl("animationiteration"),ad=vl("animationstart"),ld=vl("transitionend"),id=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){id.set(e,t),Sn(t,[e])}for(var Yl=0;Yl<au.length;Yl++){var Wl=au[Yl],ih=Wl.toLowerCase(),oh=Wl[0].toUpperCase()+Wl.slice(1);en(ih,"on"+oh)}en(nd,"onAnimationEnd");en(rd,"onAnimationIteration");en(ad,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(ld,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ip(r,t,void 0,e),e.currentTarget=null}function od(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,f=c.currentTarget;if(c=c.listener,u!==l&&a.isPropagationStopped())break e;lu(a,c,f),l=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,f=c.currentTarget,c=c.listener,u!==l&&a.isPropagationStopped())break e;lu(a,c,f),l=u}}}if(Ha)throw e=Ii,Ha=!1,Ii=null,e}function te(e,t){var n=t[Bi];n===void 0&&(n=t[Bi]=new Set);var r=e+"__bubble";n.has(r)||(sd(t,e,2,!1),n.add(r))}function Kl(e,t,n){var r=0;t&&(r|=4),sd(n,e,r,t)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[pa]){e[pa]=!0,mc.forEach(function(n){n!=="selectionchange"&&(sh.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pa]||(t[pa]=!0,Kl("selectionchange",!1,t))}}function sd(e,t,n,r){switch(Gc(t)){case 1:var a=kp;break;case 4:a=Sp;break;default:a=No}n=a.bind(null,t,n,e),a=void 0,!Pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;c!==null;){if(o=fn(c),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}c=c.parentNode}}r=r.return}Ic(function(){var f=l,x=ko(n),i=[];e:{var s=id.get(e);if(s!==void 0){var d=Eo,g=e;switch(e){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":d=Dp;break;case"focusin":g="focus",d=Ul;break;case"focusout":g="blur",d=Ul;break;case"beforeblur":case"afterblur":d=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Bp;break;case nd:case rd:case ad:d=bp;break;case ld:d=Vp;break;case"scroll":d=Cp;break;case"wheel":d=Gp;break;case"copy":case"cut":case"paste":d=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Ws}var v=(t&4)!==0,_=!v&&e==="scroll",p=v?s!==null?s+"Capture":null:s;v=[];for(var h=f,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,p!==null&&(w=Rr(h,p),w!=null&&v.push(Hr(h,w,y)))),_)break;h=h.return}0<v.length&&(s=new d(s,g,null,n,x),i.push({event:s,listeners:v}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",s&&n!==Ei&&(g=n.relatedTarget||n.fromElement)&&(fn(g)||g[Et]))break e;if((d||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=f,g=g?fn(g):null,g!==null&&(_=Cn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=f),d!==g)){if(v=Qs,w="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ws,w="onPointerLeave",p="onPointerEnter",h="pointer"),_=d==null?s:Ln(d),y=g==null?s:Ln(g),s=new v(w,h+"leave",d,n,x),s.target=_,s.relatedTarget=y,w=null,fn(x)===f&&(v=new v(p,h+"enter",g,n,x),v.target=y,v.relatedTarget=_,w=v),_=w,d&&g)t:{for(v=d,p=g,h=0,y=v;y;y=En(y))h++;for(y=0,w=p;w;w=En(w))y++;for(;0<h-y;)v=En(v),h--;for(;0<y-h;)p=En(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=En(v),p=En(p)}v=null}else v=null;d!==null&&iu(i,s,d,v,!1),g!==null&&_!==null&&iu(i,_,g,v,!0)}}e:{if(s=f?Ln(f):window,d=s.nodeName&&s.nodeName.toLowerCase(),d==="select"||d==="input"&&s.type==="file")var C=Jp;else if(Js(s))if(Zc)C=nh;else{C=eh;var N=qp}else(d=s.nodeName)&&d.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(C=th);if(C&&(C=C(e,f))){Kc(i,C,n,x);break e}N&&N(e,s,f),e==="focusout"&&(N=s._wrapperState)&&N.controlled&&s.type==="number"&&Si(s,"number",s.value)}switch(N=f?Ln(f):window,e){case"focusin":(Js(N)||N.contentEditable==="true")&&(zn=N,Ri=f,Er=null);break;case"focusout":Er=Ri=zn=null;break;case"mousedown":Li=!0;break;case"contextmenu":case"mouseup":case"dragend":Li=!1,ru(i,n,x);break;case"selectionchange":if(lh)break;case"keydown":case"keyup":ru(i,n,x)}var T;if(Po)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Mn?Yc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Qc&&n.locale!=="ko"&&(Mn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Mn&&(T=Xc()):(Bt=x,To="value"in Bt?Bt.value:Bt.textContent,Mn=!0)),N=Qa(f,I),0<N.length&&(I=new Ys(I,e,null,n,x),i.push({event:I,listeners:N}),T?I.data=T:(T=Wc(n),T!==null&&(I.data=T)))),(T=Qp?Yp(e,n):Wp(e,n))&&(f=Qa(f,"onBeforeInput"),0<f.length&&(x=new Ys("onBeforeInput","beforeinput",null,n,x),i.push({event:x,listeners:f}),x.data=T))}od(i,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qa(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Rr(e,n),l!=null&&r.unshift(Hr(e,l,a)),l=Rr(e,t),l!=null&&r.push(Hr(e,l,a))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,f=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&f!==null&&(c=f,a?(u=Rr(n,l),u!=null&&o.unshift(Hr(n,u,c))):a||(u=Rr(n,l),u!=null&&o.push(Hr(n,u,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var uh=/\r\n?/g,ch=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(uh,`
`).replace(ch,"")}function ha(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(S(425))}function Ya(){}var Oi=null,Di=null;function Fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $i=typeof setTimeout=="function"?setTimeout:void 0,dh=typeof clearTimeout=="function"?clearTimeout:void 0,su=typeof Promise=="function"?Promise:void 0,fh=typeof queueMicrotask=="function"?queueMicrotask:typeof su<"u"?function(e){return su.resolve(null).then(e).catch(ph)}:$i;function ph(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Dr(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),gt="__reactFiber$"+lr,Vr="__reactProps$"+lr,Et="__reactContainer$"+lr,Bi="__reactEvents$"+lr,hh="__reactListeners$"+lr,mh="__reactHandles$"+lr;function fn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[gt])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function ea(e){return e=e[gt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function xl(e){return e[Vr]||null}var Hi=[],On=-1;function tn(e){return{current:e}}function ne(e){0>On||(e.current=Hi[On],Hi[On]=null,On--)}function Z(e,t){On++,Hi[On]=e.current,e.current=t}var qt={},Ne=tn(qt),Re=tn(!1),vn=qt;function Zn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Le(e){return e=e.childContextTypes,e!=null}function Wa(){ne(Re),ne(Ne)}function cu(e,t,n){if(Ne.current!==qt)throw Error(S(168));Z(Ne,t),Z(Re,n)}function ud(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,qf(e)||"Unknown",a));return oe({},n,r)}function Ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,vn=Ne.current,Z(Ne,e),Z(Re,Re.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=ud(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,ne(Re),ne(Ne),Z(Ne,e)):ne(Re),Z(Re,n)}var St=null,_l=!1,ql=!1;function cd(e){St===null?St=[e]:St.push(e)}function gh(e){_l=!0,cd(e)}function nn(){if(!ql&&St!==null){ql=!0;var e=0,t=Q;try{var n=St;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,_l=!1}catch(a){throw St!==null&&(St=St.slice(e+1)),Rc(So,nn),a}finally{Q=t,ql=!1}}return null}var Dn=[],Fn=0,Za=null,Ja=0,Ze=[],Je=0,xn=null,Ct=1,At="";function sn(e,t){Dn[Fn++]=Ja,Dn[Fn++]=Za,Za=e,Ja=t}function dd(e,t,n){Ze[Je++]=Ct,Ze[Je++]=At,Ze[Je++]=xn,xn=e;var r=Ct;e=At;var a=32-st(r)-1;r&=~(1<<a),n+=1;var l=32-st(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ct=1<<32-st(t)+a|n<<a|r,At=l+e}else Ct=1<<l|n<<a|r,At=e}function jo(e){e.return!==null&&(sn(e,1),dd(e,1,0))}function Mo(e){for(;e===Za;)Za=Dn[--Fn],Dn[Fn]=null,Ja=Dn[--Fn],Dn[Fn]=null;for(;e===xn;)xn=Ze[--Je],Ze[Je]=null,At=Ze[--Je],Ze[Je]=null,Ct=Ze[--Je],Ze[Je]=null}var Ue=null,Ve=null,re=!1,ot=null;function fd(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Ve=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Ct,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Ve=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ui(e){if(re){var t=Ve;if(t){var n=t;if(!fu(e,t)){if(Vi(e))throw Error(S(418));t=Qt(n.nextSibling);var r=Ue;t&&fu(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,re=!1,Ue=e)}}else{if(Vi(e))throw Error(S(418));e.flags=e.flags&-4097|2,re=!1,Ue=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function ma(e){if(e!==Ue)return!1;if(!re)return pu(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fi(e.type,e.memoizedProps)),t&&(t=Ve)){if(Vi(e))throw pd(),Error(S(418));for(;t;)fd(e,t),t=Qt(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Ue?Qt(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=Ve;e;)e=Qt(e.nextSibling)}function Jn(){Ve=Ue=null,re=!1}function zo(e){ot===null?ot=[e]:ot.push(e)}var yh=It.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var c=a.refs;o===null?delete c[l]:c[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function hd(e){function t(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function a(p,h){return p=Zt(p,h),p.index=0,p.sibling=null,p}function l(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function c(p,h,y,w){return h===null||h.tag!==6?(h=ii(y,p.mode,w),h.return=p,h):(h=a(h,y),h.return=p,h)}function u(p,h,y,w){var C=y.type;return C===jn?x(p,h,y.props.children,w,y.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ot&&hu(C)===h.type)?(w=a(h,y.props),w.ref=mr(p,h,y),w.return=p,w):(w=Oa(y.type,y.key,y.props,null,p.mode,w),w.ref=mr(p,h,y),w.return=p,w)}function f(p,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=oi(y,p.mode,w),h.return=p,h):(h=a(h,y.children||[]),h.return=p,h)}function x(p,h,y,w,C){return h===null||h.tag!==7?(h=gn(y,p.mode,w,C),h.return=p,h):(h=a(h,y),h.return=p,h)}function i(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ii(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case la:return y=Oa(h.type,h.key,h.props,null,p.mode,y),y.ref=mr(p,null,h),y.return=p,y;case In:return h=oi(h,p.mode,y),h.return=p,h;case Ot:var w=h._init;return i(p,w(h._payload),y)}if(_r(h)||cr(h))return h=gn(h,p.mode,y,null),h.return=p,h;ga(p,h)}return null}function s(p,h,y,w){var C=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:c(p,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case la:return y.key===C?u(p,h,y,w):null;case In:return y.key===C?f(p,h,y,w):null;case Ot:return C=y._init,s(p,h,C(y._payload),w)}if(_r(y)||cr(y))return C!==null?null:x(p,h,y,w,null);ga(p,y)}return null}function d(p,h,y,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(y)||null,c(h,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case la:return p=p.get(w.key===null?y:w.key)||null,u(h,p,w,C);case In:return p=p.get(w.key===null?y:w.key)||null,f(h,p,w,C);case Ot:var N=w._init;return d(p,h,y,N(w._payload),C)}if(_r(w)||cr(w))return p=p.get(y)||null,x(h,p,w,C,null);ga(h,w)}return null}function g(p,h,y,w){for(var C=null,N=null,T=h,I=h=0,j=null;T!==null&&I<y.length;I++){T.index>I?(j=T,T=null):j=T.sibling;var O=s(p,T,y[I],w);if(O===null){T===null&&(T=j);break}e&&T&&O.alternate===null&&t(p,T),h=l(O,h,I),N===null?C=O:N.sibling=O,N=O,T=j}if(I===y.length)return n(p,T),re&&sn(p,I),C;if(T===null){for(;I<y.length;I++)T=i(p,y[I],w),T!==null&&(h=l(T,h,I),N===null?C=T:N.sibling=T,N=T);return re&&sn(p,I),C}for(T=r(p,T);I<y.length;I++)j=d(T,p,I,y[I],w),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?I:j.key),h=l(j,h,I),N===null?C=j:N.sibling=j,N=j);return e&&T.forEach(function(G){return t(p,G)}),re&&sn(p,I),C}function v(p,h,y,w){var C=cr(y);if(typeof C!="function")throw Error(S(150));if(y=C.call(y),y==null)throw Error(S(151));for(var N=C=null,T=h,I=h=0,j=null,O=y.next();T!==null&&!O.done;I++,O=y.next()){T.index>I?(j=T,T=null):j=T.sibling;var G=s(p,T,O.value,w);if(G===null){T===null&&(T=j);break}e&&T&&G.alternate===null&&t(p,T),h=l(G,h,I),N===null?C=G:N.sibling=G,N=G,T=j}if(O.done)return n(p,T),re&&sn(p,I),C;if(T===null){for(;!O.done;I++,O=y.next())O=i(p,O.value,w),O!==null&&(h=l(O,h,I),N===null?C=O:N.sibling=O,N=O);return re&&sn(p,I),C}for(T=r(p,T);!O.done;I++,O=y.next())O=d(T,p,I,O.value,w),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?I:O.key),h=l(O,h,I),N===null?C=O:N.sibling=O,N=O);return e&&T.forEach(function(D){return t(p,D)}),re&&sn(p,I),C}function _(p,h,y,w){if(typeof y=="object"&&y!==null&&y.type===jn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case la:e:{for(var C=y.key,N=h;N!==null;){if(N.key===C){if(C=y.type,C===jn){if(N.tag===7){n(p,N.sibling),h=a(N,y.props.children),h.return=p,p=h;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ot&&hu(C)===N.type){n(p,N.sibling),h=a(N,y.props),h.ref=mr(p,N,y),h.return=p,p=h;break e}n(p,N);break}else t(p,N);N=N.sibling}y.type===jn?(h=gn(y.props.children,p.mode,w,y.key),h.return=p,p=h):(w=Oa(y.type,y.key,y.props,null,p.mode,w),w.ref=mr(p,h,y),w.return=p,p=w)}return o(p);case In:e:{for(N=y.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=a(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=oi(y,p.mode,w),h.return=p,p=h}return o(p);case Ot:return N=y._init,_(p,h,N(y._payload),w)}if(_r(y))return g(p,h,y,w);if(cr(y))return v(p,h,y,w);ga(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=a(h,y),h.return=p,p=h):(n(p,h),h=ii(y,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return _}var qn=hd(!0),md=hd(!1),qa=tn(null),el=null,$n=null,Ro=null;function Lo(){Ro=$n=el=null}function Oo(e){var t=qa.current;ne(qa),e._currentValue=t}function Gi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){el=e,Ro=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(el===null)throw Error(S(308));$n=e,el.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var pn=null;function Do(e){pn===null?pn=[e]:pn.push(e)}function gd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Do(t)):(n.next=a.next,a.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,bt(e,n)}return a=r.interleaved,a===null?(t.next=t,Do(r)):(t.next=a.next,a.next=t),r.interleaved=t,bt(e,n)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Co(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var a=e.updateQueue;Dt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var u=c,f=u.next;u.next=null,o===null?l=f:o.next=f,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==o&&(c===null?x.firstBaseUpdate=f:c.next=f,x.lastBaseUpdate=u))}if(l!==null){var i=a.baseState;o=0,x=f=u=null,c=l;do{var s=c.lane,d=c.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:d,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var g=e,v=c;switch(s=t,d=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){i=g.call(d,i,s);break e}i=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,s=typeof g=="function"?g.call(d,i,s):g,s==null)break e;i=oe({},i,s);break e;case 2:Dt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,s=a.effects,s===null?a.effects=[c]:s.push(c))}else d={eventTime:d,lane:s,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(f=x=d,u=i):x=x.next=d,o|=s;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;s=c,c=s.next,s.next=null,a.lastBaseUpdate=s,a.shared.pending=null}}while(!0);if(x===null&&(u=i),a.baseState=u,a.firstBaseUpdate=f,a.lastBaseUpdate=x,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);wn|=o,e.lanes=o,e.memoizedState=i}}function gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var ta={},xt=tn(ta),Ur=tn(ta),Gr=tn(ta);function hn(e){if(e===ta)throw Error(S(174));return e}function $o(e,t){switch(Z(Gr,t),Z(Ur,e),Z(xt,ta),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ai(t,e)}ne(xt),Z(xt,t)}function er(){ne(xt),ne(Ur),ne(Gr)}function vd(e){hn(Gr.current);var t=hn(xt.current),n=Ai(t,e.type);t!==n&&(Z(Ur,e),Z(xt,n))}function Bo(e){Ur.current===e&&(ne(xt),ne(Ur))}var le=tn(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function Ho(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var ja=It.ReactCurrentDispatcher,ti=It.ReactCurrentBatchConfig,_n=0,ie=null,he=null,ye=null,rl=!1,br=!1,Xr=0,vh=0;function Se(){throw Error(S(321))}function Vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Uo(e,t,n,r,a,l){if(_n=l,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ja.current=e===null||e.memoizedState===null?kh:Sh,e=n(r,a),br){l=0;do{if(br=!1,Xr=0,25<=l)throw Error(S(301));l+=1,ye=he=null,t.updateQueue=null,ja.current=Ch,e=n(r,a)}while(br)}if(ja.current=al,t=he!==null&&he.next!==null,_n=0,ye=he=ie=null,rl=!1,t)throw Error(S(300));return e}function Go(){var e=Xr!==0;return Xr=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ie.memoizedState=ye=e:ye=ye.next=e,ye}function rt(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ye===null?ie.memoizedState:ye.next;if(t!==null)ye=t,he=e;else{if(e===null)throw Error(S(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ye===null?ie.memoizedState=ye=e:ye=ye.next=e}return ye}function Qr(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=he,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var c=o=null,u=null,f=l;do{var x=f.lane;if((_n&x)===x)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var i={lane:x,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(c=u=i,o=r):u=u.next=i,ie.lanes|=x,wn|=x}f=f.next}while(f!==null&&f!==l);u===null?o=r:u.next=c,ct(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,ie.lanes|=l,wn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);ct(l,t.memoizedState)||(ze=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function xd(){}function _d(e,t){var n=ie,r=rt(),a=t(),l=!ct(r.memoizedState,a);if(l&&(r.memoizedState=a,ze=!0),r=r.queue,Xo(Sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Yr(9,kd.bind(null,n,r,a,t),void 0,null),ve===null)throw Error(S(349));_n&30||wd(n,t,a)}return a}function wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kd(e,t,n,r){t.value=n,t.getSnapshot=r,Cd(t)&&Ad(e)}function Sd(e,t,n){return n(function(){Cd(t)&&Ad(e)})}function Cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Ad(e){var t=bt(e,1);t!==null&&ut(t,e,1,-1)}function yu(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=wh.bind(null,ie,e),[t.memoizedState,e]}function Yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nd(){return rt().memoizedState}function Ma(e,t,n,r){var a=mt();ie.flags|=e,a.memoizedState=Yr(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var a=rt();r=r===void 0?null:r;var l=void 0;if(he!==null){var o=he.memoizedState;if(l=o.destroy,r!==null&&Vo(r,o.deps)){a.memoizedState=Yr(t,n,l,r);return}}ie.flags|=e,a.memoizedState=Yr(1|t,n,l,r)}function vu(e,t){return Ma(8390656,8,e,t)}function Xo(e,t){return wl(2048,8,e,t)}function Td(e,t){return wl(4,2,e,t)}function Ed(e,t){return wl(4,4,e,t)}function bd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pd(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,bd.bind(null,t,e),n)}function Qo(){}function Id(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Md(e,t,n){return _n&21?(ct(n,t)||(n=Dc(),ie.lanes|=n,wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function xh(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),t()}finally{Q=n,ti.transition=r}}function zd(){return rt().memoizedState}function _h(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rd(e))Ld(t,n);else if(n=gd(e,t,n,r),n!==null){var a=be();ut(n,e,r,a),Od(n,t,r)}}function wh(e,t,n){var r=Kt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))Ld(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,c=l(o,n);if(a.hasEagerState=!0,a.eagerState=c,ct(c,o)){var u=t.interleaved;u===null?(a.next=a,Do(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=gd(e,t,a,r),n!==null&&(a=be(),ut(n,e,r,a),Od(n,t,r))}}function Rd(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ld(e,t){br=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Co(e,n)}}var al={readContext:nt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},kh={readContext:nt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ma(4194308,4,bd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ma(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_h.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:Qo,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=xh.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,a=mt();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ve===null)throw Error(S(349));_n&30||wd(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,vu(Sd.bind(null,r,l,e),[e]),r.flags|=2048,Yr(9,kd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=mt(),t=ve.identifierPrefix;if(re){var n=At,r=Ct;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sh={readContext:nt,useCallback:Id,useContext:nt,useEffect:Xo,useImperativeHandle:Pd,useInsertionEffect:Td,useLayoutEffect:Ed,useMemo:jd,useReducer:ni,useRef:Nd,useState:function(){return ni(Qr)},useDebugValue:Qo,useDeferredValue:function(e){var t=rt();return Md(t,he.memoizedState,e)},useTransition:function(){var e=ni(Qr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:_d,useId:zd,unstable_isNewReconciler:!1},Ch={readContext:nt,useCallback:Id,useContext:nt,useEffect:Xo,useImperativeHandle:Pd,useInsertionEffect:Td,useLayoutEffect:Ed,useMemo:jd,useReducer:ri,useRef:Nd,useState:function(){return ri(Qr)},useDebugValue:Qo,useDeferredValue:function(e){var t=rt();return he===null?t.memoizedState=e:Md(t,he.memoizedState,e)},useTransition:function(){var e=ri(Qr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:_d,useId:zd,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),a=Kt(e),l=Nt(r,a);l.payload=t,n!=null&&(l.callback=n),t=Yt(e,l,a),t!==null&&(ut(t,e,a,r),Ia(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),a=Kt(e),l=Nt(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Yt(e,l,a),t!==null&&(ut(t,e,a,r),Ia(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Kt(e),a=Nt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Yt(e,a,r),t!==null&&(ut(t,e,r,n),Ia(t,e,r))}};function xu(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(a,l):!0}function Dd(e,t,n){var r=!1,a=qt,l=t.contextType;return typeof l=="object"&&l!==null?l=nt(l):(a=Le(t)?vn:Ne.current,r=t.contextTypes,l=(r=r!=null)?Zn(e,a):qt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function Qi(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Fo(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=nt(l):(l=Le(t)?vn:Ne.current,a.context=Zn(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Xi(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&kl.enqueueReplaceState(a,a.state,null),tl(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=Jf(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function ai(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ah=typeof WeakMap=="function"?WeakMap:Map;function Fd(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,ao=r),Yi(e,t)},n}function $d(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Yi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Yi(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ah;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Fh.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Su(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var Nh=It.ReactCurrentOwner,ze=!1;function Ee(e,t,n,r){t.child=e===null?md(t,null,n,r):qn(t,e.child,n,r)}function Cu(e,t,n,r,a){n=n.render;var l=t.ref;return Yn(t,a),r=Uo(e,t,n,r,l,a),n=Go(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pt(e,t,a)):(re&&n&&jo(t),t.flags|=1,Ee(e,t,r,a),t.child)}function Au(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!ts(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Bd(e,t,l,r,a)):(e=Oa(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(o,r)&&e.ref===t.ref)return Pt(e,t,a)}return t.flags|=1,e=Zt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Bd(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if($r(l,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Pt(e,t,a)}return Wi(e,t,n,r,a)}function Hd(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Hn,He),He|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Hn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Z(Hn,He),He|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Z(Hn,He),He|=r;return Ee(e,t,a,n),t.child}function Vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wi(e,t,n,r,a){var l=Le(n)?vn:Ne.current;return l=Zn(t,l),Yn(t,a),n=Uo(e,t,n,r,l,a),r=Go(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Pt(e,t,a)):(re&&r&&jo(t),t.flags|=1,Ee(e,t,n,a),t.child)}function Nu(e,t,n,r,a){if(Le(n)){var l=!0;Ka(t)}else l=!1;if(Yn(t,a),t.stateNode===null)za(e,t),Dd(t,n,r),Qi(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=nt(f):(f=Le(n)?vn:Ne.current,f=Zn(t,f));var x=n.getDerivedStateFromProps,i=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";i||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==f)&&_u(t,o,r,f),Dt=!1;var s=t.memoizedState;o.state=s,tl(t,r,o,a),u=t.memoizedState,c!==r||s!==u||Re.current||Dt?(typeof x=="function"&&(Xi(t,n,x,r),u=t.memoizedState),(c=Dt||xu(t,n,c,r,s,u,f))?(i||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,yd(e,t),c=t.memoizedProps,f=t.type===t.elementType?c:lt(t.type,c),o.props=f,i=t.pendingProps,s=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nt(u):(u=Le(n)?vn:Ne.current,u=Zn(t,u));var d=n.getDerivedStateFromProps;(x=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==i||s!==u)&&_u(t,o,r,u),Dt=!1,s=t.memoizedState,o.state=s,tl(t,r,o,a);var g=t.memoizedState;c!==i||s!==g||Re.current||Dt?(typeof d=="function"&&(Xi(t,n,d,r),g=t.memoizedState),(f=Dt||xu(t,n,f,r,s,g,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return Ki(e,t,n,r,l,a)}function Ki(e,t,n,r,a,l){Vd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&du(t,n,!1),Pt(e,t,l);r=t.stateNode,Nh.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=qn(t,e.child,null,l),t.child=qn(t,null,c,l)):Ee(e,t,c,l),t.memoizedState=r.state,a&&du(t,n,!0),t.child}function Ud(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),$o(e,t.containerInfo)}function Tu(e,t,n,r,a){return Jn(),zo(a),t.flags|=256,Ee(e,t,n,r),t.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,t,n){var r=t.pendingProps,a=le.current,l=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Z(le,a&1),e===null)return Ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Al(o,r,0,null),e=gn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ji(n),t.memoizedState=Zi,e):Yo(t,o));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return Th(e,t,o,r,c,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,c=a.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Zt(a,u),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?l=Zt(c,l):(l=gn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Ji(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Zi,r}return l=e.child,e=l.sibling,r=Zt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yo(e,t){return t=Al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ya(e,t,n,r){return r!==null&&zo(r),qn(t,e.child,null,n),e=Yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Th(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=ai(Error(S(422))),ya(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Al({mode:"visible",children:r.children},a,0,null),l=gn(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&qn(t,e.child,null,o),t.child.memoizedState=Ji(o),t.memoizedState=Zi,l);if(!(t.mode&1))return ya(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(S(419)),r=ai(l,r,void 0),ya(e,t,o,r)}if(c=(o&e.childLanes)!==0,ze||c){if(r=ve,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,bt(e,a),ut(r,e,a,-1))}return es(),r=ai(Error(S(421))),ya(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=$h.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Ve=Qt(a.nextSibling),Ue=t,re=!0,ot=null,e!==null&&(Ze[Je++]=Ct,Ze[Je++]=At,Ze[Je++]=xn,Ct=e.id,At=e.overflow,xn=t),t=Yo(t,r.children),t.flags|=4096,t)}function Eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gi(e.return,t,n)}function li(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Xd(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(Ee(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,n,t);else if(e.tag===19)Eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(le,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),li(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&nl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}li(t,!0,n,null,l);break;case"together":li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function za(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eh(e,t,n){switch(t.tag){case 3:Ud(t),Jn();break;case 5:vd(t);break;case 1:Le(t.type)&&Ka(t);break;case 4:$o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Z(qa,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Gd(e,t,n):(Z(le,le.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);Z(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Hd(e,t,n)}return Pt(e,t,n)}var Qd,qi,Yd,Wd;Qd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qi=function(){};Yd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,hn(xt.current);var l=null;switch(n){case"input":a=wi(e,a),r=wi(e,r),l=[];break;case"select":a=oe({},a,{value:void 0}),r=oe({},r,{value:void 0}),l=[];break;case"textarea":a=Ci(e,a),r=Ci(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ya)}Ni(n,r);var o;n=null;for(f in a)if(!r.hasOwnProperty(f)&&a.hasOwnProperty(f)&&a[f]!=null)if(f==="style"){var c=a[f];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mr.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var u=r[f];if(c=a!=null?a[f]:void 0,r.hasOwnProperty(f)&&u!==c&&(u!=null||c!=null))if(f==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(l=l||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&te("scroll",e),l||c===u||(l=[])):(l=l||[]).push(f,u))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};Wd=function(e,t,n,r){n!==r&&(t.flags|=4)};function gr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bh(e,t,n){var r=t.pendingProps;switch(Mo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Le(t.type)&&Wa(),Ce(t),null;case 3:return r=t.stateNode,er(),ne(Re),ne(Ne),Ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(oo(ot),ot=null))),qi(e,t),Ce(t),null;case 5:Bo(t);var a=hn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Yd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ce(t),null}if(e=hn(xt.current),ma(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[gt]=t,r[Vr]=l,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(a=0;a<kr.length;a++)te(kr[a],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Os(r,l),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},te("invalid",r);break;case"textarea":Fs(r,l),te("invalid",r)}Ni(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&ha(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&ha(r.textContent,c,e),a=["children",""+c]):Mr.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":ia(r),Ds(r,l,!0);break;case"textarea":ia(r),$s(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ya)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[gt]=t,e[Vr]=r,Qd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ti(n,r),n){case"dialog":te("cancel",e),te("close",e),a=r;break;case"iframe":case"object":case"embed":te("load",e),a=r;break;case"video":case"audio":for(a=0;a<kr.length;a++)te(kr[a],e);a=r;break;case"source":te("error",e),a=r;break;case"img":case"image":case"link":te("error",e),te("load",e),a=r;break;case"details":te("toggle",e),a=r;break;case"input":Os(e,r),a=wi(e,r),te("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=oe({},r,{value:void 0}),te("invalid",e);break;case"textarea":Fs(e,r),a=Ci(e,r),te("invalid",e);break;default:a=r}Ni(n,a),c=a;for(l in c)if(c.hasOwnProperty(l)){var u=c[l];l==="style"?Nc(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Cc(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zr(e,u):typeof u=="number"&&zr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Mr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&te("scroll",e):u!=null&&vo(e,l,u,o))}switch(n){case"input":ia(e),Ds(e,r,!1);break;case"textarea":ia(e),$s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Un(e,!!r.multiple,l,!1):r.defaultValue!=null&&Un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Wd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=hn(Gr.current),hn(xt.current),ma(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(l=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ve!==null&&t.mode&1&&!(t.flags&128))pd(),Jn(),t.flags|=98560,l=!1;else if(l=ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[gt]=t}else Jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),l=!1}else ot!==null&&(oo(ot),ot=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?me===0&&(me=3):es())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return er(),qi(e,t),e===null&&Br(t.stateNode.containerInfo),Ce(t),null;case 10:return Oo(t.type._context),Ce(t),null;case 17:return Le(t.type)&&Wa(),Ce(t),null;case 19:if(ne(le),l=t.memoizedState,l===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)gr(l,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=nl(e),o!==null){for(t.flags|=128,gr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(le,le.current&1|2),t.child}e=e.sibling}l.tail!==null&&ce()>nr&&(t.flags|=128,r=!0,gr(l,!1),t.lanes=4194304)}else{if(!r)if(e=nl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!re)return Ce(t),null}else 2*ce()-l.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,gr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ce(),t.sibling=null,n=le.current,Z(le,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return qo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Ph(e,t){switch(Mo(t),t.tag){case 1:return Le(t.type)&&Wa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),ne(Re),ne(Ne),Ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bo(t),null;case 13:if(ne(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(le),null;case 4:return er(),null;case 10:return Oo(t.type._context),null;case 22:case 23:return qo(),null;case 24:return null;default:return null}}var va=!1,Ae=!1,Ih=typeof WeakSet=="function"?WeakSet:Set,P=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function eo(e,t,n){try{n()}catch(r){ue(e,t,r)}}var bu=!1;function jh(e,t){if(Oi=Ga,e=ed(),Io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,f=0,x=0,i=e,s=null;t:for(;;){for(var d;i!==n||a!==0&&i.nodeType!==3||(c=o+a),i!==l||r!==0&&i.nodeType!==3||(u=o+r),i.nodeType===3&&(o+=i.nodeValue.length),(d=i.firstChild)!==null;)s=i,i=d;for(;;){if(i===e)break t;if(s===n&&++f===a&&(c=o),s===l&&++x===r&&(u=o),(d=i.nextSibling)!==null)break;i=s,s=i.parentNode}i=d}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Di={focusedElem:e,selectionRange:n},Ga=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:lt(t.type,v),_);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=bu,bu=!1,g}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&eo(t,n,l)}a=a.next}while(a!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function to(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kd(e){var t=e.alternate;t!==null&&(e.alternate=null,Kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Vr],delete t[Bi],delete t[hh],delete t[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zd(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function no(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ya));else if(r!==4&&(e=e.child,e!==null))for(no(e,t,n),e=e.sibling;e!==null;)no(e,t,n),e=e.sibling}function ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ro(e,t,n),e=e.sibling;e!==null;)ro(e,t,n),e=e.sibling}var xe=null,it=!1;function Rt(e,t,n){for(n=n.child;n!==null;)Jd(e,t,n),n=n.sibling}function Jd(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:Ae||Bn(n,t);case 6:var r=xe,a=it;xe=null,Rt(e,t,n),xe=r,it=a,xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Dr(e)):Jl(xe,n.stateNode));break;case 4:r=xe,a=it,xe=n.stateNode.containerInfo,it=!0,Rt(e,t,n),xe=r,it=a;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&eo(n,t,o),a=a.next}while(a!==r)}Rt(e,t,n);break;case 1:if(!Ae&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ue(n,t,c)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Rt(e,t,n),Ae=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ih),t.forEach(function(r){var a=Bh.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:xe=c.stateNode,it=!1;break e;case 3:xe=c.stateNode.containerInfo,it=!0;break e;case 4:xe=c.stateNode.containerInfo,it=!0;break e}c=c.return}if(xe===null)throw Error(S(160));Jd(l,o,a),xe=null,it=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(f){ue(a,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}function qd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),pt(e),r&4){try{Pr(3,e,e.return),Sl(3,e)}catch(v){ue(e,e.return,v)}try{Pr(5,e,e.return)}catch(v){ue(e,e.return,v)}}break;case 1:at(t,e),pt(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(at(t,e),pt(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var a=e.stateNode;try{zr(a,"")}catch(v){ue(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&wc(a,l),Ti(c,o);var f=Ti(c,l);for(o=0;o<u.length;o+=2){var x=u[o],i=u[o+1];x==="style"?Nc(a,i):x==="dangerouslySetInnerHTML"?Cc(a,i):x==="children"?zr(a,i):vo(a,x,i,f)}switch(c){case"input":ki(a,l);break;case"textarea":kc(a,l);break;case"select":var s=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?Un(a,!!l.multiple,d,!1):s!==!!l.multiple&&(l.defaultValue!=null?Un(a,!!l.multiple,l.defaultValue,!0):Un(a,!!l.multiple,l.multiple?[]:"",!1))}a[Vr]=l}catch(v){ue(e,e.return,v)}}break;case 6:if(at(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(v){ue(e,e.return,v)}}break;case 3:if(at(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(v){ue(e,e.return,v)}break;case 4:at(t,e),pt(e);break;case 13:at(t,e),pt(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Zo=ce())),r&4&&Iu(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(f=Ae)||x,at(t,e),Ae=f):at(t,e),pt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!x&&e.mode&1)for(P=e,x=e.child;x!==null;){for(i=P=x;P!==null;){switch(s=P,d=s.child,s.tag){case 0:case 11:case 14:case 15:Pr(4,s,s.return);break;case 1:Bn(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){ue(r,n,v)}}break;case 5:Bn(s,s.return);break;case 22:if(s.memoizedState!==null){Mu(i);continue}}d!==null?(d.return=s,P=d):Mu(i)}x=x.sibling}e:for(x=null,i=e;;){if(i.tag===5){if(x===null){x=i;try{a=i.stateNode,f?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=i.stateNode,u=i.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=Ac("display",o))}catch(v){ue(e,e.return,v)}}}else if(i.tag===6){if(x===null)try{i.stateNode.nodeValue=f?"":i.memoizedProps}catch(v){ue(e,e.return,v)}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;x===i&&(x=null),i=i.return}x===i&&(x=null),i.sibling.return=i.return,i=i.sibling}}break;case 19:at(t,e),pt(e),r&4&&Iu(e);break;case 21:break;default:at(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(zr(a,""),r.flags&=-33);var l=Pu(e);ro(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,c=Pu(e);no(e,c,o);break;default:throw Error(S(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mh(e,t,n){P=e,ef(e)}function ef(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||va;if(!o){var c=a.alternate,u=c!==null&&c.memoizedState!==null||Ae;c=va;var f=Ae;if(va=o,(Ae=u)&&!f)for(P=a;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?zu(a):u!==null?(u.return=o,P=u):zu(a);for(;l!==null;)P=l,ef(l),l=l.sibling;P=a,va=c,Ae=f}ju(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,P=l):ju(e)}}function ju(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&gu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gu(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var x=f.memoizedState;if(x!==null){var i=x.dehydrated;i!==null&&Dr(i)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ae||t.flags&512&&to(t)}catch(s){ue(t,t.return,s)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Mu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function zu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){ue(t,a,u)}}var l=t.return;try{to(t)}catch(u){ue(t,l,u)}break;case 5:var o=t.return;try{to(t)}catch(u){ue(t,o,u)}}}catch(u){ue(t,t.return,u)}if(t===e){P=null;break}var c=t.sibling;if(c!==null){c.return=t.return,P=c;break}P=t.return}}var zh=Math.ceil,ll=It.ReactCurrentDispatcher,Wo=It.ReactCurrentOwner,tt=It.ReactCurrentBatchConfig,U=0,ve=null,de=null,_e=0,He=0,Hn=tn(0),me=0,Wr=null,wn=0,Cl=0,Ko=0,Ir=null,Me=null,Zo=0,nr=1/0,kt=null,il=!1,ao=null,Wt=null,xa=!1,Ht=null,ol=0,jr=0,lo=null,Ra=-1,La=0;function be(){return U&6?ce():Ra!==-1?Ra:Ra=ce()}function Kt(e){return e.mode&1?U&2&&_e!==0?_e&-_e:yh.transition!==null?(La===0&&(La=Dc()),La):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Gc(e.type)),e):1}function ut(e,t,n,r){if(50<jr)throw jr=0,lo=null,Error(S(185));Jr(e,n,r),(!(U&2)||e!==ve)&&(e===ve&&(!(U&2)&&(Cl|=n),me===4&&$t(e,_e)),Oe(e,r),n===1&&U===0&&!(t.mode&1)&&(nr=ce()+500,_l&&nn()))}function Oe(e,t){var n=e.callbackNode;yp(e,t);var r=Ua(e,e===ve?_e:0);if(r===0)n!==null&&Vs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vs(n),t===1)e.tag===0?gh(Ru.bind(null,e)):cd(Ru.bind(null,e)),fh(function(){!(U&6)&&nn()}),n=null;else{switch(Fc(r)){case 1:n=So;break;case 4:n=Lc;break;case 16:n=Va;break;case 536870912:n=Oc;break;default:n=Va}n=uf(n,tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tf(e,t){if(Ra=-1,La=0,U&6)throw Error(S(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Ua(e,e===ve?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var a=U;U|=2;var l=rf();(ve!==e||_e!==t)&&(kt=null,nr=ce()+500,mn(e,t));do try{Oh();break}catch(c){nf(e,c)}while(!0);Lo(),ll.current=l,U=a,de!==null?t=0:(ve=null,_e=0,t=me)}if(t!==0){if(t===2&&(a=ji(e),a!==0&&(r=a,t=io(e,a))),t===1)throw n=Wr,mn(e,0),$t(e,r),Oe(e,ce()),n;if(t===6)$t(e,r);else{if(a=e.current.alternate,!(r&30)&&!Rh(a)&&(t=sl(e,r),t===2&&(l=ji(e),l!==0&&(r=l,t=io(e,l))),t===1))throw n=Wr,mn(e,0),$t(e,r),Oe(e,ce()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:un(e,Me,kt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Zo+500-ce(),10<t)){if(Ua(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=$i(un.bind(null,e,Me,kt),t);break}un(e,Me,kt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-st(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zh(r/1960))-r,10<r){e.timeoutHandle=$i(un.bind(null,e,Me,kt),r);break}un(e,Me,kt);break;case 5:un(e,Me,kt);break;default:throw Error(S(329))}}}return Oe(e,ce()),e.callbackNode===n?tf.bind(null,e):null}function io(e,t){var n=Ir;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=sl(e,t),e!==2&&(t=Me,Me=n,t!==null&&oo(t)),e}function oo(e){Me===null?Me=e:Me.push.apply(Me,e)}function Rh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!ct(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Ko,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Ru(e){if(U&6)throw Error(S(327));Wn();var t=Ua(e,0);if(!(t&1))return Oe(e,ce()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=ji(e);r!==0&&(t=r,n=io(e,r))}if(n===1)throw n=Wr,mn(e,0),$t(e,t),Oe(e,ce()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Me,kt),Oe(e,ce()),null}function Jo(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(nr=ce()+500,_l&&nn())}}function kn(e){Ht!==null&&Ht.tag===0&&!(U&6)&&Wn();var t=U;U|=1;var n=tt.transition,r=Q;try{if(tt.transition=null,Q=1,e)return e()}finally{Q=r,tt.transition=n,U=t,!(U&6)&&nn()}}function qo(){He=Hn.current,ne(Hn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dh(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Mo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wa();break;case 3:er(),ne(Re),ne(Ne),Ho();break;case 5:Bo(r);break;case 4:er();break;case 13:ne(le);break;case 19:ne(le);break;case 10:Oo(r.type._context);break;case 22:case 23:qo()}n=n.return}if(ve=e,de=e=Zt(e.current,null),_e=He=t,me=0,Wr=null,Ko=Cl=wn=0,Me=Ir=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}pn=null}return e}function nf(e,t){do{var n=de;try{if(Lo(),ja.current=al,rl){for(var r=ie.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}rl=!1}if(_n=0,ye=he=ie=null,br=!1,Xr=0,Wo.current=null,n===null||n.return===null){me=1,Wr=t,de=null;break}e:{var l=e,o=n.return,c=n,u=t;if(t=_e,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,x=c,i=x.tag;if(!(x.mode&1)&&(i===0||i===11||i===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var d=ku(o);if(d!==null){d.flags&=-257,Su(d,o,c,l,t),d.mode&1&&wu(l,f,t),t=d,u=f;var g=t.updateQueue;if(g===null){var v=new Set;v.add(u),t.updateQueue=v}else g.add(u);break e}else{if(!(t&1)){wu(l,f,t),es();break e}u=Error(S(426))}}else if(re&&c.mode&1){var _=ku(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Su(_,o,c,l,t),zo(tr(u,c));break e}}l=u=tr(u,c),me!==4&&(me=2),Ir===null?Ir=[l]:Ir.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Fd(l,u,t);mu(l,p);break e;case 1:c=u;var h=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wt===null||!Wt.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=$d(l,c,t);mu(l,w);break e}}l=l.return}while(l!==null)}lf(n)}catch(C){t=C,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function rf(){var e=ll.current;return ll.current=al,e===null?al:e}function es(){(me===0||me===3||me===2)&&(me=4),ve===null||!(wn&268435455)&&!(Cl&268435455)||$t(ve,_e)}function sl(e,t){var n=U;U|=2;var r=rf();(ve!==e||_e!==t)&&(kt=null,mn(e,t));do try{Lh();break}catch(a){nf(e,a)}while(!0);if(Lo(),U=n,ll.current=r,de!==null)throw Error(S(261));return ve=null,_e=0,me}function Lh(){for(;de!==null;)af(de)}function Oh(){for(;de!==null&&!sp();)af(de)}function af(e){var t=sf(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?lf(e):de=t,Wo.current=null}function lf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ph(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(n=bh(n,t,He),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function un(e,t,n){var r=Q,a=tt.transition;try{tt.transition=null,Q=1,Dh(e,t,n,r)}finally{tt.transition=a,Q=r}return null}function Dh(e,t,n,r){do Wn();while(Ht!==null);if(U&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(vp(e,l),e===ve&&(de=ve=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,uf(Va,function(){return Wn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=tt.transition,tt.transition=null;var o=Q;Q=1;var c=U;U|=4,Wo.current=null,jh(e,n),qd(n,e),ah(Di),Ga=!!Oi,Di=Oi=null,e.current=n,Mh(n),up(),U=c,Q=o,tt.transition=l}else e.current=n;if(xa&&(xa=!1,Ht=e,ol=a),l=e.pendingLanes,l===0&&(Wt=null),fp(n.stateNode),Oe(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(il)throw il=!1,e=ao,ao=null,e;return ol&1&&e.tag!==0&&Wn(),l=e.pendingLanes,l&1?e===lo?jr++:(jr=0,lo=e):jr=0,nn(),null}function Wn(){if(Ht!==null){var e=Fc(ol),t=tt.transition,n=Q;try{if(tt.transition=null,Q=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,ol=0,U&6)throw Error(S(331));var a=U;for(U|=4,P=e.current;P!==null;){var l=P,o=l.child;if(P.flags&16){var c=l.deletions;if(c!==null){for(var u=0;u<c.length;u++){var f=c[u];for(P=f;P!==null;){var x=P;switch(x.tag){case 0:case 11:case 15:Pr(8,x,l)}var i=x.child;if(i!==null)i.return=x,P=i;else for(;P!==null;){x=P;var s=x.sibling,d=x.return;if(Kd(x),x===f){P=null;break}if(s!==null){s.return=d,P=s;break}P=d}}}var g=l.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}P=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,P=o;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,P=p;break e}P=l.return}}var h=e.current;for(P=h;P!==null;){o=P;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,P=y;else e:for(o=h;P!==null;){if(c=P,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Sl(9,c)}}catch(C){ue(c,c.return,C)}if(c===o){P=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,P=w;break e}P=c.return}}if(U=a,nn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{Q=n,tt.transition=t}}return!1}function Lu(e,t,n){t=tr(n,t),t=Fd(e,t,1),e=Yt(e,t,1),t=be(),e!==null&&(Jr(e,1,t),Oe(e,t))}function ue(e,t,n){if(e.tag===3)Lu(e,e,n);else for(;t!==null;){if(t.tag===3){Lu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=tr(n,e),e=$d(t,e,1),t=Yt(t,e,1),e=be(),t!==null&&(Jr(t,1,e),Oe(t,e));break}}t=t.return}}function Fh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(_e&n)===n&&(me===4||me===3&&(_e&130023424)===_e&&500>ce()-Zo?mn(e,0):Ko|=n),Oe(e,t)}function of(e,t){t===0&&(e.mode&1?(t=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):t=1);var n=be();e=bt(e,t),e!==null&&(Jr(e,t,n),Oe(e,n))}function $h(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),of(e,n)}function Bh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),of(e,n)}var sf;sf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Eh(e,t,n);ze=!!(e.flags&131072)}else ze=!1,re&&t.flags&1048576&&dd(t,Ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;za(e,t),e=t.pendingProps;var a=Zn(t,Ne.current);Yn(t,n),a=Uo(null,t,r,e,a,n);var l=Go();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(l=!0,Ka(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Fo(t),a.updater=kl,t.stateNode=a,a._reactInternals=t,Qi(t,r,e,n),t=Ki(null,t,r,!0,l,n)):(t.tag=0,re&&l&&jo(t),Ee(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(za(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Vh(r),e=lt(r,e),a){case 0:t=Wi(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=Cu(null,t,r,e,n);break e;case 14:t=Au(null,t,r,lt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:lt(r,a),Wi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:lt(r,a),Nu(e,t,r,a,n);case 3:e:{if(Ud(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,a=l.element,yd(e,t),tl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=tr(Error(S(423)),t),t=Tu(e,t,r,n,a);break e}else if(r!==a){a=tr(Error(S(424)),t),t=Tu(e,t,r,n,a);break e}else for(Ve=Qt(t.stateNode.containerInfo.firstChild),Ue=t,re=!0,ot=null,n=md(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===a){t=Pt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return vd(t),e===null&&Ui(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Fi(r,a)?o=null:l!==null&&Fi(r,l)&&(t.flags|=32),Vd(e,t),Ee(e,t,o,n),t.child;case 6:return e===null&&Ui(t),null;case 13:return Gd(e,t,n);case 4:return $o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:lt(r,a),Cu(e,t,r,a,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,Z(qa,r._currentValue),r._currentValue=o,l!==null)if(ct(l.value,o)){if(l.children===a.children&&!Re.current){t=Pt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){o=l.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Nt(-1,n&-n),u.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var x=f.pending;x===null?u.next=u:(u.next=x.next,x.next=u),f.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Gi(l.return,n,t),c.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Gi(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ee(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Yn(t,n),a=nt(a),r=r(a),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,a=lt(r,t.pendingProps),a=lt(r.type,a),Au(e,t,r,a,n);case 15:return Bd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:lt(r,a),za(e,t),t.tag=1,Le(r)?(e=!0,Ka(t)):e=!1,Yn(t,n),Dd(t,r,a),Qi(t,r,a,n),Ki(null,t,r,!0,e,n);case 19:return Xd(e,t,n);case 22:return Hd(e,t,n)}throw Error(S(156,t.tag))};function uf(e,t){return Rc(e,t)}function Hh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new Hh(e,t,n,r)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vh(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_o)return 11;if(e===wo)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oa(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")ts(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jn:return gn(n.children,a,l,t);case xo:o=8,a|=8;break;case yi:return e=et(12,n,t,a|2),e.elementType=yi,e.lanes=l,e;case vi:return e=et(13,n,t,a),e.elementType=vi,e.lanes=l,e;case xi:return e=et(19,n,t,a),e.elementType=xi,e.lanes=l,e;case vc:return Al(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gc:o=10;break e;case yc:o=9;break e;case _o:o=11;break e;case wo:o=14;break e;case Ot:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=et(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function gn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Al(e,t,n,r){return e=et(22,e,r,t),e.elementType=vc,e.lanes=n,e.stateNode={isHidden:!1},e}function ii(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function oi(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ns(e,t,n,r,a,l,o,c,u){return e=new Uh(e,t,n,c,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=et(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(l),e}function Gh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cf(e){if(!e)return qt;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Le(n))return ud(e,n,t)}return t}function df(e,t,n,r,a,l,o,c,u){return e=ns(n,r,!0,e,a,l,o,c,u),e.context=cf(null),n=e.current,r=be(),a=Kt(n),l=Nt(r,a),l.callback=t??null,Yt(n,l,a),e.current.lanes=a,Jr(e,a,r),Oe(e,r),e}function Nl(e,t,n,r){var a=t.current,l=be(),o=Kt(a);return n=cf(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(a,t,o),e!==null&&(ut(e,a,o,l),Ia(e,a,o)),o}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rs(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function Xh(){return null}var ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function as(e){this._internalRoot=e}Tl.prototype.render=as.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Nl(e,t,null,null)};Tl.prototype.unmount=as.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){Nl(null,e,null,null)}),t[Et]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&Uc(e)}};function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Qh(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var f=ul(o);l.call(f)}}var o=df(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=o,e[Et]=o.current,Br(e.nodeType===8?e.parentNode:e),kn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var f=ul(u);c.call(f)}}var u=ns(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=u,e[Et]=u.current,Br(e.nodeType===8?e.parentNode:e),kn(function(){Nl(t,u,n,r)}),u}function bl(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var c=a;a=function(){var u=ul(o);c.call(u)}}Nl(t,o,e,a)}else o=Qh(n,t,e,a,r);return ul(o)}$c=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wr(t.pendingLanes);n!==0&&(Co(t,n|1),Oe(t,ce()),!(U&6)&&(nr=ce()+500,nn()))}break;case 13:kn(function(){var r=bt(e,1);if(r!==null){var a=be();ut(r,e,1,a)}}),rs(e,1)}};Ao=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=be();ut(t,e,134217728,n)}rs(e,134217728)}};Bc=function(e){if(e.tag===13){var t=Kt(e),n=bt(e,t);if(n!==null){var r=be();ut(n,e,t,r)}rs(e,t)}};Hc=function(){return Q};Vc=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};bi=function(e,t,n){switch(t){case"input":if(ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=xl(r);if(!a)throw Error(S(90));_c(r),ki(r,a)}}}break;case"textarea":kc(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};bc=Jo;Pc=kn;var Yh={usingClientEntryPoint:!1,Events:[ea,Ln,xl,Tc,Ec,Jo]},yr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wh={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mc(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{ml=_a.inject(Wh),vt=_a}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yh;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ls(t))throw Error(S(200));return Gh(e,t,null,n)};Xe.createRoot=function(e,t){if(!ls(e))throw Error(S(299));var n=!1,r="",a=ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ns(e,1,!1,null,null,n,!1,r,a),e[Et]=t.current,Br(e.nodeType===8?e.parentNode:e),new as(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Mc(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return kn(e)};Xe.hydrate=function(e,t,n){if(!El(t))throw Error(S(200));return bl(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!ls(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=ff;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=df(t,null,e,1,n??null,a,!1,l,o),e[Et]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Tl(t)};Xe.render=function(e,t,n){if(!El(t))throw Error(S(200));return bl(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!El(e))throw Error(S(40));return e._reactRootContainer?(kn(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Xe.unstable_batchedUpdates=Jo;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return bl(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pf)}catch(e){console.error(e)}}pf(),fc.exports=Xe;var cn=fc.exports,Fu=cn;mi.createRoot=Fu.createRoot,mi.hydrateRoot=Fu.hydrateRoot;const $u=({onStart:e,onSettings:t,onHelp:n})=>m.jsxs("div",{className:"cg-main-menu",children:[m.jsxs("div",{className:"cg-menu-bg",children:[m.jsx("div",{className:"cg-menu-bg-gradient"}),m.jsx("div",{className:"cg-menu-bg-pattern"}),m.jsx("div",{className:"cg-menu-geass-symbols",children:m.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:m.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),m.jsxs("div",{className:"cg-menu-content",children:[m.jsxs("div",{className:"cg-menu-header",children:[m.jsxs("div",{className:"cg-menu-title-decoration",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:m.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),m.jsx("div",{className:"cg-title-line-right"})]}),m.jsxs("h1",{className:"cg-game-title",children:[m.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),m.jsx("span",{className:"cg-title-divider",children:":"}),m.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),m.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),m.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[m.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),m.jsx("div",{className:"cg-title-line-right"})]})]}),m.jsxs("nav",{className:"cg-menu-nav",children:[m.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("span",{className:"cg-button-text",children:"开始游戏"}),m.jsx("div",{className:"cg-button-shimmer"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:t,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),m.jsx("span",{className:"cg-button-text",children:"设置"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),m.jsx("footer",{className:"cg-menu-footer",children:m.jsx("div",{className:"cg-footer-decoration",children:m.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),m.jsx("style",{children:`
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
      `})]}),cl=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function Kh(e){return cl.find(t=>t.id===e)}function qe(e){if(!e)return"未知角色";const t=Kh(e);return(t==null?void 0:t.name)||e}const hf=(e,t)=>`/liars-game/avatars/${e}/${t}.png`,Zh=({characterId:e,size:t=160,avatarNumber:n,onLoad:r})=>{const[a,l]=A.useState(!1),[o,c]=A.useState(!1),u=A.useRef(null),[f]=A.useState(()=>n||Math.floor(Math.random()*4)+1),x=hf(e,f);return m.jsxs("div",{style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent"},children:[!a&&!o&&m.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"cg-avatar-spin 1s linear infinite"}}),o&&m.jsx("span",{style:{color:"#666",fontSize:t*.3},children:"🎭"}),m.jsx("img",{ref:u,src:x,alt:e,width:t,height:t,onLoad:()=>{l(!0),r==null||r()},onError:()=>c(!0),style:{position:"absolute",inset:0,width:t,height:t,objectFit:"cover",opacity:a?1:0,transition:"opacity 0.3s",borderRadius:"8px"}}),m.jsx("style",{children:"@keyframes cg-avatar-spin{to{transform:rotate(360deg)}}"})]})};class so{static preloadAvatar(t,n){const r=hf(t,n),a=new Image;a.src=r}}const is=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>m.jsx(Zh,{characterId:e,size:t,avatarNumber:n??1,priority:r}),Jh=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[a,l]=A.useState(null),[o]=A.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),c=cl.find(f=>f.id===e);A.useEffect(()=>{e&&so.preloadAvatar(e,o[e])},[e,o]);const u=f=>{const x=o[f];t(f,x)};return m.jsxs("div",{className:"cg-character-select",children:[m.jsxs("div",{className:"cg-select-bg",children:[m.jsx("div",{className:"cg-select-bg-gradient"}),m.jsx("div",{className:"cg-select-bg-pattern"})]}),m.jsxs("div",{className:"cg-select-content",children:[m.jsxs("header",{className:"cg-select-header",children:[m.jsxs("button",{className:"cg-back-button",onClick:r,children:[m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),m.jsx("span",{children:"返回"})]}),m.jsx("h2",{className:"cg-select-title",children:m.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),m.jsx("div",{className:"cg-select-placeholder"})]}),m.jsx("div",{className:"cg-character-grid",children:cl.map(f=>{const x=e===f.id,i=a===f.id;return m.jsxs("div",{className:`cg-character-card ${x?"cg-selected":""} ${i?"cg-hovered":""}`,onClick:()=>u(f.id),onMouseEnter:()=>l(f.id),onMouseLeave:()=>l(null),children:[m.jsxs("div",{className:"cg-card-frame",children:[m.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),m.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),m.jsx("div",{className:"cg-character-preview",children:m.jsx(is,{characterId:f.id,size:300,avatarNumber:o[f.id],priority:a===f.id||e===f.id})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("h3",{className:"cg-character-name",children:f.name}),m.jsx("p",{className:"cg-character-name-en",children:f.nameEn}),m.jsx("div",{className:"cg-character-skill",children:m.jsx("span",{className:"cg-skill-name",children:f.skill.name})})]}),x&&m.jsx("div",{className:"cg-selected-indicator",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:m.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),m.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${f.color}40 0%, transparent 70%)`}})]},f.id)})}),c&&m.jsx("div",{className:"cg-character-detail",children:m.jsxs("div",{className:"cg-detail-frame",children:[m.jsxs("div",{className:"cg-detail-content",children:[m.jsx("p",{className:"cg-detail-description",children:c.description}),m.jsxs("div",{className:"cg-detail-skill",children:[m.jsx("span",{className:"cg-skill-label",children:"技能:"}),m.jsx("span",{className:"cg-skill-value",children:c.skill.name}),m.jsx("p",{className:"cg-skill-desc",children:c.skill.description})]})]}),m.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[m.jsx("span",{children:"确认选择"}),m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),m.jsx("style",{children:`
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
      `})]})},ln={play:1500,aiPlay:1500,challenge:1500,dodge:1500,hit:1500,skip:1500,think:1e3},on={play:3,aiPlay:3,challenge:5,dodge:4,hit:4,skip:2,think:1},Bu={play:{duration:ln.play,priority:on.play,interruptible:!1},aiPlay:{duration:ln.aiPlay,priority:on.aiPlay,interruptible:!1},challenge:{duration:ln.challenge,priority:on.challenge,interruptible:!0},dodge:{duration:ln.dodge,priority:on.dodge,interruptible:!0},hit:{duration:ln.hit,priority:on.hit,interruptible:!0},skip:{duration:ln.skip,priority:on.skip,interruptible:!0},think:{duration:ln.think,priority:on.think,interruptible:!0}},yn={play:"出牌",aiPlay:"出牌",challenge:"质疑",dodge:"闪避",hit:"命中",skip:"跳过",think:"思考中..."},Hu={MAX_QUEUE_SIZE:10,BUFFER_TIME:100},Da={lelouch:{id:"lelouch",displayName:"鲁鲁修",colorTheme:"#d4af37"},cc:{id:"cc",displayName:"C.C.",colorTheme:"#22c55e"},suzaku:{id:"suzaku",displayName:"朱雀",colorTheme:"#3b82f6"},kallen:{id:"kallen",displayName:"卡莲",colorTheme:"#dc2626"}},wa={player:null,ai:"cc",ai2:"suzaku",ai3:"kallen"},ka={lelouch:null,cc:"ai",suzaku:"ai2",kallen:"ai3"};function si(e,t,n){const r=Da[e];return{characterId:e,displayName:r.displayName,playerId:t,animationTexts:{...yn,...n},colorTheme:r.colorTheme}}const Vu={player:{characterId:"lelouch",displayName:"玩家",playerId:"player",animationTexts:{...yn},colorTheme:"#d4af37"},ai:si("cc","ai"),ai2:si("suzaku","ai2"),ai3:si("kallen","ai3")};class qh{constructor(){ee(this,"registry");ee(this,"playerCharacterId",null);this.registry={...Vu}}setPlayerCharacter(t){this.playerCharacterId=t;const n=Da[t];this.registry.player={characterId:t,displayName:n.displayName,playerId:"player",animationTexts:{...yn},colorTheme:n.colorTheme}}setAICharacters(t){const n=["ai","ai2","ai3"];t.forEach((r,a)=>{const l=n[a],o=Da[r];o&&(this.registry[l]={characterId:r,displayName:o.displayName,playerId:l,animationTexts:{...yn},colorTheme:o.colorTheme})}),wa.ai=t[0],wa.ai2=t[1],wa.ai3=t[2],ka[t[0]]="ai",ka[t[1]]="ai2",ka[t[2]]="ai3"}getPlayerCharacterId(){return this.playerCharacterId}getCharacterConfig(t){return this.registry[t]}getPlayerIdByCharacterId(t){return ka[t]}getCharacterIdByPlayerId(t){return wa[t]}getDisplayName(t){const n=this.registry[t];return(n==null?void 0:n.displayName)||"未知角色"}getColorTheme(t){const n=this.registry[t];return(n==null?void 0:n.colorTheme)||"#d4af37"}getAnimationText(t,n){var a;const r=this.registry[t];return((a=r==null?void 0:r.animationTexts)==null?void 0:a[n])||yn[n]}reset(){this.registry={...Vu},this.playerCharacterId=null}getRegistry(){return{...this.registry}}getCharacterIdByDisplayName(t){for(const[n,r]of Object.entries(Da))if(r.displayName===t)return n;return null}}const dl=new qh,em=(e,t)=>{dl.setPlayerCharacter(e),t&&dl.setAICharacters(t)},tm=e=>dl.getPlayerIdByCharacterId(e),nm=e=>dl.getCharacterIdByDisplayName(e),rm=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,bn=e=>({type:null,text:"",startTime:0,duration:0,playerId:e});function am(){const[e,t]=A.useState({player:bn("player"),ai:bn("ai"),ai2:bn("ai2"),ai3:bn("ai3")}),[n,r]=A.useState({playerId:null,type:null,text:"",startTime:0}),[a,l]=A.useState({items:[],current:null,isProcessing:!1}),[o,c]=A.useState({show:!1,targetId:null}),u=A.useRef({}),f=A.useRef(!1),x=A.useCallback((_,p,h)=>{const y=Bu[p],w=h||yn[p];t(C=>({...C,[_]:{type:p,text:w,startTime:Date.now(),duration:y.duration,playerId:_}})),u.current[_]&&clearTimeout(u.current[_]),u.current[_]=setTimeout(()=>{t(C=>({...C,[_]:bn(_)}))},y.duration)},[]),i=A.useCallback((_,p,h)=>{u.current.persistent&&clearTimeout(u.current.persistent),r({playerId:_,type:p,text:h,startTime:Date.now()})},[]),s=A.useCallback(_=>{u.current[_]&&(clearTimeout(u.current[_]),delete u.current[_]),t(p=>({...p,[_]:bn(_)}))},[]),d=A.useCallback(()=>{u.current.persistent&&(clearTimeout(u.current.persistent),delete u.current.persistent),r({playerId:null,type:null,text:"",startTime:0})},[]),g=A.useCallback((_,p,h,y)=>{const w=Bu[p],C={id:rm(),playerId:_,type:p,text:h||yn[p],duration:w.duration,priority:y??w.priority,timestamp:Date.now()};l(N=>N.items.length>=Hu.MAX_QUEUE_SIZE?(console.warn("[Animation Queue] Queue is full, dropping oldest item"),{...N,items:[...N.items.slice(1),C]}):{...N,items:[...N.items,C]})},[]);return A.useEffect(()=>{if(f.current||a.items.length===0||a.isProcessing)return;f.current=!0;const p=[...a.items].sort((h,y)=>y.priority-h.priority)[0];return l(h=>({...h,current:p,isProcessing:!0,items:h.items.filter(y=>y.id!==p.id)})),x(p.playerId,p.type,p.text),u.current.queue=setTimeout(()=>{l(h=>({...h,current:null,isProcessing:!1})),f.current=!1},p.duration+Hu.BUFFER_TIME),()=>{u.current.queue&&clearTimeout(u.current.queue)}},[a.items,a.isProcessing,x]),A.useEffect(()=>()=>{Object.values(u.current).forEach(_=>{clearTimeout(_)}),u.current={}},[]),{animation:e.player,animations:e,persistentAnimation:n,playerChallengeAnimation:o,setPlayerChallengeAnimation:c,triggerAnimation:x,triggerPersistentAnimation:i,clearAnimation:s,clearPersistentAnimation:d,queue:a,enqueueAnimation:g}}function lm(){return{id:"challenge_initiated",condition:e=>{const n=e.lastAction||"";return n.includes("发起质疑")&&n.includes("向")},animationType:"challenge",getText:()=>"质疑",getPlayerId:e=>{const t=e,r=(t.lastAction||"").match(/^(.+?)向/),a=r?r[1]:"";return Fa(a,t)},getData:e=>{const t=e,n=t.lastAction||"",r=n.match(/向(.+?)发起质疑/),a=r?r[1]:"",l=n.match(/^(.+?)向/),o=l?l[1]:"",c=Fa(a,t),u=Fa(o,t);return{targetId:c,challengerId:u,targetName:a,challengerName:o}}}}function im(){return{id:"challenge_skipped",condition:e=>(e.lastAction||"").includes("选择不质疑"),animationType:"skip",getText:()=>"跳过",getPlayerId:e=>{const t=e,r=(t.lastAction||"").match(/^(.+?)选择不质疑/),a=r?r[1]:"";return Fa(a,t)}}}function om(){return{id:"geass_dodge",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&(t.geassResult.isDodge||!t.geassResult.hit))},animationType:"dodge",getText:()=>"闪避",getPlayerId:e=>{var n,r,a;return((n=e.geassResult)==null?void 0:n.victimId)||((a=(r=e.turnState)==null?void 0:r.playedCards)==null?void 0:a.playerId)||"player"}}}function sm(){return{id:"geass_hit",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&t.geassResult.hit)},animationType:"hit",getText:()=>"命中",getPlayerId:e=>{var n,r,a;return((n=e.geassResult)==null?void 0:n.victimId)||((a=(r=e.turnState)==null?void 0:r.playedCards)==null?void 0:a.playerId)||"player"}}}function um(){return{id:"card_played",condition:e=>{const n=e.lastAction||"";return n.includes("出牌")||n.includes("出了")},animationType:"play",getText:()=>"出牌",getPlayerId:e=>{var n,r;return((r=(n=e.turnState)==null?void 0:n.playedCards)==null?void 0:r.playerId)||"player"},getData:e=>{var a,l;return{animationType:(((l=(a=e.turnState)==null?void 0:a.playedCards)==null?void 0:l.playerId)||"player")==="player"?"play":"aiPlay"}}}}function Fa(e,t){if(!e||e.trim()==="")return"player";const n=e.trim();if(n==="玩家")return"player";for(const a of t.aiPlayers||[])if(a.name===n)return a.id;const r=nm(n);if(r){const a=tm(r);if(a)return a}return"player"}const Uu=[lm(),im(),om(),sm(),um()];class cm{constructor(){ee(this,"triggers",new Map);Uu.forEach(t=>{this.triggers.set(t.id,t)})}register(t){this.triggers.set(t.id,t)}unregister(t){this.triggers.delete(t)}get(t){return this.triggers.get(t)}getAll(){return Array.from(this.triggers.values())}parseGameState(t){t.lastAction;for(const n of this.triggers.values())if(n.condition(t)){const r=n.getData?n.getData(t):{};return{type:n.id,playerId:n.getPlayerId(t),timestamp:Date.now(),data:{animationType:n.animationType,text:n.getText(t),...r}}}return null}reset(){this.triggers.clear(),Uu.forEach(t=>{this.triggers.set(t.id,t)})}}const dm=new cm,fm=e=>dm.parseGameState(e),pm=()=>"/liars-game/assets/cards/card-back.svg",mf={lelouch:{displayName:"鲁鲁修",colorTheme:"#d4af37"},cc:{displayName:"C.C.",colorTheme:"#22c55e"},suzaku:{displayName:"朱雀",colorTheme:"#3b82f6"},kallen:{displayName:"卡莲",colorTheme:"#dc2626"}},vr=e=>{var t;return e&&((t=mf[e])==null?void 0:t.displayName)||"未知角色"},Sa=e=>{var t;return e&&((t=mf[e])==null?void 0:t.colorTheme)||"#d4af37"},Gu=e=>e&&{play:"cg-anim-play",aiPlay:"cg-anim-aiPlay",challenge:"cg-anim-challenge",dodge:"cg-anim-dodge",hit:"cg-anim-hit",skip:"",think:""}[e]||"",Xu=e=>e?`cg-action-${e}`:"",hm=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:a=["cc","suzaku","kallen"],aiAvatars:l={},onToggleCardSelection:o,onConfirmPlay:c,onPass:u,onChallenge:f,onBackToMenu:x,onLelouchSkill:i,gameLog:s=[],isProcessing:d=!1,canUseSkill:g=!0,aiThinkingState:v})=>{var R,H,X,W,F,ae,J,q,K,Ke,ke,or,Nn,Tn,os,ss,us,cs,ds,fs,ps,hs,ms,gs,ys,vs,xs,_s,ws,ks,Ss,Cs,As,Ns;const[_,p]=A.useState(!1),[h,y]=A.useState(!1),w=A.useRef(null),C=A.useRef(null),N=A.useRef(s.length),T=A.useRef(null),I=typeof window<"u"&&window.innerWidth<=768,j=A.useRef(null),{animations:O,persistentAnimation:G,playerChallengeAnimation:D,triggerAnimation:se,triggerPersistentAnimation:fe,clearPersistentAnimation:Ye,setPlayerChallengeAnimation:We}=am();if(A.useEffect(()=>{if(n){const z=a.slice(0,3);em(n,z)}},[n,a]),A.useEffect(()=>{if(w.current&&s.length>N.current){const z=w.current;z.scrollTo({top:z.scrollHeight,behavior:"smooth"})}N.current=s.length},[s]),A.useEffect(()=>{if(!I||!h)return;const z=()=>{T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{y(!1)},3e3)};z();const ge=C.current;if(ge){const $e=["click","touchstart","scroll"];return $e.forEach(Mt=>{ge.addEventListener(Mt,z)}),()=>{$e.forEach(Mt=>{ge.removeEventListener(Mt,z)}),T.current&&clearTimeout(T.current)}}return()=>{T.current&&clearTimeout(T.current)}},[h,I]),A.useEffect(()=>{if(!e)return;const{lastAction:z,phase:ge,geassResult:$e}=e;if(z&&z===j.current)return;const Mt=fm(e);if(Mt){const{playerId:_t,data:je}=Mt,zt=je==null?void 0:je.animationType,sr=(je==null?void 0:je.text)||"";if(z&&(j.current=z),zt==="play"||zt==="aiPlay")fe(_t,zt==="play"?"play":"aiPlay","出牌中..."),se(_t,zt,sr||"出牌");else if(zt==="challenge"){const ft=je==null?void 0:je.targetId;je==null||je.challengerId,_t==="player"&&ft?(We({show:!0,targetId:ft}),se(_t,"challenge","质疑中...")):ft?(se(_t,"challenge","质疑中..."),se(ft,"challenge","被质疑")):se(_t,"challenge",sr||"质疑")}else se(_t,zt,sr)}ge==="challenge"&&G.playerId&&setTimeout(()=>{Ye()},500),$e!=null&&$e.activated&&D.show&&setTimeout(()=>{We({show:!1,targetId:null})},500)},[e,se,fe,Ye,We]),A.useEffect(()=>{n&&so.preloadAvatar(n,r),a.forEach(z=>{const ge=l[z]||1;so.preloadAvatar(z,ge)})},[n,r,a,l]),!e)return null;const{phase:De,liarCard:E,playerStats:L,aiPlayers:k,turnState:B}=e,Y=De==="player_turn",dt=De==="challenge",Te=e.playerHand||[],rn=(B==null?void 0:B.turnNumber)||1,Fe=dt,jt=()=>{t.length>0&&c()},Il=()=>p(!0),ir=()=>{y(z=>!z)},jl=z=>{p(!1),i==null||i(z)},Ml=z=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[z]||z,na=z=>z==="joker"?"#d4af37":z==="hearts"||z==="diamonds"?"#dc2626":"#1a1a24",An=n,ra=An?vr(An):"玩家",zl=Sa(An),M=An==="kallen"&&g?4:3,b=(z,ge,$e,Mt,_t,je,zt=!1,sr=!0,ft="player")=>{const an=O[ft],vf=Gu((an==null?void 0:an.type)||null),Ts=(v==null?void 0:v.isThinking)&&(v==null?void 0:v.aiId)===ft,Rl=G.playerId===ft&&G.type,xf=Rl?Gu(G.type):"",Es=D.show&&ft==="player",bs=D.show&&D.targetId===ft,Ps=(an==null?void 0:an.text)||"",_f=Rl?G.text:"";return m.jsxs("div",{className:`cg-character ${zt?"cg-character-top":""} ${sr?"":"cg-character-dead"} ${vf} ${xf} ${Ts?"cg-character-thinking":""} ${Es?"cg-player-challenging":""} ${bs?"cg-being-challenged":""}`,children:[Ps&&m.jsx("div",{className:`cg-action-text ${Xu(an.type)}`,children:Ps}),Rl&&m.jsx("div",{className:`cg-action-text ${Xu(G.type)} cg-persistent-text`,children:_f}),Es&&m.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"质疑中..."}),bs&&m.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"被质疑"}),Ts&&m.jsx("div",{className:"cg-thinking-indicator",children:m.jsx("span",{className:"cg-thinking-dots",children:"..."})}),m.jsx("div",{className:"cg-character-avatar",children:ge&&m.jsx(is,{characterId:ge,size:120,avatarNumber:je,priority:!0})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("div",{className:"cg-character-name",style:{color:_t},children:z}),m.jsxs("div",{className:"cg-character-stats",children:[m.jsx("span",{className:"cg-hp-display",children:Array($e).fill("❤").join("")}),m.jsxs("span",{className:"cg-card-count",children:["🃏",Mt]})]})]})]})};return m.jsxs("div",{className:"cg-game-table",children:[m.jsx("div",{className:"cg-top-bar",children:m.jsxs("button",{className:`cg-log-toggle-btn-top ${h?"expanded":""}`,onClick:ir,"aria-label":h?"收起记录":"展开记录",children:[m.jsx("span",{className:"cg-log-toggle-icon",children:"📜"}),m.jsx("span",{className:"cg-log-toggle-text",children:"记录"}),!h&&s.length>0&&m.jsx("span",{className:"cg-log-badge",children:s.length})]})}),m.jsxs("div",{className:"cg-main-layout",children:[m.jsxs("div",{ref:C,className:`cg-log-panel ${h?"expanded":"collapsed"}`,children:[m.jsxs("div",{className:"cg-log-header",children:[m.jsx("span",{children:"📜 游戏记录"}),m.jsx("button",{className:"cg-log-close-btn mobile-only",onClick:ir,children:"✕"})]}),m.jsx("div",{ref:w,className:"cg-log-content",children:s.map((z,ge)=>m.jsx("div",{className:`cg-log-item ${z.includes("质疑")?"challenge":""} ${z.includes("Geass")?"geass":""}`,children:z},ge))})]}),h&&m.jsx("div",{className:"cg-log-overlay",onClick:ir}),m.jsxs("div",{className:"cg-game-area",children:[m.jsx("div",{className:"cg-ai-top",children:b(vr((R=k==null?void 0:k[2])==null?void 0:R.character),((H=k==null?void 0:k[2])==null?void 0:H.character)||a[2],((W=(X=k==null?void 0:k[2])==null?void 0:X.stats)==null?void 0:W.hp)||0,((ae=(F=k==null?void 0:k[2])==null?void 0:F.hand)==null?void 0:ae.length)||0,Sa((J=k==null?void 0:k[2])==null?void 0:J.character),l[((q=k==null?void 0:k[2])==null?void 0:q.character)||a[2]]||1,!0,((K=k==null?void 0:k[2])==null?void 0:K.isActive)!==!1&&(((ke=(Ke=k==null?void 0:k[2])==null?void 0:Ke.stats)==null?void 0:ke.hp)||0)>0,"ai3")}),m.jsxs("div",{className:"cg-middle-section",children:[m.jsx("div",{className:"cg-ai-left",children:b(vr((or=k==null?void 0:k[0])==null?void 0:or.character),((Nn=k==null?void 0:k[0])==null?void 0:Nn.character)||a[0],((os=(Tn=k==null?void 0:k[0])==null?void 0:Tn.stats)==null?void 0:os.hp)||0,((us=(ss=k==null?void 0:k[0])==null?void 0:ss.hand)==null?void 0:us.length)||0,Sa((cs=k==null?void 0:k[0])==null?void 0:cs.character),l[((ds=k==null?void 0:k[0])==null?void 0:ds.character)||a[0]]||1,!1,((fs=k==null?void 0:k[0])==null?void 0:fs.isActive)!==!1&&(((hs=(ps=k==null?void 0:k[0])==null?void 0:ps.stats)==null?void 0:hs.hp)||0)>0,"ai")}),m.jsx("div",{className:"cg-table-area",children:m.jsx("div",{className:"cg-table",children:m.jsx("div",{className:"cg-table-inner",children:B!=null&&B.playedCards?m.jsxs("div",{className:"cg-played",children:[m.jsxs("div",{className:"cg-played-name",children:[B.playedCards.playerId==="player"?ra:B.playedCards.playerId.startsWith("ai")?vr((ms=k==null?void 0:k.find(z=>{var ge;return z.id===((ge=B.playedCards)==null?void 0:ge.playerId)}))==null?void 0:ms.character):"未知玩家"," ","出牌"]}),m.jsx("div",{className:"cg-cards",children:B.playedCards.actualCards.map(z=>m.jsx("div",{className:"cg-card-small cg-card-back",children:m.jsx("img",{src:pm(),alt:"牌背"})},z.id))}),m.jsxs("div",{className:"cg-card-count-display",children:[B.playedCards.cardIds.length," 张牌"]})]}):m.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),m.jsx("div",{className:"cg-ai-right",children:b(vr((gs=k==null?void 0:k[1])==null?void 0:gs.character),((ys=k==null?void 0:k[1])==null?void 0:ys.character)||a[1],((xs=(vs=k==null?void 0:k[1])==null?void 0:vs.stats)==null?void 0:xs.hp)||0,((ws=(_s=k==null?void 0:k[1])==null?void 0:_s.hand)==null?void 0:ws.length)||0,Sa((ks=k==null?void 0:k[1])==null?void 0:ks.character),l[((Ss=k==null?void 0:k[1])==null?void 0:Ss.character)||a[1]]||1,!1,((Cs=k==null?void 0:k[1])==null?void 0:Cs.isActive)!==!1&&(((Ns=(As=k==null?void 0:k[1])==null?void 0:As.stats)==null?void 0:Ns.hp)||0)>0,"ai2")})]}),m.jsxs("div",{className:"cg-player-section",children:[m.jsx("div",{className:"cg-player-info",children:b(ra,n,L.hp,Te.length,zl,r,!1,!0,"player")}),m.jsxs("div",{className:"cg-hand-section",children:[m.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,Te.length*26+22)}px`},children:Te.map((z,ge)=>{const $e=t.includes(z.id);return m.jsxs("button",{className:`cg-card ${$e?"selected":""} ${!Y||d?"disabled":""}`,onClick:()=>o(z.id),style:{left:`${ge*26}px`,transform:$e?"translateY(-8px)":"none",zIndex:$e?Te.length+10:Te.length-ge},disabled:!Y||d,children:[m.jsxs("div",{className:"cg-card-face",children:[m.jsx("div",{style:{color:na(z.suit),fontSize:"13px"},children:z.rank}),m.jsx("div",{style:{color:na(z.suit),fontSize:"15px"},children:Ml(z.suit)})]}),$e&&m.jsx("div",{className:"cg-check",children:"✓"})]},z.id)})}),n==="lelouch"&&m.jsx("button",{className:"cg-skill-btn",onClick:Il,disabled:d||!g||!Y,children:g?"绝对命令":"已使用"})]})]})]})]}),m.jsxs("div",{className:"cg-bottom-bar",children:[m.jsx("div",{className:"cg-bottom-left",children:m.jsx("button",{className:"cg-back-btn",onClick:x,children:"← 主页面"})}),m.jsxs("div",{className:"cg-bottom-center",children:[!Fe&&m.jsxs("div",{className:"cg-status-text",children:[Y&&t.length===0&&`请选择要出的牌 (最多${M}张)`,Y&&t.length>0&&`已选择 ${t.length}/${M} 张牌`,dt&&!Fe&&"等待其他玩家质疑...",!Y&&!dt&&"AI回合中..."]}),m.jsxs("div",{className:"cg-action-buttons",children:[Y&&t.length>0&&m.jsxs("button",{className:"cg-btn cg-btn-play",onClick:jt,disabled:d,children:["出牌 (",t.length,")"]}),Fe&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:f,disabled:d,children:"⚔️ 质疑"}),m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:u,disabled:d,children:"不质疑"})]})]})]}),m.jsxs("div",{className:"cg-bottom-right",children:[m.jsxs("div",{className:"cg-round-display",children:[m.jsx("div",{className:"cg-round-label",children:"回合"}),m.jsx("div",{className:"cg-round-number",children:rn})]}),m.jsxs("div",{className:"cg-liar-display",children:[m.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),m.jsx("div",{className:"cg-liar-value",children:E})]})]})]}),_&&m.jsx("div",{className:"cg-modal",children:m.jsxs("div",{className:"cg-modal-content",children:[m.jsx("h3",{children:"选择新的骗子牌"}),m.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(z=>m.jsx("button",{className:z===E?"current":"",onClick:()=>jl(z),children:z},z))}),m.jsx("button",{className:"cg-btn-skip",onClick:()=>p(!1),children:"取消"})]})}),m.jsx("style",{children:`
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
        .cg-cards { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; max-width: 100%; }
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
      `})]})};var wt={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var i=this||n;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window<"u"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var s=this||n;if(i=parseFloat(i),s.ctx||x(),typeof i<"u"&&i>=0&&i<=1){if(s._volume=i,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),v=0;v<g.length;v++){var _=s._howls[d]._soundById(g[v]);_&&_._node&&(_._node.volume=_._volume*i)}return s}return s._volume},mute:function(i){var s=this||n;s.ctx||x(),s._muted=i,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i?0:s._volume,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),v=0;v<g.length;v++){var _=s._howls[d]._soundById(g[v]);_&&_._node&&(_._node.muted=i?!0:_._muted)}return s},stop:function(){for(var i=this||n,s=0;s<i._howls.length;s++)i._howls[s].stop();return i},unload:function(){for(var i=this||n,s=i._howls.length-1;s>=0;s--)i._howls[s].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close<"u"&&(i.ctx.close(),i.ctx=null,x()),i},codecs:function(i){return(this||n)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||n;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(i._canPlayEvent="canplay")}catch{i.noAudio=!0}else i.noAudio=!0;try{var s=new Audio;s.muted&&(i.noAudio=!0)}catch{}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return i}if(!s||typeof s.canPlayType!="function")return i;var d=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=i._navigator?i._navigator.userAgent:"",v=g.match(/OPR\/(\d+)/g),_=v&&parseInt(v[0].split("/")[1],10)<33,p=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,h=g.match(/Version\/(.*?) /),y=p&&h&&parseInt(h[1],10)<15;return i._codecs={mp3:!!(!_&&(d||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||n;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var s=function(d){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,i._releaseHtml5Audio(g)}catch{i.noAudio=!0;break}for(var v=0;v<i._howls.length;v++)if(!i._howls[v]._webAudio)for(var _=i._howls[v]._getSoundIds(),p=0;p<_.length;p++){var h=i._howls[v]._soundById(_[p]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}i._autoResume();var y=i.ctx.createBufferSource();y.buffer=i._scratchBuffer,y.connect(i.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),y.onended=function(){y.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<i._howls.length;w++)i._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),i}},_obtainHtml5Audio:function(){var i=this||n;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var s=this||n;return i._unlocked&&s._html5AudioPool.push(i),s},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<i._howls.length;s++)if(i._howls[s]._webAudio){for(var d=0;d<i._howls[s]._sounds.length;d++)if(!i._howls[s]._sounds[d]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(i.autoSuspend){i._suspendTimer=null,i.state="suspending";var g=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(g,g)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume>"u"||!n.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var s=0;s<i._howls.length;s++)i._howls[s]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var n=new t,r=function(i){var s=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(i)};r.prototype={init:function(i){var s=this;return n.ctx||x(),s._autoplay=i.autoplay||!1,s._format=typeof i.format!="string"?i.format:[i.format],s._html5=i.html5||!1,s._muted=i.mute||!1,s._loop=i.loop||!1,s._pool=i.pool||5,s._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,s._rate=i.rate||1,s._sprite=i.sprite||{},s._src=typeof i.src!="string"?i.src:[i.src],s._volume=i.volume!==void 0?i.volume:1,s._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=i.onend?[{fn:i.onend}]:[],s._onfade=i.onfade?[{fn:i.onfade}]:[],s._onload=i.onload?[{fn:i.onload}]:[],s._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],s._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],s._onpause=i.onpause?[{fn:i.onpause}]:[],s._onplay=i.onplay?[{fn:i.onplay}]:[],s._onstop=i.onstop?[{fn:i.onstop}]:[],s._onmute=i.onmute?[{fn:i.onmute}]:[],s._onvolume=i.onvolume?[{fn:i.onvolume}]:[],s._onrate=i.onrate?[{fn:i.onrate}]:[],s._onseek=i.onseek?[{fn:i.onseek}]:[],s._onunlock=i.onunlock?[{fn:i.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var i=this,s=null;if(n.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var d=0;d<i._src.length;d++){var g,v;if(i._format&&i._format[d])g=i._format[d];else{if(v=i._src[d],typeof v!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(v),g||(g=/\.([^.]+)$/.exec(v.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=i._src[d];break}}if(!s){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=s,i._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new a(i),i._webAudio&&o(i),i},play:function(i,s){var d=this,g=null;if(typeof i=="number")g=i,i=null;else{if(typeof i=="string"&&d._state==="loaded"&&!d._sprite[i])return null;if(typeof i>"u"&&(i="__default",!d._playLock)){for(var v=0,_=0;_<d._sounds.length;_++)d._sounds[_]._paused&&!d._sounds[_]._ended&&(v++,g=d._sounds[_]._id);v===1?i=null:g=null}}var p=g?d._soundById(g):d._inactiveSound();if(!p)return null;if(g&&!i&&(i=p._sprite||"__default"),d._state!=="loaded"){p._sprite=i,p._ended=!1;var h=p._id;return d._queue.push({event:"play",action:function(){d.play(h)}}),h}if(g&&!p._paused)return s||d._loadQueue("play"),p._id;d._webAudio&&n._autoResume();var y=Math.max(0,p._seek>0?p._seek:d._sprite[i][0]/1e3),w=Math.max(0,(d._sprite[i][0]+d._sprite[i][1])/1e3-y),C=w*1e3/Math.abs(p._rate),N=d._sprite[i][0]/1e3,T=(d._sprite[i][0]+d._sprite[i][1])/1e3;p._sprite=i,p._ended=!1;var I=function(){p._paused=!1,p._seek=y,p._start=N,p._stop=T,p._loop=!!(p._loop||d._sprite[i][2])};if(y>=T){d._ended(p);return}var j=p._node;if(d._webAudio){var O=function(){d._playLock=!1,I(),d._refreshBuffer(p);var fe=p._muted||d._muted?0:p._volume;j.gain.setValueAtTime(fe,n.ctx.currentTime),p._playStart=n.ctx.currentTime,typeof j.bufferSource.start>"u"?p._loop?j.bufferSource.noteGrainOn(0,y,86400):j.bufferSource.noteGrainOn(0,y,w):p._loop?j.bufferSource.start(0,y,86400):j.bufferSource.start(0,y,w),C!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),C)),s||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?O():(d._playLock=!0,d.once("resume",O),d._clearTimer(p._id))}else{var G=function(){j.currentTime=y,j.muted=p._muted||d._muted||n._muted||j.muted,j.volume=p._volume*n.volume(),j.playbackRate=p._rate;try{var fe=j.play();if(fe&&typeof Promise<"u"&&(fe instanceof Promise||typeof fe.then=="function")?(d._playLock=!0,I(),fe.then(function(){d._playLock=!1,j._unlocked=!0,s?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):s||(d._playLock=!1,I(),d._emit("play",p._id)),j.playbackRate=p._rate,j.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),C):(d._endTimers[p._id]=function(){d._ended(p),j.removeEventListener("ended",d._endTimers[p._id],!1)},j.addEventListener("ended",d._endTimers[p._id],!1))}catch(Ye){d._emit("playerror",p._id,Ye)}};j.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(j.src=d._src,j.load());var D=window&&window.ejecta||!j.readyState&&n._navigator.isCocoonJS;if(j.readyState>=3||D)G();else{d._playLock=!0,d._state="loading";var se=function(){d._state="loaded",G(),j.removeEventListener(n._canPlayEvent,se,!1)};j.addEventListener(n._canPlayEvent,se,!1),d._clearTimer(p._id)}}return p._id},pause:function(i){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(i)}}),s;for(var d=s._getSoundIds(i),g=0;g<d.length;g++){s._clearTimer(d[g]);var v=s._soundById(d[g]);if(v&&!v._paused&&(v._seek=s.seek(d[g]),v._rateSeek=0,v._paused=!0,s._stopFade(d[g]),v._node))if(s._webAudio){if(!v._node.bufferSource)continue;typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),s._cleanBuffer(v._node)}else(!isNaN(v._node.duration)||v._node.duration===1/0)&&v._node.pause();arguments[1]||s._emit("pause",v?v._id:null)}return s},stop:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(i)}}),d;for(var g=d._getSoundIds(i),v=0;v<g.length;v++){d._clearTimer(g[v]);var _=d._soundById(g[v]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,d._stopFade(g[v]),_._node&&(d._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),d._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&d._clearSound(_._node))),s||d._emit("stop",_._id))}return d},mute:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(i,s)}}),d;if(typeof s>"u")if(typeof i=="boolean")d._muted=i;else return d._muted;for(var g=d._getSoundIds(s),v=0;v<g.length;v++){var _=d._soundById(g[v]);_&&(_._muted=i,_._interval&&d._stopFade(_._id),d._webAudio&&_._node?_._node.gain.setValueAtTime(i?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:i),d._emit("mute",_._id))}return d},volume:function(){var i=this,s=arguments,d,g;if(s.length===0)return i._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length>=2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,s)}}),i;typeof g>"u"&&(i._volume=d),g=i._getSoundIds(g);for(var h=0;h<g.length;h++)p=i._soundById(g[h]),p&&(p._volume=d,s[2]||i._stopFade(g[h]),i._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,n.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*n.volume()),i._emit("volume",p._id))}else return p=g?i._soundById(g):i._sounds[0],p?p._volume:0;return i},fade:function(i,s,d,g){var v=this;if(v._state!=="loaded"||v._playLock)return v._queue.push({event:"fade",action:function(){v.fade(i,s,d,g)}}),v;i=Math.min(Math.max(0,parseFloat(i)),1),s=Math.min(Math.max(0,parseFloat(s)),1),d=parseFloat(d),v.volume(i,g);for(var _=v._getSoundIds(g),p=0;p<_.length;p++){var h=v._soundById(_[p]);if(h){if(g||v._stopFade(_[p]),v._webAudio&&!h._muted){var y=n.ctx.currentTime,w=y+d/1e3;h._volume=i,h._node.gain.setValueAtTime(i,y),h._node.gain.linearRampToValueAtTime(s,w)}v._startFadeInterval(h,i,s,d,_[p],typeof g>"u")}}return v},_startFadeInterval:function(i,s,d,g,v,_){var p=this,h=s,y=d-s,w=Math.abs(y/.01),C=Math.max(4,w>0?g/w:g),N=Date.now();i._fadeTo=d,i._interval=setInterval(function(){var T=(Date.now()-N)/g;N=Date.now(),h+=y*T,h=Math.round(h*100)/100,y<0?h=Math.max(d,h):h=Math.min(d,h),p._webAudio?i._volume=h:p.volume(h,i._id,!0),_&&(p._volume=h),(d<s&&h<=d||d>s&&h>=d)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,p.volume(d,i._id),p._emit("fade",i._id))},C)},_stopFade:function(i){var s=this,d=s._soundById(i);return d&&d._interval&&(s._webAudio&&d._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(d._interval),d._interval=null,s.volume(d._fadeTo,i),d._fadeTo=null,s._emit("fade",i)),s},loop:function(){var i=this,s=arguments,d,g,v;if(s.length===0)return i._loop;if(s.length===1)if(typeof s[0]=="boolean")d=s[0],i._loop=d;else return v=i._soundById(parseInt(s[0],10)),v?v._loop:!1;else s.length===2&&(d=s[0],g=parseInt(s[1],10));for(var _=i._getSoundIds(g),p=0;p<_.length;p++)v=i._soundById(_[p]),v&&(v._loop=d,i._webAudio&&v._node&&v._node.bufferSource&&(v._node.bufferSource.loop=d,d&&(v._node.bufferSource.loopStart=v._start||0,v._node.bufferSource.loopEnd=v._stop,i.playing(_[p])&&(i.pause(_[p],!0),i.play(_[p],!0)))));return i},rate:function(){var i=this,s=arguments,d,g;if(s.length===0)g=i._sounds[0]._id;else if(s.length===1){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var p;if(typeof d=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,s)}}),i;typeof g>"u"&&(i._rate=d),g=i._getSoundIds(g);for(var h=0;h<g.length;h++)if(p=i._soundById(g[h]),p){i.playing(g[h])&&(p._rateSeek=i.seek(g[h]),p._playStart=i._webAudio?n.ctx.currentTime:p._playStart),p._rate=d,i._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,n.ctx.currentTime):p._node&&(p._node.playbackRate=d);var y=i.seek(g[h]),w=(i._sprite[p._sprite][0]+i._sprite[p._sprite][1])/1e3-y,C=w*1e3/Math.abs(p._rate);(i._endTimers[g[h]]||!p._paused)&&(i._clearTimer(g[h]),i._endTimers[g[h]]=setTimeout(i._ended.bind(i,p),C)),i._emit("rate",p._id)}}else return p=i._soundById(g),p?p._rate:i._rate;return i},seek:function(){var i=this,s=arguments,d,g;if(s.length===0)i._sounds.length&&(g=i._sounds[0]._id);else if(s.length===1){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):i._sounds.length&&(g=i._sounds[0]._id,d=parseFloat(s[0]))}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,s)}}),i;var p=i._soundById(g);if(p)if(typeof d=="number"&&d>=0){var h=i.playing(g);h&&i.pause(g,!0),p._seek=d,p._ended=!1,i._clearTimer(g),!i._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var y=function(){h&&i.play(g,!0),i._emit("seek",g)};if(h&&!i._webAudio){var w=function(){i._playLock?setTimeout(w,0):y()};setTimeout(w,0)}else y()}else if(i._webAudio){var C=i.playing(g)?n.ctx.currentTime-p._playStart:0,N=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(N+C*Math.abs(p._rate))}else return p._node.currentTime;return i},playing:function(i){var s=this;if(typeof i=="number"){var d=s._soundById(i);return d?!d._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(i){var s=this,d=s._duration,g=s._soundById(i);return g&&(d=s._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var i=this,s=i._sounds,d=0;d<s.length;d++)s[d]._paused||i.stop(s[d]._id),i._webAudio||(i._clearSound(s[d]._node),s[d]._node.removeEventListener("error",s[d]._errorFn,!1),s[d]._node.removeEventListener(n._canPlayEvent,s[d]._loadFn,!1),s[d]._node.removeEventListener("ended",s[d]._endFn,!1),n._releaseHtml5Audio(s[d]._node)),delete s[d]._node,i._clearTimer(s[d]._id);var g=n._howls.indexOf(i);g>=0&&n._howls.splice(g,1);var v=!0;for(d=0;d<n._howls.length;d++)if(n._howls[d]._src===i._src||i._src.indexOf(n._howls[d]._src)>=0){v=!1;break}return l&&v&&delete l[i._src],n.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,s,d,g){var v=this,_=v["_on"+i];return typeof s=="function"&&_.push(g?{id:d,fn:s,once:g}:{id:d,fn:s}),v},off:function(i,s,d){var g=this,v=g["_on"+i],_=0;if(typeof s=="number"&&(d=s,s=null),s||d)for(_=0;_<v.length;_++){var p=d===v[_].id;if(s===v[_].fn&&p||!s&&p){v.splice(_,1);break}}else if(i)g["_on"+i]=[];else{var h=Object.keys(g);for(_=0;_<h.length;_++)h[_].indexOf("_on")===0&&Array.isArray(g[h[_]])&&(g[h[_]]=[])}return g},once:function(i,s,d){var g=this;return g.on(i,s,d,1),g},_emit:function(i,s,d){for(var g=this,v=g["_on"+i],_=v.length-1;_>=0;_--)(!v[_].id||v[_].id===s||i==="load")&&(setTimeout((function(p){p.call(this,s,d)}).bind(g,v[_].fn),0),v[_].once&&g.off(i,v[_].fn,v[_].id));return g._loadQueue(i),g},_loadQueue:function(i){var s=this;if(s._queue.length>0){var d=s._queue[0];d.event===i&&(s._queue.shift(),s._loadQueue()),i||d.action()}return s},_ended:function(i){var s=this,d=i._sprite;if(!s._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(s._ended.bind(s,i),100),s;var g=!!(i._loop||s._sprite[d][2]);if(s._emit("end",i._id),!s._webAudio&&g&&s.stop(i._id,!0).play(i._id),s._webAudio&&g){s._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=n.ctx.currentTime;var v=(i._stop-i._start)*1e3/Math.abs(i._rate);s._endTimers[i._id]=setTimeout(s._ended.bind(s,i),v)}return s._webAudio&&!g&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,s._clearTimer(i._id),s._cleanBuffer(i._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(i._id,!0),s},_clearTimer:function(i){var s=this;if(s._endTimers[i]){if(typeof s._endTimers[i]!="function")clearTimeout(s._endTimers[i]);else{var d=s._soundById(i);d&&d._node&&d._node.removeEventListener("ended",s._endTimers[i],!1)}delete s._endTimers[i]}return s},_soundById:function(i){for(var s=this,d=0;d<s._sounds.length;d++)if(i===s._sounds[d]._id)return s._sounds[d];return null},_inactiveSound:function(){var i=this;i._drain();for(var s=0;s<i._sounds.length;s++)if(i._sounds[s]._ended)return i._sounds[s].reset();return new a(i)},_drain:function(){var i=this,s=i._pool,d=0,g=0;if(!(i._sounds.length<s)){for(g=0;g<i._sounds.length;g++)i._sounds[g]._ended&&d++;for(g=i._sounds.length-1;g>=0;g--){if(d<=s)return;i._sounds[g]._ended&&(i._webAudio&&i._sounds[g]._node&&i._sounds[g]._node.disconnect(0),i._sounds.splice(g,1),d--)}}},_getSoundIds:function(i){var s=this;if(typeof i>"u"){for(var d=[],g=0;g<s._sounds.length;g++)d.push(s._sounds[g]._id);return d}else return[i]},_refreshBuffer:function(i){var s=this;return i._node.bufferSource=n.ctx.createBufferSource(),i._node.bufferSource.buffer=l[s._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,n.ctx.currentTime),s},_cleanBuffer:function(i){var s=this,d=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!i.bufferSource)return s;if(n._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),d))try{i.bufferSource.buffer=n._scratchBuffer}catch{}return i.bufferSource=null,s},_clearSound:function(i){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(i){this._parent=i,this.init()};a.prototype={init:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,s._sounds.push(i),i.create(),i},create:function(){var i=this,s=i._parent,d=n._muted||i._muted||i._parent._muted?0:i._volume;return s._webAudio?(i._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),i._node.gain.setValueAtTime(d,n.ctx.currentTime),i._node.paused=!0,i._node.connect(n.masterGain)):n.noAudio||(i._node=n._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(n._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=s._src,i._node.preload=s._preload===!0?"auto":s._preload,i._node.volume=d*n.volume(),i._node.load()),i},reset:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,s=i._parent;s._duration=Math.ceil(i._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),i._node.removeEventListener(n._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,s=i._parent;s._duration===1/0&&(s._duration=Math.ceil(i._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var l={},o=function(i){var s=i._src;if(l[s]){i._duration=l[s].duration,f(i);return}if(/^data:[^;]+;base64,/.test(s)){for(var d=atob(s.split(",")[1]),g=new Uint8Array(d.length),v=0;v<d.length;++v)g[v]=d.charCodeAt(v);u(g.buffer,i)}else{var _=new XMLHttpRequest;_.open(i._xhr.method,s,!0),_.withCredentials=i._xhr.withCredentials,_.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(p){_.setRequestHeader(p,i._xhr.headers[p])}),_.onload=function(){var p=(_.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}u(_.response,i)},_.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete l[s],i.load())},c(_)}},c=function(i){try{i.send()}catch{i.onerror()}},u=function(i,s){var d=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(v){v&&s._sounds.length>0?(l[s._src]=v,f(s,v)):d()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(i).then(g).catch(d):n.ctx.decodeAudioData(i,g,d)},f=function(i,s){s&&!i._duration&&(i._duration=s.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=s?parseInt(s[1],10):null;if(i&&d&&d<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof ur<"u"?(ur.HowlerGlobal=t,ur.Howler=n,ur.Howl=r,ur.Sound=a):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=a)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var a=r._howls.length-1;a>=0;a--)r._howls[a].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(r=typeof r!="number"?l._pos[1]:r,a=typeof a!="number"?l._pos[2]:a,typeof n=="number")l._pos=[n,r,a],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(n,r,a,l,o,c){var u=this;if(!u.ctx||!u.ctx.listener)return u;var f=u._orientation;if(r=typeof r!="number"?f[1]:r,a=typeof a!="number"?f[2]:a,l=typeof l!="number"?f[3]:l,o=typeof o!="number"?f[4]:o,c=typeof c!="number"?f[5]:c,typeof n=="number")u._orientation=[n,r,a,l,o,c],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(a,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(n,r,a,l,o,c);else return f;return u},Howl.prototype.init=function(n){return function(r){var a=this;return a._orientation=r.orientation||[1,0,0],a._stereo=r.stereo||null,a._pos=r.pos||null,a._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},a._onstereo=r.onstereo?[{fn:r.onstereo}]:[],a._onpos=r.onpos?[{fn:r.onpos}]:[],a._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"stereo",action:function(){a.stereo(n,r)}}),a;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")a._stereo=n,a._pos=[n,0,0];else return a._stereo;for(var o=a._getSoundIds(r),c=0;c<o.length;c++){var u=a._soundById(o[c]);if(u)if(typeof n=="number")u._stereo=n,u._pos=[n,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&t(u,l),l==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(n,0,0):u._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),a._emit("stereo",u._id);else return u._stereo}return a},Howl.prototype.pos=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,a,l)}}),o;if(r=typeof r!="number"?0:r,a=typeof a!="number"?-.5:a,typeof l>"u")if(typeof n=="number")o._pos=[n,r,a];else return o._pos;for(var c=o._getSoundIds(l),u=0;u<c.length;u++){var f=o._soundById(c[u]);if(f)if(typeof n=="number")f._pos=[n,r,a],f._node&&((!f._panner||f._panner.pan)&&t(f,"spatial"),typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(a,Howler.ctx.currentTime)):f._panner.setPosition(n,r,a)),o._emit("pos",f._id);else return f._pos}return o},Howl.prototype.orientation=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,a,l)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,a=typeof a!="number"?o._orientation[2]:a,typeof l>"u")if(typeof n=="number")o._orientation=[n,r,a];else return o._orientation;for(var c=o._getSoundIds(l),u=0;u<c.length;u++){var f=o._soundById(c[u]);if(f)if(typeof n=="number")f._orientation=[n,r,a],f._node&&(f._panner||(f._pos||(f._pos=o._pos||[0,0,-.5]),t(f,"spatial")),typeof f._panner.orientationX<"u"?(f._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),f._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.orientationZ.setValueAtTime(a,Howler.ctx.currentTime)):f._panner.setOrientation(n,r,a)),o._emit("orientation",f._id);else return f._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,a,l,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")a=r[0],typeof l>"u"&&(a.pannerAttr||(a.pannerAttr={coneInnerAngle:a.coneInnerAngle,coneOuterAngle:a.coneOuterAngle,coneOuterGain:a.coneOuterGain,distanceModel:a.distanceModel,maxDistance:a.maxDistance,refDistance:a.refDistance,rolloffFactor:a.rolloffFactor,panningModel:a.panningModel}),n._pannerAttr={coneInnerAngle:typeof a.pannerAttr.coneInnerAngle<"u"?a.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof a.pannerAttr.coneOuterAngle<"u"?a.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof a.pannerAttr.coneOuterGain<"u"?a.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof a.pannerAttr.distanceModel<"u"?a.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof a.pannerAttr.maxDistance<"u"?a.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof a.pannerAttr.refDistance<"u"?a.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof a.pannerAttr.rolloffFactor<"u"?a.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof a.pannerAttr.panningModel<"u"?a.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(a=r[0],l=parseInt(r[1],10));for(var c=n._getSoundIds(l),u=0;u<c.length;u++)if(o=n._soundById(c[u]),o){var f=o._pannerAttr;f={coneInnerAngle:typeof a.coneInnerAngle<"u"?a.coneInnerAngle:f.coneInnerAngle,coneOuterAngle:typeof a.coneOuterAngle<"u"?a.coneOuterAngle:f.coneOuterAngle,coneOuterGain:typeof a.coneOuterGain<"u"?a.coneOuterGain:f.coneOuterGain,distanceModel:typeof a.distanceModel<"u"?a.distanceModel:f.distanceModel,maxDistance:typeof a.maxDistance<"u"?a.maxDistance:f.maxDistance,refDistance:typeof a.refDistance<"u"?a.refDistance:f.refDistance,rolloffFactor:typeof a.rolloffFactor<"u"?a.rolloffFactor:f.rolloffFactor,panningModel:typeof a.panningModel<"u"?a.panningModel:f.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=f.coneInnerAngle,x.coneOuterAngle=f.coneOuterAngle,x.coneOuterGain=f.coneOuterGain,x.distanceModel=f.distanceModel,x.maxDistance=f.maxDistance,x.refDistance=f.refDistance,x.rolloffFactor=f.rolloffFactor,x.panningModel=f.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,a=r._parent;r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,n.call(this),r._stereo?a.stereo(r._stereo):r._pos&&a.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,a=r._parent;return r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,r._stereo?a.stereo(r._stereo):r._pos?a.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,a._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(wt);const Ca={"main-menu":{volume:.35,loop:!0,preload:!0},"character-select":{volume:.32,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.55,loop:!1,preload:!1},victory:{volume:.55,loop:!1,preload:!0},defeat:{volume:.45,loop:!1,preload:!0},"game-over":{volume:.45,loop:!1,preload:!0}},ui={"card-play":{volume:.7,loop:!1,category:"sfx",priority:"high"},"card-shuffle":{volume:.55,loop:!1,category:"sfx",priority:"normal"},"card-draw":{volume:.5,loop:!1,category:"sfx",priority:"normal"},"card-flip":{volume:.55,loop:!1,category:"sfx",priority:"normal"},challenge:{volume:.85,loop:!1,category:"sfx",priority:"critical"},"challenge-success":{volume:.8,loop:!1,category:"sfx",priority:"high"},"challenge-fail":{volume:.65,loop:!1,category:"sfx",priority:"normal"},"turn-start":{volume:.45,loop:!1,category:"ui",priority:"normal"},"turn-end":{volume:.35,loop:!1,category:"ui",priority:"low"},"geass-activate":{volume:.85,loop:!1,category:"sfx",priority:"critical"},"geass-hit":{volume:.9,loop:!1,category:"sfx",priority:"critical"},"geass-miss":{volume:.55,loop:!1,category:"sfx",priority:"normal"},"geass-immunity":{volume:.75,loop:!1,category:"sfx",priority:"high"},"button-click":{volume:.45,loop:!1,category:"ui",priority:"normal"},"button-hover":{volume:.25,loop:!1,category:"ui",priority:"low"},"menu-open":{volume:.4,loop:!1,category:"ui",priority:"normal"},"menu-close":{volume:.4,loop:!1,category:"ui",priority:"normal"},"character-select":{volume:.55,loop:!1,category:"ui",priority:"normal"},"character-skill":{volume:.75,loop:!1,category:"sfx",priority:"high"},"damage-taken":{volume:.85,loop:!1,category:"sfx",priority:"high"},heal:{volume:.65,loop:!1,category:"sfx",priority:"normal"},win:{volume:.8,loop:!1,category:"sfx",priority:"high"},lose:{volume:.65,loop:!1,category:"sfx",priority:"normal"},"round-win":{volume:.75,loop:!1,category:"sfx",priority:"high"},"round-lose":{volume:.55,loop:!1,category:"sfx",priority:"normal"}},V="/liars-game/",Qu={"main-menu":`${V}audio/bgm-menu.mp3`,"character-select":`${V}audio/bgm-menu.mp3`,"game-normal":`${V}audio/bgm-game.mp3`,"game-intense":`${V}audio/bgm-game.mp3`,"geass-activate":`${V}audio/sfx-geass-activate.mp3`,victory:`${V}audio/bgm-victory.mp3`,defeat:`${V}audio/bgm-defeat.mp3`,"game-over":`${V}audio/bgm-defeat.mp3`},Yu={"card-play":`${V}audio/sfx-play-card.mp3`,"card-shuffle":`${V}audio/sfx-card-shuffle.mp3`,"card-draw":`${V}audio/sfx-play-card.mp3`,"card-flip":`${V}audio/sfx-play-card.mp3`,challenge:`${V}audio/sfx-challenge.mp3`,"challenge-success":`${V}audio/sfx-win.mp3`,"challenge-fail":`${V}audio/sfx-lose.mp3`,"turn-start":`${V}audio/sfx-turn-start.mp3`,"turn-end":`${V}audio/sfx-button-click.mp3`,"geass-activate":`${V}audio/sfx-geass-activate.mp3`,"geass-hit":`${V}audio/sfx-geass-hit.mp3`,"geass-miss":`${V}audio/sfx-geass-miss.mp3`,"geass-immunity":`${V}audio/sfx-geass-miss.mp3`,"button-click":`${V}audio/sfx-button-click.mp3`,"button-hover":`${V}audio/sfx-button-click.mp3`,"menu-open":`${V}audio/sfx-button-click.mp3`,"menu-close":`${V}audio/sfx-button-click.mp3`,"character-select":`${V}audio/sfx-character-select.mp3`,"character-skill":`${V}audio/sfx-geass-activate.mp3`,"damage-taken":`${V}audio/sfx-geass-hit.mp3`,heal:`${V}audio/sfx-win.mp3`,win:`${V}audio/sfx-win.mp3`,lose:`${V}audio/sfx-lose.mp3`,"round-win":`${V}audio/sfx-win.mp3`,"round-lose":`${V}audio/sfx-lose.mp3`},mm={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},dn=class dn{constructor(){ee(this,"bgmMap",new Map);ee(this,"sfxMap",new Map);ee(this,"currentBGM",null);ee(this,"masterVolume",1);ee(this,"bgmVolume",1);ee(this,"sfxVolume",1);ee(this,"voiceVolume",1);ee(this,"isMuted",!1);ee(this,"initialized",!1);ee(this,"currentVoice",null)}static getInstance(){return dn.instance||(dn.instance=new dn),dn.instance}init(){if(this.initialized)return;this.preloadBGM(["main-menu"]);const t=["button-click","card-play","challenge"];this.preloadSFX(t),setTimeout(()=>{const n=["geass-activate","geass-hit","win","lose","card-shuffle"];this.preloadSFX(n),console.log("[EnhancedSoundManager] P1音效预加载完成")},2e3),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成 (P0资源已加载)")}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=Ca[n],a=new wt.Howl({src:[Qu[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,a)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=ui[n],a=new wt.Howl({src:[Yu[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,a)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const a=Ca[t];r=new wt.Howl({src:[Qu[t]],volume:0,loop:a.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const a=Ca[t];r.fade(0,a.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=ui[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new wt.Howl({src:[Yu[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=mm[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const a=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const l=new wt.Howl({src:[a],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=l,l.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),wt.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=Ca[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=ui[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,wt.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,wt.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};ee(dn,"instance");let uo=dn;const yt=uo.getInstance(),Be=e=>{yt&&yt.playBGM(e)},pe=e=>{yt&&yt.playSFX(e)},gm=()=>{yt&&yt.stopBGM()},ym=({isWin:e,turnNumber:t,onRestart:n,onMainMenu:r,playerCharacter:a})=>{const[l,o]=A.useState(!1),[c,u]=A.useState(!1);A.useEffect(()=>{e?(Be("victory"),o(!0)):Be("defeat");const x=setTimeout(()=>u(!0),1e3);return()=>clearTimeout(x)},[e]);const f=a||(e?"lelouch":"cc");return m.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[m.jsxs("div",{className:"cg-result-bg",children:[m.jsx("div",{className:"cg-result-bg-gradient"}),e?m.jsx("div",{className:"cg-result-bg-win",children:m.jsx("div",{className:"cg-victory-rays"})}):m.jsx("div",{className:"cg-result-bg-lose",children:m.jsx("div",{className:"cg-defeat-shadow"})})]}),l&&m.jsx(vm,{}),m.jsxs("div",{className:`cg-result-content ${c?"cg-animate-in":""}`,children:[m.jsxs("div",{className:"cg-result-header",children:[m.jsx("div",{className:"cg-result-badge",children:e?m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((x,i)=>m.jsx("circle",{cx:50+35*Math.cos((i*72-90)*Math.PI/180),cy:50+35*Math.sin((i*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:m.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${i*.2}s`,repeatCount:"indefinite"})},i))]}):m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),m.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),m.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),m.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),m.jsx("div",{className:"cg-result-character",children:m.jsxs("div",{className:"cg-character-showcase",children:[m.jsx(is,{characterId:f,size:200,priority:!0,avatarNumber:1}),m.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),m.jsx("div",{className:"cg-result-score",children:m.jsxs("div",{className:"cg-score-simple",children:[m.jsx("span",{className:"cg-score-label",children:"回合数"}),m.jsx("span",{className:"cg-score-value",children:t})]})}),m.jsxs("div",{className:"cg-result-actions",children:[m.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),m.jsx("span",{children:"再来一局"})]}),m.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:r,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),m.jsx("span",{children:"返回主菜单"})]})]})]}),m.jsx("style",{children:`
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
      `})]})},vm=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return m.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>m.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};class xm{constructor(){ee(this,"cards",[]);ee(this,"liarCard",null)}generateCardId(t,n){const r=Date.now().toString(36),a=Math.random().toString(36).substring(2,11);return`${t}-${n}-${r}-${a}`}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let a=0;a<6;a++){const l=t[a%4];this.cards.push({id:this.generateCardId(r,a),suit:l,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:this.generateCardId("JOKER",r),suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],a=[];for(let l=0;l<5;l++){const o=this.cards[l];o.owner="player",t.push(o)}for(let l=5;l<10;l++){const o=this.cards[l];o.owner="ai",n.push(o)}for(let l=10;l<15;l++){const o=this.cards[l];o.owner="ai2",r.push(o)}for(let l=15;l<20;l++){const o=this.cards[l];o.owner="ai3",a.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:a,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const a=this.cards.find(l=>l.id===r);a&&(a.owner="table",n.push(a))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(a=>a.owner===null).slice(0,t);for(const a of r)a.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const _m=1/3,wm=1/2,km=1,Sm=.1,Cm=.9,Am=.5,Nm=.25,Tm=.15,Em=.2,bm=.8,Wu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class Pm{getBaseHitChance(t){return t===0?_m:t===1?wm:km}performGeass(t,n,r=null,a=0,l=0,o){let c=this.getBaseHitChance(l);if(c+=a,r==="suzaku"&&Math.random()<Tm){if(Math.random()<Nm){const s={activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并反击！",isCounter:!0,isDodge:!0,victimId:t,counterDamage:1};return o&&(s.counterTargetId=o),s}return{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0,victimId:t}}if(l<2&&(c=Math.max(Sm,Math.min(Cm,c))),Math.random()<c){if(r==="cc"&&!n.ccReviveUsed&&n.hp<=1&&Math.random()<Am)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0,victimId:t};const i={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},s=Wu[Math.floor(Math.random()*Wu.length)];return{activated:!0,hit:!0,damage:1,newStats:i,funnyAction:s.description,message:`Geass命中！${s.emoji} ${s.description}`,victimId:t}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！",victimId:t}}calculateKallenBoost(t){return t<2?0:Math.min(bm,Em*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const ci={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},di={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},fi={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},pi={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},Im={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:ci,skillName:ci.name,skillDescription:ci.description,stats:{hp:3,difficulty:4}},jm={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:di,skillName:di.name,skillDescription:di.description,stats:{hp:3,difficulty:2}},Mm={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:fi,skillName:fi.name,skillDescription:fi.description,stats:{hp:4,difficulty:2}},zm={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:pi,skillName:pi.name,skillDescription:pi.description,stats:{hp:3,difficulty:3}},Rm={lelouch:Im,cc:jm,suzaku:Mm,kallen:zm};function Pl(e){return Rm[e]}function Aa(e){const t=Pl(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Vn(e){const t=Pl(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function Ku(e){if(!Vn(e))return e;const t=Pl(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function Lm(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function Om(e){const t=Pl(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function hi(e){return e.characterId==="kallen"&&Vn(e)?4:3}const fl={0:"player",1:"ai3",2:"ai2",3:"ai"},gf={player:0,ai3:1,ai2:2,ai:3},Dm={bottom:0,right:2,top:1,left:3},Fm={0:"bottom",1:"top",2:"right",3:"left"},pl={0:null,1:2,2:1,3:0},$m={0:3,1:2,2:1},yf={player:null,ai:0,ai2:1,ai3:2},Bm={0:"ai",1:"ai2",2:"ai3"},Hm={bottom:"player",top:"ai3",right:"ai2",left:"ai"},Vm={player:"bottom",ai3:"top",ai2:"right",ai:"left"};function Um(e){return fl[e]||null}function co(e){return gf[e]??null}function Gm(e){return pl[e]??null}function Xm(e){return yf[e]??null}function Kr(e,t){const n=Gm(e);return n===null?null:t[n]||null}function Sr(e,t){const n=Xm(e);return n===null?null:t[n]||null}function Vt(e){return{0:3,1:2,2:0,3:1}[e]??0}function Zu(e,t){const n=[];let r=e;for(let a=0;a<4;a++)if(r=Vt(r),r!==t){const l=Um(r);if(l&&(n.push(l),n.length===3))break}return n}function Qm(){const e=[];for(let a=0;a<4;a++){const l=fl[a];l&&gf[l]!==a&&e.push(`索引${a}和玩家ID${l}的映射不一致`)}for(let a=1;a<4;a++){const l=pl[a];l!==null&&$m[l]!==a&&e.push(`currentPlayerIndex=${a}和aiArrayIndex=${l}的映射不一致`)}const t=["ai","ai2","ai3"];for(const a of t){const l=yf[a];l!==null&&Bm[l]!==a&&e.push(`玩家ID${a}和aiArrayIndex=${l}的映射不一致`)}const n=["top","right","bottom","left"];for(const a of n){const l=Dm[a],o=Hm[a];Fm[l]!==a&&e.push(`UI位置${a}的索引映射不一致`),Vm[o]!==a&&e.push(`UI位置${a}的玩家ID映射不一致`),fl[l]!==o&&e.push(`UI位置${a}的索引和玩家ID映射不一致`)}const r=[1,2,0,3];for(let a=0;a<4;a++){const l=Vt(r[a]),o=r[(a+1)%4];l!==o&&e.push(`顺时针流转顺序错误: ${r[a]}的下一个应该是${o}，但得到${l}`)}return{valid:e.length===0,errors:e}}const Ju=Qm();Ju.valid||console.error("[PlayerIndexMapper] 索引映射验证失败:",Ju.errors);const Lt=e=>e==="suzaku"?4:3;class Ym{constructor(){ee(this,"cardSystem");ee(this,"geassSystem");ee(this,"state");this.cardSystem=new xm,this.geassSystem=new Pm,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:4,maxHp:4,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0,firstPlayerIndex:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:a,ai2Cards:l,ai3Cards:o}=this.cardSystem.dealCards(),c=this.cardSystem.setLiarCard(),u=Math.floor(Math.random()*4),f=n||["cc","suzaku","kallen"],x=new Map;return x.set("player",Aa(t)),x.set("ai",Aa(f[0])),x.set("ai2",Aa(f[1])),x.set("ai3",Aa(f[2])),this.state={...this.createInitialState(),phase:u===0?"player_turn":"ai_turn",liarCard:c,playerCharacter:t,currentPlayerIndex:u,playerHand:r,aiPlayers:[{id:"ai",name:qe(f[0]),character:f[0],hand:a,stats:{hp:Lt(f[0]),maxHp:Lt(f[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:qe(f[1]),character:f[1],hand:l,stats:{hp:Lt(f[1]),maxHp:Lt(f[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:qe(f[2]),character:f[2],hand:o,stats:{hp:Lt(f[2]),maxHp:Lt(f[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:Lt(t),maxHp:Lt(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0,firstPlayerIndex:u},characterStates:x},this.state}getCurrentPlayerId(){return fl[this.state.currentPlayerIndex]||"player"}getNextPlayerIndex(){let t=Vt(this.state.currentPlayerIndex),n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=pl[t];if(r!=null){const a=this.state.aiPlayers[r];if(a&&a.isActive&&a.stats.hp>0)return t}}t=Vt(t),n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const a=Lm(r);this.state.characterStates.set(n,a)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const c of t){const u=this.state.playerHand.find(f=>f.id===c);if(!u)return!1;r.push(u)}const a=this.state.characterStates.get("player"),l=a?hi(a):3;if(t.length>l)return!1;this.state.playerHand=this.state.playerHand.filter(c=>!t.includes(c.id));const o=r.some(c=>c.rank!==n&&!c.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){const r=(a=>{if(a==="player")return"玩家";const l=this.state.aiPlayers.find(o=>o.id===a);return(l==null?void 0:l.name)||a})(t);this.state.lastAction=`${r}手牌耗尽，获得胜利！`,t==="player"?this.state.winner="player":this.state.aiPlayers.find(l=>l.id===t)?this.state.winner=t:this.state.winner="ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,a=n.playerId;this.state.phase="geass";const l=r?a:t,o=r?t:a,c=x=>{if(x==="player")return"玩家";const i=Sr(x,this.state.aiPlayers);return(i==null?void 0:i.name)||x},u=c(t),f=c(a);return this.state.lastAction=`${u}向${f}发起质疑！`,this.executeGeass(l,o),{success:!0,isBluff:r,targetId:a}}executeGeass(t,n){const r=this.state.characterStates.get(t);let a;if(t==="player")a=this.state.playerStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);if(!c)return;a=c.stats}let l=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(l=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,a,(r==null?void 0:r.characterId)||null,l,this.state.turnState.geassConsecutiveMisses,n);if(this.state.geassResult=o,!o.hit&&o.isCounter&&n){if(n==="player")this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},this.state.playerStats.hp<=0&&this.checkGameOver();else{const f=this.state.aiPlayers.find(x=>x.id===n);f&&(f.stats={...f.stats,hp:Math.max(0,f.stats.hp-1)},f.stats.hp<=0&&(f.isActive=!1,this.checkGameOver()))}const u=f=>{if(f==="player")return"玩家";const x=this.state.aiPlayers.find(i=>i.id===f);return(x==null?void 0:x.name)||f};this.state.lastAction=`${u(t)}发动枢木剑术反击！${u(n)}受到反弹伤害！`,this.state.turnState.geassConsecutiveMisses=0;return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats,o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0);else{const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.stats=o.newStats,o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0))}if(o.newStats.hp<=0){if(t!=="player"){const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!Vn(n))return!1;const r=Ku(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const a=["Q","K","A"],o=(a.indexOf(this.state.liarCard)+1)%a.length;this.state.liarCard=a[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const a=t==="player"?"玩家":t;this.state.lastAction=`${a}发动了${qe(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?Vn(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:a,ai3Cards:l}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let c;if(t!==void 0)c=this.findNextActivePlayer(t);else{const u=this.getActivePlayerIndices();c=u[Math.floor(Math.random()*u.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=a,this.state.aiPlayers[2].hand=l,this.state.liarCard=o,this.state.phase=c===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=c,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0,firstPlayerIndex:c},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((u,f)=>{this.state.characterStates.set(f,Om(u))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=Sr("ai3",this.state.aiPlayers);n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=Sr("ai2",this.state.aiPlayers);r&&r.isActive&&r.stats.hp>0&&t.push(2);const a=Sr("ai",this.state.aiPlayers);return a&&a.isActive&&a.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const a=(t+r)%4;if(n.includes(a))return a}return n[0]}getState(){return structuredClone(this.state)}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(a=>a.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const a=this.state.characterStates.get("player"),l=a?hi(a):3;this.state.playerSelectedCards.length<l&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t,n){if(this.state.phase!=="ai_turn")return this.getState();const r=this.state.aiPlayers.find(o=>o.id===t);if(!r||r.hand.length===0)return this.getState();let a;if(n&&n.length>0){const o=n.filter(c=>r.hand.some(u=>u.id===c));a=o.length>0?o:[r.hand[0].id]}else{const o=Math.min(r.hand.length,Math.floor(Math.random()*2)+1);a=r.hand.slice(0,o).map(c=>c.id)}const l=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,a,l),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const a=this.state.aiPlayers.find(f=>f.id===t);if(!a)return!1;const l=[];for(const f of n){const x=a.hand.find(i=>i.id===f);if(!x)return!1;l.push(x)}const o=this.state.characterStates.get(t),c=o?hi(o):3;if(n.length>c)return!1;a.hand=a.hand.filter(f=>!n.includes(f.id));const u=l.some(f=>f.rank!==r&&!f.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:l,playerId:t,isBluff:u},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...l],this.state.lastAction=`${a.name}出了${n.length}张牌，声称是${r}`,a.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?Vn(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!Vn(n))throw new Error("技能冷却中或已使用");const r=Ku(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(t=!1){var c;if(this.state.phase==="game_over")return this.getState();if(this.checkGameOver())return this.getState();if(t){const u=this.state.turnState.lastPlayerId||((c=this.state.turnState.playedCards)==null?void 0:c.playerId);if(u==="player"&&this.state.playerHand.length===0)return this.state.lastAction="玩家手牌耗尽，获得胜利！",this.state.winner="player",this.state.phase="game_over",this.getState();if(u&&u!=="player"){const f=this.state.aiPlayers.find(x=>x.id===u);if(f&&f.hand.length===0)return this.state.lastAction=`${f.name}手牌耗尽，获得胜利！`,this.state.winner="ai",this.state.phase="game_over",this.getState()}if(this.state.turnState.playedCards=null,this.state.lastAction="无人质疑，回合继续",u){const f=co(u);f!==null?(this.state.currentPlayerIndex=f,this.state.phase=f===0?"player_turn":"ai_turn",this.state.turnState.firstPlayerIndex=f):this.state.phase=this.state.currentPlayerIndex===0?"player_turn":"ai_turn"}else this.state.phase=this.state.currentPlayerIndex===0?"player_turn":"ai_turn";return this.getState()}const n=this.state.turnState.firstPlayerIndex;let r=Vt(n),a=0;for(;a<4;){if(r===0){if(this.state.playerStats.hp>0)break}else{const u=pl[r];if(u!=null){const f=this.state.aiPlayers[u];if(f&&f.isActive&&f.stats.hp>0)break}}r=Vt(r),a++}this.state.currentPlayerIndex=r,this.state.phase=r===0?"player_turn":"ai_turn",this.state.turnState.firstPlayerIndex=r,this.state.turnState.turnNumber++,this.state.turnState.playedCards=null;const l=u=>{if(u===0)return"玩家";const f=Kr(u,this.state.aiPlayers);return(f==null?void 0:f.name)||`索引${u}`};l(n);const o=l(r);return this.state.lastAction=`第${this.state.turnState.turnNumber}回合开始，${o}先手`,this.getState()}}const qu={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.clear()}catch(t){console.error("Failed to clear localStorage:",t)}}};class Wm{constructor(t){ee(this,"characterId");ee(this,"personality");ee(this,"memory");ee(this,"currentState","idle");ee(this,"decisionInProgress",!1);this.characterId=t,this.personality=this.createPersonality(t),this.memory={playedCards:[],playerBluffStats:new Map,currentRound:0}}createPersonality(t){return{lelouch:{bluffTendency:.7,challengeTendency:.6,riskTolerance:.8,aggression:.7,learningRate:.9},cc:{bluffTendency:.5,challengeTendency:.4,riskTolerance:.6,aggression:.5,learningRate:.7},suzaku:{bluffTendency:.3,challengeTendency:.7,riskTolerance:.5,aggression:.6,learningRate:.6},kallen:{bluffTendency:.6,challengeTendency:.8,riskTolerance:.9,aggression:.9,learningRate:.5}}[t]}analyzeSituation(t){var f;const n=t.gameState,r=t.aiPlayer,a=n.turnState,l={totalPlayed:this.memory.playedCards.length,claimedRanks:this.memory.playedCards.map(x=>x.claimedRank),actualRanks:this.memory.playedCards.map(x=>x.actualRank)},o=this.estimateRemainingCards(t),c=a.playedCards?{playerId:a.playedCards.playerId,claimedRank:a.playedCards.claimedRank,cardCount:a.playedCards.cardIds.length}:void 0,u=((f=n.playerStats)==null?void 0:f.hp)??3;return{liarCard:t.liarCard,aiHP:r.stats.hp,playerHP:u,aiHandSize:r.hand.length,playedCardsInfo:l,remainingCards:o,currentClaim:c}}estimateRemainingCards(t){const r=new Map;return["Q","K","A"].forEach(a=>{r.set(a,6)}),this.memory.playedCards.forEach(a=>{const l=r.get(a.actualRank)||0;r.set(a.actualRank,Math.max(0,l-1))}),t.aiPlayer.hand.forEach(a=>{if(!a.isJoker){const l=r.get(a.rank)||0;r.set(a.rank,Math.max(0,l-1))}}),r}analyzeProbabilities(t,n){const{currentClaim:r,remainingCards:a,aiHP:l,playerHP:o}=t;if(!r)return{truthProbability:.5,challengeExpectedValue:0,playOptions:this.analyzePlayOptions(n,t)};const c=r.claimedRank,u=a.get(c)||0,f=Array.from(a.values()).reduce((h,y)=>h+y,0),x=f>0?u/f:.5,i=this.memory.playerBluffStats.get(r.playerId),s=i&&i.total>0?i.bluffs/i.total:.3,d=x*(1-s*.5),g=this.calculateChallengeValue(!0,l,o),v=this.calculateChallengeValue(!1,l,o),_=(1-d)*g+d*v,p=this.analyzePlayOptions(n,t);return{truthProbability:d,challengeExpectedValue:_,playOptions:p}}calculateChallengeValue(t,n,r){return t?10+(r<=1?20:0):n<=1?-20:-10}analyzePlayOptions(t,n){const r=t.aiPlayer.hand,{liarCard:a}=n,l=[];if(r.length===0)return l;const{aiHP:o,playerHP:c}=n,u=r.filter(x=>x.rank===a||x.isJoker),f=r.filter(x=>x.rank!==a&&!x.isJoker);if(u.length>0){const x=u[0],i=this.calculatePlayRisk(!0,!1,o,c);l.push({cards:[x.id],claimedRank:a,isBluff:!1,expectedValue:5-i,risk:i})}if(f.length>0){const x=f[0],i=this.calculatePlayRisk(!1,!0,o,c),s=this.personality.bluffTendency*5;l.push({cards:[x.id],claimedRank:a,isBluff:!0,expectedValue:3+s-i,risk:i})}if(u.length>=2&&Math.random()<.3){const x=u.slice(0,2),i=this.calculatePlayRisk(!0,!1,o,c)*1.5;l.push({cards:x.map(s=>s.id),claimedRank:a,isBluff:!1,expectedValue:8-i,risk:i})}return l}calculatePlayRisk(t,n,r,a){let l=0;return n&&(l+=3),r<=1&&(l+=5),a<=1&&(l-=2),Math.max(0,l)}makeDecision(t){if(this.decisionInProgress)throw new Error("AI决策正在进行中");this.decisionInProgress=!0;try{const n=this.analyzeSituation(t),r=this.analyzeProbabilities(n,t);return this.selectBestDecision(t,n,r)}finally{this.decisionInProgress=!1}}selectBestDecision(t,n,r){const{currentClaim:a}=n,{challengeExpectedValue:l,playOptions:o,truthProbability:c}=r,u=2+this.personality.challengeTendency*3,f=0;if(a&&l>u&&c<.6&&Math.random()<this.personality.challengeTendency)return{action:"challenge",confidence:Math.min(.95,.5+l/20),reasoning:this.generateChallengeReasoning(n,r),animationState:"challenging"};if(o.length>0){o.sort((s,d)=>d.expectedValue-s.expectedValue);const i=o[0];if(i.expectedValue>f){const s=Math.min(.95,.6+i.expectedValue/10);return{action:"play",cardIds:i.cards,claimedRank:i.claimedRank,confidence:s,reasoning:this.generatePlayReasoning(i),animationState:"playing",isBluff:i.isBluff}}}return{action:"pass",confidence:.5,reasoning:"无有利选项，选择保守",animationState:"playing"}}generateChallengeReasoning(t,n){const{truthProbability:r}=n,{currentClaim:a}=t;if(!a)return"根据直觉质疑";const l=Math.round((1-r)*100);return l>70?`高度怀疑（${l}%），对方可能在撒谎`:l>40?`中度怀疑（${l}%），值得一试`:"策略性质疑，试探对方反应"}generatePlayReasoning(t){return t.isBluff?`策略性虚张声势（期望值:${t.expectedValue.toFixed(1)}）`:`诚实出牌，稳扎稳打（期望值:${t.expectedValue.toFixed(1)}）`}updateMemory(t,n,r,a){this.memory.currentRound++,this.memory.playedCards.push({round:this.memory.currentRound,playerId:t,claimedRank:n,actualRank:r,wasLie:a});const l=this.memory.playerBluffStats.get(t)||{bluffs:0,total:0};l.total++,a&&l.bluffs++,this.memory.playerBluffStats.set(t,l)}getCurrentThought(){return{state:this.currentState,progress:this.getProgressForState(this.currentState),message:this.getMessageForState(this.currentState),emotion:this.getEmotionForState(this.currentState)}}getProgressForState(t){return{idle:0,thinking:.3,deciding:.5,playing:.7,challenging:.8,reacting:.9}[t]||0}getMessageForState(t){return{idle:"等待中...",thinking:"分析局势...",deciding:"做出决策...",playing:"出牌中...",challenging:"质疑中...",reacting:"反应中..."}[t]||"思考中..."}getEmotionForState(t){return{idle:"calm",thinking:"uncertain",deciding:"uncertain",playing:"confident",challenging:"confident",reacting:"surprised"}[t]||"calm"}setAnimationState(t){this.currentState=t}getCharacterId(){return this.characterId}reset(){this.memory={playedCards:[],playerBluffStats:new Map,currentRound:0},this.currentState="idle",this.decisionInProgress=!1}}function Km(e){return new Wm(e)}const ec=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],Zm=(e,t)=>{let n=e,r=0;for(;r<4;){if(n===0){if(t.playerStats.hp>0)return n}else{const a=Kr(n,t.aiPlayers);if(a&&a.isActive&&a.stats.hp>0)return n}n=Vt(n),r++}return e},Jm=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let a=t??null;if(!a&&r)if(r==="player")a=qe(n??void 0);else{const c=e.aiPlayers.find(u=>u.id===r);a=(c==null?void 0:c.name)??null}if(!a)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(a===qe(n??void 0))return{loserId:"player",actualLoserName:a};const l=e.aiPlayers.find(c=>c.name===a);return l?{loserId:l.id,actualLoserName:a}:(console.error(`[determineLoserId] 找不到AI: ${a}`),{loserId:null,actualLoserName:a})},qm=(e,t,n,r)=>{pe("geass-hit");const a=ec[Math.floor(Math.random()*ec.length)];r(a),pe(a.soundType),n(`${t}受到Geass！`),n(`突然${a.description}`),n(`Geass命中！${t}HP-1`)},eg=(e,t,n)=>{pe("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},tg=(e,t)=>{setTimeout(()=>{Be(e==="player"?"victory":"defeat"),t("result")},2e3)},ng=(e,t,n,r,a,l,o,c,u)=>{const f=n.turnState.firstPlayerIndex;let x=Vt(f);x=Zm(x,n);const i=e.resetRound(x);l(i),o([]);const s=i.currentPlayerIndex===0,d=s?null:Kr(i.currentPlayerIndex,i.aiPlayers),g=s?qe(r??void 0):d==null?void 0:d.name;a(`【第${i.turnState.turnNumber}回合】骗子牌是${i.liarCard}`),a(`${g}先手！`),c(!1),s||setTimeout(()=>{var v;(v=u.current)==null||v.call(u)},1500)},rg=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:a,setSelectedCards:l,setIsProcessing:o,setCurrentScreen:c,aiTurnRef:u})=>A.useCallback((f,x,i,s)=>{if(r(f),f.geassResult){const g=s||(i||"对手");f.geassResult.hit?qm(f.geassResult,g,n,a):eg(f.geassResult,g,n)}if(f.phase==="game_over"){tg(f.winner,c);return}setTimeout(()=>{a(null);const d=e.current;if(!d)return;const g=d.getState(),{loserId:v,actualLoserName:_}=Jm(g,s,t);if(!v||!_){o(!1);return}ng(d,v,g,t,n,r,l,o,u)},2500)},[e,t,n,r,a,l,o,c,u]),ht={THINKING:1e3,PLAY_TO_CHALLENGE:2e3,CHALLENGE_TO_RESOLVE:2e3,GEASS_RESULT_DISPLAY:2e3,TURN_SWITCH:1e3,ROUND_START:600,NO_CHALLENGE_DISPLAY:2e3,CHALLENGE_DISPLAY:2e3,AI_CHALLENGE_INTERVAL:1500},Pn=!1,ag=()=>{const[e,t]=A.useState("main-menu"),[n,r]=A.useState(null),[a,l]=A.useState(1),[o,c]=A.useState(["cc","suzaku","kallen"]),[u,f]=A.useState({}),x=A.useRef(null),[i,s]=A.useState(null),[d,g]=A.useState([]),[v,_]=A.useState(null),[p,h]=A.useState([]),[y,w]=A.useState(!1),C=A.useRef({pass:!1,challenge:!1}),[N,T]=A.useState({isThinking:!1,aiId:null}),[I,j]=A.useState({playedBy:null,checkedPlayers:[]}),O=A.useRef(new Map),G=A.useRef(null);A.useEffect(()=>((async()=>{try{await yt.preload();const b=qu.load("gameSettings");b&&(yt.setBGMVolume(b.musicVolume??.5),yt.setSFXVolume(b.soundVolume??.7)),Be("main-menu")}catch{}})(),()=>{gm()}),[]),A.useEffect(()=>{const M=yt.getStatus(),b={soundEnabled:M.enabled,musicEnabled:!0,soundVolume:M.sfxVolume,musicVolume:M.bgmVolume};qu.save("gameSettings",b)},[]);const D=A.useCallback(M=>{g(b=>[...b,M])},[]),se=rg({gameEngineRef:x,selectedCharacter:n,addLog:D,setGameState:s,setCurrentFunnyAction:_,setSelectedCards:h,setIsProcessing:w,setCurrentScreen:M=>t(M),aiTurnRef:G}),fe=A.useCallback((M,b)=>{var R;return M==="player"?qe(b.playerCharacter):((R=b.aiPlayers.find(H=>H.id===M))==null?void 0:R.name)||M},[]),Ye=A.useCallback(async(M,b,R,H)=>{var X;for(const W of H){if(W==="player")continue;const F=Sr(W,b.aiPlayers);if(!F||!F.isActive||F.stats.hp<=0)continue;let ae=!1;const J=O.current.get(W),q=M.getState();if(J&&q.turnState.playedCards)try{const K=J.makeDecision({gameState:q,aiPlayer:F,liarCard:q.liarCard});ae=K.action==="challenge",Pn&&console.log(`[processAIChallengerDecisions] AI ${F.name} DynamicAI决策: ${K.action}`)}catch{ae=Math.random()<.3}else ae=Math.random()<.3;if(ae){pe("challenge");const K=fe(R,b);D(`${F.name}向${K}发起质疑！`),cn.flushSync(()=>{s({...M.getState(),lastAction:`${F.name}向${K}发起质疑！`})}),await new Promise(Tn=>setTimeout(Tn,ht.CHALLENGE_DISPLAY));const Ke=M.aiChallengeDecision(F.id),ke=((X=b.turnState.playedCards)==null?void 0:X.isBluff)??!1;D(ke?`质疑成功！${K}在撒谎！`:`质疑失败！${K}没有撒谎！`);const or=ke?R:F.id,Nn=fe(or,Ke);return s(Ke),se(Ke,F.name,K,Nn),!0}else D(`${F.name}选择不质疑`),cn.flushSync(()=>{s({...M.getState(),lastAction:`${F.name}选择不质疑`})}),await new Promise(K=>setTimeout(K,ht.NO_CHALLENGE_DISPLAY))}return!1},[D,fe,se]),We=A.useCallback(async(M,b)=>{var K,Ke;const R=M.getState();if(R.phase==="game_over"){D(R.lastAction||"游戏结束！"),w(!1),setTimeout(()=>{R.winner==="player"?Be("victory"):Be("defeat"),t("result")},1500);return}const H=(K=R.turnState.playedCards)==null?void 0:K.playerId;if(!H)return;const X=co(H)??0,W=Zu(X,X),F=W.indexOf("player");if(F!==-1){const ke=W.slice(0,F).filter(Tn=>Tn!=="player");if(await Ye(M,R,H,ke))return;j({playedBy:H,checkedPlayers:ke});const Nn=M.enterChallengePhase();s(Nn),w(!1),D("等待玩家决策...");return}if(await Ye(M,R,H,W))return;D("无人质疑，回合继续"),j({playedBy:null,checkedPlayers:[]});const J=M.endChallengePhase(!0);if(s(J),J.phase==="game_over"){D(J.lastAction||"游戏结束！"),w(!1),setTimeout(()=>{J.winner==="player"?Be("victory"):Be("defeat"),t("result")},1500);return}const q=J.turnState.lastPlayerId||((Ke=J.turnState.playedCards)==null?void 0:Ke.playerId);q==="player"||!q?(w(!1),D("轮到玩家出牌")):setTimeout(()=>{var ke;return(ke=G.current)==null?void 0:ke.call(G)},ht.TURN_SWITCH)},[D,Ye]),De=A.useCallback(()=>{if(!x.current)return;const M=x.current,b=M.getState();if(b.phase==="player_turn"||b.phase==="game_over")return;const R=Kr(b.currentPlayerIndex,b.aiPlayers);if(!R)return;const H=R.id;if(!R.isActive||R.stats.hp<=0){if(b.aiPlayers.filter(F=>F.isActive&&F.stats.hp>0).length===0&&b.playerStats.hp>0){b.winner="player",b.phase="game_over",s({...b}),D("游戏结束！玩家获胜！"),w(!1);return}const W=(b.currentPlayerIndex+1)%4;b.currentPlayerIndex=W,s({...b}),W!==0?setTimeout(()=>{var F;return(F=G.current)==null?void 0:F.call(G)},ht.TURN_SWITCH):b.playerStats.hp<=0?(b.winner="ai",b.phase="game_over",s({...b}),D("游戏结束！AI获胜！"),w(!1)):(w(!1),D("轮到玩家出牌"));return}w(!0),pe("turn-start"),D(`${R.name} 的回合...`),T({isThinking:!0,aiId:H}),setTimeout(()=>{try{Pn&&console.log("[handleAITurn] AI开始出牌:",R.name),T({isThinking:!1,aiId:null});let X;const W=O.current.get(H);if(W&&b.liarCard)try{const J=W.makeDecision({gameState:b,aiPlayer:R,liarCard:b.liarCard});J.action==="play"&&J.cardIds&&J.cardIds.length>0&&(X=J.cardIds,Pn&&console.log(`[handleAITurn] DynamicAI出牌决策: ${X}`))}catch(J){Pn&&console.warn("[handleAITurn] DynamicAIEngine决策失败，使用随机:",J)}const F=M.aiPlayCards(H,X);Pn&&console.log("[handleAITurn] AI出牌完成, phase:",F.phase),cn.flushSync(()=>{s(F)});const ae=F.turnState.playedCards;ae&&D(`${R.name}出了${ae.cardIds.length}张牌，声称是${ae.claimedRank}`),setTimeout(()=>{Pn&&console.log("[handleAITurn] 进入质疑阶段"),We(M,F)},ht.PLAY_TO_CHALLENGE)}catch{w(!1),T({isThinking:!1,aiId:null})}},ht.THINKING)},[D,We]);A.useEffect(()=>{G.current=De},[De]);const E=A.useCallback(M=>{t(M),r(null),s(null),g([]),h([]),_(null),Be("main-menu")},[]),L=A.useCallback(()=>{pe("button-click"),t("character-select")},[]),k=A.useCallback(()=>{pe("button-click"),t("settings")},[]),B=A.useCallback(()=>{pe("button-click"),t("help")},[]),Y=A.useCallback((M,b)=>{pe("character-select"),r(M),l(b||Math.floor(Math.random()*4)+1)},[]),dt=A.useCallback(()=>{if(!n)return;pe("button-click");const R=["lelouch","cc","suzaku","kallen"].filter(q=>q!==n).sort(()=>Math.random()-.5);c(R);const H={};R.forEach(q=>{H[q]=Math.floor(Math.random()*4)+1}),f(H),x.current=new Ym;const X=x.current.initializeGame(n,R),W=["ai","ai2","ai3"];O.current.clear(),R.forEach((q,K)=>{O.current.set(W[K],Km(q))}),s(X),h([]);const F=X.currentPlayerIndex===0,ae=F?null:Kr(X.currentPlayerIndex,X.aiPlayers),J=F?qe(n):ae==null?void 0:ae.name;g(["游戏开始！",`【第1回合】骗子牌是${X.liarCard}`,`${J}先手！`]),t("game-table"),Be("game-normal"),F||setTimeout(()=>{De()},1500)},[n,De]),Te=A.useCallback(()=>{pe("button-click"),t("main-menu"),r(null)},[]),rn=A.useCallback(()=>{pe("button-click"),E("main-menu")},[E]),Fe=A.useCallback(M=>{if(!x.current||y)return;const b=x.current;if(b.getState().phase!=="player_turn")return;b.toggleCardSelection(M);const H=b.getState();h(H.playerSelectedCards),pe("button-click")},[y]),jt=A.useCallback(()=>{if(!x.current||p.length===0||y)return;w(!0),pe("card-play");const M=x.current;try{const b=M.playerPlayCards();cn.flushSync(()=>{s(b)}),h([]);const R=qe(n),H=b.turnState.playedCards;H&&D(`${R}出了${H.cardIds.length}张牌，声称是${H.claimedRank}`),setTimeout(()=>{We(M,b)},ht.PLAY_TO_CHALLENGE)}catch{w(!1)}},[p,y,D,n,We]),Il=A.useCallback(async()=>{if(!x.current||y)return;w(!0),pe("challenge");const M=x.current,b=M.getState(),R=b.turnState.playedCards,H=R==null?void 0:R.playerId,X=qe(n),W=fe(H||"player",b);D(`${X}向${W}发起质疑！`),cn.flushSync(()=>{s({...b,lastAction:`${X}向${W}发起质疑！`})}),await new Promise(K=>setTimeout(K,ht.CHALLENGE_DISPLAY));const F=M.playerChallengeDecision(!0),ae=(R==null?void 0:R.isBluff)??!1;D(ae?`质疑成功！${W}在撒谎！`:`质疑失败！${W}没有撒谎！`);const q=fe(ae&&H||"player",F);s(F),se(F,X,W,q)},[y,D,n,se,fe]),ir=A.useCallback(async()=>{var Ke;if(!x.current||y||C.current.pass)return;C.current.pass=!0,w(!0),pe("button-click");const M=x.current,b=M.getState(),R=(Ke=b.turnState.playedCards)==null?void 0:Ke.playerId,H=qe(n);D(`${H}选择不质疑`),cn.flushSync(()=>{s({...b,lastAction:`${H}选择不质疑`})}),await new Promise(ke=>setTimeout(ke,ht.NO_CHALLENGE_DISPLAY));const X=co(R||"player")??0,W=Zu(X,X),F=I.playedBy===R?I.checkedPlayers:[],ae=W.filter(ke=>ke!=="player"&&!F.includes(ke));if(await Ye(M,b,R||"player",ae)){C.current.pass=!1;return}D("无人质疑，回合继续"),j({playedBy:null,checkedPlayers:[]});const q=M.endChallengePhase(!0);if(s(q),q.phase==="game_over"){D(q.lastAction||"游戏结束！"),w(!1),C.current.pass=!1,setTimeout(()=>{q.winner==="player"?Be("victory"):Be("defeat"),t("result")},1500);return}const K=q.turnState.lastPlayerId;K==="player"||!K?(w(!1),setTimeout(()=>{C.current.pass=!1},500)):setTimeout(()=>{De(),C.current.pass=!1},ht.TURN_SWITCH)},[y,D,n,se,De,Ye,I]),jl=A.useCallback(M=>{if(!x.current||n!=="lelouch")return;const b=x.current;if(!b.canPlayerUseSkill("player")){D("❌ 绝对命令使用次数已耗尽（每局限1次）");return}pe("geass-activate");const R=b.lelouchChangeLiarCard(M);s(R),D(`鲁鲁修发动绝对命令！骗子牌变为 ${M}`),D("⚠️ 绝对命令已使用，本局无法再次使用")},[n,D]),Ml=A.useCallback(()=>{pe("button-click"),E("character-select")},[E]),na=A.useCallback(()=>{pe("button-click"),E("main-menu")},[E]),An=()=>{var M,b,R,H;switch(e){case"main-menu":return m.jsx($u,{onStart:L,onSettings:k,onHelp:B});case"character-select":return m.jsx(Jh,{characters:cl,selectedId:n,selectedAvatar:a,onSelect:Y,onConfirm:dt,onBack:Te});case"game-table":return i?m.jsx(hm,{gameState:i,selectedCards:p,selectedCharacter:n,selectedAvatar:a,aiCharacters:o,aiAvatars:u,onToggleCardSelection:Fe,onConfirmPlay:jt,onPass:ir,onChallenge:Il,onBackToMenu:rn,onLelouchSkill:jl,gameLog:d,funnyAction:v,isProcessing:y,canUseSkill:((M=x.current)==null?void 0:M.canPlayerUseSkill("player"))??!0,aiThinkingState:N}):null;case"result":{const X=(i==null?void 0:i.winner)==="player",W=((b=i==null?void 0:i.playerStats)==null?void 0:b.geassSuccessCount)||0,F=((R=i==null?void 0:i.aiPlayers)==null?void 0:R.reduce((J,q)=>{var K;return J+(((K=q.stats)==null?void 0:K.geassSuccessCount)||0)},0))||0,ae=((H=i==null?void 0:i.turnState)==null?void 0:H.turnNumber)||0;return m.jsx(ym,{isWin:X,playerScore:W,opponentScore:F,turnNumber:ae,onRestart:Ml,onMainMenu:na,playerCharacter:n||void 0})}case"settings":return ra();case"help":return zl();default:return m.jsx($u,{onStart:L,onSettings:k,onHelp:B})}},ra=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"设置"}),m.jsxs("div",{className:"cg-settings-content",children:[m.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),m.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),zl=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"游戏帮助"}),m.jsxs("div",{className:"cg-help-content",children:[m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🎮 游戏规则"}),m.jsxs("ul",{children:[m.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),m.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),m.jsxs("li",{children:[m.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),m.jsx("li",{children:"质疑后翻牌验证："}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),m.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),m.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"👤 角色技能详解"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),m.jsx("br",{}),m.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),m.jsx("br",{}),m.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),m.jsx("br",{}),m.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),m.jsx("br",{}),m.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🃏 特殊牌"}),m.jsx("ul",{children:m.jsxs("li",{children:[m.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return m.jsx("div",{className:"cg-app",children:An()})},lg=mi.createRoot(document.getElementById("root"));lg.render(m.jsx(Ff.StrictMode,{children:m.jsx(ag,{})}));
//# sourceMappingURL=index-B8Hw81qp.js.map
