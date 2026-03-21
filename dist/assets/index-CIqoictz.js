var _f=Object.defineProperty;var wf=(e,t,n)=>t in e?_f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var K=(e,t,n)=>wf(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qu={exports:{}},dl={},ec={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),Sf=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),Tf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),If=Symbol.for("react.memo"),jf=Symbol.for("react.lazy"),Ts=Symbol.iterator;function Mf(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nc=Object.assign,rc={};function tr(e,t,n){this.props=e,this.context=t,this.refs=rc,this.updater=n||tc}tr.prototype.isReactComponent={};tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ac(){}ac.prototype=tr.prototype;function so(e,t,n){this.props=e,this.context=t,this.refs=rc,this.updater=n||tc}var uo=so.prototype=new ac;uo.constructor=so;nc(uo,tr.prototype);uo.isPureReactComponent=!0;var bs=Array.isArray,lc=Object.prototype.hasOwnProperty,co={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)lc.call(t,r)&&!ic.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)a[r]===void 0&&(a[r]=c[r]);return{$$typeof:Kr,type:e,key:l,ref:o,props:a,_owner:co.current}}function zf(e,t){return{$$typeof:Kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr}function Rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Es=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rf(""+e.key):t.toString(36)}function Sa(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kr:case Sf:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Ml(o,0):r,bs(a)?(n="",e!=null&&(n=e.replace(Es,"$&/")+"/"),Sa(a,t,n,"",function(p){return p})):a!=null&&(fo(a)&&(a=zf(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Es,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",bs(e))for(var c=0;c<e.length;c++){l=e[c];var u=r+Ml(l,c);o+=Sa(l,t,n,u,a)}else if(u=Mf(e),typeof u=="function")for(e=u.call(e),c=0;!(l=e.next()).done;)l=l.value,u=r+Ml(l,c++),o+=Sa(l,t,n,u,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ra(e,t,n){if(e==null)return e;var r=[],a=0;return Sa(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Lf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Ca={transition:null},Of={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:co};function sc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ra,forEach:function(e,t,n){ra(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ra(e,function(){t++}),t},toArray:function(e){return ra(e,function(t){return t})||[]},only:function(e){if(!fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=tr;B.Fragment=Cf;B.Profiler=Nf;B.PureComponent=so;B.StrictMode=Af;B.Suspense=Pf;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Of;B.act=sc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nc({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=co.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)lc.call(t,u)&&!ic.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var p=0;p<u;p++)c[p]=arguments[p+2];r.children=c}return{$$typeof:Kr,type:e.type,key:a,ref:l,props:r,_owner:o}};B.createContext=function(e){return e={$$typeof:bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tf,_context:e},e.Consumer=e};B.createElement=oc;B.createFactory=function(e){var t=oc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Ef,render:e}};B.isValidElement=fo;B.lazy=function(e){return{$$typeof:jf,_payload:{_status:-1,_result:e},_init:Lf}};B.memo=function(e,t){return{$$typeof:If,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ca.transition;Ca.transition={};try{e()}finally{Ca.transition=t}};B.unstable_act=sc;B.useCallback=function(e,t){return Ee.current.useCallback(e,t)};B.useContext=function(e){return Ee.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ee.current.useEffect(e,t)};B.useId=function(){return Ee.current.useId()};B.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ee.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};B.useRef=function(e){return Ee.current.useRef(e)};B.useState=function(e){return Ee.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ee.current.useTransition()};B.version="18.3.1";ec.exports=B;var A=ec.exports;const Df=kf(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=A,Bf=Symbol.for("react.element"),$f=Symbol.for("react.fragment"),Hf=Object.prototype.hasOwnProperty,Vf=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gf={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Hf.call(t,r)&&!Gf.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Bf,type:e,key:l,ref:o,props:a,_owner:Vf.current}}dl.Fragment=$f;dl.jsx=uc;dl.jsxs=uc;qu.exports=dl;var h=qu.exports,pi={},cc={exports:{}},Ge={},dc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,R){var k=b.length;b.push(R);e:for(;0<k;){var $=k-1>>>1,Q=b[$];if(0<a(Q,R))b[$]=R,b[k]=Q,k=$;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var R=b[0],k=b.pop();if(k!==R){b[0]=k;e:for(var $=0,Q=b.length,ft=Q>>>1;$<ft;){var Ne=2*($+1)-1,nn=b[Ne],De=Ne+1,Mt=b[De];if(0>a(nn,k))De<Q&&0>a(Mt,nn)?(b[$]=Mt,b[De]=k,$=De):(b[$]=nn,b[Ne]=k,$=Ne);else if(De<Q&&0>a(Mt,k))b[$]=Mt,b[De]=k,$=De;else break e}}return R}function a(b,R){var k=b.sortIndex-R.sortIndex;return k!==0?k:b.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var u=[],p=[],x=1,i=null,s=3,d=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var R=n(p);R!==null;){if(R.callback===null)r(p);else if(R.startTime<=b)r(p),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(p)}}function w(b){if(v=!1,y(b),!g)if(n(u)!==null)g=!0,Qe(S);else{var R=n(p);R!==null&&Oe(w,R.startTime-b)}}function S(b,R){g=!1,v&&(v=!1,f(P),P=-1),d=!0;var k=s;try{for(y(R),i=n(u);i!==null&&(!(i.expirationTime>R)||b&&!V());){var $=i.callback;if(typeof $=="function"){i.callback=null,s=i.priorityLevel;var Q=$(i.expirationTime<=R);R=e.unstable_now(),typeof Q=="function"?i.callback=Q:i===n(u)&&r(u),y(R)}else r(u);i=n(u)}if(i!==null)var ft=!0;else{var Ne=n(p);Ne!==null&&Oe(w,Ne.startTime-R),ft=!1}return ft}finally{i=null,s=k,d=!1}}var N=!1,T=null,P=-1,M=5,L=-1;function V(){return!(e.unstable_now()-L<M)}function F(){if(T!==null){var b=e.unstable_now();L=b;var R=!0;try{R=T(!0,b)}finally{R?le():(N=!1,T=null)}}else N=!1}var le;if(typeof m=="function")le=function(){m(F)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Xe=de.port2;de.port1.onmessage=F,le=function(){Xe.postMessage(null)}}else le=function(){_(F,0)};function Qe(b){T=b,N||(N=!0,le())}function Oe(b,R){P=_(function(){b(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){g||d||(g=!0,Qe(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(b){switch(s){case 1:case 2:case 3:var R=3;break;default:R=s}var k=s;s=R;try{return b()}finally{s=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,R){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var k=s;s=b;try{return R()}finally{s=k}},e.unstable_scheduleCallback=function(b,R,k){var $=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?$+k:$):k=$,b){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=k+Q,b={id:x++,callback:R,priorityLevel:b,startTime:k,expirationTime:Q,sortIndex:-1},k>$?(b.sortIndex=k,t(p,b),n(u)===null&&b===n(p)&&(v?(f(P),P=-1):v=!0,Oe(w,k-$))):(b.sortIndex=Q,t(u,b),g||d||(g=!0,Qe(S))),b},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(b){var R=s;return function(){var k=s;s=R;try{return b.apply(this,arguments)}finally{s=k}}}})(fc);dc.exports=fc;var Uf=dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=A,Ve=Uf;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,jr={};function _n(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(jr[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,Qf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},Is={};function Yf(e){return mi.call(Is,e)?!0:mi.call(Ps,e)?!1:Qf.test(e)?Is[e]=!0:(Ps[e]=!0,!1)}function Wf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kf(e,t,n,r){if(t===null||typeof t>"u"||Wf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var po=/[\-:]([a-z])/g;function mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(po,mo);_e[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(po,mo);_e[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(po,mo);_e[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ho(e,t,n,r){var a=_e.hasOwnProperty(t)?_e[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kf(t,n,a,r)&&(n=null),r||a===null?Yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),bn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),yo=Symbol.for("react.forward_ref"),gi=Symbol.for("react.suspense"),yi=Symbol.for("react.suspense_list"),vo=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),gc=Symbol.for("react.offscreen"),js=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=js&&e[js]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,zl;function yr(e){if(zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zl=t&&t[1]||""}return`
`+zl+e}var Rl=!1;function Ll(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,c=l.length-1;1<=o&&0<=c&&a[o]!==l[c];)c--;for(;1<=o&&0<=c;o--,c--)if(a[o]!==l[c]){if(o!==1||c!==1)do if(o--,c--,0>c||a[o]!==l[c]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=c);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yr(e):""}function Zf(e){switch(e.tag){case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function vi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case bn:return"Portal";case hi:return"Profiler";case go:return"StrictMode";case gi:return"Suspense";case yi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hc:return(e.displayName||"Context")+".Consumer";case mc:return(e._context.displayName||"Context")+".Provider";case yo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vo:return t=e.displayName||null,t!==null?t:vi(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return vi(e(t))}catch{}}return null}function Jf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vi(t);case 8:return t===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qf(e){var t=yc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function la(e){e._valueTracker||(e._valueTracker=qf(e))}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function La(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ms(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xc(e,t){t=t.checked,t!=null&&ho(e,"checked",t,!1)}function _i(e,t){xc(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||La(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(vr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function _c(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ls(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ia,kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ia.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){ep.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Sc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Cc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Sc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var tp=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ci(e,t){if(t){if(tp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ti=null,Hn=null,Vn=null;function Os(e){if(e=qr(e)){if(typeof Ti!="function")throw Error(C(280));var t=e.stateNode;t&&(t=gl(t),Ti(e.stateNode,e.type,t))}}function Ac(e){Hn?Vn?Vn.push(e):Vn=[e]:Hn=e}function Nc(){if(Hn){var e=Hn,t=Vn;if(Vn=Hn=null,Os(e),t)for(e=0;e<t.length;e++)Os(t[e])}}function Tc(e,t){return e(t)}function bc(){}var Ol=!1;function Ec(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Tc(e,t,n)}finally{Ol=!1,(Hn!==null||Vn!==null)&&(bc(),Nc())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var bi=!1;if(bt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){bi=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{bi=!1}function np(e,t,n,r,a,l,o,c,u){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var Sr=!1,Oa=null,Da=!1,Ei=null,rp={onError:function(e){Sr=!0,Oa=e}};function ap(e,t,n,r,a,l,o,c,u){Sr=!1,Oa=null,np.apply(rp,arguments)}function lp(e,t,n,r,a,l,o,c,u){if(ap.apply(this,arguments),Sr){if(Sr){var p=Oa;Sr=!1,Oa=null}else throw Error(C(198));Da||(Da=!0,Ei=p)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ds(e){if(wn(e)!==e)throw Error(C(188))}function ip(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Ds(a),e;if(l===r)return Ds(a),t;l=l.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,c=a.child;c;){if(c===n){o=!0,n=a,r=l;break}if(c===r){o=!0,r=a,n=l;break}c=c.sibling}if(!o){for(c=l.child;c;){if(c===n){o=!0,n=l,r=a;break}if(c===r){o=!0,r=l,n=a;break}c=c.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Ic(e){return e=ip(e),e!==null?jc(e):null}function jc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jc(e);if(t!==null)return t;e=e.sibling}return null}var Mc=Ve.unstable_scheduleCallback,Fs=Ve.unstable_cancelCallback,op=Ve.unstable_shouldYield,sp=Ve.unstable_requestPaint,ue=Ve.unstable_now,up=Ve.unstable_getCurrentPriorityLevel,_o=Ve.unstable_ImmediatePriority,zc=Ve.unstable_UserBlockingPriority,Fa=Ve.unstable_NormalPriority,cp=Ve.unstable_LowPriority,Rc=Ve.unstable_IdlePriority,fl=null,yt=null;function dp(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(fl,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:mp,fp=Math.log,pp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(fp(e)/pp|0)|0}var oa=64,sa=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~a;c!==0?r=xr(c):(l&=o,l!==0&&(r=xr(l)))}else o=n&~a,o!==0?r=xr(o):l!==0&&(r=xr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),a=1<<n,r|=e[n],t&=~a;return r}function hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ut(l),c=1<<o,u=a[o];u===-1?(!(c&n)||c&r)&&(a[o]=hp(c,t)):u<=t&&(e.expiredLanes|=c),l&=~c}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lc(){var e=oa;return oa<<=1,!(oa&4194240)&&(oa=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ut(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function wo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var X=0;function Oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dc,ko,Fc,Bc,$c,Ii=!1,ua=[],Vt=null,Gt=null,Ut=null,Rr=new Map,Lr=new Map,Dt=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bs(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function cr(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=qr(t),t!==null&&ko(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function xp(e,t,n,r,a){switch(t){case"focusin":return Vt=cr(Vt,e,t,n,r,a),!0;case"dragenter":return Gt=cr(Gt,e,t,n,r,a),!0;case"mouseover":return Ut=cr(Ut,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Rr.set(l,cr(Rr.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Lr.set(l,cr(Lr.get(l)||null,e,t,n,r,a)),!0}return!1}function Hc(e){var t=cn(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pc(n),t!==null){e.blockedOn=t,$c(e.priority,function(){Fc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Aa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ni=r,n.target.dispatchEvent(r),Ni=null}else return t=qr(n),t!==null&&ko(t),e.blockedOn=n,!1;t.shift()}return!0}function $s(e,t,n){Aa(e)&&n.delete(t)}function _p(){Ii=!1,Vt!==null&&Aa(Vt)&&(Vt=null),Gt!==null&&Aa(Gt)&&(Gt=null),Ut!==null&&Aa(Ut)&&(Ut=null),Rr.forEach($s),Lr.forEach($s)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ii||(Ii=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,_p)))}function Or(e){function t(a){return dr(a,e)}if(0<ua.length){dr(ua[0],e);for(var n=1;n<ua.length;n++){var r=ua[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&dr(Vt,e),Gt!==null&&dr(Gt,e),Ut!==null&&dr(Ut,e),Rr.forEach(t),Lr.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Hc(n),n.blockedOn===null&&Dt.shift()}var Gn=jt.ReactCurrentBatchConfig,$a=!0;function wp(e,t,n,r){var a=X,l=Gn.transition;Gn.transition=null;try{X=1,So(e,t,n,r)}finally{X=a,Gn.transition=l}}function kp(e,t,n,r){var a=X,l=Gn.transition;Gn.transition=null;try{X=4,So(e,t,n,r)}finally{X=a,Gn.transition=l}}function So(e,t,n,r){if($a){var a=ji(e,t,n,r);if(a===null)Yl(e,t,r,Ha,n),Bs(e,r);else if(xp(a,e,t,n,r))r.stopPropagation();else if(Bs(e,r),t&4&&-1<vp.indexOf(e)){for(;a!==null;){var l=qr(a);if(l!==null&&Dc(l),l=ji(e,t,n,r),l===null&&Yl(e,t,r,Ha,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var Ha=null;function ji(e,t,n,r){if(Ha=null,e=xo(r),e=cn(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ha=e,null}function Vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case _o:return 1;case zc:return 4;case Fa:case cp:return 16;case Rc:return 536870912;default:return 16}default:return 16}}var Bt=null,Co=null,Na=null;function Gc(){if(Na)return Na;var e,t=Co,n=t.length,r,a="value"in Bt?Bt.value:Bt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return Na=a.slice(e,1<r?1-r:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function Hs(){return!1}function Ue(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ca:Hs,this.isPropagationStopped=Hs,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ao=Ue(nr),Jr=ae({},nr,{view:0,detail:0}),Sp=Ue(Jr),Fl,Bl,fr,pl=ae({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:No,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Fl=e.screenX-fr.screenX,Bl=e.screenY-fr.screenY):Bl=Fl=0,fr=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),Vs=Ue(pl),Cp=ae({},pl,{dataTransfer:0}),Ap=Ue(Cp),Np=ae({},Jr,{relatedTarget:0}),$l=Ue(Np),Tp=ae({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=Ue(Tp),Ep=ae({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Ue(Ep),Ip=ae({},nr,{data:0}),Gs=Ue(Ip),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zp[e])?!!t[e]:!1}function No(){return Rp}var Lp=ae({},Jr,{key:function(e){if(e.key){var t=jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:No,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=Ue(Lp),Dp=ae({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Us=Ue(Dp),Fp=ae({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:No}),Bp=Ue(Fp),$p=ae({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hp=Ue($p),Vp=ae({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=Ue(Vp),Up=[9,13,27,32],To=bt&&"CompositionEvent"in window,Cr=null;bt&&"documentMode"in document&&(Cr=document.documentMode);var Xp=bt&&"TextEvent"in window&&!Cr,Uc=bt&&(!To||Cr&&8<Cr&&11>=Cr),Xs=" ",Qs=!1;function Xc(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Qp(e,t){switch(e){case"compositionend":return Qc(t);case"keypress":return t.which!==32?null:(Qs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Qs?null:e;default:return null}}function Yp(e,t){if(Pn)return e==="compositionend"||!To&&Xc(e,t)?(e=Gc(),Na=Co=Bt=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uc&&t.locale!=="ko"?null:t.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wp[e.type]:t==="textarea"}function Yc(e,t,n,r){Ac(r),t=Va(t,"onChange"),0<t.length&&(n=new Ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Dr=null;function Kp(e){ld(e,0)}function ml(e){var t=Mn(e);if(vc(t))return e}function Zp(e,t){if(e==="change")return t}var Wc=!1;if(bt){var Hl;if(bt){var Vl="oninput"in document;if(!Vl){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),Vl=typeof Ws.oninput=="function"}Hl=Vl}else Hl=!1;Wc=Hl&&(!document.documentMode||9<document.documentMode)}function Ks(){Ar&&(Ar.detachEvent("onpropertychange",Kc),Dr=Ar=null)}function Kc(e){if(e.propertyName==="value"&&ml(Dr)){var t=[];Yc(t,Dr,e,xo(e)),Ec(Kp,t)}}function Jp(e,t,n){e==="focusin"?(Ks(),Ar=t,Dr=n,Ar.attachEvent("onpropertychange",Kc)):e==="focusout"&&Ks()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Dr)}function em(e,t){if(e==="click")return ml(t)}function tm(e,t){if(e==="input"||e==="change")return ml(t)}function nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:nm;function Fr(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!mi.call(t,a)||!dt(e[a],t[a]))return!1}return!0}function Zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Js(e,t){var n=Zs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zs(n)}}function Zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var e=window,t=La();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=La(e.document)}return t}function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rm(e){var t=Jc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zc(n.ownerDocument.documentElement,n)){if(r!==null&&bo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Js(n,l);var o=Js(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var am=bt&&"documentMode"in document&&11>=document.documentMode,In=null,Mi=null,Nr=null,zi=!1;function qs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||In==null||In!==La(r)||(r=In,"selectionStart"in r&&bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Fr(Nr,r)||(Nr=r,r=Va(Mi,"onSelect"),0<r.length&&(t=new Ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Gl={},qc={};bt&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function hl(e){if(Gl[e])return Gl[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qc)return Gl[e]=t[n];return e}var ed=hl("animationend"),td=hl("animationiteration"),nd=hl("animationstart"),rd=hl("transitionend"),ad=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){ad.set(e,t),_n(t,[e])}for(var Ul=0;Ul<eu.length;Ul++){var Xl=eu[Ul],lm=Xl.toLowerCase(),im=Xl[0].toUpperCase()+Xl.slice(1);qt(lm,"on"+im)}qt(ed,"onAnimationEnd");qt(td,"onAnimationIteration");qt(nd,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(rd,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),om=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lp(r,t,void 0,e),e.currentTarget=null}function ld(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,p=c.currentTarget;if(c=c.listener,u!==l&&a.isPropagationStopped())break e;tu(a,c,p),l=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,p=c.currentTarget,c=c.listener,u!==l&&a.isPropagationStopped())break e;tu(a,c,p),l=u}}}if(Da)throw e=Ei,Da=!1,Ei=null,e}function J(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var r=e+"__bubble";n.has(r)||(id(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),id(n,e,r,t)}var fa="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[fa]){e[fa]=!0,pc.forEach(function(n){n!=="selectionchange"&&(om.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fa]||(t[fa]=!0,Ql("selectionchange",!1,t))}}function id(e,t,n,r){switch(Vc(t)){case 1:var a=wp;break;case 4:a=kp;break;default:a=So}n=a.bind(null,t,n,e),a=void 0,!bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;c!==null;){if(o=cn(c),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}c=c.parentNode}}r=r.return}Ec(function(){var p=l,x=xo(n),i=[];e:{var s=ad.get(e);if(s!==void 0){var d=Ao,g=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":d=Op;break;case"focusin":g="focus",d=$l;break;case"focusout":g="blur",d=$l;break;case"beforeblur":case"afterblur":d=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Bp;break;case ed:case td:case nd:d=bp;break;case rd:d=Hp;break;case"scroll":d=Sp;break;case"wheel":d=Gp;break;case"copy":case"cut":case"paste":d=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Us}var v=(t&4)!==0,_=!v&&e==="scroll",f=v?s!==null?s+"Capture":null:s;v=[];for(var m=p,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,f!==null&&(w=zr(m,f),w!=null&&v.push($r(m,w,y)))),_)break;m=m.return}0<v.length&&(s=new d(s,g,null,n,x),i.push({event:s,listeners:v}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",s&&n!==Ni&&(g=n.relatedTarget||n.fromElement)&&(cn(g)||g[Et]))break e;if((d||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=p,g=g?cn(g):null,g!==null&&(_=wn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(d=null,g=p),d!==g)){if(v=Vs,w="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Us,w="onPointerLeave",f="onPointerEnter",m="pointer"),_=d==null?s:Mn(d),y=g==null?s:Mn(g),s=new v(w,m+"leave",d,n,x),s.target=_,s.relatedTarget=y,w=null,cn(x)===p&&(v=new v(f,m+"enter",g,n,x),v.target=y,v.relatedTarget=_,w=v),_=w,d&&g)t:{for(v=d,f=g,m=0,y=v;y;y=An(y))m++;for(y=0,w=f;w;w=An(w))y++;for(;0<m-y;)v=An(v),m--;for(;0<y-m;)f=An(f),y--;for(;m--;){if(v===f||f!==null&&v===f.alternate)break t;v=An(v),f=An(f)}v=null}else v=null;d!==null&&nu(i,s,d,v,!1),g!==null&&_!==null&&nu(i,_,g,v,!0)}}e:{if(s=p?Mn(p):window,d=s.nodeName&&s.nodeName.toLowerCase(),d==="select"||d==="input"&&s.type==="file")var S=Zp;else if(Ys(s))if(Wc)S=tm;else{S=qp;var N=Jp}else(d=s.nodeName)&&d.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(S=em);if(S&&(S=S(e,p))){Yc(i,S,n,x);break e}N&&N(e,s,p),e==="focusout"&&(N=s._wrapperState)&&N.controlled&&s.type==="number"&&wi(s,"number",s.value)}switch(N=p?Mn(p):window,e){case"focusin":(Ys(N)||N.contentEditable==="true")&&(In=N,Mi=p,Nr=null);break;case"focusout":Nr=Mi=In=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,qs(i,n,x);break;case"selectionchange":if(am)break;case"keydown":case"keyup":qs(i,n,x)}var T;if(To)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Pn?Xc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Uc&&n.locale!=="ko"&&(Pn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Pn&&(T=Gc()):(Bt=x,Co="value"in Bt?Bt.value:Bt.textContent,Pn=!0)),N=Va(p,P),0<N.length&&(P=new Gs(P,e,null,n,x),i.push({event:P,listeners:N}),T?P.data=T:(T=Qc(n),T!==null&&(P.data=T)))),(T=Xp?Qp(e,n):Yp(e,n))&&(p=Va(p,"onBeforeInput"),0<p.length&&(x=new Gs("onBeforeInput","beforeinput",null,n,x),i.push({event:x,listeners:p}),x.data=T))}ld(i,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Va(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=zr(e,n),l!=null&&r.unshift($r(e,l,a)),l=zr(e,t),l!=null&&r.push($r(e,l,a))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,p=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&p!==null&&(c=p,a?(u=zr(n,l),u!=null&&o.unshift($r(n,u,c))):a||(u=zr(n,l),u!=null&&o.push($r(n,u,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var sm=/\r\n?/g,um=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(sm,`
`).replace(um,"")}function pa(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(C(425))}function Ga(){}var Ri=null,Li=null;function Oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(fm)}:Di;function fm(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Or(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),ht="__reactFiber$"+rr,Hr="__reactProps$"+rr,Et="__reactContainer$"+rr,Fi="__reactEvents$"+rr,pm="__reactListeners$"+rr,mm="__reactHandles$"+rr;function cn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[ht])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[ht]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function gl(e){return e[Hr]||null}var Bi=[],zn=-1;function en(e){return{current:e}}function q(e){0>zn||(e.current=Bi[zn],Bi[zn]=null,zn--)}function Z(e,t){zn++,Bi[zn]=e.current,e.current=t}var Jt={},Ae=en(Jt),ze=en(!1),hn=Jt;function Yn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Re(e){return e=e.childContextTypes,e!=null}function Ua(){q(ze),q(Ae)}function iu(e,t,n){if(Ae.current!==Jt)throw Error(C(168));Z(Ae,t),Z(ze,n)}function od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,Jf(e)||"Unknown",a));return ae({},n,r)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,hn=Ae.current,Z(Ae,e),Z(ze,ze.current),!0}function ou(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=od(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,q(ze),q(Ae),Z(Ae,e)):q(ze),Z(ze,n)}var Ct=null,yl=!1,Kl=!1;function sd(e){Ct===null?Ct=[e]:Ct.push(e)}function hm(e){yl=!0,sd(e)}function tn(){if(!Kl&&Ct!==null){Kl=!0;var e=0,t=X;try{var n=Ct;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,yl=!1}catch(a){throw Ct!==null&&(Ct=Ct.slice(e+1)),Mc(_o,tn),a}finally{X=t,Kl=!1}}return null}var Rn=[],Ln=0,Qa=null,Ya=0,Ke=[],Ze=0,gn=null,At=1,Nt="";function ln(e,t){Rn[Ln++]=Ya,Rn[Ln++]=Qa,Qa=e,Ya=t}function ud(e,t,n){Ke[Ze++]=At,Ke[Ze++]=Nt,Ke[Ze++]=gn,gn=e;var r=At;e=Nt;var a=32-ut(r)-1;r&=~(1<<a),n+=1;var l=32-ut(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,At=1<<32-ut(t)+a|n<<a|r,Nt=l+e}else At=1<<l|n<<a|r,Nt=e}function Eo(e){e.return!==null&&(ln(e,1),ud(e,1,0))}function Po(e){for(;e===Qa;)Qa=Rn[--Ln],Rn[Ln]=null,Ya=Rn[--Ln],Rn[Ln]=null;for(;e===gn;)gn=Ke[--Ze],Ke[Ze]=null,Nt=Ke[--Ze],Ke[Ze]=null,At=Ke[--Ze],Ke[Ze]=null}var He=null,$e=null,ee=!1,st=null;function cd(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,$e=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:At,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,$e=null,!0):!1;default:return!1}}function $i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hi(e){if(ee){var t=$e;if(t){var n=t;if(!su(e,t)){if($i(e))throw Error(C(418));t=Xt(n.nextSibling);var r=He;t&&su(e,t)?cd(r,n):(e.flags=e.flags&-4097|2,ee=!1,He=e)}}else{if($i(e))throw Error(C(418));e.flags=e.flags&-4097|2,ee=!1,He=e}}}function uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ma(e){if(e!==He)return!1;if(!ee)return uu(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oi(e.type,e.memoizedProps)),t&&(t=$e)){if($i(e))throw dd(),Error(C(418));for(;t;)cd(e,t),t=Xt(t.nextSibling)}if(uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=He?Xt(e.stateNode.nextSibling):null;return!0}function dd(){for(var e=$e;e;)e=Xt(e.nextSibling)}function Wn(){$e=He=null,ee=!1}function Io(e){st===null?st=[e]:st.push(e)}var gm=jt.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var c=a.refs;o===null?delete c[l]:c[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function ha(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cu(e){var t=e._init;return t(e._payload)}function fd(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function a(f,m){return f=Kt(f,m),f.index=0,f.sibling=null,f}function l(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,m,y,w){return m===null||m.tag!==6?(m=ri(y,f.mode,w),m.return=f,m):(m=a(m,y),m.return=f,m)}function u(f,m,y,w){var S=y.type;return S===En?x(f,m,y.props.children,w,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Lt&&cu(S)===m.type)?(w=a(m,y.props),w.ref=pr(f,m,y),w.return=f,w):(w=za(y.type,y.key,y.props,null,f.mode,w),w.ref=pr(f,m,y),w.return=f,w)}function p(f,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ai(y,f.mode,w),m.return=f,m):(m=a(m,y.children||[]),m.return=f,m)}function x(f,m,y,w,S){return m===null||m.tag!==7?(m=mn(y,f.mode,w,S),m.return=f,m):(m=a(m,y),m.return=f,m)}function i(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ri(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case aa:return y=za(m.type,m.key,m.props,null,f.mode,y),y.ref=pr(f,null,m),y.return=f,y;case bn:return m=ai(m,f.mode,y),m.return=f,m;case Lt:var w=m._init;return i(f,w(m._payload),y)}if(vr(m)||sr(m))return m=mn(m,f.mode,y,null),m.return=f,m;ha(f,m)}return null}function s(f,m,y,w){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:c(f,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case aa:return y.key===S?u(f,m,y,w):null;case bn:return y.key===S?p(f,m,y,w):null;case Lt:return S=y._init,s(f,m,S(y._payload),w)}if(vr(y)||sr(y))return S!==null?null:x(f,m,y,w,null);ha(f,y)}return null}function d(f,m,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(y)||null,c(m,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case aa:return f=f.get(w.key===null?y:w.key)||null,u(m,f,w,S);case bn:return f=f.get(w.key===null?y:w.key)||null,p(m,f,w,S);case Lt:var N=w._init;return d(f,m,y,N(w._payload),S)}if(vr(w)||sr(w))return f=f.get(y)||null,x(m,f,w,S,null);ha(m,w)}return null}function g(f,m,y,w){for(var S=null,N=null,T=m,P=m=0,M=null;T!==null&&P<y.length;P++){T.index>P?(M=T,T=null):M=T.sibling;var L=s(f,T,y[P],w);if(L===null){T===null&&(T=M);break}e&&T&&L.alternate===null&&t(f,T),m=l(L,m,P),N===null?S=L:N.sibling=L,N=L,T=M}if(P===y.length)return n(f,T),ee&&ln(f,P),S;if(T===null){for(;P<y.length;P++)T=i(f,y[P],w),T!==null&&(m=l(T,m,P),N===null?S=T:N.sibling=T,N=T);return ee&&ln(f,P),S}for(T=r(f,T);P<y.length;P++)M=d(T,f,P,y[P],w),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?P:M.key),m=l(M,m,P),N===null?S=M:N.sibling=M,N=M);return e&&T.forEach(function(V){return t(f,V)}),ee&&ln(f,P),S}function v(f,m,y,w){var S=sr(y);if(typeof S!="function")throw Error(C(150));if(y=S.call(y),y==null)throw Error(C(151));for(var N=S=null,T=m,P=m=0,M=null,L=y.next();T!==null&&!L.done;P++,L=y.next()){T.index>P?(M=T,T=null):M=T.sibling;var V=s(f,T,L.value,w);if(V===null){T===null&&(T=M);break}e&&T&&V.alternate===null&&t(f,T),m=l(V,m,P),N===null?S=V:N.sibling=V,N=V,T=M}if(L.done)return n(f,T),ee&&ln(f,P),S;if(T===null){for(;!L.done;P++,L=y.next())L=i(f,L.value,w),L!==null&&(m=l(L,m,P),N===null?S=L:N.sibling=L,N=L);return ee&&ln(f,P),S}for(T=r(f,T);!L.done;P++,L=y.next())L=d(T,f,P,L.value,w),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?P:L.key),m=l(L,m,P),N===null?S=L:N.sibling=L,N=L);return e&&T.forEach(function(F){return t(f,F)}),ee&&ln(f,P),S}function _(f,m,y,w){if(typeof y=="object"&&y!==null&&y.type===En&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case aa:e:{for(var S=y.key,N=m;N!==null;){if(N.key===S){if(S=y.type,S===En){if(N.tag===7){n(f,N.sibling),m=a(N,y.props.children),m.return=f,f=m;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Lt&&cu(S)===N.type){n(f,N.sibling),m=a(N,y.props),m.ref=pr(f,N,y),m.return=f,f=m;break e}n(f,N);break}else t(f,N);N=N.sibling}y.type===En?(m=mn(y.props.children,f.mode,w,y.key),m.return=f,f=m):(w=za(y.type,y.key,y.props,null,f.mode,w),w.ref=pr(f,m,y),w.return=f,f=w)}return o(f);case bn:e:{for(N=y.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),m=a(m,y.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=ai(y,f.mode,w),m.return=f,f=m}return o(f);case Lt:return N=y._init,_(f,m,N(y._payload),w)}if(vr(y))return g(f,m,y,w);if(sr(y))return v(f,m,y,w);ha(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),m=a(m,y),m.return=f,f=m):(n(f,m),m=ri(y,f.mode,w),m.return=f,f=m),o(f)):n(f,m)}return _}var Kn=fd(!0),pd=fd(!1),Wa=en(null),Ka=null,On=null,jo=null;function Mo(){jo=On=Ka=null}function zo(e){var t=Wa.current;q(Wa),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){Ka=e,jo=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(Ka===null)throw Error(C(308));On=e,Ka.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var dn=null;function Ro(e){dn===null?dn=[e]:dn.push(e)}function md(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Ro(t)):(n.next=a.next,a.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Pt(e,n)}return a=r.interleaved,a===null?(t.next=t,Ro(r)):(t.next=a.next,a.next=t),r.interleaved=t,Pt(e,n)}function ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wo(e,n)}}function du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Za(e,t,n,r){var a=e.updateQueue;Ot=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var u=c,p=u.next;u.next=null,o===null?l=p:o.next=p,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==o&&(c===null?x.firstBaseUpdate=p:c.next=p,x.lastBaseUpdate=u))}if(l!==null){var i=a.baseState;o=0,x=p=u=null,c=l;do{var s=c.lane,d=c.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:d,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var g=e,v=c;switch(s=t,d=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){i=g.call(d,i,s);break e}i=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,s=typeof g=="function"?g.call(d,i,s):g,s==null)break e;i=ae({},i,s);break e;case 2:Ot=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,s=a.effects,s===null?a.effects=[c]:s.push(c))}else d={eventTime:d,lane:s,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(p=x=d,u=i):x=x.next=d,o|=s;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;s=c,c=s.next,s.next=null,a.lastBaseUpdate=s,a.shared.pending=null}}while(!0);if(x===null&&(u=i),a.baseState=u,a.firstBaseUpdate=p,a.lastBaseUpdate=x,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);vn|=o,e.lanes=o,e.memoizedState=i}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var ea={},vt=en(ea),Vr=en(ea),Gr=en(ea);function fn(e){if(e===ea)throw Error(C(174));return e}function Oo(e,t){switch(Z(Gr,t),Z(Vr,e),Z(vt,ea),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Si(t,e)}q(vt),Z(vt,t)}function Zn(){q(vt),q(Vr),q(Gr)}function gd(e){fn(Gr.current);var t=fn(vt.current),n=Si(t,e.type);t!==n&&(Z(Vr,e),Z(vt,n))}function Do(e){Vr.current===e&&(q(vt),q(Vr))}var ne=en(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zl=[];function Fo(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var Ea=jt.ReactCurrentDispatcher,Jl=jt.ReactCurrentBatchConfig,yn=0,re=null,me=null,ge=null,qa=!1,Tr=!1,Ur=0,ym=0;function ke(){throw Error(C(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,a,l){if(yn=l,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?wm:km,e=n(r,a),Tr){l=0;do{if(Tr=!1,Ur=0,25<=l)throw Error(C(301));l+=1,ge=me=null,t.updateQueue=null,Ea.current=Sm,e=n(r,a)}while(Tr)}if(Ea.current=el,t=me!==null&&me.next!==null,yn=0,ge=me=re=null,qa=!1,t)throw Error(C(300));return e}function Ho(){var e=Ur!==0;return Ur=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?re.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(me===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ge===null?re.memoizedState:ge.next;if(t!==null)ge=t,me=e;else{if(e===null)throw Error(C(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ge===null?re.memoizedState=ge=e:ge=ge.next=e}return ge}function Xr(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=me,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var c=o=null,u=null,p=l;do{var x=p.lane;if((yn&x)===x)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var i={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(c=u=i,o=r):u=u.next=i,re.lanes|=x,vn|=x}p=p.next}while(p!==null&&p!==l);u===null?o=r:u.next=c,dt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,re.lanes|=l,vn|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ei(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);dt(l,t.memoizedState)||(Me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function yd(){}function vd(e,t){var n=re,r=nt(),a=t(),l=!dt(r.memoizedState,a);if(l&&(r.memoizedState=a,Me=!0),r=r.queue,Vo(wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Qr(9,_d.bind(null,n,r,a,t),void 0,null),ye===null)throw Error(C(349));yn&30||xd(n,t,a)}return a}function xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,r){t.value=n,t.getSnapshot=r,kd(t)&&Sd(e)}function wd(e,t,n){return n(function(){kd(t)&&Sd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Sd(e){var t=Pt(e,1);t!==null&&ct(t,e,1,-1)}function pu(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=_m.bind(null,re,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cd(){return nt().memoizedState}function Pa(e,t,n,r){var a=mt();re.flags|=e,a.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var a=nt();r=r===void 0?null:r;var l=void 0;if(me!==null){var o=me.memoizedState;if(l=o.destroy,r!==null&&Bo(r,o.deps)){a.memoizedState=Qr(t,n,l,r);return}}re.flags|=e,a.memoizedState=Qr(1|t,n,l,r)}function mu(e,t){return Pa(8390656,8,e,t)}function Vo(e,t){return vl(2048,8,e,t)}function Ad(e,t){return vl(4,2,e,t)}function Nd(e,t){return vl(4,4,e,t)}function Td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bd(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,Td.bind(null,t,e),n)}function Go(){}function Ed(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pd(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Id(e,t,n){return yn&21?(dt(n,t)||(n=Lc(),re.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function vm(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Jl.transition;Jl.transition={};try{e(!1),t()}finally{X=n,Jl.transition=r}}function jd(){return nt().memoizedState}function xm(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Md(e))zd(t,n);else if(n=md(e,t,n,r),n!==null){var a=be();ct(n,e,r,a),Rd(n,t,r)}}function _m(e,t,n){var r=Wt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Md(e))zd(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,c=l(o,n);if(a.hasEagerState=!0,a.eagerState=c,dt(c,o)){var u=t.interleaved;u===null?(a.next=a,Ro(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=md(e,t,a,r),n!==null&&(a=be(),ct(n,e,r,a),Rd(n,t,r))}}function Md(e){var t=e.alternate;return e===re||t!==null&&t===re}function zd(e,t){Tr=qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wo(e,n)}}var el={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},wm={readContext:tt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,Td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xm.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:pu,useDebugValue:Go,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=pu(!1),t=e[0];return e=vm.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,a=mt();if(ee){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ye===null)throw Error(C(349));yn&30||xd(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,mu(wd.bind(null,r,l,e),[e]),r.flags|=2048,Qr(9,_d.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=mt(),t=ye.identifierPrefix;if(ee){var n=Nt,r=At;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ym++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},km={readContext:tt,useCallback:Ed,useContext:tt,useEffect:Vo,useImperativeHandle:bd,useInsertionEffect:Ad,useLayoutEffect:Nd,useMemo:Pd,useReducer:ql,useRef:Cd,useState:function(){return ql(Xr)},useDebugValue:Go,useDeferredValue:function(e){var t=nt();return Id(t,me.memoizedState,e)},useTransition:function(){var e=ql(Xr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:vd,useId:jd,unstable_isNewReconciler:!1},Sm={readContext:tt,useCallback:Ed,useContext:tt,useEffect:Vo,useImperativeHandle:bd,useInsertionEffect:Ad,useLayoutEffect:Nd,useMemo:Pd,useReducer:ei,useRef:Cd,useState:function(){return ei(Xr)},useDebugValue:Go,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:Id(t,me.memoizedState,e)},useTransition:function(){var e=ei(Xr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:vd,useId:jd,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xl={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),a=Wt(e),l=Tt(r,a);l.payload=t,n!=null&&(l.callback=n),t=Qt(e,l,a),t!==null&&(ct(t,e,a,r),ba(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),a=Wt(e),l=Tt(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Qt(e,l,a),t!==null&&(ct(t,e,a,r),ba(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Wt(e),a=Tt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Qt(e,a,r),t!==null&&(ct(t,e,r,n),ba(t,e,r))}};function hu(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(a,l):!0}function Ld(e,t,n){var r=!1,a=Jt,l=t.contextType;return typeof l=="object"&&l!==null?l=tt(l):(a=Re(t)?hn:Ae.current,r=t.contextTypes,l=(r=r!=null)?Yn(e,a):Jt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xl.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Lo(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=tt(l):(l=Re(t)?hn:Ae.current,a.context=Yn(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gi(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&xl.enqueueReplaceState(a,a.state,null),Za(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Jn(e,t){try{var n="",r=t;do n+=Zf(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function ti(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cm=typeof WeakMap=="function"?WeakMap:Map;function Od(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,no=r),Xi(e,t)},n}function Dd(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Xi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cm;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xu(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var Am=jt.ReactCurrentOwner,Me=!1;function Te(e,t,n,r){t.child=e===null?pd(t,null,n,r):Kn(t,e.child,n,r)}function _u(e,t,n,r,a){n=n.render;var l=t.ref;return Un(t,a),r=$o(e,t,n,r,l,a),n=Ho(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,It(e,t,a)):(ee&&n&&Eo(t),t.flags|=1,Te(e,t,r,a),t.child)}function wu(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Jo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Fd(e,t,l,r,a)):(e=za(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(o,r)&&e.ref===t.ref)return It(e,t,a)}return t.flags|=1,e=Kt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(Fr(l,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,It(e,t,a)}return Qi(e,t,n,r,a)}function Bd(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Fn,Be),Be|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Fn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Z(Fn,Be),Be|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Z(Fn,Be),Be|=r;return Te(e,t,a,n),t.child}function $d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qi(e,t,n,r,a){var l=Re(n)?hn:Ae.current;return l=Yn(t,l),Un(t,a),n=$o(e,t,n,r,l,a),r=Ho(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,It(e,t,a)):(ee&&r&&Eo(t),t.flags|=1,Te(e,t,n,a),t.child)}function ku(e,t,n,r,a){if(Re(n)){var l=!0;Xa(t)}else l=!1;if(Un(t,a),t.stateNode===null)Ia(e,t),Ld(t,n,r),Ui(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var u=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=tt(p):(p=Re(n)?hn:Ae.current,p=Yn(t,p));var x=n.getDerivedStateFromProps,i=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";i||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==p)&&gu(t,o,r,p),Ot=!1;var s=t.memoizedState;o.state=s,Za(t,r,o,a),u=t.memoizedState,c!==r||s!==u||ze.current||Ot?(typeof x=="function"&&(Gi(t,n,x,r),u=t.memoizedState),(c=Ot||hu(t,n,c,r,s,u,p))?(i||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=p,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hd(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:it(t.type,c),o.props=p,i=t.pendingProps,s=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tt(u):(u=Re(n)?hn:Ae.current,u=Yn(t,u));var d=n.getDerivedStateFromProps;(x=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==i||s!==u)&&gu(t,o,r,u),Ot=!1,s=t.memoizedState,o.state=s,Za(t,r,o,a);var g=t.memoizedState;c!==i||s!==g||ze.current||Ot?(typeof d=="function"&&(Gi(t,n,d,r),g=t.memoizedState),(p=Ot||hu(t,n,p,r,s,g,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=u,r=p):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return Yi(e,t,n,r,l,a)}function Yi(e,t,n,r,a,l){$d(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&ou(t,n,!1),It(e,t,l);r=t.stateNode,Am.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Kn(t,e.child,null,l),t.child=Kn(t,null,c,l)):Te(e,t,c,l),t.memoizedState=r.state,a&&ou(t,n,!0),t.child}function Hd(e){var t=e.stateNode;t.pendingContext?iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&iu(e,t.context,!1),Oo(e,t.containerInfo)}function Su(e,t,n,r,a){return Wn(),Io(a),t.flags|=256,Te(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vd(e,t,n){var r=t.pendingProps,a=ne.current,l=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Z(ne,a&1),e===null)return Hi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=kl(o,r,0,null),e=mn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ki(n),t.memoizedState=Wi,e):Uo(t,o));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return Nm(e,t,o,r,c,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,c=a.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Kt(a,u),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?l=Kt(c,l):(l=mn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Ki(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Wi,r}return l=e.child,e=l.sibling,r=Kt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uo(e,t){return t=kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ga(e,t,n,r){return r!==null&&Io(r),Kn(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nm(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=ti(Error(C(422))),ga(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=kl({mode:"visible",children:r.children},a,0,null),l=mn(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Kn(t,e.child,null,o),t.child.memoizedState=Ki(o),t.memoizedState=Wi,l);if(!(t.mode&1))return ga(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(C(419)),r=ti(l,r,void 0),ga(e,t,o,r)}if(c=(o&e.childLanes)!==0,Me||c){if(r=ye,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Pt(e,a),ct(r,e,a,-1))}return Zo(),r=ti(Error(C(421))),ga(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Fm.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,$e=Xt(a.nextSibling),He=t,ee=!0,st=null,e!==null&&(Ke[Ze++]=At,Ke[Ze++]=Nt,Ke[Ze++]=gn,At=e.id,Nt=e.overflow,gn=t),t=Uo(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function ni(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Gd(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(Te(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ne,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ja(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ni(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ja(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ni(t,!0,n,null,l);break;case"together":ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tm(e,t,n){switch(t.tag){case 3:Hd(t),Wn();break;case 5:gd(t);break;case 1:Re(t.type)&&Xa(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Z(Wa,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Vd(e,t,n):(Z(ne,ne.current&1),e=It(e,t,n),e!==null?e.sibling:null);Z(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Bd(e,t,n)}return It(e,t,n)}var Ud,Zi,Xd,Qd;Ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zi=function(){};Xd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,fn(vt.current);var l=null;switch(n){case"input":a=xi(e,a),r=xi(e,r),l=[];break;case"select":a=ae({},a,{value:void 0}),r=ae({},r,{value:void 0}),l=[];break;case"textarea":a=ki(e,a),r=ki(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ga)}Ci(n,r);var o;n=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var c=a[p];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(jr.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var u=r[p];if(c=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&u!==c&&(u!=null||c!=null))if(p==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(p,n)),n=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(l=l||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(jr.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&J("scroll",e),l||c===u||(l=[])):(l=l||[]).push(p,u))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}};Qd=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bm(e,t,n){var r=t.pendingProps;switch(Po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Re(t.type)&&Ua(),Se(t),null;case 3:return r=t.stateNode,Zn(),q(ze),q(Ae),Fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(lo(st),st=null))),Zi(e,t),Se(t),null;case 5:Do(t);var a=fn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Xd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Se(t),null}if(e=fn(vt.current),ma(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ht]=t,r[Hr]=l,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(a=0;a<_r.length;a++)J(_r[a],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Ms(r,l),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},J("invalid",r);break;case"textarea":Rs(r,l),J("invalid",r)}Ci(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&pa(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&pa(r.textContent,c,e),a=["children",""+c]):jr.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":la(r),zs(r,l,!0);break;case"textarea":la(r),Ls(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ga)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ht]=t,e[Hr]=r,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ai(n,r),n){case"dialog":J("cancel",e),J("close",e),a=r;break;case"iframe":case"object":case"embed":J("load",e),a=r;break;case"video":case"audio":for(a=0;a<_r.length;a++)J(_r[a],e);a=r;break;case"source":J("error",e),a=r;break;case"img":case"image":case"link":J("error",e),J("load",e),a=r;break;case"details":J("toggle",e),a=r;break;case"input":Ms(e,r),a=xi(e,r),J("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ae({},r,{value:void 0}),J("invalid",e);break;case"textarea":Rs(e,r),a=ki(e,r),J("invalid",e);break;default:a=r}Ci(n,a),c=a;for(l in c)if(c.hasOwnProperty(l)){var u=c[l];l==="style"?Cc(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kc(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mr(e,u):typeof u=="number"&&Mr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(jr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&J("scroll",e):u!=null&&ho(e,l,u,o))}switch(n){case"input":la(e),zs(e,r,!1);break;case"textarea":la(e),Ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?$n(e,!!r.multiple,l,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Qd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=fn(Gr.current),fn(vt.current),ma(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(l=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:pa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pa(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return Se(t),null;case 13:if(q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&$e!==null&&t.mode&1&&!(t.flags&128))dd(),Wn(),t.flags|=98560,l=!1;else if(l=ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[ht]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),l=!1}else st!==null&&(lo(st),st=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?he===0&&(he=3):Zo())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Zn(),Zi(e,t),e===null&&Br(t.stateNode.containerInfo),Se(t),null;case 10:return zo(t.type._context),Se(t),null;case 17:return Re(t.type)&&Ua(),Se(t),null;case 19:if(q(ne),l=t.memoizedState,l===null)return Se(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)mr(l,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ja(e),o!==null){for(t.flags|=128,mr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ne,ne.current&1|2),t.child}e=e.sibling}l.tail!==null&&ue()>qn&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ja(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ee)return Se(t),null}else 2*ue()-l.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ue(),t.sibling=null,n=ne.current,Z(ne,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Ko(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Em(e,t){switch(Po(t),t.tag){case 1:return Re(t.type)&&Ua(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),q(ze),q(Ae),Fo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Do(t),null;case 13:if(q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ne),null;case 4:return Zn(),null;case 10:return zo(t.type._context),null;case 22:case 23:return Ko(),null;case 24:return null;default:return null}}var ya=!1,Ce=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,E=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Ji(e,t,n){try{n()}catch(r){se(e,t,r)}}var Au=!1;function Im(e,t){if(Ri=$a,e=Jc(),bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,p=0,x=0,i=e,s=null;t:for(;;){for(var d;i!==n||a!==0&&i.nodeType!==3||(c=o+a),i!==l||r!==0&&i.nodeType!==3||(u=o+r),i.nodeType===3&&(o+=i.nodeValue.length),(d=i.firstChild)!==null;)s=i,i=d;for(;;){if(i===e)break t;if(s===n&&++p===a&&(c=o),s===l&&++x===r&&(u=o),(d=i.nextSibling)!==null)break;i=s,s=i.parentNode}i=d}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},$a=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:it(t.type,v),_);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return g=Au,Au=!1,g}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Ji(t,n,l)}a=a.next}while(a!==r)}}function _l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yd(e){var t=e.alternate;t!==null&&(e.alternate=null,Yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Hr],delete t[Fi],delete t[pm],delete t[mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wd(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(r!==4&&(e=e.child,e!==null))for(eo(e,t,n),e=e.sibling;e!==null;)eo(e,t,n),e=e.sibling}function to(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(to(e,t,n),e=e.sibling;e!==null;)to(e,t,n),e=e.sibling}var ve=null,ot=!1;function zt(e,t,n){for(n=n.child;n!==null;)Kd(e,t,n),n=n.sibling}function Kd(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:Ce||Dn(n,t);case 6:var r=ve,a=ot;ve=null,zt(e,t,n),ve=r,ot=a,ve!==null&&(ot?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ot?(e=ve,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),Or(e)):Wl(ve,n.stateNode));break;case 4:r=ve,a=ot,ve=n.stateNode.containerInfo,ot=!0,zt(e,t,n),ve=r,ot=a;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Ji(n,t,o),a=a.next}while(a!==r)}zt(e,t,n);break;case 1:if(!Ce&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){se(n,t,c)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,zt(e,t,n),Ce=r):zt(e,t,n);break;default:zt(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pm),t.forEach(function(r){var a=Bm.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:ve=c.stateNode,ot=!1;break e;case 3:ve=c.stateNode.containerInfo,ot=!0;break e;case 4:ve=c.stateNode.containerInfo,ot=!0;break e}c=c.return}if(ve===null)throw Error(C(160));Kd(l,o,a),ve=null,ot=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(p){se(a,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zd(t,e),t=t.sibling}function Zd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),pt(e),r&4){try{br(3,e,e.return),_l(3,e)}catch(v){se(e,e.return,v)}try{br(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:at(t,e),pt(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(at(t,e),pt(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var a=e.stateNode;try{Mr(a,"")}catch(v){se(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&xc(a,l),Ai(c,o);var p=Ai(c,l);for(o=0;o<u.length;o+=2){var x=u[o],i=u[o+1];x==="style"?Cc(a,i):x==="dangerouslySetInnerHTML"?kc(a,i):x==="children"?Mr(a,i):ho(a,x,i,p)}switch(c){case"input":_i(a,l);break;case"textarea":_c(a,l);break;case"select":var s=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var d=l.value;d!=null?$n(a,!!l.multiple,d,!1):s!==!!l.multiple&&(l.defaultValue!=null?$n(a,!!l.multiple,l.defaultValue,!0):$n(a,!!l.multiple,l.multiple?[]:"",!1))}a[Hr]=l}catch(v){se(e,e.return,v)}}break;case 6:if(at(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(v){se(e,e.return,v)}}break;case 3:if(at(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:at(t,e),pt(e);break;case 13:at(t,e),pt(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Yo=ue())),r&4&&Tu(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(p=Ce)||x,at(t,e),Ce=p):at(t,e),pt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(E=e,x=e.child;x!==null;){for(i=E=x;E!==null;){switch(s=E,d=s.child,s.tag){case 0:case 11:case 14:case 15:br(4,s,s.return);break;case 1:Dn(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Dn(s,s.return);break;case 22:if(s.memoizedState!==null){Eu(i);continue}}d!==null?(d.return=s,E=d):Eu(i)}x=x.sibling}e:for(x=null,i=e;;){if(i.tag===5){if(x===null){x=i;try{a=i.stateNode,p?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=i.stateNode,u=i.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=Sc("display",o))}catch(v){se(e,e.return,v)}}}else if(i.tag===6){if(x===null)try{i.stateNode.nodeValue=p?"":i.memoizedProps}catch(v){se(e,e.return,v)}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;x===i&&(x=null),i=i.return}x===i&&(x=null),i.sibling.return=i.return,i=i.sibling}}break;case 19:at(t,e),pt(e),r&4&&Tu(e);break;case 21:break;default:at(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Mr(a,""),r.flags&=-33);var l=Nu(e);to(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,c=Nu(e);eo(e,c,o);break;default:throw Error(C(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jm(e,t,n){E=e,Jd(e)}function Jd(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var a=E,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||ya;if(!o){var c=a.alternate,u=c!==null&&c.memoizedState!==null||Ce;c=ya;var p=Ce;if(ya=o,(Ce=u)&&!p)for(E=a;E!==null;)o=E,u=o.child,o.tag===22&&o.memoizedState!==null?Pu(a):u!==null?(u.return=o,E=u):Pu(a);for(;l!==null;)E=l,Jd(l),l=l.sibling;E=a,ya=c,Ce=p}bu(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,E=l):bu(e)}}function bu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||_l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&fu(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var i=x.dehydrated;i!==null&&Or(i)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ce||t.flags&512&&qi(t)}catch(s){se(t,t.return,s)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Eu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Pu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_l(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){se(t,a,u)}}var l=t.return;try{qi(t)}catch(u){se(t,l,u)}break;case 5:var o=t.return;try{qi(t)}catch(u){se(t,o,u)}}}catch(u){se(t,t.return,u)}if(t===e){E=null;break}var c=t.sibling;if(c!==null){c.return=t.return,E=c;break}E=t.return}}var Mm=Math.ceil,tl=jt.ReactCurrentDispatcher,Xo=jt.ReactCurrentOwner,et=jt.ReactCurrentBatchConfig,G=0,ye=null,ce=null,xe=0,Be=0,Fn=en(0),he=0,Yr=null,vn=0,wl=0,Qo=0,Er=null,je=null,Yo=0,qn=1/0,St=null,nl=!1,no=null,Yt=null,va=!1,$t=null,rl=0,Pr=0,ro=null,ja=-1,Ma=0;function be(){return G&6?ue():ja!==-1?ja:ja=ue()}function Wt(e){return e.mode&1?G&2&&xe!==0?xe&-xe:gm.transition!==null?(Ma===0&&(Ma=Lc()),Ma):(e=X,e!==0||(e=window.event,e=e===void 0?16:Vc(e.type)),e):1}function ct(e,t,n,r){if(50<Pr)throw Pr=0,ro=null,Error(C(185));Zr(e,n,r),(!(G&2)||e!==ye)&&(e===ye&&(!(G&2)&&(wl|=n),he===4&&Ft(e,xe)),Le(e,r),n===1&&G===0&&!(t.mode&1)&&(qn=ue()+500,yl&&tn()))}function Le(e,t){var n=e.callbackNode;gp(e,t);var r=Ba(e,e===ye?xe:0);if(r===0)n!==null&&Fs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fs(n),t===1)e.tag===0?hm(Iu.bind(null,e)):sd(Iu.bind(null,e)),dm(function(){!(G&6)&&tn()}),n=null;else{switch(Oc(r)){case 1:n=_o;break;case 4:n=zc;break;case 16:n=Fa;break;case 536870912:n=Rc;break;default:n=Fa}n=of(n,qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qd(e,t){if(ja=-1,Ma=0,G&6)throw Error(C(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var r=Ba(e,e===ye?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var a=G;G|=2;var l=tf();(ye!==e||xe!==t)&&(St=null,qn=ue()+500,pn(e,t));do try{Lm();break}catch(c){ef(e,c)}while(!0);Mo(),tl.current=l,G=a,ce!==null?t=0:(ye=null,xe=0,t=he)}if(t!==0){if(t===2&&(a=Pi(e),a!==0&&(r=a,t=ao(e,a))),t===1)throw n=Yr,pn(e,0),Ft(e,r),Le(e,ue()),n;if(t===6)Ft(e,r);else{if(a=e.current.alternate,!(r&30)&&!zm(a)&&(t=al(e,r),t===2&&(l=Pi(e),l!==0&&(r=l,t=ao(e,l))),t===1))throw n=Yr,pn(e,0),Ft(e,r),Le(e,ue()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:on(e,je,St);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Yo+500-ue(),10<t)){if(Ba(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Di(on.bind(null,e,je,St),t);break}on(e,je,St);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-ut(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mm(r/1960))-r,10<r){e.timeoutHandle=Di(on.bind(null,e,je,St),r);break}on(e,je,St);break;case 5:on(e,je,St);break;default:throw Error(C(329))}}}return Le(e,ue()),e.callbackNode===n?qd.bind(null,e):null}function ao(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=al(e,t),e!==2&&(t=je,je=n,t!==null&&lo(t)),e}function lo(e){je===null?je=e:je.push.apply(je,e)}function zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!dt(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Qo,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function Iu(e){if(G&6)throw Error(C(327));Xn();var t=Ba(e,0);if(!(t&1))return Le(e,ue()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=Pi(e);r!==0&&(t=r,n=ao(e,r))}if(n===1)throw n=Yr,pn(e,0),Ft(e,t),Le(e,ue()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,je,St),Le(e,ue()),null}function Wo(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(qn=ue()+500,yl&&tn())}}function xn(e){$t!==null&&$t.tag===0&&!(G&6)&&Xn();var t=G;G|=1;var n=et.transition,r=X;try{if(et.transition=null,X=1,e)return e()}finally{X=r,et.transition=n,G=t,!(G&6)&&tn()}}function Ko(){Be=Fn.current,q(Fn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ua();break;case 3:Zn(),q(ze),q(Ae),Fo();break;case 5:Do(r);break;case 4:Zn();break;case 13:q(ne);break;case 19:q(ne);break;case 10:zo(r.type._context);break;case 22:case 23:Ko()}n=n.return}if(ye=e,ce=e=Kt(e.current,null),xe=Be=t,he=0,Yr=null,Qo=wl=vn=0,je=Er=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}dn=null}return e}function ef(e,t){do{var n=ce;try{if(Mo(),Ea.current=el,qa){for(var r=re.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}qa=!1}if(yn=0,ge=me=re=null,Tr=!1,Ur=0,Xo.current=null,n===null||n.return===null){he=1,Yr=t,ce=null;break}e:{var l=e,o=n.return,c=n,u=t;if(t=xe,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,x=c,i=x.tag;if(!(x.mode&1)&&(i===0||i===11||i===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var d=vu(o);if(d!==null){d.flags&=-257,xu(d,o,c,l,t),d.mode&1&&yu(l,p,t),t=d,u=p;var g=t.updateQueue;if(g===null){var v=new Set;v.add(u),t.updateQueue=v}else g.add(u);break e}else{if(!(t&1)){yu(l,p,t),Zo();break e}u=Error(C(426))}}else if(ee&&c.mode&1){var _=vu(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),xu(_,o,c,l,t),Io(Jn(u,c));break e}}l=u=Jn(u,c),he!==4&&(he=2),Er===null?Er=[l]:Er.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Od(l,u,t);du(l,f);break e;case 1:c=u;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Yt===null||!Yt.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Dd(l,c,t);du(l,w);break e}}l=l.return}while(l!==null)}rf(n)}catch(S){t=S,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function tf(){var e=tl.current;return tl.current=el,e===null?el:e}function Zo(){(he===0||he===3||he===2)&&(he=4),ye===null||!(vn&268435455)&&!(wl&268435455)||Ft(ye,xe)}function al(e,t){var n=G;G|=2;var r=tf();(ye!==e||xe!==t)&&(St=null,pn(e,t));do try{Rm();break}catch(a){ef(e,a)}while(!0);if(Mo(),G=n,tl.current=r,ce!==null)throw Error(C(261));return ye=null,xe=0,he}function Rm(){for(;ce!==null;)nf(ce)}function Lm(){for(;ce!==null&&!op();)nf(ce)}function nf(e){var t=lf(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?rf(e):ce=t,Xo.current=null}function rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Em(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,ce=null;return}}else if(n=bm(n,t,Be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);he===0&&(he=5)}function on(e,t,n){var r=X,a=et.transition;try{et.transition=null,X=1,Om(e,t,n,r)}finally{et.transition=a,X=r}return null}function Om(e,t,n,r){do Xn();while($t!==null);if(G&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(yp(e,l),e===ye&&(ce=ye=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,of(Fa,function(){return Xn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=et.transition,et.transition=null;var o=X;X=1;var c=G;G|=4,Xo.current=null,Im(e,n),Zd(n,e),rm(Li),$a=!!Ri,Li=Ri=null,e.current=n,jm(n),sp(),G=c,X=o,et.transition=l}else e.current=n;if(va&&(va=!1,$t=e,rl=a),l=e.pendingLanes,l===0&&(Yt=null),dp(n.stateNode),Le(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(nl)throw nl=!1,e=no,no=null,e;return rl&1&&e.tag!==0&&Xn(),l=e.pendingLanes,l&1?e===ro?Pr++:(Pr=0,ro=e):Pr=0,tn(),null}function Xn(){if($t!==null){var e=Oc(rl),t=et.transition,n=X;try{if(et.transition=null,X=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,rl=0,G&6)throw Error(C(331));var a=G;for(G|=4,E=e.current;E!==null;){var l=E,o=l.child;if(E.flags&16){var c=l.deletions;if(c!==null){for(var u=0;u<c.length;u++){var p=c[u];for(E=p;E!==null;){var x=E;switch(x.tag){case 0:case 11:case 15:br(8,x,l)}var i=x.child;if(i!==null)i.return=x,E=i;else for(;E!==null;){x=E;var s=x.sibling,d=x.return;if(Yd(x),x===p){E=null;break}if(s!==null){s.return=d,E=s;break}E=d}}}var g=l.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}E=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:br(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var m=e.current;for(E=m;E!==null;){o=E;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,E=y;else e:for(o=m;E!==null;){if(c=E,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_l(9,c)}}catch(S){se(c,c.return,S)}if(c===o){E=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,E=w;break e}E=c.return}}if(G=a,tn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(fl,e)}catch{}r=!0}return r}finally{X=n,et.transition=t}}return!1}function ju(e,t,n){t=Jn(n,t),t=Od(e,t,1),e=Qt(e,t,1),t=be(),e!==null&&(Zr(e,1,t),Le(e,t))}function se(e,t,n){if(e.tag===3)ju(e,e,n);else for(;t!==null;){if(t.tag===3){ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Jn(n,e),e=Dd(t,e,1),t=Qt(t,e,1),e=be(),t!==null&&(Zr(t,1,e),Le(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(xe&n)===n&&(he===4||he===3&&(xe&130023424)===xe&&500>ue()-Yo?pn(e,0):Qo|=n),Le(e,t)}function af(e,t){t===0&&(e.mode&1?(t=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):t=1);var n=be();e=Pt(e,t),e!==null&&(Zr(e,t,n),Le(e,n))}function Fm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),af(e,n)}function Bm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),af(e,n)}var lf;lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Tm(e,t,n);Me=!!(e.flags&131072)}else Me=!1,ee&&t.flags&1048576&&ud(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ia(e,t),e=t.pendingProps;var a=Yn(t,Ae.current);Un(t,n),a=$o(null,t,r,e,a,n);var l=Ho();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(l=!0,Xa(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Lo(t),a.updater=xl,t.stateNode=a,a._reactInternals=t,Ui(t,r,e,n),t=Yi(null,t,r,!0,l,n)):(t.tag=0,ee&&l&&Eo(t),Te(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ia(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Hm(r),e=it(r,e),a){case 0:t=Qi(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=_u(null,t,r,e,n);break e;case 14:t=wu(null,t,r,it(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),Qi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),ku(e,t,r,a,n);case 3:e:{if(Hd(t),e===null)throw Error(C(387));r=t.pendingProps,l=t.memoizedState,a=l.element,hd(e,t),Za(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=Jn(Error(C(423)),t),t=Su(e,t,r,n,a);break e}else if(r!==a){a=Jn(Error(C(424)),t),t=Su(e,t,r,n,a);break e}else for($e=Xt(t.stateNode.containerInfo.firstChild),He=t,ee=!0,st=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===a){t=It(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return gd(t),e===null&&Hi(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Oi(r,a)?o=null:l!==null&&Oi(r,l)&&(t.flags|=32),$d(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&Hi(t),null;case 13:return Vd(e,t,n);case 4:return Oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),_u(e,t,r,a,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,Z(Wa,r._currentValue),r._currentValue=o,l!==null)if(dt(l.value,o)){if(l.children===a.children&&!ze.current){t=It(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){o=l.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Tt(-1,n&-n),u.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?u.next=u:(u.next=x.next,x.next=u),p.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Vi(l.return,n,t),c.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(C(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Vi(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Te(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Un(t,n),a=tt(a),r=r(a),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,a=it(r,t.pendingProps),a=it(r.type,a),wu(e,t,r,a,n);case 15:return Fd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),Ia(e,t),t.tag=1,Re(r)?(e=!0,Xa(t)):e=!1,Un(t,n),Ld(t,r,a),Ui(t,r,a,n),Yi(null,t,r,!0,e,n);case 19:return Gd(e,t,n);case 22:return Bd(e,t,n)}throw Error(C(156,t.tag))};function of(e,t){return Mc(e,t)}function $m(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new $m(e,t,n,r)}function Jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return Jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yo)return 11;if(e===vo)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function za(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")Jo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case En:return mn(n.children,a,l,t);case go:o=8,a|=8;break;case hi:return e=qe(12,n,t,a|2),e.elementType=hi,e.lanes=l,e;case gi:return e=qe(13,n,t,a),e.elementType=gi,e.lanes=l,e;case yi:return e=qe(19,n,t,a),e.elementType=yi,e.lanes=l,e;case gc:return kl(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mc:o=10;break e;case hc:o=9;break e;case yo:o=11;break e;case vo:o=14;break e;case Lt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=qe(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function mn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function kl(e,t,n,r){return e=qe(22,e,r,t),e.elementType=gc,e.lanes=n,e.stateNode={isHidden:!1},e}function ri(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vm(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function qo(e,t,n,r,a,l,o,c,u){return e=new Vm(e,t,n,c,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=qe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(l),e}function Gm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sf(e){if(!e)return Jt;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Re(n))return od(e,n,t)}return t}function uf(e,t,n,r,a,l,o,c,u){return e=qo(n,r,!0,e,a,l,o,c,u),e.context=sf(null),n=e.current,r=be(),a=Wt(n),l=Tt(r,a),l.callback=t??null,Qt(n,l,a),e.current.lanes=a,Zr(e,a,r),Le(e,r),e}function Sl(e,t,n,r){var a=t.current,l=be(),o=Wt(a);return n=sf(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(a,t,o),e!==null&&(ct(e,a,o,l),ba(e,a,o)),o}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function es(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function Um(){return null}var cf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ts(e){this._internalRoot=e}Cl.prototype.render=ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Sl(e,t,null,null)};Cl.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Sl(null,e,null,null)}),t[Et]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&Hc(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Xm(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var p=ll(o);l.call(p)}}var o=uf(t,r,e,0,null,!1,!1,"",zu);return e._reactRootContainer=o,e[Et]=o.current,Br(e.nodeType===8?e.parentNode:e),xn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var p=ll(u);c.call(p)}}var u=qo(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=u,e[Et]=u.current,Br(e.nodeType===8?e.parentNode:e),xn(function(){Sl(t,u,n,r)}),u}function Nl(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var c=a;a=function(){var u=ll(o);c.call(u)}}Sl(t,o,e,a)}else o=Xm(n,t,e,a,r);return ll(o)}Dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(wo(t,n|1),Le(t,ue()),!(G&6)&&(qn=ue()+500,tn()))}break;case 13:xn(function(){var r=Pt(e,1);if(r!==null){var a=be();ct(r,e,1,a)}}),es(e,1)}};ko=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=be();ct(t,e,134217728,n)}es(e,134217728)}};Fc=function(e){if(e.tag===13){var t=Wt(e),n=Pt(e,t);if(n!==null){var r=be();ct(n,e,t,r)}es(e,t)}};Bc=function(){return X};$c=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Ti=function(e,t,n){switch(t){case"input":if(_i(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=gl(r);if(!a)throw Error(C(90));vc(r),_i(r,a)}}}break;case"textarea":_c(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};Tc=Wo;bc=xn;var Qm={usingClientEntryPoint:!1,Events:[qr,Mn,gl,Ac,Nc,Wo]},hr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ym={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ic(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||Um,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xa.isDisabled&&xa.supportsFiber)try{fl=xa.inject(Ym),yt=xa}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(t))throw Error(C(200));return Gm(e,t,null,n)};Ge.createRoot=function(e,t){if(!ns(e))throw Error(C(299));var n=!1,r="",a=cf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=qo(e,1,!1,null,null,n,!1,r,a),e[Et]=t.current,Br(e.nodeType===8?e.parentNode:e),new ts(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ic(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return xn(e)};Ge.hydrate=function(e,t,n){if(!Al(t))throw Error(C(200));return Nl(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!ns(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=cf;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=uf(t,null,e,1,n??null,a,!1,l,o),e[Et]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Cl(t)};Ge.render=function(e,t,n){if(!Al(t))throw Error(C(200));return Nl(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Al(e))throw Error(C(40));return e._reactRootContainer?(xn(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ge.unstable_batchedUpdates=Wo;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Nl(e,t,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df)}catch(e){console.error(e)}}df(),cc.exports=Ge;var sn=cc.exports,Ru=sn;pi.createRoot=Ru.createRoot,pi.hydrateRoot=Ru.hydrateRoot;const Lu=({onStart:e,onSettings:t,onHelp:n})=>h.jsxs("div",{className:"cg-main-menu",children:[h.jsxs("div",{className:"cg-menu-bg",children:[h.jsx("div",{className:"cg-menu-bg-gradient"}),h.jsx("div",{className:"cg-menu-bg-pattern"}),h.jsx("div",{className:"cg-menu-geass-symbols",children:h.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:h.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),h.jsxs("div",{className:"cg-menu-content",children:[h.jsxs("div",{className:"cg-menu-header",children:[h.jsxs("div",{className:"cg-menu-title-decoration",children:[h.jsx("div",{className:"cg-title-line-left"}),h.jsx("div",{className:"cg-title-ornament",children:h.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:h.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),h.jsx("div",{className:"cg-title-line-right"})]}),h.jsxs("h1",{className:"cg-game-title",children:[h.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),h.jsx("span",{className:"cg-title-divider",children:":"}),h.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),h.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),h.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[h.jsx("div",{className:"cg-title-line-left"}),h.jsx("div",{className:"cg-title-ornament",children:h.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[h.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),h.jsx("div",{className:"cg-title-line-right"})]})]}),h.jsxs("nav",{className:"cg-menu-nav",children:[h.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M8 5v14l11-7z"})})}),h.jsx("span",{className:"cg-button-text",children:"开始游戏"}),h.jsx("div",{className:"cg-button-shimmer"})]}),h.jsxs("button",{className:"cg-menu-button",onClick:t,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),h.jsx("span",{className:"cg-button-text",children:"设置"})]}),h.jsxs("button",{className:"cg-menu-button",onClick:n,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),h.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),h.jsx("footer",{className:"cg-menu-footer",children:h.jsx("div",{className:"cg-footer-decoration",children:h.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),h.jsx("style",{children:`
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
      `})]}),il=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function Wm(e){return il.find(t=>t.id===e)}function Je(e){if(!e)return"未知角色";const t=Wm(e);return(t==null?void 0:t.name)||e}const Km=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},Zm=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let li=null;const ol=()=>(li===null&&(li=Km()),li),Jm=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:a})=>{const[l,o]=A.useState(!1),[c,u]=A.useState(r),[p,x]=A.useState(!1),[i,s]=A.useState(!0),d=A.useRef(null),g=A.useRef(null),[v]=A.useState(()=>Math.floor(Math.random()*4)+1),_=n||v,f=A.useMemo(()=>Zm(t),[t]),m=A.useCallback((y=!0)=>`${`avatars/${e}/${_}`}-${f}.${y?"webp":"png"}`,[e,_,f]);return A.useEffect(()=>{if(r||c)return;const y=new IntersectionObserver(S=>{S.forEach(N=>{N.isIntersecting&&u(!0)})},{rootMargin:"50px",threshold:.1}),w=g.current;return w&&y.observe(w),()=>{w&&y.unobserve(w),y.disconnect()}},[r,c]),A.useEffect(()=>{if(!c)return;(async()=>{if(ol()&&i){const S=new Image;S.src=m(!0),S.onload=()=>{o(!0),a==null||a()},S.onerror=()=>{s(!1)}}else{const S=new Image;S.src=m(!1),S.onload=()=>{o(!0),a==null||a()},S.onerror=()=>{x(!0)}}})()},[c,m,a,i]),h.jsxs("div",{ref:g,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"transparent",position:"relative"},children:[!l&&!p&&h.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},children:h.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),p&&h.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#dc2626",fontSize:t*.2},children:"?"}),c&&h.jsxs("picture",{children:[ol()&&i&&h.jsx("source",{srcSet:m(!0),type:"image/webp"}),h.jsx("img",{ref:d,src:m(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:l?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),h.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class sl{static preloadCharacter(t){const n=["small","medium","large"],r=ol();for(let a=1;a<=4;a++)n.forEach(l=>{const o=`avatars/${t}/${a}-${l}.webp`,c=`avatars/${t}/${a}-${l}.png`;if(r&&!this.preloadedAvatars.has(o)){const u=new Image;u.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(c)){const u=new Image;u.src=c,this.preloadedAvatars.add(c)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(ol()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const c=new Image;c.src=o,this.preloadedAvatars.add(o)}}const l=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(l)){const o=new Image;o.src=l,this.preloadedAvatars.add(l)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}K(sl,"preloadedAvatars",new Set);const rs=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>h.jsx(Jm,{characterId:e,size:t,avatarNumber:n??1,priority:r}),qm=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[a,l]=A.useState(null),[o]=A.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),c=il.find(p=>p.id===e);A.useEffect(()=>{e&&sl.preloadAvatar(e,o[e])},[e,o]);const u=p=>{const x=o[p];t(p,x)};return h.jsxs("div",{className:"cg-character-select",children:[h.jsxs("div",{className:"cg-select-bg",children:[h.jsx("div",{className:"cg-select-bg-gradient"}),h.jsx("div",{className:"cg-select-bg-pattern"})]}),h.jsxs("div",{className:"cg-select-content",children:[h.jsxs("header",{className:"cg-select-header",children:[h.jsxs("button",{className:"cg-back-button",onClick:r,children:[h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),h.jsx("span",{children:"返回"})]}),h.jsx("h2",{className:"cg-select-title",children:h.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),h.jsx("div",{className:"cg-select-placeholder"})]}),h.jsx("div",{className:"cg-character-grid",children:il.map(p=>{const x=e===p.id,i=a===p.id;return h.jsxs("div",{className:`cg-character-card ${x?"cg-selected":""} ${i?"cg-hovered":""}`,onClick:()=>u(p.id),onMouseEnter:()=>l(p.id),onMouseLeave:()=>l(null),children:[h.jsxs("div",{className:"cg-card-frame",children:[h.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),h.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),h.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),h.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),h.jsx("div",{className:"cg-character-preview",children:h.jsx(rs,{characterId:p.id,size:300,avatarNumber:o[p.id],priority:a===p.id||e===p.id})}),h.jsxs("div",{className:"cg-character-info",children:[h.jsx("h3",{className:"cg-character-name",children:p.name}),h.jsx("p",{className:"cg-character-name-en",children:p.nameEn}),h.jsx("div",{className:"cg-character-skill",children:h.jsx("span",{className:"cg-skill-name",children:p.skill.name})})]}),x&&h.jsx("div",{className:"cg-selected-indicator",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:h.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),h.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${p.color}40 0%, transparent 70%)`}})]},p.id)})}),c&&h.jsx("div",{className:"cg-character-detail",children:h.jsxs("div",{className:"cg-detail-frame",children:[h.jsxs("div",{className:"cg-detail-content",children:[h.jsx("p",{className:"cg-detail-description",children:c.description}),h.jsxs("div",{className:"cg-detail-skill",children:[h.jsx("span",{className:"cg-skill-label",children:"技能:"}),h.jsx("span",{className:"cg-skill-value",children:c.skill.name}),h.jsx("p",{className:"cg-skill-desc",children:c.skill.description})]})]}),h.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[h.jsx("span",{children:"确认选择"}),h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),h.jsx("style",{children:`
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
      `})]})},eh="/liars-game/assets/cards/card-back.svg",rn={play:1500,aiPlay:1500,challenge:1500,dodge:1500,hit:1500,skip:1500,think:1e3},an={play:3,aiPlay:3,challenge:5,dodge:4,hit:4,skip:2,think:1},Ou={play:{duration:rn.play,priority:an.play,interruptible:!1},aiPlay:{duration:rn.aiPlay,priority:an.aiPlay,interruptible:!1},challenge:{duration:rn.challenge,priority:an.challenge,interruptible:!0},dodge:{duration:rn.dodge,priority:an.dodge,interruptible:!0},hit:{duration:rn.hit,priority:an.hit,interruptible:!0},skip:{duration:rn.skip,priority:an.skip,interruptible:!0},think:{duration:rn.think,priority:an.think,interruptible:!0}},er={play:"出牌",aiPlay:"出牌",challenge:"质疑",dodge:"闪避",hit:"命中",skip:"跳过",think:"思考中..."},Du={MAX_QUEUE_SIZE:10,BUFFER_TIME:100},ff={lelouch:{id:"lelouch",displayName:"鲁鲁修",colorTheme:"#d4af37"},cc:{id:"cc",displayName:"C.C.",colorTheme:"#22c55e"},suzaku:{id:"suzaku",displayName:"朱雀",colorTheme:"#3b82f6"},kallen:{id:"kallen",displayName:"卡莲",colorTheme:"#dc2626"}},th={player:null,ai:"cc",ai2:"suzaku",ai3:"kallen"},nh={lelouch:null,cc:"ai",suzaku:"ai2",kallen:"ai3"};function ii(e,t,n){const r=ff[e];return{characterId:e,displayName:r.displayName,playerId:t,animationTexts:{...er,...n},colorTheme:r.colorTheme}}const Fu={player:{characterId:"lelouch",displayName:"玩家",playerId:"player",animationTexts:{...er},colorTheme:"#d4af37"},ai:ii("cc","ai"),ai2:ii("suzaku","ai2"),ai3:ii("kallen","ai3")};class rh{constructor(){K(this,"registry");K(this,"playerCharacterId",null);this.registry={...Fu}}setPlayerCharacter(t){this.playerCharacterId=t;const n=ff[t];this.registry.player={characterId:t,displayName:n.displayName,playerId:"player",animationTexts:{...er},colorTheme:n.colorTheme}}getPlayerCharacterId(){return this.playerCharacterId}getCharacterConfig(t){return this.registry[t]}getPlayerIdByCharacterId(t){return nh[t]}getCharacterIdByPlayerId(t){return th[t]}getDisplayName(t){const n=this.registry[t];return(n==null?void 0:n.displayName)||"未知角色"}getColorTheme(t){const n=this.registry[t];return(n==null?void 0:n.colorTheme)||"#d4af37"}getAnimationText(t,n){var a;const r=this.registry[t];return((a=r==null?void 0:r.animationTexts)==null?void 0:a[n])||er[n]}reset(){this.registry={...Fu},this.playerCharacterId=null}getRegistry(){return{...this.registry}}}const pf=new rh,ah=e=>pf.setPlayerCharacter(e),lh=e=>pf.getPlayerIdByCharacterId(e),ih=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Nn=e=>({type:null,text:"",startTime:0,duration:0,playerId:e});function oh(){const[e,t]=A.useState({player:Nn("player"),ai:Nn("ai"),ai2:Nn("ai2"),ai3:Nn("ai3")}),[n,r]=A.useState({playerId:null,type:null,text:"",startTime:0}),[a,l]=A.useState({items:[],current:null,isProcessing:!1}),[o,c]=A.useState({show:!1,targetId:null}),u=A.useRef({}),p=A.useRef(!1),x=A.useCallback((_,f,m)=>{const y=Ou[f],w=m||er[f];t(S=>({...S,[_]:{type:f,text:w,startTime:Date.now(),duration:y.duration,playerId:_}})),u.current[_]&&clearTimeout(u.current[_]),u.current[_]=setTimeout(()=>{t(S=>({...S,[_]:Nn(_)}))},y.duration)},[]),i=A.useCallback((_,f,m)=>{u.current.persistent&&clearTimeout(u.current.persistent),r({playerId:_,type:f,text:m,startTime:Date.now()})},[]),s=A.useCallback(_=>{u.current[_]&&(clearTimeout(u.current[_]),delete u.current[_]),t(f=>({...f,[_]:Nn(_)}))},[]),d=A.useCallback(()=>{u.current.persistent&&(clearTimeout(u.current.persistent),delete u.current.persistent),r({playerId:null,type:null,text:"",startTime:0})},[]),g=A.useCallback((_,f,m,y)=>{const w=Ou[f],S={id:ih(),playerId:_,type:f,text:m||er[f],duration:w.duration,priority:y??w.priority,timestamp:Date.now()};l(N=>N.items.length>=Du.MAX_QUEUE_SIZE?(console.warn("[Animation Queue] Queue is full, dropping oldest item"),{...N,items:[...N.items.slice(1),S]}):{...N,items:[...N.items,S]})},[]);return A.useEffect(()=>{if(p.current||a.items.length===0||a.isProcessing)return;p.current=!0;const f=[...a.items].sort((m,y)=>y.priority-m.priority)[0];return l(m=>({...m,current:f,isProcessing:!0,items:m.items.filter(y=>y.id!==f.id)})),x(f.playerId,f.type,f.text),u.current.queue=setTimeout(()=>{l(m=>({...m,current:null,isProcessing:!1})),p.current=!1},f.duration+Du.BUFFER_TIME),()=>{u.current.queue&&clearTimeout(u.current.queue)}},[a.items,a.isProcessing,x]),A.useEffect(()=>()=>{Object.values(u.current).forEach(_=>{clearTimeout(_)}),u.current={}},[]),{animation:e.player,animations:e,persistentAnimation:n,playerChallengeAnimation:o,setPlayerChallengeAnimation:c,triggerAnimation:x,triggerPersistentAnimation:i,clearAnimation:s,clearPersistentAnimation:d,queue:a,enqueueAnimation:g}}function sh(){return{id:"challenge_initiated",condition:e=>{const n=e.lastAction||"",r=n.includes("发起质疑")&&n.includes("向");return console.log("[Challenge Trigger] condition check:",{lastAction:n,matches:r}),r},animationType:"challenge",getText:()=>"质疑",getPlayerId:e=>{const t=e,n=t.lastAction||"",r=n.match(/^(.+?)向/),a=r?r[1]:"";return console.log("[Challenge Trigger] getPlayerId:",{lastAction:n,challengerName:a}),Ra(a,t)},getData:e=>{const t=e,n=t.lastAction||"",r=n.match(/向(.+?)发起质疑/),a=r?r[1]:"",l=n.match(/^(.+?)向/),o=l?l[1]:"",c=Ra(a,t),u=Ra(o,t);return console.log("[Challenge Trigger] getData:",{targetName:a,targetId:c,challengerName:o,challengerId:u}),{targetId:c,challengerId:u,targetName:a,challengerName:o}}}}function uh(){return{id:"challenge_skipped",condition:e=>(e.lastAction||"").includes("选择不质疑"),animationType:"skip",getText:()=>"跳过",getPlayerId:e=>{const t=e,r=(t.lastAction||"").match(/^(.+?)选择不质疑/),a=r?r[1]:"";return Ra(a,t)}}}function ch(){return{id:"geass_dodge",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&(t.geassResult.isDodge||!t.geassResult.hit))},animationType:"dodge",getText:()=>"闪避",getPlayerId:e=>{var n,r,a;return((n=e.geassResult)==null?void 0:n.victimId)||((a=(r=e.turnState)==null?void 0:r.playedCards)==null?void 0:a.playerId)||"player"}}}function dh(){return{id:"geass_hit",condition:e=>{var n;const t=e;return!!((n=t.geassResult)!=null&&n.activated&&t.geassResult.hit)},animationType:"hit",getText:()=>"命中",getPlayerId:e=>{var n,r,a;return((n=e.geassResult)==null?void 0:n.victimId)||((a=(r=e.turnState)==null?void 0:r.playedCards)==null?void 0:a.playerId)||"player"}}}function fh(){return{id:"card_played",condition:e=>{const n=e.lastAction||"";return n.includes("出牌")||n.includes("出了")},animationType:"play",getText:()=>"出牌",getPlayerId:e=>{var n,r;return((r=(n=e.turnState)==null?void 0:n.playedCards)==null?void 0:r.playerId)||"player"}}}function Ra(e,t){var l;if(!e||e.trim()==="")return"player";const n=e.trim();if(n==="玩家")return"player";console.log("[resolvePlayerIdByName] 尝试匹配AI:",{trimmedName:n,aiPlayers:(l=t.aiPlayers)==null?void 0:l.map(o=>({id:o.id,name:o.name}))});for(const o of t.aiPlayers||[])if(o.name===n)return console.log("[resolvePlayerIdByName] 匹配成功:",o.id),o.id;const a={鲁鲁修:"lelouch","C.C.":"cc",朱雀:"suzaku",卡莲:"kallen"}[n];if(a){const o=lh(a);if(o)return console.log("[resolvePlayerIdByName] 通过角色ID匹配成功:",o),o}return console.warn(`[Animation Trigger] Could not resolve player ID for name: ${n}`),"player"}const Bu=[sh(),uh(),ch(),dh(),fh()];class ph{constructor(){K(this,"triggers",new Map);Bu.forEach(t=>{this.triggers.set(t.id,t)})}register(t){this.triggers.set(t.id,t)}unregister(t){this.triggers.delete(t)}get(t){return this.triggers.get(t)}getAll(){return Array.from(this.triggers.values())}parseGameState(t){const n=t.lastAction;console.log("[parseGameState] 开始解析:",{lastAction:n,phase:t.phase});for(const r of this.triggers.values())if(console.log("[parseGameState] 检查触发器:",r.id),r.condition(t)){console.log("[parseGameState] 触发器匹配成功:",r.id);const a=r.getData?r.getData(t):{};return{type:r.id,playerId:r.getPlayerId(t),timestamp:Date.now(),data:{animationType:r.animationType,text:r.getText(t),...a}}}return console.log("[parseGameState] 没有匹配的触发器"),null}reset(){this.triggers.clear(),Bu.forEach(t=>{this.triggers.set(t.id,t)})}}const mh=new ph,hh=e=>mh.parseGameState(e),mf={lelouch:{displayName:"鲁鲁修",colorTheme:"#d4af37"},cc:{displayName:"C.C.",colorTheme:"#22c55e"},suzaku:{displayName:"朱雀",colorTheme:"#3b82f6"},kallen:{displayName:"卡莲",colorTheme:"#dc2626"}},gr=e=>{var t;return e&&((t=mf[e])==null?void 0:t.displayName)||"未知角色"},_a=e=>{var t;return e&&((t=mf[e])==null?void 0:t.colorTheme)||"#d4af37"},$u=e=>e&&{play:"cg-anim-play",aiPlay:"cg-anim-aiPlay",challenge:"cg-anim-challenge",dodge:"cg-anim-dodge",hit:"cg-anim-hit",skip:"",think:""}[e]||"",Hu=e=>e?`cg-action-${e}`:"",gh=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:a=["cc","suzaku","kallen"],aiAvatars:l={},onToggleCardSelection:o,onConfirmPlay:c,onPass:u,onChallenge:p,onBackToMenu:x,onLelouchSkill:i,gameLog:s=[],isProcessing:d=!1,canUseSkill:g=!0,aiThinkingState:v})=>{var I,O,H,U,Y,D,te,ie,oe,W,Ye,we,ir,kn,Sn,as,ls,is,os,ss,us,cs,ds,fs,ps,ms,hs,gs,ys,vs,xs,_s,ws,ks;const[_,f]=A.useState(!1),[m,y]=A.useState(!1),w=A.useRef(null),S=A.useRef(null),N=A.useRef(s.length),T=A.useRef(null),P=typeof window<"u"&&window.innerWidth<=768,M=A.useRef(null),{animations:L,persistentAnimation:V,playerChallengeAnimation:F,triggerAnimation:le,triggerPersistentAnimation:de,clearPersistentAnimation:Xe,setPlayerChallengeAnimation:Qe}=oh();if(A.useEffect(()=>{n&&ah(n)},[n]),A.useEffect(()=>{if(w.current&&s.length>N.current){const z=w.current;z.scrollTo({top:z.scrollHeight,behavior:"smooth"})}N.current=s.length},[s]),A.useEffect(()=>{if(!P||!m)return;const z=()=>{T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{y(!1)},3e3)};z();const fe=S.current;if(fe){const Fe=["click","touchstart","scroll"];return Fe.forEach(xt=>{fe.addEventListener(xt,z)}),()=>{Fe.forEach(xt=>{fe.removeEventListener(xt,z)}),T.current&&clearTimeout(T.current)}}return()=>{T.current&&clearTimeout(T.current)}},[m,P]),A.useEffect(()=>{if(!e)return;const{lastAction:z,phase:fe,geassResult:Fe}=e;if(console.log("[GameTable Animation] useEffect triggered:",{lastAction:z,processedAction:M.current,phase:fe}),z&&z===M.current){console.log("[GameTable Animation] 跳过重复动作");return}const xt=hh(e);if(console.log("[GameTable Animation] parseGameStateForAnimation result:",xt),xt){const{playerId:We,data:Ie}=xt,_t=Ie==null?void 0:Ie.animationType,Cn=(Ie==null?void 0:Ie.text)||"";if(console.log("[Animation] 触发:",{playerId:We,type:_t,text:Cn}),z&&(M.current=z),_t==="play"||_t==="aiPlay")de(We,_t==="play"?"play":"aiPlay","出牌中..."),le(We,_t,Cn||"出牌");else if(_t==="challenge"){const rt=Ie==null?void 0:Ie.targetId,wt=Ie==null?void 0:Ie.challengerId;console.log("[Animation] 质疑动画:",{playerId:We,targetId:rt,challengerId:wt,isPlayer:We==="player"}),We==="player"&&rt?(Qe({show:!0,targetId:rt}),le(We,"challenge","质疑中...")):rt?(le(We,"challenge","质疑中..."),le(rt,"challenge","被质疑")):le(We,"challenge",Cn||"质疑")}else le(We,_t,Cn)}fe==="challenge"&&V.playerId&&setTimeout(()=>{Xe()},500),Fe!=null&&Fe.activated&&F.show&&setTimeout(()=>{Qe({show:!1,targetId:null})},500)},[e,le,de,Xe,Qe]),A.useEffect(()=>{n&&sl.preloadAvatar(n,r),a.forEach(z=>{const fe=l[z]||1;sl.preloadAvatar(z,fe)})},[n,r,a,l]),!e)return null;const{phase:Oe,liarCard:b,playerStats:R,aiPlayers:k,turnState:$}=e,Q=Oe==="player_turn",ft=Oe==="challenge",Ne=e.playerHand||[],nn=($==null?void 0:$.turnNumber)||1,De=ft,Mt=()=>{t.length>0&&c()},bl=()=>f(!0),ar=()=>{y(z=>!z)},El=z=>{f(!1),i==null||i(z)},Pl=z=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[z]||z,ta=z=>z==="joker"?"#d4af37":z==="hearts"||z==="diamonds"?"#dc2626":"#1a1a24",lr=n,na=lr?gr(lr):"玩家",Il=_a(lr),j=(z,fe,Fe,xt,We,Ie,_t=!1,Cn=!0,rt="player")=>{const wt=L[rt],yf=$u((wt==null?void 0:wt.type)||null),Ss=(v==null?void 0:v.isThinking)&&(v==null?void 0:v.aiId)===rt,jl=V.playerId===rt&&V.type,vf=jl?$u(V.type):"",Cs=F.show&&rt==="player",As=F.show&&F.targetId===rt,Ns=(wt==null?void 0:wt.text)||"",xf=jl?V.text:"";return h.jsxs("div",{className:`cg-character ${_t?"cg-character-top":""} ${Cn?"":"cg-character-dead"} ${yf} ${vf} ${Ss?"cg-character-thinking":""} ${Cs?"cg-player-challenging":""} ${As?"cg-being-challenged":""}`,children:[Ns&&h.jsx("div",{className:`cg-action-text ${Hu(wt.type)}`,children:Ns}),jl&&h.jsx("div",{className:`cg-action-text ${Hu(V.type)} cg-persistent-text`,children:xf}),Cs&&h.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"质疑中..."}),As&&h.jsx("div",{className:"cg-action-text cg-action-challenge cg-persistent-text",children:"被质疑"}),Ss&&h.jsx("div",{className:"cg-thinking-indicator",children:h.jsx("span",{className:"cg-thinking-dots",children:"..."})}),h.jsx("div",{className:"cg-character-avatar",children:fe&&h.jsx(rs,{characterId:fe,size:120,avatarNumber:Ie,priority:!0})}),h.jsxs("div",{className:"cg-character-info",children:[h.jsx("div",{className:"cg-character-name",style:{color:We},children:z}),h.jsxs("div",{className:"cg-character-stats",children:[h.jsx("span",{className:"cg-hp-display",children:Array(Fe).fill("❤").join("")}),h.jsxs("span",{className:"cg-card-count",children:["🃏",xt]})]})]})]})};return h.jsxs("div",{className:"cg-game-table",children:[h.jsx("div",{className:"cg-top-bar",children:h.jsxs("button",{className:`cg-log-toggle-btn-top ${m?"expanded":""}`,onClick:ar,"aria-label":m?"收起记录":"展开记录",children:[h.jsx("span",{className:"cg-log-toggle-icon",children:"📜"}),h.jsx("span",{className:"cg-log-toggle-text",children:"记录"}),!m&&s.length>0&&h.jsx("span",{className:"cg-log-badge",children:s.length})]})}),h.jsxs("div",{className:"cg-main-layout",children:[h.jsxs("div",{ref:S,className:`cg-log-panel ${m?"expanded":"collapsed"}`,children:[h.jsxs("div",{className:"cg-log-header",children:[h.jsx("span",{children:"📜 游戏记录"}),h.jsx("button",{className:"cg-log-close-btn mobile-only",onClick:ar,children:"✕"})]}),h.jsx("div",{ref:w,className:"cg-log-content",children:s.map((z,fe)=>h.jsx("div",{className:`cg-log-item ${z.includes("质疑")?"challenge":""} ${z.includes("Geass")?"geass":""}`,children:z},fe))})]}),m&&h.jsx("div",{className:"cg-log-overlay",onClick:ar}),h.jsxs("div",{className:"cg-game-area",children:[h.jsx("div",{className:"cg-ai-top",children:j(gr((I=k==null?void 0:k[2])==null?void 0:I.character),((O=k==null?void 0:k[2])==null?void 0:O.character)||a[2],((U=(H=k==null?void 0:k[2])==null?void 0:H.stats)==null?void 0:U.hp)||0,((D=(Y=k==null?void 0:k[2])==null?void 0:Y.hand)==null?void 0:D.length)||0,_a((te=k==null?void 0:k[2])==null?void 0:te.character),l[((ie=k==null?void 0:k[2])==null?void 0:ie.character)||a[2]]||1,!0,((oe=k==null?void 0:k[2])==null?void 0:oe.isActive)!==!1&&(((Ye=(W=k==null?void 0:k[2])==null?void 0:W.stats)==null?void 0:Ye.hp)||0)>0,"ai3")}),h.jsxs("div",{className:"cg-middle-section",children:[h.jsx("div",{className:"cg-ai-left",children:j(gr((we=k==null?void 0:k[0])==null?void 0:we.character),((ir=k==null?void 0:k[0])==null?void 0:ir.character)||a[0],((Sn=(kn=k==null?void 0:k[0])==null?void 0:kn.stats)==null?void 0:Sn.hp)||0,((ls=(as=k==null?void 0:k[0])==null?void 0:as.hand)==null?void 0:ls.length)||0,_a((is=k==null?void 0:k[0])==null?void 0:is.character),l[((os=k==null?void 0:k[0])==null?void 0:os.character)||a[0]]||1,!1,((ss=k==null?void 0:k[0])==null?void 0:ss.isActive)!==!1&&(((cs=(us=k==null?void 0:k[0])==null?void 0:us.stats)==null?void 0:cs.hp)||0)>0,"ai")}),h.jsx("div",{className:"cg-table-area",children:h.jsx("div",{className:"cg-table",children:h.jsx("div",{className:"cg-table-inner",children:$!=null&&$.playedCards?h.jsxs("div",{className:"cg-played",children:[h.jsxs("div",{className:"cg-played-name",children:[$.playedCards.playerId==="player"?na:$.playedCards.playerId.startsWith("ai")?gr((ds=k==null?void 0:k.find(z=>{var fe;return z.id===((fe=$.playedCards)==null?void 0:fe.playerId)}))==null?void 0:ds.character):"未知玩家"," ","出牌"]}),h.jsx("div",{className:"cg-cards",children:$.playedCards.actualCards.map(z=>h.jsx("div",{className:"cg-card-small cg-card-back",children:h.jsx("img",{src:eh,alt:"牌背"})},z.id))}),h.jsxs("div",{className:"cg-card-count-display",children:[$.playedCards.cardIds.length," 张牌"]})]}):h.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),h.jsx("div",{className:"cg-ai-right",children:j(gr((fs=k==null?void 0:k[1])==null?void 0:fs.character),((ps=k==null?void 0:k[1])==null?void 0:ps.character)||a[1],((hs=(ms=k==null?void 0:k[1])==null?void 0:ms.stats)==null?void 0:hs.hp)||0,((ys=(gs=k==null?void 0:k[1])==null?void 0:gs.hand)==null?void 0:ys.length)||0,_a((vs=k==null?void 0:k[1])==null?void 0:vs.character),l[((xs=k==null?void 0:k[1])==null?void 0:xs.character)||a[1]]||1,!1,((_s=k==null?void 0:k[1])==null?void 0:_s.isActive)!==!1&&(((ks=(ws=k==null?void 0:k[1])==null?void 0:ws.stats)==null?void 0:ks.hp)||0)>0,"ai2")})]}),h.jsxs("div",{className:"cg-player-section",children:[h.jsx("div",{className:"cg-player-info",children:j(na,n,R.hp,Ne.length,Il,r,!1,!0,"player")}),h.jsxs("div",{className:"cg-hand-section",children:[h.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,Ne.length*26+22)}px`},children:Ne.map((z,fe)=>{const Fe=t.includes(z.id);return h.jsxs("button",{className:`cg-card ${Fe?"selected":""} ${!Q||d?"disabled":""}`,onClick:()=>o(z.id),style:{left:`${fe*26}px`,transform:Fe?"translateY(-8px)":"none",zIndex:Fe?Ne.length+10:Ne.length-fe},disabled:!Q||d,children:[h.jsxs("div",{className:"cg-card-face",children:[h.jsx("div",{style:{color:ta(z.suit),fontSize:"13px"},children:z.rank}),h.jsx("div",{style:{color:ta(z.suit),fontSize:"15px"},children:Pl(z.suit)})]}),Fe&&h.jsx("div",{className:"cg-check",children:"✓"})]},z.id)})}),n==="lelouch"&&h.jsx("button",{className:"cg-skill-btn",onClick:bl,disabled:d||!g||!Q,children:g?"绝对命令":"已使用"})]})]})]})]}),h.jsxs("div",{className:"cg-bottom-bar",children:[h.jsx("div",{className:"cg-bottom-left",children:h.jsx("button",{className:"cg-back-btn",onClick:x,children:"← 主页面"})}),h.jsxs("div",{className:"cg-bottom-center",children:[!De&&h.jsxs("div",{className:"cg-status-text",children:[Q&&t.length===0&&"请选择要出的牌",Q&&t.length>0&&`已选择 ${t.length} 张牌`,ft&&!De&&"等待其他玩家质疑...",!Q&&!ft&&"AI回合中..."]}),h.jsxs("div",{className:"cg-action-buttons",children:[Q&&t.length>0&&h.jsxs("button",{className:"cg-btn cg-btn-play",onClick:Mt,disabled:d,children:["出牌 (",t.length,")"]}),De&&h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:p,disabled:d,children:"⚔️ 质疑"}),h.jsx("button",{className:"cg-btn cg-btn-skip",onClick:u,disabled:d,children:"不质疑"})]})]})]}),h.jsxs("div",{className:"cg-bottom-right",children:[h.jsxs("div",{className:"cg-round-display",children:[h.jsx("div",{className:"cg-round-label",children:"回合"}),h.jsx("div",{className:"cg-round-number",children:nn})]}),h.jsxs("div",{className:"cg-liar-display",children:[h.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),h.jsx("div",{className:"cg-liar-value",children:b})]})]})]}),_&&h.jsx("div",{className:"cg-modal",children:h.jsxs("div",{className:"cg-modal-content",children:[h.jsx("h3",{children:"选择新的骗子牌"}),h.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(z=>h.jsx("button",{className:z===b?"current":"",onClick:()=>El(z),children:z},z))}),h.jsx("button",{className:"cg-btn-skip",onClick:()=>f(!1),children:"取消"})]})}),h.jsx("style",{children:`
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
      `})]})},yh=({isWin:e,turnNumber:t,onRestart:n,onMainMenu:r})=>{const[a,l]=A.useState(!1),[o,c]=A.useState(!1);A.useEffect(()=>{e&&l(!0);const p=setTimeout(()=>c(!0),1e3);return()=>clearTimeout(p)},[e]);const u=e?"lelouch":"cc";return h.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[h.jsxs("div",{className:"cg-result-bg",children:[h.jsx("div",{className:"cg-result-bg-gradient"}),e?h.jsx("div",{className:"cg-result-bg-win",children:h.jsx("div",{className:"cg-victory-rays"})}):h.jsx("div",{className:"cg-result-bg-lose",children:h.jsx("div",{className:"cg-defeat-shadow"})})]}),a&&h.jsx(vh,{}),h.jsxs("div",{className:`cg-result-content ${o?"cg-animate-in":""}`,children:[h.jsxs("div",{className:"cg-result-header",children:[h.jsx("div",{className:"cg-result-badge",children:e?h.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[h.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:h.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((p,x)=>h.jsx("circle",{cx:50+35*Math.cos((x*72-90)*Math.PI/180),cy:50+35*Math.sin((x*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:h.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${x*.2}s`,repeatCount:"indefinite"})},x))]}):h.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[h.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),h.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:h.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),h.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),h.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),h.jsx("div",{className:"cg-result-character",children:h.jsxs("div",{className:"cg-character-showcase",children:[h.jsx(rs,{characterId:u,size:200}),h.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),h.jsx("div",{className:"cg-result-score",children:h.jsxs("div",{className:"cg-score-simple",children:[h.jsx("span",{className:"cg-score-label",children:"回合数"}),h.jsx("span",{className:"cg-score-value",children:t})]})}),h.jsxs("div",{className:"cg-result-actions",children:[h.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:n,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),h.jsx("span",{children:"再来一局"})]}),h.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:r,children:[h.jsx("span",{className:"cg-button-icon",children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),h.jsx("span",{children:"返回主菜单"})]})]})]}),h.jsx("style",{children:`
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
      `})]})},vh=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return h.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>h.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var kt={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var i=this||n;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window<"u"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var s=this||n;if(i=parseFloat(i),s.ctx||x(),typeof i<"u"&&i>=0&&i<=1){if(s._volume=i,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),v=0;v<g.length;v++){var _=s._howls[d]._soundById(g[v]);_&&_._node&&(_._node.volume=_._volume*i)}return s}return s._volume},mute:function(i){var s=this||n;s.ctx||x(),s._muted=i,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i?0:s._volume,n.ctx.currentTime);for(var d=0;d<s._howls.length;d++)if(!s._howls[d]._webAudio)for(var g=s._howls[d]._getSoundIds(),v=0;v<g.length;v++){var _=s._howls[d]._soundById(g[v]);_&&_._node&&(_._node.muted=i?!0:_._muted)}return s},stop:function(){for(var i=this||n,s=0;s<i._howls.length;s++)i._howls[s].stop();return i},unload:function(){for(var i=this||n,s=i._howls.length-1;s>=0;s--)i._howls[s].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close<"u"&&(i.ctx.close(),i.ctx=null,x()),i},codecs:function(i){return(this||n)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||n;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(i._canPlayEvent="canplay")}catch{i.noAudio=!0}else i.noAudio=!0;try{var s=new Audio;s.muted&&(i.noAudio=!0)}catch{}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return i}if(!s||typeof s.canPlayType!="function")return i;var d=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=i._navigator?i._navigator.userAgent:"",v=g.match(/OPR\/(\d+)/g),_=v&&parseInt(v[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,m=g.match(/Version\/(.*?) /),y=f&&m&&parseInt(m[1],10)<15;return i._codecs={mp3:!!(!_&&(d||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||n;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var s=function(d){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,i._releaseHtml5Audio(g)}catch{i.noAudio=!0;break}for(var v=0;v<i._howls.length;v++)if(!i._howls[v]._webAudio)for(var _=i._howls[v]._getSoundIds(),f=0;f<_.length;f++){var m=i._howls[v]._soundById(_[f]);m&&m._node&&!m._node._unlocked&&(m._node._unlocked=!0,m._node.load())}i._autoResume();var y=i.ctx.createBufferSource();y.buffer=i._scratchBuffer,y.connect(i.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),y.onended=function(){y.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<i._howls.length;w++)i._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),i}},_obtainHtml5Audio:function(){var i=this||n;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var s=this||n;return i._unlocked&&s._html5AudioPool.push(i),s},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<i._howls.length;s++)if(i._howls[s]._webAudio){for(var d=0;d<i._howls[s]._sounds.length;d++)if(!i._howls[s]._sounds[d]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(i.autoSuspend){i._suspendTimer=null,i.state="suspending";var g=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(g,g)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume>"u"||!n.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var s=0;s<i._howls.length;s++)i._howls[s]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var n=new t,r=function(i){var s=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(i)};r.prototype={init:function(i){var s=this;return n.ctx||x(),s._autoplay=i.autoplay||!1,s._format=typeof i.format!="string"?i.format:[i.format],s._html5=i.html5||!1,s._muted=i.mute||!1,s._loop=i.loop||!1,s._pool=i.pool||5,s._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,s._rate=i.rate||1,s._sprite=i.sprite||{},s._src=typeof i.src!="string"?i.src:[i.src],s._volume=i.volume!==void 0?i.volume:1,s._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=i.onend?[{fn:i.onend}]:[],s._onfade=i.onfade?[{fn:i.onfade}]:[],s._onload=i.onload?[{fn:i.onload}]:[],s._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],s._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],s._onpause=i.onpause?[{fn:i.onpause}]:[],s._onplay=i.onplay?[{fn:i.onplay}]:[],s._onstop=i.onstop?[{fn:i.onstop}]:[],s._onmute=i.onmute?[{fn:i.onmute}]:[],s._onvolume=i.onvolume?[{fn:i.onvolume}]:[],s._onrate=i.onrate?[{fn:i.onrate}]:[],s._onseek=i.onseek?[{fn:i.onseek}]:[],s._onunlock=i.onunlock?[{fn:i.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var i=this,s=null;if(n.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var d=0;d<i._src.length;d++){var g,v;if(i._format&&i._format[d])g=i._format[d];else{if(v=i._src[d],typeof v!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(v),g||(g=/\.([^.]+)$/.exec(v.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=i._src[d];break}}if(!s){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=s,i._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new a(i),i._webAudio&&o(i),i},play:function(i,s){var d=this,g=null;if(typeof i=="number")g=i,i=null;else{if(typeof i=="string"&&d._state==="loaded"&&!d._sprite[i])return null;if(typeof i>"u"&&(i="__default",!d._playLock)){for(var v=0,_=0;_<d._sounds.length;_++)d._sounds[_]._paused&&!d._sounds[_]._ended&&(v++,g=d._sounds[_]._id);v===1?i=null:g=null}}var f=g?d._soundById(g):d._inactiveSound();if(!f)return null;if(g&&!i&&(i=f._sprite||"__default"),d._state!=="loaded"){f._sprite=i,f._ended=!1;var m=f._id;return d._queue.push({event:"play",action:function(){d.play(m)}}),m}if(g&&!f._paused)return s||d._loadQueue("play"),f._id;d._webAudio&&n._autoResume();var y=Math.max(0,f._seek>0?f._seek:d._sprite[i][0]/1e3),w=Math.max(0,(d._sprite[i][0]+d._sprite[i][1])/1e3-y),S=w*1e3/Math.abs(f._rate),N=d._sprite[i][0]/1e3,T=(d._sprite[i][0]+d._sprite[i][1])/1e3;f._sprite=i,f._ended=!1;var P=function(){f._paused=!1,f._seek=y,f._start=N,f._stop=T,f._loop=!!(f._loop||d._sprite[i][2])};if(y>=T){d._ended(f);return}var M=f._node;if(d._webAudio){var L=function(){d._playLock=!1,P(),d._refreshBuffer(f);var de=f._muted||d._muted?0:f._volume;M.gain.setValueAtTime(de,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof M.bufferSource.start>"u"?f._loop?M.bufferSource.noteGrainOn(0,y,86400):M.bufferSource.noteGrainOn(0,y,w):f._loop?M.bufferSource.start(0,y,86400):M.bufferSource.start(0,y,w),S!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),S)),s||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?L():(d._playLock=!0,d.once("resume",L),d._clearTimer(f._id))}else{var V=function(){M.currentTime=y,M.muted=f._muted||d._muted||n._muted||M.muted,M.volume=f._volume*n.volume(),M.playbackRate=f._rate;try{var de=M.play();if(de&&typeof Promise<"u"&&(de instanceof Promise||typeof de.then=="function")?(d._playLock=!0,P(),de.then(function(){d._playLock=!1,M._unlocked=!0,s?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(d._playLock=!1,P(),d._emit("play",f._id)),M.playbackRate=f._rate,M.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),S):(d._endTimers[f._id]=function(){d._ended(f),M.removeEventListener("ended",d._endTimers[f._id],!1)},M.addEventListener("ended",d._endTimers[f._id],!1))}catch(Xe){d._emit("playerror",f._id,Xe)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=d._src,M.load());var F=window&&window.ejecta||!M.readyState&&n._navigator.isCocoonJS;if(M.readyState>=3||F)V();else{d._playLock=!0,d._state="loading";var le=function(){d._state="loaded",V(),M.removeEventListener(n._canPlayEvent,le,!1)};M.addEventListener(n._canPlayEvent,le,!1),d._clearTimer(f._id)}}return f._id},pause:function(i){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(i)}}),s;for(var d=s._getSoundIds(i),g=0;g<d.length;g++){s._clearTimer(d[g]);var v=s._soundById(d[g]);if(v&&!v._paused&&(v._seek=s.seek(d[g]),v._rateSeek=0,v._paused=!0,s._stopFade(d[g]),v._node))if(s._webAudio){if(!v._node.bufferSource)continue;typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),s._cleanBuffer(v._node)}else(!isNaN(v._node.duration)||v._node.duration===1/0)&&v._node.pause();arguments[1]||s._emit("pause",v?v._id:null)}return s},stop:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(i)}}),d;for(var g=d._getSoundIds(i),v=0;v<g.length;v++){d._clearTimer(g[v]);var _=d._soundById(g[v]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,d._stopFade(g[v]),_._node&&(d._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),d._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&d._clearSound(_._node))),s||d._emit("stop",_._id))}return d},mute:function(i,s){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(i,s)}}),d;if(typeof s>"u")if(typeof i=="boolean")d._muted=i;else return d._muted;for(var g=d._getSoundIds(s),v=0;v<g.length;v++){var _=d._soundById(g[v]);_&&(_._muted=i,_._interval&&d._stopFade(_._id),d._webAudio&&_._node?_._node.gain.setValueAtTime(i?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:i),d._emit("mute",_._id))}return d},volume:function(){var i=this,s=arguments,d,g;if(s.length===0)return i._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length>=2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,s)}}),i;typeof g>"u"&&(i._volume=d),g=i._getSoundIds(g);for(var m=0;m<g.length;m++)f=i._soundById(g[m]),f&&(f._volume=d,s[2]||i._stopFade(g[m]),i._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*n.volume()),i._emit("volume",f._id))}else return f=g?i._soundById(g):i._sounds[0],f?f._volume:0;return i},fade:function(i,s,d,g){var v=this;if(v._state!=="loaded"||v._playLock)return v._queue.push({event:"fade",action:function(){v.fade(i,s,d,g)}}),v;i=Math.min(Math.max(0,parseFloat(i)),1),s=Math.min(Math.max(0,parseFloat(s)),1),d=parseFloat(d),v.volume(i,g);for(var _=v._getSoundIds(g),f=0;f<_.length;f++){var m=v._soundById(_[f]);if(m){if(g||v._stopFade(_[f]),v._webAudio&&!m._muted){var y=n.ctx.currentTime,w=y+d/1e3;m._volume=i,m._node.gain.setValueAtTime(i,y),m._node.gain.linearRampToValueAtTime(s,w)}v._startFadeInterval(m,i,s,d,_[f],typeof g>"u")}}return v},_startFadeInterval:function(i,s,d,g,v,_){var f=this,m=s,y=d-s,w=Math.abs(y/.01),S=Math.max(4,w>0?g/w:g),N=Date.now();i._fadeTo=d,i._interval=setInterval(function(){var T=(Date.now()-N)/g;N=Date.now(),m+=y*T,m=Math.round(m*100)/100,y<0?m=Math.max(d,m):m=Math.min(d,m),f._webAudio?i._volume=m:f.volume(m,i._id,!0),_&&(f._volume=m),(d<s&&m<=d||d>s&&m>=d)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,f.volume(d,i._id),f._emit("fade",i._id))},S)},_stopFade:function(i){var s=this,d=s._soundById(i);return d&&d._interval&&(s._webAudio&&d._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(d._interval),d._interval=null,s.volume(d._fadeTo,i),d._fadeTo=null,s._emit("fade",i)),s},loop:function(){var i=this,s=arguments,d,g,v;if(s.length===0)return i._loop;if(s.length===1)if(typeof s[0]=="boolean")d=s[0],i._loop=d;else return v=i._soundById(parseInt(s[0],10)),v?v._loop:!1;else s.length===2&&(d=s[0],g=parseInt(s[1],10));for(var _=i._getSoundIds(g),f=0;f<_.length;f++)v=i._soundById(_[f]),v&&(v._loop=d,i._webAudio&&v._node&&v._node.bufferSource&&(v._node.bufferSource.loop=d,d&&(v._node.bufferSource.loopStart=v._start||0,v._node.bufferSource.loopEnd=v._stop,i.playing(_[f])&&(i.pause(_[f],!0),i.play(_[f],!0)))));return i},rate:function(){var i=this,s=arguments,d,g;if(s.length===0)g=i._sounds[0]._id;else if(s.length===1){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):d=parseFloat(s[0])}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof d=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,s)}}),i;typeof g>"u"&&(i._rate=d),g=i._getSoundIds(g);for(var m=0;m<g.length;m++)if(f=i._soundById(g[m]),f){i.playing(g[m])&&(f._rateSeek=i.seek(g[m]),f._playStart=i._webAudio?n.ctx.currentTime:f._playStart),f._rate=d,i._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,n.ctx.currentTime):f._node&&(f._node.playbackRate=d);var y=i.seek(g[m]),w=(i._sprite[f._sprite][0]+i._sprite[f._sprite][1])/1e3-y,S=w*1e3/Math.abs(f._rate);(i._endTimers[g[m]]||!f._paused)&&(i._clearTimer(g[m]),i._endTimers[g[m]]=setTimeout(i._ended.bind(i,f),S)),i._emit("rate",f._id)}}else return f=i._soundById(g),f?f._rate:i._rate;return i},seek:function(){var i=this,s=arguments,d,g;if(s.length===0)i._sounds.length&&(g=i._sounds[0]._id);else if(s.length===1){var v=i._getSoundIds(),_=v.indexOf(s[0]);_>=0?g=parseInt(s[0],10):i._sounds.length&&(g=i._sounds[0]._id,d=parseFloat(s[0]))}else s.length===2&&(d=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,s)}}),i;var f=i._soundById(g);if(f)if(typeof d=="number"&&d>=0){var m=i.playing(g);m&&i.pause(g,!0),f._seek=d,f._ended=!1,i._clearTimer(g),!i._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var y=function(){m&&i.play(g,!0),i._emit("seek",g)};if(m&&!i._webAudio){var w=function(){i._playLock?setTimeout(w,0):y()};setTimeout(w,0)}else y()}else if(i._webAudio){var S=i.playing(g)?n.ctx.currentTime-f._playStart:0,N=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(N+S*Math.abs(f._rate))}else return f._node.currentTime;return i},playing:function(i){var s=this;if(typeof i=="number"){var d=s._soundById(i);return d?!d._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(i){var s=this,d=s._duration,g=s._soundById(i);return g&&(d=s._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var i=this,s=i._sounds,d=0;d<s.length;d++)s[d]._paused||i.stop(s[d]._id),i._webAudio||(i._clearSound(s[d]._node),s[d]._node.removeEventListener("error",s[d]._errorFn,!1),s[d]._node.removeEventListener(n._canPlayEvent,s[d]._loadFn,!1),s[d]._node.removeEventListener("ended",s[d]._endFn,!1),n._releaseHtml5Audio(s[d]._node)),delete s[d]._node,i._clearTimer(s[d]._id);var g=n._howls.indexOf(i);g>=0&&n._howls.splice(g,1);var v=!0;for(d=0;d<n._howls.length;d++)if(n._howls[d]._src===i._src||i._src.indexOf(n._howls[d]._src)>=0){v=!1;break}return l&&v&&delete l[i._src],n.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,s,d,g){var v=this,_=v["_on"+i];return typeof s=="function"&&_.push(g?{id:d,fn:s,once:g}:{id:d,fn:s}),v},off:function(i,s,d){var g=this,v=g["_on"+i],_=0;if(typeof s=="number"&&(d=s,s=null),s||d)for(_=0;_<v.length;_++){var f=d===v[_].id;if(s===v[_].fn&&f||!s&&f){v.splice(_,1);break}}else if(i)g["_on"+i]=[];else{var m=Object.keys(g);for(_=0;_<m.length;_++)m[_].indexOf("_on")===0&&Array.isArray(g[m[_]])&&(g[m[_]]=[])}return g},once:function(i,s,d){var g=this;return g.on(i,s,d,1),g},_emit:function(i,s,d){for(var g=this,v=g["_on"+i],_=v.length-1;_>=0;_--)(!v[_].id||v[_].id===s||i==="load")&&(setTimeout((function(f){f.call(this,s,d)}).bind(g,v[_].fn),0),v[_].once&&g.off(i,v[_].fn,v[_].id));return g._loadQueue(i),g},_loadQueue:function(i){var s=this;if(s._queue.length>0){var d=s._queue[0];d.event===i&&(s._queue.shift(),s._loadQueue()),i||d.action()}return s},_ended:function(i){var s=this,d=i._sprite;if(!s._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(s._ended.bind(s,i),100),s;var g=!!(i._loop||s._sprite[d][2]);if(s._emit("end",i._id),!s._webAudio&&g&&s.stop(i._id,!0).play(i._id),s._webAudio&&g){s._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=n.ctx.currentTime;var v=(i._stop-i._start)*1e3/Math.abs(i._rate);s._endTimers[i._id]=setTimeout(s._ended.bind(s,i),v)}return s._webAudio&&!g&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,s._clearTimer(i._id),s._cleanBuffer(i._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(i._id,!0),s},_clearTimer:function(i){var s=this;if(s._endTimers[i]){if(typeof s._endTimers[i]!="function")clearTimeout(s._endTimers[i]);else{var d=s._soundById(i);d&&d._node&&d._node.removeEventListener("ended",s._endTimers[i],!1)}delete s._endTimers[i]}return s},_soundById:function(i){for(var s=this,d=0;d<s._sounds.length;d++)if(i===s._sounds[d]._id)return s._sounds[d];return null},_inactiveSound:function(){var i=this;i._drain();for(var s=0;s<i._sounds.length;s++)if(i._sounds[s]._ended)return i._sounds[s].reset();return new a(i)},_drain:function(){var i=this,s=i._pool,d=0,g=0;if(!(i._sounds.length<s)){for(g=0;g<i._sounds.length;g++)i._sounds[g]._ended&&d++;for(g=i._sounds.length-1;g>=0;g--){if(d<=s)return;i._sounds[g]._ended&&(i._webAudio&&i._sounds[g]._node&&i._sounds[g]._node.disconnect(0),i._sounds.splice(g,1),d--)}}},_getSoundIds:function(i){var s=this;if(typeof i>"u"){for(var d=[],g=0;g<s._sounds.length;g++)d.push(s._sounds[g]._id);return d}else return[i]},_refreshBuffer:function(i){var s=this;return i._node.bufferSource=n.ctx.createBufferSource(),i._node.bufferSource.buffer=l[s._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,n.ctx.currentTime),s},_cleanBuffer:function(i){var s=this,d=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!i.bufferSource)return s;if(n._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),d))try{i.bufferSource.buffer=n._scratchBuffer}catch{}return i.bufferSource=null,s},_clearSound:function(i){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(i){this._parent=i,this.init()};a.prototype={init:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,s._sounds.push(i),i.create(),i},create:function(){var i=this,s=i._parent,d=n._muted||i._muted||i._parent._muted?0:i._volume;return s._webAudio?(i._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),i._node.gain.setValueAtTime(d,n.ctx.currentTime),i._node.paused=!0,i._node.connect(n.masterGain)):n.noAudio||(i._node=n._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(n._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=s._src,i._node.preload=s._preload===!0?"auto":s._preload,i._node.volume=d*n.volume(),i._node.load()),i},reset:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,s=i._parent;s._duration=Math.ceil(i._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),i._node.removeEventListener(n._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,s=i._parent;s._duration===1/0&&(s._duration=Math.ceil(i._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var l={},o=function(i){var s=i._src;if(l[s]){i._duration=l[s].duration,p(i);return}if(/^data:[^;]+;base64,/.test(s)){for(var d=atob(s.split(",")[1]),g=new Uint8Array(d.length),v=0;v<d.length;++v)g[v]=d.charCodeAt(v);u(g.buffer,i)}else{var _=new XMLHttpRequest;_.open(i._xhr.method,s,!0),_.withCredentials=i._xhr.withCredentials,_.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(f){_.setRequestHeader(f,i._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}u(_.response,i)},_.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete l[s],i.load())},c(_)}},c=function(i){try{i.send()}catch{i.onerror()}},u=function(i,s){var d=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(v){v&&s._sounds.length>0?(l[s._src]=v,p(s,v)):d()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(i).then(g).catch(d):n.ctx.decodeAudioData(i,g,d)},p=function(i,s){s&&!i._duration&&(i._duration=s.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=s?parseInt(s[1],10):null;if(i&&d&&d<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof or<"u"?(or.HowlerGlobal=t,or.Howler=n,or.Howl=r,or.Sound=a):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=a)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var a=r._howls.length-1;a>=0;a--)r._howls[a].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(r=typeof r!="number"?l._pos[1]:r,a=typeof a!="number"?l._pos[2]:a,typeof n=="number")l._pos=[n,r,a],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(n,r,a,l,o,c){var u=this;if(!u.ctx||!u.ctx.listener)return u;var p=u._orientation;if(r=typeof r!="number"?p[1]:r,a=typeof a!="number"?p[2]:a,l=typeof l!="number"?p[3]:l,o=typeof o!="number"?p[4]:o,c=typeof c!="number"?p[5]:c,typeof n=="number")u._orientation=[n,r,a,l,o,c],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(a,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(n,r,a,l,o,c);else return p;return u},Howl.prototype.init=function(n){return function(r){var a=this;return a._orientation=r.orientation||[1,0,0],a._stereo=r.stereo||null,a._pos=r.pos||null,a._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},a._onstereo=r.onstereo?[{fn:r.onstereo}]:[],a._onpos=r.onpos?[{fn:r.onpos}]:[],a._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"stereo",action:function(){a.stereo(n,r)}}),a;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")a._stereo=n,a._pos=[n,0,0];else return a._stereo;for(var o=a._getSoundIds(r),c=0;c<o.length;c++){var u=a._soundById(o[c]);if(u)if(typeof n=="number")u._stereo=n,u._pos=[n,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&t(u,l),l==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(n,0,0):u._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),a._emit("stereo",u._id);else return u._stereo}return a},Howl.prototype.pos=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,a,l)}}),o;if(r=typeof r!="number"?0:r,a=typeof a!="number"?-.5:a,typeof l>"u")if(typeof n=="number")o._pos=[n,r,a];else return o._pos;for(var c=o._getSoundIds(l),u=0;u<c.length;u++){var p=o._soundById(c[u]);if(p)if(typeof n=="number")p._pos=[n,r,a],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(a,Howler.ctx.currentTime)):p._panner.setPosition(n,r,a)),o._emit("pos",p._id);else return p._pos}return o},Howl.prototype.orientation=function(n,r,a,l){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,a,l)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,a=typeof a!="number"?o._orientation[2]:a,typeof l>"u")if(typeof n=="number")o._orientation=[n,r,a];else return o._orientation;for(var c=o._getSoundIds(l),u=0;u<c.length;u++){var p=o._soundById(c[u]);if(p)if(typeof n=="number")p._orientation=[n,r,a],p._node&&(p._panner||(p._pos||(p._pos=o._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(a,Howler.ctx.currentTime)):p._panner.setOrientation(n,r,a)),o._emit("orientation",p._id);else return p._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,a,l,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")a=r[0],typeof l>"u"&&(a.pannerAttr||(a.pannerAttr={coneInnerAngle:a.coneInnerAngle,coneOuterAngle:a.coneOuterAngle,coneOuterGain:a.coneOuterGain,distanceModel:a.distanceModel,maxDistance:a.maxDistance,refDistance:a.refDistance,rolloffFactor:a.rolloffFactor,panningModel:a.panningModel}),n._pannerAttr={coneInnerAngle:typeof a.pannerAttr.coneInnerAngle<"u"?a.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof a.pannerAttr.coneOuterAngle<"u"?a.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof a.pannerAttr.coneOuterGain<"u"?a.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof a.pannerAttr.distanceModel<"u"?a.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof a.pannerAttr.maxDistance<"u"?a.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof a.pannerAttr.refDistance<"u"?a.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof a.pannerAttr.rolloffFactor<"u"?a.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof a.pannerAttr.panningModel<"u"?a.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(a=r[0],l=parseInt(r[1],10));for(var c=n._getSoundIds(l),u=0;u<c.length;u++)if(o=n._soundById(c[u]),o){var p=o._pannerAttr;p={coneInnerAngle:typeof a.coneInnerAngle<"u"?a.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof a.coneOuterAngle<"u"?a.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof a.coneOuterGain<"u"?a.coneOuterGain:p.coneOuterGain,distanceModel:typeof a.distanceModel<"u"?a.distanceModel:p.distanceModel,maxDistance:typeof a.maxDistance<"u"?a.maxDistance:p.maxDistance,refDistance:typeof a.refDistance<"u"?a.refDistance:p.refDistance,rolloffFactor:typeof a.rolloffFactor<"u"?a.rolloffFactor:p.rolloffFactor,panningModel:typeof a.panningModel<"u"?a.panningModel:p.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=p.coneInnerAngle,x.coneOuterAngle=p.coneOuterAngle,x.coneOuterGain=p.coneOuterGain,x.distanceModel=p.distanceModel,x.maxDistance=p.maxDistance,x.refDistance=p.refDistance,x.rolloffFactor=p.rolloffFactor,x.panningModel=p.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,a=r._parent;r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,n.call(this),r._stereo?a.stereo(r._stereo):r._pos&&a.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,a=r._parent;return r._orientation=a._orientation,r._stereo=a._stereo,r._pos=a._pos,r._pannerAttr=a._pannerAttr,r._stereo?a.stereo(r._stereo):r._pos?a.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,a._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(kt);const wa={"main-menu":{volume:.4,loop:!0,preload:!0},"character-select":{volume:.35,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.5,loop:!1,preload:!1},victory:{volume:.5,loop:!1,preload:!0},defeat:{volume:.4,loop:!1,preload:!0},"game-over":{volume:.35,loop:!1,preload:!0}},oi={"card-play":{volume:.6,loop:!1},"card-shuffle":{volume:.5,loop:!1},"card-draw":{volume:.4,loop:!1},"card-flip":{volume:.5,loop:!1},challenge:{volume:.7,loop:!1},"challenge-success":{volume:.8,loop:!1},"challenge-fail":{volume:.6,loop:!1},"turn-start":{volume:.4,loop:!1},"turn-end":{volume:.3,loop:!1},"geass-activate":{volume:.8,loop:!1},"geass-hit":{volume:.9,loop:!1},"geass-miss":{volume:.5,loop:!1},"geass-immunity":{volume:.7,loop:!1},"button-click":{volume:.4,loop:!1},"button-hover":{volume:.2,loop:!1},"menu-open":{volume:.3,loop:!1},"menu-close":{volume:.3,loop:!1},"character-select":{volume:.5,loop:!1},"character-skill":{volume:.7,loop:!1},"damage-taken":{volume:.8,loop:!1},heal:{volume:.6,loop:!1},win:{volume:.8,loop:!1},lose:{volume:.6,loop:!1},"round-win":{volume:.7,loop:!1},"round-lose":{volume:.5,loop:!1}},Vu={"main-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","character-select":"https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3","game-normal":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","game-intense":"https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3","geass-activate":"https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3",victory:"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3",defeat:"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","game-over":"https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3"},Gu={"card-play":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","card-draw":"https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3","card-flip":"https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3",challenge:"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","challenge-success":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","challenge-fail":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","turn-end":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","geass-immunity":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3","button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","button-hover":"https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3","menu-open":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3","menu-close":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3","character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","character-skill":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","damage-taken":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3",heal:"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3",win:"https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",lose:"https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3","round-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","round-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"},xh={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},un=class un{constructor(){K(this,"bgmMap",new Map);K(this,"sfxMap",new Map);K(this,"currentBGM",null);K(this,"masterVolume",1);K(this,"bgmVolume",1);K(this,"sfxVolume",1);K(this,"voiceVolume",1);K(this,"isMuted",!1);K(this,"initialized",!1);K(this,"currentVoice",null)}static getInstance(){return un.instance||(un.instance=new un),un.instance}init(){this.initialized||(this.preloadBGM(["main-menu","victory","defeat"]),this.preloadSFX(["button-click","card-play","challenge"]),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成"))}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=wa[n],a=new kt.Howl({src:[Vu[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,a)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=oi[n],a=new kt.Howl({src:[Gu[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,a)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const a=wa[t];r=new kt.Howl({src:[Vu[t]],volume:0,loop:a.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const a=wa[t];r.fade(0,a.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=oi[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new kt.Howl({src:[Gu[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=xh[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const a=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const l=new kt.Howl({src:[a],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=l,l.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),kt.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=wa[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=oi[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,kt.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,kt.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};K(un,"instance");let io=un;const gt=io.getInstance(),Ir=e=>{gt&&gt.playBGM(e)},pe=e=>{gt&&gt.playSFX(e)},_h=()=>{gt&&gt.stopBGM()};class wh{constructor(){K(this,"cards",[]);K(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let a=0;a<6;a++){const l=t[a%4];this.cards.push({id:`${r}-${a}-${Math.random().toString(36).substr(2,9)}`,suit:l,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],a=[];for(let l=0;l<5;l++){const o=this.cards[l];o.owner="player",t.push(o)}for(let l=5;l<10;l++){const o=this.cards[l];o.owner="ai",n.push(o)}for(let l=10;l<15;l++){const o=this.cards[l];o.owner="ai2",r.push(o)}for(let l=15;l<20;l++){const o=this.cards[l];o.owner="ai3",a.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:a,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const a=this.cards.find(l=>l.id===r);a&&(a.owner="table",n.push(a))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(a=>a.owner===null).slice(0,t);for(const a of r)a.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const kh=1/3,Sh=1/2,Ch=1,Ah=.1,Nh=.9,Th=.5,Uu=.25,Xu=.15,bh=.2,Eh=.8,Qu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class Ph{getBaseHitChance(t){return t===0?kh:t===1?Sh:Ch}performGeass(t,n,r=null,a=0,l=0,o){let c=this.getBaseHitChance(l);if(c+=a,r==="cc"&&!n.ccReviveUsed&&Math.random()<c&&n.hp<=1&&Math.random()<Th)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0,victimId:t};if(r==="suzaku"){const x=Math.random();if(console.log(`[GeassSystem] 朱雀闪避判定: roll=${x.toFixed(4)}, threshold=${Xu}`),x<Xu){const i=Math.random();if(console.log(`[GeassSystem] 朱雀反击判定: roll=${i.toFixed(4)}, threshold=${Uu}`),i<Uu){console.log(`[GeassSystem] 朱雀反击成功触发! target=${t}, attacker=${o}, counterDamage=1`);const s={activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并反击！",isCounter:!0,isDodge:!0,victimId:t,counterDamage:1};return o&&(s.counterTargetId=o),s}return console.log("[GeassSystem] 朱雀闪避成功，但反击未触发"),{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0,victimId:t}}}if(l<2&&(c=Math.max(Ah,Math.min(Nh,c))),Math.random()<c){const i={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},s=Qu[Math.floor(Math.random()*Qu.length)];return{activated:!0,hit:!0,damage:1,newStats:i,funnyAction:s.description,message:`Geass命中！${s.emoji} ${s.description}`,victimId:t}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！",victimId:t}}calculateKallenBoost(t){return t<2?0:Math.min(Eh,bh*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const si={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},ui={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},ci={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},di={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},Ih={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:si,skillName:si.name,skillDescription:si.description,stats:{hp:3,difficulty:4}},jh={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:ui,skillName:ui.name,skillDescription:ui.description,stats:{hp:3,difficulty:2}},Mh={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:ci,skillName:ci.name,skillDescription:ci.description,stats:{hp:4,difficulty:2}},zh={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:di,skillName:di.name,skillDescription:di.description,stats:{hp:3,difficulty:3}},Rh={lelouch:Ih,cc:jh,suzaku:Mh,kallen:zh};function Tl(e){return Rh[e]}function ka(e){const t=Tl(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function Bn(e){const t=Tl(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function Yu(e){if(!Bn(e))return e;const t=Tl(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function Lh(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function Oh(e){const t=Tl(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function fi(e){return e.characterId==="kallen"&&Bn(e)?4:3}const ul={0:"player",1:"ai3",2:"ai2",3:"ai"},hf={player:0,ai3:1,ai2:2,ai:3},Dh={bottom:0,right:2,top:1,left:3},Fh={0:"bottom",1:"top",2:"right",3:"left"},cl={0:null,1:2,2:1,3:0},Bh={0:3,1:2,2:1},gf={player:null,ai:0,ai2:1,ai3:2},$h={0:"ai",1:"ai2",2:"ai3"},Hh={bottom:"player",top:"ai3",right:"ai2",left:"ai"},Vh={player:"bottom",ai3:"top",ai2:"right",ai:"left"};function Gh(e){return ul[e]||null}function oo(e){return hf[e]??null}function Uh(e){return cl[e]??null}function Xh(e){return gf[e]??null}function Wr(e,t){const n=Uh(e);return n===null?null:t[n]||null}function wr(e,t){const n=Xh(e);return n===null?null:t[n]||null}function Ht(e){return{0:3,1:2,2:0,3:1}[e]??0}function Wu(e,t){const n=[];let r=e;for(let a=0;a<3;a++)if(r=Ht(r),r!==t){const l=Gh(r);l&&n.push(l)}return n}function Qh(){const e=[];for(let a=0;a<4;a++){const l=ul[a];l&&hf[l]!==a&&e.push(`索引${a}和玩家ID${l}的映射不一致`)}for(let a=1;a<4;a++){const l=cl[a];l!==null&&Bh[l]!==a&&e.push(`currentPlayerIndex=${a}和aiArrayIndex=${l}的映射不一致`)}const t=["ai","ai2","ai3"];for(const a of t){const l=gf[a];l!==null&&$h[l]!==a&&e.push(`玩家ID${a}和aiArrayIndex=${l}的映射不一致`)}const n=["top","right","bottom","left"];for(const a of n){const l=Dh[a],o=Hh[a];Fh[l]!==a&&e.push(`UI位置${a}的索引映射不一致`),Vh[o]!==a&&e.push(`UI位置${a}的玩家ID映射不一致`),ul[l]!==o&&e.push(`UI位置${a}的索引和玩家ID映射不一致`)}const r=[1,2,0,3];for(let a=0;a<4;a++){const l=Ht(r[a]),o=r[(a+1)%4];l!==o&&e.push(`顺时针流转顺序错误: ${r[a]}的下一个应该是${o}，但得到${l}`)}return{valid:e.length===0,errors:e}}const Ku=Qh();Ku.valid||console.error("[PlayerIndexMapper] 索引映射验证失败:",Ku.errors);const Rt=e=>e==="suzaku"?4:3;class Yh{constructor(){K(this,"cardSystem");K(this,"geassSystem");K(this,"state");this.cardSystem=new wh,this.geassSystem=new Ph,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0,firstPlayerIndex:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:a,ai2Cards:l,ai3Cards:o}=this.cardSystem.dealCards(),c=this.cardSystem.setLiarCard(),u=Math.floor(Math.random()*4),p=n||["cc","suzaku","kallen"],x=new Map;return x.set("player",ka(t)),x.set("ai",ka(p[0])),x.set("ai2",ka(p[1])),x.set("ai3",ka(p[2])),this.state={...this.createInitialState(),phase:u===0?"player_turn":"ai_turn",liarCard:c,playerCharacter:t,currentPlayerIndex:u,playerHand:r,aiPlayers:[{id:"ai",name:Je(p[0]),character:p[0],hand:a,stats:{hp:Rt(p[0]),maxHp:Rt(p[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:Je(p[1]),character:p[1],hand:l,stats:{hp:Rt(p[1]),maxHp:Rt(p[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:Je(p[2]),character:p[2],hand:o,stats:{hp:Rt(p[2]),maxHp:Rt(p[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:Rt(t),maxHp:Rt(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0,firstPlayerIndex:u},characterStates:x},this.state}getCurrentPlayerId(){return ul[this.state.currentPlayerIndex]||"player"}getNextPlayerIndex(){let t=Ht(this.state.currentPlayerIndex),n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=cl[t];if(r!=null){const a=this.state.aiPlayers[r];if(a&&a.isActive&&a.stats.hp>0)return t}}t=Ht(t),n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const a=Lh(r);this.state.characterStates.set(n,a)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const c of t){const u=this.state.playerHand.find(p=>p.id===c);if(!u)return!1;r.push(u)}const a=this.state.characterStates.get("player"),l=a?fi(a):1;if(t.length>l)return!1;this.state.playerHand=this.state.playerHand.filter(c=>!t.includes(c.id));const o=r.some(c=>c.rank!==n&&!c.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){this.state.lastAction=`${t==="player"?"玩家":t}手牌耗尽，获得胜利！`,this.state.winner=t==="player"?"player":"ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,a=n.playerId;this.state.phase="geass";const l=r?a:t,o=p=>{if(p==="player")return"玩家";const x=wr(p,this.state.aiPlayers);return(x==null?void 0:x.name)||p},c=o(t),u=o(a);return this.state.lastAction=`${c}向${u}发起质疑！`,this.executeGeass(l,t),{success:!0,isBluff:r,targetId:a}}executeGeass(t,n){const r=this.state.characterStates.get(t);let a;if(t==="player")a=this.state.playerStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);if(!c)return;a=c.stats}let l=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(l=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,a,(r==null?void 0:r.characterId)||null,l,this.state.turnState.geassConsecutiveMisses,n);if(this.state.geassResult=o,!o.hit&&o.isCounter&&n){if(n==="player")this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},this.state.playerStats.hp<=0&&this.checkGameOver();else{const u=this.state.aiPlayers.find(p=>p.id===n);u&&(u.stats={...u.stats,hp:Math.max(0,u.stats.hp-1)},u.stats.hp<=0&&(u.isActive=!1,this.checkGameOver()))}this.state.lastAction=`${t==="player"?"玩家":t}发动枢木剑术反击！${n==="player"?"玩家":n}受到反弹伤害！`;return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.stats=o.newStats)}if(o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0),o.newStats.hp<=0){if(t!=="player"){const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const c=this.state.aiPlayers.find(u=>u.id===t);c&&(c.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!Bn(n))return!1;const r=Yu(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const a=["Q","K","A"],o=(a.indexOf(this.state.liarCard)+1)%a.length;this.state.liarCard=a[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const a=t==="player"?"玩家":t;this.state.lastAction=`${a}发动了${Je(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?Bn(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:a,ai3Cards:l}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let c;if(t!==void 0)c=this.findNextActivePlayer(t);else{const u=this.getActivePlayerIndices();c=u[Math.floor(Math.random()*u.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=a,this.state.aiPlayers[2].hand=l,this.state.liarCard=o,this.state.phase=c===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=c,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:this.state.turnState.geassConsecutiveMisses,firstPlayerIndex:c},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((u,p)=>{this.state.characterStates.set(p,Oh(u))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=wr("ai2",this.state.aiPlayers);n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=wr("ai3",this.state.aiPlayers);r&&r.isActive&&r.stats.hp>0&&t.push(2);const a=wr("ai",this.state.aiPlayers);return a&&a.isActive&&a.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const a=(t+r)%4;if(n.includes(a))return a}return n[0]}getState(){return structuredClone(this.state)}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(a=>a.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const a=this.state.characterStates.get("player"),l=a?fi(a):1;this.state.playerSelectedCards.length<l&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t,n){if(this.state.phase!=="ai_turn")return this.getState();const r=this.state.aiPlayers.find(o=>o.id===t);if(!r||r.hand.length===0)return this.getState();let a;if(n&&n.length>0){const o=n.filter(c=>r.hand.some(u=>u.id===c));a=o.length>0?o:[r.hand[0].id]}else{const o=Math.min(r.hand.length,Math.floor(Math.random()*2)+1);a=r.hand.slice(0,o).map(c=>c.id)}const l=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,a,l),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const a=this.state.aiPlayers.find(p=>p.id===t);if(!a)return!1;const l=[];for(const p of n){const x=a.hand.find(i=>i.id===p);if(!x)return!1;l.push(x)}const o=this.state.characterStates.get(t),c=o?fi(o):1;if(n.length>c)return!1;a.hand=a.hand.filter(p=>!n.includes(p.id));const u=l.some(p=>p.rank!==r&&!p.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:l,playerId:t,isBluff:u},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...l],this.state.lastAction=`${a.name}出了${n.length}张牌，声称是${r}`,a.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?Bn(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!Bn(n))throw new Error("技能冷却中或已使用");const r=Yu(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(t=!1){var c;if(t){const u=this.state.turnState.lastPlayerId||((c=this.state.turnState.playedCards)==null?void 0:c.playerId);if(this.state.turnState.playedCards=null,this.state.lastAction="无人质疑，回合继续",u){const p=oo(u);p!==null?(this.state.currentPlayerIndex=p,this.state.phase=p===0?"player_turn":"ai_turn",this.state.turnState.firstPlayerIndex=p):this.state.phase=this.state.currentPlayerIndex===0?"player_turn":"ai_turn"}else this.state.phase=this.state.currentPlayerIndex===0?"player_turn":"ai_turn";return this.getState()}const n=this.state.turnState.firstPlayerIndex;let r=Ht(n),a=0;for(;a<4;){if(r===0){if(this.state.playerStats.hp>0)break}else{const u=cl[r];if(u!=null){const p=this.state.aiPlayers[u];if(p&&p.isActive&&p.stats.hp>0)break}}r=Ht(r),a++}this.state.currentPlayerIndex=r,this.state.phase=r===0?"player_turn":"ai_turn",this.state.turnState.firstPlayerIndex=r,this.state.turnState.turnNumber++,this.state.turnState.playedCards=null;const l=u=>{if(u===0)return"玩家";const p=Wr(u,this.state.aiPlayers);return(p==null?void 0:p.name)||`索引${u}`};l(n);const o=l(r);return this.state.lastAction=`第${this.state.turnState.turnNumber}回合开始，${o}先手`,this.getState()}}const Wh="code-geass-game",Zu={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.removeItem(Wh)}catch(t){console.error("Failed to clear localStorage:",t)}}};class Kh{constructor(t){K(this,"characterId");K(this,"personality");K(this,"memory");K(this,"currentState","idle");K(this,"decisionInProgress",!1);this.characterId=t,this.personality=this.createPersonality(t),this.memory={playedCards:[],playerBluffStats:new Map,currentRound:0}}createPersonality(t){return{lelouch:{bluffTendency:.7,challengeTendency:.6,riskTolerance:.8,aggression:.7,learningRate:.9},cc:{bluffTendency:.5,challengeTendency:.4,riskTolerance:.6,aggression:.5,learningRate:.7},suzaku:{bluffTendency:.3,challengeTendency:.7,riskTolerance:.5,aggression:.6,learningRate:.6},kallen:{bluffTendency:.6,challengeTendency:.8,riskTolerance:.9,aggression:.9,learningRate:.5}}[t]}analyzeSituation(t){var p;const n=t.gameState,r=t.aiPlayer,a=n.turnState,l={totalPlayed:this.memory.playedCards.length,claimedRanks:this.memory.playedCards.map(x=>x.claimedRank),actualRanks:this.memory.playedCards.map(x=>x.actualRank)},o=this.estimateRemainingCards(t),c=a.playedCards?{playerId:a.playedCards.playerId,claimedRank:a.playedCards.claimedRank,cardCount:a.playedCards.cardIds.length}:void 0,u=((p=n.playerStats)==null?void 0:p.hp)||3;return{liarCard:t.liarCard,aiHP:r.stats.hp,playerHP:u,aiHandSize:r.hand.length,playedCardsInfo:l,remainingCards:o,currentClaim:c}}estimateRemainingCards(t){const r=new Map;return["Q","K","A"].forEach(a=>{r.set(a,8)}),this.memory.playedCards.forEach(a=>{const l=r.get(a.actualRank)||0;r.set(a.actualRank,Math.max(0,l-1))}),t.aiPlayer.hand.forEach(a=>{if(!a.isJoker){const l=r.get(a.rank)||0;r.set(a.rank,Math.max(0,l-1))}}),r}analyzeProbabilities(t,n){const{currentClaim:r,remainingCards:a,aiHP:l,playerHP:o}=t;if(!r)return{truthProbability:.5,challengeExpectedValue:0,playOptions:this.analyzePlayOptions(n,t)};const c=r.claimedRank,u=a.get(c)||0,p=Array.from(a.values()).reduce((m,y)=>m+y,0),x=p>0?u/p:.5,i=this.memory.playerBluffStats.get(r.playerId),s=i&&i.total>0?i.bluffs/i.total:.3,d=x*(1-s*.5),g=this.calculateChallengeValue(!0,l,o),v=this.calculateChallengeValue(!1,l,o),_=(1-d)*g+d*v,f=this.analyzePlayOptions(n,t);return{truthProbability:d,challengeExpectedValue:_,playOptions:f}}calculateChallengeValue(t,n,r){return t?10+(r<=1?20:0):-10-(n<=1?-20:0)}analyzePlayOptions(t,n){const r=t.aiPlayer.hand,{liarCard:a}=n,l=[];if(r.length===0)return l;const{aiHP:o,playerHP:c}=n,u=r.filter(x=>x.rank===a||x.isJoker),p=r.filter(x=>x.rank!==a&&!x.isJoker);if(u.length>0){const x=u[0],i=this.calculatePlayRisk(!0,!1,o,c);l.push({cards:[x.id],claimedRank:a,isBluff:!1,expectedValue:5-i,risk:i})}if(p.length>0){const x=p[0],i=this.calculatePlayRisk(!1,!0,o,c),s=this.personality.bluffTendency*5;l.push({cards:[x.id],claimedRank:a,isBluff:!0,expectedValue:3+s-i,risk:i})}if(u.length>=2){const x=u.slice(0,2),i=this.calculatePlayRisk(!0,!1,o,c)*1.5;l.push({cards:x.map(s=>s.id),claimedRank:a,isBluff:!1,expectedValue:8-i,risk:i})}return l}calculatePlayRisk(t,n,r,a){let l=0;return n&&(l+=3),r<=1&&(l+=5),a<=1&&(l-=2),Math.max(0,l)}makeDecision(t){if(this.decisionInProgress)throw new Error("AI决策正在进行中");this.decisionInProgress=!0;try{const n=this.analyzeSituation(t),r=this.analyzeProbabilities(n,t);return this.selectBestDecision(t,n,r)}finally{this.decisionInProgress=!1}}selectBestDecision(t,n,r){const{currentClaim:a}=n,{challengeExpectedValue:l,playOptions:o}=r,c=-2+this.personality.challengeTendency*4,u=0;if(a&&l>c)return{action:"challenge",confidence:Math.min(.95,.5+l/20),reasoning:this.generateChallengeReasoning(n,r),animationState:"challenging"};if(o.length>0){o.sort((x,i)=>i.expectedValue-x.expectedValue);const p=o[0];if(p.expectedValue>u){const x=Math.min(.95,.6+p.expectedValue/10);return{action:"play",cardIds:p.cards,claimedRank:p.claimedRank,confidence:x,reasoning:this.generatePlayReasoning(p),animationState:"playing",isBluff:p.isBluff}}}return{action:"pass",confidence:.5,reasoning:"无有利选项，选择保守",animationState:"playing"}}generateChallengeReasoning(t,n){const{truthProbability:r}=n,{currentClaim:a}=t;if(!a)return"根据直觉质疑";const l=Math.round((1-r)*100);return l>70?`高度怀疑（${l}%），对方可能在撒谎`:l>40?`中度怀疑（${l}%），值得一试`:"策略性质疑，试探对方反应"}generatePlayReasoning(t){return t.isBluff?`策略性虚张声势（期望值:${t.expectedValue.toFixed(1)}）`:`诚实出牌，稳扎稳打（期望值:${t.expectedValue.toFixed(1)}）`}updateMemory(t,n,r,a){this.memory.currentRound++,this.memory.playedCards.push({round:this.memory.currentRound,playerId:t,claimedRank:n,actualRank:r,wasLie:a});const l=this.memory.playerBluffStats.get(t)||{bluffs:0,total:0};l.total++,a&&l.bluffs++,this.memory.playerBluffStats.set(t,l)}getCurrentThought(){return{state:this.currentState,progress:this.getProgressForState(this.currentState),message:this.getMessageForState(this.currentState),emotion:this.getEmotionForState(this.currentState)}}getProgressForState(t){return{idle:0,thinking:.3,deciding:.5,playing:.7,challenging:.8,reacting:.9}[t]||0}getMessageForState(t){return{idle:"等待中...",thinking:"分析局势...",deciding:"做出决策...",playing:"出牌中...",challenging:"质疑中...",reacting:"反应中..."}[t]||"思考中..."}getEmotionForState(t){return{idle:"calm",thinking:"uncertain",deciding:"uncertain",playing:"confident",challenging:"confident",reacting:"surprised"}[t]||"calm"}setAnimationState(t){this.currentState=t}getCharacterId(){return this.characterId}reset(){this.memory={playedCards:[],playerBluffStats:new Map,currentRound:0},this.currentState="idle",this.decisionInProgress=!1}}function Zh(e){return new Kh(e)}const Ju=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],Jh=(e,t)=>{let n=e,r=0;for(;r<4;){if(n===0){if(t.playerStats.hp>0)return n}else{const a=Wr(n,t.aiPlayers);if(a&&a.isActive&&a.stats.hp>0)return n}n=Ht(n),r++}return e},qh=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let a=t??null;if(!a&&r)if(r==="player")a=Je(n??void 0);else{const c=e.aiPlayers.find(u=>u.id===r);a=(c==null?void 0:c.name)??null}if(!a)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(a===Je(n??void 0))return{loserId:"player",actualLoserName:a};const l=e.aiPlayers.find(c=>c.name===a);return l?{loserId:l.id,actualLoserName:a}:(console.error(`[determineLoserId] 找不到AI: ${a}`),{loserId:null,actualLoserName:a})},eg=(e,t,n,r)=>{pe("geass-hit");const a=Ju[Math.floor(Math.random()*Ju.length)];r(a),pe(a.soundType),n(`${t}受到Geass！`),n(`突然${a.description}`),n(`Geass命中！${t}HP-1`)},tg=(e,t,n)=>{pe("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},ng=(e,t)=>{setTimeout(()=>{Ir(e==="player"?"victory":"defeat"),t("result")},2e3)},rg=(e,t,n,r,a,l,o,c,u)=>{const p=n.turnState.firstPlayerIndex;let x=Ht(p);x=Jh(x,n);const i=e.resetRound(x);l(i),o([]);const s=i.currentPlayerIndex===0,d=s?null:Wr(i.currentPlayerIndex,i.aiPlayers),g=s?Je(r??void 0):d==null?void 0:d.name;a(`【第${i.turnState.turnNumber}回合】骗子牌是${i.liarCard}`),a(`${g}先手！`),c(!1),s||setTimeout(()=>{var v;(v=u.current)==null||v.call(u)},1500)},ag=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:a,setSelectedCards:l,setIsProcessing:o,setCurrentScreen:c,aiTurnRef:u})=>A.useCallback((p,x,i,s)=>{if(r(p),p.geassResult){const g=s||(i||"对手");p.geassResult.hit?eg(p.geassResult,g,n,a):tg(p.geassResult,g,n)}if(p.phase==="game_over"){ng(p.winner,c);return}setTimeout(()=>{a(null);const d=e.current;if(!d)return;const g=d.getState(),{loserId:v,actualLoserName:_}=qh(g,s,t);if(!v||!_){o(!1);return}rg(d,v,g,t,n,r,l,o,u)},2500)},[e,t,n,r,a,l,o,c,u]),lt={THINKING:1e3,PLAY_TO_CHALLENGE:2e3,CHALLENGE_TO_RESOLVE:2e3,GEASS_RESULT_DISPLAY:2e3,TURN_SWITCH:1e3,ROUND_START:600,NO_CHALLENGE_DISPLAY:2e3,CHALLENGE_DISPLAY:2e3,AI_CHALLENGE_INTERVAL:1500},Tn=!1,lg=()=>{const[e,t]=A.useState("main-menu"),[n,r]=A.useState(null),[a,l]=A.useState(1),[o,c]=A.useState(["cc","suzaku","kallen"]),[u,p]=A.useState({}),x=A.useRef(null),[i,s]=A.useState(null),[d,g]=A.useState([]),[v,_]=A.useState(null),[f,m]=A.useState([]),[y,w]=A.useState(!1),S=A.useRef({pass:!1,challenge:!1}),[N,T]=A.useState({isThinking:!1,aiId:null}),[P,M]=A.useState({playedBy:null,checkedPlayers:[]}),L=A.useRef(new Map),V=A.useRef(null);A.useEffect(()=>((async()=>{try{await gt.preload();const I=Zu.load("gameSettings");I&&(gt.setBGMVolume(I.musicVolume??.5),gt.setSFXVolume(I.soundVolume??.7)),Ir("main-menu")}catch{}})(),()=>{_h()}),[]),A.useEffect(()=>{const j=gt.getStatus(),I={soundEnabled:j.enabled,musicEnabled:!0,soundVolume:j.sfxVolume,musicVolume:j.bgmVolume};Zu.save("gameSettings",I)},[]);const F=A.useCallback(j=>{g(I=>[...I,j])},[]),le=ag({gameEngineRef:x,selectedCharacter:n,addLog:F,setGameState:s,setCurrentFunnyAction:_,setSelectedCards:m,setIsProcessing:w,setCurrentScreen:j=>t(j),aiTurnRef:V}),de=A.useCallback((j,I)=>{var O;return j==="player"?Je(n):((O=I.aiPlayers.find(H=>H.id===j))==null?void 0:O.name)||j},[n]),Xe=A.useCallback(async(j,I,O,H)=>{var U;for(const Y of H){if(Y==="player")continue;const D=wr(Y,I.aiPlayers);if(!D||!D.isActive||D.stats.hp<=0)continue;let te=!1;const ie=L.current.get(Y),oe=j.getState();if(ie&&oe.turnState.playedCards)try{const W=ie.makeDecision({gameState:oe,aiPlayer:D,liarCard:oe.liarCard});te=W.action==="challenge",Tn&&console.log(`[processAIChallengerDecisions] AI ${D.name} DynamicAI决策: ${W.action}`)}catch{te=Math.random()<.3}else te=Math.random()<.3;if(te){pe("challenge");const W=de(O,I);F(`${D.name}向${W}发起质疑！`),sn.flushSync(()=>{s({...j.getState(),lastAction:`${D.name}向${W}发起质疑！`})}),await new Promise(Sn=>setTimeout(Sn,lt.CHALLENGE_DISPLAY));const Ye=j.aiChallengeDecision(D.id),we=((U=I.turnState.playedCards)==null?void 0:U.isBluff)??!1;F(we?`质疑成功！${W}在撒谎！`:`质疑失败！${W}没有撒谎！`);const ir=we?O:D.id,kn=de(ir,Ye);return s(Ye),le(Ye,D.name,W,kn),!0}else F(`${D.name}选择不质疑`),sn.flushSync(()=>{s({...j.getState(),lastAction:`${D.name}选择不质疑`})}),await new Promise(W=>setTimeout(W,lt.NO_CHALLENGE_DISPLAY))}return!1},[F,de,le]),Qe=A.useCallback(async(j,I)=>{var W,Ye;const O=j.getState(),H=(W=O.turnState.playedCards)==null?void 0:W.playerId;if(!H)return;const U=oo(H)??0,Y=Wu(U,U),D=Y.indexOf("player");if(D!==-1){const we=Y.slice(0,D).filter(Sn=>Sn!=="player");if(await Xe(j,O,H,we))return;M({playedBy:H,checkedPlayers:we});const kn=j.enterChallengePhase();s(kn),w(!1),F("等待玩家决策...");return}if(await Xe(j,O,H,Y))return;F("无人质疑，回合继续"),M({playedBy:null,checkedPlayers:[]});const ie=j.endChallengePhase(!0);s(ie);const oe=ie.turnState.lastPlayerId||((Ye=ie.turnState.playedCards)==null?void 0:Ye.playerId);oe==="player"||!oe?(w(!1),F("轮到玩家出牌")):setTimeout(()=>{var we;return(we=V.current)==null?void 0:we.call(V)},lt.TURN_SWITCH)},[F,Xe]),Oe=A.useCallback(()=>{if(!x.current)return;const j=x.current,I=j.getState();if(I.phase==="player_turn"||I.phase==="game_over")return;const O=Wr(I.currentPlayerIndex,I.aiPlayers);if(!O)return;const H=O.id;if(!O.isActive||O.stats.hp<=0){if(I.aiPlayers.filter(D=>D.isActive&&D.stats.hp>0).length===0&&I.playerStats.hp>0){I.winner="player",I.phase="game_over",s({...I}),F("游戏结束！玩家获胜！"),w(!1);return}const Y=(I.currentPlayerIndex+1)%4;I.currentPlayerIndex=Y,s({...I}),Y!==0?setTimeout(()=>{var D;return(D=V.current)==null?void 0:D.call(V)},lt.TURN_SWITCH):I.playerStats.hp<=0&&setTimeout(()=>{var D;return(D=V.current)==null?void 0:D.call(V)},lt.TURN_SWITCH);return}w(!0),pe("turn-start"),F(`${O.name} 的回合...`),T({isThinking:!0,aiId:H}),setTimeout(()=>{try{Tn&&console.log("[handleAITurn] AI开始出牌:",O.name),T({isThinking:!1,aiId:null});let U;const Y=L.current.get(H);if(Y&&I.liarCard)try{const ie=Y.makeDecision({gameState:I,aiPlayer:O,liarCard:I.liarCard});ie.action==="play"&&ie.cardIds&&ie.cardIds.length>0&&(U=ie.cardIds,Tn&&console.log(`[handleAITurn] DynamicAI出牌决策: ${U}`))}catch(ie){Tn&&console.warn("[handleAITurn] DynamicAIEngine决策失败，使用随机:",ie)}const D=j.aiPlayCards(H,U);Tn&&console.log("[handleAITurn] AI出牌完成, phase:",D.phase),sn.flushSync(()=>{s(D)});const te=D.turnState.playedCards;te&&F(`${O.name}出了${te.cardIds.length}张牌，声称是${te.claimedRank}`),setTimeout(()=>{Tn&&console.log("[handleAITurn] 进入质疑阶段"),Qe(j,D)},lt.PLAY_TO_CHALLENGE)}catch{w(!1),T({isThinking:!1,aiId:null})}},lt.THINKING)},[F,Qe]);A.useEffect(()=>{V.current=Oe},[Oe]);const b=A.useCallback(j=>{t(j),r(null),s(null),g([]),m([]),_(null),Ir("main-menu")},[]),R=A.useCallback(()=>{pe("button-click"),t("character-select")},[]),k=A.useCallback(()=>{pe("button-click"),t("settings")},[]),$=A.useCallback(()=>{pe("button-click"),t("help")},[]),Q=A.useCallback((j,I)=>{pe("character-select"),r(j),l(I||Math.floor(Math.random()*4)+1)},[]),ft=A.useCallback(()=>{if(!n)return;pe("button-click");const O=["lelouch","cc","suzaku","kallen"].filter(oe=>oe!==n).sort(()=>Math.random()-.5);c(O);const H={};O.forEach(oe=>{H[oe]=Math.floor(Math.random()*4)+1}),p(H),x.current=new Yh;const U=x.current.initializeGame(n,O),Y=["ai","ai2","ai3"];L.current.clear(),O.forEach((oe,W)=>{L.current.set(Y[W],Zh(oe))}),s(U),m([]);const D=U.currentPlayerIndex===0,te=D?null:Wr(U.currentPlayerIndex,U.aiPlayers),ie=D?Je(n):te==null?void 0:te.name;g(["游戏开始！",`【第1回合】骗子牌是${U.liarCard}`,`${ie}先手！`]),t("game-table"),Ir("game-normal"),D||setTimeout(()=>{Oe()},1500)},[n,Oe]),Ne=A.useCallback(()=>{pe("button-click"),t("main-menu"),r(null)},[]),nn=A.useCallback(()=>{pe("button-click"),b("main-menu")},[b]),De=A.useCallback(j=>{if(!x.current||y)return;const I=x.current;if(I.getState().phase!=="player_turn")return;I.toggleCardSelection(j);const H=I.getState();m(H.playerSelectedCards),pe("button-click")},[y]),Mt=A.useCallback(()=>{if(!x.current||f.length===0||y)return;w(!0),pe("card-play");const j=x.current;try{const I=j.playerPlayCards();sn.flushSync(()=>{s(I)}),m([]);const O=Je(n),H=I.turnState.playedCards;H&&F(`${O}出了${H.cardIds.length}张牌，声称是${H.claimedRank}`),setTimeout(()=>{Qe(j,I)},lt.PLAY_TO_CHALLENGE)}catch{w(!1)}},[f,y,F,n,Qe]),bl=A.useCallback(async()=>{if(!x.current||y)return;w(!0),pe("challenge");const j=x.current,I=j.getState(),O=I.turnState.playedCards,H=O==null?void 0:O.playerId,U=Je(n),Y=de(H||"player",I);F(`${U}向${Y}发起质疑！`),sn.flushSync(()=>{s({...I,lastAction:`${U}向${Y}发起质疑！`})}),await new Promise(W=>setTimeout(W,lt.CHALLENGE_DISPLAY));const D=j.playerChallengeDecision(!0),te=(O==null?void 0:O.isBluff)??!1;F(te?`质疑成功！${Y}在撒谎！`:`质疑失败！${Y}没有撒谎！`);const oe=de(te&&H||"player",D);s(D),le(D,U,Y,oe)},[y,F,n,le,de]),ar=A.useCallback(async()=>{var Ye;if(!x.current||y||S.current.pass)return;S.current.pass=!0,w(!0),pe("button-click");const j=x.current,I=j.getState(),O=(Ye=I.turnState.playedCards)==null?void 0:Ye.playerId,H=Je(n);F(`${H}选择不质疑`),sn.flushSync(()=>{s({...I,lastAction:`${H}选择不质疑`})}),await new Promise(we=>setTimeout(we,lt.NO_CHALLENGE_DISPLAY));const U=oo(O||"player")??0,Y=Wu(U,U),D=P.playedBy===O?P.checkedPlayers:[],te=Y.filter(we=>we!=="player"&&!D.includes(we));if(await Xe(j,I,O||"player",te)){S.current.pass=!1;return}F("无人质疑，回合继续"),M({playedBy:null,checkedPlayers:[]});const oe=j.endChallengePhase(!0);s(oe);const W=oe.turnState.lastPlayerId;W==="player"||!W?(w(!1),setTimeout(()=>{S.current.pass=!1},500)):setTimeout(()=>{Oe(),S.current.pass=!1},lt.TURN_SWITCH)},[y,F,n,le,Oe,Xe,P]),El=A.useCallback(j=>{if(!x.current||n!=="lelouch")return;const I=x.current;if(!I.canPlayerUseSkill("player")){F("❌ 绝对命令使用次数已耗尽（每局限1次）");return}pe("geass-activate");const O=I.lelouchChangeLiarCard(j);s(O),F(`鲁鲁修发动绝对命令！骗子牌变为 ${j}`),F("⚠️ 绝对命令已使用，本局无法再次使用")},[n,F]),Pl=A.useCallback(()=>{pe("button-click"),b("character-select")},[b]),ta=A.useCallback(()=>{pe("button-click"),b("main-menu")},[b]),lr=()=>{var j,I,O,H;switch(e){case"main-menu":return h.jsx(Lu,{onStart:R,onSettings:k,onHelp:$});case"character-select":return h.jsx(qm,{characters:il,selectedId:n,selectedAvatar:a,onSelect:Q,onConfirm:ft,onBack:Ne});case"game-table":return i?h.jsx(gh,{gameState:i,selectedCards:f,selectedCharacter:n,selectedAvatar:a,aiCharacters:o,aiAvatars:u,onToggleCardSelection:De,onConfirmPlay:Mt,onPass:ar,onChallenge:bl,onBackToMenu:nn,onLelouchSkill:El,gameLog:d,funnyAction:v,isProcessing:y,canUseSkill:((j=x.current)==null?void 0:j.canPlayerUseSkill("player"))??!0,aiThinkingState:N}):null;case"result":{const U=(i==null?void 0:i.winner)==="player",Y=((I=i==null?void 0:i.playerStats)==null?void 0:I.geassSuccessCount)||0,D=((O=i==null?void 0:i.aiPlayers)==null?void 0:O.reduce((ie,oe)=>{var W;return ie+(((W=oe.stats)==null?void 0:W.geassSuccessCount)||0)},0))||0,te=((H=i==null?void 0:i.turnState)==null?void 0:H.turnNumber)||0;return h.jsx(yh,{isWin:U,playerScore:Y,opponentScore:D,turnNumber:te,onRestart:Pl,onMainMenu:ta})}case"settings":return na();case"help":return Il();default:return h.jsx(Lu,{onStart:R,onSettings:k,onHelp:$})}},na=()=>h.jsxs("div",{className:"cg-placeholder-screen",children:[h.jsx("h2",{children:"设置"}),h.jsxs("div",{className:"cg-settings-content",children:[h.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),h.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),h.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),Il=()=>h.jsxs("div",{className:"cg-placeholder-screen",children:[h.jsx("h2",{children:"游戏帮助"}),h.jsxs("div",{className:"cg-help-content",children:[h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"🎮 游戏规则"}),h.jsxs("ul",{children:[h.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),h.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),h.jsxs("li",{children:[h.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),h.jsx("li",{children:"质疑后翻牌验证："}),h.jsxs("li",{children:["• 出的牌",h.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),h.jsxs("li",{children:["• 出的牌",h.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),h.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),h.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"👤 角色技能详解"}),h.jsxs("ul",{children:[h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),h.jsx("br",{}),h.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),h.jsx("br",{}),h.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),h.jsx("br",{}),h.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),h.jsxs("li",{children:[h.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),h.jsx("br",{}),h.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),h.jsxs("section",{className:"cg-help-section",children:[h.jsx("h3",{children:"🃏 特殊牌"}),h.jsx("ul",{children:h.jsxs("li",{children:[h.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),h.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return h.jsx("div",{className:"cg-app",children:lr()})},ig=pi.createRoot(document.getElementById("root"));ig.render(h.jsx(Df.StrictMode,{children:h.jsx(lg,{})}));
//# sourceMappingURL=index-CIqoictz.js.map
