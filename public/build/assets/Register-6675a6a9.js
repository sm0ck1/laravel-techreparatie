import{W as d,r as p,j as e,a as u,d as c}from"./app-8bfa598a.js";import{G as f}from"./GuestLayout-1c8cb03b.js";import{P as x}from"./Modal-b84eed1f.js";import{T as o}from"./TextField-72c6bf8f.js";import{B as h}from"./Box-c3bcb5bf.js";import{B as g}from"./Button-f80121a0.js";import"./createTheme-428a024d.js";import"./styled-9a5592bd.js";import"./generateUtilityClasses-e7b23a81.js";import"./TransitionGroupContext-5e7c6940.js";import"./useId-10c2ae54.js";import"./isMuiElement-17093264.js";import"./Menu-6587255b.js";import"./createSvgIcon-720c9648.js";import"./extendSxProp-d41d6d52.js";import"./ButtonBase-5a468970.js";function G(){const{data:t,setData:s,post:i,processing:n,errors:r,reset:l}=d({name:"",email:"",password:"",password_confirmation:""});p.useEffect(()=>()=>{l("password","password_confirmation")},[]);const m=a=>{a.preventDefault(),i(route("register"))};return e.jsxs(f,{children:[e.jsx(u,{title:"Register"}),e.jsx("form",{onSubmit:m,children:e.jsxs(x,{sx:{display:"flex",flexDirection:"column",gap:3,padding:3,width:"400px"},children:[e.jsx("div",{children:e.jsx(o,{fullWidth:!0,error:!!r.name,helperText:!!r.name&&r.name,isFocused:!0,value:t.name,autoComplete:"name",id:"name",type:"text",name:"name",label:"Name",variant:"outlined",onChange:a=>s("name",a.target.value)})}),e.jsx("div",{children:e.jsx(o,{fullWidth:!0,error:!!r.email,helperText:!!r.email&&r.email,value:t.email,autoComplete:"username",id:"email",type:"email",name:"email",label:"Email",variant:"outlined",onChange:a=>s("email",a.target.value)})}),e.jsx("div",{children:e.jsx(o,{fullWidth:!0,variant:"outlined",error:!!r.password,helperText:!!r.password&&r.password,value:t.password,id:"password",type:"password",name:"password",label:"Password",onChange:a=>s("password",a.target.value)})}),e.jsx("div",{className:"mt-4",children:e.jsx(o,{fullWidth:!0,variant:"outlined",error:!!r.password_confirmation,helperText:!!r.password_confirmation&&r.password_confirmation,value:t.password_confirmation,id:"password_confirmation",type:"password",name:"password_confirmation",label:"Confirm Password",onChange:a=>s("password_confirmation",a.target.value)})}),e.jsxs(h,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(c,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(g,{type:"submit",variant:"contained",disabled:n,children:"Register"})]})]})})]})}export{G as default};