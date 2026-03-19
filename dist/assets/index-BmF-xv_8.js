var wd=Object.defineProperty;var kd=(e,t,n)=>t in e?wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>kd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var Zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iu={exports:{}},Wl={},au={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),Cd=Symbol.for("react.portal"),Nd=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),jd=Symbol.for("react.provider"),Td=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Md=Symbol.for("react.memo"),Id=Symbol.for("react.lazy"),Ho=Symbol.iterator;function zd(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,uu={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=uu,this.updater=n||ou}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cu(){}cu.prototype=Xn.prototype;function Ra(e,t,n){this.props=e,this.context=t,this.refs=uu,this.updater=n||ou}var Oa=Ra.prototype=new cu;Oa.constructor=Ra;su(Oa,Xn.prototype);Oa.isPureReactComponent=!0;var Vo=Array.isArray,du=Object.prototype.hasOwnProperty,Fa={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function pu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)du.call(t,r)&&!fu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var d=Array(u),p=0;p<u;p++)d[p]=arguments[p+2];l.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Fr,type:e,key:i,ref:o,props:l,_owner:Fa.current}}function Ld(e,t){return{$$typeof:Fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr}function Rd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Go=/\/+/g;function ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rd(""+e.key):t.toString(36)}function ul(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Fr:case Cd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+ci(o,0):r,Vo(l)?(n="",e!=null&&(n=e.replace(Go,"$&/")+"/"),ul(l,t,n,"",function(p){return p})):l!=null&&(Da(l)&&(l=Ld(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Go,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Vo(e))for(var u=0;u<e.length;u++){i=e[u];var d=r+ci(i,u);o+=ul(i,t,n,d,l)}else if(d=zd(e),typeof d=="function")for(e=d.call(e),u=0;!(i=e.next()).done;)i=i.value,d=r+ci(i,u++),o+=ul(i,t,n,d,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Vr(e,t,n){if(e==null)return e;var r=[],l=0;return ul(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Od(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},cl={transition:null},Fd={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Fa};function mu(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!Da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Xn;D.Fragment=Nd;D.Profiler=Ed;D.PureComponent=Ra;D.StrictMode=Ad;D.Suspense=Pd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fd;D.act=mu;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=su({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Fa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)du.call(t,d)&&!fu.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var p=0;p<d;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:Fr,type:e.type,key:l,ref:i,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Td,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jd,_context:e},e.Consumer=e};D.createElement=pu;D.createFactory=function(e){var t=pu.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:bd,render:e}};D.isValidElement=Da;D.lazy=function(e){return{$$typeof:Id,_payload:{_status:-1,_result:e},_init:Od}};D.memo=function(e,t){return{$$typeof:Md,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=cl.transition;cl.transition={};try{e()}finally{cl.transition=t}};D.unstable_act=mu;D.useCallback=function(e,t){return Me.current.useCallback(e,t)};D.useContext=function(e){return Me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};D.useEffect=function(e,t){return Me.current.useEffect(e,t)};D.useId=function(){return Me.current.useId()};D.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Me.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};D.useRef=function(e){return Me.current.useRef(e)};D.useState=function(e){return Me.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Me.current.useTransition()};D.version="18.3.1";au.exports=D;var P=au.exports;const Dd=Sd(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=P,Bd=Symbol.for("react.element"),Hd=Symbol.for("react.fragment"),Vd=Object.prototype.hasOwnProperty,Gd=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ud={key:!0,ref:!0,__self:!0,__source:!0};function hu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Vd.call(t,r)&&!Ud.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Bd,type:e,key:i,ref:o,props:l,_owner:Gd.current}}Wl.Fragment=Hd;Wl.jsx=hu;Wl.jsxs=hu;iu.exports=Wl;var m=iu.exports,Hi={},gu={exports:{}},Ue={},vu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,I){var L=E.length;E.push(I);e:for(;0<L;){var K=L-1>>>1,le=E[K];if(0<l(le,I))E[K]=I,E[L]=le,L=K;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var I=E[0],L=E.pop();if(L!==I){E[0]=L;e:for(var K=0,le=E.length,xt=le>>>1;K<xt;){var We=2*(K+1)-1,tn=E[We],ze=We+1,z=E[ze];if(0>l(tn,L))ze<le&&0>l(z,tn)?(E[K]=z,E[ze]=L,K=ze):(E[K]=tn,E[We]=L,K=We);else if(ze<le&&0>l(z,L))E[K]=z,E[ze]=L,K=ze;else break e}}return I}function l(E,I){var L=E.sortIndex-I.sortIndex;return L!==0?L:E.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var d=[],p=[],x=1,a=null,s=3,c=!1,g=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var I=n(p);I!==null;){if(I.callback===null)r(p);else if(I.startTime<=E)r(p),I.sortIndex=I.expirationTime,t(d,I);else break;I=n(p)}}function w(E){if(y=!1,v(E),!g)if(n(d)!==null)g=!0,en(S);else{var I=n(p);I!==null&&yt(w,I.startTime-E)}}function S(E,I){g=!1,y&&(y=!1,f(T),T=-1),c=!0;var L=s;try{for(v(I),a=n(d);a!==null&&(!(a.expirationTime>I)||E&&!C());){var K=a.callback;if(typeof K=="function"){a.callback=null,s=a.priorityLevel;var le=K(a.expirationTime<=I);I=e.unstable_now(),typeof le=="function"?a.callback=le:a===n(d)&&r(d),v(I)}else r(d);a=n(d)}if(a!==null)var xt=!0;else{var We=n(p);We!==null&&yt(w,We.startTime-I),xt=!1}return xt}finally{a=null,s=L,c=!1}}var k=!1,A=null,T=-1,M=5,R=-1;function C(){return!(e.unstable_now()-R<M)}function re(){if(A!==null){var E=e.unstable_now();R=E;var I=!0;try{I=A(!0,E)}finally{I?fe():(k=!1,A=null)}}else k=!1}var fe;if(typeof h=="function")fe=function(){h(re)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,et=je.port2;je.port1.onmessage=re,fe=function(){et.postMessage(null)}}else fe=function(){_(re,0)};function en(E){A=E,k||(k=!0,fe())}function yt(E,I){T=_(function(){E(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){g||c||(g=!0,en(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(E){switch(s){case 1:case 2:case 3:var I=3;break;default:I=s}var L=s;s=I;try{return E()}finally{s=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,I){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=s;s=E;try{return I()}finally{s=L}},e.unstable_scheduleCallback=function(E,I,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,E){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=L+le,E={id:x++,callback:I,priorityLevel:E,startTime:L,expirationTime:le,sortIndex:-1},L>K?(E.sortIndex=L,t(p,E),n(d)===null&&E===n(p)&&(y?(f(T),T=-1):y=!0,yt(w,L-K))):(E.sortIndex=le,t(d,E),g||c||(g=!0,en(S))),E},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(E){var I=s;return function(){var L=s;s=I;try{return E.apply(this,arguments)}finally{s=L}}}})(yu);vu.exports=yu;var Qd=vu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=P,Ge=Qd;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xu=new Set,_r={};function vn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(_r[e]=t,e=0;e<t.length;e++)xu.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vi=Object.prototype.hasOwnProperty,Xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},Qo={};function Kd(e){return Vi.call(Qo,e)?!0:Vi.call(Uo,e)?!1:Xd.test(e)?Qo[e]=!0:(Uo[e]=!0,!1)}function Yd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jd(e,t,n,r){if(t===null||typeof t>"u"||Yd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var $a=/[\-:]([a-z])/g;function Ba(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($a,Ba);xe[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($a,Ba);xe[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($a,Ba);xe[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ha(e,t,n,r){var l=xe.hasOwnProperty(t)?xe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jd(t,n,l,r)&&(n=null),r||l===null?Kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Va=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),wu=Symbol.for("react.context"),Ga=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Qi=Symbol.for("react.suspense_list"),Ua=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),ku=Symbol.for("react.offscreen"),Wo=Symbol.iterator;function qn(e){return e===null||typeof e!="object"?null:(e=Wo&&e[Wo]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,di;function or(e){if(di===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);di=t&&t[1]||""}return`
`+di+e}var fi=!1;function pi(e,t){if(!e||fi)return"";fi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{fi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Zd(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=pi(e.type,!1),e;case 11:return e=pi(e.type.render,!1),e;case 1:return e=pi(e.type,!0),e;default:return""}}function Wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case Gi:return"Profiler";case Va:return"StrictMode";case Ui:return"Suspense";case Qi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wu:return(e.displayName||"Context")+".Consumer";case _u:return(e._context.displayName||"Context")+".Provider";case Ga:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ua:return t=e.displayName||null,t!==null?t:Wi(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return Wi(e(t))}catch{}}return null}function qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wi(t);case 8:return t===Va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Su(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ef(e){var t=Su(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ur(e){e._valueTracker||(e._valueTracker=ef(e))}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Su(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xi(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nu(e,t){t=t.checked,t!=null&&Ha(e,"checked",t,!1)}function Ki(e,t){Nu(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yi(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ko(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yi(e,t,n){(t!=="number"||wl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var sr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(sr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Au(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tf=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function Tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function bu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var nf=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,t){if(t){if(nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,Rn=null,On=null;function Zo(e){if(e=Br(e)){if(typeof na!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Zl(t),na(e.stateNode,e.type,t))}}function Pu(e){Rn?On?On.push(e):On=[e]:Rn=e}function Mu(){if(Rn){var e=Rn,t=On;if(On=Rn=null,Zo(e),t)for(e=0;e<t.length;e++)Zo(t[e])}}function Iu(e,t){return e(t)}function zu(){}var mi=!1;function Lu(e,t,n){if(mi)return e(t,n);mi=!0;try{return Iu(e,t,n)}finally{mi=!1,(Rn!==null||On!==null)&&(zu(),Mu())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ra=!1;if(Et)try{var er={};Object.defineProperty(er,"passive",{get:function(){ra=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{ra=!1}function rf(e,t,n,r,l,i,o,u,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var fr=!1,kl=null,Sl=!1,la=null,lf={onError:function(e){fr=!0,kl=e}};function af(e,t,n,r,l,i,o,u,d){fr=!1,kl=null,rf.apply(lf,arguments)}function of(e,t,n,r,l,i,o,u,d){if(af.apply(this,arguments),fr){if(fr){var p=kl;fr=!1,kl=null}else throw Error(N(198));Sl||(Sl=!0,la=p)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qo(e){if(yn(e)!==e)throw Error(N(188))}function sf(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return qo(l),e;if(i===r)return qo(l),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Ou(e){return e=sf(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fu(e);if(t!==null)return t;e=e.sibling}return null}var Du=Ge.unstable_scheduleCallback,es=Ge.unstable_cancelCallback,uf=Ge.unstable_shouldYield,cf=Ge.unstable_requestPaint,oe=Ge.unstable_now,df=Ge.unstable_getCurrentPriorityLevel,Wa=Ge.unstable_ImmediatePriority,$u=Ge.unstable_UserBlockingPriority,Cl=Ge.unstable_NormalPriority,ff=Ge.unstable_LowPriority,Bu=Ge.unstable_IdlePriority,Xl=null,gt=null;function pf(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:gf,mf=Math.log,hf=Math.LN2;function gf(e){return e>>>=0,e===0?32:31-(mf(e)/hf|0)|0}var Wr=64,Xr=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=ur(u):(i&=o,i!==0&&(r=ur(i)))}else o=n&~l,o!==0?r=ur(o):i!==0&&(r=ur(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),l=1<<n,r|=e[n],t&=~l;return r}function vf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-at(i),u=1<<o,d=l[o];d===-1?(!(u&n)||u&r)&&(l[o]=vf(u,t)):d<=t&&(e.expiredLanes|=u),i&=~u}}function ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hu(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function xf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-at(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Q=0;function Vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gu,Ka,Uu,Qu,Wu,aa=!1,Kr=[],Bt=null,Ht=null,Vt=null,Sr=new Map,Cr=new Map,Ot=[],_f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ts(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function tr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Br(t),t!==null&&Ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wf(e,t,n,r,l){switch(t){case"focusin":return Bt=tr(Bt,e,t,n,r,l),!0;case"dragenter":return Ht=tr(Ht,e,t,n,r,l),!0;case"mouseover":return Vt=tr(Vt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Sr.set(i,tr(Sr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Cr.set(i,tr(Cr.get(i)||null,e,t,n,r,l)),!0}return!1}function Xu(e){var t=on(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ru(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){Uu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ta=r,n.target.dispatchEvent(r),ta=null}else return t=Br(n),t!==null&&Ka(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){dl(e)&&n.delete(t)}function kf(){aa=!1,Bt!==null&&dl(Bt)&&(Bt=null),Ht!==null&&dl(Ht)&&(Ht=null),Vt!==null&&dl(Vt)&&(Vt=null),Sr.forEach(ns),Cr.forEach(ns)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,aa||(aa=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,kf)))}function Nr(e){function t(l){return nr(l,e)}if(0<Kr.length){nr(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&nr(Bt,e),Ht!==null&&nr(Ht,e),Vt!==null&&nr(Vt,e),Sr.forEach(t),Cr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Xu(n),n.blockedOn===null&&Ot.shift()}var Fn=Pt.ReactCurrentBatchConfig,Al=!0;function Sf(e,t,n,r){var l=Q,i=Fn.transition;Fn.transition=null;try{Q=1,Ya(e,t,n,r)}finally{Q=l,Fn.transition=i}}function Cf(e,t,n,r){var l=Q,i=Fn.transition;Fn.transition=null;try{Q=4,Ya(e,t,n,r)}finally{Q=l,Fn.transition=i}}function Ya(e,t,n,r){if(Al){var l=oa(e,t,n,r);if(l===null)Ni(e,t,r,El,n),ts(e,r);else if(wf(l,e,t,n,r))r.stopPropagation();else if(ts(e,r),t&4&&-1<_f.indexOf(e)){for(;l!==null;){var i=Br(l);if(i!==null&&Gu(i),i=oa(e,t,n,r),i===null&&Ni(e,t,r,El,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ni(e,t,r,null,n)}}var El=null;function oa(e,t,n,r){if(El=null,e=Qa(r),e=on(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return El=e,null}function Ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(df()){case Wa:return 1;case $u:return 4;case Cl:case ff:return 16;case Bu:return 536870912;default:return 16}default:return 16}}var Dt=null,Ja=null,fl=null;function Yu(){if(fl)return fl;var e,t=Ja,n=t.length,r,l="value"in Dt?Dt.value:Dt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return fl=l.slice(e,1<r?1-r:void 0)}function pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function rs(){return!1}function Qe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Yr:rs,this.isPropagationStopped=rs,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=Qe(Kn),$r=ne({},Kn,{view:0,detail:0}),Nf=Qe($r),gi,vi,rr,Kl=ne({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(gi=e.screenX-rr.screenX,vi=e.screenY-rr.screenY):vi=gi=0,rr=e),gi)},movementY:function(e){return"movementY"in e?e.movementY:vi}}),ls=Qe(Kl),Af=ne({},Kl,{dataTransfer:0}),Ef=Qe(Af),jf=ne({},$r,{relatedTarget:0}),yi=Qe(jf),Tf=ne({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),bf=Qe(Tf),Pf=ne({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=Qe(Pf),If=ne({},Kn,{data:0}),is=Qe(If),zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rf[e])?!!t[e]:!1}function qa(){return Of}var Ff=ne({},$r,{key:function(e){if(e.key){var t=zf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Df=Qe(Ff),$f=ne({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=Qe($f),Bf=ne({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),Hf=Qe(Bf),Vf=ne({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gf=Qe(Vf),Uf=ne({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qf=Qe(Uf),Wf=[9,13,27,32],eo=Et&&"CompositionEvent"in window,pr=null;Et&&"documentMode"in document&&(pr=document.documentMode);var Xf=Et&&"TextEvent"in window&&!pr,Ju=Et&&(!eo||pr&&8<pr&&11>=pr),os=" ",ss=!1;function Zu(e,t){switch(e){case"keyup":return Wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Kf(e,t){switch(e){case"compositionend":return qu(t);case"keypress":return t.which!==32?null:(ss=!0,os);case"textInput":return e=t.data,e===os&&ss?null:e;default:return null}}function Yf(e,t){if(Cn)return e==="compositionend"||!eo&&Zu(e,t)?(e=Yu(),fl=Ja=Dt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jf[e.type]:t==="textarea"}function ec(e,t,n,r){Pu(r),t=jl(t,"onChange"),0<t.length&&(n=new Za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,Ar=null;function Zf(e){dc(e,0)}function Yl(e){var t=En(e);if(Cu(t))return e}function qf(e,t){if(e==="change")return t}var tc=!1;if(Et){var xi;if(Et){var _i="oninput"in document;if(!_i){var cs=document.createElement("div");cs.setAttribute("oninput","return;"),_i=typeof cs.oninput=="function"}xi=_i}else xi=!1;tc=xi&&(!document.documentMode||9<document.documentMode)}function ds(){mr&&(mr.detachEvent("onpropertychange",nc),Ar=mr=null)}function nc(e){if(e.propertyName==="value"&&Yl(Ar)){var t=[];ec(t,Ar,e,Qa(e)),Lu(Zf,t)}}function ep(e,t,n){e==="focusin"?(ds(),mr=t,Ar=n,mr.attachEvent("onpropertychange",nc)):e==="focusout"&&ds()}function tp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yl(Ar)}function np(e,t){if(e==="click")return Yl(t)}function rp(e,t){if(e==="input"||e==="change")return Yl(t)}function lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:lp;function Er(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Vi.call(t,l)||!st(e[l],t[l]))return!1}return!0}function fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,t){var n=fs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fs(n)}}function rc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=wl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ip(e){var t=lc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rc(n.ownerDocument.documentElement,n)){if(r!==null&&to(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ps(n,i);var o=ps(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=Et&&"documentMode"in document&&11>=document.documentMode,Nn=null,sa=null,hr=null,ua=!1;function ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||Nn==null||Nn!==wl(r)||(r=Nn,"selectionStart"in r&&to(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Er(hr,r)||(hr=r,r=jl(sa,"onSelect"),0<r.length&&(t=new Za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},wi={},ic={};Et&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Jl(e){if(wi[e])return wi[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ic)return wi[e]=t[n];return e}var ac=Jl("animationend"),oc=Jl("animationiteration"),sc=Jl("animationstart"),uc=Jl("transitionend"),cc=new Map,hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){cc.set(e,t),vn(t,[e])}for(var ki=0;ki<hs.length;ki++){var Si=hs[ki],op=Si.toLowerCase(),sp=Si[0].toUpperCase()+Si.slice(1);Jt(op,"on"+sp)}Jt(ac,"onAnimationEnd");Jt(oc,"onAnimationIteration");Jt(sc,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(uc,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),up=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function gs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,of(r,t,void 0,e),e.currentTarget=null}function dc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,p=u.currentTarget;if(u=u.listener,d!==i&&l.isPropagationStopped())break e;gs(l,u,p),i=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,p=u.currentTarget,u=u.listener,d!==i&&l.isPropagationStopped())break e;gs(l,u,p),i=d}}}if(Sl)throw e=la,Sl=!1,la=null,e}function J(e,t){var n=t[ma];n===void 0&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(fc(t,e,2,!1),n.add(r))}function Ci(e,t,n){var r=0;t&&(r|=4),fc(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[Zr]){e[Zr]=!0,xu.forEach(function(n){n!=="selectionchange"&&(up.has(n)||Ci(n,!1,e),Ci(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,Ci("selectionchange",!1,t))}}function fc(e,t,n,r){switch(Ku(t)){case 1:var l=Sf;break;case 4:l=Cf;break;default:l=Ya}n=l.bind(null,t,n,e),l=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ni(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;u!==null;){if(o=on(u),o===null)return;if(d=o.tag,d===5||d===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Lu(function(){var p=i,x=Qa(n),a=[];e:{var s=cc.get(e);if(s!==void 0){var c=Za,g=e;switch(e){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":c=Df;break;case"focusin":g="focus",c=yi;break;case"focusout":g="blur",c=yi;break;case"beforeblur":case"afterblur":c=yi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Hf;break;case ac:case oc:case sc:c=bf;break;case uc:c=Gf;break;case"scroll":c=Nf;break;case"wheel":c=Qf;break;case"copy":case"cut":case"paste":c=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=as}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?s!==null?s+"Capture":null:s;y=[];for(var h=p,v;h!==null;){v=h;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=kr(h,f),w!=null&&y.push(Tr(h,w,v)))),_)break;h=h.return}0<y.length&&(s=new c(s,g,null,n,x),a.push({event:s,listeners:y}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",s&&n!==ta&&(g=n.relatedTarget||n.fromElement)&&(on(g)||g[jt]))break e;if((c||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,c?(g=n.relatedTarget||n.toElement,c=p,g=g?on(g):null,g!==null&&(_=yn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(c=null,g=p),c!==g)){if(y=ls,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=as,w="onPointerLeave",f="onPointerEnter",h="pointer"),_=c==null?s:En(c),v=g==null?s:En(g),s=new y(w,h+"leave",c,n,x),s.target=_,s.relatedTarget=v,w=null,on(x)===p&&(y=new y(f,h+"enter",g,n,x),y.target=v,y.relatedTarget=_,w=y),_=w,c&&g)t:{for(y=c,f=g,h=0,v=y;v;v=wn(v))h++;for(v=0,w=f;w;w=wn(w))v++;for(;0<h-v;)y=wn(y),h--;for(;0<v-h;)f=wn(f),v--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=wn(y),f=wn(f)}y=null}else y=null;c!==null&&vs(a,s,c,y,!1),g!==null&&_!==null&&vs(a,_,g,y,!0)}}e:{if(s=p?En(p):window,c=s.nodeName&&s.nodeName.toLowerCase(),c==="select"||c==="input"&&s.type==="file")var S=qf;else if(us(s))if(tc)S=rp;else{S=tp;var k=ep}else(c=s.nodeName)&&c.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(S=np);if(S&&(S=S(e,p))){ec(a,S,n,x);break e}k&&k(e,s,p),e==="focusout"&&(k=s._wrapperState)&&k.controlled&&s.type==="number"&&Yi(s,"number",s.value)}switch(k=p?En(p):window,e){case"focusin":(us(k)||k.contentEditable==="true")&&(Nn=k,sa=p,hr=null);break;case"focusout":hr=sa=Nn=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,ms(a,n,x);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":ms(a,n,x)}var A;if(eo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Cn?Zu(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ju&&n.locale!=="ko"&&(Cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Cn&&(A=Yu()):(Dt=x,Ja="value"in Dt?Dt.value:Dt.textContent,Cn=!0)),k=jl(p,T),0<k.length&&(T=new is(T,e,null,n,x),a.push({event:T,listeners:k}),A?T.data=A:(A=qu(n),A!==null&&(T.data=A)))),(A=Xf?Kf(e,n):Yf(e,n))&&(p=jl(p,"onBeforeInput"),0<p.length&&(x=new is("onBeforeInput","beforeinput",null,n,x),a.push({event:x,listeners:p}),x.data=A))}dc(a,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=kr(e,n),i!=null&&r.unshift(Tr(e,i,l)),i=kr(e,t),i!=null&&r.push(Tr(e,i,l))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,d=u.alternate,p=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&p!==null&&(u=p,l?(d=kr(n,i),d!=null&&o.unshift(Tr(n,d,u))):l||(d=kr(n,i),d!=null&&o.push(Tr(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var cp=/\r\n?/g,dp=/\u0000|\uFFFD/g;function ys(e){return(typeof e=="string"?e:""+e).replace(cp,`
`).replace(dp,"")}function qr(e,t,n){if(t=ys(t),ys(e)!==t&&n)throw Error(N(425))}function Tl(){}var ca=null,da=null;function fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,fp=typeof clearTimeout=="function"?clearTimeout:void 0,xs=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof xs<"u"?function(e){return xs.resolve(null).then(e).catch(mp)}:pa;function mp(e){setTimeout(function(){throw e})}function Ai(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Nr(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _s(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Yn,br="__reactProps$"+Yn,jt="__reactContainer$"+Yn,ma="__reactEvents$"+Yn,hp="__reactListeners$"+Yn,gp="__reactHandles$"+Yn;function on(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_s(e);e!==null;){if(n=e[mt])return n;e=_s(e)}return t}e=n,n=e.parentNode}return null}function Br(e){return e=e[mt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Zl(e){return e[br]||null}var ha=[],jn=-1;function Zt(e){return{current:e}}function Z(e){0>jn||(e.current=ha[jn],ha[jn]=null,jn--)}function X(e,t){jn++,ha[jn]=e.current,e.current=t}var Yt={},Ee=Zt(Yt),Fe=Zt(!1),fn=Yt;function Hn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function De(e){return e=e.childContextTypes,e!=null}function bl(){Z(Fe),Z(Ee)}function ws(e,t,n){if(Ee.current!==Yt)throw Error(N(168));X(Ee,t),X(Fe,n)}function pc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,qd(e)||"Unknown",l));return ne({},n,r)}function Pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,fn=Ee.current,X(Ee,e),X(Fe,Fe.current),!0}function ks(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=pc(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,Z(Fe),Z(Ee),X(Ee,e)):Z(Fe),X(Fe,n)}var St=null,ql=!1,Ei=!1;function mc(e){St===null?St=[e]:St.push(e)}function vp(e){ql=!0,mc(e)}function qt(){if(!Ei&&St!==null){Ei=!0;var e=0,t=Q;try{var n=St;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,ql=!1}catch(l){throw St!==null&&(St=St.slice(e+1)),Du(Wa,qt),l}finally{Q=t,Ei=!1}}return null}var Tn=[],bn=0,Ml=null,Il=0,Xe=[],Ke=0,pn=null,Ct=1,Nt="";function nn(e,t){Tn[bn++]=Il,Tn[bn++]=Ml,Ml=e,Il=t}function hc(e,t,n){Xe[Ke++]=Ct,Xe[Ke++]=Nt,Xe[Ke++]=pn,pn=e;var r=Ct;e=Nt;var l=32-at(r)-1;r&=~(1<<l),n+=1;var i=32-at(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ct=1<<32-at(t)+l|n<<l|r,Nt=i+e}else Ct=1<<i|n<<l|r,Nt=e}function no(e){e.return!==null&&(nn(e,1),hc(e,1,0))}function ro(e){for(;e===Ml;)Ml=Tn[--bn],Tn[bn]=null,Il=Tn[--bn],Tn[bn]=null;for(;e===pn;)pn=Xe[--Ke],Xe[Ke]=null,Nt=Xe[--Ke],Xe[Ke]=null,Ct=Xe[--Ke],Xe[Ke]=null}var Ve=null,He=null,q=!1,it=null;function gc(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ss(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,He=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:Ct,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,He=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(q){var t=He;if(t){var n=t;if(!Ss(e,t)){if(ga(e))throw Error(N(418));t=Gt(n.nextSibling);var r=Ve;t&&Ss(e,t)?gc(r,n):(e.flags=e.flags&-4097|2,q=!1,Ve=e)}}else{if(ga(e))throw Error(N(418));e.flags=e.flags&-4097|2,q=!1,Ve=e}}}function Cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function el(e){if(e!==Ve)return!1;if(!q)return Cs(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fa(e.type,e.memoizedProps)),t&&(t=He)){if(ga(e))throw vc(),Error(N(418));for(;t;)gc(e,t),t=Gt(t.nextSibling)}if(Cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ve?Gt(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=He;e;)e=Gt(e.nextSibling)}function Vn(){He=Ve=null,q=!1}function lo(e){it===null?it=[e]:it.push(e)}var yp=Pt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function tl(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ns(e){var t=e._init;return t(e._payload)}function yc(e){function t(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function l(f,h){return f=Xt(f,h),f.index=0,f.sibling=null,f}function i(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,h,v,w){return h===null||h.tag!==6?(h=zi(v,f.mode,w),h.return=f,h):(h=l(h,v),h.return=f,h)}function d(f,h,v,w){var S=v.type;return S===Sn?x(f,h,v.props.children,w,v.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Lt&&Ns(S)===h.type)?(w=l(h,v.props),w.ref=lr(f,h,v),w.return=f,w):(w=_l(v.type,v.key,v.props,null,f.mode,w),w.ref=lr(f,h,v),w.return=f,w)}function p(f,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Li(v,f.mode,w),h.return=f,h):(h=l(h,v.children||[]),h.return=f,h)}function x(f,h,v,w,S){return h===null||h.tag!==7?(h=dn(v,f.mode,w,S),h.return=f,h):(h=l(h,v),h.return=f,h)}function a(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=zi(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gr:return v=_l(h.type,h.key,h.props,null,f.mode,v),v.ref=lr(f,null,h),v.return=f,v;case kn:return h=Li(h,f.mode,v),h.return=f,h;case Lt:var w=h._init;return a(f,w(h._payload),v)}if(sr(h)||qn(h))return h=dn(h,f.mode,v,null),h.return=f,h;tl(f,h)}return null}function s(f,h,v,w){var S=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:u(f,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gr:return v.key===S?d(f,h,v,w):null;case kn:return v.key===S?p(f,h,v,w):null;case Lt:return S=v._init,s(f,h,S(v._payload),w)}if(sr(v)||qn(v))return S!==null?null:x(f,h,v,w,null);tl(f,v)}return null}function c(f,h,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(v)||null,u(h,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gr:return f=f.get(w.key===null?v:w.key)||null,d(h,f,w,S);case kn:return f=f.get(w.key===null?v:w.key)||null,p(h,f,w,S);case Lt:var k=w._init;return c(f,h,v,k(w._payload),S)}if(sr(w)||qn(w))return f=f.get(v)||null,x(h,f,w,S,null);tl(h,w)}return null}function g(f,h,v,w){for(var S=null,k=null,A=h,T=h=0,M=null;A!==null&&T<v.length;T++){A.index>T?(M=A,A=null):M=A.sibling;var R=s(f,A,v[T],w);if(R===null){A===null&&(A=M);break}e&&A&&R.alternate===null&&t(f,A),h=i(R,h,T),k===null?S=R:k.sibling=R,k=R,A=M}if(T===v.length)return n(f,A),q&&nn(f,T),S;if(A===null){for(;T<v.length;T++)A=a(f,v[T],w),A!==null&&(h=i(A,h,T),k===null?S=A:k.sibling=A,k=A);return q&&nn(f,T),S}for(A=r(f,A);T<v.length;T++)M=c(A,f,T,v[T],w),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?T:M.key),h=i(M,h,T),k===null?S=M:k.sibling=M,k=M);return e&&A.forEach(function(C){return t(f,C)}),q&&nn(f,T),S}function y(f,h,v,w){var S=qn(v);if(typeof S!="function")throw Error(N(150));if(v=S.call(v),v==null)throw Error(N(151));for(var k=S=null,A=h,T=h=0,M=null,R=v.next();A!==null&&!R.done;T++,R=v.next()){A.index>T?(M=A,A=null):M=A.sibling;var C=s(f,A,R.value,w);if(C===null){A===null&&(A=M);break}e&&A&&C.alternate===null&&t(f,A),h=i(C,h,T),k===null?S=C:k.sibling=C,k=C,A=M}if(R.done)return n(f,A),q&&nn(f,T),S;if(A===null){for(;!R.done;T++,R=v.next())R=a(f,R.value,w),R!==null&&(h=i(R,h,T),k===null?S=R:k.sibling=R,k=R);return q&&nn(f,T),S}for(A=r(f,A);!R.done;T++,R=v.next())R=c(A,f,T,R.value,w),R!==null&&(e&&R.alternate!==null&&A.delete(R.key===null?T:R.key),h=i(R,h,T),k===null?S=R:k.sibling=R,k=R);return e&&A.forEach(function(re){return t(f,re)}),q&&nn(f,T),S}function _(f,h,v,w){if(typeof v=="object"&&v!==null&&v.type===Sn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Gr:e:{for(var S=v.key,k=h;k!==null;){if(k.key===S){if(S=v.type,S===Sn){if(k.tag===7){n(f,k.sibling),h=l(k,v.props.children),h.return=f,f=h;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Lt&&Ns(S)===k.type){n(f,k.sibling),h=l(k,v.props),h.ref=lr(f,k,v),h.return=f,f=h;break e}n(f,k);break}else t(f,k);k=k.sibling}v.type===Sn?(h=dn(v.props.children,f.mode,w,v.key),h.return=f,f=h):(w=_l(v.type,v.key,v.props,null,f.mode,w),w.ref=lr(f,h,v),w.return=f,f=w)}return o(f);case kn:e:{for(k=v.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(f,h.sibling),h=l(h,v.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Li(v,f.mode,w),h.return=f,f=h}return o(f);case Lt:return k=v._init,_(f,h,k(v._payload),w)}if(sr(v))return g(f,h,v,w);if(qn(v))return y(f,h,v,w);tl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(f,h.sibling),h=l(h,v),h.return=f,f=h):(n(f,h),h=zi(v,f.mode,w),h.return=f,f=h),o(f)):n(f,h)}return _}var Gn=yc(!0),xc=yc(!1),zl=Zt(null),Ll=null,Pn=null,io=null;function ao(){io=Pn=Ll=null}function oo(e){var t=zl.current;Z(zl),e._currentValue=t}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Ll=e,io=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(io!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Ll===null)throw Error(N(308));Pn=e,Ll.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var sn=null;function so(e){sn===null?sn=[e]:sn.push(e)}function _c(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,so(t)):(n.next=l.next,l.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Tt(e,n)}return l=r.interleaved,l===null?(t.next=t,so(r)):(t.next=l.next,l.next=t),r.interleaved=t,Tt(e,n)}function ml(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}function As(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Rl(e,t,n,r){var l=e.updateQueue;Rt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,p=d.next;d.next=null,o===null?i=p:o.next=p,o=d;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==o&&(u===null?x.firstBaseUpdate=p:u.next=p,x.lastBaseUpdate=d))}if(i!==null){var a=l.baseState;o=0,x=p=d=null,u=i;do{var s=u.lane,c=u.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:c,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(s=t,c=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){a=g.call(c,a,s);break e}a=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,s=typeof g=="function"?g.call(c,a,s):g,s==null)break e;a=ne({},a,s);break e;case 2:Rt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,s=l.effects,s===null?l.effects=[u]:s.push(u))}else c={eventTime:c,lane:s,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(p=x=c,d=a):x=x.next=c,o|=s;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;s=u,u=s.next,s.next=null,l.lastBaseUpdate=s,l.shared.pending=null}}while(!0);if(x===null&&(d=a),l.baseState=d,l.firstBaseUpdate=p,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);hn|=o,e.lanes=o,e.memoizedState=a}}function Es(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var Hr={},vt=Zt(Hr),Pr=Zt(Hr),Mr=Zt(Hr);function un(e){if(e===Hr)throw Error(N(174));return e}function co(e,t){switch(X(Mr,t),X(Pr,e),X(vt,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zi(t,e)}Z(vt),X(vt,t)}function Un(){Z(vt),Z(Pr),Z(Mr)}function kc(e){un(Mr.current);var t=un(vt.current),n=Zi(t,e.type);t!==n&&(X(Pr,e),X(vt,n))}function fo(e){Pr.current===e&&(Z(vt),Z(Pr))}var ee=Zt(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ji=[];function po(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var hl=Pt.ReactCurrentDispatcher,Ti=Pt.ReactCurrentBatchConfig,mn=0,te=null,ce=null,he=null,Fl=!1,gr=!1,Ir=0,xp=0;function Se(){throw Error(N(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,l,i){if(mn=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Sp:Cp,e=n(r,l),gr){i=0;do{if(gr=!1,Ir=0,25<=i)throw Error(N(301));i+=1,he=ce=null,t.updateQueue=null,hl.current=Np,e=n(r,l)}while(gr)}if(hl.current=Dl,t=ce!==null&&ce.next!==null,mn=0,he=ce=te=null,Fl=!1,t)throw Error(N(300));return e}function go(){var e=Ir!==0;return Ir=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?te.memoizedState=he=e:he=he.next=e,he}function qe(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=he===null?te.memoizedState:he.next;if(t!==null)he=t,ce=e;else{if(e===null)throw Error(N(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},he===null?te.memoizedState=he=e:he=he.next=e}return he}function zr(e,t){return typeof t=="function"?t(e):t}function bi(e){var t=qe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ce,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,d=null,p=i;do{var x=p.lane;if((mn&x)===x)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var a={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(u=d=a,o=r):d=d.next=a,te.lanes|=x,hn|=x}p=p.next}while(p!==null&&p!==i);d===null?o=r:d.next=u,st(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,te.lanes|=i,hn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pi(e){var t=qe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);st(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sc(){}function Cc(e,t){var n=te,r=qe(),l=t(),i=!st(r.memoizedState,l);if(i&&(r.memoizedState=l,Oe=!0),r=r.queue,vo(Ec.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Ac.bind(null,n,r,l,t),void 0,null),ge===null)throw Error(N(349));mn&30||Nc(n,t,l)}return l}function Nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ac(e,t,n,r){t.value=n,t.getSnapshot=r,jc(t)&&Tc(e)}function Ec(e,t,n){return n(function(){jc(t)&&Tc(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Tc(e){var t=Tt(e,1);t!==null&&ot(t,e,1,-1)}function js(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=kp.bind(null,te,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bc(){return qe().memoizedState}function gl(e,t,n,r){var l=pt();te.flags|=e,l.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function ei(e,t,n,r){var l=qe();r=r===void 0?null:r;var i=void 0;if(ce!==null){var o=ce.memoizedState;if(i=o.destroy,r!==null&&mo(r,o.deps)){l.memoizedState=Lr(t,n,i,r);return}}te.flags|=e,l.memoizedState=Lr(1|t,n,i,r)}function Ts(e,t){return gl(8390656,8,e,t)}function vo(e,t){return ei(2048,8,e,t)}function Pc(e,t){return ei(4,2,e,t)}function Mc(e,t){return ei(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zc(e,t,n){return n=n!=null?n.concat([e]):null,ei(4,4,Ic.bind(null,t,e),n)}function yo(){}function Lc(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rc(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oc(e,t,n){return mn&21?(st(n,t)||(n=Hu(),te.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function _p(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Ti.transition;Ti.transition={};try{e(!1),t()}finally{Q=n,Ti.transition=r}}function Fc(){return qe().memoizedState}function wp(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dc(e))$c(t,n);else if(n=_c(e,t,n,r),n!==null){var l=Pe();ot(n,e,r,l),Bc(n,t,r)}}function kp(e,t,n){var r=Wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))$c(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,st(u,o)){var d=t.interleaved;d===null?(l.next=l,so(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=_c(e,t,l,r),n!==null&&(l=Pe(),ot(n,e,r,l),Bc(n,t,r))}}function Dc(e){var t=e.alternate;return e===te||t!==null&&t===te}function $c(e,t){gr=Fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}var Dl={readContext:Ze,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Sp={readContext:Ze,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gl(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gl(4194308,4,e,t)},useInsertionEffect:function(e,t){return gl(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wp.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:js,useDebugValue:yo,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=js(!1),t=e[0];return e=_p.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,l=pt();if(q){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ge===null)throw Error(N(349));mn&30||Nc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ts(Ec.bind(null,r,i,e),[e]),r.flags|=2048,Lr(9,Ac.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=pt(),t=ge.identifierPrefix;if(q){var n=Nt,r=Ct;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cp={readContext:Ze,useCallback:Lc,useContext:Ze,useEffect:vo,useImperativeHandle:zc,useInsertionEffect:Pc,useLayoutEffect:Mc,useMemo:Rc,useReducer:bi,useRef:bc,useState:function(){return bi(zr)},useDebugValue:yo,useDeferredValue:function(e){var t=qe();return Oc(t,ce.memoizedState,e)},useTransition:function(){var e=bi(zr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Fc,unstable_isNewReconciler:!1},Np={readContext:Ze,useCallback:Lc,useContext:Ze,useEffect:vo,useImperativeHandle:zc,useInsertionEffect:Pc,useLayoutEffect:Mc,useMemo:Rc,useReducer:Pi,useRef:bc,useState:function(){return Pi(zr)},useDebugValue:yo,useDeferredValue:function(e){var t=qe();return ce===null?t.memoizedState=e:Oc(t,ce.memoizedState,e)},useTransition:function(){var e=Pi(zr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Fc,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ti={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),l=Wt(e),i=At(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ot(t,e,l,r),ml(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),l=Wt(e),i=At(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ot(t,e,l,r),ml(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Wt(e),l=At(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ut(e,l,r),t!==null&&(ot(t,e,r,n),ml(t,e,r))}};function bs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(l,i):!0}function Hc(e,t,n){var r=!1,l=Yt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(l=De(t)?fn:Ee.current,r=t.contextTypes,i=(r=r!=null)?Hn(e,l):Yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ti,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ps(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ti.enqueueReplaceState(t,t.state,null)}function _a(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},uo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ze(i):(i=De(t)?fn:Ee.current,l.context=Hn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xa(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ti.enqueueReplaceState(l,l.state,null),Rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",r=t;do n+=Zd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Mi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ap=typeof WeakMap=="function"?WeakMap:Map;function Vc(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,Pa=r),wa(e,t)},n}function Gc(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){wa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){wa(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ms(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ap;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=$p.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var Ep=Pt.ReactCurrentOwner,Oe=!1;function be(e,t,n,r){t.child=e===null?xc(t,null,n,r):Gn(t,e.child,n,r)}function Ls(e,t,n,r,l){n=n.render;var i=t.ref;return Dn(t,l),r=ho(e,t,n,r,i,l),n=go(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(q&&n&&no(t),t.flags|=1,be(e,t,r,l),t.child)}function Rs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ao(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uc(e,t,i,r,l)):(e=_l(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Er,n(o,r)&&e.ref===t.ref)return bt(e,t,l)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Er(i,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,bt(e,t,l)}return ka(e,t,n,r,l)}function Qc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(In,Be),Be|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(In,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(In,Be),Be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(In,Be),Be|=r;return be(e,t,l,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ka(e,t,n,r,l){var i=De(n)?fn:Ee.current;return i=Hn(t,i),Dn(t,l),n=ho(e,t,n,r,i,l),r=go(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(q&&r&&no(t),t.flags|=1,be(e,t,n,l),t.child)}function Os(e,t,n,r,l){if(De(n)){var i=!0;Pl(t)}else i=!1;if(Dn(t,l),t.stateNode===null)vl(e,t),Hc(t,n,r),_a(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var d=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ze(p):(p=De(n)?fn:Ee.current,p=Hn(t,p));var x=n.getDerivedStateFromProps,a=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";a||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==p)&&Ps(t,o,r,p),Rt=!1;var s=t.memoizedState;o.state=s,Rl(t,r,o,l),d=t.memoizedState,u!==r||s!==d||Fe.current||Rt?(typeof x=="function"&&(xa(t,n,x,r),d=t.memoizedState),(u=Rt||bs(t,n,u,r,s,d,p))?(a||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=p,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,wc(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:rt(t.type,u),o.props=p,a=t.pendingProps,s=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ze(d):(d=De(n)?fn:Ee.current,d=Hn(t,d));var c=n.getDerivedStateFromProps;(x=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==a||s!==d)&&Ps(t,o,r,d),Rt=!1,s=t.memoizedState,o.state=s,Rl(t,r,o,l);var g=t.memoizedState;u!==a||s!==g||Fe.current||Rt?(typeof c=="function"&&(xa(t,n,c,r),g=t.memoizedState),(p=Rt||bs(t,n,p,r,s,g,d)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=d,r=p):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return Sa(e,t,n,r,i,l)}function Sa(e,t,n,r,l,i){Wc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ks(t,n,!1),bt(e,t,i);r=t.stateNode,Ep.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,u,i)):be(e,t,u,i),t.memoizedState=r.state,l&&ks(t,n,!0),t.child}function Xc(e){var t=e.stateNode;t.pendingContext?ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ws(e,t.context,!1),co(e,t.containerInfo)}function Fs(e,t,n,r,l){return Vn(),lo(l),t.flags|=256,be(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,t,n){var r=t.pendingProps,l=ee.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(ee,l&1),e===null)return va(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=li(o,r,0,null),e=dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Na(n),t.memoizedState=Ca,e):xo(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return jp(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Xt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Xt(u,i):(i=dn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Na(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xo(e,t){return t=li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function nl(e,t,n,r){return r!==null&&lo(r),Gn(t,e.child,null,n),e=xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Mi(Error(N(422))),nl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=li({mode:"visible",children:r.children},l,0,null),i=dn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,o),t.child.memoizedState=Na(o),t.memoizedState=Ca,i);if(!(t.mode&1))return nl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(N(419)),r=Mi(i,r,void 0),nl(e,t,o,r)}if(u=(o&e.childLanes)!==0,Oe||u){if(r=ge,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Tt(e,l),ot(r,e,l,-1))}return No(),r=Mi(Error(N(421))),nl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Bp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,He=Gt(l.nextSibling),Ve=t,q=!0,it=null,e!==null&&(Xe[Ke++]=Ct,Xe[Ke++]=Nt,Xe[Ke++]=pn,Ct=e.id,Nt=e.overflow,pn=t),t=xo(t,r.children),t.flags|=4096,t)}function Ds(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function Ii(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Yc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(be(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ds(e,n,t);else if(e.tag===19)Ds(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ee,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ol(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ii(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ol(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ii(t,!0,n,null,i);break;case"together":Ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tp(e,t,n){switch(t.tag){case 3:Xc(t),Vn();break;case 5:kc(t);break;case 1:De(t.type)&&Pl(t);break;case 4:co(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;X(zl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Kc(e,t,n):(X(ee,ee.current&1),e=bt(e,t,n),e!==null?e.sibling:null);X(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Qc(e,t,n)}return bt(e,t,n)}var Jc,Aa,Zc,qc;Jc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Aa=function(){};Zc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,un(vt.current);var i=null;switch(n){case"input":l=Xi(e,l),r=Xi(e,r),i=[];break;case"select":l=ne({},l,{value:void 0}),r=ne({},r,{value:void 0}),i=[];break;case"textarea":l=Ji(e,l),r=Ji(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Tl)}qi(n,r);var o;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(_r.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var d=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&d!==u&&(d!=null||u!=null))if(p==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(i||(i=[]),i.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(i=i||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(_r.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&J("scroll",e),i||u===d||(i=[])):(i=i||[]).push(p,d))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};qc=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bp(e,t,n){var r=t.pendingProps;switch(ro(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return De(t.type)&&bl(),Ce(t),null;case 3:return r=t.stateNode,Un(),Z(Fe),Z(Ee),po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(el(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(za(it),it=null))),Aa(e,t),Ce(t),null;case 5:fo(t);var l=un(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ce(t),null}if(e=un(vt.current),el(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[br]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(l=0;l<cr.length;l++)J(cr[l],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Xo(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":Yo(r,i),J("invalid",r)}qi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&qr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&qr(r.textContent,u,e),l=["children",""+u]):_r.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Ur(r),Ko(r,i,!0);break;case"textarea":Ur(r),Jo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Tl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mt]=t,e[br]=r,Jc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ea(n,r),n){case"dialog":J("cancel",e),J("close",e),l=r;break;case"iframe":case"object":case"embed":J("load",e),l=r;break;case"video":case"audio":for(l=0;l<cr.length;l++)J(cr[l],e);l=r;break;case"source":J("error",e),l=r;break;case"img":case"image":case"link":J("error",e),J("load",e),l=r;break;case"details":J("toggle",e),l=r;break;case"input":Xo(e,r),l=Xi(e,r),J("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ne({},r,{value:void 0}),J("invalid",e);break;case"textarea":Yo(e,r),l=Ji(e,r),J("invalid",e);break;default:l=r}qi(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var d=u[i];i==="style"?bu(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ju(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&wr(e,d):typeof d=="number"&&wr(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_r.hasOwnProperty(i)?d!=null&&i==="onScroll"&&J("scroll",e):d!=null&&Ha(e,i,d,o))}switch(n){case"input":Ur(e),Ko(e,r,!1);break;case"textarea":Ur(e),Jo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ln(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)qc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=un(Mr.current),un(vt.current),el(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ce(t),null;case 13:if(Z(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&He!==null&&t.mode&1&&!(t.flags&128))vc(),Vn(),t.flags|=98560,i=!1;else if(i=el(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[mt]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else it!==null&&(za(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?de===0&&(de=3):No())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Un(),Aa(e,t),e===null&&jr(t.stateNode.containerInfo),Ce(t),null;case 10:return oo(t.type._context),Ce(t),null;case 17:return De(t.type)&&bl(),Ce(t),null;case 19:if(Z(ee),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)ir(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ol(e),o!==null){for(t.flags|=128,ir(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>Wn&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ol(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!q)return Ce(t),null}else 2*oe()-i.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=ee.current,X(ee,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Co(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Pp(e,t){switch(ro(t),t.tag){case 1:return De(t.type)&&bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),Z(Fe),Z(Ee),po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fo(t),null;case 13:if(Z(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ee),null;case 4:return Un(),null;case 10:return oo(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var rl=!1,Ae=!1,Mp=typeof WeakSet=="function"?WeakSet:Set,j=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Ea(e,t,n){try{n()}catch(r){ie(e,t,r)}}var $s=!1;function Ip(e,t){if(ca=Al,e=lc(),to(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,p=0,x=0,a=e,s=null;t:for(;;){for(var c;a!==n||l!==0&&a.nodeType!==3||(u=o+l),a!==i||r!==0&&a.nodeType!==3||(d=o+r),a.nodeType===3&&(o+=a.nodeValue.length),(c=a.firstChild)!==null;)s=a,a=c;for(;;){if(a===e)break t;if(s===n&&++p===l&&(u=o),s===i&&++x===r&&(d=o),(c=a.nextSibling)!==null)break;a=s,s=a.parentNode}a=c}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(da={focusedElem:e,selectionRange:n},Al=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,_=g.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:rt(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=$s,$s=!1,g}function vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ea(t,n,i)}l=l.next}while(l!==r)}}function ni(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[br],delete t[ma],delete t[hp],delete t[gp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function td(e){return e.tag===5||e.tag===3||e.tag===4}function Bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tl));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}var ve=null,lt=!1;function zt(e,t,n){for(n=n.child;n!==null;)nd(e,t,n),n=n.sibling}function nd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Ae||Mn(n,t);case 6:var r=ve,l=lt;ve=null,zt(e,t,n),ve=r,lt=l,ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?Ai(e.parentNode,n):e.nodeType===1&&Ai(e,n),Nr(e)):Ai(ve,n.stateNode));break;case 4:r=ve,l=lt,ve=n.stateNode.containerInfo,lt=!0,zt(e,t,n),ve=r,lt=l;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ea(n,t,o),l=l.next}while(l!==r)}zt(e,t,n);break;case 1:if(!Ae&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ie(n,t,u)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,zt(e,t,n),Ae=r):zt(e,t,n);break;default:zt(e,t,n)}}function Hs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Mp),t.forEach(function(r){var l=Hp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,lt=!1;break e;case 3:ve=u.stateNode.containerInfo,lt=!0;break e;case 4:ve=u.stateNode.containerInfo,lt=!0;break e}u=u.return}if(ve===null)throw Error(N(160));nd(i,o,l),ve=null,lt=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(p){ie(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rd(t,e),t=t.sibling}function rd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),ft(e),r&4){try{vr(3,e,e.return),ni(3,e)}catch(y){ie(e,e.return,y)}try{vr(5,e,e.return)}catch(y){ie(e,e.return,y)}}break;case 1:nt(t,e),ft(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(nt(t,e),ft(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var l=e.stateNode;try{wr(l,"")}catch(y){ie(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Nu(l,i),ea(u,o);var p=ea(u,i);for(o=0;o<d.length;o+=2){var x=d[o],a=d[o+1];x==="style"?bu(l,a):x==="dangerouslySetInnerHTML"?ju(l,a):x==="children"?wr(l,a):Ha(l,x,a,p)}switch(u){case"input":Ki(l,i);break;case"textarea":Au(l,i);break;case"select":var s=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var c=i.value;c!=null?Ln(l,!!i.multiple,c,!1):s!==!!i.multiple&&(i.defaultValue!=null?Ln(l,!!i.multiple,i.defaultValue,!0):Ln(l,!!i.multiple,i.multiple?[]:"",!1))}l[br]=i}catch(y){ie(e,e.return,y)}}break;case 6:if(nt(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){ie(e,e.return,y)}}break;case 3:if(nt(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(y){ie(e,e.return,y)}break;case 4:nt(t,e),ft(e);break;case 13:nt(t,e),ft(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ko=oe())),r&4&&Hs(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(p=Ae)||x,nt(t,e),Ae=p):nt(t,e),ft(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(j=e,x=e.child;x!==null;){for(a=j=x;j!==null;){switch(s=j,c=s.child,s.tag){case 0:case 11:case 14:case 15:vr(4,s,s.return);break;case 1:Mn(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:Mn(s,s.return);break;case 22:if(s.memoizedState!==null){Gs(a);continue}}c!==null?(c.return=s,j=c):Gs(a)}x=x.sibling}e:for(x=null,a=e;;){if(a.tag===5){if(x===null){x=a;try{l=a.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=a.stateNode,d=a.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Tu("display",o))}catch(y){ie(e,e.return,y)}}}else if(a.tag===6){if(x===null)try{a.stateNode.nodeValue=p?"":a.memoizedProps}catch(y){ie(e,e.return,y)}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;x===a&&(x=null),a=a.return}x===a&&(x=null),a.sibling.return=a.return,a=a.sibling}}break;case 19:nt(t,e),ft(e),r&4&&Hs(e);break;case 21:break;default:nt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(td(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(wr(l,""),r.flags&=-33);var i=Bs(e);ba(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Bs(e);Ta(e,u,o);break;default:throw Error(N(161))}}catch(d){ie(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zp(e,t,n){j=e,ld(e)}function ld(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||rl;if(!o){var u=l.alternate,d=u!==null&&u.memoizedState!==null||Ae;u=rl;var p=Ae;if(rl=o,(Ae=d)&&!p)for(j=l;j!==null;)o=j,d=o.child,o.tag===22&&o.memoizedState!==null?Us(l):d!==null?(d.return=o,j=d):Us(l);for(;i!==null;)j=i,ld(i),i=i.sibling;j=l,rl=u,Ae=p}Vs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):Vs(e)}}function Vs(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||ni(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Es(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Es(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var a=x.dehydrated;a!==null&&Nr(a)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ae||t.flags&512&&ja(t)}catch(s){ie(t,t.return,s)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Gs(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Us(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ni(4,t)}catch(d){ie(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){ie(t,l,d)}}var i=t.return;try{ja(t)}catch(d){ie(t,i,d)}break;case 5:var o=t.return;try{ja(t)}catch(d){ie(t,o,d)}}}catch(d){ie(t,t.return,d)}if(t===e){j=null;break}var u=t.sibling;if(u!==null){u.return=t.return,j=u;break}j=t.return}}var Lp=Math.ceil,$l=Pt.ReactCurrentDispatcher,_o=Pt.ReactCurrentOwner,Je=Pt.ReactCurrentBatchConfig,$=0,ge=null,ue=null,ye=0,Be=0,In=Zt(0),de=0,Rr=null,hn=0,ri=0,wo=0,yr=null,Re=null,ko=0,Wn=1/0,kt=null,Bl=!1,Pa=null,Qt=null,ll=!1,$t=null,Hl=0,xr=0,Ma=null,yl=-1,xl=0;function Pe(){return $&6?oe():yl!==-1?yl:yl=oe()}function Wt(e){return e.mode&1?$&2&&ye!==0?ye&-ye:yp.transition!==null?(xl===0&&(xl=Hu()),xl):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Ku(e.type)),e):1}function ot(e,t,n,r){if(50<xr)throw xr=0,Ma=null,Error(N(185));Dr(e,n,r),(!($&2)||e!==ge)&&(e===ge&&(!($&2)&&(ri|=n),de===4&&Ft(e,ye)),$e(e,r),n===1&&$===0&&!(t.mode&1)&&(Wn=oe()+500,ql&&qt()))}function $e(e,t){var n=e.callbackNode;yf(e,t);var r=Nl(e,e===ge?ye:0);if(r===0)n!==null&&es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&es(n),t===1)e.tag===0?vp(Qs.bind(null,e)):mc(Qs.bind(null,e)),pp(function(){!($&6)&&qt()}),n=null;else{switch(Vu(r)){case 1:n=Wa;break;case 4:n=$u;break;case 16:n=Cl;break;case 536870912:n=Bu;break;default:n=Cl}n=fd(n,id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function id(e,t){if(yl=-1,xl=0,$&6)throw Error(N(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var r=Nl(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vl(e,r);else{t=r;var l=$;$|=2;var i=od();(ge!==e||ye!==t)&&(kt=null,Wn=oe()+500,cn(e,t));do try{Fp();break}catch(u){ad(e,u)}while(!0);ao(),$l.current=i,$=l,ue!==null?t=0:(ge=null,ye=0,t=de)}if(t!==0){if(t===2&&(l=ia(e),l!==0&&(r=l,t=Ia(e,l))),t===1)throw n=Rr,cn(e,0),Ft(e,r),$e(e,oe()),n;if(t===6)Ft(e,r);else{if(l=e.current.alternate,!(r&30)&&!Rp(l)&&(t=Vl(e,r),t===2&&(i=ia(e),i!==0&&(r=i,t=Ia(e,i))),t===1))throw n=Rr,cn(e,0),Ft(e,r),$e(e,oe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:rn(e,Re,kt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=ko+500-oe(),10<t)){if(Nl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=pa(rn.bind(null,e,Re,kt),t);break}rn(e,Re,kt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-at(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lp(r/1960))-r,10<r){e.timeoutHandle=pa(rn.bind(null,e,Re,kt),r);break}rn(e,Re,kt);break;case 5:rn(e,Re,kt);break;default:throw Error(N(329))}}}return $e(e,oe()),e.callbackNode===n?id.bind(null,e):null}function Ia(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Vl(e,t),e!==2&&(t=Re,Re=n,t!==null&&za(t)),e}function za(e){Re===null?Re=e:Re.push.apply(Re,e)}function Rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!st(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~wo,t&=~ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Qs(e){if($&6)throw Error(N(327));$n();var t=Nl(e,0);if(!(t&1))return $e(e,oe()),null;var n=Vl(e,t);if(e.tag!==0&&n===2){var r=ia(e);r!==0&&(t=r,n=Ia(e,r))}if(n===1)throw n=Rr,cn(e,0),Ft(e,t),$e(e,oe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Re,kt),$e(e,oe()),null}function So(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Wn=oe()+500,ql&&qt())}}function gn(e){$t!==null&&$t.tag===0&&!($&6)&&$n();var t=$;$|=1;var n=Je.transition,r=Q;try{if(Je.transition=null,Q=1,e)return e()}finally{Q=r,Je.transition=n,$=t,!($&6)&&qt()}}function Co(){Be=In.current,Z(In)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fp(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(ro(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:Un(),Z(Fe),Z(Ee),po();break;case 5:fo(r);break;case 4:Un();break;case 13:Z(ee);break;case 19:Z(ee);break;case 10:oo(r.type._context);break;case 22:case 23:Co()}n=n.return}if(ge=e,ue=e=Xt(e.current,null),ye=Be=t,de=0,Rr=null,wo=ri=hn=0,Re=yr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}sn=null}return e}function ad(e,t){do{var n=ue;try{if(ao(),hl.current=Dl,Fl){for(var r=te.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Fl=!1}if(mn=0,he=ce=te=null,gr=!1,Ir=0,_o.current=null,n===null||n.return===null){de=1,Rr=t,ue=null;break}e:{var i=e,o=n.return,u=n,d=t;if(t=ye,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,x=u,a=x.tag;if(!(x.mode&1)&&(a===0||a===11||a===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var c=Is(o);if(c!==null){c.flags&=-257,zs(c,o,u,i,t),c.mode&1&&Ms(i,p,t),t=c,d=p;var g=t.updateQueue;if(g===null){var y=new Set;y.add(d),t.updateQueue=y}else g.add(d);break e}else{if(!(t&1)){Ms(i,p,t),No();break e}d=Error(N(426))}}else if(q&&u.mode&1){var _=Is(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),zs(_,o,u,i,t),lo(Qn(d,u));break e}}i=d=Qn(d,u),de!==4&&(de=2),yr===null?yr=[i]:yr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Vc(i,d,t);As(i,f);break e;case 1:u=d;var h=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qt===null||!Qt.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Gc(i,u,t);As(i,w);break e}}i=i.return}while(i!==null)}ud(n)}catch(S){t=S,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function od(){var e=$l.current;return $l.current=Dl,e===null?Dl:e}function No(){(de===0||de===3||de===2)&&(de=4),ge===null||!(hn&268435455)&&!(ri&268435455)||Ft(ge,ye)}function Vl(e,t){var n=$;$|=2;var r=od();(ge!==e||ye!==t)&&(kt=null,cn(e,t));do try{Op();break}catch(l){ad(e,l)}while(!0);if(ao(),$=n,$l.current=r,ue!==null)throw Error(N(261));return ge=null,ye=0,de}function Op(){for(;ue!==null;)sd(ue)}function Fp(){for(;ue!==null&&!uf();)sd(ue)}function sd(e){var t=dd(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?ud(e):ue=t,_o.current=null}function ud(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pp(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ue=null;return}}else if(n=bp(n,t,Be),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);de===0&&(de=5)}function rn(e,t,n){var r=Q,l=Je.transition;try{Je.transition=null,Q=1,Dp(e,t,n,r)}finally{Je.transition=l,Q=r}return null}function Dp(e,t,n,r){do $n();while($t!==null);if($&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(xf(e,i),e===ge&&(ue=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,fd(Cl,function(){return $n(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Je.transition,Je.transition=null;var o=Q;Q=1;var u=$;$|=4,_o.current=null,Ip(e,n),rd(n,e),ip(da),Al=!!ca,da=ca=null,e.current=n,zp(n),cf(),$=u,Q=o,Je.transition=i}else e.current=n;if(ll&&(ll=!1,$t=e,Hl=l),i=e.pendingLanes,i===0&&(Qt=null),pf(n.stateNode),$e(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Bl)throw Bl=!1,e=Pa,Pa=null,e;return Hl&1&&e.tag!==0&&$n(),i=e.pendingLanes,i&1?e===Ma?xr++:(xr=0,Ma=e):xr=0,qt(),null}function $n(){if($t!==null){var e=Vu(Hl),t=Je.transition,n=Q;try{if(Je.transition=null,Q=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,Hl=0,$&6)throw Error(N(331));var l=$;for($|=4,j=e.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var u=i.deletions;if(u!==null){for(var d=0;d<u.length;d++){var p=u[d];for(j=p;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:vr(8,x,i)}var a=x.child;if(a!==null)a.return=x,j=a;else for(;j!==null;){x=j;var s=x.sibling,c=x.return;if(ed(x),x===p){j=null;break}if(s!==null){s.return=c,j=s;break}j=c}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var h=e.current;for(j=h;j!==null;){o=j;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,j=v;else e:for(o=h;j!==null;){if(u=j,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ni(9,u)}}catch(S){ie(u,u.return,S)}if(u===o){j=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,j=w;break e}j=u.return}}if($=l,qt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Xl,e)}catch{}r=!0}return r}finally{Q=n,Je.transition=t}}return!1}function Ws(e,t,n){t=Qn(n,t),t=Vc(e,t,1),e=Ut(e,t,1),t=Pe(),e!==null&&(Dr(e,1,t),$e(e,t))}function ie(e,t,n){if(e.tag===3)Ws(e,e,n);else for(;t!==null;){if(t.tag===3){Ws(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Qn(n,e),e=Gc(t,e,1),t=Ut(t,e,1),e=Pe(),t!==null&&(Dr(t,1,e),$e(t,e));break}}t=t.return}}function $p(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>oe()-ko?cn(e,0):wo|=n),$e(e,t)}function cd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=Pe();e=Tt(e,t),e!==null&&(Dr(e,t,n),$e(e,n))}function Bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cd(e,n)}function Hp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),cd(e,n)}var dd;dd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Tp(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,q&&t.flags&1048576&&hc(t,Il,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vl(e,t),e=t.pendingProps;var l=Hn(t,Ee.current);Dn(t,n),l=ho(null,t,r,e,l,n);var i=go();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,Pl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,uo(t),l.updater=ti,t.stateNode=l,l._reactInternals=t,_a(t,r,e,n),t=Sa(null,t,r,!0,i,n)):(t.tag=0,q&&i&&no(t),be(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gp(r),e=rt(r,e),l){case 0:t=ka(null,t,r,e,n);break e;case 1:t=Os(null,t,r,e,n);break e;case 11:t=Ls(null,t,r,e,n);break e;case 14:t=Rs(null,t,r,rt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),ka(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),Os(e,t,r,l,n);case 3:e:{if(Xc(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,l=i.element,wc(e,t),Rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Qn(Error(N(423)),t),t=Fs(e,t,r,n,l);break e}else if(r!==l){l=Qn(Error(N(424)),t),t=Fs(e,t,r,n,l);break e}else for(He=Gt(t.stateNode.containerInfo.firstChild),Ve=t,q=!0,it=null,n=xc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===l){t=bt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return kc(t),e===null&&va(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,fa(r,l)?o=null:i!==null&&fa(r,i)&&(t.flags|=32),Wc(e,t),be(e,t,o,n),t.child;case 6:return e===null&&va(t),null;case 13:return Kc(e,t,n);case 4:return co(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),Ls(e,t,r,l,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,X(zl,r._currentValue),r._currentValue=o,i!==null)if(st(i.value,o)){if(i.children===l.children&&!Fe.current){t=bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=At(-1,n&-n),d.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?d.next=d:(d.next=x.next,x.next=d),p.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),ya(i.return,n,t),u.lanes|=n;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(N(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ya(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}be(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Dn(t,n),l=Ze(l),r=r(l),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,l=rt(r,t.pendingProps),l=rt(r.type,l),Rs(e,t,r,l,n);case 15:return Uc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:rt(r,l),vl(e,t),t.tag=1,De(r)?(e=!0,Pl(t)):e=!1,Dn(t,n),Hc(t,r,l),_a(t,r,l,n),Sa(null,t,r,!0,e,n);case 19:return Yc(e,t,n);case 22:return Qc(e,t,n)}throw Error(N(156,t.tag))};function fd(e,t){return Du(e,t)}function Vp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new Vp(e,t,n,r)}function Ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gp(e){if(typeof e=="function")return Ao(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ga)return 11;if(e===Ua)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _l(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ao(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return dn(n.children,l,i,t);case Va:o=8,l|=8;break;case Gi:return e=Ye(12,n,t,l|2),e.elementType=Gi,e.lanes=i,e;case Ui:return e=Ye(13,n,t,l),e.elementType=Ui,e.lanes=i,e;case Qi:return e=Ye(19,n,t,l),e.elementType=Qi,e.lanes=i,e;case ku:return li(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _u:o=10;break e;case wu:o=9;break e;case Ga:o=11;break e;case Ua:o=14;break e;case Lt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ye(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function dn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function li(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=ku,e.lanes=n,e.stateNode={isHidden:!1},e}function zi(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Li(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Up(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hi(0),this.expirationTimes=hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Eo(e,t,n,r,l,i,o,u,d){return e=new Up(e,t,n,u,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uo(i),e}function Qp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pd(e){if(!e)return Yt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(De(n))return pc(e,n,t)}return t}function md(e,t,n,r,l,i,o,u,d){return e=Eo(n,r,!0,e,l,i,o,u,d),e.context=pd(null),n=e.current,r=Pe(),l=Wt(n),i=At(r,l),i.callback=t??null,Ut(n,i,l),e.current.lanes=l,Dr(e,l,r),$e(e,r),e}function ii(e,t,n,r){var l=t.current,i=Pe(),o=Wt(l);return n=pd(n),t.context===null?t.context=n:t.pendingContext=n,t=At(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(l,t,o),e!==null&&(ot(e,l,o,i),ml(e,l,o)),o}function Gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jo(e,t){Xs(e,t),(e=e.alternate)&&Xs(e,t)}function Wp(){return null}var hd=typeof reportError=="function"?reportError:function(e){console.error(e)};function To(e){this._internalRoot=e}ai.prototype.render=To.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ii(e,t,null,null)};ai.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gn(function(){ii(null,e,null,null)}),t[jt]=null}};function ai(e){this._internalRoot=e}ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Xu(e)}};function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ks(){}function Xp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var p=Gl(o);i.call(p)}}var o=md(t,r,e,0,null,!1,!1,"",Ks);return e._reactRootContainer=o,e[jt]=o.current,jr(e.nodeType===8?e.parentNode:e),gn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var p=Gl(d);u.call(p)}}var d=Eo(e,0,!1,null,null,!1,!1,"",Ks);return e._reactRootContainer=d,e[jt]=d.current,jr(e.nodeType===8?e.parentNode:e),gn(function(){ii(t,d,n,r)}),d}function si(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var d=Gl(o);u.call(d)}}ii(t,o,e,l)}else o=Xp(n,t,e,l,r);return Gl(o)}Gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ur(t.pendingLanes);n!==0&&(Xa(t,n|1),$e(t,oe()),!($&6)&&(Wn=oe()+500,qt()))}break;case 13:gn(function(){var r=Tt(e,1);if(r!==null){var l=Pe();ot(r,e,1,l)}}),jo(e,1)}};Ka=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Pe();ot(t,e,134217728,n)}jo(e,134217728)}};Uu=function(e){if(e.tag===13){var t=Wt(e),n=Tt(e,t);if(n!==null){var r=Pe();ot(n,e,t,r)}jo(e,t)}};Qu=function(){return Q};Wu=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};na=function(e,t,n){switch(t){case"input":if(Ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Zl(r);if(!l)throw Error(N(90));Cu(r),Ki(r,l)}}}break;case"textarea":Au(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Iu=So;zu=gn;var Kp={usingClientEntryPoint:!1,Events:[Br,En,Zl,Pu,Mu,So]},ar={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ou(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Xl=il.inject(Yp),gt=il}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kp;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bo(t))throw Error(N(200));return Qp(e,t,null,n)};Ue.createRoot=function(e,t){if(!bo(e))throw Error(N(299));var n=!1,r="",l=hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Eo(e,1,!1,null,null,n,!1,r,l),e[jt]=t.current,jr(e.nodeType===8?e.parentNode:e),new To(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Ou(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return gn(e)};Ue.hydrate=function(e,t,n){if(!oi(t))throw Error(N(200));return si(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!bo(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=hd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=md(t,null,e,1,n??null,l,!1,i,o),e[jt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ai(t)};Ue.render=function(e,t,n){if(!oi(t))throw Error(N(200));return si(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!oi(e))throw Error(N(40));return e._reactRootContainer?(gn(function(){si(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Ue.unstable_batchedUpdates=So;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oi(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return si(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gd)}catch(e){console.error(e)}}gd(),gu.exports=Ue;var Jp=gu.exports,Ys=Jp;Hi.createRoot=Ys.createRoot,Hi.hydrateRoot=Ys.hydrateRoot;const Js=({onStart:e,onSettings:t,onHelp:n})=>m.jsxs("div",{className:"cg-main-menu",children:[m.jsxs("div",{className:"cg-menu-bg",children:[m.jsx("div",{className:"cg-menu-bg-gradient"}),m.jsx("div",{className:"cg-menu-bg-pattern"}),m.jsx("div",{className:"cg-menu-geass-symbols",children:m.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:m.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),m.jsxs("div",{className:"cg-menu-content",children:[m.jsxs("div",{className:"cg-menu-header",children:[m.jsxs("div",{className:"cg-menu-title-decoration",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:m.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),m.jsx("div",{className:"cg-title-line-right"})]}),m.jsxs("h1",{className:"cg-game-title",children:[m.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),m.jsx("span",{className:"cg-title-divider",children:":"}),m.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),m.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),m.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[m.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),m.jsx("div",{className:"cg-title-line-right"})]})]}),m.jsxs("nav",{className:"cg-menu-nav",children:[m.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("span",{className:"cg-button-text",children:"开始游戏"}),m.jsx("div",{className:"cg-button-shimmer"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:t,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),m.jsx("span",{className:"cg-button-text",children:"设置"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),m.jsx("footer",{className:"cg-menu-footer",children:m.jsx("div",{className:"cg-footer-decoration",children:m.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),m.jsx("style",{children:`
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
      `})]}),Or=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function Zp(e){return Or.find(t=>t.id===e)}function Ne(e){if(!e)return"未知角色";const t=Zp(e);return(t==null?void 0:t.name)||e}const qp=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},em=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let Ri=null;const Ul=()=>(Ri===null&&(Ri=qp()),Ri),tm=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:l})=>{const[i,o]=P.useState(!1),[u,d]=P.useState(r),[p,x]=P.useState(!1),[a,s]=P.useState(!0),c=P.useRef(null),g=P.useRef(null),[y]=P.useState(()=>Math.floor(Math.random()*4)+1),_=n||y,f=P.useMemo(()=>em(t),[t]),h=P.useCallback((v=!0)=>`${`avatars/${e}/${_}`}-${f}.${v?"webp":"png"}`,[e,_,f]);return P.useEffect(()=>{if(r||u)return;const v=new IntersectionObserver(S=>{S.forEach(k=>{k.isIntersecting&&d(!0)})},{rootMargin:"50px",threshold:.1}),w=g.current;return w&&v.observe(w),()=>{w&&v.unobserve(w),v.disconnect()}},[r,u]),P.useEffect(()=>{if(!u)return;(async()=>{if(Ul()&&a){const S=new Image;S.src=h(!0),S.onload=()=>{o(!0),l==null||l()},S.onerror=()=>{s(!1)}}else{const S=new Image;S.src=h(!1),S.onload=()=>{o(!0),l==null||l()},S.onerror=()=>{x(!0)}}})()},[u,h,l,a]),m.jsxs("div",{ref:g,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"transparent",position:"relative"},children:[!i&&!p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},children:m.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#dc2626",fontSize:t*.2},children:"?"}),u&&m.jsxs("picture",{children:[Ul()&&a&&m.jsx("source",{srcSet:h(!0),type:"image/webp"}),m.jsx("img",{ref:c,src:h(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:i?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),m.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class Ql{static preloadCharacter(t){const n=["small","medium","large"],r=Ul();for(let l=1;l<=4;l++)n.forEach(i=>{const o=`avatars/${t}/${l}-${i}.webp`,u=`avatars/${t}/${l}-${i}.png`;if(r&&!this.preloadedAvatars.has(o)){const d=new Image;d.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(u)){const d=new Image;d.src=u,this.preloadedAvatars.add(u)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(Ul()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const u=new Image;u.src=o,this.preloadedAvatars.add(o)}}const i=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(i)){const o=new Image;o.src=i,this.preloadedAvatars.add(i)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}me(Ql,"preloadedAvatars",new Set);const Po=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>m.jsx(tm,{characterId:e,size:t,avatarNumber:n??1,priority:r}),nm=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,i]=P.useState(null),[o]=P.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),u=Or.find(p=>p.id===e);P.useEffect(()=>{e&&Ql.preloadAvatar(e,o[e])},[e,o]);const d=p=>{const x=o[p];t(p,x)};return m.jsxs("div",{className:"cg-character-select",children:[m.jsxs("div",{className:"cg-select-bg",children:[m.jsx("div",{className:"cg-select-bg-gradient"}),m.jsx("div",{className:"cg-select-bg-pattern"})]}),m.jsxs("div",{className:"cg-select-content",children:[m.jsxs("header",{className:"cg-select-header",children:[m.jsxs("button",{className:"cg-back-button",onClick:r,children:[m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),m.jsx("span",{children:"返回"})]}),m.jsx("h2",{className:"cg-select-title",children:m.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),m.jsx("div",{className:"cg-select-placeholder"})]}),m.jsx("div",{className:"cg-character-grid",children:Or.map(p=>{const x=e===p.id,a=l===p.id;return m.jsxs("div",{className:`cg-character-card ${x?"cg-selected":""} ${a?"cg-hovered":""}`,onClick:()=>d(p.id),onMouseEnter:()=>i(p.id),onMouseLeave:()=>i(null),children:[m.jsxs("div",{className:"cg-card-frame",children:[m.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),m.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),m.jsx("div",{className:"cg-character-preview",children:m.jsx(Po,{characterId:p.id,size:300,avatarNumber:o[p.id],priority:l===p.id||e===p.id})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("h3",{className:"cg-character-name",children:p.name}),m.jsx("p",{className:"cg-character-name-en",children:p.nameEn}),m.jsx("div",{className:"cg-character-skill",children:m.jsx("span",{className:"cg-skill-name",children:p.skill.name})})]}),x&&m.jsx("div",{className:"cg-selected-indicator",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:m.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),m.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${p.color}40 0%, transparent 70%)`}})]},p.id)})}),u&&m.jsx("div",{className:"cg-character-detail",children:m.jsxs("div",{className:"cg-detail-frame",children:[m.jsxs("div",{className:"cg-detail-content",children:[m.jsx("p",{className:"cg-detail-description",children:u.description}),m.jsxs("div",{className:"cg-detail-skill",children:[m.jsx("span",{className:"cg-skill-label",children:"技能:"}),m.jsx("span",{className:"cg-skill-value",children:u.skill.name}),m.jsx("p",{className:"cg-skill-desc",children:u.skill.description})]})]}),m.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[m.jsx("span",{children:"确认选择"}),m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),m.jsx("style",{children:`
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
      `})]})},rm="/liars-game/assets/cards/card-back.svg",al=e=>{if(!e)return"#d4af37";const t=Or.find(n=>n.id===e);return(t==null?void 0:t.color)||"#d4af37"},lm=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:l=["cc","suzaku","kallen"],aiAvatars:i={},onToggleCardSelection:o,onConfirmPlay:u,onPass:d,onChallenge:p,onBackToMenu:x,onLelouchSkill:a,gameLog:s=[],isProcessing:c=!1,canUseSkill:g=!0})=>{var z,b,F,B,G,U,Y,H,V,pe,_e,tt,Te,Mt,ae,W,xn,Le,ut,ct,It,dt,_n,we,Mo,Io,zo,Lo,Ro,Oo,Fo,Do,$o,Bo;const[y,_]=P.useState(!1),[f,h]=P.useState(!1),v=P.useRef(null),w=P.useRef(null),S=P.useRef(s.length),k=P.useRef(null),A=typeof window<"u"&&window.innerWidth<=768;if(P.useEffect(()=>{if(v.current&&s.length>S.current){const O=v.current;O.scrollTo({top:O.scrollHeight,behavior:"smooth"})}S.current=s.length},[s]),P.useEffect(()=>{if(!A||!f)return;const O=()=>{k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{h(!1)},3e3)};O();const ke=w.current;if(ke){const _t=["click","touchstart","scroll"];return _t.forEach(Jn=>{ke.addEventListener(Jn,O)}),()=>{_t.forEach(Jn=>{ke.removeEventListener(Jn,O)}),k.current&&clearTimeout(k.current)}}return()=>{k.current&&clearTimeout(k.current)}},[f,A]),P.useEffect(()=>{n&&Ql.preloadAvatar(n,r),l.forEach(O=>{const ke=i[O]||1;Ql.preloadAvatar(O,ke)})},[n,r,l,i]),!e)return null;const{phase:T,liarCard:M,playerStats:R,aiPlayers:C,turnState:re}=e,fe=T==="player_turn",je=T==="challenge",et=e.playerHand||[],en=(re==null?void 0:re.turnNumber)||1,yt=je,E=()=>{t.length>0&&u()},I=()=>_(!0),L=()=>{h(O=>!O)},K=O=>{_(!1),a==null||a(O)},le=O=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[O]||O,xt=O=>O==="joker"?"#d4af37":O==="hearts"||O==="diamonds"?"#dc2626":"#1a1a24",We=Ne(n??void 0),tn=al(n),ze=(O,ke,_t,Jn,vd,yd,xd=!1,_d=!0)=>m.jsxs("div",{className:`cg-character ${xd?"cg-character-top":""} ${_d?"":"cg-character-dead"}`,children:[m.jsx("div",{className:"cg-character-avatar",children:ke&&m.jsx(Po,{characterId:ke,size:120,avatarNumber:yd,priority:!0})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("div",{className:"cg-character-name",style:{color:vd},children:O}),m.jsxs("div",{className:"cg-character-stats",children:[m.jsx("span",{children:Array(_t).fill("❤️").join("")}),m.jsxs("span",{className:"cg-card-count",children:["🃏",Jn]})]})]})]});return m.jsxs("div",{className:"cg-game-table",children:[m.jsxs("div",{className:"cg-main-layout",children:[m.jsxs("button",{className:`cg-log-toggle-btn ${f?"expanded":""}`,onClick:L,"aria-label":f?"收起记录":"展开记录",children:[m.jsx("span",{className:"cg-log-toggle-icon",children:"📜"}),!f&&s.length>0&&m.jsx("span",{className:"cg-log-badge",children:s.length})]}),m.jsxs("div",{ref:w,className:`cg-log-panel ${f?"expanded":"collapsed"}`,children:[m.jsxs("div",{className:"cg-log-header",children:[m.jsx("span",{children:"📜 游戏记录"}),m.jsx("button",{className:"cg-log-close-btn",onClick:L,children:"✕"})]}),m.jsx("div",{ref:v,className:"cg-log-content",children:s.map((O,ke)=>m.jsx("div",{className:`cg-log-item ${O.includes("质疑")?"challenge":""} ${O.includes("Geass")?"geass":""}`,children:O},ke))})]}),f&&m.jsx("div",{className:"cg-log-overlay",onClick:L}),m.jsxs("div",{className:"cg-game-area",children:[m.jsx("div",{className:"cg-ai-top",children:ze(Ne(((z=C==null?void 0:C[1])==null?void 0:z.character)||l[1]),((b=C==null?void 0:C[1])==null?void 0:b.character)||l[1],((B=(F=C==null?void 0:C[1])==null?void 0:F.stats)==null?void 0:B.hp)||0,((U=(G=C==null?void 0:C[1])==null?void 0:G.hand)==null?void 0:U.length)||0,al(((Y=C==null?void 0:C[1])==null?void 0:Y.character)||l[1]),i[((H=C==null?void 0:C[1])==null?void 0:H.character)||l[1]]||1,!0,((V=C==null?void 0:C[1])==null?void 0:V.isActive)!==!1&&(((_e=(pe=C==null?void 0:C[1])==null?void 0:pe.stats)==null?void 0:_e.hp)||0)>0)}),m.jsxs("div",{className:"cg-middle-section",children:[m.jsx("div",{className:"cg-ai-left",children:ze(Ne(((tt=C==null?void 0:C[2])==null?void 0:tt.character)||l[2]),((Te=C==null?void 0:C[2])==null?void 0:Te.character)||l[2],((ae=(Mt=C==null?void 0:C[2])==null?void 0:Mt.stats)==null?void 0:ae.hp)||0,((xn=(W=C==null?void 0:C[2])==null?void 0:W.hand)==null?void 0:xn.length)||0,al(((Le=C==null?void 0:C[2])==null?void 0:Le.character)||l[2]),i[((ut=C==null?void 0:C[2])==null?void 0:ut.character)||l[2]]||1,!1,((ct=C==null?void 0:C[2])==null?void 0:ct.isActive)!==!1&&(((dt=(It=C==null?void 0:C[2])==null?void 0:It.stats)==null?void 0:dt.hp)||0)>0)}),m.jsx("div",{className:"cg-table-area",children:m.jsx("div",{className:"cg-table",children:m.jsx("div",{className:"cg-table-inner",children:re!=null&&re.playedCards?m.jsxs("div",{className:"cg-played",children:[m.jsxs("div",{className:"cg-played-name",children:[re.playedCards.playerId==="player"?We:re.playedCards.playerId.startsWith("ai")?Ne(((_n=C==null?void 0:C.find(O=>{var ke;return O.id===((ke=re.playedCards)==null?void 0:ke.playerId)}))==null?void 0:_n.character)||"cc"):"未知玩家"," ","出牌"]}),m.jsx("div",{className:"cg-cards",children:re.playedCards.actualCards.map(O=>m.jsx("div",{className:"cg-card-small cg-card-back",children:m.jsx("img",{src:rm,alt:"牌背"})},O.id))}),m.jsxs("div",{className:"cg-card-count-display",children:[re.playedCards.cardIds.length," 张牌"]})]}):m.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),m.jsx("div",{className:"cg-ai-right",children:ze(Ne(((we=C==null?void 0:C[0])==null?void 0:we.character)||l[0]),((Mo=C==null?void 0:C[0])==null?void 0:Mo.character)||l[0],((zo=(Io=C==null?void 0:C[0])==null?void 0:Io.stats)==null?void 0:zo.hp)||0,((Ro=(Lo=C==null?void 0:C[0])==null?void 0:Lo.hand)==null?void 0:Ro.length)||0,al(((Oo=C==null?void 0:C[0])==null?void 0:Oo.character)||l[0]),i[((Fo=C==null?void 0:C[0])==null?void 0:Fo.character)||l[0]]||1,!1,((Do=C==null?void 0:C[0])==null?void 0:Do.isActive)!==!1&&(((Bo=($o=C==null?void 0:C[0])==null?void 0:$o.stats)==null?void 0:Bo.hp)||0)>0)})]}),m.jsxs("div",{className:"cg-player-section",children:[m.jsxs("div",{className:"cg-player-info",children:[ze(We,n,R.hp,et.length,tn,r),n==="lelouch"&&fe&&m.jsx("button",{className:"cg-skill-btn",onClick:I,disabled:c||!g,children:g?"绝对命令":"已使用"})]}),m.jsx("div",{className:"cg-hand-section",children:m.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,et.length*26+22)}px`},children:et.map((O,ke)=>{const _t=t.includes(O.id);return m.jsxs("button",{className:`cg-card ${_t?"selected":""} ${!fe||c?"disabled":""}`,onClick:()=>o(O.id),style:{left:`${ke*26}px`,transform:_t?"translateY(-8px)":"none",zIndex:_t?et.length+10:et.length-ke},disabled:!fe||c,children:[m.jsxs("div",{className:"cg-card-face",children:[m.jsx("div",{style:{color:xt(O.suit),fontSize:"13px"},children:O.rank}),m.jsx("div",{style:{color:xt(O.suit),fontSize:"15px"},children:le(O.suit)})]}),_t&&m.jsx("div",{className:"cg-check",children:"✓"})]},O.id)})})})]})]})]}),m.jsxs("div",{className:"cg-bottom-bar",children:[m.jsx("div",{className:"cg-bottom-left",children:m.jsx("button",{className:"cg-back-btn",onClick:x,children:"← 返回主页面"})}),m.jsxs("div",{className:"cg-bottom-center",children:[!yt&&m.jsxs("div",{className:"cg-status-text",children:[fe&&t.length===0&&"请选择要出的牌",fe&&t.length>0&&`已选择 ${t.length} 张牌`,je&&!yt&&"等待其他玩家质疑...",!fe&&!je&&"AI回合中..."]}),m.jsxs("div",{className:"cg-action-buttons",children:[fe&&t.length>0&&m.jsxs("button",{className:"cg-btn cg-btn-play",onClick:E,disabled:c,children:["出牌 (",t.length,")"]}),yt&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:p,disabled:c,children:"⚔️ 质疑"}),m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:c,children:"不质疑"})]})]})]}),m.jsxs("div",{className:"cg-bottom-right",children:[m.jsxs("div",{className:"cg-round-display",children:[m.jsx("div",{className:"cg-round-label",children:"回合"}),m.jsx("div",{className:"cg-round-number",children:en})]}),m.jsxs("div",{className:"cg-liar-display",children:[m.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),m.jsx("div",{className:"cg-liar-value",children:M})]})]})]}),y&&m.jsx("div",{className:"cg-modal",children:m.jsxs("div",{className:"cg-modal-content",children:[m.jsx("h3",{children:"选择新的骗子牌"}),m.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(O=>m.jsx("button",{className:O===M?"current":"",onClick:()=>K(O),children:O},O))}),m.jsx("button",{className:"cg-btn-skip",onClick:()=>_(!1),children:"取消"})]})}),m.jsx("style",{children:`
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
            height: 160px;
            gap: 15px;
            padding: 0 10px;
          }
          .cg-hand-section {
            min-width: 120px;
            max-width: 280px;
          }
          .cg-card {
            width: 42px;
            height: 62px;
          }

          /* 底部栏优化 */
          .cg-bottom-bar {
            padding: 0 10px;
            height: 60px;
            gap: 10px;
          }
          .cg-bottom-left, .cg-bottom-right { width: 80px; }
          .cg-back-btn {
            padding: 6px 10px;
            font-size: 11px;
          }
          .cg-status-text { font-size: 11px; }
          .cg-btn {
            padding: 6px 14px;
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
            width: 95px;
            min-width: 95px;
            height: 135px;
            min-height: 135px;
          }
          .cg-character-avatar { transform: scale(0.65); }
          .cg-ai-top { height: 110px; }
          .cg-ai-left, .cg-ai-right { width: 100px; }
          .cg-table { width: 120px; height: 120px; }
          .cg-table-inner { width: 100px; height: 100px; }
          .cg-player-section {
            height: 140px;
            gap: 10px;
          }
          .cg-card {
            width: 38px;
            height: 56px;
          }
          .cg-hand { height: 70px; }
        }

        /* 隐藏桌面端按钮 */
        @media (min-width: 769px) {
          .cg-log-toggle-btn,
          .cg-log-overlay,
          .cg-log-close-btn {
            display: none;
          }
        }
      `})]})},im=({isWin:e,turnNumber:t,onRestart:n,onMainMenu:r})=>{const[l,i]=P.useState(!1),[o,u]=P.useState(!1);P.useEffect(()=>{e&&i(!0);const p=setTimeout(()=>u(!0),1e3);return()=>clearTimeout(p)},[e]);const d=e?"lelouch":"cc";return m.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[m.jsxs("div",{className:"cg-result-bg",children:[m.jsx("div",{className:"cg-result-bg-gradient"}),e?m.jsx("div",{className:"cg-result-bg-win",children:m.jsx("div",{className:"cg-victory-rays"})}):m.jsx("div",{className:"cg-result-bg-lose",children:m.jsx("div",{className:"cg-defeat-shadow"})})]}),l&&m.jsx(am,{}),m.jsxs("div",{className:`cg-result-content ${o?"cg-animate-in":""}`,children:[m.jsxs("div",{className:"cg-result-header",children:[m.jsx("div",{className:"cg-result-badge",children:e?m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((p,x)=>m.jsx("circle",{cx:50+35*Math.cos((x*72-90)*Math.PI/180),cy:50+35*Math.sin((x*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:m.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${x*.2}s`,repeatCount:"indefinite"})},x))]}):m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),m.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),m.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),m.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),m.jsx("div",{className:"cg-result-character",children:m.jsxs("div",{className:"cg-character-showcase",children:[m.jsx(Po,{characterId:d,size:200}),m.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),m.jsx("div",{className:"cg-result-score",children:m.jsxs("div",{className:"cg-score-simple",children:[m.jsx("span",{className:"cg-score-label",children:"回合数"}),m.jsx("span",{className:"cg-score-value",children:t})]})}),m.jsxs("div",{className:"cg-result-actions",children:[m.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),m.jsx("span",{children:"再来一局"})]}),m.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:r,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),m.jsx("span",{children:"返回主菜单"})]})]})]}),m.jsx("style",{children:`
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
      `})]})},am=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return m.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>m.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var wt={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var a=this||n;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var s=this||n;if(a=parseFloat(a),s.ctx||x(),typeof a<"u"&&a>=0&&a<=1){if(s._volume=a,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[c]._soundById(g[y]);_&&_._node&&(_._node.volume=_._volume*a)}return s}return s._volume},mute:function(a){var s=this||n;s.ctx||x(),s._muted=a,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(a?0:s._volume,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[c]._soundById(g[y]);_&&_._node&&(_._node.muted=a?!0:_._muted)}return s},stop:function(){for(var a=this||n,s=0;s<a._howls.length;s++)a._howls[s].stop();return a},unload:function(){for(var a=this||n,s=a._howls.length-1;s>=0;s--)a._howls[s].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,x()),a},codecs:function(a){return(this||n)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||n;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var s=new Audio;s.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return a}if(!s||typeof s.canPlayType!="function")return a;var c=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",y=g.match(/OPR\/(\d+)/g),_=y&&parseInt(y[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,h=g.match(/Version\/(.*?) /),v=f&&h&&parseInt(h[1],10)<15;return a._codecs={mp3:!!(!_&&(c||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!c,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||n;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var s=function(c){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var y=0;y<a._howls.length;y++)if(!a._howls[y]._webAudio)for(var _=a._howls[y]._getSoundIds(),f=0;f<_.length;f++){var h=a._howls[y]._soundById(_[f]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<a._howls.length;w++)a._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),a}},_obtainHtml5Audio:function(){var a=this||n;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var s=this||n;return a._unlocked&&s._html5AudioPool.push(a),s},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<a._howls.length;s++)if(a._howls[s]._webAudio){for(var c=0;c<a._howls[s]._sounds.length;c++)if(!a._howls[s]._sounds[c]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!n.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var s=0;s<a._howls.length;s++)a._howls[s]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var n=new t,r=function(a){var s=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(a)};r.prototype={init:function(a){var s=this;return n.ctx||x(),s._autoplay=a.autoplay||!1,s._format=typeof a.format!="string"?a.format:[a.format],s._html5=a.html5||!1,s._muted=a.mute||!1,s._loop=a.loop||!1,s._pool=a.pool||5,s._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,s._rate=a.rate||1,s._sprite=a.sprite||{},s._src=typeof a.src!="string"?a.src:[a.src],s._volume=a.volume!==void 0?a.volume:1,s._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=a.onend?[{fn:a.onend}]:[],s._onfade=a.onfade?[{fn:a.onfade}]:[],s._onload=a.onload?[{fn:a.onload}]:[],s._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],s._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],s._onpause=a.onpause?[{fn:a.onpause}]:[],s._onplay=a.onplay?[{fn:a.onplay}]:[],s._onstop=a.onstop?[{fn:a.onstop}]:[],s._onmute=a.onmute?[{fn:a.onmute}]:[],s._onvolume=a.onvolume?[{fn:a.onvolume}]:[],s._onrate=a.onrate?[{fn:a.onrate}]:[],s._onseek=a.onseek?[{fn:a.onseek}]:[],s._onunlock=a.onunlock?[{fn:a.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var a=this,s=null;if(n.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var c=0;c<a._src.length;c++){var g,y;if(a._format&&a._format[c])g=a._format[c];else{if(y=a._src[c],typeof y!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(y),g||(g=/\.([^.]+)$/.exec(y.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=a._src[c];break}}if(!s){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=s,a._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new l(a),a._webAudio&&o(a),a},play:function(a,s){var c=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&c._state==="loaded"&&!c._sprite[a])return null;if(typeof a>"u"&&(a="__default",!c._playLock)){for(var y=0,_=0;_<c._sounds.length;_++)c._sounds[_]._paused&&!c._sounds[_]._ended&&(y++,g=c._sounds[_]._id);y===1?a=null:g=null}}var f=g?c._soundById(g):c._inactiveSound();if(!f)return null;if(g&&!a&&(a=f._sprite||"__default"),c._state!=="loaded"){f._sprite=a,f._ended=!1;var h=f._id;return c._queue.push({event:"play",action:function(){c.play(h)}}),h}if(g&&!f._paused)return s||c._loadQueue("play"),f._id;c._webAudio&&n._autoResume();var v=Math.max(0,f._seek>0?f._seek:c._sprite[a][0]/1e3),w=Math.max(0,(c._sprite[a][0]+c._sprite[a][1])/1e3-v),S=w*1e3/Math.abs(f._rate),k=c._sprite[a][0]/1e3,A=(c._sprite[a][0]+c._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var T=function(){f._paused=!1,f._seek=v,f._start=k,f._stop=A,f._loop=!!(f._loop||c._sprite[a][2])};if(v>=A){c._ended(f);return}var M=f._node;if(c._webAudio){var R=function(){c._playLock=!1,T(),c._refreshBuffer(f);var je=f._muted||c._muted?0:f._volume;M.gain.setValueAtTime(je,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof M.bufferSource.start>"u"?f._loop?M.bufferSource.noteGrainOn(0,v,86400):M.bufferSource.noteGrainOn(0,v,w):f._loop?M.bufferSource.start(0,v,86400):M.bufferSource.start(0,v,w),S!==1/0&&(c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),S)),s||setTimeout(function(){c._emit("play",f._id),c._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?R():(c._playLock=!0,c.once("resume",R),c._clearTimer(f._id))}else{var C=function(){M.currentTime=v,M.muted=f._muted||c._muted||n._muted||M.muted,M.volume=f._volume*n.volume(),M.playbackRate=f._rate;try{var je=M.play();if(je&&typeof Promise<"u"&&(je instanceof Promise||typeof je.then=="function")?(c._playLock=!0,T(),je.then(function(){c._playLock=!1,M._unlocked=!0,s?c._loadQueue():c._emit("play",f._id)}).catch(function(){c._playLock=!1,c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(c._playLock=!1,T(),c._emit("play",f._id)),M.playbackRate=f._rate,M.paused){c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),S):(c._endTimers[f._id]=function(){c._ended(f),M.removeEventListener("ended",c._endTimers[f._id],!1)},M.addEventListener("ended",c._endTimers[f._id],!1))}catch(et){c._emit("playerror",f._id,et)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=c._src,M.load());var re=window&&window.ejecta||!M.readyState&&n._navigator.isCocoonJS;if(M.readyState>=3||re)C();else{c._playLock=!0,c._state="loading";var fe=function(){c._state="loaded",C(),M.removeEventListener(n._canPlayEvent,fe,!1)};M.addEventListener(n._canPlayEvent,fe,!1),c._clearTimer(f._id)}}return f._id},pause:function(a){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(a)}}),s;for(var c=s._getSoundIds(a),g=0;g<c.length;g++){s._clearTimer(c[g]);var y=s._soundById(c[g]);if(y&&!y._paused&&(y._seek=s.seek(c[g]),y._rateSeek=0,y._paused=!0,s._stopFade(c[g]),y._node))if(s._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),s._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||s._emit("pause",y?y._id:null)}return s},stop:function(a,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"stop",action:function(){c.stop(a)}}),c;for(var g=c._getSoundIds(a),y=0;y<g.length;y++){c._clearTimer(g[y]);var _=c._soundById(g[y]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,c._stopFade(g[y]),_._node&&(c._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&c._clearSound(_._node))),s||c._emit("stop",_._id))}return c},mute:function(a,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"mute",action:function(){c.mute(a,s)}}),c;if(typeof s>"u")if(typeof a=="boolean")c._muted=a;else return c._muted;for(var g=c._getSoundIds(s),y=0;y<g.length;y++){var _=c._soundById(g[y]);_&&(_._muted=a,_._interval&&c._stopFade(_._id),c._webAudio&&_._node?_._node.gain.setValueAtTime(a?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:a),c._emit("mute",_._id))}return c},volume:function(){var a=this,s=arguments,c,g;if(s.length===0)return a._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length>=2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c<"u"&&c>=0&&c<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,s)}}),a;typeof g>"u"&&(a._volume=c),g=a._getSoundIds(g);for(var h=0;h<g.length;h++)f=a._soundById(g[h]),f&&(f._volume=c,s[2]||a._stopFade(g[h]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(c,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=c*n.volume()),a._emit("volume",f._id))}else return f=g?a._soundById(g):a._sounds[0],f?f._volume:0;return a},fade:function(a,s,c,g){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(a,s,c,g)}}),y;a=Math.min(Math.max(0,parseFloat(a)),1),s=Math.min(Math.max(0,parseFloat(s)),1),c=parseFloat(c),y.volume(a,g);for(var _=y._getSoundIds(g),f=0;f<_.length;f++){var h=y._soundById(_[f]);if(h){if(g||y._stopFade(_[f]),y._webAudio&&!h._muted){var v=n.ctx.currentTime,w=v+c/1e3;h._volume=a,h._node.gain.setValueAtTime(a,v),h._node.gain.linearRampToValueAtTime(s,w)}y._startFadeInterval(h,a,s,c,_[f],typeof g>"u")}}return y},_startFadeInterval:function(a,s,c,g,y,_){var f=this,h=s,v=c-s,w=Math.abs(v/.01),S=Math.max(4,w>0?g/w:g),k=Date.now();a._fadeTo=c,a._interval=setInterval(function(){var A=(Date.now()-k)/g;k=Date.now(),h+=v*A,h=Math.round(h*100)/100,v<0?h=Math.max(c,h):h=Math.min(c,h),f._webAudio?a._volume=h:f.volume(h,a._id,!0),_&&(f._volume=h),(c<s&&h<=c||c>s&&h>=c)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(c,a._id),f._emit("fade",a._id))},S)},_stopFade:function(a){var s=this,c=s._soundById(a);return c&&c._interval&&(s._webAudio&&c._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(c._interval),c._interval=null,s.volume(c._fadeTo,a),c._fadeTo=null,s._emit("fade",a)),s},loop:function(){var a=this,s=arguments,c,g,y;if(s.length===0)return a._loop;if(s.length===1)if(typeof s[0]=="boolean")c=s[0],a._loop=c;else return y=a._soundById(parseInt(s[0],10)),y?y._loop:!1;else s.length===2&&(c=s[0],g=parseInt(s[1],10));for(var _=a._getSoundIds(g),f=0;f<_.length;f++)y=a._soundById(_[f]),y&&(y._loop=c,a._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=c,c&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,a.playing(_[f])&&(a.pause(_[f],!0),a.play(_[f],!0)))));return a},rate:function(){var a=this,s=arguments,c,g;if(s.length===0)g=a._sounds[0]._id;else if(s.length===1){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,s)}}),a;typeof g>"u"&&(a._rate=c),g=a._getSoundIds(g);for(var h=0;h<g.length;h++)if(f=a._soundById(g[h]),f){a.playing(g[h])&&(f._rateSeek=a.seek(g[h]),f._playStart=a._webAudio?n.ctx.currentTime:f._playStart),f._rate=c,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(c,n.ctx.currentTime):f._node&&(f._node.playbackRate=c);var v=a.seek(g[h]),w=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-v,S=w*1e3/Math.abs(f._rate);(a._endTimers[g[h]]||!f._paused)&&(a._clearTimer(g[h]),a._endTimers[g[h]]=setTimeout(a._ended.bind(a,f),S)),a._emit("rate",f._id)}}else return f=a._soundById(g),f?f._rate:a._rate;return a},seek:function(){var a=this,s=arguments,c,g;if(s.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(s.length===1){var y=a._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):a._sounds.length&&(g=a._sounds[0]._id,c=parseFloat(s[0]))}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof c=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,s)}}),a;var f=a._soundById(g);if(f)if(typeof c=="number"&&c>=0){var h=a.playing(g);h&&a.pause(g,!0),f._seek=c,f._ended=!1,a._clearTimer(g),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=c);var v=function(){h&&a.play(g,!0),a._emit("seek",g)};if(h&&!a._webAudio){var w=function(){a._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(a._webAudio){var S=a.playing(g)?n.ctx.currentTime-f._playStart:0,k=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(k+S*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var s=this;if(typeof a=="number"){var c=s._soundById(a);return c?!c._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(a){var s=this,c=s._duration,g=s._soundById(a);return g&&(c=s._sprite[g._sprite][1]/1e3),c},state:function(){return this._state},unload:function(){for(var a=this,s=a._sounds,c=0;c<s.length;c++)s[c]._paused||a.stop(s[c]._id),a._webAudio||(a._clearSound(s[c]._node),s[c]._node.removeEventListener("error",s[c]._errorFn,!1),s[c]._node.removeEventListener(n._canPlayEvent,s[c]._loadFn,!1),s[c]._node.removeEventListener("ended",s[c]._endFn,!1),n._releaseHtml5Audio(s[c]._node)),delete s[c]._node,a._clearTimer(s[c]._id);var g=n._howls.indexOf(a);g>=0&&n._howls.splice(g,1);var y=!0;for(c=0;c<n._howls.length;c++)if(n._howls[c]._src===a._src||a._src.indexOf(n._howls[c]._src)>=0){y=!1;break}return i&&y&&delete i[a._src],n.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,s,c,g){var y=this,_=y["_on"+a];return typeof s=="function"&&_.push(g?{id:c,fn:s,once:g}:{id:c,fn:s}),y},off:function(a,s,c){var g=this,y=g["_on"+a],_=0;if(typeof s=="number"&&(c=s,s=null),s||c)for(_=0;_<y.length;_++){var f=c===y[_].id;if(s===y[_].fn&&f||!s&&f){y.splice(_,1);break}}else if(a)g["_on"+a]=[];else{var h=Object.keys(g);for(_=0;_<h.length;_++)h[_].indexOf("_on")===0&&Array.isArray(g[h[_]])&&(g[h[_]]=[])}return g},once:function(a,s,c){var g=this;return g.on(a,s,c,1),g},_emit:function(a,s,c){for(var g=this,y=g["_on"+a],_=y.length-1;_>=0;_--)(!y[_].id||y[_].id===s||a==="load")&&(setTimeout((function(f){f.call(this,s,c)}).bind(g,y[_].fn),0),y[_].once&&g.off(a,y[_].fn,y[_].id));return g._loadQueue(a),g},_loadQueue:function(a){var s=this;if(s._queue.length>0){var c=s._queue[0];c.event===a&&(s._queue.shift(),s._loadQueue()),a||c.action()}return s},_ended:function(a){var s=this,c=a._sprite;if(!s._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(s._ended.bind(s,a),100),s;var g=!!(a._loop||s._sprite[c][2]);if(s._emit("end",a._id),!s._webAudio&&g&&s.stop(a._id,!0).play(a._id),s._webAudio&&g){s._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=n.ctx.currentTime;var y=(a._stop-a._start)*1e3/Math.abs(a._rate);s._endTimers[a._id]=setTimeout(s._ended.bind(s,a),y)}return s._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,s._clearTimer(a._id),s._cleanBuffer(a._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(a._id,!0),s},_clearTimer:function(a){var s=this;if(s._endTimers[a]){if(typeof s._endTimers[a]!="function")clearTimeout(s._endTimers[a]);else{var c=s._soundById(a);c&&c._node&&c._node.removeEventListener("ended",s._endTimers[a],!1)}delete s._endTimers[a]}return s},_soundById:function(a){for(var s=this,c=0;c<s._sounds.length;c++)if(a===s._sounds[c]._id)return s._sounds[c];return null},_inactiveSound:function(){var a=this;a._drain();for(var s=0;s<a._sounds.length;s++)if(a._sounds[s]._ended)return a._sounds[s].reset();return new l(a)},_drain:function(){var a=this,s=a._pool,c=0,g=0;if(!(a._sounds.length<s)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&c++;for(g=a._sounds.length-1;g>=0;g--){if(c<=s)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),c--)}}},_getSoundIds:function(a){var s=this;if(typeof a>"u"){for(var c=[],g=0;g<s._sounds.length;g++)c.push(s._sounds[g]._id);return c}else return[a]},_refreshBuffer:function(a){var s=this;return a._node.bufferSource=n.ctx.createBufferSource(),a._node.bufferSource.buffer=i[s._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,n.ctx.currentTime),s},_cleanBuffer:function(a){var s=this,c=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return s;if(n._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),c))try{a.bufferSource.buffer=n._scratchBuffer}catch{}return a.bufferSource=null,s},_clearSound:function(a){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(a){this._parent=a,this.init()};l.prototype={init:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,s._sounds.push(a),a.create(),a},create:function(){var a=this,s=a._parent,c=n._muted||a._muted||a._parent._muted?0:a._volume;return s._webAudio?(a._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),a._node.gain.setValueAtTime(c,n.ctx.currentTime),a._node.paused=!0,a._node.connect(n.masterGain)):n.noAudio||(a._node=n._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(n._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=s._src,a._node.preload=s._preload===!0?"auto":s._preload,a._node.volume=c*n.volume(),a._node.load()),a},reset:function(){var a=this,s=a._parent;return a._muted=s._muted,a._loop=s._loop,a._volume=s._volume,a._rate=s._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++n._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,s=a._parent;s._duration=Math.ceil(a._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),a._node.removeEventListener(n._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,s=a._parent;s._duration===1/0&&(s._duration=Math.ceil(a._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var i={},o=function(a){var s=a._src;if(i[s]){a._duration=i[s].duration,p(a);return}if(/^data:[^;]+;base64,/.test(s)){for(var c=atob(s.split(",")[1]),g=new Uint8Array(c.length),y=0;y<c.length;++y)g[y]=c.charCodeAt(y);d(g.buffer,a)}else{var _=new XMLHttpRequest;_.open(a._xhr.method,s,!0),_.withCredentials=a._xhr.withCredentials,_.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){_.setRequestHeader(f,a._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}d(_.response,a)},_.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete i[s],a.load())},u(_)}},u=function(a){try{a.send()}catch{a.onerror()}},d=function(a,s){var c=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(y){y&&s._sounds.length>0?(i[s._src]=y,p(s,y)):c()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(a).then(g).catch(c):n.ctx.decodeAudioData(a,g,c)},p=function(a,s){s&&!a._duration&&(a._duration=s.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),c=s?parseInt(s[1],10):null;if(a&&c&&c<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof Zn<"u"?(Zn.HowlerGlobal=t,Zn.Howler=n,Zn.Howl=r,Zn.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var i=this;if(!i.ctx||!i.ctx.listener)return i;if(r=typeof r!="number"?i._pos[1]:r,l=typeof l!="number"?i._pos[2]:l,typeof n=="number")i._pos=[n,r,l],typeof i.ctx.listener.positionX<"u"?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]);else return i._pos;return i},HowlerGlobal.prototype.orientation=function(n,r,l,i,o,u){var d=this;if(!d.ctx||!d.ctx.listener)return d;var p=d._orientation;if(r=typeof r!="number"?p[1]:r,l=typeof l!="number"?p[2]:l,i=typeof i!="number"?p[3]:i,o=typeof o!="number"?p[4]:o,u=typeof u!="number"?p[5]:u,typeof n=="number")d._orientation=[n,r,l,i,o,u],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(u,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(n,r,l,i,o,u);else return p;return d},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var o=l._getSoundIds(r),u=0;u<o.length;u++){var d=l._soundById(o[u]);if(d)if(typeof n=="number")d._stereo=n,d._pos=[n,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&t(d,i),i==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(n,0,0):d._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",d._id);else return d._stereo}return l},Howl.prototype.pos=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,l,i)}}),o;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof i>"u")if(typeof n=="number")o._pos=[n,r,l];else return o._pos;for(var u=o._getSoundIds(i),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._pos=[n,r,l],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setPosition(n,r,l)),o._emit("pos",p._id);else return p._pos}return o},Howl.prototype.orientation=function(n,r,l,i){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,l,i)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,l=typeof l!="number"?o._orientation[2]:l,typeof i>"u")if(typeof n=="number")o._orientation=[n,r,l];else return o._orientation;for(var u=o._getSoundIds(i),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._orientation=[n,r,l],p._node&&(p._panner||(p._pos||(p._pos=o._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setOrientation(n,r,l)),o._emit("orientation",p._id);else return p._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,i,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof i>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],i=parseInt(r[1],10));for(var u=n._getSoundIds(i),d=0;d<u.length;d++)if(o=n._soundById(u[d]),o){var p=o._pannerAttr;p={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:p.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:p.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:p.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:p.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:p.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:p.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=p.coneInnerAngle,x.coneOuterAngle=p.coneOuterAngle,x.coneOuterGain=p.coneOuterGain,x.distanceModel=p.distanceModel,x.maxDistance=p.maxDistance,x.refDistance=p.refDistance,x.rolloffFactor=p.rolloffFactor,x.panningModel=p.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(wt);const ol={"main-menu":{volume:.4,loop:!0,preload:!0},"character-select":{volume:.35,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.5,loop:!1,preload:!1},victory:{volume:.5,loop:!1,preload:!0},defeat:{volume:.4,loop:!1,preload:!0},"game-over":{volume:.35,loop:!1,preload:!0}},Oi={"card-play":{volume:.6,loop:!1},"card-shuffle":{volume:.5,loop:!1},"card-draw":{volume:.4,loop:!1},"card-flip":{volume:.5,loop:!1},challenge:{volume:.7,loop:!1},"challenge-success":{volume:.8,loop:!1},"challenge-fail":{volume:.6,loop:!1},"turn-start":{volume:.4,loop:!1},"turn-end":{volume:.3,loop:!1},"geass-activate":{volume:.8,loop:!1},"geass-hit":{volume:.9,loop:!1},"geass-miss":{volume:.5,loop:!1},"geass-immunity":{volume:.7,loop:!1},"button-click":{volume:.4,loop:!1},"button-hover":{volume:.2,loop:!1},"menu-open":{volume:.3,loop:!1},"menu-close":{volume:.3,loop:!1},"character-select":{volume:.5,loop:!1},"character-skill":{volume:.7,loop:!1},"damage-taken":{volume:.8,loop:!1},heal:{volume:.6,loop:!1},win:{volume:.8,loop:!1},lose:{volume:.6,loop:!1},"round-win":{volume:.7,loop:!1},"round-lose":{volume:.5,loop:!1}},Zs={"main-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","character-select":"https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3","game-normal":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","game-intense":"https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3","geass-activate":"https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3",victory:"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3",defeat:"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","game-over":"https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3"},qs={"card-play":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","card-draw":"https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3","card-flip":"https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3",challenge:"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","challenge-success":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","challenge-fail":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","turn-end":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","geass-immunity":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3","button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","button-hover":"https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3","menu-open":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3","menu-close":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3","character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","character-skill":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","damage-taken":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3",heal:"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3",win:"https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",lose:"https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3","round-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","round-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"},om={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},an=class an{constructor(){me(this,"bgmMap",new Map);me(this,"sfxMap",new Map);me(this,"currentBGM",null);me(this,"masterVolume",1);me(this,"bgmVolume",1);me(this,"sfxVolume",1);me(this,"voiceVolume",1);me(this,"isMuted",!1);me(this,"initialized",!1);me(this,"currentVoice",null)}static getInstance(){return an.instance||(an.instance=new an),an.instance}init(){this.initialized||(this.preloadBGM(["main-menu","victory","defeat"]),this.preloadSFX(["button-click","card-play","challenge"]),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成"))}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=ol[n],l=new wt.Howl({src:[Zs[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,l)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=Oi[n],l=new wt.Howl({src:[qs[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,l)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const l=ol[t];r=new wt.Howl({src:[Zs[t]],volume:0,loop:l.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const l=ol[t];r.fade(0,l.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=Oi[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new wt.Howl({src:[qs[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=om[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const l=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const i=new wt.Howl({src:[l],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=i,i.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),wt.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=ol[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=Oi[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,wt.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,wt.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};me(an,"instance");let La=an;const ht=La.getInstance(),ln=e=>{ht&&ht.playBGM(e)},se=e=>{ht&&ht.playSFX(e)},sm=()=>{ht&&ht.stopBGM()};class um{constructor(){me(this,"cards",[]);me(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let l=0;l<6;l++){const i=t[l%4];this.cards.push({id:`${r}-${l}-${Math.random().toString(36).substr(2,9)}`,suit:i,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],l=[];for(let i=0;i<5;i++){const o=this.cards[i];o.owner="player",t.push(o)}for(let i=5;i<10;i++){const o=this.cards[i];o.owner="ai",n.push(o)}for(let i=10;i<15;i++){const o=this.cards[i];o.owner="ai2",r.push(o)}for(let i=15;i<20;i++){const o=this.cards[i];o.owner="ai3",l.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const l=this.cards.find(i=>i.id===r);l&&(l.owner="table",n.push(l))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(l=>l.owner===null).slice(0,t);for(const l of r)l.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const cm=1/3,dm=1/2,fm=1,pm=.1,mm=.9,hm=.5,gm=.25,vm=.15,ym=.2,xm=.8,eu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class _m{getBaseHitChance(t){return t===0?cm:t===1?dm:fm}performGeass(t,n,r=null,l=0,i=0){let o=this.getBaseHitChance(i);if(o+=l,r==="cc"&&!n.ccReviveUsed&&Math.random()<o&&n.hp<=1&&Math.random()<hm)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"&&Math.random()<vm)return Math.random()<gm?{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0,isDodge:!0}:{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0};if(i<2&&(o=Math.max(pm,Math.min(mm,o))),Math.random()<o){const x={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},a=eu[Math.floor(Math.random()*eu.length)];return{activated:!0,hit:!0,damage:1,newStats:x,funnyAction:a.description,message:`Geass命中！${a.emoji} ${a.description}`}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(xm,ym*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const Fi={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},Di={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},$i={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},Bi={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},wm={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:Fi,skillName:Fi.name,skillDescription:Fi.description,stats:{hp:3,difficulty:4}},km={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:Di,skillName:Di.name,skillDescription:Di.description,stats:{hp:3,difficulty:2}},Sm={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:$i,skillName:$i.name,skillDescription:$i.description,stats:{hp:4,difficulty:2}},Cm={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:Bi,skillName:Bi.name,skillDescription:Bi.description,stats:{hp:3,difficulty:3}},Nm={lelouch:wm,cc:km,suzaku:Sm,kallen:Cm};function ui(e){return Nm[e]}function sl(e){const t=ui(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function zn(e){const t=ui(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function tu(e){if(!zn(e))return e;const t=ui(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function Am(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function Em(e){const t=ui(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function nu(e){return e.characterId==="kallen"&&zn(e)?4:3}class jm{constructor(){me(this,"cardSystem");me(this,"geassSystem");me(this,"state");this.cardSystem=new um,this.geassSystem=new _m,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:l,ai2Cards:i,ai3Cards:o}=this.cardSystem.dealCards(),u=this.cardSystem.setLiarCard(),d=Math.floor(Math.random()*4),p=n||["cc","suzaku","kallen"],x=new Map;x.set("player",sl(t)),x.set("ai",sl(p[0])),x.set("ai2",sl(p[1])),x.set("ai3",sl(p[2]));const a=c=>({lelouch:"鲁鲁修",cc:"C.C.",suzaku:"朱雀",kallen:"卡莲"})[c]||c,s=c=>c==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:d===0?"player_turn":"ai_turn",liarCard:u,playerCharacter:t,currentPlayerIndex:d,playerHand:r,aiPlayers:[{id:"ai",name:a(p[0]),character:p[0],hand:l,stats:{hp:s(p[0]),maxHp:s(p[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:a(p[1]),character:p[1],hand:i,stats:{hp:s(p[1]),maxHp:s(p[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:a(p[2]),character:p[2],hand:o,stats:{hp:s(p[2]),maxHp:s(p[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:s(t),maxHp:s(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},characterStates:x},this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const l=Am(r);this.state.characterStates.set(n,l)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const u of t){const d=this.state.playerHand.find(p=>p.id===u);if(!d)return!1;r.push(d)}const l=this.state.characterStates.get("player"),i=l?nu(l):1;if(t.length>i)return!1;this.state.playerHand=this.state.playerHand.filter(u=>!t.includes(u.id));const o=r.some(u=>u.rank!==n&&!u.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){this.state.lastAction=`${t==="player"?"玩家":t}手牌耗尽，获得胜利！`,this.state.winner=t==="player"?"player":"ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,l=n.playerId;this.state.phase="geass";const i=r?l:t;return this.executeGeass(i,t),{success:!0,isBluff:r,targetId:l}}executeGeass(t,n){const r=this.state.characterStates.get(t);let l;if(t==="player")l=this.state.playerStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);if(!u)return;l=u.stats}let i=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(i=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,l,(r==null?void 0:r.characterId)||null,i,this.state.turnState.geassConsecutiveMisses);if(this.state.geassResult=o,!o.hit&&o.isCounter&&n){if(n==="player")this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},this.state.playerStats.hp<=0&&this.checkGameOver();else{const d=this.state.aiPlayers.find(p=>p.id===n);d&&(d.stats={...d.stats,hp:Math.max(0,d.stats.hp-1)},d.stats.hp<=0&&(d.isActive=!1,this.checkGameOver()))}this.state.lastAction=`${t==="player"?"玩家":t}发动枢木剑术反击！${n==="player"?"玩家":n}受到反弹伤害！`;return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}if(o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0),o.newStats.hp<=0){if(t!=="player"){const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!zn(n))return!1;const r=tu(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const l=["Q","K","A"],o=(l.indexOf(this.state.liarCard)+1)%l.length;this.state.liarCard=l[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const l=t==="player"?"玩家":t;this.state.lastAction=`${l}发动了${Ne(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?zn(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:l,ai3Cards:i}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let u;if(t!==void 0)u=this.findNextActivePlayer(t);else{const d=this.getActivePlayerIndices();u=d[Math.floor(Math.random()*d.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=l,this.state.aiPlayers[2].hand=i,this.state.liarCard=o,this.state.phase=u===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=u,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:this.state.turnState.geassConsecutiveMisses},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((d,p)=>{this.state.characterStates.set(p,Em(d))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=this.state.aiPlayers.find(i=>i.id==="ai3");n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=this.state.aiPlayers.find(i=>i.id==="ai2");r&&r.isActive&&r.stats.hp>0&&t.push(2);const l=this.state.aiPlayers.find(i=>i.id==="ai");return l&&l.isActive&&l.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const l=(t+r)%4;if(n.includes(l))return l}return n[0]}getState(){return JSON.parse(JSON.stringify(this.state))}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(l=>l.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const l=this.state.characterStates.get("player"),i=l?this.getMaxPlayCount(l):1;this.state.playerSelectedCards.length<i&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}getMaxPlayCount(t){return t.characterId==="kallen"?4:3}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t){if(this.state.phase!=="ai_turn")return this.getState();const n=this.state.aiPlayers.find(o=>o.id===t);if(!n||n.hand.length===0)return this.getState();const r=Math.min(n.hand.length,Math.floor(Math.random()*2)+1),l=n.hand.slice(0,r).map(o=>o.id),i=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,l,i),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const l=this.state.aiPlayers.find(p=>p.id===t);if(!l)return!1;const i=[];for(const p of n){const x=l.hand.find(a=>a.id===p);if(!x)return!1;i.push(x)}const o=this.state.characterStates.get(t),u=o?nu(o):1;if(n.length>u)return!1;l.hand=l.hand.filter(p=>!n.includes(p.id));const d=i.some(p=>p.rank!==r&&!p.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:i,playerId:t,isBluff:d},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...i],this.state.lastAction=`${l.name}出了${n.length}张牌，声称是${r}`,l.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?zn(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!zn(n))throw new Error("技能冷却中或已使用");const r=tu(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(){var o;this.state.turnState.playedCards&&this.state.turnState.tableCards.push(...this.state.turnState.playedCards.actualCards);const t=(o=this.state.turnState.playedCards)==null?void 0:o.playerId;let r=((t==="player"?0:t==="ai3"?1:t==="ai2"?2:t==="ai"?3:0)+1)%4,l=0;for(;l<4;){if(r===0){if(this.state.playerStats.hp>0)break}else{const u=r===1?2:r===2?1:0,d=this.state.aiPlayers[u];if(d&&d.isActive&&d.stats.hp>0)break}r=(r+1)%4,l++}return this.state.currentPlayerIndex=r,this.state.phase=r===0?"player_turn":"ai_turn",this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,console.log(`[endChallengePhase] 出牌者: ${t}, 下一个玩家: ${r===0?"玩家":r===1?"AI3(卡莲)":r===2?"AI2(朱雀)":"AI1(C.C.)"}(索引${r})`),this.state.lastAction="质疑阶段结束，回合继续",this.getState()}}const Tm="code-geass-game",ru={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.removeItem(Tm)}catch(t){console.error("Failed to clear localStorage:",t)}}},lu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],bm=e=>e==="player"?0:e==="ai"?3:e==="ai2"?2:e==="ai3"?1:0,Pm=e=>e===0?"player":e===1?"ai3":e===2?"ai2":e===3?"ai":"player",Mm=(e,t)=>{for(let n=0;n<4;n++){const r=(e+n)%4,l=Pm(r);if(l==="player"){if(t.playerStats.hp>0)return r}else{const i=t.aiPlayers.find(o=>o.id===l);if(i&&i.isActive&&i.stats.hp>0)return r}}return e},Im=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let l=t??null;if(!l&&r)if(r==="player")l=Ne(n??void 0);else{const u=e.aiPlayers.find(d=>d.id===r);l=(u==null?void 0:u.name)??null}if(!l)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(l===Ne(n??void 0))return{loserId:"player",actualLoserName:l};const i=e.aiPlayers.find(u=>u.name===l);return i?{loserId:i.id,actualLoserName:l}:(console.error(`[determineLoserId] 找不到AI: ${l}`),{loserId:null,actualLoserName:l})},zm=(e,t,n,r)=>{se("geass-hit");const l=lu[Math.floor(Math.random()*lu.length)];r(l),se(l.soundType),n(`${t}受到Geass！`),n(`突然${l.description}`),n(`Geass命中！${t}HP-1`)},Lm=(e,t,n)=>{se("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},Rm=(e,t)=>{setTimeout(()=>{ln(e==="player"?"victory":"defeat"),t("result")},2e3)},Om=(e,t,n,r,l,i,o,u,d)=>{var y;let x=(bm(t)+1)%4;x=Mm(x,n);const a=e.resetRound(x);i(a),o([]);const s=a.currentPlayerIndex===0,c={1:2,2:1,3:0},g=s?Ne(r??void 0):(y=a.aiPlayers[c[a.currentPlayerIndex]])==null?void 0:y.name;l(`【第${a.turnState.turnNumber}回合】骗子牌是${a.liarCard}`),l(`${g}先手！`),u(!1),s||setTimeout(()=>{var _;(_=d.current)==null||_.call(d)},1500)},Fm=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:l,setSelectedCards:i,setIsProcessing:o,setCurrentScreen:u,aiTurnRef:d})=>P.useCallback((p,x,a,s)=>{if(r(p),p.geassResult){const g=s||(a||"对手");p.geassResult.hit?zm(p.geassResult,g,n,l):Lm(p.geassResult,g,n)}if(p.phase==="game_over"){Rm(p.winner,u);return}setTimeout(()=>{l(null);const c=e.current;if(!c)return;const g=c.getState(),{loserId:y,actualLoserName:_}=Im(g,s,t);if(!y||!_){o(!1);return}Om(c,y,g,t,n,r,i,o,d)},2500)},[e,t,n,r,l,i,o,u,d]),Dm=()=>{const[e,t]=P.useState("main-menu"),[n,r]=P.useState(null),[l,i]=P.useState(1),[o,u]=P.useState(["cc","suzaku","kallen"]),[d,p]=P.useState({}),x=P.useRef(null),[a,s]=P.useState(null),[c,g]=P.useState([]),[y,_]=P.useState(null),[f,h]=P.useState([]),[v,w]=P.useState(!1),S=P.useRef(null);P.useEffect(()=>((async()=>{try{await ht.preload(),console.log("音效预加载完成");const b=ru.load("gameSettings");b&&(ht.setBGMVolume(b.musicVolume??.5),ht.setSFXVolume(b.soundVolume??.7)),ln("main-menu")}catch(b){console.warn("初始化失败:",b)}})(),()=>{sm()}),[]),P.useEffect(()=>{const z=ht.getStatus(),b={soundEnabled:z.enabled,musicEnabled:!0,soundVolume:z.sfxVolume,musicVolume:z.bgmVolume};ru.save("gameSettings",b)},[]);const k=P.useCallback(z=>{g(b=>[...b,z])},[]),A=Fm({gameEngineRef:x,selectedCharacter:n,addLog:k,setGameState:s,setCurrentFunnyAction:_,setSelectedCards:h,setIsProcessing:w,setCurrentScreen:z=>t(z),aiTurnRef:S}),T=P.useCallback((z,b)=>{var _e,tt,Te,Mt;console.log("[enterChallengePhase] 进入质疑阶段");const F=(_e=b.turnState.playedCards)==null?void 0:_e.playerId;if(!F){console.error("[enterChallengePhase] 没有出牌记录");return}const G=(ae=>ae==="player"?0:ae==="ai"?3:ae==="ai2"?2:ae==="ai3"?1:0)(F);let U=(G+1)%4,Y=0;for(;Y<3;){if(U===G){U=(U+1)%4;continue}if(U===0){console.log("[enterChallengePhase] 轮到玩家质疑，等待玩家决策");const Le=z.enterChallengePhase();s(Le),w(!1),k("等待玩家决策...");return}const ae=U===1?2:U===2?1:0,W=b.aiPlayers[ae];if(!W||!W.isActive||W.stats.hp<=0){console.log("[enterChallengePhase] AI已淘汰，跳过:",W==null?void 0:W.name),U=(U+1)%4,Y++;continue}const xn=Math.random()<.3;if(console.log("[enterChallengePhase] AI决策:",{aiName:W.name,shouldChallenge:xn}),xn){se("challenge");const Le=F==="player"?Ne(n):((tt=b.aiPlayers.find(we=>we.id===F))==null?void 0:tt.name)||F;k(`${W.name}向${Le}发起质疑！`);const ut=z.aiChallengeDecision(W.id),ct=b.turnState.playedCards,It=ct?ct.actualCards.some(we=>we.rank!==ct.claimedRank&&!we.isJoker):!1;k(It?`质疑成功！${Le}在撒谎！`:`质疑失败！${Le}没有撒谎！`);const dt=It?F:W.id,_n=dt==="player"?Ne(n):((Te=ut.aiPlayers.find(we=>we.id===dt))==null?void 0:Te.name)||dt;s(ut),A(ut,W.name,Le,_n);return}else k(`${W.name}选择不质疑`);U=(U+1)%4,Y++}console.log("[enterChallengePhase] 所有人都未质疑，继续下一回合"),k("无人质疑，回合继续");const H=z.endChallengePhase();s(H);const V={1:2,2:1,3:0},pe=H.currentPlayerIndex===0?Ne(n):(Mt=H.aiPlayers[V[H.currentPlayerIndex]])==null?void 0:Mt.name;k(`【第${H.turnState.turnNumber}回合】骗子牌是${H.liarCard}`),k(`${pe}先手！`),H.currentPlayerIndex===0?w(!1):setTimeout(()=>{var ae;(ae=S.current)==null||ae.call(S)},500)},[k,n,A]),M=P.useCallback(()=>{if(console.log("[handleAITurn] 开始执行"),!x.current){console.log("[handleAITurn] 游戏引擎不存在，返回");return}const z=x.current,b=z.getState();if(console.log("[handleAITurn] 当前状态:",{phase:b.phase,currentPlayerIndex:b.currentPlayerIndex}),b.phase==="player_turn"||b.phase==="game_over"){console.log("[handleAITurn] 不是AI回合，跳过");return}const B={1:2,2:1,3:0}[b.currentPlayerIndex];if(B===void 0||B<0||B>=b.aiPlayers.length){console.log("[handleAITurn] AI索引无效:",b.currentPlayerIndex,"->",B);return}const G=b.aiPlayers[B];if(!G){console.log("[handleAITurn] AI不存在");return}const U=G.id;if(!G.isActive||G.stats.hp<=0){if(console.log("[handleAITurn] AI已淘汰，跳过:",G.name),b.aiPlayers.filter(V=>V.isActive&&V.stats.hp>0).length===0&&b.playerStats.hp>0){console.log("[handleAITurn] 只剩玩家存活，玩家获胜"),b.winner="player",b.phase="game_over",s({...b}),k("游戏结束！玩家获胜！"),w(!1);return}const H=(b.currentPlayerIndex+1)%4;b.currentPlayerIndex=H,s({...b}),H!==0?setTimeout(()=>{var V;return(V=S.current)==null?void 0:V.call(S)},500):b.playerStats.hp<=0&&setTimeout(()=>{var V;return(V=S.current)==null?void 0:V.call(S)},500);return}w(!0),se("turn-start"),k(`${G.name} 的回合...`),setTimeout(()=>{var Y;try{console.log("[handleAITurn] AI开始出牌:",G.name);const H=z.aiPlayCards(U);console.log("[handleAITurn] AI出牌完成, 新状态:",{phase:H.phase,playedBy:(Y=H.turnState.playedCards)==null?void 0:Y.playerId}),s(H);const V=H.turnState.playedCards;if(V){const pe=V.cardIds.length,_e=V.claimedRank;k(`${G.name}出了${pe}张牌，声称是${_e}`)}setTimeout(()=>{console.log("[handleAITurn] 进入质疑阶段"),T(z,H)},1e3)}catch(H){console.error("AI出牌错误:",H),w(!1)}},1e3)},[k,T]);P.useEffect(()=>{S.current=M},[M]);const R=P.useCallback(()=>{se("button-click"),t("character-select")},[]),C=P.useCallback(()=>{se("button-click"),t("settings")},[]),re=P.useCallback(()=>{se("button-click"),t("help")},[]),fe=P.useCallback((z,b)=>{se("character-select"),r(z),i(b||Math.floor(Math.random()*4)+1)},[]),je=P.useCallback(()=>{var V;if(!n)return;se("button-click");const F=["lelouch","cc","suzaku","kallen"].filter(pe=>pe!==n).sort(()=>Math.random()-.5);u(F);const B={};F.forEach(pe=>{B[pe]=Math.floor(Math.random()*4)+1}),p(B),x.current=new jm;const G=x.current.initializeGame(n,F);s(G),h([]);const U=G.currentPlayerIndex===0,Y={1:2,2:1,3:0},H=U?Ne(n):(V=G.aiPlayers[Y[G.currentPlayerIndex]])==null?void 0:V.name;g(["游戏开始！",`【第1回合】骗子牌是${G.liarCard}`,`${H}先手！`]),t("game-table"),ln("game-normal"),U||setTimeout(()=>{M()},1500)},[n,M]),et=P.useCallback(()=>{se("button-click"),t("main-menu"),r(null)},[]),en=P.useCallback(()=>{se("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),_(null),ln("main-menu")},[]),yt=P.useCallback(z=>{if(!x.current||v)return;const b=x.current,F=b.getState();if(console.log("[handleToggleCardSelection] 当前阶段:",F.phase,"是否是玩家回合:",F.phase==="player_turn"),F.phase!=="player_turn"){console.log("[handleToggleCardSelection] 不是玩家回合，无法选择牌");return}b.toggleCardSelection(z);const B=b.getState();console.log("[handleToggleCardSelection] 选中状态更新:",B.playerSelectedCards),h(B.playerSelectedCards),se("button-click")},[v]),E=P.useCallback(()=>{if(!x.current||f.length===0||v)return;w(!0),se("card-play");const z=x.current;try{const b=z.playerPlayCards();s(b),h([]);const F=Ne(n),B=b.turnState.playedCards;if(B){const G=B.cardIds.length,U=B.claimedRank;k(`${F}出了${G}张牌，声称是${U}`)}setTimeout(()=>{T(z,b)},1500)}catch(b){console.error("出牌错误:",b),w(!1)}},[f,v,k,n,T]),I=P.useCallback(()=>{var _e,tt;if(!x.current||v)return;w(!0),se("challenge");const z=x.current,b=z.getState(),F=b.turnState.playedCards,B=F==null?void 0:F.playerId,G=Ne(n),U=B==="player"?G:((_e=b.aiPlayers.find(Te=>Te.id===B))==null?void 0:_e.name)||B;k(`${G}向${U}发起质疑！`);const Y=z.playerChallengeDecision(!0),H=F?F.actualCards.some(Te=>Te.rank!==F.claimedRank&&!Te.isJoker):!1;k(H?`质疑成功！${U}在撒谎！`:`质疑失败！${U}没有撒谎！`);const V=H?B:"player",pe=V==="player"?G:((tt=b.aiPlayers.find(Te=>Te.id===V))==null?void 0:tt.name)||V;s(Y),A(Y,G,U,pe)},[v,k,n,A]),L=P.useCallback(()=>{var _e,tt,Te,Mt;if(!x.current||v)return;se("button-click");const z=x.current,b=z.getState(),F=(_e=b.turnState.playedCards)==null?void 0:_e.playerId,B=Ne(n);k(`${B}选择不质疑`);const U=(ae=>ae==="player"?0:ae==="ai"?3:ae==="ai2"?2:ae==="ai3"?1:0)(F||"player");let Y=1,H=0;for(;H<3&&Y!==U;){const ae=Y===1?2:Y===2?1:0,W=b.aiPlayers[ae];if(!W||!W.isActive||W.stats.hp<=0){console.log("[handlePass] AI已淘汰，跳过:",W==null?void 0:W.name),Y=(Y+1)%4,H++;continue}if(Math.random()<.3){se("challenge");const Le=F==="player"?B:((tt=b.aiPlayers.find(we=>we.id===F))==null?void 0:tt.name)||F;k(`${W.name}向${Le}发起质疑！`);const ut=z.aiChallengeDecision(W.id),ct=b.turnState.playedCards,It=ct?ct.actualCards.some(we=>we.rank!==ct.claimedRank&&!we.isJoker):!1;k(It?`质疑成功！${Le}在撒谎！`:`质疑失败！${Le}没有撒谎！`);const dt=It?F:W.id,_n=dt==="player"?B:((Te=ut.aiPlayers.find(we=>we.id===dt))==null?void 0:Te.name)||dt;s(ut),A(ut,W.name,Le,_n);return}else k(`${W.name}选择不质疑`);Y=(Y+1)%4,H++}k("无人质疑，回合继续");const V=z.endChallengePhase();s(V);const pe=V.currentPlayerIndex;if(pe===0){k(`【第${V.turnState.turnNumber}回合】骗子牌是${V.liarCard}`);const ae=pe===0?B:(Mt=b.aiPlayers[pe-1])==null?void 0:Mt.name;k(`${ae}先手！`),w(!1)}else setTimeout(()=>{M()},500)},[v,k,n,A,M]),K=P.useCallback(z=>{if(!x.current||n!=="lelouch")return;const b=x.current;if(!b.canPlayerUseSkill("player")){k("❌ 绝对命令使用次数已耗尽（每局限1次）");return}se("geass-activate");const F=b.lelouchChangeLiarCard(z);s(F),k(`鲁鲁修发动绝对命令！骗子牌变为 ${z}`),k("⚠️ 绝对命令已使用，本局无法再次使用")},[n,k]),le=P.useCallback(()=>{se("button-click"),t("character-select"),r(null),s(null),g([]),h([]),_(null),ln("main-menu")},[]),xt=P.useCallback(()=>{se("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),_(null),ln("main-menu")},[]),We=()=>{var z,b,F,B;switch(e){case"main-menu":return m.jsx(Js,{onStart:R,onSettings:C,onHelp:re});case"character-select":return m.jsx(nm,{characters:Or,selectedId:n,selectedAvatar:l,onSelect:fe,onConfirm:je,onBack:et});case"game-table":return a?m.jsx(lm,{gameState:a,selectedCards:f,selectedCharacter:n,selectedAvatar:l,aiCharacters:o,aiAvatars:d,onToggleCardSelection:yt,onConfirmPlay:E,onPass:L,onChallenge:I,onBackToMenu:en,onLelouchSkill:K,gameLog:c,funnyAction:y,isProcessing:v,canUseSkill:((z=x.current)==null?void 0:z.canPlayerUseSkill("player"))??!0}):null;case"result":{const G=(a==null?void 0:a.winner)==="player",U=((b=a==null?void 0:a.playerStats)==null?void 0:b.geassSuccessCount)||0,Y=((F=a==null?void 0:a.aiPlayers)==null?void 0:F.reduce((V,pe)=>{var _e;return V+(((_e=pe.stats)==null?void 0:_e.geassSuccessCount)||0)},0))||0,H=((B=a==null?void 0:a.turnState)==null?void 0:B.turnNumber)||0;return m.jsx(im,{isWin:G,playerScore:U,opponentScore:Y,turnNumber:H,onRestart:le,onMainMenu:xt})}case"settings":return tn();case"help":return ze();default:return m.jsx(Js,{onStart:R,onSettings:C,onHelp:re})}},tn=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"设置"}),m.jsxs("div",{className:"cg-settings-content",children:[m.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),m.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),ze=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"游戏帮助"}),m.jsxs("div",{className:"cg-help-content",children:[m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🎮 游戏规则"}),m.jsxs("ul",{children:[m.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),m.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),m.jsxs("li",{children:[m.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),m.jsx("li",{children:"质疑后翻牌验证："}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),m.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),m.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"👤 角色技能详解"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),m.jsx("br",{}),m.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),m.jsx("br",{}),m.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),m.jsx("br",{}),m.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),m.jsx("br",{}),m.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🃏 特殊牌"}),m.jsx("ul",{children:m.jsxs("li",{children:[m.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return m.jsxs("div",{className:"cg-app",children:[We(),m.jsx("style",{children:`
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
      `})]})},$m=Hi.createRoot(document.getElementById("root"));$m.render(m.jsx(Dd.StrictMode,{children:m.jsx(Dm,{})}));
//# sourceMappingURL=index-BmF-xv_8.js.map
