import{W as a,j as e,a as i}from"./app-3202f596.js";import{G as m}from"./GuestLayout-247e90d5.js";import"./Box-132a8830.js";import"./createTheme-e443a688.js";import"./extendSxProp-5b301ce9.js";function j({status:s}){const{data:l,setData:n,post:t,processing:d,errors:u}=a({email:""}),o=r=>{r.preventDefault(),t(route("password.email"))};return e.jsxs(m,{children:[e.jsx(i,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),e.jsx("form",{onSubmit:o,children:e.jsx("div",{className:"flex items-center justify-end mt-4"})})]})}export{j as default};