import{r as o,i as _,c as m}from"./app-4046141f.js";import{s as y,a as S,p as x,b as R,w as b,c as P}from"./vanilla-8854675d.js";var l={exports:{}},h={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=o;function g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var w=typeof Object.is=="function"?Object.is:g,V=c.useState,A=c.useEffect,D=c.useLayoutEffect,T=c.useDebugValue;function M(e,t){var r=t(),u=V({inst:{value:r,getSnapshot:t}}),n=u[0].inst,s=u[1];return D(function(){n.value=r,n.getSnapshot=t,f(n)&&s({inst:n})},[e,r,t]),A(function(){return f(n)&&s({inst:n}),e(function(){f(n)&&s({inst:n})})},[e]),T(r),r}function f(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!w(e,r)}catch{return!0}}function H(e,t){return t()}var I=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?H:M;h.useSyncExternalStore=c.useSyncExternalStore!==void 0?c.useSyncExternalStore:I;l.exports=h;var U=l.exports;const C=_(U),{use:d}=m,{useSyncExternalStore:k}=C;const L=new WeakMap;function q(e,t){const r=t==null?void 0:t.sync,u=o.useRef(),n=o.useRef();let s=!0;const i=k(o.useCallback(a=>{const E=y(e,a,r);return a(),E},[e,r]),()=>{const a=S(e,d);try{if(!s&&u.current&&n.current&&!x(u.current,a,n.current,new WeakMap))return u.current}catch{}return a},()=>S(e,d));s=!1;const p=new WeakMap;o.useEffect(()=>{u.current=i,n.current=p});const v=o.useMemo(()=>new WeakMap,[]);return R(i,p,v,L)}const B=P({employees:[],groupWhereOrdered:[],groupDevices:[]});export{B as r,q as u};
