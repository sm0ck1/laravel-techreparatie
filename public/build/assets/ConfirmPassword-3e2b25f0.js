import{W as a,r as i,j as s,a as n}from"./app-f2abb593.js";import{G as m}from"./GuestLayout-1399a802.js";import"./Box-0b011bc2.js";import"./createTheme-f9f94404.js";import"./extendSxProp-2a5070d5.js";function h(){const{data:c,setData:p,post:r,processing:f,errors:u,reset:t}=a({password:""});i.useEffect(()=>()=>{t("password")},[]);const e=o=>{o.preventDefault(),r(route("password.confirm"))};return s.jsxs(m,{children:[s.jsx(n,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsx("form",{onSubmit:e,children:s.jsx("div",{className:"flex items-center justify-end mt-4"})})]})}export{h as default};