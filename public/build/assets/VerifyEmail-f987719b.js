import{W as n,j as e,a as r,d as a}from"./app-76ac79bc.js";import{G as d}from"./GuestLayout-0769b9ed.js";import"./Box-168e7410.js";import"./createTheme-3079f5c5.js";import"./extendSxProp-09aea199.js";function x({status:t}){const{post:i,processing:l}=n({}),s=o=>{o.preventDefault(),i(route("verification.send"))};return e.jsxs(d,{children:[e.jsx(r,{title:"Email Verification"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e.jsx("form",{onSubmit:s,children:e.jsx("div",{className:"mt-4 flex items-center justify-between",children:e.jsx(a,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Log Out"})})})]})}export{x as default};