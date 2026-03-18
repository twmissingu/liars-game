var hd=Object.defineProperty;var gd=(e,t,n)=>t in e?hd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var de=(e,t,n)=>gd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zs={exports:{}},Ql={},qs={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),yd=Symbol.for("react.portal"),xd=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),kd=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Ad=Symbol.for("react.memo"),Ed=Symbol.for("react.lazy"),Lo=Symbol.iterator;function jd(e){return e===null||typeof e!="object"?null:(e=Lo&&e[Lo]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tu=Object.assign,nu={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=Xn.prototype;function La(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}var Ra=La.prototype=new ru;Ra.constructor=La;tu(Ra,Xn.prototype);Ra.isPureReactComponent=!0;var Ro=Array.isArray,lu=Object.prototype.hasOwnProperty,Oa={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function au(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)lu.call(t,r)&&!iu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var d=Array(u),p=0;p<u;p++)d[p]=arguments[p+2];l.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Or,type:e,key:i,ref:o,props:l,_owner:Oa.current}}function Td(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function Pd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oo=/\/+/g;function ui(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pd(""+e.key):t.toString(36)}function sl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Or:case yd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+ui(o,0):r,Ro(l)?(n="",e!=null&&(n=e.replace(Oo,"$&/")+"/"),sl(l,t,n,"",function(p){return p})):l!=null&&(Fa(l)&&(l=Td(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Oo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ro(e))for(var u=0;u<e.length;u++){i=e[u];var d=r+ui(i,u);o+=sl(i,t,n,d,l)}else if(d=jd(e),typeof d=="function")for(e=d.call(e),u=0;!(i=e.next()).done;)i=i.value,d=r+ui(i,u++),o+=sl(i,t,n,d,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Hr(e,t,n){if(e==null)return e;var r=[],l=0;return sl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Md(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},ul={transition:null},Id={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Oa};function ou(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!Fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Xn;F.Fragment=xd;F.Profiler=wd;F.PureComponent=La;F.StrictMode=_d;F.Suspense=Nd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Id;F.act=ou;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Oa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)lu.call(t,d)&&!iu.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var p=0;p<d;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:Or,type:e.type,key:l,ref:i,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Sd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kd,_context:e},e.Consumer=e};F.createElement=au;F.createFactory=function(e){var t=au.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Cd,render:e}};F.isValidElement=Fa;F.lazy=function(e){return{$$typeof:Ed,_payload:{_status:-1,_result:e},_init:Md}};F.memo=function(e,t){return{$$typeof:Ad,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ul.transition;ul.transition={};try{e()}finally{ul.transition=t}};F.unstable_act=ou;F.useCallback=function(e,t){return Ee.current.useCallback(e,t)};F.useContext=function(e){return Ee.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ee.current.useEffect(e,t)};F.useId=function(){return Ee.current.useId()};F.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ee.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};F.useRef=function(e){return Ee.current.useRef(e)};F.useState=function(e){return Ee.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Ee.current.useTransition()};F.version="18.3.1";qs.exports=F;var P=qs.exports;const bd=vd(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=P,Ld=Symbol.for("react.element"),Rd=Symbol.for("react.fragment"),Od=Object.prototype.hasOwnProperty,Fd=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dd={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Od.call(t,r)&&!Dd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ld,type:e,key:i,ref:o,props:l,_owner:Fd.current}}Ql.Fragment=Rd;Ql.jsx=su;Ql.jsxs=su;Zs.exports=Ql;var m=Zs.exports,$i={},uu={exports:{}},He={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,b){var z=E.length;E.push(b);e:for(;0<z;){var W=z-1>>>1,q=E[W];if(0<l(q,b))E[W]=b,E[z]=q,z=W;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var b=E[0],z=E.pop();if(z!==b){E[0]=z;e:for(var W=0,q=E.length,vt=q>>>1;W<vt;){var Ue=2*(W+1)-1,Pt=E[Ue],Qe=Ue+1,L=E[Qe];if(0>l(Pt,z))Qe<q&&0>l(L,Pt)?(E[W]=L,E[Qe]=z,W=Qe):(E[W]=Pt,E[Ue]=z,W=Ue);else if(Qe<q&&0>l(L,z))E[W]=L,E[Qe]=z,W=Qe;else break e}}return b}function l(E,b){var z=E.sortIndex-b.sortIndex;return z!==0?z:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var d=[],p=[],_=1,a=null,s=3,c=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var b=n(p);b!==null;){if(b.callback===null)r(p);else if(b.startTime<=E)r(p),b.sortIndex=b.expirationTime,t(d,b);else break;b=n(p)}}function k(E){if(y=!1,v(E),!g)if(n(d)!==null)g=!0,en(S);else{var b=n(p);b!==null&&Tt(k,b.startTime-E)}}function S(E,b){g=!1,y&&(y=!1,f(A),A=-1),c=!0;var z=s;try{for(v(b),a=n(d);a!==null&&(!(a.expirationTime>b)||E&&!se());){var W=a.callback;if(typeof W=="function"){a.callback=null,s=a.priorityLevel;var q=W(a.expirationTime<=b);b=e.unstable_now(),typeof q=="function"?a.callback=q:a===n(d)&&r(d),v(b)}else r(d);a=n(d)}if(a!==null)var vt=!0;else{var Ue=n(p);Ue!==null&&Tt(k,Ue.startTime-b),vt=!1}return vt}finally{a=null,s=z,c=!1}}var x=!1,N=null,A=-1,M=5,I=-1;function se(){return!(e.unstable_now()-I<M)}function Te(){if(N!==null){var E=e.unstable_now();I=E;var b=!0;try{b=N(!0,E)}finally{b?Ge():(x=!1,N=null)}}else x=!1}var Ge;if(typeof h=="function")Ge=function(){h(Te)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,qt=Re.port2;Re.port1.onmessage=Te,Ge=function(){qt.postMessage(null)}}else Ge=function(){w(Te,0)};function en(E){N=E,x||(x=!0,Ge())}function Tt(E,b){A=w(function(){E(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){g||c||(g=!0,en(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(E){switch(s){case 1:case 2:case 3:var b=3;break;default:b=s}var z=s;s=b;try{return E()}finally{s=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=s;s=E;try{return b()}finally{s=z}},e.unstable_scheduleCallback=function(E,b,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,E){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=z+q,E={id:_++,callback:b,priorityLevel:E,startTime:z,expirationTime:q,sortIndex:-1},z>W?(E.sortIndex=z,t(p,E),n(d)===null&&E===n(p)&&(y?(f(A),A=-1):y=!0,Tt(k,z-W))):(E.sortIndex=q,t(d,E),g||c||(g=!0,en(S))),E},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(E){var b=s;return function(){var z=s;s=b;try{return E.apply(this,arguments)}finally{s=z}}}})(du);cu.exports=du;var Bd=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=P,$e=Bd;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fu=new Set,xr={};function gn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(xr[e]=t,e=0;e<t.length;e++)fu.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hi=Object.prototype.hasOwnProperty,Hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Do={};function Vd(e){return Hi.call(Do,e)?!0:Hi.call(Fo,e)?!1:Hd.test(e)?Do[e]=!0:(Fo[e]=!0,!1)}function Gd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ud(e,t,n,r){if(t===null||typeof t>"u"||Gd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Da=/[\-:]([a-z])/g;function Ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Da,Ba);ge[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Da,Ba);ge[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Da,Ba);ge[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function $a(e,t,n,r){var l=ge.hasOwnProperty(t)?ge[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ud(t,n,l,r)&&(n=null),r||l===null?Vd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Ha=Symbol.for("react.strict_mode"),Vi=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),mu=Symbol.for("react.context"),Va=Symbol.for("react.forward_ref"),Gi=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ci;function ar(e){if(ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ci=t&&t[1]||""}return`
`+ci+e}var di=!1;function fi(e,t){if(!e||di)return"";di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ar(e):""}function Qd(e){switch(e.tag){case 5:return ar(e.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return e=fi(e.type,!1),e;case 11:return e=fi(e.type.render,!1),e;case 1:return e=fi(e.type,!0),e;default:return""}}function Qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case Vi:return"Profiler";case Ha:return"StrictMode";case Gi:return"Suspense";case Ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case Va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return t=e.displayName||null,t!==null?t:Qi(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Qi(e(t))}catch{}}return null}function Wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qi(t);case 8:return t===Ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Xd(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $o(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yu(e,t){t=t.checked,t!=null&&$a(e,"checked",t,!1)}function Xi(e,t){yu(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ki(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ki(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ho(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ki(e,t,n){(t!=="number"||_l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(or(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function xu(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kd=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){Kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function ku(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function Su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ku(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Yd=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zi(e,t){if(t){if(Yd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function qi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=null;function Ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ta=null,Rn=null,On=null;function Uo(e){if(e=Br(e)){if(typeof ta!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Jl(t),ta(e.stateNode,e.type,t))}}function Cu(e){Rn?On?On.push(e):On=[e]:Rn=e}function Nu(){if(Rn){var e=Rn,t=On;if(On=Rn=null,Uo(e),t)for(e=0;e<t.length;e++)Uo(t[e])}}function Au(e,t){return e(t)}function Eu(){}var pi=!1;function ju(e,t,n){if(pi)return e(t,n);pi=!0;try{return Au(e,t,n)}finally{pi=!1,(Rn!==null||On!==null)&&(Eu(),Nu())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var na=!1;if(Ct)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){na=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{na=!1}function Jd(e,t,n,r,l,i,o,u,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(_){this.onError(_)}}var dr=!1,wl=null,kl=!1,ra=null,Zd={onError:function(e){dr=!0,wl=e}};function qd(e,t,n,r,l,i,o,u,d){dr=!1,wl=null,Jd.apply(Zd,arguments)}function ef(e,t,n,r,l,i,o,u,d){if(qd.apply(this,arguments),dr){if(dr){var p=wl;dr=!1,wl=null}else throw Error(C(198));kl||(kl=!0,ra=p)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(vn(e)!==e)throw Error(C(188))}function tf(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Qo(l),e;if(i===r)return Qo(l),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Pu(e){return e=tf(e),e!==null?Mu(e):null}function Mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mu(e);if(t!==null)return t;e=e.sibling}return null}var Iu=$e.unstable_scheduleCallback,Wo=$e.unstable_cancelCallback,nf=$e.unstable_shouldYield,rf=$e.unstable_requestPaint,ie=$e.unstable_now,lf=$e.unstable_getCurrentPriorityLevel,Qa=$e.unstable_ImmediatePriority,bu=$e.unstable_UserBlockingPriority,Sl=$e.unstable_NormalPriority,af=$e.unstable_LowPriority,zu=$e.unstable_IdlePriority,Wl=null,ht=null;function of(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:cf,sf=Math.log,uf=Math.LN2;function cf(e){return e>>>=0,e===0?32:31-(sf(e)/uf|0)|0}var Qr=64,Wr=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=sr(u):(i&=o,i!==0&&(r=sr(i)))}else o=n&~l,o!==0?r=sr(o):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),l=1<<n,r|=e[n],t&=~l;return r}function df(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ff(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-it(i),u=1<<o,d=l[o];d===-1?(!(u&n)||u&r)&&(l[o]=df(u,t)):d<=t&&(e.expiredLanes|=u),i&=~u}}function la(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=Qr;return Qr<<=1,!(Qr&4194240)&&(Qr=64),e}function mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function pf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-it(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var U=0;function Ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ou,Xa,Fu,Du,Bu,ia=!1,Xr=[],Bt=null,$t=null,Ht=null,kr=new Map,Sr=new Map,Rt=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xo(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function er(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Br(t),t!==null&&Xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function hf(e,t,n,r,l){switch(t){case"focusin":return Bt=er(Bt,e,t,n,r,l),!0;case"dragenter":return $t=er($t,e,t,n,r,l),!0;case"mouseover":return Ht=er(Ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return kr.set(i,er(kr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Sr.set(i,er(Sr.get(i)||null,e,t,n,r,l)),!0}return!1}function $u(e){var t=an(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Tu(n),t!==null){e.blockedOn=t,Bu(e.priority,function(){Fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ea=r,n.target.dispatchEvent(r),ea=null}else return t=Br(n),t!==null&&Xa(t),e.blockedOn=n,!1;t.shift()}return!0}function Ko(e,t,n){cl(e)&&n.delete(t)}function gf(){ia=!1,Bt!==null&&cl(Bt)&&(Bt=null),$t!==null&&cl($t)&&($t=null),Ht!==null&&cl(Ht)&&(Ht=null),kr.forEach(Ko),Sr.forEach(Ko)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,gf)))}function Cr(e){function t(l){return tr(l,e)}if(0<Xr.length){tr(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&tr(Bt,e),$t!==null&&tr($t,e),Ht!==null&&tr(Ht,e),kr.forEach(t),Sr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)$u(n),n.blockedOn===null&&Rt.shift()}var Fn=jt.ReactCurrentBatchConfig,Nl=!0;function vf(e,t,n,r){var l=U,i=Fn.transition;Fn.transition=null;try{U=1,Ka(e,t,n,r)}finally{U=l,Fn.transition=i}}function yf(e,t,n,r){var l=U,i=Fn.transition;Fn.transition=null;try{U=4,Ka(e,t,n,r)}finally{U=l,Fn.transition=i}}function Ka(e,t,n,r){if(Nl){var l=aa(e,t,n,r);if(l===null)Ci(e,t,r,Al,n),Xo(e,r);else if(hf(l,e,t,n,r))r.stopPropagation();else if(Xo(e,r),t&4&&-1<mf.indexOf(e)){for(;l!==null;){var i=Br(l);if(i!==null&&Ou(i),i=aa(e,t,n,r),i===null&&Ci(e,t,r,Al,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ci(e,t,r,null,n)}}var Al=null;function aa(e,t,n,r){if(Al=null,e=Ua(r),e=an(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Al=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lf()){case Qa:return 1;case bu:return 4;case Sl:case af:return 16;case zu:return 536870912;default:return 16}default:return 16}}var Ft=null,Ya=null,dl=null;function Vu(){if(dl)return dl;var e,t=Ya,n=t.length,r,l="value"in Ft?Ft.value:Ft.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return dl=l.slice(e,1<r?1-r:void 0)}function fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Yo(){return!1}function Ve(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kr:Yo,this.isPropagationStopped=Yo,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=Ve(Kn),Dr=ne({},Kn,{view:0,detail:0}),xf=Ve(Dr),hi,gi,nr,Xl=ne({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(hi=e.screenX-nr.screenX,gi=e.screenY-nr.screenY):gi=hi=0,nr=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:gi}}),Jo=Ve(Xl),_f=ne({},Xl,{dataTransfer:0}),wf=Ve(_f),kf=ne({},Dr,{relatedTarget:0}),vi=Ve(kf),Sf=ne({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cf=Ve(Sf),Nf=ne({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Af=Ve(Nf),Ef=ne({},Kn,{data:0}),Zo=Ve(Ef),jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pf[e])?!!t[e]:!1}function Za(){return Mf}var If=ne({},Dr,{key:function(e){if(e.key){var t=jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Za,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=Ve(If),zf=ne({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Ve(zf),Lf=ne({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Za}),Rf=Ve(Lf),Of=ne({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=Ve(Of),Df=ne({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Ve(Df),$f=[9,13,27,32],qa=Ct&&"CompositionEvent"in window,fr=null;Ct&&"documentMode"in document&&(fr=document.documentMode);var Hf=Ct&&"TextEvent"in window&&!fr,Gu=Ct&&(!qa||fr&&8<fr&&11>=fr),es=" ",ts=!1;function Uu(e,t){switch(e){case"keyup":return $f.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Vf(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(ts=!0,es);case"textInput":return e=t.data,e===es&&ts?null:e;default:return null}}function Gf(e,t){if(Cn)return e==="compositionend"||!qa&&Uu(e,t)?(e=Vu(),dl=Ya=Ft=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gu&&t.locale!=="ko"?null:t.data;default:return null}}var Uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uf[e.type]:t==="textarea"}function Wu(e,t,n,r){Cu(r),t=El(t,"onChange"),0<t.length&&(n=new Ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,Nr=null;function Qf(e){lc(e,0)}function Kl(e){var t=En(e);if(vu(t))return e}function Wf(e,t){if(e==="change")return t}var Xu=!1;if(Ct){var yi;if(Ct){var xi="oninput"in document;if(!xi){var rs=document.createElement("div");rs.setAttribute("oninput","return;"),xi=typeof rs.oninput=="function"}yi=xi}else yi=!1;Xu=yi&&(!document.documentMode||9<document.documentMode)}function ls(){pr&&(pr.detachEvent("onpropertychange",Ku),Nr=pr=null)}function Ku(e){if(e.propertyName==="value"&&Kl(Nr)){var t=[];Wu(t,Nr,e,Ua(e)),ju(Qf,t)}}function Xf(e,t,n){e==="focusin"?(ls(),pr=t,Nr=n,pr.attachEvent("onpropertychange",Ku)):e==="focusout"&&ls()}function Kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Nr)}function Yf(e,t){if(e==="click")return Kl(t)}function Jf(e,t){if(e==="input"||e==="change")return Kl(t)}function Zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Zf;function Ar(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Hi.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function Yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=_l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_l(e.document)}return t}function eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qf(e){var t=Ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yu(n.ownerDocument.documentElement,n)){if(r!==null&&eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=as(n,i);var o=as(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ep=Ct&&"documentMode"in document&&11>=document.documentMode,Nn=null,oa=null,mr=null,sa=!1;function os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sa||Nn==null||Nn!==_l(r)||(r=Nn,"selectionStart"in r&&eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Ar(mr,r)||(mr=r,r=El(oa,"onSelect"),0<r.length&&(t=new Ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},_i={},Zu={};Ct&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Yl(e){if(_i[e])return _i[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zu)return _i[e]=t[n];return e}var qu=Yl("animationend"),ec=Yl("animationiteration"),tc=Yl("animationstart"),nc=Yl("transitionend"),rc=new Map,ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){rc.set(e,t),gn(t,[e])}for(var wi=0;wi<ss.length;wi++){var ki=ss[wi],tp=ki.toLowerCase(),np=ki[0].toUpperCase()+ki.slice(1);Yt(tp,"on"+np)}Yt(qu,"onAnimationEnd");Yt(ec,"onAnimationIteration");Yt(tc,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(nc,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ef(r,t,void 0,e),e.currentTarget=null}function lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,p=u.currentTarget;if(u=u.listener,d!==i&&l.isPropagationStopped())break e;us(l,u,p),i=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,p=u.currentTarget,u=u.listener,d!==i&&l.isPropagationStopped())break e;us(l,u,p),i=d}}}if(kl)throw e=ra,kl=!1,ra=null,e}function Y(e,t){var n=t[pa];n===void 0&&(n=t[pa]=new Set);var r=e+"__bubble";n.has(r)||(ic(t,e,2,!1),n.add(r))}function Si(e,t,n){var r=0;t&&(r|=4),ic(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[Jr]){e[Jr]=!0,fu.forEach(function(n){n!=="selectionchange"&&(rp.has(n)||Si(n,!1,e),Si(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,Si("selectionchange",!1,t))}}function ic(e,t,n,r){switch(Hu(t)){case 1:var l=vf;break;case 4:l=yf;break;default:l=Ka}n=l.bind(null,t,n,e),l=void 0,!na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ci(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;u!==null;){if(o=an(u),o===null)return;if(d=o.tag,d===5||d===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ju(function(){var p=i,_=Ua(n),a=[];e:{var s=rc.get(e);if(s!==void 0){var c=Ja,g=e;switch(e){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":c=bf;break;case"focusin":g="focus",c=vi;break;case"focusout":g="blur",c=vi;break;case"beforeblur":case"afterblur":c=vi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=wf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Rf;break;case qu:case ec:case tc:c=Cf;break;case nc:c=Ff;break;case"scroll":c=xf;break;case"wheel":c=Bf;break;case"copy":case"cut":case"paste":c=Af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=qo}var y=(t&4)!==0,w=!y&&e==="scroll",f=y?s!==null?s+"Capture":null:s;y=[];for(var h=p,v;h!==null;){v=h;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,f!==null&&(k=wr(h,f),k!=null&&y.push(jr(h,k,v)))),w)break;h=h.return}0<y.length&&(s=new c(s,g,null,n,_),a.push({event:s,listeners:y}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",s&&n!==ea&&(g=n.relatedTarget||n.fromElement)&&(an(g)||g[Nt]))break e;if((c||s)&&(s=_.window===_?_:(s=_.ownerDocument)?s.defaultView||s.parentWindow:window,c?(g=n.relatedTarget||n.toElement,c=p,g=g?an(g):null,g!==null&&(w=vn(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(c=null,g=p),c!==g)){if(y=Jo,k="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=qo,k="onPointerLeave",f="onPointerEnter",h="pointer"),w=c==null?s:En(c),v=g==null?s:En(g),s=new y(k,h+"leave",c,n,_),s.target=w,s.relatedTarget=v,k=null,an(_)===p&&(y=new y(f,h+"enter",g,n,_),y.target=v,y.relatedTarget=w,k=y),w=k,c&&g)t:{for(y=c,f=g,h=0,v=y;v;v=wn(v))h++;for(v=0,k=f;k;k=wn(k))v++;for(;0<h-v;)y=wn(y),h--;for(;0<v-h;)f=wn(f),v--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=wn(y),f=wn(f)}y=null}else y=null;c!==null&&cs(a,s,c,y,!1),g!==null&&w!==null&&cs(a,w,g,y,!0)}}e:{if(s=p?En(p):window,c=s.nodeName&&s.nodeName.toLowerCase(),c==="select"||c==="input"&&s.type==="file")var S=Wf;else if(ns(s))if(Xu)S=Jf;else{S=Kf;var x=Xf}else(c=s.nodeName)&&c.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(S=Yf);if(S&&(S=S(e,p))){Wu(a,S,n,_);break e}x&&x(e,s,p),e==="focusout"&&(x=s._wrapperState)&&x.controlled&&s.type==="number"&&Ki(s,"number",s.value)}switch(x=p?En(p):window,e){case"focusin":(ns(x)||x.contentEditable==="true")&&(Nn=x,oa=p,mr=null);break;case"focusout":mr=oa=Nn=null;break;case"mousedown":sa=!0;break;case"contextmenu":case"mouseup":case"dragend":sa=!1,os(a,n,_);break;case"selectionchange":if(ep)break;case"keydown":case"keyup":os(a,n,_)}var N;if(qa)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Cn?Uu(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Gu&&n.locale!=="ko"&&(Cn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Cn&&(N=Vu()):(Ft=_,Ya="value"in Ft?Ft.value:Ft.textContent,Cn=!0)),x=El(p,A),0<x.length&&(A=new Zo(A,e,null,n,_),a.push({event:A,listeners:x}),N?A.data=N:(N=Qu(n),N!==null&&(A.data=N)))),(N=Hf?Vf(e,n):Gf(e,n))&&(p=El(p,"onBeforeInput"),0<p.length&&(_=new Zo("onBeforeInput","beforeinput",null,n,_),a.push({event:_,listeners:p}),_.data=N))}lc(a,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function El(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=wr(e,n),i!=null&&r.unshift(jr(e,i,l)),i=wr(e,t),i!=null&&r.push(jr(e,i,l))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,d=u.alternate,p=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&p!==null&&(u=p,l?(d=wr(n,i),d!=null&&o.unshift(jr(n,d,u))):l||(d=wr(n,i),d!=null&&o.push(jr(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var lp=/\r\n?/g,ip=/\u0000|\uFFFD/g;function ds(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(ip,"")}function Zr(e,t,n){if(t=ds(t),ds(e)!==t&&n)throw Error(C(425))}function jl(){}var ua=null,ca=null;function da(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,op=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(sp)}:fa;function sp(e){setTimeout(function(){throw e})}function Ni(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Cr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Yn,Tr="__reactProps$"+Yn,Nt="__reactContainer$"+Yn,pa="__reactEvents$"+Yn,up="__reactListeners$"+Yn,cp="__reactHandles$"+Yn;function an(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ps(e);e!==null;){if(n=e[pt])return n;e=ps(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[pt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Jl(e){return e[Tr]||null}var ma=[],jn=-1;function Jt(e){return{current:e}}function J(e){0>jn||(e.current=ma[jn],ma[jn]=null,jn--)}function X(e,t){jn++,ma[jn]=e.current,e.current=t}var Kt={},Se=Jt(Kt),be=Jt(!1),dn=Kt;function Hn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ze(e){return e=e.childContextTypes,e!=null}function Tl(){J(be),J(Se)}function ms(e,t,n){if(Se.current!==Kt)throw Error(C(168));X(Se,t),X(be,n)}function ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(C(108,Wd(e)||"Unknown",l));return ne({},n,r)}function Pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,dn=Se.current,X(Se,e),X(be,be.current),!0}function hs(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=ac(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,J(be),J(Se),X(Se,e)):J(be),X(be,n)}var _t=null,Zl=!1,Ai=!1;function oc(e){_t===null?_t=[e]:_t.push(e)}function dp(e){Zl=!0,oc(e)}function Zt(){if(!Ai&&_t!==null){Ai=!0;var e=0,t=U;try{var n=_t;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Zl=!1}catch(l){throw _t!==null&&(_t=_t.slice(e+1)),Iu(Qa,Zt),l}finally{U=t,Ai=!1}}return null}var Tn=[],Pn=0,Ml=null,Il=0,Xe=[],Ke=0,fn=null,wt=1,kt="";function tn(e,t){Tn[Pn++]=Il,Tn[Pn++]=Ml,Ml=e,Il=t}function sc(e,t,n){Xe[Ke++]=wt,Xe[Ke++]=kt,Xe[Ke++]=fn,fn=e;var r=wt;e=kt;var l=32-it(r)-1;r&=~(1<<l),n+=1;var i=32-it(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,wt=1<<32-it(t)+l|n<<l|r,kt=i+e}else wt=1<<i|n<<l|r,kt=e}function to(e){e.return!==null&&(tn(e,1),sc(e,1,0))}function no(e){for(;e===Ml;)Ml=Tn[--Pn],Tn[Pn]=null,Il=Tn[--Pn],Tn[Pn]=null;for(;e===fn;)fn=Xe[--Ke],Xe[Ke]=null,kt=Xe[--Ke],Xe[Ke]=null,wt=Xe[--Ke],Xe[Ke]=null}var Be=null,De=null,Z=!1,lt=null;function uc(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,De=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:wt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,De=null,!0):!1;default:return!1}}function ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ga(e){if(Z){var t=De;if(t){var n=t;if(!gs(e,t)){if(ha(e))throw Error(C(418));t=Vt(n.nextSibling);var r=Be;t&&gs(e,t)?uc(r,n):(e.flags=e.flags&-4097|2,Z=!1,Be=e)}}else{if(ha(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,Be=e}}}function vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function qr(e){if(e!==Be)return!1;if(!Z)return vs(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!da(e.type,e.memoizedProps)),t&&(t=De)){if(ha(e))throw cc(),Error(C(418));for(;t;)uc(e,t),t=Vt(t.nextSibling)}if(vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Be?Vt(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=De;e;)e=Vt(e.nextSibling)}function Vn(){De=Be=null,Z=!1}function ro(e){lt===null?lt=[e]:lt.push(e)}var fp=jt.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function el(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ys(e){var t=e._init;return t(e._payload)}function dc(e){function t(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function l(f,h){return f=Wt(f,h),f.index=0,f.sibling=null,f}function i(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,h,v,k){return h===null||h.tag!==6?(h=bi(v,f.mode,k),h.return=f,h):(h=l(h,v),h.return=f,h)}function d(f,h,v,k){var S=v.type;return S===Sn?_(f,h,v.props.children,k,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&ys(S)===h.type)?(k=l(h,v.props),k.ref=rr(f,h,v),k.return=f,k):(k=xl(v.type,v.key,v.props,null,f.mode,k),k.ref=rr(f,h,v),k.return=f,k)}function p(f,h,v,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=zi(v,f.mode,k),h.return=f,h):(h=l(h,v.children||[]),h.return=f,h)}function _(f,h,v,k,S){return h===null||h.tag!==7?(h=cn(v,f.mode,k,S),h.return=f,h):(h=l(h,v),h.return=f,h)}function a(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=bi(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vr:return v=xl(h.type,h.key,h.props,null,f.mode,v),v.ref=rr(f,null,h),v.return=f,v;case kn:return h=zi(h,f.mode,v),h.return=f,h;case zt:var k=h._init;return a(f,k(h._payload),v)}if(or(h)||Zn(h))return h=cn(h,f.mode,v,null),h.return=f,h;el(f,h)}return null}function s(f,h,v,k){var S=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:u(f,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vr:return v.key===S?d(f,h,v,k):null;case kn:return v.key===S?p(f,h,v,k):null;case zt:return S=v._init,s(f,h,S(v._payload),k)}if(or(v)||Zn(v))return S!==null?null:_(f,h,v,k,null);el(f,v)}return null}function c(f,h,v,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(v)||null,u(h,f,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Vr:return f=f.get(k.key===null?v:k.key)||null,d(h,f,k,S);case kn:return f=f.get(k.key===null?v:k.key)||null,p(h,f,k,S);case zt:var x=k._init;return c(f,h,v,x(k._payload),S)}if(or(k)||Zn(k))return f=f.get(v)||null,_(h,f,k,S,null);el(h,k)}return null}function g(f,h,v,k){for(var S=null,x=null,N=h,A=h=0,M=null;N!==null&&A<v.length;A++){N.index>A?(M=N,N=null):M=N.sibling;var I=s(f,N,v[A],k);if(I===null){N===null&&(N=M);break}e&&N&&I.alternate===null&&t(f,N),h=i(I,h,A),x===null?S=I:x.sibling=I,x=I,N=M}if(A===v.length)return n(f,N),Z&&tn(f,A),S;if(N===null){for(;A<v.length;A++)N=a(f,v[A],k),N!==null&&(h=i(N,h,A),x===null?S=N:x.sibling=N,x=N);return Z&&tn(f,A),S}for(N=r(f,N);A<v.length;A++)M=c(N,f,A,v[A],k),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?A:M.key),h=i(M,h,A),x===null?S=M:x.sibling=M,x=M);return e&&N.forEach(function(se){return t(f,se)}),Z&&tn(f,A),S}function y(f,h,v,k){var S=Zn(v);if(typeof S!="function")throw Error(C(150));if(v=S.call(v),v==null)throw Error(C(151));for(var x=S=null,N=h,A=h=0,M=null,I=v.next();N!==null&&!I.done;A++,I=v.next()){N.index>A?(M=N,N=null):M=N.sibling;var se=s(f,N,I.value,k);if(se===null){N===null&&(N=M);break}e&&N&&se.alternate===null&&t(f,N),h=i(se,h,A),x===null?S=se:x.sibling=se,x=se,N=M}if(I.done)return n(f,N),Z&&tn(f,A),S;if(N===null){for(;!I.done;A++,I=v.next())I=a(f,I.value,k),I!==null&&(h=i(I,h,A),x===null?S=I:x.sibling=I,x=I);return Z&&tn(f,A),S}for(N=r(f,N);!I.done;A++,I=v.next())I=c(N,f,A,I.value,k),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?A:I.key),h=i(I,h,A),x===null?S=I:x.sibling=I,x=I);return e&&N.forEach(function(Te){return t(f,Te)}),Z&&tn(f,A),S}function w(f,h,v,k){if(typeof v=="object"&&v!==null&&v.type===Sn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vr:e:{for(var S=v.key,x=h;x!==null;){if(x.key===S){if(S=v.type,S===Sn){if(x.tag===7){n(f,x.sibling),h=l(x,v.props.children),h.return=f,f=h;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&ys(S)===x.type){n(f,x.sibling),h=l(x,v.props),h.ref=rr(f,x,v),h.return=f,f=h;break e}n(f,x);break}else t(f,x);x=x.sibling}v.type===Sn?(h=cn(v.props.children,f.mode,k,v.key),h.return=f,f=h):(k=xl(v.type,v.key,v.props,null,f.mode,k),k.ref=rr(f,h,v),k.return=f,f=k)}return o(f);case kn:e:{for(x=v.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(f,h.sibling),h=l(h,v.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=zi(v,f.mode,k),h.return=f,f=h}return o(f);case zt:return x=v._init,w(f,h,x(v._payload),k)}if(or(v))return g(f,h,v,k);if(Zn(v))return y(f,h,v,k);el(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(f,h.sibling),h=l(h,v),h.return=f,f=h):(n(f,h),h=bi(v,f.mode,k),h.return=f,f=h),o(f)):n(f,h)}return w}var Gn=dc(!0),fc=dc(!1),bl=Jt(null),zl=null,Mn=null,lo=null;function io(){lo=Mn=zl=null}function ao(e){var t=bl.current;J(bl),e._currentValue=t}function va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){zl=e,lo=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(lo!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(zl===null)throw Error(C(308));Mn=e,zl.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var on=null;function oo(e){on===null?on=[e]:on.push(e)}function pc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,oo(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,oo(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}function xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ll(e,t,n,r){var l=e.updateQueue;Lt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,p=d.next;d.next=null,o===null?i=p:o.next=p,o=d;var _=e.alternate;_!==null&&(_=_.updateQueue,u=_.lastBaseUpdate,u!==o&&(u===null?_.firstBaseUpdate=p:u.next=p,_.lastBaseUpdate=d))}if(i!==null){var a=l.baseState;o=0,_=p=d=null,u=i;do{var s=u.lane,c=u.eventTime;if((r&s)===s){_!==null&&(_=_.next={eventTime:c,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(s=t,c=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){a=g.call(c,a,s);break e}a=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,s=typeof g=="function"?g.call(c,a,s):g,s==null)break e;a=ne({},a,s);break e;case 2:Lt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,s=l.effects,s===null?l.effects=[u]:s.push(u))}else c={eventTime:c,lane:s,tag:u.tag,payload:u.payload,callback:u.callback,next:null},_===null?(p=_=c,d=a):_=_.next=c,o|=s;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;s=u,u=s.next,s.next=null,l.lastBaseUpdate=s,l.shared.pending=null}}while(!0);if(_===null&&(d=a),l.baseState=d,l.firstBaseUpdate=p,l.lastBaseUpdate=_,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);mn|=o,e.lanes=o,e.memoizedState=a}}function _s(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(C(191,l));l.call(r)}}}var $r={},gt=Jt($r),Pr=Jt($r),Mr=Jt($r);function sn(e){if(e===$r)throw Error(C(174));return e}function uo(e,t){switch(X(Mr,t),X(Pr,e),X(gt,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ji(t,e)}J(gt),X(gt,t)}function Un(){J(gt),J(Pr),J(Mr)}function hc(e){sn(Mr.current);var t=sn(gt.current),n=Ji(t,e.type);t!==n&&(X(Pr,e),X(gt,n))}function co(e){Pr.current===e&&(J(gt),J(Pr))}var ee=Jt(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ei=[];function fo(){for(var e=0;e<Ei.length;e++)Ei[e]._workInProgressVersionPrimary=null;Ei.length=0}var ml=jt.ReactCurrentDispatcher,ji=jt.ReactCurrentBatchConfig,pn=0,te=null,ue=null,fe=null,Ol=!1,hr=!1,Ir=0,pp=0;function xe(){throw Error(C(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,l,i){if(pn=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ml.current=e===null||e.memoizedState===null?vp:yp,e=n(r,l),hr){i=0;do{if(hr=!1,Ir=0,25<=i)throw Error(C(301));i+=1,fe=ue=null,t.updateQueue=null,ml.current=xp,e=n(r,l)}while(hr)}if(ml.current=Fl,t=ue!==null&&ue.next!==null,pn=0,fe=ue=te=null,Ol=!1,t)throw Error(C(300));return e}function ho(){var e=Ir!==0;return Ir=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=e:fe=fe.next=e,fe}function qe(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?te.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(C(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?te.memoizedState=fe=e:fe=fe.next=e}return fe}function br(e,t){return typeof t=="function"?t(e):t}function Ti(e){var t=qe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ue,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,d=null,p=i;do{var _=p.lane;if((pn&_)===_)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var a={lane:_,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(u=d=a,o=r):d=d.next=a,te.lanes|=_,mn|=_}p=p.next}while(p!==null&&p!==i);d===null?o=r:d.next=u,ot(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,te.lanes|=i,mn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pi(e){var t=qe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);ot(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function gc(){}function vc(e,t){var n=te,r=qe(),l=t(),i=!ot(r.memoizedState,l);if(i&&(r.memoizedState=l,Ie=!0),r=r.queue,go(_c.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,zr(9,xc.bind(null,n,r,l,t),void 0,null),pe===null)throw Error(C(349));pn&30||yc(n,t,l)}return l}function yc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xc(e,t,n,r){t.value=n,t.getSnapshot=r,wc(t)&&kc(e)}function _c(e,t,n){return n(function(){wc(t)&&kc(e)})}function wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function kc(e){var t=At(e,1);t!==null&&at(t,e,1,-1)}function ws(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=gp.bind(null,te,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sc(){return qe().memoizedState}function hl(e,t,n,r){var l=ft();te.flags|=e,l.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function ql(e,t,n,r){var l=qe();r=r===void 0?null:r;var i=void 0;if(ue!==null){var o=ue.memoizedState;if(i=o.destroy,r!==null&&po(r,o.deps)){l.memoizedState=zr(t,n,i,r);return}}te.flags|=e,l.memoizedState=zr(1|t,n,i,r)}function ks(e,t){return hl(8390656,8,e,t)}function go(e,t){return ql(2048,8,e,t)}function Cc(e,t){return ql(4,2,e,t)}function Nc(e,t){return ql(4,4,e,t)}function Ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ec(e,t,n){return n=n!=null?n.concat([e]):null,ql(4,4,Ac.bind(null,t,e),n)}function vo(){}function jc(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pc(e,t,n){return pn&21?(ot(n,t)||(n=Lu(),te.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function mp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ji.transition;ji.transition={};try{e(!1),t()}finally{U=n,ji.transition=r}}function Mc(){return qe().memoizedState}function hp(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ic(e))bc(t,n);else if(n=pc(e,t,n,r),n!==null){var l=Ae();at(n,e,r,l),zc(n,t,r)}}function gp(e,t,n){var r=Qt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ic(e))bc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,ot(u,o)){var d=t.interleaved;d===null?(l.next=l,oo(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=pc(e,t,l,r),n!==null&&(l=Ae(),at(n,e,r,l),zc(n,t,r))}}function Ic(e){var t=e.alternate;return e===te||t!==null&&t===te}function bc(e,t){hr=Ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}var Fl={readContext:Ze,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},vp={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hl(4194308,4,Ac.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hl(4194308,4,e,t)},useInsertionEffect:function(e,t){return hl(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hp.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:ws,useDebugValue:vo,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=ws(!1),t=e[0];return e=mp.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,l=ft();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),pe===null)throw Error(C(349));pn&30||yc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ks(_c.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,xc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=pe.identifierPrefix;if(Z){var n=kt,r=wt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yp={readContext:Ze,useCallback:jc,useContext:Ze,useEffect:go,useImperativeHandle:Ec,useInsertionEffect:Cc,useLayoutEffect:Nc,useMemo:Tc,useReducer:Ti,useRef:Sc,useState:function(){return Ti(br)},useDebugValue:vo,useDeferredValue:function(e){var t=qe();return Pc(t,ue.memoizedState,e)},useTransition:function(){var e=Ti(br)[0],t=qe().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:vc,useId:Mc,unstable_isNewReconciler:!1},xp={readContext:Ze,useCallback:jc,useContext:Ze,useEffect:go,useImperativeHandle:Ec,useInsertionEffect:Cc,useLayoutEffect:Nc,useMemo:Tc,useReducer:Pi,useRef:Sc,useState:function(){return Pi(br)},useDebugValue:vo,useDeferredValue:function(e){var t=qe();return ue===null?t.memoizedState=e:Pc(t,ue.memoizedState,e)},useTransition:function(){var e=Pi(br)[0],t=qe().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:vc,useId:Mc,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ya(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ei={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),l=Qt(e),i=St(r,l);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,l),t!==null&&(at(t,e,l,r),pl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),l=Qt(e),i=St(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,l),t!==null&&(at(t,e,l,r),pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Qt(e),l=St(n,r);l.tag=2,t!=null&&(l.callback=t),t=Gt(e,l,r),t!==null&&(at(t,e,r,n),pl(t,e,r))}};function Ss(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(l,i):!0}function Lc(e,t,n){var r=!1,l=Kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(l=ze(t)?dn:Se.current,r=t.contextTypes,i=(r=r!=null)?Hn(e,l):Kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ei.enqueueReplaceState(t,t.state,null)}function xa(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},so(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ze(i):(i=ze(t)?dn:Se.current,l.context=Hn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ya(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ei.enqueueReplaceState(l,l.state,null),Ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=Qd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Mi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _a(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,Pa=r),_a(e,t)},n}function Oc(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_a(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_a(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Es(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var wp=jt.ReactCurrentOwner,Ie=!1;function Ne(e,t,n,r){t.child=e===null?fc(t,null,n,r):Gn(t,e.child,n,r)}function js(e,t,n,r,l){n=n.render;var i=t.ref;return Dn(t,l),r=mo(e,t,n,r,i,l),n=ho(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(Z&&n&&to(t),t.flags|=1,Ne(e,t,r,l),t.child)}function Ts(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!No(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Fc(e,t,i,r,l)):(e=xl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(o,r)&&e.ref===t.ref)return Et(e,t,l)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Fc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Et(e,t,l)}return wa(e,t,n,r,l)}function Dc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(bn,Fe),Fe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(bn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(bn,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(bn,Fe),Fe|=r;return Ne(e,t,l,n),t.child}function Bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wa(e,t,n,r,l){var i=ze(n)?dn:Se.current;return i=Hn(t,i),Dn(t,l),n=mo(e,t,n,r,i,l),r=ho(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(Z&&r&&to(t),t.flags|=1,Ne(e,t,n,l),t.child)}function Ps(e,t,n,r,l){if(ze(n)){var i=!0;Pl(t)}else i=!1;if(Dn(t,l),t.stateNode===null)gl(e,t),Lc(t,n,r),xa(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var d=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ze(p):(p=ze(n)?dn:Se.current,p=Hn(t,p));var _=n.getDerivedStateFromProps,a=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function";a||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==p)&&Cs(t,o,r,p),Lt=!1;var s=t.memoizedState;o.state=s,Ll(t,r,o,l),d=t.memoizedState,u!==r||s!==d||be.current||Lt?(typeof _=="function"&&(ya(t,n,_,r),d=t.memoizedState),(u=Lt||Ss(t,n,u,r,s,d,p))?(a||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=p,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,mc(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:nt(t.type,u),o.props=p,a=t.pendingProps,s=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ze(d):(d=ze(n)?dn:Se.current,d=Hn(t,d));var c=n.getDerivedStateFromProps;(_=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==a||s!==d)&&Cs(t,o,r,d),Lt=!1,s=t.memoizedState,o.state=s,Ll(t,r,o,l);var g=t.memoizedState;u!==a||s!==g||be.current||Lt?(typeof c=="function"&&(ya(t,n,c,r),g=t.memoizedState),(p=Lt||Ss(t,n,p,r,s,g,d)||!1)?(_||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=d,r=p):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return ka(e,t,n,r,i,l)}function ka(e,t,n,r,l,i){Bc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&hs(t,n,!1),Et(e,t,i);r=t.stateNode,wp.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,u,i)):Ne(e,t,u,i),t.memoizedState=r.state,l&&hs(t,n,!0),t.child}function $c(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),uo(e,t.containerInfo)}function Ms(e,t,n,r,l){return Vn(),ro(l),t.flags|=256,Ne(e,t,n,r),t.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function Ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,t,n){var r=t.pendingProps,l=ee.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(ee,l&1),e===null)return ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ri(o,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ca(n),t.memoizedState=Sa,e):yo(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return kp(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Wt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Wt(u,i):(i=cn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ca(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Sa,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yo(e,t){return t=ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function tl(e,t,n,r){return r!==null&&ro(r),Gn(t,e.child,null,n),e=yo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Mi(Error(C(422))),tl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ri({mode:"visible",children:r.children},l,0,null),i=cn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,o),t.child.memoizedState=Ca(o),t.memoizedState=Sa,i);if(!(t.mode&1))return tl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(C(419)),r=Mi(i,r,void 0),tl(e,t,o,r)}if(u=(o&e.childLanes)!==0,Ie||u){if(r=pe,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,At(e,l),at(r,e,l,-1))}return Co(),r=Mi(Error(C(421))),tl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,De=Vt(l.nextSibling),Be=t,Z=!0,lt=null,e!==null&&(Xe[Ke++]=wt,Xe[Ke++]=kt,Xe[Ke++]=fn,wt=e.id,kt=e.overflow,fn=t),t=yo(t,r.children),t.flags|=4096,t)}function Is(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),va(e.return,t,n)}function Ii(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Vc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Ne(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Is(e,n,t);else if(e.tag===19)Is(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ee,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Rl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ii(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Rl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ii(t,!0,n,null,i);break;case"together":Ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sp(e,t,n){switch(t.tag){case 3:$c(t),Vn();break;case 5:hc(t);break;case 1:ze(t.type)&&Pl(t);break;case 4:uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;X(bl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Hc(e,t,n):(X(ee,ee.current&1),e=Et(e,t,n),e!==null?e.sibling:null);X(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Dc(e,t,n)}return Et(e,t,n)}var Gc,Na,Uc,Qc;Gc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Na=function(){};Uc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,sn(gt.current);var i=null;switch(n){case"input":l=Wi(e,l),r=Wi(e,r),i=[];break;case"select":l=ne({},l,{value:void 0}),r=ne({},r,{value:void 0}),i=[];break;case"textarea":l=Yi(e,l),r=Yi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jl)}Zi(n,r);var o;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(xr.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var d=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&d!==u&&(d!=null||u!=null))if(p==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(i||(i=[]),i.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(i=i||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(xr.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&Y("scroll",e),i||u===d||(i=[])):(i=i||[]).push(p,d))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};Qc=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cp(e,t,n){var r=t.pendingProps;switch(no(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return ze(t.type)&&Tl(),_e(t),null;case 3:return r=t.stateNode,Un(),J(be),J(Se),fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(ba(lt),lt=null))),Na(e,t),_e(t),null;case 5:co(t);var l=sn(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return _e(t),null}if(e=sn(gt.current),qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[Tr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(l=0;l<ur.length;l++)Y(ur[l],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":$o(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Vo(r,i),Y("invalid",r)}Zi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),l=["children",""+u]):xr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":Gr(r),Ho(r,i,!0);break;case"textarea":Gr(r),Go(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=jl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[Tr]=r,Gc(e,t,!1,!1),t.stateNode=e;e:{switch(o=qi(n,r),n){case"dialog":Y("cancel",e),Y("close",e),l=r;break;case"iframe":case"object":case"embed":Y("load",e),l=r;break;case"video":case"audio":for(l=0;l<ur.length;l++)Y(ur[l],e);l=r;break;case"source":Y("error",e),l=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),l=r;break;case"details":Y("toggle",e),l=r;break;case"input":$o(e,r),l=Wi(e,r),Y("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ne({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Vo(e,r),l=Yi(e,r),Y("invalid",e);break;default:l=r}Zi(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var d=u[i];i==="style"?Su(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&wu(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&_r(e,d):typeof d=="number"&&_r(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xr.hasOwnProperty(i)?d!=null&&i==="onScroll"&&Y("scroll",e):d!=null&&$a(e,i,d,o))}switch(n){case"input":Gr(e),Ho(e,r,!1);break;case"textarea":Gr(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ln(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)Qc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=sn(Mr.current),sn(gt.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return _e(t),null;case 13:if(J(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&De!==null&&t.mode&1&&!(t.flags&128))cc(),Vn(),t.flags|=98560,i=!1;else if(i=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[pt]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else lt!==null&&(ba(lt),lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):Co())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return Un(),Na(e,t),e===null&&Er(t.stateNode.containerInfo),_e(t),null;case 10:return ao(t.type._context),_e(t),null;case 17:return ze(t.type)&&Tl(),_e(t),null;case 19:if(J(ee),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)lr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Rl(e),o!==null){for(t.flags|=128,lr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>Wn&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Rl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return _e(t),null}else 2*ie()-i.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=ee.current,X(ee,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return So(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Np(e,t){switch(no(t),t.tag){case 1:return ze(t.type)&&Tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),J(be),J(Se),fo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return co(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return Un(),null;case 10:return ao(t.type._context),null;case 22:case 23:return So(),null;case 24:return null;default:return null}}var nl=!1,ke=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,j=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Aa(e,t,n){try{n()}catch(r){re(e,t,r)}}var bs=!1;function Ep(e,t){if(ua=Nl,e=Ju(),eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,p=0,_=0,a=e,s=null;t:for(;;){for(var c;a!==n||l!==0&&a.nodeType!==3||(u=o+l),a!==i||r!==0&&a.nodeType!==3||(d=o+r),a.nodeType===3&&(o+=a.nodeValue.length),(c=a.firstChild)!==null;)s=a,a=c;for(;;){if(a===e)break t;if(s===n&&++p===l&&(u=o),s===i&&++_===r&&(d=o),(c=a.nextSibling)!==null)break;a=s,s=a.parentNode}a=c}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ca={focusedElem:e,selectionRange:n},Nl=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:nt(t.type,y),w);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){re(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=bs,bs=!1,g}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Aa(t,n,i)}l=l.next}while(l!==r)}}function ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wc(e){var t=e.alternate;t!==null&&(e.alternate=null,Wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Tr],delete t[pa],delete t[up],delete t[cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jl));else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}var me=null,rt=!1;function bt(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:ke||In(n,t);case 6:var r=me,l=rt;me=null,bt(e,t,n),me=r,rt=l,me!==null&&(rt?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(rt?(e=me,n=n.stateNode,e.nodeType===8?Ni(e.parentNode,n):e.nodeType===1&&Ni(e,n),Cr(e)):Ni(me,n.stateNode));break;case 4:r=me,l=rt,me=n.stateNode.containerInfo,rt=!0,bt(e,t,n),me=r,rt=l;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Aa(n,t,o),l=l.next}while(l!==r)}bt(e,t,n);break;case 1:if(!ke&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){re(n,t,u)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,bt(e,t,n),ke=r):bt(e,t,n);break;default:bt(e,t,n)}}function Ls(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ap),t.forEach(function(r){var l=Rp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:me=u.stateNode,rt=!1;break e;case 3:me=u.stateNode.containerInfo,rt=!0;break e;case 4:me=u.stateNode.containerInfo,rt=!0;break e}u=u.return}if(me===null)throw Error(C(160));Kc(i,o,l),me=null,rt=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(p){re(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yc(t,e),t=t.sibling}function Yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),dt(e),r&4){try{gr(3,e,e.return),ti(3,e)}catch(y){re(e,e.return,y)}try{gr(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:tt(t,e),dt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(tt(t,e),dt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var l=e.stateNode;try{_r(l,"")}catch(y){re(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&yu(l,i),qi(u,o);var p=qi(u,i);for(o=0;o<d.length;o+=2){var _=d[o],a=d[o+1];_==="style"?Su(l,a):_==="dangerouslySetInnerHTML"?wu(l,a):_==="children"?_r(l,a):$a(l,_,a,p)}switch(u){case"input":Xi(l,i);break;case"textarea":xu(l,i);break;case"select":var s=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var c=i.value;c!=null?Ln(l,!!i.multiple,c,!1):s!==!!i.multiple&&(i.defaultValue!=null?Ln(l,!!i.multiple,i.defaultValue,!0):Ln(l,!!i.multiple,i.multiple?[]:"",!1))}l[Tr]=i}catch(y){re(e,e.return,y)}}break;case 6:if(tt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){re(e,e.return,y)}}break;case 3:if(tt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:tt(t,e),dt(e);break;case 13:tt(t,e),dt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(wo=ie())),r&4&&Ls(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(p=ke)||_,tt(t,e),ke=p):tt(t,e),dt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!_&&e.mode&1)for(j=e,_=e.child;_!==null;){for(a=j=_;j!==null;){switch(s=j,c=s.child,s.tag){case 0:case 11:case 14:case 15:gr(4,s,s.return);break;case 1:In(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:In(s,s.return);break;case 22:if(s.memoizedState!==null){Os(a);continue}}c!==null?(c.return=s,j=c):Os(a)}_=_.sibling}e:for(_=null,a=e;;){if(a.tag===5){if(_===null){_=a;try{l=a.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=a.stateNode,d=a.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=ku("display",o))}catch(y){re(e,e.return,y)}}}else if(a.tag===6){if(_===null)try{a.stateNode.nodeValue=p?"":a.memoizedProps}catch(y){re(e,e.return,y)}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;_===a&&(_=null),a=a.return}_===a&&(_=null),a.sibling.return=a.return,a=a.sibling}}break;case 19:tt(t,e),dt(e),r&4&&Ls(e);break;case 21:break;default:tt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(_r(l,""),r.flags&=-33);var i=zs(e);Ta(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=zs(e);ja(e,u,o);break;default:throw Error(C(161))}}catch(d){re(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e,t,n){j=e,Jc(e)}function Jc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||nl;if(!o){var u=l.alternate,d=u!==null&&u.memoizedState!==null||ke;u=nl;var p=ke;if(nl=o,(ke=d)&&!p)for(j=l;j!==null;)o=j,d=o.child,o.tag===22&&o.memoizedState!==null?Fs(l):d!==null?(d.return=o,j=d):Fs(l);for(;i!==null;)j=i,Jc(i),i=i.sibling;j=l,nl=u,ke=p}Rs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):Rs(e)}}function Rs(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||ti(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&_s(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_s(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var _=p.memoizedState;if(_!==null){var a=_.dehydrated;a!==null&&Cr(a)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ke||t.flags&512&&Ea(t)}catch(s){re(t,t.return,s)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Os(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Fs(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ti(4,t)}catch(d){re(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){re(t,l,d)}}var i=t.return;try{Ea(t)}catch(d){re(t,i,d)}break;case 5:var o=t.return;try{Ea(t)}catch(d){re(t,o,d)}}}catch(d){re(t,t.return,d)}if(t===e){j=null;break}var u=t.sibling;if(u!==null){u.return=t.return,j=u;break}j=t.return}}var Tp=Math.ceil,Dl=jt.ReactCurrentDispatcher,xo=jt.ReactCurrentOwner,Je=jt.ReactCurrentBatchConfig,D=0,pe=null,oe=null,he=0,Fe=0,bn=Jt(0),ce=0,Lr=null,mn=0,ni=0,_o=0,vr=null,Me=null,wo=0,Wn=1/0,xt=null,Bl=!1,Pa=null,Ut=null,rl=!1,Dt=null,$l=0,yr=0,Ma=null,vl=-1,yl=0;function Ae(){return D&6?ie():vl!==-1?vl:vl=ie()}function Qt(e){return e.mode&1?D&2&&he!==0?he&-he:fp.transition!==null?(yl===0&&(yl=Lu()),yl):(e=U,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function at(e,t,n,r){if(50<yr)throw yr=0,Ma=null,Error(C(185));Fr(e,n,r),(!(D&2)||e!==pe)&&(e===pe&&(!(D&2)&&(ni|=n),ce===4&&Ot(e,he)),Le(e,r),n===1&&D===0&&!(t.mode&1)&&(Wn=ie()+500,Zl&&Zt()))}function Le(e,t){var n=e.callbackNode;ff(e,t);var r=Cl(e,e===pe?he:0);if(r===0)n!==null&&Wo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wo(n),t===1)e.tag===0?dp(Ds.bind(null,e)):oc(Ds.bind(null,e)),op(function(){!(D&6)&&Zt()}),n=null;else{switch(Ru(r)){case 1:n=Qa;break;case 4:n=bu;break;case 16:n=Sl;break;case 536870912:n=zu;break;default:n=Sl}n=id(n,Zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zc(e,t){if(vl=-1,yl=0,D&6)throw Error(C(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=Cl(e,e===pe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hl(e,r);else{t=r;var l=D;D|=2;var i=ed();(pe!==e||he!==t)&&(xt=null,Wn=ie()+500,un(e,t));do try{Ip();break}catch(u){qc(e,u)}while(!0);io(),Dl.current=i,D=l,oe!==null?t=0:(pe=null,he=0,t=ce)}if(t!==0){if(t===2&&(l=la(e),l!==0&&(r=l,t=Ia(e,l))),t===1)throw n=Lr,un(e,0),Ot(e,r),Le(e,ie()),n;if(t===6)Ot(e,r);else{if(l=e.current.alternate,!(r&30)&&!Pp(l)&&(t=Hl(e,r),t===2&&(i=la(e),i!==0&&(r=i,t=Ia(e,i))),t===1))throw n=Lr,un(e,0),Ot(e,r),Le(e,ie()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:nn(e,Me,xt);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=wo+500-ie(),10<t)){if(Cl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=fa(nn.bind(null,e,Me,xt),t);break}nn(e,Me,xt);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-it(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tp(r/1960))-r,10<r){e.timeoutHandle=fa(nn.bind(null,e,Me,xt),r);break}nn(e,Me,xt);break;case 5:nn(e,Me,xt);break;default:throw Error(C(329))}}}return Le(e,ie()),e.callbackNode===n?Zc.bind(null,e):null}function Ia(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=Hl(e,t),e!==2&&(t=Me,Me=n,t!==null&&ba(t)),e}function ba(e){Me===null?Me=e:Me.push.apply(Me,e)}function Pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!ot(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~_o,t&=~ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Ds(e){if(D&6)throw Error(C(327));Bn();var t=Cl(e,0);if(!(t&1))return Le(e,ie()),null;var n=Hl(e,t);if(e.tag!==0&&n===2){var r=la(e);r!==0&&(t=r,n=Ia(e,r))}if(n===1)throw n=Lr,un(e,0),Ot(e,t),Le(e,ie()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Me,xt),Le(e,ie()),null}function ko(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Wn=ie()+500,Zl&&Zt())}}function hn(e){Dt!==null&&Dt.tag===0&&!(D&6)&&Bn();var t=D;D|=1;var n=Je.transition,r=U;try{if(Je.transition=null,U=1,e)return e()}finally{U=r,Je.transition=n,D=t,!(D&6)&&Zt()}}function So(){Fe=bn.current,J(bn)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ap(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(no(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Un(),J(be),J(Se),fo();break;case 5:co(r);break;case 4:Un();break;case 13:J(ee);break;case 19:J(ee);break;case 10:ao(r.type._context);break;case 22:case 23:So()}n=n.return}if(pe=e,oe=e=Wt(e.current,null),he=Fe=t,ce=0,Lr=null,_o=ni=mn=0,Me=vr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}on=null}return e}function qc(e,t){do{var n=oe;try{if(io(),ml.current=Fl,Ol){for(var r=te.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ol=!1}if(pn=0,fe=ue=te=null,hr=!1,Ir=0,xo.current=null,n===null||n.return===null){ce=1,Lr=t,oe=null;break}e:{var i=e,o=n.return,u=n,d=t;if(t=he,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,_=u,a=_.tag;if(!(_.mode&1)&&(a===0||a===11||a===15)){var s=_.alternate;s?(_.updateQueue=s.updateQueue,_.memoizedState=s.memoizedState,_.lanes=s.lanes):(_.updateQueue=null,_.memoizedState=null)}var c=As(o);if(c!==null){c.flags&=-257,Es(c,o,u,i,t),c.mode&1&&Ns(i,p,t),t=c,d=p;var g=t.updateQueue;if(g===null){var y=new Set;y.add(d),t.updateQueue=y}else g.add(d);break e}else{if(!(t&1)){Ns(i,p,t),Co();break e}d=Error(C(426))}}else if(Z&&u.mode&1){var w=As(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Es(w,o,u,i,t),ro(Qn(d,u));break e}}i=d=Qn(d,u),ce!==4&&(ce=2),vr===null?vr=[i]:vr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Rc(i,d,t);xs(i,f);break e;case 1:u=d;var h=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ut===null||!Ut.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Oc(i,u,t);xs(i,k);break e}}i=i.return}while(i!==null)}nd(n)}catch(S){t=S,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function ed(){var e=Dl.current;return Dl.current=Fl,e===null?Fl:e}function Co(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(mn&268435455)&&!(ni&268435455)||Ot(pe,he)}function Hl(e,t){var n=D;D|=2;var r=ed();(pe!==e||he!==t)&&(xt=null,un(e,t));do try{Mp();break}catch(l){qc(e,l)}while(!0);if(io(),D=n,Dl.current=r,oe!==null)throw Error(C(261));return pe=null,he=0,ce}function Mp(){for(;oe!==null;)td(oe)}function Ip(){for(;oe!==null&&!nf();)td(oe)}function td(e){var t=ld(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?nd(e):oe=t,xo.current=null}function nd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Np(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,oe=null;return}}else if(n=Cp(n,t,Fe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ce===0&&(ce=5)}function nn(e,t,n){var r=U,l=Je.transition;try{Je.transition=null,U=1,bp(e,t,n,r)}finally{Je.transition=l,U=r}return null}function bp(e,t,n,r){do Bn();while(Dt!==null);if(D&6)throw Error(C(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(pf(e,i),e===pe&&(oe=pe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,id(Sl,function(){return Bn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Je.transition,Je.transition=null;var o=U;U=1;var u=D;D|=4,xo.current=null,Ep(e,n),Yc(n,e),qf(ca),Nl=!!ua,ca=ua=null,e.current=n,jp(n),rf(),D=u,U=o,Je.transition=i}else e.current=n;if(rl&&(rl=!1,Dt=e,$l=l),i=e.pendingLanes,i===0&&(Ut=null),of(n.stateNode),Le(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Bl)throw Bl=!1,e=Pa,Pa=null,e;return $l&1&&e.tag!==0&&Bn(),i=e.pendingLanes,i&1?e===Ma?yr++:(yr=0,Ma=e):yr=0,Zt(),null}function Bn(){if(Dt!==null){var e=Ru($l),t=Je.transition,n=U;try{if(Je.transition=null,U=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,$l=0,D&6)throw Error(C(331));var l=D;for(D|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var u=i.deletions;if(u!==null){for(var d=0;d<u.length;d++){var p=u[d];for(j=p;j!==null;){var _=j;switch(_.tag){case 0:case 11:case 15:gr(8,_,i)}var a=_.child;if(a!==null)a.return=_,j=a;else for(;j!==null;){_=j;var s=_.sibling,c=_.return;if(Wc(_),_===p){j=null;break}if(s!==null){s.return=c,j=s;break}j=c}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var h=e.current;for(j=h;j!==null;){o=j;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,j=v;else e:for(o=h;j!==null;){if(u=j,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ti(9,u)}}catch(S){re(u,u.return,S)}if(u===o){j=null;break e}var k=u.sibling;if(k!==null){k.return=u.return,j=k;break e}j=u.return}}if(D=l,Zt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Wl,e)}catch{}r=!0}return r}finally{U=n,Je.transition=t}}return!1}function Bs(e,t,n){t=Qn(n,t),t=Rc(e,t,1),e=Gt(e,t,1),t=Ae(),e!==null&&(Fr(e,1,t),Le(e,t))}function re(e,t,n){if(e.tag===3)Bs(e,e,n);else for(;t!==null;){if(t.tag===3){Bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Qn(n,e),e=Oc(t,e,1),t=Gt(t,e,1),e=Ae(),t!==null&&(Fr(t,1,e),Le(t,e));break}}t=t.return}}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>ie()-wo?un(e,0):_o|=n),Le(e,t)}function rd(e,t){t===0&&(e.mode&1?(t=Wr,Wr<<=1,!(Wr&130023424)&&(Wr=4194304)):t=1);var n=Ae();e=At(e,t),e!==null&&(Fr(e,t,n),Le(e,n))}function Lp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rd(e,n)}function Rp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),rd(e,n)}var ld;ld=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Sp(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,Z&&t.flags&1048576&&sc(t,Il,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gl(e,t),e=t.pendingProps;var l=Hn(t,Se.current);Dn(t,n),l=mo(null,t,r,e,l,n);var i=ho();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,Pl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,so(t),l.updater=ei,t.stateNode=l,l._reactInternals=t,xa(t,r,e,n),t=ka(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&to(t),Ne(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Fp(r),e=nt(r,e),l){case 0:t=wa(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=js(null,t,r,e,n);break e;case 14:t=Ts(null,t,r,nt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),wa(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),Ps(e,t,r,l,n);case 3:e:{if($c(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,l=i.element,mc(e,t),Ll(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Qn(Error(C(423)),t),t=Ms(e,t,r,n,l);break e}else if(r!==l){l=Qn(Error(C(424)),t),t=Ms(e,t,r,n,l);break e}else for(De=Vt(t.stateNode.containerInfo.firstChild),Be=t,Z=!0,lt=null,n=fc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===l){t=Et(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return hc(t),e===null&&ga(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,da(r,l)?o=null:i!==null&&da(r,i)&&(t.flags|=32),Bc(e,t),Ne(e,t,o,n),t.child;case 6:return e===null&&ga(t),null;case 13:return Hc(e,t,n);case 4:return uo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),js(e,t,r,l,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,X(bl,r._currentValue),r._currentValue=o,i!==null)if(ot(i.value,o)){if(i.children===l.children&&!be.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=St(-1,n&-n),d.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var _=p.pending;_===null?d.next=d:(d.next=_.next,_.next=d),p.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),va(i.return,n,t),u.lanes|=n;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(C(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),va(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ne(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Dn(t,n),l=Ze(l),r=r(l),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,l=nt(r,t.pendingProps),l=nt(r.type,l),Ts(e,t,r,l,n);case 15:return Fc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),gl(e,t),t.tag=1,ze(r)?(e=!0,Pl(t)):e=!1,Dn(t,n),Lc(t,r,l),xa(t,r,l,n),ka(null,t,r,!0,e,n);case 19:return Vc(e,t,n);case 22:return Dc(e,t,n)}throw Error(C(156,t.tag))};function id(e,t){return Iu(e,t)}function Op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new Op(e,t,n,r)}function No(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return No(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Va)return 11;if(e===Ga)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")No(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return cn(n.children,l,i,t);case Ha:o=8,l|=8;break;case Vi:return e=Ye(12,n,t,l|2),e.elementType=Vi,e.lanes=i,e;case Gi:return e=Ye(13,n,t,l),e.elementType=Gi,e.lanes=i,e;case Ui:return e=Ye(19,n,t,l),e.elementType=Ui,e.lanes=i,e;case hu:return ri(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pu:o=10;break e;case mu:o=9;break e;case Va:o=11;break e;case Ga:o=14;break e;case zt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ye(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function ri(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=hu,e.lanes=n,e.stateNode={isHidden:!1},e}function bi(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function zi(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ao(e,t,n,r,l,i,o,u,d){return e=new Dp(e,t,n,u,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},so(i),e}function Bp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ad(e){if(!e)return Kt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ze(n))return ac(e,n,t)}return t}function od(e,t,n,r,l,i,o,u,d){return e=Ao(n,r,!0,e,l,i,o,u,d),e.context=ad(null),n=e.current,r=Ae(),l=Qt(n),i=St(r,l),i.callback=t??null,Gt(n,i,l),e.current.lanes=l,Fr(e,l,r),Le(e,r),e}function li(e,t,n,r){var l=t.current,i=Ae(),o=Qt(l);return n=ad(n),t.context===null?t.context=n:t.pendingContext=n,t=St(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(l,t,o),e!==null&&(at(e,l,o,i),pl(e,l,o)),o}function Vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $s(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eo(e,t){$s(e,t),(e=e.alternate)&&$s(e,t)}function $p(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}ii.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));li(e,t,null,null)};ii.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){li(null,e,null,null)}),t[Nt]=null}};function ii(e){this._internalRoot=e}ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=Du();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&$u(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hs(){}function Hp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var p=Vl(o);i.call(p)}}var o=od(t,r,e,0,null,!1,!1,"",Hs);return e._reactRootContainer=o,e[Nt]=o.current,Er(e.nodeType===8?e.parentNode:e),hn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var p=Vl(d);u.call(p)}}var d=Ao(e,0,!1,null,null,!1,!1,"",Hs);return e._reactRootContainer=d,e[Nt]=d.current,Er(e.nodeType===8?e.parentNode:e),hn(function(){li(t,d,n,r)}),d}function oi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var d=Vl(o);u.call(d)}}li(t,o,e,l)}else o=Hp(n,t,e,l,r);return Vl(o)}Ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Wa(t,n|1),Le(t,ie()),!(D&6)&&(Wn=ie()+500,Zt()))}break;case 13:hn(function(){var r=At(e,1);if(r!==null){var l=Ae();at(r,e,1,l)}}),Eo(e,1)}};Xa=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ae();at(t,e,134217728,n)}Eo(e,134217728)}};Fu=function(e){if(e.tag===13){var t=Qt(e),n=At(e,t);if(n!==null){var r=Ae();at(n,e,t,r)}Eo(e,t)}};Du=function(){return U};Bu=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ta=function(e,t,n){switch(t){case"input":if(Xi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Jl(r);if(!l)throw Error(C(90));vu(r),Xi(r,l)}}}break;case"textarea":xu(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Au=ko;Eu=hn;var Vp={usingClientEntryPoint:!1,Events:[Br,En,Jl,Cu,Nu,ko]},ir={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gp={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||$p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Wl=ll.inject(Gp),ht=ll}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(t))throw Error(C(200));return Bp(e,t,null,n)};He.createRoot=function(e,t){if(!To(e))throw Error(C(299));var n=!1,r="",l=sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ao(e,1,!1,null,null,n,!1,r,l),e[Nt]=t.current,Er(e.nodeType===8?e.parentNode:e),new jo(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Pu(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return hn(e)};He.hydrate=function(e,t,n){if(!ai(t))throw Error(C(200));return oi(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!To(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=sd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=od(t,null,e,1,n??null,l,!1,i,o),e[Nt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ii(t)};He.render=function(e,t,n){if(!ai(t))throw Error(C(200));return oi(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!ai(e))throw Error(C(40));return e._reactRootContainer?(hn(function(){oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};He.unstable_batchedUpdates=ko;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ai(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return oi(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud)}catch(e){console.error(e)}}ud(),uu.exports=He;var Up=uu.exports,Vs=Up;$i.createRoot=Vs.createRoot,$i.hydrateRoot=Vs.hydrateRoot;const Gs=({onStart:e,onSettings:t,onHelp:n})=>m.jsxs("div",{className:"cg-main-menu",children:[m.jsxs("div",{className:"cg-menu-bg",children:[m.jsx("div",{className:"cg-menu-bg-gradient"}),m.jsx("div",{className:"cg-menu-bg-pattern"}),m.jsx("div",{className:"cg-menu-geass-symbols",children:m.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:m.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),m.jsxs("div",{className:"cg-menu-content",children:[m.jsxs("div",{className:"cg-menu-header",children:[m.jsxs("div",{className:"cg-menu-title-decoration",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:m.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),m.jsx("div",{className:"cg-title-line-right"})]}),m.jsxs("h1",{className:"cg-game-title",children:[m.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),m.jsx("span",{className:"cg-title-divider",children:":"}),m.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),m.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),m.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[m.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),m.jsx("div",{className:"cg-title-line-right"})]})]}),m.jsxs("nav",{className:"cg-menu-nav",children:[m.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("span",{className:"cg-button-text",children:"开始游戏"}),m.jsx("div",{className:"cg-button-shimmer"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:t,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),m.jsx("span",{className:"cg-button-text",children:"设置"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),m.jsx("footer",{className:"cg-menu-footer",children:m.jsx("div",{className:"cg-footer-decoration",children:m.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),m.jsx("style",{children:`
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
      `})]}),Rr=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function Qp(e){return Rr.find(t=>t.id===e)}function we(e){if(!e)return"未知角色";const t=Qp(e);return(t==null?void 0:t.name)||e}const Wp=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},Xp=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let Li=null;const Gl=()=>(Li===null&&(Li=Wp()),Li),Kp=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:l})=>{const[i,o]=P.useState(!1),[u,d]=P.useState(r),[p,_]=P.useState(!1),[a,s]=P.useState(!0),c=P.useRef(null),g=P.useRef(null),[y]=P.useState(()=>Math.floor(Math.random()*4)+1),w=n||y,f=P.useMemo(()=>Xp(t),[t]),h=P.useCallback((v=!0)=>`${`avatars/${e}/${w}`}-${f}.${v?"webp":"png"}`,[e,w,f]);return P.useEffect(()=>{if(r||u)return;const v=new IntersectionObserver(S=>{S.forEach(x=>{x.isIntersecting&&d(!0)})},{rootMargin:"50px",threshold:.1}),k=g.current;return k&&v.observe(k),()=>{k&&v.unobserve(k),v.disconnect()}},[r,u]),P.useEffect(()=>{if(!u)return;(async()=>{if(Gl()&&a){const S=new Image;S.src=h(!0),S.onload=()=>{o(!0),l==null||l()},S.onerror=()=>{s(!1)}}else{const S=new Image;S.src=h(!1),S.onload=()=>{o(!0),l==null||l()},S.onerror=()=>{_(!0)}}})()},[u,h,l,a]),m.jsxs("div",{ref:g,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"transparent",position:"relative"},children:[!i&&!p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},children:m.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#dc2626",fontSize:t*.2},children:"?"}),u&&m.jsxs("picture",{children:[Gl()&&a&&m.jsx("source",{srcSet:h(!0),type:"image/webp"}),m.jsx("img",{ref:c,src:h(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:i?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),m.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class Ul{static preloadCharacter(t){const n=["small","medium","large"],r=Gl();for(let l=1;l<=4;l++)n.forEach(i=>{const o=`avatars/${t}/${l}-${i}.webp`,u=`avatars/${t}/${l}-${i}.png`;if(r&&!this.preloadedAvatars.has(o)){const d=new Image;d.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(u)){const d=new Image;d.src=u,this.preloadedAvatars.add(u)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(Gl()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const u=new Image;u.src=o,this.preloadedAvatars.add(o)}}const i=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(i)){const o=new Image;o.src=i,this.preloadedAvatars.add(i)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}de(Ul,"preloadedAvatars",new Set);const Po=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>m.jsx(Kp,{characterId:e,size:t,avatarNumber:n??1,priority:r}),Yp=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,i]=P.useState(null),[o]=P.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),u=Rr.find(p=>p.id===e);P.useEffect(()=>{e&&Ul.preloadAvatar(e,o[e])},[e,o]);const d=p=>{const _=o[p];t(p,_)};return m.jsxs("div",{className:"cg-character-select",children:[m.jsxs("div",{className:"cg-select-bg",children:[m.jsx("div",{className:"cg-select-bg-gradient"}),m.jsx("div",{className:"cg-select-bg-pattern"})]}),m.jsxs("div",{className:"cg-select-content",children:[m.jsxs("header",{className:"cg-select-header",children:[m.jsxs("button",{className:"cg-back-button",onClick:r,children:[m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),m.jsx("span",{children:"返回"})]}),m.jsx("h2",{className:"cg-select-title",children:m.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),m.jsx("div",{className:"cg-select-placeholder"})]}),m.jsx("div",{className:"cg-character-grid",children:Rr.map(p=>{const _=e===p.id,a=l===p.id;return m.jsxs("div",{className:`cg-character-card ${_?"cg-selected":""} ${a?"cg-hovered":""}`,onClick:()=>d(p.id),onMouseEnter:()=>i(p.id),onMouseLeave:()=>i(null),children:[m.jsxs("div",{className:"cg-card-frame",children:[m.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),m.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),m.jsx("div",{className:"cg-character-preview",children:m.jsx(Po,{characterId:p.id,size:300,avatarNumber:o[p.id],priority:l===p.id||e===p.id})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("h3",{className:"cg-character-name",children:p.name}),m.jsx("p",{className:"cg-character-name-en",children:p.nameEn}),m.jsx("div",{className:"cg-character-skill",children:m.jsx("span",{className:"cg-skill-name",children:p.skill.name})})]}),_&&m.jsx("div",{className:"cg-selected-indicator",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:m.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),m.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${p.color}40 0%, transparent 70%)`}})]},p.id)})}),u&&m.jsx("div",{className:"cg-character-detail",children:m.jsxs("div",{className:"cg-detail-frame",children:[m.jsxs("div",{className:"cg-detail-content",children:[m.jsx("p",{className:"cg-detail-description",children:u.description}),m.jsxs("div",{className:"cg-detail-skill",children:[m.jsx("span",{className:"cg-skill-label",children:"技能:"}),m.jsx("span",{className:"cg-skill-value",children:u.skill.name}),m.jsx("p",{className:"cg-skill-desc",children:u.skill.description})]})]}),m.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[m.jsx("span",{children:"确认选择"}),m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),m.jsx("style",{children:`
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
      `})]})},Jp="/liars-game/assets/cards/card-back.svg",il=e=>{if(!e)return"#d4af37";const t=Rr.find(n=>n.id===e);return(t==null?void 0:t.color)||"#d4af37"},Zp=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:l=["cc","suzaku","kallen"],aiAvatars:i={},onToggleCardSelection:o,onConfirmPlay:u,onPass:d,onChallenge:p,onBackToMenu:_,onLelouchSkill:a,gameLog:s=[],isProcessing:c=!1,canUseSkill:g=!0})=>{var W,q,vt,Ue,Pt,Qe,L,T,R,H,V,G,K,B,$,ve,Oe,et,Ce,Mt,le,Q,yn,Pe,st,ut,It,ct,xn,ye,Mo,Io,bo,zo;const[y,w]=P.useState(!1),f=P.useRef(null),h=P.useRef(s.length);if(P.useEffect(()=>{if(f.current&&s.length>h.current){const O=f.current;O.scrollTo({top:O.scrollHeight,behavior:"smooth"})}h.current=s.length},[s]),P.useEffect(()=>{n&&Ul.preloadAvatar(n,r),l.forEach(O=>{const We=i[O]||1;Ul.preloadAvatar(O,We)})},[n,r,l,i]),!e)return null;const{phase:v,liarCard:k,playerStats:S,aiPlayers:x,turnState:N}=e,A=v==="player_turn",M=v==="challenge",I=e.playerHand||[],se=(N==null?void 0:N.turnNumber)||1,Te=M,Ge=()=>{t.length>0&&u()},Re=()=>w(!0),qt=O=>{w(!1),a==null||a(O)},en=O=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[O]||O,Tt=O=>O==="joker"?"#d4af37":O==="hearts"||O==="diamonds"?"#dc2626":"#1a1a24",E=we(n??void 0),b=il(n),z=(O,We,_n,cd,dd,fd,pd=!1,md=!0)=>m.jsxs("div",{className:`cg-character ${pd?"cg-character-top":""} ${md?"":"cg-character-dead"}`,children:[m.jsx("div",{className:"cg-character-avatar",children:We&&m.jsx(Po,{characterId:We,size:120,avatarNumber:fd,priority:!0})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("div",{className:"cg-character-name",style:{color:dd},children:O}),m.jsxs("div",{className:"cg-character-stats",children:[m.jsx("span",{children:Array(_n).fill("❤️").join("")}),m.jsxs("span",{className:"cg-card-count",children:["🃏",cd]})]})]})]});return m.jsxs("div",{className:"cg-game-table",children:[m.jsxs("div",{className:"cg-main-layout",children:[m.jsxs("div",{className:"cg-log-panel",children:[m.jsx("div",{className:"cg-log-header",children:"📜 游戏记录"}),m.jsx("div",{ref:f,className:"cg-log-content",children:s.map((O,We)=>m.jsx("div",{className:`cg-log-item ${O.includes("质疑")?"challenge":""} ${O.includes("Geass")?"geass":""}`,children:O},We))})]}),m.jsxs("div",{className:"cg-game-area",children:[m.jsx("div",{className:"cg-ai-top",children:z(we(((W=x==null?void 0:x[1])==null?void 0:W.character)||l[1]),((q=x==null?void 0:x[1])==null?void 0:q.character)||l[1],((Ue=(vt=x==null?void 0:x[1])==null?void 0:vt.stats)==null?void 0:Ue.hp)||0,((Qe=(Pt=x==null?void 0:x[1])==null?void 0:Pt.hand)==null?void 0:Qe.length)||0,il(((L=x==null?void 0:x[1])==null?void 0:L.character)||l[1]),i[((T=x==null?void 0:x[1])==null?void 0:T.character)||l[1]]||1,!0,((R=x==null?void 0:x[1])==null?void 0:R.isActive)!==!1&&(((V=(H=x==null?void 0:x[1])==null?void 0:H.stats)==null?void 0:V.hp)||0)>0)}),m.jsxs("div",{className:"cg-middle-section",children:[m.jsx("div",{className:"cg-ai-left",children:z(we(((G=x==null?void 0:x[2])==null?void 0:G.character)||l[2]),((K=x==null?void 0:x[2])==null?void 0:K.character)||l[2],(($=(B=x==null?void 0:x[2])==null?void 0:B.stats)==null?void 0:$.hp)||0,((Oe=(ve=x==null?void 0:x[2])==null?void 0:ve.hand)==null?void 0:Oe.length)||0,il(((et=x==null?void 0:x[2])==null?void 0:et.character)||l[2]),i[((Ce=x==null?void 0:x[2])==null?void 0:Ce.character)||l[2]]||1,!1,((Mt=x==null?void 0:x[2])==null?void 0:Mt.isActive)!==!1&&(((Q=(le=x==null?void 0:x[2])==null?void 0:le.stats)==null?void 0:Q.hp)||0)>0)}),m.jsx("div",{className:"cg-table-area",children:m.jsx("div",{className:"cg-table",children:m.jsx("div",{className:"cg-table-inner",children:N!=null&&N.playedCards?m.jsxs("div",{className:"cg-played",children:[m.jsxs("div",{className:"cg-played-name",children:[N.playedCards.playerId==="player"?E:N.playedCards.playerId.startsWith("ai")?we(((yn=x==null?void 0:x.find(O=>{var We;return O.id===((We=N.playedCards)==null?void 0:We.playerId)}))==null?void 0:yn.character)||"cc"):"未知玩家"," ","出牌"]}),m.jsx("div",{className:"cg-cards",children:N.playedCards.actualCards.map(O=>m.jsx("div",{className:"cg-card-small cg-card-back",children:m.jsx("img",{src:Jp,alt:"牌背"})},O.id))}),m.jsxs("div",{className:"cg-card-count-display",children:[N.playedCards.cardIds.length," 张牌"]})]}):m.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),m.jsx("div",{className:"cg-ai-right",children:z(we(((Pe=x==null?void 0:x[0])==null?void 0:Pe.character)||l[0]),((st=x==null?void 0:x[0])==null?void 0:st.character)||l[0],((It=(ut=x==null?void 0:x[0])==null?void 0:ut.stats)==null?void 0:It.hp)||0,((xn=(ct=x==null?void 0:x[0])==null?void 0:ct.hand)==null?void 0:xn.length)||0,il(((ye=x==null?void 0:x[0])==null?void 0:ye.character)||l[0]),i[((Mo=x==null?void 0:x[0])==null?void 0:Mo.character)||l[0]]||1,!1,((Io=x==null?void 0:x[0])==null?void 0:Io.isActive)!==!1&&(((zo=(bo=x==null?void 0:x[0])==null?void 0:bo.stats)==null?void 0:zo.hp)||0)>0)})]}),m.jsxs("div",{className:"cg-player-section",children:[m.jsxs("div",{className:"cg-player-info",children:[z(E,n,S.hp,I.length,b,r),n==="lelouch"&&A&&m.jsx("button",{className:"cg-skill-btn",onClick:Re,disabled:c||!g,children:g?"绝对命令":"已使用"})]}),m.jsx("div",{className:"cg-hand-section",children:m.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,I.length*26+22)}px`},children:I.map((O,We)=>{const _n=t.includes(O.id);return m.jsxs("button",{className:`cg-card ${_n?"selected":""} ${!A||c?"disabled":""}`,onClick:()=>o(O.id),style:{left:`${We*26}px`,transform:_n?"translateY(-8px)":"none",zIndex:_n?I.length+10:I.length-We},disabled:!A||c,children:[m.jsxs("div",{className:"cg-card-face",children:[m.jsx("div",{style:{color:Tt(O.suit),fontSize:"13px"},children:O.rank}),m.jsx("div",{style:{color:Tt(O.suit),fontSize:"15px"},children:en(O.suit)})]}),_n&&m.jsx("div",{className:"cg-check",children:"✓"})]},O.id)})})})]})]})]}),m.jsxs("div",{className:"cg-bottom-bar",children:[m.jsx("div",{className:"cg-bottom-left",children:m.jsx("button",{className:"cg-back-btn",onClick:_,children:"← 返回主页面"})}),m.jsxs("div",{className:"cg-bottom-center",children:[!Te&&m.jsxs("div",{className:"cg-status-text",children:[A&&t.length===0&&"请选择要出的牌",A&&t.length>0&&`已选择 ${t.length} 张牌`,M&&!Te&&"等待其他玩家质疑...",!A&&!M&&"AI回合中..."]}),m.jsxs("div",{className:"cg-action-buttons",children:[A&&t.length>0&&m.jsxs("button",{className:"cg-btn cg-btn-play",onClick:Ge,disabled:c,children:["出牌 (",t.length,")"]}),Te&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:p,disabled:c,children:"⚔️ 质疑"}),m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:c,children:"不质疑"})]})]})]}),m.jsxs("div",{className:"cg-bottom-right",children:[m.jsxs("div",{className:"cg-round-display",children:[m.jsx("div",{className:"cg-round-label",children:"回合"}),m.jsx("div",{className:"cg-round-number",children:se})]}),m.jsxs("div",{className:"cg-liar-display",children:[m.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),m.jsx("div",{className:"cg-liar-value",children:k})]})]})]}),y&&m.jsx("div",{className:"cg-modal",children:m.jsxs("div",{className:"cg-modal-content",children:[m.jsx("h3",{children:"选择新的骗子牌"}),m.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(O=>m.jsx("button",{className:O===k?"current":"",onClick:()=>qt(O),children:O},O))}),m.jsx("button",{className:"cg-btn-skip",onClick:()=>w(!1),children:"取消"})]})}),m.jsx("style",{children:`
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

        /* 左侧游戏记录栏 */
        .cg-log-panel { 
          width: 240px; 
          min-width: 240px;
          background: rgba(0,0,0,0.5); 
          border-right: 1px solid rgba(212,175,55,0.2); 
          display: flex; 
          flex-direction: column;
          height: 100%;
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

        /* 中间游戏区域 */
        .cg-game-area { 
          flex: 1; 
          display: flex; 
          flex-direction: column;
          padding: 5px 20px;
          gap: 5px;
          overflow: hidden;
        }

        /* 顶部AI - 更靠近圆桌 */
        .cg-ai-top { 
          display: flex; 
          justify-content: center;
          height: 160px;
          margin-bottom: -10px;
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
          width: 130px;
          min-width: 130px;
          height: 170px;
          min-height: 170px;
          justify-content: flex-start;
          transition: all 0.3s ease;
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
          gap: 10px; 
          align-items: center; 
          justify-content: center;
          font-size: 12px; 
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
          padding: 4px 10px; 
          background: linear-gradient(135deg, #4c1d95, #7c3aed); 
          border: none; 
          border-radius: 4px; 
          color: white; 
          font-size: 11px; 
          cursor: pointer; 
          margin-top: 4px;
        }

        /* 手牌区域 - 位于角色右侧，层叠布局 */
        .cg-hand-section { 
          flex: 1;
          min-width: 150px;
          max-width: 400px;
          display: flex; 
          align-items: center;
          justify-content: center;
          height: 85px;
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
        @media (max-width: 768px) {
          .cg-log-panel { width: 160px; min-width: 160px; }
          .cg-character-avatar { transform: scale(0.85); }
          .cg-table { width: 160px; height: 160px; }
          .cg-table-inner { width: 135px; height: 135px; }
          .cg-bottom-bar { padding: 0 10px; height: 60px; }
          .cg-bottom-left, .cg-bottom-right { width: 100px; }
        }
      `})]})},qp=({isWin:e,playerScore:t,opponentScore:n,onRestart:r,onMainMenu:l})=>{const[i,o]=P.useState(!1),[u,d]=P.useState(!1);P.useEffect(()=>{e&&o(!0);const _=setTimeout(()=>d(!0),1e3);return()=>clearTimeout(_)},[e]);const p=e?"lelouch":"cc";return m.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[m.jsxs("div",{className:"cg-result-bg",children:[m.jsx("div",{className:"cg-result-bg-gradient"}),e?m.jsx("div",{className:"cg-result-bg-win",children:m.jsx("div",{className:"cg-victory-rays"})}):m.jsx("div",{className:"cg-result-bg-lose",children:m.jsx("div",{className:"cg-defeat-shadow"})})]}),i&&m.jsx(em,{}),m.jsxs("div",{className:`cg-result-content ${u?"cg-animate-in":""}`,children:[m.jsxs("div",{className:"cg-result-header",children:[m.jsx("div",{className:"cg-result-badge",children:e?m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((_,a)=>m.jsx("circle",{cx:50+35*Math.cos((a*72-90)*Math.PI/180),cy:50+35*Math.sin((a*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:m.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${a*.2}s`,repeatCount:"indefinite"})},a))]}):m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),m.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),m.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),m.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),m.jsx("div",{className:"cg-result-character",children:m.jsxs("div",{className:"cg-character-showcase",children:[m.jsx(Po,{characterId:p,size:200}),m.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),m.jsx("div",{className:"cg-result-score",children:m.jsxs("div",{className:"cg-score-simple",children:[m.jsx("span",{className:"cg-score-label",children:"回合数"}),m.jsx("span",{className:"cg-score-value",children:t+n})]})}),m.jsxs("div",{className:"cg-result-actions",children:[m.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:r,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),m.jsx("span",{children:"再来一局"})]}),m.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:l,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),m.jsx("span",{children:"返回主菜单"})]})]})]}),m.jsx("style",{children:`
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
      `})]})},em=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return m.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>m.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var yt={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var a=this||n;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var s=this||n;if(a=parseFloat(a),s.ctx||_(),typeof a<"u"&&a>=0&&a<=1){if(s._volume=a,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var w=s._howls[c]._soundById(g[y]);w&&w._node&&(w._node.volume=w._volume*a)}return s}return s._volume},mute:function(a){var s=this||n;s.ctx||_(),s._muted=a,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a?0:s._volume,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var w=s._howls[c]._soundById(g[y]);w&&w._node&&(w._node.muted=a?!0:w._muted)}return s},stop:function(){for(var a=this||n,s=0;s<a._howls.length;s++)a._howls[s].stop();return a},unload:function(){for(var a=this||n,s=a._howls.length-1;s>=0;s--)a._howls[s].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,_()),a},codecs:function(a){return(this||n)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||n;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var s=new Audio;s.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return a}if(!s||typeof s.canPlayType!="function")return a;var c=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",y=g.match(/OPR\/(\d+)/g),w=y&&parseInt(y[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,h=g.match(/Version\/(.*?) /),v=f&&h&&parseInt(h[1],10)<15;return a._codecs={mp3:!!(!w&&(c||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!c,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||n;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var s=function(c){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var y=0;y<a._howls.length;y++)if(!a._howls[y]._webAudio)for(var w=a._howls[y]._getSoundIds(),f=0;f<w.length;f++){var h=a._howls[y]._soundById(w[f]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var k=0;k<a._howls.length;k++)a._howls[k]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),a}},_obtainHtml5Audio:function(){var a=this||n;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var s=this||n;return a._unlocked&&s._html5AudioPool.push(a),s},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<a._howls.length;s++)if(a._howls[s]._webAudio){for(var c=0;c<a._howls[s]._sounds.length;c++)if(!a._howls[s]._sounds[c]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!n.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var s=0;s<a._howls.length;s++)a._howls[s]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var n=new t,r=function(a){var s=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(a)};r.prototype={init:function(a){var s=this;return n.ctx||_(),s._autoplay=a.autoplay||!1,s._format=typeof a.format!="string"?a.format:[a.format],s._html5=a.html5||!1,s._muted=a.mute||!1,s._loop=a.loop||!1,s._pool=a.pool||5,s._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,s._rate=a.rate||1,s._sprite=a.sprite||{},s._src=typeof a.src!="string"?a.src:[a.src],s._volume=a.volume!==void 0?a.volume:1,s._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=a.onend?[{fn:a.onend}]:[],s._onfade=a.onfade?[{fn:a.onfade}]:[],s._onload=a.onload?[{fn:a.onload}]:[],s._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],s._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],s._onpause=a.onpause?[{fn:a.onpause}]:[],s._onplay=a.onplay?[{fn:a.onplay}]:[],s._onstop=a.onstop?[{fn:a.onstop}]:[],s._onmute=a.onmute?[{fn:a.onmute}]:[],s._onvolume=a.onvolume?[{fn:a.onvolume}]:[],s._onrate=a.onrate?[{fn:a.onrate}]:[],s._onseek=a.onseek?[{fn:a.onseek}]:[],s._onunlock=a.onunlock?[{fn:a.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var a=this,s=null;if(n.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var c=0;c<a._src.length;c++){var g,y;if(a._format&&a._format[c])g=a._format[c];else{if(y=a._src[c],typeof y!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(y),g||(g=/\.([^.]+)$/.exec(y.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=a._src[c];break}}if(!s){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=s,a._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new l(a),a._webAudio&&o(a),a},play:function(a,s){var c=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&c._state==="loaded"&&!c._sprite[a])return null;if(typeof a>"u"&&(a="__default",!c._playLock)){for(var y=0,w=0;w<c._sounds.length;w++)c._sounds[w]._paused&&!c._sounds[w]._ended&&(y++,g=c._sounds[w]._id);y===1?a=null:g=null}}var f=g?c._soundById(g):c._inactiveSound();if(!f)return null;if(g&&!a&&(a=f._sprite||"__default"),c._state!=="loaded"){f._sprite=a,f._ended=!1;var h=f._id;return c._queue.push({event:"play",action:function(){c.play(h)}}),h}if(g&&!f._paused)return s||c._loadQueue("play"),f._id;c._webAudio&&n._autoResume();var v=Math.max(0,f._seek>0?f._seek:c._sprite[a][0]/1e3),k=Math.max(0,(c._sprite[a][0]+c._sprite[a][1])/1e3-v),S=k*1e3/Math.abs(f._rate),x=c._sprite[a][0]/1e3,N=(c._sprite[a][0]+c._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var A=function(){f._paused=!1,f._seek=v,f._start=x,f._stop=N,f._loop=!!(f._loop||c._sprite[a][2])};if(v>=N){c._ended(f);return}var M=f._node;if(c._webAudio){var I=function(){c._playLock=!1,A(),c._refreshBuffer(f);var Re=f._muted||c._muted?0:f._volume;M.gain.setValueAtTime(Re,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof M.bufferSource.start>"u"?f._loop?M.bufferSource.noteGrainOn(0,v,86400):M.bufferSource.noteGrainOn(0,v,k):f._loop?M.bufferSource.start(0,v,86400):M.bufferSource.start(0,v,k),S!==1/0&&(c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),S)),s||setTimeout(function(){c._emit("play",f._id),c._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?I():(c._playLock=!0,c.once("resume",I),c._clearTimer(f._id))}else{var se=function(){M.currentTime=v,M.muted=f._muted||c._muted||n._muted||M.muted,M.volume=f._volume*n.volume(),M.playbackRate=f._rate;try{var Re=M.play();if(Re&&typeof Promise<"u"&&(Re instanceof Promise||typeof Re.then=="function")?(c._playLock=!0,A(),Re.then(function(){c._playLock=!1,M._unlocked=!0,s?c._loadQueue():c._emit("play",f._id)}).catch(function(){c._playLock=!1,c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(c._playLock=!1,A(),c._emit("play",f._id)),M.playbackRate=f._rate,M.paused){c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),S):(c._endTimers[f._id]=function(){c._ended(f),M.removeEventListener("ended",c._endTimers[f._id],!1)},M.addEventListener("ended",c._endTimers[f._id],!1))}catch(qt){c._emit("playerror",f._id,qt)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=c._src,M.load());var Te=window&&window.ejecta||!M.readyState&&n._navigator.isCocoonJS;if(M.readyState>=3||Te)se();else{c._playLock=!0,c._state="loading";var Ge=function(){c._state="loaded",se(),M.removeEventListener(n._canPlayEvent,Ge,!1)};M.addEventListener(n._canPlayEvent,Ge,!1),c._clearTimer(f._id)}}return f._id},pause:function(a){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(a)}}),s;for(var c=s._getSoundIds(a),g=0;g<c.length;g++){s._clearTimer(c[g]);var y=s._soundById(c[g]);if(y&&!y._paused&&(y._seek=s.seek(c[g]),y._rateSeek=0,y._paused=!0,s._stopFade(c[g]),y._node))if(s._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),s._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||s._emit("pause",y?y._id:null)}return s},stop:function(a,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"stop",action:function(){c.stop(a)}}),c;for(var g=c._getSoundIds(a),y=0;y<g.length;y++){c._clearTimer(g[y]);var w=c._soundById(g[y]);w&&(w._seek=w._start||0,w._rateSeek=0,w._paused=!0,w._ended=!0,c._stopFade(g[y]),w._node&&(c._webAudio?w._node.bufferSource&&(typeof w._node.bufferSource.stop>"u"?w._node.bufferSource.noteOff(0):w._node.bufferSource.stop(0),c._cleanBuffer(w._node)):(!isNaN(w._node.duration)||w._node.duration===1/0)&&(w._node.currentTime=w._start||0,w._node.pause(),w._node.duration===1/0&&c._clearSound(w._node))),s||c._emit("stop",w._id))}return c},mute:function(a,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"mute",action:function(){c.mute(a,s)}}),c;if(typeof s>"u")if(typeof a=="boolean")c._muted=a;else return c._muted;for(var g=c._getSoundIds(s),y=0;y<g.length;y++){var w=c._soundById(g[y]);w&&(w._muted=a,w._interval&&c._stopFade(w._id),c._webAudio&&w._node?w._node.gain.setValueAtTime(a?0:w._volume,n.ctx.currentTime):w._node&&(w._node.muted=n._muted?!0:a),c._emit("mute",w._id))}return c},volume:function(){var a=this,s=arguments,c,g;if(s.length===0)return a._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var y=a._getSoundIds(),w=y.indexOf(s[0]);w>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length>=2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c<"u"&&c>=0&&c<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,s)}}),a;typeof g>"u"&&(a._volume=c),g=a._getSoundIds(g);for(var h=0;h<g.length;h++)f=a._soundById(g[h]),f&&(f._volume=c,s[2]||a._stopFade(g[h]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(c,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=c*n.volume()),a._emit("volume",f._id))}else return f=g?a._soundById(g):a._sounds[0],f?f._volume:0;return a},fade:function(a,s,c,g){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(a,s,c,g)}}),y;a=Math.min(Math.max(0,parseFloat(a)),1),s=Math.min(Math.max(0,parseFloat(s)),1),c=parseFloat(c),y.volume(a,g);for(var w=y._getSoundIds(g),f=0;f<w.length;f++){var h=y._soundById(w[f]);if(h){if(g||y._stopFade(w[f]),y._webAudio&&!h._muted){var v=n.ctx.currentTime,k=v+c/1e3;h._volume=a,h._node.gain.setValueAtTime(a,v),h._node.gain.linearRampToValueAtTime(s,k)}y._startFadeInterval(h,a,s,c,w[f],typeof g>"u")}}return y},_startFadeInterval:function(a,s,c,g,y,w){var f=this,h=s,v=c-s,k=Math.abs(v/.01),S=Math.max(4,k>0?g/k:g),x=Date.now();a._fadeTo=c,a._interval=setInterval(function(){var N=(Date.now()-x)/g;x=Date.now(),h+=v*N,h=Math.round(h*100)/100,v<0?h=Math.max(c,h):h=Math.min(c,h),f._webAudio?a._volume=h:f.volume(h,a._id,!0),w&&(f._volume=h),(c<s&&h<=c||c>s&&h>=c)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(c,a._id),f._emit("fade",a._id))},S)},_stopFade:function(a){var s=this,c=s._soundById(a);return c&&c._interval&&(s._webAudio&&c._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(c._interval),c._interval=null,s.volume(c._fadeTo,a),c._fadeTo=null,s._emit("fade",a)),s},loop:function(){var a=this,s=arguments,c,g,y;if(s.length===0)return a._loop;if(s.length===1)if(typeof s[0]=="boolean")c=s[0],a._loop=c;else return y=a._soundById(parseInt(s[0],10)),y?y._loop:!1;else s.length===2&&(c=s[0],g=parseInt(s[1],10));for(var w=a._getSoundIds(g),f=0;f<w.length;f++)y=a._soundById(w[f]),y&&(y._loop=c,a._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=c,c&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,a.playing(w[f])&&(a.pause(w[f],!0),a.play(w[f],!0)))));return a},rate:function(){var a=this,s=arguments,c,g;if(s.length===0)g=a._sounds[0]._id;else if(s.length===1){var y=a._getSoundIds(),w=y.indexOf(s[0]);w>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,s)}}),a;typeof g>"u"&&(a._rate=c),g=a._getSoundIds(g);for(var h=0;h<g.length;h++)if(f=a._soundById(g[h]),f){a.playing(g[h])&&(f._rateSeek=a.seek(g[h]),f._playStart=a._webAudio?n.ctx.currentTime:f._playStart),f._rate=c,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(c,n.ctx.currentTime):f._node&&(f._node.playbackRate=c);var v=a.seek(g[h]),k=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-v,S=k*1e3/Math.abs(f._rate);(a._endTimers[g[h]]||!f._paused)&&(a._clearTimer(g[h]),a._endTimers[g[h]]=setTimeout(a._ended.bind(a,f),S)),a._emit("rate",f._id)}}else return f=a._soundById(g),f?f._rate:a._rate;return a},seek:function(){var a=this,s=arguments,c,g;if(s.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(s.length===1){var y=a._getSoundIds(),w=y.indexOf(s[0]);w>=0?g=parseInt(s[0],10):a._sounds.length&&(g=a._sounds[0]._id,c=parseFloat(s[0]))}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof c=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,s)}}),a;var f=a._soundById(g);if(f)if(typeof c=="number"&&c>=0){var h=a.playing(g);h&&a.pause(g,!0),f._seek=c,f._ended=!1,a._clearTimer(g),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=c);var v=function(){h&&a.play(g,!0),a._emit("seek",g)};if(h&&!a._webAudio){var k=function(){a._playLock?setTimeout(k,0):v()};setTimeout(k,0)}else v()}else if(a._webAudio){var S=a.playing(g)?n.ctx.currentTime-f._playStart:0,x=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(x+S*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var s=this;if(typeof a=="number"){var c=s._soundById(a);return c?!c._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(a){var s=this,c=s._duration,g=s._soundById(a);return g&&(c=s._sprite[g._sprite][1]/1e3),c},state:function(){return this._state},unload:function(){for(var a=this,s=a._sounds,c=0;c<s.length;c++)s[c]._paused||a.stop(s[c]._id),a._webAudio||(a._clearSound(s[c]._node),s[c]._node.removeEventListener("error",s[c]._errorFn,!1),s[c]._node.removeEventListener(n._canPlayEvent,s[c]._loadFn,!1),s[c]._node.removeEventListener("ended",s[c]._endFn,!1),n._releaseHtml5Audio(s[c]._node)),delete s[c]._node,a._clearTimer(s[c]._id);var g=n._howls.indexOf(a);g>=0&&n._howls.splice(g,1);var y=!0;for(c=0;c<n._howls.length;c++)if(n._howls[c]._src===a._src||a._src.indexOf(n._howls[c]._src)>=0){y=!1;break}return i&&y&&delete i[a._src],n.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,s,c,g){var y=this,w=y["_on"+a];return typeof s=="function"&&w.push(g?{id:c,fn:s,once:g}:{id:c,fn:s}),y},off:function(a,s,c){var g=this,y=g["_on"+a],w=0;if(typeof s=="number"&&(c=s,s=null),s||c)for(w=0;w<y.length;w++){var f=c===y[w].id;if(s===y[w].fn&&f||!s&&f){y.splice(w,1);break}}else if(a)g["_on"+a]=[];else{var h=Object.keys(g);for(w=0;w<h.length;w++)h[w].indexOf("_on")===0&&Array.isArray(g[h[w]])&&(g[h[w]]=[])}return g},once:function(a,s,c){var g=this;return g.on(a,s,c,1),g},_emit:function(a,s,c){for(var g=this,y=g["_on"+a],w=y.length-1;w>=0;w--)(!y[w].id||y[w].id===s||a==="load")&&(setTimeout((function(f){f.call(this,s,c)}).bind(g,y[w].fn),0),y[w].once&&g.off(a,y[w].fn,y[w].id));return g._loadQueue(a),g},_loadQueue:function(a){var s=this;if(s._queue.length>0){var c=s._queue[0];c.event===a&&(s._queue.shift(),s._loadQueue()),a||c.action()}return s},_ended:function(a){var s=this,c=a._sprite;if(!s._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(s._ended.bind(s,a),100),s;var g=!!(a._loop||s._sprite[c][2]);if(s._emit("end",a._id),!s._webAudio&&g&&s.stop(a._id,!0).play(a._id),s._webAudio&&g){s._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=n.ctx.currentTime;var y=(a._stop-a._start)*1e3/Math.abs(a._rate);s._endTimers[a._id]=setTimeout(s._ended.bind(s,a),y)}return s._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,s._clearTimer(a._id),s._cleanBuffer(a._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(a._id,!0),s},_clearTimer:function(a){var s=this;if(s._endTimers[a]){if(typeof s._endTimers[a]!="function")clearTimeout(s._endTimers[a]);else{var c=s._soundById(a);c&&c._node&&c._node.removeEventListener("ended",s._endTimers[a],!1)}delete s._endTimers[a]}return s},_soundById:function(a){for(var s=this,c=0;c<s._sounds.length;c++)if(a===s._sounds[c]._id)return s._sounds[c];return null},_inactiveSound:function(){var a=this;a._drain();for(var s=0;s<a._sounds.length;s++)if(a._sounds[s]._ended)return a._sounds[s].reset();return new l(a)},_drain:function(){var a=this,s=a._pool,c=0,g=0;if(!(a._sounds.length<s)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&c++;for(g=a._sounds.length-1;g>=0;g--){if(c<=s)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),c--)}}},_getSoundIds:function(a){var s=this;if(typeof a>"u"){for(var c=[],g=0;g<s._sounds.length;g++)c.push(s._sounds[g]._id);return c}else return[a]},_refreshBuffer:function(a){var s=this;return a._node.bufferSource=n.ctx.createBufferSource(),a._node.bufferSource.buffer=i[s._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,n.ctx.currentTime),s},_cleanBuffer:function(a){var s=this,c=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return s;if(n._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),c))try{a.bufferSource.buffer=n._scratchBuffer}catch{}return a.bufferSource=null,s},_clearSound:function(a){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(a){this._parent=a,this.init()};l.prototype={init:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,s._sounds.push(a),a.create(),a},create:function(){var a=this,s=a._parent,c=n._muted||a._muted||a._parent._muted?0:a._volume;return s._webAudio?(a._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),a._node.gain.setValueAtTime(c,n.ctx.currentTime),a._node.paused=!0,a._node.connect(n.masterGain)):n.noAudio||(a._node=n._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(n._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=s._src,a._node.preload=s._preload===!0?"auto":s._preload,a._node.volume=c*n.volume(),a._node.load()),a},reset:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,s=a._parent;s._duration=Math.ceil(a._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),a._node.removeEventListener(n._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,s=a._parent;s._duration===1/0&&(s._duration=Math.ceil(a._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var i={},o=function(a){var s=a._src;if(i[s]){a._duration=i[s].duration,p(a);return}if(/^data:[^;]+;base64,/.test(s)){for(var c=atob(s.split(",")[1]),g=new Uint8Array(c.length),y=0;y<c.length;++y)g[y]=c.charCodeAt(y);d(g.buffer,a)}else{var w=new XMLHttpRequest;w.open(a._xhr.method,s,!0),w.withCredentials=a._xhr.withCredentials,w.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){w.setRequestHeader(f,a._xhr.headers[f])}),w.onload=function(){var f=(w.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+w.status+".");return}d(w.response,a)},w.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete i[s],a.load())},u(w)}},u=function(a){try{a.send()}catch{a.onerror()}},d=function(a,s){var c=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(y){y&&s._sounds.length>0?(i[s._src]=y,p(s,y)):c()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(a).then(g).catch(c):n.ctx.decodeAudioData(a,g,c)},p=function(a,s){s&&!a._duration&&(a._duration=s.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},_=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),c=s?parseInt(s[1],10):null;if(a&&c&&c<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof Jn<"u"?(Jn.HowlerGlobal=t,Jn.Howler=n,Jn.Howl=r,Jn.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var i=this;if(!i.ctx||!i.ctx.listener)return i;if(r=typeof r!="number"?i._pos[1]:r,l=typeof l!="number"?i._pos[2]:l,typeof n=="number")i._pos=[n,r,l],typeof i.ctx.listener.positionX<"u"?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]);else return i._pos;return i},HowlerGlobal.prototype.orientation=function(n,r,l,i,o,u){var d=this;if(!d.ctx||!d.ctx.listener)return d;var p=d._orientation;if(r=typeof r!="number"?p[1]:r,l=typeof l!="number"?p[2]:l,i=typeof i!="number"?p[3]:i,o=typeof o!="number"?p[4]:o,u=typeof u!="number"?p[5]:u,typeof n=="number")d._orientation=[n,r,l,i,o,u],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(u,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(n,r,l,i,o,u);else return p;return d},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var o=l._getSoundIds(r),u=0;u<o.length;u++){var d=l._soundById(o[u]);if(d)if(typeof n=="number")d._stereo=n,d._pos=[n,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&t(d,i),i==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(n,0,0):d._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",d._id);else return d._stereo}return l},Howl.prototype.pos=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,l,i)}}),o;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof i>"u")if(typeof n=="number")o._pos=[n,r,l];else return o._pos;for(var u=o._getSoundIds(i),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._pos=[n,r,l],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setPosition(n,r,l)),o._emit("pos",p._id);else return p._pos}return o},Howl.prototype.orientation=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,l,i)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,l=typeof l!="number"?o._orientation[2]:l,typeof i>"u")if(typeof n=="number")o._orientation=[n,r,l];else return o._orientation;for(var u=o._getSoundIds(i),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._orientation=[n,r,l],p._node&&(p._panner||(p._pos||(p._pos=o._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setOrientation(n,r,l)),o._emit("orientation",p._id);else return p._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,i,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof i>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],i=parseInt(r[1],10));for(var u=n._getSoundIds(i),d=0;d<u.length;d++)if(o=n._soundById(u[d]),o){var p=o._pannerAttr;p={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:p.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:p.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:p.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:p.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:p.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:p.panningModel};var _=o._panner;_||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),_=o._panner),_.coneInnerAngle=p.coneInnerAngle,_.coneOuterAngle=p.coneOuterAngle,_.coneOuterGain=p.coneOuterGain,_.distanceModel=p.distanceModel,_.maxDistance=p.maxDistance,_.refDistance=p.refDistance,_.rolloffFactor=p.rolloffFactor,_.panningModel=p.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(yt);const al={"main-menu":{volume:.4,loop:!0,preload:!0},"character-select":{volume:.35,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.5,loop:!1,preload:!1},victory:{volume:.5,loop:!1,preload:!0},defeat:{volume:.4,loop:!1,preload:!0},"game-over":{volume:.35,loop:!1,preload:!0}},Ri={"card-play":{volume:.6,loop:!1},"card-shuffle":{volume:.5,loop:!1},"card-draw":{volume:.4,loop:!1},"card-flip":{volume:.5,loop:!1},challenge:{volume:.7,loop:!1},"challenge-success":{volume:.8,loop:!1},"challenge-fail":{volume:.6,loop:!1},"turn-start":{volume:.4,loop:!1},"turn-end":{volume:.3,loop:!1},"geass-activate":{volume:.8,loop:!1},"geass-hit":{volume:.9,loop:!1},"geass-miss":{volume:.5,loop:!1},"geass-immunity":{volume:.7,loop:!1},"button-click":{volume:.4,loop:!1},"button-hover":{volume:.2,loop:!1},"menu-open":{volume:.3,loop:!1},"menu-close":{volume:.3,loop:!1},"character-select":{volume:.5,loop:!1},"character-skill":{volume:.7,loop:!1},"damage-taken":{volume:.8,loop:!1},heal:{volume:.6,loop:!1},win:{volume:.8,loop:!1},lose:{volume:.6,loop:!1},"round-win":{volume:.7,loop:!1},"round-lose":{volume:.5,loop:!1}},Us={"main-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","character-select":"https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3","game-normal":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","game-intense":"https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3","geass-activate":"https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3",victory:"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3",defeat:"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","game-over":"https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3"},Qs={"card-play":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","card-draw":"https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3","card-flip":"https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3",challenge:"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","challenge-success":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","challenge-fail":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","turn-end":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","geass-immunity":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3","button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","button-hover":"https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3","menu-open":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3","menu-close":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3","character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","character-skill":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","damage-taken":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3",heal:"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3",win:"https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",lose:"https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3","round-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","round-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"},tm={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},ln=class ln{constructor(){de(this,"bgmMap",new Map);de(this,"sfxMap",new Map);de(this,"currentBGM",null);de(this,"masterVolume",1);de(this,"bgmVolume",1);de(this,"sfxVolume",1);de(this,"voiceVolume",1);de(this,"isMuted",!1);de(this,"initialized",!1);de(this,"currentVoice",null)}static getInstance(){return ln.instance||(ln.instance=new ln),ln.instance}init(){this.initialized||(this.preloadBGM(["main-menu","victory","defeat"]),this.preloadSFX(["button-click","card-play","challenge"]),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成"))}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=al[n],l=new yt.Howl({src:[Us[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,l)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=Ri[n],l=new yt.Howl({src:[Qs[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,l)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const l=al[t];r=new yt.Howl({src:[Us[t]],volume:0,loop:l.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const l=al[t];r.fade(0,l.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=Ri[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new yt.Howl({src:[Qs[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=tm[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const l=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const i=new yt.Howl({src:[l],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=i,i.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),yt.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=al[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=Ri[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,yt.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,yt.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};de(ln,"instance");let za=ln;const mt=za.getInstance(),rn=e=>{mt&&mt.playBGM(e)},ae=e=>{mt&&mt.playSFX(e)},nm=()=>{mt&&mt.stopBGM()};class rm{constructor(){de(this,"cards",[]);de(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let l=0;l<6;l++){const i=t[l%4];this.cards.push({id:`${r}-${l}-${Math.random().toString(36).substr(2,9)}`,suit:i,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],l=[];for(let i=0;i<5;i++){const o=this.cards[i];o.owner="player",t.push(o)}for(let i=5;i<10;i++){const o=this.cards[i];o.owner="ai",n.push(o)}for(let i=10;i<15;i++){const o=this.cards[i];o.owner="ai2",r.push(o)}for(let i=15;i<20;i++){const o=this.cards[i];o.owner="ai3",l.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const l=this.cards.find(i=>i.id===r);l&&(l.owner="table",n.push(l))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(l=>l.owner===null).slice(0,t);for(const l of r)l.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const lm=1/3,im=1/2,am=1,om=.1,sm=.9,um=.5,cm=.25,dm=.15,fm=.2,pm=.8,Ws=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class mm{getBaseHitChance(t){return t===0?lm:t===1?im:am}performGeass(t,n,r=null,l=0,i=0){let o=this.getBaseHitChance(i);if(o+=l,r==="cc"&&!n.ccReviveUsed&&Math.random()<o&&n.hp<=1&&Math.random()<um)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"&&Math.random()<dm)return Math.random()<cm?{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0,isDodge:!0}:{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0};if(i<2&&(o=Math.max(om,Math.min(sm,o))),Math.random()<o){const _={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},a=Ws[Math.floor(Math.random()*Ws.length)];return{activated:!0,hit:!0,damage:1,newStats:_,funnyAction:a.description,message:`Geass命中！${a.emoji} ${a.description}`}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(pm,fm*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const Oi={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},Fi={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},Di={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},Bi={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},hm={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:Oi,skillName:Oi.name,skillDescription:Oi.description,stats:{hp:3,difficulty:4}},gm={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:Fi,skillName:Fi.name,skillDescription:Fi.description,stats:{hp:3,difficulty:2}},vm={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:Di,skillName:Di.name,skillDescription:Di.description,stats:{hp:4,difficulty:2}},ym={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:Bi,skillName:Bi.name,skillDescription:Bi.description,stats:{hp:3,difficulty:3}},xm={lelouch:hm,cc:gm,suzaku:vm,kallen:ym};function si(e){return xm[e]}function ol(e){const t=si(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function zn(e){const t=si(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function Xs(e){if(!zn(e))return e;const t=si(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function _m(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function wm(e){const t=si(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Ks(e){return e.characterId==="kallen"&&zn(e)?4:3}class km{constructor(){de(this,"cardSystem");de(this,"geassSystem");de(this,"state");this.cardSystem=new rm,this.geassSystem=new mm,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:l,ai2Cards:i,ai3Cards:o}=this.cardSystem.dealCards(),u=this.cardSystem.setLiarCard(),d=Math.floor(Math.random()*4),p=n||["cc","suzaku","kallen"],_=new Map;_.set("player",ol(t)),_.set("ai",ol(p[0])),_.set("ai2",ol(p[1])),_.set("ai3",ol(p[2]));const a=c=>({lelouch:"鲁鲁修",cc:"C.C.",suzaku:"朱雀",kallen:"卡莲"})[c]||c,s=c=>c==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:d===0?"player_turn":"ai_turn",liarCard:u,playerCharacter:t,currentPlayerIndex:d,playerHand:r,aiPlayers:[{id:"ai",name:a(p[0]),character:p[0],hand:l,stats:{hp:s(p[0]),maxHp:s(p[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:a(p[1]),character:p[1],hand:i,stats:{hp:s(p[1]),maxHp:s(p[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:a(p[2]),character:p[2],hand:o,stats:{hp:s(p[2]),maxHp:s(p[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:s(t),maxHp:s(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},characterStates:_},this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const l=_m(r);this.state.characterStates.set(n,l)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const u of t){const d=this.state.playerHand.find(p=>p.id===u);if(!d)return!1;r.push(d)}const l=this.state.characterStates.get("player"),i=l?Ks(l):1;if(t.length>i)return!1;this.state.playerHand=this.state.playerHand.filter(u=>!t.includes(u.id));const o=r.some(u=>u.rank!==n&&!u.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){this.state.lastAction=`${t==="player"?"玩家":t}手牌耗尽，获得胜利！`,this.state.winner=t==="player"?"player":"ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,l=n.playerId;this.state.phase="geass";const i=r?l:t;return this.executeGeass(i,t),{success:!0,isBluff:r,targetId:l}}executeGeass(t,n){const r=this.state.characterStates.get(t);let l;if(t==="player")l=this.state.playerStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);if(!u)return;l=u.stats}let i=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(i=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,l,(r==null?void 0:r.characterId)||null,i,this.state.turnState.geassConsecutiveMisses);if(this.state.geassResult=o,!o.hit&&o.isCounter&&n){if(n==="player")this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},this.state.playerStats.hp<=0&&this.checkGameOver();else{const d=this.state.aiPlayers.find(p=>p.id===n);d&&(d.stats={...d.stats,hp:Math.max(0,d.stats.hp-1)},d.stats.hp<=0&&(d.isActive=!1,this.checkGameOver()))}this.state.lastAction=`${t==="player"?"玩家":t}发动枢木剑术反击！${n==="player"?"玩家":n}受到反弹伤害！`;return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}if(o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0),o.newStats.hp<=0){if(t!=="player"){const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!zn(n))return!1;const r=Xs(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const l=["Q","K","A"],o=(l.indexOf(this.state.liarCard)+1)%l.length;this.state.liarCard=l[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const l=t==="player"?"玩家":t;this.state.lastAction=`${l}发动了${we(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?zn(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:l,ai3Cards:i}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let u;if(t!==void 0)u=this.findNextActivePlayer(t);else{const d=this.getActivePlayerIndices();u=d[Math.floor(Math.random()*d.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=l,this.state.aiPlayers[2].hand=i,this.state.liarCard=o,this.state.phase=u===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=u,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:this.state.turnState.geassConsecutiveMisses},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((d,p)=>{this.state.characterStates.set(p,wm(d))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=this.state.aiPlayers.find(i=>i.id==="ai3");n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=this.state.aiPlayers.find(i=>i.id==="ai2");r&&r.isActive&&r.stats.hp>0&&t.push(2);const l=this.state.aiPlayers.find(i=>i.id==="ai");return l&&l.isActive&&l.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const l=(t+r)%4;if(n.includes(l))return l}return n[0]}getState(){return JSON.parse(JSON.stringify(this.state))}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(l=>l.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const l=this.state.characterStates.get("player"),i=l?this.getMaxPlayCount(l):1;this.state.playerSelectedCards.length<i&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}getMaxPlayCount(t){return t.characterId==="kallen"?4:3}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t){if(this.state.phase!=="ai_turn")return this.getState();const n=this.state.aiPlayers.find(o=>o.id===t);if(!n||n.hand.length===0)return this.getState();const r=Math.min(n.hand.length,Math.floor(Math.random()*2)+1),l=n.hand.slice(0,r).map(o=>o.id),i=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,l,i),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const l=this.state.aiPlayers.find(p=>p.id===t);if(!l)return!1;const i=[];for(const p of n){const _=l.hand.find(a=>a.id===p);if(!_)return!1;i.push(_)}const o=this.state.characterStates.get(t),u=o?Ks(o):1;if(n.length>u)return!1;l.hand=l.hand.filter(p=>!n.includes(p.id));const d=i.some(p=>p.rank!==r&&!p.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:i,playerId:t,isBluff:d},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...i],this.state.lastAction=`${l.name}出了${n.length}张牌，声称是${r}`,l.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?zn(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!zn(n))throw new Error("技能冷却中或已使用");const r=Xs(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(){var o;this.state.turnState.playedCards&&this.state.turnState.tableCards.push(...this.state.turnState.playedCards.actualCards);const t=(o=this.state.turnState.playedCards)==null?void 0:o.playerId;let r=((t==="player"?0:t==="ai3"?1:t==="ai2"?2:t==="ai"?3:0)+1)%4,l=0;for(;l<4;){if(r===0){if(this.state.playerStats.hp>0)break}else{const u=r===1?2:r===2?1:0,d=this.state.aiPlayers[u];if(d&&d.isActive&&d.stats.hp>0)break}r=(r+1)%4,l++}return this.state.currentPlayerIndex=r,this.state.phase=r===0?"player_turn":"ai_turn",this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,console.log(`[endChallengePhase] 出牌者: ${t}, 下一个玩家: ${r===0?"玩家":r===1?"AI3(卡莲)":r===2?"AI2(朱雀)":"AI1(C.C.)"}(索引${r})`),this.state.lastAction="质疑阶段结束，回合继续",this.getState()}}const Sm="code-geass-game",Ys={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.removeItem(Sm)}catch(t){console.error("Failed to clear localStorage:",t)}}},Js=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],Cm=e=>e==="player"?0:e==="ai"?3:e==="ai2"?2:e==="ai3"?1:0,Nm=e=>e===0?"player":e===1?"ai3":e===2?"ai2":e===3?"ai":"player",Am=(e,t)=>{for(let n=0;n<4;n++){const r=(e+n)%4,l=Nm(r);if(l==="player"){if(t.playerStats.hp>0)return r}else{const i=t.aiPlayers.find(o=>o.id===l);if(i&&i.isActive&&i.stats.hp>0)return r}}return e},Em=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let l=t??null;if(!l&&r)if(r==="player")l=we(n??void 0);else{const u=e.aiPlayers.find(d=>d.id===r);l=(u==null?void 0:u.name)??null}if(!l)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(l===we(n??void 0))return{loserId:"player",actualLoserName:l};const i=e.aiPlayers.find(u=>u.name===l);return i?{loserId:i.id,actualLoserName:l}:(console.error(`[determineLoserId] 找不到AI: ${l}`),{loserId:null,actualLoserName:l})},jm=(e,t,n,r)=>{ae("geass-hit");const l=Js[Math.floor(Math.random()*Js.length)];r(l),ae(l.soundType),n(`${t}受到Geass！`),n(`突然${l.description}`),n(`Geass命中！${t}HP-1`)},Tm=(e,t,n)=>{ae("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},Pm=(e,t)=>{setTimeout(()=>{rn(e==="player"?"victory":"defeat"),t("result")},2e3)},Mm=(e,t,n,r,l,i,o,u,d)=>{var y;let _=(Cm(t)+1)%4;_=Am(_,n);const a=e.resetRound(_);i(a),o([]);const s=a.currentPlayerIndex===0,c={1:2,2:1,3:0},g=s?we(r??void 0):(y=a.aiPlayers[c[a.currentPlayerIndex]])==null?void 0:y.name;l(`【第${a.turnState.turnNumber}回合】骗子牌是${a.liarCard}`),l(`${g}先手！`),u(!1),s||setTimeout(()=>{var w;(w=d.current)==null||w.call(d)},1500)},Im=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:l,setSelectedCards:i,setIsProcessing:o,setCurrentScreen:u,aiTurnRef:d})=>P.useCallback((p,_,a,s)=>{if(r(p),p.geassResult){const g=s||(a||"对手");p.geassResult.hit?jm(p.geassResult,g,n,l):Tm(p.geassResult,g,n)}if(p.phase==="game_over"){Pm(p.winner,u);return}setTimeout(()=>{l(null);const c=e.current;if(!c)return;const g=c.getState(),{loserId:y,actualLoserName:w}=Em(g,s,t);if(!y||!w){o(!1);return}Mm(c,y,g,t,n,r,i,o,d)},2500)},[e,t,n,r,l,i,o,u,d]),bm=()=>{const[e,t]=P.useState("main-menu"),[n,r]=P.useState(null),[l,i]=P.useState(1),[o,u]=P.useState(["cc","suzaku","kallen"]),[d,p]=P.useState({}),_=P.useRef(null),[a,s]=P.useState(null),[c,g]=P.useState([]),[y,w]=P.useState(null),[f,h]=P.useState([]),[v,k]=P.useState(!1),S=P.useRef(null);P.useEffect(()=>((async()=>{try{await mt.preload(),console.log("音效预加载完成");const T=Ys.load("gameSettings");T&&(mt.setBGMVolume(T.musicVolume??.5),mt.setSFXVolume(T.soundVolume??.7)),rn("main-menu")}catch(T){console.warn("初始化失败:",T)}})(),()=>{nm()}),[]),P.useEffect(()=>{const L=mt.getStatus(),T={soundEnabled:L.enabled,musicEnabled:!0,soundVolume:L.sfxVolume,musicVolume:L.bgmVolume};Ys.save("gameSettings",T)},[]);const x=P.useCallback(L=>{g(T=>[...T,L])},[]),N=Im({gameEngineRef:_,selectedCharacter:n,addLog:x,setGameState:s,setCurrentFunnyAction:w,setSelectedCards:h,setIsProcessing:k,setCurrentScreen:L=>t(L),aiTurnRef:S}),A=P.useCallback((L,T)=>{var Oe,et,Ce,Mt;console.log("[enterChallengePhase] 进入质疑阶段");const R=(Oe=T.turnState.playedCards)==null?void 0:Oe.playerId;if(!R){console.error("[enterChallengePhase] 没有出牌记录");return}const V=(le=>le==="player"?0:le==="ai"?3:le==="ai2"?2:le==="ai3"?1:0)(R);let G=(V+1)%4,K=0;for(;K<3;){if(G===V){G=(G+1)%4;continue}if(G===0){console.log("[enterChallengePhase] 轮到玩家质疑，等待玩家决策");const Pe=L.enterChallengePhase();s(Pe),k(!1),x("等待玩家决策...");return}const le=G===1?2:G===2?1:0,Q=T.aiPlayers[le];if(!Q||!Q.isActive||Q.stats.hp<=0){console.log("[enterChallengePhase] AI已淘汰，跳过:",Q==null?void 0:Q.name),G=(G+1)%4,K++;continue}const yn=Math.random()<.3;if(console.log("[enterChallengePhase] AI决策:",{aiName:Q.name,shouldChallenge:yn}),yn){ae("challenge");const Pe=R==="player"?we(n):((et=T.aiPlayers.find(ye=>ye.id===R))==null?void 0:et.name)||R;x(`${Q.name}向${Pe}发起质疑！`);const st=L.aiChallengeDecision(Q.id),ut=T.turnState.playedCards,It=ut?ut.actualCards.some(ye=>ye.rank!==ut.claimedRank&&!ye.isJoker):!1;x(It?`质疑成功！${Pe}在撒谎！`:`质疑失败！${Pe}没有撒谎！`);const ct=It?R:Q.id,xn=ct==="player"?we(n):((Ce=st.aiPlayers.find(ye=>ye.id===ct))==null?void 0:Ce.name)||ct;s(st),N(st,Q.name,Pe,xn);return}else x(`${Q.name}选择不质疑`);G=(G+1)%4,K++}console.log("[enterChallengePhase] 所有人都未质疑，继续下一回合"),x("无人质疑，回合继续");const B=L.endChallengePhase();s(B);const $={1:2,2:1,3:0},ve=B.currentPlayerIndex===0?we(n):(Mt=B.aiPlayers[$[B.currentPlayerIndex]])==null?void 0:Mt.name;x(`【第${B.turnState.turnNumber}回合】骗子牌是${B.liarCard}`),x(`${ve}先手！`),B.currentPlayerIndex===0?k(!1):setTimeout(()=>{var le;(le=S.current)==null||le.call(S)},500)},[x,n,N]),M=P.useCallback(()=>{if(console.log("[handleAITurn] 开始执行"),!_.current){console.log("[handleAITurn] 游戏引擎不存在，返回");return}const L=_.current,T=L.getState();if(console.log("[handleAITurn] 当前状态:",{phase:T.phase,currentPlayerIndex:T.currentPlayerIndex}),T.phase==="player_turn"||T.phase==="game_over"){console.log("[handleAITurn] 不是AI回合，跳过");return}const H={1:2,2:1,3:0}[T.currentPlayerIndex];if(H===void 0||H<0||H>=T.aiPlayers.length){console.log("[handleAITurn] AI索引无效:",T.currentPlayerIndex,"->",H);return}const V=T.aiPlayers[H];if(!V){console.log("[handleAITurn] AI不存在");return}const G=V.id;if(!V.isActive||V.stats.hp<=0){if(console.log("[handleAITurn] AI已淘汰，跳过:",V.name),T.aiPlayers.filter($=>$.isActive&&$.stats.hp>0).length===0&&T.playerStats.hp>0){console.log("[handleAITurn] 只剩玩家存活，玩家获胜"),T.winner="player",T.phase="game_over",s({...T}),x("游戏结束！玩家获胜！"),k(!1);return}const B=(T.currentPlayerIndex+1)%4;T.currentPlayerIndex=B,s({...T}),B!==0?setTimeout(()=>{var $;return($=S.current)==null?void 0:$.call(S)},500):T.playerStats.hp<=0&&setTimeout(()=>{var $;return($=S.current)==null?void 0:$.call(S)},500);return}k(!0),ae("turn-start"),x(`${V.name} 的回合...`),setTimeout(()=>{var K;try{console.log("[handleAITurn] AI开始出牌:",V.name);const B=L.aiPlayCards(G);console.log("[handleAITurn] AI出牌完成, 新状态:",{phase:B.phase,playedBy:(K=B.turnState.playedCards)==null?void 0:K.playerId}),s(B);const $=B.turnState.playedCards;if($){const ve=$.cardIds.length,Oe=$.claimedRank;x(`${V.name}出了${ve}张牌，声称是${Oe}`)}setTimeout(()=>{console.log("[handleAITurn] 进入质疑阶段"),A(L,B)},1e3)}catch(B){console.error("AI出牌错误:",B),k(!1)}},1e3)},[x,A]);P.useEffect(()=>{S.current=M},[M]);const I=P.useCallback(()=>{ae("button-click"),t("character-select")},[]),se=P.useCallback(()=>{ae("button-click"),t("settings")},[]),Te=P.useCallback(()=>{ae("button-click"),t("help")},[]),Ge=P.useCallback((L,T)=>{ae("character-select"),r(L),i(T||Math.floor(Math.random()*4)+1)},[]),Re=P.useCallback(()=>{var $;if(!n)return;ae("button-click");const R=["lelouch","cc","suzaku","kallen"].filter(ve=>ve!==n).sort(()=>Math.random()-.5);u(R);const H={};R.forEach(ve=>{H[ve]=Math.floor(Math.random()*4)+1}),p(H),_.current=new km;const V=_.current.initializeGame(n,R);s(V),h([]);const G=V.currentPlayerIndex===0,K={1:2,2:1,3:0},B=G?we(n):($=V.aiPlayers[K[V.currentPlayerIndex]])==null?void 0:$.name;g(["游戏开始！",`【第1回合】骗子牌是${V.liarCard}`,`${B}先手！`]),t("game-table"),rn("game-normal"),G||setTimeout(()=>{M()},1500)},[n,M]),qt=P.useCallback(()=>{ae("button-click"),t("main-menu"),r(null)},[]),en=P.useCallback(()=>{ae("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),w(null),rn("main-menu")},[]),Tt=P.useCallback(L=>{if(!_.current||v)return;const T=_.current,R=T.getState();if(console.log("[handleToggleCardSelection] 当前阶段:",R.phase,"是否是玩家回合:",R.phase==="player_turn"),R.phase!=="player_turn"){console.log("[handleToggleCardSelection] 不是玩家回合，无法选择牌");return}T.toggleCardSelection(L);const H=T.getState();console.log("[handleToggleCardSelection] 选中状态更新:",H.playerSelectedCards),h(H.playerSelectedCards),ae("button-click")},[v]),E=P.useCallback(()=>{if(!_.current||f.length===0||v)return;k(!0),ae("card-play");const L=_.current;try{const T=L.playerPlayCards();s(T),h([]);const R=we(n),H=T.turnState.playedCards;if(H){const V=H.cardIds.length,G=H.claimedRank;x(`${R}出了${V}张牌，声称是${G}`)}setTimeout(()=>{A(L,T)},1500)}catch(T){console.error("出牌错误:",T),k(!1)}},[f,v,x,n,A]),b=P.useCallback(()=>{var Oe,et;if(!_.current||v)return;k(!0),ae("challenge");const L=_.current,T=L.getState(),R=T.turnState.playedCards,H=R==null?void 0:R.playerId,V=we(n),G=H==="player"?V:((Oe=T.aiPlayers.find(Ce=>Ce.id===H))==null?void 0:Oe.name)||H;x(`${V}向${G}发起质疑！`);const K=L.playerChallengeDecision(!0),B=R?R.actualCards.some(Ce=>Ce.rank!==R.claimedRank&&!Ce.isJoker):!1;x(B?`质疑成功！${G}在撒谎！`:`质疑失败！${G}没有撒谎！`);const $=B?H:"player",ve=$==="player"?V:((et=T.aiPlayers.find(Ce=>Ce.id===$))==null?void 0:et.name)||$;s(K),N(K,V,G,ve)},[v,x,n,N]),z=P.useCallback(()=>{var Oe,et,Ce,Mt;if(!_.current||v)return;ae("button-click");const L=_.current,T=L.getState(),R=(Oe=T.turnState.playedCards)==null?void 0:Oe.playerId,H=we(n);x(`${H}选择不质疑`);const G=(le=>le==="player"?0:le==="ai"?3:le==="ai2"?2:le==="ai3"?1:0)(R||"player");let K=1,B=0;for(;B<3&&K!==G;){const le=K===1?2:K===2?1:0,Q=T.aiPlayers[le];if(!Q||!Q.isActive||Q.stats.hp<=0){console.log("[handlePass] AI已淘汰，跳过:",Q==null?void 0:Q.name),K=(K+1)%4,B++;continue}if(Math.random()<.3){ae("challenge");const Pe=R==="player"?H:((et=T.aiPlayers.find(ye=>ye.id===R))==null?void 0:et.name)||R;x(`${Q.name}向${Pe}发起质疑！`);const st=L.aiChallengeDecision(Q.id),ut=T.turnState.playedCards,It=ut?ut.actualCards.some(ye=>ye.rank!==ut.claimedRank&&!ye.isJoker):!1;x(It?`质疑成功！${Pe}在撒谎！`:`质疑失败！${Pe}没有撒谎！`);const ct=It?R:Q.id,xn=ct==="player"?H:((Ce=st.aiPlayers.find(ye=>ye.id===ct))==null?void 0:Ce.name)||ct;s(st),N(st,Q.name,Pe,xn);return}else x(`${Q.name}选择不质疑`);K=(K+1)%4,B++}x("无人质疑，回合继续");const $=L.endChallengePhase();s($);const ve=$.currentPlayerIndex;if(ve===0){x(`【第${$.turnState.turnNumber}回合】骗子牌是${$.liarCard}`);const le=ve===0?H:(Mt=T.aiPlayers[ve-1])==null?void 0:Mt.name;x(`${le}先手！`),k(!1)}else setTimeout(()=>{M()},500)},[v,x,n,N,M]),W=P.useCallback(L=>{if(!_.current||n!=="lelouch")return;const T=_.current;if(!T.canPlayerUseSkill("player")){x("❌ 绝对命令使用次数已耗尽（每局限1次）");return}ae("geass-activate");const R=T.lelouchChangeLiarCard(L);s(R),x(`鲁鲁修发动绝对命令！骗子牌变为 ${L}`),x("⚠️ 绝对命令已使用，本局无法再次使用")},[n,x]),q=P.useCallback(()=>{ae("button-click"),t("character-select"),r(null),s(null),g([]),h([]),w(null),rn("main-menu")},[]),vt=P.useCallback(()=>{ae("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),w(null),rn("main-menu")},[]),Ue=()=>{var L,T,R;switch(e){case"main-menu":return m.jsx(Gs,{onStart:I,onSettings:se,onHelp:Te});case"character-select":return m.jsx(Yp,{characters:Rr,selectedId:n,selectedAvatar:l,onSelect:Ge,onConfirm:Re,onBack:qt});case"game-table":return a?m.jsx(Zp,{gameState:a,selectedCards:f,selectedCharacter:n,selectedAvatar:l,aiCharacters:o,aiAvatars:d,onToggleCardSelection:Tt,onConfirmPlay:E,onPass:z,onChallenge:b,onBackToMenu:en,onLelouchSkill:W,gameLog:c,funnyAction:y,isProcessing:v,canUseSkill:((L=_.current)==null?void 0:L.canPlayerUseSkill("player"))??!0}):null;case"result":{const H=(a==null?void 0:a.winner)==="player",V=((T=a==null?void 0:a.playerStats)==null?void 0:T.geassSuccessCount)||0,G=((R=a==null?void 0:a.aiPlayers)==null?void 0:R.reduce((K,B)=>{var $;return K+((($=B.stats)==null?void 0:$.geassSuccessCount)||0)},0))||0;return m.jsx(qp,{isWin:H,playerScore:V,opponentScore:G,onRestart:q,onMainMenu:vt})}case"settings":return Pt();case"help":return Qe();default:return m.jsx(Gs,{onStart:I,onSettings:se,onHelp:Te})}},Pt=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"设置"}),m.jsxs("div",{className:"cg-settings-content",children:[m.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),m.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),Qe=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"游戏帮助"}),m.jsxs("div",{className:"cg-help-content",children:[m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🎮 游戏规则"}),m.jsxs("ul",{children:[m.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),m.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),m.jsxs("li",{children:[m.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),m.jsx("li",{children:"质疑后翻牌验证："}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),m.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),m.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"👤 角色技能详解"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),m.jsx("br",{}),m.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),m.jsx("br",{}),m.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),m.jsx("br",{}),m.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),m.jsx("br",{}),m.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🃏 特殊牌"}),m.jsx("ul",{children:m.jsxs("li",{children:[m.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return m.jsxs("div",{className:"cg-app",children:[Ue(),m.jsx("style",{children:`
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
      `})]})},zm=$i.createRoot(document.getElementById("root"));zm.render(m.jsx(bd.StrictMode,{children:m.jsx(bm,{})}));
//# sourceMappingURL=index-BfsZu4WS.js.map
