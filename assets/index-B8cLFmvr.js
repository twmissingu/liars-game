var Wd=Object.defineProperty;var Yd=(e,t,n)=>t in e?Wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ge=(e,t,n)=>Yd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();var ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mu={exports:{}},ea={},zu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),Zd=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),af=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),gs=Symbol.iterator;function sf(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var Lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ru=Object.assign,Ou={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Lu}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fu(){}Fu.prototype=qn.prototype;function Gi(e,t,n){this.props=e,this.context=t,this.refs=Ou,this.updater=n||Lu}var Ui=Gi.prototype=new Fu;Ui.constructor=Gi;Ru(Ui,qn.prototype);Ui.isPureReactComponent=!0;var vs=Array.isArray,Du=Object.prototype.hasOwnProperty,Xi={current:null},Hu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,l={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Du.call(t,r)&&!Hu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var d=Array(u),p=0;p<u;p++)d[p]=arguments[p+2];l.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Ur,type:e,key:a,ref:o,props:l,_owner:Xi.current}}function uf(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function cf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ys=/\/+/g;function ya(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cf(""+e.key):t.toString(36)}function gl(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ur:case Jd:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+ya(o,0):r,vs(l)?(n="",e!=null&&(n=e.replace(ys,"$&/")+"/"),gl(l,t,n,"",function(p){return p})):l!=null&&(Qi(l)&&(l=uf(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ys,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",vs(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+ya(a,u);o+=gl(a,t,n,d,l)}else if(d=sf(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+ya(a,u++),o+=gl(a,t,n,d,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Kr(e,t,n){if(e==null)return e;var r=[],l=0;return gl(e,r,"","",function(a){return t.call(n,a,l++)}),r}function df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},vl={transition:null},ff={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:vl,ReactCurrentOwner:Xi};function Bu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!Qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=qn;H.Fragment=Zd;H.Profiler=ef;H.PureComponent=Gi;H.StrictMode=qd;H.Suspense=lf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ff;H.act=Bu;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ru({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Xi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Du.call(t,d)&&!Hu.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var p=0;p<d;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:Ur,type:e.type,key:l,ref:a,props:r,_owner:o}};H.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};H.createElement=$u;H.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:rf,render:e}};H.isValidElement=Qi;H.lazy=function(e){return{$$typeof:of,_payload:{_status:-1,_result:e},_init:df}};H.memo=function(e,t){return{$$typeof:af,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=vl.transition;vl.transition={};try{e()}finally{vl.transition=t}};H.unstable_act=Bu;H.useCallback=function(e,t){return Le.current.useCallback(e,t)};H.useContext=function(e){return Le.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};H.useEffect=function(e,t){return Le.current.useEffect(e,t)};H.useId=function(){return Le.current.useId()};H.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Le.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};H.useRef=function(e){return Le.current.useRef(e)};H.useState=function(e){return Le.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Le.current.useTransition()};H.version="18.3.1";zu.exports=H;var E=zu.exports;const pf=Kd(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=E,hf=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,yf=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xf={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,t,n){var r,l={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)vf.call(t,r)&&!xf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:hf,type:e,key:a,ref:o,props:l,_owner:yf.current}}ea.Fragment=gf;ea.jsx=Vu;ea.jsxs=Vu;Mu.exports=ea;var m=Mu.exports,Ka={},Gu={exports:{}},Ye={},Uu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,z){var R=j.length;j.push(z);e:for(;0<R;){var V=R-1>>>1,ne=j[V];if(0<l(ne,z))j[V]=z,j[R]=ne,R=V;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var z=j[0],R=j.pop();if(R!==z){j[0]=R;e:for(var V=0,ne=j.length,Ct=ne>>>1;V<Ct;){var rt=2*(V+1)-1,N=j[rt],ue=rt+1,Oe=j[ue];if(0>l(N,R))ue<ne&&0>l(Oe,N)?(j[V]=Oe,j[ue]=R,V=ue):(j[V]=N,j[rt]=R,V=rt);else if(ue<ne&&0>l(Oe,R))j[V]=Oe,j[ue]=R,V=ue;else break e}}return z}function l(j,z){var R=j.sortIndex-z.sortIndex;return R!==0?R:j.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var d=[],p=[],x=1,i=null,s=3,c=!1,g=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(j){for(var z=n(p);z!==null;){if(z.callback===null)r(p);else if(z.startTime<=j)r(p),z.sortIndex=z.expirationTime,t(d,z);else break;z=n(p)}}function w(j){if(y=!1,v(j),!g)if(n(d)!==null)g=!0,Dt(C);else{var z=n(p);z!==null&&St(w,z.startTime-j)}}function C(j,z){g=!1,y&&(y=!1,f(k),k=-1),c=!0;var R=s;try{for(v(z),i=n(d);i!==null&&(!(i.expirationTime>z)||j&&!X());){var V=i.callback;if(typeof V=="function"){i.callback=null,s=i.priorityLevel;var ne=V(i.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?i.callback=ne:i===n(d)&&r(d),v(z)}else r(d);i=n(d)}if(i!==null)var Ct=!0;else{var rt=n(p);rt!==null&&St(w,rt.startTime-z),Ct=!1}return Ct}finally{i=null,s=R,c=!1}}var T=!1,A=null,k=-1,M=5,L=-1;function X(){return!(e.unstable_now()-L<M)}function Ve(){if(A!==null){var j=e.unstable_now();L=j;var z=!0;try{z=A(!0,j)}finally{z?Ce():(T=!1,A=null)}}else T=!1}var Ce;if(typeof h=="function")Ce=function(){h(Ve)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,pt=Te.port2;Te.port1.onmessage=Ve,Ce=function(){pt.postMessage(null)}}else Ce=function(){_(Ve,0)};function Dt(j){A=j,T||(T=!0,Ce())}function St(j,z){k=_(function(){j(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){g||c||(g=!0,Dt(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(j){switch(s){case 1:case 2:case 3:var z=3;break;default:z=s}var R=s;s=z;try{return j()}finally{s=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=s;s=j;try{return z()}finally{s=R}},e.unstable_scheduleCallback=function(j,z,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,j){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,j={id:x++,callback:z,priorityLevel:j,startTime:R,expirationTime:ne,sortIndex:-1},R>V?(j.sortIndex=R,t(p,j),n(d)===null&&j===n(p)&&(y?(f(k),k=-1):y=!0,St(w,R-V))):(j.sortIndex=ne,t(d,j),g||c||(g=!0,Dt(C))),j},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(j){var z=s;return function(){var R=s;s=z;try{return j.apply(this,arguments)}finally{s=R}}}})(Xu);Uu.exports=Xu;var _f=Uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=E,We=_f;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,Nr={};function Sn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Nr[e]=t,e=0;e<t.length;e++)Qu.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=Object.prototype.hasOwnProperty,kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xs={},_s={};function Sf(e){return Ja.call(_s,e)?!0:Ja.call(xs,e)?!1:kf.test(e)?_s[e]=!0:(xs[e]=!0,!1)}function Cf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bf(e,t,n,r){if(t===null||typeof t>"u"||Cf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Yi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Yi);Se[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Yi);Se[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Yi);Se[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ki(e,t,n,r){var l=Se.hasOwnProperty(t)?Se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bf(t,n,l,r)&&(n=null),r||l===null?Sf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ft=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),Ji=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),Zi=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),ei=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),ws=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,xa;function mr(e){if(xa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xa=t&&t[1]||""}return`
`+xa+e}var _a=!1;function wa(e,t){if(!e||_a)return"";_a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,u=a.length-1;1<=o&&0<=u&&l[o]!==a[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==a[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==a[u]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{_a=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function Af(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=wa(e.type,!1),e;case 11:return e=wa(e.type.render,!1),e;case 1:return e=wa(e.type,!0),e;default:return""}}function ti(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Nn:return"Portal";case Za:return"Profiler";case Ji:return"StrictMode";case qa:return"Suspense";case ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case Zi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return t=e.displayName||null,t!==null?t:ti(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return ti(e(t))}catch{}}return null}function Nf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ti(t);case 8:return t===Ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ef(e){var t=Ju(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=Ef(e))}function Zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ju(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function El(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qu(e,t){t=t.checked,t!=null&&Ki(e,"checked",t,!1)}function ri(e,t){qu(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?li(e,t.type,n):t.hasOwnProperty("defaultValue")&&li(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ss(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function li(e,t,n){(t!=="number"||El(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(hr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rn(n)}}function ec(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){Tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function rc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function lc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=rc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var jf=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(jf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,$n=null,Bn=null;function As(e){if(e=Wr(e)){if(typeof ci!="function")throw Error(S(280));var t=e.stateNode;t&&(t=aa(t),ci(e.stateNode,e.type,t))}}function ac(e){$n?Bn?Bn.push(e):Bn=[e]:$n=e}function ic(){if($n){var e=$n,t=Bn;if(Bn=$n=null,As(e),t)for(e=0;e<t.length;e++)As(t[e])}}function oc(e,t){return e(t)}function sc(){}var ka=!1;function uc(e,t,n){if(ka)return e(t,n);ka=!0;try{return oc(e,t,n)}finally{ka=!1,($n!==null||Bn!==null)&&(sc(),ic())}}function Tr(e,t){var n=e.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var di=!1;if(zt)try{var or={};Object.defineProperty(or,"passive",{get:function(){di=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{di=!1}function Pf(e,t,n,r,l,a,o,u,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var xr=!1,Tl=null,jl=!1,fi=null,If={onError:function(e){xr=!0,Tl=e}};function Mf(e,t,n,r,l,a,o,u,d){xr=!1,Tl=null,Pf.apply(If,arguments)}function zf(e,t,n,r,l,a,o,u,d){if(Mf.apply(this,arguments),xr){if(xr){var p=Tl;xr=!1,Tl=null}else throw Error(S(198));jl||(jl=!0,fi=p)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ns(e){if(Cn(e)!==e)throw Error(S(188))}function Lf(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Ns(l),e;if(a===r)return Ns(l),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=a;break}if(u===r){o=!0,r=l,n=a;break}u=u.sibling}if(!o){for(u=a.child;u;){if(u===n){o=!0,n=a,r=l;break}if(u===r){o=!0,r=a,n=l;break}u=u.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function dc(e){return e=Lf(e),e!==null?fc(e):null}function fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fc(e);if(t!==null)return t;e=e.sibling}return null}var pc=We.unstable_scheduleCallback,Es=We.unstable_cancelCallback,Rf=We.unstable_shouldYield,Of=We.unstable_requestPaint,de=We.unstable_now,Ff=We.unstable_getCurrentPriorityLevel,to=We.unstable_ImmediatePriority,mc=We.unstable_UserBlockingPriority,Pl=We.unstable_NormalPriority,Df=We.unstable_LowPriority,hc=We.unstable_IdlePriority,ta=null,wt=null;function Hf(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(ta,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Vf,$f=Math.log,Bf=Math.LN2;function Vf(e){return e>>>=0,e===0?32:31-($f(e)/Bf|0)|0}var el=64,tl=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=gr(u):(a&=o,a!==0&&(r=gr(a)))}else o=n&~l,o!==0?r=gr(o):a!==0&&(r=gr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),l=1<<n,r|=e[n],t&=~l;return r}function Gf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ct(a),u=1<<o,d=l[o];d===-1?(!(u&n)||u&r)&&(l[o]=Gf(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gc(){var e=el;return el<<=1,!(el&4194240)&&(el=64),e}function Sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Xf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ct(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function no(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Y=0;function vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yc,ro,xc,_c,wc,mi=!1,nl=[],Yt=null,Kt=null,Jt=null,jr=new Map,Pr=new Map,Ut=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function sr(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=Wr(t),t!==null&&ro(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Wf(e,t,n,r,l){switch(t){case"focusin":return Yt=sr(Yt,e,t,n,r,l),!0;case"dragenter":return Kt=sr(Kt,e,t,n,r,l),!0;case"mouseover":return Jt=sr(Jt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return jr.set(a,sr(jr.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Pr.set(a,sr(Pr.get(a)||null,e,t,n,r,l)),!0}return!1}function kc(e){var t=pn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=cc(n),t!==null){e.blockedOn=t,wc(e.priority,function(){xc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ui=r,n.target.dispatchEvent(r),ui=null}else return t=Wr(n),t!==null&&ro(t),e.blockedOn=n,!1;t.shift()}return!0}function js(e,t,n){yl(e)&&n.delete(t)}function Yf(){mi=!1,Yt!==null&&yl(Yt)&&(Yt=null),Kt!==null&&yl(Kt)&&(Kt=null),Jt!==null&&yl(Jt)&&(Jt=null),jr.forEach(js),Pr.forEach(js)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,mi||(mi=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Yf)))}function Ir(e){function t(l){return ur(l,e)}if(0<nl.length){ur(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&ur(Yt,e),Kt!==null&&ur(Kt,e),Jt!==null&&ur(Jt,e),jr.forEach(t),Pr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)kc(n),n.blockedOn===null&&Ut.shift()}var Vn=Ft.ReactCurrentBatchConfig,Ml=!0;function Kf(e,t,n,r){var l=Y,a=Vn.transition;Vn.transition=null;try{Y=1,lo(e,t,n,r)}finally{Y=l,Vn.transition=a}}function Jf(e,t,n,r){var l=Y,a=Vn.transition;Vn.transition=null;try{Y=4,lo(e,t,n,r)}finally{Y=l,Vn.transition=a}}function lo(e,t,n,r){if(Ml){var l=hi(e,t,n,r);if(l===null)Ma(e,t,r,zl,n),Ts(e,r);else if(Wf(l,e,t,n,r))r.stopPropagation();else if(Ts(e,r),t&4&&-1<Qf.indexOf(e)){for(;l!==null;){var a=Wr(l);if(a!==null&&yc(a),a=hi(e,t,n,r),a===null&&Ma(e,t,r,zl,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else Ma(e,t,r,null,n)}}var zl=null;function hi(e,t,n,r){if(zl=null,e=eo(r),e=pn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zl=e,null}function Sc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case to:return 1;case mc:return 4;case Pl:case Df:return 16;case hc:return 536870912;default:return 16}default:return 16}}var Qt=null,ao=null,xl=null;function Cc(){if(xl)return xl;var e,t=ao,n=t.length,r,l="value"in Qt?Qt.value:Qt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return xl=l.slice(e,1<r?1-r:void 0)}function _l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Ps(){return!1}function Ke(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?rl:Ps,this.isPropagationStopped=Ps,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Ke(er),Qr=oe({},er,{view:0,detail:0}),Zf=Ke(Qr),Ca,ba,cr,na=oe({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Ca=e.screenX-cr.screenX,ba=e.screenY-cr.screenY):ba=Ca=0,cr=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),Is=Ke(na),qf=oe({},na,{dataTransfer:0}),ep=Ke(qf),tp=oe({},Qr,{relatedTarget:0}),Aa=Ke(tp),np=oe({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=Ke(np),lp=oe({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=Ke(lp),ip=oe({},er,{data:0}),Ms=Ke(ip),op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=up[e])?!!t[e]:!1}function oo(){return cp}var dp=oe({},Qr,{key:function(e){if(e.key){var t=op[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fp=Ke(dp),pp=oe({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zs=Ke(pp),mp=oe({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),hp=Ke(mp),gp=oe({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=Ke(gp),yp=oe({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=Ke(yp),_p=[9,13,27,32],so=zt&&"CompositionEvent"in window,_r=null;zt&&"documentMode"in document&&(_r=document.documentMode);var wp=zt&&"TextEvent"in window&&!_r,bc=zt&&(!so||_r&&8<_r&&11>=_r),Ls=" ",Rs=!1;function Ac(e,t){switch(e){case"keyup":return _p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function kp(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Rs=!0,Ls);case"textInput":return e=t.data,e===Ls&&Rs?null:e;default:return null}}function Sp(e,t){if(Tn)return e==="compositionend"||!so&&Ac(e,t)?(e=Cc(),xl=ao=Qt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bc&&t.locale!=="ko"?null:t.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cp[e.type]:t==="textarea"}function Ec(e,t,n,r){ac(r),t=Ll(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Mr=null;function bp(e){Dc(e,0)}function ra(e){var t=In(e);if(Zu(t))return e}function Ap(e,t){if(e==="change")return t}var Tc=!1;if(zt){var Na;if(zt){var Ea="oninput"in document;if(!Ea){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),Ea=typeof Fs.oninput=="function"}Na=Ea}else Na=!1;Tc=Na&&(!document.documentMode||9<document.documentMode)}function Ds(){wr&&(wr.detachEvent("onpropertychange",jc),Mr=wr=null)}function jc(e){if(e.propertyName==="value"&&ra(Mr)){var t=[];Ec(t,Mr,e,eo(e)),uc(bp,t)}}function Np(e,t,n){e==="focusin"?(Ds(),wr=t,Mr=n,wr.attachEvent("onpropertychange",jc)):e==="focusout"&&Ds()}function Ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(Mr)}function Tp(e,t){if(e==="click")return ra(t)}function jp(e,t){if(e==="input"||e==="change")return ra(t)}function Pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Pp;function zr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ja.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,t){var n=Hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hs(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ic(){for(var e=window,t=El();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=El(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ip(e){var t=Ic(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=$s(n,a);var o=$s(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mp=zt&&"documentMode"in document&&11>=document.documentMode,jn=null,gi=null,kr=null,vi=!1;function Bs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vi||jn==null||jn!==El(r)||(r=jn,"selectionStart"in r&&uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&zr(kr,r)||(kr=r,r=Ll(gi,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Ta={},Mc={};zt&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function la(e){if(Ta[e])return Ta[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mc)return Ta[e]=t[n];return e}var zc=la("animationend"),Lc=la("animationiteration"),Rc=la("animationstart"),Oc=la("transitionend"),Fc=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){Fc.set(e,t),Sn(t,[e])}for(var ja=0;ja<Vs.length;ja++){var Pa=Vs[ja],zp=Pa.toLowerCase(),Lp=Pa[0].toUpperCase()+Pa.slice(1);an(zp,"on"+Lp)}an(zc,"onAnimationEnd");an(Lc,"onAnimationIteration");an(Rc,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(Oc,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Gs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zf(r,t,void 0,e),e.currentTarget=null}function Dc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,p=u.currentTarget;if(u=u.listener,d!==a&&l.isPropagationStopped())break e;Gs(l,u,p),a=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,p=u.currentTarget,u=u.listener,d!==a&&l.isPropagationStopped())break e;Gs(l,u,p),a=d}}}if(jl)throw e=fi,jl=!1,fi=null,e}function Z(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+"__bubble";n.has(r)||(Hc(t,e,2,!1),n.add(r))}function Ia(e,t,n){var r=0;t&&(r|=4),Hc(n,e,r,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[al]){e[al]=!0,Qu.forEach(function(n){n!=="selectionchange"&&(Rp.has(n)||Ia(n,!1,e),Ia(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Ia("selectionchange",!1,t))}}function Hc(e,t,n,r){switch(Sc(t)){case 1:var l=Kf;break;case 4:l=Jf;break;default:l=lo}n=l.bind(null,t,n,e),l=void 0,!di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ma(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;u!==null;){if(o=pn(u),o===null)return;if(d=o.tag,d===5||d===6){r=a=o;continue e}u=u.parentNode}}r=r.return}uc(function(){var p=a,x=eo(n),i=[];e:{var s=Fc.get(e);if(s!==void 0){var c=io,g=e;switch(e){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":c=fp;break;case"focusin":g="focus",c=Aa;break;case"focusout":g="blur",c=Aa;break;case"beforeblur":case"afterblur":c=Aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=hp;break;case zc:case Lc:case Rc:c=rp;break;case Oc:c=vp;break;case"scroll":c=Zf;break;case"wheel":c=xp;break;case"copy":case"cut":case"paste":c=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=zs}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?s!==null?s+"Capture":null:s;y=[];for(var h=p,v;h!==null;){v=h;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=Tr(h,f),w!=null&&y.push(Rr(h,w,v)))),_)break;h=h.return}0<y.length&&(s=new c(s,g,null,n,x),i.push({event:s,listeners:y}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",s&&n!==ui&&(g=n.relatedTarget||n.fromElement)&&(pn(g)||g[Lt]))break e;if((c||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,c?(g=n.relatedTarget||n.toElement,c=p,g=g?pn(g):null,g!==null&&(_=Cn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(c=null,g=p),c!==g)){if(y=Is,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=zs,w="onPointerLeave",f="onPointerEnter",h="pointer"),_=c==null?s:In(c),v=g==null?s:In(g),s=new y(w,h+"leave",c,n,x),s.target=_,s.relatedTarget=v,w=null,pn(x)===p&&(y=new y(f,h+"enter",g,n,x),y.target=v,y.relatedTarget=_,w=y),_=w,c&&g)t:{for(y=c,f=g,h=0,v=y;v;v=An(v))h++;for(v=0,w=f;w;w=An(w))v++;for(;0<h-v;)y=An(y),h--;for(;0<v-h;)f=An(f),v--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=An(y),f=An(f)}y=null}else y=null;c!==null&&Us(i,s,c,y,!1),g!==null&&_!==null&&Us(i,_,g,y,!0)}}e:{if(s=p?In(p):window,c=s.nodeName&&s.nodeName.toLowerCase(),c==="select"||c==="input"&&s.type==="file")var C=Ap;else if(Os(s))if(Tc)C=jp;else{C=Ep;var T=Np}else(c=s.nodeName)&&c.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(C=Tp);if(C&&(C=C(e,p))){Ec(i,C,n,x);break e}T&&T(e,s,p),e==="focusout"&&(T=s._wrapperState)&&T.controlled&&s.type==="number"&&li(s,"number",s.value)}switch(T=p?In(p):window,e){case"focusin":(Os(T)||T.contentEditable==="true")&&(jn=T,gi=p,kr=null);break;case"focusout":kr=gi=jn=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,Bs(i,n,x);break;case"selectionchange":if(Mp)break;case"keydown":case"keyup":Bs(i,n,x)}var A;if(so)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Tn?Ac(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(bc&&n.locale!=="ko"&&(Tn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Tn&&(A=Cc()):(Qt=x,ao="value"in Qt?Qt.value:Qt.textContent,Tn=!0)),T=Ll(p,k),0<T.length&&(k=new Ms(k,e,null,n,x),i.push({event:k,listeners:T}),A?k.data=A:(A=Nc(n),A!==null&&(k.data=A)))),(A=wp?kp(e,n):Sp(e,n))&&(p=Ll(p,"onBeforeInput"),0<p.length&&(x=new Ms("onBeforeInput","beforeinput",null,n,x),i.push({event:x,listeners:p}),x.data=A))}Dc(i,t)})}function Rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Tr(e,n),a!=null&&r.unshift(Rr(e,a,l)),a=Tr(e,t),a!=null&&r.push(Rr(e,a,l))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Us(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var u=n,d=u.alternate,p=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&p!==null&&(u=p,l?(d=Tr(n,a),d!=null&&o.unshift(Rr(n,d,u))):l||(d=Tr(n,a),d!=null&&o.push(Rr(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Op=/\r\n?/g,Fp=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(Op,`
`).replace(Fp,"")}function il(e,t,n){if(t=Xs(t),Xs(e)!==t&&n)throw Error(S(425))}function Rl(){}var yi=null,xi=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,Hp=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch($p)}:wi;function $p(e){setTimeout(function(){throw e})}function za(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Ir(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ws(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),xt="__reactFiber$"+tr,Or="__reactProps$"+tr,Lt="__reactContainer$"+tr,ki="__reactEvents$"+tr,Bp="__reactListeners$"+tr,Vp="__reactHandles$"+tr;function pn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ws(e);e!==null;){if(n=e[xt])return n;e=Ws(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[xt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function aa(e){return e[Or]||null}var Si=[],Mn=-1;function on(e){return{current:e}}function q(e){0>Mn||(e.current=Si[Mn],Si[Mn]=null,Mn--)}function J(e,t){Mn++,Si[Mn]=e.current,e.current=t}var ln={},Ee=on(ln),He=on(!1),yn=ln;function Qn(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function $e(e){return e=e.childContextTypes,e!=null}function Ol(){q(He),q(Ee)}function Ys(e,t,n){if(Ee.current!==ln)throw Error(S(168));J(Ee,t),J(He,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Nf(e)||"Unknown",l));return oe({},n,r)}function Fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,yn=Ee.current,J(Ee,e),J(He,He.current),!0}function Ks(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=$c(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,q(He),q(Ee),J(Ee,e)):q(He),J(He,n)}var jt=null,ia=!1,La=!1;function Bc(e){jt===null?jt=[e]:jt.push(e)}function Gp(e){ia=!0,Bc(e)}function sn(){if(!La&&jt!==null){La=!0;var e=0,t=Y;try{var n=jt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,ia=!1}catch(l){throw jt!==null&&(jt=jt.slice(e+1)),pc(to,sn),l}finally{Y=t,La=!1}}return null}var zn=[],Ln=0,Dl=null,Hl=0,Je=[],Ze=0,xn=null,Pt=1,It="";function un(e,t){zn[Ln++]=Hl,zn[Ln++]=Dl,Dl=e,Hl=t}function Vc(e,t,n){Je[Ze++]=Pt,Je[Ze++]=It,Je[Ze++]=xn,xn=e;var r=Pt;e=It;var l=32-ct(r)-1;r&=~(1<<l),n+=1;var a=32-ct(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Pt=1<<32-ct(t)+l|n<<l|r,It=a+e}else Pt=1<<a|n<<l|r,It=e}function co(e){e.return!==null&&(un(e,1),Vc(e,1,0))}function fo(e){for(;e===Dl;)Dl=zn[--Ln],zn[Ln]=null,Hl=zn[--Ln],zn[Ln]=null;for(;e===xn;)xn=Je[--Ze],Je[Ze]=null,It=Je[--Ze],Je[Ze]=null,Pt=Je[--Ze],Je[Ze]=null}var Qe=null,Xe=null,te=!1,ut=null;function Gc(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Pt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Xe=null,!0):!1;default:return!1}}function Ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bi(e){if(te){var t=Xe;if(t){var n=t;if(!Js(e,t)){if(Ci(e))throw Error(S(418));t=Zt(n.nextSibling);var r=Qe;t&&Js(e,t)?Gc(r,n):(e.flags=e.flags&-4097|2,te=!1,Qe=e)}}else{if(Ci(e))throw Error(S(418));e.flags=e.flags&-4097|2,te=!1,Qe=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function ol(e){if(e!==Qe)return!1;if(!te)return Zs(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=Xe)){if(Ci(e))throw Uc(),Error(S(418));for(;t;)Gc(e,t),t=Zt(t.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Qe?Zt(e.stateNode.nextSibling):null;return!0}function Uc(){for(var e=Xe;e;)e=Zt(e.nextSibling)}function Wn(){Xe=Qe=null,te=!1}function po(e){ut===null?ut=[e]:ut.push(e)}var Up=Ft.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var u=l.refs;o===null?delete u[a]:u[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qs(e){var t=e._init;return t(e._payload)}function Xc(e){function t(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function l(f,h){return f=nn(f,h),f.index=0,f.sibling=null,f}function a(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,h,v,w){return h===null||h.tag!==6?(h=Ba(v,f.mode,w),h.return=f,h):(h=l(h,v),h.return=f,h)}function d(f,h,v,w){var C=v.type;return C===En?x(f,h,v.props.children,w,v.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&qs(C)===h.type)?(w=l(h,v.props),w.ref=dr(f,h,v),w.return=f,w):(w=Nl(v.type,v.key,v.props,null,f.mode,w),w.ref=dr(f,h,v),w.return=f,w)}function p(f,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Va(v,f.mode,w),h.return=f,h):(h=l(h,v.children||[]),h.return=f,h)}function x(f,h,v,w,C){return h===null||h.tag!==7?(h=vn(v,f.mode,w,C),h.return=f,h):(h=l(h,v),h.return=f,h)}function i(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ba(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Jr:return v=Nl(h.type,h.key,h.props,null,f.mode,v),v.ref=dr(f,null,h),v.return=f,v;case Nn:return h=Va(h,f.mode,v),h.return=f,h;case Vt:var w=h._init;return i(f,w(h._payload),v)}if(hr(h)||ir(h))return h=vn(h,f.mode,v,null),h.return=f,h;sl(f,h)}return null}function s(f,h,v,w){var C=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:u(f,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jr:return v.key===C?d(f,h,v,w):null;case Nn:return v.key===C?p(f,h,v,w):null;case Vt:return C=v._init,s(f,h,C(v._payload),w)}if(hr(v)||ir(v))return C!==null?null:x(f,h,v,w,null);sl(f,v)}return null}function c(f,h,v,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(v)||null,u(h,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jr:return f=f.get(w.key===null?v:w.key)||null,d(h,f,w,C);case Nn:return f=f.get(w.key===null?v:w.key)||null,p(h,f,w,C);case Vt:var T=w._init;return c(f,h,v,T(w._payload),C)}if(hr(w)||ir(w))return f=f.get(v)||null,x(h,f,w,C,null);sl(h,w)}return null}function g(f,h,v,w){for(var C=null,T=null,A=h,k=h=0,M=null;A!==null&&k<v.length;k++){A.index>k?(M=A,A=null):M=A.sibling;var L=s(f,A,v[k],w);if(L===null){A===null&&(A=M);break}e&&A&&L.alternate===null&&t(f,A),h=a(L,h,k),T===null?C=L:T.sibling=L,T=L,A=M}if(k===v.length)return n(f,A),te&&un(f,k),C;if(A===null){for(;k<v.length;k++)A=i(f,v[k],w),A!==null&&(h=a(A,h,k),T===null?C=A:T.sibling=A,T=A);return te&&un(f,k),C}for(A=r(f,A);k<v.length;k++)M=c(A,f,k,v[k],w),M!==null&&(e&&M.alternate!==null&&A.delete(M.key===null?k:M.key),h=a(M,h,k),T===null?C=M:T.sibling=M,T=M);return e&&A.forEach(function(X){return t(f,X)}),te&&un(f,k),C}function y(f,h,v,w){var C=ir(v);if(typeof C!="function")throw Error(S(150));if(v=C.call(v),v==null)throw Error(S(151));for(var T=C=null,A=h,k=h=0,M=null,L=v.next();A!==null&&!L.done;k++,L=v.next()){A.index>k?(M=A,A=null):M=A.sibling;var X=s(f,A,L.value,w);if(X===null){A===null&&(A=M);break}e&&A&&X.alternate===null&&t(f,A),h=a(X,h,k),T===null?C=X:T.sibling=X,T=X,A=M}if(L.done)return n(f,A),te&&un(f,k),C;if(A===null){for(;!L.done;k++,L=v.next())L=i(f,L.value,w),L!==null&&(h=a(L,h,k),T===null?C=L:T.sibling=L,T=L);return te&&un(f,k),C}for(A=r(f,A);!L.done;k++,L=v.next())L=c(A,f,k,L.value,w),L!==null&&(e&&L.alternate!==null&&A.delete(L.key===null?k:L.key),h=a(L,h,k),T===null?C=L:T.sibling=L,T=L);return e&&A.forEach(function(Ve){return t(f,Ve)}),te&&un(f,k),C}function _(f,h,v,w){if(typeof v=="object"&&v!==null&&v.type===En&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Jr:e:{for(var C=v.key,T=h;T!==null;){if(T.key===C){if(C=v.type,C===En){if(T.tag===7){n(f,T.sibling),h=l(T,v.props.children),h.return=f,f=h;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&qs(C)===T.type){n(f,T.sibling),h=l(T,v.props),h.ref=dr(f,T,v),h.return=f,f=h;break e}n(f,T);break}else t(f,T);T=T.sibling}v.type===En?(h=vn(v.props.children,f.mode,w,v.key),h.return=f,f=h):(w=Nl(v.type,v.key,v.props,null,f.mode,w),w.ref=dr(f,h,v),w.return=f,f=w)}return o(f);case Nn:e:{for(T=v.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(f,h.sibling),h=l(h,v.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Va(v,f.mode,w),h.return=f,f=h}return o(f);case Vt:return T=v._init,_(f,h,T(v._payload),w)}if(hr(v))return g(f,h,v,w);if(ir(v))return y(f,h,v,w);sl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(f,h.sibling),h=l(h,v),h.return=f,f=h):(n(f,h),h=Ba(v,f.mode,w),h.return=f,f=h),o(f)):n(f,h)}return _}var Yn=Xc(!0),Qc=Xc(!1),$l=on(null),Bl=null,Rn=null,mo=null;function ho(){mo=Rn=Bl=null}function go(e){var t=$l.current;q($l),e._currentValue=t}function Ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){Bl=e,mo=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(mo!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(Bl===null)throw Error(S(308));Rn=e,Bl.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var mn=null;function vo(e){mn===null?mn=[e]:mn.push(e)}function Wc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,vo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Rt(e,n)}return l=r.interleaved,l===null?(t.next=t,vo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Rt(e,n)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}function eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vl(e,t,n,r){var l=e.updateQueue;Gt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,p=d.next;d.next=null,o===null?a=p:o.next=p,o=d;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==o&&(u===null?x.firstBaseUpdate=p:u.next=p,x.lastBaseUpdate=d))}if(a!==null){var i=l.baseState;o=0,x=p=d=null,u=a;do{var s=u.lane,c=u.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:c,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(s=t,c=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){i=g.call(c,i,s);break e}i=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,s=typeof g=="function"?g.call(c,i,s):g,s==null)break e;i=oe({},i,s);break e;case 2:Gt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,s=l.effects,s===null?l.effects=[u]:s.push(u))}else c={eventTime:c,lane:s,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(p=x=c,d=i):x=x.next=c,o|=s;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;s=u,u=s.next,s.next=null,l.lastBaseUpdate=s,l.shared.pending=null}}while(!0);if(x===null&&(d=i),l.baseState=d,l.firstBaseUpdate=p,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);wn|=o,e.lanes=o,e.memoizedState=i}}function tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Yr={},kt=on(Yr),Fr=on(Yr),Dr=on(Yr);function hn(e){if(e===Yr)throw Error(S(174));return e}function xo(e,t){switch(J(Dr,t),J(Fr,e),J(kt,Yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ii(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ii(t,e)}q(kt),J(kt,t)}function Kn(){q(kt),q(Fr),q(Dr)}function Kc(e){hn(Dr.current);var t=hn(kt.current),n=ii(t,e.type);t!==n&&(J(Fr,e),J(kt,n))}function _o(e){Fr.current===e&&(q(kt),q(Fr))}var ae=on(0);function Gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ra=[];function wo(){for(var e=0;e<Ra.length;e++)Ra[e]._workInProgressVersionPrimary=null;Ra.length=0}var kl=Ft.ReactCurrentDispatcher,Oa=Ft.ReactCurrentBatchConfig,_n=0,ie=null,me=null,ve=null,Ul=!1,Sr=!1,Hr=0,Xp=0;function be(){throw Error(S(321))}function ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function So(e,t,n,r,l,a){if(_n=a,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kl.current=e===null||e.memoizedState===null?Kp:Jp,e=n(r,l),Sr){a=0;do{if(Sr=!1,Hr=0,25<=a)throw Error(S(301));a+=1,ve=me=null,t.updateQueue=null,kl.current=Zp,e=n(r,l)}while(Sr)}if(kl.current=Xl,t=me!==null&&me.next!==null,_n=0,ve=me=ie=null,Ul=!1,t)throw Error(S(300));return e}function Co(){var e=Hr!==0;return Hr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=e:ve=ve.next=e,ve}function nt(){if(me===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?ie.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(S(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?ie.memoizedState=ve=e:ve=ve.next=e}return ve}function $r(e,t){return typeof t=="function"?t(e):t}function Fa(e){var t=nt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=me,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var u=o=null,d=null,p=a;do{var x=p.lane;if((_n&x)===x)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var i={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(u=d=i,o=r):d=d.next=i,ie.lanes|=x,wn|=x}p=p.next}while(p!==null&&p!==a);d===null?o=r:d.next=u,ft(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,ie.lanes|=a,wn|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Da(e){var t=nt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);ft(a,t.memoizedState)||(De=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Jc(){}function Zc(e,t){var n=ie,r=nt(),l=t(),a=!ft(r.memoizedState,l);if(a&&(r.memoizedState=l,De=!0),r=r.queue,bo(td.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Br(9,ed.bind(null,n,r,l,t),void 0,null),ye===null)throw Error(S(349));_n&30||qc(n,t,l)}return l}function qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ed(e,t,n,r){t.value=n,t.getSnapshot=r,nd(t)&&rd(e)}function td(e,t,n){return n(function(){nd(t)&&rd(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function rd(e){var t=Rt(e,1);t!==null&&dt(t,e,1,-1)}function nu(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Yp.bind(null,ie,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ld(){return nt().memoizedState}function Sl(e,t,n,r){var l=yt();ie.flags|=e,l.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function oa(e,t,n,r){var l=nt();r=r===void 0?null:r;var a=void 0;if(me!==null){var o=me.memoizedState;if(a=o.destroy,r!==null&&ko(r,o.deps)){l.memoizedState=Br(t,n,a,r);return}}ie.flags|=e,l.memoizedState=Br(1|t,n,a,r)}function ru(e,t){return Sl(8390656,8,e,t)}function bo(e,t){return oa(2048,8,e,t)}function ad(e,t){return oa(4,2,e,t)}function id(e,t){return oa(4,4,e,t)}function od(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,n){return n=n!=null?n.concat([e]):null,oa(4,4,od.bind(null,t,e),n)}function Ao(){}function ud(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cd(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dd(e,t,n){return _n&21?(ft(n,t)||(n=gc(),ie.lanes|=n,wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Qp(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Oa.transition;Oa.transition={};try{e(!1),t()}finally{Y=n,Oa.transition=r}}function fd(){return nt().memoizedState}function Wp(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pd(e))md(t,n);else if(n=Wc(e,t,n,r),n!==null){var l=ze();dt(n,e,r,l),hd(n,t,r)}}function Yp(e,t,n){var r=tn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pd(e))md(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,u=a(o,n);if(l.hasEagerState=!0,l.eagerState=u,ft(u,o)){var d=t.interleaved;d===null?(l.next=l,vo(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=Wc(e,t,l,r),n!==null&&(l=ze(),dt(n,e,r,l),hd(n,t,r))}}function pd(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function md(e,t){Sr=Ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,no(e,n)}}var Xl={readContext:tt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Kp={readContext:tt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4194308,4,od.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sl(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wp.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:Ao,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=Qp.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,l=yt();if(te){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ye===null)throw Error(S(349));_n&30||qc(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,ru(td.bind(null,r,a,e),[e]),r.flags|=2048,Br(9,ed.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=yt(),t=ye.identifierPrefix;if(te){var n=It,r=Pt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:tt,useCallback:ud,useContext:tt,useEffect:bo,useImperativeHandle:sd,useInsertionEffect:ad,useLayoutEffect:id,useMemo:cd,useReducer:Fa,useRef:ld,useState:function(){return Fa($r)},useDebugValue:Ao,useDeferredValue:function(e){var t=nt();return dd(t,me.memoizedState,e)},useTransition:function(){var e=Fa($r)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:fd,unstable_isNewReconciler:!1},Zp={readContext:tt,useCallback:ud,useContext:tt,useEffect:bo,useImperativeHandle:sd,useInsertionEffect:ad,useLayoutEffect:id,useMemo:cd,useReducer:Da,useRef:ld,useState:function(){return Da($r)},useDebugValue:Ao,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:dd(t,me.memoizedState,e)},useTransition:function(){var e=Da($r)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:fd,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ni(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sa={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),l=tn(e),a=Mt(r,l);a.payload=t,n!=null&&(a.callback=n),t=qt(e,a,l),t!==null&&(dt(t,e,l,r),wl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),l=tn(e),a=Mt(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=qt(e,a,l),t!==null&&(dt(t,e,l,r),wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=tn(e),l=Mt(n,r);l.tag=2,t!=null&&(l.callback=t),t=qt(e,l,r),t!==null&&(dt(t,e,r,n),wl(t,e,r))}};function lu(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(l,a):!0}function gd(e,t,n){var r=!1,l=ln,a=t.contextType;return typeof a=="object"&&a!==null?a=tt(a):(l=$e(t)?yn:Ee.current,r=t.contextTypes,a=(r=r!=null)?Qn(e,l):ln),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sa.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},yo(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=tt(a):(a=$e(t)?yn:Ee.current,l.context=Qn(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ni(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sa.enqueueReplaceState(l,l.state,null),Vl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=Af(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Ha(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ti(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qp=typeof WeakMap=="function"?WeakMap:Map;function vd(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Di=r),Ti(e,t)},n}function yd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ti(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ti(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function iu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=pm.bind(null,e,t,n),t.then(e,e))}function ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function su(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var em=Ft.ReactCurrentOwner,De=!1;function Ie(e,t,n,r){t.child=e===null?Qc(t,null,n,r):Yn(t,e.child,n,r)}function uu(e,t,n,r,l){n=n.render;var a=t.ref;return Gn(t,l),r=So(e,t,n,r,a,l),n=Co(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(te&&n&&co(t),t.flags|=1,Ie(e,t,r,l),t.child)}function cu(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!zo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,xd(e,t,a,r,l)):(e=Nl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(o,r)&&e.ref===t.ref)return Ot(e,t,l)}return t.flags|=1,e=nn(a,r),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Ot(e,t,l)}return ji(e,t,n,r,l)}function _d(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Fn,Ue),Ue|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Fn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,J(Fn,Ue),Ue|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,J(Fn,Ue),Ue|=r;return Ie(e,t,l,n),t.child}function wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ji(e,t,n,r,l){var a=$e(n)?yn:Ee.current;return a=Qn(t,a),Gn(t,l),n=So(e,t,n,r,a,l),r=Co(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(te&&r&&co(t),t.flags|=1,Ie(e,t,n,l),t.child)}function du(e,t,n,r,l){if($e(n)){var a=!0;Fl(t)}else a=!1;if(Gn(t,l),t.stateNode===null)Cl(e,t),gd(t,n,r),Ei(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var d=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=tt(p):(p=$e(n)?yn:Ee.current,p=Qn(t,p));var x=n.getDerivedStateFromProps,i=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";i||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==p)&&au(t,o,r,p),Gt=!1;var s=t.memoizedState;o.state=s,Vl(t,r,o,l),d=t.memoizedState,u!==r||s!==d||He.current||Gt?(typeof x=="function"&&(Ni(t,n,x,r),d=t.memoizedState),(u=Gt||lu(t,n,u,r,s,d,p))?(i||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=p,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Yc(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:ot(t.type,u),o.props=p,i=t.pendingProps,s=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=tt(d):(d=$e(n)?yn:Ee.current,d=Qn(t,d));var c=n.getDerivedStateFromProps;(x=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==i||s!==d)&&au(t,o,r,d),Gt=!1,s=t.memoizedState,o.state=s,Vl(t,r,o,l);var g=t.memoizedState;u!==i||s!==g||He.current||Gt?(typeof c=="function"&&(Ni(t,n,c,r),g=t.memoizedState),(p=Gt||lu(t,n,p,r,s,g,d)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=d,r=p):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,a,l)}function Pi(e,t,n,r,l,a){wd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Ks(t,n,!1),Ot(e,t,a);r=t.stateNode,em.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Yn(t,e.child,null,a),t.child=Yn(t,null,u,a)):Ie(e,t,u,a),t.memoizedState=r.state,l&&Ks(t,n,!0),t.child}function kd(e){var t=e.stateNode;t.pendingContext?Ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ys(e,t.context,!1),xo(e,t.containerInfo)}function fu(e,t,n,r,l){return Wn(),po(l),t.flags|=256,Ie(e,t,n,r),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sd(e,t,n){var r=t.pendingProps,l=ae.current,a=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(ae,l&1),e===null)return bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=da(o,r,0,null),e=vn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Mi(n),t.memoizedState=Ii,e):No(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return tm(e,t,o,r,u,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,u=l.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=nn(l,d),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?a=nn(u,a):(a=vn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Mi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ii,r}return a=e.child,e=a.sibling,r=nn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function No(e,t){return t=da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&po(r),Yn(t,e.child,null,n),e=No(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tm(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Ha(Error(S(422))),ul(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=da({mode:"visible",children:r.children},l,0,null),a=vn(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Yn(t,e.child,null,o),t.child.memoizedState=Mi(o),t.memoizedState=Ii,a);if(!(t.mode&1))return ul(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(S(419)),r=Ha(a,r,void 0),ul(e,t,o,r)}if(u=(o&e.childLanes)!==0,De||u){if(r=ye,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,Rt(e,l),dt(r,e,l,-1))}return Mo(),r=Ha(Error(S(421))),ul(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=mm.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Xe=Zt(l.nextSibling),Qe=t,te=!0,ut=null,e!==null&&(Je[Ze++]=Pt,Je[Ze++]=It,Je[Ze++]=xn,Pt=e.id,It=e.overflow,xn=t),t=No(t,r.children),t.flags|=4096,t)}function pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ai(e.return,t,n)}function $a(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function Cd(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(Ie(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,n,t);else if(e.tag===19)pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ae,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Gl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),$a(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Gl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}$a(t,!0,n,null,a);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nm(e,t,n){switch(t.tag){case 3:kd(t),Wn();break;case 5:Kc(t);break;case 1:$e(t.type)&&Fl(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;J($l,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Sd(e,t,n):(J(ae,ae.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);J(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,n)}return Ot(e,t,n)}var bd,zi,Ad,Nd;bd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zi=function(){};Ad=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,hn(kt.current);var a=null;switch(n){case"input":l=ni(e,l),r=ni(e,r),a=[];break;case"select":l=oe({},l,{value:void 0}),r=oe({},r,{value:void 0}),a=[];break;case"textarea":l=ai(e,l),r=ai(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rl)}oi(n,r);var o;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Nr.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in r){var d=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&d!==u&&(d!=null||u!=null))if(p==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(a||(a=[]),a.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&Z("scroll",e),a||u===d||(a=[])):(a=a||[]).push(p,d))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};Nd=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rm(e,t,n){var r=t.pendingProps;switch(fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return $e(t.type)&&Ol(),Ae(t),null;case 3:return r=t.stateNode,Kn(),q(He),q(Ee),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Bi(ut),ut=null))),zi(e,t),Ae(t),null;case 5:_o(t);var l=hn(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ad(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ae(t),null}if(e=hn(kt.current),ol(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[xt]=t,r[Or]=a,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(l=0;l<vr.length;l++)Z(vr[l],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":ks(r,a),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Z("invalid",r);break;case"textarea":Cs(r,a),Z("invalid",r)}oi(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&il(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&il(r.textContent,u,e),l=["children",""+u]):Nr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":Zr(r),Ss(r,a,!0);break;case"textarea":Zr(r),bs(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Rl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[Or]=r,bd(e,t,!1,!1),t.stateNode=e;e:{switch(o=si(n,r),n){case"dialog":Z("cancel",e),Z("close",e),l=r;break;case"iframe":case"object":case"embed":Z("load",e),l=r;break;case"video":case"audio":for(l=0;l<vr.length;l++)Z(vr[l],e);l=r;break;case"source":Z("error",e),l=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),l=r;break;case"details":Z("toggle",e),l=r;break;case"input":ks(e,r),l=ni(e,r),Z("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":Cs(e,r),l=ai(e,r),Z("invalid",e);break;default:l=r}oi(n,l),u=l;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?lc(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&nc(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Er(e,d):typeof d=="number"&&Er(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Nr.hasOwnProperty(a)?d!=null&&a==="onScroll"&&Z("scroll",e):d!=null&&Ki(e,a,d,o))}switch(n){case"input":Zr(e),Ss(e,r,!1);break;case"textarea":Zr(e),bs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Hn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Nd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=hn(Dr.current),hn(kt.current),ol(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(a=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ae(t),null;case 13:if(q(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Xe!==null&&t.mode&1&&!(t.flags&128))Uc(),Wn(),t.flags|=98560,a=!1;else if(a=ol(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[xt]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else ut!==null&&(Bi(ut),ut=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?he===0&&(he=3):Mo())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Kn(),zi(e,t),e===null&&Lr(t.stateNode.containerInfo),Ae(t),null;case 10:return go(t.type._context),Ae(t),null;case 17:return $e(t.type)&&Ol(),Ae(t),null;case 19:if(q(ae),a=t.memoizedState,a===null)return Ae(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)fr(a,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gl(e),o!==null){for(t.flags|=128,fr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ae,ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>Zn&&(t.flags|=128,r=!0,fr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Gl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!te)return Ae(t),null}else 2*de()-a.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,fr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,n=ae.current,J(ae,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function lm(e,t){switch(fo(t),t.tag){case 1:return $e(t.type)&&Ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),q(He),q(Ee),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(q(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ae),null;case 4:return Kn(),null;case 10:return go(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var cl=!1,Ne=!1,am=typeof WeakSet=="function"?WeakSet:Set,P=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Li(e,t,n){try{n()}catch(r){se(e,t,r)}}var mu=!1;function im(e,t){if(yi=Ml,e=Ic(),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,p=0,x=0,i=e,s=null;t:for(;;){for(var c;i!==n||l!==0&&i.nodeType!==3||(u=o+l),i!==a||r!==0&&i.nodeType!==3||(d=o+r),i.nodeType===3&&(o+=i.nodeValue.length),(c=i.firstChild)!==null;)s=i,i=c;for(;;){if(i===e)break t;if(s===n&&++p===l&&(u=o),s===a&&++x===r&&(d=o),(c=i.nextSibling)!==null)break;i=s,s=i.parentNode}i=c}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},Ml=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,_=g.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:ot(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=mu,mu=!1,g}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Li(t,n,a)}l=l.next}while(l!==r)}}function ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Or],delete t[ki],delete t[Bp],delete t[Vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rl));else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}var we=null,st=!1;function Bt(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(ta,n)}catch{}switch(n.tag){case 5:Ne||On(n,t);case 6:var r=we,l=st;we=null,Bt(e,t,n),we=r,st=l,we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),Ir(e)):za(we,n.stateNode));break;case 4:r=we,l=st,we=n.stateNode.containerInfo,st=!0,Bt(e,t,n),we=r,st=l;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Li(n,t,o),l=l.next}while(l!==r)}Bt(e,t,n);break;case 1:if(!Ne&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){se(n,t,u)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Bt(e,t,n),Ne=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new am),t.forEach(function(r){var l=hm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:we=u.stateNode,st=!1;break e;case 3:we=u.stateNode.containerInfo,st=!0;break e;case 4:we=u.stateNode.containerInfo,st=!0;break e}u=u.return}if(we===null)throw Error(S(160));jd(a,o,l),we=null,st=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(p){se(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),vt(e),r&4){try{Cr(3,e,e.return),ua(3,e)}catch(y){se(e,e.return,y)}try{Cr(5,e,e.return)}catch(y){se(e,e.return,y)}}break;case 1:it(t,e),vt(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(it(t,e),vt(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var l=e.stateNode;try{Er(l,"")}catch(y){se(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&qu(l,a),si(u,o);var p=si(u,a);for(o=0;o<d.length;o+=2){var x=d[o],i=d[o+1];x==="style"?lc(l,i):x==="dangerouslySetInnerHTML"?nc(l,i):x==="children"?Er(l,i):Ki(l,x,i,p)}switch(u){case"input":ri(l,a);break;case"textarea":ec(l,a);break;case"select":var s=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var c=a.value;c!=null?Hn(l,!!a.multiple,c,!1):s!==!!a.multiple&&(a.defaultValue!=null?Hn(l,!!a.multiple,a.defaultValue,!0):Hn(l,!!a.multiple,a.multiple?[]:"",!1))}l[Or]=a}catch(y){se(e,e.return,y)}}break;case 6:if(it(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(y){se(e,e.return,y)}}break;case 3:if(it(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(y){se(e,e.return,y)}break;case 4:it(t,e),vt(e);break;case 13:it(t,e),vt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(jo=de())),r&4&&gu(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(p=Ne)||x,it(t,e),Ne=p):it(t,e),vt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(P=e,x=e.child;x!==null;){for(i=P=x;P!==null;){switch(s=P,c=s.child,s.tag){case 0:case 11:case 14:case 15:Cr(4,s,s.return);break;case 1:On(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){se(r,n,y)}}break;case 5:On(s,s.return);break;case 22:if(s.memoizedState!==null){yu(i);continue}}c!==null?(c.return=s,P=c):yu(i)}x=x.sibling}e:for(x=null,i=e;;){if(i.tag===5){if(x===null){x=i;try{l=i.stateNode,p?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=i.stateNode,d=i.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=rc("display",o))}catch(y){se(e,e.return,y)}}}else if(i.tag===6){if(x===null)try{i.stateNode.nodeValue=p?"":i.memoizedProps}catch(y){se(e,e.return,y)}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;x===i&&(x=null),i=i.return}x===i&&(x=null),i.sibling.return=i.return,i=i.sibling}}break;case 19:it(t,e),vt(e),r&4&&gu(e);break;case 21:break;default:it(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Er(l,""),r.flags&=-33);var a=hu(e);Fi(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=hu(e);Oi(e,u,o);break;default:throw Error(S(161))}}catch(d){se(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function om(e,t,n){P=e,Id(e)}function Id(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||cl;if(!o){var u=l.alternate,d=u!==null&&u.memoizedState!==null||Ne;u=cl;var p=Ne;if(cl=o,(Ne=d)&&!p)for(P=l;P!==null;)o=P,d=o.child,o.tag===22&&o.memoizedState!==null?xu(l):d!==null?(d.return=o,P=d):xu(l);for(;a!==null;)P=a,Id(a),a=a.sibling;P=l,cl=u,Ne=p}vu(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,P=a):vu(e)}}function vu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||ua(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&tu(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tu(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var i=x.dehydrated;i!==null&&Ir(i)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ne||t.flags&512&&Ri(t)}catch(s){se(t,t.return,s)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function yu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function xu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ua(4,t)}catch(d){se(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){se(t,l,d)}}var a=t.return;try{Ri(t)}catch(d){se(t,a,d)}break;case 5:var o=t.return;try{Ri(t)}catch(d){se(t,o,d)}}}catch(d){se(t,t.return,d)}if(t===e){P=null;break}var u=t.sibling;if(u!==null){u.return=t.return,P=u;break}P=t.return}}var sm=Math.ceil,Ql=Ft.ReactCurrentDispatcher,Eo=Ft.ReactCurrentOwner,et=Ft.ReactCurrentBatchConfig,$=0,ye=null,pe=null,ke=0,Ue=0,Fn=on(0),he=0,Vr=null,wn=0,ca=0,To=0,br=null,Fe=null,jo=0,Zn=1/0,Tt=null,Wl=!1,Di=null,en=null,dl=!1,Wt=null,Yl=0,Ar=0,Hi=null,bl=-1,Al=0;function ze(){return $&6?de():bl!==-1?bl:bl=de()}function tn(e){return e.mode&1?$&2&&ke!==0?ke&-ke:Up.transition!==null?(Al===0&&(Al=gc()),Al):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Sc(e.type)),e):1}function dt(e,t,n,r){if(50<Ar)throw Ar=0,Hi=null,Error(S(185));Xr(e,n,r),(!($&2)||e!==ye)&&(e===ye&&(!($&2)&&(ca|=n),he===4&&Xt(e,ke)),Be(e,r),n===1&&$===0&&!(t.mode&1)&&(Zn=de()+500,ia&&sn()))}function Be(e,t){var n=e.callbackNode;Uf(e,t);var r=Il(e,e===ye?ke:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?Gp(_u.bind(null,e)):Bc(_u.bind(null,e)),Hp(function(){!($&6)&&sn()}),n=null;else{switch(vc(r)){case 1:n=to;break;case 4:n=mc;break;case 16:n=Pl;break;case 536870912:n=hc;break;default:n=Pl}n=Hd(n,Md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Md(e,t){if(bl=-1,Al=0,$&6)throw Error(S(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Il(e,e===ye?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var l=$;$|=2;var a=Ld();(ye!==e||ke!==t)&&(Tt=null,Zn=de()+500,gn(e,t));do try{dm();break}catch(u){zd(e,u)}while(!0);ho(),Ql.current=a,$=l,pe!==null?t=0:(ye=null,ke=0,t=he)}if(t!==0){if(t===2&&(l=pi(e),l!==0&&(r=l,t=$i(e,l))),t===1)throw n=Vr,gn(e,0),Xt(e,r),Be(e,de()),n;if(t===6)Xt(e,r);else{if(l=e.current.alternate,!(r&30)&&!um(l)&&(t=Kl(e,r),t===2&&(a=pi(e),a!==0&&(r=a,t=$i(e,a))),t===1))throw n=Vr,gn(e,0),Xt(e,r),Be(e,de()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:cn(e,Fe,Tt);break;case 3:if(Xt(e,r),(r&130023424)===r&&(t=jo+500-de(),10<t)){if(Il(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wi(cn.bind(null,e,Fe,Tt),t);break}cn(e,Fe,Tt);break;case 4:if(Xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-ct(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sm(r/1960))-r,10<r){e.timeoutHandle=wi(cn.bind(null,e,Fe,Tt),r);break}cn(e,Fe,Tt);break;case 5:cn(e,Fe,Tt);break;default:throw Error(S(329))}}}return Be(e,de()),e.callbackNode===n?Md.bind(null,e):null}function $i(e,t){var n=br;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Bi(t)),e}function Bi(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function um(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!ft(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xt(e,t){for(t&=~To,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if($&6)throw Error(S(327));Un();var t=Il(e,0);if(!(t&1))return Be(e,de()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=pi(e);r!==0&&(t=r,n=$i(e,r))}if(n===1)throw n=Vr,gn(e,0),Xt(e,t),Be(e,de()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Fe,Tt),Be(e,de()),null}function Po(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Zn=de()+500,ia&&sn())}}function kn(e){Wt!==null&&Wt.tag===0&&!($&6)&&Un();var t=$;$|=1;var n=et.transition,r=Y;try{if(et.transition=null,Y=1,e)return e()}finally{Y=r,et.transition=n,$=t,!($&6)&&sn()}}function Io(){Ue=Fn.current,q(Fn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dp(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(fo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:Kn(),q(He),q(Ee),wo();break;case 5:_o(r);break;case 4:Kn();break;case 13:q(ae);break;case 19:q(ae);break;case 10:go(r.type._context);break;case 22:case 23:Io()}n=n.return}if(ye=e,pe=e=nn(e.current,null),ke=Ue=t,he=0,Vr=null,To=ca=wn=0,Fe=br=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}mn=null}return e}function zd(e,t){do{var n=pe;try{if(ho(),kl.current=Xl,Ul){for(var r=ie.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ul=!1}if(_n=0,ve=me=ie=null,Sr=!1,Hr=0,Eo.current=null,n===null||n.return===null){he=1,Vr=t,pe=null;break}e:{var a=e,o=n.return,u=n,d=t;if(t=ke,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,x=u,i=x.tag;if(!(x.mode&1)&&(i===0||i===11||i===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var c=ou(o);if(c!==null){c.flags&=-257,su(c,o,u,a,t),c.mode&1&&iu(a,p,t),t=c,d=p;var g=t.updateQueue;if(g===null){var y=new Set;y.add(d),t.updateQueue=y}else g.add(d);break e}else{if(!(t&1)){iu(a,p,t),Mo();break e}d=Error(S(426))}}else if(te&&u.mode&1){var _=ou(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),su(_,o,u,a,t),po(Jn(d,u));break e}}a=d=Jn(d,u),he!==4&&(he=2),br===null?br=[a]:br.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=vd(a,d,t);eu(a,f);break e;case 1:u=d;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(en===null||!en.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=yd(a,u,t);eu(a,w);break e}}a=a.return}while(a!==null)}Od(n)}catch(C){t=C,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Ld(){var e=Ql.current;return Ql.current=Xl,e===null?Xl:e}function Mo(){(he===0||he===3||he===2)&&(he=4),ye===null||!(wn&268435455)&&!(ca&268435455)||Xt(ye,ke)}function Kl(e,t){var n=$;$|=2;var r=Ld();(ye!==e||ke!==t)&&(Tt=null,gn(e,t));do try{cm();break}catch(l){zd(e,l)}while(!0);if(ho(),$=n,Ql.current=r,pe!==null)throw Error(S(261));return ye=null,ke=0,he}function cm(){for(;pe!==null;)Rd(pe)}function dm(){for(;pe!==null&&!Rf();)Rd(pe)}function Rd(e){var t=Dd(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Od(e):pe=t,Eo.current=null}function Od(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lm(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,pe=null;return}}else if(n=rm(n,t,Ue),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);he===0&&(he=5)}function cn(e,t,n){var r=Y,l=et.transition;try{et.transition=null,Y=1,fm(e,t,n,r)}finally{et.transition=l,Y=r}return null}function fm(e,t,n,r){do Un();while(Wt!==null);if($&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Xf(e,a),e===ye&&(pe=ye=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Hd(Pl,function(){return Un(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=et.transition,et.transition=null;var o=Y;Y=1;var u=$;$|=4,Eo.current=null,im(e,n),Pd(n,e),Ip(xi),Ml=!!yi,xi=yi=null,e.current=n,om(n),Of(),$=u,Y=o,et.transition=a}else e.current=n;if(dl&&(dl=!1,Wt=e,Yl=l),a=e.pendingLanes,a===0&&(en=null),Hf(n.stateNode),Be(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Wl)throw Wl=!1,e=Di,Di=null,e;return Yl&1&&e.tag!==0&&Un(),a=e.pendingLanes,a&1?e===Hi?Ar++:(Ar=0,Hi=e):Ar=0,sn(),null}function Un(){if(Wt!==null){var e=vc(Yl),t=et.transition,n=Y;try{if(et.transition=null,Y=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Yl=0,$&6)throw Error(S(331));var l=$;for($|=4,P=e.current;P!==null;){var a=P,o=a.child;if(P.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var p=u[d];for(P=p;P!==null;){var x=P;switch(x.tag){case 0:case 11:case 15:Cr(8,x,a)}var i=x.child;if(i!==null)i.return=x,P=i;else for(;P!==null;){x=P;var s=x.sibling,c=x.return;if(Ed(x),x===p){P=null;break}if(s!==null){s.return=c,P=s;break}P=c}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}P=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,P=o;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Cr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,P=f;break e}P=a.return}}var h=e.current;for(P=h;P!==null;){o=P;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,P=v;else e:for(o=h;P!==null;){if(u=P,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ua(9,u)}}catch(C){se(u,u.return,C)}if(u===o){P=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,P=w;break e}P=u.return}}if($=l,sn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(ta,e)}catch{}r=!0}return r}finally{Y=n,et.transition=t}}return!1}function wu(e,t,n){t=Jn(n,t),t=vd(e,t,1),e=qt(e,t,1),t=ze(),e!==null&&(Xr(e,1,t),Be(e,t))}function se(e,t,n){if(e.tag===3)wu(e,e,n);else for(;t!==null;){if(t.tag===3){wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=Jn(n,e),e=yd(t,e,1),t=qt(t,e,1),e=ze(),t!==null&&(Xr(t,1,e),Be(t,e));break}}t=t.return}}function pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ke&n)===n&&(he===4||he===3&&(ke&130023424)===ke&&500>de()-jo?gn(e,0):To|=n),Be(e,t)}function Fd(e,t){t===0&&(e.mode&1?(t=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):t=1);var n=ze();e=Rt(e,t),e!==null&&(Xr(e,t,n),Be(e,n))}function mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fd(e,n)}function hm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Fd(e,n)}var Dd;Dd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,nm(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&Vc(t,Hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cl(e,t),e=t.pendingProps;var l=Qn(t,Ee.current);Gn(t,n),l=So(null,t,r,e,l,n);var a=Co();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(a=!0,Fl(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yo(t),l.updater=sa,t.stateNode=l,l._reactInternals=t,Ei(t,r,e,n),t=Pi(null,t,r,!0,a,n)):(t.tag=0,te&&a&&co(t),Ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=vm(r),e=ot(r,e),l){case 0:t=ji(null,t,r,e,n);break e;case 1:t=du(null,t,r,e,n);break e;case 11:t=uu(null,t,r,e,n);break e;case 14:t=cu(null,t,r,ot(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),ji(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),du(e,t,r,l,n);case 3:e:{if(kd(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,l=a.element,Yc(e,t),Vl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Jn(Error(S(423)),t),t=fu(e,t,r,n,l);break e}else if(r!==l){l=Jn(Error(S(424)),t),t=fu(e,t,r,n,l);break e}else for(Xe=Zt(t.stateNode.containerInfo.firstChild),Qe=t,te=!0,ut=null,n=Qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===l){t=Ot(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Kc(t),e===null&&bi(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,_i(r,l)?o=null:a!==null&&_i(r,a)&&(t.flags|=32),wd(e,t),Ie(e,t,o,n),t.child;case 6:return e===null&&bi(t),null;case 13:return Sd(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),uu(e,t,r,l,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,J($l,r._currentValue),r._currentValue=o,a!==null)if(ft(a.value,o)){if(a.children===l.children&&!He.current){t=Ot(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=Mt(-1,n&-n),d.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?d.next=d:(d.next=x.next,x.next=d),p.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Ai(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ai(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gn(t,n),l=tt(l),r=r(l),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),cu(e,t,r,l,n);case 15:return xd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Cl(e,t),t.tag=1,$e(r)?(e=!0,Fl(t)):e=!1,Gn(t,n),gd(t,r,l),Ei(t,r,l,n),Pi(null,t,r,!0,e,n);case 19:return Cd(e,t,n);case 22:return _d(e,t,n)}throw Error(S(156,t.tag))};function Hd(e,t){return pc(e,t)}function gm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new gm(e,t,n,r)}function zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vm(e){if(typeof e=="function")return zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zi)return 11;if(e===qi)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nl(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")zo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case En:return vn(n.children,l,a,t);case Ji:o=8,l|=8;break;case Za:return e=qe(12,n,t,l|2),e.elementType=Za,e.lanes=a,e;case qa:return e=qe(13,n,t,l),e.elementType=qa,e.lanes=a,e;case ei:return e=qe(19,n,t,l),e.elementType=ei,e.lanes=a,e;case Ku:return da(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:o=10;break e;case Yu:o=9;break e;case Zi:o=11;break e;case qi:o=14;break e;case Vt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=qe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function vn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function da(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Ba(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Va(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ym(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,r,l,a,o,u,d){return e=new ym(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=qe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(a),e}function xm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $d(e){if(!e)return ln;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if($e(n))return $c(e,n,t)}return t}function Bd(e,t,n,r,l,a,o,u,d){return e=Lo(n,r,!0,e,l,a,o,u,d),e.context=$d(null),n=e.current,r=ze(),l=tn(n),a=Mt(r,l),a.callback=t??null,qt(n,a,l),e.current.lanes=l,Xr(e,l,r),Be(e,r),e}function fa(e,t,n,r){var l=t.current,a=ze(),o=tn(l);return n=$d(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(l,t,o),e!==null&&(dt(e,l,o,a),wl(e,l,o)),o}function Jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){ku(e,t),(e=e.alternate)&&ku(e,t)}function _m(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oo(e){this._internalRoot=e}pa.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));fa(e,t,null,null)};pa.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){fa(null,e,null,null)}),t[Lt]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&kc(e)}};function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function wm(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var p=Jl(o);a.call(p)}}var o=Bd(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=o,e[Lt]=o.current,Lr(e.nodeType===8?e.parentNode:e),kn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var p=Jl(d);u.call(p)}}var d=Lo(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=d,e[Lt]=d.current,Lr(e.nodeType===8?e.parentNode:e),kn(function(){fa(t,d,n,r)}),d}function ha(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var u=l;l=function(){var d=Jl(o);u.call(d)}}fa(t,o,e,l)}else o=wm(n,t,e,l,r);return Jl(o)}yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(no(t,n|1),Be(t,de()),!($&6)&&(Zn=de()+500,sn()))}break;case 13:kn(function(){var r=Rt(e,1);if(r!==null){var l=ze();dt(r,e,1,l)}}),Ro(e,1)}};ro=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=ze();dt(t,e,134217728,n)}Ro(e,134217728)}};xc=function(e){if(e.tag===13){var t=tn(e),n=Rt(e,t);if(n!==null){var r=ze();dt(n,e,t,r)}Ro(e,t)}};_c=function(){return Y};wc=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ci=function(e,t,n){switch(t){case"input":if(ri(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=aa(r);if(!l)throw Error(S(90));Zu(r),ri(r,l)}}}break;case"textarea":ec(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};oc=Po;sc=kn;var km={usingClientEntryPoint:!1,Events:[Wr,In,aa,ac,ic,Po]},pr={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sm={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||_m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{ta=fl.inject(Sm),wt=fl}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(t))throw Error(S(200));return xm(e,t,null,n)};Ye.createRoot=function(e,t){if(!Fo(e))throw Error(S(299));var n=!1,r="",l=Vd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,r,l),e[Lt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Oo(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return kn(e)};Ye.hydrate=function(e,t,n){if(!ma(t))throw Error(S(200));return ha(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Fo(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=Vd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bd(t,null,e,1,n??null,l,!1,a,o),e[Lt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pa(t)};Ye.render=function(e,t,n){if(!ma(t))throw Error(S(200));return ha(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!ma(e))throw Error(S(40));return e._reactRootContainer?(kn(function(){ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Po;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ma(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ha(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)}catch(e){console.error(e)}}Gd(),Gu.exports=Ye;var Cm=Gu.exports,Cu=Cm;Ka.createRoot=Cu.createRoot,Ka.hydrateRoot=Cu.hydrateRoot;const bu=({onStart:e,onSettings:t,onHelp:n})=>m.jsxs("div",{className:"cg-main-menu",children:[m.jsxs("div",{className:"cg-menu-bg",children:[m.jsx("div",{className:"cg-menu-bg-gradient"}),m.jsx("div",{className:"cg-menu-bg-pattern"}),m.jsx("div",{className:"cg-menu-geass-symbols",children:m.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:m.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),m.jsxs("div",{className:"cg-menu-content",children:[m.jsxs("div",{className:"cg-menu-header",children:[m.jsxs("div",{className:"cg-menu-title-decoration",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:m.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),m.jsx("div",{className:"cg-title-line-right"})]}),m.jsxs("h1",{className:"cg-game-title",children:[m.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),m.jsx("span",{className:"cg-title-divider",children:":"}),m.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),m.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),m.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[m.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),m.jsx("div",{className:"cg-title-line-right"})]})]}),m.jsxs("nav",{className:"cg-menu-nav",children:[m.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("span",{className:"cg-button-text",children:"开始游戏"}),m.jsx("div",{className:"cg-button-shimmer"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:t,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),m.jsx("span",{className:"cg-button-text",children:"设置"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),m.jsx("footer",{className:"cg-menu-footer",children:m.jsx("div",{className:"cg-footer-decoration",children:m.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),m.jsx("style",{children:`
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
      `})]}),Gr=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function bm(e){return Gr.find(t=>t.id===e)}function Me(e){if(!e)return"未知角色";const t=bm(e);return(t==null?void 0:t.name)||e}const Am=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},Nm=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let Ga=null;const Zl=()=>(Ga===null&&(Ga=Am()),Ga),Em=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:l})=>{const[a,o]=E.useState(!1),[u,d]=E.useState(r),[p,x]=E.useState(!1),[i,s]=E.useState(!0),c=E.useRef(null),g=E.useRef(null),[y]=E.useState(()=>Math.floor(Math.random()*4)+1),_=n||y,f=E.useMemo(()=>Nm(t),[t]),h=E.useCallback((v=!0)=>`${`avatars/${e}/${_}`}-${f}.${v?"webp":"png"}`,[e,_,f]);return E.useEffect(()=>{if(r||u)return;const v=new IntersectionObserver(C=>{C.forEach(T=>{T.isIntersecting&&d(!0)})},{rootMargin:"50px",threshold:.1}),w=g.current;return w&&v.observe(w),()=>{w&&v.unobserve(w),v.disconnect()}},[r,u]),E.useEffect(()=>{if(!u)return;(async()=>{if(Zl()&&i){const C=new Image;C.src=h(!0),C.onload=()=>{o(!0),l==null||l()},C.onerror=()=>{s(!1)}}else{const C=new Image;C.src=h(!1),C.onload=()=>{o(!0),l==null||l()},C.onerror=()=>{x(!0)}}})()},[u,h,l,i]),m.jsxs("div",{ref:g,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"transparent",position:"relative"},children:[!a&&!p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},children:m.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#dc2626",fontSize:t*.2},children:"?"}),u&&m.jsxs("picture",{children:[Zl()&&i&&m.jsx("source",{srcSet:h(!0),type:"image/webp"}),m.jsx("img",{ref:c,src:h(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:a?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),m.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class ql{static preloadCharacter(t){const n=["small","medium","large"],r=Zl();for(let l=1;l<=4;l++)n.forEach(a=>{const o=`avatars/${t}/${l}-${a}.webp`,u=`avatars/${t}/${l}-${a}.png`;if(r&&!this.preloadedAvatars.has(o)){const d=new Image;d.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(u)){const d=new Image;d.src=u,this.preloadedAvatars.add(u)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(Zl()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const u=new Image;u.src=o,this.preloadedAvatars.add(o)}}const a=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(a)){const o=new Image;o.src=a,this.preloadedAvatars.add(a)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}ge(ql,"preloadedAvatars",new Set);const Do=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>m.jsx(Em,{characterId:e,size:t,avatarNumber:n??1,priority:r}),Tm=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,a]=E.useState(null),[o]=E.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),u=Gr.find(p=>p.id===e);E.useEffect(()=>{e&&ql.preloadAvatar(e,o[e])},[e,o]);const d=p=>{const x=o[p];t(p,x)};return m.jsxs("div",{className:"cg-character-select",children:[m.jsxs("div",{className:"cg-select-bg",children:[m.jsx("div",{className:"cg-select-bg-gradient"}),m.jsx("div",{className:"cg-select-bg-pattern"})]}),m.jsxs("div",{className:"cg-select-content",children:[m.jsxs("header",{className:"cg-select-header",children:[m.jsxs("button",{className:"cg-back-button",onClick:r,children:[m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),m.jsx("span",{children:"返回"})]}),m.jsx("h2",{className:"cg-select-title",children:m.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),m.jsx("div",{className:"cg-select-placeholder"})]}),m.jsx("div",{className:"cg-character-grid",children:Gr.map(p=>{const x=e===p.id,i=l===p.id;return m.jsxs("div",{className:`cg-character-card ${x?"cg-selected":""} ${i?"cg-hovered":""}`,onClick:()=>d(p.id),onMouseEnter:()=>a(p.id),onMouseLeave:()=>a(null),children:[m.jsxs("div",{className:"cg-card-frame",children:[m.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),m.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),m.jsx("div",{className:"cg-character-preview",children:m.jsx(Do,{characterId:p.id,size:300,avatarNumber:o[p.id],priority:l===p.id||e===p.id})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("h3",{className:"cg-character-name",children:p.name}),m.jsx("p",{className:"cg-character-name-en",children:p.nameEn}),m.jsx("div",{className:"cg-character-skill",children:m.jsx("span",{className:"cg-skill-name",children:p.skill.name})})]}),x&&m.jsx("div",{className:"cg-selected-indicator",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:m.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),m.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${p.color}40 0%, transparent 70%)`}})]},p.id)})}),u&&m.jsx("div",{className:"cg-character-detail",children:m.jsxs("div",{className:"cg-detail-frame",children:[m.jsxs("div",{className:"cg-detail-content",children:[m.jsx("p",{className:"cg-detail-description",children:u.description}),m.jsxs("div",{className:"cg-detail-skill",children:[m.jsx("span",{className:"cg-skill-label",children:"技能:"}),m.jsx("span",{className:"cg-skill-value",children:u.skill.name}),m.jsx("p",{className:"cg-skill-desc",children:u.skill.description})]})]}),m.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[m.jsx("span",{children:"确认选择"}),m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),m.jsx("style",{children:`
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
      `})]})},Nt={THINKING:1e3,PLAY_TO_CHALLENGE:2e3,CHALLENGE_TO_RESOLVE:2e3,GEASS_RESULT_DISPLAY:2e3,TURN_SWITCH:1e3,ROUND_START:600,NO_CHALLENGE_DISPLAY:1500,CHALLENGE_DISPLAY:1500,AI_CHALLENGE_INTERVAL:1500},jm="/liars-game/assets/cards/card-back.svg",pl=e=>{if(!e)return"#d4af37";const t=Gr.find(n=>n.id===e);return(t==null?void 0:t.color)||"#d4af37"},Pm=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:l=["cc","suzaku","kallen"],aiAvatars:a={},onToggleCardSelection:o,onConfirmPlay:u,onPass:d,onChallenge:p,onBackToMenu:x,onLelouchSkill:i,gameLog:s=[],isProcessing:c=!1,canUseSkill:g=!0,aiThinkingState:y})=>{var Pe,Ht,ce,W,bn,_e,mt,ht,bt,At,$t,lt,at,Ho,$o,Bo,Vo,Go,Uo,Xo,Qo,Wo,Yo,Ko,Jo,Zo,qo,es,ts,ns,rs,ls,as,is,os,ss,us,cs;const[_,f]=E.useState(!1),[h,v]=E.useState(!1),w=E.useRef(null),C=E.useRef(null),T=E.useRef(s.length),A=E.useRef(null),k=typeof window<"u"&&window.innerWidth<=768,[M,L]=E.useState({player:{type:null,showText:""},ai:{type:null,showText:""},ai2:{type:null,showText:""},ai3:{type:null,showText:""}}),[X,Ve]=E.useState({playerId:null,type:null,text:""}),[Ce,Te]=E.useState({show:!1,targetId:null}),[pt,Dt]=E.useState([]),St=E.useRef(null),j=E.useRef(null),z=E.useRef(null),R=E.useRef(!1);E.useEffect(()=>{if(w.current&&s.length>T.current){const b=w.current;b.scrollTo({top:b.scrollHeight,behavior:"smooth"})}T.current=s.length},[s]),E.useEffect(()=>{if(!k||!h)return;const b=()=>{A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{v(!1)},3e3)};b();const F=C.current;if(F){const re=["click","touchstart","scroll"];return re.forEach(le=>{F.addEventListener(le,b)}),()=>{re.forEach(le=>{F.removeEventListener(le,b)}),A.current&&clearTimeout(A.current)}}return()=>{A.current&&clearTimeout(A.current)}},[h,k]),E.useEffect(()=>{if(R.current||pt.length===0)return;R.current=!0;const b=pt[0];L(F=>({...F,[b.playerId]:{type:b.type,showText:b.text}})),Dt(F=>F.slice(1)),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{L(F=>({...F,[b.playerId]:{type:null,showText:""}})),R.current=!1,pt.length<=1&&St.current&&(St.current(),St.current=null)},b.duration)},[pt]);const V=(b,F,re,le)=>{const gt=le;Dt(va=>[...va,{playerId:b,type:F,text:re,duration:gt}])};if(E.useEffect(()=>{if(!e)return;const{lastAction:b,turnState:F,phase:re}=e,le=X.playerId;if(F!=null&&F.playedCards&&(b!=null&&b.includes("出牌")||b!=null&&b.includes("出了"))){const gt=F.playedCards.playerId;console.log("[Animation] 出牌动画触发:",{playerId:gt,lastAction:b}),j.current&&clearTimeout(j.current),Ve({playerId:gt,type:gt==="player"?"play":"aiPlay",text:"出牌中..."}),gt==="player"?V(gt,"play","出牌",1500):V(gt,"aiPlay","出牌",1500)}re==="challenge"&&le&&(j.current=setTimeout(()=>{Ve({playerId:null,type:null,text:""})},500))},[e==null?void 0:e.lastAction,e==null?void 0:e.phase,(Ht=(Pe=e==null?void 0:e.turnState)==null?void 0:Pe.playedCards)==null?void 0:Ht.playerId,X.playerId]),E.useEffect(()=>{if(!e)return;const{lastAction:b,geassResult:F,turnState:re}=e;if(b!=null&&b.includes("质疑")&&(b!=null&&b.includes("发起"))){const le=b.includes("玩家")?"player":b.includes("朱雀")?"ai2":b.includes("卡莲")?"ai3":(b.includes("C.C.")||b.includes("C.C"),"ai");console.log("[Animation] 质疑动画触发:",{playerId:le,lastAction:b}),le==="player"&&(re!=null&&re.playedCards)?(z.current&&clearTimeout(z.current),Te({show:!0,targetId:re.playedCards.playerId}),V(le,"challenge","质疑中...",1500)):(console.log(`[Animation] AI质疑动画触发: ${le}, lastAction: ${b}`),V(le,"challenge","质疑",1500))}F!=null&&F.activated&&Ce.show&&(z.current=setTimeout(()=>{Te({show:!1,targetId:null})},500))},[e==null?void 0:e.lastAction,(ce=e==null?void 0:e.geassResult)==null?void 0:ce.activated]),E.useEffect(()=>{if(!e)return;const{lastAction:b,geassResult:F,turnState:re}=e;if(b!=null&&b.includes("选择不质疑")){const le=b.includes("玩家")?"player":b.includes("朱雀")?"ai2":b.includes("卡莲")?"ai3":(b.includes("C.C.")||b.includes("C.C"),"ai");console.log("[Animation] 不质疑动画触发:",{playerId:le,lastAction:b}),V(le,"skip","跳过",1500)}if(F!=null&&F.activated&&(re!=null&&re.playedCards)){const le=re.playedCards.playerId;F.isDodge?(console.log("[Animation] 闪避动画触发:",{victimId:le,geassResult:F}),V(le,"dodge","闪避",1500)):F.hit&&(console.log("[Animation] 命中动画触发:",{victimId:le,geassResult:F}),V(le,"hit","命中",1500))}},[e==null?void 0:e.lastAction,(W=e==null?void 0:e.geassResult)==null?void 0:W.activated]),E.useEffect(()=>{n&&ql.preloadAvatar(n,r),l.forEach(b=>{const F=a[b]||1;ql.preloadAvatar(b,F)})},[n,r,l,a]),!e)return null;const{phase:ne,liarCard:Ct,playerStats:rt,aiPlayers:N,turnState:ue}=e,Oe=ne==="player_turn",nr=ne==="challenge",O=e.playerHand||[],I=(ue==null?void 0:ue.turnNumber)||1,D=nr,G=()=>{t.length>0&&u()},Q=()=>f(!0),U=()=>{v(b=>!b)},ee=b=>{f(!1),i==null||i(b)},K=b=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[b]||b,B=b=>b==="joker"?"#d4af37":b==="hearts"||b==="diamonds"?"#dc2626":"#1a1a24",xe=Me(n??void 0),je=pl(n),Ge=(b,F,re,le,gt,va,ds=!1,Ud=!0,rr="player")=>{const lr=M[rr],Xd=lr.type?`cg-anim-${lr.type}`:"",fs=(y==null?void 0:y.isThinking)&&(y==null?void 0:y.aiId)===rr,ps=X.playerId===rr&&X.type,Qd=ps?`cg-anim-${X.type}`:"",ms=Ce.show&&rr==="player",hs=Ce.show&&Ce.targetId===rr;return m.jsxs("div",{className:`cg-character ${ds?"cg-character-top":""} ${Ud?"":"cg-character-dead"} ${Xd} ${Qd} ${fs?"cg-character-thinking":""} ${ms?"cg-player-challenging":""} ${hs?"cg-being-challenged":""}`,children:[lr.showText&&m.jsx("div",{className:`cg-action-text cg-action-${lr.type}`,children:lr.showText}),ps&&m.jsx("div",{className:`cg-action-text cg-action-${X.type} cg-persistent-text`,children:X.text}),ms&&m.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"质疑中..."}),hs&&m.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"被质疑"}),fs&&m.jsx("div",{className:"cg-thinking-indicator",children:m.jsx("span",{className:"cg-thinking-dots",children:"..."})}),m.jsx("div",{className:"cg-character-avatar",children:F&&m.jsx(Do,{characterId:F,size:120,avatarNumber:va,priority:!0})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("div",{className:"cg-character-name",style:{color:gt},children:b}),m.jsxs("div",{className:"cg-character-stats",children:[m.jsx("span",{className:"cg-hp-display",children:Array(re).fill("❤").join("")}),m.jsxs("span",{className:"cg-card-count",children:["🃏",le]})]})]})]})};return m.jsxs("div",{className:"cg-game-table",children:[m.jsx("div",{className:"cg-top-bar",children:m.jsxs("button",{className:`cg-log-toggle-btn-top ${h?"expanded":""}`,onClick:U,"aria-label":h?"收起记录":"展开记录",children:[m.jsx("span",{className:"cg-log-toggle-icon",children:"📜"}),m.jsx("span",{className:"cg-log-toggle-text",children:"记录"}),!h&&s.length>0&&m.jsx("span",{className:"cg-log-badge",children:s.length})]})}),m.jsxs("div",{className:"cg-main-layout",children:[m.jsxs("div",{ref:C,className:`cg-log-panel ${h?"expanded":"collapsed"}`,children:[m.jsxs("div",{className:"cg-log-header",children:[m.jsx("span",{children:"📜 游戏记录"}),m.jsx("button",{className:"cg-log-close-btn mobile-only",onClick:U,children:"✕"})]}),m.jsx("div",{ref:w,className:"cg-log-content",children:s.map((b,F)=>m.jsx("div",{className:`cg-log-item ${b.includes("质疑")?"challenge":""} ${b.includes("Geass")?"geass":""}`,children:b},F))})]}),h&&m.jsx("div",{className:"cg-log-overlay",onClick:U}),m.jsxs("div",{className:"cg-game-area",children:[m.jsx("div",{className:"cg-ai-top",children:Ge(Me(((bn=N==null?void 0:N[1])==null?void 0:bn.character)||l[1]),((_e=N==null?void 0:N[1])==null?void 0:_e.character)||l[1],((ht=(mt=N==null?void 0:N[1])==null?void 0:mt.stats)==null?void 0:ht.hp)||0,((At=(bt=N==null?void 0:N[1])==null?void 0:bt.hand)==null?void 0:At.length)||0,pl((($t=N==null?void 0:N[1])==null?void 0:$t.character)||l[1]),a[((lt=N==null?void 0:N[1])==null?void 0:lt.character)||l[1]]||1,!0,((at=N==null?void 0:N[1])==null?void 0:at.isActive)!==!1&&((($o=(Ho=N==null?void 0:N[1])==null?void 0:Ho.stats)==null?void 0:$o.hp)||0)>0,"ai2")}),m.jsxs("div",{className:"cg-middle-section",children:[m.jsx("div",{className:"cg-ai-left",children:Ge(Me(((Bo=N==null?void 0:N[2])==null?void 0:Bo.character)||l[2]),((Vo=N==null?void 0:N[2])==null?void 0:Vo.character)||l[2],((Uo=(Go=N==null?void 0:N[2])==null?void 0:Go.stats)==null?void 0:Uo.hp)||0,((Qo=(Xo=N==null?void 0:N[2])==null?void 0:Xo.hand)==null?void 0:Qo.length)||0,pl(((Wo=N==null?void 0:N[2])==null?void 0:Wo.character)||l[2]),a[((Yo=N==null?void 0:N[2])==null?void 0:Yo.character)||l[2]]||1,!1,((Ko=N==null?void 0:N[2])==null?void 0:Ko.isActive)!==!1&&(((Zo=(Jo=N==null?void 0:N[2])==null?void 0:Jo.stats)==null?void 0:Zo.hp)||0)>0,"ai3")}),m.jsx("div",{className:"cg-table-area",children:m.jsx("div",{className:"cg-table",children:m.jsx("div",{className:"cg-table-inner",children:ue!=null&&ue.playedCards?m.jsxs("div",{className:"cg-played",children:[m.jsxs("div",{className:"cg-played-name",children:[ue.playedCards.playerId==="player"?xe:ue.playedCards.playerId.startsWith("ai")?Me(((qo=N==null?void 0:N.find(b=>{var F;return b.id===((F=ue.playedCards)==null?void 0:F.playerId)}))==null?void 0:qo.character)||"cc"):"未知玩家"," ","出牌"]}),m.jsx("div",{className:"cg-cards",children:ue.playedCards.actualCards.map(b=>m.jsx("div",{className:"cg-card-small cg-card-back",children:m.jsx("img",{src:jm,alt:"牌背"})},b.id))}),m.jsxs("div",{className:"cg-card-count-display",children:[ue.playedCards.cardIds.length," 张牌"]})]}):m.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),m.jsx("div",{className:"cg-ai-right",children:Ge(Me(((es=N==null?void 0:N[0])==null?void 0:es.character)||l[0]),((ts=N==null?void 0:N[0])==null?void 0:ts.character)||l[0],((rs=(ns=N==null?void 0:N[0])==null?void 0:ns.stats)==null?void 0:rs.hp)||0,((as=(ls=N==null?void 0:N[0])==null?void 0:ls.hand)==null?void 0:as.length)||0,pl(((is=N==null?void 0:N[0])==null?void 0:is.character)||l[0]),a[((os=N==null?void 0:N[0])==null?void 0:os.character)||l[0]]||1,!1,((ss=N==null?void 0:N[0])==null?void 0:ss.isActive)!==!1&&(((cs=(us=N==null?void 0:N[0])==null?void 0:us.stats)==null?void 0:cs.hp)||0)>0,"ai")})]}),m.jsxs("div",{className:"cg-player-section",children:[m.jsx("div",{className:"cg-player-info",children:Ge(xe,n,rt.hp,O.length,je,r,!1,!0,"player")}),m.jsxs("div",{className:"cg-hand-section",children:[m.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,O.length*26+22)}px`},children:O.map((b,F)=>{const re=t.includes(b.id);return m.jsxs("button",{className:`cg-card ${re?"selected":""} ${!Oe||c?"disabled":""}`,onClick:()=>o(b.id),style:{left:`${F*26}px`,transform:re?"translateY(-8px)":"none",zIndex:re?O.length+10:O.length-F},disabled:!Oe||c,children:[m.jsxs("div",{className:"cg-card-face",children:[m.jsx("div",{style:{color:B(b.suit),fontSize:"13px"},children:b.rank}),m.jsx("div",{style:{color:B(b.suit),fontSize:"15px"},children:K(b.suit)})]}),re&&m.jsx("div",{className:"cg-check",children:"✓"})]},b.id)})}),n==="lelouch"&&m.jsx("button",{className:"cg-skill-btn",onClick:Q,disabled:c||!g||!Oe,children:g?"绝对命令":"已使用"})]})]})]})]}),m.jsxs("div",{className:"cg-bottom-bar",children:[m.jsx("div",{className:"cg-bottom-left",children:m.jsx("button",{className:"cg-back-btn",onClick:x,children:"← 主页面"})}),m.jsxs("div",{className:"cg-bottom-center",children:[!D&&m.jsxs("div",{className:"cg-status-text",children:[Oe&&t.length===0&&"请选择要出的牌",Oe&&t.length>0&&`已选择 ${t.length} 张牌`,nr&&!D&&"等待其他玩家质疑...",!Oe&&!nr&&"AI回合中..."]}),m.jsxs("div",{className:"cg-action-buttons",children:[Oe&&t.length>0&&m.jsxs("button",{className:"cg-btn cg-btn-play",onClick:G,disabled:c,children:["出牌 (",t.length,")"]}),D&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:p,disabled:c,children:"⚔️ 质疑"}),m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:c,children:"不质疑"})]})]})]}),m.jsxs("div",{className:"cg-bottom-right",children:[m.jsxs("div",{className:"cg-round-display",children:[m.jsx("div",{className:"cg-round-label",children:"回合"}),m.jsx("div",{className:"cg-round-number",children:I})]}),m.jsxs("div",{className:"cg-liar-display",children:[m.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),m.jsx("div",{className:"cg-liar-value",children:Ct})]})]})]}),_&&m.jsx("div",{className:"cg-modal",children:m.jsxs("div",{className:"cg-modal-content",children:[m.jsx("h3",{children:"选择新的骗子牌"}),m.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(b=>m.jsx("button",{className:b===Ct?"current":"",onClick:()=>ee(b),children:b},b))}),m.jsx("button",{className:"cg-btn-skip",onClick:()=>f(!1),children:"取消"})]})}),m.jsx("style",{children:`
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
      `})]})},Im=({isWin:e,turnNumber:t,onRestart:n,onMainMenu:r})=>{const[l,a]=E.useState(!1),[o,u]=E.useState(!1);E.useEffect(()=>{e&&a(!0);const p=setTimeout(()=>u(!0),1e3);return()=>clearTimeout(p)},[e]);const d=e?"lelouch":"cc";return m.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[m.jsxs("div",{className:"cg-result-bg",children:[m.jsx("div",{className:"cg-result-bg-gradient"}),e?m.jsx("div",{className:"cg-result-bg-win",children:m.jsx("div",{className:"cg-victory-rays"})}):m.jsx("div",{className:"cg-result-bg-lose",children:m.jsx("div",{className:"cg-defeat-shadow"})})]}),l&&m.jsx(Mm,{}),m.jsxs("div",{className:`cg-result-content ${o?"cg-animate-in":""}`,children:[m.jsxs("div",{className:"cg-result-header",children:[m.jsx("div",{className:"cg-result-badge",children:e?m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((p,x)=>m.jsx("circle",{cx:50+35*Math.cos((x*72-90)*Math.PI/180),cy:50+35*Math.sin((x*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:m.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${x*.2}s`,repeatCount:"indefinite"})},x))]}):m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),m.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),m.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),m.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),m.jsx("div",{className:"cg-result-character",children:m.jsxs("div",{className:"cg-character-showcase",children:[m.jsx(Do,{characterId:d,size:200}),m.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),m.jsx("div",{className:"cg-result-score",children:m.jsxs("div",{className:"cg-score-simple",children:[m.jsx("span",{className:"cg-score-label",children:"回合数"}),m.jsx("span",{className:"cg-score-value",children:t})]})}),m.jsxs("div",{className:"cg-result-actions",children:[m.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),m.jsx("span",{children:"再来一局"})]}),m.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:r,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),m.jsx("span",{children:"返回主菜单"})]})]})]}),m.jsx("style",{children:`
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
      `})]})},Mm=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return m.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>m.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var Et={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var i=this||n;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window<"u"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var s=this||n;if(i=parseFloat(i),s.ctx||x(),typeof i<"u"&&i>=0&&i<=1){if(s._volume=i,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[c]._soundById(g[y]);_&&_._node&&(_._node.volume=_._volume*i)}return s}return s._volume},mute:function(i){var s=this||n;s.ctx||x(),s._muted=i,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i?0:s._volume,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[c]._soundById(g[y]);_&&_._node&&(_._node.muted=i?!0:_._muted)}return s},stop:function(){for(var i=this||n,s=0;s<i._howls.length;s++)i._howls[s].stop();return i},unload:function(){for(var i=this||n,s=i._howls.length-1;s>=0;s--)i._howls[s].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close<"u"&&(i.ctx.close(),i.ctx=null,x()),i},codecs:function(i){return(this||n)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||n;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(i._canPlayEvent="canplay")}catch{i.noAudio=!0}else i.noAudio=!0;try{var s=new Audio;s.muted&&(i.noAudio=!0)}catch{}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return i}if(!s||typeof s.canPlayType!="function")return i;var c=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=i._navigator?i._navigator.userAgent:"",y=g.match(/OPR\/(\d+)/g),_=y&&parseInt(y[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,h=g.match(/Version\/(.*?) /),v=f&&h&&parseInt(h[1],10)<15;return i._codecs={mp3:!!(!_&&(c||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!c,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||n;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var s=function(c){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,i._releaseHtml5Audio(g)}catch{i.noAudio=!0;break}for(var y=0;y<i._howls.length;y++)if(!i._howls[y]._webAudio)for(var _=i._howls[y]._getSoundIds(),f=0;f<_.length;f++){var h=i._howls[y]._soundById(_[f]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}i._autoResume();var v=i.ctx.createBufferSource();v.buffer=i._scratchBuffer,v.connect(i.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),v.onended=function(){v.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<i._howls.length;w++)i._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),i}},_obtainHtml5Audio:function(){var i=this||n;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var s=this||n;return i._unlocked&&s._html5AudioPool.push(i),s},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<i._howls.length;s++)if(i._howls[s]._webAudio){for(var c=0;c<i._howls[s]._sounds.length;c++)if(!i._howls[s]._sounds[c]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(i.autoSuspend){i._suspendTimer=null,i.state="suspending";var g=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(g,g)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume>"u"||!n.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var s=0;s<i._howls.length;s++)i._howls[s]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var n=new t,r=function(i){var s=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(i)};r.prototype={init:function(i){var s=this;return n.ctx||x(),s._autoplay=i.autoplay||!1,s._format=typeof i.format!="string"?i.format:[i.format],s._html5=i.html5||!1,s._muted=i.mute||!1,s._loop=i.loop||!1,s._pool=i.pool||5,s._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,s._rate=i.rate||1,s._sprite=i.sprite||{},s._src=typeof i.src!="string"?i.src:[i.src],s._volume=i.volume!==void 0?i.volume:1,s._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=i.onend?[{fn:i.onend}]:[],s._onfade=i.onfade?[{fn:i.onfade}]:[],s._onload=i.onload?[{fn:i.onload}]:[],s._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],s._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],s._onpause=i.onpause?[{fn:i.onpause}]:[],s._onplay=i.onplay?[{fn:i.onplay}]:[],s._onstop=i.onstop?[{fn:i.onstop}]:[],s._onmute=i.onmute?[{fn:i.onmute}]:[],s._onvolume=i.onvolume?[{fn:i.onvolume}]:[],s._onrate=i.onrate?[{fn:i.onrate}]:[],s._onseek=i.onseek?[{fn:i.onseek}]:[],s._onunlock=i.onunlock?[{fn:i.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var i=this,s=null;if(n.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var c=0;c<i._src.length;c++){var g,y;if(i._format&&i._format[c])g=i._format[c];else{if(y=i._src[c],typeof y!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(y),g||(g=/\.([^.]+)$/.exec(y.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=i._src[c];break}}if(!s){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=s,i._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new l(i),i._webAudio&&o(i),i},play:function(i,s){var c=this,g=null;if(typeof i=="number")g=i,i=null;else{if(typeof i=="string"&&c._state==="loaded"&&!c._sprite[i])return null;if(typeof i>"u"&&(i="__default",!c._playLock)){for(var y=0,_=0;_<c._sounds.length;_++)c._sounds[_]._paused&&!c._sounds[_]._ended&&(y++,g=c._sounds[_]._id);y===1?i=null:g=null}}var f=g?c._soundById(g):c._inactiveSound();if(!f)return null;if(g&&!i&&(i=f._sprite||"__default"),c._state!=="loaded"){f._sprite=i,f._ended=!1;var h=f._id;return c._queue.push({event:"play",action:function(){c.play(h)}}),h}if(g&&!f._paused)return s||c._loadQueue("play"),f._id;c._webAudio&&n._autoResume();var v=Math.max(0,f._seek>0?f._seek:c._sprite[i][0]/1e3),w=Math.max(0,(c._sprite[i][0]+c._sprite[i][1])/1e3-v),C=w*1e3/Math.abs(f._rate),T=c._sprite[i][0]/1e3,A=(c._sprite[i][0]+c._sprite[i][1])/1e3;f._sprite=i,f._ended=!1;var k=function(){f._paused=!1,f._seek=v,f._start=T,f._stop=A,f._loop=!!(f._loop||c._sprite[i][2])};if(v>=A){c._ended(f);return}var M=f._node;if(c._webAudio){var L=function(){c._playLock=!1,k(),c._refreshBuffer(f);var Te=f._muted||c._muted?0:f._volume;M.gain.setValueAtTime(Te,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof M.bufferSource.start>"u"?f._loop?M.bufferSource.noteGrainOn(0,v,86400):M.bufferSource.noteGrainOn(0,v,w):f._loop?M.bufferSource.start(0,v,86400):M.bufferSource.start(0,v,w),C!==1/0&&(c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),C)),s||setTimeout(function(){c._emit("play",f._id),c._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?L():(c._playLock=!0,c.once("resume",L),c._clearTimer(f._id))}else{var X=function(){M.currentTime=v,M.muted=f._muted||c._muted||n._muted||M.muted,M.volume=f._volume*n.volume(),M.playbackRate=f._rate;try{var Te=M.play();if(Te&&typeof Promise<"u"&&(Te instanceof Promise||typeof Te.then=="function")?(c._playLock=!0,k(),Te.then(function(){c._playLock=!1,M._unlocked=!0,s?c._loadQueue():c._emit("play",f._id)}).catch(function(){c._playLock=!1,c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(c._playLock=!1,k(),c._emit("play",f._id)),M.playbackRate=f._rate,M.paused){c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||f._loop?c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),C):(c._endTimers[f._id]=function(){c._ended(f),M.removeEventListener("ended",c._endTimers[f._id],!1)},M.addEventListener("ended",c._endTimers[f._id],!1))}catch(pt){c._emit("playerror",f._id,pt)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=c._src,M.load());var Ve=window&&window.ejecta||!M.readyState&&n._navigator.isCocoonJS;if(M.readyState>=3||Ve)X();else{c._playLock=!0,c._state="loading";var Ce=function(){c._state="loaded",X(),M.removeEventListener(n._canPlayEvent,Ce,!1)};M.addEventListener(n._canPlayEvent,Ce,!1),c._clearTimer(f._id)}}return f._id},pause:function(i){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(i)}}),s;for(var c=s._getSoundIds(i),g=0;g<c.length;g++){s._clearTimer(c[g]);var y=s._soundById(c[g]);if(y&&!y._paused&&(y._seek=s.seek(c[g]),y._rateSeek=0,y._paused=!0,s._stopFade(c[g]),y._node))if(s._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),s._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||s._emit("pause",y?y._id:null)}return s},stop:function(i,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"stop",action:function(){c.stop(i)}}),c;for(var g=c._getSoundIds(i),y=0;y<g.length;y++){c._clearTimer(g[y]);var _=c._soundById(g[y]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,c._stopFade(g[y]),_._node&&(c._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&c._clearSound(_._node))),s||c._emit("stop",_._id))}return c},mute:function(i,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"mute",action:function(){c.mute(i,s)}}),c;if(typeof s>"u")if(typeof i=="boolean")c._muted=i;else return c._muted;for(var g=c._getSoundIds(s),y=0;y<g.length;y++){var _=c._soundById(g[y]);_&&(_._muted=i,_._interval&&c._stopFade(_._id),c._webAudio&&_._node?_._node.gain.setValueAtTime(i?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:i),c._emit("mute",_._id))}return c},volume:function(){var i=this,s=arguments,c,g;if(s.length===0)return i._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length>=2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c<"u"&&c>=0&&c<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,s)}}),i;typeof g>"u"&&(i._volume=c),g=i._getSoundIds(g);for(var h=0;h<g.length;h++)f=i._soundById(g[h]),f&&(f._volume=c,s[2]||i._stopFade(g[h]),i._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(c,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=c*n.volume()),i._emit("volume",f._id))}else return f=g?i._soundById(g):i._sounds[0],f?f._volume:0;return i},fade:function(i,s,c,g){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(i,s,c,g)}}),y;i=Math.min(Math.max(0,parseFloat(i)),1),s=Math.min(Math.max(0,parseFloat(s)),1),c=parseFloat(c),y.volume(i,g);for(var _=y._getSoundIds(g),f=0;f<_.length;f++){var h=y._soundById(_[f]);if(h){if(g||y._stopFade(_[f]),y._webAudio&&!h._muted){var v=n.ctx.currentTime,w=v+c/1e3;h._volume=i,h._node.gain.setValueAtTime(i,v),h._node.gain.linearRampToValueAtTime(s,w)}y._startFadeInterval(h,i,s,c,_[f],typeof g>"u")}}return y},_startFadeInterval:function(i,s,c,g,y,_){var f=this,h=s,v=c-s,w=Math.abs(v/.01),C=Math.max(4,w>0?g/w:g),T=Date.now();i._fadeTo=c,i._interval=setInterval(function(){var A=(Date.now()-T)/g;T=Date.now(),h+=v*A,h=Math.round(h*100)/100,v<0?h=Math.max(c,h):h=Math.min(c,h),f._webAudio?i._volume=h:f.volume(h,i._id,!0),_&&(f._volume=h),(c<s&&h<=c||c>s&&h>=c)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,f.volume(c,i._id),f._emit("fade",i._id))},C)},_stopFade:function(i){var s=this,c=s._soundById(i);return c&&c._interval&&(s._webAudio&&c._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(c._interval),c._interval=null,s.volume(c._fadeTo,i),c._fadeTo=null,s._emit("fade",i)),s},loop:function(){var i=this,s=arguments,c,g,y;if(s.length===0)return i._loop;if(s.length===1)if(typeof s[0]=="boolean")c=s[0],i._loop=c;else return y=i._soundById(parseInt(s[0],10)),y?y._loop:!1;else s.length===2&&(c=s[0],g=parseInt(s[1],10));for(var _=i._getSoundIds(g),f=0;f<_.length;f++)y=i._soundById(_[f]),y&&(y._loop=c,i._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=c,c&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,i.playing(_[f])&&(i.pause(_[f],!0),i.play(_[f],!0)))));return i},rate:function(){var i=this,s=arguments,c,g;if(s.length===0)g=i._sounds[0]._id;else if(s.length===1){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,s)}}),i;typeof g>"u"&&(i._rate=c),g=i._getSoundIds(g);for(var h=0;h<g.length;h++)if(f=i._soundById(g[h]),f){i.playing(g[h])&&(f._rateSeek=i.seek(g[h]),f._playStart=i._webAudio?n.ctx.currentTime:f._playStart),f._rate=c,i._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(c,n.ctx.currentTime):f._node&&(f._node.playbackRate=c);var v=i.seek(g[h]),w=(i._sprite[f._sprite][0]+i._sprite[f._sprite][1])/1e3-v,C=w*1e3/Math.abs(f._rate);(i._endTimers[g[h]]||!f._paused)&&(i._clearTimer(g[h]),i._endTimers[g[h]]=setTimeout(i._ended.bind(i,f),C)),i._emit("rate",f._id)}}else return f=i._soundById(g),f?f._rate:i._rate;return i},seek:function(){var i=this,s=arguments,c,g;if(s.length===0)i._sounds.length&&(g=i._sounds[0]._id);else if(s.length===1){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):i._sounds.length&&(g=i._sounds[0]._id,c=parseFloat(s[0]))}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof c=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,s)}}),i;var f=i._soundById(g);if(f)if(typeof c=="number"&&c>=0){var h=i.playing(g);h&&i.pause(g,!0),f._seek=c,f._ended=!1,i._clearTimer(g),!i._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=c);var v=function(){h&&i.play(g,!0),i._emit("seek",g)};if(h&&!i._webAudio){var w=function(){i._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(i._webAudio){var C=i.playing(g)?n.ctx.currentTime-f._playStart:0,T=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(T+C*Math.abs(f._rate))}else return f._node.currentTime;return i},playing:function(i){var s=this;if(typeof i=="number"){var c=s._soundById(i);return c?!c._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(i){var s=this,c=s._duration,g=s._soundById(i);return g&&(c=s._sprite[g._sprite][1]/1e3),c},state:function(){return this._state},unload:function(){for(var i=this,s=i._sounds,c=0;c<s.length;c++)s[c]._paused||i.stop(s[c]._id),i._webAudio||(i._clearSound(s[c]._node),s[c]._node.removeEventListener("error",s[c]._errorFn,!1),s[c]._node.removeEventListener(n._canPlayEvent,s[c]._loadFn,!1),s[c]._node.removeEventListener("ended",s[c]._endFn,!1),n._releaseHtml5Audio(s[c]._node)),delete s[c]._node,i._clearTimer(s[c]._id);var g=n._howls.indexOf(i);g>=0&&n._howls.splice(g,1);var y=!0;for(c=0;c<n._howls.length;c++)if(n._howls[c]._src===i._src||i._src.indexOf(n._howls[c]._src)>=0){y=!1;break}return a&&y&&delete a[i._src],n.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,s,c,g){var y=this,_=y["_on"+i];return typeof s=="function"&&_.push(g?{id:c,fn:s,once:g}:{id:c,fn:s}),y},off:function(i,s,c){var g=this,y=g["_on"+i],_=0;if(typeof s=="number"&&(c=s,s=null),s||c)for(_=0;_<y.length;_++){var f=c===y[_].id;if(s===y[_].fn&&f||!s&&f){y.splice(_,1);break}}else if(i)g["_on"+i]=[];else{var h=Object.keys(g);for(_=0;_<h.length;_++)h[_].indexOf("_on")===0&&Array.isArray(g[h[_]])&&(g[h[_]]=[])}return g},once:function(i,s,c){var g=this;return g.on(i,s,c,1),g},_emit:function(i,s,c){for(var g=this,y=g["_on"+i],_=y.length-1;_>=0;_--)(!y[_].id||y[_].id===s||i==="load")&&(setTimeout((function(f){f.call(this,s,c)}).bind(g,y[_].fn),0),y[_].once&&g.off(i,y[_].fn,y[_].id));return g._loadQueue(i),g},_loadQueue:function(i){var s=this;if(s._queue.length>0){var c=s._queue[0];c.event===i&&(s._queue.shift(),s._loadQueue()),i||c.action()}return s},_ended:function(i){var s=this,c=i._sprite;if(!s._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(s._ended.bind(s,i),100),s;var g=!!(i._loop||s._sprite[c][2]);if(s._emit("end",i._id),!s._webAudio&&g&&s.stop(i._id,!0).play(i._id),s._webAudio&&g){s._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=n.ctx.currentTime;var y=(i._stop-i._start)*1e3/Math.abs(i._rate);s._endTimers[i._id]=setTimeout(s._ended.bind(s,i),y)}return s._webAudio&&!g&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,s._clearTimer(i._id),s._cleanBuffer(i._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(i._id,!0),s},_clearTimer:function(i){var s=this;if(s._endTimers[i]){if(typeof s._endTimers[i]!="function")clearTimeout(s._endTimers[i]);else{var c=s._soundById(i);c&&c._node&&c._node.removeEventListener("ended",s._endTimers[i],!1)}delete s._endTimers[i]}return s},_soundById:function(i){for(var s=this,c=0;c<s._sounds.length;c++)if(i===s._sounds[c]._id)return s._sounds[c];return null},_inactiveSound:function(){var i=this;i._drain();for(var s=0;s<i._sounds.length;s++)if(i._sounds[s]._ended)return i._sounds[s].reset();return new l(i)},_drain:function(){var i=this,s=i._pool,c=0,g=0;if(!(i._sounds.length<s)){for(g=0;g<i._sounds.length;g++)i._sounds[g]._ended&&c++;for(g=i._sounds.length-1;g>=0;g--){if(c<=s)return;i._sounds[g]._ended&&(i._webAudio&&i._sounds[g]._node&&i._sounds[g]._node.disconnect(0),i._sounds.splice(g,1),c--)}}},_getSoundIds:function(i){var s=this;if(typeof i>"u"){for(var c=[],g=0;g<s._sounds.length;g++)c.push(s._sounds[g]._id);return c}else return[i]},_refreshBuffer:function(i){var s=this;return i._node.bufferSource=n.ctx.createBufferSource(),i._node.bufferSource.buffer=a[s._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,n.ctx.currentTime),s},_cleanBuffer:function(i){var s=this,c=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!i.bufferSource)return s;if(n._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),c))try{i.bufferSource.buffer=n._scratchBuffer}catch{}return i.bufferSource=null,s},_clearSound:function(i){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(i){this._parent=i,this.init()};l.prototype={init:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,s._sounds.push(i),i.create(),i},create:function(){var i=this,s=i._parent,c=n._muted||i._muted||i._parent._muted?0:i._volume;return s._webAudio?(i._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),i._node.gain.setValueAtTime(c,n.ctx.currentTime),i._node.paused=!0,i._node.connect(n.masterGain)):n.noAudio||(i._node=n._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(n._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=s._src,i._node.preload=s._preload===!0?"auto":s._preload,i._node.volume=c*n.volume(),i._node.load()),i},reset:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,s=i._parent;s._duration=Math.ceil(i._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),i._node.removeEventListener(n._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,s=i._parent;s._duration===1/0&&(s._duration=Math.ceil(i._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var a={},o=function(i){var s=i._src;if(a[s]){i._duration=a[s].duration,p(i);return}if(/^data:[^;]+;base64,/.test(s)){for(var c=atob(s.split(",")[1]),g=new Uint8Array(c.length),y=0;y<c.length;++y)g[y]=c.charCodeAt(y);d(g.buffer,i)}else{var _=new XMLHttpRequest;_.open(i._xhr.method,s,!0),_.withCredentials=i._xhr.withCredentials,_.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(f){_.setRequestHeader(f,i._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}d(_.response,i)},_.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete a[s],i.load())},u(_)}},u=function(i){try{i.send()}catch{i.onerror()}},d=function(i,s){var c=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(y){y&&s._sounds.length>0?(a[s._src]=y,p(s,y)):c()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(i).then(g).catch(c):n.ctx.decodeAudioData(i,g,c)},p=function(i,s){s&&!i._duration&&(i._duration=s.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),c=s?parseInt(s[1],10):null;if(i&&c&&c<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof ar<"u"?(ar.HowlerGlobal=t,ar.Howler=n,ar.Howl=r,ar.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var a=this;if(!a.ctx||!a.ctx.listener)return a;if(r=typeof r!="number"?a._pos[1]:r,l=typeof l!="number"?a._pos[2]:l,typeof n=="number")a._pos=[n,r,l],typeof a.ctx.listener.positionX<"u"?(a.ctx.listener.positionX.setTargetAtTime(a._pos[0],Howler.ctx.currentTime,.1),a.ctx.listener.positionY.setTargetAtTime(a._pos[1],Howler.ctx.currentTime,.1),a.ctx.listener.positionZ.setTargetAtTime(a._pos[2],Howler.ctx.currentTime,.1)):a.ctx.listener.setPosition(a._pos[0],a._pos[1],a._pos[2]);else return a._pos;return a},HowlerGlobal.prototype.orientation=function(n,r,l,a,o,u){var d=this;if(!d.ctx||!d.ctx.listener)return d;var p=d._orientation;if(r=typeof r!="number"?p[1]:r,l=typeof l!="number"?p[2]:l,a=typeof a!="number"?p[3]:a,o=typeof o!="number"?p[4]:o,u=typeof u!="number"?p[5]:u,typeof n=="number")d._orientation=[n,r,l,a,o,u],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(a,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(u,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(n,r,l,a,o,u);else return p;return d},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var a=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var o=l._getSoundIds(r),u=0;u<o.length;u++){var d=l._soundById(o[u]);if(d)if(typeof n=="number")d._stereo=n,d._pos=[n,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&t(d,a),a==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(n,0,0):d._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",d._id);else return d._stereo}return l},Howl.prototype.pos=function(n,r,l,a){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,l,a)}}),o;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof a>"u")if(typeof n=="number")o._pos=[n,r,l];else return o._pos;for(var u=o._getSoundIds(a),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._pos=[n,r,l],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setPosition(n,r,l)),o._emit("pos",p._id);else return p._pos}return o},Howl.prototype.orientation=function(n,r,l,a){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,l,a)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,l=typeof l!="number"?o._orientation[2]:l,typeof a>"u")if(typeof n=="number")o._orientation=[n,r,l];else return o._orientation;for(var u=o._getSoundIds(a),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._orientation=[n,r,l],p._node&&(p._panner||(p._pos||(p._pos=o._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setOrientation(n,r,l)),o._emit("orientation",p._id);else return p._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,a,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof a>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],a=parseInt(r[1],10));for(var u=n._getSoundIds(a),d=0;d<u.length;d++)if(o=n._soundById(u[d]),o){var p=o._pannerAttr;p={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:p.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:p.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:p.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:p.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:p.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:p.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=p.coneInnerAngle,x.coneOuterAngle=p.coneOuterAngle,x.coneOuterGain=p.coneOuterGain,x.distanceModel=p.distanceModel,x.maxDistance=p.maxDistance,x.refDistance=p.refDistance,x.rolloffFactor=p.rolloffFactor,x.panningModel=p.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(Et);const ml={"main-menu":{volume:.4,loop:!0,preload:!0},"character-select":{volume:.35,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.5,loop:!1,preload:!1},victory:{volume:.5,loop:!1,preload:!0},defeat:{volume:.4,loop:!1,preload:!0},"game-over":{volume:.35,loop:!1,preload:!0}},Ua={"card-play":{volume:.6,loop:!1},"card-shuffle":{volume:.5,loop:!1},"card-draw":{volume:.4,loop:!1},"card-flip":{volume:.5,loop:!1},challenge:{volume:.7,loop:!1},"challenge-success":{volume:.8,loop:!1},"challenge-fail":{volume:.6,loop:!1},"turn-start":{volume:.4,loop:!1},"turn-end":{volume:.3,loop:!1},"geass-activate":{volume:.8,loop:!1},"geass-hit":{volume:.9,loop:!1},"geass-miss":{volume:.5,loop:!1},"geass-immunity":{volume:.7,loop:!1},"button-click":{volume:.4,loop:!1},"button-hover":{volume:.2,loop:!1},"menu-open":{volume:.3,loop:!1},"menu-close":{volume:.3,loop:!1},"character-select":{volume:.5,loop:!1},"character-skill":{volume:.7,loop:!1},"damage-taken":{volume:.8,loop:!1},heal:{volume:.6,loop:!1},win:{volume:.8,loop:!1},lose:{volume:.6,loop:!1},"round-win":{volume:.7,loop:!1},"round-lose":{volume:.5,loop:!1}},Au={"main-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","character-select":"https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3","game-normal":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","game-intense":"https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3","geass-activate":"https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3",victory:"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3",defeat:"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","game-over":"https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3"},Nu={"card-play":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","card-draw":"https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3","card-flip":"https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3",challenge:"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","challenge-success":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","challenge-fail":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","turn-end":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","geass-immunity":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3","button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","button-hover":"https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3","menu-open":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3","menu-close":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3","character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","character-skill":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","damage-taken":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3",heal:"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3",win:"https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",lose:"https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3","round-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","round-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"},zm={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},fn=class fn{constructor(){ge(this,"bgmMap",new Map);ge(this,"sfxMap",new Map);ge(this,"currentBGM",null);ge(this,"masterVolume",1);ge(this,"bgmVolume",1);ge(this,"sfxVolume",1);ge(this,"voiceVolume",1);ge(this,"isMuted",!1);ge(this,"initialized",!1);ge(this,"currentVoice",null)}static getInstance(){return fn.instance||(fn.instance=new fn),fn.instance}init(){this.initialized||(this.preloadBGM(["main-menu","victory","defeat"]),this.preloadSFX(["button-click","card-play","challenge"]),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成"))}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=ml[n],l=new Et.Howl({src:[Au[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,l)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=Ua[n],l=new Et.Howl({src:[Nu[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,l)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const l=ml[t];r=new Et.Howl({src:[Au[t]],volume:0,loop:l.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const l=ml[t];r.fade(0,l.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=Ua[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new Et.Howl({src:[Nu[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=zm[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const l=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const a=new Et.Howl({src:[l],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=a,a.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),Et.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=ml[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=Ua[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,Et.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,Et.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};ge(fn,"instance");let Vi=fn;const _t=Vi.getInstance(),dn=e=>{_t&&_t.playBGM(e)},fe=e=>{_t&&_t.playSFX(e)},Lm=()=>{_t&&_t.stopBGM()};class Rm{constructor(){ge(this,"cards",[]);ge(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let l=0;l<6;l++){const a=t[l%4];this.cards.push({id:`${r}-${l}-${Math.random().toString(36).substr(2,9)}`,suit:a,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],l=[];for(let a=0;a<5;a++){const o=this.cards[a];o.owner="player",t.push(o)}for(let a=5;a<10;a++){const o=this.cards[a];o.owner="ai",n.push(o)}for(let a=10;a<15;a++){const o=this.cards[a];o.owner="ai2",r.push(o)}for(let a=15;a<20;a++){const o=this.cards[a];o.owner="ai3",l.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const l=this.cards.find(a=>a.id===r);l&&(l.owner="table",n.push(l))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(l=>l.owner===null).slice(0,t);for(const l of r)l.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const Om=1/3,Fm=1/2,Dm=1,Hm=.1,$m=.9,Bm=.5,Vm=.25,Gm=.15,Um=.2,Xm=.8,Eu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class Qm{getBaseHitChance(t){return t===0?Om:t===1?Fm:Dm}performGeass(t,n,r=null,l=0,a=0){let o=this.getBaseHitChance(a);if(o+=l,r==="cc"&&!n.ccReviveUsed&&Math.random()<o&&n.hp<=1&&Math.random()<Bm)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"&&Math.random()<Gm)return Math.random()<Vm?{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0,isDodge:!0}:{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0};if(a<2&&(o=Math.max(Hm,Math.min($m,o))),Math.random()<o){const x={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},i=Eu[Math.floor(Math.random()*Eu.length)];return{activated:!0,hit:!0,damage:1,newStats:x,funnyAction:i.description,message:`Geass命中！${i.emoji} ${i.description}`}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(Xm,Um*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const Xa={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},Qa={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},Wa={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},Ya={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},Wm={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:Xa,skillName:Xa.name,skillDescription:Xa.description,stats:{hp:3,difficulty:4}},Ym={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:Qa,skillName:Qa.name,skillDescription:Qa.description,stats:{hp:3,difficulty:2}},Km={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:Wa,skillName:Wa.name,skillDescription:Wa.description,stats:{hp:4,difficulty:2}},Jm={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:Ya,skillName:Ya.name,skillDescription:Ya.description,stats:{hp:3,difficulty:3}},Zm={lelouch:Wm,cc:Ym,suzaku:Km,kallen:Jm};function ga(e){return Zm[e]}function hl(e){const t=ga(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Dn(e){const t=ga(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function Tu(e){if(!Dn(e))return e;const t=ga(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function qm(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function eh(e){const t=ga(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function ju(e){return e.characterId==="kallen"&&Dn(e)?4:3}class th{constructor(){ge(this,"cardSystem");ge(this,"geassSystem");ge(this,"state");this.cardSystem=new Rm,this.geassSystem=new Qm,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:l,ai2Cards:a,ai3Cards:o}=this.cardSystem.dealCards(),u=this.cardSystem.setLiarCard(),d=Math.floor(Math.random()*4),p=n||["cc","suzaku","kallen"],x=new Map;x.set("player",hl(t)),x.set("ai",hl(p[0])),x.set("ai2",hl(p[1])),x.set("ai3",hl(p[2]));const i=c=>({lelouch:"鲁鲁修",cc:"C.C.",suzaku:"朱雀",kallen:"卡莲"})[c]||c,s=c=>c==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:d===0?"player_turn":"ai_turn",liarCard:u,playerCharacter:t,currentPlayerIndex:d,playerHand:r,aiPlayers:[{id:"ai",name:i(p[0]),character:p[0],hand:l,stats:{hp:s(p[0]),maxHp:s(p[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:i(p[1]),character:p[1],hand:a,stats:{hp:s(p[1]),maxHp:s(p[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:i(p[2]),character:p[2],hand:o,stats:{hp:s(p[2]),maxHp:s(p[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:s(t),maxHp:s(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},characterStates:x},this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const l=qm(r);this.state.characterStates.set(n,l)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const u of t){const d=this.state.playerHand.find(p=>p.id===u);if(!d)return!1;r.push(d)}const l=this.state.characterStates.get("player"),a=l?ju(l):1;if(t.length>a)return!1;this.state.playerHand=this.state.playerHand.filter(u=>!t.includes(u.id));const o=r.some(u=>u.rank!==n&&!u.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){this.state.lastAction=`${t==="player"?"玩家":t}手牌耗尽，获得胜利！`,this.state.winner=t==="player"?"player":"ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,l=n.playerId;this.state.phase="geass";const a=r?l:t,o=t==="player"?"玩家":t==="ai"?"C.C.":t==="ai2"?"朱雀":"卡莲",u=l==="player"?"玩家":l==="ai"?"C.C.":l==="ai2"?"朱雀":"卡莲";return this.state.lastAction=`${o}向${u}发起质疑！`,this.executeGeass(a,t),{success:!0,isBluff:r,targetId:l}}executeGeass(t,n){const r=this.state.characterStates.get(t);let l;if(t==="player")l=this.state.playerStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);if(!u)return;l=u.stats}let a=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(a=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,l,(r==null?void 0:r.characterId)||null,a,this.state.turnState.geassConsecutiveMisses);if(this.state.geassResult=o,!o.hit&&o.isCounter&&n){if(n==="player")this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},this.state.playerStats.hp<=0&&this.checkGameOver();else{const d=this.state.aiPlayers.find(p=>p.id===n);d&&(d.stats={...d.stats,hp:Math.max(0,d.stats.hp-1)},d.stats.hp<=0&&(d.isActive=!1,this.checkGameOver()))}this.state.lastAction=`${t==="player"?"玩家":t}发动枢木剑术反击！${n==="player"?"玩家":n}受到反弹伤害！`;return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}if(o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0),o.newStats.hp<=0){if(t!=="player"){const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!Dn(n))return!1;const r=Tu(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const l=["Q","K","A"],o=(l.indexOf(this.state.liarCard)+1)%l.length;this.state.liarCard=l[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const l=t==="player"?"玩家":t;this.state.lastAction=`${l}发动了${Me(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?Dn(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:l,ai3Cards:a}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let u;if(t!==void 0)u=this.findNextActivePlayer(t);else{const d=this.getActivePlayerIndices();u=d[Math.floor(Math.random()*d.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=l,this.state.aiPlayers[2].hand=a,this.state.liarCard=o,this.state.phase=u===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=u,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:this.state.turnState.geassConsecutiveMisses},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((d,p)=>{this.state.characterStates.set(p,eh(d))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=this.state.aiPlayers.find(a=>a.id==="ai3");n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=this.state.aiPlayers.find(a=>a.id==="ai2");r&&r.isActive&&r.stats.hp>0&&t.push(2);const l=this.state.aiPlayers.find(a=>a.id==="ai");return l&&l.isActive&&l.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const l=(t+r)%4;if(n.includes(l))return l}return n[0]}getState(){return JSON.parse(JSON.stringify(this.state))}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(l=>l.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const l=this.state.characterStates.get("player"),a=l?this.getMaxPlayCount(l):1;this.state.playerSelectedCards.length<a&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}getMaxPlayCount(t){return t.characterId==="kallen"?4:3}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t){if(this.state.phase!=="ai_turn")return this.getState();const n=this.state.aiPlayers.find(o=>o.id===t);if(!n||n.hand.length===0)return this.getState();const r=Math.min(n.hand.length,Math.floor(Math.random()*2)+1),l=n.hand.slice(0,r).map(o=>o.id),a=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,l,a),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const l=this.state.aiPlayers.find(p=>p.id===t);if(!l)return!1;const a=[];for(const p of n){const x=l.hand.find(i=>i.id===p);if(!x)return!1;a.push(x)}const o=this.state.characterStates.get(t),u=o?ju(o):1;if(n.length>u)return!1;l.hand=l.hand.filter(p=>!n.includes(p.id));const d=a.some(p=>p.rank!==r&&!p.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:a,playerId:t,isBluff:d},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...a],this.state.lastAction=`${l.name}出了${n.length}张牌，声称是${r}`,l.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?Dn(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!Dn(n))throw new Error("技能冷却中或已使用");const r=Tu(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(t=!1){var u,d;if(this.state.turnState.playedCards&&this.state.turnState.tableCards.push(...this.state.turnState.playedCards.actualCards),t){const p=this.state.turnState.lastPlayerId||((u=this.state.turnState.playedCards)==null?void 0:u.playerId);return this.state.turnState.playedCards=null,this.state.lastAction="无人质疑，回合继续",p==="player"?this.state.phase="player_turn":this.state.phase="ai_turn",console.log(`[endChallengePhase] 无人质疑，${p==="player"?"玩家":p==="ai"?"C.C.":p==="ai2"?"朱雀":p==="ai3"?"卡莲":p}继续出牌`),this.getState()}const n=(d=this.state.turnState.playedCards)==null?void 0:d.playerId;let l=((n==="player"?0:n==="ai3"?1:n==="ai2"?2:n==="ai"?3:0)+1)%4,a=0;for(;a<4;){if(l===0){if(this.state.playerStats.hp>0)break}else{const p=l===1?2:l===2?1:0,x=this.state.aiPlayers[p];if(x&&x.isActive&&x.stats.hp>0)break}l=(l+1)%4,a++}return this.state.currentPlayerIndex=l,this.state.phase=l===0?"player_turn":"ai_turn",this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,console.log(`[endChallengePhase] 出牌者: ${n}, 下一个玩家: ${l===0?"玩家":l===1?"AI3(卡莲)":l===2?"AI2(朱雀)":"AI1(C.C.)"}(索引${l})`),this.state.lastAction="质疑阶段结束，回合继续",this.getState()}}const nh="code-geass-game",Pu={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.removeItem(nh)}catch(t){console.error("Failed to clear localStorage:",t)}}},Iu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],rh=e=>e==="player"?0:e==="ai"?3:e==="ai2"?2:e==="ai3"?1:0,lh=e=>e===0?"player":e===1?"ai3":e===2?"ai2":e===3?"ai":"player",ah=(e,t)=>{for(let n=0;n<4;n++){const r=(e+n)%4,l=lh(r);if(l==="player"){if(t.playerStats.hp>0)return r}else{const a=t.aiPlayers.find(o=>o.id===l);if(a&&a.isActive&&a.stats.hp>0)return r}}return e},ih=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let l=t??null;if(!l&&r)if(r==="player")l=Me(n??void 0);else{const u=e.aiPlayers.find(d=>d.id===r);l=(u==null?void 0:u.name)??null}if(!l)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(l===Me(n??void 0))return{loserId:"player",actualLoserName:l};const a=e.aiPlayers.find(u=>u.name===l);return a?{loserId:a.id,actualLoserName:l}:(console.error(`[determineLoserId] 找不到AI: ${l}`),{loserId:null,actualLoserName:l})},oh=(e,t,n,r)=>{fe("geass-hit");const l=Iu[Math.floor(Math.random()*Iu.length)];r(l),fe(l.soundType),n(`${t}受到Geass！`),n(`突然${l.description}`),n(`Geass命中！${t}HP-1`)},sh=(e,t,n)=>{fe("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},uh=(e,t)=>{setTimeout(()=>{dn(e==="player"?"victory":"defeat"),t("result")},2e3)},ch=(e,t,n,r,l,a,o,u,d)=>{var y;let x=(rh(t)+1)%4;x=ah(x,n);const i=e.resetRound(x);a(i),o([]);const s=i.currentPlayerIndex===0,c={1:2,2:1,3:0},g=s?Me(r??void 0):(y=i.aiPlayers[c[i.currentPlayerIndex]])==null?void 0:y.name;l(`【第${i.turnState.turnNumber}回合】骗子牌是${i.liarCard}`),l(`${g}先手！`),u(!1),s||setTimeout(()=>{var _;(_=d.current)==null||_.call(d)},1500)},dh=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:l,setSelectedCards:a,setIsProcessing:o,setCurrentScreen:u,aiTurnRef:d})=>E.useCallback((p,x,i,s)=>{if(r(p),p.geassResult){const g=s||(i||"对手");p.geassResult.hit?oh(p.geassResult,g,n,l):sh(p.geassResult,g,n)}if(p.phase==="game_over"){uh(p.winner,u);return}setTimeout(()=>{l(null);const c=e.current;if(!c)return;const g=c.getState(),{loserId:y,actualLoserName:_}=ih(g,s,t);if(!y||!_){o(!1);return}ch(c,y,g,t,n,r,a,o,d)},2500)},[e,t,n,r,l,a,o,u,d]),fh=()=>{const[e,t]=E.useState("main-menu"),[n,r]=E.useState(null),[l,a]=E.useState(1),[o,u]=E.useState(["cc","suzaku","kallen"]),[d,p]=E.useState({}),x=E.useRef(null),[i,s]=E.useState(null),[c,g]=E.useState([]),[y,_]=E.useState(null),[f,h]=E.useState([]),[v,w]=E.useState(!1),[C,T]=E.useState({isThinking:!1,aiId:null}),A=E.useRef(null);E.useEffect(()=>((async()=>{try{await _t.preload(),console.log("音效预加载完成");const I=Pu.load("gameSettings");I&&(_t.setBGMVolume(I.musicVolume??.5),_t.setSFXVolume(I.soundVolume??.7)),dn("main-menu")}catch(I){console.warn("初始化失败:",I)}})(),()=>{Lm()}),[]),E.useEffect(()=>{const O=_t.getStatus(),I={soundEnabled:O.enabled,musicEnabled:!0,soundVolume:O.sfxVolume,musicVolume:O.bgmVolume};Pu.save("gameSettings",I)},[]);const k=E.useCallback(O=>{g(I=>[...I,O])},[]),M=dh({gameEngineRef:x,selectedCharacter:n,addLog:k,setGameState:s,setCurrentFunnyAction:_,setSelectedCards:h,setIsProcessing:w,setCurrentScreen:O=>t(O),aiTurnRef:A}),L=E.useCallback(async(O,I)=>{var je,Ge,Pe,Ht;console.log("[enterChallengePhase] 进入质疑阶段");const D=(je=I.turnState.playedCards)==null?void 0:je.playerId;if(!D){console.error("[enterChallengePhase] 没有出牌记录");return}const Q=(ce=>ce==="player"?0:ce==="ai"?3:ce==="ai2"?2:ce==="ai3"?1:0)(D);let U=(Q+1)%4,ee=0;for(;ee<3;){if(U===Q){U=(U+1)%4;continue}if(U===0){console.log("[enterChallengePhase] 轮到玩家质疑，等待玩家决策");const _e=O.enterChallengePhase();s(_e),w(!1),k("等待玩家决策...");return}const ce=U===1?2:U===2?1:0,W=I.aiPlayers[ce];if(!W||!W.isActive||W.stats.hp<=0){console.log("[enterChallengePhase] AI已淘汰，跳过:",W==null?void 0:W.name),U=(U+1)%4,ee++;continue}const bn=Math.random()<.3;if(console.log("[enterChallengePhase] AI决策:",{aiName:W.name,shouldChallenge:bn}),bn){fe("challenge");const _e=D==="player"?Me(n):((Ge=I.aiPlayers.find(at=>at.id===D))==null?void 0:Ge.name)||D;k(`${W.name}向${_e}发起质疑！`);const mt={...I,lastAction:`${W.name}向${_e}发起质疑！`};s(mt),await new Promise(at=>setTimeout(at,Nt.CHALLENGE_DISPLAY));const ht=O.aiChallengeDecision(W.id),bt=I.turnState.playedCards,At=bt?bt.actualCards.some(at=>at.rank!==bt.claimedRank&&!at.isJoker):!1;k(At?`质疑成功！${_e}在撒谎！`:`质疑失败！${_e}没有撒谎！`);const $t=At?D:W.id,lt=$t==="player"?Me(n):((Pe=ht.aiPlayers.find(at=>at.id===$t))==null?void 0:Pe.name)||$t;s(ht),M(ht,W.name,_e,lt);return}else{k(`${W.name}选择不质疑`);const _e={...O.getState(),lastAction:`${W.name}选择不质疑`};s(_e),await new Promise(mt=>setTimeout(mt,Nt.NO_CHALLENGE_DISPLAY))}U=(U+1)%4,ee++}console.log("[enterChallengePhase] 所有人都未质疑，原出牌者继续"),k("无人质疑，回合继续");const K=O.endChallengePhase(!0);s(K);const B=K.turnState.lastPlayerId||((Ht=K.turnState.playedCards)==null?void 0:Ht.playerId);B==="player"||!B?(w(!1),k("轮到玩家出牌")):setTimeout(()=>{var ce;(ce=A.current)==null||ce.call(A)},Nt.TURN_SWITCH)},[k,n,M]),X=E.useCallback(()=>{if(console.log("[handleAITurn] 开始执行"),!x.current){console.log("[handleAITurn] 游戏引擎不存在，返回");return}const O=x.current,I=O.getState();if(console.log("[handleAITurn] 当前状态:",{phase:I.phase,currentPlayerIndex:I.currentPlayerIndex}),I.phase==="player_turn"||I.phase==="game_over"){console.log("[handleAITurn] 不是AI回合，跳过");return}const G={1:2,2:1,3:0}[I.currentPlayerIndex];if(G===void 0||G<0||G>=I.aiPlayers.length){console.log("[handleAITurn] AI索引无效:",I.currentPlayerIndex,"->",G);return}const Q=I.aiPlayers[G];if(!Q){console.log("[handleAITurn] AI不存在");return}const U=Q.id;if(!Q.isActive||Q.stats.hp<=0){if(console.log("[handleAITurn] AI已淘汰，跳过:",Q.name),I.aiPlayers.filter(B=>B.isActive&&B.stats.hp>0).length===0&&I.playerStats.hp>0){console.log("[handleAITurn] 只剩玩家存活，玩家获胜"),I.winner="player",I.phase="game_over",s({...I}),k("游戏结束！玩家获胜！"),w(!1);return}const K=(I.currentPlayerIndex+1)%4;I.currentPlayerIndex=K,s({...I}),K!==0?setTimeout(()=>{var B;return(B=A.current)==null?void 0:B.call(A)},Nt.TURN_SWITCH):I.playerStats.hp<=0&&setTimeout(()=>{var B;return(B=A.current)==null?void 0:B.call(A)},Nt.TURN_SWITCH);return}w(!0),fe("turn-start"),k(`${Q.name} 的回合...`),T({isThinking:!0,aiId:U}),setTimeout(()=>{var ee;try{console.log("[handleAITurn] AI开始出牌:",Q.name),T({isThinking:!1,aiId:null});const K=O.aiPlayCards(U);console.log("[handleAITurn] AI出牌完成, 新状态:",{phase:K.phase,playedBy:(ee=K.turnState.playedCards)==null?void 0:ee.playerId}),s(K);const B=K.turnState.playedCards;if(B){const xe=B.cardIds.length,je=B.claimedRank;k(`${Q.name}出了${xe}张牌，声称是${je}`)}setTimeout(()=>{console.log("[handleAITurn] 进入质疑阶段"),L(O,K)},Nt.PLAY_TO_CHALLENGE)}catch(K){console.error("AI出牌错误:",K),w(!1),T({isThinking:!1,aiId:null})}},Nt.THINKING)},[k,L]);E.useEffect(()=>{A.current=X},[X]);const Ve=E.useCallback(()=>{fe("button-click"),t("character-select")},[]),Ce=E.useCallback(()=>{fe("button-click"),t("settings")},[]),Te=E.useCallback(()=>{fe("button-click"),t("help")},[]),pt=E.useCallback((O,I)=>{fe("character-select"),r(O),a(I||Math.floor(Math.random()*4)+1)},[]),Dt=E.useCallback(()=>{var B;if(!n)return;fe("button-click");const D=["lelouch","cc","suzaku","kallen"].filter(xe=>xe!==n).sort(()=>Math.random()-.5);u(D);const G={};D.forEach(xe=>{G[xe]=Math.floor(Math.random()*4)+1}),p(G),x.current=new th;const Q=x.current.initializeGame(n,D);s(Q),h([]);const U=Q.currentPlayerIndex===0,ee={1:2,2:1,3:0},K=U?Me(n):(B=Q.aiPlayers[ee[Q.currentPlayerIndex]])==null?void 0:B.name;g(["游戏开始！",`【第1回合】骗子牌是${Q.liarCard}`,`${K}先手！`]),t("game-table"),dn("game-normal"),U||setTimeout(()=>{X()},1500)},[n,X]),St=E.useCallback(()=>{fe("button-click"),t("main-menu"),r(null)},[]),j=E.useCallback(()=>{fe("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),_(null),dn("main-menu")},[]),z=E.useCallback(O=>{if(!x.current||v)return;const I=x.current,D=I.getState();if(console.log("[handleToggleCardSelection] 当前阶段:",D.phase,"是否是玩家回合:",D.phase==="player_turn"),D.phase!=="player_turn"){console.log("[handleToggleCardSelection] 不是玩家回合，无法选择牌");return}I.toggleCardSelection(O);const G=I.getState();console.log("[handleToggleCardSelection] 选中状态更新:",G.playerSelectedCards),h(G.playerSelectedCards),fe("button-click")},[v]),R=E.useCallback(()=>{if(!x.current||f.length===0||v)return;w(!0),fe("card-play");const O=x.current;try{const I=O.playerPlayCards();s(I),h([]);const D=Me(n),G=I.turnState.playedCards;if(G){const Q=G.cardIds.length,U=G.claimedRank;k(`${D}出了${Q}张牌，声称是${U}`)}setTimeout(()=>{L(O,I)},Nt.PLAY_TO_CHALLENGE)}catch(I){console.error("出牌错误:",I),w(!1)}},[f,v,k,n,L]),V=E.useCallback(()=>{var je,Ge;if(!x.current||v)return;w(!0),fe("challenge");const O=x.current,I=O.getState(),D=I.turnState.playedCards,G=D==null?void 0:D.playerId,Q=Me(n),U=G==="player"?Q:((je=I.aiPlayers.find(Pe=>Pe.id===G))==null?void 0:je.name)||G;k(`${Q}向${U}发起质疑！`);const ee=O.playerChallengeDecision(!0),K=D?D.actualCards.some(Pe=>Pe.rank!==D.claimedRank&&!Pe.isJoker):!1;k(K?`质疑成功！${U}在撒谎！`:`质疑失败！${U}没有撒谎！`);const B=K?G:"player",xe=B==="player"?Q:((Ge=I.aiPlayers.find(Pe=>Pe.id===B))==null?void 0:Ge.name)||B;s(ee),M(ee,Q,U,xe)},[v,k,n,M]),ne=E.useCallback(()=>{var je,Ge,Pe,Ht;if(!x.current||v)return;fe("button-click");const O=x.current,I=O.getState(),D=(je=I.turnState.playedCards)==null?void 0:je.playerId,G=Me(n);k(`${G}选择不质疑`);const U=(ce=>ce==="player"?0:ce==="ai"?3:ce==="ai2"?2:ce==="ai3"?1:0)(D||"player");let ee=1,K=0;for(;K<3&&ee!==U;){const ce=ee===1?2:ee===2?1:0,W=I.aiPlayers[ce];if(!W||!W.isActive||W.stats.hp<=0){console.log("[handlePass] AI已淘汰，跳过:",W==null?void 0:W.name),ee=(ee+1)%4,K++;continue}if(Math.random()<.3){fe("challenge");const _e=D==="player"?G:((Ge=I.aiPlayers.find(lt=>lt.id===D))==null?void 0:Ge.name)||D;k(`${W.name}向${_e}发起质疑！`);const mt=O.aiChallengeDecision(W.id),ht=I.turnState.playedCards,bt=ht?ht.actualCards.some(lt=>lt.rank!==ht.claimedRank&&!lt.isJoker):!1;k(bt?`质疑成功！${_e}在撒谎！`:`质疑失败！${_e}没有撒谎！`);const At=bt?D:W.id,$t=At==="player"?G:((Pe=mt.aiPlayers.find(lt=>lt.id===At))==null?void 0:Pe.name)||At;s(mt),M(mt,W.name,_e,$t);return}else k(`${W.name}选择不质疑`);ee=(ee+1)%4,K++}k("无人质疑，回合继续");const B=O.endChallengePhase();s(B);const xe=B.currentPlayerIndex;if(xe===0){k(`【第${B.turnState.turnNumber}回合】骗子牌是${B.liarCard}`);const ce=xe===0?G:(Ht=I.aiPlayers[xe-1])==null?void 0:Ht.name;k(`${ce}先手！`),w(!1)}else setTimeout(()=>{X()},Nt.TURN_SWITCH)},[v,k,n,M,X]),Ct=E.useCallback(O=>{if(!x.current||n!=="lelouch")return;const I=x.current;if(!I.canPlayerUseSkill("player")){k("❌ 绝对命令使用次数已耗尽（每局限1次）");return}fe("geass-activate");const D=I.lelouchChangeLiarCard(O);s(D),k(`鲁鲁修发动绝对命令！骗子牌变为 ${O}`),k("⚠️ 绝对命令已使用，本局无法再次使用")},[n,k]),rt=E.useCallback(()=>{fe("button-click"),t("character-select"),r(null),s(null),g([]),h([]),_(null),dn("main-menu")},[]),N=E.useCallback(()=>{fe("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),_(null),dn("main-menu")},[]),ue=()=>{var O,I,D,G;switch(e){case"main-menu":return m.jsx(bu,{onStart:Ve,onSettings:Ce,onHelp:Te});case"character-select":return m.jsx(Tm,{characters:Gr,selectedId:n,selectedAvatar:l,onSelect:pt,onConfirm:Dt,onBack:St});case"game-table":return i?m.jsx(Pm,{gameState:i,selectedCards:f,selectedCharacter:n,selectedAvatar:l,aiCharacters:o,aiAvatars:d,onToggleCardSelection:z,onConfirmPlay:R,onPass:ne,onChallenge:V,onBackToMenu:j,onLelouchSkill:Ct,gameLog:c,funnyAction:y,isProcessing:v,canUseSkill:((O=x.current)==null?void 0:O.canPlayerUseSkill("player"))??!0,aiThinkingState:C}):null;case"result":{const Q=(i==null?void 0:i.winner)==="player",U=((I=i==null?void 0:i.playerStats)==null?void 0:I.geassSuccessCount)||0,ee=((D=i==null?void 0:i.aiPlayers)==null?void 0:D.reduce((B,xe)=>{var je;return B+(((je=xe.stats)==null?void 0:je.geassSuccessCount)||0)},0))||0,K=((G=i==null?void 0:i.turnState)==null?void 0:G.turnNumber)||0;return m.jsx(Im,{isWin:Q,playerScore:U,opponentScore:ee,turnNumber:K,onRestart:rt,onMainMenu:N})}case"settings":return Oe();case"help":return nr();default:return m.jsx(bu,{onStart:Ve,onSettings:Ce,onHelp:Te})}},Oe=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"设置"}),m.jsxs("div",{className:"cg-settings-content",children:[m.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),m.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),nr=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"游戏帮助"}),m.jsxs("div",{className:"cg-help-content",children:[m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🎮 游戏规则"}),m.jsxs("ul",{children:[m.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),m.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),m.jsxs("li",{children:[m.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),m.jsx("li",{children:"质疑后翻牌验证："}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),m.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),m.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"👤 角色技能详解"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),m.jsx("br",{}),m.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),m.jsx("br",{}),m.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),m.jsx("br",{}),m.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),m.jsx("br",{}),m.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🃏 特殊牌"}),m.jsx("ul",{children:m.jsxs("li",{children:[m.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return m.jsxs("div",{className:"cg-app",children:[ue(),m.jsx("style",{children:`
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
      `})]})},ph=Ka.createRoot(document.getElementById("root"));ph.render(m.jsx(pf.StrictMode,{children:m.jsx(fh,{})}));
//# sourceMappingURL=index-B8cLFmvr.js.map
