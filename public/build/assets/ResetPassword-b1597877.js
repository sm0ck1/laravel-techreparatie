import{W as m,r as n,j as s,a as d}from"./app-8bfa598a.js";import{G as p}from"./GuestLayout-1c8cb03b.js";import"./Box-c3bcb5bf.js";import"./createTheme-428a024d.js";import"./extendSxProp-d41d6d52.js";function N({token:t,email:r}){const{data:c,setData:f,post:e,processing:u,errors:x,reset:o}=m({token:t,email:r,password:"",password_confirmation:""});n.useEffect(()=>()=>{o("password","password_confirmation")},[]);const a=i=>{i.preventDefault(),e(route("password.store"))};return s.jsxs(p,{children:[s.jsx(d,{title:"Reset Password"}),s.jsxs("form",{onSubmit:a,children:[s.jsx("div",{}),s.jsx("div",{className:"mt-4"}),s.jsx("div",{className:"mt-4"}),s.jsx("div",{className:"flex items-center justify-end mt-4"})]})]})}export{N as default};