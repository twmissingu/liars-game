var Lc=Object.defineProperty;var bc=(e,t,n)=>t in e?Lc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ge=(e,t,n)=>bc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},El={},ws={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=Symbol.for("react.element"),Rc=Symbol.for("react.portal"),Fc=Symbol.for("react.fragment"),Dc=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),$c=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),Gc=Symbol.for("react.memo"),Qc=Symbol.for("react.lazy"),oa=Symbol.iterator;function Wc(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var ks={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ss=Object.assign,Cs={};function Tn(e,t,n){this.props=e,this.context=t,this.refs=Cs,this.updater=n||ks}Tn.prototype.isReactComponent={};Tn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ns(){}Ns.prototype=Tn.prototype;function uo(e,t,n){this.props=e,this.context=t,this.refs=Cs,this.updater=n||ks}var co=uo.prototype=new Ns;co.constructor=uo;Ss(co,Tn.prototype);co.isPureReactComponent=!0;var aa=Array.isArray,Es=Object.prototype.hasOwnProperty,fo={current:null},js={key:!0,ref:!0,__self:!0,__source:!0};function Ts(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Es.call(t,r)&&!js.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){for(var d=Array(c),g=0;g<c;g++)d[g]=arguments[g+2];l.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)l[r]===void 0&&(l[r]=c[r]);return{$$typeof:vr,type:e,key:i,ref:a,props:l,_owner:fo.current}}function Kc(e,t){return{$$typeof:vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function po(e){return typeof e=="object"&&e!==null&&e.$$typeof===vr}function Yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sa=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yc(""+e.key):t.toString(36)}function Vr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case vr:case Rc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+$l(a,0):r,aa(l)?(n="",e!=null&&(n=e.replace(sa,"$&/")+"/"),Vr(l,t,n,"",function(g){return g})):l!=null&&(po(l)&&(l=Kc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(sa,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",aa(e))for(var c=0;c<e.length;c++){i=e[c];var d=r+$l(i,c);a+=Vr(i,t,n,d,l)}else if(d=Wc(e),typeof d=="function")for(e=d.call(e),c=0;!(i=e.next()).done;)i=i.value,d=r+$l(i,c++),a+=Vr(i,t,n,d,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Nr(e,t,n){if(e==null)return e;var r=[],l=0;return Vr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Xc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Ur={transition:null},Zc={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:fo};function As(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Nr,forEach:function(e,t,n){Nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Nr(e,function(){t++}),t},toArray:function(e){return Nr(e,function(t){return t})||[]},only:function(e){if(!po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Tn;R.Fragment=Fc;R.Profiler=Bc;R.PureComponent=uo;R.StrictMode=Dc;R.Suspense=Uc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc;R.act=As;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ss({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=fo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Es.call(t,d)&&!js.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var g=0;g<d;g++)c[g]=arguments[g+2];r.children=c}return{$$typeof:vr,type:e.type,key:l,ref:i,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:$c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hc,_context:e},e.Consumer=e};R.createElement=Ts;R.createFactory=function(e){var t=Ts.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Vc,render:e}};R.isValidElement=po;R.lazy=function(e){return{$$typeof:Qc,_payload:{_status:-1,_result:e},_init:Xc}};R.memo=function(e,t){return{$$typeof:Gc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};R.unstable_act=As;R.useCallback=function(e,t){return _e.current.useCallback(e,t)};R.useContext=function(e){return _e.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};R.useEffect=function(e,t){return _e.current.useEffect(e,t)};R.useId=function(){return _e.current.useId()};R.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return _e.current.useMemo(e,t)};R.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};R.useRef=function(e){return _e.current.useRef(e)};R.useState=function(e){return _e.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return _e.current.useTransition()};R.version="18.3.1";ws.exports=R;var O=ws.exports;const Jc=Oc(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=O,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,rd=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function Ps(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)nd.call(t,r)&&!ld.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:ed,type:e,key:i,ref:a,props:l,_owner:rd.current}}El.Fragment=td;El.jsx=Ps;El.jsxs=Ps;xs.exports=El;var m=xs.exports,gi={},zs={exports:{}},ze={},Is={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var L=T.length;T.push(M);e:for(;0<L;){var $=L-1>>>1,K=T[$];if(0<l(K,M))T[$]=M,T[L]=K,L=$;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],L=T.pop();if(L!==M){T[0]=L;e:for(var $=0,K=T.length,nt=K>>>1;$<nt;){var Le=2*($+1)-1,vt=T[Le],be=Le+1,rt=T[be];if(0>l(vt,L))be<K&&0>l(rt,vt)?(T[$]=rt,T[be]=L,$=be):(T[$]=vt,T[Le]=L,$=Le);else if(be<K&&0>l(rt,L))T[$]=rt,T[be]=L,$=be;else break e}}return M}function l(T,M){var L=T.sortIndex-M.sortIndex;return L!==0?L:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var d=[],g=[],_=1,o=null,s=3,u=!1,p=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var M=n(g);M!==null;){if(M.callback===null)r(g);else if(M.startTime<=T)r(g),M.sortIndex=M.expirationTime,t(d,M);else break;M=n(g)}}function w(T){if(v=!1,y(T),!p)if(n(d)!==null)p=!0,ht(k);else{var M=n(g);M!==null&&gt(w,M.startTime-T)}}function k(T,M){p=!1,v&&(v=!1,f(j),j=-1),u=!0;var L=s;try{for(y(M),o=n(d);o!==null&&(!(o.expirationTime>M)||T&&!te());){var $=o.callback;if(typeof $=="function"){o.callback=null,s=o.priorityLevel;var K=$(o.expirationTime<=M);M=e.unstable_now(),typeof K=="function"?o.callback=K:o===n(d)&&r(d),y(M)}else r(d);o=n(d)}if(o!==null)var nt=!0;else{var Le=n(g);Le!==null&&gt(w,Le.startTime-M),nt=!1}return nt}finally{o=null,s=L,u=!1}}var C=!1,N=null,j=-1,E=5,I=-1;function te(){return!(e.unstable_now()-I<E)}function me(){if(N!==null){var T=e.unstable_now();I=T;var M=!0;try{M=N(!0,T)}finally{M?Me():(C=!1,N=null)}}else C=!1}var Me;if(typeof h=="function")Me=function(){h(me)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,mt=we.port2;we.port1.onmessage=me,Me=function(){mt.postMessage(null)}}else Me=function(){x(me,0)};function ht(T){N=T,C||(C=!0,Me())}function gt(T,M){j=x(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){p||u||(p=!0,ht(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(T){switch(s){case 1:case 2:case 3:var M=3;break;default:M=s}var L=s;s=M;try{return T()}finally{s=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=s;s=T;try{return M()}finally{s=L}},e.unstable_scheduleCallback=function(T,M,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=L+K,T={id:_++,callback:M,priorityLevel:T,startTime:L,expirationTime:K,sortIndex:-1},L>$?(T.sortIndex=L,t(g,T),n(d)===null&&T===n(g)&&(v?(f(j),j=-1):v=!0,gt(w,L-$))):(T.sortIndex=K,t(d,T),p||u||(p=!0,ht(k))),T},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(T){var M=s;return function(){var L=s;s=M;try{return T.apply(this,arguments)}finally{s=L}}}})(Ms);Is.exports=Ms;var id=Is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=O,Pe=id;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ls=new Set,qn={};function Jt(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(qn[e]=t,e=0;e<t.length;e++)Ls.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vi=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ua={},ca={};function sd(e){return vi.call(ca,e)?!0:vi.call(ua,e)?!1:ad.test(e)?ca[e]=!0:(ua[e]=!0,!1)}function ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,t,n,r){if(t===null||typeof t>"u"||ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var mo=/[\-:]([a-z])/g;function ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mo,ho);ue[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mo,ho);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mo,ho);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function go(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cd(t,n,l,r)&&(n=null),r||l===null?sd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),nn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),vo=Symbol.for("react.strict_mode"),yi=Symbol.for("react.profiler"),bs=Symbol.for("react.provider"),Os=Symbol.for("react.context"),yo=Symbol.for("react.forward_ref"),_i=Symbol.for("react.suspense"),xi=Symbol.for("react.suspense_list"),_o=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Rs=Symbol.for("react.offscreen"),da=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Vl;function Bn(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Ul=!1;function Gl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,c=i.length-1;1<=a&&0<=c&&l[a]!==i[c];)c--;for(;1<=a&&0<=c;a--,c--)if(l[a]!==i[c]){if(a!==1||c!==1)do if(a--,c--,0>c||l[a]!==i[c]){var d=`
`+l[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=c);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bn(e):""}function dd(e){switch(e.tag){case 5:return Bn(e.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rn:return"Fragment";case nn:return"Portal";case yi:return"Profiler";case vo:return"StrictMode";case _i:return"Suspense";case xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Os:return(e.displayName||"Context")+".Consumer";case bs:return(e._context.displayName||"Context")+".Provider";case yo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _o:return t=e.displayName||null,t!==null?t:wi(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return wi(e(t))}catch{}}return null}function fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wi(t);case 8:return t===vo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pd(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=pd(e))}function Ds(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ki(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bs(e,t){t=t.checked,t!=null&&go(e,"checked",t,!1)}function Si(e,t){Bs(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ci(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ci(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ci(e,t,n){(t!=="number"||nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ma(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Hn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Hs(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},md=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function Us(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function Gs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Us(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var hd=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ti(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,gn=null,vn=null;function ga(e){if(e=xr(e)){if(typeof Pi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=zl(t),Pi(e.stateNode,e.type,t))}}function Qs(e){gn?vn?vn.push(e):vn=[e]:gn=e}function Ws(){if(gn){var e=gn,t=vn;if(vn=gn=null,ga(e),t)for(e=0;e<t.length;e++)ga(t[e])}}function Ks(e,t){return e(t)}function Ys(){}var Ql=!1;function Xs(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return Ks(e,t,n)}finally{Ql=!1,(gn!==null||vn!==null)&&(Ys(),Ws())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var zi=!1;if(ut)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{zi=!1}function gd(e,t,n,r,l,i,a,c,d){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(_){this.onError(_)}}var Gn=!1,rl=null,ll=!1,Ii=null,vd={onError:function(e){Gn=!0,rl=e}};function yd(e,t,n,r,l,i,a,c,d){Gn=!1,rl=null,gd.apply(vd,arguments)}function _d(e,t,n,r,l,i,a,c,d){if(yd.apply(this,arguments),Gn){if(Gn){var g=rl;Gn=!1,rl=null}else throw Error(S(198));ll||(ll=!0,Ii=g)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function va(e){if(qt(e)!==e)throw Error(S(188))}function xd(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return va(l),e;if(i===r)return va(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,c=l.child;c;){if(c===n){a=!0,n=l,r=i;break}if(c===r){a=!0,r=l,n=i;break}c=c.sibling}if(!a){for(c=i.child;c;){if(c===n){a=!0,n=i,r=l;break}if(c===r){a=!0,r=i,n=l;break}c=c.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Js(e){return e=xd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var eu=Pe.unstable_scheduleCallback,ya=Pe.unstable_cancelCallback,wd=Pe.unstable_shouldYield,kd=Pe.unstable_requestPaint,q=Pe.unstable_now,Sd=Pe.unstable_getCurrentPriorityLevel,wo=Pe.unstable_ImmediatePriority,tu=Pe.unstable_UserBlockingPriority,il=Pe.unstable_NormalPriority,Cd=Pe.unstable_LowPriority,nu=Pe.unstable_IdlePriority,jl=null,et=null;function Nd(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(jl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Td,Ed=Math.log,jd=Math.LN2;function Td(e){return e>>>=0,e===0?32:31-(Ed(e)/jd|0)|0}var Ar=64,Pr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~l;c!==0?r=$n(c):(i&=a,i!==0&&(r=$n(i)))}else a=n&~l,a!==0?r=$n(a):i!==0&&(r=$n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),l=1<<n,r|=e[n],t&=~l;return r}function Ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ke(i),c=1<<a,d=l[a];d===-1?(!(c&n)||c&r)&&(l[a]=Ad(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ru(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function zd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ke(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ko(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var B=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iu,So,ou,au,su,Li=!1,zr=[],Et=null,jt=null,Tt=null,nr=new Map,rr=new Map,wt=[],Id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _a(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function Ln(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=xr(t),t!==null&&So(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Md(e,t,n,r,l){switch(t){case"focusin":return Et=Ln(Et,e,t,n,r,l),!0;case"dragenter":return jt=Ln(jt,e,t,n,r,l),!0;case"mouseover":return Tt=Ln(Tt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return nr.set(i,Ln(nr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,rr.set(i,Ln(rr.get(i)||null,e,t,n,r,l)),!0}return!1}function uu(e){var t=$t(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zs(n),t!==null){e.blockedOn=t,su(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ai=r,n.target.dispatchEvent(r),Ai=null}else return t=xr(n),t!==null&&So(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){Gr(e)&&n.delete(t)}function Ld(){Li=!1,Et!==null&&Gr(Et)&&(Et=null),jt!==null&&Gr(jt)&&(jt=null),Tt!==null&&Gr(Tt)&&(Tt=null),nr.forEach(xa),rr.forEach(xa)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Li||(Li=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Ld)))}function lr(e){function t(l){return bn(l,e)}if(0<zr.length){bn(zr[0],e);for(var n=1;n<zr.length;n++){var r=zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&bn(Et,e),jt!==null&&bn(jt,e),Tt!==null&&bn(Tt,e),nr.forEach(t),rr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)uu(n),n.blockedOn===null&&wt.shift()}var yn=pt.ReactCurrentBatchConfig,al=!0;function bd(e,t,n,r){var l=B,i=yn.transition;yn.transition=null;try{B=1,Co(e,t,n,r)}finally{B=l,yn.transition=i}}function Od(e,t,n,r){var l=B,i=yn.transition;yn.transition=null;try{B=4,Co(e,t,n,r)}finally{B=l,yn.transition=i}}function Co(e,t,n,r){if(al){var l=bi(e,t,n,r);if(l===null)ri(e,t,r,sl,n),_a(e,r);else if(Md(l,e,t,n,r))r.stopPropagation();else if(_a(e,r),t&4&&-1<Id.indexOf(e)){for(;l!==null;){var i=xr(l);if(i!==null&&iu(i),i=bi(e,t,n,r),i===null&&ri(e,t,r,sl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ri(e,t,r,null,n)}}var sl=null;function bi(e,t,n,r){if(sl=null,e=xo(r),e=$t(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sl=e,null}function cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sd()){case wo:return 1;case tu:return 4;case il:case Cd:return 16;case nu:return 536870912;default:return 16}default:return 16}}var Ct=null,No=null,Qr=null;function du(){if(Qr)return Qr;var e,t=No,n=t.length,r,l="value"in Ct?Ct.value:Ct.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Qr=l.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function wa(){return!1}function Ie(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ir:wa,this.isPropagationStopped=wa,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Ie(An),_r=Z({},An,{view:0,detail:0}),Rd=Ie(_r),Kl,Yl,On,Tl=Z({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(Kl=e.screenX-On.screenX,Yl=e.screenY-On.screenY):Yl=Kl=0,On=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Yl}}),ka=Ie(Tl),Fd=Z({},Tl,{dataTransfer:0}),Dd=Ie(Fd),Bd=Z({},_r,{relatedTarget:0}),Xl=Ie(Bd),Hd=Z({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Ie(Hd),Vd=Z({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ud=Ie(Vd),Gd=Z({},An,{data:0}),Sa=Ie(Gd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kd[e])?!!t[e]:!1}function jo(){return Yd}var Xd=Z({},_r,{key:function(e){if(e.key){var t=Qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jo,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Ie(Xd),Jd=Z({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=Ie(Jd),qd=Z({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jo}),ef=Ie(qd),tf=Z({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Ie(tf),rf=Z({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Ie(rf),of=[9,13,27,32],To=ut&&"CompositionEvent"in window,Qn=null;ut&&"documentMode"in document&&(Qn=document.documentMode);var af=ut&&"TextEvent"in window&&!Qn,fu=ut&&(!To||Qn&&8<Qn&&11>=Qn),Na=" ",Ea=!1;function pu(e,t){switch(e){case"keyup":return of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function sf(e,t){switch(e){case"compositionend":return mu(t);case"keypress":return t.which!==32?null:(Ea=!0,Na);case"textInput":return e=t.data,e===Na&&Ea?null:e;default:return null}}function uf(e,t){if(ln)return e==="compositionend"||!To&&pu(e,t)?(e=du(),Qr=No=Ct=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fu&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function hu(e,t,n,r){Qs(r),t=ul(t,"onChange"),0<t.length&&(n=new Eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,ir=null;function df(e){Eu(e,0)}function Al(e){var t=sn(e);if(Ds(t))return e}function ff(e,t){if(e==="change")return t}var gu=!1;if(ut){var Zl;if(ut){var Jl="oninput"in document;if(!Jl){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),Jl=typeof Ta.oninput=="function"}Zl=Jl}else Zl=!1;gu=Zl&&(!document.documentMode||9<document.documentMode)}function Aa(){Wn&&(Wn.detachEvent("onpropertychange",vu),ir=Wn=null)}function vu(e){if(e.propertyName==="value"&&Al(ir)){var t=[];hu(t,ir,e,xo(e)),Xs(df,t)}}function pf(e,t,n){e==="focusin"?(Aa(),Wn=t,ir=n,Wn.attachEvent("onpropertychange",vu)):e==="focusout"&&Aa()}function mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(ir)}function hf(e,t){if(e==="click")return Al(t)}function gf(e,t){if(e==="input"||e==="change")return Al(t)}function vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:vf;function or(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!vi.call(t,l)||!Xe(e[l],t[l]))return!1}return!0}function Pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pa(n)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(){for(var e=window,t=nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nl(e.document)}return t}function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=_u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yu(n.ownerDocument.documentElement,n)){if(r!==null&&Ao(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=za(n,i);var a=za(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _f=ut&&"documentMode"in document&&11>=document.documentMode,on=null,Oi=null,Kn=null,Ri=!1;function Ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ri||on==null||on!==nl(r)||(r=on,"selectionStart"in r&&Ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&or(Kn,r)||(Kn=r,r=ul(Oi,"onSelect"),0<r.length&&(t=new Eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=on)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var an={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},ql={},xu={};ut&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Pl(e){if(ql[e])return ql[e];if(!an[e])return e;var t=an[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return ql[e]=t[n];return e}var wu=Pl("animationend"),ku=Pl("animationiteration"),Su=Pl("animationstart"),Cu=Pl("transitionend"),Nu=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Nu.set(e,t),Jt(t,[e])}for(var ei=0;ei<Ma.length;ei++){var ti=Ma[ei],xf=ti.toLowerCase(),wf=ti[0].toUpperCase()+ti.slice(1);Ot(xf,"on"+wf)}Ot(wu,"onAnimationEnd");Ot(ku,"onAnimationIteration");Ot(Su,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Cu,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function La(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_d(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],d=c.instance,g=c.currentTarget;if(c=c.listener,d!==i&&l.isPropagationStopped())break e;La(l,c,g),i=d}else for(a=0;a<r.length;a++){if(c=r[a],d=c.instance,g=c.currentTarget,c=c.listener,d!==i&&l.isPropagationStopped())break e;La(l,c,g),i=d}}}if(ll)throw e=Ii,ll=!1,Ii=null,e}function G(e,t){var n=t[$i];n===void 0&&(n=t[$i]=new Set);var r=e+"__bubble";n.has(r)||(ju(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),ju(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Lr]){e[Lr]=!0,Ls.forEach(function(n){n!=="selectionchange"&&(kf.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,ni("selectionchange",!1,t))}}function ju(e,t,n,r){switch(cu(t)){case 1:var l=bd;break;case 4:l=Od;break;default:l=Co}n=l.bind(null,t,n,e),l=void 0,!zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;a=a.return}for(;c!==null;){if(a=$t(c),a===null)return;if(d=a.tag,d===5||d===6){r=i=a;continue e}c=c.parentNode}}r=r.return}Xs(function(){var g=i,_=xo(n),o=[];e:{var s=Nu.get(e);if(s!==void 0){var u=Eo,p=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":u=Zd;break;case"focusin":p="focus",u=Xl;break;case"focusout":p="blur",u=Xl;break;case"beforeblur":case"afterblur":u=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=ef;break;case wu:case ku:case Su:u=$d;break;case Cu:u=nf;break;case"scroll":u=Rd;break;case"wheel":u=lf;break;case"copy":case"cut":case"paste":u=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Ca}var v=(t&4)!==0,x=!v&&e==="scroll",f=v?s!==null?s+"Capture":null:s;v=[];for(var h=g,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,f!==null&&(w=tr(h,f),w!=null&&v.push(sr(h,w,y)))),x)break;h=h.return}0<v.length&&(s=new u(s,p,null,n,_),o.push({event:s,listeners:v}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",s&&n!==Ai&&(p=n.relatedTarget||n.fromElement)&&($t(p)||p[ct]))break e;if((u||s)&&(s=_.window===_?_:(s=_.ownerDocument)?s.defaultView||s.parentWindow:window,u?(p=n.relatedTarget||n.toElement,u=g,p=p?$t(p):null,p!==null&&(x=qt(p),p!==x||p.tag!==5&&p.tag!==6)&&(p=null)):(u=null,p=g),u!==p)){if(v=ka,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ca,w="onPointerLeave",f="onPointerEnter",h="pointer"),x=u==null?s:sn(u),y=p==null?s:sn(p),s=new v(w,h+"leave",u,n,_),s.target=x,s.relatedTarget=y,w=null,$t(_)===g&&(v=new v(f,h+"enter",p,n,_),v.target=y,v.relatedTarget=x,w=v),x=w,u&&p)t:{for(v=u,f=p,h=0,y=v;y;y=tn(y))h++;for(y=0,w=f;w;w=tn(w))y++;for(;0<h-y;)v=tn(v),h--;for(;0<y-h;)f=tn(f),y--;for(;h--;){if(v===f||f!==null&&v===f.alternate)break t;v=tn(v),f=tn(f)}v=null}else v=null;u!==null&&ba(o,s,u,v,!1),p!==null&&x!==null&&ba(o,x,p,v,!0)}}e:{if(s=g?sn(g):window,u=s.nodeName&&s.nodeName.toLowerCase(),u==="select"||u==="input"&&s.type==="file")var k=ff;else if(ja(s))if(gu)k=gf;else{k=mf;var C=pf}else(u=s.nodeName)&&u.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(k=hf);if(k&&(k=k(e,g))){hu(o,k,n,_);break e}C&&C(e,s,g),e==="focusout"&&(C=s._wrapperState)&&C.controlled&&s.type==="number"&&Ci(s,"number",s.value)}switch(C=g?sn(g):window,e){case"focusin":(ja(C)||C.contentEditable==="true")&&(on=C,Oi=g,Kn=null);break;case"focusout":Kn=Oi=on=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,Ia(o,n,_);break;case"selectionchange":if(_f)break;case"keydown":case"keyup":Ia(o,n,_)}var N;if(To)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ln?pu(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(fu&&n.locale!=="ko"&&(ln||j!=="onCompositionStart"?j==="onCompositionEnd"&&ln&&(N=du()):(Ct=_,No="value"in Ct?Ct.value:Ct.textContent,ln=!0)),C=ul(g,j),0<C.length&&(j=new Sa(j,e,null,n,_),o.push({event:j,listeners:C}),N?j.data=N:(N=mu(n),N!==null&&(j.data=N)))),(N=af?sf(e,n):uf(e,n))&&(g=ul(g,"onBeforeInput"),0<g.length&&(_=new Sa("onBeforeInput","beforeinput",null,n,_),o.push({event:_,listeners:g}),_.data=N))}Eu(o,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ul(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=tr(e,n),i!=null&&r.unshift(sr(e,i,l)),i=tr(e,t),i!=null&&r.push(sr(e,i,l))),e=e.return}return r}function tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ba(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var c=n,d=c.alternate,g=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&g!==null&&(c=g,l?(d=tr(n,i),d!=null&&a.unshift(sr(n,d,c))):l||(d=tr(n,i),d!=null&&a.push(sr(n,d,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Sf=/\r\n?/g,Cf=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(Sf,`
`).replace(Cf,"")}function br(e,t,n){if(t=Oa(t),Oa(e)!==t&&n)throw Error(S(425))}function cl(){}var Fi=null,Di=null;function Bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,Nf=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,Ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(jf)}:Hi;function jf(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);lr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Pn,ur="__reactProps$"+Pn,ct="__reactContainer$"+Pn,$i="__reactEvents$"+Pn,Tf="__reactListeners$"+Pn,Af="__reactHandles$"+Pn;function $t(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fa(e);e!==null;){if(n=e[qe])return n;e=Fa(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[qe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function zl(e){return e[ur]||null}var Vi=[],un=-1;function Rt(e){return{current:e}}function Q(e){0>un||(e.current=Vi[un],Vi[un]=null,un--)}function V(e,t){un++,Vi[un]=e.current,e.current=t}var bt={},pe=Rt(bt),Ce=Rt(!1),Wt=bt;function kn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ne(e){return e=e.childContextTypes,e!=null}function dl(){Q(Ce),Q(pe)}function Da(e,t,n){if(pe.current!==bt)throw Error(S(168));V(pe,t),V(Ce,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,fd(e)||"Unknown",l));return Z({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Wt=pe.current,V(pe,e),V(Ce,Ce.current),!0}function Ba(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Tu(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,Q(Ce),Q(pe),V(pe,e)):Q(Ce),V(Ce,n)}var it=null,Il=!1,ii=!1;function Au(e){it===null?it=[e]:it.push(e)}function Pf(e){Il=!0,Au(e)}function Ft(){if(!ii&&it!==null){ii=!0;var e=0,t=B;try{var n=it;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,Il=!1}catch(l){throw it!==null&&(it=it.slice(e+1)),eu(wo,Ft),l}finally{B=t,ii=!1}}return null}var cn=[],dn=0,pl=null,ml=0,Re=[],Fe=0,Kt=null,ot=1,at="";function Bt(e,t){cn[dn++]=ml,cn[dn++]=pl,pl=e,ml=t}function Pu(e,t,n){Re[Fe++]=ot,Re[Fe++]=at,Re[Fe++]=Kt,Kt=e;var r=ot;e=at;var l=32-Ke(r)-1;r&=~(1<<l),n+=1;var i=32-Ke(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,ot=1<<32-Ke(t)+l|n<<l|r,at=i+e}else ot=1<<i|n<<l|r,at=e}function Po(e){e.return!==null&&(Bt(e,1),Pu(e,1,0))}function zo(e){for(;e===pl;)pl=cn[--dn],cn[dn]=null,ml=cn[--dn],cn[dn]=null;for(;e===Kt;)Kt=Re[--Fe],Re[Fe]=null,at=Re[--Fe],Re[Fe]=null,ot=Re[--Fe],Re[Fe]=null}var Ae=null,Te=null,W=!1,Qe=null;function zu(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Te=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:ot,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Te=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if(W){var t=Te;if(t){var n=t;if(!Ha(e,t)){if(Ui(e))throw Error(S(418));t=At(n.nextSibling);var r=Ae;t&&Ha(e,t)?zu(r,n):(e.flags=e.flags&-4097|2,W=!1,Ae=e)}}else{if(Ui(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,Ae=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Or(e){if(e!==Ae)return!1;if(!W)return $a(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bi(e.type,e.memoizedProps)),t&&(t=Te)){if(Ui(e))throw Iu(),Error(S(418));for(;t;)zu(e,t),t=At(t.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Ae?At(e.stateNode.nextSibling):null;return!0}function Iu(){for(var e=Te;e;)e=At(e.nextSibling)}function Sn(){Te=Ae=null,W=!1}function Io(e){Qe===null?Qe=[e]:Qe.push(e)}var zf=pt.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var c=l.refs;a===null?delete c[i]:c[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Va(e){var t=e._init;return t(e._payload)}function Mu(e){function t(f,h){if(e){var y=f.deletions;y===null?(f.deletions=[h],f.flags|=16):y.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function l(f,h){return f=Mt(f,h),f.index=0,f.sibling=null,f}function i(f,h,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<h?(f.flags|=2,h):y):(f.flags|=2,h)):(f.flags|=1048576,h)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,h,y,w){return h===null||h.tag!==6?(h=fi(y,f.mode,w),h.return=f,h):(h=l(h,y),h.return=f,h)}function d(f,h,y,w){var k=y.type;return k===rn?_(f,h,y.props.children,w,y.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_t&&Va(k)===h.type)?(w=l(h,y.props),w.ref=Rn(f,h,y),w.return=f,w):(w=el(y.type,y.key,y.props,null,f.mode,w),w.ref=Rn(f,h,y),w.return=f,w)}function g(f,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=pi(y,f.mode,w),h.return=f,h):(h=l(h,y.children||[]),h.return=f,h)}function _(f,h,y,w,k){return h===null||h.tag!==7?(h=Qt(y,f.mode,w,k),h.return=f,h):(h=l(h,y),h.return=f,h)}function o(f,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=fi(""+h,f.mode,y),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Er:return y=el(h.type,h.key,h.props,null,f.mode,y),y.ref=Rn(f,null,h),y.return=f,y;case nn:return h=pi(h,f.mode,y),h.return=f,h;case _t:var w=h._init;return o(f,w(h._payload),y)}if(Hn(h)||In(h))return h=Qt(h,f.mode,y,null),h.return=f,h;Rr(f,h)}return null}function s(f,h,y,w){var k=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:c(f,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Er:return y.key===k?d(f,h,y,w):null;case nn:return y.key===k?g(f,h,y,w):null;case _t:return k=y._init,s(f,h,k(y._payload),w)}if(Hn(y)||In(y))return k!==null?null:_(f,h,y,w,null);Rr(f,y)}return null}function u(f,h,y,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(y)||null,c(h,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Er:return f=f.get(w.key===null?y:w.key)||null,d(h,f,w,k);case nn:return f=f.get(w.key===null?y:w.key)||null,g(h,f,w,k);case _t:var C=w._init;return u(f,h,y,C(w._payload),k)}if(Hn(w)||In(w))return f=f.get(y)||null,_(h,f,w,k,null);Rr(h,w)}return null}function p(f,h,y,w){for(var k=null,C=null,N=h,j=h=0,E=null;N!==null&&j<y.length;j++){N.index>j?(E=N,N=null):E=N.sibling;var I=s(f,N,y[j],w);if(I===null){N===null&&(N=E);break}e&&N&&I.alternate===null&&t(f,N),h=i(I,h,j),C===null?k=I:C.sibling=I,C=I,N=E}if(j===y.length)return n(f,N),W&&Bt(f,j),k;if(N===null){for(;j<y.length;j++)N=o(f,y[j],w),N!==null&&(h=i(N,h,j),C===null?k=N:C.sibling=N,C=N);return W&&Bt(f,j),k}for(N=r(f,N);j<y.length;j++)E=u(N,f,j,y[j],w),E!==null&&(e&&E.alternate!==null&&N.delete(E.key===null?j:E.key),h=i(E,h,j),C===null?k=E:C.sibling=E,C=E);return e&&N.forEach(function(te){return t(f,te)}),W&&Bt(f,j),k}function v(f,h,y,w){var k=In(y);if(typeof k!="function")throw Error(S(150));if(y=k.call(y),y==null)throw Error(S(151));for(var C=k=null,N=h,j=h=0,E=null,I=y.next();N!==null&&!I.done;j++,I=y.next()){N.index>j?(E=N,N=null):E=N.sibling;var te=s(f,N,I.value,w);if(te===null){N===null&&(N=E);break}e&&N&&te.alternate===null&&t(f,N),h=i(te,h,j),C===null?k=te:C.sibling=te,C=te,N=E}if(I.done)return n(f,N),W&&Bt(f,j),k;if(N===null){for(;!I.done;j++,I=y.next())I=o(f,I.value,w),I!==null&&(h=i(I,h,j),C===null?k=I:C.sibling=I,C=I);return W&&Bt(f,j),k}for(N=r(f,N);!I.done;j++,I=y.next())I=u(N,f,j,I.value,w),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?j:I.key),h=i(I,h,j),C===null?k=I:C.sibling=I,C=I);return e&&N.forEach(function(me){return t(f,me)}),W&&Bt(f,j),k}function x(f,h,y,w){if(typeof y=="object"&&y!==null&&y.type===rn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Er:e:{for(var k=y.key,C=h;C!==null;){if(C.key===k){if(k=y.type,k===rn){if(C.tag===7){n(f,C.sibling),h=l(C,y.props.children),h.return=f,f=h;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_t&&Va(k)===C.type){n(f,C.sibling),h=l(C,y.props),h.ref=Rn(f,C,y),h.return=f,f=h;break e}n(f,C);break}else t(f,C);C=C.sibling}y.type===rn?(h=Qt(y.props.children,f.mode,w,y.key),h.return=f,f=h):(w=el(y.type,y.key,y.props,null,f.mode,w),w.ref=Rn(f,h,y),w.return=f,f=w)}return a(f);case nn:e:{for(C=y.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(f,h.sibling),h=l(h,y.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=pi(y,f.mode,w),h.return=f,f=h}return a(f);case _t:return C=y._init,x(f,h,C(y._payload),w)}if(Hn(y))return p(f,h,y,w);if(In(y))return v(f,h,y,w);Rr(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(f,h.sibling),h=l(h,y),h.return=f,f=h):(n(f,h),h=fi(y,f.mode,w),h.return=f,f=h),a(f)):n(f,h)}return x}var Cn=Mu(!0),Lu=Mu(!1),hl=Rt(null),gl=null,fn=null,Mo=null;function Lo(){Mo=fn=gl=null}function bo(e){var t=hl.current;Q(hl),e._currentValue=t}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){gl=e,Mo=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Mo!==e)if(e={context:e,memoizedValue:t,next:null},fn===null){if(gl===null)throw Error(S(308));fn=e,gl.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return t}var Vt=null;function Oo(e){Vt===null?Vt=[e]:Vt.push(e)}function bu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Oo(t)):(n.next=l.next,l.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,dt(e,n)}return l=r.interleaved,l===null?(t.next=t,Oo(r)):(t.next=l.next,l.next=t),r.interleaved=t,dt(e,n)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var l=e.updateQueue;xt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,g=d.next;d.next=null,a===null?i=g:a.next=g,a=d;var _=e.alternate;_!==null&&(_=_.updateQueue,c=_.lastBaseUpdate,c!==a&&(c===null?_.firstBaseUpdate=g:c.next=g,_.lastBaseUpdate=d))}if(i!==null){var o=l.baseState;a=0,_=g=d=null,c=i;do{var s=c.lane,u=c.eventTime;if((r&s)===s){_!==null&&(_=_.next={eventTime:u,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var p=e,v=c;switch(s=t,u=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){o=p.call(u,o,s);break e}o=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,s=typeof p=="function"?p.call(u,o,s):p,s==null)break e;o=Z({},o,s);break e;case 2:xt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,s=l.effects,s===null?l.effects=[c]:s.push(c))}else u={eventTime:u,lane:s,tag:c.tag,payload:c.payload,callback:c.callback,next:null},_===null?(g=_=u,d=o):_=_.next=u,a|=s;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;s=c,c=s.next,s.next=null,l.lastBaseUpdate=s,l.shared.pending=null}}while(!0);if(_===null&&(d=o),l.baseState=d,l.firstBaseUpdate=g,l.lastBaseUpdate=_,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Xt|=a,e.lanes=a,e.memoizedState=o}}function Ga(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var wr={},tt=Rt(wr),cr=Rt(wr),dr=Rt(wr);function Ut(e){if(e===wr)throw Error(S(174));return e}function Fo(e,t){switch(V(dr,t),V(cr,e),V(tt,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ei(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ei(t,e)}Q(tt),V(tt,t)}function Nn(){Q(tt),Q(cr),Q(dr)}function Ru(e){Ut(dr.current);var t=Ut(tt.current),n=Ei(t,e.type);t!==n&&(V(cr,e),V(tt,n))}function Do(e){cr.current===e&&(Q(tt),Q(cr))}var Y=Rt(0);function yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oi=[];function Bo(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Yr=pt.ReactCurrentDispatcher,ai=pt.ReactCurrentBatchConfig,Yt=0,X=null,re=null,ie=null,_l=!1,Yn=!1,fr=0,If=0;function ce(){throw Error(S(321))}function Ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,l,i){if(Yt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?Of:Rf,e=n(r,l),Yn){i=0;do{if(Yn=!1,fr=0,25<=i)throw Error(S(301));i+=1,ie=re=null,t.updateQueue=null,Yr.current=Ff,e=n(r,l)}while(Yn)}if(Yr.current=xl,t=re!==null&&re.next!==null,Yt=0,ie=re=X=null,_l=!1,t)throw Error(S(300));return e}function Vo(){var e=fr!==0;return fr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function $e(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function pr(e,t){return typeof t=="function"?t(e):t}function si(e){var t=$e(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var c=a=null,d=null,g=i;do{var _=g.lane;if((Yt&_)===_)d!==null&&(d=d.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var o={lane:_,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};d===null?(c=d=o,a=r):d=d.next=o,X.lanes|=_,Xt|=_}g=g.next}while(g!==null&&g!==i);d===null?a=r:d.next=c,Xe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,Xt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ui(e){var t=$e(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Xe(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Fu(){}function Du(e,t){var n=X,r=$e(),l=t(),i=!Xe(r.memoizedState,l);if(i&&(r.memoizedState=l,Se=!0),r=r.queue,Uo($u.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,mr(9,Hu.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(S(349));Yt&30||Bu(n,t,l)}return l}function Bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hu(e,t,n,r){t.value=n,t.getSnapshot=r,Vu(t)&&Uu(e)}function $u(e,t,n){return n(function(){Vu(t)&&Uu(e)})}function Vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Uu(e){var t=dt(e,1);t!==null&&Ye(t,e,1,-1)}function Qa(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=bf.bind(null,X,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return $e().memoizedState}function Xr(e,t,n,r){var l=Je();X.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Ml(e,t,n,r){var l=$e();r=r===void 0?null:r;var i=void 0;if(re!==null){var a=re.memoizedState;if(i=a.destroy,r!==null&&Ho(r,a.deps)){l.memoizedState=mr(t,n,i,r);return}}X.flags|=e,l.memoizedState=mr(1|t,n,i,r)}function Wa(e,t){return Xr(8390656,8,e,t)}function Uo(e,t){return Ml(2048,8,e,t)}function Qu(e,t){return Ml(4,2,e,t)}function Wu(e,t){return Ml(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,Ml(4,4,Ku.bind(null,t,e),n)}function Go(){}function Xu(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zu(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return Yt&21?(Xe(n,t)||(n=ru(),X.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Mf(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{B=n,ai.transition=r}}function qu(){return $e().memoizedState}function Lf(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ec(e))tc(t,n);else if(n=bu(e,t,n,r),n!==null){var l=ye();Ye(n,e,r,l),nc(n,t,r)}}function bf(e,t,n){var r=It(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ec(e))tc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,c=i(a,n);if(l.hasEagerState=!0,l.eagerState=c,Xe(c,a)){var d=t.interleaved;d===null?(l.next=l,Oo(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=bu(e,t,l,r),n!==null&&(l=ye(),Ye(n,e,r,l),nc(n,t,r))}}function ec(e){var t=e.alternate;return e===X||t!==null&&t===X}function tc(e,t){Yn=_l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ko(e,n)}}var xl={readContext:He,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Of={readContext:He,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lf.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Qa,useDebugValue:Go,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Qa(!1),t=e[0];return e=Mf.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=Je();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));Yt&30||Bu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Wa($u.bind(null,r,i,e),[e]),r.flags|=2048,mr(9,Hu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Je(),t=oe.identifierPrefix;if(W){var n=at,r=ot;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=If++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rf={readContext:He,useCallback:Xu,useContext:He,useEffect:Uo,useImperativeHandle:Yu,useInsertionEffect:Qu,useLayoutEffect:Wu,useMemo:Zu,useReducer:si,useRef:Gu,useState:function(){return si(pr)},useDebugValue:Go,useDeferredValue:function(e){var t=$e();return Ju(t,re.memoizedState,e)},useTransition:function(){var e=si(pr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Du,useId:qu,unstable_isNewReconciler:!1},Ff={readContext:He,useCallback:Xu,useContext:He,useEffect:Uo,useImperativeHandle:Yu,useInsertionEffect:Qu,useLayoutEffect:Wu,useMemo:Zu,useReducer:ui,useRef:Gu,useState:function(){return ui(pr)},useDebugValue:Go,useDeferredValue:function(e){var t=$e();return re===null?t.memoizedState=e:Ju(t,re.memoizedState,e)},useTransition:function(){var e=ui(pr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Fu,useSyncExternalStore:Du,useId:qu,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ll={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),l=It(e),i=st(r,l);i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,l),t!==null&&(Ye(t,e,l,r),Kr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),l=It(e),i=st(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,l),t!==null&&(Ye(t,e,l,r),Kr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=It(e),l=st(n,r);l.tag=2,t!=null&&(l.callback=t),t=Pt(e,l,r),t!==null&&(Ye(t,e,r,n),Kr(t,e,r))}};function Ka(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(l,i):!0}function rc(e,t,n){var r=!1,l=bt,i=t.contextType;return typeof i=="object"&&i!==null?i=He(i):(l=Ne(t)?Wt:pe.current,r=t.contextTypes,i=(r=r!=null)?kn(e,l):bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ya(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function Ki(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ro(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=He(i):(i=Ne(t)?Wt:pe.current,l.context=kn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Wi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ll.enqueueReplaceState(l,l.state,null),vl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=dd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Df=typeof WeakMap=="function"?WeakMap:Map;function lc(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){kl||(kl=!0,io=r),Yi(e,t)},n}function ic(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Yi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yi(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Xa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Df;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Za(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var Bf=pt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Lu(t,null,n,r):Cn(t,e.child,n,r)}function qa(e,t,n,r,l){n=n.render;var i=t.ref;return _n(t,l),r=$o(e,t,n,r,i,l),n=Vo(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ft(e,t,l)):(W&&n&&Po(t),t.flags|=1,ve(e,t,r,l),t.child)}function es(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!qo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,oc(e,t,i,r,l)):(e=el(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(a,r)&&e.ref===t.ref)return ft(e,t,l)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(or(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ft(e,t,l)}return Xi(e,t,n,r,l)}function ac(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(mn,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(mn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(mn,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(mn,je),je|=r;return ve(e,t,l,n),t.child}function sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xi(e,t,n,r,l){var i=Ne(n)?Wt:pe.current;return i=kn(t,i),_n(t,l),n=$o(e,t,n,r,i,l),r=Vo(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ft(e,t,l)):(W&&r&&Po(t),t.flags|=1,ve(e,t,n,l),t.child)}function ts(e,t,n,r,l){if(Ne(n)){var i=!0;fl(t)}else i=!1;if(_n(t,l),t.stateNode===null)Zr(e,t),rc(t,n,r),Ki(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var d=a.context,g=n.contextType;typeof g=="object"&&g!==null?g=He(g):(g=Ne(n)?Wt:pe.current,g=kn(t,g));var _=n.getDerivedStateFromProps,o=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function";o||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||d!==g)&&Ya(t,a,r,g),xt=!1;var s=t.memoizedState;a.state=s,vl(t,r,a,l),d=t.memoizedState,c!==r||s!==d||Ce.current||xt?(typeof _=="function"&&(Wi(t,n,_,r),d=t.memoizedState),(c=xt||Ka(t,n,c,r,s,d,g))?(o||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=g,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ou(e,t),c=t.memoizedProps,g=t.type===t.elementType?c:Ue(t.type,c),a.props=g,o=t.pendingProps,s=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=He(d):(d=Ne(n)?Wt:pe.current,d=kn(t,d));var u=n.getDerivedStateFromProps;(_=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==o||s!==d)&&Ya(t,a,r,d),xt=!1,s=t.memoizedState,a.state=s,vl(t,r,a,l);var p=t.memoizedState;c!==o||s!==p||Ce.current||xt?(typeof u=="function"&&(Wi(t,n,u,r),p=t.memoizedState),(g=xt||Ka(t,n,g,r,s,p,d)||!1)?(_||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,p,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,p,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=d,r=g):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,l)}function Zi(e,t,n,r,l,i){sc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Ba(t,n,!1),ft(e,t,i);r=t.stateNode,Bf.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Cn(t,e.child,null,i),t.child=Cn(t,null,c,i)):ve(e,t,c,i),t.memoizedState=r.state,l&&Ba(t,n,!0),t.child}function uc(e){var t=e.stateNode;t.pendingContext?Da(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(e,t.context,!1),Fo(e,t.containerInfo)}function ns(e,t,n,r,l){return Sn(),Io(l),t.flags|=256,ve(e,t,n,r),t.child}var Ji={dehydrated:null,treeContext:null,retryLane:0};function qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function cc(e,t,n){var r=t.pendingProps,l=Y.current,i=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),V(Y,l&1),e===null)return Gi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Rl(a,r,0,null),e=Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qi(n),t.memoizedState=Ji,e):Qo(t,a));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return Hf(e,t,a,r,c,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,c=l.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Mt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),c!==null?i=Mt(c,i):(i=Qt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?qi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ji,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qo(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&Io(r),Cn(t,e.child,null,n),e=Qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(S(422))),Fr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Rl({mode:"visible",children:r.children},l,0,null),i=Qt(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Cn(t,e.child,null,a),t.child.memoizedState=qi(a),t.memoizedState=Ji,i);if(!(t.mode&1))return Fr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(S(419)),r=ci(i,r,void 0),Fr(e,t,a,r)}if(c=(a&e.childLanes)!==0,Se||c){if(r=oe,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,dt(e,l),Ye(r,e,l,-1))}return Jo(),r=ci(Error(S(421))),Fr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Te=At(l.nextSibling),Ae=t,W=!0,Qe=null,e!==null&&(Re[Fe++]=ot,Re[Fe++]=at,Re[Fe++]=Kt,ot=e.id,at=e.overflow,Kt=t),t=Qo(t,r.children),t.flags|=4096,t)}function rs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function di(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function dc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rs(e,n,t);else if(e.tag===19)rs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&yl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),di(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&yl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}di(t,!0,n,null,i);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $f(e,t,n){switch(t.tag){case 3:uc(t),Sn();break;case 5:Ru(t);break;case 1:Ne(t.type)&&fl(t);break;case 4:Fo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;V(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?cc(e,t,n):(V(Y,Y.current&1),e=ft(e,t,n),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,ac(e,t,n)}return ft(e,t,n)}var fc,eo,pc,mc;fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eo=function(){};pc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ut(tt.current);var i=null;switch(n){case"input":l=ki(e,l),r=ki(e,r),i=[];break;case"select":l=Z({},l,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":l=Ni(e,l),r=Ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}ji(n,r);var a;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var c=l[g];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(qn.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var d=r[g];if(c=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&d!==c&&(d!=null||c!=null))if(g==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(i||(i=[]),i.push(g,n)),n=d;else g==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(i=i||[]).push(g,d)):g==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(g,""+d):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(qn.hasOwnProperty(g)?(d!=null&&g==="onScroll"&&G("scroll",e),i||c===d||(i=[])):(i=i||[]).push(g,d))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}};mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vf(e,t,n){var r=t.pendingProps;switch(zo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ne(t.type)&&dl(),de(t),null;case 3:return r=t.stateNode,Nn(),Q(Ce),Q(pe),Bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(so(Qe),Qe=null))),eo(e,t),de(t),null;case 5:Do(t);var l=Ut(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Ut(tt.current),Or(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=t,r[ur]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(l=0;l<Vn.length;l++)G(Vn[l],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":fa(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":ma(r,i),G("invalid",r)}ji(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&br(r.textContent,c,e),l=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&br(r.textContent,c,e),l=["children",""+c]):qn.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&G("scroll",r)}switch(n){case"input":jr(r),pa(r,i,!0);break;case"textarea":jr(r),ha(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=cl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qe]=t,e[ur]=r,fc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ti(n,r),n){case"dialog":G("cancel",e),G("close",e),l=r;break;case"iframe":case"object":case"embed":G("load",e),l=r;break;case"video":case"audio":for(l=0;l<Vn.length;l++)G(Vn[l],e);l=r;break;case"source":G("error",e),l=r;break;case"img":case"image":case"link":G("error",e),G("load",e),l=r;break;case"details":G("toggle",e),l=r;break;case"input":fa(e,r),l=ki(e,r),G("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Z({},r,{value:void 0}),G("invalid",e);break;case"textarea":ma(e,r),l=Ni(e,r),G("invalid",e);break;default:l=r}ji(n,l),c=l;for(i in c)if(c.hasOwnProperty(i)){var d=c[i];i==="style"?Gs(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Vs(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&er(e,d):typeof d=="number"&&er(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&G("scroll",e):d!=null&&go(e,i,d,a))}switch(n){case"input":jr(e),pa(e,r,!1);break;case"textarea":jr(e),ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?hn(e,!!r.multiple,i,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ut(dr.current),Ut(tt.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return de(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Te!==null&&t.mode&1&&!(t.flags&128))Iu(),Sn(),t.flags|=98560,i=!1;else if(i=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[qe]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Qe!==null&&(so(Qe),Qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?le===0&&(le=3):Jo())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Nn(),eo(e,t),e===null&&ar(t.stateNode.containerInfo),de(t),null;case 10:return bo(t.type._context),de(t),null;case 17:return Ne(t.type)&&dl(),de(t),null;case 19:if(Q(Y),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Fn(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=yl(e),a!==null){for(t.flags|=128,Fn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>jn&&(t.flags|=128,r=!0,Fn(i,!1),t.lanes=4194304)}else{if(!r)if(e=yl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!W)return de(t),null}else 2*q()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Uf(e,t){switch(zo(t),t.tag){case 1:return Ne(t.type)&&dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),Q(Ce),Q(pe),Bo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Do(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Nn(),null;case 10:return bo(t.type._context),null;case 22:case 23:return Zo(),null;case 24:return null;default:return null}}var Dr=!1,fe=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,A=null;function pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function to(e,t,n){try{n()}catch(r){J(e,t,r)}}var ls=!1;function Qf(e,t){if(Fi=al,e=_u(),Ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,c=-1,d=-1,g=0,_=0,o=e,s=null;t:for(;;){for(var u;o!==n||l!==0&&o.nodeType!==3||(c=a+l),o!==i||r!==0&&o.nodeType!==3||(d=a+r),o.nodeType===3&&(a+=o.nodeValue.length),(u=o.firstChild)!==null;)s=o,o=u;for(;;){if(o===e)break t;if(s===n&&++g===l&&(c=a),s===i&&++_===r&&(d=a),(u=o.nextSibling)!==null)break;o=s,s=o.parentNode}o=u}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Di={focusedElem:e,selectionRange:n},al=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,x=p.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ue(t.type,v),x);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return p=ls,ls=!1,p}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&to(t,n,i)}l=l.next}while(l!==r)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function no(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[ur],delete t[$i],delete t[Tf],delete t[Af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(ro(e,t,n),e=e.sibling;e!==null;)ro(e,t,n),e=e.sibling}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}var ae=null,Ge=!1;function yt(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:fe||pn(n,t);case 6:var r=ae,l=Ge;ae=null,yt(e,t,n),ae=r,Ge=l,ae!==null&&(Ge?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ge?(e=ae,n=n.stateNode,e.nodeType===8?li(e.parentNode,n):e.nodeType===1&&li(e,n),lr(e)):li(ae,n.stateNode));break;case 4:r=ae,l=Ge,ae=n.stateNode.containerInfo,Ge=!0,yt(e,t,n),ae=r,Ge=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&to(n,t,a),l=l.next}while(l!==r)}yt(e,t,n);break;case 1:if(!fe&&(pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){J(n,t,c)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,yt(e,t,n),fe=r):yt(e,t,n);break;default:yt(e,t,n)}}function os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gf),t.forEach(function(r){var l=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:ae=c.stateNode,Ge=!1;break e;case 3:ae=c.stateNode.containerInfo,Ge=!0;break e;case 4:ae=c.stateNode.containerInfo,Ge=!0;break e}c=c.return}if(ae===null)throw Error(S(160));vc(i,a,l),ae=null,Ge=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(g){J(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yc(t,e),t=t.sibling}function yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{Xn(3,e,e.return),bl(3,e)}catch(v){J(e,e.return,v)}try{Xn(5,e,e.return)}catch(v){J(e,e.return,v)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&pn(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&pn(n,n.return),e.flags&32){var l=e.stateNode;try{er(l,"")}catch(v){J(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Bs(l,i),Ti(c,a);var g=Ti(c,i);for(a=0;a<d.length;a+=2){var _=d[a],o=d[a+1];_==="style"?Gs(l,o):_==="dangerouslySetInnerHTML"?Vs(l,o):_==="children"?er(l,o):go(l,_,o,g)}switch(c){case"input":Si(l,i);break;case"textarea":Hs(l,i);break;case"select":var s=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var u=i.value;u!=null?hn(l,!!i.multiple,u,!1):s!==!!i.multiple&&(i.defaultValue!=null?hn(l,!!i.multiple,i.defaultValue,!0):hn(l,!!i.multiple,i.multiple?[]:"",!1))}l[ur]=i}catch(v){J(e,e.return,v)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){J(e,e.return,v)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(v){J(e,e.return,v)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Yo=q())),r&4&&os(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(g=fe)||_,Ve(t,e),fe=g):Ve(t,e),Ze(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!_&&e.mode&1)for(A=e,_=e.child;_!==null;){for(o=A=_;A!==null;){switch(s=A,u=s.child,s.tag){case 0:case 11:case 14:case 15:Xn(4,s,s.return);break;case 1:pn(s,s.return);var p=s.stateNode;if(typeof p.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(v){J(r,n,v)}}break;case 5:pn(s,s.return);break;case 22:if(s.memoizedState!==null){ss(o);continue}}u!==null?(u.return=s,A=u):ss(o)}_=_.sibling}e:for(_=null,o=e;;){if(o.tag===5){if(_===null){_=o;try{l=o.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=o.stateNode,d=o.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Us("display",a))}catch(v){J(e,e.return,v)}}}else if(o.tag===6){if(_===null)try{o.stateNode.nodeValue=g?"":o.memoizedProps}catch(v){J(e,e.return,v)}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===e)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break e;for(;o.sibling===null;){if(o.return===null||o.return===e)break e;_===o&&(_=null),o=o.return}_===o&&(_=null),o.sibling.return=o.return,o=o.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&os(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(er(l,""),r.flags&=-33);var i=is(e);lo(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,c=is(e);ro(e,c,a);break;default:throw Error(S(161))}}catch(d){J(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e,t,n){A=e,_c(e)}function _c(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Dr;if(!a){var c=l.alternate,d=c!==null&&c.memoizedState!==null||fe;c=Dr;var g=fe;if(Dr=a,(fe=d)&&!g)for(A=l;A!==null;)a=A,d=a.child,a.tag===22&&a.memoizedState!==null?us(l):d!==null?(d.return=a,A=d):us(l);for(;i!==null;)A=i,_c(i),i=i.sibling;A=l,Dr=c,fe=g}as(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,A=i):as(e)}}function as(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ga(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ga(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var _=g.memoizedState;if(_!==null){var o=_.dehydrated;o!==null&&lr(o)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}fe||t.flags&512&&no(t)}catch(s){J(t,t.return,s)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function ss(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function us(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bl(4,t)}catch(d){J(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){J(t,l,d)}}var i=t.return;try{no(t)}catch(d){J(t,i,d)}break;case 5:var a=t.return;try{no(t)}catch(d){J(t,a,d)}}}catch(d){J(t,t.return,d)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var Kf=Math.ceil,wl=pt.ReactCurrentDispatcher,Wo=pt.ReactCurrentOwner,Be=pt.ReactCurrentBatchConfig,D=0,oe=null,ee=null,se=0,je=0,mn=Rt(0),le=0,hr=null,Xt=0,Ol=0,Ko=0,Zn=null,ke=null,Yo=0,jn=1/0,lt=null,kl=!1,io=null,zt=null,Br=!1,Nt=null,Sl=0,Jn=0,oo=null,Jr=-1,qr=0;function ye(){return D&6?q():Jr!==-1?Jr:Jr=q()}function It(e){return e.mode&1?D&2&&se!==0?se&-se:zf.transition!==null?(qr===0&&(qr=ru()),qr):(e=B,e!==0||(e=window.event,e=e===void 0?16:cu(e.type)),e):1}function Ye(e,t,n,r){if(50<Jn)throw Jn=0,oo=null,Error(S(185));yr(e,n,r),(!(D&2)||e!==oe)&&(e===oe&&(!(D&2)&&(Ol|=n),le===4&&kt(e,se)),Ee(e,r),n===1&&D===0&&!(t.mode&1)&&(jn=q()+500,Il&&Ft()))}function Ee(e,t){var n=e.callbackNode;Pd(e,t);var r=ol(e,e===oe?se:0);if(r===0)n!==null&&ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ya(n),t===1)e.tag===0?Pf(cs.bind(null,e)):Au(cs.bind(null,e)),Ef(function(){!(D&6)&&Ft()}),n=null;else{switch(lu(r)){case 1:n=wo;break;case 4:n=tu;break;case 16:n=il;break;case 536870912:n=nu;break;default:n=il}n=jc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Jr=-1,qr=0,D&6)throw Error(S(327));var n=e.callbackNode;if(xn()&&e.callbackNode!==n)return null;var r=ol(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cl(e,r);else{t=r;var l=D;D|=2;var i=kc();(oe!==e||se!==t)&&(lt=null,jn=q()+500,Gt(e,t));do try{Zf();break}catch(c){wc(e,c)}while(!0);Lo(),wl.current=i,D=l,ee!==null?t=0:(oe=null,se=0,t=le)}if(t!==0){if(t===2&&(l=Mi(e),l!==0&&(r=l,t=ao(e,l))),t===1)throw n=hr,Gt(e,0),kt(e,r),Ee(e,q()),n;if(t===6)kt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Yf(l)&&(t=Cl(e,r),t===2&&(i=Mi(e),i!==0&&(r=i,t=ao(e,i))),t===1))throw n=hr,Gt(e,0),kt(e,r),Ee(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ht(e,ke,lt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Yo+500-q(),10<t)){if(ol(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Hi(Ht.bind(null,e,ke,lt),t);break}Ht(e,ke,lt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ke(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kf(r/1960))-r,10<r){e.timeoutHandle=Hi(Ht.bind(null,e,ke,lt),r);break}Ht(e,ke,lt);break;case 5:Ht(e,ke,lt);break;default:throw Error(S(329))}}}return Ee(e,q()),e.callbackNode===n?xc.bind(null,e):null}function ao(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=Cl(e,t),e!==2&&(t=ke,ke=n,t!==null&&so(t)),e}function so(e){ke===null?ke=e:ke.push.apply(ke,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Xe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Ko,t&=~Ol,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function cs(e){if(D&6)throw Error(S(327));xn();var t=ol(e,0);if(!(t&1))return Ee(e,q()),null;var n=Cl(e,t);if(e.tag!==0&&n===2){var r=Mi(e);r!==0&&(t=r,n=ao(e,r))}if(n===1)throw n=hr,Gt(e,0),kt(e,t),Ee(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ke,lt),Ee(e,q()),null}function Xo(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(jn=q()+500,Il&&Ft())}}function Zt(e){Nt!==null&&Nt.tag===0&&!(D&6)&&xn();var t=D;D|=1;var n=Be.transition,r=B;try{if(Be.transition=null,B=1,e)return e()}finally{B=r,Be.transition=n,D=t,!(D&6)&&Ft()}}function Zo(){je=mn.current,Q(mn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(zo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Nn(),Q(Ce),Q(pe),Bo();break;case 5:Do(r);break;case 4:Nn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:bo(r.type._context);break;case 22:case 23:Zo()}n=n.return}if(oe=e,ee=e=Mt(e.current,null),se=je=t,le=0,hr=null,Ko=Ol=Xt=0,ke=Zn=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}Vt=null}return e}function wc(e,t){do{var n=ee;try{if(Lo(),Yr.current=xl,_l){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}_l=!1}if(Yt=0,ie=re=X=null,Yn=!1,fr=0,Wo.current=null,n===null||n.return===null){le=1,hr=t,ee=null;break}e:{var i=e,a=n.return,c=n,d=t;if(t=se,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var g=d,_=c,o=_.tag;if(!(_.mode&1)&&(o===0||o===11||o===15)){var s=_.alternate;s?(_.updateQueue=s.updateQueue,_.memoizedState=s.memoizedState,_.lanes=s.lanes):(_.updateQueue=null,_.memoizedState=null)}var u=Za(a);if(u!==null){u.flags&=-257,Ja(u,a,c,i,t),u.mode&1&&Xa(i,g,t),t=u,d=g;var p=t.updateQueue;if(p===null){var v=new Set;v.add(d),t.updateQueue=v}else p.add(d);break e}else{if(!(t&1)){Xa(i,g,t),Jo();break e}d=Error(S(426))}}else if(W&&c.mode&1){var x=Za(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ja(x,a,c,i,t),Io(En(d,c));break e}}i=d=En(d,c),le!==4&&(le=2),Zn===null?Zn=[i]:Zn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=lc(i,d,t);Ua(i,f);break e;case 1:c=d;var h=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zt===null||!zt.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=ic(i,c,t);Ua(i,w);break e}}i=i.return}while(i!==null)}Cc(n)}catch(k){t=k,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function kc(){var e=wl.current;return wl.current=xl,e===null?xl:e}function Jo(){(le===0||le===3||le===2)&&(le=4),oe===null||!(Xt&268435455)&&!(Ol&268435455)||kt(oe,se)}function Cl(e,t){var n=D;D|=2;var r=kc();(oe!==e||se!==t)&&(lt=null,Gt(e,t));do try{Xf();break}catch(l){wc(e,l)}while(!0);if(Lo(),D=n,wl.current=r,ee!==null)throw Error(S(261));return oe=null,se=0,le}function Xf(){for(;ee!==null;)Sc(ee)}function Zf(){for(;ee!==null&&!wd();)Sc(ee)}function Sc(e){var t=Ec(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Cc(e):ee=t,Wo.current=null}function Cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uf(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ee=null;return}}else if(n=Vf(n,t,je),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);le===0&&(le=5)}function Ht(e,t,n){var r=B,l=Be.transition;try{Be.transition=null,B=1,Jf(e,t,n,r)}finally{Be.transition=l,B=r}return null}function Jf(e,t,n,r){do xn();while(Nt!==null);if(D&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(zd(e,i),e===oe&&(ee=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,jc(il,function(){return xn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var a=B;B=1;var c=D;D|=4,Wo.current=null,Qf(e,n),yc(n,e),yf(Di),al=!!Fi,Di=Fi=null,e.current=n,Wf(n),kd(),D=c,B=a,Be.transition=i}else e.current=n;if(Br&&(Br=!1,Nt=e,Sl=l),i=e.pendingLanes,i===0&&(zt=null),Nd(n.stateNode),Ee(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(kl)throw kl=!1,e=io,io=null,e;return Sl&1&&e.tag!==0&&xn(),i=e.pendingLanes,i&1?e===oo?Jn++:(Jn=0,oo=e):Jn=0,Ft(),null}function xn(){if(Nt!==null){var e=lu(Sl),t=Be.transition,n=B;try{if(Be.transition=null,B=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,Sl=0,D&6)throw Error(S(331));var l=D;for(D|=4,A=e.current;A!==null;){var i=A,a=i.child;if(A.flags&16){var c=i.deletions;if(c!==null){for(var d=0;d<c.length;d++){var g=c[d];for(A=g;A!==null;){var _=A;switch(_.tag){case 0:case 11:case 15:Xn(8,_,i)}var o=_.child;if(o!==null)o.return=_,A=o;else for(;A!==null;){_=A;var s=_.sibling,u=_.return;if(hc(_),_===g){A=null;break}if(s!==null){s.return=u,A=s;break}A=u}}}var p=i.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}A=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,A=a;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,A=f;break e}A=i.return}}var h=e.current;for(A=h;A!==null;){a=A;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,A=y;else e:for(a=h;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:bl(9,c)}}catch(k){J(c,c.return,k)}if(c===a){A=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,A=w;break e}A=c.return}}if(D=l,Ft(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(jl,e)}catch{}r=!0}return r}finally{B=n,Be.transition=t}}return!1}function ds(e,t,n){t=En(n,t),t=lc(e,t,1),e=Pt(e,t,1),t=ye(),e!==null&&(yr(e,1,t),Ee(e,t))}function J(e,t,n){if(e.tag===3)ds(e,e,n);else for(;t!==null;){if(t.tag===3){ds(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=En(n,e),e=ic(t,e,1),t=Pt(t,e,1),e=ye(),t!==null&&(yr(t,1,e),Ee(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(le===4||le===3&&(se&130023424)===se&&500>q()-Yo?Gt(e,0):Ko|=n),Ee(e,t)}function Nc(e,t){t===0&&(e.mode&1?(t=Pr,Pr<<=1,!(Pr&130023424)&&(Pr=4194304)):t=1);var n=ye();e=dt(e,t),e!==null&&(yr(e,t,n),Ee(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Nc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,$f(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&Pu(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zr(e,t),e=t.pendingProps;var l=kn(t,pe.current);_n(t,n),l=$o(null,t,r,e,l,n);var i=Vo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,fl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ro(t),l.updater=Ll,t.stateNode=l,l._reactInternals=t,Ki(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Po(t),ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=rp(r),e=Ue(r,e),l){case 0:t=Xi(null,t,r,e,n);break e;case 1:t=ts(null,t,r,e,n);break e;case 11:t=qa(null,t,r,e,n);break e;case 14:t=es(null,t,r,Ue(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),Xi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),ts(e,t,r,l,n);case 3:e:{if(uc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Ou(e,t),vl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=En(Error(S(423)),t),t=ns(e,t,r,n,l);break e}else if(r!==l){l=En(Error(S(424)),t),t=ns(e,t,r,n,l);break e}else for(Te=At(t.stateNode.containerInfo.firstChild),Ae=t,W=!0,Qe=null,n=Lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===l){t=ft(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Ru(t),e===null&&Gi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Bi(r,l)?a=null:i!==null&&Bi(r,i)&&(t.flags|=32),sc(e,t),ve(e,t,a,n),t.child;case 6:return e===null&&Gi(t),null;case 13:return cc(e,t,n);case 4:return Fo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),qa(e,t,r,l,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,V(hl,r._currentValue),r._currentValue=a,i!==null)if(Xe(i.value,a)){if(i.children===l.children&&!Ce.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){a=i.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=st(-1,n&-n),d.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var _=g.pending;_===null?d.next=d:(d.next=_.next,_.next=d),g.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Qi(i.return,n,t),c.lanes|=n;break}d=d.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Qi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,_n(t,n),l=He(l),r=r(l),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,l=Ue(r,t.pendingProps),l=Ue(r.type,l),es(e,t,r,l,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),Zr(e,t),t.tag=1,Ne(r)?(e=!0,fl(t)):e=!1,_n(t,n),rc(t,r,l),Ki(t,r,l,n),Zi(null,t,r,!0,e,n);case 19:return dc(e,t,n);case 22:return ac(e,t,n)}throw Error(S(156,t.tag))};function jc(e,t){return eu(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new np(e,t,n,r)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yo)return 11;if(e===_o)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function el(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")qo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rn:return Qt(n.children,l,i,t);case vo:a=8,l|=8;break;case yi:return e=De(12,n,t,l|2),e.elementType=yi,e.lanes=i,e;case _i:return e=De(13,n,t,l),e.elementType=_i,e.lanes=i,e;case xi:return e=De(19,n,t,l),e.elementType=xi,e.lanes=i,e;case Rs:return Rl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bs:a=10;break e;case Os:a=9;break e;case yo:a=11;break e;case _o:a=14;break e;case _t:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Rl(e,t,n,r){return e=De(22,e,r,t),e.elementType=Rs,e.lanes=n,e.stateNode={isHidden:!1},e}function fi(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function pi(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ea(e,t,n,r,l,i,a,c,d){return e=new lp(e,t,n,c,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=De(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(i),e}function ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return bt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Tu(e,n,t)}return t}function Ac(e,t,n,r,l,i,a,c,d){return e=ea(n,r,!0,e,l,i,a,c,d),e.context=Tc(null),n=e.current,r=ye(),l=It(n),i=st(r,l),i.callback=t??null,Pt(n,i,l),e.current.lanes=l,yr(e,l,r),Ee(e,r),e}function Fl(e,t,n,r){var l=t.current,i=ye(),a=It(l);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(l,t,a),e!==null&&(Ye(e,l,a,i),Kr(e,l,a)),a}function Nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ta(e,t){fs(e,t),(e=e.alternate)&&fs(e,t)}function op(){return null}var Pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function na(e){this._internalRoot=e}Dl.prototype.render=na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Fl(e,t,null,null)};Dl.prototype.unmount=na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Fl(null,e,null,null)}),t[ct]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=au();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&uu(e)}};function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ps(){}function ap(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=Nl(a);i.call(g)}}var a=Ac(t,r,e,0,null,!1,!1,"",ps);return e._reactRootContainer=a,e[ct]=a.current,ar(e.nodeType===8?e.parentNode:e),Zt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var c=r;r=function(){var g=Nl(d);c.call(g)}}var d=ea(e,0,!1,null,null,!1,!1,"",ps);return e._reactRootContainer=d,e[ct]=d.current,ar(e.nodeType===8?e.parentNode:e),Zt(function(){Fl(t,d,n,r)}),d}function Hl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var c=l;l=function(){var d=Nl(a);c.call(d)}}Fl(t,a,e,l)}else a=ap(n,t,e,l,r);return Nl(a)}iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(ko(t,n|1),Ee(t,q()),!(D&6)&&(jn=q()+500,Ft()))}break;case 13:Zt(function(){var r=dt(e,1);if(r!==null){var l=ye();Ye(r,e,1,l)}}),ta(e,1)}};So=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ye();Ye(t,e,134217728,n)}ta(e,134217728)}};ou=function(e){if(e.tag===13){var t=It(e),n=dt(e,t);if(n!==null){var r=ye();Ye(n,e,t,r)}ta(e,t)}};au=function(){return B};su=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Pi=function(e,t,n){switch(t){case"input":if(Si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=zl(r);if(!l)throw Error(S(90));Ds(r),Si(r,l)}}}break;case"textarea":Hs(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}};Ks=Xo;Ys=Zt;var sp={usingClientEntryPoint:!1,Events:[xr,sn,zl,Qs,Ws,Xo]},Dn={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Js(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{jl=Hr.inject(up),et=Hr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ra(t))throw Error(S(200));return ip(e,t,null,n)};ze.createRoot=function(e,t){if(!ra(e))throw Error(S(299));var n=!1,r="",l=Pc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ea(e,1,!1,null,null,n,!1,r,l),e[ct]=t.current,ar(e.nodeType===8?e.parentNode:e),new na(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Js(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Zt(e)};ze.hydrate=function(e,t,n){if(!Bl(t))throw Error(S(200));return Hl(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ra(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=Pc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ac(t,null,e,1,n??null,l,!1,i,a),e[ct]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Dl(t)};ze.render=function(e,t,n){if(!Bl(t))throw Error(S(200));return Hl(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(S(40));return e._reactRootContainer?(Zt(function(){Hl(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};ze.unstable_batchedUpdates=Xo;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Hl(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),zs.exports=ze;var cp=zs.exports,ms=cp;gi.createRoot=ms.createRoot,gi.hydrateRoot=ms.hydrateRoot;const hs=({onStart:e,onSettings:t,onHelp:n})=>m.jsxs("div",{className:"cg-main-menu",children:[m.jsxs("div",{className:"cg-menu-bg",children:[m.jsx("div",{className:"cg-menu-bg-gradient"}),m.jsx("div",{className:"cg-menu-bg-pattern"}),m.jsx("div",{className:"cg-menu-geass-symbols",children:m.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:m.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),m.jsxs("div",{className:"cg-menu-content",children:[m.jsxs("div",{className:"cg-menu-header",children:[m.jsxs("div",{className:"cg-menu-title-decoration",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:m.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),m.jsx("div",{className:"cg-title-line-right"})]}),m.jsxs("h1",{className:"cg-game-title",children:[m.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),m.jsx("span",{className:"cg-title-divider",children:":"}),m.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),m.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),m.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[m.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),m.jsx("div",{className:"cg-title-line-right"})]})]}),m.jsxs("nav",{className:"cg-menu-nav",children:[m.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("span",{className:"cg-button-text",children:"开始游戏"}),m.jsx("div",{className:"cg-button-shimmer"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:t,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),m.jsx("span",{className:"cg-button-text",children:"设置"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),m.jsx("footer",{className:"cg-menu-footer",children:m.jsx("div",{className:"cg-footer-decoration",children:m.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),m.jsx("style",{children:`
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
      `})]}),gr=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function dp(e){return gr.find(t=>t.id===e)}function We(e){const t=dp(e);return(t==null?void 0:t.name)||e}const la=({characterId:e,size:t=160,avatarNumber:n,animationState:r="idle"})=>{const l=n||Math.floor(Math.random()*4)+1,i=`avatars/${e}/${l}.png`;return m.jsx("img",{src:i,alt:e,style:{width:t,height:t,borderRadius:"8px",objectFit:"cover"}})},fp=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,i]=O.useState(null),a=gr.find(c=>c.id===e);return m.jsxs("div",{className:"cg-character-select",children:[m.jsxs("div",{className:"cg-select-bg",children:[m.jsx("div",{className:"cg-select-bg-gradient"}),m.jsx("div",{className:"cg-select-bg-pattern"})]}),m.jsxs("div",{className:"cg-select-content",children:[m.jsxs("header",{className:"cg-select-header",children:[m.jsxs("button",{className:"cg-back-button",onClick:r,children:[m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),m.jsx("span",{children:"返回"})]}),m.jsx("h2",{className:"cg-select-title",children:m.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),m.jsx("div",{className:"cg-select-placeholder"})]}),m.jsx("div",{className:"cg-character-grid",children:gr.map(c=>{const d=e===c.id,g=l===c.id;return m.jsxs("div",{className:`cg-character-card ${d?"cg-selected":""} ${g?"cg-hovered":""}`,onClick:()=>t(c.id),onMouseEnter:()=>i(c.id),onMouseLeave:()=>i(null),children:[m.jsxs("div",{className:"cg-card-frame",children:[m.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),m.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),m.jsx("div",{className:"cg-character-preview",children:m.jsx(la,{characterId:c.id,size:300})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("h3",{className:"cg-character-name",children:c.name}),m.jsx("p",{className:"cg-character-name-en",children:c.nameEn}),m.jsx("div",{className:"cg-character-skill",children:m.jsx("span",{className:"cg-skill-name",children:c.skill.name})})]}),d&&m.jsx("div",{className:"cg-selected-indicator",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:m.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),m.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${c.color}40 0%, transparent 70%)`}})]},c.id)})}),a&&m.jsx("div",{className:"cg-character-detail",children:m.jsxs("div",{className:"cg-detail-frame",children:[m.jsxs("div",{className:"cg-detail-content",children:[m.jsx("p",{className:"cg-detail-description",children:a.description}),m.jsxs("div",{className:"cg-detail-skill",children:[m.jsx("span",{className:"cg-skill-label",children:"技能:"}),m.jsx("span",{className:"cg-skill-value",children:a.skill.name}),m.jsx("p",{className:"cg-skill-desc",children:a.skill.description})]})]}),m.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[m.jsx("span",{children:"确认选择"}),m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),m.jsx("style",{children:`
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
      `})]})},$r=e=>{if(!e)return"#d4af37";const t=gr.find(n=>n.id===e);return(t==null?void 0:t.color)||"#d4af37"},pp=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:l=["cc","suzaku","kallen"],aiAvatars:i={},onToggleCardSelection:a,onConfirmPlay:c,onPass:d,onChallenge:g,onBackToMenu:_,onLelouchSkill:o,gameLog:s=[],funnyAction:u,isProcessing:p=!1})=>{var $,K,nt,Le,vt,be,rt,kr,Sr,Cr,b,P;const[v,x]=O.useState(!1);if(!e)return null;const{phase:f,liarCard:h,playerStats:y,aiPlayers:w,turnState:k}=e,C=f==="player_turn",N=f==="challenge",j=k==null?void 0:k.lastPlayerId,E=j==="player",I=e.playerHand||[],te=(k==null?void 0:k.turnNumber)||1,me=j&&j!=="player"?w==null?void 0:w.find(z=>z.id===j):null,Me=()=>{t.length>0&&c()},we=()=>x(!0),mt=z=>{x(!1),o==null||o(z)},ht=z=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[z]||z,gt=z=>z==="joker"?"#d4af37":z==="hearts"||z==="diamonds"?"#dc2626":"#1a1a24",T=We(n),M=$r(n),L=(z,F,H,U,he,Oe,en=!1)=>m.jsxs("div",{className:`cg-character ${en?"cg-character-top":""}`,children:[m.jsx("div",{className:"cg-character-avatar",children:F&&m.jsx(la,{characterId:F,size:160,avatarNumber:Oe})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("div",{className:"cg-character-name",style:{color:he},children:z}),m.jsxs("div",{className:"cg-character-stats",children:[m.jsx("span",{children:Array(H).fill("❤️").join("")}),m.jsxs("span",{className:"cg-card-count",children:["🃏",U]})]})]})]});return m.jsxs("div",{className:"cg-game-table",children:[m.jsxs("div",{className:"cg-top-bar",children:[m.jsx("button",{className:"cg-back-button",onClick:_,children:"← 主页面"}),m.jsxs("div",{className:"cg-round-info",children:["回合 ",te]}),m.jsxs("div",{className:"cg-liar-card",children:["骗子牌 ",m.jsx("span",{children:h})]}),m.jsx("div",{className:"cg-placeholder"})]}),m.jsxs("div",{className:"cg-main",children:[m.jsxs("div",{className:"cg-log",children:[m.jsx("div",{className:"cg-log-title",children:"📜 游戏记录"}),m.jsx("div",{className:"cg-log-content",children:s.map((z,F)=>m.jsx("div",{className:`cg-log-item ${z.includes("质疑")?"challenge":""} ${z.includes("Geass")?"geass":""}`,children:z},F))})]}),m.jsxs("div",{className:"cg-play-area",children:[L(We(l[0]),l[0],((K=($=w==null?void 0:w[0])==null?void 0:$.stats)==null?void 0:K.hp)||3,((Le=(nt=w==null?void 0:w[0])==null?void 0:nt.hand)==null?void 0:Le.length)||0,$r(l[0]),i[l[0]]||1,!0),m.jsxs("div",{className:"cg-middle-row",children:[L(We(l[1]),l[1],((be=(vt=w==null?void 0:w[1])==null?void 0:vt.stats)==null?void 0:be.hp)||3,((kr=(rt=w==null?void 0:w[1])==null?void 0:rt.hand)==null?void 0:kr.length)||0,$r(l[1]),i[l[1]]||1),m.jsx("div",{className:"cg-table",children:m.jsx("div",{className:"cg-table-inner",children:k!=null&&k.playedCards?m.jsxs("div",{className:"cg-played",children:[m.jsxs("div",{className:"cg-player-name",style:{color:"#d4af37",fontWeight:"bold",marginBottom:"8px"},children:[k.playedCards.playedBy==="player"?T:k.playedCards.playedBy.startsWith("ai")?We(k.playedCards.playedBy.replace("ai-","")):"未知玩家"," 出牌"]}),m.jsx("div",{className:"cg-cards",children:k.playedCards.actualCards.map((z,F)=>m.jsx("div",{className:"cg-card-small cg-card-back",children:m.jsx("img",{src:"/assets/cards/card-back.svg",alt:"牌背"})},z.id))}),m.jsxs("div",{className:"cg-card-count-display",children:[k.playedCards.cardIds.length," 张牌"]})]}):m.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})}),L(We(l[2]),l[2],((Cr=(Sr=w==null?void 0:w[2])==null?void 0:Sr.stats)==null?void 0:Cr.hp)||3,((P=(b=w==null?void 0:w[2])==null?void 0:b.hand)==null?void 0:P.length)||0,$r(l[2]),i[l[2]]||1)]}),m.jsxs("div",{className:"cg-player-position",children:[L(T,n,y.hp,I.length,M,r),n==="lelouch"&&C&&m.jsx("button",{className:"cg-skill-btn",onClick:we,disabled:p,children:"绝对命令"})]})]})]}),m.jsx("div",{className:"cg-hand-area",children:m.jsx("div",{className:"cg-hand",children:I.map((z,F)=>{const H=t.includes(z.id);return m.jsxs("button",{className:`cg-card ${H?"selected":""} ${!C||p?"disabled":""}`,onClick:()=>a(z.id),style:{transform:`translateX(${(F-I.length/2)*45}px) ${H?"translateY(-20px)":""}`},disabled:!C||p,children:[m.jsxs("div",{className:"cg-card-face",children:[m.jsx("div",{style:{color:gt(z.suit)},children:z.rank}),m.jsx("div",{style:{color:gt(z.suit),fontSize:"20px"},children:ht(z.suit)})]}),H&&m.jsx("div",{className:"cg-check",children:"✓"})]},z.id)})})}),m.jsxs("div",{className:"cg-actions",children:[C&&t.length>0&&m.jsxs("button",{className:"cg-btn cg-btn-play",onClick:Me,disabled:p,children:["出牌 (",t.length,")"]}),C&&t.length===0&&m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:p,children:"跳过"}),N&&!E&&(me==null?void 0:me.isActive)&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:g,disabled:p,children:"⚔️ 质疑"}),m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:p,children:"不质疑"})]}),N&&E&&m.jsx("span",{className:"cg-wait",children:"等待AI..."}),!C&&!N&&m.jsx("span",{className:"cg-wait",children:"AI回合..."})]}),v&&m.jsx("div",{className:"cg-modal",children:m.jsxs("div",{className:"cg-modal-content",children:[m.jsx("h3",{children:"选择新的骗子牌"}),m.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(z=>m.jsx("button",{className:z===h?"current":"",onClick:()=>mt(z),children:z},z))}),m.jsx("button",{className:"cg-btn-skip",onClick:()=>x(!1),children:"取消"})]})}),m.jsx("style",{children:`
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
      `})]})},mp=({isWin:e,playerScore:t,opponentScore:n,onRestart:r,onMainMenu:l})=>{const[i,a]=O.useState(!1),[c,d]=O.useState(!1);O.useEffect(()=>{e&&a(!0);const _=setTimeout(()=>d(!0),1e3);return()=>clearTimeout(_)},[e]);const g=e?"lelouch":"cc";return m.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[m.jsxs("div",{className:"cg-result-bg",children:[m.jsx("div",{className:"cg-result-bg-gradient"}),e?m.jsx("div",{className:"cg-result-bg-win",children:m.jsx("div",{className:"cg-victory-rays"})}):m.jsx("div",{className:"cg-result-bg-lose",children:m.jsx("div",{className:"cg-defeat-shadow"})})]}),i&&m.jsx(hp,{}),m.jsxs("div",{className:`cg-result-content ${c?"cg-animate-in":""}`,children:[m.jsxs("div",{className:"cg-result-header",children:[m.jsx("div",{className:"cg-result-badge",children:e?m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((_,o)=>m.jsx("circle",{cx:50+35*Math.cos((o*72-90)*Math.PI/180),cy:50+35*Math.sin((o*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:m.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${o*.2}s`,repeatCount:"indefinite"})},o))]}):m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),m.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),m.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),m.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),m.jsx("div",{className:"cg-result-character",children:m.jsxs("div",{className:"cg-character-showcase",children:[m.jsx(la,{characterId:g,size:300}),m.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),m.jsx("div",{className:"cg-result-score",children:m.jsxs("div",{className:"cg-score-panel",children:[m.jsxs("div",{className:"cg-score-item cg-score-player",children:[m.jsx("span",{className:"cg-score-label",children:"玩家"}),m.jsx("span",{className:"cg-score-value",children:t})]}),m.jsx("div",{className:"cg-score-divider",children:m.jsx("span",{children:"VS"})}),m.jsxs("div",{className:"cg-score-item cg-score-opponent",children:[m.jsx("span",{className:"cg-score-value",children:n}),m.jsx("span",{className:"cg-score-label",children:"对手"})]})]})}),m.jsxs("div",{className:"cg-result-actions",children:[m.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:r,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),m.jsx("span",{children:"再来一局"})]}),m.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:l,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),m.jsx("span",{children:"返回主菜单"})]})]})]}),m.jsx("style",{children:`
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
      `})]})},hp=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return m.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>m.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var tl={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var o=this||n;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var s=this||n;if(o=parseFloat(o),s.ctx||_(),typeof o<"u"&&o>=0&&o<=1){if(s._volume=o,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(o,n.ctx.currentTime);for(var u=0;u<s._howls.length;u++)if(!s._howls[u]._webAudio)for(var p=s._howls[u]._getSoundIds(),v=0;v<p.length;v++){var x=s._howls[u]._soundById(p[v]);x&&x._node&&(x._node.volume=x._volume*o)}return s}return s._volume},mute:function(o){var s=this||n;s.ctx||_(),s._muted=o,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(o?0:s._volume,n.ctx.currentTime);for(var u=0;u<s._howls.length;u++)if(!s._howls[u]._webAudio)for(var p=s._howls[u]._getSoundIds(),v=0;v<p.length;v++){var x=s._howls[u]._soundById(p[v]);x&&x._node&&(x._node.muted=o?!0:x._muted)}return s},stop:function(){for(var o=this||n,s=0;s<o._howls.length;s++)o._howls[s].stop();return o},unload:function(){for(var o=this||n,s=o._howls.length-1;s>=0;s--)o._howls[s].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,_()),o},codecs:function(o){return(this||n)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||n;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var s=new Audio;s.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return o}if(!s||typeof s.canPlayType!="function")return o;var u=s.canPlayType("audio/mpeg;").replace(/^no$/,""),p=o._navigator?o._navigator.userAgent:"",v=p.match(/OPR\/(\d+)/g),x=v&&parseInt(v[0].split("/")[1],10)<33,f=p.indexOf("Safari")!==-1&&p.indexOf("Chrome")===-1,h=p.match(/Version\/(.*?) /),y=f&&h&&parseInt(h[1],10)<15;return o._codecs={mp3:!!(!x&&(u||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!u,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||n;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var s=function(u){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var p=new Audio;p._unlocked=!0,o._releaseHtml5Audio(p)}catch{o.noAudio=!0;break}for(var v=0;v<o._howls.length;v++)if(!o._howls[v]._webAudio)for(var x=o._howls[v]._getSoundIds(),f=0;f<x.length;f++){var h=o._howls[v]._soundById(x[f]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}o._autoResume();var y=o.ctx.createBufferSource();y.buffer=o._scratchBuffer,y.connect(o.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),y.onended=function(){y.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<o._howls.length;w++)o._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),o}},_obtainHtml5Audio:function(){var o=this||n;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var s=this||n;return o._unlocked&&s._html5AudioPool.push(o),s},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<o._howls.length;s++)if(o._howls[s]._webAudio){for(var u=0;u<o._howls[s]._sounds.length;u++)if(!o._howls[s]._sounds[u]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var p=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(p,p)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!n.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var s=0;s<o._howls.length;s++)o._howls[s]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var n=new t,r=function(o){var s=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(o)};r.prototype={init:function(o){var s=this;return n.ctx||_(),s._autoplay=o.autoplay||!1,s._format=typeof o.format!="string"?o.format:[o.format],s._html5=o.html5||!1,s._muted=o.mute||!1,s._loop=o.loop||!1,s._pool=o.pool||5,s._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,s._rate=o.rate||1,s._sprite=o.sprite||{},s._src=typeof o.src!="string"?o.src:[o.src],s._volume=o.volume!==void 0?o.volume:1,s._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=o.onend?[{fn:o.onend}]:[],s._onfade=o.onfade?[{fn:o.onfade}]:[],s._onload=o.onload?[{fn:o.onload}]:[],s._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],s._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],s._onpause=o.onpause?[{fn:o.onpause}]:[],s._onplay=o.onplay?[{fn:o.onplay}]:[],s._onstop=o.onstop?[{fn:o.onstop}]:[],s._onmute=o.onmute?[{fn:o.onmute}]:[],s._onvolume=o.onvolume?[{fn:o.onvolume}]:[],s._onrate=o.onrate?[{fn:o.onrate}]:[],s._onseek=o.onseek?[{fn:o.onseek}]:[],s._onunlock=o.onunlock?[{fn:o.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var o=this,s=null;if(n.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var u=0;u<o._src.length;u++){var p,v;if(o._format&&o._format[u])p=o._format[u];else{if(v=o._src[u],typeof v!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}p=/^data:audio\/([^;,]+);/i.exec(v),p||(p=/\.([^.]+)$/.exec(v.split("?",1)[0])),p&&(p=p[1].toLowerCase())}if(p||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),p&&n.codecs(p)){s=o._src[u];break}}if(!s){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=s,o._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new l(o),o._webAudio&&a(o),o},play:function(o,s){var u=this,p=null;if(typeof o=="number")p=o,o=null;else{if(typeof o=="string"&&u._state==="loaded"&&!u._sprite[o])return null;if(typeof o>"u"&&(o="__default",!u._playLock)){for(var v=0,x=0;x<u._sounds.length;x++)u._sounds[x]._paused&&!u._sounds[x]._ended&&(v++,p=u._sounds[x]._id);v===1?o=null:p=null}}var f=p?u._soundById(p):u._inactiveSound();if(!f)return null;if(p&&!o&&(o=f._sprite||"__default"),u._state!=="loaded"){f._sprite=o,f._ended=!1;var h=f._id;return u._queue.push({event:"play",action:function(){u.play(h)}}),h}if(p&&!f._paused)return s||u._loadQueue("play"),f._id;u._webAudio&&n._autoResume();var y=Math.max(0,f._seek>0?f._seek:u._sprite[o][0]/1e3),w=Math.max(0,(u._sprite[o][0]+u._sprite[o][1])/1e3-y),k=w*1e3/Math.abs(f._rate),C=u._sprite[o][0]/1e3,N=(u._sprite[o][0]+u._sprite[o][1])/1e3;f._sprite=o,f._ended=!1;var j=function(){f._paused=!1,f._seek=y,f._start=C,f._stop=N,f._loop=!!(f._loop||u._sprite[o][2])};if(y>=N){u._ended(f);return}var E=f._node;if(u._webAudio){var I=function(){u._playLock=!1,j(),u._refreshBuffer(f);var we=f._muted||u._muted?0:f._volume;E.gain.setValueAtTime(we,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof E.bufferSource.start>"u"?f._loop?E.bufferSource.noteGrainOn(0,y,86400):E.bufferSource.noteGrainOn(0,y,w):f._loop?E.bufferSource.start(0,y,86400):E.bufferSource.start(0,y,w),k!==1/0&&(u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),k)),s||setTimeout(function(){u._emit("play",f._id),u._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?I():(u._playLock=!0,u.once("resume",I),u._clearTimer(f._id))}else{var te=function(){E.currentTime=y,E.muted=f._muted||u._muted||n._muted||E.muted,E.volume=f._volume*n.volume(),E.playbackRate=f._rate;try{var we=E.play();if(we&&typeof Promise<"u"&&(we instanceof Promise||typeof we.then=="function")?(u._playLock=!0,j(),we.then(function(){u._playLock=!1,E._unlocked=!0,s?u._loadQueue():u._emit("play",f._id)}).catch(function(){u._playLock=!1,u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(u._playLock=!1,j(),u._emit("play",f._id)),E.playbackRate=f._rate,E.paused){u._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||f._loop?u._endTimers[f._id]=setTimeout(u._ended.bind(u,f),k):(u._endTimers[f._id]=function(){u._ended(f),E.removeEventListener("ended",u._endTimers[f._id],!1)},E.addEventListener("ended",u._endTimers[f._id],!1))}catch(mt){u._emit("playerror",f._id,mt)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=u._src,E.load());var me=window&&window.ejecta||!E.readyState&&n._navigator.isCocoonJS;if(E.readyState>=3||me)te();else{u._playLock=!0,u._state="loading";var Me=function(){u._state="loaded",te(),E.removeEventListener(n._canPlayEvent,Me,!1)};E.addEventListener(n._canPlayEvent,Me,!1),u._clearTimer(f._id)}}return f._id},pause:function(o){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(o)}}),s;for(var u=s._getSoundIds(o),p=0;p<u.length;p++){s._clearTimer(u[p]);var v=s._soundById(u[p]);if(v&&!v._paused&&(v._seek=s.seek(u[p]),v._rateSeek=0,v._paused=!0,s._stopFade(u[p]),v._node))if(s._webAudio){if(!v._node.bufferSource)continue;typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),s._cleanBuffer(v._node)}else(!isNaN(v._node.duration)||v._node.duration===1/0)&&v._node.pause();arguments[1]||s._emit("pause",v?v._id:null)}return s},stop:function(o,s){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"stop",action:function(){u.stop(o)}}),u;for(var p=u._getSoundIds(o),v=0;v<p.length;v++){u._clearTimer(p[v]);var x=u._soundById(p[v]);x&&(x._seek=x._start||0,x._rateSeek=0,x._paused=!0,x._ended=!0,u._stopFade(p[v]),x._node&&(u._webAudio?x._node.bufferSource&&(typeof x._node.bufferSource.stop>"u"?x._node.bufferSource.noteOff(0):x._node.bufferSource.stop(0),u._cleanBuffer(x._node)):(!isNaN(x._node.duration)||x._node.duration===1/0)&&(x._node.currentTime=x._start||0,x._node.pause(),x._node.duration===1/0&&u._clearSound(x._node))),s||u._emit("stop",x._id))}return u},mute:function(o,s){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"mute",action:function(){u.mute(o,s)}}),u;if(typeof s>"u")if(typeof o=="boolean")u._muted=o;else return u._muted;for(var p=u._getSoundIds(s),v=0;v<p.length;v++){var x=u._soundById(p[v]);x&&(x._muted=o,x._interval&&u._stopFade(x._id),u._webAudio&&x._node?x._node.gain.setValueAtTime(o?0:x._volume,n.ctx.currentTime):x._node&&(x._node.muted=n._muted?!0:o),u._emit("mute",x._id))}return u},volume:function(){var o=this,s=arguments,u,p;if(s.length===0)return o._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var v=o._getSoundIds(),x=v.indexOf(s[0]);x>=0?p=parseInt(s[0],10):u=parseFloat(s[0])}else s.length>=2&&(u=parseFloat(s[0]),p=parseInt(s[1],10));var f;if(typeof u<"u"&&u>=0&&u<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,s)}}),o;typeof p>"u"&&(o._volume=u),p=o._getSoundIds(p);for(var h=0;h<p.length;h++)f=o._soundById(p[h]),f&&(f._volume=u,s[2]||o._stopFade(p[h]),o._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(u,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=u*n.volume()),o._emit("volume",f._id))}else return f=p?o._soundById(p):o._sounds[0],f?f._volume:0;return o},fade:function(o,s,u,p){var v=this;if(v._state!=="loaded"||v._playLock)return v._queue.push({event:"fade",action:function(){v.fade(o,s,u,p)}}),v;o=Math.min(Math.max(0,parseFloat(o)),1),s=Math.min(Math.max(0,parseFloat(s)),1),u=parseFloat(u),v.volume(o,p);for(var x=v._getSoundIds(p),f=0;f<x.length;f++){var h=v._soundById(x[f]);if(h){if(p||v._stopFade(x[f]),v._webAudio&&!h._muted){var y=n.ctx.currentTime,w=y+u/1e3;h._volume=o,h._node.gain.setValueAtTime(o,y),h._node.gain.linearRampToValueAtTime(s,w)}v._startFadeInterval(h,o,s,u,x[f],typeof p>"u")}}return v},_startFadeInterval:function(o,s,u,p,v,x){var f=this,h=s,y=u-s,w=Math.abs(y/.01),k=Math.max(4,w>0?p/w:p),C=Date.now();o._fadeTo=u,o._interval=setInterval(function(){var N=(Date.now()-C)/p;C=Date.now(),h+=y*N,h=Math.round(h*100)/100,y<0?h=Math.max(u,h):h=Math.min(u,h),f._webAudio?o._volume=h:f.volume(h,o._id,!0),x&&(f._volume=h),(u<s&&h<=u||u>s&&h>=u)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,f.volume(u,o._id),f._emit("fade",o._id))},k)},_stopFade:function(o){var s=this,u=s._soundById(o);return u&&u._interval&&(s._webAudio&&u._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(u._interval),u._interval=null,s.volume(u._fadeTo,o),u._fadeTo=null,s._emit("fade",o)),s},loop:function(){var o=this,s=arguments,u,p,v;if(s.length===0)return o._loop;if(s.length===1)if(typeof s[0]=="boolean")u=s[0],o._loop=u;else return v=o._soundById(parseInt(s[0],10)),v?v._loop:!1;else s.length===2&&(u=s[0],p=parseInt(s[1],10));for(var x=o._getSoundIds(p),f=0;f<x.length;f++)v=o._soundById(x[f]),v&&(v._loop=u,o._webAudio&&v._node&&v._node.bufferSource&&(v._node.bufferSource.loop=u,u&&(v._node.bufferSource.loopStart=v._start||0,v._node.bufferSource.loopEnd=v._stop,o.playing(x[f])&&(o.pause(x[f],!0),o.play(x[f],!0)))));return o},rate:function(){var o=this,s=arguments,u,p;if(s.length===0)p=o._sounds[0]._id;else if(s.length===1){var v=o._getSoundIds(),x=v.indexOf(s[0]);x>=0?p=parseInt(s[0],10):u=parseFloat(s[0])}else s.length===2&&(u=parseFloat(s[0]),p=parseInt(s[1],10));var f;if(typeof u=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,s)}}),o;typeof p>"u"&&(o._rate=u),p=o._getSoundIds(p);for(var h=0;h<p.length;h++)if(f=o._soundById(p[h]),f){o.playing(p[h])&&(f._rateSeek=o.seek(p[h]),f._playStart=o._webAudio?n.ctx.currentTime:f._playStart),f._rate=u,o._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(u,n.ctx.currentTime):f._node&&(f._node.playbackRate=u);var y=o.seek(p[h]),w=(o._sprite[f._sprite][0]+o._sprite[f._sprite][1])/1e3-y,k=w*1e3/Math.abs(f._rate);(o._endTimers[p[h]]||!f._paused)&&(o._clearTimer(p[h]),o._endTimers[p[h]]=setTimeout(o._ended.bind(o,f),k)),o._emit("rate",f._id)}}else return f=o._soundById(p),f?f._rate:o._rate;return o},seek:function(){var o=this,s=arguments,u,p;if(s.length===0)o._sounds.length&&(p=o._sounds[0]._id);else if(s.length===1){var v=o._getSoundIds(),x=v.indexOf(s[0]);x>=0?p=parseInt(s[0],10):o._sounds.length&&(p=o._sounds[0]._id,u=parseFloat(s[0]))}else s.length===2&&(u=parseFloat(s[0]),p=parseInt(s[1],10));if(typeof p>"u")return 0;if(typeof u=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,s)}}),o;var f=o._soundById(p);if(f)if(typeof u=="number"&&u>=0){var h=o.playing(p);h&&o.pause(p,!0),f._seek=u,f._ended=!1,o._clearTimer(p),!o._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=u);var y=function(){h&&o.play(p,!0),o._emit("seek",p)};if(h&&!o._webAudio){var w=function(){o._playLock?setTimeout(w,0):y()};setTimeout(w,0)}else y()}else if(o._webAudio){var k=o.playing(p)?n.ctx.currentTime-f._playStart:0,C=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(C+k*Math.abs(f._rate))}else return f._node.currentTime;return o},playing:function(o){var s=this;if(typeof o=="number"){var u=s._soundById(o);return u?!u._paused:!1}for(var p=0;p<s._sounds.length;p++)if(!s._sounds[p]._paused)return!0;return!1},duration:function(o){var s=this,u=s._duration,p=s._soundById(o);return p&&(u=s._sprite[p._sprite][1]/1e3),u},state:function(){return this._state},unload:function(){for(var o=this,s=o._sounds,u=0;u<s.length;u++)s[u]._paused||o.stop(s[u]._id),o._webAudio||(o._clearSound(s[u]._node),s[u]._node.removeEventListener("error",s[u]._errorFn,!1),s[u]._node.removeEventListener(n._canPlayEvent,s[u]._loadFn,!1),s[u]._node.removeEventListener("ended",s[u]._endFn,!1),n._releaseHtml5Audio(s[u]._node)),delete s[u]._node,o._clearTimer(s[u]._id);var p=n._howls.indexOf(o);p>=0&&n._howls.splice(p,1);var v=!0;for(u=0;u<n._howls.length;u++)if(n._howls[u]._src===o._src||o._src.indexOf(n._howls[u]._src)>=0){v=!1;break}return i&&v&&delete i[o._src],n.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,s,u,p){var v=this,x=v["_on"+o];return typeof s=="function"&&x.push(p?{id:u,fn:s,once:p}:{id:u,fn:s}),v},off:function(o,s,u){var p=this,v=p["_on"+o],x=0;if(typeof s=="number"&&(u=s,s=null),s||u)for(x=0;x<v.length;x++){var f=u===v[x].id;if(s===v[x].fn&&f||!s&&f){v.splice(x,1);break}}else if(o)p["_on"+o]=[];else{var h=Object.keys(p);for(x=0;x<h.length;x++)h[x].indexOf("_on")===0&&Array.isArray(p[h[x]])&&(p[h[x]]=[])}return p},once:function(o,s,u){var p=this;return p.on(o,s,u,1),p},_emit:function(o,s,u){for(var p=this,v=p["_on"+o],x=v.length-1;x>=0;x--)(!v[x].id||v[x].id===s||o==="load")&&(setTimeout((function(f){f.call(this,s,u)}).bind(p,v[x].fn),0),v[x].once&&p.off(o,v[x].fn,v[x].id));return p._loadQueue(o),p},_loadQueue:function(o){var s=this;if(s._queue.length>0){var u=s._queue[0];u.event===o&&(s._queue.shift(),s._loadQueue()),o||u.action()}return s},_ended:function(o){var s=this,u=o._sprite;if(!s._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(s._ended.bind(s,o),100),s;var p=!!(o._loop||s._sprite[u][2]);if(s._emit("end",o._id),!s._webAudio&&p&&s.stop(o._id,!0).play(o._id),s._webAudio&&p){s._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=n.ctx.currentTime;var v=(o._stop-o._start)*1e3/Math.abs(o._rate);s._endTimers[o._id]=setTimeout(s._ended.bind(s,o),v)}return s._webAudio&&!p&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,s._clearTimer(o._id),s._cleanBuffer(o._node),n._autoSuspend()),!s._webAudio&&!p&&s.stop(o._id,!0),s},_clearTimer:function(o){var s=this;if(s._endTimers[o]){if(typeof s._endTimers[o]!="function")clearTimeout(s._endTimers[o]);else{var u=s._soundById(o);u&&u._node&&u._node.removeEventListener("ended",s._endTimers[o],!1)}delete s._endTimers[o]}return s},_soundById:function(o){for(var s=this,u=0;u<s._sounds.length;u++)if(o===s._sounds[u]._id)return s._sounds[u];return null},_inactiveSound:function(){var o=this;o._drain();for(var s=0;s<o._sounds.length;s++)if(o._sounds[s]._ended)return o._sounds[s].reset();return new l(o)},_drain:function(){var o=this,s=o._pool,u=0,p=0;if(!(o._sounds.length<s)){for(p=0;p<o._sounds.length;p++)o._sounds[p]._ended&&u++;for(p=o._sounds.length-1;p>=0;p--){if(u<=s)return;o._sounds[p]._ended&&(o._webAudio&&o._sounds[p]._node&&o._sounds[p]._node.disconnect(0),o._sounds.splice(p,1),u--)}}},_getSoundIds:function(o){var s=this;if(typeof o>"u"){for(var u=[],p=0;p<s._sounds.length;p++)u.push(s._sounds[p]._id);return u}else return[o]},_refreshBuffer:function(o){var s=this;return o._node.bufferSource=n.ctx.createBufferSource(),o._node.bufferSource.buffer=i[s._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,n.ctx.currentTime),s},_cleanBuffer:function(o){var s=this,u=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return s;if(n._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),u))try{o.bufferSource.buffer=n._scratchBuffer}catch{}return o.bufferSource=null,s},_clearSound:function(o){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(o){this._parent=o,this.init()};l.prototype={init:function(){var o=this,s=o._parent;return o._muted=s._muted,o._loop=s._loop,o._volume=s._volume,o._rate=s._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++n._counter,s._sounds.push(o),o.create(),o},create:function(){var o=this,s=o._parent,u=n._muted||o._muted||o._parent._muted?0:o._volume;return s._webAudio?(o._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),o._node.gain.setValueAtTime(u,n.ctx.currentTime),o._node.paused=!0,o._node.connect(n.masterGain)):n.noAudio||(o._node=n._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(n._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=s._src,o._node.preload=s._preload===!0?"auto":s._preload,o._node.volume=u*n.volume(),o._node.load()),o},reset:function(){var o=this,s=o._parent;return o._muted=s._muted,o._loop=s._loop,o._volume=s._volume,o._rate=s._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++n._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,s=o._parent;s._duration=Math.ceil(o._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),o._node.removeEventListener(n._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,s=o._parent;s._duration===1/0&&(s._duration=Math.ceil(o._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var i={},a=function(o){var s=o._src;if(i[s]){o._duration=i[s].duration,g(o);return}if(/^data:[^;]+;base64,/.test(s)){for(var u=atob(s.split(",")[1]),p=new Uint8Array(u.length),v=0;v<u.length;++v)p[v]=u.charCodeAt(v);d(p.buffer,o)}else{var x=new XMLHttpRequest;x.open(o._xhr.method,s,!0),x.withCredentials=o._xhr.withCredentials,x.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(f){x.setRequestHeader(f,o._xhr.headers[f])}),x.onload=function(){var f=(x.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+x.status+".");return}d(x.response,o)},x.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete i[s],o.load())},c(x)}},c=function(o){try{o.send()}catch{o.onerror()}},d=function(o,s){var u=function(){s._emit("loaderror",null,"Decoding audio data failed.")},p=function(v){v&&s._sounds.length>0?(i[s._src]=v,g(s,v)):u()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(o).then(p).catch(u):n.ctx.decodeAudioData(o,p,u)},g=function(o,s){s&&!o._duration&&(o._duration=s.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},_=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=s?parseInt(s[1],10):null;if(o&&u&&u<9){var p=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!p&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof zn<"u"?(zn.HowlerGlobal=t,zn.Howler=n,zn.Howl=r,zn.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var i=this;if(!i.ctx||!i.ctx.listener)return i;if(r=typeof r!="number"?i._pos[1]:r,l=typeof l!="number"?i._pos[2]:l,typeof n=="number")i._pos=[n,r,l],typeof i.ctx.listener.positionX<"u"?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]);else return i._pos;return i},HowlerGlobal.prototype.orientation=function(n,r,l,i,a,c){var d=this;if(!d.ctx||!d.ctx.listener)return d;var g=d._orientation;if(r=typeof r!="number"?g[1]:r,l=typeof l!="number"?g[2]:l,i=typeof i!="number"?g[3]:i,a=typeof a!="number"?g[4]:a,c=typeof c!="number"?g[5]:c,typeof n=="number")d._orientation=[n,r,l,i,a,c],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(n,r,l,i,a,c);else return g;return d},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var a=l._getSoundIds(r),c=0;c<a.length;c++){var d=l._soundById(a[c]);if(d)if(typeof n=="number")d._stereo=n,d._pos=[n,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&t(d,i),i==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(n,0,0):d._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",d._id);else return d._stereo}return l},Howl.prototype.pos=function(n,r,l,i){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(n,r,l,i)}}),a;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof i>"u")if(typeof n=="number")a._pos=[n,r,l];else return a._pos;for(var c=a._getSoundIds(i),d=0;d<c.length;d++){var g=a._soundById(c[d]);if(g)if(typeof n=="number")g._pos=[n,r,l],g._node&&((!g._panner||g._panner.pan)&&t(g,"spatial"),typeof g._panner.positionX<"u"?(g._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setPosition(n,r,l)),a._emit("pos",g._id);else return g._pos}return a},Howl.prototype.orientation=function(n,r,l,i){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(n,r,l,i)}}),a;if(r=typeof r!="number"?a._orientation[1]:r,l=typeof l!="number"?a._orientation[2]:l,typeof i>"u")if(typeof n=="number")a._orientation=[n,r,l];else return a._orientation;for(var c=a._getSoundIds(i),d=0;d<c.length;d++){var g=a._soundById(c[d]);if(g)if(typeof n=="number")g._orientation=[n,r,l],g._node&&(g._panner||(g._pos||(g._pos=a._pos||[0,0,-.5]),t(g,"spatial")),typeof g._panner.orientationX<"u"?(g._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),g._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),g._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):g._panner.setOrientation(n,r,l)),a._emit("orientation",g._id);else return g._orientation}return a},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,i,a;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof i>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return a=n._soundById(parseInt(r[0],10)),a?a._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],i=parseInt(r[1],10));for(var c=n._getSoundIds(i),d=0;d<c.length;d++)if(a=n._soundById(c[d]),a){var g=a._pannerAttr;g={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:g.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:g.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:g.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:g.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:g.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:g.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:g.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:g.panningModel};var _=a._panner;_||(a._pos||(a._pos=n._pos||[0,0,-.5]),t(a,"spatial"),_=a._panner),_.coneInnerAngle=g.coneInnerAngle,_.coneOuterAngle=g.coneOuterAngle,_.coneOuterGain=g.coneOuterGain,_.distanceModel=g.distanceModel,_.maxDistance=g.maxDistance,_.refDistance=g.refDistance,_.rolloffFactor=g.rolloffFactor,_.panningModel=g.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(tl);const mi={"bgm-menu":{volume:.5,loop:!0},"bgm-game":{volume:.4,loop:!0},"bgm-victory":{volume:.6,loop:!1},"bgm-defeat":{volume:.5,loop:!1},"sfx-play-card":{volume:.7,loop:!1},"sfx-challenge":{volume:.8,loop:!1},"sfx-geass-activate":{volume:.9,loop:!1},"sfx-geass-hit":{volume:1,loop:!1},"sfx-geass-miss":{volume:.6,loop:!1},"sfx-button-click":{volume:.5,loop:!1},"sfx-card-shuffle":{volume:.6,loop:!1},"sfx-win":{volume:.8,loop:!1},"sfx-lose":{volume:.7,loop:!1},"sfx-character-select":{volume:.6,loop:!1},"sfx-turn-start":{volume:.5,loop:!1},"sfx-funny-dance":{volume:.8,loop:!1},"sfx-funny-monkey":{volume:.8,loop:!1},"sfx-funny-pizza":{volume:.7,loop:!1},"sfx-funny-laugh":{volume:.9,loop:!1},"sfx-funny-chicken":{volume:.8,loop:!1},"sfx-funny-chunibyo":{volume:.8,loop:!1},"sfx-funny-butterfly":{volume:.6,loop:!1}},gp={"bgm-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","bgm-game":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","bgm-victory":"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3","bgm-defeat":"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","sfx-play-card":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","sfx-challenge":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","sfx-geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","sfx-geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","sfx-geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","sfx-button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","sfx-card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","sfx-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","sfx-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","sfx-character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","sfx-turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","sfx-funny-dance":"https://assets.mixkit.co/sfx/preview/mixkit-funny-clown-horn-sound-560.mp3","sfx-funny-monkey":"https://assets.mixkit.co/sfx/preview/mixkit-monkey-laugh-96.mp3","sfx-funny-pizza":"https://assets.mixkit.co/sfx/preview/mixkit-cartoon-voice-laugh-468.mp3","sfx-funny-laugh":"https://assets.mixkit.co/sfx/preview/mixkit-laughing-cartoon-459.mp3","sfx-funny-chicken":"https://assets.mixkit.co/sfx/preview/mixkit-chicken-cluck-1762.mp3","sfx-funny-chunibyo":"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-metal-hit-2771.mp3","sfx-funny-butterfly":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3"};class vp{constructor(){ge(this,"sounds",new Map);ge(this,"currentBGM",null);ge(this,"enabled",!0);ge(this,"masterVolume",1);ge(this,"bgmVolume",.5);ge(this,"sfxVolume",.7);this.init()}init(){Object.entries(gp).forEach(([t,n])=>{const r=t,l=mi[r];try{const i=new tl.Howl({src:[n],volume:l.volume*this.getVolumeMultiplier(r),loop:l.loop,html5:!0,preload:!0,onloaderror:(a,c)=>{console.warn(`Failed to load sound: ${r}`,c)},onplayerror:(a,c)=>{var d;console.warn(`Failed to play sound: ${r}`,c),(d=this.sounds.get(r))==null||d.once("unlock",()=>{var g;(g=this.sounds.get(r))==null||g.play()})}});this.sounds.set(r,i)}catch(i){console.warn(`Error creating sound: ${r}`,i)}})}getVolumeMultiplier(t){return t.startsWith("bgm-")?this.bgmVolume:this.sfxVolume}play(t){if(!this.enabled)return;const n=this.sounds.get(t);n&&(t.startsWith("bgm-")&&(this.stopBGM(),this.currentBGM=t),n.play())}stop(t){const n=this.sounds.get(t);n&&n.stop()}stopBGM(){this.currentBGM&&(this.stop(this.currentBGM),this.currentBGM=null)}pauseBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(this.currentBGM){const t=this.sounds.get(this.currentBGM);t&&t.play()}}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),tl.Howler.volume(this.masterVolume)}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")&&n.volume(mi[r].volume*this.bgmVolume)})}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.sounds.forEach((n,r)=>{r.startsWith("bgm-")||n.volume(mi[r].volume*this.sfxVolume)})}setEnabled(t){this.enabled=t,t||this.stopAll()}stopAll(){tl.Howler.stop(),this.currentBGM=null}playFunnyAction(t){const n=["sfx-funny-dance","sfx-funny-monkey","sfx-funny-pizza","sfx-funny-laugh","sfx-funny-chicken","sfx-funny-chunibyo","sfx-funny-butterfly"],r=n[t%n.length];r&&this.play(r)}preload(){return new Promise(t=>{let n=0;const r=this.sounds.size;if(r===0){t();return}this.sounds.forEach(l=>{l.state()==="loaded"?(n++,n>=r&&t()):(l.once("load",()=>{n++,n>=r&&t()}),l.once("loaderror",()=>{n++,n>=r&&t()}))}),setTimeout(()=>t(),5e3)})}getStatus(){return{enabled:this.enabled,masterVolume:this.masterVolume,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume,currentBGM:this.currentBGM}}}const St=new vp,ne=e=>St.play(e),Dt=e=>St.play(e),yp=()=>St.stopBGM();class gs{constructor(){ge(this,"cards",[]);ge(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let l=0;l<6;l++){const i=t[l%4];this.cards.push({id:`${r}-${l}-${Math.random().toString(36).substr(2,9)}`,suit:i,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],l=[];for(let i=0;i<5;i++){const a=this.cards[i];a.owner="player",t.push(a)}for(let i=5;i<10;i++){const a=this.cards[i];a.owner="ai",n.push(a)}for(let i=10;i<15;i++){const a=this.cards[i];a.owner="ai2",r.push(a)}for(let i=15;i<20;i++){const a=this.cards[i];a.owner="ai3",l.push(a)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const l=this.cards.find(i=>i.id===r);l&&(l.owner="table",n.push(l))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const vs=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class _p{constructor(){ge(this,"BASE_HIT_CHANCE",1/3)}performGeass(t,n,r=null,l=0){let i=this.BASE_HIT_CHANCE;if(i+=l,r==="cc"&&!n.ccReviveUsed&&Math.random()<i&&n.hp<=1&&Math.random()<.5)return{hit:!1,damage:0,newStats:{...n,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"){if(Math.random()<.25)return{hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0};i-=.15}if(i=Math.max(.1,Math.min(.9,i)),Math.random()<i){const g={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},_=vs[Math.floor(Math.random()*vs.length)];return{hit:!0,damage:1,newStats:g,funnyAction:_.description,message:`Geass命中！${_.emoji} ${_.description}`}}else return{hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(.8,.2*t)}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}}class Ic{constructor(){ge(this,"cardSystem");ge(this,"geassSystem");ge(this,"state");ge(this,"playerCharacter",null);ge(this,"difficulty","normal");this.cardSystem=new gs,this.geassSystem=new _p,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],playerCharacter:null,playerSelectedCards:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null},lastAction:"",winner:null,geassResult:null,difficulty:"normal"}}initializeGame(t,n="normal"){this.playerCharacter=t,this.difficulty=n,this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:l,ai2Cards:i,ai3Cards:a}=this.cardSystem.dealCards(),c=this.cardSystem.setLiarCard(),d=Math.floor(Math.random()*4),g=t==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:d===0?"player_turn":"ai_turn",liarCard:c,playerCharacter:t,difficulty:n,currentPlayerIndex:d,playerHand:r,playerStats:{hp:g,maxHp:g,geassSuccessCount:0,geassFailCount:0},aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:l,stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:i,stats:{hp:4,maxHp:4,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:a,stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null}},this.state}resetRound(){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l}=this.cardSystem.dealCards(),i=this.cardSystem.setLiarCard(),a=Math.floor(Math.random()*4);return this.state.playerHand=t,this.state.aiPlayers[0].hand=n,this.state.aiPlayers[1].hand=r,this.state.aiPlayers[2].hand=l,this.state.liarCard=i,this.state.phase=a===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=a,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return 0}toggleCardSelection(t){const n=this.state.playerSelectedCards,r=n.indexOf(t),l=this.playerCharacter==="kallen"?4:3;return r>-1?this.state.playerSelectedCards=n.filter(i=>i!==t):n.length>=l?this.state.playerSelectedCards=[...n.slice(1),t]:this.state.playerSelectedCards=[...n,t],this.state}playerPlayCards(){if(this.state.phase!=="player_turn")throw new Error("不是玩家回合");const t=this.state.playerSelectedCards;if(t.length===0)throw new Error("未选择任何牌");if(this.playerCharacter==="kallen"&&t.length>4)throw new Error("红莲突击最多出4张牌");if(t.length>3)throw new Error("最多只能出3张牌");const n=this.cardSystem.playCards(t);this.state.playerHand=this.state.playerHand.filter(i=>!t.includes(i.id));const r=this.state.playerHand.length===0;this.playerCharacter==="kallen"&&t.length>=2&&(this.state.playerStats.kallenBoostActive=!0,this.state.playerStats.kallenCardCount=t.length);const l=this.state.liarCard;return this.state={...this.state,phase:"challenge",playerSelectedCards:[],turnState:{...this.state.turnState,playedCards:{cardIds:t,claimedRank:l,actualCards:n,playerId:"player"},lastPlayerId:"player"},lastAction:`玩家出了 ${t.length} 张牌${r?"（玩家手牌已出完！）":""}`},this.state}aiPlayCards(t){const n=this.state.aiPlayers.findIndex(p=>p.id===t);if(n===-1)throw new Error("AI不存在");const r=this.state.aiPlayers[n];if(!r.isActive||r.stats.hp<=0)return this.state.currentPlayerIndex=this.getNextPlayerIndex(),this.state;const l=r.hand,i=this.state.liarCard,a=l.filter(p=>p.rank===i||p.isJoker),c=l.filter(p=>p.rank!==i&&!p.isJoker);let d,g;const _=r.character==="kallen"?3:1;if(a.length>0&&Math.random()>.3){const p=Math.max(1,Math.min(_,a.length,Math.floor(Math.random()*_)+1));d=a.slice(0,p),g=i}else{const p=Math.max(1,Math.min(_,c.length,Math.floor(Math.random()*_)+1));d=c.slice(0,p),g=i}d.length===0&&l.length>0&&(d=[l[0]]),d.length===0&&(console.error("AI没有牌可出，但不应该发生"),d=l.slice(0,1));const o=d.map(p=>p.id),s=this.cardSystem.playCards(o);r.hand=r.hand.filter(p=>!o.includes(p.id)),r.character==="kallen"&&o.length>=2&&(r.stats.kallenBoostActive=!0,r.stats.kallenCardCount=o.length);const u=r.hand.length===0;return this.state={...this.state,phase:"challenge",turnState:{...this.state.turnState,playedCards:{cardIds:o,claimedRank:g,actualCards:s,playerId:t},lastPlayerId:t},lastAction:`${r.name}出了 ${o.length} 张牌${u?"（"+r.name+"手牌已出完！）":""}`},this.state}playerChallengeDecision(t){if(this.state.phase!=="challenge")throw new Error("不在质疑阶段");if(!this.state.turnState.playedCards)throw new Error("没有出牌记录");return t?this.resolveChallenge("player"):this.passToNextPlayer()}aiChallengeDecision(t){if(this.state.phase!=="challenge")throw new Error("不在质疑阶段");const n=this.state.turnState.playedCards;if(!n)throw new Error("没有出牌记录");if(n.playerId===t)return this.passToNextPlayer();const r=this.state.aiPlayers.find(i=>i.id===t);if(!r)throw new Error("AI不存在");return this.calculateAIChallengeProbability(r,n)?this.resolveChallenge(t):this.passToNextPlayer()}calculateAIChallengeProbability(t,n){let r=.3;const l=n.cardIds.length;switch(l>=3?r+=.3:l===2&&(r+=.15),t.stats.hp===1&&(r-=.2),t.character==="suzaku"&&(r+=.1),t.character==="cc"&&(r-=.1),this.difficulty){case"easy":r*=.8;break;case"hard":r*=1.2;break}return Math.random()<r}passToNextPlayer(){const t=this.state.turnState.playedCards;if(!t)throw new Error("没有出牌记录");this.state.currentPlayerIndex=this.getNextPlayerIndex();const n=this.getCurrentPlayerId();return this.state={...this.state,phase:n==="player"?"player_turn":"ai_turn",turnState:{...this.state.turnState,tableCards:[...this.state.turnState.tableCards,...t.actualCards],playedCards:null,turnNumber:n==="player"?this.state.turnState.turnNumber+1:this.state.turnState.turnNumber}},this.state}resolveChallenge(t){const n=this.state.turnState.playedCards;this.state.liarCard;const r=this.cardSystem.checkBluff(n.actualCards,n.claimedRank),l=r?n.playerId:t,i=g=>{if(g==="player")return this.playerCharacter?We(this.playerCharacter):"玩家";const _=this.state.aiPlayers.find(o=>o.id===g);return(_==null?void 0:_.name)||g},a=n.actualCards.map(g=>g.rank).join(", ");this.state={...this.state,phase:"geass",lastAction:`${i(t)} 质疑${i(n.playerId)}！${r?"质疑成功！":"质疑失败！"} 实际出牌: ${a}`};let c=0;if(r){const g=n.playerId;if(g==="player"&&this.playerCharacter==="kallen"&&this.state.playerStats.kallenBoostActive){const _=this.state.playerStats.kallenCardCount||2;c=this.geassSystem.calculateKallenBoost(_)}else if(g!=="player"){const _=this.state.aiPlayers.find(o=>o.id===g);if((_==null?void 0:_.character)==="kallen"&&_.stats.kallenBoostActive){const o=_.stats.kallenCardCount||2;c=this.geassSystem.calculateKallenBoost(o)}}}const d=this.executeGeass(l,c);return this.state.geassResult=d,this.checkGameEnd()}executeGeass(t,n=0){let r;if(t==="player")r=this.geassSystem.performGeass("player",this.state.playerStats,this.playerCharacter,n),this.state.playerStats=r.newStats;else{const l=this.state.aiPlayers.findIndex(a=>a.id===t),i=this.state.aiPlayers[l];r=this.geassSystem.performGeass(t,i.stats,i.character,n),i.stats=r.newStats,i.stats.hp<=0&&(i.isActive=!1)}return r}checkGameEnd(){const t=this.state.aiPlayers.filter(n=>n.isActive&&n.stats.hp>0);return this.state.playerStats.hp<=0?(this.state={...this.state,phase:"game_over",winner:"ai",lastAction:"玩家生命归零，游戏结束！"},this.state):t.length===0?(this.state={...this.state,phase:"game_over",winner:"player",lastAction:"所有AI被淘汰，玩家胜利！"},this.state):this.state}lelouchChangeLiarCard(t){if(this.playerCharacter!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");return this.cardSystem.forceSetLiarCard(t),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.state}checkHandDepletion(){const t=this.state.playerHand.length===0,n=this.state.aiPlayers.some(r=>r.hand.length===0);return t||n}getCardSystem(){return this.cardSystem}getState(){return this.state}getGeassSystem(){return this.geassSystem}reset(){this.state=this.createInitialState(),this.cardSystem=new gs,this.playerCharacter=null}}new Ic;const hi="code-geass-game",ys={save:e=>{try{localStorage.setItem(hi,JSON.stringify(e))}catch(t){console.error("Failed to save to localStorage:",t)}},load:()=>{try{const e=localStorage.getItem(hi);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load from localStorage:",e),null}},clear:()=>{try{localStorage.removeItem(hi)}catch(e){console.error("Failed to clear localStorage:",e)}}},_s=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],xp=()=>{const[e,t]=O.useState("main-menu"),[n,r]=O.useState(null),[l,i]=O.useState(1),[a,c]=O.useState(["cc","suzaku","kallen"]),[d,g]=O.useState({}),[_,o]=O.useState("normal"),[s,u]=O.useState("balanced"),p=O.useRef(null),[v,x]=O.useState(null),[f,h]=O.useState([]),[y,w]=O.useState(null),[k,C]=O.useState([]),[N,j]=O.useState(!1);O.useEffect(()=>((async()=>{try{await St.preload(),console.log("音效预加载完成");const P=ys.load();P&&(o(P.difficulty),u(P.personality||"balanced"),St.setBGMVolume(P.bgmVolume),St.setSFXVolume(P.sfxVolume)),Dt("bgm-menu")}catch(P){console.warn("初始化失败:",P)}})(),()=>{yp()}),[]),O.useEffect(()=>{const b={difficulty:_,bgmVolume:St.getStatus().bgmVolume,sfxVolume:St.getStatus().sfxVolume,personality:s};ys.save(b)},[_,s]);const E=O.useCallback(b=>{h(P=>[...P.slice(-19),b])},[]),I=O.useCallback(()=>{if(!p.current)return;const b=p.current,P=b.getState();if(P.phase==="player_turn"||P.phase==="game_over")return;const z=P.currentPlayerIndex-1;if(z<0||z>=P.aiPlayers.length)return;const F=P.aiPlayers[z],H=F==null?void 0:F.id;if(!F||!F.isActive||F.stats.hp<=0){const U=(P.currentPlayerIndex+1)%4;P.currentPlayerIndex=U,x({...P}),U!==0&&setTimeout(I,500);return}j(!0),ne("sfx-turn-start"),E(`${F.name} 的回合...`),setTimeout(()=>{var U;try{const he=b.aiPlayCards(H);x(he),E(`${F.name} 出了 ${(U=he.turnState.playedCards)==null?void 0:U.cardIds.length} 张牌`),setTimeout(()=>{j(!1)},1e3)}catch(he){console.error("AI出牌错误:",he),j(!1)}},1e3)},[E]),te=O.useCallback(()=>{var H;if(!p.current)return;const b=p.current,P=b.getState();if(P.phase!=="challenge")return;const z=(H=P.turnState.playedCards)==null?void 0:H.playerId;if(!z)return;const F=z==="player"?0:P.aiPlayers.findIndex(U=>U.id===z)+1;for(let U=0;U<3;U++){const he=(F+1+U)%4;if(he===0){E("等待玩家决策...");return}const Oe=P.aiPlayers[he-1];if(!Oe||!Oe.isActive||Oe.stats.hp<=0)continue;if(Math.random()<.3){ne("sfx-challenge");const ia=We(z==="player"?n:z.replace("ai-",""));E(`${Oe.name} 向 ${ia} 发起质疑！`);const Mc=b.aiChallengeDecision(Oe.id);me(Mc,Oe.name,ia);return}else E(`${Oe.name} 选择不质疑`)}Me()},[E,n]),me=O.useCallback((b,P,z)=>{if(x(b),b.geassResult){const F=P||"玩家",H=z||"对手";if(b.geassResult.hit){ne("sfx-geass-hit");const U=_s[Math.floor(Math.random()*_s.length)];w(U),ne(U.soundType),E(`✅ 质疑成功！${F} 对 ${H} 发动Geass！`),E(`💥 Geass命中！${U.emoji} ${b.geassResult.message}`)}else ne("sfx-geass-miss"),E(`❌ 质疑失败！${F} 对 ${H} 发动Geass未命中！`),b.geassResult.isRevived?E(`🔄 ${b.geassResult.message}`):b.geassResult.isCounter&&E(`⚔️ ${b.geassResult.message}`)}if(b.phase==="game_over"){setTimeout(()=>{b.winner==="player"?Dt("bgm-victory"):Dt("bgm-defeat"),t("result")},2e3);return}setTimeout(()=>{var F;if(w(null),p.current){const H=p.current.resetRound();x(H),C([]);const U=H.currentPlayerIndex===0,he=U?We(n):(F=H.aiPlayers[H.currentPlayerIndex-1])==null?void 0:F.name;E(`牌局重置！新的骗子牌是 ${H.liarCard}`),E(`${he} 先手！`),U||setTimeout(()=>{I()},1500)}},2500)},[E,n,I]),Me=O.useCallback(()=>{if(!p.current)return;const P=p.current.getState();P.turnState.playedCards&&(P.turnState.tableCards=[...P.turnState.tableCards,...P.turnState.playedCards.actualCards]);const z=(P.currentPlayerIndex+1)%4;P.currentPlayerIndex=z,z===0?(P.phase="player_turn",P.turnState.turnNumber++,E(`第 ${P.turnState.turnNumber} 回合开始`)):(P.phase="ai_turn",setTimeout(I,500)),P.turnState.playedCards=null,x({...P})},[E,I]),we=O.useCallback(()=>{ne("sfx-button-click"),t("character-select")},[]),mt=O.useCallback(()=>{ne("sfx-button-click"),t("settings")},[]),ht=O.useCallback(()=>{ne("sfx-button-click"),t("help")},[]),gt=O.useCallback(b=>{ne("sfx-character-select"),r(b),i(Math.floor(Math.random()*4)+1)},[]),T=O.useCallback(()=>{var Oe;if(!n)return;ne("sfx-button-click");const z=["lelouch","cc","suzaku","kallen"].filter(en=>en!==n).sort(()=>Math.random()-.5);c(z);const F={};z.forEach(en=>{F[en]=Math.floor(Math.random()*4)+1}),g(F),p.current=new Ic;const H=p.current.initializeGame(n,_);x(H),C([]);const U=H.currentPlayerIndex===0,he=U?We(n):(Oe=H.aiPlayers[H.currentPlayerIndex-1])==null?void 0:Oe.name;h(["游戏开始！",`骗子牌是: ${H.liarCard}`,`${he} 先手！`,"选择1-3张牌打出。"]),t("game-table"),Dt("bgm-game"),U||setTimeout(()=>{I()},1500)},[n,_,I]),M=O.useCallback(()=>{ne("sfx-button-click"),t("main-menu"),r(null)},[]),L=O.useCallback(()=>{ne("sfx-button-click"),t("main-menu"),r(null),x(null),h([]),C([]),w(null),Dt("bgm-menu")},[]),$=O.useCallback(b=>{if(!p.current||N)return;const P=p.current;if(P.getState().phase!=="player_turn")return;P.toggleCardSelection(b);const F=P.getState();C(F.playerSelectedCards),ne("sfx-button-click")},[N]),K=O.useCallback(()=>{var P;if(!p.current||k.length===0||N)return;j(!0),ne("sfx-play-card");const b=p.current;try{const z=b.playerPlayCards();x(z),C([]);const F=We(n);E(`${F} 出了 ${(P=z.turnState.playedCards)==null?void 0:P.cardIds.length} 张牌`),setTimeout(()=>{te()},1500)}catch(z){console.error("出牌错误:",z)}finally{j(!1)}},[k,N,E,n,te]),nt=O.useCallback(()=>{if(!p.current||N)return;j(!0),ne("sfx-challenge"),E("你发起了质疑！");const P=p.current.playerChallengeDecision(!0);me(P),j(!1)},[N,E,me]),Le=O.useCallback(()=>{if(!p.current||N)return;ne("sfx-button-click"),E("你选择不质疑");const P=p.current.playerChallengeDecision(!1);x(P),P.phase!=="player_turn"&&P.phase!=="game_over"&&setTimeout(()=>{I()},1e3)},[N,E,I]),vt=O.useCallback(b=>{if(!p.current||n!=="lelouch")return;ne("sfx-geass-activate");const z=p.current.lelouchChangeLiarCard(b);x(z),E(`鲁鲁修发动绝对命令！骗子牌变为 ${b}`)},[n,E]),be=O.useCallback(()=>{ne("sfx-button-click"),t("character-select"),r(null),x(null),h([]),C([]),w(null),Dt("bgm-menu")},[]),rt=O.useCallback(()=>{ne("sfx-button-click"),t("main-menu"),r(null),x(null),h([]),C([]),w(null),Dt("bgm-menu")},[]),kr=()=>{var b,P;switch(e){case"main-menu":return m.jsx(hs,{onStart:we,onSettings:mt,onHelp:ht});case"character-select":return m.jsx(fp,{characters:gr,selectedId:n,onSelect:gt,onConfirm:T,onBack:M});case"game-table":return m.jsx(pp,{gameState:v,selectedCards:k,selectedCharacter:n,selectedAvatar:l,aiCharacters:a,aiAvatars:d,onToggleCardSelection:$,onConfirmPlay:K,onPass:Le,onChallenge:nt,onBackToMenu:L,onLelouchSkill:vt,gameLog:f,funnyAction:y,isProcessing:N});case"result":const z=(v==null?void 0:v.winner)==="player",F=((b=v==null?void 0:v.playerStats)==null?void 0:b.geassSuccessCount)||0,H=((P=v==null?void 0:v.aiPlayers)==null?void 0:P.reduce((U,he)=>U+he.stats.geassSuccessCount,0))||0;return m.jsx(mp,{isWin:z,playerScore:F,opponentScore:H,onRestart:be,onMainMenu:rt});case"settings":return Sr();case"help":return Cr();default:return m.jsx(hs,{onStart:we,onSettings:mt,onHelp:ht})}},Sr=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"设置"}),m.jsxs("div",{className:"cg-settings-content",children:[m.jsxs("div",{className:"cg-setting-item",children:[m.jsx("label",{children:"难度:"}),m.jsxs("select",{className:"cg-setting-select",value:_,onChange:b=>o(b.target.value),children:[m.jsx("option",{value:"easy",children:"简单"}),m.jsx("option",{value:"normal",children:"普通"}),m.jsx("option",{value:"hard",children:"困难"})]})]}),m.jsxs("div",{className:"cg-setting-item",children:[m.jsx("label",{children:"AI性格:"}),m.jsxs("select",{className:"cg-setting-select",value:s,onChange:b=>u(b.target.value),children:[m.jsx("option",{value:"aggressive",children:"激进"}),m.jsx("option",{value:"balanced",children:"平衡"}),m.jsx("option",{value:"conservative",children:"保守"})]})]}),m.jsx("p",{style:{color:"#a1a1aa",textAlign:"center",marginTop:"1rem"},children:"设置已自动保存"}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),Cr=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"游戏帮助"}),m.jsxs("div",{className:"cg-help-content",children:[m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🎮 游戏规则"}),m.jsxs("ul",{children:[m.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),m.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),m.jsxs("li",{children:[m.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),m.jsx("li",{children:"质疑后翻牌验证："}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),m.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),m.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"👤 角色技能详解"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),m.jsx("br",{}),m.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),m.jsx("br",{}),m.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),m.jsx("br",{}),m.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),m.jsx("br",{}),m.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🃏 特殊牌"}),m.jsx("ul",{children:m.jsxs("li",{children:[m.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return m.jsxs("div",{className:"cg-app",children:[kr(),m.jsx("style",{children:`
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
      `})]})},wp=gi.createRoot(document.getElementById("root"));wp.render(m.jsx(Jc.StrictMode,{children:m.jsx(xp,{})}));
//# sourceMappingURL=index-Cd1GxenY.js.map
