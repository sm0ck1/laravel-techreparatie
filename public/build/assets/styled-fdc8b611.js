import{_ as u,C as z,b as F,f as w,p as G,s as H,c as U,j as B,u as J,k as Q,T as k}from"./createTheme-dcf84243.js";function g(e,t){const n=u({},t);return Object.keys(e).forEach(s=>{if(s.toString().match(/^(components|slots)$/))n[s]=u({},e[s],n[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const o=e[s]||{},c=t[s];n[s]={},!c||!Object.keys(c)?n[s]=o:!o||!Object.keys(o)?n[s]=c:(n[s]=u({},c),Object.keys(o).forEach(r=>{n[s][r]=g(o[r],c[r])}))}else n[s]===void 0&&(n[s]=e[s])}),n}function he(e,t,n=void 0){const s={};return Object.keys(e).forEach(o=>{s[o]=e[o].reduce((c,r)=>{if(r){const d=t(r);d!==""&&c.push(d),n&&n[r]&&c.push(n[r])}return c},[]).join(" ")}),s}const X={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function me(e,t,n="Mui"){const s=X[t];return s?`${n}-${s}`:`${z.generate(e)}-${t}`}const Y=["variant"];function R(e){return e.length===0}function V(e){const{variant:t}=e,n=F(e,Y);let s=t||"";return Object.keys(n).sort().forEach(o=>{o==="color"?s+=R(s)?e[o]:w(e[o]):s+=`${R(s)?o:w(o)}${w(e[o].toString())}`}),s}const Z=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function A(e){return Object.keys(e).length===0}function N(e){return typeof e=="string"&&e.charCodeAt(0)>96}const ee=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,te=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const s={};return n.forEach(o=>{const c=V(o.props);s[c]=o.style}),s},ne=(e,t,n,s)=>{var o;const{ownerState:c={}}=e,r=[],d=n==null||(o=n.components)==null||(o=o[s])==null?void 0:o.variants;return d&&d.forEach(l=>{let a=!0;Object.keys(l.props).forEach(m=>{c[m]!==l.props[m]&&e[m]!==l.props[m]&&(a=!1)}),a&&r.push(t[V(l.props)])}),r};function y(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const se=U(),oe=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function p({defaultTheme:e,theme:t,themeId:n}){return A(t)?e:t[n]||t}function re(e){return e?(t,n)=>n[e]:null}function ie(e={}){const{themeId:t,defaultTheme:n=se,rootShouldForwardProp:s=y,slotShouldForwardProp:o=y}=e,c=r=>B(u({},r,{theme:p(u({},r,{defaultTheme:n,themeId:t}))}));return c.__mui_systemSx=!0,(r,d={})=>{G(r,f=>f.filter(v=>!(v!=null&&v.__mui_systemSx)));const{name:l,slot:a,skipVariantsResolver:m,skipSx:D,overridesResolver:$=re(oe(a))}=d,I=F(d,Z),L=m!==void 0?m:a&&a!=="Root"&&a!=="root"||!1,q=D||!1;let K,_=y;a==="Root"||a==="root"?_=s:a?_=o:N(r)&&(_=void 0);const O=H(r,u({shouldForwardProp:_,label:K},I)),C=(f,...v)=>{const S=v?v.map(i=>typeof i=="function"&&i.__emotion_real!==i?h=>i(u({},h,{theme:p(u({},h,{defaultTheme:n,themeId:t}))})):i):[];let b=f;l&&$&&S.push(i=>{const h=p(u({},i,{defaultTheme:n,themeId:t})),j=ee(l,h);if(j){const E={};return Object.entries(j).forEach(([W,T])=>{E[W]=typeof T=="function"?T(u({},i,{theme:h})):T}),$(i,E)}return null}),l&&!L&&S.push(i=>{const h=p(u({},i,{defaultTheme:n,themeId:t}));return ne(i,te(l,h),h,l)}),q||S.push(c);const P=S.length-v.length;if(Array.isArray(f)&&P>0){const i=new Array(P).fill("");b=[...f,...i],b.raw=[...f.raw,...i]}else typeof f=="function"&&f.__emotion_real!==f&&(b=i=>f(u({},i,{theme:p(u({},i,{defaultTheme:n,themeId:t}))})));const x=O(b,...S);return r.muiName&&(x.muiName=r.muiName),x};return O.withConfig&&(C.withConfig=O.withConfig),C}}function ce(e){const{theme:t,name:n,props:s}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?s:g(t.components[n].defaultProps,s)}function ue({props:e,name:t,defaultTheme:n,themeId:s}){let o=J(n);return s&&(o=o[s]||o),ce({theme:o,name:t,props:e})}const le=Q(),M=le;function ve({props:e,name:t}){return ue({props:e,name:t,defaultTheme:M,themeId:k})}const ae=e=>y(e)&&e!=="classes",Se=y,fe=ie({themeId:k,defaultTheme:M,rootShouldForwardProp:ae}),pe=fe;export{ve as a,Se as b,he as c,M as d,g as e,ie as f,me as g,ae as r,pe as s,ue as u};