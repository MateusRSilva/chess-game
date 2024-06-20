function iS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),oS=Symbol.for("react.portal"),aS=Symbol.for("react.fragment"),lS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),cS=Symbol.for("react.provider"),fS=Symbol.for("react.context"),dS=Symbol.for("react.forward_ref"),hS=Symbol.for("react.suspense"),pS=Symbol.for("react.memo"),mS=Symbol.for("react.lazy"),am=Symbol.iterator;function gS(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ty=Object.assign,Py={};function as(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||xy}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ny(){}Ny.prototype=as.prototype;function Qd(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||xy}var Xd=Qd.prototype=new Ny;Xd.constructor=Qd;Ty(Xd,as.prototype);Xd.isPureReactComponent=!0;var lm=Array.isArray,Ry=Object.prototype.hasOwnProperty,Jd={current:null},Ay={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ry.call(e,r)&&!Ay.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Bo,type:t,key:s,ref:o,props:i,_owner:Jd.current}}function vS(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function yS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yS(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case oS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fc(o,0):r,lm(i)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),Ga(i,e,n,"",function(u){return u})):i!=null&&(Zd(i)&&(i=vS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+fc(s,a);o+=Ga(s,e,n,l,i)}else if(l=gS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+fc(s,a++),o+=Ga(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _S(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ka={transition:null},wS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Jd};ce.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=as;ce.Fragment=aS;ce.Profiler=uS;ce.PureComponent=Qd;ce.StrictMode=lS;ce.Suspense=hS;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ty({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ry.call(e,l)&&!Ay.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Bo,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:fS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cS,_context:t},t.Consumer=t};ce.createElement=Oy;ce.createFactory=function(t){var e=Oy.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:dS,render:t}};ce.isValidElement=Zd;ce.lazy=function(t){return{$$typeof:mS,_payload:{_status:-1,_result:t},_init:_S}};ce.memo=function(t,e){return{$$typeof:pS,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return ht.current.useCallback(t,e)};ce.useContext=function(t){return ht.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ce.useEffect=function(t,e){return ht.current.useEffect(t,e)};ce.useId=function(){return ht.current.useId()};ce.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return ht.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ce.useRef=function(t){return ht.current.useRef(t)};ce.useState=function(t){return ht.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return ht.current.useTransition()};ce.version="18.2.0";(function(t){t.exports=ce})(N);const fn=sS(N.exports),ff=iS({__proto__:null,default:fn},[N.exports]);var df={},Ly={exports:{}},Pt={},Dy={exports:{}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,T){var O=E.length;E.push(T);e:for(;0<O;){var D=O-1>>>1,k=E[D];if(0<i(k,T))E[D]=T,E[O]=k,O=D;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],O=E.pop();if(O!==T){E[0]=O;e:for(var D=0,k=E.length,P=k>>>1;D<P;){var U=2*(D+1)-1,W=E[U],_=U+1,Y=E[_];if(0>i(W,O))_<k&&0>i(Y,W)?(E[D]=Y,E[_]=O,D=_):(E[D]=W,E[U]=O,D=U);else if(_<k&&0>i(Y,O))E[D]=Y,E[_]=O,D=_;else break e}}return T}function i(E,T){var O=E.sortIndex-T.sortIndex;return O!==0?O:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,d=3,h=!1,m=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=E)r(u),T.sortIndex=T.expirationTime,e(l,T);else break;T=n(u)}}function b(E){if(w=!1,v(E),!m)if(n(l)!==null)m=!0,x(A);else{var T=n(u);T!==null&&S(b,T.startTime-E)}}function A(E,T){m=!1,w&&(w=!1,g(F),F=-1),h=!0;var O=d;try{for(v(T),c=n(l);c!==null&&(!(c.expirationTime>T)||E&&!pe());){var D=c.callback;if(typeof D=="function"){c.callback=null,d=c.priorityLevel;var k=D(c.expirationTime<=T);T=t.unstable_now(),typeof k=="function"?c.callback=k:c===n(l)&&r(l),v(T)}else r(l);c=n(l)}if(c!==null)var P=!0;else{var U=n(u);U!==null&&S(b,U.startTime-T),P=!1}return P}finally{c=null,d=O,h=!1}}var I=!1,M=null,F=-1,V=5,j=-1;function pe(){return!(t.unstable_now()-j<V)}function we(){if(M!==null){var E=t.unstable_now();j=E;var T=!0;try{T=M(!0,E)}finally{T?ze():(I=!1,M=null)}}else I=!1}var ze;if(typeof p=="function")ze=function(){p(we)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,y=ie.port2;ie.port1.onmessage=we,ze=function(){y.postMessage(null)}}else ze=function(){C(we,0)};function x(E){M=E,I||(I=!0,ze())}function S(E,T){F=C(function(){E(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,x(A))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(E){switch(d){case 1:case 2:case 3:var T=3;break;default:T=d}var O=d;d=T;try{return E()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=d;d=E;try{return T()}finally{d=O}},t.unstable_scheduleCallback=function(E,T,O){var D=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?D+O:D):O=D,E){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=O+k,E={id:f++,callback:T,priorityLevel:E,startTime:O,expirationTime:k,sortIndex:-1},O>D?(E.sortIndex=O,e(u,E),n(l)===null&&E===n(u)&&(w?(g(F),F=-1):w=!0,S(b,O-D))):(E.sortIndex=k,e(l,E),m||h||(m=!0,x(A))),E},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(E){var T=d;return function(){var O=d;d=T;try{return E.apply(this,arguments)}finally{d=O}}}})(My);(function(t){t.exports=My})(Dy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=N.exports,Tt=Dy.exports;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uy=new Set,oo={};function si(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(oo[t]=e,t=0;t<e.length;t++)Uy.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=Object.prototype.hasOwnProperty,ES=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},fm={};function SS(t){return hf.call(fm,t)?!0:hf.call(cm,t)?!1:ES.test(t)?fm[t]=!0:(cm[t]=!0,!1)}function kS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CS(t,e,n,r){if(e===null||typeof e>"u"||kS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eh,th);nt[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eh,th);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eh,th);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function nh(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CS(e,n,i,r)&&(n=null),r||i===null?SS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),zy=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),jy=Symbol.for("react.offscreen"),dm=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,dc;function Ls(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var hc=!1;function pc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function bS(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=pc(t.type,!1),t;case 11:return t=pc(t.type.render,!1),t;case 1:return t=pc(t.type,!0),t;default:return""}}function vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case pf:return"Profiler";case rh:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zy:return(t.displayName||"Context")+".Consumer";case $y:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sh:return e=t.displayName||null,e!==null?e:vf(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return vf(t(e))}catch{}}return null}function IS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xS(t){var e=Wy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=xS(t))}function By(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yf(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hy(t,e){e=e.checked,e!=null&&nh(t,"checked",e,!1)}function _f(t,e){Hy(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&wf(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wf(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Ds(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Vy(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,Ky=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TS=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){TS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function Yy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function qy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PS=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kf(t,e){if(e){if(PS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,Li=null,Di=null;function vm(t){if(t=Go(t)){if(typeof If!="function")throw Error($(280));var e=t.stateNode;e&&(e=yu(e),If(t.stateNode,t.type,e))}}function Qy(t){Li?Di?Di.push(t):Di=[t]:Li=t}function Xy(){if(Li){var t=Li,e=Di;if(Di=Li=null,vm(t),e)for(t=0;t<e.length;t++)vm(e[t])}}function Jy(t,e){return t(e)}function Zy(){}var mc=!1;function e_(t,e,n){if(mc)return t(e,n);mc=!0;try{return Jy(t,e,n)}finally{mc=!1,(Li!==null||Di!==null)&&(Zy(),Xy())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var xf=!1;if(Sn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){xf=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{xf=!1}function NS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Ws=!1,hl=null,pl=!1,Tf=null,RS={onError:function(t){Ws=!0,hl=t}};function AS(t,e,n,r,i,s,o,a,l){Ws=!1,hl=null,NS.apply(RS,arguments)}function OS(t,e,n,r,i,s,o,a,l){if(AS.apply(this,arguments),Ws){if(Ws){var u=hl;Ws=!1,hl=null}else throw Error($(198));pl||(pl=!0,Tf=u)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ym(t){if(oi(t)!==t)throw Error($(188))}function LS(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ym(i),t;if(s===r)return ym(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function n_(t){return t=LS(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var i_=Tt.unstable_scheduleCallback,_m=Tt.unstable_cancelCallback,DS=Tt.unstable_shouldYield,MS=Tt.unstable_requestPaint,Fe=Tt.unstable_now,FS=Tt.unstable_getCurrentPriorityLevel,ah=Tt.unstable_ImmediatePriority,s_=Tt.unstable_UserBlockingPriority,ml=Tt.unstable_NormalPriority,US=Tt.unstable_LowPriority,o_=Tt.unstable_IdlePriority,pu=null,on=null;function $S(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:WS,zS=Math.log,jS=Math.LN2;function WS(t){return t>>>=0,t===0?32:31-(zS(t)/jS|0)|0}var va=64,ya=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ms(a):(s&=o,s!==0&&(r=Ms(s)))}else o=n&~i,o!==0?r=Ms(o):s!==0&&(r=Ms(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function BS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=BS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a_(){var t=va;return va<<=1,(va&4194240)===0&&(va=64),t}function gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function VS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function l_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var u_,uh,c_,f_,d_,Nf=!1,_a=[],Jn=null,Zn=null,er=null,uo=new Map,co=new Map,Wn=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Go(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KS(t,e,n,r,i){switch(e){case"focusin":return Jn=Es(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=Es(Zn,t,e,n,r,i),!0;case"mouseover":return er=Es(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,Es(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,Es(co.get(s)||null,t,e,n,r,i)),!0}return!1}function h_(t){var e=Or(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bf=r,n.target.dispatchEvent(r),bf=null}else return e=Go(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Em(t,e,n){Ya(t)&&n.delete(e)}function YS(){Nf=!1,Jn!==null&&Ya(Jn)&&(Jn=null),Zn!==null&&Ya(Zn)&&(Zn=null),er!==null&&Ya(er)&&(er=null),uo.forEach(Em),co.forEach(Em)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,YS)))}function fo(t){function e(i){return Ss(i,t)}if(0<_a.length){Ss(_a[0],t);for(var n=1;n<_a.length;n++){var r=_a[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Ss(Jn,t),Zn!==null&&Ss(Zn,t),er!==null&&Ss(er,t),uo.forEach(e),co.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)h_(n),n.blockedOn===null&&Wn.shift()}var Mi=An.ReactCurrentBatchConfig,vl=!0;function qS(t,e,n,r){var i=me,s=Mi.transition;Mi.transition=null;try{me=1,ch(t,e,n,r)}finally{me=i,Mi.transition=s}}function QS(t,e,n,r){var i=me,s=Mi.transition;Mi.transition=null;try{me=4,ch(t,e,n,r)}finally{me=i,Mi.transition=s}}function ch(t,e,n,r){if(vl){var i=Rf(t,e,n,r);if(i===null)Ic(t,e,r,yl,n),wm(t,r);else if(KS(i,t,e,n,r))r.stopPropagation();else if(wm(t,r),e&4&&-1<GS.indexOf(t)){for(;i!==null;){var s=Go(i);if(s!==null&&u_(s),s=Rf(t,e,n,r),s===null&&Ic(t,e,r,yl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ic(t,e,r,null,n)}}var yl=null;function Rf(t,e,n,r){if(yl=null,t=oh(r),t=Or(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function p_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FS()){case ah:return 1;case s_:return 4;case ml:case US:return 16;case o_:return 536870912;default:return 16}default:return 16}}var Yn=null,fh=null,qa=null;function m_(){if(qa)return qa;var t,e=fh,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qa=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function Sm(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:Sm,this.isPropagationStopped=Sm,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Nt(ls),Vo=Re({},ls,{view:0,detail:0}),XS=Nt(Vo),vc,yc,ks,mu=Re({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(vc=t.screenX-ks.screenX,yc=t.screenY-ks.screenY):yc=vc=0,ks=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),km=Nt(mu),JS=Re({},mu,{dataTransfer:0}),ZS=Nt(JS),ek=Re({},Vo,{relatedTarget:0}),_c=Nt(ek),tk=Re({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),nk=Nt(tk),rk=Re({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ik=Nt(rk),sk=Re({},ls,{data:0}),Cm=Nt(sk),ok={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ak={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lk[t])?!!e[t]:!1}function hh(){return uk}var ck=Re({},Vo,{key:function(t){if(t.key){var e=ok[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ak[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fk=Nt(ck),dk=Re({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Nt(dk),hk=Re({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),pk=Nt(hk),mk=Re({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),gk=Nt(mk),vk=Re({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yk=Nt(vk),_k=[9,13,27,32],ph=Sn&&"CompositionEvent"in window,Bs=null;Sn&&"documentMode"in document&&(Bs=document.documentMode);var wk=Sn&&"TextEvent"in window&&!Bs,g_=Sn&&(!ph||Bs&&8<Bs&&11>=Bs),Im=String.fromCharCode(32),xm=!1;function v_(t,e){switch(t){case"keyup":return _k.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function Ek(t,e){switch(t){case"compositionend":return y_(e);case"keypress":return e.which!==32?null:(xm=!0,Im);case"textInput":return t=e.data,t===Im&&xm?null:t;default:return null}}function Sk(t,e){if(vi)return t==="compositionend"||!ph&&v_(t,e)?(t=m_(),qa=fh=Yn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g_&&e.locale!=="ko"?null:e.data;default:return null}}var kk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kk[t.type]:e==="textarea"}function __(t,e,n,r){Qy(r),e=_l(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,ho=null;function Ck(t){N_(t,0)}function gu(t){var e=wi(t);if(By(e))return t}function bk(t,e){if(t==="change")return e}var w_=!1;if(Sn){var wc;if(Sn){var Ec="oninput"in document;if(!Ec){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Ec=typeof Pm.oninput=="function"}wc=Ec}else wc=!1;w_=wc&&(!document.documentMode||9<document.documentMode)}function Nm(){Hs&&(Hs.detachEvent("onpropertychange",E_),ho=Hs=null)}function E_(t){if(t.propertyName==="value"&&gu(ho)){var e=[];__(e,ho,t,oh(t)),e_(Ck,e)}}function Ik(t,e,n){t==="focusin"?(Nm(),Hs=e,ho=n,Hs.attachEvent("onpropertychange",E_)):t==="focusout"&&Nm()}function xk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(ho)}function Tk(t,e){if(t==="click")return gu(e)}function Pk(t,e){if(t==="input"||t==="change")return gu(e)}function Nk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:Nk;function po(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,e){var n=Rm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rm(n)}}function S_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k_(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rk(t){var e=k_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S_(n.ownerDocument.documentElement,n)){if(r!==null&&mh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Am(n,s);var o=Am(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ak=Sn&&"documentMode"in document&&11>=document.documentMode,yi=null,Af=null,Vs=null,Of=!1;function Om(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Of||yi==null||yi!==dl(r)||(r=yi,"selectionStart"in r&&mh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vs&&po(Vs,r)||(Vs=r,r=_l(Af,"onSelect"),0<r.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=yi)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},Sc={},C_={};Sn&&(C_=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function vu(t){if(Sc[t])return Sc[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C_)return Sc[t]=e[n];return t}var b_=vu("animationend"),I_=vu("animationiteration"),x_=vu("animationstart"),T_=vu("transitionend"),P_=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){P_.set(t,e),si(e,[t])}for(var kc=0;kc<Lm.length;kc++){var Cc=Lm[kc],Ok=Cc.toLowerCase(),Lk=Cc[0].toUpperCase()+Cc.slice(1);Sr(Ok,"on"+Lk)}Sr(b_,"onAnimationEnd");Sr(I_,"onAnimationIteration");Sr(x_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(T_,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function Dm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OS(r,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Dm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Dm(i,a,u),s=l}}}if(pl)throw t=Tf,pl=!1,Tf=null,t}function ke(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var r=t+"__bubble";n.has(r)||(R_(e,t,2,!1),n.add(r))}function bc(t,e,n){var r=0;e&&(r|=4),R_(n,t,r,e)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Sa]){t[Sa]=!0,Uy.forEach(function(n){n!=="selectionchange"&&(Dk.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sa]||(e[Sa]=!0,bc("selectionchange",!1,e))}}function R_(t,e,n,r){switch(p_(e)){case 1:var i=qS;break;case 4:i=QS;break;default:i=ch}n=i.bind(null,e,n,t),i=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ic(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}e_(function(){var u=s,f=oh(n),c=[];e:{var d=P_.get(t);if(d!==void 0){var h=dh,m=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":h=fk;break;case"focusin":m="focus",h=_c;break;case"focusout":m="blur",h=_c;break;case"beforeblur":case"afterblur":h=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ZS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=pk;break;case b_:case I_:case x_:h=nk;break;case T_:h=gk;break;case"scroll":h=XS;break;case"wheel":h=yk;break;case"copy":case"cut":case"paste":h=ik;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=bm}var w=(e&4)!==0,C=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var p=u,v;p!==null;){v=p;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,g!==null&&(b=lo(p,g),b!=null&&w.push(go(p,b,v)))),C)break;p=p.return}0<w.length&&(d=new h(d,m,null,n,f),c.push({event:d,listeners:w}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==bf&&(m=n.relatedTarget||n.fromElement)&&(Or(m)||m[kn]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Or(m):null,m!==null&&(C=oi(m),m!==C||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(w=km,b="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=bm,b="onPointerLeave",g="onPointerEnter",p="pointer"),C=h==null?d:wi(h),v=m==null?d:wi(m),d=new w(b,p+"leave",h,n,f),d.target=C,d.relatedTarget=v,b=null,Or(f)===u&&(w=new w(g,p+"enter",m,n,f),w.target=v,w.relatedTarget=C,b=w),C=b,h&&m)t:{for(w=h,g=m,p=0,v=w;v;v=ui(v))p++;for(v=0,b=g;b;b=ui(b))v++;for(;0<p-v;)w=ui(w),p--;for(;0<v-p;)g=ui(g),v--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=ui(w),g=ui(g)}w=null}else w=null;h!==null&&Mm(c,d,h,w,!1),m!==null&&C!==null&&Mm(c,C,m,w,!0)}}e:{if(d=u?wi(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var A=bk;else if(Tm(d))if(w_)A=Pk;else{A=xk;var I=Ik}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Tk);if(A&&(A=A(t,u))){__(c,A,n,f);break e}I&&I(t,d,u),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&wf(d,"number",d.value)}switch(I=u?wi(u):window,t){case"focusin":(Tm(I)||I.contentEditable==="true")&&(yi=I,Af=u,Vs=null);break;case"focusout":Vs=Af=yi=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,Om(c,n,f);break;case"selectionchange":if(Ak)break;case"keydown":case"keyup":Om(c,n,f)}var M;if(ph)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else vi?v_(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(g_&&n.locale!=="ko"&&(vi||F!=="onCompositionStart"?F==="onCompositionEnd"&&vi&&(M=m_()):(Yn=f,fh="value"in Yn?Yn.value:Yn.textContent,vi=!0)),I=_l(u,F),0<I.length&&(F=new Cm(F,t,null,n,f),c.push({event:F,listeners:I}),M?F.data=M:(M=y_(n),M!==null&&(F.data=M)))),(M=wk?Ek(t,n):Sk(t,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(f=new Cm("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=M))}N_(c,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lo(t,n),s!=null&&r.unshift(go(t,s,i)),s=lo(t,e),s!=null&&r.push(go(t,s,i))),t=t.return}return r}function ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=lo(n,s),l!=null&&o.unshift(go(n,l,a))):i||(l=lo(n,s),l!=null&&o.push(go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Mk=/\r\n?/g,Fk=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(Mk,`
`).replace(Fk,"")}function ka(t,e,n){if(e=Fm(e),Fm(t)!==e&&n)throw Error($(425))}function wl(){}var Lf=null,Df=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Uk=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,$k=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(zk)}:Ff;function zk(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),rn="__reactFiber$"+us,vo="__reactProps$"+us,kn="__reactContainer$"+us,Uf="__reactEvents$"+us,jk="__reactListeners$"+us,Wk="__reactHandles$"+us;function Or(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$m(t);t!==null;){if(n=t[rn])return n;t=$m(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[rn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function yu(t){return t[vo]||null}var $f=[],Ei=-1;function kr(t){return{current:t}}function Ie(t){0>Ei||(t.current=$f[Ei],$f[Ei]=null,Ei--)}function Se(t,e){Ei++,$f[Ei]=t.current,t.current=e}var pr={},at=kr(pr),_t=kr(!1),Hr=pr;function Gi(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function El(){Ie(_t),Ie(at)}function zm(t,e,n){if(at.current!==pr)throw Error($(168));Se(at,e),Se(_t,n)}function A_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,IS(t)||"Unknown",i));return Re({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Hr=at.current,Se(at,t),Se(_t,_t.current),!0}function jm(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=A_(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,Ie(_t),Ie(at),Se(at,t)):Ie(_t),Se(_t,n)}var pn=null,_u=!1,Tc=!1;function O_(t){pn===null?pn=[t]:pn.push(t)}function Bk(t){_u=!0,O_(t)}function Cr(){if(!Tc&&pn!==null){Tc=!0;var t=0,e=me;try{var n=pn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,_u=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),i_(ah,Cr),i}finally{me=e,Tc=!1}}return null}var Si=[],ki=0,kl=null,Cl=0,Dt=[],Mt=0,Vr=null,mn=1,gn="";function Tr(t,e){Si[ki++]=Cl,Si[ki++]=kl,kl=t,Cl=e}function L_(t,e,n){Dt[Mt++]=mn,Dt[Mt++]=gn,Dt[Mt++]=Vr,Vr=t;var r=mn;t=gn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Xt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function gh(t){t.return!==null&&(Tr(t,1),L_(t,1,0))}function vh(t){for(;t===kl;)kl=Si[--ki],Si[ki]=null,Cl=Si[--ki],Si[ki]=null;for(;t===Vr;)Vr=Dt[--Mt],Dt[Mt]=null,gn=Dt[--Mt],Dt[Mt]=null,mn=Dt[--Mt],Dt[Mt]=null}var xt=null,It=null,Te=!1,Vt=null;function D_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,It=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,It=null,!0):!1;default:return!1}}function zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jf(t){if(Te){var e=It;if(e){var n=e;if(!Wm(t,e)){if(zf(t))throw Error($(418));e=tr(n.nextSibling);var r=xt;e&&Wm(t,e)?D_(r,n):(t.flags=t.flags&-4097|2,Te=!1,xt=t)}}else{if(zf(t))throw Error($(418));t.flags=t.flags&-4097|2,Te=!1,xt=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Ca(t){if(t!==xt)return!1;if(!Te)return Bm(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=It)){if(zf(t))throw M_(),Error($(418));for(;e;)D_(t,e),e=tr(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=xt?tr(t.stateNode.nextSibling):null;return!0}function M_(){for(var t=It;t;)t=tr(t.nextSibling)}function Ki(){It=xt=null,Te=!1}function yh(t){Vt===null?Vt=[t]:Vt.push(t)}var Hk=An.ReactCurrentBatchConfig;function Bt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bl=kr(null),Il=null,Ci=null,_h=null;function wh(){_h=Ci=Il=null}function Eh(t){var e=bl.current;Ie(bl),t._currentValue=e}function Wf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){Il=t,_h=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(vt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(Il===null)throw Error($(308));Ci=t,Il.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Lr=null;function Sh(t){Lr===null?Lr=[t]:Lr.push(t)}function F_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,Sh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lh(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,w=a;switch(d=e,h=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){c=m.call(h,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,d=typeof m=="function"?m.call(h,c,d):m,d==null)break e;c=Re({},c,d);break e;case 2:jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=h,l=c):f=f.next=h,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=c}}function Vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var $_=new Fy.Component().refs;function Bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=ir(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Jt(e,t,i,r),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=ir(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Jt(e,t,i,r),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=ir(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(Jt(e,t,r,n),Xa(e,t,r))}};function Gm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function z_(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?Hr:at.current,r=e.contextTypes,s=(r=r!=null)?Gi(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$_,kh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?Hr:at.current,i.context=Gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wu.enqueueReplaceState(i,i.state,null),xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ym(t){var e=t._init;return e(t._payload)}function j_(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=sr(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,b){return p===null||p.tag!==6?(p=Dc(v,g.mode,b),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,b){var A=v.type;return A===gi?f(g,p,v.props.children,b,v.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zn&&Ym(A)===p.type)?(b=i(p,v.props),b.ref=Cs(g,p,v),b.return=g,b):(b=rl(v.type,v.key,v.props,null,g.mode,b),b.ref=Cs(g,p,v),b.return=g,b)}function u(g,p,v,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Mc(v,g.mode,b),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function f(g,p,v,b,A){return p===null||p.tag!==7?(p=jr(v,g.mode,b,A),p.return=g,p):(p=i(p,v),p.return=g,p)}function c(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Dc(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pa:return v=rl(p.type,p.key,p.props,null,g.mode,v),v.ref=Cs(g,null,p),v.return=g,v;case mi:return p=Mc(p,g.mode,v),p.return=g,p;case zn:var b=p._init;return c(g,b(p._payload),v)}if(Ds(p)||_s(p))return p=jr(p,g.mode,v,null),p.return=g,p;ba(g,p)}return null}function d(g,p,v,b){var A=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(g,p,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pa:return v.key===A?l(g,p,v,b):null;case mi:return v.key===A?u(g,p,v,b):null;case zn:return A=v._init,d(g,p,A(v._payload),b)}if(Ds(v)||_s(v))return A!==null?null:f(g,p,v,b,null);ba(g,v)}return null}function h(g,p,v,b,A){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(v)||null,a(p,g,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case pa:return g=g.get(b.key===null?v:b.key)||null,l(p,g,b,A);case mi:return g=g.get(b.key===null?v:b.key)||null,u(p,g,b,A);case zn:var I=b._init;return h(g,p,v,I(b._payload),A)}if(Ds(b)||_s(b))return g=g.get(v)||null,f(p,g,b,A,null);ba(p,b)}return null}function m(g,p,v,b){for(var A=null,I=null,M=p,F=p=0,V=null;M!==null&&F<v.length;F++){M.index>F?(V=M,M=null):V=M.sibling;var j=d(g,M,v[F],b);if(j===null){M===null&&(M=V);break}t&&M&&j.alternate===null&&e(g,M),p=s(j,p,F),I===null?A=j:I.sibling=j,I=j,M=V}if(F===v.length)return n(g,M),Te&&Tr(g,F),A;if(M===null){for(;F<v.length;F++)M=c(g,v[F],b),M!==null&&(p=s(M,p,F),I===null?A=M:I.sibling=M,I=M);return Te&&Tr(g,F),A}for(M=r(g,M);F<v.length;F++)V=h(M,g,F,v[F],b),V!==null&&(t&&V.alternate!==null&&M.delete(V.key===null?F:V.key),p=s(V,p,F),I===null?A=V:I.sibling=V,I=V);return t&&M.forEach(function(pe){return e(g,pe)}),Te&&Tr(g,F),A}function w(g,p,v,b){var A=_s(v);if(typeof A!="function")throw Error($(150));if(v=A.call(v),v==null)throw Error($(151));for(var I=A=null,M=p,F=p=0,V=null,j=v.next();M!==null&&!j.done;F++,j=v.next()){M.index>F?(V=M,M=null):V=M.sibling;var pe=d(g,M,j.value,b);if(pe===null){M===null&&(M=V);break}t&&M&&pe.alternate===null&&e(g,M),p=s(pe,p,F),I===null?A=pe:I.sibling=pe,I=pe,M=V}if(j.done)return n(g,M),Te&&Tr(g,F),A;if(M===null){for(;!j.done;F++,j=v.next())j=c(g,j.value,b),j!==null&&(p=s(j,p,F),I===null?A=j:I.sibling=j,I=j);return Te&&Tr(g,F),A}for(M=r(g,M);!j.done;F++,j=v.next())j=h(M,g,F,j.value,b),j!==null&&(t&&j.alternate!==null&&M.delete(j.key===null?F:j.key),p=s(j,p,F),I===null?A=j:I.sibling=j,I=j);return t&&M.forEach(function(we){return e(g,we)}),Te&&Tr(g,F),A}function C(g,p,v,b){if(typeof v=="object"&&v!==null&&v.type===gi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pa:e:{for(var A=v.key,I=p;I!==null;){if(I.key===A){if(A=v.type,A===gi){if(I.tag===7){n(g,I.sibling),p=i(I,v.props.children),p.return=g,g=p;break e}}else if(I.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zn&&Ym(A)===I.type){n(g,I.sibling),p=i(I,v.props),p.ref=Cs(g,I,v),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}v.type===gi?(p=jr(v.props.children,g.mode,b,v.key),p.return=g,g=p):(b=rl(v.type,v.key,v.props,null,g.mode,b),b.ref=Cs(g,p,v),b.return=g,g=b)}return o(g);case mi:e:{for(I=v.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Mc(v,g.mode,b),p.return=g,g=p}return o(g);case zn:return I=v._init,C(g,p,I(v._payload),b)}if(Ds(v))return m(g,p,v,b);if(_s(v))return w(g,p,v,b);ba(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Dc(v,g.mode,b),p.return=g,g=p),o(g)):n(g,p)}return C}var Yi=j_(!0),W_=j_(!1),Ko={},an=kr(Ko),yo=kr(Ko),_o=kr(Ko);function Dr(t){if(t===Ko)throw Error($(174));return t}function Ch(t,e){switch(Se(_o,e),Se(yo,t),Se(an,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}Ie(an),Se(an,e)}function qi(){Ie(an),Ie(yo),Ie(_o)}function B_(t){Dr(_o.current);var e=Dr(an.current),n=Sf(e,t.type);e!==n&&(Se(yo,t),Se(an,n))}function bh(t){yo.current===t&&(Ie(an),Ie(yo))}var Pe=kr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pc=[];function Ih(){for(var t=0;t<Pc.length;t++)Pc[t]._workInProgressVersionPrimary=null;Pc.length=0}var Ja=An.ReactCurrentDispatcher,Nc=An.ReactCurrentBatchConfig,Gr=0,Ne=null,je=null,Ke=null,Pl=!1,Gs=!1,wo=0,Vk=0;function rt(){throw Error($(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Th(t,e,n,r,i,s){if(Gr=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?qk:Qk,t=n(r,i),Gs){s=0;do{if(Gs=!1,wo=0,25<=s)throw Error($(301));s+=1,Ke=je=null,e.updateQueue=null,Ja.current=Xk,t=n(r,i)}while(Gs)}if(Ja.current=Nl,e=je!==null&&je.next!==null,Gr=0,Ke=je=Ne=null,Pl=!1,e)throw Error($(300));return t}function Ph(){var t=wo!==0;return wo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function zt(){if(je===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ke===null?Ne.memoizedState:Ke.next;if(e!==null)Ke=e,je=t;else{if(t===null)throw Error($(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Eo(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Gr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,Ne.lanes|=f,Kr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function H_(){}function V_(t,e){var n=Ne,r=zt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Nh(Y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,So(9,K_.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error($(349));(Gr&30)!==0||G_(n,e,i)}return i}function G_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K_(t,e,n,r){e.value=n,e.getSnapshot=r,q_(e)&&Q_(t)}function Y_(t,e,n){return n(function(){q_(e)&&Q_(t)})}function q_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function Q_(t){var e=Cn(t,1);e!==null&&Jt(e,t,1,-1)}function qm(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=Yk.bind(null,Ne,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function X_(){return zt().memoizedState}function Za(t,e,n,r){var i=nn();Ne.flags|=t,i.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&xh(r,o.deps)){i.memoizedState=So(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=So(1|e,n,s,r)}function Qm(t,e){return Za(8390656,8,t,e)}function Nh(t,e){return Eu(2048,8,t,e)}function J_(t,e){return Eu(4,2,t,e)}function Z_(t,e){return Eu(4,4,t,e)}function e0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t0(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,e0.bind(null,e,t),n)}function Rh(){}function n0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i0(t,e,n){return(Gr&21)===0?(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n):(en(n,e)||(n=a_(),Ne.lanes|=n,Kr|=n,t.baseState=!0),e)}function Gk(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Nc.transition;Nc.transition={};try{t(!1),e()}finally{me=n,Nc.transition=r}}function s0(){return zt().memoizedState}function Kk(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o0(t))a0(e,n);else if(n=F_(t,e,n,r),n!==null){var i=dt();Jt(n,t,r,i),l0(n,e,r)}}function Yk(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o0(t))a0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,Sh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=F_(t,e,i,r),n!==null&&(i=dt(),Jt(n,t,r,i),l0(n,e,r))}}function o0(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function a0(t,e){Gs=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lh(t,n)}}var Nl={readContext:$t,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},qk={readContext:$t,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Qm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,e0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Kk.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:qm,useDebugValue:Rh,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=qm(!1),e=t[0];return t=Gk.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=nn();if(Te){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Qe===null)throw Error($(349));(Gr&30)!==0||G_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qm(Y_.bind(null,r,s,t),[t]),r.flags|=2048,So(9,K_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Qe.identifierPrefix;if(Te){var n=gn,r=mn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qk={readContext:$t,useCallback:n0,useContext:$t,useEffect:Nh,useImperativeHandle:t0,useInsertionEffect:J_,useLayoutEffect:Z_,useMemo:r0,useReducer:Rc,useRef:X_,useState:function(){return Rc(Eo)},useDebugValue:Rh,useDeferredValue:function(t){var e=zt();return i0(e,je.memoizedState,t)},useTransition:function(){var t=Rc(Eo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:V_,useId:s0,unstable_isNewReconciler:!1},Xk={readContext:$t,useCallback:n0,useContext:$t,useEffect:Nh,useImperativeHandle:t0,useInsertionEffect:J_,useLayoutEffect:Z_,useMemo:r0,useReducer:Ac,useRef:X_,useState:function(){return Ac(Eo)},useDebugValue:Rh,useDeferredValue:function(t){var e=zt();return je===null?e.memoizedState=t:i0(e,je.memoizedState,t)},useTransition:function(){var t=Ac(Eo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:V_,useId:s0,unstable_isNewReconciler:!1};function Qi(t,e){try{var n="",r=e;do n+=bS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Jk=typeof WeakMap=="function"?WeakMap:Map;function u0(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Al||(Al=!0,td=r),Vf(t,e)},n}function c0(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Jk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dC.bind(null,t,e,n),e.then(t,t))}function Jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Zk=An.ReactCurrentOwner,vt=!1;function ut(t,e,n,r){e.child=t===null?W_(e,null,n,r):Yi(e,t.child,n,r)}function eg(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=Th(t,e,n,r,s,i),n=Ph(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Te&&n&&gh(e),e.flags|=1,ut(t,e,r,i),e.child)}function tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$h(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f0(t,e,s,r,i)):(t=rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return bn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function f0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(vt=!0);else return e.lanes=t.lanes,bn(t,e,i)}return Gf(t,e,n,r,i)}function d0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Ii,bt),bt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Ii,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(Ii,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(Ii,bt),bt|=r;return ut(t,e,i,n),e.child}function h0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=wt(n)?Hr:at.current;return s=Gi(e,s),Fi(e,i),n=Th(t,e,n,r,s,i),r=Ph(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Te&&r&&gh(e),e.flags|=1,ut(t,e,n,i),e.child)}function ng(t,e,n,r,i){if(wt(n)){var s=!0;Sl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)el(t,e),z_(e,n,r),Hf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=wt(n)?Hr:at.current,u=Gi(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Km(e,o,r,u),jn=!1;var d=e.memoizedState;o.state=d,xl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||_t.current||jn?(typeof f=="function"&&(Bf(e,n,f,r),l=e.memoizedState),(a=jn||Gm(e,n,a,r,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,U_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bt(e.type,a),o.props=u,c=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=wt(n)?Hr:at.current,l=Gi(e,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&Km(e,o,r,l),jn=!1,d=e.memoizedState,o.state=d,xl(e,r,o,i);var m=e.memoizedState;a!==c||d!==m||_t.current||jn?(typeof h=="function"&&(Bf(e,n,h,r),m=e.memoizedState),(u=jn||Gm(e,n,u,r,d,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Kf(t,e,n,r,s,i)}function Kf(t,e,n,r,i,s){h0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jm(e,n,!1),bn(t,e,s);r=e.stateNode,Zk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,s),e.child=Yi(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&jm(e,n,!0),e.child}function p0(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),Ch(t,e.containerInfo)}function rg(t,e,n,r,i){return Ki(),yh(i),e.flags|=256,ut(t,e,n,r),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function m0(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Pe,i&1),t===null)return jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Yf,t):Ah(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ah(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,r){return r!==null&&yh(r),Yi(e,t.child,null,n),t=Ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Oc(Error($(422))),Ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Cu({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Yi(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Yf,s);if((e.mode&1)===0)return Ia(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Oc(s,r,void 0),Ia(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Jt(r,t,i,-1))}return Uh(),r=Oc(Error($(421))),Ia(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=tr(i.nextSibling),xt=e,Te=!0,Vt=null,t!==null&&(Dt[Mt++]=mn,Dt[Mt++]=gn,Dt[Mt++]=Vr,mn=t.id,gn=t.overflow,Vr=e),e=Ah(e,r.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wf(t.return,e,n)}function Lc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Pe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tC(t,e,n){switch(e.tag){case 3:p0(e),Ki();break;case 5:B_(e);break;case 1:wt(e.type)&&Sl(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(bl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Pe,Pe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?m0(t,e,n):(Se(Pe,Pe.current&1),t=bn(t,e,n),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return g0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,d0(t,e,n)}return bn(t,e,n)}var v0,Qf,y0,_0;v0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qf=function(){};y0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(an.current);var s=null;switch(n){case"input":i=yf(t,i),r=yf(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Ef(t,i),r=Ef(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}kf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_0=function(t,e,n,r){n!==r&&(e.flags|=4)};function bs(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nC(t,e,n){var r=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return wt(e.type)&&El(),it(e),null;case 3:return r=e.stateNode,qi(),Ie(_t),Ie(at),Ih(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Vt!==null&&(id(Vt),Vt=null))),Qf(t,e),it(e),null;case 5:bh(e);var i=Dr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)y0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return it(e),null}if(t=Dr(an.current),Ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[vo]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Fs.length;i++)ke(Fs[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":hm(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":mm(r,s),ke("invalid",r)}kf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(r.textContent,a,t),i=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":ma(r),pm(r,s,!0);break;case"textarea":ma(r),gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[vo]=r,v0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fs.length;i++)ke(Fs[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":hm(t,r),i=yf(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ke("invalid",t);break;case"textarea":mm(t,r),i=Ef(t,r),ke("invalid",t);break;default:i=r}kf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ky(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",t):l!=null&&nh(t,s,l,o))}switch(n){case"input":ma(t),pm(t,r,!1);break;case"textarea":ma(t),gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Dr(_o.current),Dr(an.current),Ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return it(e),null;case 13:if(Ie(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&It!==null&&(e.mode&1)!==0&&(e.flags&128)===0)M_(),Ki(),e.flags|=98560,s=!1;else if(s=Ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[rn]=e}else Ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Vt!==null&&(id(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Pe.current&1)!==0?He===0&&(He=3):Uh())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return qi(),Qf(t,e),t===null&&mo(e.stateNode.containerInfo),it(e),null;case 10:return Eh(e.type._context),it(e),null;case 17:return wt(e.type)&&El(),it(e),null;case 19:if(Ie(Pe),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bs(s,!1);else{if(He!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Xi&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return it(e),null}else 2*Fe()-s.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,r=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,Se(Pe,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Fh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(bt&1073741824)!==0&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function rC(t,e){switch(vh(e),e.tag){case 1:return wt(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(),Ie(_t),Ie(at),Ih(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return bh(e),null;case 13:if(Ie(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Pe),null;case 4:return qi(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var xa=!1,st=!1,iC=typeof WeakSet=="function"?WeakSet:Set,H=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Xf(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var sg=!1;function sC(t,e){if(Lf=vl,t=k_(),mh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++f===r&&(l=o),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},vl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,C=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Bt(e.type,w),C);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){Oe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return m=sg,sg=!1,m}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xf(e,n,s)}i=i.next}while(i!==r)}}function Su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[vo],delete e[Uf],delete e[jk],delete e[Wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E0(t){return t.tag===5||t.tag===3||t.tag===4}function og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var et=null,Ht=!1;function Fn(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:st||bi(n,e);case 6:var r=et,i=Ht;et=null,Fn(t,e,n),et=r,Ht=i,et!==null&&(Ht?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Ht?(t=et,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),fo(t)):xc(et,n.stateNode));break;case 4:r=et,i=Ht,et=n.stateNode.containerInfo,Ht=!0,Fn(t,e,n),et=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Xf(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!st&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Fn(t,e,n),st=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iC),e.forEach(function(r){var i=pC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,Ht=!1;break e;case 3:et=a.stateNode.containerInfo,Ht=!0;break e;case 4:et=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(et===null)throw Error($(160));S0(s,o,i),et=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k0(e,t),e=e.sibling}function k0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),tn(t),r&4){try{Ks(3,t,t.return),Su(3,t)}catch(w){Oe(t,t.return,w)}try{Ks(5,t,t.return)}catch(w){Oe(t,t.return,w)}}break;case 1:Wt(e,t),tn(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(Wt(e,t),tn(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{ao(i,"")}catch(w){Oe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hy(i,s),Cf(a,o);var u=Cf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?qy(i,c):f==="dangerouslySetInnerHTML"?Ky(i,c):f==="children"?ao(i,c):nh(i,f,c,u)}switch(a){case"input":_f(i,s);break;case"textarea":Vy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Oi(i,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[vo]=s}catch(w){Oe(t,t.return,w)}}break;case 6:if(Wt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Oe(t,t.return,w)}}break;case 3:if(Wt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(w){Oe(t,t.return,w)}break;case 4:Wt(e,t),tn(t);break;case 13:Wt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dh=Fe())),r&4&&ag(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(u=st)||f,Wt(e,t),st=u):Wt(e,t),tn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&(t.mode&1)!==0)for(H=t,f=t.child;f!==null;){for(c=H=f;H!==null;){switch(d=H,h=d.child,d.tag){case 0:case 11:case 14:case 15:Ks(4,d,d.return);break;case 1:bi(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){Oe(r,n,w)}}break;case 5:bi(d,d.return);break;case 22:if(d.memoizedState!==null){ug(c);continue}}h!==null?(h.return=d,H=h):ug(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yy("display",o))}catch(w){Oe(t,t.return,w)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){Oe(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Wt(e,t),tn(t),r&4&&ag(t);break;case 21:break;default:Wt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ao(i,""),r.flags&=-33);var s=og(t);ed(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=og(t);Zf(t,a,o);break;default:throw Error($(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oC(t,e,n){H=t,C0(t)}function C0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=xa;var u=st;if(xa=o,(st=l)&&!u)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?cg(i):l!==null?(l.return=o,H=l):cg(i);for(;s!==null;)H=s,C0(s),s=s.sibling;H=i,xa=a,st=u}lg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,H=s):lg(t)}}function lg(t){for(;H!==null;){var e=H;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:st||Su(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&fo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}st||e.flags&512&&Jf(e)}catch(d){Oe(e,e.return,d)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ug(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function cg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Su(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{Jf(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{Jf(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var aC=Math.ceil,Rl=An.ReactCurrentDispatcher,Oh=An.ReactCurrentOwner,Ut=An.ReactCurrentBatchConfig,de=0,Qe=null,$e=null,tt=0,bt=0,Ii=kr(0),He=0,ko=null,Kr=0,ku=0,Lh=0,Ys=null,gt=null,Dh=0,Xi=1/0,hn=null,Al=!1,td=null,rr=null,Ta=!1,qn=null,Ol=0,qs=0,nd=null,tl=-1,nl=0;function dt(){return(de&6)!==0?Fe():tl!==-1?tl:tl=Fe()}function ir(t){return(t.mode&1)===0?1:(de&2)!==0&&tt!==0?tt&-tt:Hk.transition!==null?(nl===0&&(nl=a_()),nl):(t=me,t!==0||(t=window.event,t=t===void 0?16:p_(t.type)),t)}function Jt(t,e,n,r){if(50<qs)throw qs=0,nd=null,Error($(185));Ho(t,n,r),((de&2)===0||t!==Qe)&&(t===Qe&&((de&2)===0&&(ku|=n),He===4&&Bn(t,tt)),Et(t,r),n===1&&de===0&&(e.mode&1)===0&&(Xi=Fe()+500,_u&&Cr()))}function Et(t,e){var n=t.callbackNode;HS(t,e);var r=gl(t,t===Qe?tt:0);if(r===0)n!==null&&_m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_m(n),e===1)t.tag===0?Bk(fg.bind(null,t)):O_(fg.bind(null,t)),$k(function(){(de&6)===0&&Cr()}),n=null;else{switch(l_(r)){case 1:n=ah;break;case 4:n=s_;break;case 16:n=ml;break;case 536870912:n=o_;break;default:n=ml}n=A0(n,b0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b0(t,e){if(tl=-1,nl=0,(de&6)!==0)throw Error($(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=gl(t,t===Qe?tt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ll(t,r);else{e=r;var i=de;de|=2;var s=x0();(Qe!==t||tt!==e)&&(hn=null,Xi=Fe()+500,zr(t,e));do try{cC();break}catch(a){I0(t,a)}while(1);wh(),Rl.current=s,de=i,$e!==null?e=0:(Qe=null,tt=0,e=He)}if(e!==0){if(e===2&&(i=Pf(t),i!==0&&(r=i,e=rd(t,i))),e===1)throw n=ko,zr(t,0),Bn(t,r),Et(t,Fe()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!lC(i)&&(e=Ll(t,r),e===2&&(s=Pf(t),s!==0&&(r=s,e=rd(t,s))),e===1))throw n=ko,zr(t,0),Bn(t,r),Et(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Pr(t,gt,hn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=Dh+500-Fe(),10<e)){if(gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ff(Pr.bind(null,t,gt,hn),e);break}Pr(t,gt,hn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aC(r/1960))-r,10<r){t.timeoutHandle=Ff(Pr.bind(null,t,gt,hn),r);break}Pr(t,gt,hn);break;case 5:Pr(t,gt,hn);break;default:throw Error($(329))}}}return Et(t,Fe()),t.callbackNode===n?b0.bind(null,t):null}function rd(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=gt,gt=n,e!==null&&id(e)),t}function id(t){gt===null?gt=t:gt.push.apply(gt,t)}function lC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Lh,e&=~ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function fg(t){if((de&6)!==0)throw Error($(327));Ui();var e=gl(t,0);if((e&1)===0)return Et(t,Fe()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var r=Pf(t);r!==0&&(e=r,n=rd(t,r))}if(n===1)throw n=ko,zr(t,0),Bn(t,e),Et(t,Fe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,gt,hn),Et(t,Fe()),null}function Mh(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Xi=Fe()+500,_u&&Cr())}}function Yr(t){qn!==null&&qn.tag===0&&(de&6)===0&&Ui();var e=de;de|=1;var n=Ut.transition,r=me;try{if(Ut.transition=null,me=1,t)return t()}finally{me=r,Ut.transition=n,de=e,(de&6)===0&&Cr()}}function Fh(){bt=Ii.current,Ie(Ii)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uk(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(vh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:qi(),Ie(_t),Ie(at),Ih();break;case 5:bh(r);break;case 4:qi();break;case 13:Ie(Pe);break;case 19:Ie(Pe);break;case 10:Eh(r.type._context);break;case 22:case 23:Fh()}n=n.return}if(Qe=t,$e=t=sr(t.current,null),tt=bt=e,He=0,ko=null,Lh=ku=Kr=0,gt=Ys=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function I0(t,e){do{var n=$e;try{if(wh(),Ja.current=Nl,Pl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pl=!1}if(Gr=0,Ke=je=Ne=null,Gs=!1,wo=0,Oh.current=null,n===null||n.return===null){He=1,ko=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if((f.mode&1)===0&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Jm(o);if(h!==null){h.flags&=-257,Zm(h,o,a,s,e),h.mode&1&&Xm(s,u,e),e=h,l=u;var m=e.updateQueue;if(m===null){var w=new Set;w.add(l),e.updateQueue=w}else m.add(l);break e}else{if((e&1)===0){Xm(s,u,e),Uh();break e}l=Error($(426))}}else if(Te&&a.mode&1){var C=Jm(o);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),Zm(C,o,a,s,e),yh(Qi(l,a));break e}}s=l=Qi(l,a),He!==4&&(He=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=u0(s,l,e);Hm(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rr===null||!rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=c0(s,a,e);Hm(s,b);break e}}s=s.return}while(s!==null)}P0(n)}catch(A){e=A,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function x0(){var t=Rl.current;return Rl.current=Nl,t===null?Nl:t}function Uh(){(He===0||He===3||He===2)&&(He=4),Qe===null||(Kr&268435455)===0&&(ku&268435455)===0||Bn(Qe,tt)}function Ll(t,e){var n=de;de|=2;var r=x0();(Qe!==t||tt!==e)&&(hn=null,zr(t,e));do try{uC();break}catch(i){I0(t,i)}while(1);if(wh(),de=n,Rl.current=r,$e!==null)throw Error($(261));return Qe=null,tt=0,He}function uC(){for(;$e!==null;)T0($e)}function cC(){for(;$e!==null&&!DS();)T0($e)}function T0(t){var e=R0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?P0(t):$e=e,Oh.current=null}function P0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=nC(n,e,bt),n!==null){$e=n;return}}else{if(n=rC(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,$e=null;return}}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);He===0&&(He=5)}function Pr(t,e,n){var r=me,i=Ut.transition;try{Ut.transition=null,me=1,fC(t,e,n,r)}finally{Ut.transition=i,me=r}return null}function fC(t,e,n,r){do Ui();while(qn!==null);if((de&6)!==0)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VS(t,s),t===Qe&&($e=Qe=null,tt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ta||(Ta=!0,A0(ml,function(){return Ui(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ut.transition,Ut.transition=null;var o=me;me=1;var a=de;de|=4,Oh.current=null,sC(t,n),k0(n,t),Rk(Df),vl=!!Lf,Df=Lf=null,t.current=n,oC(n),MS(),de=a,me=o,Ut.transition=s}else t.current=n;if(Ta&&(Ta=!1,qn=t,Ol=i),s=t.pendingLanes,s===0&&(rr=null),$S(n.stateNode),Et(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Al)throw Al=!1,t=td,td=null,t;return(Ol&1)!==0&&t.tag!==0&&Ui(),s=t.pendingLanes,(s&1)!==0?t===nd?qs++:(qs=0,nd=t):qs=0,Cr(),null}function Ui(){if(qn!==null){var t=l_(Ol),e=Ut.transition,n=me;try{if(Ut.transition=null,me=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,Ol=0,(de&6)!==0)throw Error($(331));var i=de;for(de|=4,H=t.current;H!==null;){var s=H,o=s.child;if((H.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(H=u;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Ks(8,f,s)}var c=f.child;if(c!==null)c.return=f,H=c;else for(;H!==null;){f=H;var d=f.sibling,h=f.return;if(w0(f),f===u){H=null;break}if(d!==null){d.return=h,H=d;break}H=h}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}H=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,H=g;break e}H=s.return}}var p=t.current;for(H=p;H!==null;){o=H;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,H=v;else e:for(o=p;H!==null;){if(a=H,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Su(9,a)}}catch(A){Oe(a,a.return,A)}if(a===o){H=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,H=b;break e}H=a.return}}if(de=i,Cr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(pu,t)}catch{}r=!0}return r}finally{me=n,Ut.transition=e}}return!1}function dg(t,e,n){e=Qi(n,e),e=u0(t,e,1),t=nr(t,e,1),e=dt(),t!==null&&(Ho(t,1,e),Et(t,e))}function Oe(t,e,n){if(t.tag===3)dg(t,t,n);else for(;e!==null;){if(e.tag===3){dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=Qi(n,t),t=c0(e,t,1),e=nr(e,t,1),t=dt(),e!==null&&(Ho(e,1,t),Et(e,t));break}}e=e.return}}function dC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(He===4||He===3&&(tt&130023424)===tt&&500>Fe()-Dh?zr(t,0):Lh|=n),Et(t,e)}function N0(t,e){e===0&&((t.mode&1)===0?e=1:(e=ya,ya<<=1,(ya&130023424)===0&&(ya=4194304)));var n=dt();t=Cn(t,e),t!==null&&(Ho(t,e,n),Et(t,n))}function hC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N0(t,n)}function pC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),N0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return vt=!1,tC(t,e,n);vt=(t.flags&131072)!==0}else vt=!1,Te&&(e.flags&1048576)!==0&&L_(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;el(t,e),t=e.pendingProps;var i=Gi(e,at.current);Fi(e,n),i=Th(null,e,r,t,i,n);var s=Ph();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kh(e),i.updater=wu,e.stateNode=i,i._reactInternals=e,Hf(e,r,t,n),e=Kf(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&gh(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(el(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gC(r),t=Bt(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=ng(null,e,r,t,n);break e;case 11:e=eg(null,e,r,t,n);break e;case 14:e=tg(null,e,r,Bt(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),ng(t,e,r,i,n);case 3:e:{if(p0(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,U_(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error($(423)),e),e=rg(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error($(424)),e),e=rg(t,e,r,n,i);break e}else for(It=tr(e.stateNode.containerInfo.firstChild),xt=e,Te=!0,Vt=null,n=W_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=bn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return B_(e),t===null&&jf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mf(r,i)?o=null:s!==null&&Mf(r,s)&&(e.flags|=32),h0(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&jf(e),null;case 13:return m0(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),eg(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(bl,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!_t.current){e=bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=wn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=$t(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),tg(t,e,r,i,n);case 15:return f0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),el(t,e),e.tag=1,wt(r)?(t=!0,Sl(e)):t=!1,Fi(e,n),z_(e,r,i),Hf(e,r,i,n),Kf(null,e,r,!0,t,n);case 19:return g0(t,e,n);case 22:return d0(t,e,n)}throw Error($(156,e.tag))};function A0(t,e){return i_(t,e)}function mC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new mC(t,e,n,r)}function $h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gC(t){if(typeof t=="function")return $h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===sh)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$h(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return jr(n.children,i,s,e);case rh:o=8,i|=8;break;case pf:return t=Ft(12,n,e,i|2),t.elementType=pf,t.lanes=s,t;case mf:return t=Ft(13,n,e,i),t.elementType=mf,t.lanes=s,t;case gf:return t=Ft(19,n,e,i),t.elementType=gf,t.lanes=s,t;case jy:return Cu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $y:o=10;break e;case zy:o=9;break e;case ih:o=11;break e;case sh:o=14;break e;case zn:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Cu(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=jy,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gc(0),this.expirationTimes=gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zh(t,e,n,r,i,s,o,a,l){return t=new vC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(s),t}function yC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O0(t){if(!t)return pr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(wt(n))return A_(t,n,e)}return e}function L0(t,e,n,r,i,s,o,a,l){return t=zh(n,r,!0,t,i,s,o,a,l),t.context=O0(null),n=t.current,r=dt(),i=ir(n),s=wn(r,i),s.callback=e!=null?e:null,nr(n,s,i),t.current.lanes=i,Ho(t,i,r),Et(t,r),t}function bu(t,e,n,r){var i=e.current,s=dt(),o=ir(i);return n=O0(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(Jt(t,i,o,s),Xa(t,i,o)),o}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jh(t,e){hg(t,e),(t=t.alternate)&&hg(t,e)}function _C(){return null}var D0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}Iu.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));bu(t,e,null,null)};Iu.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){bu(null,t,null,null)}),e[kn]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=f_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&h_(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function wC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Dl(o);s.call(u)}}var o=L0(e,r,t,0,null,!1,!1,"",pg);return t._reactRootContainer=o,t[kn]=o.current,mo(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Dl(l);a.call(u)}}var l=zh(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=l,t[kn]=l.current,mo(t.nodeType===8?t.parentNode:t),Yr(function(){bu(e,l,n,r)}),l}function Tu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Dl(o);a.call(l)}}bu(e,o,t,i)}else o=wC(n,e,t,i,r);return Dl(o)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(lh(e,n|1),Et(e,Fe()),(de&6)===0&&(Xi=Fe()+500,Cr()))}break;case 13:Yr(function(){var r=Cn(t,1);if(r!==null){var i=dt();Jt(r,t,1,i)}}),jh(t,1)}};uh=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=dt();Jt(e,t,134217728,n)}jh(t,134217728)}};c_=function(t){if(t.tag===13){var e=ir(t),n=Cn(t,e);if(n!==null){var r=dt();Jt(n,t,e,r)}jh(t,e)}};f_=function(){return me};d_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};If=function(t,e,n){switch(e){case"input":if(_f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yu(r);if(!i)throw Error($(90));By(r),_f(r,i)}}}break;case"textarea":Vy(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};Jy=Mh;Zy=Yr;var EC={usingClientEntryPoint:!1,Events:[Go,wi,yu,Qy,Xy,Mh]},Is={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},SC={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n_(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||_C,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{pu=Pa.inject(SC),on=Pa}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EC;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error($(200));return yC(t,e,null,n)};Pt.createRoot=function(t,e){if(!Bh(t))throw Error($(299));var n=!1,r="",i=D0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zh(t,1,!1,null,null,n,!1,r,i),t[kn]=e.current,mo(t.nodeType===8?t.parentNode:t),new Wh(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=n_(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Yr(t)};Pt.hydrate=function(t,e,n){if(!xu(e))throw Error($(200));return Tu(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=D0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[kn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Iu(e)};Pt.render=function(t,e,n){if(!xu(e))throw Error($(200));return Tu(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!xu(t))throw Error($(40));return t._reactRootContainer?(Yr(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Mh;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xu(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Tu(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Pt})(Ly);var mg=Ly.exports;df.createRoot=mg.createRoot,df.hydrateRoot=mg.hydrateRoot;var Pu={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=typeof Symbol=="function"&&Symbol.for,Hh=Je?Symbol.for("react.element"):60103,Vh=Je?Symbol.for("react.portal"):60106,Nu=Je?Symbol.for("react.fragment"):60107,Ru=Je?Symbol.for("react.strict_mode"):60108,Au=Je?Symbol.for("react.profiler"):60114,Ou=Je?Symbol.for("react.provider"):60109,Lu=Je?Symbol.for("react.context"):60110,Gh=Je?Symbol.for("react.async_mode"):60111,Du=Je?Symbol.for("react.concurrent_mode"):60111,Mu=Je?Symbol.for("react.forward_ref"):60112,Fu=Je?Symbol.for("react.suspense"):60113,kC=Je?Symbol.for("react.suspense_list"):60120,Uu=Je?Symbol.for("react.memo"):60115,$u=Je?Symbol.for("react.lazy"):60116,CC=Je?Symbol.for("react.block"):60121,bC=Je?Symbol.for("react.fundamental"):60117,IC=Je?Symbol.for("react.responder"):60118,xC=Je?Symbol.for("react.scope"):60119;function Rt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Hh:switch(t=t.type,t){case Gh:case Du:case Nu:case Au:case Ru:case Fu:return t;default:switch(t=t&&t.$$typeof,t){case Lu:case Mu:case $u:case Uu:case Ou:return t;default:return e}}case Vh:return e}}}function M0(t){return Rt(t)===Du}ge.AsyncMode=Gh;ge.ConcurrentMode=Du;ge.ContextConsumer=Lu;ge.ContextProvider=Ou;ge.Element=Hh;ge.ForwardRef=Mu;ge.Fragment=Nu;ge.Lazy=$u;ge.Memo=Uu;ge.Portal=Vh;ge.Profiler=Au;ge.StrictMode=Ru;ge.Suspense=Fu;ge.isAsyncMode=function(t){return M0(t)||Rt(t)===Gh};ge.isConcurrentMode=M0;ge.isContextConsumer=function(t){return Rt(t)===Lu};ge.isContextProvider=function(t){return Rt(t)===Ou};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hh};ge.isForwardRef=function(t){return Rt(t)===Mu};ge.isFragment=function(t){return Rt(t)===Nu};ge.isLazy=function(t){return Rt(t)===$u};ge.isMemo=function(t){return Rt(t)===Uu};ge.isPortal=function(t){return Rt(t)===Vh};ge.isProfiler=function(t){return Rt(t)===Au};ge.isStrictMode=function(t){return Rt(t)===Ru};ge.isSuspense=function(t){return Rt(t)===Fu};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Nu||t===Du||t===Au||t===Ru||t===Fu||t===kC||typeof t=="object"&&t!==null&&(t.$$typeof===$u||t.$$typeof===Uu||t.$$typeof===Ou||t.$$typeof===Lu||t.$$typeof===Mu||t.$$typeof===bC||t.$$typeof===IC||t.$$typeof===xC||t.$$typeof===CC)};ge.typeOf=Rt;(function(t){t.exports=ge})(Pu);function TC(t){function e(k,P,U,W,_){for(var Y=0,R=0,X=0,q=0,ee,Z,Q=0,ye=0,re,Ue=re=ee=0,fe=0,Ae=0,Dn=0,Ze=0,da=U.length,ys=da-1,jt,te="",Me="",uc="",cc="",Mn;fe<da;){if(Z=U.charCodeAt(fe),fe===ys&&R+q+X+Y!==0&&(R!==0&&(Z=R===47?10:47),q=X=Y=0,da++,ys++),R+q+X+Y===0){if(fe===ys&&(0<Ae&&(te=te.replace(d,"")),0<te.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:te+=U.charAt(fe)}Z=59}switch(Z){case 123:for(te=te.trim(),ee=te.charCodeAt(0),re=1,Ze=++fe;fe<da;){switch(Z=U.charCodeAt(fe)){case 123:re++;break;case 125:re--;break;case 47:switch(Z=U.charCodeAt(fe+1)){case 42:case 47:e:{for(Ue=fe+1;Ue<ys;++Ue)switch(U.charCodeAt(Ue)){case 47:if(Z===42&&U.charCodeAt(Ue-1)===42&&fe+2!==Ue){fe=Ue+1;break e}break;case 10:if(Z===47){fe=Ue+1;break e}}fe=Ue}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;fe++<ys&&U.charCodeAt(fe)!==Z;);}if(re===0)break;fe++}switch(re=U.substring(Ze,fe),ee===0&&(ee=(te=te.replace(c,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Ae&&(te=te.replace(d,"")),Z=te.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Ae=P;break;default:Ae=x}if(re=e(P,Ae,re,Z,_+1),Ze=re.length,0<E&&(Ae=n(x,te,Dn),Mn=a(3,re,Ae,P,ze,we,Ze,Z,_,W),te=Ae.join(""),Mn!==void 0&&(Ze=(re=Mn.trim()).length)===0&&(Z=0,re="")),0<Ze)switch(Z){case 115:te=te.replace(I,o);case 100:case 109:case 45:re=te+"{"+re+"}";break;case 107:te=te.replace(p,"$1 $2"),re=te+"{"+re+"}",re=y===1||y===2&&s("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=te+re,W===112&&(re=(Me+=re,""))}else re="";break;default:re=e(P,n(P,te,Dn),re,W,_+1)}uc+=re,re=Dn=Ae=Ue=ee=0,te="",Z=U.charCodeAt(++fe);break;case 125:case 59:if(te=(0<Ae?te.replace(d,""):te).trim(),1<(Ze=te.length))switch(Ue===0&&(ee=te.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Ze=(te=te.replace(" ",":")).length),0<E&&(Mn=a(1,te,P,k,ze,we,Me.length,W,_,W))!==void 0&&(Ze=(te=Mn.trim()).length)===0&&(te="\0\0"),ee=te.charCodeAt(0),Z=te.charCodeAt(1),ee){case 0:break;case 64:if(Z===105||Z===99){cc+=te+U.charAt(fe);break}default:te.charCodeAt(Ze-1)!==58&&(Me+=i(te,ee,Z,te.charCodeAt(2)))}Dn=Ae=Ue=ee=0,te="",Z=U.charCodeAt(++fe)}}switch(Z){case 13:case 10:R===47?R=0:1+ee===0&&W!==107&&0<te.length&&(Ae=1,te+="\0"),0<E*O&&a(0,te,P,k,ze,we,Me.length,W,_,W),we=1,ze++;break;case 59:case 125:if(R+q+X+Y===0){we++;break}default:switch(we++,jt=U.charAt(fe),Z){case 9:case 32:if(q+Y+R===0)switch(Q){case 44:case 58:case 9:case 32:jt="";break;default:Z!==32&&(jt=" ")}break;case 0:jt="\\0";break;case 12:jt="\\f";break;case 11:jt="\\v";break;case 38:q+R+Y===0&&(Ae=Dn=1,jt="\f"+jt);break;case 108:if(q+R+Y+ie===0&&0<Ue)switch(fe-Ue){case 2:Q===112&&U.charCodeAt(fe-3)===58&&(ie=Q);case 8:ye===111&&(ie=ye)}break;case 58:q+R+Y===0&&(Ue=fe);break;case 44:R+X+q+Y===0&&(Ae=1,jt+="\r");break;case 34:case 39:R===0&&(q=q===Z?0:q===0?Z:q);break;case 91:q+R+X===0&&Y++;break;case 93:q+R+X===0&&Y--;break;case 41:q+R+Y===0&&X--;break;case 40:if(q+R+Y===0){if(ee===0)switch(2*Q+3*ye){case 533:break;default:ee=1}X++}break;case 64:R+X+q+Y+Ue+re===0&&(re=1);break;case 42:case 47:if(!(0<q+Y+X))switch(R){case 0:switch(2*Z+3*U.charCodeAt(fe+1)){case 235:R=47;break;case 220:Ze=fe,R=42}break;case 42:Z===47&&Q===42&&Ze+2!==fe&&(U.charCodeAt(Ze+2)===33&&(Me+=U.substring(Ze,fe+1)),jt="",R=0)}}R===0&&(te+=jt)}ye=Q,Q=Z,fe++}if(Ze=Me.length,0<Ze){if(Ae=P,0<E&&(Mn=a(2,Me,Ae,k,ze,we,Ze,W,_,W),Mn!==void 0&&(Me=Mn).length===0))return cc+Me+uc;if(Me=Ae.join(",")+"{"+Me+"}",y*ie!==0){switch(y!==2||s(Me,2)||(ie=0),ie){case 111:Me=Me.replace(b,":-moz-$1")+Me;break;case 112:Me=Me.replace(v,"::-webkit-input-$1")+Me.replace(v,"::-moz-$1")+Me.replace(v,":-ms-input-$1")+Me}ie=0}}return cc+Me+uc}function n(k,P,U){var W=P.trim().split(C);P=W;var _=W.length,Y=k.length;switch(Y){case 0:case 1:var R=0;for(k=Y===0?"":k[0]+" ";R<_;++R)P[R]=r(k,P[R],U).trim();break;default:var X=R=0;for(P=[];R<_;++R)for(var q=0;q<Y;++q)P[X++]=r(k[q]+" ",W[R],U).trim()}return P}function r(k,P,U){var W=P.charCodeAt(0);switch(33>W&&(W=(P=P.trim()).charCodeAt(0)),W){case 38:return P.replace(g,"$1"+k.trim());case 58:return k.trim()+P.replace(g,"$1"+k.trim());default:if(0<1*U&&0<P.indexOf("\f"))return P.replace(g,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+P}function i(k,P,U,W){var _=k+";",Y=2*P+3*U+4*W;if(Y===944){k=_.indexOf(":",9)+1;var R=_.substring(k,_.length-1).trim();return R=_.substring(0,k).trim()+R+";",y===1||y===2&&s(R,1)?"-webkit-"+R+R:R}if(y===0||y===2&&!s(_,1))return _;switch(Y){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(pe,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return R=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+_+"-ms-flex-pack"+R+_;case 1005:return m.test(_)?_.replace(h,":-webkit-")+_.replace(h,":-moz-")+_:_;case 1e3:switch(R=_.substring(13).trim(),P=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(P)){case 226:R=_.replace(A,"tb");break;case 232:R=_.replace(A,"tb-rl");break;case 220:R=_.replace(A,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+R+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(P=(_=k).length-10,R=(_.charCodeAt(P)===33?_.substring(0,P):_).substring(k.indexOf(":",7)+1).trim(),Y=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:_=_.replace(R,"-webkit-"+R)+";"+_;break;case 207:case 102:_=_.replace(R,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+_.replace(R,"-webkit-"+R)+";"+_.replace(R,"-ms-"+R+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return R=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+R+"-ms-flex-"+R+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(F,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(F,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(j.test(k)===!0)return(R=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?i(k.replace("stretch","fill-available"),P,U,W).replace(":fill-available",":stretch"):_.replace(R,"-webkit-"+R)+_.replace(R,"-moz-"+R.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,U+W===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+_}return _}function s(k,P){var U=k.indexOf(P===1?":":"{"),W=k.substring(0,P!==3?U:10);return U=k.substring(U+1,k.length-1),T(P!==2?W:W.replace(V,"$1"),U,P)}function o(k,P){var U=i(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return U!==P+";"?U.replace(M," or ($1)").substring(4):"("+P+")"}function a(k,P,U,W,_,Y,R,X,q,ee){for(var Z=0,Q=P,ye;Z<E;++Z)switch(ye=S[Z].call(f,k,Q,U,W,_,Y,R,X,q,ee)){case void 0:case!1:case!0:case null:break;default:Q=ye}if(Q!==P)return Q}function l(k){switch(k){case void 0:case null:E=S.length=0;break;default:if(typeof k=="function")S[E++]=k;else if(typeof k=="object")for(var P=0,U=k.length;P<U;++P)l(k[P]);else O=!!k|0}return l}function u(k){return k=k.prefix,k!==void 0&&(T=null,k?typeof k!="function"?y=1:(y=2,T=k):y=0),u}function f(k,P){var U=k;if(33>U.charCodeAt(0)&&(U=U.trim()),D=U,U=[D],0<E){var W=a(-1,P,U,U,ze,we,0,0,0,0);W!==void 0&&typeof W=="string"&&(P=W)}var _=e(x,U,P,0,0);return 0<E&&(W=a(-2,_,U,U,ze,we,_.length,0,0,0),W!==void 0&&(_=W)),D="",ie=0,we=ze=1,_}var c=/^\0+/g,d=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,I=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,F=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,pe=/([^-])(image-set\()/,we=1,ze=1,ie=0,y=1,x=[],S=[],E=0,T=null,O=0,D="";return f.use=l,f.set=u,t!==void 0&&u(t),f}var PC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var RC=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gg=NC(function(t){return RC.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Kh=Pu.exports,AC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},OC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},LC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yh={};Yh[Kh.ForwardRef]=LC;Yh[Kh.Memo]=F0;function vg(t){return Kh.isMemo(t)?F0:Yh[t.$$typeof]||AC}var DC=Object.defineProperty,MC=Object.getOwnPropertyNames,yg=Object.getOwnPropertySymbols,FC=Object.getOwnPropertyDescriptor,UC=Object.getPrototypeOf,_g=Object.prototype;function U0(t,e,n){if(typeof e!="string"){if(_g){var r=UC(e);r&&r!==_g&&U0(t,r,n)}var i=MC(e);yg&&(i=i.concat(yg(e)));for(var s=vg(t),o=vg(e),a=0;a<i.length;++a){var l=i[a];if(!OC[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=FC(e,l);try{DC(t,l,u)}catch{}}}}return t}var $C=U0;function Kt(){return(Kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var wg=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},sd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Pu.exports.typeOf(t)},Ml=Object.freeze([]),or=Object.freeze({});function Ji(t){return typeof t=="function"}function Eg(t){return t.displayName||t.name||"Component"}function qh(t){return t&&typeof t.styledComponentId=="string"}var Zi=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Qh=typeof window<"u"&&"HTMLElement"in window,zC=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),jC={};function qr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var WC=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&qr(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),il=new Map,Fl=new Map,Qs=1,Na=function(t){if(il.has(t))return il.get(t);for(;Fl.has(Qs);)Qs++;var e=Qs++;return il.set(t,e),Fl.set(e,t),e},BC=function(t){return Fl.get(t)},HC=function(t,e){e>=Qs&&(Qs=e+1),il.set(t,e),Fl.set(e,t)},VC="style["+Zi+'][data-styled-version="5.3.6"]',GC=new RegExp("^"+Zi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),KC=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},YC=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(GC);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(HC(u,l),KC(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},qC=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},$0=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Zi))return f}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Zi,"active"),r.setAttribute("data-styled-version","5.3.6");var o=qC();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},QC=function(){function t(n){var r=this.element=$0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}qr(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),XC=function(){function t(n){var r=this.element=$0(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),JC=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Sg=Qh,ZC={isServer:!Qh,useCSSOMInjection:!zC},Ul=function(){function t(n,r,i){n===void 0&&(n=or),r===void 0&&(r={}),this.options=Kt({},ZC,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Qh&&Sg&&(Sg=!1,function(s){for(var o=document.querySelectorAll(VC),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Zi)!=="active"&&(YC(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Na(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Kt({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new JC(o):s?new QC(o):new XC(o),new WC(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Na(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Na(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Na(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=BC(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var f=Zi+".g"+o+'[id="'+a+'"]',c="";l!==void 0&&l.forEach(function(d){d.length>0&&(c+=d+",")}),s+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return s}(this)},t}(),eb=/(a)(d)/gi,kg=function(t){return String.fromCharCode(t+(t>25?39:97))};function od(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=kg(e%52)+n;return(kg(e%52)+n).replace(eb,"$1-$2")}var xi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},z0=function(t){return xi(5381,t)};function j0(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ji(n)&&!qh(n))return!1}return!0}var tb=z0("5.3.6"),nb=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&j0(e),this.componentId=n,this.baseHash=xi(tb,n),this.baseStyle=r,Ul.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Qr(this.rules,e,n,r).join(""),a=od(xi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,f=xi(this.baseHash,r.hash),c="",d=0;d<u;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var m=Qr(h,e,n,r),w=Array.isArray(m)?m.join(""):m;f=xi(f,w+d),c+=w}}if(c){var C=od(f>>>0);if(!n.hasNameForId(i,C)){var g=r(c,"."+C,void 0,i);n.insertRules(i,C,g)}s.push(C)}}return s.join(" ")},t}(),rb=/^\s*\/\/.*$/gm,ib=[":","[",".","#"];function sb(t){var e,n,r,i,s=t===void 0?or:t,o=s.options,a=o===void 0?or:o,l=s.plugins,u=l===void 0?Ml:l,f=new TC(a),c=[],d=function(w){function C(g){if(g)try{w(g+"}")}catch{}}return function(g,p,v,b,A,I,M,F,V,j){switch(g){case 1:if(V===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(F===0)return p+"/*|*/";break;case 3:switch(F){case 102:case 112:return w(v[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(C)}}}(function(w){c.push(w)}),h=function(w,C,g){return C===0&&ib.indexOf(g[n.length])!==-1||g.match(i)?w:"."+e};function m(w,C,g,p){p===void 0&&(p="&");var v=w.replace(rb,""),b=C&&g?g+" "+C+" { "+v+" }":v;return e=p,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(g||!C?"":C,b)}return f.use([].concat(u,[function(w,C,g){w===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,h))},d,function(w){if(w===-2){var C=c;return c=[],C}}])),m.hash=u.length?u.reduce(function(w,C){return C.name||qr(15),xi(w,C.name)},5381).toString():"",m}var W0=fn.createContext();W0.Consumer;var B0=fn.createContext(),ob=(B0.Consumer,new Ul),ad=sb();function H0(){return N.exports.useContext(W0)||ob}function V0(){return N.exports.useContext(B0)||ad}var ab=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ad);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return qr(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=ad),this.name+e.hash},t}(),lb=/([A-Z])/,ub=/([A-Z])/g,cb=/^ms-/,fb=function(t){return"-"+t.toLowerCase()};function Cg(t){return lb.test(t)?t.replace(ub,fb).replace(cb,"-ms-"):t}var bg=function(t){return t==null||t===!1||t===""};function Qr(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Qr(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(bg(t))return"";if(qh(t))return"."+t.styledComponentId;if(Ji(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Qr(l,e,n,r)}var u;return t instanceof ab?n?(t.inject(n,r),t.getName(r)):t:sd(t)?function f(c,d){var h,m,w=[];for(var C in c)c.hasOwnProperty(C)&&!bg(c[C])&&(Array.isArray(c[C])&&c[C].isCss||Ji(c[C])?w.push(Cg(C)+":",c[C],";"):sd(c[C])?w.push.apply(w,f(c[C],C)):w.push(Cg(C)+": "+(h=C,(m=c[C])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in PC?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(w,["}"]):w}(t):t.toString()}var Ig=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function G0(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Ji(t)||sd(t)?Ig(Qr(wg(Ml,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Ig(Qr(wg(t,n)))}var K0=function(t,e,n){return n===void 0&&(n=or),t.theme!==n.theme&&t.theme||e||n.theme},db=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hb=/(^-|-$)/g;function Fc(t){return t.replace(db,"-").replace(hb,"")}var Y0=function(t){return od(z0(t)>>>0)};function Ra(t){return typeof t=="string"&&!0}var ld=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},pb=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function mb(t,e,n){var r=t[n];ld(e)&&ld(r)?q0(r,e):t[n]=e}function q0(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(ld(o))for(var a in o)pb(a)&&mb(t,o[a],a)}return t}var Co=fn.createContext();Co.Consumer;function gb(t){var e=N.exports.useContext(Co),n=N.exports.useMemo(function(){return function(r,i){if(!r)return qr(14);if(Ji(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?qr(8):i?Kt({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?fn.createElement(Co.Provider,{value:n},t.children):null}var Uc={};function Q0(t,e,n){var r=qh(t),i=!Ra(t),s=e.attrs,o=s===void 0?Ml:s,a=e.componentId,l=a===void 0?function(p,v){var b=typeof p!="string"?"sc":Fc(p);Uc[b]=(Uc[b]||0)+1;var A=b+"-"+Y0("5.3.6"+b+Uc[b]);return v?v+"-"+A:A}(e.displayName,e.parentComponentId):a,u=e.displayName,f=u===void 0?function(p){return Ra(p)?"styled."+p:"Styled("+Eg(p)+")"}(t):u,c=e.displayName&&e.componentId?Fc(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,h=e.shouldForwardProp;r&&t.shouldForwardProp&&(h=e.shouldForwardProp?function(p,v,b){return t.shouldForwardProp(p,v,b)&&e.shouldForwardProp(p,v,b)}:t.shouldForwardProp);var m,w=new nb(n,c,r?t.componentStyle:void 0),C=w.isStatic&&o.length===0,g=function(p,v){return function(b,A,I,M){var F=b.attrs,V=b.componentStyle,j=b.defaultProps,pe=b.foldedComponentIds,we=b.shouldForwardProp,ze=b.styledComponentId,ie=b.target,y=function(W,_,Y){W===void 0&&(W=or);var R=Kt({},_,{theme:W}),X={};return Y.forEach(function(q){var ee,Z,Q,ye=q;for(ee in Ji(ye)&&(ye=ye(R)),ye)R[ee]=X[ee]=ee==="className"?(Z=X[ee],Q=ye[ee],Z&&Q?Z+" "+Q:Z||Q):ye[ee]}),[R,X]}(K0(A,N.exports.useContext(Co),j)||or,A,F),x=y[0],S=y[1],E=function(W,_,Y,R){var X=H0(),q=V0(),ee=_?W.generateAndInjectStyles(or,X,q):W.generateAndInjectStyles(Y,X,q);return ee}(V,M,x),T=I,O=S.$as||A.$as||S.as||A.as||ie,D=Ra(O),k=S!==A?Kt({},A,{},S):A,P={};for(var U in k)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?P.as=k[U]:(we?we(U,gg,O):!D||gg(U))&&(P[U]=k[U]));return A.style&&S.style!==A.style&&(P.style=Kt({},A.style,{},S.style)),P.className=Array.prototype.concat(pe,ze,E!==ze?E:null,A.className,S.className).filter(Boolean).join(" "),P.ref=T,N.exports.createElement(O,P)}(m,p,v,C)};return g.displayName=f,(m=fn.forwardRef(g)).attrs=d,m.componentStyle=w,m.displayName=f,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Ml,m.styledComponentId=c,m.target=r?t.target:t,m.withComponent=function(p){var v=e.componentId,b=function(I,M){if(I==null)return{};var F,V,j={},pe=Object.keys(I);for(V=0;V<pe.length;V++)F=pe[V],M.indexOf(F)>=0||(j[F]=I[F]);return j}(e,["componentId"]),A=v&&v+"-"+(Ra(p)?p:Fc(Eg(p)));return Q0(p,Kt({},b,{attrs:d,componentId:A}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?q0({},t.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&$C(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var ud=function(t){return function e(n,r,i){if(i===void 0&&(i=or),!Pu.exports.isValidElementType(r))return qr(1,String(r));var s=function(){return n(r,i,G0.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Kt({},i,{},o))},s.attrs=function(o){return e(n,r,Kt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Q0,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){ud[t]=ud(t)});var vb=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=j0(n),Ul.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Qr(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Ul.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function yb(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=G0.apply(void 0,[t].concat(n)),s="sc-global-"+Y0(JSON.stringify(i)),o=new vb(i,s);function a(u){var f=H0(),c=V0(),d=N.exports.useContext(Co),h=N.exports.useRef(f.allocateGSInstance(s)).current;return f.server&&l(h,u,f,d,c),N.exports.useLayoutEffect(function(){if(!f.server)return l(h,u,f,d,c),function(){return o.removeStyles(h,f)}},[h,u,f,d,c]),null}function l(u,f,c,d,h){if(o.isStatic)o.renderStyles(u,jC,c,h);else{var m=Kt({},f,{theme:K0(f,d,a.defaultProps)});o.renderStyles(u,m,c,h)}}return fn.memo(a)}const G=ud;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bo.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const xg="popstate";function _b(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ai(i.location.hash.substr(1));return cd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Io(s))}function r(i,s){wb(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return kb(e,n,r,t)}function wb(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Eb(){return Math.random().toString(36).substr(2,8)}function Tg(t){return{usr:t.state,key:t.key}}function cd(t,e,n,r){return n===void 0&&(n=null),bo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ai(e):e,{state:n,key:e&&e.key||r||Eb()})}function Io(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ai(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Sb(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Io(t);return new URL(n,e)}function kb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null;function u(){a=Qn.Pop,l&&l({action:a,location:d.location})}function f(h,m){a=Qn.Push;let w=cd(d.location,h,m);n&&n(w,h);let C=Tg(w),g=d.createHref(w);try{o.pushState(C,"",g)}catch{i.location.assign(g)}s&&l&&l({action:a,location:d.location})}function c(h,m){a=Qn.Replace;let w=cd(d.location,h,m);n&&n(w,h);let C=Tg(w),g=d.createHref(w);o.replaceState(C,"",g),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xg,u),l=h,()=>{i.removeEventListener(xg,u),l=null}},createHref(h){return e(i,h)},encodeLocation(h){let m=Sb(Io(h));return bo({},h,{pathname:m.pathname,search:m.search,hash:m.hash})},push:f,replace:c,go(h){return o.go(h)}};return d}var Pg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pg||(Pg={}));function Cb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ai(e):e,i=J0(r.pathname||"/",n);if(i==null)return null;let s=X0(t);bb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Lb(s[a],Fb(i));return o}function X0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Xe(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=ar([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),X0(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Ab(a,i.index),routesMeta:l})}),e}function bb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ob(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ib=/^:\w+$/,xb=3,Tb=2,Pb=1,Nb=10,Rb=-2,Ng=t=>t==="*";function Ab(t,e){let n=t.split("/"),r=n.length;return n.some(Ng)&&(r+=Rb),e&&(r+=Tb),n.filter(i=>!Ng(i)).reduce((i,s)=>i+(Ib.test(s)?xb:s===""?Pb:Nb),r)}function Ob(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Lb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",f=Db({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=a.route;s.push({params:r,pathname:ar([i,f.pathname]),pathnameBase:jb(ar([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=ar([i,f.pathnameBase]))}return s}function Db(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Mb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{if(f==="*"){let d=a[c]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[f]=Ub(a[c]||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Mb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Fb(t){try{return decodeURI(t)}catch(e){return Xh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ub(t,e){try{return decodeURIComponent(t)}catch(n){return Xh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function J0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $b(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ai(t):t;return{pathname:n?n.startsWith("/")?n:zb(n,e):e,search:Wb(r),hash:Bb(i)}}function zb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function e1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ai(t):(i=bo({},t),Xe(!i.pathname||!i.pathname.includes("?"),$c("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),$c("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),$c("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let c=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}a=c>=0?e[c]:"/"}let l=$b(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),jb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Wb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Bb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Hb{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function Vb(t){return t instanceof Hb}const Gb=new Set(["POST","PUT","PATCH","DELETE"]);[...Gb];var zu={exports:{}},ju={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kb=N.exports,Yb=Symbol.for("react.element"),qb=Symbol.for("react.fragment"),Qb=Object.prototype.hasOwnProperty,Xb=Kb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jb={key:!0,ref:!0,__self:!0,__source:!0};function t1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qb.call(e,r)&&!Jb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Yb,type:t,key:s,ref:o,props:i,_owner:Xb.current}}ju.Fragment=qb;ju.jsx=t1;ju.jsxs=t1;(function(t){t.exports=ju})(zu);const Xs=zu.exports.Fragment,L=zu.exports.jsx,le=zu.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fd.apply(this,arguments)}function Zb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const eI=typeof Object.is=="function"?Object.is:Zb,{useState:tI,useEffect:nI,useLayoutEffect:rI,useDebugValue:iI}=ff;function sI(t,e,n){const r=e(),[{inst:i},s]=tI({inst:{value:r,getSnapshot:e}});return rI(()=>{i.value=r,i.getSnapshot=e,zc(i)&&s({inst:i})},[t,r,e]),nI(()=>(zc(i)&&s({inst:i}),t(()=>{zc(i)&&s({inst:i})})),[t]),iI(r),r}function zc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!eI(n,r)}catch{return!0}}function oI(t,e,n){return e()}const aI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lI=!aI,uI=lI?oI:sI;"useSyncExternalStore"in ff&&(t=>t.useSyncExternalStore)(ff);const cI=N.exports.createContext(null),fI=N.exports.createContext(null),n1=N.exports.createContext(null),Jh=N.exports.createContext(null),Wu=N.exports.createContext(null),cs=N.exports.createContext({outlet:null,matches:[]}),r1=N.exports.createContext(null);function dI(t,e){let{relative:n}=e===void 0?{}:e;Yo()||Xe(!1);let{basename:r,navigator:i}=N.exports.useContext(Jh),{hash:s,pathname:o,search:a}=s1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ar([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Yo(){return N.exports.useContext(Wu)!=null}function Bu(){return Yo()||Xe(!1),N.exports.useContext(Wu).location}function Zh(){Yo()||Xe(!1);let{basename:t,navigator:e}=N.exports.useContext(Jh),{matches:n}=N.exports.useContext(cs),{pathname:r}=Bu(),i=JSON.stringify(Z0(n).map(a=>a.pathnameBase)),s=N.exports.useRef(!1);return N.exports.useEffect(()=>{s.current=!0}),N.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=e1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:ar([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function i1(){let{matches:t}=N.exports.useContext(cs),e=t[t.length-1];return e?e.params:{}}function s1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=N.exports.useContext(cs),{pathname:i}=Bu(),s=JSON.stringify(Z0(r).map(o=>o.pathnameBase));return N.exports.useMemo(()=>e1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function hI(t,e){Yo()||Xe(!1);let n=N.exports.useContext(n1),{matches:r}=N.exports.useContext(cs),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Bu(),l;if(e){var u;let m=typeof e=="string"?ai(e):e;o==="/"||((u=m.pathname)==null?void 0:u.startsWith(o))||Xe(!1),l=m}else l=a;let f=l.pathname||"/",c=o==="/"?f:f.slice(o.length)||"/",d=Cb(t,{pathname:c}),h=vI(d&&d.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:ar([o,m.pathname]),pathnameBase:m.pathnameBase==="/"?o:ar([o,m.pathnameBase])})),r,n||void 0);return e&&h?L(Wu.Provider,{value:{location:fd({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Qn.Pop},children:h}):h}function pI(){let t=_I(),e=Vb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return le(Xs,{children:[L("h2",{children:"Unhandled Thrown Error!"}),L("h3",{style:{fontStyle:"italic"},children:e}),n?L("pre",{style:i,children:n}):null,L("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),le("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",L("code",{style:s,children:"errorElement"})," props on\xA0",L("code",{style:s,children:"<Route>"})]})]})}class mI extends N.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?L(r1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function gI(t){let{routeContext:e,match:n,children:r}=t,i=N.exports.useContext(cI);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),L(cs.Provider,{value:e,children:r})}function vI(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Xe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||L(pI,{}):null,f=()=>L(gI,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?L(mI,{location:n.location,component:u,error:l,children:f()}):f()},null)}var Rg;(function(t){t.UseRevalidator="useRevalidator"})(Rg||(Rg={}));var dd;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(dd||(dd={}));function yI(t){let e=N.exports.useContext(n1);return e||Xe(!1),e}function _I(){var t;let e=N.exports.useContext(r1),n=yI(dd.UseRouteError),r=N.exports.useContext(cs),i=r.matches[r.matches.length-1];return e||(r||Xe(!1),i.route.id||Xe(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Nr(t){Xe(!1)}function wI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1}=t;Yo()&&Xe(!1);let a=e.replace(/^\/*/,"/"),l=N.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ai(r));let{pathname:u="/",search:f="",hash:c="",state:d=null,key:h="default"}=r,m=N.exports.useMemo(()=>{let w=J0(u,a);return w==null?null:{pathname:w,search:f,hash:c,state:d,key:h}},[a,u,f,c,d,h]);return m==null?null:L(Jh.Provider,{value:l,children:L(Wu.Provider,{children:n,value:{location:m,navigationType:i}})})}function EI(t){let{children:e,location:n}=t,r=N.exports.useContext(fI),i=r&&!e?r.router.routes:hd(e);return hI(i,n)}var Ag;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Ag||(Ag={}));new Promise(()=>{});function hd(t,e){e===void 0&&(e=[]);let n=[];return N.exports.Children.forEach(t,(r,i)=>{if(!N.exports.isValidElement(r))return;if(r.type===N.exports.Fragment){n.push.apply(n,hd(r.props.children,e));return}r.type!==Nr&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=hd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function SI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function CI(t,e){return t.button===0&&(!e||e==="_self")&&!kI(t)}const bI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function II(t){let{basename:e,children:n,window:r}=t,i=N.exports.useRef();i.current==null&&(i.current=_b({window:r,v5Compat:!0}));let s=i.current,[o,a]=N.exports.useState({action:s.action,location:s.location});return N.exports.useLayoutEffect(()=>s.listen(a),[s]),L(wI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const o1=N.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f}=e,c=SI(e,bI),d=dI(u,{relative:i}),h=xI(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:i});function m(w){r&&r(w),w.defaultPrevented||h(w)}return L("a",{...c,href:d,onClick:s?r:m,ref:n,target:l})});var Og;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Og||(Og={}));var Lg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Lg||(Lg={}));function xI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Zh(),l=Bu(),u=s1(t,{relative:o});return N.exports.useCallback(f=>{if(CI(f,n)){f.preventDefault();let c=r!==void 0?r:Io(l)===Io(u);a(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function Dg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dg(Object(n),!0).forEach(function(r){Ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $l(t){return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$l(t)}function TI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mg(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function PI(t,e,n){return e&&Mg(t.prototype,e),n&&Mg(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ve(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ep(t,e){return RI(t)||OI(t,e)||a1(t,e)||DI()}function qo(t){return NI(t)||AI(t)||a1(t)||LI()}function NI(t){if(Array.isArray(t))return pd(t)}function RI(t){if(Array.isArray(t))return t}function AI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function OI(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function a1(t,e){if(!!t){if(typeof t=="string")return pd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pd(t,e)}}function pd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function LI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fg=function(){},tp={},l1={},u1=null,c1={mark:Fg,measure:Fg};try{typeof window<"u"&&(tp=window),typeof document<"u"&&(l1=document),typeof MutationObserver<"u"&&(u1=MutationObserver),typeof performance<"u"&&(c1=performance)}catch{}var MI=tp.navigator||{},Ug=MI.userAgent,$g=Ug===void 0?"":Ug,mr=tp,xe=l1,zg=u1,Aa=c1;mr.document;var On=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",f1=~$g.indexOf("MSIE")||~$g.indexOf("Trident/"),Oa,La,Da,Ma,Fa,In="___FONT_AWESOME___",md=16,d1="fa",h1="svg-inline--fa",Xr="data-fa-i2svg",gd="data-fa-pseudo-element",FI="data-fa-pseudo-element-pending",np="data-prefix",rp="data-icon",jg="fontawesome-i2svg",UI="async",$I=["HTML","HEAD","STYLE","SCRIPT"],p1=function(){try{return!0}catch{return!1}}(),be="classic",Le="sharp",ip=[be,Le];function Qo(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[be]}})}var xo=Qo((Oa={},Ve(Oa,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ve(Oa,Le,{fa:"solid",fass:"solid","fa-solid":"solid"}),Oa)),To=Qo((La={},Ve(La,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ve(La,Le,{solid:"fass"}),La)),Po=Qo((Da={},Ve(Da,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ve(Da,Le,{fass:"fa-solid"}),Da)),zI=Qo((Ma={},Ve(Ma,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ve(Ma,Le,{"fa-solid":"fass"}),Ma)),jI=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,m1="fa-layers-text",WI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,BI=Qo((Fa={},Ve(Fa,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ve(Fa,Le,{900:"fass"}),Fa)),g1=[1,2,3,4,5,6,7,8,9,10],HI=g1.concat([11,12,13,14,15,16,17,18,19,20]),VI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},No=new Set;Object.keys(To[be]).map(No.add.bind(No));Object.keys(To[Le]).map(No.add.bind(No));var GI=[].concat(ip,qo(No),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mr.GROUP,Mr.SWAP_OPACITY,Mr.PRIMARY,Mr.SECONDARY]).concat(g1.map(function(t){return"".concat(t,"x")})).concat(HI.map(function(t){return"w-".concat(t)})),Js=mr.FontAwesomeConfig||{};function KI(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function YI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var qI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];qI.forEach(function(t){var e=ep(t,2),n=e[0],r=e[1],i=YI(KI(n));i!=null&&(Js[r]=i)})}var v1={styleDefault:"solid",familyDefault:"classic",cssPrefix:d1,replacementClass:h1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Js.familyPrefix&&(Js.cssPrefix=Js.familyPrefix);var es=B(B({},v1),Js);es.autoReplaceSvg||(es.observeMutations=!1);var K={};Object.keys(v1).forEach(function(t){Object.defineProperty(K,t,{enumerable:!0,set:function(n){es[t]=n,Zs.forEach(function(r){return r(K)})},get:function(){return es[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){es.cssPrefix=e,Zs.forEach(function(n){return n(K)})},get:function(){return es.cssPrefix}});mr.FontAwesomeConfig=K;var Zs=[];function QI(t){return Zs.push(t),function(){Zs.splice(Zs.indexOf(t),1)}}var Un=md,sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function XI(t){if(!(!t||!On)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return xe.head.insertBefore(e,r),t}}var JI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ro(){for(var t=12,e="";t-- >0;)e+=JI[Math.random()*62|0];return e}function fs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sp(t){return t.classList?fs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function y1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ZI(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(y1(t[n]),'" ')},"").trim()}function Hu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function op(t){return t.size!==sn.size||t.x!==sn.x||t.y!==sn.y||t.rotate!==sn.rotate||t.flipX||t.flipY}function ex(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function tx(t){var e=t.transform,n=t.width,r=n===void 0?md:n,i=t.height,s=i===void 0?md:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&f1?l+="translate(".concat(e.x/Un-r/2,"em, ").concat(e.y/Un-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Un,"em), calc(-50% + ").concat(e.y/Un,"em)) "):l+="translate(".concat(e.x/Un,"em, ").concat(e.y/Un,"em) "),l+="scale(".concat(e.size/Un*(e.flipX?-1:1),", ").concat(e.size/Un*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var nx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _1(){var t=d1,e=h1,n=K.cssPrefix,r=K.replacementClass,i=nx;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Wg=!1;function jc(){K.autoAddCss&&!Wg&&(XI(_1()),Wg=!0)}var rx={mixout:function(){return{dom:{css:_1,insertCss:jc}}},hooks:function(){return{beforeDOMElementCreation:function(){jc()},beforeI2svg:function(){jc()}}}},xn=mr||{};xn[In]||(xn[In]={});xn[In].styles||(xn[In].styles={});xn[In].hooks||(xn[In].hooks={});xn[In].shims||(xn[In].shims=[]);var Yt=xn[In],w1=[],ix=function t(){xe.removeEventListener("DOMContentLoaded",t),zl=1,w1.map(function(e){return e()})},zl=!1;On&&(zl=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),zl||xe.addEventListener("DOMContentLoaded",ix));function sx(t){!On||(zl?setTimeout(t,0):w1.push(t))}function Xo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?y1(t):"<".concat(e," ").concat(ZI(r),">").concat(s.map(Xo).join(""),"</").concat(e,">")}function Bg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ox=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Wc=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?ox(n,i):n,l,u,f;for(r===void 0?(l=1,f=e[s[0]]):(l=0,f=r);l<o;l++)u=s[l],f=a(f,e[u],u,e);return f};function ax(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function vd(t){var e=ax(t);return e.length===1?e[0].toString(16):null}function lx(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Hg(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function yd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Hg(e);typeof Yt.hooks.addPack=="function"&&!i?Yt.hooks.addPack(t,Hg(e)):Yt.styles[t]=B(B({},Yt.styles[t]||{}),s),t==="fas"&&yd("fa",e)}var Ua,$a,za,Ti=Yt.styles,ux=Yt.shims,cx=(Ua={},Ve(Ua,be,Object.values(Po[be])),Ve(Ua,Le,Object.values(Po[Le])),Ua),ap=null,E1={},S1={},k1={},C1={},b1={},fx=($a={},Ve($a,be,Object.keys(xo[be])),Ve($a,Le,Object.keys(xo[Le])),$a);function dx(t){return~GI.indexOf(t)}function hx(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!dx(i)?i:null}var I1=function(){var e=function(s){return Wc(Ti,function(o,a,l){return o[l]=Wc(a,s,{}),o},{})};E1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),S1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),b1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ti||K.autoFetchSvg,r=Wc(ux,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});k1=r.names,C1=r.unicodes,ap=Vu(K.styleDefault,{family:K.familyDefault})};QI(function(t){ap=Vu(t.styleDefault,{family:K.familyDefault})});I1();function lp(t,e){return(E1[t]||{})[e]}function px(t,e){return(S1[t]||{})[e]}function Fr(t,e){return(b1[t]||{})[e]}function x1(t){return k1[t]||{prefix:null,iconName:null}}function mx(t){var e=C1[t],n=lp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gr(){return ap}var up=function(){return{prefix:null,iconName:null,rest:[]}};function Vu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?be:n,i=xo[r][t],s=To[r][t]||To[r][i],o=t in Yt.styles?t:null;return s||o||null}var Vg=(za={},Ve(za,be,Object.keys(Po[be])),Ve(za,Le,Object.keys(Po[Le])),za);function Gu(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ve(e,be,"".concat(K.cssPrefix,"-").concat(be)),Ve(e,Le,"".concat(K.cssPrefix,"-").concat(Le)),e),o=null,a=be;(t.includes(s[be])||t.some(function(u){return Vg[be].includes(u)}))&&(a=be),(t.includes(s[Le])||t.some(function(u){return Vg[Le].includes(u)}))&&(a=Le);var l=t.reduce(function(u,f){var c=hx(K.cssPrefix,f);if(Ti[f]?(f=cx[a].includes(f)?zI[a][f]:f,o=f,u.prefix=f):fx[a].indexOf(f)>-1?(o=f,u.prefix=Vu(f,{family:a})):c?u.iconName=c:f!==K.replacementClass&&f!==s[be]&&f!==s[Le]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var d=o==="fa"?x1(u.iconName):{},h=Fr(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||h||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ti.far&&Ti.fas&&!K.autoFetchSvg&&(u.prefix="fas")}return u},up());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Le&&(Ti.fass||K.autoFetchSvg)&&(l.prefix="fass",l.iconName=Fr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gr()||"fas"),l}var gx=function(){function t(){TI(this,t),this.definitions={}}return PI(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=B(B({},n.definitions[a]||{}),o[a]),yd(a,o[a]);var l=Po[be][a];l&&yd(l,o[a]),I1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(n[a][c]=u)}),n[a][l]=u}),n}}]),t}(),Gg=[],Pi={},$i={},vx=Object.keys($i);function yx(t,e){var n=e.mixoutsTo;return Gg=t,Pi={},Object.keys($i).forEach(function(r){vx.indexOf(r)===-1&&delete $i[r]}),Gg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),$l(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Pi[o]||(Pi[o]=[]),Pi[o].push(s[o])})}r.provides&&r.provides($i)}),n}function _d(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Pi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Jr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Pi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Tn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $i[t]?$i[t].apply(null,e):void 0}function wd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||gr();if(!!e)return e=Fr(n,e)||e,Bg(T1.definitions,n,e)||Bg(Yt.styles,n,e)}var T1=new gx,_x=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,Jr("noAuto")},wx={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return On?(Jr("beforeI2svg",e),Tn("pseudoElements2svg",e),Tn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,sx(function(){Sx({autoReplaceSvgRoot:n}),Jr("watch",e)})}},Ex={icon:function(e){if(e===null)return null;if($l(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Fr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Vu(e[0]);return{prefix:r,iconName:Fr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(jI))){var i=Gu(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||gr(),iconName:Fr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=gr();return{prefix:s,iconName:Fr(s,e)||e}}}},At={noAuto:_x,config:K,dom:wx,parse:Ex,library:T1,findIconDefinition:wd,toHtml:Xo},Sx=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(Yt.styles).length>0||K.autoFetchSvg)&&On&&K.autoReplaceSvg&&At.dom.i2svg({node:r})};function Ku(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Xo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!On){var r=xe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function kx(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(op(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Hu(B(B({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Cx(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},i),{},{id:o}),children:r}]}]}function cp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,f=t.titleId,c=t.extra,d=t.watchable,h=d===void 0?!1:d,m=r.found?r:n,w=m.width,C=m.height,g=i==="fak",p=[K.replacementClass,s?"".concat(K.cssPrefix,"-").concat(s):""].filter(function(V){return c.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(c.classes).join(" "),v={children:[],attributes:B(B({},c.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(C)})},b=g&&!~c.classes.indexOf("fa-fw")?{width:"".concat(w/C*16*.0625,"em")}:{};h&&(v.attributes[Xr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||Ro())},children:[l]}),delete v.attributes.title);var A=B(B({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:B(B({},b),c.styles)}),I=r.found&&n.found?Tn("generateAbstractMask",A)||{children:[],attributes:{}}:Tn("generateAbstractIcon",A)||{children:[],attributes:{}},M=I.children,F=I.attributes;return A.children=M,A.attributes=F,a?Cx(A):kx(A)}function Kg(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=B(B(B({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Xr]="");var f=B({},o.styles);op(i)&&(f.transform=tx({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var c=Hu(f);c.length>0&&(u.style=c);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function bx(t){var e=t.content,n=t.title,r=t.extra,i=B(B(B({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Hu(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Bc=Yt.styles;function Ed(t){var e=t[0],n=t[1],r=t.slice(4),i=ep(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(Mr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Mr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Mr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Ix={found:!1,width:512,height:512};function xx(t,e){!p1&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Sd(t,e){var n=e;return e==="fa"&&K.styleDefault!==null&&(e=gr()),new Promise(function(r,i){if(Tn("missingIconAbstract"),n==="fa"){var s=x1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Bc[e]&&Bc[e][t]){var o=Bc[e][t];return r(Ed(o))}xx(t,e),r(B(B({},Ix),{},{icon:K.showMissingIcons&&t?Tn("missingIconAbstract")||{}:{}}))})}var Yg=function(){},kd=K.measurePerformance&&Aa&&Aa.mark&&Aa.measure?Aa:{mark:Yg,measure:Yg},Us='FA "6.2.1"',Tx=function(e){return kd.mark("".concat(Us," ").concat(e," begins")),function(){return P1(e)}},P1=function(e){kd.mark("".concat(Us," ").concat(e," ends")),kd.measure("".concat(Us," ").concat(e),"".concat(Us," ").concat(e," begins"),"".concat(Us," ").concat(e," ends"))},fp={begin:Tx,end:P1},sl=function(){};function qg(t){var e=t.getAttribute?t.getAttribute(Xr):null;return typeof e=="string"}function Px(t){var e=t.getAttribute?t.getAttribute(np):null,n=t.getAttribute?t.getAttribute(rp):null;return e&&n}function Nx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function Rx(){if(K.autoReplaceSvg===!0)return ol.replace;var t=ol[K.autoReplaceSvg];return t||ol.replace}function Ax(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function Ox(t){return xe.createElement(t)}function N1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Ax:Ox:n;if(typeof t=="string")return xe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(N1(o,{ceFn:r}))}),i}function Lx(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ol={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(N1(i),n)}),n.getAttribute(Xr)===null&&K.keepOriginalSource){var r=xe.createComment(Lx(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~sp(n).indexOf(K.replacementClass))return ol.replace(e);var i=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===K.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Xo(a)}).join(`
`);n.setAttribute(Xr,""),n.innerHTML=o}};function Qg(t){t()}function R1(t,e){var n=typeof e=="function"?e:sl;if(t.length===0)n();else{var r=Qg;K.mutateApproach===UI&&(r=mr.requestAnimationFrame||Qg),r(function(){var i=Rx(),s=fp.begin("mutate");t.map(i),s(),n()})}}var dp=!1;function A1(){dp=!0}function Cd(){dp=!1}var jl=null;function Xg(t){if(!!zg&&!!K.observeMutations){var e=t.treeCallback,n=e===void 0?sl:e,r=t.nodeCallback,i=r===void 0?sl:r,s=t.pseudoElementsCallback,o=s===void 0?sl:s,a=t.observeMutationsRoot,l=a===void 0?xe:a;jl=new zg(function(u){if(!dp){var f=gr();fs(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!qg(c.addedNodes[0])&&(K.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&K.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&qg(c.target)&&~VI.indexOf(c.attributeName))if(c.attributeName==="class"&&Px(c.target)){var d=Gu(sp(c.target)),h=d.prefix,m=d.iconName;c.target.setAttribute(np,h||f),m&&c.target.setAttribute(rp,m)}else Nx(c.target)&&i(c.target)})}}),On&&jl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Dx(){!jl||jl.disconnect()}function Mx(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Fx(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Gu(sp(t));return i.prefix||(i.prefix=gr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=px(i.prefix,t.innerText)||lp(i.prefix,vd(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ux(t){var e=fs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||Ro()):(e["aria-hidden"]="true",e.focusable="false")),e}function $x(){return{iconName:null,title:null,titleId:null,prefix:null,transform:sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fx(t),r=n.iconName,i=n.prefix,s=n.rest,o=Ux(t),a=_d("parseNodeAttributes",{},t),l=e.styleParser?Mx(t):[];return B({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var zx=Yt.styles;function O1(t){var e=K.autoReplaceSvg==="nest"?Jg(t,{styleParser:!1}):Jg(t);return~e.extra.classes.indexOf(m1)?Tn("generateLayersText",t,e):Tn("generateSvgReplacementMutation",t,e)}var vr=new Set;ip.map(function(t){vr.add("fa-".concat(t))});Object.keys(xo[be]).map(vr.add.bind(vr));Object.keys(xo[Le]).map(vr.add.bind(vr));vr=qo(vr);function Zg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!On)return Promise.resolve();var n=xe.documentElement.classList,r=function(c){return n.add("".concat(jg,"-").concat(c))},i=function(c){return n.remove("".concat(jg,"-").concat(c))},s=K.autoFetchSvg?vr:ip.map(function(f){return"fa-".concat(f)}).concat(Object.keys(zx));s.includes("fa")||s.push("fa");var o=[".".concat(m1,":not([").concat(Xr,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(Xr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=fp.begin("onTree"),u=a.reduce(function(f,c){try{var d=O1(c);d&&f.push(d)}catch(h){p1||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,c){Promise.all(u).then(function(d){R1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),c(d)})})}function jx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;O1(t).then(function(n){n&&R1([n],e)})}function Wx(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:wd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:wd(i||{})),t(r,B(B({},n),{},{mask:i}))}}var Bx=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?sn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,f=u===void 0?null:u,c=n.title,d=c===void 0?null:c,h=n.titleId,m=h===void 0?null:h,w=n.classes,C=w===void 0?[]:w,g=n.attributes,p=g===void 0?{}:g,v=n.styles,b=v===void 0?{}:v;if(!!e){var A=e.prefix,I=e.iconName,M=e.icon;return Ku(B({type:"icon"},e),function(){return Jr("beforeDOMElementCreation",{iconDefinition:e,params:n}),K.autoA11y&&(d?p["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(m||Ro()):(p["aria-hidden"]="true",p.focusable="false")),cp({icons:{main:Ed(M),mask:l?Ed(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:I,transform:B(B({},sn),i),symbol:o,title:d,maskId:f,titleId:m,extra:{attributes:p,styles:b,classes:C}})})}},Hx={mixout:function(){return{icon:Wx(Bx)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zg,n.nodeCallback=jx,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,s=n.callback,o=s===void 0?function(){}:s;return Zg(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,f=r.mask,c=r.maskId,d=r.extra;return new Promise(function(h,m){Promise.all([Sd(i,a),f.iconName?Sd(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var C=ep(w,2),g=C[0],p=C[1];h([n,cp({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:c,title:s,titleId:o,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Hu(a);l.length>0&&(i.style=l);var u;return op(o)&&(u=Tn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},Vx={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ku({type:"layer"},function(){Jr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(qo(s)).join(" ")},children:o}]})}}}},Gx={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,f=r.styles,c=f===void 0?{}:f;return Ku({type:"counter",content:n},function(){return Jr("beforeDOMElementCreation",{content:n,params:r}),bx({content:n.toString(),title:s,extra:{attributes:u,styles:c,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(qo(a))}})})}}}},Kx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?sn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,f=r.attributes,c=f===void 0?{}:f,d=r.styles,h=d===void 0?{}:d;return Ku({type:"text",content:n},function(){return Jr("beforeDOMElementCreation",{content:n,params:r}),Kg({content:n,transform:B(B({},sn),s),title:a,extra:{attributes:c,styles:h,classes:["".concat(K.cssPrefix,"-layers-text")].concat(qo(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(f1){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/u,l=f.height/u}return K.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Kg({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Yx=new RegExp('"',"ug"),ev=[1105920,1112319];function qx(t){var e=t.replace(Yx,""),n=lx(e,0),r=n>=ev[0]&&n<=ev[1],i=e.length===2?e[0]===e[1]:!1;return{value:vd(i?e[0]:e),isSecondary:r||i}}function tv(t,e){var n="".concat(FI).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=fs(t.children),o=s.filter(function(M){return M.getAttribute(gd)===e})[0],a=mr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(WI),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var c=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Le:be,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?To[d][l[2].toLowerCase()]:BI[d][u],m=qx(c),w=m.value,C=m.isSecondary,g=l[0].startsWith("FontAwesome"),p=lp(h,w),v=p;if(g){var b=mx(w);b.iconName&&b.prefix&&(p=b.iconName,h=b.prefix)}if(p&&!C&&(!o||o.getAttribute(np)!==h||o.getAttribute(rp)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var A=$x(),I=A.extra;I.attributes[gd]=e,Sd(p,h).then(function(M){var F=cp(B(B({},A),{},{icons:{main:M,mask:up()},prefix:h,iconName:v,extra:I,watchable:!0})),V=xe.createElement("svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=F.map(function(j){return Xo(j)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Qx(t){return Promise.all([tv(t,"::before"),tv(t,"::after")])}function Xx(t){return t.parentNode!==document.head&&!~$I.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(gd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function nv(t){if(!!On)return new Promise(function(e,n){var r=fs(t.querySelectorAll("*")).filter(Xx).map(Qx),i=fp.begin("searchPseudoElements");A1(),Promise.all(r).then(function(){i(),Cd(),e()}).catch(function(){i(),Cd(),n()})})}var Jx={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=nv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;K.searchPseudoElements&&nv(i)}}},rv=!1,Zx={mixout:function(){return{dom:{unwatch:function(){A1(),rv=!0}}}},hooks:function(){return{bootstrap:function(){Xg(_d("mutationObserverCallbacks",{}))},noAuto:function(){Dx()},watch:function(n){var r=n.observeMutationsRoot;rv?Cd():Xg(_d("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},iv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},eT={mixout:function(){return{parse:{transform:function(n){return iv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=iv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:c,path:d};return{tag:"g",attributes:B({},h.outer),children:[{tag:"g",attributes:B({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:B(B({},r.icon.attributes),h.path)}]}]}}}},Hc={x:0,y:0,width:"100%",height:"100%"};function sv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function tT(t){return t.tag==="g"?t.children:[t]}var nT={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Gu(i.split(" ").map(function(o){return o.trim()})):up();return s.prefix||(s.prefix=gr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,f=s.icon,c=o.width,d=o.icon,h=ex({transform:l,containerWidth:c,iconWidth:u}),m={tag:"rect",attributes:B(B({},Hc),{},{fill:"white"})},w=f.children?{children:f.children.map(sv)}:{},C={tag:"g",attributes:B({},h.inner),children:[sv(B({tag:f.tag,attributes:B(B({},f.attributes),h.path)},w))]},g={tag:"g",attributes:B({},h.outer),children:[C]},p="mask-".concat(a||Ro()),v="clip-".concat(a||Ro()),b={tag:"mask",attributes:B(B({},Hc),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:tT(d)},b]};return r.push(A,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Hc)}),{children:r,attributes:i}}}},rT={provides:function(e){var n=!1;mr.matchMedia&&(n=mr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:B(B({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=B(B({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:B(B({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:B(B({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:B(B({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:B(B({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:B(B({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},iT={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},sT=[rx,Hx,Vx,Gx,Kx,Jx,Zx,eT,nT,rT,iT];yx(sT,{mixoutsTo:At});At.noAuto;At.config;At.library;At.dom;var bd=At.parse;At.findIconDefinition;At.toHtml;var oT=At.icon;At.layer;At.text;At.counter;var se={exports:{}},aT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lT=aT,uT=lT;function L1(){}function D1(){}D1.resetWarningCache=L1;var cT=function(){function t(r,i,s,o,a,l){if(l!==uT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:D1,resetWarningCache:L1};return n.PropTypes=n,n};se.exports=cT();function ov(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ov(Object(n),!0).forEach(function(r){Ni(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ov(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wl(t){return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wl(t)}function Ni(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dT(t,e){if(t==null)return{};var n=fT(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Id(t){return hT(t)||pT(t)||mT(t)||gT()}function hT(t){if(Array.isArray(t))return xd(t)}function pT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mT(t,e){if(!!t){if(typeof t=="string")return xd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xd(t,e)}}function xd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function gT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vT(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,f=t.spinReverse,c=t.pulse,d=t.fixedWidth,h=t.inverse,m=t.border,w=t.listItem,C=t.flip,g=t.size,p=t.rotation,v=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":d,"fa-inverse":h,"fa-border":m,"fa-li":w,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Ni(e,"fa-".concat(g),typeof g<"u"&&g!==null),Ni(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Ni(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Ni(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(A){return b[A]?A:null}).filter(function(A){return A})}function yT(t){return t=t-0,t===t}function M1(t){return yT(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var _T=["style"];function wT(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ET(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=M1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[wT(i)]=s:e[i]=s,e},{})}function F1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return F1(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=ET(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[M1(u)]=f}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=dT(n,_T);return i.attrs.style=Xn(Xn({},i.attrs.style),o),t.apply(void 0,[e.tag,Xn(Xn({},i.attrs),a)].concat(Id(r)))}var U1=!1;try{U1=!0}catch{}function ST(){if(!U1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function av(t){if(t&&Wl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(bd.icon)return bd.icon(t);if(t===null)return null;if(t&&Wl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Vc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ni({},t,e):{}}var br=fn.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=av(n),f=Vc("classes",[].concat(Id(vT(t)),Id(s.split(" ")))),c=Vc("transform",typeof t.transform=="string"?bd.transform(t.transform):t.transform),d=Vc("mask",av(r)),h=oT(u,Xn(Xn(Xn(Xn({},f),c),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!h)return ST("Could not find icon",u),null;var m=h.abstract,w={ref:e};return Object.keys(t).forEach(function(C){br.defaultProps.hasOwnProperty(C)||(w[C]=t[C])}),kT(m[0],w)});br.displayName="FontAwesomeIcon";br.propTypes={beat:se.exports.bool,border:se.exports.bool,beatFade:se.exports.bool,bounce:se.exports.bool,className:se.exports.string,fade:se.exports.bool,flash:se.exports.bool,mask:se.exports.oneOfType([se.exports.object,se.exports.array,se.exports.string]),maskId:se.exports.string,fixedWidth:se.exports.bool,inverse:se.exports.bool,flip:se.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:se.exports.oneOfType([se.exports.object,se.exports.array,se.exports.string]),listItem:se.exports.bool,pull:se.exports.oneOf(["right","left"]),pulse:se.exports.bool,rotation:se.exports.oneOf([0,90,180,270]),shake:se.exports.bool,size:se.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:se.exports.bool,spinPulse:se.exports.bool,spinReverse:se.exports.bool,symbol:se.exports.oneOfType([se.exports.bool,se.exports.string]),title:se.exports.string,titleId:se.exports.string,transform:se.exports.oneOfType([se.exports.string,se.exports.object]),swapOpacity:se.exports.bool};br.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var kT=F1.bind(null,fn.createElement),CT={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"]},bT=CT,IT={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},xT={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},TT={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},PT=TT,NT={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},RT=NT,AT={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"]},OT=AT,LT={prefix:"fas",iconName:"rectangle-xmark",icon:[512,512,[62164,"rectangle-times","times-rectangle","window-close"],"f410","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},DT=LT;const MT=G.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`,FT=G.h1`
  font-weight: normal;
  color: ${t=>t.theme.colors.text};
`,UT=G.div`
  flex-grow: 1;
`,$T=G.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: ${t=>t.theme.colors.text};
`,zT=G(o1)`
  text-decoration: none;
  color: ${t=>t.theme.colors.text};
`,jT=({onClickSettings:t})=>le(MT,{children:[le(FT,{children:[L(zT,{to:"/",children:"\u2658"})," react-chess"]}),L(UT,{}),L($T,{onClick:t,children:L(br,{icon:OT,style:{margin:"auto"}})})]}),hp={hasLoaded:!1,isDarkTheme:!1,darkTheme:!1,useSystemTheme:!0,allowPause:!0,useChessNotation:!1,gameLength:10,defaultUsername:"online player"},Gc=window.matchMedia("(prefers-color-scheme: dark)"),WT=()=>{const t={...hp};t.hasLoaded=!0;const e=localStorage.getItem("react-chess.darkTheme");e&&(t.darkTheme=e==="true");const n=localStorage.getItem("react-chess.useSystemTheme");n&&(t.useSystemTheme=n==="true");const r=localStorage.getItem("react-chess.allowPause");r&&(t.allowPause=r==="true");const i=localStorage.getItem("react-chess.useChessNotation");i&&(t.useChessNotation=i==="true");const s=localStorage.getItem("react-chess.gameLength");s&&(t.gameLength=parseInt(s));const o=localStorage.getItem("react-chess.defaultUsername");return o&&(t.defaultUsername=o),t},lv=t=>{if(!!t.hasLoaded)for(const[e,n]of Object.entries(t))localStorage.setItem(`react-chess.${e}`,n)},Ir=N.exports.createContext({...hp,updateSettings:()=>{}}),BT=t=>{const[e,n]=N.exports.useState(hp),[r,i]=N.exports.useState(Gc.matches),s=o=>{i(o.matches)};return N.exports.useEffect(()=>(n(WT()),Gc.addEventListener("change",s),()=>{lv(e),Gc.removeEventListener("change",s)}),[]),N.exports.useEffect(()=>{e.useSystemTheme?r!==e.isDarkTheme&&n(o=>{const a={...o};return a.isDarkTheme=r,a}):e.darkTheme!==e.isDarkTheme&&n(o=>{const a={...o};return a.isDarkTheme=e.darkTheme,a})},[e.darkTheme,e.useSystemTheme,r]),N.exports.useEffect(()=>{lv(e)},[e]),L(Ir.Provider,{value:{...e,updateSettings:n},children:t.children})};function HT(){return new Worker("/react-chess/assets/bot.285fa3b0.js")}var Bl={};(function(t){/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.Chess=t.validateFen=t.SQUARES=t.DEFAULT_POSITION=t.KING=t.QUEEN=t.ROOK=t.BISHOP=t.KNIGHT=t.PAWN=t.BLACK=t.WHITE=void 0,t.WHITE="w",t.BLACK="b",t.PAWN="p",t.KNIGHT="n",t.BISHOP="b",t.ROOK="r",t.QUEEN="q",t.KING="k",t.DEFAULT_POSITION="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";const e=-1,n={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"};t.SQUARES=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"];const r={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},i={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},s={b:[16,32,17,15],w:[-16,-32,-17,-15]},o={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},a=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],l=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],u={p:1,n:2,b:4,r:8,q:16,k:32},f="pnbrqkPNBRQK",c=[t.KNIGHT,t.BISHOP,t.ROOK,t.QUEEN],d=7,h=6,m=1,w=0,C={w:[{square:i.a1,flag:r.QSIDE_CASTLE},{square:i.h1,flag:r.KSIDE_CASTLE}],b:[{square:i.a8,flag:r.QSIDE_CASTLE},{square:i.h8,flag:r.KSIDE_CASTLE}]},g={b:m,w:h},p=["1-0","0-1","1/2-1/2","*"];function v(ie){return ie>>4}function b(ie){return ie&15}function A(ie){return"0123456789".indexOf(ie)!==-1}function I(ie){const y=b(ie),x=v(ie);return"abcdefgh".substring(y,y+1)+"87654321".substring(x,x+1)}function M(ie){return ie===t.WHITE?t.BLACK:t.WHITE}function F(ie){const y=ie.split(/\s+/);if(y.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const x=parseInt(y[5],10);if(isNaN(x)||x<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const S=parseInt(y[4],10);if(isNaN(S)||S<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(y[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(y[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(y[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const E=y[0].split("/");if(E.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let O=0;O<E.length;O++){let D=0,k=!1;for(let P=0;P<E[O].length;P++)if(A(E[O][P])){if(k)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};D+=parseInt(E[O][P],10),k=!0}else{if(!/^[prnbqkPRNBQK]$/.test(E[O][P]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};D+=1,k=!1}if(D!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(y[3][1]=="3"&&y[1]=="w"||y[3][1]=="6"&&y[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const T=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:O,regex:D}of T){if(!D.test(y[0]))return{ok:!1,error:`Invalid FEN: missing ${O} king`};if((y[0].match(D)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${O} kings`}}return{ok:!0}}t.validateFen=F;function V(ie,y){const x=ie.from,S=ie.to,E=ie.piece;let T=0,O=0,D=0;for(let k=0,P=y.length;k<P;k++){const U=y[k].from,W=y[k].to,_=y[k].piece;E===_&&x!==U&&S===W&&(T++,v(x)===v(U)&&O++,b(x)===b(U)&&D++)}return T>0?O>0&&D>0?I(x):D>0?I(x).charAt(1):I(x).charAt(0):""}function j(ie,y,x,S,E,T=void 0,O=r.NORMAL){const D=v(S);if(E===t.PAWN&&(D===d||D===w))for(let k=0;k<c.length;k++){const P=c[k];ie.push({color:y,from:x,to:S,piece:E,captured:T,promotion:P,flags:O|r.PROMOTION})}else ie.push({color:y,from:x,to:S,piece:E,captured:T,flags:O})}function pe(ie){let y=ie.charAt(0);return y>="a"&&y<="h"?ie.match(/[a-h]\d.*[a-h]\d/)?void 0:t.PAWN:(y=y.toLowerCase(),y==="o"?t.KING:y)}function we(ie){return ie.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class ze{constructor(y=t.DEFAULT_POSITION){this._board=new Array(128),this._turn=t.WHITE,this._header={},this._kings={w:e,b:e},this._epSquare=-1,this._halfMoves=0,this._moveNumber=0,this._history=[],this._comments={},this._castling={w:0,b:0},this.load(y)}clear(y=!1){this._board=new Array(128),this._kings={w:e,b:e},this._turn=t.WHITE,this._castling={w:0,b:0},this._epSquare=e,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=y?this._header:{},this._updateSetup(this.fen())}removeHeader(y){y in this._header&&delete this._header[y]}load(y,x=!1){let S=y.split(/\s+/);if(S.length>=2&&S.length<6){const k=["-","-","0","1"];y=S.concat(k.slice(-(6-S.length))).join(" ")}S=y.split(/\s+/);const{ok:E,error:T}=F(y);if(!E)throw new Error(T);const O=S[0];let D=0;this.clear(x);for(let k=0;k<O.length;k++){const P=O.charAt(k);if(P==="/")D+=8;else if(A(P))D+=parseInt(P,10);else{const U=P<"a"?t.WHITE:t.BLACK;this.put({type:P.toLowerCase(),color:U},I(D)),D++}}this._turn=S[1],S[2].indexOf("K")>-1&&(this._castling.w|=r.KSIDE_CASTLE),S[2].indexOf("Q")>-1&&(this._castling.w|=r.QSIDE_CASTLE),S[2].indexOf("k")>-1&&(this._castling.b|=r.KSIDE_CASTLE),S[2].indexOf("q")>-1&&(this._castling.b|=r.QSIDE_CASTLE),this._epSquare=S[3]==="-"?e:i[S[3]],this._halfMoves=parseInt(S[4],10),this._moveNumber=parseInt(S[5],10),this._updateSetup(this.fen())}fen(){var y,x;let S=0,E="";for(let D=i.a8;D<=i.h1;D++){if(this._board[D]){S>0&&(E+=S,S=0);const{color:k,type:P}=this._board[D];E+=k===t.WHITE?P.toUpperCase():P.toLowerCase()}else S++;D+1&136&&(S>0&&(E+=S),D!==i.h1&&(E+="/"),S=0,D+=8)}let T="";this._castling[t.WHITE]&r.KSIDE_CASTLE&&(T+="K"),this._castling[t.WHITE]&r.QSIDE_CASTLE&&(T+="Q"),this._castling[t.BLACK]&r.KSIDE_CASTLE&&(T+="k"),this._castling[t.BLACK]&r.QSIDE_CASTLE&&(T+="q"),T=T||"-";let O="-";if(this._epSquare!==e){const D=this._epSquare+(this._turn===t.WHITE?16:-16),k=[D+1,D-1];for(const P of k){if(P&136)continue;const U=this._turn;if(((y=this._board[P])===null||y===void 0?void 0:y.color)===U&&((x=this._board[P])===null||x===void 0?void 0:x.type)===t.PAWN){this._makeMove({color:U,from:P,to:this._epSquare,piece:t.PAWN,captured:t.PAWN,flags:r.EP_CAPTURE});const W=!this._isKingAttacked(U);if(this._undoMove(),W){O=I(this._epSquare);break}}}}return[E,this._turn,T,O,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(y){this._history.length>0||(y!==t.DEFAULT_POSITION?(this._header.SetUp="1",this._header.FEN=y):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(t.DEFAULT_POSITION)}get(y){return this._board[i[y]]||!1}put({type:y,color:x},S){if(f.indexOf(y.toLowerCase())===-1||!(S in i))return!1;const E=i[S];return y==t.KING&&!(this._kings[x]==e||this._kings[x]==E)?!1:(this._board[E]={type:y,color:x},y===t.KING&&(this._kings[x]=E),this._updateSetup(this.fen()),!0)}remove(y){const x=this.get(y);return delete this._board[i[y]],x&&x.type===t.KING&&(this._kings[x.color]=e),this._updateSetup(this.fen()),x}_attacked(y,x){for(let S=i.a8;S<=i.h1;S++){if(S&136){S+=7;continue}if(this._board[S]===void 0||this._board[S].color!==y)continue;const E=this._board[S],T=S-x;if(T===0)continue;const O=T+119;if(a[O]&u[E.type]){if(E.type===t.PAWN){if(T>0){if(E.color===t.WHITE)return!0}else if(E.color===t.BLACK)return!0;continue}if(E.type==="n"||E.type==="k")return!0;const D=l[O];let k=S+D,P=!1;for(;k!==x;){if(this._board[k]!=null){P=!0;break}k+=D}if(!P)return!0}}return!1}_isKingAttacked(y){const x=this._kings[y];return x===-1?!1:this._attacked(M(y),x)}isAttacked(y,x){return this._attacked(x,i[y])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const y={b:0,n:0,r:0,q:0,k:0,p:0},x=[];let S=0,E=0;for(let T=i.a8;T<=i.h1;T++){if(E=(E+1)%2,T&136){T+=7;continue}const O=this._board[T];O&&(y[O.type]=O.type in y?y[O.type]+1:1,O.type===t.BISHOP&&x.push(E),S++)}if(S===2)return!0;if(S===3&&(y[t.BISHOP]===1||y[t.KNIGHT]===1))return!0;if(S===y[t.BISHOP]+2){let T=0;const O=x.length;for(let D=0;D<O;D++)T+=x[D];if(T===0||T===O)return!0}return!1}isThreefoldRepetition(){const y=[],x={};let S=!1;for(;;){const E=this._undoMove();if(!E)break;y.push(E)}for(;;){const E=this.fen().split(" ").slice(0,4).join(" ");x[E]=E in x?x[E]+1:1,x[E]>=3&&(S=!0);const T=y.pop();if(T)this._makeMove(T);else break}return S}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:y=!1,square:x=void 0,piece:S=void 0}={}){const E=this._moves({square:x,piece:S});return y?E.map(T=>this._makePretty(T)):E.map(T=>this._moveToSan(T,E))}_moves({legal:y=!0,piece:x=void 0,square:S=void 0}={}){var E;const T=S?S.toLowerCase():void 0,O=x==null?void 0:x.toLowerCase(),D=[],k=this._turn,P=M(k);let U=i.a8,W=i.h1,_=!1;if(T)if(T in i)U=W=i[T],_=!0;else return[];for(let R=U;R<=W;R++){if(R&136){R+=7;continue}if(!this._board[R]||this._board[R].color===P)continue;const{type:X}=this._board[R];let q;if(X===t.PAWN){if(O&&O!==X)continue;q=R+s[k][0],this._board[q]||(j(D,k,R,q,t.PAWN),q=R+s[k][1],g[k]===v(R)&&!this._board[q]&&j(D,k,R,q,t.PAWN,void 0,r.BIG_PAWN));for(let ee=2;ee<4;ee++)q=R+s[k][ee],!(q&136)&&(((E=this._board[q])===null||E===void 0?void 0:E.color)===P?j(D,k,R,q,t.PAWN,this._board[q].type,r.CAPTURE):q===this._epSquare&&j(D,k,R,q,t.PAWN,t.PAWN,r.EP_CAPTURE))}else{if(O&&O!==X)continue;for(let ee=0,Z=o[X].length;ee<Z;ee++){const Q=o[X][ee];for(q=R;q+=Q,!(q&136);){if(!this._board[q])j(D,k,R,q,X);else{if(this._board[q].color===k)break;j(D,k,R,q,X,this._board[q].type,r.CAPTURE);break}if(X===t.KNIGHT||X===t.KING)break}}}}if((O===void 0||O===t.KING)&&(!_||W===this._kings[k])){if(this._castling[k]&r.KSIDE_CASTLE){const R=this._kings[k],X=R+2;!this._board[R+1]&&!this._board[X]&&!this._attacked(P,this._kings[k])&&!this._attacked(P,R+1)&&!this._attacked(P,X)&&j(D,k,this._kings[k],X,t.KING,void 0,r.KSIDE_CASTLE)}if(this._castling[k]&r.QSIDE_CASTLE){const R=this._kings[k],X=R-2;!this._board[R-1]&&!this._board[R-2]&&!this._board[R-3]&&!this._attacked(P,this._kings[k])&&!this._attacked(P,R-1)&&!this._attacked(P,X)&&j(D,k,this._kings[k],X,t.KING,void 0,r.QSIDE_CASTLE)}}if(!y||this._kings[k]===-1)return D;const Y=[];for(let R=0,X=D.length;R<X;R++)this._makeMove(D[R]),this._isKingAttacked(k)||Y.push(D[R]),this._undoMove();return Y}move(y,{strict:x=!1}={}){let S=null;if(typeof y=="string")S=this._moveFromSan(y,x);else if(typeof y=="object"){const T=this._moves();for(let O=0,D=T.length;O<D;O++)if(y.from===I(T[O].from)&&y.to===I(T[O].to)&&(!("promotion"in T[O])||y.promotion===T[O].promotion)){S=T[O];break}}if(!S)throw typeof y=="string"?new Error(`Invalid move: ${y}`):new Error(`Invalid move: ${JSON.stringify(y)}`);const E=this._makePretty(S);return this._makeMove(S),E}_push(y){this._history.push({move:y,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(y){const x=this._turn,S=M(x);if(this._push(y),this._board[y.to]=this._board[y.from],delete this._board[y.from],y.flags&r.EP_CAPTURE&&(this._turn===t.BLACK?delete this._board[y.to-16]:delete this._board[y.to+16]),y.promotion&&(this._board[y.to]={type:y.promotion,color:x}),this._board[y.to].type===t.KING){if(this._kings[x]=y.to,y.flags&r.KSIDE_CASTLE){const E=y.to-1,T=y.to+1;this._board[E]=this._board[T],delete this._board[T]}else if(y.flags&r.QSIDE_CASTLE){const E=y.to+1,T=y.to-2;this._board[E]=this._board[T],delete this._board[T]}this._castling[x]=0}if(this._castling[x]){for(let E=0,T=C[x].length;E<T;E++)if(y.from===C[x][E].square&&this._castling[x]&C[x][E].flag){this._castling[x]^=C[x][E].flag;break}}if(this._castling[S]){for(let E=0,T=C[S].length;E<T;E++)if(y.to===C[S][E].square&&this._castling[S]&C[S][E].flag){this._castling[S]^=C[S][E].flag;break}}y.flags&r.BIG_PAWN?x===t.BLACK?this._epSquare=y.to-16:this._epSquare=y.to+16:this._epSquare=e,y.piece===t.PAWN?this._halfMoves=0:y.flags&(r.CAPTURE|r.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,x===t.BLACK&&this._moveNumber++,this._turn=S}undo(){const y=this._undoMove();return y?this._makePretty(y):null}_undoMove(){const y=this._history.pop();if(y===void 0)return null;const x=y.move;this._kings=y.kings,this._turn=y.turn,this._castling=y.castling,this._epSquare=y.epSquare,this._halfMoves=y.halfMoves,this._moveNumber=y.moveNumber;const S=this._turn,E=M(S);if(this._board[x.from]=this._board[x.to],this._board[x.from].type=x.piece,delete this._board[x.to],x.captured)if(x.flags&r.EP_CAPTURE){let T;S===t.BLACK?T=x.to-16:T=x.to+16,this._board[T]={type:t.PAWN,color:E}}else this._board[x.to]={type:x.captured,color:E};if(x.flags&(r.KSIDE_CASTLE|r.QSIDE_CASTLE)){let T,O;x.flags&r.KSIDE_CASTLE?(T=x.to+1,O=x.to-1):(T=x.to-2,O=x.to+1),this._board[T]=this._board[O],delete this._board[O]}return x}pgn({newline:y=`
`,maxWidth:x=0}={}){const S=[];let E=!1;for(const _ in this._header)S.push("["+_+' "'+this._header[_]+'"]'+y),E=!0;E&&this._history.length&&S.push(y);const T=_=>{const Y=this._comments[this.fen()];if(typeof Y<"u"){const R=_.length>0?" ":"";_=`${_}${R}{${Y}}`}return _},O=[];for(;this._history.length>0;)O.push(this._undoMove());const D=[];let k="";for(O.length===0&&D.push(T(""));O.length>0;){k=T(k);const _=O.pop();if(!_)break;if(!this._history.length&&_.color==="b"){const Y=`${this._moveNumber}. ...`;k=k?`${k} ${Y}`:Y}else _.color==="w"&&(k.length&&D.push(k),k=this._moveNumber+".");k=k+" "+this._moveToSan(_,this._moves({legal:!0})),this._makeMove(_)}if(k.length&&D.push(T(k)),typeof this._header.Result<"u"&&D.push(this._header.Result),x===0)return S.join("")+D.join(" ");const P=function(){return S.length>0&&S[S.length-1]===" "?(S.pop(),!0):!1},U=function(_,Y){for(const R of Y.split(" "))if(!!R){if(_+R.length>x){for(;P();)_--;S.push(y),_=0}S.push(R),_+=R.length,S.push(" "),_++}return P()&&_--,_};let W=0;for(let _=0;_<D.length;_++){if(W+D[_].length>x&&D[_].includes("{")){W=U(W,D[_]);continue}W+D[_].length>x&&_!==0?(S[S.length-1]===" "&&S.pop(),S.push(y),W=0):_!==0&&(S.push(" "),W++),S.push(D[_]),W+=D[_].length}return S.join("")}header(...y){for(let x=0;x<y.length;x+=2)typeof y[x]=="string"&&typeof y[x+1]=="string"&&(this._header[y[x]]=y[x+1]);return this._header}loadPgn(y,{strict:x=!1,newlineChar:S=`\r?
`}={}){function E(Q){return Q.replace(/\\/g,"\\")}function T(Q){const ye={},re=Q.split(new RegExp(E(S)));let Ue="",fe="";for(let Ae=0;Ae<re.length;Ae++){const Dn=/^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;Ue=re[Ae].replace(Dn,"$1"),fe=re[Ae].replace(Dn,"$2"),Ue.trim().length>0&&(ye[Ue]=fe)}return ye}y=y.trim();const D=new RegExp("^(\\[((?:"+E(S)+")|.)*\\])((?:\\s*"+E(S)+"){2}|(?:\\s*"+E(S)+")*$)").exec(y),k=D&&D.length>=2?D[1]:"";this.reset();const P=T(k);let U="";for(const Q in P)Q.toLowerCase()==="fen"&&(U=P[Q]),this.header(Q,P[Q]);if(!x)U&&this.load(U,!0);else if(P.SetUp==="1"){if(!("FEN"in P))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(P.FEN,!0)}function W(Q){return Array.from(Q).map(function(ye){return ye.charCodeAt(0)<128?ye.charCodeAt(0).toString(16):encodeURIComponent(ye).replace(/%/g,"").toLowerCase()}).join("")}function _(Q){return Q.length==0?"":decodeURIComponent("%"+(Q.match(/.{1,2}/g)||[]).join("%"))}const Y=function(Q){return Q=Q.replace(new RegExp(E(S),"g")," "),`{${W(Q.slice(1,Q.length-1))}}`},R=function(Q){if(Q.startsWith("{")&&Q.endsWith("}"))return _(Q.slice(1,Q.length-1))};let X=y.replace(k,"").replace(new RegExp(`({[^}]*})+?|;([^${E(S)}]*)`,"g"),function(Q,ye,re){return ye!==void 0?Y(ye):" "+Y(`{${re.slice(1)}}`)}).replace(new RegExp(E(S),"g")," ");const q=/(\([^()]+\))+?/g;for(;q.test(X);)X=X.replace(q,"");X=X.replace(/\d+\.(\.\.)?/g,""),X=X.replace(/\.\.\./g,""),X=X.replace(/\$\d+/g,"");let ee=X.trim().split(new RegExp(/\s+/));ee=ee.filter(Q=>Q!=="");let Z="";for(let Q=0;Q<ee.length;Q++){const ye=R(ee[Q]);if(ye!==void 0){this._comments[this.fen()]=ye;continue}const re=this._moveFromSan(ee[Q],x);if(re==null)if(p.indexOf(ee[Q])>-1)Z=ee[Q];else throw new Error(`Invalid move in PGN: ${ee[Q]}`);else Z="",this._makeMove(re)}Z&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",Z)}_moveToSan(y,x){let S="";if(y.flags&r.KSIDE_CASTLE)S="O-O";else if(y.flags&r.QSIDE_CASTLE)S="O-O-O";else{if(y.piece!==t.PAWN){const E=V(y,x);S+=y.piece.toUpperCase()+E}y.flags&(r.CAPTURE|r.EP_CAPTURE)&&(y.piece===t.PAWN&&(S+=I(y.from)[0]),S+="x"),S+=I(y.to),y.promotion&&(S+="="+y.promotion.toUpperCase())}return this._makeMove(y),this.isCheck()&&(this.isCheckmate()?S+="#":S+="+"),this._undoMove(),S}_moveFromSan(y,x=!1){const S=we(y);let E=pe(S),T=this._moves({legal:!0,piece:E});for(let _=0,Y=T.length;_<Y;_++)if(S===we(this._moveToSan(T[_],T)))return T[_];if(x)return null;let O,D,k,P,U,W=!1;if(D=S.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),D?(O=D[1],k=D[2],P=D[3],U=D[4],k.length==1&&(W=!0)):(D=S.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),D&&(O=D[1],k=D[2],P=D[3],U=D[4],k.length==1&&(W=!0))),E=pe(S),T=this._moves({legal:!0,piece:O||E}),!P)return null;for(let _=0,Y=T.length;_<Y;_++)if(k){if((!O||O.toLowerCase()==T[_].piece)&&i[k]==T[_].from&&i[P]==T[_].to&&(!U||U.toLowerCase()==T[_].promotion))return T[_];if(W){const R=I(T[_].from);if((!O||O.toLowerCase()==T[_].piece)&&i[P]==T[_].to&&(k==R[0]||k==R[1])&&(!U||U.toLowerCase()==T[_].promotion))return T[_]}}else if(S===we(this._moveToSan(T[_],T)).replace("x",""))return T[_];return null}ascii(){let y=`   +------------------------+
`;for(let x=i.a8;x<=i.h1;x++){if(b(x)===0&&(y+=" "+"87654321"[v(x)]+" |"),this._board[x]){const S=this._board[x].type,T=this._board[x].color===t.WHITE?S.toUpperCase():S.toLowerCase();y+=" "+T+" "}else y+=" . ";x+1&136&&(y+=`|
`,x+=8)}return y+=`   +------------------------+
`,y+="     a  b  c  d  e  f  g  h",y}perft(y){const x=this._moves({legal:!1});let S=0;const E=this._turn;for(let T=0,O=x.length;T<O;T++)this._makeMove(x[T]),this._isKingAttacked(E)||(y-1>0?S+=this.perft(y-1):S++),this._undoMove();return S}_makePretty(y){const{color:x,piece:S,from:E,to:T,flags:O,captured:D,promotion:k}=y;let P="";for(const Y in r)r[Y]&O&&(P+=n[Y]);const U=I(E),W=I(T),_={color:x,piece:S,from:U,to:W,san:this._moveToSan(y,this._moves({legal:!0})),flags:P,lan:U+W,before:this.fen(),after:""};return this._makeMove(y),_.after=this.fen(),this._undoMove(),D&&(_.captured=D),k&&(_.promotion=k,_.lan+=k),_}turn(){return this._turn}board(){const y=[];let x=[];for(let S=i.a8;S<=i.h1;S++)this._board[S]==null?x.push(null):x.push({square:I(S),type:this._board[S].type,color:this._board[S].color}),S+1&136&&(y.push(x),x=[],S+=8);return y}squareColor(y){if(y in i){const x=i[y];return(v(x)+b(x))%2===0?"light":"dark"}return null}history({verbose:y=!1}={}){const x=[],S=[];for(;this._history.length>0;)x.push(this._undoMove());for(;;){const E=x.pop();if(!E)break;y?S.push(this._makePretty(E)):S.push(this._moveToSan(E,this._moves())),this._makeMove(E)}return S}_pruneComments(){const y=[],x={},S=E=>{E in this._comments&&(x[E]=this._comments[E])};for(;this._history.length>0;)y.push(this._undoMove());for(S(this.fen());;){const E=y.pop();if(!E)break;this._makeMove(E),S(this.fen())}this._comments=x}getComment(){return this._comments[this.fen()]}setComment(y){this._comments[this.fen()]=y.replace("{","[").replace("}","]")}deleteComment(){const y=this._comments[this.fen()];return delete this._comments[this.fen()],y}getComments(){return this._pruneComments(),Object.keys(this._comments).map(y=>({fen:y,comment:this._comments[y]}))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map(y=>{const x=this._comments[y];return delete this._comments[y],{fen:y,comment:x}})}}t.Chess=ze})(Bl);const $1=(t,e)=>t.board().map(n=>n.map(r=>r!==null?{type:r.type,team:r.color,uid:e[r.square]}:null));var pi=(t=>(t.CHECKMATE="c",t.DRAW="d",t.THREEFOLD_REPITITION="r",t.INSUFFICIENT_MATERIAL="m",t.OUT_OF_TIME="t",t))(pi||{});const uv=(t,e=!1)=>{let n="";if(e&&(n+="t"),t.isCheckmate()&&(n+="c"),t.isDraw()&&(n+="d"),t.isInsufficientMaterial()&&(n+="m"),t.isThreefoldRepetition()&&(n+="r"),n.length!==0)return n},Td=(t,e)=>{const n=new Bl.Chess,r={};return n.board().flat().forEach((s,o)=>{s!==null&&(r[s.square]=`${o}`)}),{board:$1(n,r),timers:{w:{time:t*60},b:{time:t*60}},moves:[],captured:{w:[],b:[]},turn:"w",check:{w:!1,b:!1},fen:n.fen(),redoStack:[],pieceUids:r,pieceUidTracker:[],paused:!1,players:e}},ct=(t,e)=>{var n;switch(e.type){case"move":{if(t=ct(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;t.redoStack&&(t.redoStack=[]);try{const r=e.chess.move({from:e.from,to:e.to,promotion:e.promotion}),i={};if(r.captured||r.flags.indexOf("e")>=0)i.taken=t.pieceUids[r.to],t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];else if(r.flags.indexOf("k")>=0){t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];const s=`h${r.from[1]}`,o=`f${r.from[1]}`;t.pieceUids[o]=t.pieceUids[s],delete t.pieceUids[s]}else if(r.flags.indexOf("q")>=0){t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];const s=`a${r.from[1]}`,o=`d${r.from[1]}`;t.pieceUids[o]=t.pieceUids[s],delete t.pieceUids[s]}else t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];t.pieceUids={...t.pieceUids},t.pieceUidTracker=[...t.pieceUidTracker,i],t.moves=[...(n=t.moves)!=null?n:[],r],r.captured&&(t.captured[r.color]=[...t.captured[r.color],r.captured])}catch{break}return ct(t,{type:"endMove",chess:e.chess,time:e.time})}case"undo":{if(t=ct(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;const r=e.chess.undo();if(r===null||t.moves===void 0)break;t.moves.pop(),t.moves=[...t.moves];const i=t.pieceUidTracker.pop();if(t.pieceUidTracker=[...t.pieceUidTracker],r.captured||r.flags.indexOf("e")>=0)t.pieceUids[r.from]=t.pieceUids[r.to],i&&i.taken?t.pieceUids[r.to]=i.taken:(console.error("move UID tracker made a mistake"),delete t.pieceUids[r.to]);else if(r.flags.indexOf("k")>=0){t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];const s=`h${r.from[1]}`,o=`f${r.from[1]}`;t.pieceUids[s]=t.pieceUids[o],delete t.pieceUids[o]}else if(r.flags.indexOf("q")>=0){t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];const s=`a${r.from[1]}`,o=`d${r.from[1]}`;t.pieceUids[s]=t.pieceUids[o],delete t.pieceUids[o]}else t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];if(t.pieceUids={...t.pieceUids},r.captured){const s=t.captured[r.color],o=s.indexOf(r.captured);t.captured[r.color]=s.filter((a,l)=>l!==o)}return t.redoStack=[...t.redoStack,r],ct(t,{type:"endMove",chess:e.chess,time:e.time})}case"redo":{if(t=ct(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;const r=t.redoStack.pop();if(r===void 0)break;const i=[...t.redoStack];return t=ct(t,{type:"move",to:r.to,from:r.from,promotion:r.promotion,chess:e.chess,time:e.time}),t.redoStack=i,t}case"pause":{console.error("PAUSE is not implemented");break}case"checkTimers":{const r=e.time,{set:i,time:s}=t.timers.w.set?t.timers.w:t.timers.b;if(!i)break;const o=(r-i)/1e3;if(s-o<=0)return t.complete=uv(e.chess,!0),{...t,timers:{w:{time:t.timers.w.set?0:t.timers.w.time},b:{time:t.timers.b.set?0:t.timers.b.time}}};break}case"endMove":{let{w:r,b:i}=t.timers;if(e.chess.turn()==="b"){if(i.set=e.time,r.set){const s=(i.set-r.set)/1e3;r.time-=s}r.set=void 0}else{if(r.set=e.time,i.set){const s=(r.set-i.set)/1e3;i.time-=s}i.set=void 0}return t.timers={w:r,b:i},t.turn=e.chess.turn(),t.board=$1(e.chess,t.pieceUids),t.check={w:!1,b:!1},t.check[t.turn]=e.chess.isCheck(),t.complete=uv(e.chess,!1),{...t}}}return t},cv=t=>({timers:t.timers,board:t.board,captured:t.captured,check:t.check,fen:t.fen,moves:t.moves,turn:t.turn,complete:t.complete}),VT=(t,e,n,r,i)=>{var d,h,m,w,C,g,p,v,b,A,I,M,F,V;if(t.players={w:{name:e.players.w.name,type:e.players.w.uid===n?"local":"online"},b:{name:(h=(d=e.players.b)==null?void 0:d.name)!=null?h:"connecting",type:((m=e.players.b)==null?void 0:m.uid)===n?"local":"online"}},((C=(w=t.moves)==null?void 0:w.length)!=null?C:0)===0&&(t.timers=e.game.timers,((p=(g=e.game.moves)==null?void 0:g.length)!=null?p:0)>1)){for(const j of(v=e.game.moves)!=null?v:[])ct(t,{type:"move",from:j.from,to:j.to,promotion:j.promotion,chess:r,time:i});return t}if(t.turn===e.game.turn)return t;const s=(A=(b=t.moves)==null?void 0:b.length)!=null?A:0,o=(M=(I=e.game.moves)==null?void 0:I.length)!=null?M:0,a=(F=t.moves)!=null?F:[],l=(V=e.game.moves)!=null?V:[];if(s!==o&&s!==o-1)return`other user sent us ${o} moves, expected ${s} or ${s+1} moves`;for(let j=0;j<s;j++)if(a[j].san!==l[j].san)return`other user manipulated move history (move ${j} expected ${a[j].san} got ${l[j].san}`;if(s===o)return t;const u=l[l.length-1];if(u)t=ct(t,{type:"move",from:u.from,to:u.to,promotion:u.promotion,chess:r,time:i});else return t;if(t.moves&&e.game.moves&&t.moves.length!==e.game.moves.length)return"other user sent an invalid move";t.timers=e.game.timers;const f=t.captured.w.every((j,pe)=>j===e.game.captured.w[pe]),c=t.captured.b.every((j,pe)=>j===e.game.captured.b[pe]);return f&&c?t.check.w!==e.game.check.w||t.check.b!==e.game.check.b?"other user manipulated game check status":t.complete!==e.game.complete?"other user manipulated game completion!":t:"other user manipulated captures"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw ds(e)},ds=function(t){return new Error("Firebase Database ("+z1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},GT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=s>>2,c=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(d=64)),r.push(n[f],n[c],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new KT;const d=s<<2|a>>4;if(r.push(d),u!==64){const h=a<<4&240|u>>2;if(r.push(h),c!==64){const m=u<<6&192|c;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W1=function(t){const e=j1(t);return pp.encodeByteArray(e,!0)},Hl=function(t){return W1(t).replace(/\./g,"")},Vl=function(t){try{return pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t){return B1(void 0,t)}function B1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qT(n)||(t[n]=B1(t[n],e[n]));return t}function qT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=()=>QT().__FIREBASE_DEFAULTS__,JT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vl(t[1]);return e&&JSON.parse(e)},mp=()=>{try{return XT()||JT()||ZT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H1=t=>{var e,n;return(n=(e=mp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},e2=t=>{const e=H1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},V1=()=>{var t;return(t=mp())===null||t===void 0?void 0:t.config},G1=t=>{var e;return(e=mp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Hl(JSON.stringify(n)),Hl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function n2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r2(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y1(){return z1.NODE_ADMIN===!0}function i2(){try{return typeof indexedDB=="object"}catch{return!1}}function s2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="FirebaseError";class xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o2,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?a2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xr(i,a,r)}}function a2(t,e){return t.replace(l2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const l2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ao(Vl(s[0])||""),n=Ao(Vl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},u2=function(t){const e=q1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},c2=function(t){const e=q1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ts(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Kl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fv(s)&&fv(o)){if(!Kl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),f=1518500249):(u=s^o^a,f=1859775393):c<60?(u=s&o|a&(s|o),f=2400959708):(u=s^o^a,f=3395469782);const d=(i<<5|i>>>27)+u+l+f+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function d2(t,e){const n=new h2(t,e);return n.subscribe.bind(n)}class h2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");p2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}function vp(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y2(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:v2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v2(t){return t===Rr?void 0:t}function y2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const w2={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},E2=ve.INFO,S2={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},k2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=S2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yp{constructor(e){this.name=e,this._logLevel=E2,this._logHandler=k2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const C2=(t,e)=>e.some(n=>t instanceof n);let dv,hv;function b2(){return dv||(dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I2(){return hv||(hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q1=new WeakMap,Nd=new WeakMap,X1=new WeakMap,Yc=new WeakMap,_p=new WeakMap;function x2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Q1.set(n,t)}).catch(()=>{}),_p.set(e,t),e}function T2(t){if(Nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nd.set(t,e)}let Rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||X1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P2(t){Rd=t(Rd)}function N2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return X1.set(r,e.sort?e.sort():[e]),lr(r)}:I2().includes(t)?function(...e){return t.apply(qc(this),e),lr(Q1.get(this))}:function(...e){return lr(t.apply(qc(this),e))}}function R2(t){return typeof t=="function"?N2(t):(t instanceof IDBTransaction&&T2(t),C2(t,b2())?new Proxy(t,Rd):t)}function lr(t){if(t instanceof IDBRequest)return x2(t);if(Yc.has(t))return Yc.get(t);const e=R2(t);return e!==t&&(Yc.set(t,e),_p.set(e,t)),e}const qc=t=>_p.get(t);function A2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const O2=["get","getKey","getAll","getAllKeys","count"],L2=["put","add","delete","clear"],Qc=new Map;function pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qc.set(e,s),s}P2(t=>({...t,get:(e,n,r)=>pv(e,n)||t.get(e,n,r),has:(e,n)=>!!pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(M2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function M2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",mv="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new yp("@firebase/app"),F2="@firebase/app-compat",U2="@firebase/analytics-compat",$2="@firebase/analytics",z2="@firebase/app-check-compat",j2="@firebase/app-check",W2="@firebase/auth",B2="@firebase/auth-compat",H2="@firebase/database",V2="@firebase/database-compat",G2="@firebase/functions",K2="@firebase/functions-compat",Y2="@firebase/installations",q2="@firebase/installations-compat",Q2="@firebase/messaging",X2="@firebase/messaging-compat",J2="@firebase/performance",Z2="@firebase/performance-compat",eP="@firebase/remote-config",tP="@firebase/remote-config-compat",nP="@firebase/storage",rP="@firebase/storage-compat",iP="@firebase/firestore",sP="@firebase/firestore-compat",oP="firebase",aP="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="[DEFAULT]",lP={[Ad]:"fire-core",[F2]:"fire-core-compat",[$2]:"fire-analytics",[U2]:"fire-analytics-compat",[j2]:"fire-app-check",[z2]:"fire-app-check-compat",[W2]:"fire-auth",[B2]:"fire-auth-compat",[H2]:"fire-rtdb",[V2]:"fire-rtdb-compat",[G2]:"fire-fn",[K2]:"fire-fn-compat",[Y2]:"fire-iid",[q2]:"fire-iid-compat",[Q2]:"fire-fcm",[X2]:"fire-fcm-compat",[J2]:"fire-perf",[Z2]:"fire-perf-compat",[eP]:"fire-rc",[tP]:"fire-rc-compat",[nP]:"fire-gcs",[rP]:"fire-gcs-compat",[iP]:"fire-fst",[sP]:"fire-fst-compat","fire-js":"fire-js",[oP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Map,Ld=new Map;function uP(t,e){try{t.container.addComponent(e)}catch(n){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Ld.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,t);for(const n of Yl.values())uP(n,t);return!0}function wp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ur=new Jo("app","Firebase",cP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=aP;function J1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Od,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=V1()),!n)throw ur.create("no-options");const s=Yl.get(i);if(s){if(Kl(n,s.options)&&Kl(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new _2(i);for(const l of Ld.values())o.addComponent(l);const a=new fP(n,r,o);return Yl.set(i,a),a}function Z1(t=Od){const e=Yl.get(t);if(!e&&t===Od&&V1())return J1();if(!e)throw ur.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let i=(r=lP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(a.join(" "));return}ns(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="firebase-heartbeat-database",hP=1,Oo="firebase-heartbeat-store";let Xc=null;function ew(){return Xc||(Xc=A2(dP,hP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oo)}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function pP(t){try{return await(await ew()).transaction(Oo).objectStore(Oo).get(tw(t))}catch(e){if(e instanceof xr)ei.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ei.warn(n.message)}}}async function gv(t,e){try{const r=(await ew()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,tw(t)),await r.done}catch(n){if(n instanceof xr)ei.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ei.warn(r.message)}}}function tw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=1024,gP=30*24*60*60*1e3;class vP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _P(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vv(),{heartbeatsToSend:n,unsentEntries:r}=yP(this._heartbeatsCache.heartbeats),i=Hl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vv(){return new Date().toISOString().substring(0,10)}function yP(t,e=mP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i2()?s2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yv(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){ns(new Zr("platform-logger",e=>new D2(e),"PRIVATE")),ns(new Zr("heartbeat",e=>new vP(e),"PRIVATE")),cr(Ad,mv,t),cr(Ad,mv,"esm2017"),cr("fire-js","")}wP("");var EP="firebase",SP="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(EP,SP,"app");function Ep(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kP=nw,rw=new Jo("auth","Firebase",nw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new yp("@firebase/auth");function CP(t,...e){ql.logLevel<=ve.WARN&&ql.warn(`Auth (${ps}): ${t}`,...e)}function al(t,...e){ql.logLevel<=ve.ERROR&&ql.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw Sp(t,...e)}function ln(t,...e){return Sp(t,...e)}function bP(t,e,n){const r=Object.assign(Object.assign({},kP()),{[e]:n});return new Jo("auth","Firebase",r).create(e,{appName:t.name})}function Sp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rw.create(t,...e)}function ne(t,e,...n){if(!t)throw Sp(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function Nn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IP(){return _v()==="http:"||_v()==="https:"}function _v(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IP()||n2()||"connection"in navigator)?navigator.onLine:!0}function TP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=gp()||K1()}get(){return xP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=new Zo(3e4,6e4);function Cp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ea(t,e,n,r,i={}){return sw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=hs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iw.fetch()(aw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PP),e);try{const i=new RP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ja(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bP(t,f,u);Pn(t,f)}}catch(i){if(i instanceof xr)throw i;Pn(t,"network-request-failed",{message:String(i)})}}async function ow(t,e,n,r,i={}){const s=await ea(t,e,n,r,i);return"mfaPendingCredential"in s&&Pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?kp(t.config,i):`${t.config.apiScheme}://${i}`}class RP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),NP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e){return ea(t,"POST","/v1/accounts:delete",e)}async function OP(t,e){return ea(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LP(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),i=bp(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:eo(Jc(i.auth_time)),issuedAtTime:eo(Jc(i.iat)),expirationTime:eo(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vl(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DP(t){const e=bp(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xr&&MP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lo(t,OP(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zP(s.providerUserInfo):[],a=$P(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lw(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,c)}async function UP(t){const e=Ot(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $P(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zP(t){return t.map(e=>{var{providerId:n}=e,r=Ep(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e){const n=await sw(t,{},async()=>{const r=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Do;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ep(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LP(this,e)}reload(){return UP(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lo(this,AP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,f;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:b,isAnonymous:A,providerData:I,stsTokenManager:M}=n;ne(v&&M,e,"internal-error");const F=Do.fromJSON(this.name,M);ne(typeof v=="string",e,"internal-error"),$n(c,e.name),$n(d,e.name),ne(typeof b=="boolean",e,"internal-error"),ne(typeof A=="boolean",e,"internal-error"),$n(h,e.name),$n(m,e.name),$n(w,e.name),$n(C,e.name),$n(g,e.name),$n(p,e.name);const V=new Wr({uid:v,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:A,photoURL:m,phoneNumber:h,tenantId:w,stsTokenManager:F,createdAt:g,lastLoginAt:p});return I&&Array.isArray(I)&&(V.providerData=I.map(j=>Object.assign({},j))),C&&(V._redirectEventId=C),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Do;i.updateFromServerResponse(n);const s=new Wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ql(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Map;function yn(t){Nn(t instanceof Function,"Expected a class definition");let e=wv.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uw.type="NONE";const Ev=uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(yn(Ev),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(Ev);const o=ll(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const c=Wr._fromJSON(e,f);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pw(e))return"Blackberry";if(mw(e))return"Webos";if(Ip(e))return"Safari";if((e.includes("chrome/")||fw(e))&&!e.includes("edge/"))return"Chrome";if(hw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cw(t=lt()){return/firefox\//i.test(t)}function Ip(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fw(t=lt()){return/crios\//i.test(t)}function dw(t=lt()){return/iemobile/i.test(t)}function hw(t=lt()){return/android/i.test(t)}function pw(t=lt()){return/blackberry/i.test(t)}function mw(t=lt()){return/webos/i.test(t)}function Qu(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WP(t=lt()){var e;return Qu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BP(){return r2()&&document.documentMode===10}function gw(t=lt()){return Qu(t)||hw(t)||mw(t)||pw(t)||/windows phone/i.test(t)||dw(t)}function HP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t,e=[]){let n;switch(t){case"Browser":n=Sv(lt());break;case"Worker":n=`${Sv(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}async function yw(t,e){return ea(t,"GET","/v2/recaptchaConfig",Cp(t,e))}function kv(t){return t!==void 0&&t.enterprise!==void 0}class _w{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ww(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VP().appendChild(r)})}function GP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KP="https://www.google.com/recaptcha/enterprise.js?render=",YP="recaptcha-enterprise",qP="NO_RECAPTCHA";class QP{constructor(e){this.type=YP,this.auth=ta(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _w(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;kv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(qP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&kv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ww(KP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cv(this),this.idTokenSubscription=new Cv(this),this.beforeStateQueue=new XP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ot(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}async initializeRecaptchaConfig(){const e=await yw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _w(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new QP(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ta(t){return Ot(t)}class Cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=d2(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t,e){const n=wp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kl(s,e!=null?e:{}))return i;Pn(i,"already-initialized")}return n.initialize({options:e})}function eN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tN(t,e,n){const r=ta(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ew(e),{host:o,port:a}=nN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rN()}function Ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nN(t){const e=Ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bv(o)}}}function bv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t,e){return ow(t,"POST","/v1/accounts:signInWithIdp",Cp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="http://localhost";class ti extends Sw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ep(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:iN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends na{constructor(){super("facebook.com")}static credential(e){return ti._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ti._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends na{constructor(){super("github.com")}static credential(e){return ti._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends na{constructor(){super("twitter.com")}static credential(e,n){return ti._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e){return ow(t,"POST","/v1/accounts:signUp",Cp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wr._fromIdTokenResponse(e,r,i),o=Iv(r);return new yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iv(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t){var e;const n=ta(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new yr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await sN(n,{returnSecureToken:!0}),i=await yr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends xr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xl(e,n,r,i)}}function Cw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xl._fromErrorAndOperation(t,s,e,r):s})}async function aN(t,e,n=!1){const r=await Lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Lo(t,Cw(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=bp(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e,n=!1){const r="signIn",i=await Cw(t,r,e),s=await yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function cN(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function fN(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function dN(t,e,n,r){return Ot(t).onAuthStateChanged(e,n,r)}const Jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(){const t=lt();return Ip(t)||Qu(t)}const pN=1e3,mN=10;class Iw extends bw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hN()&&HP(),this.fallbackToPolling=gw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iw.type="LOCAL";const gN=Iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw extends bw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xw.type="SESSION";const Tw=xw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await vN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=xp("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function _N(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function wN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SN(){return Pw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="firebaseLocalStorageDb",kN=1,Zl="firebaseLocalStorage",Rw="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ju(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function CN(){const t=indexedDB.deleteDatabase(Nw);return new ra(t).toPromise()}function Md(){const t=indexedDB.open(Nw,kN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zl,{keyPath:Rw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zl)?e(r):(r.close(),await CN(),e(await Md()))})})}async function xv(t,e,n){const r=Ju(t,!0).put({[Rw]:e,value:n});return new ra(r).toPromise()}async function bN(t,e){const n=Ju(t,!1).get(e),r=await new ra(n).toPromise();return r===void 0?null:r.value}function Tv(t,e){const n=Ju(t,!0).delete(e);return new ra(n).toPromise()}const IN=800,xN=3;class Aw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xu._getInstance(SN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wN(),!this.activeServiceWorker)return;this.sender=new yN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Md();return await xv(e,Jl,"1"),await Tv(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ju(i,!1).getAll();return new ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Aw.type="LOCAL";const TN=Aw;new Zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t,e){return e?yn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp extends Sw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NN(t){return uN(t.auth,new Tp(t),t.bypassAuthState)}function RN(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),lN(n,new Tp(t),t.bypassAuthState)}async function AN(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),aN(n,new Tp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NN;case"linkViaPopup":case"linkViaRedirect":return AN;case"reauthViaPopup":case"reauthViaRedirect":return RN;default:Pn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new Zo(2e3,1e4);class Ri extends Ow{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=xp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ON.get())};e()}}Ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN="pendingRedirect",ul=new Map;class DN extends Ow{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await MN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MN(t,e){const n=$N(e),r=UN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FN(t,e){ul.set(t._key(),e)}function UN(t){return yn(t._redirectPersistence)}function $N(t){return ll(LN,t.config.apiKey,t.name)}async function zN(t,e,n=!1){const r=ta(t),i=PN(r,e),o=await new DN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=10*60*1e3;class WN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pv(e))}saveEventToCache(e){this.cachedEventUids.add(Pv(e)),this.lastProcessedEventTime=Date.now()}}function Pv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(t,e={}){return ea(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GN=/^https?/;async function KN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HN(t);for(const n of e)try{if(YN(n))return}catch{}Pn(t,"unauthorized-domain")}function YN(t){const e=Dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GN.test(n))return!1;if(VN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=new Zo(3e4,6e4);function Nv(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QN(t){return new Promise((e,n)=>{var r,i,s;function o(){Nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nv(),n(ln(t,"network-request-failed"))},timeout:qN.get()})}if(!((i=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=un().gapi)===null||s===void 0)&&s.load)o();else{const a=GP("iframefcb");return un()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},ww(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw cl=null,e})}let cl=null;function XN(t){return cl=cl||QN(t),cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new Zo(5e3,15e3),ZN="__/auth/iframe",eR="emulator/auth/iframe",tR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rR(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kp(e,eR):`https://${t.config.authDomain}/${ZN}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=nR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hs(r).slice(1)}`}async function iR(t){const e=await XN(t),n=un().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:rR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=un().setTimeout(()=>{s(o)},JN.get());function l(){un().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oR=500,aR=600,lR="_blank",uR="http://localhost";class Rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cR(t,e,n,r=oR,i=aR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=lt().toLowerCase();n&&(a=fw(u)?lR:n),cw(u)&&(e=e||uR,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,m])=>`${d}${h}=${m},`,"");if(WP(u)&&a!=="_self")return fR(e||"",a),new Rv(null);const c=window.open(e||"",a,f);ne(c,t,"popup-blocked");try{c.focus()}catch{}return new Rv(c)}function fR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="__/auth/handler",hR="emulator/auth/handler",pR=encodeURIComponent("fac");async function Av(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof kw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,c]of Object.entries(s||{}))o[f]=c}if(e instanceof na){const f=e.getScopes().filter(c=>c!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),u=l?`#${pR}=${encodeURIComponent(l)}`:"";return`${mR(t)}?${hs(a).slice(1)}${u}`}function mR({config:t}){return t.emulator?kp(t,hR):`https://${t.authDomain}/${dR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class gR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tw,this._completeRedirectFn=zN,this._overrideRedirectResult=FN}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Av(e,n,r,Dd(),i);return cR(e,o,xp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Av(e,n,r,Dd(),i);return _N(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iR(e),r=new WN(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zc];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gw()||Ip()||Qu()}}const vR=gR;var Ov="@firebase/auth",Lv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wR(t){ns(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vw(t)},u=new JP(r,i,s,l);return eN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new Zr("auth-internal",e=>{const n=ta(e.getProvider("auth").getImmediate());return(r=>new yR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Ov,Lv,_R(t)),cr(Ov,Lv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=5*60,SR=G1("authIdTokenMaxAge")||ER;let Dv=null;const kR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SR)return;const i=n==null?void 0:n.token;Dv!==i&&(Dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CR(t=Z1()){const e=wp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZP(t,{popupRedirectResolver:vR,persistence:[TN,gN,Tw]}),r=G1("authTokenSyncURL");if(r){const s=kR(r);fN(n,s,()=>s(n.currentUser)),cN(n,o=>s(o))}const i=H1("auth");return i&&tN(n,`http://${i}`),n}wR("Browser");const Mv="@firebase/database",Fv="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dw="";function bR(t){Dw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ao(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IR(e)}}catch{}return new xR},Ur=Mw("localStorage"),Fd=Mw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new yp("@firebase/database"),TR=function(){let t=1;return function(){return t++}}(),Fw=function(t){const e=m2(t),n=new f2;n.update(e);const r=n.digest();return pp.encodeByteArray(r)},ia=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ia.apply(null,r):typeof r=="object"?e+=We(r):e+=r,e+=" "}return e};let Br=null,Uv=!0;const PR=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wi.logLevel=ve.VERBOSE,Br=Wi.log.bind(Wi),e&&Fd.set("logging_enabled",!0)):typeof t=="function"?Br=t:(Br=null,Fd.remove("logging_enabled"))},ot=function(...t){if(Uv===!0&&(Uv=!1,Br===null&&Fd.get("logging_enabled")===!0&&PR(!0)),Br){const e=ia.apply(null,t);Br(e)}},sa=function(t){return function(...e){ot(t,...e)}},Ud=function(...t){const e="FIREBASE INTERNAL ERROR: "+ia(...t);Wi.error(e)},Rn=function(...t){const e=`FIREBASE FATAL ERROR: ${ia(...t)}`;throw Wi.error(e),new Error(e)},St=function(...t){const e="FIREBASE WARNING: "+ia(...t);Wi.warn(e)},NR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&St("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rs="[MIN_NAME]",ni="[MAX_NAME]",ms=function(t,e){if(t===e)return 0;if(t===rs||e===ni)return-1;if(e===rs||t===ni)return 1;{const n=$v(t),r=$v(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},AR=function(t,e){return t===e?0:t<e?-1:1},xs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},Pp=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=We(e[r]),n+=":",n+=Pp(t[e[r]]);return n+="}",n},$w=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zw=function(t){z(!Uw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(l=0;l<64;l+=8){let d=parseInt(f.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},OR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const MR=new RegExp("^-?(0*)\\d{1,10}$"),FR=-2147483648,UR=2147483647,$v=function(t){if(MR.test(t)){const e=Number(t);if(e>=FR&&e<=UR)return e}return null},gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw St("Exception was thrown by user callback.",n),e},Math.floor(0))}},$R=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},to=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){St(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',St(e)}}class Bi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="5",jw="v",Ww="s",Bw="r",Hw="f",Vw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gw="ls",Kw="p",$d="ac",Yw="websocket",qw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xw(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===Yw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===qw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WR(t)&&(n.ns=t.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.counters_={}}incrementCounter(e,n=1){Ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return YT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={},tf={};function Rp(t){const e=t.toString();return ef[e]||(ef[e]=new BR),ef[e]}function HR(t,e){const n=t.toString();return tf[n]||(tf[n]=e()),tf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="start",GR="close",KR="pLPCommand",YR="pRTLPCB",Jw="id",Zw="pw",eE="ser",qR="cb",QR="seg",XR="ts",JR="d",ZR="dframe",tE=1870,nE=30,eA=tE-nE,tA=25e3,nA=3e4;class Ai{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sa(e),this.stats_=Rp(n),this.urlFn=l=>(this.appCheckToken&&(l[$d]=this.appCheckToken),Xw(n,qw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nA)),RR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ap((...s)=>{const[o,a,l,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zv)this.id=a,this.password=l;else if(o===GR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[zv]="t",r[eE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[qR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[jw]=Np,this.transportSessionId&&(r[Ww]=this.transportSessionId),this.lastSessionId&&(r[Gw]=this.lastSessionId),this.applicationId&&(r[Kw]=this.applicationId),this.appCheckToken&&(r[$d]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vw.test(location.hostname)&&(r[Bw]=Hw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ai.forceAllow_=!0}static forceDisallow(){Ai.forceDisallow_=!0}static isAvailable(){return Ai.forceAllow_?!0:!Ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OR()&&!LR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=W1(n),i=$w(r,eA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ZR]="t",r[Jw]=e,r[Zw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ap{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TR(),window[KR+this.uniqueCallbackIdentifier]=e,window[YR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ap.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jw]=this.myID,e[Zw]=this.myPW,e[eE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nE+r.length<=tE;){const o=this.pendingSegs.shift();r=r+"&"+QR+i+"="+o.seg+"&"+XR+i+"="+o.ts+"&"+JR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(tA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=16384,iA=45e3;let eu=null;typeof MozWebSocket<"u"?eu=MozWebSocket:typeof WebSocket<"u"&&(eu=WebSocket);class Gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sa(this.connId),this.stats_=Rp(n),this.connURL=Gt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[jw]=Np,typeof location<"u"&&location.hostname&&Vw.test(location.hostname)&&(o[Bw]=Hw),n&&(o[Ww]=n),r&&(o[Gw]=r),i&&(o[$d]=i),s&&(o[Kw]=s),Xw(e,Yw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ur.set("previous_websocket_failure",!0);try{let r;Y1(),this.mySock=new eu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&eu!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Ur.isInMemoryStorage||Ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ao(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$w(n,rA);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ai,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let r=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||St("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gt];else{const i=this.transports_=[];for(const s of Mo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=6e4,oA=5e3,aA=10*1024,lA=100*1024,nf="t",jv="d",uA="s",Wv="r",cA="e",Bv="o",Hv="a",Vv="n",Gv="p",fA="h";class dA{constructor(e,n,r,i,s,o,a,l,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sa("c:"+this.id+":"),this.transportManager_=new Mo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=to(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nf in e){const n=e[nf];n===Hv?this.upgradeIfSecondaryHealthy_():n===Wv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xs("t",e),r=xs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xs("t",e),r=xs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xs(nf,e);if(jv in e){const r=e[jv];if(n===fA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uA?this.onConnectionShutdown_(r):n===Wv?this.onReset_(r):n===cA?Ud("Server Error: "+r):n===Bv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ud("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Np!==r&&St("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),to(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):to(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends iE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new tu}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=32,Yv=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new _e("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _r(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function sE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function aE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _e(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function ft(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return ft(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Op(t,e){if(_r(t)!==_r(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(_r(t)>_r(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class pA{constructor(e,n){this.errorPrefix_=n,this.parts_=oE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=qu(this.parts_[r]);lE(this)}}function mA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qu(e),lE(t)}function gA(t){const e=t.parts_.pop();t.byteLength_-=qu(e),t.parts_.length>0&&(t.byteLength_-=1)}function lE(t){if(t.byteLength_>Yv)throw new Error(t.errorPrefix_+"has a key path longer than "+Yv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kv+") or object contains a cycle "+Ar(t))}function Ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends iE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Lp}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=1e3,vA=60*5*1e3,qv=30*1e3,yA=1.3,_A=3e4,wA="server_kill",Qv=3;class En extends rE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=En.nextPersistentConnectionId_++,this.log_=sa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ts,this.maxReconnectDelay_=vA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Y1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(We(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Yu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;En.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ln(e,"w")){const r=ts(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();St(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||c2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=u2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ud("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_A&&(this.reconnectDelay_=Ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+En.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,a=new dA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,h=>{St(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(wA)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&St(c),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pd(this.interruptReasons_)&&(this.reconnectDelay_=Ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Pp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qv&&(this.reconnectDelay_=qv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Dw.replace(/\./g,"-")]=1,gp()?e["framework.cordova"]=1:K1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tu.getInstance().currentlyOnline();return Pd(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(rs,e),i=new ae(rs,n);return this.compare(r,i)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;class uE extends Zu{static get __EMPTY_NODE(){return Wa}static set __EMPTY_NODE(e){Wa=e}compare(e,n){return ms(e.name,n.name)}isDefinedOn(e){throw ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(ni,Wa)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Wa)}toString(){return".key"}}const Hi=new uE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:yt.EMPTY_NODE,this.right=s!=null?s:yt.EMPTY_NODE}copy(e,n,r,i,s){return new Ye(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class EA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ba(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ba(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ba(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ba(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new EA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t,e){return ms(t.name,e.name)}function Dp(t,e){return ms(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zd;function kA(t){zd=t}const cE=function(t){return typeof t=="number"?"number:"+zw(t):"string:"+t},fE=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ln(e,".sv"),"Priority must be a string or number.")}else z(t===zd||t.isEmpty(),"priority of unexpected type.");z(t===zd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xv;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fE(this.priorityNode_)}static set __childrenNodeConstructor(e){Xv=e}static get __childrenNodeConstructor(){return Xv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:oe(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||_r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zw(this.value_):e+=this.value_,this.lazyHash_=Fw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),s=Ge.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dE,hE;function CA(t){dE=t}function bA(t){hE=t}class IA extends Zu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(ni,new Ge("[PRIORITY-POST]",hE))}makePost(e,n){const r=dE(e);return new ae(n,new Ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new IA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=Math.log(2);class TA{constructor(e){const n=s=>parseInt(Math.log(s)/xA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nu=function(t,e,n,r){t.sort(e);const i=function(l,u){const f=u-l;let c,d;if(f===0)return null;if(f===1)return c=t[l],d=n?n(c):c,new Ye(d,c.node,Ye.BLACK,null,null);{const h=parseInt(f/2,10)+l,m=i(l,h),w=i(h+1,u);return c=t[h],d=n?n(c):c,new Ye(d,c.node,Ye.BLACK,m,w)}},s=function(l){let u=null,f=null,c=t.length;const d=function(m,w){const C=c-m,g=c;c-=m;const p=i(C+1,g),v=t[C],b=n?n(v):v;h(new Ye(b,v.node,w,null,p))},h=function(m){u?(u.left=m,u=m):(f=m,u=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),C=Math.pow(2,l.count-(m+1));w?d(C,Ye.BLACK):(d(C,Ye.BLACK),d(C,Ye.RED))}return f},o=new TA(t.length),a=s(o);return new yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;const ci={};class _n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(ci&&De,"ChildrenNode.ts has not been loaded"),rf=rf||new _n({".priority":ci},{".priority":De}),rf}get(e){const n=ts(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return Ln(this.indexSet_,e.toString())}addIndex(e,n){z(e!==Hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ae.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=nu(r,e.getCompare()):a=ci;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new _n(f,u)}addToIndexes(e,n){const r=Gl(this.indexes_,(i,s)=>{const o=ts(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===ci)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),nu(a,o.getCompare())}else return ci;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new _n(r,this.indexSet_)}removeFromIndexes(e,n){const r=Gl(this.indexes_,i=>{if(i===ci)return i;{const s=n.get(e.name);return s?i.remove(new ae(e.name,s)):i}});return new _n(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&fE(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ps||(Ps=new J(new yt(Dp),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ps}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ps:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ps:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{z(oe(e)!==".priority"||_r(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cE(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oa?-1:0}withIndex(e){if(e===Hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hi?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PA extends J{constructor(){super(new yt(Dp),J.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const oa=new PA;Object.defineProperties(ae,{MIN:{value:new ae(rs,J.EMPTY_NODE)},MAX:{value:new ae(ni,oa)}});uE.__EMPTY_NODE=J.EMPTY_NODE;Ge.__childrenNodeConstructor=J;kA(oa);bA(oa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=!0;function qe(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,qe(e))}if(!(t instanceof Array)&&NA){const n=[];let r=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=nu(n,SA,o=>o.name,Dp);if(r){const o=nu(n,De.getCompare());return new J(s,qe(e),new _n({".priority":o},{".priority":De}))}else return new J(s,qe(e),_n.Default)}else{let n=J.EMPTY_NODE;return kt(t,(r,i)=>{if(Ln(t,r)&&r.substring(0,1)!=="."){const s=qe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(qe(e))}}CA(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA extends Zu{constructor(e){super(),this.indexPath_=e,z(!ue(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ms(e.name,n.name):s}makePost(e,n){const r=qe(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,oa);return new ae(ni,e)}toString(){return oE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA extends Zu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ms(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=qe(e);return new ae(n,r)}toString(){return".value"}}const OA=new AA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t){return{type:"value",snapshotNode:t}}function is(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Uo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Fo(n,a)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(is(n,r)):o.trackChildChange(Uo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(Fo(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Uo(i,s,o))}else r.trackChildChange(is(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.indexedFilter_=new Mp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$o.getStartPost_(e),this.endPost_=$o.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ae(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new ae(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $o(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ae(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,h)=>c(h,d)}else o=this.index_.getCompare();const a=e;z(a.numChildren()===this.limit_,"");const l=new ae(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,l);if(f&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(Uo(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Fo(n,c));const w=a.updateImmediateChild(n,J.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(is(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return r.isEmpty()?e:f&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Fo(u.name,u.node)),s.trackChildChange(is(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rs}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Fp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function MA(t){return t.loadsAllData()?new Mp(t.getIndex()):t.hasLimit()?new DA(t):new $o(t)}function Jv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===OA?n="$value":t.index_===Hi?n="$key":(z(t.index_ instanceof RA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=We(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+We(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=We(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends rE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=sa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ru.getListenId_(e,r),a={};this.listens_[o]=a;const l=Jv(e._queryParams);this.restRequest_(s+".json",l,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),ts(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=ru.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Jv(e._queryParams),r=e._path.toString(),i=new Yu;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ao(a.responseText)}catch{St("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&St("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){return{value:null,children:new Map}}function mE(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,iu());const i=t.children.get(r);e=Ee(e),mE(i,e,n)}}function jd(t,e,n){t.value!==null?n(e,t.value):UA(t,(r,i)=>{const s=new _e(e.toString()+"/"+r);jd(i,s,n)})}function UA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=10*1e3,zA=30*1e3,jA=5*60*1e3;class WA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $A(e);const r=ey+(zA-ey)*Math.random();to(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kt(e,(i,s)=>{s>0&&Ln(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),to(this.reportStats_.bind(this),Math.floor(Math.random()*2*jA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function gE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Up(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $p(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=gE()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new su(he(),n,this.revert)}}else return z(oe(this.path)===e,"operationForChild called for unrelated child."),new su(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.source=e,this.path=n,this.type=Qt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new zo(this.source,he()):new zo(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(e){return ue(this.path)?new ri(this.source,he(),this.snap.getImmediateChild(e)):new ri(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qt.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new ri(this.source,he(),n.value):new jo(this.source,he(),n)}else return z(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jo(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LA(o.childName,o.snapshotNode))}),Ns(t,i,"child_removed",e,r,n),Ns(t,i,"child_added",e,r,n),Ns(t,i,"child_moved",s,r,n),Ns(t,i,"child_changed",e,r,n),Ns(t,i,"value",e,r,n),i}function Ns(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>GA(t,a,l)),o.forEach(a=>{const l=VA(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function VA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function GA(t,e,n){if(e.childName==null||n.childName==null)throw ds("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),i=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e){return{eventCache:t,serverCache:e}}function no(t,e,n,r){return ec(new wr(e,n,r),t.serverCache)}function vE(t,e,n,r){return ec(t.eventCache,new wr(e,n,r))}function ou(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ii(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf;const KA=()=>(sf||(sf=new yt(AR)),sf);class Ce{constructor(e,n=KA()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return kt(e,(r,i)=>{n=n.set(new _e(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(ue(e))return null;{const r=oe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ee(e),n);return s!=null?{path:Be(new _e(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new Ce(null)}}set(e,n){if(ue(e))return new Ce(n,this.children);{const r=oe(e),s=(this.children.get(r)||new Ce(null)).set(Ee(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const i=r.remove(Ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(ue(e))return n;{const r=oe(e),s=(this.children.get(r)||new Ce(null)).setTree(Ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ue(e))return null;{const s=oe(e),o=this.children.get(s);return o?o.findOnPath_(Ee(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const i=oe(e),s=this.children.get(i);return s?s.foreachOnPath_(Ee(e),Be(n,i),r):new Ce(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Ce(null))}}function ro(t,e,n){if(ue(e))return new Zt(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ft(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function ty(t,e,n){let r=t;return kt(n,(i,s)=>{r=ro(r,Be(e,i),s)}),r}function ny(t,e){if(ue(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Zt(n)}}function Wd(t,e){return li(t,e)!=null}function li(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ft(n.path,e)):null}function ry(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new ae(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ae(r,i.value))}),e}function fr(t,e){if(ue(e))return t;{const n=li(t,e);return n!=null?new Zt(new Ce(n)):new Zt(t.writeTree_.subtree(e))}}function Bd(t){return t.writeTree_.isEmpty()}function ss(t,e){return yE(he(),t.writeTree_,e)}function yE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=yE(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e){return SE(e,t)}function YA(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ro(t.visibleWrites,e,n)),t.lastWriteId=r}function qA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function QA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&XA(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return JA(t),!0;if(r.snap)t.visibleWrites=ny(t.visibleWrites,r.path);else{const a=r.children;kt(a,l=>{t.visibleWrites=ny(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function XA(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Be(t.path,n),e))return!0;return!1}function JA(t){t.visibleWrites=_E(t.allWrites,ZA,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZA(t){return t.visible}function _E(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=ft(n,o),r=ro(r,a,s.snap)):qt(o,n)&&(a=ft(o,n),r=ro(r,he(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=ft(n,o),r=ty(r,a,s.children);else if(qt(o,n))if(a=ft(o,n),ue(a))r=ty(r,he(),s.children);else{const l=ts(s.children,oe(a));if(l){const u=l.getChild(Ee(a));r=ro(r,he(),u)}}}else throw ds("WriteRecord should have .snap or .children")}}return r}function wE(t,e,n,r,i){if(!r&&!i){const s=li(t.visibleWrites,e);if(s!=null)return s;{const o=fr(t.visibleWrites,e);if(Bd(o))return n;if(n==null&&!Wd(o,he()))return null;{const a=n||J.EMPTY_NODE;return ss(o,a)}}}else{const s=fr(t.visibleWrites,e);if(!i&&Bd(s))return n;if(!i&&n==null&&!Wd(s,he()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=_E(t.allWrites,o,e),l=n||J.EMPTY_NODE;return ss(a,l)}}}function eO(t,e,n){let r=J.EMPTY_NODE;const i=li(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=ss(fr(s,new _e(o)),a);r=r.updateImmediateChild(o,l)}),ry(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fr(t.visibleWrites,e);return ry(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tO(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(Wd(t.visibleWrites,s))return null;{const o=fr(t.visibleWrites,s);return Bd(o)?i.getChild(n):ss(o,i.getChild(n))}}function nO(t,e,n,r){const i=Be(e,n),s=li(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fr(t.visibleWrites,i);return ss(o,r.getNode().getImmediateChild(n))}else return null}function rO(t,e){return li(t.visibleWrites,e)}function iO(t,e,n,r,i,s,o){let a;const l=fr(t.visibleWrites,e),u=li(l,he());if(u!=null)a=u;else if(n!=null)a=ss(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],c=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let h=d.getNext();for(;h&&f.length<i;)c(h,r)!==0&&f.push(h),h=d.getNext();return f}else return[]}function sO(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function au(t,e,n,r){return wE(t.writeTree,t.treePath,e,n,r)}function zp(t,e){return eO(t.writeTree,t.treePath,e)}function iy(t,e,n,r){return tO(t.writeTree,t.treePath,e,n,r)}function lu(t,e){return rO(t.writeTree,Be(t.treePath,e))}function oO(t,e,n,r,i,s){return iO(t.writeTree,t.treePath,e,n,r,i,s)}function jp(t,e,n){return nO(t.writeTree,t.treePath,e,n)}function EE(t,e){return SE(Be(t.treePath,e),t.writeTree)}function SE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Uo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Fo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,is(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Uo(r,e.snapshotNode,i.oldSnap));else throw ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const kE=new lO;class Wp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ii(this.viewCache_),s=oO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){return{filter:t}}function cO(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fO(t,e,n,r,i){const s=new aO;let o,a;if(n.type===Qt.OVERWRITE){const u=n;u.source.fromUser?o=Hd(t,e,u.path,u.snap,r,i,s):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ue(u.path),o=uu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Qt.MERGE){const u=n;u.source.fromUser?o=hO(t,e,u.path,u.children,r,i,s):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Vd(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Qt.ACK_USER_WRITE){const u=n;u.revert?o=gO(t,e,u.path,r,i,s):o=pO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Qt.LISTEN_COMPLETE)o=mO(t,e,n.path,r,s);else throw ds("Unknown operation type: "+n.type);const l=s.getChanges();return dO(e,o,l),{viewCache:o,changes:l}}function dO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ou(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(pE(ou(e)))}}function CE(t,e,n,r,i,s){const o=e.eventCache;if(lu(r,n)!=null)return e;{let a,l;if(ue(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ii(e),f=u instanceof J?u:J.EMPTY_NODE,c=zp(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=au(r,ii(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=oe(n);if(u===".priority"){z(_r(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const c=iy(r,n,f,l);c!=null?a=t.filter.updatePriority(f,c):a=o.getNode()}else{const f=Ee(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=iy(r,n,o.getNode(),l);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=jp(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,f,i,s):a=o.getNode()}}return no(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function uu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(ue(n))u=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);u=f.updateFullNode(l.getNode(),h,null)}else{const h=oe(n);if(!l.isCompleteForPath(n)&&_r(n)>1)return e;const m=Ee(n),C=l.getNode().getImmediateChild(h).updateChild(m,r);h===".priority"?u=f.updatePriority(l.getNode(),C):u=f.updateChild(l.getNode(),h,C,m,kE,null)}const c=vE(e,u,l.isFullyInitialized()||ue(n),f.filtersNodes()),d=new Wp(i,c,s);return CE(t,c,n,i,d,a)}function Hd(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const f=new Wp(i,e,s);if(ue(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=no(e,u,!0,t.filter.filtersNodes());else{const c=oe(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=no(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Ee(n),h=a.getNode().getImmediateChild(c);let m;if(ue(d))m=r;else{const w=f.getCompleteChild(c);w!=null?sE(d)===".priority"&&w.getChild(aE(d)).isEmpty()?m=w:m=w.updateChild(d,r):m=J.EMPTY_NODE}if(h.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),c,m,d,f,o);l=no(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function sy(t,e){return t.eventCache.isCompleteForChild(e)}function hO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const f=Be(n,l);sy(e,oe(f))&&(a=Hd(t,a,f,u,i,s,o))}),r.foreach((l,u)=>{const f=Be(n,l);sy(e,oe(f))||(a=Hd(t,a,f,u,i,s,o))}),a}function oy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Vd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ue(n)?u=r:u=new Ce(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const h=e.serverCache.getNode().getImmediateChild(c),m=oy(t,h,d);l=uu(t,l,new _e(c),m,i,s,o,a)}}),u.children.inorderTraversal((c,d)=>{const h=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!h){const m=e.serverCache.getNode().getImmediateChild(c),w=oy(t,m,d);l=uu(t,l,new _e(c),w,i,s,o,a)}}),l}function pO(t,e,n,r,i,s,o){if(lu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return uu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ue(n)){let u=new Ce(null);return l.getNode().forEachChild(Hi,(f,c)=>{u=u.set(new _e(f),c)}),Vd(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((f,c)=>{const d=Be(n,f);l.isCompleteForPath(d)&&(u=u.set(f,l.getNode().getChild(d)))}),Vd(t,e,n,u,i,s,a,o)}}function mO(t,e,n,r,i){const s=e.serverCache,o=vE(e,s.getNode(),s.isFullyInitialized()||ue(n),s.isFiltered());return CE(t,o,n,r,kE,i)}function gO(t,e,n,r,i,s){let o;if(lu(r,n)!=null)return e;{const a=new Wp(r,e,i),l=e.eventCache.getNode();let u;if(ue(n)||oe(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=au(r,ii(e));else{const c=e.serverCache.getNode();z(c instanceof J,"serverChildren would be complete if leaf node"),f=zp(r,c)}f=f,u=t.filter.updateFullNode(l,f,s)}else{const f=oe(n);let c=jp(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=l.getImmediateChild(f)),c!=null?u=t.filter.updateChild(l,f,c,Ee(n),a,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(l,f,J.EMPTY_NODE,Ee(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=au(r,ii(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||lu(r,he())!=null,no(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Mp(r.getIndex()),s=MA(r);this.processor_=uO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),f=new wr(l,o.isFullyInitialized(),i.filtersNodes()),c=new wr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ec(c,f),this.eventGenerator_=new BA(this.query_)}get query(){return this.query_}}function yO(t){return t.viewCache_.serverCache.getNode()}function _O(t){return ou(t.viewCache_)}function wO(t,e){const n=ii(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function ay(t){return t.eventRegistrations_.length===0}function EO(t,e){t.eventRegistrations_.push(e)}function ly(t,e,n){const r=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function uy(t,e,n,r){e.type===Qt.MERGE&&e.source.queryId!==null&&(z(ii(t.viewCache_),"We should always have a full cache before handling merges"),z(ou(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=fO(t.processor_,i,e,n,r);return cO(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,bE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function SO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(is(s,o))}),n.isFullyInitialized()&&r.push(pE(n.getNode())),bE(t,r,n.getNode(),e)}function bE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return HA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu;class IE{constructor(){this.views=new Map}}function kO(t){z(!cu,"__referenceConstructor has already been defined"),cu=t}function CO(){return z(cu,"Reference.ts has not been loaded"),cu}function bO(t){return t.views.size===0}function Bp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),uy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(uy(o,e,n,r));return s}}function xE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=au(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=zp(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const u=ec(new wr(a,l,!1),new wr(r,i,!1));return new vO(e,u)}return o}function IO(t,e,n,r,i,s){const o=xE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),EO(o,n),SO(o,n)}function xO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Er(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(ly(u,n,r)),ay(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(ly(l,n,r)),ay(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Er(t)&&s.push(new(CO())(e._repo,e._path)),{removed:s,events:o}}function TE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dr(t,e){let n=null;for(const r of t.views.values())n=n||wO(r,e);return n}function PE(t,e){if(e._queryParams.loadsAllData())return nc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function NE(t,e){return PE(t,e)!=null}function Er(t){return nc(t)!=null}function nc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu;function TO(t){z(!fu,"__referenceConstructor has already been defined"),fu=t}function PO(){return z(fu,"Reference.ts has not been loaded"),fu}let NO=1;class cy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=sO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function RE(t,e,n,r,i){return YA(t.pendingWriteTree_,e,n,r,i),i?la(t,new ri(gE(),e,n)):[]}function $r(t,e,n=!1){const r=qA(t.pendingWriteTree_,e);if(QA(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(he(),!0):kt(r.children,o=>{s=s.set(new _e(o),!0)}),la(t,new su(r.path,s,n))}else return[]}function aa(t,e,n){return la(t,new ri(Up(),e,n))}function RO(t,e,n){const r=Ce.fromObject(n);return la(t,new jo(Up(),e,r))}function AO(t,e){return la(t,new zo(Up(),e))}function OO(t,e,n){const r=Vp(t,n);if(r){const i=Gp(r),s=i.path,o=i.queryId,a=ft(s,e),l=new zo($p(o),a);return Kp(t,s,l)}else return[]}function du(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||NE(o,e))){const l=xO(o,e,n,r);bO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,h)=>Er(h));if(f&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const h=MO(d);for(let m=0;m<h.length;++m){const w=h[m],C=w.query,g=DE(t,w);t.listenProvider_.startListening(io(C),Wo(t,C),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(io(e),null):u.forEach(d=>{const h=t.queryToTagMap.get(rc(d));t.listenProvider_.stopListening(io(d),h)}))}FO(t,u)}return a}function AE(t,e,n,r){const i=Vp(t,r);if(i!=null){const s=Gp(i),o=s.path,a=s.queryId,l=ft(o,e),u=new ri($p(a),l,n);return Kp(t,o,u)}else return[]}function LO(t,e,n,r){const i=Vp(t,r);if(i){const s=Gp(i),o=s.path,a=s.queryId,l=ft(o,e),u=Ce.fromObject(n),f=new jo($p(a),l,u);return Kp(t,o,f)}else return[]}function Gd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,h)=>{const m=ft(d,i);s=s||dr(h,m),o=o||Er(h)});let a=t.syncPointTree_.get(i);a?(o=o||Er(a),s=s||dr(a,he())):(a=new IE,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,m)=>{const w=dr(m,he());w&&(s=s.updateImmediateChild(h,w))}));const u=NE(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=rc(e);z(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=UO();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const f=tc(t.pendingWriteTree_,i);let c=IO(a,e,n,f,s,l);if(!u&&!o&&!r){const d=PE(a,e);c=c.concat($O(t,e,d))}return c}function Hp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ft(o,e),u=dr(a,l);if(u)return u});return wE(i,e,s,n,!0)}function DO(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,f)=>{const c=ft(u,n);r=r||dr(f,c)});let i=t.syncPointTree_.get(n);i?r=r||dr(i,he()):(i=new IE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new wr(r,!0,!1):null,a=tc(t.pendingWriteTree_,e._path),l=xE(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return _O(l)}function la(t,e){return OE(e,t.syncPointTree_,null,tc(t.pendingWriteTree_,he()))}function OE(t,e,n,r){if(ue(t.path))return LE(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=dr(i,he()));let s=[];const o=oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,f=EE(r,o);s=s.concat(OE(a,l,u,f))}return i&&(s=s.concat(Bp(i,t,r,n))),s}}function LE(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=dr(i,he()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=EE(r,o),f=t.operationForChild(o);f&&(s=s.concat(LE(f,a,l,u)))}),i&&(s=s.concat(Bp(i,t,r,n))),s}function DE(t,e){const n=e.query,r=Wo(t,n);return{hashFn:()=>(yO(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?OO(t,n._path,r):AO(t,n._path);{const s=DR(i,n);return du(t,n,null,s)}}}}function Wo(t,e){const n=rc(e);return t.queryToTagMap.get(n)}function rc(t){return t._path.toString()+"$"+t._queryIdentifier}function Vp(t,e){return t.tagToQueryMap.get(e)}function Gp(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Kp(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=tc(t.pendingWriteTree_,e);return Bp(r,n,i,null)}function MO(t){return t.fold((e,n,r)=>{if(n&&Er(n))return[nc(n)];{let i=[];return n&&(i=TE(n)),kt(r,(s,o)=>{i=i.concat(o)}),i}})}function io(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PO())(t._repo,t._path):t}function FO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=rc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function UO(){return NO++}function $O(t,e,n){const r=e._path,i=Wo(t,e),s=DE(t,n),o=t.listenProvider_.startListening(io(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)z(!Er(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,f,c)=>{if(!ue(u)&&f&&Er(f))return[nc(f).query];{let d=[];return f&&(d=d.concat(TE(f).map(h=>h.query))),kt(c,(h,m)=>{d=d.concat(m)}),d}});for(let u=0;u<l.length;++u){const f=l[u];t.listenProvider_.stopListening(io(f),Wo(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yp(n)}node(){return this.node_}}class qp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new qp(this.syncTree_,n)}node(){return Hp(this.syncTree_,this.path_)}}const zO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fy=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WO(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},WO=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},BO=function(t,e,n,r){return Qp(e,new qp(n,t),r)},ME=function(t,e,n){return Qp(t,new Yp(e),n)};function Qp(t,e,n){const r=t.getPriority().val(),i=fy(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=fy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,qe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ge(i))),o.forEachChild(De,(a,l)=>{const u=Qp(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Jp(t,e){let n=e instanceof _e?e:new _e(e),r=t,i=oe(n);for(;i!==null;){const s=ts(r.node.children,i)||{children:{},childCount:0};r=new Xp(i,r,s),n=Ee(n),i=oe(n)}return r}function vs(t){return t.node.value}function FE(t,e){t.node.value=e,Kd(t)}function UE(t){return t.node.childCount>0}function HO(t){return vs(t)===void 0&&!UE(t)}function ic(t,e){kt(t.node.children,(n,r)=>{e(new Xp(n,t,r))})}function $E(t,e,n,r){n&&!r&&e(t),ic(t,i=>{$E(i,e,!0,r)}),n&&r&&e(t)}function VO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ua(t){return new _e(t.parent===null?t.name:ua(t.parent)+"/"+t.name)}function Kd(t){t.parent!==null&&GO(t.parent,t.name,t)}function GO(t,e,n){const r=HO(n),i=Ln(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Kd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Kd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=/[\[\].#$\/\u0000-\u001F\u007F]/,YO=/[\[\].#$\u0000-\u001F\u007F]/,of=10*1024*1024,zE=function(t){return typeof t=="string"&&t.length!==0&&!KO.test(t)},jE=function(t){return typeof t=="string"&&t.length!==0&&!YO.test(t)},qO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jE(t)},QO=function(t,e,n,r){r&&e===void 0||Zp(vp(t,"value"),e,n)},Zp=function(t,e,n){const r=n instanceof _e?new pA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ar(r)+" with contents = "+e.toString());if(Uw(e))throw new Error(t+"contains "+e.toString()+" "+Ar(r));if(typeof e=="string"&&e.length>of/3&&qu(e)>of)throw new Error(t+"contains a string greater than "+of+" utf8 bytes "+Ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mA(r,o),Zp(t,a,r),gA(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ar(r)+" in addition to actual children.")}},WE=function(t,e,n,r){if(!(r&&n===void 0)&&!jE(n))throw new Error(vp(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),WE(t,e,n,r)},JO=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ZO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qO(n))throw new Error(vp(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function em(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Op(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function BE(t,e,n){em(t,n),HE(t,r=>Op(r,e))}function cn(t,e,n){em(t,n),HE(t,r=>qt(r,e)||qt(e,r))}function HE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(tL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Br&&ot("event: "+n.toString()),gs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL="repo_interrupt",rL=25;class iL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=iu(),this.transactionQueueTree_=new Xp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sL(t,e,n){if(t.stats_=Rp(t.repoInfo_),t.forceRestClient_||$R())t.server_=new ru(t.repoInfo_,(r,i,s,o)=>{dy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new En(t.repoInfo_,e,(r,i,s,o)=>{dy(t,r,i,s,o)},r=>{hy(t,r)},r=>{aL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=HR(t.repoInfo_,()=>new WA(t.stats_,t.server_)),t.infoData_=new FA,t.infoSyncTree_=new cy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=aa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nm(t,"connected",!1),t.serverSyncTree_=new cy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);cn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function oL(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tm(t){return zO({timestamp:oL(t)})}function dy(t,e,n,r,i){t.dataUpdateCount++;const s=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Gl(n,u=>qe(u));o=LO(t.serverSyncTree_,s,l,i)}else{const l=qe(n);o=AE(t.serverSyncTree_,s,l,i)}else if(r){const l=Gl(n,u=>qe(u));o=RO(t.serverSyncTree_,s,l)}else{const l=qe(n);o=aa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=oc(t,s)),cn(t.eventQueue_,a,o)}function hy(t,e){nm(t,"connected",e),e===!1&&cL(t)}function aL(t,e){kt(e,(n,r)=>{nm(t,n,r)})}function nm(t,e,n){const r=new _e("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(r,i);const s=aa(t.infoSyncTree_,r,i);cn(t.eventQueue_,r,s)}function VE(t){return t.nextWriteId_++}function lL(t,e,n){const r=DO(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=qe(i).withIndex(e._queryParams.getIndex());Gd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=aa(t.serverSyncTree_,e._path,s);else{const a=Wo(t.serverSyncTree_,e);o=AE(t.serverSyncTree_,e._path,s,a)}return cn(t.eventQueue_,e._path,o),du(t.serverSyncTree_,e,n,null,!0),s},i=>(sc(t,"get for query "+We(e)+" failed: "+i),Promise.reject(new Error(i))))}function uL(t,e,n,r,i){sc(t,"set",{path:e.toString(),value:n,priority:r});const s=tm(t),o=qe(n,r),a=Hp(t.serverSyncTree_,e),l=ME(o,a,s),u=VE(t),f=RE(t.serverSyncTree_,e,l,u,!0);em(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,h)=>{const m=d==="ok";m||St("set at "+e+" failed: "+d);const w=$r(t.serverSyncTree_,u,!m);cn(t.eventQueue_,e,w),hL(t,i,d,h)});const c=QE(t,e);oc(t,c),cn(t.eventQueue_,c,[])}function cL(t){sc(t,"onDisconnectEvents");const e=tm(t),n=iu();jd(t.onDisconnect_,he(),(i,s)=>{const o=BO(i,s,t.serverSyncTree_,e);mE(n,i,o)});let r=[];jd(n,he(),(i,s)=>{r=r.concat(aa(t.serverSyncTree_,i,s));const o=QE(t,i);oc(t,o)}),t.onDisconnect_=iu(),cn(t.eventQueue_,he(),r)}function fL(t,e,n){let r;oe(e._path)===".info"?r=Gd(t.infoSyncTree_,e,n):r=Gd(t.serverSyncTree_,e,n),BE(t.eventQueue_,e._path,r)}function py(t,e,n){let r;oe(e._path)===".info"?r=du(t.infoSyncTree_,e,n):r=du(t.serverSyncTree_,e,n),BE(t.eventQueue_,e._path,r)}function dL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nL)}function sc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function hL(t,e,n,r){e&&gs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function GE(t,e,n){return Hp(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function rm(t,e=t.transactionQueueTree_){if(e||ac(t,e),vs(e)){const n=YE(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pL(t,ua(e),n)}else UE(e)&&ic(e,n=>{rm(t,n)})}function pL(t,e,n){const r=n.map(u=>u.currentWriteId),i=GE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];z(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=ft(e,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{sc(t,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat($r(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ac(t,Jp(t.transactionQueueTree_,e)),rm(t,t.transactionQueueTree_),cn(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)gs(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{St("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}oc(t,e)}},o)}function oc(t,e){const n=KE(t,e),r=ua(n),i=YE(t,n);return mL(t,i,r),r}function mL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ft(n,l.path);let f=!1,c;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,c=l.abortReason,i=i.concat($r(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rL)f=!0,c="maxretry",i=i.concat($r(t.serverSyncTree_,l.currentWriteId,!0));else{const d=GE(t,l.path,o);l.currentInputSnapshot=d;const h=e[a].update(d.val());if(h!==void 0){Zp("transaction failed: Data returned ",h,l.path);let m=qe(h);typeof h=="object"&&h!=null&&Ln(h,".priority")||(m=m.updatePriority(d.getPriority()));const C=l.currentWriteId,g=tm(t),p=ME(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=VE(t),o.splice(o.indexOf(C),1),i=i.concat(RE(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat($r(t.serverSyncTree_,C,!0))}else f=!0,c="nodata",i=i.concat($r(t.serverSyncTree_,l.currentWriteId,!0))}cn(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}ac(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gs(r[a]);rm(t,t.transactionQueueTree_)}function KE(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&vs(r)===void 0;)r=Jp(r,n),e=Ee(e),n=oe(e);return r}function YE(t,e){const n=[];return qE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function qE(t,e,n){const r=vs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ic(e,i=>{qE(t,i,n)})}function ac(t,e){const n=vs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,FE(e,n.length>0?n:void 0)}ic(e,r=>{ac(t,r)})}function QE(t,e){const n=ua(KE(t,e)),r=Jp(t.transactionQueueTree_,e);return VO(r,i=>{af(t,i)}),af(t,r),$E(r,i=>{af(t,i)}),n}function af(t,e){const n=vs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($r(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?FE(e,void 0):n.length=s+1,cn(t.eventQueue_,ua(e),i);for(let o=0;o<r.length;o++)gs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):St(`Invalid query segment '${n}' in query '${t}'`)}return e}const my=function(t,e){const n=yL(t),r=n.namespace;n.domain==="firebase.com"&&Rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||NR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _e(n.pathString)}},yL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=gL(t.substring(f,c)));const d=vL(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class JE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:sE(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=Zv(this._queryParams),n=Pp(e);return n==="{}"?"default":n}get _queryObject(){return Zv(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof im))return!1;const n=this._repo===e._repo,r=Op(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+hA(this._path)}}class dn extends im{constructor(e,n){super(e,n,new Fp,!1)}get parent(){const e=aE(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class os{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=hu(this.ref,e);return new os(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new os(i,hu(this.ref,r),De)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $s(t,e){return t=Ot(t),t._checkNotDeleted("ref"),e!==void 0?hu(t._root,e):t._root}function hu(t,e){return t=Ot(t),oe(t._path)===null?XO("child","path",e,!1):WE("child","path",e,!1),new dn(t._repo,Be(t._path,e))}function Rs(t,e){t=Ot(t),JO("set",t._path),QO("set",e,t._path,!1);const n=new Yu;return uL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function eS(t){t=Ot(t);const e=new ZE(()=>{}),n=new lc(e);return lL(t._repo,t,n).then(r=>new os(r,new dn(t._repo,t._path),t._queryParams.getIndex()))}class lc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new XE("value",this,new os(e.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JE(this,e,n):null}matches(e){return e instanceof lc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class sm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JE(this,e,n):null}createEvent(e,n){z(e.childName!=null,"Child events should have a childName.");const r=hu(new dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new XE(e.type,this,new os(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof sm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function _L(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(f,c)=>{py(t._repo,t,a),l(f,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new ZE(n,s||void 0),a=e==="value"?new lc(o):new sm(e,o);return fL(t._repo,t,a),()=>py(t._repo,t,a)}function gy(t,e,n,r){return _L(t,"value",e,n,r)}kO(dn);TO(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="FIREBASE_DATABASE_EMULATOR_HOST",Yd={};let EL=!1;function SL(t,e,n,r){t.repoInfo_=new Qw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function kL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=my(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[wL]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=my(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const f=i&&l?new Bi(Bi.OWNER):new jR(t.name,t.options,e);ZO("Invalid Firebase Database URL",o),ue(o.path)||Rn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=bL(a,t,f,new zR(t.name,n));return new IL(c,t)}function CL(t,e){const n=Yd[e];(!n||n[t.key]!==t)&&Rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dL(t),delete n[t.key]}function bL(t,e,n,r){let i=Yd[e.name];i||(i={},Yd[e.name]=i);let s=i[t.toURLString()];return s&&Rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new iL(t,EL,n,r),i[t.toURLString()]=s,s}class IL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rn("Cannot call "+e+" on a deleted database.")}}function xL(t=Z1(),e){const n=wp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=e2("database");r&&TL(n,...r)}return n}function TL(t,e,n,r={}){t=Ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Rn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Bi(Bi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:t2(r.mockUserToken,t.app.options.projectId);s=new Bi(o)}SL(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t){bR(ps),ns(new Zr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return kL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cr(Mv,Fv,t),cr(Mv,Fv,"esm2017")}En.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};En.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};PL();const NL={apiKey:"AIzaSyCUyPgR8Z7fj3iXS_VXlsZOUurasOnochI",authDomain:"react-chess-d36fb.firebaseapp.com",databaseURL:"https://react-chess-d36fb-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"react-chess-d36fb",storageBucket:"react-chess-d36fb.appspot.com",messagingSenderId:"179911716640",appId:"1:179911716640:web:288ee42b166e3069207145"},RL=J1(NL),tS=CR(),zs=xL(RL);oN(tS).catch(t=>console.error(t));const ca=N.exports.createContext(null),AL=()=>{const t=N.exports.useContext(ca);if(t===null)throw new Error("Lobby context has not been created.");return t},OL=async()=>{let t=0;for(;t<10;){let n=(Math.floor(Math.random()*999998)+1).toString().padStart(6,"0");if(!(await eS($s(zs,`lobbies/${n}`))).exists())return n;t++}},lf=t=>{const{defaultUsername:e,gameLength:n}=N.exports.useContext(Ir),[r,i]=N.exports.useState(!0),[s,o]=N.exports.useState(),[a,l]=N.exports.useState(void 0),u=N.exports.useRef();N.exports.useEffect(()=>(dN(tS,d=>{d?(u.current=d,o(d.uid)):(u.current=void 0,o(void 0))}),()=>{}),[]);const f=d=>{l(d.val())},c=s?r?{type:"ready",uid:s,Create:async d=>{if(!s){d("not authenticated yet");return}const h=await OL();if(!h){d("could not find a unique id for your lobby");return}const m=Td(n,{w:{name:e,type:"local"},b:{name:"not joined",type:"online"}}),w=cv(m),C={lobbyId:h,hostUid:s,players:{w:{name:e,uid:s}},lastAccessTime:new Date().getTime(),game:w,inGame:!1,spectators:[]};try{const g=$s(zs,`lobbies/${h}`);await Rs(g,JSON.parse(JSON.stringify(C))),l(C),i(!1),gy(g,f)}catch(g){d(`failed to create lobby (id ${h}).  see the console for more information.`),console.error(g)}},Connect:async(d,h)=>{var g;if(!s){h("not authenticated yet");return}const m=$s(zs,`lobbies/${d}`),w=await eS(m);if(!w.exists()){h("lobby does not exist");return}const C=w.val();C.players.w.uid!==s&&(C.players.b===void 0?(C.players.b={name:e,uid:s},Rs(m,JSON.parse(JSON.stringify(C)))):C.players.b.uid!==s&&((g=C.spectators)!=null?g:[]).filter(v=>v.uid===s).length===0&&(C.spectators===void 0&&(C.spectators=[]),C.spectators.push({name:e,uid:s}),Rs(m,JSON.parse(JSON.stringify(C))))),gy(m,f),l(C),i(!1)}}:a!=null&&a.inGame?{type:"ingame",uid:s,lobby:a,Sync:d=>{const h=cv(d);l(m=>{if(m){let w=new Date().getTime();const C=h.timers[h.turn].set;C!==void 0&&(w=C),m={...m,game:h,lastAccessTime:w},Rs($s(zs,`lobbies/${m==null?void 0:m.lobbyId}`),JSON.parse(JSON.stringify(m)))}return m})}}:{type:"lobby",uid:s,lobby:a,Start:()=>{l(d=>(d&&(d={...d,inGame:!0},Rs($s(zs,`lobbies/${d.lobbyId}/inGame`),!0)),d))}}:{type:"loading"};return L(ca.Provider,{value:c,children:t.children})},qd=(t,e)=>`${"abcdefgh"[t]}${8-e}`,vy=t=>["abcdefgh".indexOf(t[0]),8-parseInt(t[1])],nS=N.exports.createContext(null),fa=()=>{const t=N.exports.useContext(nS);if(t===null)throw new Error("Chess context has not been created.");return t},uf=t=>{const{allowPause:e,defaultUsername:n,gameLength:r}=N.exports.useContext(Ir),[i,s]=N.exports.useState(Td(r,{w:{name:"loading",type:"local"},b:{name:"loading",type:"local"}})),[o,a]=N.exports.useState(),l=N.exports.useRef(new Bl.Chess),u=N.exports.useRef(new HT),f=N.exports.useRef(void 0),c=N.exports.useContext(ca);u.current.onmessage=h=>{const m=h.data;switch(m.type){case"success":{s(w=>ct(w,{type:"move",from:m.move.from,to:m.move.to,promotion:m.move.promotion,time:new Date().getTime(),chess:l.current}));break}case"failed":{alert("bot failed to generate a move");break}}},N.exports.useEffect(()=>{var m,w,C,g,p,v;if((i.turn==="b"?(m=f.current)==null?void 0:m.player_black:(w=f.current)==null?void 0:w.player_white)==="bot"&&i.redoStack.length===0)u.current.postMessage({type:"generateMove",fen:l.current.fen(),team:i.turn});else if((c==null?void 0:c.type)==="ingame"){const b=c.lobby.players[i.turn==="w"?"b":"w"],A=(g=(C=i.moves)==null?void 0:C.length)!=null?g:0,I=(v=(p=c.lobby.game.moves)==null?void 0:p.length)!=null?v:0;b&&b.uid===c.uid&&A>I&&c.Sync(i)}},[i.turn]),N.exports.useEffect(()=>{if((c==null?void 0:c.type)==="ingame"){const h=c.lobby;s(m=>{const w=VT(m,h,c.uid,l.current,new Date().getTime());if(typeof w=="string")a(w),console.error("found cheater!"),console.error(w);else return w;return m})}},[c]);const d={state:i,anticheat:o,clearAnticheat:()=>{a(void 0)},StartNewGame:h=>{f.current=h,l.current=new Bl.Chess,s(Td(r,{w:{name:"WHITE",type:h.player_white},b:{name:h.player_black==="bot"?"BOT":"BLACK",type:h.player_black}}))},MakeMove:(h,m)=>(s(w=>ct(w,{type:"move",from:h,to:m,time:new Date().getTime(),chess:l.current})),!0),Promote:(h,m,w)=>(s(C=>ct(C,{type:"move",from:h,to:m,promotion:w,time:new Date().getTime(),chess:l.current})),!0),PotentialMoves:(h,m)=>l.current.moves({square:qd(h,m),verbose:!0}),UndoMove:()=>i.players.w.type==="online"||i.players.b.type==="online"?!1:(s(h=>ct(h,{type:"undo",time:new Date().getTime(),chess:l.current})),!0),RedoMove:()=>i.players.w.type==="online"||i.players.b.type==="online"?!1:(s(h=>ct(h,{type:"redo",time:new Date().getTime(),chess:l.current})),!0),Pause:()=>i.players.w.type==="online"||i.players.b.type==="online"||!e?!1:(s(h=>ct(h,{type:"pause",time:new Date().getTime()})),!0),OutOfTime:()=>{s(h=>ct(h,{type:"checkTimers",time:new Date().getTime(),chess:l.current}))}};return L(nS.Provider,{value:d,children:t.children})},LL=G.p`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: #000000AA;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  opacity: ${t=>t.opacity};
  transition: opacity 0.5s;
`,om=({error:t,duration:e,onErrorClose:n})=>{const[r,i]=N.exports.useState(""),[s,o]=N.exports.useState(1);return N.exports.useEffect(()=>{if(i(t),t!=""){setTimeout(()=>{o(0)},e);const a=setTimeout(()=>{o(1),i(""),n()},e+500);return()=>clearTimeout(a)}},[t]),L(Xs,{children:r!==""&&L(LL,{opacity:s,children:r})})},yy="512px",so=(t,e)=>{switch(t){case"p":return e?"\u2659":"\u265F\uFE0E";case"r":return e?"\u2656":"\u265C";case"n":return e?"\u2658":"\u265E";case"b":return e?"\u2657":"\u265D";case"k":return e?"\u2654":"\u265A";case"q":return e?"\u2655":"\u265B"}return"_"},fl=t=>{switch(t){case"p":return"pawn";case"r":return"rook";case"n":return"knight";case"b":return"bishop";case"k":return"king";case"q":return"queen"}return"_"},rS=(t,e)=>{const n=`/react-chess/pieces/shadow/${yy}/`,r=`${e?"w":"b"}_${fl(t)}_png_shadow_${yy}.png`;return n+r},DL=G.img.attrs(t=>{if(t.drag_state)return{style:{transform:`translate(${t.drag_state.x-t.drag_state.relx}px, ${t.drag_state.y-t.drag_state.rely}px)`,transition:"none",zIndex:15}};let e={};return t.moved&&(e={zIndex:10}),{style:{transform:`translate(${t.gx*100}%, ${t.gy*100}%)`,...e}}})`
  position: absolute;
  width: 12.5%;
  height: 12.5%;
  top: 0px;
  left: 0px;
  transition: transform 0.5s;
  touch-action: none;
`,ML=t=>{const e=N.exports.useRef(null),[n,r]=N.exports.useState(null),[i,s]=N.exports.useState(!1),o=d=>{if(d.stopPropagation(),d.preventDefault(),d.button!=0||!t.can_click)return;const h=d.target.getBoundingClientRect(),m=d.target.parentElement;if(m===null)return;const w=d.pageX-h.x+m.offsetLeft,C=d.pageY-h.y+m.offsetTop-window.scrollY;t.on_select_change(!0),r({x:d.pageX,y:d.pageY,relx:w,rely:C})},a=d=>{if(d.stopPropagation(),d.preventDefault(),!t.can_click||d.touches.length===0)return;const h=d.target.getBoundingClientRect(),m=d.target.parentElement;if(m===null)return;const w=d.touches[0].pageX-h.x+m.offsetLeft,C=d.touches[0].pageY-h.y+m.offsetTop;t.on_select_change(!0),r({x:d.touches[0].pageX,y:d.touches[0].pageY,relx:w,rely:C})},l=d=>{n!==null&&(r(h=>({x:d.pageX,y:d.pageY,relx:h!==null?h.relx:0,rely:h!==null?h.rely:0})),d.stopPropagation(),d.preventDefault())},u=d=>{n===null&&d.touches.length>0||(r(h=>({x:d.touches[0].pageX,y:d.touches[0].pageY,relx:h!==null?h.relx:0,rely:h!==null?h.rely:0})),d.stopPropagation(),d.preventDefault())},f=d=>{if(n!==null){t.on_select_change(!1),r(null);const h=t.pixels_to_grid(d.pageX,d.pageY);t.on_place(h[0],h[1])}},c=()=>{if(n!==null){const[d,h]=[n.x,n.y];t.on_select_change(!1),r(null);const m=t.pixels_to_grid(d,h);t.on_place(m[0],m[1])}};return N.exports.useEffect(()=>(n!==null&&(document.addEventListener("mousemove",l,{passive:!1}),document.addEventListener("mouseup",f,{passive:!1}),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",c,{passive:!1})),()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",c)}),[n]),N.exports.useEffect(()=>{s(!0),setTimeout(()=>{s(!1)},500)},[t.grid_x,t.grid_y]),L(DL,{drag_state:n,moved:i,gx:t.grid_x,gy:t.grid_y,ref:e,onMouseDown:o,onTouchStart:a,src:rS(t.type,t.is_white)})},FL=G.div`
grid-column: ${t=>t.grid_x+1} / span 1;
grid-row: ${t=>t.grid_y+1} / span 1;
position: relative;
`,UL=G.div`
top: 25%;
left: 25%;
position: absolute;
width: 50%;
height: 50%;
border-radius: 50%;
background-color: ${t=>t.will_take?"#fc0339":t.is_castle?"#f5a742":"#03a1fc"};
`,$L=t=>L(FL,{...t,children:L(UL,{...t})}),zL=G.div`
  width: 100%;
  height: 100%;

  display: grid;
  position: relative;
  grid-template-columns: ${()=>"auto ".repeat(8)+";"};
  grid-template-rows: ${()=>"auto ".repeat(8)+";"};
  user-select: none;
  -moz-user-select: none;
  touch-action: none;
`,jL=G.div`
  position: relative;
  background-color: ${t=>t.gridColor?t.theme.chess.board_light:t.theme.chess.board_dark};
  grid-column: ${t=>t.grid_x+1} / span 1;
  grid-row: ${t=>t.grid_y+1} / span 1;
`,WL=G.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: ${t=>t.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`,BL=G.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${t=>t.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`,_y=G.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  right: 50px;
  background: ${t=>t.theme.menus.controls.background};
  z-index: 20;
`,wy=G.h1`
  text-align: center;
  color: #fff;
  padding-top: 1em;
`,HL=G.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 2em 0em 4em 0em;
`,VL=G.img`
  width: 15%;
  background: #fff;
  border: 1px solid #ffffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${t=>t.theme.menus.controls.background};
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  padding: 5px;

  &:hover {
    border: 1px solid #777;
    box-shadow: 1px 1px 5px #aeaeae;
  }

  &:active {
    background: #eee;
  }
`,GL=G.h2`
  text-align: center;
  color: #fff;
  padding-bottom: 1em;
`,KL=["q","r","n","b"],YL=()=>{const{state:{board:t,turn:e,players:n,complete:r},anticheat:i,clearAnticheat:s,PotentialMoves:o,MakeMove:a,Promote:l}=fa(),[u,f]=N.exports.useState(null),c=N.exports.useRef(null),[d,h]=N.exports.useState(""),[m,w]=N.exports.useState(void 0);N.exports.useContext(ca);const C=I=>{if(!I.target||!c.current)return;const M=I.target;(M===c.current||c.current.contains(M))&&(I.preventDefault(),I.stopPropagation())};N.exports.useEffect(()=>(document.addEventListener("touchmove",C,{passive:!1}),()=>{document.removeEventListener("touchmove",C)}),[]),N.exports.useEffect(()=>{h(i||"")},[i]);const g=(I,M)=>{const F=c.current;if(F===null)return console.log("failed to get reference to game board div!"),[0,0];const V=Math.floor((I-F.offsetLeft)/(F.offsetWidth/8)),j=Math.floor((M-F.offsetTop)/(F.offsetHeight/8));return[V,j]},p=(I,M)=>{const F=c.current;if(F===null)return console.log("failed to get reference to game board div!"),[0,0];const V=I*(F.offsetWidth/8)+F.offsetLeft,j=M*(F.offsetHeight/8)+F.offsetTop;return[V,j]},v=(I,M,F,V)=>{var we;const j=qd(I,M),pe=qd(F,V);if(pe[1]===(e==="w"?"8":"1")&&((we=t[M][I])==null?void 0:we.type)==="p"){w({from:j,to:pe});return}if(!a(j,pe)){h(`unable to move piece from ${j} to ${pe}`);return}},b=(I,M,F)=>{if(!l(I,M,F)){h(`unable to move piece from ${I} to ${M} (picked ${fl(F)})`);return}w(void 0)},A=()=>{if(r===void 0)return"invalid reason";let I=e==="w"?n.w.name:n.b.name;return r.indexOf(pi.CHECKMATE)>=0?I+" is in checkmate":r.indexOf(pi.OUT_OF_TIME)>=0?I+" ran out of time":r.indexOf(pi.INSUFFICIENT_MATERIAL)>=0?I+" has insufficient material":r.indexOf(pi.THREEFOLD_REPITITION)>=0?I+" performed threefold repitition":r.indexOf(pi.DRAW)>=0?"draw":"invalid reason"};return le(zL,{ref:c,children:[[...Array(8*8)].map((I,M)=>{const F=M%8,V=Math.floor(M/8);return le(jL,{grid_x:F,grid_y:V,gridColor:(M-V)%2==0,children:[F==0&&L(WL,{children:8-V}),V==0&&L(BL,{children:"abcdefgh"[F]})]},M)}),t.map((I,M)=>I.map((F,V)=>({x:V,y:M,...F}))).flat().filter(I=>I.team&&I.type&&I.uid).sort((I,M)=>I.uid.localeCompare(M.uid)).map(I=>L(ML,{type:I.type,grid_x:I.x,grid_y:I.y,is_white:I.team=="w",on_place:(M,F)=>v(I.x,I.y,M,F),pixels_to_grid:g,grid_to_pixels:p,on_select_change:M=>f(M?{grid_x:I.x,grid_y:I.y}:null),can_click:I.team===e&&n[e].type==="local"},`piece_${I.uid}`)),u&&o(u.grid_x,u.grid_y).map((I,M)=>L($L,{grid_x:vy(I.to)[0],grid_y:vy(I.to)[1],will_take:I.flags.indexOf("e")>=0||I.flags.indexOf("c")>=0,is_castle:I.flags.indexOf("k")>=0||I.flags.indexOf("q")>=0},`move_${M}`)),L(om,{error:d,duration:1e3,onErrorClose:()=>{h(""),s()}}),m&&le(_y,{children:[L(wy,{children:"promotion"}),L(HL,{children:KL.map(I=>L(VL,{src:rS(I,e==="w"),title:fl(I),alt:fl(I),onClick:()=>b(m.from,m.to,I)},`promotion-${I}`))})]}),r&&le(_y,{children:[L(wy,{children:"Game Over: "}),L(GL,{children:A()})]})]})},qL=G.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${t=>t.theme.menus.controls.background};
  user-select: none;
`,Ha=G(br)`
  background: ${t=>t.theme.menus.controls.button};
  padding: 9px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${t=>t.theme.menus.controls.background};
  border: 1px solid #ffffffff;
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid #777;
    box-shadow: 1px 1px 5px #aeaeae;
  }

  &:active {
    background: #eee;
  }
`,QL=({toggleFullscreen:t,quitGame:e})=>{const{UndoMove:n,RedoMove:r,Pause:i}=fa(),[s,o]=N.exports.useState("");return le(qL,{children:[L(Ha,{onClick:()=>n()||o("Undo is disabled"),icon:RT,title:"Undo move"}),L(Ha,{onClick:()=>r()||o("Redo is disabled"),icon:PT,title:"Redo move"}),L(Ha,{onClick:()=>i()||o("Pause is disabled"),icon:xT,title:"Pause"}),L(Ha,{onClick:()=>e(),icon:bT,title:"Leave game"}),L(om,{error:s,duration:1e3,onErrorClose:()=>o("")})]})},XL=G.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${t=>t.theme.menus.players.background};
`,JL=G.div`
  display: grid;
  border-top: 2px solid ${t=>t.theme.menus.controls.background};
  grid-template-columns: 50px auto 50px;
  grid-template-rows: 20px 20px 20px;
  grid-template-areas:
    "icon name turn"
    "icon details turn"
    "pieces pieces turn";
`,ZL=G.span`
  font-size: 30px;
  width: 50px;
  text-align: center;
  align-self: center;
  grid-area: icon;
`,eD=G.p`
  padding: 0px;
  margin: 0px;
  grid-area: name;
  align-self: end;
  color: ${t=>t.theme.colors.text};
`,tD=G.span`
  font-size: 10px;
  background: #ff0000;
  border-radius: 7px;
  padding: 2px 4px;
  color: ${t=>t.theme.colors.text};
`,nD=G.p`
  padding: 0px;
  margin: 0px;
  align-self: center;
  grid-area: details;
  color: ${t=>t.theme.colors.text};
`,rD=G.p`
  grid-area: pieces;
  padding: 0px;
  margin: 0px;
  margin-top: -3px;
  margin-left: 2px;
  color: #000;
`,iD=G.p`
  grid-area: turn;
  display: flex;
  align-item: center;
  justify-content: center;
  color: ${t=>t.theme.colors.text};
`,fi={icon:"",name:"loading...",status:"",details:"",turn:!1,lost_pieces:[],playable:!1,timer:{minutes:0,seconds:0}},sD=()=>{const{state:{players:t,captured:e,turn:n,complete:r,timers:i,check:s},OutOfTime:o}=fa(),[a,l]=N.exports.useState([{...fi,lost_pieces:[...fi.lost_pieces],timer:{...fi.timer}},{...fi,lost_pieces:[...fi.lost_pieces],timer:{...fi.timer}}]),u=()=>{l(c=>(c.forEach((d,h)=>{const m=h===0?"w":"b";d.icon=so("k",m==="w"),s[m]?d.status="CHECK":d.status="",d.name=t[m].name,d.playable=t[m].type==="local",d.turn=n===m,d.lost_pieces=[...e[m]]}),[...c]))},f=()=>{l(c=>(c.forEach((d,h)=>{const m=h===0?"w":"b",{set:w,time:C}=i[m];let g=0;w&&(g=(new Date().getTime()-w)/1e3);let p=C-g;p<=0&&(p=0),d.timer.minutes=Math.floor(p/60),d.timer.seconds=Math.floor(p)%60}),[...c]))};return N.exports.useEffect(()=>{u()},[e,n,r,t]),N.exports.useEffect(()=>{f();const c=setInterval(()=>{f();for(const d of a)d.timer.minutes===0&&d.timer.seconds===0&&o()},1e3);return()=>{clearInterval(c)}},[i]),L(XL,{style:{gridArea:"players"},children:a.map((c,d)=>le(JL,{children:[L(ZL,{children:c.icon}),le(eD,{children:[c.playable?L("strong",{children:c.name}):c.name," ",c.status!==""&&L(tD,{children:c.status})]}),le(nD,{children:[c.timer.minutes,":",c.timer.seconds.toString().padStart(2,"0")]}),L(rD,{children:c.lost_pieces.map(h=>so(h,d==1))}),L(iD,{children:c.turn&&L(br,{style:{alignSelf:"center"},icon:IT})})]},d))})},oD=G.div`
  grid-area: moves;
  overflow-y: auto;
  background-color: ${t=>t.theme.menus.moves.background};
  max-height: min(calc(100vw - 450px), calc(1000px - 430px));
  @media (max-width: 800px) {
    max-height: none;
  }
`,Ey=G.p`
  padding: 5px 10px;
  margin: 0px;
  color: ${t=>t.theme.colors.text};
`,aD=()=>{const{useChessNotation:t}=N.exports.useContext(Ir),{state:{moves:e,redoStack:n}}=fa(),r=i=>{if(t)return i.san;const s=so(i.piece,i.color==="w");if(i.flags.indexOf("k")>=0)return`castled ${s} kingside`;if(i.flags.indexOf("q")>=0)return`castled ${s} queenside`;let o=`moved ${s} ${i.from} to ${i.to}`;if(i.promotion){const a=so(i.promotion,i.color==="w");o+=` (promoted to ${a})`}if(i.captured){const a=so(i.captured,i.color==="b");o+=` (took ${a})`}return o};return le(oD,{children:[(e!=null?e:[]).map((i,s)=>L(Ey,{style:(e!=null?e:[]).length-1===s?{fontWeight:"bold"}:{},children:r(i)},`move_${s}`)),[...n].reverse().map((i,s)=>L(Ey,{children:r(i)},`move_redo_${s}`))]})};var Ct={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},Sy=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],ky=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],Cy=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],mt=typeof window<"u"&&typeof window.document<"u"?window.document:{},Lt="fullscreenEnabled"in mt&&Object.keys(Ct)||Sy[0]in mt&&Sy||ky[0]in mt&&ky||Cy[0]in mt&&Cy||[],lD={requestFullscreen:function(t){return t[Lt[Ct.requestFullscreen]]()},requestFullscreenFunction:function(t){return t[Lt[Ct.requestFullscreen]]},get exitFullscreen(){return mt[Lt[Ct.exitFullscreen]].bind(mt)},get fullscreenPseudoClass(){return":"+Lt[Ct.fullscreen]},addEventListener:function(t,e,n){return mt.addEventListener(Lt[Ct[t]],e,n)},removeEventListener:function(t,e,n){return mt.removeEventListener(Lt[Ct[t]],e,n)},get fullscreenEnabled(){return Boolean(mt[Lt[Ct.fullscreenEnabled]])},set fullscreenEnabled(t){},get fullscreenElement(){return mt[Lt[Ct.fullscreenElement]]},set fullscreenElement(t){},get onfullscreenchange(){return mt[("on"+Lt[Ct.fullscreenchange]).toLowerCase()]},set onfullscreenchange(t){return mt[("on"+Lt[Ct.fullscreenchange]).toLowerCase()]=t},get onfullscreenerror(){return mt[("on"+Lt[Ct.fullscreenerror]).toLowerCase()]},set onfullscreenerror(t){return mt[("on"+Lt[Ct.fullscreenerror]).toLowerCase()]=t}};const di=lD,uD=G.div`
  overflow: ${t=>t.fullscreen?"scroll":"default"};
  padding: 0;
  margin: 0;
`,cD=t=>{const e=N.exports.useRef(null),[n,r]=N.exports.useState(!1),[i,s]=N.exports.useState(""),o=()=>{di.fullscreenElement!==null?r(!0):r(!1)};return N.exports.useEffect(()=>(di.addEventListener("fullscreenchange",o,!1),()=>di.removeEventListener("fullscreenchange",o,!1)),[]),N.exports.useEffect(()=>{if(e.current===null||!di.fullscreenEnabled){t.isFullscreen&&s("fullscreen is not available!");return}t.isFullscreen&&!n?di.requestFullscreen(e.current):!t.isFullscreen&&n&&di.exitFullscreen()},[t.isFullscreen]),le(uD,{ref:e,fullscreen:n,children:[t.children,L(om,{error:i,duration:1e3,onErrorClose:()=>s("")})]})},fD=G.div`
  ${t=>t.fullscreen&&`display: flex; 
  align-items: center; justify-content: center; 
  background: ${t.theme.colors.background}; 
  width: 100%; height: 100%;`}
  
  width: 75%;
`,dD=G.div`
  width: 100%;
  ${t=>t.fullscreen&&"max-width: 1400px;"};
  display: grid;
  background: ${t=>t.theme.colors.grid};
  grid-template-columns: auto auto 250px;
  grid-template-rows: 60px 120px auto;
  grid-template-areas:
    "chess chess controls"
    "chess chess players"
    "chess chess moves";

  @media (max-width: 800px) {
    grid-template-columns: 250px auto;
    grid-template-rows: auto 60px 120px;
    grid-template-areas:
      "chess chess"
      "controls moves"
      "players moves"
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto 60px 120px auto;
    grid-template-areas:
      "chess"
      "controls"
      "players"
      "moves"
  }
`,hD=G.div`
  grid-area: chess;
  aspect-ratio: 1;
`,cf=({type:t})=>{const[e,n]=N.exports.useState(!1),{hasLoaded:r}=N.exports.useContext(Ir),{id:i}=i1(),{StartNewGame:s}=fa(),o=Zh(),a=N.exports.useContext(ca);N.exports.useEffect(()=>{!r||(t==="bot"?s({player_white:"local",player_black:"bot",positions:"default"}):t==="local"?s({player_white:"local",player_black:"local",positions:"default"}):(a==null?void 0:a.type)==="ready"&&a.Connect(i!=null?i:"",f=>{alert(f)}))},[r,a==null?void 0:a.type]);const l=()=>{n(f=>!f)},u=()=>{confirm("would you like to quit this game?  once left, it cannot be joined again.")&&o("/")};return L(cD,{isFullscreen:e,children:le(fD,{fullscreen:e,children:[a&&a.type!=="ingame"&&L("p",{children:"connecting..."}),le(dD,{fullscreen:e,children:[L(hD,{children:L(YL,{})}),L(QL,{toggleFullscreen:()=>l(),quitGame:()=>u()}),L(sD,{}),L(aD,{})]})]})})},pD=G.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 85%;
  border: 2px solid #000;
  padding: 10px;
  background: ${t=>t.theme.colors.background};
`,hi=G.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`,mD=G.h1`
  margin: 10px 0;
  color: ${t=>t.theme.colors.text};
`,gD=G.h1`
  user-select: none;
  cursor: pointer;
  margin: 0;
  color: ${t=>t.theme.colors.text};
`,As=G.p`
  font-size: 1.2em;
  margin: 5px 0;
  color: ${t=>t.theme.colors.text};
`,Va=G.input`
`,vD=G.input`
`;G.input`
`;G.p`
  color: red;
`;G.p`
  color: ${t=>t.theme.colors.text};
`;G.a`
  color: ${t=>t.theme.colors.text};
`;const yD=({onClickSettings:t})=>{const e=N.exports.useContext(Ir),n=N.exports.useRef(null),r=N.exports.useRef(null),i=N.exports.useRef(null),s=N.exports.useRef(null);N.exports.useRef(null);const[o,a]=N.exports.useState(""),[l,u]=N.exports.useState(""),[f,c]=N.exports.useState(0),[d,h]=N.exports.useState(""),m=()=>{e.updateSettings(g=>{const p={...g};return n.current&&(p.useSystemTheme=n.current.checked),r.current&&(p.darkTheme=r.current.checked),i.current&&(p.allowPause=i.current.checked),i.current&&(p.allowPause=i.current.checked),s.current&&(p.useChessNotation=s.current.checked),p})},w=g=>/^[a-zA-Z0-9 _-]{1,16}$/gi.test(g),C=g=>{if(isNaN(g)||g<5||g>30){h("game length must be a number between 5 and 30");return}else h("");c(g),e.updateSettings(p=>(g>=5&&g<=30&&(p.gameLength=g),{...p}))};return N.exports.useEffect(()=>{w(o)?u(""):u("username must be 1-16 characters, containing letters, numbers, spaces, underscores and dashes")},[o]),N.exports.useEffect(()=>{o!==e.defaultUsername&&a(e.defaultUsername)},[e.defaultUsername]),N.exports.useEffect(()=>{f!==e.gameLength&&c(e.gameLength)},[e.gameLength]),le(pD,{children:[le(hi,{children:[L(mD,{children:"settings"}),L(gD,{onClick:t,children:L(br,{icon:DT})})]}),le(hi,{children:[L(As,{children:"match system theme"}),L(Va,{type:"checkbox",ref:n,checked:e.useSystemTheme,onChange:()=>m()})]}),le(hi,{children:[L(As,{children:"dark theme"}),L(Va,{type:"checkbox",ref:r,checked:e.isDarkTheme,disabled:e.useSystemTheme,onChange:()=>m()})]}),le(hi,{children:[L(As,{children:"allow pause"}),L(Va,{type:"checkbox",ref:i,checked:e.allowPause,onChange:()=>m()})]}),le(hi,{children:[L(As,{children:"use chess notation"}),L(Va,{type:"checkbox",ref:s,checked:e.useChessNotation,onChange:()=>m()})]}),le(hi,{children:[L(As,{children:"game length (minutes per player)"}),L(vD,{type:"number",value:f,min:5,max:30,step:5,onChange:g=>C(parseInt(g.target.value))})]})]})},_D=G.div`
`,wD=G.h1`
  text-align: center;
  color: ${t=>t.theme.colors.text};
`;G.p`
  text-align: center;
  color: ${t=>t.theme.colors.text};
`;const ED=G.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 200px;
  margin: 0 auto;
  align-items: center;
`,by=G(o1)`
  background: ${t=>t.theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #000;
  font-size: 2em;
  margin: 0.5em;
  text-align: center;
`;G.input`
  font-size: 2em;
  width: 140px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`;const SD=()=>(N.exports.useRef(null),le(_D,{children:[L(wD,{children:"create a game"}),le(ED,{children:[L(by,{to:"/game",children:"local"}),L(by,{to:"/game/bot",children:"bot"})]})]})),kD=G.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,CD=G.div`
  display: flex;
  align-items: center;
`,bD=G.h1`
  color: ${t=>t.theme.colors.text};
  flex: 1;
  font-size: 3em;
`,ID=G.input`
  font-size: 2em;
  width: 140px;
  text-align: center;
`,xD=G.button`
  font-size: 2em;
`,TD=G.div`
`,PD=G.div`
`,ND=G.button`
  font-size: 2em;
`,Os=G.p`
  color: ${t=>t.theme.colors.text};
`,RD=G.h1`
  color: red;
`,Iy=()=>{const t=AL(),{id:e}=i1(),[n,r]=N.exports.useState(),i=Zh(),{hasLoaded:s}=N.exports.useContext(Ir);return N.exports.useEffect(()=>{if(t.type!=="loading"){if(t.type==="lobby"){e||(i(`/lobby/${t.lobby.lobbyId}/`),window.location.reload());return}if(t.type==="ingame"){i(`/game/${t.lobby.lobbyId}/`);return}!s||(e?t.Connect(e,r):t.Create(r))}},[t.type,e,s]),le(kD,{children:[le(CD,{children:[L(bD,{children:"lobby"}),t.type==="lobby"&&le(Xs,{children:[L(ID,{value:t.lobby.lobbyId,type:"text",disabled:!0}),L(xD,{onClick:()=>{navigator.clipboard.writeText(window.location.href)},children:"copy"})]})]}),n?L(Xs,{children:L(RD,{children:n})}):t.type==="lobby"?le(Xs,{children:[le(TD,{children:[le(Os,{children:["white: ",t.lobby.players.w.name]}),t.lobby.players.b&&le(Os,{children:["black: ",t.lobby.players.b.name]}),le(Os,{children:["spectators:"," ",t&&t.lobby.spectators&&t.lobby.spectators.length>0?t.lobby.spectators.map(o=>L("span",{children:o.name},o.uid)):L("span",{children:"none"})]}),L(Os,{children:"game length: 5 minutes (change in settings)"})]}),t.lobby.hostUid===t.uid&&L(PD,{onClick:t.Start,children:L(ND,{children:"start game"})})]}):le(Os,{children:[e?"connecting to":"creating"," lobby..."]})]})},AD={colors:{text:"#000",background:"#fff",grid:"#eee",primary:"#c4b5fd"},menus:{controls:{background:"#bbb",button:"#fff",button_hover:"#eee"},players:{background:"#ddd"},moves:{background:"",white:"",black:"",hover:""}},chess:{board_light:"#e3c06f",board_dark:"#b88a4a",board_text:"#fff",move:"",move_castle:"",move_takes:""}},OD={colors:{text:"#fff",background:"#0f172a",grid:"#eee",primary:"#c4b5fd"},menus:{controls:{background:"#1e293b",button:"#fff",button_hover:"#eee"},players:{background:"#334155"},moves:{background:"#475569",white:"#475569",black:"#52525b",hover:"#94a3b8"}},chess:{board_light:"#e3c06f",board_dark:"#b88a4a",board_text:"#fff",move:"",move_castle:"",move_takes:""}},LD=t=>{const e=N.exports.useContext(Ir);return L(gb,{theme:e.isDarkTheme?OD:AD,children:t.children})},DD=yb`
body, html {
  margin: 0;
  font-family: 'Consolas',
    monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: ${t=>t.theme.colors.background};
}

#root {
  height: 100%;
}

::-webkit-scrollbar{
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb{
  background: #B3AFB3;
  border-radius: 9px;
}
::-webkit-scrollbar-thumb:hover{
  background: #B3AFB3;
}
::-webkit-scrollbar-track{
  background: #FFFFFF00;
  border-radius: 9px;
  box-shadow: inset 0px 0px 0px 0px #F0F0F000;
}
`,MD=G.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  background: ${t=>t.theme.colors.background};
`,FD=II;function UD(){const[t,e]=N.exports.useState(!1),n=()=>e(r=>!r);return L(BT,{children:L(LD,{children:le(FD,{children:[L(DD,{}),le(MD,{className:"App",children:[L(jT,{onClickSettings:n}),le(EI,{children:[L(Nr,{path:"/",element:L(SD,{})}),L(Nr,{path:"/game/bot",element:L(uf,{children:L(cf,{type:"bot"})})}),L(Nr,{path:"/game/:id",element:L(lf,{children:L(uf,{children:L(cf,{type:"online"})})})}),L(Nr,{path:"/game",element:L(uf,{children:L(cf,{type:"local"})})}),L(Nr,{path:"/lobby/:id",element:L(lf,{children:L(Iy,{})})}),L(Nr,{path:"/lobby",element:L(lf,{children:L(Iy,{})})})]}),L("footer",{}),t&&L(yD,{onClickSettings:n})]})]})})})}df.createRoot(document.getElementById("root")).render(L(fn.StrictMode,{children:L(UD,{})}));
