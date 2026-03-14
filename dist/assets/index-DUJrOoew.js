var bc=Object.defineProperty;var Oc=(e,t,n)=>t in e?bc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ce=(e,t,n)=>Oc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ws={exports:{}},jl={},ks={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),Dc=Symbol.for("react.portal"),Fc=Symbol.for("react.fragment"),Hc=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Wc=Symbol.for("react.lazy"),ao=Symbol.iterator;function Kc(e){return e===null||typeof e!="object"?null:(e=ao&&e[ao]||e["@@iterator"],typeof e=="function"?e:null)}var Ss={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cs=Object.assign,Ns={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||Ss}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Es(){}Es.prototype=Tn.prototype;function ca(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||Ss}var da=ca.prototype=new Es;da.constructor=ca;Cs(da,Tn.prototype);da.isPureReactComponent=!0;var oo=Array.isArray,js=Object.prototype.hasOwnProperty,fa={current:null},Ts={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)js.call(t,r)&&!Ts.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){for(var d=Array(c),g=0;g<c;g++)d[g]=arguments[g+2];l.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)l[r]===void 0&&(l[r]=c[r]);return{$$typeof:vr,type:e,key:i,ref:o,props:l,_owner:fa.current}}function Yc(e,t){return{$$typeof:vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var so=/\/+/g;function Vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Vr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case vr:case Dc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Vl(o,0):r,oo(l)?(n="",e!=null&&(n=e.replace(so,"$&/")+"/"),Vr(l,t,n,"",function(g){return g})):l!=null&&(pa(l)&&(l=Yc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(so,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",oo(e))for(var c=0;c<e.length;c++){i=e[c];var d=r+Vl(i,c);o+=Vr(i,t,n,d,l)}else if(d=Kc(e),typeof d=="function")for(e=d.call(e),c=0;!(i=e.next()).done;)i=i.value,d=r+Vl(i,c++),o+=Vr(i,t,n,d,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Nr(e,t,n){if(e==null)return e;var r=[],l=0;return Vr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Ur={transition:null},Jc={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:fa};function Ps(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Nr,forEach:function(e,t,n){Nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Nr(e,function(){t++}),t},toArray:function(e){return Nr(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Tn;R.Fragment=Fc;R.Profiler=Bc;R.PureComponent=ca;R.StrictMode=Hc;R.Suspense=Gc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jc;R.act=Ps;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cs({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=fa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)js.call(t,d)&&!Ts.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var g=0;g<d;g++)c[g]=arguments[g+2];r.children=c}return{$$typeof:vr,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$c,_context:e},e.Consumer=e};R.createElement=As;R.createFactory=function(e){var t=As.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Uc,render:e}};R.isValidElement=pa;R.lazy=function(e){return{$$typeof:Wc,_payload:{_status:-1,_result:e},_init:Zc}};R.memo=function(e,t){return{$$typeof:Qc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};R.unstable_act=Ps;R.useCallback=function(e,t){return _e.current.useCallback(e,t)};R.useContext=function(e){return _e.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};R.useEffect=function(e,t){return _e.current.useEffect(e,t)};R.useId=function(){return _e.current.useId()};R.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return _e.current.useMemo(e,t)};R.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};R.useRef=function(e){return _e.current.useRef(e)};R.useState=function(e){return _e.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return _e.current.useTransition()};R.version="18.3.1";ks.exports=R;var z=ks.exports;const qc=Rc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=z,td=Symbol.for("react.element"),nd=Symbol.for("react.fragment"),rd=Object.prototype.hasOwnProperty,ld=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,id={key:!0,ref:!0,__self:!0,__source:!0};function Is(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)rd.call(t,r)&&!id.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:td,type:e,key:i,ref:o,props:l,_owner:ld.current}}jl.Fragment=nd;jl.jsx=Is;jl.jsxs=Is;ws.exports=jl;var p=ws.exports,vi={},zs={exports:{}},ze={},Ms={exports:{}},Ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var O=T.length;T.push(L);e:for(;0<O;){var $=O-1>>>1,K=T[$];if(0<l(K,L))T[$]=L,T[O]=K,O=$;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],O=T.pop();if(O!==L){T[0]=O;e:for(var $=0,K=T.length,rt=K>>>1;$<rt;){var be=2*($+1)-1,vt=T[be],Oe=be+1,lt=T[Oe];if(0>l(vt,O))Oe<K&&0>l(lt,vt)?(T[$]=lt,T[Oe]=O,$=Oe):(T[$]=vt,T[be]=O,$=be);else if(Oe<K&&0>l(lt,O))T[$]=lt,T[Oe]=O,$=Oe;else break e}}return L}function l(T,L){var O=T.sortIndex-L.sortIndex;return O!==0?O:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var d=[],g=[],x=1,a=null,s=3,u=!1,m=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var L=n(g);L!==null;){if(L.callback===null)r(g);else if(L.startTime<=T)r(g),L.sortIndex=L.expirationTime,t(d,L);else break;L=n(g)}}function w(T){if(y=!1,v(T),!m)if(n(d)!==null)m=!0,nt(S);else{var L=n(g);L!==null&&gt(w,L.startTime-T)}}function S(T,L){m=!1,y&&(y=!1,f(j),j=-1),u=!0;var O=s;try{for(v(L),a=n(d);a!==null&&(!(a.expirationTime>L)||T&&!q());){var $=a.callback;if(typeof $=="function"){a.callback=null,s=a.priorityLevel;var K=$(a.expirationTime<=L);L=e.unstable_now(),typeof K=="function"?a.callback=K:a===n(d)&&r(d),v(L)}else r(d);a=n(d)}if(a!==null)var rt=!0;else{var be=n(g);be!==null&&gt(w,be.startTime-L),rt=!1}return rt}finally{a=null,s=O,u=!1}}var N=!1,C=null,j=-1,E=5,M=-1;function q(){return!(e.unstable_now()-M<E)}function je(){if(C!==null){var T=e.unstable_now();M=T;var L=!0;try{L=C(!0,T)}finally{L?Le():(N=!1,C=null)}}else N=!1}var Le;if(typeof h=="function")Le=function(){h(je)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ht=we.port2;we.port1.onmessage=je,Le=function(){ht.postMessage(null)}}else Le=function(){_(je,0)};function nt(T){C=T,N||(N=!0,Le())}function gt(T,L){j=_(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||u||(m=!0,nt(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(T){switch(s){case 1:case 2:case 3:var L=3;break;default:L=s}var O=s;s=L;try{return T()}finally{s=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=s;s=T;try{return L()}finally{s=O}},e.unstable_scheduleCallback=function(T,L,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,T={id:x++,callback:L,priorityLevel:T,startTime:O,expirationTime:K,sortIndex:-1},O>$?(T.sortIndex=O,t(g,T),n(d)===null&&T===n(g)&&(y?(f(j),j=-1):y=!0,gt(w,O-$))):(T.sortIndex=K,t(d,T),m||u||(m=!0,nt(S))),T},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(T){var L=s;return function(){var O=s;s=L;try{return T.apply(this,arguments)}finally{s=O}}}})(Ls);Ms.exports=Ls;var ad=Ms.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=z,Ie=ad;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bs=new Set,qn={};function Jt(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(qn[e]=t,e=0;e<t.length;e++)bs.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uo={},co={};function ud(e){return yi.call(co,e)?!0:yi.call(uo,e)?!1:sd.test(e)?co[e]=!0:(uo[e]=!0,!1)}function cd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dd(e,t,n,r){if(t===null||typeof t>"u"||cd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ma=/[\-:]([a-z])/g;function ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ma,ha);ue[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ma,ha);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ma,ha);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dd(t,n,l,r)&&(n=null),r||l===null?ud(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),nn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),va=Symbol.for("react.strict_mode"),_i=Symbol.for("react.profiler"),Os=Symbol.for("react.provider"),Rs=Symbol.for("react.context"),ya=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),wi=Symbol.for("react.suspense_list"),_a=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Ds=Symbol.for("react.offscreen"),fo=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=fo&&e[fo]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Ul;function Hn(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Gl=!1;function Ql(e,t){if(!e||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,c=i.length-1;1<=o&&0<=c&&l[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(l[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||l[o]!==i[c]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=c);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hn(e):""}function fd(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function ki(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rn:return"Fragment";case nn:return"Portal";case _i:return"Profiler";case va:return"StrictMode";case xi:return"Suspense";case wi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rs:return(e.displayName||"Context")+".Consumer";case Os:return(e._context.displayName||"Context")+".Provider";case ya:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _a:return t=e.displayName||null,t!==null?t:ki(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return ki(e(t))}catch{}}return null}function pd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ki(t);case 8:return t===va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function md(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=md(e))}function Hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Si(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function po(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&ga(e,"checked",t,!1)}function Ci(e,t){Bs(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ni(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ni(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ni(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ho(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Bn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function $s(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function Gs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function Qs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Gs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var gd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,t){if(t){if(gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ii=null,gn=null,vn=null;function vo(e){if(e=xr(e)){if(typeof Ii!="function")throw Error(k(280));var t=e.stateNode;t&&(t=zl(t),Ii(e.stateNode,e.type,t))}}function Ws(e){gn?vn?vn.push(e):vn=[e]:gn=e}function Ks(){if(gn){var e=gn,t=vn;if(vn=gn=null,vo(e),t)for(e=0;e<t.length;e++)vo(t[e])}}function Ys(e,t){return e(t)}function Xs(){}var Wl=!1;function Zs(e,t,n){if(Wl)return e(t,n);Wl=!0;try{return Ys(e,t,n)}finally{Wl=!1,(gn!==null||vn!==null)&&(Xs(),Ks())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var zi=!1;if(ct)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{zi=!1}function vd(e,t,n,r,l,i,o,c,d){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(x){this.onError(x)}}var Gn=!1,rl=null,ll=!1,Mi=null,yd={onError:function(e){Gn=!0,rl=e}};function _d(e,t,n,r,l,i,o,c,d){Gn=!1,rl=null,vd.apply(yd,arguments)}function xd(e,t,n,r,l,i,o,c,d){if(_d.apply(this,arguments),Gn){if(Gn){var g=rl;Gn=!1,rl=null}else throw Error(k(198));ll||(ll=!0,Mi=g)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yo(e){if(qt(e)!==e)throw Error(k(188))}function wd(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return yo(l),e;if(i===r)return yo(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,c=l.child;c;){if(c===n){o=!0,n=l,r=i;break}if(c===r){o=!0,r=l,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=l;break}if(c===r){o=!0,r=i,n=l;break}c=c.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function qs(e){return e=wd(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=Ie.unstable_scheduleCallback,_o=Ie.unstable_cancelCallback,kd=Ie.unstable_shouldYield,Sd=Ie.unstable_requestPaint,ee=Ie.unstable_now,Cd=Ie.unstable_getCurrentPriorityLevel,wa=Ie.unstable_ImmediatePriority,nu=Ie.unstable_UserBlockingPriority,il=Ie.unstable_NormalPriority,Nd=Ie.unstable_LowPriority,ru=Ie.unstable_IdlePriority,Tl=null,et=null;function Ed(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Ad,jd=Math.log,Td=Math.LN2;function Ad(e){return e>>>=0,e===0?32:31-(jd(e)/Td|0)|0}var Ar=64,Pr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~l;c!==0?r=$n(c):(i&=o,i!==0&&(r=$n(i)))}else o=n&~l,o!==0?r=$n(o):i!==0&&(r=$n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),l=1<<n,r|=e[n],t&=~l;return r}function Pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ke(i),c=1<<o,d=l[o];d===-1?(!(c&n)||c&r)&&(l[o]=Pd(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}}function Li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lu(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function zd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ke(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var H=0;function iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var au,Sa,ou,su,uu,bi=!1,Ir=[],Et=null,jt=null,Tt=null,nr=new Map,rr=new Map,wt=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xo(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function Ln(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=xr(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ld(e,t,n,r,l){switch(t){case"focusin":return Et=Ln(Et,e,t,n,r,l),!0;case"dragenter":return jt=Ln(jt,e,t,n,r,l),!0;case"mouseover":return Tt=Ln(Tt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return nr.set(i,Ln(nr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,rr.set(i,Ln(rr.get(i)||null,e,t,n,r,l)),!0}return!1}function cu(e){var t=$t(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Js(n),t!==null){e.blockedOn=t,uu(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pi=r,n.target.dispatchEvent(r),Pi=null}else return t=xr(n),t!==null&&Sa(t),e.blockedOn=n,!1;t.shift()}return!0}function wo(e,t,n){Gr(e)&&n.delete(t)}function bd(){bi=!1,Et!==null&&Gr(Et)&&(Et=null),jt!==null&&Gr(jt)&&(jt=null),Tt!==null&&Gr(Tt)&&(Tt=null),nr.forEach(wo),rr.forEach(wo)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,bi||(bi=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,bd)))}function lr(e){function t(l){return bn(l,e)}if(0<Ir.length){bn(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&bn(Et,e),jt!==null&&bn(jt,e),Tt!==null&&bn(Tt,e),nr.forEach(t),rr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)cu(n),n.blockedOn===null&&wt.shift()}var yn=mt.ReactCurrentBatchConfig,ol=!0;function Od(e,t,n,r){var l=H,i=yn.transition;yn.transition=null;try{H=1,Ca(e,t,n,r)}finally{H=l,yn.transition=i}}function Rd(e,t,n,r){var l=H,i=yn.transition;yn.transition=null;try{H=4,Ca(e,t,n,r)}finally{H=l,yn.transition=i}}function Ca(e,t,n,r){if(ol){var l=Oi(e,t,n,r);if(l===null)li(e,t,r,sl,n),xo(e,r);else if(Ld(l,e,t,n,r))r.stopPropagation();else if(xo(e,r),t&4&&-1<Md.indexOf(e)){for(;l!==null;){var i=xr(l);if(i!==null&&au(i),i=Oi(e,t,n,r),i===null&&li(e,t,r,sl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else li(e,t,r,null,n)}}var sl=null;function Oi(e,t,n,r){if(sl=null,e=xa(r),e=$t(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Js(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cd()){case wa:return 1;case nu:return 4;case il:case Nd:return 16;case ru:return 536870912;default:return 16}default:return 16}}var Ct=null,Na=null,Qr=null;function fu(){if(Qr)return Qr;var e,t=Na,n=t.length,r,l="value"in Ct?Ct.value:Ct.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Qr=l.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function ko(){return!1}function Me(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zr:ko,this.isPropagationStopped=ko,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=Me(An),_r=Z({},An,{view:0,detail:0}),Dd=Me(_r),Yl,Xl,On,Al=Z({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(Yl=e.screenX-On.screenX,Xl=e.screenY-On.screenY):Xl=Yl=0,On=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),So=Me(Al),Fd=Z({},Al,{dataTransfer:0}),Hd=Me(Fd),Bd=Z({},_r,{relatedTarget:0}),Zl=Me(Bd),$d=Z({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),Vd=Me($d),Ud=Z({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gd=Me(Ud),Qd=Z({},An,{data:0}),Co=Me(Qd),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yd[e])?!!t[e]:!1}function ja(){return Xd}var Zd=Z({},_r,{key:function(e){if(e.key){var t=Wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jd=Me(Zd),qd=Z({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),No=Me(qd),ef=Z({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),tf=Me(ef),nf=Z({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),rf=Me(nf),lf=Z({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),af=Me(lf),of=[9,13,27,32],Ta=ct&&"CompositionEvent"in window,Qn=null;ct&&"documentMode"in document&&(Qn=document.documentMode);var sf=ct&&"TextEvent"in window&&!Qn,pu=ct&&(!Ta||Qn&&8<Qn&&11>=Qn),Eo=" ",jo=!1;function mu(e,t){switch(e){case"keyup":return of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function uf(e,t){switch(e){case"compositionend":return hu(t);case"keypress":return t.which!==32?null:(jo=!0,Eo);case"textInput":return e=t.data,e===Eo&&jo?null:e;default:return null}}function cf(e,t){if(ln)return e==="compositionend"||!Ta&&mu(e,t)?(e=fu(),Qr=Na=Ct=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pu&&t.locale!=="ko"?null:t.data;default:return null}}var df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function To(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!df[e.type]:t==="textarea"}function gu(e,t,n,r){Ws(r),t=ul(t,"onChange"),0<t.length&&(n=new Ea("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,ir=null;function ff(e){ju(e,0)}function Pl(e){var t=sn(e);if(Hs(t))return e}function pf(e,t){if(e==="change")return t}var vu=!1;if(ct){var Jl;if(ct){var ql="oninput"in document;if(!ql){var Ao=document.createElement("div");Ao.setAttribute("oninput","return;"),ql=typeof Ao.oninput=="function"}Jl=ql}else Jl=!1;vu=Jl&&(!document.documentMode||9<document.documentMode)}function Po(){Wn&&(Wn.detachEvent("onpropertychange",yu),ir=Wn=null)}function yu(e){if(e.propertyName==="value"&&Pl(ir)){var t=[];gu(t,ir,e,xa(e)),Zs(ff,t)}}function mf(e,t,n){e==="focusin"?(Po(),Wn=t,ir=n,Wn.attachEvent("onpropertychange",yu)):e==="focusout"&&Po()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(ir)}function gf(e,t){if(e==="click")return Pl(t)}function vf(e,t){if(e==="input"||e==="change")return Pl(t)}function yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:yf;function ar(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!yi.call(t,l)||!Xe(e[l],t[l]))return!1}return!0}function Io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zo(e,t){var n=Io(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Io(n)}}function _u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xu(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _f(e){var t=xu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_u(n.ownerDocument.documentElement,n)){if(r!==null&&Aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=zo(n,i);var o=zo(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=ct&&"documentMode"in document&&11>=document.documentMode,an=null,Ri=null,Kn=null,Di=!1;function Mo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Di||an==null||an!==nl(r)||(r=an,"selectionStart"in r&&Aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&ar(Kn,r)||(Kn=r,r=ul(Ri,"onSelect"),0<r.length&&(t=new Ea("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=an)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var on={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},ei={},wu={};ct&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete on.animationend.animation,delete on.animationiteration.animation,delete on.animationstart.animation),"TransitionEvent"in window||delete on.transitionend.transition);function Il(e){if(ei[e])return ei[e];if(!on[e])return e;var t=on[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return ei[e]=t[n];return e}var ku=Il("animationend"),Su=Il("animationiteration"),Cu=Il("animationstart"),Nu=Il("transitionend"),Eu=new Map,Lo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Eu.set(e,t),Jt(t,[e])}for(var ti=0;ti<Lo.length;ti++){var ni=Lo[ti],wf=ni.toLowerCase(),kf=ni[0].toUpperCase()+ni.slice(1);Ot(wf,"on"+kf)}Ot(ku,"onAnimationEnd");Ot(Su,"onAnimationIteration");Ot(Cu,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Nu,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xd(r,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],d=c.instance,g=c.currentTarget;if(c=c.listener,d!==i&&l.isPropagationStopped())break e;bo(l,c,g),i=d}else for(o=0;o<r.length;o++){if(c=r[o],d=c.instance,g=c.currentTarget,c=c.listener,d!==i&&l.isPropagationStopped())break e;bo(l,c,g),i=d}}}if(ll)throw e=Mi,ll=!1,Mi=null,e}function G(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var r=e+"__bubble";n.has(r)||(Tu(t,e,2,!1),n.add(r))}function ri(e,t,n){var r=0;t&&(r|=4),Tu(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Lr]){e[Lr]=!0,bs.forEach(function(n){n!=="selectionchange"&&(Sf.has(n)||ri(n,!1,e),ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,ri("selectionchange",!1,t))}}function Tu(e,t,n,r){switch(du(t)){case 1:var l=Od;break;case 4:l=Rd;break;default:l=Ca}n=l.bind(null,t,n,e),l=void 0,!zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function li(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;c!==null;){if(o=$t(c),o===null)return;if(d=o.tag,d===5||d===6){r=i=o;continue e}c=c.parentNode}}r=r.return}Zs(function(){var g=i,x=xa(n),a=[];e:{var s=Eu.get(e);if(s!==void 0){var u=Ea,m=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":u=Jd;break;case"focusin":m="focus",u=Zl;break;case"focusout":m="blur",u=Zl;break;case"beforeblur":case"afterblur":u=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=So;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=tf;break;case ku:case Su:case Cu:u=Vd;break;case Nu:u=rf;break;case"scroll":u=Dd;break;case"wheel":u=af;break;case"copy":case"cut":case"paste":u=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=No}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?s!==null?s+"Capture":null:s;y=[];for(var h=g,v;h!==null;){v=h;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=tr(h,f),w!=null&&y.push(sr(h,w,v)))),_)break;h=h.return}0<y.length&&(s=new u(s,m,null,n,x),a.push({event:s,listeners:y}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",s&&n!==Pi&&(m=n.relatedTarget||n.fromElement)&&($t(m)||m[dt]))break e;if((u||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,u?(m=n.relatedTarget||n.toElement,u=g,m=m?$t(m):null,m!==null&&(_=qt(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(u=null,m=g),u!==m)){if(y=So,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=No,w="onPointerLeave",f="onPointerEnter",h="pointer"),_=u==null?s:sn(u),v=m==null?s:sn(m),s=new y(w,h+"leave",u,n,x),s.target=_,s.relatedTarget=v,w=null,$t(x)===g&&(y=new y(f,h+"enter",m,n,x),y.target=v,y.relatedTarget=_,w=y),_=w,u&&m)t:{for(y=u,f=m,h=0,v=y;v;v=tn(v))h++;for(v=0,w=f;w;w=tn(w))v++;for(;0<h-v;)y=tn(y),h--;for(;0<v-h;)f=tn(f),v--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=tn(y),f=tn(f)}y=null}else y=null;u!==null&&Oo(a,s,u,y,!1),m!==null&&_!==null&&Oo(a,_,m,y,!0)}}e:{if(s=g?sn(g):window,u=s.nodeName&&s.nodeName.toLowerCase(),u==="select"||u==="input"&&s.type==="file")var S=pf;else if(To(s))if(vu)S=vf;else{S=hf;var N=mf}else(u=s.nodeName)&&u.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(S=gf);if(S&&(S=S(e,g))){gu(a,S,n,x);break e}N&&N(e,s,g),e==="focusout"&&(N=s._wrapperState)&&N.controlled&&s.type==="number"&&Ni(s,"number",s.value)}switch(N=g?sn(g):window,e){case"focusin":(To(N)||N.contentEditable==="true")&&(an=N,Ri=g,Kn=null);break;case"focusout":Kn=Ri=an=null;break;case"mousedown":Di=!0;break;case"contextmenu":case"mouseup":case"dragend":Di=!1,Mo(a,n,x);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":Mo(a,n,x)}var C;if(Ta)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ln?mu(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(pu&&n.locale!=="ko"&&(ln||j!=="onCompositionStart"?j==="onCompositionEnd"&&ln&&(C=fu()):(Ct=x,Na="value"in Ct?Ct.value:Ct.textContent,ln=!0)),N=ul(g,j),0<N.length&&(j=new Co(j,e,null,n,x),a.push({event:j,listeners:N}),C?j.data=C:(C=hu(n),C!==null&&(j.data=C)))),(C=sf?uf(e,n):cf(e,n))&&(g=ul(g,"onBeforeInput"),0<g.length&&(x=new Co("onBeforeInput","beforeinput",null,n,x),a.push({event:x,listeners:g}),x.data=C))}ju(a,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=tr(e,n),i!=null&&r.unshift(sr(e,i,l)),i=tr(e,t),i!=null&&r.push(sr(e,i,l))),e=e.return}return r}function tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oo(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var c=n,d=c.alternate,g=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&g!==null&&(c=g,l?(d=tr(n,i),d!=null&&o.unshift(sr(n,d,c))):l||(d=tr(n,i),d!=null&&o.push(sr(n,d,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Cf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Ro(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(Nf,"")}function br(e,t,n){if(t=Ro(t),Ro(e)!==t&&n)throw Error(k(425))}function cl(){}var Fi=null,Hi=null;function Bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $i=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,Do=typeof Promise=="function"?Promise:void 0,jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Do<"u"?function(e){return Do.resolve(null).then(e).catch(Tf)}:$i;function Tf(e){setTimeout(function(){throw e})}function ii(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);lr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Pn,ur="__reactProps$"+Pn,dt="__reactContainer$"+Pn,Vi="__reactEvents$"+Pn,Af="__reactListeners$"+Pn,Pf="__reactHandles$"+Pn;function $t(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fo(e);e!==null;){if(n=e[qe])return n;e=Fo(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[qe]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function zl(e){return e[ur]||null}var Ui=[],un=-1;function Rt(e){return{current:e}}function Q(e){0>un||(e.current=Ui[un],Ui[un]=null,un--)}function V(e,t){un++,Ui[un]=e.current,e.current=t}var bt={},me=Rt(bt),Ce=Rt(!1),Wt=bt;function kn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ne(e){return e=e.childContextTypes,e!=null}function dl(){Q(Ce),Q(me)}function Ho(e,t,n){if(me.current!==bt)throw Error(k(168));V(me,t),V(Ce,n)}function Au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,pd(e)||"Unknown",l));return Z({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Wt=me.current,V(me,e),V(Ce,Ce.current),!0}function Bo(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Au(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(me),V(me,e)):Q(Ce),V(Ce,n)}var at=null,Ml=!1,ai=!1;function Pu(e){at===null?at=[e]:at.push(e)}function If(e){Ml=!0,Pu(e)}function Dt(){if(!ai&&at!==null){ai=!0;var e=0,t=H;try{var n=at;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,Ml=!1}catch(l){throw at!==null&&(at=at.slice(e+1)),tu(wa,Dt),l}finally{H=t,ai=!1}}return null}var cn=[],dn=0,pl=null,ml=0,Re=[],De=0,Kt=null,ot=1,st="";function Ht(e,t){cn[dn++]=ml,cn[dn++]=pl,pl=e,ml=t}function Iu(e,t,n){Re[De++]=ot,Re[De++]=st,Re[De++]=Kt,Kt=e;var r=ot;e=st;var l=32-Ke(r)-1;r&=~(1<<l),n+=1;var i=32-Ke(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,ot=1<<32-Ke(t)+l|n<<l|r,st=i+e}else ot=1<<i|n<<l|r,st=e}function Pa(e){e.return!==null&&(Ht(e,1),Iu(e,1,0))}function Ia(e){for(;e===pl;)pl=cn[--dn],cn[dn]=null,ml=cn[--dn],cn[dn]=null;for(;e===Kt;)Kt=Re[--De],Re[De]=null,st=Re[--De],Re[De]=null,ot=Re[--De],Re[De]=null}var Pe=null,Ae=null,W=!1,Qe=null;function zu(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $o(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Ae=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:ot,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Ae=null,!0):!1;default:return!1}}function Gi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qi(e){if(W){var t=Ae;if(t){var n=t;if(!$o(e,t)){if(Gi(e))throw Error(k(418));t=At(n.nextSibling);var r=Pe;t&&$o(e,t)?zu(r,n):(e.flags=e.flags&-4097|2,W=!1,Pe=e)}}else{if(Gi(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Pe=e}}}function Vo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Or(e){if(e!==Pe)return!1;if(!W)return Vo(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bi(e.type,e.memoizedProps)),t&&(t=Ae)){if(Gi(e))throw Mu(),Error(k(418));for(;t;)zu(e,t),t=At(t.nextSibling)}if(Vo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=Pe?At(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=Ae;e;)e=At(e.nextSibling)}function Sn(){Ae=Pe=null,W=!1}function za(e){Qe===null?Qe=[e]:Qe.push(e)}var zf=mt.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var c=l.refs;o===null?delete c[i]:c[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Uo(e){var t=e._init;return t(e._payload)}function Lu(e){function t(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function l(f,h){return f=Mt(f,h),f.index=0,f.sibling=null,f}function i(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,h,v,w){return h===null||h.tag!==6?(h=pi(v,f.mode,w),h.return=f,h):(h=l(h,v),h.return=f,h)}function d(f,h,v,w){var S=v.type;return S===rn?x(f,h,v.props.children,w,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Uo(S)===h.type)?(w=l(h,v.props),w.ref=Rn(f,h,v),w.return=f,w):(w=el(v.type,v.key,v.props,null,f.mode,w),w.ref=Rn(f,h,v),w.return=f,w)}function g(f,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=mi(v,f.mode,w),h.return=f,h):(h=l(h,v.children||[]),h.return=f,h)}function x(f,h,v,w,S){return h===null||h.tag!==7?(h=Qt(v,f.mode,w,S),h.return=f,h):(h=l(h,v),h.return=f,h)}function a(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pi(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Er:return v=el(h.type,h.key,h.props,null,f.mode,v),v.ref=Rn(f,null,h),v.return=f,v;case nn:return h=mi(h,f.mode,v),h.return=f,h;case _t:var w=h._init;return a(f,w(h._payload),v)}if(Bn(h)||zn(h))return h=Qt(h,f.mode,v,null),h.return=f,h;Rr(f,h)}return null}function s(f,h,v,w){var S=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:c(f,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Er:return v.key===S?d(f,h,v,w):null;case nn:return v.key===S?g(f,h,v,w):null;case _t:return S=v._init,s(f,h,S(v._payload),w)}if(Bn(v)||zn(v))return S!==null?null:x(f,h,v,w,null);Rr(f,v)}return null}function u(f,h,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(v)||null,c(h,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Er:return f=f.get(w.key===null?v:w.key)||null,d(h,f,w,S);case nn:return f=f.get(w.key===null?v:w.key)||null,g(h,f,w,S);case _t:var N=w._init;return u(f,h,v,N(w._payload),S)}if(Bn(w)||zn(w))return f=f.get(v)||null,x(h,f,w,S,null);Rr(h,w)}return null}function m(f,h,v,w){for(var S=null,N=null,C=h,j=h=0,E=null;C!==null&&j<v.length;j++){C.index>j?(E=C,C=null):E=C.sibling;var M=s(f,C,v[j],w);if(M===null){C===null&&(C=E);break}e&&C&&M.alternate===null&&t(f,C),h=i(M,h,j),N===null?S=M:N.sibling=M,N=M,C=E}if(j===v.length)return n(f,C),W&&Ht(f,j),S;if(C===null){for(;j<v.length;j++)C=a(f,v[j],w),C!==null&&(h=i(C,h,j),N===null?S=C:N.sibling=C,N=C);return W&&Ht(f,j),S}for(C=r(f,C);j<v.length;j++)E=u(C,f,j,v[j],w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?j:E.key),h=i(E,h,j),N===null?S=E:N.sibling=E,N=E);return e&&C.forEach(function(q){return t(f,q)}),W&&Ht(f,j),S}function y(f,h,v,w){var S=zn(v);if(typeof S!="function")throw Error(k(150));if(v=S.call(v),v==null)throw Error(k(151));for(var N=S=null,C=h,j=h=0,E=null,M=v.next();C!==null&&!M.done;j++,M=v.next()){C.index>j?(E=C,C=null):E=C.sibling;var q=s(f,C,M.value,w);if(q===null){C===null&&(C=E);break}e&&C&&q.alternate===null&&t(f,C),h=i(q,h,j),N===null?S=q:N.sibling=q,N=q,C=E}if(M.done)return n(f,C),W&&Ht(f,j),S;if(C===null){for(;!M.done;j++,M=v.next())M=a(f,M.value,w),M!==null&&(h=i(M,h,j),N===null?S=M:N.sibling=M,N=M);return W&&Ht(f,j),S}for(C=r(f,C);!M.done;j++,M=v.next())M=u(C,f,j,M.value,w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?j:M.key),h=i(M,h,j),N===null?S=M:N.sibling=M,N=M);return e&&C.forEach(function(je){return t(f,je)}),W&&Ht(f,j),S}function _(f,h,v,w){if(typeof v=="object"&&v!==null&&v.type===rn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Er:e:{for(var S=v.key,N=h;N!==null;){if(N.key===S){if(S=v.type,S===rn){if(N.tag===7){n(f,N.sibling),h=l(N,v.props.children),h.return=f,f=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&Uo(S)===N.type){n(f,N.sibling),h=l(N,v.props),h.ref=Rn(f,N,v),h.return=f,f=h;break e}n(f,N);break}else t(f,N);N=N.sibling}v.type===rn?(h=Qt(v.props.children,f.mode,w,v.key),h.return=f,f=h):(w=el(v.type,v.key,v.props,null,f.mode,w),w.ref=Rn(f,h,v),w.return=f,f=w)}return o(f);case nn:e:{for(N=v.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(f,h.sibling),h=l(h,v.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=mi(v,f.mode,w),h.return=f,f=h}return o(f);case _t:return N=v._init,_(f,h,N(v._payload),w)}if(Bn(v))return m(f,h,v,w);if(zn(v))return y(f,h,v,w);Rr(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(f,h.sibling),h=l(h,v),h.return=f,f=h):(n(f,h),h=pi(v,f.mode,w),h.return=f,f=h),o(f)):n(f,h)}return _}var Cn=Lu(!0),bu=Lu(!1),hl=Rt(null),gl=null,fn=null,Ma=null;function La(){Ma=fn=gl=null}function ba(e){var t=hl.current;Q(hl),e._currentValue=t}function Wi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){gl=e,Ma=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Ma!==e)if(e={context:e,memoizedValue:t,next:null},fn===null){if(gl===null)throw Error(k(308));fn=e,gl.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return t}var Vt=null;function Oa(e){Vt===null?Vt=[e]:Vt.push(e)}function Ou(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Oa(t)):(n.next=l.next,l.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ft(e,n)}return l=r.interleaved,l===null?(t.next=t,Oa(r)):(t.next=l.next,l.next=t),r.interleaved=t,ft(e,n)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}function Go(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var l=e.updateQueue;xt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,g=d.next;d.next=null,o===null?i=g:o.next=g,o=d;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==o&&(c===null?x.firstBaseUpdate=g:c.next=g,x.lastBaseUpdate=d))}if(i!==null){var a=l.baseState;o=0,x=g=d=null,c=i;do{var s=c.lane,u=c.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:u,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var m=e,y=c;switch(s=t,u=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){a=m.call(u,a,s);break e}a=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,s=typeof m=="function"?m.call(u,a,s):m,s==null)break e;a=Z({},a,s);break e;case 2:xt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,s=l.effects,s===null?l.effects=[c]:s.push(c))}else u={eventTime:u,lane:s,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(g=x=u,d=a):x=x.next=u,o|=s;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;s=c,c=s.next,s.next=null,l.lastBaseUpdate=s,l.shared.pending=null}}while(!0);if(x===null&&(d=a),l.baseState=d,l.firstBaseUpdate=g,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Xt|=o,e.lanes=o,e.memoizedState=a}}function Qo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var wr={},tt=Rt(wr),cr=Rt(wr),dr=Rt(wr);function Ut(e){if(e===wr)throw Error(k(174));return e}function Da(e,t){switch(V(dr,t),V(cr,e),V(tt,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ji(t,e)}Q(tt),V(tt,t)}function Nn(){Q(tt),Q(cr),Q(dr)}function Du(e){Ut(dr.current);var t=Ut(tt.current),n=ji(t,e.type);t!==n&&(V(cr,e),V(tt,n))}function Fa(e){cr.current===e&&(Q(tt),Q(cr))}var Y=Rt(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oi=[];function Ha(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Yr=mt.ReactCurrentDispatcher,si=mt.ReactCurrentBatchConfig,Yt=0,X=null,re=null,ie=null,_l=!1,Yn=!1,fr=0,Mf=0;function de(){throw Error(k(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function $a(e,t,n,r,l,i){if(Yt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?Rf:Df,e=n(r,l),Yn){i=0;do{if(Yn=!1,fr=0,25<=i)throw Error(k(301));i+=1,ie=re=null,t.updateQueue=null,Yr.current=Ff,e=n(r,l)}while(Yn)}if(Yr.current=xl,t=re!==null&&re.next!==null,Yt=0,ie=re=X=null,_l=!1,t)throw Error(k(300));return e}function Va(){var e=fr!==0;return fr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function $e(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(k(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function pr(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=$e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=re,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var c=o=null,d=null,g=i;do{var x=g.lane;if((Yt&x)===x)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var a={lane:x,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(c=d=a,o=r):d=d.next=a,X.lanes|=x,Xt|=x}g=g.next}while(g!==null&&g!==i);d===null?o=r:d.next=c,Xe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,Xt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ci(e){var t=$e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Xe(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fu(){}function Hu(e,t){var n=X,r=$e(),l=t(),i=!Xe(r.memoizedState,l);if(i&&(r.memoizedState=l,Se=!0),r=r.queue,Ua(Vu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,mr(9,$u.bind(null,n,r,l,t),void 0,null),ae===null)throw Error(k(349));Yt&30||Bu(n,t,l)}return l}function Bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $u(e,t,n,r){t.value=n,t.getSnapshot=r,Uu(t)&&Gu(e)}function Vu(e,t,n){return n(function(){Uu(t)&&Gu(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Gu(e){var t=ft(e,1);t!==null&&Ye(t,e,1,-1)}function Wo(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=Of.bind(null,X,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qu(){return $e().memoizedState}function Xr(e,t,n,r){var l=Je();X.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Ll(e,t,n,r){var l=$e();r=r===void 0?null:r;var i=void 0;if(re!==null){var o=re.memoizedState;if(i=o.destroy,r!==null&&Ba(r,o.deps)){l.memoizedState=mr(t,n,i,r);return}}X.flags|=e,l.memoizedState=mr(1|t,n,i,r)}function Ko(e,t){return Xr(8390656,8,e,t)}function Ua(e,t){return Ll(2048,8,e,t)}function Wu(e,t){return Ll(4,2,e,t)}function Ku(e,t){return Ll(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xu(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4,4,Yu.bind(null,t,e),n)}function Ga(){}function Zu(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ju(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qu(e,t,n){return Yt&21?(Xe(n,t)||(n=lu(),X.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Lf(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=si.transition;si.transition={};try{e(!1),t()}finally{H=n,si.transition=r}}function ec(){return $e().memoizedState}function bf(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tc(e))nc(t,n);else if(n=Ou(e,t,n,r),n!==null){var l=ye();Ye(n,e,r,l),rc(n,t,r)}}function Of(e,t,n){var r=zt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tc(e))nc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,c=i(o,n);if(l.hasEagerState=!0,l.eagerState=c,Xe(c,o)){var d=t.interleaved;d===null?(l.next=l,Oa(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=Ou(e,t,l,r),n!==null&&(l=ye(),Ye(n,e,r,l),rc(n,t,r))}}function tc(e){var t=e.alternate;return e===X||t!==null&&t===X}function nc(e,t){Yn=_l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}var xl={readContext:Be,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Rf={readContext:Be,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Ko,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bf.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Wo,useDebugValue:Ga,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Wo(!1),t=e[0];return e=Lf.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=Je();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));Yt&30||Bu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ko(Vu.bind(null,r,i,e),[e]),r.flags|=2048,mr(9,$u.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=ae.identifierPrefix;if(W){var n=st,r=ot;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Df={readContext:Be,useCallback:Zu,useContext:Be,useEffect:Ua,useImperativeHandle:Xu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:Ju,useReducer:ui,useRef:Qu,useState:function(){return ui(pr)},useDebugValue:Ga,useDeferredValue:function(e){var t=$e();return qu(t,re.memoizedState,e)},useTransition:function(){var e=ui(pr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Hu,useId:ec,unstable_isNewReconciler:!1},Ff={readContext:Be,useCallback:Zu,useContext:Be,useEffect:Ua,useImperativeHandle:Xu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:Ju,useReducer:ci,useRef:Qu,useState:function(){return ci(pr)},useDebugValue:Ga,useDeferredValue:function(e){var t=$e();return re===null?t.memoizedState=e:qu(t,re.memoizedState,e)},useTransition:function(){var e=ci(pr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Hu,useId:ec,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ki(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bl={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),l=zt(e),i=ut(r,l);i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,l),t!==null&&(Ye(t,e,l,r),Kr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),l=zt(e),i=ut(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,l),t!==null&&(Ye(t,e,l,r),Kr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=zt(e),l=ut(n,r);l.tag=2,t!=null&&(l.callback=t),t=Pt(e,l,r),t!==null&&(Ye(t,e,r,n),Kr(t,e,r))}};function Yo(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(l,i):!0}function lc(e,t,n){var r=!1,l=bt,i=t.contextType;return typeof i=="object"&&i!==null?i=Be(i):(l=Ne(t)?Wt:me.current,r=t.contextTypes,i=(r=r!=null)?kn(e,l):bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Xo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bl.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ra(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Be(i):(i=Ne(t)?Wt:me.current,l.context=kn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ki(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&bl.enqueueReplaceState(l,l.state,null),vl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=fd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function di(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kl||(kl=!0,aa=r),Xi(e,t)},n}function ac(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Xi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Zo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ep.bind(null,e,t,n),t.then(e,e))}function Jo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qo(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var Bf=mt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?bu(t,null,n,r):Cn(t,e.child,n,r)}function es(e,t,n,r,l){n=n.render;var i=t.ref;return _n(t,l),r=$a(e,t,n,r,i,l),n=Va(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(W&&n&&Pa(t),t.flags|=1,ve(e,t,r,l),t.child)}function ts(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,oc(e,t,i,r,l)):(e=el(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(o,r)&&e.ref===t.ref)return pt(e,t,l)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(ar(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,pt(e,t,l)}return Zi(e,t,n,r,l)}function sc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(mn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(mn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(mn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(mn,Te),Te|=r;return ve(e,t,l,n),t.child}function uc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zi(e,t,n,r,l){var i=Ne(n)?Wt:me.current;return i=kn(t,i),_n(t,l),n=$a(e,t,n,r,i,l),r=Va(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,pt(e,t,l)):(W&&r&&Pa(t),t.flags|=1,ve(e,t,n,l),t.child)}function ns(e,t,n,r,l){if(Ne(n)){var i=!0;fl(t)}else i=!1;if(_n(t,l),t.stateNode===null)Zr(e,t),lc(t,n,r),Yi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var d=o.context,g=n.contextType;typeof g=="object"&&g!==null?g=Be(g):(g=Ne(n)?Wt:me.current,g=kn(t,g));var x=n.getDerivedStateFromProps,a=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";a||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||d!==g)&&Xo(t,o,r,g),xt=!1;var s=t.memoizedState;o.state=s,vl(t,r,o,l),d=t.memoizedState,c!==r||s!==d||Ce.current||xt?(typeof x=="function"&&(Ki(t,n,x,r),d=t.memoizedState),(c=xt||Yo(t,n,c,r,s,d,g))?(a||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=g,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ru(e,t),c=t.memoizedProps,g=t.type===t.elementType?c:Ue(t.type,c),o.props=g,a=t.pendingProps,s=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Be(d):(d=Ne(n)?Wt:me.current,d=kn(t,d));var u=n.getDerivedStateFromProps;(x=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==a||s!==d)&&Xo(t,o,r,d),xt=!1,s=t.memoizedState,o.state=s,vl(t,r,o,l);var m=t.memoizedState;c!==a||s!==m||Ce.current||xt?(typeof u=="function"&&(Ki(t,n,u,r),m=t.memoizedState),(g=xt||Yo(t,n,g,r,s,m,d)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=d,r=g):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return Ji(e,t,n,r,i,l)}function Ji(e,t,n,r,l,i){uc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Bo(t,n,!1),pt(e,t,i);r=t.stateNode,Bf.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,c,i)):ve(e,t,c,i),t.memoizedState=r.state,l&&Bo(t,n,!0),t.child}function cc(e){var t=e.stateNode;t.pendingContext?Ho(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ho(e,t.context,!1),Da(e,t.containerInfo)}function rs(e,t,n,r,l){return Sn(),za(l),t.flags|=256,ve(e,t,n,r),t.child}var qi={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function dc(e,t,n){var r=t.pendingProps,l=Y.current,i=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(Y,l&1),e===null)return Qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Dl(o,r,0,null),e=Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ea(n),t.memoizedState=qi,e):Qa(t,o));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return $f(e,t,o,r,c,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,c=l.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Mt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),c!==null?i=Mt(c,i):(i=Qt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?ea(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=qi,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qa(e,t){return t=Dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,r){return r!==null&&za(r),Cn(t,e.child,null,n),e=Qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $f(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=di(Error(k(422))),Dr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Dl({mode:"visible",children:r.children},l,0,null),i=Qt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Cn(t,e.child,null,o),t.child.memoizedState=ea(o),t.memoizedState=qi,i);if(!(t.mode&1))return Dr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(k(419)),r=di(i,r,void 0),Dr(e,t,o,r)}if(c=(o&e.childLanes)!==0,Se||c){if(r=ae,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,ft(e,l),Ye(r,e,l,-1))}return Ja(),r=di(Error(k(421))),Dr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ae=At(l.nextSibling),Pe=t,W=!0,Qe=null,e!==null&&(Re[De++]=ot,Re[De++]=st,Re[De++]=Kt,ot=e.id,st=e.overflow,Kt=t),t=Qa(t,r.children),t.flags|=4096,t)}function ls(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wi(e.return,t,n)}function fi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function fc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ls(e,n,t);else if(e.tag===19)ls(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),fi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}fi(t,!0,n,null,i);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vf(e,t,n){switch(t.tag){case 3:cc(t),Sn();break;case 5:Du(t);break;case 1:Ne(t.type)&&fl(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;V(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?dc(e,t,n):(V(Y,Y.current&1),e=pt(e,t,n),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,sc(e,t,n)}return pt(e,t,n)}var pc,ta,mc,hc;pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ta=function(){};mc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ut(tt.current);var i=null;switch(n){case"input":l=Si(e,l),r=Si(e,r),i=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":l=Ei(e,l),r=Ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}Ti(n,r);var o;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var c=l[g];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(qn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var d=r[g];if(c=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&d!==c&&(d!=null||c!=null))if(g==="style")if(c){for(o in c)!c.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&c[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(i||(i=[]),i.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(qn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&G("scroll",e),i||c===d||(i=[])):(i=i||[]).push(g,d))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uf(e,t,n){var r=t.pendingProps;switch(Ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ne(t.type)&&dl(),fe(t),null;case 3:return r=t.stateNode,Nn(),Q(Ce),Q(me),Ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(ua(Qe),Qe=null))),ta(e,t),fe(t),null;case 5:Fa(t);var l=Ut(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)mc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return fe(t),null}if(e=Ut(tt.current),Or(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=t,r[ur]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(l=0;l<Vn.length;l++)G(Vn[l],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":po(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":ho(r,i),G("invalid",r)}Ti(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&br(r.textContent,c,e),l=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&br(r.textContent,c,e),l=["children",""+c]):qn.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":jr(r),mo(r,i,!0);break;case"textarea":jr(r),go(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=cl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[ur]=r,pc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ai(n,r),n){case"dialog":G("cancel",e),G("close",e),l=r;break;case"iframe":case"object":case"embed":G("load",e),l=r;break;case"video":case"audio":for(l=0;l<Vn.length;l++)G(Vn[l],e);l=r;break;case"source":G("error",e),l=r;break;case"img":case"image":case"link":G("error",e),G("load",e),l=r;break;case"details":G("toggle",e),l=r;break;case"input":po(e,r),l=Si(e,r),G("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),G("invalid",e);break;case"textarea":ho(e,r),l=Ei(e,r),G("invalid",e);break;default:l=r}Ti(n,l),c=l;for(i in c)if(c.hasOwnProperty(i)){var d=c[i];i==="style"?Qs(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Us(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&er(e,d):typeof d=="number"&&er(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&G("scroll",e):d!=null&&ga(e,i,d,o))}switch(n){case"input":jr(e),mo(e,r,!1);break;case"textarea":jr(e),go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?hn(e,!!r.multiple,i,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Ut(dr.current),Ut(tt.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return fe(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ae!==null&&t.mode&1&&!(t.flags&128))Mu(),Sn(),t.flags|=98560,i=!1;else if(i=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[qe]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else Qe!==null&&(ua(Qe),Qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?le===0&&(le=3):Ja())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Nn(),ta(e,t),e===null&&or(t.stateNode.containerInfo),fe(t),null;case 10:return ba(t.type._context),fe(t),null;case 17:return Ne(t.type)&&dl(),fe(t),null;case 19:if(Q(Y),i=t.memoizedState,i===null)return fe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Dn(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=yl(e),o!==null){for(t.flags|=128,Dn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>jn&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304)}else{if(!r)if(e=yl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!W)return fe(t),null}else 2*ee()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Gf(e,t){switch(Ia(t),t.tag){case 1:return Ne(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),Q(Ce),Q(me),Ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Nn(),null;case 10:return ba(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var Fr=!1,pe=!1,Qf=typeof WeakSet=="function"?WeakSet:Set,A=null;function pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){J(e,t,r)}}var is=!1;function Wf(e,t){if(Fi=ol,e=xu(),Aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,d=-1,g=0,x=0,a=e,s=null;t:for(;;){for(var u;a!==n||l!==0&&a.nodeType!==3||(c=o+l),a!==i||r!==0&&a.nodeType!==3||(d=o+r),a.nodeType===3&&(o+=a.nodeValue.length),(u=a.firstChild)!==null;)s=a,a=u;for(;;){if(a===e)break t;if(s===n&&++g===l&&(c=o),s===i&&++x===r&&(d=o),(u=a.nextSibling)!==null)break;a=s,s=a.parentNode}a=u}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hi={focusedElem:e,selectionRange:n},ol=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,_=m.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ue(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return m=is,is=!1,m}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&na(t,n,i)}l=l.next}while(l!==r)}}function Ol(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gc(e){var t=e.alternate;t!==null&&(e.alternate=null,gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[ur],delete t[Vi],delete t[Af],delete t[Pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vc(e){return e.tag===5||e.tag===3||e.tag===4}function as(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function la(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(la(e,t,n),e=e.sibling;e!==null;)la(e,t,n),e=e.sibling}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}var oe=null,Ge=!1;function yt(e,t,n){for(n=n.child;n!==null;)yc(e,t,n),n=n.sibling}function yc(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:pe||pn(n,t);case 6:var r=oe,l=Ge;oe=null,yt(e,t,n),oe=r,Ge=l,oe!==null&&(Ge?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ge?(e=oe,n=n.stateNode,e.nodeType===8?ii(e.parentNode,n):e.nodeType===1&&ii(e,n),lr(e)):ii(oe,n.stateNode));break;case 4:r=oe,l=Ge,oe=n.stateNode.containerInfo,Ge=!0,yt(e,t,n),oe=r,Ge=l;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&na(n,t,o),l=l.next}while(l!==r)}yt(e,t,n);break;case 1:if(!pe&&(pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){J(n,t,c)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,yt(e,t,n),pe=r):yt(e,t,n);break;default:yt(e,t,n)}}function os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qf),t.forEach(function(r){var l=np.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:oe=c.stateNode,Ge=!1;break e;case 3:oe=c.stateNode.containerInfo,Ge=!0;break e;case 4:oe=c.stateNode.containerInfo,Ge=!0;break e}c=c.return}if(oe===null)throw Error(k(160));yc(i,o,l),oe=null,Ge=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(g){J(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_c(t,e),t=t.sibling}function _c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{Xn(3,e,e.return),Ol(3,e)}catch(y){J(e,e.return,y)}try{Xn(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&pn(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&pn(n,n.return),e.flags&32){var l=e.stateNode;try{er(l,"")}catch(y){J(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Bs(l,i),Ai(c,o);var g=Ai(c,i);for(o=0;o<d.length;o+=2){var x=d[o],a=d[o+1];x==="style"?Qs(l,a):x==="dangerouslySetInnerHTML"?Us(l,a):x==="children"?er(l,a):ga(l,x,a,g)}switch(c){case"input":Ci(l,i);break;case"textarea":$s(l,i);break;case"select":var s=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var u=i.value;u!=null?hn(l,!!i.multiple,u,!1):s!==!!i.multiple&&(i.defaultValue!=null?hn(l,!!i.multiple,i.defaultValue,!0):hn(l,!!i.multiple,i.multiple?[]:"",!1))}l[ur]=i}catch(y){J(e,e.return,y)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ya=ee())),r&4&&os(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(g=pe)||x,Ve(t,e),pe=g):Ve(t,e),Ze(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!x&&e.mode&1)for(A=e,x=e.child;x!==null;){for(a=A=x;A!==null;){switch(s=A,u=s.child,s.tag){case 0:case 11:case 14:case 15:Xn(4,s,s.return);break;case 1:pn(s,s.return);var m=s.stateNode;if(typeof m.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:pn(s,s.return);break;case 22:if(s.memoizedState!==null){us(a);continue}}u!==null?(u.return=s,A=u):us(a)}x=x.sibling}e:for(x=null,a=e;;){if(a.tag===5){if(x===null){x=a;try{l=a.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=a.stateNode,d=a.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Gs("display",o))}catch(y){J(e,e.return,y)}}}else if(a.tag===6){if(x===null)try{a.stateNode.nodeValue=g?"":a.memoizedProps}catch(y){J(e,e.return,y)}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;x===a&&(x=null),a=a.return}x===a&&(x=null),a.sibling.return=a.return,a=a.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&os(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(er(l,""),r.flags&=-33);var i=as(e);ia(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,c=as(e);la(e,c,o);break;default:throw Error(k(161))}}catch(d){J(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){A=e,xc(e)}function xc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Fr;if(!o){var c=l.alternate,d=c!==null&&c.memoizedState!==null||pe;c=Fr;var g=pe;if(Fr=o,(pe=d)&&!g)for(A=l;A!==null;)o=A,d=o.child,o.tag===22&&o.memoizedState!==null?cs(l):d!==null?(d.return=o,A=d):cs(l);for(;i!==null;)A=i,xc(i),i=i.sibling;A=l,Fr=c,pe=g}ss(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,A=i):ss(e)}}function ss(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ol(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Qo(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qo(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var x=g.memoizedState;if(x!==null){var a=x.dehydrated;a!==null&&lr(a)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}pe||t.flags&512&&ra(t)}catch(s){J(t,t.return,s)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function us(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function cs(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ol(4,t)}catch(d){J(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){J(t,l,d)}}var i=t.return;try{ra(t)}catch(d){J(t,i,d)}break;case 5:var o=t.return;try{ra(t)}catch(d){J(t,o,d)}}}catch(d){J(t,t.return,d)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var Yf=Math.ceil,wl=mt.ReactCurrentDispatcher,Wa=mt.ReactCurrentOwner,He=mt.ReactCurrentBatchConfig,D=0,ae=null,te=null,se=0,Te=0,mn=Rt(0),le=0,hr=null,Xt=0,Rl=0,Ka=0,Zn=null,ke=null,Ya=0,jn=1/0,it=null,kl=!1,aa=null,It=null,Hr=!1,Nt=null,Sl=0,Jn=0,oa=null,Jr=-1,qr=0;function ye(){return D&6?ee():Jr!==-1?Jr:Jr=ee()}function zt(e){return e.mode&1?D&2&&se!==0?se&-se:zf.transition!==null?(qr===0&&(qr=lu()),qr):(e=H,e!==0||(e=window.event,e=e===void 0?16:du(e.type)),e):1}function Ye(e,t,n,r){if(50<Jn)throw Jn=0,oa=null,Error(k(185));yr(e,n,r),(!(D&2)||e!==ae)&&(e===ae&&(!(D&2)&&(Rl|=n),le===4&&kt(e,se)),Ee(e,r),n===1&&D===0&&!(t.mode&1)&&(jn=ee()+500,Ml&&Dt()))}function Ee(e,t){var n=e.callbackNode;Id(e,t);var r=al(e,e===ae?se:0);if(r===0)n!==null&&_o(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_o(n),t===1)e.tag===0?If(ds.bind(null,e)):Pu(ds.bind(null,e)),jf(function(){!(D&6)&&Dt()}),n=null;else{switch(iu(r)){case 1:n=wa;break;case 4:n=nu;break;case 16:n=il;break;case 536870912:n=ru;break;default:n=il}n=Tc(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(Jr=-1,qr=0,D&6)throw Error(k(327));var n=e.callbackNode;if(xn()&&e.callbackNode!==n)return null;var r=al(e,e===ae?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cl(e,r);else{t=r;var l=D;D|=2;var i=Sc();(ae!==e||se!==t)&&(it=null,jn=ee()+500,Gt(e,t));do try{Jf();break}catch(c){kc(e,c)}while(!0);La(),wl.current=i,D=l,te!==null?t=0:(ae=null,se=0,t=le)}if(t!==0){if(t===2&&(l=Li(e),l!==0&&(r=l,t=sa(e,l))),t===1)throw n=hr,Gt(e,0),kt(e,r),Ee(e,ee()),n;if(t===6)kt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Xf(l)&&(t=Cl(e,r),t===2&&(i=Li(e),i!==0&&(r=i,t=sa(e,i))),t===1))throw n=hr,Gt(e,0),kt(e,r),Ee(e,ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Bt(e,ke,it);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Ya+500-ee(),10<t)){if(al(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=$i(Bt.bind(null,e,ke,it),t);break}Bt(e,ke,it);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ke(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yf(r/1960))-r,10<r){e.timeoutHandle=$i(Bt.bind(null,e,ke,it),r);break}Bt(e,ke,it);break;case 5:Bt(e,ke,it);break;default:throw Error(k(329))}}}return Ee(e,ee()),e.callbackNode===n?wc.bind(null,e):null}function sa(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=Cl(e,t),e!==2&&(t=ke,ke=n,t!==null&&ua(t)),e}function ua(e){ke===null?ke=e:ke.push.apply(ke,e)}function Xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Xe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Ka,t&=~Rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function ds(e){if(D&6)throw Error(k(327));xn();var t=al(e,0);if(!(t&1))return Ee(e,ee()),null;var n=Cl(e,t);if(e.tag!==0&&n===2){var r=Li(e);r!==0&&(t=r,n=sa(e,r))}if(n===1)throw n=hr,Gt(e,0),kt(e,t),Ee(e,ee()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,ke,it),Ee(e,ee()),null}function Xa(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(jn=ee()+500,Ml&&Dt())}}function Zt(e){Nt!==null&&Nt.tag===0&&!(D&6)&&xn();var t=D;D|=1;var n=He.transition,r=H;try{if(He.transition=null,H=1,e)return e()}finally{H=r,He.transition=n,D=t,!(D&6)&&Dt()}}function Za(){Te=mn.current,Q(mn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ef(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Nn(),Q(Ce),Q(me),Ha();break;case 5:Fa(r);break;case 4:Nn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:ba(r.type._context);break;case 22:case 23:Za()}n=n.return}if(ae=e,te=e=Mt(e.current,null),se=Te=t,le=0,hr=null,Ka=Rl=Xt=0,ke=Zn=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Vt=null}return e}function kc(e,t){do{var n=te;try{if(La(),Yr.current=xl,_l){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}_l=!1}if(Yt=0,ie=re=X=null,Yn=!1,fr=0,Wa.current=null,n===null||n.return===null){le=1,hr=t,te=null;break}e:{var i=e,o=n.return,c=n,d=t;if(t=se,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,x=c,a=x.tag;if(!(x.mode&1)&&(a===0||a===11||a===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var u=Jo(o);if(u!==null){u.flags&=-257,qo(u,o,c,i,t),u.mode&1&&Zo(i,g,t),t=u,d=g;var m=t.updateQueue;if(m===null){var y=new Set;y.add(d),t.updateQueue=y}else m.add(d);break e}else{if(!(t&1)){Zo(i,g,t),Ja();break e}d=Error(k(426))}}else if(W&&c.mode&1){var _=Jo(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),qo(_,o,c,i,t),za(En(d,c));break e}}i=d=En(d,c),le!==4&&(le=2),Zn===null?Zn=[i]:Zn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=ic(i,d,t);Go(i,f);break e;case 1:c=d;var h=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(It===null||!It.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=ac(i,c,t);Go(i,w);break e}}i=i.return}while(i!==null)}Nc(n)}catch(S){t=S,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Sc(){var e=wl.current;return wl.current=xl,e===null?xl:e}function Ja(){(le===0||le===3||le===2)&&(le=4),ae===null||!(Xt&268435455)&&!(Rl&268435455)||kt(ae,se)}function Cl(e,t){var n=D;D|=2;var r=Sc();(ae!==e||se!==t)&&(it=null,Gt(e,t));do try{Zf();break}catch(l){kc(e,l)}while(!0);if(La(),D=n,wl.current=r,te!==null)throw Error(k(261));return ae=null,se=0,le}function Zf(){for(;te!==null;)Cc(te)}function Jf(){for(;te!==null&&!kd();)Cc(te)}function Cc(e){var t=jc(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Nc(e):te=t,Wa.current=null}function Nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gf(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,te=null;return}}else if(n=Uf(n,t,Te),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);le===0&&(le=5)}function Bt(e,t,n){var r=H,l=He.transition;try{He.transition=null,H=1,qf(e,t,n,r)}finally{He.transition=l,H=r}return null}function qf(e,t,n,r){do xn();while(Nt!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(zd(e,i),e===ae&&(te=ae=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,Tc(il,function(){return xn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=He.transition,He.transition=null;var o=H;H=1;var c=D;D|=4,Wa.current=null,Wf(e,n),_c(n,e),_f(Hi),ol=!!Fi,Hi=Fi=null,e.current=n,Kf(n),Sd(),D=c,H=o,He.transition=i}else e.current=n;if(Hr&&(Hr=!1,Nt=e,Sl=l),i=e.pendingLanes,i===0&&(It=null),Ed(n.stateNode),Ee(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(kl)throw kl=!1,e=aa,aa=null,e;return Sl&1&&e.tag!==0&&xn(),i=e.pendingLanes,i&1?e===oa?Jn++:(Jn=0,oa=e):Jn=0,Dt(),null}function xn(){if(Nt!==null){var e=iu(Sl),t=He.transition,n=H;try{if(He.transition=null,H=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,Sl=0,D&6)throw Error(k(331));var l=D;for(D|=4,A=e.current;A!==null;){var i=A,o=i.child;if(A.flags&16){var c=i.deletions;if(c!==null){for(var d=0;d<c.length;d++){var g=c[d];for(A=g;A!==null;){var x=A;switch(x.tag){case 0:case 11:case 15:Xn(8,x,i)}var a=x.child;if(a!==null)a.return=x,A=a;else for(;A!==null;){x=A;var s=x.sibling,u=x.return;if(gc(x),x===g){A=null;break}if(s!==null){s.return=u,A=s;break}A=u}}}var m=i.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}A=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,A=o;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,A=f;break e}A=i.return}}var h=e.current;for(A=h;A!==null;){o=A;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,A=v;else e:for(o=h;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ol(9,c)}}catch(S){J(c,c.return,S)}if(c===o){A=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,A=w;break e}A=c.return}}if(D=l,Dt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Tl,e)}catch{}r=!0}return r}finally{H=n,He.transition=t}}return!1}function fs(e,t,n){t=En(n,t),t=ic(e,t,1),e=Pt(e,t,1),t=ye(),e!==null&&(yr(e,1,t),Ee(e,t))}function J(e,t,n){if(e.tag===3)fs(e,e,n);else for(;t!==null;){if(t.tag===3){fs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=En(n,e),e=ac(t,e,1),t=Pt(t,e,1),e=ye(),t!==null&&(yr(t,1,e),Ee(t,e));break}}t=t.return}}function ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(se&n)===n&&(le===4||le===3&&(se&130023424)===se&&500>ee()-Ya?Gt(e,0):Ka|=n),Ee(e,t)}function Ec(e,t){t===0&&(e.mode&1?(t=Pr,Pr<<=1,!(Pr&130023424)&&(Pr=4194304)):t=1);var n=ye();e=ft(e,t),e!==null&&(yr(e,t,n),Ee(e,n))}function tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ec(e,n)}function np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Ec(e,n)}var jc;jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Vf(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&Iu(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zr(e,t),e=t.pendingProps;var l=kn(t,me.current);_n(t,n),l=$a(null,t,r,e,l,n);var i=Va();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,fl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ra(t),l.updater=bl,t.stateNode=l,l._reactInternals=t,Yi(t,r,e,n),t=Ji(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Pa(t),ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=lp(r),e=Ue(r,e),l){case 0:t=Zi(null,t,r,e,n);break e;case 1:t=ns(null,t,r,e,n);break e;case 11:t=es(null,t,r,e,n);break e;case 14:t=ts(null,t,r,Ue(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),Zi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),ns(e,t,r,l,n);case 3:e:{if(cc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Ru(e,t),vl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=En(Error(k(423)),t),t=rs(e,t,r,n,l);break e}else if(r!==l){l=En(Error(k(424)),t),t=rs(e,t,r,n,l);break e}else for(Ae=At(t.stateNode.containerInfo.firstChild),Pe=t,W=!0,Qe=null,n=bu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===l){t=pt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&Qi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Bi(r,l)?o=null:i!==null&&Bi(r,i)&&(t.flags|=32),uc(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&Qi(t),null;case 13:return dc(e,t,n);case 4:return Da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),es(e,t,r,l,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,V(hl,r._currentValue),r._currentValue=o,i!==null)if(Xe(i.value,o)){if(i.children===l.children&&!Ce.current){t=pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=ut(-1,n&-n),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var x=g.pending;x===null?d.next=d:(d.next=x.next,x.next=d),g.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Wi(i.return,n,t),c.lanes|=n;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Wi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,_n(t,n),l=Be(l),r=r(l),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,l=Ue(r,t.pendingProps),l=Ue(r.type,l),ts(e,t,r,l,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),Zr(e,t),t.tag=1,Ne(r)?(e=!0,fl(t)):e=!1,_n(t,n),lc(t,r,l),Yi(t,r,l,n),Ji(null,t,r,!0,e,n);case 19:return fc(e,t,n);case 22:return sc(e,t,n)}throw Error(k(156,t.tag))};function Tc(e,t){return tu(e,t)}function rp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new rp(e,t,n,r)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lp(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ya)return 11;if(e===_a)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")qa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case rn:return Qt(n.children,l,i,t);case va:o=8,l|=8;break;case _i:return e=Fe(12,n,t,l|2),e.elementType=_i,e.lanes=i,e;case xi:return e=Fe(13,n,t,l),e.elementType=xi,e.lanes=i,e;case wi:return e=Fe(19,n,t,l),e.elementType=wi,e.lanes=i,e;case Ds:return Dl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Os:o=10;break e;case Rs:o=9;break e;case ya:o=11;break e;case _a:o=14;break e;case _t:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Fe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Dl(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function pi(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function mi(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ip(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function eo(e,t,n,r,l,i,o,c,d){return e=new ip(e,t,n,c,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ra(i),e}function ap(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ac(e){if(!e)return bt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Au(e,n,t)}return t}function Pc(e,t,n,r,l,i,o,c,d){return e=eo(n,r,!0,e,l,i,o,c,d),e.context=Ac(null),n=e.current,r=ye(),l=zt(n),i=ut(r,l),i.callback=t??null,Pt(n,i,l),e.current.lanes=l,yr(e,l,r),Ee(e,r),e}function Fl(e,t,n,r){var l=t.current,i=ye(),o=zt(l);return n=Ac(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(l,t,o),e!==null&&(Ye(e,l,o,i),Kr(e,l,o)),o}function Nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ps(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function to(e,t){ps(e,t),(e=e.alternate)&&ps(e,t)}function op(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function no(e){this._internalRoot=e}Hl.prototype.render=no.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Fl(e,t,null,null)};Hl.prototype.unmount=no.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Fl(null,e,null,null)}),t[dt]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=su();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&cu(e)}};function ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ms(){}function sp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=Nl(o);i.call(g)}}var o=Pc(t,r,e,0,null,!1,!1,"",ms);return e._reactRootContainer=o,e[dt]=o.current,or(e.nodeType===8?e.parentNode:e),Zt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var c=r;r=function(){var g=Nl(d);c.call(g)}}var d=eo(e,0,!1,null,null,!1,!1,"",ms);return e._reactRootContainer=d,e[dt]=d.current,or(e.nodeType===8?e.parentNode:e),Zt(function(){Fl(t,d,n,r)}),d}function $l(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var c=l;l=function(){var d=Nl(o);c.call(d)}}Fl(t,o,e,l)}else o=sp(n,t,e,l,r);return Nl(o)}au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(ka(t,n|1),Ee(t,ee()),!(D&6)&&(jn=ee()+500,Dt()))}break;case 13:Zt(function(){var r=ft(e,1);if(r!==null){var l=ye();Ye(r,e,1,l)}}),to(e,1)}};Sa=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ye();Ye(t,e,134217728,n)}to(e,134217728)}};ou=function(e){if(e.tag===13){var t=zt(e),n=ft(e,t);if(n!==null){var r=ye();Ye(n,e,t,r)}to(e,t)}};su=function(){return H};uu=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Ii=function(e,t,n){switch(t){case"input":if(Ci(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=zl(r);if(!l)throw Error(k(90));Hs(r),Ci(r,l)}}}break;case"textarea":$s(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}};Ys=Xa;Xs=Zt;var up={usingClientEntryPoint:!1,Events:[xr,sn,zl,Ws,Ks,Xa]},Fn={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qs(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{Tl=Br.inject(cp),et=Br}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ro(t))throw Error(k(200));return ap(e,t,null,n)};ze.createRoot=function(e,t){if(!ro(e))throw Error(k(299));var n=!1,r="",l=Ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=eo(e,1,!1,null,null,n,!1,r,l),e[dt]=t.current,or(e.nodeType===8?e.parentNode:e),new no(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=qs(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Zt(e)};ze.hydrate=function(e,t,n){if(!Bl(t))throw Error(k(200));return $l(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ro(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Ic;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Pc(t,null,e,1,n??null,l,!1,i,o),e[dt]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Hl(t)};ze.render=function(e,t,n){if(!Bl(t))throw Error(k(200));return $l(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(k(40));return e._reactRootContainer?(Zt(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};ze.unstable_batchedUpdates=Xa;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return $l(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),zs.exports=ze;var dp=zs.exports,hs=dp;vi.createRoot=hs.createRoot,vi.hydrateRoot=hs.hydrateRoot;const gs=({onStart:e,onSettings:t,onHelp:n})=>p.jsxs("div",{className:"cg-main-menu",children:[p.jsxs("div",{className:"cg-menu-bg",children:[p.jsx("div",{className:"cg-menu-bg-gradient"}),p.jsx("div",{className:"cg-menu-bg-pattern"}),p.jsx("div",{className:"cg-menu-geass-symbols",children:p.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:p.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),p.jsxs("div",{className:"cg-menu-content",children:[p.jsxs("div",{className:"cg-menu-header",children:[p.jsxs("div",{className:"cg-menu-title-decoration",children:[p.jsx("div",{className:"cg-title-line-left"}),p.jsx("div",{className:"cg-title-ornament",children:p.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:p.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),p.jsx("div",{className:"cg-title-line-right"})]}),p.jsxs("h1",{className:"cg-game-title",children:[p.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),p.jsx("span",{className:"cg-title-divider",children:":"}),p.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),p.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),p.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[p.jsx("div",{className:"cg-title-line-left"}),p.jsx("div",{className:"cg-title-ornament",children:p.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[p.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),p.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),p.jsx("div",{className:"cg-title-line-right"})]})]}),p.jsxs("nav",{className:"cg-menu-nav",children:[p.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[p.jsx("span",{className:"cg-button-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M8 5v14l11-7z"})})}),p.jsx("span",{className:"cg-button-text",children:"开始游戏"}),p.jsx("div",{className:"cg-button-shimmer"})]}),p.jsxs("button",{className:"cg-menu-button",onClick:t,children:[p.jsx("span",{className:"cg-button-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),p.jsx("span",{className:"cg-button-text",children:"设置"})]}),p.jsxs("button",{className:"cg-menu-button",onClick:n,children:[p.jsx("span",{className:"cg-button-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),p.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),p.jsx("footer",{className:"cg-menu-footer",children:p.jsx("div",{className:"cg-footer-decoration",children:p.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),p.jsx("style",{children:`
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
      `})]}),gr=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function fp(e){return gr.find(t=>t.id===e)}function We(e){const t=fp(e);return(t==null?void 0:t.name)||e}const pp=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},mp=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:l})=>{const[i,o]=z.useState(!1),[c,d]=z.useState(r),[g,x]=z.useState(!1),a=z.useRef(null),s=z.useRef(null),u=n||Math.floor(Math.random()*4)+1,[m]=z.useState(()=>pp()),y=z.useCallback(()=>`${`avatars/${e}/${u}`}.png`,[e,u]);return z.useEffect(()=>{if(r||c)return;const _=new IntersectionObserver(f=>{f.forEach(h=>{h.isIntersecting&&(d(!0),_.disconnect())})},{rootMargin:"50px",threshold:.1});return s.current&&_.observe(s.current),()=>_.disconnect()},[r]),z.useEffect(()=>{if(!c)return;const _=new Image;_.src=y(),_.onload=()=>{o(!0),l==null||l()},_.onerror=()=>{x(!0)}},[c,y,l]),p.jsxs("div",{ref:s,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"#1a1a24",position:"relative"},children:[!i&&!g&&p.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1a1a24"},children:p.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),g&&p.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1a1a24",color:"#dc2626",fontSize:t*.2},children:"?"}),c&&p.jsx("img",{ref:a,src:y(),alt:e,loading:r?"eager":"lazy",style:{width:t,height:t,objectFit:"cover",opacity:i?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}}),p.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class El{static preloadCharacter(t){for(let n=1;n<=4;n++){const r=`avatars/${t}/${n}.png`;if(this.preloadedAvatars.has(r))continue;const l=new Image;l.src=r,this.preloadedAvatars.add(r)}}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n){const r=`avatars/${t}/${n}.png`;if(this.preloadedAvatars.has(r))return;const l=new Image;l.src=r,this.preloadedAvatars.add(r)}}ce(El,"preloadedAvatars",new Set);const lo=({characterId:e,size:t=160,avatarNumber:n,animationState:r="idle",priority:l=!1})=>p.jsx(mp,{characterId:e,size:t,avatarNumber:n,priority:l}),hp=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,i]=z.useState(null),o=gr.find(c=>c.id===e);return z.useEffect(()=>{e&&El.preloadCharacter(e)},[e]),p.jsxs("div",{className:"cg-character-select",children:[p.jsxs("div",{className:"cg-select-bg",children:[p.jsx("div",{className:"cg-select-bg-gradient"}),p.jsx("div",{className:"cg-select-bg-pattern"})]}),p.jsxs("div",{className:"cg-select-content",children:[p.jsxs("header",{className:"cg-select-header",children:[p.jsxs("button",{className:"cg-back-button",onClick:r,children:[p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),p.jsx("span",{children:"返回"})]}),p.jsx("h2",{className:"cg-select-title",children:p.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),p.jsx("div",{className:"cg-select-placeholder"})]}),p.jsx("div",{className:"cg-character-grid",children:gr.map(c=>{const d=e===c.id,g=l===c.id;return p.jsxs("div",{className:`cg-character-card ${d?"cg-selected":""} ${g?"cg-hovered":""}`,onClick:()=>t(c.id),onMouseEnter:()=>i(c.id),onMouseLeave:()=>i(null),children:[p.jsxs("div",{className:"cg-card-frame",children:[p.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),p.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),p.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),p.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),p.jsx("div",{className:"cg-character-preview",children:p.jsx(lo,{characterId:c.id,size:300,priority:l===c.id||e===c.id})}),p.jsxs("div",{className:"cg-character-info",children:[p.jsx("h3",{className:"cg-character-name",children:c.name}),p.jsx("p",{className:"cg-character-name-en",children:c.nameEn}),p.jsx("div",{className:"cg-character-skill",children:p.jsx("span",{className:"cg-skill-name",children:c.skill.name})})]}),d&&p.jsx("div",{className:"cg-selected-indicator",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:p.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),p.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${c.color}40 0%, transparent 70%)`}})]},c.id)})}),o&&p.jsx("div",{className:"cg-character-detail",children:p.jsxs("div",{className:"cg-detail-frame",children:[p.jsxs("div",{className:"cg-detail-content",children:[p.jsx("p",{className:"cg-detail-description",children:o.description}),p.jsxs("div",{className:"cg-detail-skill",children:[p.jsx("span",{className:"cg-skill-label",children:"技能:"}),p.jsx("span",{className:"cg-skill-value",children:o.skill.name}),p.jsx("p",{className:"cg-skill-desc",children:o.skill.description})]})]}),p.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[p.jsx("span",{children:"确认选择"}),p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),p.jsx("style",{children:`
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
      `})]})},$r=e=>{if(!e)return"#d4af37";const t=gr.find(n=>n.id===e);return(t==null?void 0:t.color)||"#d4af37"},gp=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:l=["cc","suzaku","kallen"],aiAvatars:i={},onToggleCardSelection:o,onConfirmPlay:c,onPass:d,onChallenge:g,onBackToMenu:x,onLelouchSkill:a,gameLog:s=[],isProcessing:u=!1})=>{var O,$,K,rt,be,vt,Oe,lt,kr,Sr,Cr,b,I;const[m,y]=z.useState(!1);if(z.useEffect(()=>{n&&El.preloadAvatar(n,r),l.forEach(P=>{const F=i[P]||1;El.preloadAvatar(P,F)})},[n,r,l,i]),!e)return null;const{phase:_,liarCard:f,playerStats:h,aiPlayers:v,turnState:w}=e,S=_==="player_turn",N=_==="challenge",C=w==null?void 0:w.lastPlayerId,j=C==="player",E=e.playerHand||[],M=(w==null?void 0:w.turnNumber)||1,q=C&&C!=="player"?v==null?void 0:v.find(P=>P.id===C):null,je=()=>{t.length>0&&c()},Le=()=>y(!0),we=P=>{y(!1),a==null||a(P)},ht=P=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[P]||P,nt=P=>P==="joker"?"#d4af37":P==="hearts"||P==="diamonds"?"#dc2626":"#1a1a24",gt=We(n),T=$r(n),L=(P,F,B,U,he,ge,en=!1)=>p.jsxs("div",{className:`cg-character ${en?"cg-character-top":""}`,children:[p.jsx("div",{className:"cg-character-avatar",children:F&&p.jsx(lo,{characterId:F,size:160,avatarNumber:ge,priority:!0})}),p.jsxs("div",{className:"cg-character-info",children:[p.jsx("div",{className:"cg-character-name",style:{color:he},children:P}),p.jsxs("div",{className:"cg-character-stats",children:[p.jsx("span",{children:Array(B).fill("❤️").join("")}),p.jsxs("span",{className:"cg-card-count",children:["🃏",U]})]})]})]});return p.jsxs("div",{className:"cg-game-table",children:[p.jsxs("div",{className:"cg-top-bar",children:[p.jsx("button",{className:"cg-back-button",onClick:x,children:"← 主页面"}),p.jsxs("div",{className:"cg-round-info",children:["回合 ",M]}),p.jsxs("div",{className:"cg-liar-card",children:["骗子牌 ",p.jsx("span",{children:f})]}),p.jsx("div",{className:"cg-placeholder"})]}),p.jsxs("div",{className:"cg-main",children:[p.jsxs("div",{className:"cg-log",children:[p.jsx("div",{className:"cg-log-title",children:"📜 游戏记录"}),p.jsx("div",{className:"cg-log-content",children:s.map((P,F)=>p.jsx("div",{className:`cg-log-item ${P.includes("质疑")?"challenge":""} ${P.includes("Geass")?"geass":""}`,children:P},F))})]}),p.jsxs("div",{className:"cg-play-area",children:[L(We(l[0]),l[0],(($=(O=v==null?void 0:v[0])==null?void 0:O.stats)==null?void 0:$.hp)||3,((rt=(K=v==null?void 0:v[0])==null?void 0:K.hand)==null?void 0:rt.length)||0,$r(l[0]),i[l[0]]||1,!0),p.jsxs("div",{className:"cg-middle-row",children:[L(We(l[1]),l[1],((vt=(be=v==null?void 0:v[1])==null?void 0:be.stats)==null?void 0:vt.hp)||3,((lt=(Oe=v==null?void 0:v[1])==null?void 0:Oe.hand)==null?void 0:lt.length)||0,$r(l[1]),i[l[1]]||1),p.jsx("div",{className:"cg-table",children:p.jsx("div",{className:"cg-table-inner",children:w!=null&&w.playedCards?p.jsxs("div",{className:"cg-played",children:[p.jsxs("div",{className:"cg-player-name",style:{color:"#d4af37",fontWeight:"bold",marginBottom:"8px"},children:[w.playedCards.playerId==="player"?gt:w.playedCards.playerId.startsWith("ai")?We(((kr=v==null?void 0:v.find(P=>P.id===w.playedCards.playerId))==null?void 0:kr.character)||"cc"):"未知玩家"," 出牌"]}),p.jsx("div",{className:"cg-cards",children:w.playedCards.actualCards.map(P=>p.jsx("div",{className:"cg-card-small cg-card-back",children:p.jsx("img",{src:"/assets/cards/card-back.svg",alt:"牌背"})},P.id))}),p.jsxs("div",{className:"cg-card-count-display",children:[w.playedCards.cardIds.length," 张牌"]})]}):p.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})}),L(We(l[2]),l[2],((Cr=(Sr=v==null?void 0:v[2])==null?void 0:Sr.stats)==null?void 0:Cr.hp)||3,((I=(b=v==null?void 0:v[2])==null?void 0:b.hand)==null?void 0:I.length)||0,$r(l[2]),i[l[2]]||1)]}),p.jsxs("div",{className:"cg-player-position",children:[L(gt,n,h.hp,E.length,T,r),n==="lelouch"&&S&&p.jsx("button",{className:"cg-skill-btn",onClick:Le,disabled:u,children:"绝对命令"})]})]})]}),p.jsx("div",{className:"cg-hand-area",children:p.jsx("div",{className:"cg-hand",children:E.map((P,F)=>{const B=t.includes(P.id);return p.jsxs("button",{className:`cg-card ${B?"selected":""} ${!S||u?"disabled":""}`,onClick:()=>o(P.id),style:{transform:`translateX(${(F-E.length/2)*45}px) ${B?"translateY(-20px)":""}`},disabled:!S||u,children:[p.jsxs("div",{className:"cg-card-face",children:[p.jsx("div",{style:{color:nt(P.suit)},children:P.rank}),p.jsx("div",{style:{color:nt(P.suit),fontSize:"20px"},children:ht(P.suit)})]}),B&&p.jsx("div",{className:"cg-check",children:"✓"})]},P.id)})})}),p.jsxs("div",{className:"cg-actions",children:[S&&t.length>0&&p.jsxs("button",{className:"cg-btn cg-btn-play",onClick:je,disabled:u,children:["出牌 (",t.length,")"]}),S&&t.length===0&&p.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:u,children:"跳过"}),N&&!j&&(q==null?void 0:q.isActive)&&p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:g,disabled:u,children:"⚔️ 质疑"}),p.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:u,children:"不质疑"})]}),N&&j&&p.jsx("span",{className:"cg-wait",children:"等待AI..."}),!S&&!N&&p.jsx("span",{className:"cg-wait",children:"AI回合..."})]}),m&&p.jsx("div",{className:"cg-modal",children:p.jsxs("div",{className:"cg-modal-content",children:[p.jsx("h3",{children:"选择新的骗子牌"}),p.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(P=>p.jsx("button",{className:P===f?"current":"",onClick:()=>we(P),children:P},P))}),p.jsx("button",{className:"cg-btn-skip",onClick:()=>y(!1),children:"取消"})]})}),p.jsx("style",{children:`
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
      `})]})},vp=({isWin:e,playerScore:t,opponentScore:n,onRestart:r,onMainMenu:l})=>{const[i,o]=z.useState(!1),[c,d]=z.useState(!1);z.useEffect(()=>{e&&o(!0);const x=setTimeout(()=>d(!0),1e3);return()=>clearTimeout(x)},[e]);const g=e?"lelouch":"cc";return p.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[p.jsxs("div",{className:"cg-result-bg",children:[p.jsx("div",{className:"cg-result-bg-gradient"}),e?p.jsx("div",{className:"cg-result-bg-win",children:p.jsx("div",{className:"cg-victory-rays"})}):p.jsx("div",{className:"cg-result-bg-lose",children:p.jsx("div",{className:"cg-defeat-shadow"})})]}),i&&p.jsx(yp,{}),p.jsxs("div",{className:`cg-result-content ${c?"cg-animate-in":""}`,children:[p.jsxs("div",{className:"cg-result-header",children:[p.jsx("div",{className:"cg-result-badge",children:e?p.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[p.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),p.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:p.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((x,a)=>p.jsx("circle",{cx:50+35*Math.cos((a*72-90)*Math.PI/180),cy:50+35*Math.sin((a*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:p.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${a*.2}s`,repeatCount:"indefinite"})},a))]}):p.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[p.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),p.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:p.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),p.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),p.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),p.jsx("div",{className:"cg-result-character",children:p.jsxs("div",{className:"cg-character-showcase",children:[p.jsx(lo,{characterId:g,size:300}),p.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),p.jsx("div",{className:"cg-result-score",children:p.jsxs("div",{className:"cg-score-panel",children:[p.jsxs("div",{className:"cg-score-item cg-score-player",children:[p.jsx("span",{className:"cg-score-label",children:"玩家"}),p.jsx("span",{className:"cg-score-value",children:t})]}),p.jsx("div",{className:"cg-score-divider",children:p.jsx("span",{children:"VS"})}),p.jsxs("div",{className:"cg-score-item cg-score-opponent",children:[p.jsx("span",{className:"cg-score-value",children:n}),p.jsx("span",{className:"cg-score-label",children:"对手"})]})]})}),p.jsxs("div",{className:"cg-result-actions",children:[p.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:r,children:[p.jsx("span",{className:"cg-button-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),p.jsx("span",{children:"再来一局"})]}),p.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:l,children:[p.jsx("span",{className:"cg-button-icon",children:p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),p.jsx("span",{children:"返回主菜单"})]})]})]}),p.jsx("style",{children:`
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
      `})]})},yp=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return p.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>p.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var tl={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var a=this||n;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var s=this||n;if(a=parseFloat(a),s.ctx||x(),typeof a<"u"&&a>=0&&a<=1){if(s._volume=a,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a,n.ctx.currentTime);for(var u=0;u<s._howls.length;u++)if(!s._howls[u]._webAudio)for(var m=s._howls[u]._getSoundIds(),y=0;y<m.length;y++){var _=s._howls[u]._soundById(m[y]);_&&_._node&&(_._node.volume=_._volume*a)}return s}return s._volume},mute:function(a){var s=this||n;s.ctx||x(),s._muted=a,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a?0:s._volume,n.ctx.currentTime);for(var u=0;u<s._howls.length;u++)if(!s._howls[u]._webAudio)for(var m=s._howls[u]._getSoundIds(),y=0;y<m.length;y++){var _=s._howls[u]._soundById(m[y]);_&&_._node&&(_._node.muted=a?!0:_._muted)}return s},stop:function(){for(var a=this||n,s=0;s<a._howls.length;s++)a._howls[s].stop();return a},unload:function(){for(var a=this||n,s=a._howls.length-1;s>=0;s--)a._howls[s].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,x()),a},codecs:function(a){return(this||n)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||n;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var s=new Audio;s.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return a}if(!s||typeof s.canPlayType!="function")return a;var u=s.canPlayType("audio/mpeg;").replace(/^no$/,""),m=a._navigator?a._navigator.userAgent:"",y=m.match(/OPR\/(\d+)/g),_=y&&parseInt(y[0].split("/")[1],10)<33,f=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,h=m.match(/Version\/(.*?) /),v=f&&h&&parseInt(h[1],10)<15;return a._codecs={mp3:!!(!_&&(u||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!u,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||n;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var s=function(u){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,a._releaseHtml5Audio(m)}catch{a.noAudio=!0;break}for(var y=0;y<a._howls.length;y++)if(!a._howls[y]._webAudio)for(var _=a._howls[y]._getSoundIds(),f=0;f<_.length;f++){var h=a._howls[y]._soundById(_[f]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<a._howls.length;w++)a._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),a}},_obtainHtml5Audio:function(){var a=this||n;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var s=this||n;return a._unlocked&&s._html5AudioPool.push(a),s},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<a._howls.length;s++)if(a._howls[s]._webAudio){for(var u=0;u<a._howls[s]._sounds.length;u++)if(!a._howls[s]._sounds[u]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var m=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(m,m)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!n.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var s=0;s<a._howls.length;s++)a._howls[s]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var n=new t,r=function(a){var s=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(a)};r.prototype={init:function(a){var s=this;return n.ctx||x(),s._autoplay=a.autoplay||!1,s._format=typeof a.format!="string"?a.format:[a.format],s._html5=a.html5||!1,s._muted=a.mute||!1,s._loop=a.loop||!1,s._pool=a.pool||5,s._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,s._rate=a.rate||1,s._sprite=a.sprite||{},s._src=typeof a.src!="string"?a.src:[a.src],s._volume=a.volume!==void 0?a.volume:1,s._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=a.onend?[{fn:a.onend}]:[],s._onfade=a.onfade?[{fn:a.onfade}]:[],s._onload=a.onload?[{fn:a.onload}]:[],s._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],s._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],s._onpause=a.onpause?[{fn:a.onpause}]:[],s._onplay=a.onplay?[{fn:a.onplay}]:[],s._onstop=a.onstop?[{fn:a.onstop}]:[],s._onmute=a.onmute?[{fn:a.onmute}]:[],s._onvolume=a.onvolume?[{fn:a.onvolume}]:[],s._onrate=a.onrate?[{fn:a.onrate}]:[],s._onseek=a.onseek?[{fn:a.onseek}]:[],s._onunlock=a.onunlock?[{fn:a.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var a=this,s=null;if(n.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var u=0;u<a._src.length;u++){var m,y;if(a._format&&a._format[u])m=a._format[u];else{if(y=a._src[u],typeof y!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(y),m||(m=/\.([^.]+)$/.exec(y.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&n.codecs(m)){s=a._src[u];break}}if(!s){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=s,a._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new l(a),a._webAudio&&o(a),a},play:function(a,s){var u=this,m=null;if(typeof a=="number")m=a,a=null;else{if(typeof a=="string"&&u._state==="loaded"&&!u._sprite[a])return null;if(typeof a>"u"&&(a="__default",!u._playLock)){for(var y=0,_=0;_<u._sounds.length;_++)u._sounds[_]._paused&&!u._sounds[_]._ended&&(y++,m=u._sounds[_]._id);y===1?a=null:m=null}}var f=m?u._soundById(m):u._inactiveSound();if(!f)return null;if(m&&!a&&(a=f._sprite||"__default"),u._state!=="loaded"){f._sprite=a,f._ended=!1;var h=f._id;return u._queue.push({event:"play",action:function(){u.play(h)}}),h}if(m&&!f._paused)return s||u._loadQueue("play"),f._id;u._webAudio&&n._autoResume();var v=Math.max(0,f._seek>0?f._seek:u._sprite[a][0]/1e3),w=Math.max(0,(u._sprite[a][0]+u._sprite[a][1])/1e3-v),S=w*1e3/Math.abs(f._rate),N=u._sprite[a][0]/1e3,C=(u._sprite[a][0]+u._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var j=function(){f._paused=!1,f._seek=v,f._start=N,f._stop=C,f._loop=!!(f._loop||u._sprite[a][2])};if(v>=C){u._ended(f);return}var E=f._node;if(u._webAudio){var M=function(){u._playLock=!1,j(),u._refreshBuffer(f);var we=f._muted||u._muted?0:f._volume;E.gain.setValueAtTime(we,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof E.bufferSource.start>"u"?f._loop?E.bufferSource.noteGrainOn(0,v,86400):E.bufferSource.noteGrainOn(0,v,w):f._loop?E.bufferSource.start(0,v,86400):E.bufferSource.start(0,v,w),S!==1/0&&(u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),S)),s||setTimeout(function(){u._emit("play",f._id),u._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?M():(u._playLock=!0,u.once("resume",M),u._clearTimer(f._id))}else{var q=function(){E.currentTime=v,E.muted=f._muted||u._muted||n._muted||E.muted,E.volume=f._volume*n.volume(),E.playbackRate=f._rate;try{var we=E.play();if(we&&typeof Promise<"u"&&(we instanceof Promise||typeof we.then=="function")?(u._playLock=!0,j(),we.then(function(){u._playLock=!1,E._unlocked=!0,s?u._loadQueue():u._emit("play",f._id)}).catch(function(){u._playLock=!1,u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(u._playLock=!1,j(),u._emit("play",f._id)),E.playbackRate=f._rate,E.paused){u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),S):(u._endTimers[f._id]=function(){u._ended(f),E.removeEventListener("ended",u._endTimers[f._id],!1)},E.addEventListener("ended",u._endTimers[f._id],!1))}catch(ht){u._emit("playerror",f._id,ht)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=u._src,E.load());var je=window&&window.ejecta||!E.readyState&&n._navigator.isCocoonJS;if(E.readyState>=3||je)q();else{u._playLock=!0,u._state="loading";var Le=function(){u._state="loaded",q(),E.removeEventListener(n._canPlayEvent,Le,!1)};E.addEventListener(n._canPlayEvent,Le,!1),u._clearTimer(f._id)}}return f._id},pause:function(a){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(a)}}),s;for(var u=s._getSoundIds(a),m=0;m<u.length;m++){s._clearTimer(u[m]);var y=s._soundById(u[m]);if(y&&!y._paused&&(y._seek=s.seek(u[m]),y._rateSeek=0,y._paused=!0,s._stopFade(u[m]),y._node))if(s._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),s._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||s._emit("pause",y?y._id:null)}return s},stop:function(a,s){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"stop",action:function(){u.stop(a)}}),u;for(var m=u._getSoundIds(a),y=0;y<m.length;y++){u._clearTimer(m[y]);var _=u._soundById(m[y]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,u._stopFade(m[y]),_._node&&(u._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),u._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&u._clearSound(_._node))),s||u._emit("stop",_._id))}return u},mute:function(a,s){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"mute",action:function(){u.mute(a,s)}}),u;if(typeof s>"u")if(typeof a=="boolean")u._muted=a;else return u._muted;for(var m=u._getSoundIds(s),y=0;y<m.length;y++){var _=u._soundById(m[y]);_&&(_._muted=a,_._interval&&u._stopFade(_._id),u._webAudio&&_._node?_._node.gain.setValueAtTime(a?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:a),u._emit("mute",_._id))}return u},volume:function(){var a=this,s=arguments,u,m;if(s.length===0)return a._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?m=parseInt(s[0],10):u=parseFloat(s[0])}else s.length>=2&&(u=parseFloat(s[0]),m=parseInt(s[1],10));var f;if(typeof u<"u"&&u>=0&&u<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,s)}}),a;typeof m>"u"&&(a._volume=u),m=a._getSoundIds(m);for(var h=0;h<m.length;h++)f=a._soundById(m[h]),f&&(f._volume=u,s[2]||a._stopFade(m[h]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(u,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=u*n.volume()),a._emit("volume",f._id))}else return f=m?a._soundById(m):a._sounds[0],f?f._volume:0;return a},fade:function(a,s,u,m){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(a,s,u,m)}}),y;a=Math.min(Math.max(0,parseFloat(a)),1),s=Math.min(Math.max(0,parseFloat(s)),1),u=parseFloat(u),y.volume(a,m);for(var _=y._getSoundIds(m),f=0;f<_.length;f++){var h=y._soundById(_[f]);if(h){if(m||y._stopFade(_[f]),y._webAudio&&!h._muted){var v=n.ctx.currentTime,w=v+u/1e3;h._volume=a,h._node.gain.setValueAtTime(a,v),h._node.gain.linearRampToValueAtTime(s,w)}y._startFadeInterval(h,a,s,u,_[f],typeof m>"u")}}return y},_startFadeInterval:function(a,s,u,m,y,_){var f=this,h=s,v=u-s,w=Math.abs(v/.01),S=Math.max(4,w>0?m/w:m),N=Date.now();a._fadeTo=u,a._interval=setInterval(function(){var C=(Date.now()-N)/m;N=Date.now(),h+=v*C,h=Math.round(h*100)/100,v<0?h=Math.max(u,h):h=Math.min(u,h),f._webAudio?a._volume=h:f.volume(h,a._id,!0),_&&(f._volume=h),(u<s&&h<=u||u>s&&h>=u)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(u,a._id),f._emit("fade",a._id))},S)},_stopFade:function(a){var s=this,u=s._soundById(a);return u&&u._interval&&(s._webAudio&&u._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(u._interval),u._interval=null,s.volume(u._fadeTo,a),u._fadeTo=null,s._emit("fade",a)),s},loop:function(){var a=this,s=arguments,u,m,y;if(s.length===0)return a._loop;if(s.length===1)if(typeof s[0]=="boolean")u=s[0],a._loop=u;else return y=a._soundById(parseInt(s[0],10)),y?y._loop:!1;else s.length===2&&(u=s[0],m=parseInt(s[1],10));for(var _=a._getSoundIds(m),f=0;f<_.length;f++)y=a._soundById(_[f]),y&&(y._loop=u,a._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=u,u&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,a.playing(_[f])&&(a.pause(_[f],!0),a.play(_[f],!0)))));return a},rate:function(){var a=this,s=arguments,u,m;if(s.length===0)m=a._sounds[0]._id;else if(s.length===1){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?m=parseInt(s[0],10):u=parseFloat(s[0])}else s.length===2&&(u=parseFloat(s[0]),m=parseInt(s[1],10));var f;if(typeof u=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,s)}}),a;typeof m>"u"&&(a._rate=u),m=a._getSoundIds(m);for(var h=0;h<m.length;h++)if(f=a._soundById(m[h]),f){a.playing(m[h])&&(f._rateSeek=a.seek(m[h]),f._playStart=a._webAudio?n.ctx.currentTime:f._playStart),f._rate=u,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(u,n.ctx.currentTime):f._node&&(f._node.playbackRate=u);var v=a.seek(m[h]),w=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-v,S=w*1e3/Math.abs(f._rate);(a._endTimers[m[h]]||!f._paused)&&(a._clearTimer(m[h]),a._endTimers[m[h]]=setTimeout(a._ended.bind(a,f),S)),a._emit("rate",f._id)}}else return f=a._soundById(m),f?f._rate:a._rate;return a},seek:function(){var a=this,s=arguments,u,m;if(s.length===0)a._sounds.length&&(m=a._sounds[0]._id);else if(s.length===1){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?m=parseInt(s[0],10):a._sounds.length&&(m=a._sounds[0]._id,u=parseFloat(s[0]))}else s.length===2&&(u=parseFloat(s[0]),m=parseInt(s[1],10));if(typeof m>"u")return 0;if(typeof u=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,s)}}),a;var f=a._soundById(m);if(f)if(typeof u=="number"&&u>=0){var h=a.playing(m);h&&a.pause(m,!0),f._seek=u,f._ended=!1,a._clearTimer(m),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=u);var v=function(){h&&a.play(m,!0),a._emit("seek",m)};if(h&&!a._webAudio){var w=function(){a._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(a._webAudio){var S=a.playing(m)?n.ctx.currentTime-f._playStart:0,N=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(N+S*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var s=this;if(typeof a=="number"){var u=s._soundById(a);return u?!u._paused:!1}for(var m=0;m<s._sounds.length;m++)if(!s._sounds[m]._paused)return!0;return!1},duration:function(a){var s=this,u=s._duration,m=s._soundById(a);return m&&(u=s._sprite[m._sprite][1]/1e3),u},state:function(){return this._state},unload:function(){for(var a=this,s=a._sounds,u=0;u<s.length;u++)s[u]._paused||a.stop(s[u]._id),a._webAudio||(a._clearSound(s[u]._node),s[u]._node.removeEventListener("error",s[u]._errorFn,!1),s[u]._node.removeEventListener(n._canPlayEvent,s[u]._loadFn,!1),s[u]._node.removeEventListener("ended",s[u]._endFn,!1),n._releaseHtml5Audio(s[u]._node)),delete s[u]._node,a._clearTimer(s[u]._id);var m=n._howls.indexOf(a);m>=0&&n._howls.splice(m,1);var y=!0;for(u=0;u<n._howls.length;u++)if(n._howls[u]._src===a._src||a._src.indexOf(n._howls[u]._src)>=0){y=!1;break}return i&&y&&delete i[a._src],n.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,s,u,m){var y=this,_=y["_on"+a];return typeof s=="function"&&_.push(m?{id:u,fn:s,once:m}:{id:u,fn:s}),y},off:function(a,s,u){var m=this,y=m["_on"+a],_=0;if(typeof s=="number"&&(u=s,s=null),s||u)for(_=0;_<y.length;_++){var f=u===y[_].id;if(s===y[_].fn&&f||!s&&f){y.splice(_,1);break}}else if(a)m["_on"+a]=[];else{var h=Object.keys(m);for(_=0;_<h.length;_++)h[_].indexOf("_on")===0&&Array.isArray(m[h[_]])&&(m[h[_]]=[])}return m},once:function(a,s,u){var m=this;return m.on(a,s,u,1),m},_emit:function(a,s,u){for(var m=this,y=m["_on"+a],_=y.length-1;_>=0;_--)(!y[_].id||y[_].id===s||a==="load")&&(setTimeout((function(f){f.call(this,s,u)}).bind(m,y[_].fn),0),y[_].once&&m.off(a,y[_].fn,y[_].id));return m._loadQueue(a),m},_loadQueue:function(a){var s=this;if(s._queue.length>0){var u=s._queue[0];u.event===a&&(s._queue.shift(),s._loadQueue()),a||u.action()}return s},_ended:function(a){var s=this,u=a._sprite;if(!s._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(s._ended.bind(s,a),100),s;var m=!!(a._loop||s._sprite[u][2]);if(s._emit("end",a._id),!s._webAudio&&m&&s.stop(a._id,!0).play(a._id),s._webAudio&&m){s._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=n.ctx.currentTime;var y=(a._stop-a._start)*1e3/Math.abs(a._rate);s._endTimers[a._id]=setTimeout(s._ended.bind(s,a),y)}return s._webAudio&&!m&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,s._clearTimer(a._id),s._cleanBuffer(a._node),n._autoSuspend()),!s._webAudio&&!m&&s.stop(a._id,!0),s},_clearTimer:function(a){var s=this;if(s._endTimers[a]){if(typeof s._endTimers[a]!="function")clearTimeout(s._endTimers[a]);else{var u=s._soundById(a);u&&u._node&&u._node.removeEventListener("ended",s._endTimers[a],!1)}delete s._endTimers[a]}return s},_soundById:function(a){for(var s=this,u=0;u<s._sounds.length;u++)if(a===s._sounds[u]._id)return s._sounds[u];return null},_inactiveSound:function(){var a=this;a._drain();for(var s=0;s<a._sounds.length;s++)if(a._sounds[s]._ended)return a._sounds[s].reset();return new l(a)},_drain:function(){var a=this,s=a._pool,u=0,m=0;if(!(a._sounds.length<s)){for(m=0;m<a._sounds.length;m++)a._sounds[m]._ended&&u++;for(m=a._sounds.length-1;m>=0;m--){if(u<=s)return;a._sounds[m]._ended&&(a._webAudio&&a._sounds[m]._node&&a._sounds[m]._node.disconnect(0),a._sounds.splice(m,1),u--)}}},_getSoundIds:function(a){var s=this;if(typeof a>"u"){for(var u=[],m=0;m<s._sounds.length;m++)u.push(s._sounds[m]._id);return u}else return[a]},_refreshBuffer:function(a){var s=this;return a._node.bufferSource=n.ctx.createBufferSource(),a._node.bufferSource.buffer=i[s._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,n.ctx.currentTime),s},_cleanBuffer:function(a){var s=this,u=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return s;if(n._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),u))try{a.bufferSource.buffer=n._scratchBuffer}catch{}return a.bufferSource=null,s},_clearSound:function(a){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(a){this._parent=a,this.init()};l.prototype={init:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,s._sounds.push(a),a.create(),a},create:function(){var a=this,s=a._parent,u=n._muted||a._muted||a._parent._muted?0:a._volume;return s._webAudio?(a._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),a._node.gain.setValueAtTime(u,n.ctx.currentTime),a._node.paused=!0,a._node.connect(n.masterGain)):n.noAudio||(a._node=n._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(n._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=s._src,a._node.preload=s._preload===!0?"auto":s._preload,a._node.volume=u*n.volume(),a._node.load()),a},reset:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,s=a._parent;s._duration=Math.ceil(a._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),a._node.removeEventListener(n._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,s=a._parent;s._duration===1/0&&(s._duration=Math.ceil(a._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var i={},o=function(a){var s=a._src;if(i[s]){a._duration=i[s].duration,g(a);return}if(/^data:[^;]+;base64,/.test(s)){for(var u=atob(s.split(",")[1]),m=new Uint8Array(u.length),y=0;y<u.length;++y)m[y]=u.charCodeAt(y);d(m.buffer,a)}else{var _=new XMLHttpRequest;_.open(a._xhr.method,s,!0),_.withCredentials=a._xhr.withCredentials,_.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){_.setRequestHeader(f,a._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}d(_.response,a)},_.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete i[s],a.load())},c(_)}},c=function(a){try{a.send()}catch{a.onerror()}},d=function(a,s){var u=function(){s._emit("loaderror",null,"Decoding audio data failed.")},m=function(y){y&&s._sounds.length>0?(i[s._src]=y,g(s,y)):u()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(a).then(m).catch(u):n.ctx.decodeAudioData(a,m,u)},g=function(a,s){s&&!a._duration&&(a._duration=s.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=s?parseInt(s[1],10):null;if(a&&u&&u<9){var m=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!m&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof In<"u"?(In.HowlerGlobal=t,In.Howler=n,In.Howl=r,In.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var i=this;if(!i.ctx||!i.ctx.listener)return i;if(r=typeof r!="number"?i._pos[1]:r,l=typeof l!="number"?i._pos[2]:l,typeof n=="number")i._pos=[n,r,l],typeof i.ctx.listener.positionX<"u"?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]);else return i._pos;return i},HowlerGlobal.prototype.orientation=function(n,r,l,i,o,c){var d=this;if(!d.ctx||!d.ctx.listener)return d;var g=d._orientation;if(r=typeof r!="number"?g[1]:r,l=typeof l!="number"?g[2]:l,i=typeof i!="number"?g[3]:i,o=typeof o!="number"?g[4]:o,c=typeof c!="number"?g[5]:c,typeof n=="number")d._orientation=[n,r,l,i,o,c],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(n,r,l,i,o,c);else return g;return d},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var o=l._getSoundIds(r),c=0;c<o.length;c++){var d=l._soundById(o[c]);if(d)if(typeof n=="number")d._stereo=n,d._pos=[n,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&t(d,i),i==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(n,0,0):d._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",d._id);else return d._stereo}return l},Howl.prototype.pos=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,l,i)}}),o;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof i>"u")if(typeof n=="number")o._pos=[n,r,l];else return o._pos;for(var c=o._getSoundIds(i),d=0;d<c.length;d++){var g=o._soundById(c[d]);if(g)if(typeof n=="number")g._pos=[n,r,l],g._node&&((!g._panner||g._panner.pan)&&t(g,"spatial"),typeof g._panner.positionX<"u"?(g._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setPosition(n,r,l)),o._emit("pos",g._id);else return g._pos}return o},Howl.prototype.orientation=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,l,i)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,l=typeof l!="number"?o._orientation[2]:l,typeof i>"u")if(typeof n=="number")o._orientation=[n,r,l];else return o._orientation;for(var c=o._getSoundIds(i),d=0;d<c.length;d++){var g=o._soundById(c[d]);if(g)if(typeof n=="number")g._orientation=[n,r,l],g._node&&(g._panner||(g._pos||(g._pos=o._pos||[0,0,-.5]),t(g,"spatial")),typeof g._panner.orientationX<"u"?(g._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setOrientation(n,r,l)),o._emit("orientation",g._id);else return g._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,i,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof i>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],i=parseInt(r[1],10));for(var c=n._getSoundIds(i),d=0;d<c.length;d++)if(o=n._soundById(c[d]),o){var g=o._pannerAttr;g={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:g.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:g.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:g.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:g.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:g.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:g.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:g.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:g.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=g.coneInnerAngle,x.coneOuterAngle=g.coneOuterAngle,x.coneOuterGain=g.coneOuterGain,x.distanceModel=g.distanceModel,x.maxDistance=g.maxDistance,x.refDistance=g.refDistance,x.rolloffFactor=g.rolloffFactor,x.panningModel=g.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(tl);const hi={"bgm-menu":{volume:.5,loop:!0},"bgm-game":{volume:.4,loop:!0},"bgm-victory":{volume:.6,loop:!1},"bgm-defeat":{volume:.5,loop:!1},"sfx-play-card":{volume:.7,loop:!1},"sfx-challenge":{volume:.8,loop:!1},"sfx-geass-activate":{volume:.9,loop:!1},"sfx-geass-hit":{volume:1,loop:!1},"sfx-geass-miss":{volume:.6,loop:!1},"sfx-button-click":{volume:.5,loop:!1},"sfx-card-shuffle":{volume:.6,loop:!1},"sfx-win":{volume:.8,loop:!1},"sfx-lose":{volume:.7,loop:!1},"sfx-character-select":{volume:.6,loop:!1},"sfx-turn-start":{volume:.5,loop:!1},"sfx-funny-dance":{volume:.8,loop:!1},"sfx-funny-monkey":{volume:.8,loop:!1},"sfx-funny-pizza":{volume:.7,loop:!1},"sfx-funny-laugh":{volume:.9,loop:!1},"sfx-funny-chicken":{volume:.8,loop:!1},"sfx-funny-chunibyo":{volume:.8,loop:!1},"sfx-funny-butterfly":{volume:.6,loop:!1}},_p={"bgm-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","bgm-game":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","bgm-victory":"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3","bgm-defeat":"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","sfx-play-card":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","sfx-challenge":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","sfx-geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","sfx-geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","sfx-geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","sfx-button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","sfx-card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","sfx-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","sfx-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","sfx-character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","sfx-turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","sfx-funny-dance":"https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sound-560.mp3","sfx-funny-monkey":"https://assets.mixkit.co/sfx/preview/mixkit-monkey-laugh-96.mp3","sfx-funny-pizza":"https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-468.mp3","sfx-funny-laugh":"https://assets.mixkit.co/sfx/preview/mixkit-laughing-cartoon-459.mp3","sfx-funny-chicken":"https://assets.mixkit.co/sfx/preview/mixkit-chicken-cluck-1762.mp3","sfx-funny-chunibyo":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-metal-hit-2771.mp3","sfx-funny-butterfly":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3"};class xp{constructor(){ce(this,"sounds",new Map);ce(this,"currentBGM",null);ce(this,"enabled",!0);ce(this,"masterVolume",1);ce(this,"bgmVolume",.5);ce(this,"sfxVolume",.7);this.init()}init(){Object.entries(_p).forEach(([t,n])=>{const r=t,l=hi[r];try{const i=new tl.Howl({src:[n],volume:l.volume*this.getVolumeMultiplier(r),loop:l.loop,html5:!0,preload:!0,onloaderror:(o,c)=>{console.warn(`Failed to load sound: ${r}`,c)},onplayerror:(o,c)=>{var d;console.warn(`Failed to play sound: ${r}`,c),(d=this.sounds.get(r))==null||d.once("unlock",()=>{var g;(g=this.sounds.get(r))==null||g.play()})}});this.sounds.set(r,i)}catch(i){console.warn(`Error creating sound: ${r}`,i)}})}getVolumeMultiplier(t){return t.startsWith("bgm-")?this.bgmVolume:this.sfxVolume}play(t){if(!this.enabled)return;const n=this.sounds.get(t);n&&(t.startsWith("bgm-")&&(this.stopBGM(),this.currentBGM=t),n.play())}stop(t){const n=this.sounds.get(t);n&&n.stop()}stopBGM(){this.currentBGM&&(this.stop(this.currentBGM),this.currentBGM=null)}pauseBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.play()}}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),tl.Howler.volume(this.masterVolume)}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")&&n.volume(hi[r].volume*this.bgmVolume)})}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")||n.volume(hi[r].volume*this.sfxVolume)})}setEnabled(t){this.enabled=t,t||this.stopAll()}stopAll(){tl.Howler.stop(),this.currentBGM=null}playFunnyAction(t){const n=["sfx-funny-dance","sfx-funny-monkey","sfx-funny-pizza","sfx-funny-laugh","sfx-funny-chicken","sfx-funny-chunibyo","sfx-funny-butterfly"],r=n[t%n.length];r&&this.play(r)}preload(){return new Promise(t=>{let n=0;const r=this.sounds.size;if(r===0){t();return}this.sounds.forEach(l=>{l.state()==="loaded"?(n++,n>=r&&t()):(l.once("load",()=>{n++,n>=r&&t()}),l.once("loaderror",()=>{n++,n>=r&&t()}))}),setTimeout(()=>t(),5e3)})}getStatus(){return{enabled:this.enabled,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume,currentBGM:this.currentBGM}}}const St=new xp,ne=e=>St.play(e),Ft=e=>St.play(e),wp=()=>St.stopBGM();class vs{constructor(){ce(this,"cards",[]);ce(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let l=0;l<6;l++){const i=t[l%4];this.cards.push({id:`${r}-${l}-${Math.random().toString(36).substr(2,9)}`,suit:i,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],l=[];for(let i=0;i<5;i++){const o=this.cards[i];o.owner="player",t.push(o)}for(let i=5;i<10;i++){const o=this.cards[i];o.owner="ai",n.push(o)}for(let i=10;i<15;i++){const o=this.cards[i];o.owner="ai2",r.push(o)}for(let i=15;i<20;i++){const o=this.cards[i];o.owner="ai3",l.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const l=this.cards.find(i=>i.id===r);l&&(l.owner="table",n.push(l))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(l=>l.owner===null).slice(0,t);for(const l of r)l.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const ys=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class kp{constructor(){ce(this,"BASE_HIT_CHANCE",1/3)}performGeass(t,n,r=null,l=0){let i=this.BASE_HIT_CHANCE;if(i+=l,r==="cc"&&!n.ccReviveUsed&&Math.random()<i&&n.hp<=1&&Math.random()<.5)return{activated:!0,hit:!1,damage:0,newStats:{...n,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"){if(Math.random()<.25)return{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0};i-=.15}if(i=Math.max(.1,Math.min(.9,i)),Math.random()<i){const g={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},x=ys[Math.floor(Math.random()*ys.length)];return{activated:!0,hit:!0,damage:1,newStats:g,funnyAction:x.description,message:`Geass命中！${x.emoji} ${x.description}`}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(.8,.2*t)}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}class Mc{constructor(){ce(this,"cardSystem");ce(this,"geassSystem");ce(this,"state");ce(this,"playerCharacter",null);ce(this,"difficulty","normal");this.cardSystem=new vs,this.geassSystem=new kp,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],playerCharacter:null,playerSelectedCards:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null},lastAction:"",winner:null,geassResult:null,difficulty:"normal"}}initializeGame(t,n="normal"){this.playerCharacter=t,this.difficulty=n,this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:l,ai2Cards:i,ai3Cards:o}=this.cardSystem.dealCards(),c=this.cardSystem.setLiarCard(),d=Math.floor(Math.random()*4),g=t==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:d===0?"player_turn":"ai_turn",liarCard:c,playerCharacter:t,difficulty:n,currentPlayerIndex:d,playerHand:r,playerStats:{hp:g,maxHp:g,geassSuccessCount:0,geassFailCount:0},aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:l,stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:i,stats:{hp:4,maxHp:4,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:o,stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null}},this.state}resetRound(){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l}=this.cardSystem.dealCards(),i=this.cardSystem.setLiarCard(),o=Math.floor(Math.random()*4);return this.state.playerHand=t,this.state.aiPlayers[0].hand=n,this.state.aiPlayers[1].hand=r,this.state.aiPlayers[2].hand=l,this.state.liarCard=i,this.state.phase=o===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=o,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return 0}toggleCardSelection(t){if(!this.state.playerHand.some(o=>o.id===t))return this.state;const r=this.state.playerSelectedCards,l=r.indexOf(t),i=this.playerCharacter==="kallen"?4:3;return l>-1?this.state.playerSelectedCards=r.filter(o=>o!==t):r.length>=i?this.state.playerSelectedCards=[...r.slice(1),t]:this.state.playerSelectedCards=[...r,t],this.state}playerPlayCards(){if(this.state.phase!=="player_turn")throw new Error("不是玩家回合");const t=this.state.playerSelectedCards;if(t.length===0)throw new Error("未选择任何牌");if(this.playerCharacter==="kallen"){if(t.length>4)throw new Error("红莲突击最多出4张牌")}else if(t.length>3)throw new Error("最多只能出3张牌");const n=this.cardSystem.playCards(t);this.state.playerHand=this.state.playerHand.filter(i=>!t.includes(i.id));const r=this.state.playerHand.length===0;this.playerCharacter==="kallen"&&t.length>=2&&(this.state.playerStats.kallenBoostActive=!0,this.state.playerStats.kallenCardCount=t.length);const l=this.state.liarCard;return this.state={...this.state,phase:"challenge",playerSelectedCards:[],turnState:{...this.state.turnState,playedCards:{cardIds:t,claimedRank:l,actualCards:n,playerId:"player"},lastPlayerId:"player"},lastAction:`玩家出了 ${t.length} 张牌${r?"（玩家手牌已出完！）":""}`},this.state}aiPlayCards(t){const n=this.state.aiPlayers.findIndex(m=>m.id===t);if(n===-1)throw new Error("AI不存在");const r=this.state.aiPlayers[n];if(!r.isActive||r.stats.hp<=0)return this.state.currentPlayerIndex=this.getNextPlayerIndex(),this.state;const l=r.hand,i=this.state.liarCard,o=l.filter(m=>m.rank===i||m.isJoker),c=l.filter(m=>m.rank!==i&&!m.isJoker);let d,g;const x=r.character==="kallen"?3:1;if(o.length>0&&Math.random()>.3){const m=Math.max(1,Math.min(x,o.length,Math.floor(Math.random()*x)+1));d=o.slice(0,m),g=i}else{const m=Math.max(1,Math.min(x,c.length,Math.floor(Math.random()*x)+1));d=c.slice(0,m),g=i}d.length===0&&l.length>0&&(d=[l[0]]),d.length===0&&(console.error("AI没有牌可出，但不应该发生"),d=l.slice(0,1));const a=d.map(m=>m.id),s=this.cardSystem.playCards(a);r.hand=r.hand.filter(m=>!a.includes(m.id)),r.character==="kallen"&&a.length>=2&&(r.stats.kallenBoostActive=!0,r.stats.kallenCardCount=a.length);const u=r.hand.length===0;return this.state={...this.state,phase:"challenge",turnState:{...this.state.turnState,playedCards:{cardIds:a,claimedRank:g,actualCards:s,playerId:t},lastPlayerId:t},lastAction:`${r.name}出了 ${a.length} 张牌${u?"（"+r.name+"手牌已出完！）":""}`},this.state}playerChallengeDecision(t){if(this.state.phase!=="challenge")throw new Error("不在质疑阶段");if(!this.state.turnState.playedCards)throw new Error("没有出牌记录");return t?this.resolveChallenge("player"):this.passToNextPlayer()}aiChallengeDecision(t){if(this.state.phase!=="challenge")throw new Error("不在质疑阶段");const n=this.state.turnState.playedCards;if(!n)throw new Error("没有出牌记录");if(n.playerId===t)return this.passToNextPlayer();const r=this.state.aiPlayers.find(i=>i.id===t);if(!r)throw new Error("AI不存在");return this.calculateAIChallengeProbability(r,n)?this.resolveChallenge(t):this.passToNextPlayer()}calculateAIChallengeProbability(t,n){let r=.3;const l=n.cardIds.length;switch(l>=3?r+=.3:l===2&&(r+=.15),t.stats.hp===1&&(r-=.2),t.character==="suzaku"&&(r+=.1),t.character==="cc"&&(r-=.1),this.difficulty){case"easy":r*=.8;break;case"hard":r*=1.2;break}return Math.random()<r}passToNextPlayer(){const t=this.state.turnState.playedCards;if(!t)throw new Error("没有出牌记录");if(this.state.turnState.tableCards=[...this.state.turnState.tableCards,...t.actualCards],this.checkHandDepletion())return this.handleEmptyHand();this.state.currentPlayerIndex=this.getNextPlayerIndex();const n=this.getCurrentPlayerId();return this.state={...this.state,phase:n==="player"?"player_turn":"ai_turn",turnState:{...this.state.turnState,playedCards:null,turnNumber:n==="player"?this.state.turnState.turnNumber+1:this.state.turnState.turnNumber}},this.state}resolveChallenge(t){const n=this.state.turnState.playedCards,r=this.cardSystem.checkBluff(n.actualCards,n.claimedRank),l=r?n.playerId:t,i=g=>{if(g==="player")return this.playerCharacter?We(this.playerCharacter):"玩家";const x=this.state.aiPlayers.find(a=>a.id===g);return(x==null?void 0:x.name)||g},o=n.actualCards.map(g=>g.rank).join(", ");this.state={...this.state,phase:"geass",lastAction:`${i(t)} 质疑${i(n.playerId)}！${r?"质疑成功！":"质疑失败！"} 实际出牌: ${o}`};let c=0;if(r){const g=n.playerId;if(g==="player"&&this.playerCharacter==="kallen"&&this.state.playerStats.kallenBoostActive){const x=this.state.playerStats.kallenCardCount||2;c=this.geassSystem.calculateKallenBoost(x)}else if(g!=="player"){const x=this.state.aiPlayers.find(a=>a.id===g);if((x==null?void 0:x.character)==="kallen"&&x.stats.kallenBoostActive){const a=x.stats.kallenCardCount||2;c=this.geassSystem.calculateKallenBoost(a)}}}const d=this.executeGeass(l,c);return this.state.geassResult=d,this.checkGameEnd()}executeGeass(t,n=0){let r;if(t==="player")r=this.geassSystem.performGeass("player",this.state.playerStats,this.playerCharacter,n),this.state.playerStats=r.newStats;else{const l=this.state.aiPlayers.findIndex(o=>o.id===t),i=this.state.aiPlayers[l];r=this.geassSystem.performGeass(t,i.stats,i.character,n),i.stats=r.newStats,i.stats.hp<=0&&(i.isActive=!1)}return r}checkGameEnd(){const t=this.state.aiPlayers.filter(n=>n.isActive&&n.stats.hp>0);return this.state.playerStats.hp<=0?(this.state={...this.state,phase:"game_over",winner:"ai",lastAction:"玩家生命归零，游戏结束！"},this.state):t.length===0?(this.state={...this.state,phase:"game_over",winner:"player",lastAction:"所有AI被淘汰，玩家胜利！"},this.state):this.state}lelouchChangeLiarCard(t){if(this.playerCharacter!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");return this.cardSystem.forceSetLiarCard(t),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.state}passTurn(){if(this.state.playerHand.length>0)throw new Error("还有手牌，不能跳过回合");this.state.currentPlayerIndex=this.getNextPlayerIndex();const t=this.getCurrentPlayerId();return this.state={...this.state,phase:t==="player"?"player_turn":"ai_turn",lastAction:"玩家跳过回合"},this.state}checkHandDepletion(){const t=this.state.playerHand.length===0,n=this.state.aiPlayers.every(r=>r.hand.length===0);return!!(t&&n)}handleEmptyHand(){if(!this.checkHandDepletion())return this.state;this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l}=this.cardSystem.dealCards(),i=this.cardSystem.setLiarCard();return this.state.playerHand=t,this.state.aiPlayers[0].hand=n,this.state.aiPlayers[1].hand=r,this.state.aiPlayers[2].hand=l,this.state.liarCard=i,this.state.turnState.tableCards=[],this.state.turnState.playedCards=null,this.state.lastAction="所有玩家手牌出完，重新洗牌发牌",this.state}getCardSystem(){return this.cardSystem}getState(){return this.state}getGeassSystem(){return this.geassSystem}reset(){this.state=this.createInitialState(),this.cardSystem=new vs,this.playerCharacter=null}}new Mc;const gi="code-geass-game",_s={save:e=>{try{localStorage.setItem(gi,JSON.stringify(e))}catch(t){console.error("Failed to save to localStorage:",t)}},load:()=>{try{const e=localStorage.getItem(gi);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load from localStorage:",e),null}},clear:()=>{try{localStorage.removeItem(gi)}catch(e){console.error("Failed to clear localStorage:",e)}}},xs=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],Sp=()=>{const[e,t]=z.useState("main-menu"),[n,r]=z.useState(null),[l,i]=z.useState(1),[o,c]=z.useState(["cc","suzaku","kallen"]),[d,g]=z.useState({}),[x,a]=z.useState("normal"),[s,u]=z.useState("balanced"),m=z.useRef(null),[y,_]=z.useState(null),[f,h]=z.useState([]),[v,w]=z.useState(null),[S,N]=z.useState([]),[C,j]=z.useState(!1);z.useEffect(()=>((async()=>{try{await St.preload(),console.log("音效预加载完成");const I=_s.load();I&&(a(I.difficulty),u(I.personality||"balanced"),St.setBGMVolume(I.bgmVolume),St.setSFXVolume(I.sfxVolume)),Ft("bgm-menu")}catch(I){console.warn("初始化失败:",I)}})(),()=>{wp()}),[]),z.useEffect(()=>{const b={difficulty:x,bgmVolume:St.getStatus().bgmVolume,sfxVolume:St.getStatus().sfxVolume,personality:s};_s.save(b)},[x,s]);const E=z.useCallback(b=>{h(I=>[...I.slice(-19),b])},[]),M=z.useCallback(()=>{if(!m.current)return;const b=m.current,I=b.getState();if(I.phase==="player_turn"||I.phase==="game_over")return;const P=I.currentPlayerIndex-1;if(P<0||P>=I.aiPlayers.length)return;const F=I.aiPlayers[P];if(!F)return;const B=F.id;if(!F.isActive||F.stats.hp<=0){const U=(I.currentPlayerIndex+1)%4;I.currentPlayerIndex=U,_({...I}),U!==0&&setTimeout(M,500);return}j(!0),ne("sfx-turn-start"),E(`${F.name} 的回合...`),setTimeout(()=>{var U;try{const he=b.aiPlayCards(B);_(he),E(`${F.name} 出了 ${(U=he.turnState.playedCards)==null?void 0:U.cardIds.length} 张牌`),setTimeout(()=>{j(!1)},1e3)}catch(he){console.error("AI出牌错误:",he),j(!1)}},1e3)},[E]),q=z.useCallback(()=>{var B;if(!m.current)return;const b=m.current,I=b.getState();if(I.phase!=="challenge")return;const P=(B=I.turnState.playedCards)==null?void 0:B.playerId;if(!P)return;const F=P==="player"?0:I.aiPlayers.findIndex(U=>U.id===P)+1;for(let U=0;U<3;U++){const he=(F+1+U)%4;if(he===0){E("等待玩家决策...");return}const ge=I.aiPlayers[he-1];if(!ge||!ge.isActive||ge.stats.hp<=0)continue;if(Math.random()<.3){ne("sfx-challenge");const io=We(P==="player"?n:P.replace("ai-",""));E(`${ge.name} 向 ${io} 发起质疑！`);const Lc=b.aiChallengeDecision(ge.id);je(Lc,ge.name,io);return}else E(`${ge.name} 选择不质疑`)}Le()},[E,n]),je=z.useCallback((b,I,P)=>{if(_(b),b.geassResult){const F=I||"玩家",B=P||"对手";if(b.geassResult.hit){ne("sfx-geass-hit");const U=xs[Math.floor(Math.random()*xs.length)];w(U),ne(U.soundType),E(`✅ 质疑成功！${F} 对 ${B} 发动Geass！`),E(`💥 Geass命中！${U.emoji} ${b.geassResult.message}`)}else ne("sfx-geass-miss"),E(`❌ 质疑失败！${F} 对 ${B} 发动Geass未命中！`),b.geassResult.isRevived?E(`🔄 ${b.geassResult.message}`):b.geassResult.isCounter&&E(`⚔️ ${b.geassResult.message}`)}if(b.phase==="game_over"){setTimeout(()=>{b.winner==="player"?Ft("bgm-victory"):Ft("bgm-defeat"),t("result")},2e3);return}setTimeout(()=>{var F;if(w(null),m.current){const B=m.current.resetRound();_(B),N([]);const U=B.currentPlayerIndex===0,he=U?We(n):(F=B.aiPlayers[B.currentPlayerIndex-1])==null?void 0:F.name;E(`牌局重置！新的骗子牌是 ${B.liarCard}`),E(`${he} 先手！`),U||setTimeout(()=>{M()},1500)}},2500)},[E,n,M]),Le=z.useCallback(()=>{if(!m.current)return;const I=m.current.getState();I.turnState.playedCards&&(I.turnState.tableCards=[...I.turnState.tableCards,...I.turnState.playedCards.actualCards]);const P=(I.currentPlayerIndex+1)%4;I.currentPlayerIndex=P,P===0?(I.phase="player_turn",I.turnState.turnNumber++,E(`第 ${I.turnState.turnNumber} 回合开始`)):(I.phase="ai_turn",setTimeout(M,500)),I.turnState.playedCards=null,_({...I})},[E,M]),we=z.useCallback(()=>{ne("sfx-button-click"),t("character-select")},[]),ht=z.useCallback(()=>{ne("sfx-button-click"),t("settings")},[]),nt=z.useCallback(()=>{ne("sfx-button-click"),t("help")},[]),gt=z.useCallback(b=>{ne("sfx-character-select"),r(b),i(Math.floor(Math.random()*4)+1)},[]),T=z.useCallback(()=>{var ge;if(!n)return;ne("sfx-button-click");const P=["lelouch","cc","suzaku","kallen"].filter(en=>en!==n).sort(()=>Math.random()-.5);c(P);const F={};P.forEach(en=>{F[en]=Math.floor(Math.random()*4)+1}),g(F),m.current=new Mc;const B=m.current.initializeGame(n,x);_(B),N([]);const U=B.currentPlayerIndex===0,he=U?We(n):(ge=B.aiPlayers[B.currentPlayerIndex-1])==null?void 0:ge.name;h(["游戏开始！",`骗子牌是: ${B.liarCard}`,`${he} 先手！`,"选择1-3张牌打出。"]),t("game-table"),Ft("bgm-game"),U||setTimeout(()=>{M()},1500)},[n,x,M]),L=z.useCallback(()=>{ne("sfx-button-click"),t("main-menu"),r(null)},[]),O=z.useCallback(()=>{ne("sfx-button-click"),t("main-menu"),r(null),_(null),h([]),N([]),w(null),Ft("bgm-menu")},[]),$=z.useCallback(b=>{if(!m.current||C)return;const I=m.current;if(I.getState().phase!=="player_turn")return;I.toggleCardSelection(b);const F=I.getState();N(F.playerSelectedCards),ne("sfx-button-click")},[C]),K=z.useCallback(()=>{var I;if(!m.current||S.length===0||C)return;j(!0),ne("sfx-play-card");const b=m.current;try{const P=b.playerPlayCards();_(P),N([]);const F=We(n);E(`${F} 出了 ${(I=P.turnState.playedCards)==null?void 0:I.cardIds.length} 张牌`),setTimeout(()=>{q()},1500)}catch(P){console.error("出牌错误:",P)}finally{j(!1)}},[S,C,E,n,q]),rt=z.useCallback(()=>{if(!m.current||C)return;j(!0),ne("sfx-challenge"),E("你发起了质疑！");const I=m.current.playerChallengeDecision(!0);je(I),j(!1)},[C,E,je]),be=z.useCallback(()=>{if(!m.current||C)return;ne("sfx-button-click"),E("你选择不质疑");const I=m.current.playerChallengeDecision(!1);_(I),I.phase!=="player_turn"&&I.phase!=="game_over"&&setTimeout(()=>{M()},1e3)},[C,E,M]),vt=z.useCallback(b=>{if(!m.current||n!=="lelouch")return;ne("sfx-geass-activate");const P=m.current.lelouchChangeLiarCard(b);_(P),E(`鲁鲁修发动绝对命令！骗子牌变为 ${b}`)},[n,E]),Oe=z.useCallback(()=>{ne("sfx-button-click"),t("character-select"),r(null),_(null),h([]),N([]),w(null),Ft("bgm-menu")},[]),lt=z.useCallback(()=>{ne("sfx-button-click"),t("main-menu"),r(null),_(null),h([]),N([]),w(null),Ft("bgm-menu")},[]),kr=()=>{var b,I;switch(e){case"main-menu":return p.jsx(gs,{onStart:we,onSettings:ht,onHelp:nt});case"character-select":return p.jsx(hp,{characters:gr,selectedId:n,onSelect:gt,onConfirm:T,onBack:L});case"game-table":return y?p.jsx(gp,{gameState:y,selectedCards:S,selectedCharacter:n,selectedAvatar:l,aiCharacters:o,aiAvatars:d,onToggleCardSelection:$,onConfirmPlay:K,onPass:be,onChallenge:rt,onBackToMenu:O,onLelouchSkill:vt,gameLog:f,funnyAction:v,isProcessing:C}):null;case"result":{const P=(y==null?void 0:y.winner)==="player",F=((b=y==null?void 0:y.playerStats)==null?void 0:b.geassSuccessCount)||0,B=((I=y==null?void 0:y.aiPlayers)==null?void 0:I.reduce((U,he)=>{var ge;return U+(((ge=he.stats)==null?void 0:ge.geassSuccessCount)||0)},0))||0;return p.jsx(vp,{isWin:P,playerScore:F,opponentScore:B,onRestart:Oe,onMainMenu:lt})}case"settings":return Sr();case"help":return Cr();default:return p.jsx(gs,{onStart:we,onSettings:ht,onHelp:nt})}},Sr=()=>p.jsxs("div",{className:"cg-placeholder-screen",children:[p.jsx("h2",{children:"设置"}),p.jsxs("div",{className:"cg-settings-content",children:[p.jsxs("div",{className:"cg-setting-item",children:[p.jsx("label",{children:"难度:"}),p.jsxs("select",{className:"cg-setting-select",value:x,onChange:b=>a(b.target.value),children:[p.jsx("option",{value:"easy",children:"简单"}),p.jsx("option",{value:"normal",children:"普通"}),p.jsx("option",{value:"hard",children:"困难"})]})]}),p.jsxs("div",{className:"cg-setting-item",children:[p.jsx("label",{children:"AI性格:"}),p.jsxs("select",{className:"cg-setting-select",value:s,onChange:b=>u(b.target.value),children:[p.jsx("option",{value:"aggressive",children:"激进"}),p.jsx("option",{value:"balanced",children:"平衡"}),p.jsx("option",{value:"conservative",children:"保守"})]})]}),p.jsx("p",{style:{color:"#a1a1aa",textAlign:"center",marginTop:"1rem"},children:"设置已自动保存"}),p.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),Cr=()=>p.jsxs("div",{className:"cg-placeholder-screen",children:[p.jsx("h2",{children:"游戏帮助"}),p.jsxs("div",{className:"cg-help-content",children:[p.jsxs("section",{className:"cg-help-section",children:[p.jsx("h3",{children:"🎮 游戏规则"}),p.jsxs("ul",{children:[p.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),p.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),p.jsxs("li",{children:[p.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),p.jsx("li",{children:"质疑后翻牌验证："}),p.jsxs("li",{children:["• 出的牌",p.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),p.jsxs("li",{children:["• 出的牌",p.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),p.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),p.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),p.jsxs("section",{className:"cg-help-section",children:[p.jsx("h3",{children:"👤 角色技能详解"}),p.jsxs("ul",{children:[p.jsxs("li",{children:[p.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),p.jsx("br",{}),p.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),p.jsxs("li",{children:[p.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),p.jsx("br",{}),p.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),p.jsxs("li",{children:[p.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),p.jsx("br",{}),p.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),p.jsxs("li",{children:[p.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),p.jsx("br",{}),p.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),p.jsxs("section",{className:"cg-help-section",children:[p.jsx("h3",{children:"🃏 特殊牌"}),p.jsx("ul",{children:p.jsxs("li",{children:[p.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),p.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return p.jsxs("div",{className:"cg-app",children:[kr(),p.jsx("style",{children:`
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
      `})]})},Cp=vi.createRoot(document.getElementById("root"));Cp.render(p.jsx(qc.StrictMode,{children:p.jsx(Sp,{})}));
//# sourceMappingURL=index-DUJrOoew.js.map
