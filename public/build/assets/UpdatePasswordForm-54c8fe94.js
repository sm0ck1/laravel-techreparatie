import{r as e,W as d,j as s,e as u}from"./app-f2abb593.js";import m from"./BlockDivider-3c5ca88a.js";import o from"./InputText-6c2fc536.js";import{s as c}from"./snackBarStore-8ecb859e.js";import{L as l}from"./LoadingButton-3ee33953.js";import"./Box-0b011bc2.js";import"./createTheme-f9f94404.js";import"./extendSxProp-2a5070d5.js";import"./Typography-d8ebb2f5.js";import"./styled-3a987103.js";import"./TextField-b31a34e4.js";import"./createSvgIcon-59ac1e7b.js";import"./useId-edbf73a4.js";import"./Menu-c9be6819.js";import"./Modal-33f51ea5.js";import"./TransitionGroupContext-63f58615.js";import"./Button-cd0730f4.js";import"./ButtonBase-032a6a52.js";function C(){const p=e.useRef(),a=e.useRef(),r=d({current_password:"",password:"",password_confirmation:""}),i=n=>{n.preventDefault(),r.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>{r.reset(),u("Saved",c())},onError:t=>{t.password&&(r.reset("password","password_confirmation"),p.current.focus()),t.current_password&&(r.reset("current_password"),a.current.focus())}})};return s.jsx("section",{children:s.jsx("form",{onSubmit:i,children:s.jsxs(m,{title:"Update Password",children:[s.jsx(o,{label:"Current password",form:r,name:"current_password",props:{fullWidth:!0,type:"password"}}),s.jsx(o,{label:"New password",form:r,name:"password",props:{fullWidth:!0,type:"password"}}),s.jsx(o,{label:"Confirm Password",form:r,name:"password_confirmation",props:{fullWidth:!0,type:"password"}}),s.jsx(l,{color:"success",variant:"contained",type:"submit",disabled:r.processing,children:"Save"})]})})})}export{C as default};