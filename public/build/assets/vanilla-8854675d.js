const $=Symbol(),K=Symbol(),V="a",A="w";let q=(e,i)=>new Proxy(e,i);const M=Object.getPrototypeOf,v=new WeakMap,k=e=>e&&(v.has(e)?v.get(e):M(e)===Object.prototype||M(e)===Array.prototype),I=e=>typeof e=="object"&&e!==null,F=e=>{if(Array.isArray(e))return Array.from(e);const i=Object.getOwnPropertyDescriptors(e);return Object.values(i).forEach(_=>{_.configurable=!0}),Object.create(M(e),i)},W=e=>e[K]||e,C=(e,i,_,l)=>{if(!k(e))return e;let E=l&&l.get(e);if(!E){const P=W(e);E=(t=>Object.values(Object.getOwnPropertyDescriptors(t)).some(u=>!u.configurable&&!u.writable))(P)?[P,F(P)]:[P],l==null||l.set(e,E)}const[s,n]=E;let c=_&&_.get(s);return c&&c[1].f===!!n||(c=((P,t)=>{const u={f:t};let y=!1;const a=(d,R)=>{if(!y){let h=u[V].get(P);if(h||(h={},u[V].set(P,h)),d===A)h[A]=!0;else{let p=h[d];p||(p=new Set,h[d]=p),p.add(R)}}},S={get:(d,R)=>R===K?P:(a("k",R),C(Reflect.get(d,R),u[V],u.c,u.t)),has:(d,R)=>R===$?(y=!0,u[V].delete(P),!0):(a("h",R),Reflect.has(d,R)),getOwnPropertyDescriptor:(d,R)=>(a("o",R),Reflect.getOwnPropertyDescriptor(d,R)),ownKeys:d=>(a(A),Reflect.ownKeys(d))};return t&&(S.set=S.deleteProperty=()=>!1),[S,u]})(s,!!n),c[1].p=q(n||s,c[0]),_&&_.set(s,c)),c[1][V]=i,c[1].c=_,c[1].t=l,c[1].p},G=(e,i,_,l)=>{if(Object.is(e,i))return!1;if(!I(e)||!I(i))return!0;const E=_.get(W(e));if(!E)return!0;if(l){const n=l.get(e);if(n&&n.n===i)return n.g;l.set(e,{n:i,g:!1})}let s=null;try{for(const n of E.h||[])if(s=Reflect.has(e,n)!==Reflect.has(i,n),s)return s;if(E[A]===!0){if(s=((n,c)=>{const P=Reflect.ownKeys(n),t=Reflect.ownKeys(c);return P.length!==t.length||P.some((u,y)=>u!==t[y])})(e,i),s)return s}else for(const n of E.o||[])if(s=!!Reflect.getOwnPropertyDescriptor(e,n)!=!!Reflect.getOwnPropertyDescriptor(i,n),s)return s;for(const n of E.k||[])if(s=G(e[n],i[n],_,l),s)return s;return s===null&&(s=!0),s}finally{l&&l.set(e,{n:i,g:s})}},J=e=>k(e)&&e[K]||null,N=(e,i=!0)=>{v.set(e,i)},x=(e,i,_)=>{const l=[],E=new WeakSet,s=(n,c)=>{if(E.has(n))return;I(n)&&E.add(n);const P=I(n)&&i.get(W(n));if(P){var t,u;if((t=P.h)==null||t.forEach(a=>{const S=`:has(${String(a)})`;l.push(c?[...c,S]:[S])}),P[A]===!0){const a=":ownKeys";l.push(c?[...c,a]:[a])}else{var y;(y=P.o)==null||y.forEach(a=>{const S=`:hasOwn(${String(a)})`;l.push(c?[...c,S]:[S])})}(u=P.k)==null||u.forEach(a=>{_&&!("value"in(Object.getOwnPropertyDescriptor(n,a)||{}))||s(n[a],c?[...c,a]:[a])})}else c&&l.push(c)};return s(e),l},m=e=>typeof e=="object"&&e!==null,g=new WeakMap,D=new WeakSet,Q=(e=Object.is,i=(t,u)=>new Proxy(t,u),_=t=>m(t)&&!D.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),l=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},E=new WeakMap,s=(t,u,y=l)=>{const a=E.get(t);if((a==null?void 0:a[0])===u)return a[1];const S=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return N(S,!0),E.set(t,[u,S]),Reflect.ownKeys(t).forEach(d=>{if(Object.getOwnPropertyDescriptor(S,d))return;const R=Reflect.get(t,d),h={value:R,enumerable:!0,configurable:!0};if(D.has(R))N(R,!1);else if(R instanceof Promise)delete h.value,h.get=()=>y(R);else if(g.has(R)){const[p,j]=g.get(R);h.value=s(p,j(),y)}Object.defineProperty(S,d,h)}),Object.preventExtensions(S)},n=new WeakMap,c=[1,1],P=t=>{if(!m(t))throw new Error("object required");const u=n.get(t);if(u)return u;let y=c[0];const a=new Set,S=(f,o=++c[0])=>{y!==o&&(y=o,a.forEach(r=>r(f,o)))};let d=c[1];const R=(f=++c[1])=>(d!==f&&!a.size&&(d=f,p.forEach(([o])=>{const r=o[1](f);r>y&&(y=r)})),y),h=f=>(o,r)=>{const O=[...o];O[1]=[f,...O[1]],S(O,r)},p=new Map,j=(f,o)=>{if(a.size){const r=o[3](h(f));p.set(f,[o,r])}else p.set(f,[o])},B=f=>{var o;const r=p.get(f);r&&(p.delete(f),(o=r[1])==null||o.call(r))},z=f=>(a.add(f),a.size===1&&p.forEach(([r,O],b)=>{const T=r[3](h(b));p.set(b,[r,T])}),()=>{a.delete(f),a.size===0&&p.forEach(([r,O],b)=>{O&&(O(),p.set(b,[r]))})}),L=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t)),U=i(L,{deleteProperty(f,o){const r=Reflect.get(f,o);B(o);const O=Reflect.deleteProperty(f,o);return O&&S(["delete",[o],r]),O},set(f,o,r,O){const b=Reflect.has(f,o),T=Reflect.get(f,o,O);if(b&&(e(T,r)||n.has(r)&&e(T,n.get(r))))return!0;B(o),m(r)&&(r=J(r)||r);let H=r;if(r instanceof Promise)r.then(w=>{r.status="fulfilled",r.value=w,S(["resolve",[o],w])}).catch(w=>{r.status="rejected",r.reason=w,S(["reject",[o],w])});else{!g.has(r)&&_(r)&&(H=P(r));const w=!D.has(H)&&g.get(H);w&&j(o,w)}return Reflect.set(f,o,H,O),S(["set",[o],r,T]),!0}});n.set(t,U);const Y=[L,R,s,z];return g.set(U,Y),Reflect.ownKeys(t).forEach(f=>{const o=Object.getOwnPropertyDescriptor(t,f);"value"in o&&(U[f]=t[f],delete o.value,delete o.writable),Object.defineProperty(L,f,o)}),U})=>[P,g,D,e,i,_,l,E,s,n,c],[X]=Q();function ee(e={}){return X(e)}function te(e,i,_){const l=g.get(e);let E;const s=[],n=l[3];let c=!1;const t=n(u=>{if(s.push(u),_){i(s.splice(0));return}E||(E=Promise.resolve().then(()=>{E=void 0,c&&i(s.splice(0))}))});return c=!0,()=>{c=!1,t()}}function re(e,i){const _=g.get(e),[l,E,s]=_;return s(l,E(),i)}export{re as a,C as b,ee as c,G as p,te as s,x as w};