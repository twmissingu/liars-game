var Id=Object.defineProperty;var Md=(e,t,n)=>t in e?Id(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>Md(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();var nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vu={exports:{}},ql={},yu={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Hd=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Vd=Symbol.for("react.memo"),Gd=Symbol.for("react.lazy"),es=Symbol.iterator;function Ud(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_u=Object.assign,wu={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||xu}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ku(){}ku.prototype=Jn.prototype;function Vi(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||xu}var Gi=Vi.prototype=new ku;Gi.constructor=Vi;_u(Gi,Jn.prototype);Gi.isPureReactComponent=!0;var ts=Array.isArray,Su=Object.prototype.hasOwnProperty,Ui={current:null},Cu={key:!0,ref:!0,__self:!0,__source:!0};function Nu(e,t,n){var r,l={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Su.call(t,r)&&!Cu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var d=Array(u),p=0;p<u;p++)d[p]=arguments[p+2];l.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:$r,type:e,key:a,ref:o,props:l,_owner:Ui.current}}function Xd(e,t){return{$$typeof:$r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===$r}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ns=/\/+/g;function va(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function hl(e,t,n,r,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $r:case Ld:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+va(o,0):r,ts(l)?(n="",e!=null&&(n=e.replace(ns,"$&/")+"/"),hl(l,t,n,"",function(p){return p})):l!=null&&(Xi(l)&&(l=Xd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ns,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ts(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+va(a,u);o+=hl(a,t,n,d,l)}else if(d=Ud(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+va(a,u++),o+=hl(a,t,n,d,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qr(e,t,n){if(e==null)return e;var r=[],l=0;return hl(e,r,"","",function(a){return t.call(n,a,l++)}),r}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},gl={transition:null},Yd={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Ui};function Au(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!Xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Jn;D.Fragment=Rd;D.Profiler=Fd;D.PureComponent=Vi;D.StrictMode=Od;D.Suspense=$d;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;D.act=Au;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_u({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ui.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Su.call(t,d)&&!Cu.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var p=0;p<d;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:$r,type:e.type,key:l,ref:a,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Hd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dd,_context:e},e.Consumer=e};D.createElement=Nu;D.createFactory=function(e){var t=Nu.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Bd,render:e}};D.isValidElement=Xi;D.lazy=function(e){return{$$typeof:Gd,_payload:{_status:-1,_result:e},_init:Qd}};D.memo=function(e,t){return{$$typeof:Vd,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=gl.transition;gl.transition={};try{e()}finally{gl.transition=t}};D.unstable_act=Au;D.useCallback=function(e,t){return Me.current.useCallback(e,t)};D.useContext=function(e){return Me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};D.useEffect=function(e,t){return Me.current.useEffect(e,t)};D.useId=function(){return Me.current.useId()};D.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Me.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};D.useRef=function(e){return Me.current.useRef(e)};D.useState=function(e){return Me.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Me.current.useTransition()};D.version="18.3.1";yu.exports=D;var I=yu.exports;const Kd=zd(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=I,Zd=Symbol.for("react.element"),qd=Symbol.for("react.fragment"),ef=Object.prototype.hasOwnProperty,tf=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nf={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ef.call(t,r)&&!nf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Zd,type:e,key:a,ref:o,props:l,_owner:tf.current}}ql.Fragment=qd;ql.jsx=bu;ql.jsxs=bu;vu.exports=ql;var m=vu.exports,Ya={},Eu={exports:{}},Ke={},Tu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,z){var R=E.length;E.push(z);e:for(;0<R;){var Y=R-1>>>1,ae=E[Y];if(0<l(ae,z))E[Y]=z,E[R]=ae,R=Y;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var z=E[0],R=E.pop();if(R!==z){E[0]=R;e:for(var Y=0,ae=E.length,zt=ae>>>1;Y<zt;){var Ue=2*(Y+1)-1,rn=E[Ue],lt=Ue+1,kt=E[lt];if(0>l(rn,R))lt<ae&&0>l(kt,rn)?(E[Y]=kt,E[lt]=R,Y=lt):(E[Y]=rn,E[Ue]=R,Y=Ue);else if(lt<ae&&0>l(kt,R))E[Y]=kt,E[lt]=R,Y=lt;else break e}}return z}function l(E,z){var R=E.sortIndex-z.sortIndex;return R!==0?R:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var d=[],p=[],x=1,i=null,s=3,c=!1,g=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var z=n(p);z!==null;){if(z.callback===null)r(p);else if(z.startTime<=E)r(p),z.sortIndex=z.expirationTime,t(d,z);else break;z=n(p)}}function w(E){if(y=!1,v(E),!g)if(n(d)!==null)g=!0,ve(C);else{var z=n(p);z!==null&&Ge(w,z.startTime-E)}}function C(E,z){g=!1,y&&(y=!1,f(k),k=-1),c=!0;var R=s;try{for(v(z),i=n(d);i!==null&&(!(i.expirationTime>z)||E&&!Q());){var Y=i.callback;if(typeof Y=="function"){i.callback=null,s=i.priorityLevel;var ae=Y(i.expirationTime<=z);z=e.unstable_now(),typeof ae=="function"?i.callback=ae:i===n(d)&&r(d),v(z)}else r(d);i=n(d)}if(i!==null)var zt=!0;else{var Ue=n(p);Ue!==null&&Ge(w,Ue.startTime-z),zt=!1}return zt}finally{i=null,s=R,c=!1}}var b=!1,N=null,k=-1,M=5,L=-1;function Q(){return!(e.unstable_now()-L<M)}function Ve(){if(N!==null){var E=e.unstable_now();L=E;var z=!0;try{z=N(!0,E)}finally{z?Le():(b=!1,N=null)}}else b=!1}var Le;if(typeof h=="function")Le=function(){h(Ve)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,A=Re.port2;Re.port1.onmessage=Ve,Le=function(){A.postMessage(null)}}else Le=function(){_(Ve,0)};function ve(E){N=E,b||(b=!0,Le())}function Ge(E,z){k=_(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){g||c||(g=!0,ve(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(E){switch(s){case 1:case 2:case 3:var z=3;break;default:z=s}var R=s;s=z;try{return E()}finally{s=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=s;s=E;try{return z()}finally{s=R}},e.unstable_scheduleCallback=function(E,z,R){var Y=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Y+R:Y):R=Y,E){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=R+ae,E={id:x++,callback:z,priorityLevel:E,startTime:R,expirationTime:ae,sortIndex:-1},R>Y?(E.sortIndex=R,t(p,E),n(d)===null&&E===n(p)&&(y?(f(k),k=-1):y=!0,Ge(w,R-Y))):(E.sortIndex=ae,t(d,E),g||c||(g=!0,ve(C))),E},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(E){var z=s;return function(){var R=s;s=z;try{return E.apply(this,arguments)}finally{s=R}}}})(ju);Tu.exports=ju;var rf=Tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=I,Ye=rf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pu=new Set,Cr={};function _n(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Pu.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,af=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rs={},ls={};function of(e){return Ka.call(ls,e)?!0:Ka.call(rs,e)?!1:af.test(e)?ls[e]=!0:(rs[e]=!0,!1)}function sf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,t,n,r){if(t===null||typeof t>"u"||sf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);_e[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wi,Qi);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wi,Qi);_e[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yi(e,t,n,r){var l=_e.hasOwnProperty(t)?_e[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uf(t,n,l,r)&&(n=null),r||l===null?of(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mt=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Ja=Symbol.for("react.profiler"),Iu=Symbol.for("react.provider"),Mu=Symbol.for("react.context"),Ji=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),zu=Symbol.for("react.offscreen"),as=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,ya;function dr(e){if(ya===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ya=t&&t[1]||""}return`
`+ya+e}var xa=!1;function _a(e,t){if(!e||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),a=r.stack.split(`
`),o=l.length-1,u=a.length-1;1<=o&&0<=u&&l[o]!==a[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==a[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==a[u]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=u);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function cf(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=_a(e.type,!1),e;case 11:return e=_a(e.type.render,!1),e;case 1:return e=_a(e.type,!0),e;default:return""}}function ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Nn:return"Portal";case Ja:return"Profiler";case Ki:return"StrictMode";case Za:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mu:return(e.displayName||"Context")+".Consumer";case Iu:return(e._context.displayName||"Context")+".Provider";case Ji:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zi:return t=e.displayName||null,t!==null?t:ei(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return ei(e(t))}catch{}}return null}function df(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ei(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ff(e){var t=Lu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=ff(e))}function Ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function is(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ou(e,t){t=t.checked,t!=null&&Yi(e,"checked",t,!1)}function ni(e,t){Ou(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&ri(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function os(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ri(e,t,n){(t!=="number"||bl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ss(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(fr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function Fu(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function us(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Du(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,Hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pf=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){pf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Bu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function $u(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Bu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var mf=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(e,t){if(t){if(mf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,Dn=null,Hn=null;function cs(e){if(e=Ur(e)){if(typeof ui!="function")throw Error(S(280));var t=e.stateNode;t&&(t=la(t),ui(e.stateNode,e.type,t))}}function Vu(e){Dn?Hn?Hn.push(e):Hn=[e]:Dn=e}function Gu(){if(Dn){var e=Dn,t=Hn;if(Hn=Dn=null,cs(e),t)for(e=0;e<t.length;e++)cs(t[e])}}function Uu(e,t){return e(t)}function Xu(){}var wa=!1;function Wu(e,t,n){if(wa)return e(t,n);wa=!0;try{return Uu(e,t,n)}finally{wa=!1,(Dn!==null||Hn!==null)&&(Xu(),Gu())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=la(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ci=!1;if(Tt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){ci=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{ci=!1}function hf(e,t,n,r,l,a,o,u,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var gr=!1,El=null,Tl=!1,di=null,gf={onError:function(e){gr=!0,El=e}};function vf(e,t,n,r,l,a,o,u,d){gr=!1,El=null,hf.apply(gf,arguments)}function yf(e,t,n,r,l,a,o,u,d){if(vf.apply(this,arguments),gr){if(gr){var p=El;gr=!1,El=null}else throw Error(S(198));Tl||(Tl=!0,di=p)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ds(e){if(wn(e)!==e)throw Error(S(188))}function xf(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return ds(l),e;if(a===r)return ds(l),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=a;break}if(u===r){o=!0,r=l,n=a;break}u=u.sibling}if(!o){for(u=a.child;u;){if(u===n){o=!0,n=a,r=l;break}if(u===r){o=!0,r=a,n=l;break}u=u.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Yu(e){return e=xf(e),e!==null?Ku(e):null}function Ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ku(e);if(t!==null)return t;e=e.sibling}return null}var Ju=Ye.unstable_scheduleCallback,fs=Ye.unstable_cancelCallback,_f=Ye.unstable_shouldYield,wf=Ye.unstable_requestPaint,se=Ye.unstable_now,kf=Ye.unstable_getCurrentPriorityLevel,eo=Ye.unstable_ImmediatePriority,Zu=Ye.unstable_UserBlockingPriority,jl=Ye.unstable_NormalPriority,Sf=Ye.unstable_LowPriority,qu=Ye.unstable_IdlePriority,ea=null,_t=null;function Cf(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ea,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:bf,Nf=Math.log,Af=Math.LN2;function bf(e){return e>>>=0,e===0?32:31-(Nf(e)/Af|0)|0}var Zr=64,qr=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=pr(u):(a&=o,a!==0&&(r=pr(a)))}else o=n&~l,o!==0?r=pr(o):a!==0&&(r=pr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),l=1<<n,r|=e[n],t&=~l;return r}function Ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ct(a),u=1<<o,d=l[o];d===-1?(!(u&n)||u&r)&&(l[o]=Ef(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ct(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function to(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nc,no,rc,lc,ac,pi=!1,el=[],Gt=null,Ut=null,Xt=null,br=new Map,Er=new Map,Ht=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ps(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function ar(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=Ur(t),t!==null&&no(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function If(e,t,n,r,l){switch(t){case"focusin":return Gt=ar(Gt,e,t,n,r,l),!0;case"dragenter":return Ut=ar(Ut,e,t,n,r,l),!0;case"mouseover":return Xt=ar(Xt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return br.set(a,ar(br.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Er.set(a,ar(Er.get(a)||null,e,t,n,r,l)),!0}return!1}function ic(e){var t=cn(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qu(n),t!==null){e.blockedOn=t,ac(e.priority,function(){rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);si=r,n.target.dispatchEvent(r),si=null}else return t=Ur(n),t!==null&&no(t),e.blockedOn=n,!1;t.shift()}return!0}function ms(e,t,n){vl(e)&&n.delete(t)}function Mf(){pi=!1,Gt!==null&&vl(Gt)&&(Gt=null),Ut!==null&&vl(Ut)&&(Ut=null),Xt!==null&&vl(Xt)&&(Xt=null),br.forEach(ms),Er.forEach(ms)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,pi||(pi=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Mf)))}function Tr(e){function t(l){return ir(l,e)}if(0<el.length){ir(el[0],e);for(var n=1;n<el.length;n++){var r=el[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&ir(Gt,e),Ut!==null&&ir(Ut,e),Xt!==null&&ir(Xt,e),br.forEach(t),Er.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)ic(n),n.blockedOn===null&&Ht.shift()}var Bn=Mt.ReactCurrentBatchConfig,Il=!0;function zf(e,t,n,r){var l=W,a=Bn.transition;Bn.transition=null;try{W=1,ro(e,t,n,r)}finally{W=l,Bn.transition=a}}function Lf(e,t,n,r){var l=W,a=Bn.transition;Bn.transition=null;try{W=4,ro(e,t,n,r)}finally{W=l,Bn.transition=a}}function ro(e,t,n,r){if(Il){var l=mi(e,t,n,r);if(l===null)Ia(e,t,r,Ml,n),ps(e,r);else if(If(l,e,t,n,r))r.stopPropagation();else if(ps(e,r),t&4&&-1<Pf.indexOf(e)){for(;l!==null;){var a=Ur(l);if(a!==null&&nc(a),a=mi(e,t,n,r),a===null&&Ia(e,t,r,Ml,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else Ia(e,t,r,null,n)}}var Ml=null;function mi(e,t,n,r){if(Ml=null,e=qi(r),e=cn(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ml=e,null}function oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kf()){case eo:return 1;case Zu:return 4;case jl:case Sf:return 16;case qu:return 536870912;default:return 16}default:return 16}}var $t=null,lo=null,yl=null;function sc(){if(yl)return yl;var e,t=lo,n=t.length,r,l="value"in $t?$t.value:$t.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[a-r];r++);return yl=l.slice(e,1<r?1-r:void 0)}function xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function hs(){return!1}function Je(e){function t(n,r,l,a,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?tl:hs,this.isPropagationStopped=hs,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=Je(Zn),Gr=le({},Zn,{view:0,detail:0}),Rf=Je(Gr),Sa,Ca,or,ta=le({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Sa=e.screenX-or.screenX,Ca=e.screenY-or.screenY):Ca=Sa=0,or=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),gs=Je(ta),Of=le({},ta,{dataTransfer:0}),Ff=Je(Of),Df=le({},Gr,{relatedTarget:0}),Na=Je(Df),Hf=le({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bf=Je(Hf),$f=le({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vf=Je($f),Gf=le({},Zn,{data:0}),vs=Je(Gf),Uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wf[e])?!!t[e]:!1}function io(){return Qf}var Yf=le({},Gr,{key:function(e){if(e.key){var t=Uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:io,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kf=Je(Yf),Jf=le({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=Je(Jf),Zf=le({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:io}),qf=Je(Zf),ep=le({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tp=Je(ep),np=le({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rp=Je(np),lp=[9,13,27,32],oo=Tt&&"CompositionEvent"in window,vr=null;Tt&&"documentMode"in document&&(vr=document.documentMode);var ap=Tt&&"TextEvent"in window&&!vr,uc=Tt&&(!oo||vr&&8<vr&&11>=vr),xs=" ",_s=!1;function cc(e,t){switch(e){case"keyup":return lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function ip(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(_s=!0,xs);case"textInput":return e=t.data,e===xs&&_s?null:e;default:return null}}function op(e,t){if(bn)return e==="compositionend"||!oo&&cc(e,t)?(e=sc(),yl=lo=$t=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uc&&t.locale!=="ko"?null:t.data;default:return null}}var sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sp[e.type]:t==="textarea"}function fc(e,t,n,r){Vu(r),t=zl(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,jr=null;function up(e){Sc(e,0)}function na(e){var t=jn(e);if(Ru(t))return e}function cp(e,t){if(e==="change")return t}var pc=!1;if(Tt){var Aa;if(Tt){var ba="oninput"in document;if(!ba){var ks=document.createElement("div");ks.setAttribute("oninput","return;"),ba=typeof ks.oninput=="function"}Aa=ba}else Aa=!1;pc=Aa&&(!document.documentMode||9<document.documentMode)}function Ss(){yr&&(yr.detachEvent("onpropertychange",mc),jr=yr=null)}function mc(e){if(e.propertyName==="value"&&na(jr)){var t=[];fc(t,jr,e,qi(e)),Wu(up,t)}}function dp(e,t,n){e==="focusin"?(Ss(),yr=t,jr=n,yr.attachEvent("onpropertychange",mc)):e==="focusout"&&Ss()}function fp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return na(jr)}function pp(e,t){if(e==="click")return na(t)}function mp(e,t){if(e==="input"||e==="change")return na(t)}function hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:hp;function Pr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ka.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,t){var n=Cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cs(n)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gc(){for(var e=window,t=bl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bl(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gp(e){var t=gc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hc(n.ownerDocument.documentElement,n)){if(r!==null&&so(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=Ns(n,a);var o=Ns(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vp=Tt&&"documentMode"in document&&11>=document.documentMode,En=null,hi=null,xr=null,gi=!1;function As(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gi||En==null||En!==bl(r)||(r=En,"selectionStart"in r&&so(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Pr(xr,r)||(xr=r,r=zl(hi,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function nl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Ea={},vc={};Tt&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function ra(e){if(Ea[e])return Ea[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vc)return Ea[e]=t[n];return e}var yc=ra("animationend"),xc=ra("animationiteration"),_c=ra("animationstart"),wc=ra("transitionend"),kc=new Map,bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){kc.set(e,t),_n(t,[e])}for(var Ta=0;Ta<bs.length;Ta++){var ja=bs[Ta],yp=ja.toLowerCase(),xp=ja[0].toUpperCase()+ja.slice(1);en(yp,"on"+xp)}en(yc,"onAnimationEnd");en(xc,"onAnimationIteration");en(_c,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(wc,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_p=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function Es(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yf(r,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],d=u.instance,p=u.currentTarget;if(u=u.listener,d!==a&&l.isPropagationStopped())break e;Es(l,u,p),a=d}else for(o=0;o<r.length;o++){if(u=r[o],d=u.instance,p=u.currentTarget,u=u.listener,d!==a&&l.isPropagationStopped())break e;Es(l,u,p),a=d}}}if(Tl)throw e=di,Tl=!1,di=null,e}function q(e,t){var n=t[wi];n===void 0&&(n=t[wi]=new Set);var r=e+"__bubble";n.has(r)||(Cc(t,e,2,!1),n.add(r))}function Pa(e,t,n){var r=0;t&&(r|=4),Cc(n,e,r,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[rl]){e[rl]=!0,Pu.forEach(function(n){n!=="selectionchange"&&(_p.has(n)||Pa(n,!1,e),Pa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,Pa("selectionchange",!1,t))}}function Cc(e,t,n,r){switch(oc(t)){case 1:var l=zf;break;case 4:l=Lf;break;default:l=ro}n=l.bind(null,t,n,e),l=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ia(e,t,n,r,l){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;u!==null;){if(o=cn(u),o===null)return;if(d=o.tag,d===5||d===6){r=a=o;continue e}u=u.parentNode}}r=r.return}Wu(function(){var p=a,x=qi(n),i=[];e:{var s=kc.get(e);if(s!==void 0){var c=ao,g=e;switch(e){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":c=Kf;break;case"focusin":g="focus",c=Na;break;case"focusout":g="blur",c=Na;break;case"beforeblur":case"afterblur":c=Na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=qf;break;case yc:case xc:case _c:c=Bf;break;case wc:c=tp;break;case"scroll":c=Rf;break;case"wheel":c=rp;break;case"copy":case"cut":case"paste":c=Vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=ys}var y=(t&4)!==0,_=!y&&e==="scroll",f=y?s!==null?s+"Capture":null:s;y=[];for(var h=p,v;h!==null;){v=h;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=Ar(h,f),w!=null&&y.push(Mr(h,w,v)))),_)break;h=h.return}0<y.length&&(s=new c(s,g,null,n,x),i.push({event:s,listeners:y}))}}if(!(t&7)){e:{if(s=e==="mouseover"||e==="pointerover",c=e==="mouseout"||e==="pointerout",s&&n!==si&&(g=n.relatedTarget||n.fromElement)&&(cn(g)||g[jt]))break e;if((c||s)&&(s=x.window===x?x:(s=x.ownerDocument)?s.defaultView||s.parentWindow:window,c?(g=n.relatedTarget||n.toElement,c=p,g=g?cn(g):null,g!==null&&(_=wn(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(c=null,g=p),c!==g)){if(y=gs,w="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=ys,w="onPointerLeave",f="onPointerEnter",h="pointer"),_=c==null?s:jn(c),v=g==null?s:jn(g),s=new y(w,h+"leave",c,n,x),s.target=_,s.relatedTarget=v,w=null,cn(x)===p&&(y=new y(f,h+"enter",g,n,x),y.target=v,y.relatedTarget=_,w=y),_=w,c&&g)t:{for(y=c,f=g,h=0,v=y;v;v=Cn(v))h++;for(v=0,w=f;w;w=Cn(w))v++;for(;0<h-v;)y=Cn(y),h--;for(;0<v-h;)f=Cn(f),v--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=Cn(y),f=Cn(f)}y=null}else y=null;c!==null&&Ts(i,s,c,y,!1),g!==null&&_!==null&&Ts(i,_,g,y,!0)}}e:{if(s=p?jn(p):window,c=s.nodeName&&s.nodeName.toLowerCase(),c==="select"||c==="input"&&s.type==="file")var C=cp;else if(ws(s))if(pc)C=mp;else{C=fp;var b=dp}else(c=s.nodeName)&&c.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(C=pp);if(C&&(C=C(e,p))){fc(i,C,n,x);break e}b&&b(e,s,p),e==="focusout"&&(b=s._wrapperState)&&b.controlled&&s.type==="number"&&ri(s,"number",s.value)}switch(b=p?jn(p):window,e){case"focusin":(ws(b)||b.contentEditable==="true")&&(En=b,hi=p,xr=null);break;case"focusout":xr=hi=En=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,As(i,n,x);break;case"selectionchange":if(vp)break;case"keydown":case"keyup":As(i,n,x)}var N;if(oo)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else bn?cc(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(uc&&n.locale!=="ko"&&(bn||k!=="onCompositionStart"?k==="onCompositionEnd"&&bn&&(N=sc()):($t=x,lo="value"in $t?$t.value:$t.textContent,bn=!0)),b=zl(p,k),0<b.length&&(k=new vs(k,e,null,n,x),i.push({event:k,listeners:b}),N?k.data=N:(N=dc(n),N!==null&&(k.data=N)))),(N=ap?ip(e,n):op(e,n))&&(p=zl(p,"onBeforeInput"),0<p.length&&(x=new vs("onBeforeInput","beforeinput",null,n,x),i.push({event:x,listeners:p}),x.data=N))}Sc(i,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Ar(e,n),a!=null&&r.unshift(Mr(e,a,l)),a=Ar(e,t),a!=null&&r.push(Mr(e,a,l))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ts(e,t,n,r,l){for(var a=t._reactName,o=[];n!==null&&n!==r;){var u=n,d=u.alternate,p=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&p!==null&&(u=p,l?(d=Ar(n,a),d!=null&&o.unshift(Mr(n,d,u))):l||(d=Ar(n,a),d!=null&&o.push(Mr(n,d,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var wp=/\r\n?/g,kp=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(wp,`
`).replace(kp,"")}function ll(e,t,n){if(t=js(t),js(e)!==t&&n)throw Error(S(425))}function Ll(){}var vi=null,yi=null;function xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,Ps=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ps<"u"?function(e){return Ps.resolve(null).then(e).catch(Np)}:_i;function Np(e){setTimeout(function(){throw e})}function Ma(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Tr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Is(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),yt="__reactFiber$"+qn,zr="__reactProps$"+qn,jt="__reactContainer$"+qn,wi="__reactEvents$"+qn,Ap="__reactListeners$"+qn,bp="__reactHandles$"+qn;function cn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Is(e);e!==null;){if(n=e[yt])return n;e=Is(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[yt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function la(e){return e[zr]||null}var ki=[],Pn=-1;function tn(e){return{current:e}}function ee(e){0>Pn||(e.current=ki[Pn],ki[Pn]=null,Pn--)}function J(e,t){Pn++,ki[Pn]=e.current,e.current=t}var qt={},Te=tn(qt),He=tn(!1),hn=qt;function Un(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Be(e){return e=e.childContextTypes,e!=null}function Rl(){ee(He),ee(Te)}function Ms(e,t,n){if(Te.current!==qt)throw Error(S(168));J(Te,t),J(He,n)}function Nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,df(e)||"Unknown",l));return le({},n,r)}function Ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,hn=Te.current,J(Te,e),J(He,He.current),!0}function zs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Nc(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,ee(He),ee(Te),J(Te,e)):ee(He),J(He,n)}var Nt=null,aa=!1,za=!1;function Ac(e){Nt===null?Nt=[e]:Nt.push(e)}function Ep(e){aa=!0,Ac(e)}function nn(){if(!za&&Nt!==null){za=!0;var e=0,t=W;try{var n=Nt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,aa=!1}catch(l){throw Nt!==null&&(Nt=Nt.slice(e+1)),Ju(eo,nn),l}finally{W=t,za=!1}}return null}var In=[],Mn=0,Fl=null,Dl=0,Ze=[],qe=0,gn=null,At=1,bt="";function an(e,t){In[Mn++]=Dl,In[Mn++]=Fl,Fl=e,Dl=t}function bc(e,t,n){Ze[qe++]=At,Ze[qe++]=bt,Ze[qe++]=gn,gn=e;var r=At;e=bt;var l=32-ct(r)-1;r&=~(1<<l),n+=1;var a=32-ct(t)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,At=1<<32-ct(t)+l|n<<l|r,bt=a+e}else At=1<<a|n<<l|r,bt=e}function uo(e){e.return!==null&&(an(e,1),bc(e,1,0))}function co(e){for(;e===Fl;)Fl=In[--Mn],In[Mn]=null,Dl=In[--Mn],In[Mn]=null;for(;e===gn;)gn=Ze[--qe],Ze[qe]=null,bt=Ze[--qe],Ze[qe]=null,At=Ze[--qe],Ze[qe]=null}var Qe=null,We=null,te=!1,ut=null;function Ec(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ls(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,We=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:At,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,We=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(te){var t=We;if(t){var n=t;if(!Ls(e,t)){if(Si(e))throw Error(S(418));t=Wt(n.nextSibling);var r=Qe;t&&Ls(e,t)?Ec(r,n):(e.flags=e.flags&-4097|2,te=!1,Qe=e)}}else{if(Si(e))throw Error(S(418));e.flags=e.flags&-4097|2,te=!1,Qe=e}}}function Rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function al(e){if(e!==Qe)return!1;if(!te)return Rs(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xi(e.type,e.memoizedProps)),t&&(t=We)){if(Si(e))throw Tc(),Error(S(418));for(;t;)Ec(e,t),t=Wt(t.nextSibling)}if(Rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Qe?Wt(e.stateNode.nextSibling):null;return!0}function Tc(){for(var e=We;e;)e=Wt(e.nextSibling)}function Xn(){We=Qe=null,te=!1}function fo(e){ut===null?ut=[e]:ut.push(e)}var Tp=Mt.ReactCurrentBatchConfig;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var u=l.refs;o===null?delete u[a]:u[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function il(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Os(e){var t=e._init;return t(e._payload)}function jc(e){function t(f,h){if(e){var v=f.deletions;v===null?(f.deletions=[h],f.flags|=16):v.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function l(f,h){return f=Jt(f,h),f.index=0,f.sibling=null,f}function a(f,h,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<h?(f.flags|=2,h):v):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,h,v,w){return h===null||h.tag!==6?(h=Ba(v,f.mode,w),h.return=f,h):(h=l(h,v),h.return=f,h)}function d(f,h,v,w){var C=v.type;return C===An?x(f,h,v.props.children,w,v.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ft&&Os(C)===h.type)?(w=l(h,v.props),w.ref=sr(f,h,v),w.return=f,w):(w=Al(v.type,v.key,v.props,null,f.mode,w),w.ref=sr(f,h,v),w.return=f,w)}function p(f,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=$a(v,f.mode,w),h.return=f,h):(h=l(h,v.children||[]),h.return=f,h)}function x(f,h,v,w,C){return h===null||h.tag!==7?(h=mn(v,f.mode,w,C),h.return=f,h):(h=l(h,v),h.return=f,h)}function i(f,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ba(""+h,f.mode,v),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yr:return v=Al(h.type,h.key,h.props,null,f.mode,v),v.ref=sr(f,null,h),v.return=f,v;case Nn:return h=$a(h,f.mode,v),h.return=f,h;case Ft:var w=h._init;return i(f,w(h._payload),v)}if(fr(h)||rr(h))return h=mn(h,f.mode,v,null),h.return=f,h;il(f,h)}return null}function s(f,h,v,w){var C=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:u(f,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yr:return v.key===C?d(f,h,v,w):null;case Nn:return v.key===C?p(f,h,v,w):null;case Ft:return C=v._init,s(f,h,C(v._payload),w)}if(fr(v)||rr(v))return C!==null?null:x(f,h,v,w,null);il(f,v)}return null}function c(f,h,v,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(v)||null,u(h,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yr:return f=f.get(w.key===null?v:w.key)||null,d(h,f,w,C);case Nn:return f=f.get(w.key===null?v:w.key)||null,p(h,f,w,C);case Ft:var b=w._init;return c(f,h,v,b(w._payload),C)}if(fr(w)||rr(w))return f=f.get(v)||null,x(h,f,w,C,null);il(h,w)}return null}function g(f,h,v,w){for(var C=null,b=null,N=h,k=h=0,M=null;N!==null&&k<v.length;k++){N.index>k?(M=N,N=null):M=N.sibling;var L=s(f,N,v[k],w);if(L===null){N===null&&(N=M);break}e&&N&&L.alternate===null&&t(f,N),h=a(L,h,k),b===null?C=L:b.sibling=L,b=L,N=M}if(k===v.length)return n(f,N),te&&an(f,k),C;if(N===null){for(;k<v.length;k++)N=i(f,v[k],w),N!==null&&(h=a(N,h,k),b===null?C=N:b.sibling=N,b=N);return te&&an(f,k),C}for(N=r(f,N);k<v.length;k++)M=c(N,f,k,v[k],w),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?k:M.key),h=a(M,h,k),b===null?C=M:b.sibling=M,b=M);return e&&N.forEach(function(Q){return t(f,Q)}),te&&an(f,k),C}function y(f,h,v,w){var C=rr(v);if(typeof C!="function")throw Error(S(150));if(v=C.call(v),v==null)throw Error(S(151));for(var b=C=null,N=h,k=h=0,M=null,L=v.next();N!==null&&!L.done;k++,L=v.next()){N.index>k?(M=N,N=null):M=N.sibling;var Q=s(f,N,L.value,w);if(Q===null){N===null&&(N=M);break}e&&N&&Q.alternate===null&&t(f,N),h=a(Q,h,k),b===null?C=Q:b.sibling=Q,b=Q,N=M}if(L.done)return n(f,N),te&&an(f,k),C;if(N===null){for(;!L.done;k++,L=v.next())L=i(f,L.value,w),L!==null&&(h=a(L,h,k),b===null?C=L:b.sibling=L,b=L);return te&&an(f,k),C}for(N=r(f,N);!L.done;k++,L=v.next())L=c(N,f,k,L.value,w),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?k:L.key),h=a(L,h,k),b===null?C=L:b.sibling=L,b=L);return e&&N.forEach(function(Ve){return t(f,Ve)}),te&&an(f,k),C}function _(f,h,v,w){if(typeof v=="object"&&v!==null&&v.type===An&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Yr:e:{for(var C=v.key,b=h;b!==null;){if(b.key===C){if(C=v.type,C===An){if(b.tag===7){n(f,b.sibling),h=l(b,v.props.children),h.return=f,f=h;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ft&&Os(C)===b.type){n(f,b.sibling),h=l(b,v.props),h.ref=sr(f,b,v),h.return=f,f=h;break e}n(f,b);break}else t(f,b);b=b.sibling}v.type===An?(h=mn(v.props.children,f.mode,w,v.key),h.return=f,f=h):(w=Al(v.type,v.key,v.props,null,f.mode,w),w.ref=sr(f,h,v),w.return=f,f=w)}return o(f);case Nn:e:{for(b=v.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(f,h.sibling),h=l(h,v.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=$a(v,f.mode,w),h.return=f,f=h}return o(f);case Ft:return b=v._init,_(f,h,b(v._payload),w)}if(fr(v))return g(f,h,v,w);if(rr(v))return y(f,h,v,w);il(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(f,h.sibling),h=l(h,v),h.return=f,f=h):(n(f,h),h=Ba(v,f.mode,w),h.return=f,f=h),o(f)):n(f,h)}return _}var Wn=jc(!0),Pc=jc(!1),Hl=tn(null),Bl=null,zn=null,po=null;function mo(){po=zn=Bl=null}function ho(e){var t=Hl.current;ee(Hl),e._currentValue=t}function Ni(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){Bl=e,po=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(Bl===null)throw Error(S(308));zn=e,Bl.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var dn=null;function go(e){dn===null?dn=[e]:dn.push(e)}function Ic(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,go(t)):(n.next=l.next,l.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Pt(e,n)}return l=r.interleaved,l===null?(t.next=t,go(r)):(t.next=l.next,l.next=t),r.interleaved=t,Pt(e,n)}function _l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}function Fs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $l(e,t,n,r){var l=e.updateQueue;Dt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,p=d.next;d.next=null,o===null?a=p:o.next=p,o=d;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==o&&(u===null?x.firstBaseUpdate=p:u.next=p,x.lastBaseUpdate=d))}if(a!==null){var i=l.baseState;o=0,x=p=d=null,u=a;do{var s=u.lane,c=u.eventTime;if((r&s)===s){x!==null&&(x=x.next={eventTime:c,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var g=e,y=u;switch(s=t,c=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){i=g.call(c,i,s);break e}i=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,s=typeof g=="function"?g.call(c,i,s):g,s==null)break e;i=le({},i,s);break e;case 2:Dt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,s=l.effects,s===null?l.effects=[u]:s.push(u))}else c={eventTime:c,lane:s,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(p=x=c,d=i):x=x.next=c,o|=s;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;s=u,u=s.next,s.next=null,l.lastBaseUpdate=s,l.shared.pending=null}}while(!0);if(x===null&&(d=i),l.baseState=d,l.firstBaseUpdate=p,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);yn|=o,e.lanes=o,e.memoizedState=i}}function Ds(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Xr={},wt=tn(Xr),Lr=tn(Xr),Rr=tn(Xr);function fn(e){if(e===Xr)throw Error(S(174));return e}function yo(e,t){switch(J(Rr,t),J(Lr,e),J(wt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ai(t,e)}ee(wt),J(wt,t)}function Qn(){ee(wt),ee(Lr),ee(Rr)}function zc(e){fn(Rr.current);var t=fn(wt.current),n=ai(t,e.type);t!==n&&(J(Lr,e),J(wt,n))}function xo(e){Lr.current===e&&(ee(wt),ee(Lr))}var ne=tn(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La=[];function _o(){for(var e=0;e<La.length;e++)La[e]._workInProgressVersionPrimary=null;La.length=0}var wl=Mt.ReactCurrentDispatcher,Ra=Mt.ReactCurrentBatchConfig,vn=0,re=null,de=null,he=null,Gl=!1,_r=!1,Or=0,jp=0;function Ne(){throw Error(S(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,l,a){if(vn=a,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wl.current=e===null||e.memoizedState===null?zp:Lp,e=n(r,l),_r){a=0;do{if(_r=!1,Or=0,25<=a)throw Error(S(301));a+=1,he=de=null,t.updateQueue=null,wl.current=Rp,e=n(r,l)}while(_r)}if(wl.current=Ul,t=de!==null&&de.next!==null,vn=0,he=de=re=null,Gl=!1,t)throw Error(S(300));return e}function So(){var e=Or!==0;return Or=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?re.memoizedState=he=e:he=he.next=e,he}function rt(){if(de===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?re.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(S(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?re.memoizedState=he=e:he=he.next=e}return he}function Fr(e,t){return typeof t=="function"?t(e):t}function Oa(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=de,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var u=o=null,d=null,p=a;do{var x=p.lane;if((vn&x)===x)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var i={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(u=d=i,o=r):d=d.next=i,re.lanes|=x,yn|=x}p=p.next}while(p!==null&&p!==a);d===null?o=r:d.next=u,ft(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,re.lanes|=a,yn|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fa(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);ft(a,t.memoizedState)||(De=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Lc(){}function Rc(e,t){var n=re,r=rt(),l=t(),a=!ft(r.memoizedState,l);if(a&&(r.memoizedState=l,De=!0),r=r.queue,Co(Dc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Dr(9,Fc.bind(null,n,r,l,t),void 0,null),ge===null)throw Error(S(349));vn&30||Oc(n,t,l)}return l}function Oc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,Hc(t)&&Bc(e)}function Dc(e,t,n){return n(function(){Hc(t)&&Bc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Bc(e){var t=Pt(e,1);t!==null&&dt(t,e,1,-1)}function Hs(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Mp.bind(null,re,e),[t.memoizedState,e]}function Dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $c(){return rt().memoizedState}function kl(e,t,n,r){var l=vt();re.flags|=e,l.memoizedState=Dr(1|t,n,void 0,r===void 0?null:r)}function ia(e,t,n,r){var l=rt();r=r===void 0?null:r;var a=void 0;if(de!==null){var o=de.memoizedState;if(a=o.destroy,r!==null&&wo(r,o.deps)){l.memoizedState=Dr(t,n,a,r);return}}re.flags|=e,l.memoizedState=Dr(1|t,n,a,r)}function Bs(e,t){return kl(8390656,8,e,t)}function Co(e,t){return ia(2048,8,e,t)}function Vc(e,t){return ia(4,2,e,t)}function Gc(e,t){return ia(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xc(e,t,n){return n=n!=null?n.concat([e]):null,ia(4,4,Uc.bind(null,t,e),n)}function No(){}function Wc(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qc(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yc(e,t,n){return vn&21?(ft(n,t)||(n=ec(),re.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Pp(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Ra.transition;Ra.transition={};try{e(!1),t()}finally{W=n,Ra.transition=r}}function Kc(){return rt().memoizedState}function Ip(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jc(e))Zc(t,n);else if(n=Ic(e,t,n,r),n!==null){var l=Ie();dt(n,e,r,l),qc(n,t,r)}}function Mp(e,t,n){var r=Kt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jc(e))Zc(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,u=a(o,n);if(l.hasEagerState=!0,l.eagerState=u,ft(u,o)){var d=t.interleaved;d===null?(l.next=l,go(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=Ic(e,t,l,r),n!==null&&(l=Ie(),dt(n,e,r,l),qc(n,t,r))}}function Jc(e){var t=e.alternate;return e===re||t!==null&&t===re}function Zc(e,t){_r=Gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}var Ul={readContext:nt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},zp={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Bs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,kl(4194308,4,Uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kl(4194308,4,e,t)},useInsertionEffect:function(e,t){return kl(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ip.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Hs,useDebugValue:No,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Hs(!1),t=e[0];return e=Pp.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,l=vt();if(te){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ge===null)throw Error(S(349));vn&30||Oc(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,Bs(Dc.bind(null,r,a,e),[e]),r.flags|=2048,Dr(9,Fc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=vt(),t=ge.identifierPrefix;if(te){var n=bt,r=At;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lp={readContext:nt,useCallback:Wc,useContext:nt,useEffect:Co,useImperativeHandle:Xc,useInsertionEffect:Vc,useLayoutEffect:Gc,useMemo:Qc,useReducer:Oa,useRef:$c,useState:function(){return Oa(Fr)},useDebugValue:No,useDeferredValue:function(e){var t=rt();return Yc(t,de.memoizedState,e)},useTransition:function(){var e=Oa(Fr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Lc,useSyncExternalStore:Rc,useId:Kc,unstable_isNewReconciler:!1},Rp={readContext:nt,useCallback:Wc,useContext:nt,useEffect:Co,useImperativeHandle:Xc,useInsertionEffect:Vc,useLayoutEffect:Gc,useMemo:Qc,useReducer:Fa,useRef:$c,useState:function(){return Fa(Fr)},useDebugValue:No,useDeferredValue:function(e){var t=rt();return de===null?t.memoizedState=e:Yc(t,de.memoizedState,e)},useTransition:function(){var e=Fa(Fr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Lc,useSyncExternalStore:Rc,useId:Kc,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ai(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oa={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),l=Kt(e),a=Et(r,l);a.payload=t,n!=null&&(a.callback=n),t=Qt(e,a,l),t!==null&&(dt(t,e,l,r),_l(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),l=Kt(e),a=Et(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qt(e,a,l),t!==null&&(dt(t,e,l,r),_l(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=Kt(e),l=Et(n,r);l.tag=2,t!=null&&(l.callback=t),t=Qt(e,l,r),t!==null&&(dt(t,e,r,n),_l(t,e,r))}};function $s(e,t,n,r,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(l,a):!0}function ed(e,t,n){var r=!1,l=qt,a=t.contextType;return typeof a=="object"&&a!==null?a=nt(a):(l=Be(t)?hn:Te.current,r=t.contextTypes,a=(r=r!=null)?Un(e,l):qt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Vs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function bi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},vo(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=nt(a):(a=Be(t)?hn:Te.current,l.context=Un(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ai(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&oa.enqueueReplaceState(l,l.state,null),$l(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=cf(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Da(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Op=typeof WeakMap=="function"?WeakMap:Map;function td(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Fi=r),Ei(e,t)},n}function nd(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ei(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Op;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Jp.bind(null,e,t,n),t.then(e,e))}function Us(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var Fp=Mt.ReactCurrentOwner,De=!1;function Pe(e,t,n,r){t.child=e===null?Pc(t,null,n,r):Wn(t,e.child,n,r)}function Ws(e,t,n,r,l){n=n.render;var a=t.ref;return $n(t,l),r=ko(e,t,n,r,a,l),n=So(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,It(e,t,l)):(te&&n&&uo(t),t.flags|=1,Pe(e,t,r,l),t.child)}function Qs(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!Mo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,rd(e,t,a,r,l)):(e=Al(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(o,r)&&e.ref===t.ref)return It(e,t,l)}return t.flags|=1,e=Jt(a,r),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=a,(e.lanes&l)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,It(e,t,l)}return Ti(e,t,n,r,l)}function ld(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Rn,Xe),Xe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Rn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,J(Rn,Xe),Xe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,J(Rn,Xe),Xe|=r;return Pe(e,t,l,n),t.child}function ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,l){var a=Be(n)?hn:Te.current;return a=Un(t,a),$n(t,l),n=ko(e,t,n,r,a,l),r=So(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,It(e,t,l)):(te&&r&&uo(t),t.flags|=1,Pe(e,t,n,l),t.child)}function Ys(e,t,n,r,l){if(Be(n)){var a=!0;Ol(t)}else a=!1;if($n(t,l),t.stateNode===null)Sl(e,t),ed(t,n,r),bi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var d=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=nt(p):(p=Be(n)?hn:Te.current,p=Un(t,p));var x=n.getDerivedStateFromProps,i=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";i||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||d!==p)&&Vs(t,o,r,p),Dt=!1;var s=t.memoizedState;o.state=s,$l(t,r,o,l),d=t.memoizedState,u!==r||s!==d||He.current||Dt?(typeof x=="function"&&(Ai(t,n,x,r),d=t.memoizedState),(u=Dt||$s(t,n,u,r,s,d,p))?(i||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=p,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mc(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:ot(t.type,u),o.props=p,i=t.pendingProps,s=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=nt(d):(d=Be(n)?hn:Te.current,d=Un(t,d));var c=n.getDerivedStateFromProps;(x=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==i||s!==d)&&Vs(t,o,r,d),Dt=!1,s=t.memoizedState,o.state=s,$l(t,r,o,l);var g=t.memoizedState;u!==i||s!==g||He.current||Dt?(typeof c=="function"&&(Ai(t,n,c,r),g=t.memoizedState),(p=Dt||$s(t,n,p,r,s,g,d)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=d,r=p):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&s===e.memoizedState||(t.flags|=1024),r=!1)}return ji(e,t,n,r,a,l)}function ji(e,t,n,r,l,a){ad(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&zs(t,n,!1),It(e,t,a);r=t.stateNode,Fp.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Wn(t,e.child,null,a),t.child=Wn(t,null,u,a)):Pe(e,t,u,a),t.memoizedState=r.state,l&&zs(t,n,!0),t.child}function id(e){var t=e.stateNode;t.pendingContext?Ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ms(e,t.context,!1),yo(e,t.containerInfo)}function Ks(e,t,n,r,l){return Xn(),fo(l),t.flags|=256,Pe(e,t,n,r),t.child}var Pi={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function od(e,t,n){var r=t.pendingProps,l=ne.current,a=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(ne,l&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ca(o,r,0,null),e=mn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ii(n),t.memoizedState=Pi,e):Ao(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Dp(e,t,o,r,u,l,n);if(a){a=r.fallback,o=t.mode,l=e.child,u=l.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Jt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?a=Jt(u,a):(a=mn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ii(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Pi,r}return a=e.child,e=a.sibling,r=Jt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ao(e,t){return t=ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ol(e,t,n,r){return r!==null&&fo(r),Wn(t,e.child,null,n),e=Ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dp(e,t,n,r,l,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Da(Error(S(422))),ol(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=ca({mode:"visible",children:r.children},l,0,null),a=mn(a,l,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Wn(t,e.child,null,o),t.child.memoizedState=Ii(o),t.memoizedState=Pi,a);if(!(t.mode&1))return ol(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(S(419)),r=Da(a,r,void 0),ol(e,t,o,r)}if(u=(o&e.childLanes)!==0,De||u){if(r=ge,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,Pt(e,l),dt(r,e,l,-1))}return Io(),r=Da(Error(S(421))),ol(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Zp.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,We=Wt(l.nextSibling),Qe=t,te=!0,ut=null,e!==null&&(Ze[qe++]=At,Ze[qe++]=bt,Ze[qe++]=gn,At=e.id,bt=e.overflow,gn=t),t=Ao(t,r.children),t.flags|=4096,t)}function Js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ni(e.return,t,n)}function Ha(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function sd(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(Pe(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,n,t);else if(e.tag===19)Js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ne,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ha(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ha(t,!0,n,null,a);break;case"together":Ha(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hp(e,t,n){switch(t.tag){case 3:id(t),Xn();break;case 5:zc(t);break;case 1:Be(t.type)&&Ol(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;J(Hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?od(e,t,n):(J(ne,ne.current&1),e=It(e,t,n),e!==null?e.sibling:null);J(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,ld(e,t,n)}return It(e,t,n)}var ud,Mi,cd,dd;ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mi=function(){};cd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,fn(wt.current);var a=null;switch(n){case"input":l=ti(e,l),r=ti(e,r),a=[];break;case"select":l=le({},l,{value:void 0}),r=le({},r,{value:void 0}),a=[];break;case"textarea":l=li(e,l),r=li(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ll)}ii(n,r);var o;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Cr.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in r){var d=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&d!==u&&(d!=null||u!=null))if(p==="style")if(u){for(o in u)!u.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&u[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(a||(a=[]),a.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&q("scroll",e),a||u===d||(a=[])):(a=a||[]).push(p,d))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bp(e,t,n){var r=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Be(t.type)&&Rl(),Ae(t),null;case 3:return r=t.stateNode,Qn(),ee(He),ee(Te),_o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(Bi(ut),ut=null))),Mi(e,t),Ae(t),null;case 5:xo(t);var l=fn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)cd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ae(t),null}if(e=fn(wt.current),al(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[yt]=t,r[zr]=a,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(l=0;l<mr.length;l++)q(mr[l],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":is(r,a),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},q("invalid",r);break;case"textarea":ss(r,a),q("invalid",r)}ii(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),l=["children",""+u]):Cr.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Kr(r),os(r,a,!0);break;case"textarea":Kr(r),us(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Du(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yt]=t,e[zr]=r,ud(e,t,!1,!1),t.stateNode=e;e:{switch(o=oi(n,r),n){case"dialog":q("cancel",e),q("close",e),l=r;break;case"iframe":case"object":case"embed":q("load",e),l=r;break;case"video":case"audio":for(l=0;l<mr.length;l++)q(mr[l],e);l=r;break;case"source":q("error",e),l=r;break;case"img":case"image":case"link":q("error",e),q("load",e),l=r;break;case"details":q("toggle",e),l=r;break;case"input":is(e,r),l=ti(e,r),q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=le({},r,{value:void 0}),q("invalid",e);break;case"textarea":ss(e,r),l=li(e,r),q("invalid",e);break;default:l=r}ii(n,l),u=l;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?$u(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Hu(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Nr(e,d):typeof d=="number"&&Nr(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Cr.hasOwnProperty(a)?d!=null&&a==="onScroll"&&q("scroll",e):d!=null&&Yi(e,a,d,o))}switch(n){case"input":Kr(e),os(e,r,!1);break;case"textarea":Kr(e),us(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Fn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=fn(Rr.current),fn(wt.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(a=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Ae(t),null;case 13:if(ee(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))Tc(),Xn(),t.flags|=98560,a=!1;else if(a=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[yt]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),a=!1}else ut!==null&&(Bi(ut),ut=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?fe===0&&(fe=3):Io())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Qn(),Mi(e,t),e===null&&Ir(t.stateNode.containerInfo),Ae(t),null;case 10:return ho(t.type._context),Ae(t),null;case 17:return Be(t.type)&&Rl(),Ae(t),null;case 19:if(ee(ne),a=t.memoizedState,a===null)return Ae(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ur(a,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vl(e),o!==null){for(t.flags|=128,ur(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ne,ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&se()>Kn&&(t.flags|=128,r=!0,ur(a,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!te)return Ae(t),null}else 2*se()-a.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,ur(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,n=ne.current,J(ne,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function $p(e,t){switch(co(t),t.tag){case 1:return Be(t.type)&&Rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),ee(He),ee(Te),_o(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return Qn(),null;case 10:return ho(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var sl=!1,Ee=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,j=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function zi(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Zs=!1;function Gp(e,t){if(vi=Il,e=gc(),so(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,u=-1,d=-1,p=0,x=0,i=e,s=null;t:for(;;){for(var c;i!==n||l!==0&&i.nodeType!==3||(u=o+l),i!==a||r!==0&&i.nodeType!==3||(d=o+r),i.nodeType===3&&(o+=i.nodeValue.length),(c=i.firstChild)!==null;)s=i,i=c;for(;;){if(i===e)break t;if(s===n&&++p===l&&(u=o),s===a&&++x===r&&(d=o),(c=i.nextSibling)!==null)break;i=s,s=i.parentNode}i=c}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Il=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,_=g.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:ot(t.type,y),_);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Zs,Zs=!1,g}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&zi(t,n,a)}l=l.next}while(l!==r)}}function sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Li(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fd(e){var t=e.alternate;t!==null&&(e.alternate=null,fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[zr],delete t[wi],delete t[Ap],delete t[bp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pd(e){return e.tag===5||e.tag===3||e.tag===4}function qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ll));else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}var ye=null,st=!1;function Ot(e,t,n){for(n=n.child;n!==null;)md(e,t,n),n=n.sibling}function md(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 5:Ee||Ln(n,t);case 6:var r=ye,l=st;ye=null,Ot(e,t,n),ye=r,st=l,ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?Ma(e.parentNode,n):e.nodeType===1&&Ma(e,n),Tr(e)):Ma(ye,n.stateNode));break;case 4:r=ye,l=st,ye=n.stateNode.containerInfo,st=!0,Ot(e,t,n),ye=r,st=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&zi(n,t,o),l=l.next}while(l!==r)}Ot(e,t,n);break;case 1:if(!Ee&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ie(n,t,u)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ot(e,t,n),Ee=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function eu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vp),t.forEach(function(r){var l=qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ye=u.stateNode,st=!1;break e;case 3:ye=u.stateNode.containerInfo,st=!0;break e;case 4:ye=u.stateNode.containerInfo,st=!0;break e}u=u.return}if(ye===null)throw Error(S(160));md(a,o,l),ye=null,st=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(p){ie(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}function hd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),gt(e),r&4){try{wr(3,e,e.return),sa(3,e)}catch(y){ie(e,e.return,y)}try{wr(5,e,e.return)}catch(y){ie(e,e.return,y)}}break;case 1:it(t,e),gt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(it(t,e),gt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var l=e.stateNode;try{Nr(l,"")}catch(y){ie(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Ou(l,a),oi(u,o);var p=oi(u,a);for(o=0;o<d.length;o+=2){var x=d[o],i=d[o+1];x==="style"?$u(l,i):x==="dangerouslySetInnerHTML"?Hu(l,i):x==="children"?Nr(l,i):Yi(l,x,i,p)}switch(u){case"input":ni(l,a);break;case"textarea":Fu(l,a);break;case"select":var s=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var c=a.value;c!=null?Fn(l,!!a.multiple,c,!1):s!==!!a.multiple&&(a.defaultValue!=null?Fn(l,!!a.multiple,a.defaultValue,!0):Fn(l,!!a.multiple,a.multiple?[]:"",!1))}l[zr]=a}catch(y){ie(e,e.return,y)}}break;case 6:if(it(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(y){ie(e,e.return,y)}}break;case 3:if(it(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(y){ie(e,e.return,y)}break;case 4:it(t,e),gt(e);break;case 13:it(t,e),gt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(To=se())),r&4&&eu(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(p=Ee)||x,it(t,e),Ee=p):it(t,e),gt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(j=e,x=e.child;x!==null;){for(i=j=x;j!==null;){switch(s=j,c=s.child,s.tag){case 0:case 11:case 14:case 15:wr(4,s,s.return);break;case 1:Ln(s,s.return);var g=s.stateNode;if(typeof g.componentWillUnmount=="function"){r=s,n=s.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:Ln(s,s.return);break;case 22:if(s.memoizedState!==null){nu(i);continue}}c!==null?(c.return=s,j=c):nu(i)}x=x.sibling}e:for(x=null,i=e;;){if(i.tag===5){if(x===null){x=i;try{l=i.stateNode,p?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=i.stateNode,d=i.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Bu("display",o))}catch(y){ie(e,e.return,y)}}}else if(i.tag===6){if(x===null)try{i.stateNode.nodeValue=p?"":i.memoizedProps}catch(y){ie(e,e.return,y)}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;x===i&&(x=null),i=i.return}x===i&&(x=null),i.sibling.return=i.return,i=i.sibling}}break;case 19:it(t,e),gt(e),r&4&&eu(e);break;case 21:break;default:it(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Nr(l,""),r.flags&=-33);var a=qs(e);Oi(e,a,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=qs(e);Ri(e,u,o);break;default:throw Error(S(161))}}catch(d){ie(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Up(e,t,n){j=e,gd(e)}function gd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,a=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||sl;if(!o){var u=l.alternate,d=u!==null&&u.memoizedState!==null||Ee;u=sl;var p=Ee;if(sl=o,(Ee=d)&&!p)for(j=l;j!==null;)o=j,d=o.child,o.tag===22&&o.memoizedState!==null?ru(l):d!==null?(d.return=o,j=d):ru(l);for(;a!==null;)j=a,gd(a),a=a.sibling;j=l,sl=u,Ee=p}tu(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,j=a):tu(e)}}function tu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ds(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ds(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var i=x.dehydrated;i!==null&&Tr(i)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ee||t.flags&512&&Li(t)}catch(s){ie(t,t.return,s)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function nu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function ru(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sa(4,t)}catch(d){ie(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){ie(t,l,d)}}var a=t.return;try{Li(t)}catch(d){ie(t,a,d)}break;case 5:var o=t.return;try{Li(t)}catch(d){ie(t,o,d)}}}catch(d){ie(t,t.return,d)}if(t===e){j=null;break}var u=t.sibling;if(u!==null){u.return=t.return,j=u;break}j=t.return}}var Xp=Math.ceil,Xl=Mt.ReactCurrentDispatcher,bo=Mt.ReactCurrentOwner,tt=Mt.ReactCurrentBatchConfig,H=0,ge=null,ce=null,xe=0,Xe=0,Rn=tn(0),fe=0,Hr=null,yn=0,ua=0,Eo=0,kr=null,Fe=null,To=0,Kn=1/0,Ct=null,Wl=!1,Fi=null,Yt=null,ul=!1,Vt=null,Ql=0,Sr=0,Di=null,Cl=-1,Nl=0;function Ie(){return H&6?se():Cl!==-1?Cl:Cl=se()}function Kt(e){return e.mode&1?H&2&&xe!==0?xe&-xe:Tp.transition!==null?(Nl===0&&(Nl=ec()),Nl):(e=W,e!==0||(e=window.event,e=e===void 0?16:oc(e.type)),e):1}function dt(e,t,n,r){if(50<Sr)throw Sr=0,Di=null,Error(S(185));Vr(e,n,r),(!(H&2)||e!==ge)&&(e===ge&&(!(H&2)&&(ua|=n),fe===4&&Bt(e,xe)),$e(e,r),n===1&&H===0&&!(t.mode&1)&&(Kn=se()+500,aa&&nn()))}function $e(e,t){var n=e.callbackNode;Tf(e,t);var r=Pl(e,e===ge?xe:0);if(r===0)n!==null&&fs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fs(n),t===1)e.tag===0?Ep(lu.bind(null,e)):Ac(lu.bind(null,e)),Cp(function(){!(H&6)&&nn()}),n=null;else{switch(tc(r)){case 1:n=eo;break;case 4:n=Zu;break;case 16:n=jl;break;case 536870912:n=qu;break;default:n=jl}n=Cd(n,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vd(e,t){if(Cl=-1,Nl=0,H&6)throw Error(S(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=Pl(e,e===ge?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yl(e,r);else{t=r;var l=H;H|=2;var a=xd();(ge!==e||xe!==t)&&(Ct=null,Kn=se()+500,pn(e,t));do try{Yp();break}catch(u){yd(e,u)}while(!0);mo(),Xl.current=a,H=l,ce!==null?t=0:(ge=null,xe=0,t=fe)}if(t!==0){if(t===2&&(l=fi(e),l!==0&&(r=l,t=Hi(e,l))),t===1)throw n=Hr,pn(e,0),Bt(e,r),$e(e,se()),n;if(t===6)Bt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Wp(l)&&(t=Yl(e,r),t===2&&(a=fi(e),a!==0&&(r=a,t=Hi(e,a))),t===1))throw n=Hr,pn(e,0),Bt(e,r),$e(e,se()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:on(e,Fe,Ct);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=To+500-se(),10<t)){if(Pl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_i(on.bind(null,e,Fe,Ct),t);break}on(e,Fe,Ct);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-ct(r);a=1<<o,o=t[o],o>l&&(l=o),r&=~a}if(r=l,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xp(r/1960))-r,10<r){e.timeoutHandle=_i(on.bind(null,e,Fe,Ct),r);break}on(e,Fe,Ct);break;case 5:on(e,Fe,Ct);break;default:throw Error(S(329))}}}return $e(e,se()),e.callbackNode===n?vd.bind(null,e):null}function Hi(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Yl(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Bi(t)),e}function Bi(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Wp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!ft(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Eo,t&=~ua,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(H&6)throw Error(S(327));Vn();var t=Pl(e,0);if(!(t&1))return $e(e,se()),null;var n=Yl(e,t);if(e.tag!==0&&n===2){var r=fi(e);r!==0&&(t=r,n=Hi(e,r))}if(n===1)throw n=Hr,pn(e,0),Bt(e,t),$e(e,se()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Fe,Ct),$e(e,se()),null}function jo(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Kn=se()+500,aa&&nn())}}function xn(e){Vt!==null&&Vt.tag===0&&!(H&6)&&Vn();var t=H;H|=1;var n=tt.transition,r=W;try{if(tt.transition=null,W=1,e)return e()}finally{W=r,tt.transition=n,H=t,!(H&6)&&nn()}}function Po(){Xe=Rn.current,ee(Rn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sp(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:Qn(),ee(He),ee(Te),_o();break;case 5:xo(r);break;case 4:Qn();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:ho(r.type._context);break;case 22:case 23:Po()}n=n.return}if(ge=e,ce=e=Jt(e.current,null),xe=Xe=t,fe=0,Hr=null,Eo=ua=yn=0,Fe=kr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,r.next=o}n.pending=r}dn=null}return e}function yd(e,t){do{var n=ce;try{if(mo(),wl.current=Ul,Gl){for(var r=re.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gl=!1}if(vn=0,he=de=re=null,_r=!1,Or=0,bo.current=null,n===null||n.return===null){fe=1,Hr=t,ce=null;break}e:{var a=e,o=n.return,u=n,d=t;if(t=xe,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,x=u,i=x.tag;if(!(x.mode&1)&&(i===0||i===11||i===15)){var s=x.alternate;s?(x.updateQueue=s.updateQueue,x.memoizedState=s.memoizedState,x.lanes=s.lanes):(x.updateQueue=null,x.memoizedState=null)}var c=Us(o);if(c!==null){c.flags&=-257,Xs(c,o,u,a,t),c.mode&1&&Gs(a,p,t),t=c,d=p;var g=t.updateQueue;if(g===null){var y=new Set;y.add(d),t.updateQueue=y}else g.add(d);break e}else{if(!(t&1)){Gs(a,p,t),Io();break e}d=Error(S(426))}}else if(te&&u.mode&1){var _=Us(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Xs(_,o,u,a,t),fo(Yn(d,u));break e}}a=d=Yn(d,u),fe!==4&&(fe=2),kr===null?kr=[a]:kr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=td(a,d,t);Fs(a,f);break e;case 1:u=d;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yt===null||!Yt.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=nd(a,u,t);Fs(a,w);break e}}a=a.return}while(a!==null)}wd(n)}catch(C){t=C,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function xd(){var e=Xl.current;return Xl.current=Ul,e===null?Ul:e}function Io(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(yn&268435455)&&!(ua&268435455)||Bt(ge,xe)}function Yl(e,t){var n=H;H|=2;var r=xd();(ge!==e||xe!==t)&&(Ct=null,pn(e,t));do try{Qp();break}catch(l){yd(e,l)}while(!0);if(mo(),H=n,Xl.current=r,ce!==null)throw Error(S(261));return ge=null,xe=0,fe}function Qp(){for(;ce!==null;)_d(ce)}function Yp(){for(;ce!==null&&!_f();)_d(ce)}function _d(e){var t=Sd(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?wd(e):ce=t,bo.current=null}function wd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$p(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(n=Bp(n,t,Xe),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function on(e,t,n){var r=W,l=tt.transition;try{tt.transition=null,W=1,Kp(e,t,n,r)}finally{tt.transition=l,W=r}return null}function Kp(e,t,n,r){do Vn();while(Vt!==null);if(H&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(jf(e,a),e===ge&&(ce=ge=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ul||(ul=!0,Cd(jl,function(){return Vn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=tt.transition,tt.transition=null;var o=W;W=1;var u=H;H|=4,bo.current=null,Gp(e,n),hd(n,e),gp(yi),Il=!!vi,yi=vi=null,e.current=n,Up(n),wf(),H=u,W=o,tt.transition=a}else e.current=n;if(ul&&(ul=!1,Vt=e,Ql=l),a=e.pendingLanes,a===0&&(Yt=null),Cf(n.stateNode),$e(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Wl)throw Wl=!1,e=Fi,Fi=null,e;return Ql&1&&e.tag!==0&&Vn(),a=e.pendingLanes,a&1?e===Di?Sr++:(Sr=0,Di=e):Sr=0,nn(),null}function Vn(){if(Vt!==null){var e=tc(Ql),t=tt.transition,n=W;try{if(tt.transition=null,W=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Ql=0,H&6)throw Error(S(331));var l=H;for(H|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var p=u[d];for(j=p;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:wr(8,x,a)}var i=x.child;if(i!==null)i.return=x,j=i;else for(;j!==null;){x=j;var s=x.sibling,c=x.return;if(fd(x),x===p){j=null;break}if(s!==null){s.return=c,j=s;break}j=c}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:wr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,j=f;break e}j=a.return}}var h=e.current;for(j=h;j!==null;){o=j;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,j=v;else e:for(o=h;j!==null;){if(u=j,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:sa(9,u)}}catch(C){ie(u,u.return,C)}if(u===o){j=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,j=w;break e}j=u.return}}if(H=l,nn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ea,e)}catch{}r=!0}return r}finally{W=n,tt.transition=t}}return!1}function au(e,t,n){t=Yn(n,t),t=td(e,t,1),e=Qt(e,t,1),t=Ie(),e!==null&&(Vr(e,1,t),$e(e,t))}function ie(e,t,n){if(e.tag===3)au(e,e,n);else for(;t!==null;){if(t.tag===3){au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Yn(n,e),e=nd(t,e,1),t=Qt(t,e,1),e=Ie(),t!==null&&(Vr(t,1,e),$e(t,e));break}}t=t.return}}function Jp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(xe&n)===n&&(fe===4||fe===3&&(xe&130023424)===xe&&500>se()-To?pn(e,0):Eo|=n),$e(e,t)}function kd(e,t){t===0&&(e.mode&1?(t=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):t=1);var n=Ie();e=Pt(e,t),e!==null&&(Vr(e,t,n),$e(e,n))}function Zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kd(e,n)}function qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),kd(e,n)}var Sd;Sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Hp(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&bc(t,Dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Sl(e,t),e=t.pendingProps;var l=Un(t,Te.current);$n(t,n),l=ko(null,t,r,e,l,n);var a=So();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(a=!0,Ol(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,vo(t),l.updater=oa,t.stateNode=l,l._reactInternals=t,bi(t,r,e,n),t=ji(null,t,r,!0,a,n)):(t.tag=0,te&&a&&uo(t),Pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Sl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=tm(r),e=ot(r,e),l){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=Ys(null,t,r,e,n);break e;case 11:t=Ws(null,t,r,e,n);break e;case 14:t=Qs(null,t,r,ot(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ti(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ys(e,t,r,l,n);case 3:e:{if(id(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,l=a.element,Mc(e,t),$l(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=Yn(Error(S(423)),t),t=Ks(e,t,r,n,l);break e}else if(r!==l){l=Yn(Error(S(424)),t),t=Ks(e,t,r,n,l);break e}else for(We=Wt(t.stateNode.containerInfo.firstChild),Qe=t,te=!0,ut=null,n=Pc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===l){t=It(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return zc(t),e===null&&Ci(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,xi(r,l)?o=null:a!==null&&xi(r,a)&&(t.flags|=32),ad(e,t),Pe(e,t,o,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return od(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ws(e,t,r,l,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,J(Hl,r._currentValue),r._currentValue=o,a!==null)if(ft(a.value,o)){if(a.children===l.children&&!He.current){t=It(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=Et(-1,n&-n),d.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?d.next=d:(d.next=x.next,x.next=d),p.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Ni(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ni(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,$n(t,n),l=nt(l),r=r(l),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Qs(e,t,r,l,n);case 15:return rd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Sl(e,t),t.tag=1,Be(r)?(e=!0,Ol(t)):e=!1,$n(t,n),ed(t,r,l),bi(t,r,l,n),ji(null,t,r,!0,e,n);case 19:return sd(e,t,n);case 22:return ld(e,t,n)}throw Error(S(156,t.tag))};function Cd(e,t){return Ju(e,t)}function em(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new em(e,t,n,r)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return Mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ji)return 11;if(e===Zi)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Al(e,t,n,r,l,a){var o=2;if(r=e,typeof e=="function")Mo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case An:return mn(n.children,l,a,t);case Ki:o=8,l|=8;break;case Ja:return e=et(12,n,t,l|2),e.elementType=Ja,e.lanes=a,e;case Za:return e=et(13,n,t,l),e.elementType=Za,e.lanes=a,e;case qa:return e=et(19,n,t,l),e.elementType=qa,e.lanes=a,e;case zu:return ca(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Iu:o=10;break e;case Mu:o=9;break e;case Ji:o=11;break e;case Zi:o=14;break e;case Ft:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=et(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function mn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function ca(e,t,n,r){return e=et(22,e,r,t),e.elementType=zu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ba(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function $a(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function zo(e,t,n,r,l,a,o,u,d){return e=new nm(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=et(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vo(a),e}function rm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nd(e){if(!e)return qt;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Be(n))return Nc(e,n,t)}return t}function Ad(e,t,n,r,l,a,o,u,d){return e=zo(n,r,!0,e,l,a,o,u,d),e.context=Nd(null),n=e.current,r=Ie(),l=Kt(n),a=Et(r,l),a.callback=t??null,Qt(n,a,l),e.current.lanes=l,Vr(e,l,r),$e(e,r),e}function da(e,t,n,r){var l=t.current,a=Ie(),o=Kt(l);return n=Nd(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(l,t,o),e!==null&&(dt(e,l,o,a),_l(e,l,o)),o}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function iu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){iu(e,t),(e=e.alternate)&&iu(e,t)}function lm(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ro(e){this._internalRoot=e}fa.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));da(e,t,null,null)};fa.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){da(null,e,null,null)}),t[jt]=null}};function fa(e){this._internalRoot=e}fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&ic(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ou(){}function am(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var p=Kl(o);a.call(p)}}var o=Ad(t,r,e,0,null,!1,!1,"",ou);return e._reactRootContainer=o,e[jt]=o.current,Ir(e.nodeType===8?e.parentNode:e),xn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var p=Kl(d);u.call(p)}}var d=zo(e,0,!1,null,null,!1,!1,"",ou);return e._reactRootContainer=d,e[jt]=d.current,Ir(e.nodeType===8?e.parentNode:e),xn(function(){da(t,d,n,r)}),d}function ma(e,t,n,r,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var u=l;l=function(){var d=Kl(o);u.call(d)}}da(t,o,e,l)}else o=am(n,t,e,l,r);return Kl(o)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(to(t,n|1),$e(t,se()),!(H&6)&&(Kn=se()+500,nn()))}break;case 13:xn(function(){var r=Pt(e,1);if(r!==null){var l=Ie();dt(r,e,1,l)}}),Lo(e,1)}};no=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Ie();dt(t,e,134217728,n)}Lo(e,134217728)}};rc=function(e){if(e.tag===13){var t=Kt(e),n=Pt(e,t);if(n!==null){var r=Ie();dt(n,e,t,r)}Lo(e,t)}};lc=function(){return W};ac=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};ui=function(e,t,n){switch(t){case"input":if(ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=la(r);if(!l)throw Error(S(90));Ru(r),ni(r,l)}}}break;case"textarea":Fu(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};Uu=jo;Xu=xn;var im={usingClientEntryPoint:!1,Events:[Ur,jn,la,Vu,Gu,jo]},cr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},om={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yu(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{ea=cl.inject(om),_t=cl}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=im;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(S(200));return rm(e,t,null,n)};Ke.createRoot=function(e,t){if(!Oo(e))throw Error(S(299));var n=!1,r="",l=bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=zo(e,1,!1,null,null,n,!1,r,l),e[jt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new Ro(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Yu(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return xn(e)};Ke.hydrate=function(e,t,n){if(!pa(t))throw Error(S(200));return ma(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Oo(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",o=bd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ad(t,null,e,1,n??null,l,!1,a,o),e[jt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new fa(t)};Ke.render=function(e,t,n){if(!pa(t))throw Error(S(200));return ma(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!pa(e))throw Error(S(40));return e._reactRootContainer?(xn(function(){ma(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Ke.unstable_batchedUpdates=jo;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pa(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ma(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(e){console.error(e)}}Ed(),Eu.exports=Ke;var sm=Eu.exports,su=sm;Ya.createRoot=su.createRoot,Ya.hydrateRoot=su.hydrateRoot;const uu=({onStart:e,onSettings:t,onHelp:n})=>m.jsxs("div",{className:"cg-main-menu",children:[m.jsxs("div",{className:"cg-menu-bg",children:[m.jsx("div",{className:"cg-menu-bg-gradient"}),m.jsx("div",{className:"cg-menu-bg-pattern"}),m.jsx("div",{className:"cg-menu-geass-symbols",children:m.jsx("svg",{className:"cg-geass-symbol cg-rotate-slow",viewBox:"0 0 100 100",children:m.jsx("path",{d:"M50 10 L57 40 L90 50 L57 60 L50 90 L43 60 L10 50 L43 40 Z",fill:"none",stroke:"rgba(220, 38, 38, 0.2)",strokeWidth:"1"})})})]}),m.jsxs("div",{className:"cg-menu-content",children:[m.jsxs("div",{className:"cg-menu-header",children:[m.jsxs("div",{className:"cg-menu-title-decoration",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsx("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:m.jsx("path",{d:"M20 5 L23 18 L36 20 L23 22 L20 35 L17 22 L4 20 L17 18 Z",fill:"#d4af37"})})}),m.jsx("div",{className:"cg-title-line-right"})]}),m.jsxs("h1",{className:"cg-game-title",children:[m.jsx("span",{className:"cg-title-code",children:"CODE GEASS"}),m.jsx("span",{className:"cg-title-divider",children:":"}),m.jsx("span",{className:"cg-title-sub",children:"LIAR'S GAME"})]}),m.jsx("p",{className:"cg-game-subtitle",children:"布里塔尼亚的谎言对决"}),m.jsxs("div",{className:"cg-menu-title-decoration cg-decoration-bottom",children:[m.jsx("div",{className:"cg-title-line-left"}),m.jsx("div",{className:"cg-title-ornament",children:m.jsxs("svg",{viewBox:"0 0 40 40",className:"cg-ornament-icon",children:[m.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"#d4af37"})]})}),m.jsx("div",{className:"cg-title-line-right"})]})]}),m.jsxs("nav",{className:"cg-menu-nav",children:[m.jsxs("button",{className:"cg-menu-button cg-button-primary",onClick:e,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M8 5v14l11-7z"})})}),m.jsx("span",{className:"cg-button-text",children:"开始游戏"}),m.jsx("div",{className:"cg-button-shimmer"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:t,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})})}),m.jsx("span",{className:"cg-button-text",children:"设置"})]}),m.jsxs("button",{className:"cg-menu-button",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})})}),m.jsx("span",{className:"cg-button-text",children:"帮助"})]})]}),m.jsx("footer",{className:"cg-menu-footer",children:m.jsx("div",{className:"cg-footer-decoration",children:m.jsx("span",{className:"cg-footer-text",children:"布里塔尼亚皇室出品"})})})]}),m.jsx("style",{children:`
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
      `})]}),Br=[{id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#d4af37",description:"布里塔尼亚帝国王子，拥有Geass之力",skillName:"绝对命令",skillDescription:"强制改变骗子牌（每局限用1次）",skill:{id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"强制改变骗子牌（每局限用1次）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},stats:{hp:3,difficulty:4}},{id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#22c55e",description:"神秘的魔女，拥有Code之力赋予的不死之身",skillName:"Code之力",skillDescription:"首次濒死50%复活（每局限1次）",skill:{id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次濒死50%复活（每局限1次）",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},stats:{hp:3,difficulty:2}},{id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#3b82f6",description:"枢木朱雀，拥有超群的战斗技巧",skillName:"枢木剑术",skillDescription:"15%闪避 + 25%反击",skill:{id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"15%闪避 + 25%反击",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},stats:{hp:4,difficulty:2}},{id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#dc2626",description:"红月卡莲，黑色骑士团王牌驾驶员",skillName:"红莲二式",skillDescription:"出2张+且质疑失败，Geass命中率=20%×N",skill:{id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"出2张+且质疑失败，Geass命中率=20%×N",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},stats:{hp:3,difficulty:3}}];function um(e){return Br.find(t=>t.id===e)}function be(e){if(!e)return"未知角色";const t=um(e);return(t==null?void 0:t.name)||e}const cm=()=>{const e=document.createElement("canvas");return e.getContext&&e.getContext("2d")?e.toDataURL("image/webp").indexOf("data:image/webp")===0:!1},dm=e=>{const t=window.devicePixelRatio||1,n=e*t;return n<=50?"small":n<=100?"medium":"large"};let Va=null;const Jl=()=>(Va===null&&(Va=cm()),Va),fm=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1,onLoad:l})=>{const[a,o]=I.useState(!1),[u,d]=I.useState(r),[p,x]=I.useState(!1),[i,s]=I.useState(!0),c=I.useRef(null),g=I.useRef(null),[y]=I.useState(()=>Math.floor(Math.random()*4)+1),_=n||y,f=I.useMemo(()=>dm(t),[t]),h=I.useCallback((v=!0)=>`${`avatars/${e}/${_}`}-${f}.${v?"webp":"png"}`,[e,_,f]);return I.useEffect(()=>{if(r||u)return;const v=new IntersectionObserver(C=>{C.forEach(b=>{b.isIntersecting&&d(!0)})},{rootMargin:"50px",threshold:.1}),w=g.current;return w&&v.observe(w),()=>{w&&v.unobserve(w),v.disconnect()}},[r,u]),I.useEffect(()=>{if(!u)return;(async()=>{if(Jl()&&i){const C=new Image;C.src=h(!0),C.onload=()=>{o(!0),l==null||l()},C.onerror=()=>{s(!1)}}else{const C=new Image;C.src=h(!1),C.onload=()=>{o(!0),l==null||l()},C.onerror=()=>{x(!0)}}})()},[u,h,l,i]),m.jsxs("div",{ref:g,style:{width:t,height:t,borderRadius:"8px",overflow:"hidden",backgroundColor:"transparent",position:"relative"},children:[!a&&!p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},children:m.jsx("div",{style:{width:t*.3,height:t*.3,border:"3px solid rgba(212, 175, 55, 0.2)",borderTopColor:"#d4af37",borderRadius:"50%",animation:"avatar-spin 1s linear infinite"}})}),p&&m.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",color:"#dc2626",fontSize:t*.2},children:"?"}),u&&m.jsxs("picture",{children:[Jl()&&i&&m.jsx("source",{srcSet:h(!0),type:"image/webp"}),m.jsx("img",{ref:c,src:h(!1),alt:e,loading:r?"eager":"lazy",width:t,height:t,style:{width:t,height:t,objectFit:"cover",opacity:a?1:0,transition:"opacity 0.3s ease",borderRadius:"8px"}})]}),m.jsx("style",{children:`
        @keyframes avatar-spin {
          to { transform: rotate(360deg); }
        }
      `})]})};class Zl{static preloadCharacter(t){const n=["small","medium","large"],r=Jl();for(let l=1;l<=4;l++)n.forEach(a=>{const o=`avatars/${t}/${l}-${a}.webp`,u=`avatars/${t}/${l}-${a}.png`;if(r&&!this.preloadedAvatars.has(o)){const d=new Image;d.src=o,this.preloadedAvatars.add(o)}if(!this.preloadedAvatars.has(u)){const d=new Image;d.src=u,this.preloadedAvatars.add(u)}})}static preloadAll(){["lelouch","cc","suzaku","kallen"].forEach(n=>this.preloadCharacter(n))}static preloadAvatar(t,n,r="medium"){if(Jl()){const o=`avatars/${t}/${n}-${r}.webp`;if(!this.preloadedAvatars.has(o)){const u=new Image;u.src=o,this.preloadedAvatars.add(o)}}const a=`avatars/${t}/${n}-${r}.png`;if(!this.preloadedAvatars.has(a)){const o=new Image;o.src=a,this.preloadedAvatars.add(a)}}static getPreloadedCount(){return this.preloadedAvatars.size}static clearCache(){this.preloadedAvatars.clear()}}me(Zl,"preloadedAvatars",new Set);const Fo=({characterId:e,size:t=160,avatarNumber:n,priority:r=!1})=>m.jsx(fm,{characterId:e,size:t,avatarNumber:n??1,priority:r}),pm=({selectedId:e,onSelect:t,onConfirm:n,onBack:r})=>{const[l,a]=I.useState(null),[o]=I.useState(()=>({lelouch:Math.floor(Math.random()*4)+1,cc:Math.floor(Math.random()*4)+1,suzaku:Math.floor(Math.random()*4)+1,kallen:Math.floor(Math.random()*4)+1})),u=Br.find(p=>p.id===e);I.useEffect(()=>{e&&Zl.preloadAvatar(e,o[e])},[e,o]);const d=p=>{const x=o[p];t(p,x)};return m.jsxs("div",{className:"cg-character-select",children:[m.jsxs("div",{className:"cg-select-bg",children:[m.jsx("div",{className:"cg-select-bg-gradient"}),m.jsx("div",{className:"cg-select-bg-pattern"})]}),m.jsxs("div",{className:"cg-select-content",children:[m.jsxs("header",{className:"cg-select-header",children:[m.jsxs("button",{className:"cg-back-button",onClick:r,children:[m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),m.jsx("span",{children:"返回"})]}),m.jsx("h2",{className:"cg-select-title",children:m.jsx("span",{className:"cg-title-gold",children:"选择角色"})}),m.jsx("div",{className:"cg-select-placeholder"})]}),m.jsx("div",{className:"cg-character-grid",children:Br.map(p=>{const x=e===p.id,i=l===p.id;return m.jsxs("div",{className:`cg-character-card ${x?"cg-selected":""} ${i?"cg-hovered":""}`,onClick:()=>d(p.id),onMouseEnter:()=>a(p.id),onMouseLeave:()=>a(null),children:[m.jsxs("div",{className:"cg-card-frame",children:[m.jsx("div",{className:"cg-frame-corner cg-corner-tl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-tr"}),m.jsx("div",{className:"cg-frame-corner cg-corner-bl"}),m.jsx("div",{className:"cg-frame-corner cg-corner-br"})]}),m.jsx("div",{className:"cg-character-preview",children:m.jsx(Fo,{characterId:p.id,size:300,avatarNumber:o[p.id],priority:l===p.id||e===p.id})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("h3",{className:"cg-character-name",children:p.name}),m.jsx("p",{className:"cg-character-name-en",children:p.nameEn}),m.jsx("div",{className:"cg-character-skill",children:m.jsx("span",{className:"cg-skill-name",children:p.skill.name})})]}),x&&m.jsx("div",{className:"cg-selected-indicator",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"#d4af37",children:m.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})})}),m.jsx("div",{className:"cg-character-glow",style:{background:`radial-gradient(circle, ${p.color}40 0%, transparent 70%)`}})]},p.id)})}),u&&m.jsx("div",{className:"cg-character-detail",children:m.jsxs("div",{className:"cg-detail-frame",children:[m.jsxs("div",{className:"cg-detail-content",children:[m.jsx("p",{className:"cg-detail-description",children:u.description}),m.jsxs("div",{className:"cg-detail-skill",children:[m.jsx("span",{className:"cg-skill-label",children:"技能:"}),m.jsx("span",{className:"cg-skill-value",children:u.skill.name}),m.jsx("p",{className:"cg-skill-desc",children:u.skill.description})]})]}),m.jsxs("button",{className:"cg-confirm-button cg-button-primary",onClick:n,children:[m.jsx("span",{children:"确认选择"}),m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})})]})]})})]}),m.jsx("style",{children:`
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
      `})]})},dl={PLAY:350,CHALLENGE:1800,DODGE:900,HIT:900},ln={THINKING:1e3,PLAY_TO_CHALLENGE:1200,CHALLENGE_TO_RESOLVE:2e3,GEASS_RESULT_DISPLAY:1200,TURN_SWITCH:800,ROUND_START:600},mm="/liars-game/assets/cards/card-back.svg",fl=e=>{if(!e)return"#d4af37";const t=Br.find(n=>n.id===e);return(t==null?void 0:t.color)||"#d4af37"},hm=({gameState:e,selectedCards:t,selectedCharacter:n,selectedAvatar:r=1,aiCharacters:l=["cc","suzaku","kallen"],aiAvatars:a={},onToggleCardSelection:o,onConfirmPlay:u,onPass:d,onChallenge:p,onBackToMenu:x,onLelouchSkill:i,gameLog:s=[],isProcessing:c=!1,canUseSkill:g=!0,aiThinkingState:y})=>{var F,B,G,U,Z,$,V,pe,we,at,je,Lt,oe,K,kn,Oe,pt,mt,Rt,ht,Sn,ke,Do,Ho,Bo,$o,Vo,Go,Uo,Xo,Wo,Qo,Yo,Ko,Jo;const[_,f]=I.useState(!1),[h,v]=I.useState(!1),w=I.useRef(null),C=I.useRef(null),b=I.useRef(s.length),N=I.useRef(null),k=typeof window<"u"&&window.innerWidth<=768,[M,L]=I.useState({player:{type:null,showText:""},ai:{type:null,showText:""},ai2:{type:null,showText:""},ai3:{type:null,showText:""}});I.useEffect(()=>{if(w.current&&s.length>b.current){const P=w.current;P.scrollTo({top:P.scrollHeight,behavior:"smooth"})}b.current=s.length},[s]),I.useEffect(()=>{if(!k||!h)return;const P=()=>{N.current&&clearTimeout(N.current),N.current=setTimeout(()=>{v(!1)},3e3)};P();const X=C.current;if(X){const Se=["click","touchstart","scroll"];return Se.forEach(Ce=>{X.addEventListener(Ce,P)}),()=>{Se.forEach(Ce=>{X.removeEventListener(Ce,P)}),N.current&&clearTimeout(N.current)}}return()=>{N.current&&clearTimeout(N.current)}},[h,k]);const Q=(P,X,Se,Ce)=>{const ga=Ce??(X==="play"||X==="aiPlay"?dl.PLAY:X==="challenge"?dl.CHALLENGE:X==="dodge"?dl.DODGE:X==="hit"?dl.HIT:1e3);L(er=>({...er,[P]:{type:X,showText:Se}})),setTimeout(()=>{L(er=>({...er,[P]:{type:null,showText:""}}))},ga)};if(I.useEffect(()=>{if(!e)return;const{lastAction:P,geassResult:X,turnState:Se}=e;if(Se!=null&&Se.playedCards&&(P!=null&&P.includes("出牌"))){const Ce=Se.playedCards.playerId;Ce==="player"?Q(Ce,"play","出牌",350):Q(Ce,"aiPlay","出牌",350)}if(P!=null&&P.includes("质疑")){const Ce=P.includes("玩家")?"player":P.includes("AI2")?"ai2":P.includes("AI3")?"ai3":"ai";Q(Ce,"challenge","质疑",1800)}if(X!=null&&X.activated){const Ce=P!=null&&P.includes("玩家")?"player":P!=null&&P.includes("AI2")?"ai2":P!=null&&P.includes("AI3")?"ai3":"ai";X.isDodge?Q(Ce,"dodge","闪避",900):X.hit&&Q(Ce,"hit","命中",900)}},[e==null?void 0:e.lastAction,(F=e==null?void 0:e.geassResult)==null?void 0:F.activated]),I.useEffect(()=>{n&&Zl.preloadAvatar(n,r),l.forEach(P=>{const X=a[P]||1;Zl.preloadAvatar(P,X)})},[n,r,l,a]),!e)return null;const{phase:Ve,liarCard:Le,playerStats:Re,aiPlayers:A,turnState:ve}=e,Ge=Ve==="player_turn",E=Ve==="challenge",z=e.playerHand||[],R=(ve==null?void 0:ve.turnNumber)||1,Y=E,ae=()=>{t.length>0&&u()},zt=()=>f(!0),Ue=()=>{v(P=>!P)},rn=P=>{f(!1),i==null||i(P)},lt=P=>({spades:"♠",hearts:"♥",clubs:"♣",diamonds:"♦",joker:"🃏"})[P]||P,kt=P=>P==="joker"?"#d4af37":P==="hearts"||P==="diamonds"?"#dc2626":"#1a1a24",Wr=be(n??void 0),O=fl(n),T=(P,X,Se,Ce,ga,er,Td=!1,jd=!0,Zo="player")=>{const tr=M[Zo],Pd=tr.type?`cg-anim-${tr.type}`:"",qo=(y==null?void 0:y.isThinking)&&(y==null?void 0:y.aiId)===Zo;return m.jsxs("div",{className:`cg-character ${Td?"cg-character-top":""} ${jd?"":"cg-character-dead"} ${Pd} ${qo?"cg-character-thinking":""}`,children:[tr.showText&&m.jsx("div",{className:`cg-action-text cg-action-${tr.type}`,children:tr.showText}),qo&&m.jsx("div",{className:"cg-thinking-indicator",children:m.jsx("span",{className:"cg-thinking-dots",children:"..."})}),m.jsx("div",{className:"cg-character-avatar",children:X&&m.jsx(Fo,{characterId:X,size:120,avatarNumber:er,priority:!0})}),m.jsxs("div",{className:"cg-character-info",children:[m.jsx("div",{className:"cg-character-name",style:{color:ga},children:P}),m.jsxs("div",{className:"cg-character-stats",children:[m.jsx("span",{className:"cg-hp-display",children:Array(Se).fill("❤").join("")}),m.jsxs("span",{className:"cg-card-count",children:["🃏",Ce]})]})]})]})};return m.jsxs("div",{className:"cg-game-table",children:[m.jsx("div",{className:"cg-top-bar",children:m.jsxs("button",{className:`cg-log-toggle-btn-top ${h?"expanded":""}`,onClick:Ue,"aria-label":h?"收起记录":"展开记录",children:[m.jsx("span",{className:"cg-log-toggle-icon",children:"📜"}),m.jsx("span",{className:"cg-log-toggle-text",children:"记录"}),!h&&s.length>0&&m.jsx("span",{className:"cg-log-badge",children:s.length})]})}),m.jsxs("div",{className:"cg-main-layout",children:[m.jsxs("div",{ref:C,className:`cg-log-panel ${h?"expanded":"collapsed"}`,children:[m.jsxs("div",{className:"cg-log-header",children:[m.jsx("span",{children:"📜 游戏记录"}),m.jsx("button",{className:"cg-log-close-btn",onClick:Ue,children:"✕"})]}),m.jsx("div",{ref:w,className:"cg-log-content",children:s.map((P,X)=>m.jsx("div",{className:`cg-log-item ${P.includes("质疑")?"challenge":""} ${P.includes("Geass")?"geass":""}`,children:P},X))})]}),h&&m.jsx("div",{className:"cg-log-overlay",onClick:Ue}),m.jsxs("div",{className:"cg-game-area",children:[m.jsx("div",{className:"cg-ai-top",children:T(be(((B=A==null?void 0:A[1])==null?void 0:B.character)||l[1]),((G=A==null?void 0:A[1])==null?void 0:G.character)||l[1],((Z=(U=A==null?void 0:A[1])==null?void 0:U.stats)==null?void 0:Z.hp)||0,((V=($=A==null?void 0:A[1])==null?void 0:$.hand)==null?void 0:V.length)||0,fl(((pe=A==null?void 0:A[1])==null?void 0:pe.character)||l[1]),a[((we=A==null?void 0:A[1])==null?void 0:we.character)||l[1]]||1,!0,((at=A==null?void 0:A[1])==null?void 0:at.isActive)!==!1&&(((Lt=(je=A==null?void 0:A[1])==null?void 0:je.stats)==null?void 0:Lt.hp)||0)>0,"ai2")}),m.jsxs("div",{className:"cg-middle-section",children:[m.jsx("div",{className:"cg-ai-left",children:T(be(((oe=A==null?void 0:A[2])==null?void 0:oe.character)||l[2]),((K=A==null?void 0:A[2])==null?void 0:K.character)||l[2],((Oe=(kn=A==null?void 0:A[2])==null?void 0:kn.stats)==null?void 0:Oe.hp)||0,((mt=(pt=A==null?void 0:A[2])==null?void 0:pt.hand)==null?void 0:mt.length)||0,fl(((Rt=A==null?void 0:A[2])==null?void 0:Rt.character)||l[2]),a[((ht=A==null?void 0:A[2])==null?void 0:ht.character)||l[2]]||1,!1,((Sn=A==null?void 0:A[2])==null?void 0:Sn.isActive)!==!1&&(((Do=(ke=A==null?void 0:A[2])==null?void 0:ke.stats)==null?void 0:Do.hp)||0)>0,"ai3")}),m.jsx("div",{className:"cg-table-area",children:m.jsx("div",{className:"cg-table",children:m.jsx("div",{className:"cg-table-inner",children:ve!=null&&ve.playedCards?m.jsxs("div",{className:"cg-played",children:[m.jsxs("div",{className:"cg-played-name",children:[ve.playedCards.playerId==="player"?Wr:ve.playedCards.playerId.startsWith("ai")?be(((Ho=A==null?void 0:A.find(P=>{var X;return P.id===((X=ve.playedCards)==null?void 0:X.playerId)}))==null?void 0:Ho.character)||"cc"):"未知玩家"," ","出牌"]}),m.jsx("div",{className:"cg-cards",children:ve.playedCards.actualCards.map(P=>m.jsx("div",{className:"cg-card-small cg-card-back",children:m.jsx("img",{src:mm,alt:"牌背"})},P.id))}),m.jsxs("div",{className:"cg-card-count-display",children:[ve.playedCards.cardIds.length," 张牌"]})]}):m.jsx("div",{className:"cg-placeholder-text",children:"等待出牌..."})})})}),m.jsx("div",{className:"cg-ai-right",children:T(be(((Bo=A==null?void 0:A[0])==null?void 0:Bo.character)||l[0]),(($o=A==null?void 0:A[0])==null?void 0:$o.character)||l[0],((Go=(Vo=A==null?void 0:A[0])==null?void 0:Vo.stats)==null?void 0:Go.hp)||0,((Xo=(Uo=A==null?void 0:A[0])==null?void 0:Uo.hand)==null?void 0:Xo.length)||0,fl(((Wo=A==null?void 0:A[0])==null?void 0:Wo.character)||l[0]),a[((Qo=A==null?void 0:A[0])==null?void 0:Qo.character)||l[0]]||1,!1,((Yo=A==null?void 0:A[0])==null?void 0:Yo.isActive)!==!1&&(((Jo=(Ko=A==null?void 0:A[0])==null?void 0:Ko.stats)==null?void 0:Jo.hp)||0)>0,"ai")})]}),m.jsxs("div",{className:"cg-player-section",children:[m.jsx("div",{className:"cg-player-info",children:T(Wr,n,Re.hp,z.length,O,r,!1,!0,"player")}),m.jsxs("div",{className:"cg-hand-section",children:[m.jsx("div",{className:"cg-hand",style:{width:`${Math.max(60,z.length*26+22)}px`},children:z.map((P,X)=>{const Se=t.includes(P.id);return m.jsxs("button",{className:`cg-card ${Se?"selected":""} ${!Ge||c?"disabled":""}`,onClick:()=>o(P.id),style:{left:`${X*26}px`,transform:Se?"translateY(-8px)":"none",zIndex:Se?z.length+10:z.length-X},disabled:!Ge||c,children:[m.jsxs("div",{className:"cg-card-face",children:[m.jsx("div",{style:{color:kt(P.suit),fontSize:"13px"},children:P.rank}),m.jsx("div",{style:{color:kt(P.suit),fontSize:"15px"},children:lt(P.suit)})]}),Se&&m.jsx("div",{className:"cg-check",children:"✓"})]},P.id)})}),n==="lelouch"&&m.jsx("button",{className:"cg-skill-btn",onClick:zt,disabled:c||!g||!Ge,children:g?"绝对命令":"已使用"})]})]})]})]}),m.jsxs("div",{className:"cg-bottom-bar",children:[m.jsx("div",{className:"cg-bottom-left",children:m.jsx("button",{className:"cg-back-btn",onClick:x,children:"← 主页面"})}),m.jsxs("div",{className:"cg-bottom-center",children:[!Y&&m.jsxs("div",{className:"cg-status-text",children:[Ge&&t.length===0&&"请选择要出的牌",Ge&&t.length>0&&`已选择 ${t.length} 张牌`,E&&!Y&&"等待其他玩家质疑...",!Ge&&!E&&"AI回合中..."]}),m.jsxs("div",{className:"cg-action-buttons",children:[Ge&&t.length>0&&m.jsxs("button",{className:"cg-btn cg-btn-play",onClick:ae,disabled:c,children:["出牌 (",t.length,")"]}),Y&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"cg-btn cg-btn-challenge",onClick:p,disabled:c,children:"⚔️ 质疑"}),m.jsx("button",{className:"cg-btn cg-btn-skip",onClick:d,disabled:c,children:"不质疑"})]})]})]}),m.jsxs("div",{className:"cg-bottom-right",children:[m.jsxs("div",{className:"cg-round-display",children:[m.jsx("div",{className:"cg-round-label",children:"回合"}),m.jsx("div",{className:"cg-round-number",children:R})]}),m.jsxs("div",{className:"cg-liar-display",children:[m.jsx("div",{className:"cg-liar-label",children:"骗子牌"}),m.jsx("div",{className:"cg-liar-value",children:Le})]})]})]}),_&&m.jsx("div",{className:"cg-modal",children:m.jsxs("div",{className:"cg-modal-content",children:[m.jsx("h3",{children:"选择新的骗子牌"}),m.jsx("div",{className:"cg-rank-btns",children:["Q","K","A"].map(P=>m.jsx("button",{className:P===Le?"current":"",onClick:()=>rn(P),children:P},P))}),m.jsx("button",{className:"cg-btn-skip",onClick:()=>f(!1),children:"取消"})]})}),m.jsx("style",{children:`
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
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          padding: 5px 14px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: bold;
          white-space: nowrap;
          z-index: 10;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        .cg-action-play {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          box-shadow: 0 2px 8px rgba(34, 197, 94, 0.5);
          animation: actionTextPopPlay 0.35s ease-out forwards;
        }
        .cg-action-aiPlay {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.5);
          animation: actionTextPopPlay 0.35s ease-out forwards;
        }
        .cg-action-challenge {
          background: linear-gradient(135deg, #9D50BB, #6E48AA);
          color: white;
          box-shadow: 0 2px 8px rgba(157, 80, 187, 0.5);
          animation: actionTextPopChallenge 1.8s ease-out forwards;
        }
        .cg-action-dodge {
          background: transparent;
          color: white;
          text-shadow: 0 0 4px #1E90FF, 0 0 8px #1E90FF;
          animation: actionTextPopDodge 0.9s ease-out forwards;
        }
        .cg-action-hit {
          background: transparent;
          color: white;
          text-shadow: 0 0 4px #DC143C, 0 0 8px #DC143C;
          animation: actionTextPopHit 0.9s ease-out forwards;
        }

        /* 出牌文字动画 - 350ms */
        @keyframes actionTextPopPlay {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          40% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          60% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
          80% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px) scale(0.95);
          }
        }

        /* 质疑文字动画 - 1800ms */
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

        /* 闪避文字动画 - 900ms */
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

        /* 命中文字动画 - 900ms */
        @keyframes actionTextPopHit {
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

        /* 隐藏桌面端按钮 */
        @media (min-width: 769px) {
          .cg-log-toggle-btn,
          .cg-log-overlay,
          .cg-log-close-btn {
            display: none;
          }
          /* 桌面端也显示顶部按钮 */
          .cg-top-bar {
            position: fixed;
            top: 15px;
            left: 15px;
            z-index: 50;
          }
        }
      `})]})},gm=({isWin:e,turnNumber:t,onRestart:n,onMainMenu:r})=>{const[l,a]=I.useState(!1),[o,u]=I.useState(!1);I.useEffect(()=>{e&&a(!0);const p=setTimeout(()=>u(!0),1e3);return()=>clearTimeout(p)},[e]);const d=e?"lelouch":"cc";return m.jsxs("div",{className:`cg-result-screen ${e?"cg-result-win":"cg-result-lose"}`,children:[m.jsxs("div",{className:"cg-result-bg",children:[m.jsx("div",{className:"cg-result-bg-gradient"}),e?m.jsx("div",{className:"cg-result-bg-win",children:m.jsx("div",{className:"cg-victory-rays"})}):m.jsx("div",{className:"cg-result-bg-lose",children:m.jsx("div",{className:"cg-defeat-shadow"})})]}),l&&m.jsx(vm,{}),m.jsxs("div",{className:`cg-result-content ${o?"cg-animate-in":""}`,children:[m.jsxs("div",{className:"cg-result-header",children:[m.jsx("div",{className:"cg-result-badge",children:e?m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-win",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#d4af37",strokeWidth:"2"}),m.jsx("path",{d:"M30 50 L45 65 L70 35",fill:"none",stroke:"#d4af37",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"1s",fill:"freeze"})}),[...Array(5)].map((p,x)=>m.jsx("circle",{cx:50+35*Math.cos((x*72-90)*Math.PI/180),cy:50+35*Math.sin((x*72-90)*Math.PI/180),r:"3",fill:"#d4af37",children:m.jsx("animate",{attributeName:"opacity",values:"0;1;0.5;1",dur:"2s",begin:`${x*.2}s`,repeatCount:"indefinite"})},x))]}):m.jsxs("svg",{viewBox:"0 0 100 100",className:"cg-badge-icon cg-badge-lose",children:[m.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#dc2626",strokeWidth:"2"}),m.jsx("path",{d:"M35 35 L65 65 M65 35 L35 65",fill:"none",stroke:"#dc2626",strokeWidth:"4",strokeLinecap:"round",children:m.jsx("animate",{attributeName:"stroke-dasharray",from:"0 100",to:"100 0",dur:"0.5s",fill:"freeze"})})]})}),m.jsx("h1",{className:`cg-result-title ${e?"cg-title-win":"cg-title-lose"}`,children:e?"胜利":"失败"}),m.jsx("p",{className:"cg-result-subtitle",children:e?"All Hail Britannia!":"命运的车轮仍在转动..."})]}),m.jsx("div",{className:"cg-result-character",children:m.jsxs("div",{className:"cg-character-showcase",children:[m.jsx(Fo,{characterId:d,size:200}),m.jsx("div",{className:`cg-character-aura ${e?"cg-aura-win":"cg-aura-lose"}`})]})}),m.jsx("div",{className:"cg-result-score",children:m.jsxs("div",{className:"cg-score-simple",children:[m.jsx("span",{className:"cg-score-label",children:"回合数"}),m.jsx("span",{className:"cg-score-value",children:t})]})}),m.jsxs("div",{className:"cg-result-actions",children:[m.jsxs("button",{className:"cg-result-button cg-button-restart",onClick:n,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),m.jsx("span",{children:"再来一局"})]}),m.jsxs("button",{className:"cg-result-button cg-button-menu",onClick:r,children:[m.jsx("span",{className:"cg-button-icon",children:m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:m.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})})}),m.jsx("span",{children:"返回主菜单"})]})]})]}),m.jsx("style",{children:`
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
      `})]})},vm=()=>{const e=["#d4af37","#f4d03f","#dc2626","#f5f5f5","#71717a"];return m.jsx("div",{className:"cg-confetti-container",children:[...Array(50)].map((t,n)=>m.jsx("div",{className:"cg-confetti",style:{left:`${Math.random()*100}%`,backgroundColor:e[Math.floor(Math.random()*e.length)],animationDelay:`${Math.random()*2}s`,animationDuration:`${2+Math.random()*2}s`}},n))})};var St={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var i=this||n;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window<"u"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var s=this||n;if(i=parseFloat(i),s.ctx||x(),typeof i<"u"&&i>=0&&i<=1){if(s._volume=i,s._muted)return s;s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[c]._soundById(g[y]);_&&_._node&&(_._node.volume=_._volume*i)}return s}return s._volume},mute:function(i){var s=this||n;s.ctx||x(),s._muted=i,s.usingWebAudio&&s.masterGain.gain.setValueAtTime(i?0:s._volume,n.ctx.currentTime);for(var c=0;c<s._howls.length;c++)if(!s._howls[c]._webAudio)for(var g=s._howls[c]._getSoundIds(),y=0;y<g.length;y++){var _=s._howls[c]._soundById(g[y]);_&&_._node&&(_._node.muted=i?!0:_._muted)}return s},stop:function(){for(var i=this||n,s=0;s<i._howls.length;s++)i._howls[s].stop();return i},unload:function(){for(var i=this||n,s=i._howls.length-1;s>=0;s--)i._howls[s].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close<"u"&&(i.ctx.close(),i.ctx=null,x()),i},codecs:function(i){return(this||n)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||n;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio<"u")try{var s=new Audio;typeof s.oncanplaythrough>"u"&&(i._canPlayEvent="canplay")}catch{i.noAudio=!0}else i.noAudio=!0;try{var s=new Audio;s.muted&&(i.noAudio=!0)}catch{}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||n,s=null;try{s=typeof Audio<"u"?new Audio:null}catch{return i}if(!s||typeof s.canPlayType!="function")return i;var c=s.canPlayType("audio/mpeg;").replace(/^no$/,""),g=i._navigator?i._navigator.userAgent:"",y=g.match(/OPR\/(\d+)/g),_=y&&parseInt(y[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,h=g.match(/Version\/(.*?) /),v=f&&h&&parseInt(h[1],10)<15;return i._codecs={mp3:!!(!_&&(c||s.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!c,opus:!!s.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!s.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(s.canPlayType('audio/wav; codecs="1"')||s.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!s.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!s.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(s.canPlayType("audio/x-m4a;")||s.canPlayType("audio/m4a;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(s.canPlayType("audio/x-m4b;")||s.canPlayType("audio/m4b;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(s.canPlayType("audio/x-mp4;")||s.canPlayType("audio/mp4;")||s.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&s.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!s.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(s.canPlayType("audio/x-flac;")||s.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||n;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var s=function(c){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,i._releaseHtml5Audio(g)}catch{i.noAudio=!0;break}for(var y=0;y<i._howls.length;y++)if(!i._howls[y]._webAudio)for(var _=i._howls[y]._getSoundIds(),f=0;f<_.length;f++){var h=i._howls[y]._soundById(_[f]);h&&h._node&&!h._node._unlocked&&(h._node._unlocked=!0,h._node.load())}i._autoResume();var v=i.ctx.createBufferSource();v.buffer=i._scratchBuffer,v.connect(i.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),v.onended=function(){v.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("keydown",s,!0);for(var w=0;w<i._howls.length;w++)i._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("keydown",s,!0),i}},_obtainHtml5Audio:function(){var i=this||n;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var s=new Audio().play();return s&&typeof Promise<"u"&&(s instanceof Promise||typeof s.then=="function")&&s.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var s=this||n;return i._unlocked&&s._html5AudioPool.push(i),s},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend>"u"||!n.usingWebAudio)){for(var s=0;s<i._howls.length;s++)if(i._howls[s]._webAudio){for(var c=0;c<i._howls[s]._sounds.length;c++)if(!i._howls[s]._sounds[c]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(i.autoSuspend){i._suspendTimer=null,i.state="suspending";var g=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(g,g)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume>"u"||!n.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var s=0;s<i._howls.length;s++)i._howls[s]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var n=new t,r=function(i){var s=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}s.init(i)};r.prototype={init:function(i){var s=this;return n.ctx||x(),s._autoplay=i.autoplay||!1,s._format=typeof i.format!="string"?i.format:[i.format],s._html5=i.html5||!1,s._muted=i.mute||!1,s._loop=i.loop||!1,s._pool=i.pool||5,s._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,s._rate=i.rate||1,s._sprite=i.sprite||{},s._src=typeof i.src!="string"?i.src:[i.src],s._volume=i.volume!==void 0?i.volume:1,s._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},s._duration=0,s._state="unloaded",s._sounds=[],s._endTimers={},s._queue=[],s._playLock=!1,s._onend=i.onend?[{fn:i.onend}]:[],s._onfade=i.onfade?[{fn:i.onfade}]:[],s._onload=i.onload?[{fn:i.onload}]:[],s._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],s._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],s._onpause=i.onpause?[{fn:i.onpause}]:[],s._onplay=i.onplay?[{fn:i.onplay}]:[],s._onstop=i.onstop?[{fn:i.onstop}]:[],s._onmute=i.onmute?[{fn:i.onmute}]:[],s._onvolume=i.onvolume?[{fn:i.onvolume}]:[],s._onrate=i.onrate?[{fn:i.onrate}]:[],s._onseek=i.onseek?[{fn:i.onseek}]:[],s._onunlock=i.onunlock?[{fn:i.onunlock}]:[],s._onresume=[],s._webAudio=n.usingWebAudio&&!s._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(s),s._autoplay&&s._queue.push({event:"play",action:function(){s.play()}}),s._preload&&s._preload!=="none"&&s.load(),s},load:function(){var i=this,s=null;if(n.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var c=0;c<i._src.length;c++){var g,y;if(i._format&&i._format[c])g=i._format[c];else{if(y=i._src[c],typeof y!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(y),g||(g=/\.([^.]+)$/.exec(y.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&n.codecs(g)){s=i._src[c];break}}if(!s){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=s,i._state="loading",window.location.protocol==="https:"&&s.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new l(i),i._webAudio&&o(i),i},play:function(i,s){var c=this,g=null;if(typeof i=="number")g=i,i=null;else{if(typeof i=="string"&&c._state==="loaded"&&!c._sprite[i])return null;if(typeof i>"u"&&(i="__default",!c._playLock)){for(var y=0,_=0;_<c._sounds.length;_++)c._sounds[_]._paused&&!c._sounds[_]._ended&&(y++,g=c._sounds[_]._id);y===1?i=null:g=null}}var f=g?c._soundById(g):c._inactiveSound();if(!f)return null;if(g&&!i&&(i=f._sprite||"__default"),c._state!=="loaded"){f._sprite=i,f._ended=!1;var h=f._id;return c._queue.push({event:"play",action:function(){c.play(h)}}),h}if(g&&!f._paused)return s||c._loadQueue("play"),f._id;c._webAudio&&n._autoResume();var v=Math.max(0,f._seek>0?f._seek:c._sprite[i][0]/1e3),w=Math.max(0,(c._sprite[i][0]+c._sprite[i][1])/1e3-v),C=w*1e3/Math.abs(f._rate),b=c._sprite[i][0]/1e3,N=(c._sprite[i][0]+c._sprite[i][1])/1e3;f._sprite=i,f._ended=!1;var k=function(){f._paused=!1,f._seek=v,f._start=b,f._stop=N,f._loop=!!(f._loop||c._sprite[i][2])};if(v>=N){c._ended(f);return}var M=f._node;if(c._webAudio){var L=function(){c._playLock=!1,k(),c._refreshBuffer(f);var Re=f._muted||c._muted?0:f._volume;M.gain.setValueAtTime(Re,n.ctx.currentTime),f._playStart=n.ctx.currentTime,typeof M.bufferSource.start>"u"?f._loop?M.bufferSource.noteGrainOn(0,v,86400):M.bufferSource.noteGrainOn(0,v,w):f._loop?M.bufferSource.start(0,v,86400):M.bufferSource.start(0,v,w),C!==1/0&&(c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),C)),s||setTimeout(function(){c._emit("play",f._id),c._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?L():(c._playLock=!0,c.once("resume",L),c._clearTimer(f._id))}else{var Q=function(){M.currentTime=v,M.muted=f._muted||c._muted||n._muted||M.muted,M.volume=f._volume*n.volume(),M.playbackRate=f._rate;try{var Re=M.play();if(Re&&typeof Promise<"u"&&(Re instanceof Promise||typeof Re.then=="function")?(c._playLock=!0,k(),Re.then(function(){c._playLock=!1,M._unlocked=!0,s?c._loadQueue():c._emit("play",f._id)}).catch(function(){c._playLock=!1,c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):s||(c._playLock=!1,k(),c._emit("play",f._id)),M.playbackRate=f._rate,M.paused){c._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||f._loop?c._endTimers[f._id]=setTimeout(c._ended.bind(c,f),C):(c._endTimers[f._id]=function(){c._ended(f),M.removeEventListener("ended",c._endTimers[f._id],!1)},M.addEventListener("ended",c._endTimers[f._id],!1))}catch(A){c._emit("playerror",f._id,A)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=c._src,M.load());var Ve=window&&window.ejecta||!M.readyState&&n._navigator.isCocoonJS;if(M.readyState>=3||Ve)Q();else{c._playLock=!0,c._state="loading";var Le=function(){c._state="loaded",Q(),M.removeEventListener(n._canPlayEvent,Le,!1)};M.addEventListener(n._canPlayEvent,Le,!1),c._clearTimer(f._id)}}return f._id},pause:function(i){var s=this;if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"pause",action:function(){s.pause(i)}}),s;for(var c=s._getSoundIds(i),g=0;g<c.length;g++){s._clearTimer(c[g]);var y=s._soundById(c[g]);if(y&&!y._paused&&(y._seek=s.seek(c[g]),y._rateSeek=0,y._paused=!0,s._stopFade(c[g]),y._node))if(s._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),s._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||s._emit("pause",y?y._id:null)}return s},stop:function(i,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"stop",action:function(){c.stop(i)}}),c;for(var g=c._getSoundIds(i),y=0;y<g.length;y++){c._clearTimer(g[y]);var _=c._soundById(g[y]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,c._stopFade(g[y]),_._node&&(c._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&c._clearSound(_._node))),s||c._emit("stop",_._id))}return c},mute:function(i,s){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"mute",action:function(){c.mute(i,s)}}),c;if(typeof s>"u")if(typeof i=="boolean")c._muted=i;else return c._muted;for(var g=c._getSoundIds(s),y=0;y<g.length;y++){var _=c._soundById(g[y]);_&&(_._muted=i,_._interval&&c._stopFade(_._id),c._webAudio&&_._node?_._node.gain.setValueAtTime(i?0:_._volume,n.ctx.currentTime):_._node&&(_._node.muted=n._muted?!0:i),c._emit("mute",_._id))}return c},volume:function(){var i=this,s=arguments,c,g;if(s.length===0)return i._volume;if(s.length===1||s.length===2&&typeof s[1]>"u"){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length>=2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c<"u"&&c>=0&&c<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,s)}}),i;typeof g>"u"&&(i._volume=c),g=i._getSoundIds(g);for(var h=0;h<g.length;h++)f=i._soundById(g[h]),f&&(f._volume=c,s[2]||i._stopFade(g[h]),i._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(c,n.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=c*n.volume()),i._emit("volume",f._id))}else return f=g?i._soundById(g):i._sounds[0],f?f._volume:0;return i},fade:function(i,s,c,g){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(i,s,c,g)}}),y;i=Math.min(Math.max(0,parseFloat(i)),1),s=Math.min(Math.max(0,parseFloat(s)),1),c=parseFloat(c),y.volume(i,g);for(var _=y._getSoundIds(g),f=0;f<_.length;f++){var h=y._soundById(_[f]);if(h){if(g||y._stopFade(_[f]),y._webAudio&&!h._muted){var v=n.ctx.currentTime,w=v+c/1e3;h._volume=i,h._node.gain.setValueAtTime(i,v),h._node.gain.linearRampToValueAtTime(s,w)}y._startFadeInterval(h,i,s,c,_[f],typeof g>"u")}}return y},_startFadeInterval:function(i,s,c,g,y,_){var f=this,h=s,v=c-s,w=Math.abs(v/.01),C=Math.max(4,w>0?g/w:g),b=Date.now();i._fadeTo=c,i._interval=setInterval(function(){var N=(Date.now()-b)/g;b=Date.now(),h+=v*N,h=Math.round(h*100)/100,v<0?h=Math.max(c,h):h=Math.min(c,h),f._webAudio?i._volume=h:f.volume(h,i._id,!0),_&&(f._volume=h),(c<s&&h<=c||c>s&&h>=c)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,f.volume(c,i._id),f._emit("fade",i._id))},C)},_stopFade:function(i){var s=this,c=s._soundById(i);return c&&c._interval&&(s._webAudio&&c._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(c._interval),c._interval=null,s.volume(c._fadeTo,i),c._fadeTo=null,s._emit("fade",i)),s},loop:function(){var i=this,s=arguments,c,g,y;if(s.length===0)return i._loop;if(s.length===1)if(typeof s[0]=="boolean")c=s[0],i._loop=c;else return y=i._soundById(parseInt(s[0],10)),y?y._loop:!1;else s.length===2&&(c=s[0],g=parseInt(s[1],10));for(var _=i._getSoundIds(g),f=0;f<_.length;f++)y=i._soundById(_[f]),y&&(y._loop=c,i._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=c,c&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,i.playing(_[f])&&(i.pause(_[f],!0),i.play(_[f],!0)))));return i},rate:function(){var i=this,s=arguments,c,g;if(s.length===0)g=i._sounds[0]._id;else if(s.length===1){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):c=parseFloat(s[0])}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));var f;if(typeof c=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,s)}}),i;typeof g>"u"&&(i._rate=c),g=i._getSoundIds(g);for(var h=0;h<g.length;h++)if(f=i._soundById(g[h]),f){i.playing(g[h])&&(f._rateSeek=i.seek(g[h]),f._playStart=i._webAudio?n.ctx.currentTime:f._playStart),f._rate=c,i._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(c,n.ctx.currentTime):f._node&&(f._node.playbackRate=c);var v=i.seek(g[h]),w=(i._sprite[f._sprite][0]+i._sprite[f._sprite][1])/1e3-v,C=w*1e3/Math.abs(f._rate);(i._endTimers[g[h]]||!f._paused)&&(i._clearTimer(g[h]),i._endTimers[g[h]]=setTimeout(i._ended.bind(i,f),C)),i._emit("rate",f._id)}}else return f=i._soundById(g),f?f._rate:i._rate;return i},seek:function(){var i=this,s=arguments,c,g;if(s.length===0)i._sounds.length&&(g=i._sounds[0]._id);else if(s.length===1){var y=i._getSoundIds(),_=y.indexOf(s[0]);_>=0?g=parseInt(s[0],10):i._sounds.length&&(g=i._sounds[0]._id,c=parseFloat(s[0]))}else s.length===2&&(c=parseFloat(s[0]),g=parseInt(s[1],10));if(typeof g>"u")return 0;if(typeof c=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,s)}}),i;var f=i._soundById(g);if(f)if(typeof c=="number"&&c>=0){var h=i.playing(g);h&&i.pause(g,!0),f._seek=c,f._ended=!1,i._clearTimer(g),!i._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=c);var v=function(){h&&i.play(g,!0),i._emit("seek",g)};if(h&&!i._webAudio){var w=function(){i._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(i._webAudio){var C=i.playing(g)?n.ctx.currentTime-f._playStart:0,b=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(b+C*Math.abs(f._rate))}else return f._node.currentTime;return i},playing:function(i){var s=this;if(typeof i=="number"){var c=s._soundById(i);return c?!c._paused:!1}for(var g=0;g<s._sounds.length;g++)if(!s._sounds[g]._paused)return!0;return!1},duration:function(i){var s=this,c=s._duration,g=s._soundById(i);return g&&(c=s._sprite[g._sprite][1]/1e3),c},state:function(){return this._state},unload:function(){for(var i=this,s=i._sounds,c=0;c<s.length;c++)s[c]._paused||i.stop(s[c]._id),i._webAudio||(i._clearSound(s[c]._node),s[c]._node.removeEventListener("error",s[c]._errorFn,!1),s[c]._node.removeEventListener(n._canPlayEvent,s[c]._loadFn,!1),s[c]._node.removeEventListener("ended",s[c]._endFn,!1),n._releaseHtml5Audio(s[c]._node)),delete s[c]._node,i._clearTimer(s[c]._id);var g=n._howls.indexOf(i);g>=0&&n._howls.splice(g,1);var y=!0;for(c=0;c<n._howls.length;c++)if(n._howls[c]._src===i._src||i._src.indexOf(n._howls[c]._src)>=0){y=!1;break}return a&&y&&delete a[i._src],n.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,s,c,g){var y=this,_=y["_on"+i];return typeof s=="function"&&_.push(g?{id:c,fn:s,once:g}:{id:c,fn:s}),y},off:function(i,s,c){var g=this,y=g["_on"+i],_=0;if(typeof s=="number"&&(c=s,s=null),s||c)for(_=0;_<y.length;_++){var f=c===y[_].id;if(s===y[_].fn&&f||!s&&f){y.splice(_,1);break}}else if(i)g["_on"+i]=[];else{var h=Object.keys(g);for(_=0;_<h.length;_++)h[_].indexOf("_on")===0&&Array.isArray(g[h[_]])&&(g[h[_]]=[])}return g},once:function(i,s,c){var g=this;return g.on(i,s,c,1),g},_emit:function(i,s,c){for(var g=this,y=g["_on"+i],_=y.length-1;_>=0;_--)(!y[_].id||y[_].id===s||i==="load")&&(setTimeout((function(f){f.call(this,s,c)}).bind(g,y[_].fn),0),y[_].once&&g.off(i,y[_].fn,y[_].id));return g._loadQueue(i),g},_loadQueue:function(i){var s=this;if(s._queue.length>0){var c=s._queue[0];c.event===i&&(s._queue.shift(),s._loadQueue()),i||c.action()}return s},_ended:function(i){var s=this,c=i._sprite;if(!s._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(s._ended.bind(s,i),100),s;var g=!!(i._loop||s._sprite[c][2]);if(s._emit("end",i._id),!s._webAudio&&g&&s.stop(i._id,!0).play(i._id),s._webAudio&&g){s._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=n.ctx.currentTime;var y=(i._stop-i._start)*1e3/Math.abs(i._rate);s._endTimers[i._id]=setTimeout(s._ended.bind(s,i),y)}return s._webAudio&&!g&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,s._clearTimer(i._id),s._cleanBuffer(i._node),n._autoSuspend()),!s._webAudio&&!g&&s.stop(i._id,!0),s},_clearTimer:function(i){var s=this;if(s._endTimers[i]){if(typeof s._endTimers[i]!="function")clearTimeout(s._endTimers[i]);else{var c=s._soundById(i);c&&c._node&&c._node.removeEventListener("ended",s._endTimers[i],!1)}delete s._endTimers[i]}return s},_soundById:function(i){for(var s=this,c=0;c<s._sounds.length;c++)if(i===s._sounds[c]._id)return s._sounds[c];return null},_inactiveSound:function(){var i=this;i._drain();for(var s=0;s<i._sounds.length;s++)if(i._sounds[s]._ended)return i._sounds[s].reset();return new l(i)},_drain:function(){var i=this,s=i._pool,c=0,g=0;if(!(i._sounds.length<s)){for(g=0;g<i._sounds.length;g++)i._sounds[g]._ended&&c++;for(g=i._sounds.length-1;g>=0;g--){if(c<=s)return;i._sounds[g]._ended&&(i._webAudio&&i._sounds[g]._node&&i._sounds[g]._node.disconnect(0),i._sounds.splice(g,1),c--)}}},_getSoundIds:function(i){var s=this;if(typeof i>"u"){for(var c=[],g=0;g<s._sounds.length;g++)c.push(s._sounds[g]._id);return c}else return[i]},_refreshBuffer:function(i){var s=this;return i._node.bufferSource=n.ctx.createBufferSource(),i._node.bufferSource.buffer=a[s._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,n.ctx.currentTime),s},_cleanBuffer:function(i){var s=this,c=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!i.bufferSource)return s;if(n._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),c))try{i.bufferSource.buffer=n._scratchBuffer}catch{}return i.bufferSource=null,s},_clearSound:function(i){var s=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);s||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var l=function(i){this._parent=i,this.init()};l.prototype={init:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,s._sounds.push(i),i.create(),i},create:function(){var i=this,s=i._parent,c=n._muted||i._muted||i._parent._muted?0:i._volume;return s._webAudio?(i._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),i._node.gain.setValueAtTime(c,n.ctx.currentTime),i._node.paused=!0,i._node.connect(n.masterGain)):n.noAudio||(i._node=n._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(n._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=s._src,i._node.preload=s._preload===!0?"auto":s._preload,i._node.volume=c*n.volume(),i._node.load()),i},reset:function(){var i=this,s=i._parent;return i._muted=s._muted,i._loop=s._loop,i._volume=s._volume,i._rate=s._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++n._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,s=i._parent;s._duration=Math.ceil(i._node.duration*10)/10,Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue()),i._node.removeEventListener(n._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,s=i._parent;s._duration===1/0&&(s._duration=Math.ceil(i._node.duration*10)/10,s._sprite.__default[1]===1/0&&(s._sprite.__default[1]=s._duration*1e3),s._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var a={},o=function(i){var s=i._src;if(a[s]){i._duration=a[s].duration,p(i);return}if(/^data:[^;]+;base64,/.test(s)){for(var c=atob(s.split(",")[1]),g=new Uint8Array(c.length),y=0;y<c.length;++y)g[y]=c.charCodeAt(y);d(g.buffer,i)}else{var _=new XMLHttpRequest;_.open(i._xhr.method,s,!0),_.withCredentials=i._xhr.withCredentials,_.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(f){_.setRequestHeader(f,i._xhr.headers[f])}),_.onload=function(){var f=(_.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}d(_.response,i)},_.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete a[s],i.load())},u(_)}},u=function(i){try{i.send()}catch{i.onerror()}},d=function(i,s){var c=function(){s._emit("loaderror",null,"Decoding audio data failed.")},g=function(y){y&&s._sounds.length>0?(a[s._src]=y,p(s,y)):c()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(i).then(g).catch(c):n.ctx.decodeAudioData(i,g,c)},p=function(i,s){s&&!i._duration&&(i._duration=s.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},x=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),s=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),c=s?parseInt(s[1],10):null;if(i&&c&&c<9){var g=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!g&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=r,typeof nr<"u"?(nr.HowlerGlobal=t,nr.Howler=n,nr.Howl=r,nr.Sound=l):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=r,window.Sound=l)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var l=r._howls.length-1;l>=0;l--)r._howls[l].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,l){var a=this;if(!a.ctx||!a.ctx.listener)return a;if(r=typeof r!="number"?a._pos[1]:r,l=typeof l!="number"?a._pos[2]:l,typeof n=="number")a._pos=[n,r,l],typeof a.ctx.listener.positionX<"u"?(a.ctx.listener.positionX.setTargetAtTime(a._pos[0],Howler.ctx.currentTime,.1),a.ctx.listener.positionY.setTargetAtTime(a._pos[1],Howler.ctx.currentTime,.1),a.ctx.listener.positionZ.setTargetAtTime(a._pos[2],Howler.ctx.currentTime,.1)):a.ctx.listener.setPosition(a._pos[0],a._pos[1],a._pos[2]);else return a._pos;return a},HowlerGlobal.prototype.orientation=function(n,r,l,a,o,u){var d=this;if(!d.ctx||!d.ctx.listener)return d;var p=d._orientation;if(r=typeof r!="number"?p[1]:r,l=typeof l!="number"?p[2]:l,a=typeof a!="number"?p[3]:a,o=typeof o!="number"?p[4]:o,u=typeof u!="number"?p[5]:u,typeof n=="number")d._orientation=[n,r,l,a,o,u],typeof d.ctx.listener.forwardX<"u"?(d.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),d.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),d.ctx.listener.forwardZ.setTargetAtTime(l,Howler.ctx.currentTime,.1),d.ctx.listener.upX.setTargetAtTime(a,Howler.ctx.currentTime,.1),d.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),d.ctx.listener.upZ.setTargetAtTime(u,Howler.ctx.currentTime,.1)):d.ctx.listener.setOrientation(n,r,l,a,o,u);else return p;return d},Howl.prototype.init=function(n){return function(r){var l=this;return l._orientation=r.orientation||[1,0,0],l._stereo=r.stereo||null,l._pos=r.pos||null,l._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},l._onstereo=r.onstereo?[{fn:r.onstereo}]:[],l._onpos=r.onpos?[{fn:r.onpos}]:[],l._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var l=this;if(!l._webAudio)return l;if(l._state!=="loaded")return l._queue.push({event:"stereo",action:function(){l.stereo(n,r)}}),l;var a=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")l._stereo=n,l._pos=[n,0,0];else return l._stereo;for(var o=l._getSoundIds(r),u=0;u<o.length;u++){var d=l._soundById(o[u]);if(d)if(typeof n=="number")d._stereo=n,d._pos=[n,0,0],d._node&&(d._pannerAttr.panningModel="equalpower",(!d._panner||!d._panner.pan)&&t(d,a),a==="spatial"?typeof d._panner.positionX<"u"?(d._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),d._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),d._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):d._panner.setPosition(n,0,0):d._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),l._emit("stereo",d._id);else return d._stereo}return l},Howl.prototype.pos=function(n,r,l,a){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,l,a)}}),o;if(r=typeof r!="number"?0:r,l=typeof l!="number"?-.5:l,typeof a>"u")if(typeof n=="number")o._pos=[n,r,l];else return o._pos;for(var u=o._getSoundIds(a),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._pos=[n,r,l],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setPosition(n,r,l)),o._emit("pos",p._id);else return p._pos}return o},Howl.prototype.orientation=function(n,r,l,a){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,l,a)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,l=typeof l!="number"?o._orientation[2]:l,typeof a>"u")if(typeof n=="number")o._orientation=[n,r,l];else return o._orientation;for(var u=o._getSoundIds(a),d=0;d<u.length;d++){var p=o._soundById(u[d]);if(p)if(typeof n=="number")p._orientation=[n,r,l],p._node&&(p._panner||(p._pos||(p._pos=o._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(l,Howler.ctx.currentTime)):p._panner.setOrientation(n,r,l)),o._emit("orientation",p._id);else return p._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,l,a,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")l=r[0],typeof a>"u"&&(l.pannerAttr||(l.pannerAttr={coneInnerAngle:l.coneInnerAngle,coneOuterAngle:l.coneOuterAngle,coneOuterGain:l.coneOuterGain,distanceModel:l.distanceModel,maxDistance:l.maxDistance,refDistance:l.refDistance,rolloffFactor:l.rolloffFactor,panningModel:l.panningModel}),n._pannerAttr={coneInnerAngle:typeof l.pannerAttr.coneInnerAngle<"u"?l.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof l.pannerAttr.coneOuterAngle<"u"?l.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof l.pannerAttr.coneOuterGain<"u"?l.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof l.pannerAttr.distanceModel<"u"?l.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof l.pannerAttr.maxDistance<"u"?l.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof l.pannerAttr.refDistance<"u"?l.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof l.pannerAttr.rolloffFactor<"u"?l.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof l.pannerAttr.panningModel<"u"?l.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(l=r[0],a=parseInt(r[1],10));for(var u=n._getSoundIds(a),d=0;d<u.length;d++)if(o=n._soundById(u[d]),o){var p=o._pannerAttr;p={coneInnerAngle:typeof l.coneInnerAngle<"u"?l.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof l.coneOuterAngle<"u"?l.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof l.coneOuterGain<"u"?l.coneOuterGain:p.coneOuterGain,distanceModel:typeof l.distanceModel<"u"?l.distanceModel:p.distanceModel,maxDistance:typeof l.maxDistance<"u"?l.maxDistance:p.maxDistance,refDistance:typeof l.refDistance<"u"?l.refDistance:p.refDistance,rolloffFactor:typeof l.rolloffFactor<"u"?l.rolloffFactor:p.rolloffFactor,panningModel:typeof l.panningModel<"u"?l.panningModel:p.panningModel};var x=o._panner;x||(o._pos||(o._pos=n._pos||[0,0,-.5]),t(o,"spatial"),x=o._panner),x.coneInnerAngle=p.coneInnerAngle,x.coneOuterAngle=p.coneOuterAngle,x.coneOuterGain=p.coneOuterGain,x.distanceModel=p.distanceModel,x.maxDistance=p.maxDistance,x.refDistance=p.refDistance,x.rolloffFactor=p.rolloffFactor,x.panningModel=p.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,l=r._parent;r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,n.call(this),r._stereo?l.stereo(r._stereo):r._pos&&l.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,l=r._parent;return r._orientation=l._orientation,r._stereo=l._stereo,r._pos=l._pos,r._pannerAttr=l._pannerAttr,r._stereo?l.stereo(r._stereo):r._pos?l.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,l._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var t=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(St);const pl={"main-menu":{volume:.4,loop:!0,preload:!0},"character-select":{volume:.35,loop:!0,preload:!0},"game-normal":{volume:.3,loop:!0,preload:!0},"game-intense":{volume:.35,loop:!0,preload:!1},"geass-activate":{volume:.5,loop:!1,preload:!1},victory:{volume:.5,loop:!1,preload:!0},defeat:{volume:.4,loop:!1,preload:!0},"game-over":{volume:.35,loop:!1,preload:!0}},Ga={"card-play":{volume:.6,loop:!1},"card-shuffle":{volume:.5,loop:!1},"card-draw":{volume:.4,loop:!1},"card-flip":{volume:.5,loop:!1},challenge:{volume:.7,loop:!1},"challenge-success":{volume:.8,loop:!1},"challenge-fail":{volume:.6,loop:!1},"turn-start":{volume:.4,loop:!1},"turn-end":{volume:.3,loop:!1},"geass-activate":{volume:.8,loop:!1},"geass-hit":{volume:.9,loop:!1},"geass-miss":{volume:.5,loop:!1},"geass-immunity":{volume:.7,loop:!1},"button-click":{volume:.4,loop:!1},"button-hover":{volume:.2,loop:!1},"menu-open":{volume:.3,loop:!1},"menu-close":{volume:.3,loop:!1},"character-select":{volume:.5,loop:!1},"character-skill":{volume:.7,loop:!1},"damage-taken":{volume:.8,loop:!1},heal:{volume:.6,loop:!1},win:{volume:.8,loop:!1},lose:{volume:.6,loop:!1},"round-win":{volume:.7,loop:!1},"round-lose":{volume:.5,loop:!1}},cu={"main-menu":"https://assets.mixkit.co/music/preview/mixkit-epic-orchestra-689.mp3","character-select":"https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3","game-normal":"https://assets.mixkit.co/music/preview/mixkit-intense-puzzle-game-1122.mp3","game-intense":"https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3","geass-activate":"https://assets.mixkit.co/music/preview/mixkit-magical-coin-win-193.mp3",victory:"https://assets.mixkit.co/music/preview/mixkit-winning-chimes-2015.mp3",defeat:"https://assets.mixkit.co/music/preview/mixkit-sad-piano-553.mp3","game-over":"https://assets.mixkit.co/music/preview/mixkit-sad-trombone-471.mp3"},du={"card-play":"https://assets.mixkit.co/sfx/preview/mixkit-card-flip-1535.mp3","card-shuffle":"https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-1698.mp3","card-draw":"https://assets.mixkit.co/sfx/preview/mixkit-paper-slide-1533.mp3","card-flip":"https://assets.mixkit.co/sfx/preview/mixkit-page-turn-single-1104.mp3",challenge:"https://assets.mixkit.co/sfx/preview/mixkit-dramatic-boom-991.mp3","challenge-success":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","challenge-fail":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3","turn-start":"https://assets.mixkit.co/sfx/preview/mixkit-game-notification-wave-alarm-987.mp3","turn-end":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","geass-activate":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","geass-hit":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3","geass-miss":"https://assets.mixkit.co/sfx/preview/mixkit-falling-into-mud-391.mp3","geass-immunity":"https://assets.mixkit.co/sfx/preview/mixkit-magic-flute-sound-2428.mp3","button-click":"https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3","button-hover":"https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3","menu-open":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3","menu-close":"https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3","character-select":"https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3","character-skill":"https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-193.mp3","damage-taken":"https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-explosion-2759.mp3",heal:"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3",win:"https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3",lose:"https://assets.mixkit.co/sfx/preview/mixkit-sad-trombone-471.mp3","round-win":"https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3","round-lose":"https://assets.mixkit.co/sfx/preview/mixkit-fail-drum-and-bells-571.mp3"},ym={lelouch:{select:["https://example.com/voice/lelouch/select1.mp3"],"play-card":["https://example.com/voice/lelouch/play1.mp3","https://example.com/voice/lelouch/play2.mp3"],challenge:["https://example.com/voice/lelouch/challenge1.mp3","https://example.com/voice/lelouch/challenge2.mp3"],bluff:["https://example.com/voice/lelouch/bluff1.mp3"],"geass-activate":["https://example.com/voice/lelouch/geass1.mp3","https://example.com/voice/lelouch/geass2.mp3"],"geass-hit":["https://example.com/voice/lelouch/hit1.mp3"],"geass-miss":["https://example.com/voice/lelouch/miss1.mp3"],damage:["https://example.com/voice/lelouch/damage1.mp3","https://example.com/voice/lelouch/damage2.mp3"],victory:["https://example.com/voice/lelouch/victory1.mp3","https://example.com/voice/lelouch/victory2.mp3"],defeat:["https://example.com/voice/lelouch/defeat1.mp3"],taunt:["https://example.com/voice/lelouch/taunt1.mp3","https://example.com/voice/lelouch/taunt2.mp3"],surprised:["https://example.com/voice/lelouch/surprised1.mp3"]},cc:{select:["https://example.com/voice/cc/select1.mp3"],"play-card":["https://example.com/voice/cc/play1.mp3","https://example.com/voice/cc/play2.mp3"],challenge:["https://example.com/voice/cc/challenge1.mp3"],bluff:["https://example.com/voice/cc/bluff1.mp3","https://example.com/voice/cc/bluff2.mp3"],"geass-activate":["https://example.com/voice/cc/geass1.mp3"],"geass-hit":["https://example.com/voice/cc/hit1.mp3"],"geass-miss":["https://example.com/voice/cc/miss1.mp3"],damage:["https://example.com/voice/cc/damage1.mp3"],victory:["https://example.com/voice/cc/victory1.mp3"],defeat:["https://example.com/voice/cc/defeat1.mp3"],taunt:["https://example.com/voice/cc/taunt1.mp3"],surprised:["https://example.com/voice/cc/surprised1.mp3"]},suzaku:{select:["https://example.com/voice/suzaku/select1.mp3"],"play-card":["https://example.com/voice/suzaku/play1.mp3"],challenge:["https://example.com/voice/suzaku/challenge1.mp3","https://example.com/voice/suzaku/challenge2.mp3"],bluff:["https://example.com/voice/suzaku/bluff1.mp3"],"geass-activate":["https://example.com/voice/suzaku/geass1.mp3"],"geass-hit":["https://example.com/voice/suzaku/hit1.mp3"],"geass-miss":["https://example.com/voice/suzaku/miss1.mp3"],damage:["https://example.com/voice/suzaku/damage1.mp3","https://example.com/voice/suzaku/damage2.mp3"],victory:["https://example.com/voice/suzaku/victory1.mp3"],defeat:["https://example.com/voice/suzaku/defeat1.mp3"],taunt:["https://example.com/voice/suzaku/taunt1.mp3"],surprised:["https://example.com/voice/suzaku/surprised1.mp3"]},kallen:{select:["https://example.com/voice/kallen/select1.mp3"],"play-card":["https://example.com/voice/kallen/play1.mp3","https://example.com/voice/kallen/play2.mp3"],challenge:["https://example.com/voice/kallen/challenge1.mp3"],bluff:["https://example.com/voice/kallen/bluff1.mp3"],"geass-activate":["https://example.com/voice/kallen/geass1.mp3"],"geass-hit":["https://example.com/voice/kallen/hit1.mp3","https://example.com/voice/kallen/hit2.mp3"],"geass-miss":["https://example.com/voice/kallen/miss1.mp3"],damage:["https://example.com/voice/kallen/damage1.mp3"],victory:["https://example.com/voice/kallen/victory1.mp3","https://example.com/voice/kallen/victory2.mp3"],defeat:["https://example.com/voice/kallen/defeat1.mp3"],taunt:["https://example.com/voice/kallen/taunt1.mp3"],surprised:["https://example.com/voice/kallen/surprised1.mp3"]}},un=class un{constructor(){me(this,"bgmMap",new Map);me(this,"sfxMap",new Map);me(this,"currentBGM",null);me(this,"masterVolume",1);me(this,"bgmVolume",1);me(this,"sfxVolume",1);me(this,"voiceVolume",1);me(this,"isMuted",!1);me(this,"initialized",!1);me(this,"currentVoice",null)}static getInstance(){return un.instance||(un.instance=new un),un.instance}init(){this.initialized||(this.preloadBGM(["main-menu","victory","defeat"]),this.preloadSFX(["button-click","card-play","challenge"]),this.initialized=!0,console.log("[EnhancedSoundManager] 初始化完成"))}preloadBGM(t){t.forEach(n=>{if(!this.bgmMap.has(n)){const r=pl[n],l=new St.Howl({src:[cu[n]],volume:r.volume*this.bgmVolume*this.masterVolume,loop:r.loop,preload:r.preload??!0,html5:!0});this.bgmMap.set(n,l)}})}preloadSFX(t){t.forEach(n=>{if(!this.sfxMap.has(n)){const r=Ga[n],l=new St.Howl({src:[du[n]],volume:r.volume*this.sfxVolume*this.masterVolume,loop:r.loop,preload:!0});this.sfxMap.set(n,l)}})}playBGM(t,n=1e3){if(this.isMuted)return;this.currentBGM&&this.currentBGM!==t&&this.stopBGM(n);let r=this.bgmMap.get(t);if(!r){const l=pl[t];r=new St.Howl({src:[cu[t]],volume:0,loop:l.loop,html5:!0}),this.bgmMap.set(t,r)}if(!r.playing()){r.play();const l=pl[t];r.fade(0,l.volume*this.bgmVolume*this.masterVolume,n)}this.currentBGM=t}stopBGM(t=1e3){if(this.currentBGM){const n=this.bgmMap.get(this.currentBGM);n&&n.playing()&&(n.fade(n.volume(),0,t),setTimeout(()=>{n.stop()},t)),this.currentBGM=null}}pauseBGM(){if(this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.pause()}}resumeBGM(){if(!this.isMuted&&this.currentBGM){const t=this.bgmMap.get(this.currentBGM);t&&t.play()}}playSFX(t){if(this.isMuted)return;const n=Ga[t];if(!n){console.warn(`[SoundManager] 未知音效类型: ${t}`);return}let r=this.sfxMap.get(t);r||(r=new St.Howl({src:[du[t]],volume:(n.volume||.5)*this.sfxVolume*this.masterVolume,loop:n.loop||!1}),this.sfxMap.set(t,r)),r.playing()&&r.stop(),r.play()}playVoice(t,n){var o;if(this.isMuted)return;const r=(o=ym[t])==null?void 0:o[n];if(!r||r.length===0){console.warn(`[EnhancedSoundManager] 未找到语音: ${t} - ${n}`);return}const l=r[Math.floor(Math.random()*r.length)];this.currentVoice&&this.currentVoice.stop();const a=new St.Howl({src:[l],volume:.8*this.voiceVolume*this.masterVolume,onend:()=>{this.currentVoice=null}});this.currentVoice=a,a.play()}setMasterVolume(t){this.masterVolume=Math.max(0,Math.min(1,t)),St.Howler.volume(this.masterVolume),this.updateAllVolumes()}setBGMVolume(t){this.bgmVolume=Math.max(0,Math.min(1,t)),this.updateBGMVolumes()}setSFXVolume(t){this.sfxVolume=Math.max(0,Math.min(1,t)),this.updateSFXVolumes()}setVoiceVolume(t){this.voiceVolume=Math.max(0,Math.min(1,t))}updateAllVolumes(){this.updateBGMVolumes(),this.updateSFXVolumes()}updateBGMVolumes(){this.bgmMap.forEach((t,n)=>{const r=pl[n];t.volume(r.volume*this.bgmVolume*this.masterVolume)})}updateSFXVolumes(){this.sfxMap.forEach((t,n)=>{const r=Ga[n];t.volume(r.volume*this.sfxVolume*this.masterVolume)})}toggleMute(){return this.isMuted=!this.isMuted,St.Howler.mute(this.isMuted),this.isMuted}setMute(t){this.isMuted=t,St.Howler.mute(t)}getCurrentBGM(){return this.currentBGM}getVolumeSettings(){return{master:this.masterVolume,bgm:this.bgmVolume,sfx:this.sfxVolume,voice:this.voiceVolume,muted:this.isMuted}}getStatus(){return{enabled:!this.isMuted,bgmVolume:this.bgmVolume,sfxVolume:this.sfxVolume}}async preload(){["button-click","card-play","challenge","geass-activate"].forEach(n=>{this.playSFX(n)}),console.log("[EnhancedSoundManager] 音效预加载完成")}destroy(){this.stopBGM(0),this.bgmMap.forEach(t=>t.unload()),this.sfxMap.forEach(t=>t.unload()),this.bgmMap.clear(),this.sfxMap.clear(),this.currentVoice&&(this.currentVoice.unload(),this.currentVoice=null),this.initialized=!1}};me(un,"instance");let $i=un;const xt=$i.getInstance(),sn=e=>{xt&&xt.playBGM(e)},ue=e=>{xt&&xt.playSFX(e)},xm=()=>{xt&&xt.stopBGM()};class _m{constructor(){me(this,"cards",[]);me(this,"liarCard",null)}generateDeck(){this.cards=[];const t=["spades","hearts","clubs","diamonds"],n=["Q","K","A"];for(const r of n)for(let l=0;l<6;l++){const a=t[l%4];this.cards.push({id:`${r}-${l}-${Math.random().toString(36).substr(2,9)}`,suit:a,rank:r,value:r==="Q"?1:r==="K"?2:3,isJoker:!1,isRevealed:!1,owner:null})}for(let r=0;r<2;r++)this.cards.push({id:`JOKER-${r}-${Math.random().toString(36).substr(2,9)}`,suit:"joker",rank:"JOKER",value:0,isJoker:!0,isRevealed:!1,owner:null});return this.cards}shuffle(){for(let t=this.cards.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[this.cards[t],this.cards[n]]=[this.cards[n],this.cards[t]]}return this.cards}dealCards(){if(this.cards.length!==20)throw new Error("牌组未初始化或牌数不正确");const t=[],n=[],r=[],l=[];for(let a=0;a<5;a++){const o=this.cards[a];o.owner="player",t.push(o)}for(let a=5;a<10;a++){const o=this.cards[a];o.owner="ai",n.push(o)}for(let a=10;a<15;a++){const o=this.cards[a];o.owner="ai2",r.push(o)}for(let a=15;a<20;a++){const o=this.cards[a];o.owner="ai3",l.push(o)}return{playerCards:t,ai1Cards:n,ai2Cards:r,ai3Cards:l,remaining:[]}}setLiarCard(){const t=["Q","K","A"];return this.liarCard=t[Math.floor(Math.random()*t.length)],this.liarCard}getLiarCard(){return this.liarCard}forceSetLiarCard(t){t!=="JOKER"&&(this.liarCard=t)}getCards(){return this.cards}getDeck(){return this.cards}getPlayerCards(){return this.cards.filter(t=>t.owner==="player")}getAICards(t="ai"){return this.cards.filter(n=>n.owner===t)}playCards(t){const n=[];for(const r of t){const l=this.cards.find(a=>a.id===r);l&&(l.owner="table",n.push(l))}return n}isLiarCard(t){return t.isJoker?!0:t.rank===this.liarCard}checkBluff(t,n){return t.some(r=>r.rank!==n&&!r.isJoker)}getRemainingCards(){return this.cards.filter(t=>t.owner===null).length}drawCards(t){const r=this.cards.filter(l=>l.owner===null).slice(0,t);for(const l of r)l.owner="player";return r}reset(){this.cards=[],this.liarCard=null}redealCards(){return this.reset(),this.generateDeck(),this.shuffle(),this.dealCards()}}const wm=1/3,km=1/2,Sm=1,Cm=.1,Nm=.9,Am=.5,bm=.25,Em=.15,Tm=.2,jm=.8,fu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}];class Pm{getBaseHitChance(t){return t===0?wm:t===1?km:Sm}performGeass(t,n,r=null,l=0,a=0){let o=this.getBaseHitChance(a);if(o+=l,r==="cc"&&!n.ccReviveUsed&&Math.random()<o&&n.hp<=1&&Math.random()<Am)return{activated:!0,hit:!1,damage:0,newStats:{...n,hp:1,ccReviveUsed:!0},message:"C.C.发动Code之力！从死亡边缘复活并免疫本次Geass！",isRevived:!0};if(r==="suzaku"&&Math.random()<Em)return Math.random()<bm?{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避并准备反击！",isCounter:!0,isDodge:!0}:{activated:!0,hit:!1,damage:0,newStats:n,message:"朱雀发动枢木剑术！完美闪避！",isDodge:!0};if(a<2&&(o=Math.max(Cm,Math.min(Nm,o))),Math.random()<o){const x={...n,hp:Math.max(0,n.hp-1),geassSuccessCount:n.geassSuccessCount+1},i=fu[Math.floor(Math.random()*fu.length)];return{activated:!0,hit:!0,damage:1,newStats:x,funnyAction:i.description,message:`Geass命中！${i.emoji} ${i.description}`}}else return{activated:!0,hit:!1,damage:0,newStats:{...n,geassFailCount:n.geassFailCount+1},message:"Geass未命中！"}}calculateKallenBoost(t){return t<2?0:Math.min(jm,Tm*(t-1))}lelouchAbsoluteCommand(t){return{success:!0,message:`鲁鲁修发动绝对命令！骗子牌变为 ${t}`}}getSkillDescription(t){return{lelouch:"绝对命令：每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）",cc:"Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）",suzaku:"枢木剑术：受到Geass时25%概率反击，15%基础闪避率",kallen:"红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}[t]}getCCSkillDescription(){return"C.C. - Code之力：首次受到致命伤害时，50%概率复活并免疫本次伤害（每局限1次）"}getSuzakuSkillDescription(){return"朱雀 - 枢木剑术：受到Geass时25%概率反击，15%基础闪避率"}getKallenSkillDescription(){return"卡莲 - 红莲二式：可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数"}}const Ua={id:"absolute-order",name:"绝对命令",nameEn:"Absolute Order",description:"每局游戏限1次，强制指定一张牌为骗子牌（无论实际是什么牌）",type:"active",target:"card",maxUses:1,cooldown:0,effect:{type:"force-liar",value:!0},icon:"👁️"},Xa={id:"code-power",name:"Code之力",nameEn:"Code Power",description:"首次受到致命伤害时，50%概率复活并免疫本次伤害",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-immunity",value:.5},icon:"♾️"},Wa={id:"suzaku-sword",name:"枢木剑术",nameEn:"Suzaku Sword",description:"受到Geass时25%概率反击，15%基础闪避率",type:"passive",target:"self",maxUses:-1,cooldown:0,effect:{type:"geass-resistance",value:.25},icon:"🛡️"},Qa={id:"guren-assault",name:"红莲二式",nameEn:"Guren Assault",description:"可出1-4张牌，出2张+被质疑且质疑失败，Geass命中率=20%×出牌张数",type:"active",target:"self",maxUses:-1,cooldown:1,effect:{type:"multi-play",value:4},icon:"⚡"},Im={id:"lelouch",name:"鲁鲁修",nameEn:"Lelouch",nameJa:"ルルーシュ",faction:"black-knights",avatar:"🔮",color:"#8B00FF",description:"黑色骑士团的领袖，拥有绝对命令的Geass能力。可以强制指定一张牌为骗子牌。",skill:Ua,skillName:Ua.name,skillDescription:Ua.description,stats:{hp:3,difficulty:4}},Mm={id:"cc",name:"C.C.",nameEn:"C.C.",nameJa:"シーツー",faction:"neutral",avatar:"🧀",color:"#00FF88",description:"赋予鲁鲁修Geass的神秘少女，拥有不老不死的能力。有概率免疫Geass效果。",skill:Xa,skillName:Xa.name,skillDescription:Xa.description,stats:{hp:3,difficulty:2}},zm={id:"suzaku",name:"朱雀",nameEn:"Suzaku",nameJa:"スザク",faction:"britannia",avatar:"⚔️",color:"#0088FF",description:"布里塔尼亚的枢木朱雀，拥有惊人的生存能力。生命值低时更难被Geass命中。",skill:Wa,skillName:Wa.name,skillDescription:Wa.description,stats:{hp:4,difficulty:2}},Lm={id:"kallen",name:"卡莲",nameEn:"Kallen",nameJa:"カレン",faction:"black-knights",avatar:"🔥",color:"#FF0044",description:"黑色骑士团的王牌驾驶员，驾驶红莲贰式。可以一次性出多张牌进行突击。",skill:Qa,skillName:Qa.name,skillDescription:Qa.description,stats:{hp:3,difficulty:3}},Rm={lelouch:Im,cc:Mm,suzaku:zm,kallen:Lm};function ha(e){return Rm[e]}function ml(e){const t=ha(e);return t?{characterId:e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{characterId:e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function On(e){const t=ha(e.characterId);return!(!t||t.skill.type==="passive"||t.skill.maxUses>0&&e.skillUsesRemaining<=0||e.cooldownRemaining>0)}function pu(e){if(!On(e))return e;const t=ha(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses>0?e.skillUsesRemaining-1:-1,cooldownRemaining:t.skill.cooldown,isSkillActive:!0}:e}function Om(e){return{...e,cooldownRemaining:Math.max(0,e.cooldownRemaining-1),isSkillActive:!1}}function Fm(e){const t=ha(e.characterId);return t?{...e,skillUsesRemaining:t.skill.maxUses,cooldownRemaining:0,isSkillActive:!1}:{...e,skillUsesRemaining:0,cooldownRemaining:0,isSkillActive:!1}}function mu(e){return e.characterId==="kallen"&&On(e)?4:3}class Dm{constructor(){me(this,"cardSystem");me(this,"geassSystem");me(this,"state");this.cardSystem=new _m,this.geassSystem=new Pm,this.state=this.createInitialState()}createInitialState(){return{phase:"setup",liarCard:null,playerStats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},playerHand:[],aiPlayers:[{id:"ai",name:"C.C.",character:"cc",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:"朱雀",character:"suzaku",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:"卡莲",character:"kallen",hand:[],stats:{hp:3,maxHp:3,geassSuccessCount:0,geassFailCount:0},isActive:!0}],currentPlayerIndex:0,turnState:{turnNumber:0,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},lastAction:"",winner:null,geassResult:null,playerSelectedCards:[],playerCharacter:null,characterStates:new Map}}initializeGame(t,n){this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:r,ai1Cards:l,ai2Cards:a,ai3Cards:o}=this.cardSystem.dealCards(),u=this.cardSystem.setLiarCard(),d=Math.floor(Math.random()*4),p=n||["cc","suzaku","kallen"],x=new Map;x.set("player",ml(t)),x.set("ai",ml(p[0])),x.set("ai2",ml(p[1])),x.set("ai3",ml(p[2]));const i=c=>({lelouch:"鲁鲁修",cc:"C.C.",suzaku:"朱雀",kallen:"卡莲"})[c]||c,s=c=>c==="suzaku"?4:3;return this.state={...this.createInitialState(),phase:d===0?"player_turn":"ai_turn",liarCard:u,playerCharacter:t,currentPlayerIndex:d,playerHand:r,aiPlayers:[{id:"ai",name:i(p[0]),character:p[0],hand:l,stats:{hp:s(p[0]),maxHp:s(p[0]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai2",name:i(p[1]),character:p[1],hand:a,stats:{hp:s(p[1]),maxHp:s(p[1]),geassSuccessCount:0,geassFailCount:0},isActive:!0},{id:"ai3",name:i(p[2]),character:p[2],hand:o,stats:{hp:s(p[2]),maxHp:s(p[2]),geassSuccessCount:0,geassFailCount:0},isActive:!0}],playerStats:{hp:s(t),maxHp:s(t),geassSuccessCount:0,geassFailCount:0},turnState:{turnNumber:1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:0},characterStates:x},this.state}getCurrentPlayerId(){var t;return this.state.currentPlayerIndex===0?"player":((t=this.state.aiPlayers[this.state.currentPlayerIndex-1])==null?void 0:t.id)||"ai"}getNextPlayerIndex(){let t=(this.state.currentPlayerIndex+1)%4,n=0;for(;n<4;){if(t===0){if(this.state.playerStats.hp>0)return t}else{const r=this.state.aiPlayers[t-1];if(r&&r.isActive&&r.stats.hp>0)return t}t=(t+1)%4,n++}return-1}moveToNextPlayer(){const t=this.getNextPlayerIndex();if(t===-1){this.checkGameOver();return}this.state.currentPlayerIndex=t,this.state.phase=t===0?"player_turn":"ai_turn";const n=this.getCurrentPlayerId(),r=this.state.characterStates.get(n);if(r){const l=Om(r);this.state.characterStates.set(n,l)}}playCards(t,n){if(this.state.phase!=="player_turn")return!1;const r=[];for(const u of t){const d=this.state.playerHand.find(p=>p.id===u);if(!d)return!1;r.push(d)}const l=this.state.characterStates.get("player"),a=l?mu(l):1;if(t.length>a)return!1;this.state.playerHand=this.state.playerHand.filter(u=>!t.includes(u.id));const o=r.some(u=>u.rank!==n&&!u.isJoker);return this.state.turnState.playedCards={cardIds:t,claimedRank:n,actualCards:r,playerId:"player",isBluff:o},this.state.turnState.lastPlayerId="player",this.state.turnState.tableCards=[...this.state.turnState.tableCards,...r],this.state.lastAction=`玩家出了${t.length}张牌，声称是${n}`,this.state.playerHand.length===0?this.handleEmptyHand("player"):this.state.phase="challenge",!0}handleEmptyHand(t){this.state.lastAction=`${t==="player"?"玩家":t}手牌耗尽，获得胜利！`,this.state.winner=t==="player"?"player":"ai",this.state.phase="game_over"}challenge(t){const n=this.state.turnState.playedCards;if(!n)return{success:!1,isBluff:!1,targetId:"player"};const r=n.isBluff,l=n.playerId;this.state.phase="geass";const a=r?l:t;return this.executeGeass(a,t),{success:!0,isBluff:r,targetId:l}}executeGeass(t,n){const r=this.state.characterStates.get(t);let l;if(t==="player")l=this.state.playerStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);if(!u)return;l=u.stats}let a=0;(r==null?void 0:r.characterId)==="kallen"&&r.kallenCardCount&&r.kallenCardCount>=2&&(a=Math.min(.8,r.kallenCardCount*.2));const o=this.geassSystem.performGeass(t,l,(r==null?void 0:r.characterId)||null,a,this.state.turnState.geassConsecutiveMisses);if(this.state.geassResult=o,!o.hit&&o.isCounter&&n){if(n==="player")this.state.playerStats={...this.state.playerStats,hp:Math.max(0,this.state.playerStats.hp-1)},this.state.playerStats.hp<=0&&this.checkGameOver();else{const d=this.state.aiPlayers.find(p=>p.id===n);d&&(d.stats={...d.stats,hp:Math.max(0,d.stats.hp-1)},d.stats.hp<=0&&(d.isActive=!1,this.checkGameOver()))}this.state.lastAction=`${t==="player"?"玩家":t}发动枢木剑术反击！${n==="player"?"玩家":n}受到反弹伤害！`;return}if(o.hit&&o.newStats){if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}if(o.newStats.ccReviveUsed&&r&&(r.ccReviveUsed=!0),o.newStats.hp<=0){if(t!=="player"){const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.isActive=!1)}this.checkGameOver()}this.state.turnState.geassConsecutiveMisses=0,this.state.lastAction=`${t==="player"?"玩家":t}受到了Geass！${o.funnyAction||""}`}else{if(o.newStats)if(t==="player")this.state.playerStats=o.newStats;else{const u=this.state.aiPlayers.find(d=>d.id===t);u&&(u.stats=o.newStats)}this.state.turnState.geassConsecutiveMisses++,this.state.lastAction=`${t==="player"?"玩家":t}躲过了Geass！`}}useCharacterSkill(t){const n=this.state.characterStates.get(t);if(!n||!On(n))return!1;const r=pu(n);if(this.state.characterStates.set(t,r),n.characterId==="lelouch"&&this.state.liarCard){const l=["Q","K","A"],o=(l.indexOf(this.state.liarCard)+1)%l.length;this.state.liarCard=l[o],this.state.lastAction="鲁鲁修发动绝对命令，改变了骗子牌！"}else{const l=t==="player"?"玩家":t;this.state.lastAction=`${l}发动了${be(n.characterId)}的技能！`}return!0}canUseCharacterSkill(t){const n=this.state.characterStates.get(t);return n?On(n):!1}endTurn(){this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,this.state.geassResult=null,this.moveToNextPlayer(),this.checkGameOver()}resetRound(t){this.cardSystem.reset(),this.cardSystem.generateDeck(),this.cardSystem.shuffle();const{playerCards:n,ai1Cards:r,ai2Cards:l,ai3Cards:a}=this.cardSystem.dealCards(),o=this.cardSystem.setLiarCard();let u;if(t!==void 0)u=this.findNextActivePlayer(t);else{const d=this.getActivePlayerIndices();u=d[Math.floor(Math.random()*d.length)]}return this.state.playerHand=n,this.state.aiPlayers[0].hand=r,this.state.aiPlayers[1].hand=l,this.state.aiPlayers[2].hand=a,this.state.liarCard=o,this.state.phase=u===0?"player_turn":"ai_turn",this.state.currentPlayerIndex=u,this.state.playerSelectedCards=[],this.state.turnState={...this.state.turnState,turnNumber:this.state.turnState.turnNumber+1,playedCards:null,tableCards:[],lastPlayerId:null,geassConsecutiveMisses:this.state.turnState.geassConsecutiveMisses},this.state.geassResult=null,this.state.lastAction="牌局重置，重新发牌",this.state.characterStates.forEach((d,p)=>{this.state.characterStates.set(p,Fm(d))}),this.state}reset(){return this.state=this.createInitialState(),this.state}checkGameOver(){const t=this.state.playerStats.hp>0,n=this.state.aiPlayers.filter(r=>r.isActive&&r.stats.hp>0).length;return t?n===0?(this.state.winner="player",this.state.phase="game_over",!0):!1:(this.state.winner="ai",this.state.phase="game_over",!0)}getActivePlayerIndices(){const t=[];this.state.playerStats.hp>0&&t.push(0);const n=this.state.aiPlayers.find(a=>a.id==="ai3");n&&n.isActive&&n.stats.hp>0&&t.push(1);const r=this.state.aiPlayers.find(a=>a.id==="ai2");r&&r.isActive&&r.stats.hp>0&&t.push(2);const l=this.state.aiPlayers.find(a=>a.id==="ai");return l&&l.isActive&&l.stats.hp>0&&t.push(3),t}findNextActivePlayer(t){const n=this.getActivePlayerIndices();if(n.length===0)return 0;if(n.includes(t))return t;for(let r=1;r<=4;r++){const l=(t+r)%4;if(n.includes(l))return l}return n[0]}getState(){return JSON.parse(JSON.stringify(this.state))}getPlayerHand(){return[...this.state.playerHand]}getAIHand(t){const n=this.state.aiPlayers.find(r=>r.id===t);return n?[...n.hand]:[]}getLiarCard(){return this.state.liarCard}getCharacterState(t){return this.state.characterStates.get(t)}toggleCardSelection(t){if(!this.state.playerHand.some(l=>l.id===t))return;const r=this.state.playerSelectedCards.indexOf(t);if(r>-1)this.state.playerSelectedCards.splice(r,1);else{const l=this.state.characterStates.get("player"),a=l?this.getMaxPlayCount(l):1;this.state.playerSelectedCards.length<a&&this.state.playerSelectedCards.push(t)}}clearCardSelection(){this.state.playerSelectedCards=[]}getMaxPlayCount(t){return t.characterId==="kallen"?4:3}playerPlayCards(){if(this.state.playerSelectedCards.length===0)throw new Error("未选择任何牌");if(this.state.phase!=="player_turn")throw new Error("当前不是玩家回合");const t=this.state.liarCard||"Q";if(!this.playCards(this.state.playerSelectedCards,t))throw new Error("出牌失败");return this.state.playerSelectedCards=[],this.getState()}aiPlayCards(t){if(this.state.phase!=="ai_turn")return this.getState();const n=this.state.aiPlayers.find(o=>o.id===t);if(!n||n.hand.length===0)return this.getState();const r=Math.min(n.hand.length,Math.floor(Math.random()*2)+1),l=n.hand.slice(0,r).map(o=>o.id),a=this.state.liarCard||"Q";return this.aiPlayCardsInternal(t,l,a),this.getState()}aiPlayCardsInternal(t,n,r){if(this.state.phase!=="ai_turn")return!1;const l=this.state.aiPlayers.find(p=>p.id===t);if(!l)return!1;const a=[];for(const p of n){const x=l.hand.find(i=>i.id===p);if(!x)return!1;a.push(x)}const o=this.state.characterStates.get(t),u=o?mu(o):1;if(n.length>u)return!1;l.hand=l.hand.filter(p=>!n.includes(p.id));const d=a.some(p=>p.rank!==r&&!p.isJoker);return this.state.turnState.playedCards={cardIds:n,claimedRank:r,actualCards:a,playerId:t,isBluff:d},this.state.turnState.lastPlayerId=t,this.state.turnState.tableCards=[...this.state.turnState.tableCards,...a],this.state.lastAction=`${l.name}出了${n.length}张牌，声称是${r}`,l.hand.length===0?this.handleEmptyHand(t):this.state.phase="challenge",!0}playerChallengeDecision(t){return t?(this.challenge("player"),this.getState()):this.endChallengePhase()}aiChallengeDecision(t){return this.challenge(t),this.getState()}canPlayerUseSkill(t){const n=this.state.characterStates.get(t);return n?On(n):!1}lelouchChangeLiarCard(t){const n=this.state.characterStates.get("player");if(!n||n.characterId!=="lelouch")throw new Error("只有鲁鲁修可以使用此技能");if(!On(n))throw new Error("技能冷却中或已使用");const r=pu(n);return this.state.characterStates.set("player",r),this.state.liarCard=t,this.state.lastAction=`鲁鲁修发动绝对命令！骗子牌变为 ${t}`,this.getState()}enterChallengePhase(){return this.state.phase="challenge",this.state.lastAction="进入质疑阶段",this.getState()}endChallengePhase(){var o;this.state.turnState.playedCards&&this.state.turnState.tableCards.push(...this.state.turnState.playedCards.actualCards);const t=(o=this.state.turnState.playedCards)==null?void 0:o.playerId;let r=((t==="player"?0:t==="ai3"?1:t==="ai2"?2:t==="ai"?3:0)+1)%4,l=0;for(;l<4;){if(r===0){if(this.state.playerStats.hp>0)break}else{const u=r===1?2:r===2?1:0,d=this.state.aiPlayers[u];if(d&&d.isActive&&d.stats.hp>0)break}r=(r+1)%4,l++}return this.state.currentPlayerIndex=r,this.state.phase=r===0?"player_turn":"ai_turn",this.state.turnState.turnNumber++,this.state.turnState.playedCards=null,console.log(`[endChallengePhase] 出牌者: ${t}, 下一个玩家: ${r===0?"玩家":r===1?"AI3(卡莲)":r===2?"AI2(朱雀)":"AI1(C.C.)"}(索引${r})`),this.state.lastAction="质疑阶段结束，回合继续",this.getState()}}const Hm="code-geass-game",hu={save:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Failed to save to localStorage:",n)}},load:e=>{try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Failed to load from localStorage:",t),null}},clear:e=>{try{e?localStorage.removeItem(e):localStorage.removeItem(Hm)}catch(t){console.error("Failed to clear localStorage:",t)}}},gu=[{id:0,emoji:"😵",description:"突然跳起了奇怪的舞蹈",soundType:"sfx-funny-dance"},{id:1,emoji:"🙈",description:"开始模仿猴子叫",soundType:"sfx-funny-monkey"},{id:2,emoji:"🤪",description:'不停地说"披萨"',soundType:"sfx-funny-pizza"},{id:3,emoji:"😂",description:"无法控制地大笑30秒",soundType:"sfx-funny-laugh"},{id:4,emoji:"🐔",description:"学鸡打鸣",soundType:"sfx-funny-chicken"},{id:5,emoji:"🎭",description:"开始背诵中二台词",soundType:"sfx-funny-chunibyo"},{id:6,emoji:"🍕",description:"声称自己是披萨的化身",soundType:"sfx-funny-pizza"},{id:7,emoji:"🦋",description:"追逐不存在的蝴蝶",soundType:"sfx-funny-butterfly"}],Bm=e=>e==="player"?0:e==="ai"?3:e==="ai2"?2:e==="ai3"?1:0,$m=e=>e===0?"player":e===1?"ai3":e===2?"ai2":e===3?"ai":"player",Vm=(e,t)=>{for(let n=0;n<4;n++){const r=(e+n)%4,l=$m(r);if(l==="player"){if(t.playerStats.hp>0)return r}else{const a=t.aiPlayers.find(o=>o.id===l);if(a&&a.isActive&&a.stats.hp>0)return r}}return e},Gm=(e,t,n)=>{var o;const r=(o=e.turnState.playedCards)==null?void 0:o.playerId;let l=t??null;if(!l&&r)if(r==="player")l=be(n??void 0);else{const u=e.aiPlayers.find(d=>d.id===r);l=(u==null?void 0:u.name)??null}if(!l)return console.error("[determineLoserId] 无法确定受罚者"),{loserId:null,actualLoserName:null};if(l===be(n??void 0))return{loserId:"player",actualLoserName:l};const a=e.aiPlayers.find(u=>u.name===l);return a?{loserId:a.id,actualLoserName:l}:(console.error(`[determineLoserId] 找不到AI: ${l}`),{loserId:null,actualLoserName:l})},Um=(e,t,n,r)=>{ue("geass-hit");const l=gu[Math.floor(Math.random()*gu.length)];r(l),ue(l.soundType),n(`${t}受到Geass！`),n(`突然${l.description}`),n(`Geass命中！${t}HP-1`)},Xm=(e,t,n)=>{ue("geass-miss"),e.isRevived?(n(`${t}闪避了Geass！`),n(`🔄 ${e.message}`)):e.isCounter?(n(`${t}闪避了Geass！`),n(`⚔️ ${e.message}`),n("💥 反击生效！质疑者受到反弹伤害！")):n(`${t}闪避了Geass！`)},Wm=(e,t)=>{setTimeout(()=>{sn(e==="player"?"victory":"defeat"),t("result")},2e3)},Qm=(e,t,n,r,l,a,o,u,d)=>{var y;let x=(Bm(t)+1)%4;x=Vm(x,n);const i=e.resetRound(x);a(i),o([]);const s=i.currentPlayerIndex===0,c={1:2,2:1,3:0},g=s?be(r??void 0):(y=i.aiPlayers[c[i.currentPlayerIndex]])==null?void 0:y.name;l(`【第${i.turnState.turnNumber}回合】骗子牌是${i.liarCard}`),l(`${g}先手！`),u(!1),s||setTimeout(()=>{var _;(_=d.current)==null||_.call(d)},1500)},Ym=({gameEngineRef:e,selectedCharacter:t,addLog:n,setGameState:r,setCurrentFunnyAction:l,setSelectedCards:a,setIsProcessing:o,setCurrentScreen:u,aiTurnRef:d})=>I.useCallback((p,x,i,s)=>{if(r(p),p.geassResult){const g=s||(i||"对手");p.geassResult.hit?Um(p.geassResult,g,n,l):Xm(p.geassResult,g,n)}if(p.phase==="game_over"){Wm(p.winner,u);return}setTimeout(()=>{l(null);const c=e.current;if(!c)return;const g=c.getState(),{loserId:y,actualLoserName:_}=Gm(g,s,t);if(!y||!_){o(!1);return}Qm(c,y,g,t,n,r,a,o,d)},2500)},[e,t,n,r,l,a,o,u,d]),Km=()=>{const[e,t]=I.useState("main-menu"),[n,r]=I.useState(null),[l,a]=I.useState(1),[o,u]=I.useState(["cc","suzaku","kallen"]),[d,p]=I.useState({}),x=I.useRef(null),[i,s]=I.useState(null),[c,g]=I.useState([]),[y,_]=I.useState(null),[f,h]=I.useState([]),[v,w]=I.useState(!1),[C,b]=I.useState({isThinking:!1,aiId:null}),N=I.useRef(null);I.useEffect(()=>((async()=>{try{await xt.preload(),console.log("音效预加载完成");const T=hu.load("gameSettings");T&&(xt.setBGMVolume(T.musicVolume??.5),xt.setSFXVolume(T.soundVolume??.7)),sn("main-menu")}catch(T){console.warn("初始化失败:",T)}})(),()=>{xm()}),[]),I.useEffect(()=>{const O=xt.getStatus(),T={soundEnabled:O.enabled,musicEnabled:!0,soundVolume:O.sfxVolume,musicVolume:O.bgmVolume};hu.save("gameSettings",T)},[]);const k=I.useCallback(O=>{g(T=>[...T,O])},[]),M=Ym({gameEngineRef:x,selectedCharacter:n,addLog:k,setGameState:s,setCurrentFunnyAction:_,setSelectedCards:h,setIsProcessing:w,setCurrentScreen:O=>t(O),aiTurnRef:N}),L=I.useCallback((O,T)=>{var we,at,je,Lt;console.log("[enterChallengePhase] 进入质疑阶段");const F=(we=T.turnState.playedCards)==null?void 0:we.playerId;if(!F){console.error("[enterChallengePhase] 没有出牌记录");return}const G=(oe=>oe==="player"?0:oe==="ai"?3:oe==="ai2"?2:oe==="ai3"?1:0)(F);let U=(G+1)%4,Z=0;for(;Z<3;){if(U===G){U=(U+1)%4;continue}if(U===0){console.log("[enterChallengePhase] 轮到玩家质疑，等待玩家决策");const Oe=O.enterChallengePhase();s(Oe),w(!1),k("等待玩家决策...");return}const oe=U===1?2:U===2?1:0,K=T.aiPlayers[oe];if(!K||!K.isActive||K.stats.hp<=0){console.log("[enterChallengePhase] AI已淘汰，跳过:",K==null?void 0:K.name),U=(U+1)%4,Z++;continue}const kn=Math.random()<.3;if(console.log("[enterChallengePhase] AI决策:",{aiName:K.name,shouldChallenge:kn}),kn){ue("challenge");const Oe=F==="player"?be(n):((at=T.aiPlayers.find(ke=>ke.id===F))==null?void 0:at.name)||F;k(`${K.name}向${Oe}发起质疑！`);const pt=O.aiChallengeDecision(K.id),mt=T.turnState.playedCards,Rt=mt?mt.actualCards.some(ke=>ke.rank!==mt.claimedRank&&!ke.isJoker):!1;k(Rt?`质疑成功！${Oe}在撒谎！`:`质疑失败！${Oe}没有撒谎！`);const ht=Rt?F:K.id,Sn=ht==="player"?be(n):((je=pt.aiPlayers.find(ke=>ke.id===ht))==null?void 0:je.name)||ht;s(pt),M(pt,K.name,Oe,Sn);return}else k(`${K.name}选择不质疑`);U=(U+1)%4,Z++}console.log("[enterChallengePhase] 所有人都未质疑，继续下一回合"),k("无人质疑，回合继续");const $=O.endChallengePhase();s($);const V={1:2,2:1,3:0},pe=$.currentPlayerIndex===0?be(n):(Lt=$.aiPlayers[V[$.currentPlayerIndex]])==null?void 0:Lt.name;k(`【第${$.turnState.turnNumber}回合】骗子牌是${$.liarCard}`),k(`${pe}先手！`),$.currentPlayerIndex===0?w(!1):setTimeout(()=>{var oe;(oe=N.current)==null||oe.call(N)},ln.TURN_SWITCH)},[k,n,M]),Q=I.useCallback(()=>{if(console.log("[handleAITurn] 开始执行"),!x.current){console.log("[handleAITurn] 游戏引擎不存在，返回");return}const O=x.current,T=O.getState();if(console.log("[handleAITurn] 当前状态:",{phase:T.phase,currentPlayerIndex:T.currentPlayerIndex}),T.phase==="player_turn"||T.phase==="game_over"){console.log("[handleAITurn] 不是AI回合，跳过");return}const B={1:2,2:1,3:0}[T.currentPlayerIndex];if(B===void 0||B<0||B>=T.aiPlayers.length){console.log("[handleAITurn] AI索引无效:",T.currentPlayerIndex,"->",B);return}const G=T.aiPlayers[B];if(!G){console.log("[handleAITurn] AI不存在");return}const U=G.id;if(!G.isActive||G.stats.hp<=0){if(console.log("[handleAITurn] AI已淘汰，跳过:",G.name),T.aiPlayers.filter(V=>V.isActive&&V.stats.hp>0).length===0&&T.playerStats.hp>0){console.log("[handleAITurn] 只剩玩家存活，玩家获胜"),T.winner="player",T.phase="game_over",s({...T}),k("游戏结束！玩家获胜！"),w(!1);return}const $=(T.currentPlayerIndex+1)%4;T.currentPlayerIndex=$,s({...T}),$!==0?setTimeout(()=>{var V;return(V=N.current)==null?void 0:V.call(N)},ln.TURN_SWITCH):T.playerStats.hp<=0&&setTimeout(()=>{var V;return(V=N.current)==null?void 0:V.call(N)},ln.TURN_SWITCH);return}w(!0),ue("turn-start"),k(`${G.name} 的回合...`),b({isThinking:!0,aiId:U}),setTimeout(()=>{var Z;try{console.log("[handleAITurn] AI开始出牌:",G.name),b({isThinking:!1,aiId:null});const $=O.aiPlayCards(U);console.log("[handleAITurn] AI出牌完成, 新状态:",{phase:$.phase,playedBy:(Z=$.turnState.playedCards)==null?void 0:Z.playerId}),s($);const V=$.turnState.playedCards;if(V){const pe=V.cardIds.length,we=V.claimedRank;k(`${G.name}出了${pe}张牌，声称是${we}`)}setTimeout(()=>{console.log("[handleAITurn] 进入质疑阶段"),L(O,$)},ln.PLAY_TO_CHALLENGE)}catch($){console.error("AI出牌错误:",$),w(!1),b({isThinking:!1,aiId:null})}},ln.THINKING)},[k,L]);I.useEffect(()=>{N.current=Q},[Q]);const Ve=I.useCallback(()=>{ue("button-click"),t("character-select")},[]),Le=I.useCallback(()=>{ue("button-click"),t("settings")},[]),Re=I.useCallback(()=>{ue("button-click"),t("help")},[]),A=I.useCallback((O,T)=>{ue("character-select"),r(O),a(T||Math.floor(Math.random()*4)+1)},[]),ve=I.useCallback(()=>{var V;if(!n)return;ue("button-click");const F=["lelouch","cc","suzaku","kallen"].filter(pe=>pe!==n).sort(()=>Math.random()-.5);u(F);const B={};F.forEach(pe=>{B[pe]=Math.floor(Math.random()*4)+1}),p(B),x.current=new Dm;const G=x.current.initializeGame(n,F);s(G),h([]);const U=G.currentPlayerIndex===0,Z={1:2,2:1,3:0},$=U?be(n):(V=G.aiPlayers[Z[G.currentPlayerIndex]])==null?void 0:V.name;g(["游戏开始！",`【第1回合】骗子牌是${G.liarCard}`,`${$}先手！`]),t("game-table"),sn("game-normal"),U||setTimeout(()=>{Q()},1500)},[n,Q]),Ge=I.useCallback(()=>{ue("button-click"),t("main-menu"),r(null)},[]),E=I.useCallback(()=>{ue("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),_(null),sn("main-menu")},[]),z=I.useCallback(O=>{if(!x.current||v)return;const T=x.current,F=T.getState();if(console.log("[handleToggleCardSelection] 当前阶段:",F.phase,"是否是玩家回合:",F.phase==="player_turn"),F.phase!=="player_turn"){console.log("[handleToggleCardSelection] 不是玩家回合，无法选择牌");return}T.toggleCardSelection(O);const B=T.getState();console.log("[handleToggleCardSelection] 选中状态更新:",B.playerSelectedCards),h(B.playerSelectedCards),ue("button-click")},[v]),R=I.useCallback(()=>{if(!x.current||f.length===0||v)return;w(!0),ue("card-play");const O=x.current;try{const T=O.playerPlayCards();s(T),h([]);const F=be(n),B=T.turnState.playedCards;if(B){const G=B.cardIds.length,U=B.claimedRank;k(`${F}出了${G}张牌，声称是${U}`)}setTimeout(()=>{L(O,T)},ln.PLAY_TO_CHALLENGE)}catch(T){console.error("出牌错误:",T),w(!1)}},[f,v,k,n,L]),Y=I.useCallback(()=>{var we,at;if(!x.current||v)return;w(!0),ue("challenge");const O=x.current,T=O.getState(),F=T.turnState.playedCards,B=F==null?void 0:F.playerId,G=be(n),U=B==="player"?G:((we=T.aiPlayers.find(je=>je.id===B))==null?void 0:we.name)||B;k(`${G}向${U}发起质疑！`);const Z=O.playerChallengeDecision(!0),$=F?F.actualCards.some(je=>je.rank!==F.claimedRank&&!je.isJoker):!1;k($?`质疑成功！${U}在撒谎！`:`质疑失败！${U}没有撒谎！`);const V=$?B:"player",pe=V==="player"?G:((at=T.aiPlayers.find(je=>je.id===V))==null?void 0:at.name)||V;s(Z),M(Z,G,U,pe)},[v,k,n,M]),ae=I.useCallback(()=>{var we,at,je,Lt;if(!x.current||v)return;ue("button-click");const O=x.current,T=O.getState(),F=(we=T.turnState.playedCards)==null?void 0:we.playerId,B=be(n);k(`${B}选择不质疑`);const U=(oe=>oe==="player"?0:oe==="ai"?3:oe==="ai2"?2:oe==="ai3"?1:0)(F||"player");let Z=1,$=0;for(;$<3&&Z!==U;){const oe=Z===1?2:Z===2?1:0,K=T.aiPlayers[oe];if(!K||!K.isActive||K.stats.hp<=0){console.log("[handlePass] AI已淘汰，跳过:",K==null?void 0:K.name),Z=(Z+1)%4,$++;continue}if(Math.random()<.3){ue("challenge");const Oe=F==="player"?B:((at=T.aiPlayers.find(ke=>ke.id===F))==null?void 0:at.name)||F;k(`${K.name}向${Oe}发起质疑！`);const pt=O.aiChallengeDecision(K.id),mt=T.turnState.playedCards,Rt=mt?mt.actualCards.some(ke=>ke.rank!==mt.claimedRank&&!ke.isJoker):!1;k(Rt?`质疑成功！${Oe}在撒谎！`:`质疑失败！${Oe}没有撒谎！`);const ht=Rt?F:K.id,Sn=ht==="player"?B:((je=pt.aiPlayers.find(ke=>ke.id===ht))==null?void 0:je.name)||ht;s(pt),M(pt,K.name,Oe,Sn);return}else k(`${K.name}选择不质疑`);Z=(Z+1)%4,$++}k("无人质疑，回合继续");const V=O.endChallengePhase();s(V);const pe=V.currentPlayerIndex;if(pe===0){k(`【第${V.turnState.turnNumber}回合】骗子牌是${V.liarCard}`);const oe=pe===0?B:(Lt=T.aiPlayers[pe-1])==null?void 0:Lt.name;k(`${oe}先手！`),w(!1)}else setTimeout(()=>{Q()},ln.TURN_SWITCH)},[v,k,n,M,Q]),zt=I.useCallback(O=>{if(!x.current||n!=="lelouch")return;const T=x.current;if(!T.canPlayerUseSkill("player")){k("❌ 绝对命令使用次数已耗尽（每局限1次）");return}ue("geass-activate");const F=T.lelouchChangeLiarCard(O);s(F),k(`鲁鲁修发动绝对命令！骗子牌变为 ${O}`),k("⚠️ 绝对命令已使用，本局无法再次使用")},[n,k]),Ue=I.useCallback(()=>{ue("button-click"),t("character-select"),r(null),s(null),g([]),h([]),_(null),sn("main-menu")},[]),rn=I.useCallback(()=>{ue("button-click"),t("main-menu"),r(null),s(null),g([]),h([]),_(null),sn("main-menu")},[]),lt=()=>{var O,T,F,B;switch(e){case"main-menu":return m.jsx(uu,{onStart:Ve,onSettings:Le,onHelp:Re});case"character-select":return m.jsx(pm,{characters:Br,selectedId:n,selectedAvatar:l,onSelect:A,onConfirm:ve,onBack:Ge});case"game-table":return i?m.jsx(hm,{gameState:i,selectedCards:f,selectedCharacter:n,selectedAvatar:l,aiCharacters:o,aiAvatars:d,onToggleCardSelection:z,onConfirmPlay:R,onPass:ae,onChallenge:Y,onBackToMenu:E,onLelouchSkill:zt,gameLog:c,funnyAction:y,isProcessing:v,canUseSkill:((O=x.current)==null?void 0:O.canPlayerUseSkill("player"))??!0,aiThinkingState:C}):null;case"result":{const G=(i==null?void 0:i.winner)==="player",U=((T=i==null?void 0:i.playerStats)==null?void 0:T.geassSuccessCount)||0,Z=((F=i==null?void 0:i.aiPlayers)==null?void 0:F.reduce((V,pe)=>{var we;return V+(((we=pe.stats)==null?void 0:we.geassSuccessCount)||0)},0))||0,$=((B=i==null?void 0:i.turnState)==null?void 0:B.turnNumber)||0;return m.jsx(gm,{isWin:G,playerScore:U,opponentScore:Z,turnNumber:$,onRestart:Ue,onMainMenu:rn})}case"settings":return kt();case"help":return Wr();default:return m.jsx(uu,{onStart:Ve,onSettings:Le,onHelp:Re})}},kt=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"设置"}),m.jsxs("div",{className:"cg-settings-content",children:[m.jsx("p",{style:{color:"#a1a1aa",textAlign:"center"},children:"游戏采用智能动态AI系统，无需手动设置难度"}),m.jsx("p",{style:{color:"#666",textAlign:"center",fontSize:"0.9rem",marginTop:"0.5rem"},children:"AI将根据局势自动调整策略"}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]}),Wr=()=>m.jsxs("div",{className:"cg-placeholder-screen",children:[m.jsx("h2",{children:"游戏帮助"}),m.jsxs("div",{className:"cg-help-content",children:[m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🎮 游戏规则"}),m.jsxs("ul",{children:[m.jsx("li",{children:"每人初始5张牌（Q/K/A + 小丑牌），轮流出牌"}),m.jsx("li",{children:'每回合随机指定一张"骗子牌"（Q/K/A）'}),m.jsxs("li",{children:[m.jsx("strong",{children:"出牌："}),"选择1-3张牌打出，自动声称是骗子牌"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"质疑："}),"下家可以选择相信或质疑"]}),m.jsx("li",{children:"质疑后翻牌验证："}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"确实是"}),"骗子牌 → 质疑者撒谎，受惩罚"]}),m.jsxs("li",{children:["• 出的牌",m.jsx("strong",{children:"不是"}),"骗子牌 → 你撒谎，受惩罚"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"惩罚："}),"触发Geass判定，命中则HP-1，然后牌局重置"]}),m.jsx("li",{children:"HP归零被淘汰，最后存活者获胜"}),m.jsx("li",{children:"手牌出完且未被质疑成功，直接获胜"})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"👤 角色技能详解"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#d4af37"},children:"鲁鲁修 · 绝对命令"}),m.jsx("br",{}),m.jsx("small",{children:"每局限用1次，强制将当前骗子牌改为任意点数（Q/K/A）。掌控全局的王者技能。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#22c55e"},children:"C.C. · Code之力"}),m.jsx("br",{}),m.jsx("small",{children:"首次受到致命伤害（HP归零）时，50%概率复活并免疫本次伤害。不老不死的神秘力量，每局限1次。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#3b82f6"},children:"朱雀 · 枢木剑术"}),m.jsx("br",{}),m.jsx("small",{children:"受到Geass判定时：15%基础闪避率 + 25%概率完美闪避并反击（让攻击者承受本次伤害）。骑士的战斗技巧。"})]}),m.jsxs("li",{children:[m.jsx("strong",{style:{color:"#dc2626"},children:"卡莲 · 红莲二式"}),m.jsx("br",{}),m.jsx("small",{children:"可出1-4张牌。出2张及以上时，若被质疑且质疑失败（撒谎被揭穿），对质疑者的Geass命中率 = 20% × 出牌张数（最高80%）。高风险高回报的爆发战术！"})]})]})]}),m.jsxs("section",{className:"cg-help-section",children:[m.jsx("h3",{children:"🃏 特殊牌"}),m.jsx("ul",{children:m.jsxs("li",{children:[m.jsx("strong",{children:"小丑牌（JOKER）"}),"：万能牌，可以当作任意骗子牌使用"]})})]}),m.jsx("button",{onClick:()=>t("main-menu"),className:"cg-menu-button",children:"返回"})]})]});return m.jsxs("div",{className:"cg-app",children:[lt(),m.jsx("style",{children:`
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
      `})]})},Jm=Ya.createRoot(document.getElementById("root"));Jm.render(m.jsx(Kd.StrictMode,{children:m.jsx(Km,{})}));
//# sourceMappingURL=index-BQR6NBu6.js.map
