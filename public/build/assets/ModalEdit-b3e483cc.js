import{y as g,r as p,j as i}from"./app-f2abb593.js";import{M as _}from"./Modal-5dae7573.js";import{e as u}from"./editStore-d065645d.js";import s from"./BlockDivider-3c5ca88a.js";import{u as h,r as C}from"./repairStore-14727e7a.js";import{u as W}from"./useMutation-202674fd.js";import{T as n,F as S,I as T,S as y}from"./TextField-b31a34e4.js";import{A as D}from"./Autocomplete-f86b4d84.js";import{M as E}from"./MenuItem-fb7cf1cf.js";import{B as M}from"./Box-0b011bc2.js";import{L as I}from"./LoadingButton-3ee33953.js";import{B as v}from"./Button-cd0730f4.js";import"./Modal-33f51ea5.js";import"./createTheme-f9f94404.js";import"./styled-3a987103.js";import"./TransitionGroupContext-63f58615.js";import"./useId-edbf73a4.js";import"./Container-f970a168.js";import"./styled-a73ca20e.js";import"./Typography-d8ebb2f5.js";import"./extendSxProp-2a5070d5.js";import"./vanilla-8854675d.js";import"./createSvgIcon-59ac1e7b.js";import"./Menu-c9be6819.js";import"./IconButton-3ce2b7fe.js";import"./ButtonBase-032a6a52.js";import"./Popper-ea8f686f.js";import"./dividerClasses-9ca8f8f6.js";const P=()=>W({mutationFn:async({id:a,props:r})=>{try{const{data:c}=await axios.patch(route("repairs.update",a),r);return Promise.resolve(c)}catch(c){return Promise.reject(c.response.data.errors)}},onSuccess:()=>{g.reload({only:["repairs"]})}}),ne=()=>{const a=h(u),r=h(C),c=r.employees,x=r.groupDevices,[o,l]=p.useState({customer_name:"",customer_phone:"",device:"",problem_description:"",component:"",solution_description:"",price:"",cost:"",invoice:"",note:"",user_id:0}),{mutate:f,isPending:b,error:e,isSuccess:m}=P();p.useEffect(()=>{m&&u.clear()},[m]),p.useEffect(()=>{if(a.edit&&a.data){const t=[];Object.keys(o).map(d=>{a.data[d]&&(t[d]=a.data[d])}),l(t)}},[a.edit]);const j=async()=>{f({id:a.data.id,props:o})};return i.jsxs(_,{open:a.edit,onClose:()=>u.clear(),width:"md",title:`Edit #${a.data.id??0}`,children:[i.jsxs(s,{title:"Customer",children:[i.jsx(n,{value:o.customer_name||"",onChange:t=>l({...o,customer_name:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Name",error:!!(e!=null&&e.customer_name),helperText:e==null?void 0:e.customer_name,variant:"outlined"}),i.jsx(n,{value:o.customer_phone||"",onChange:t=>l({...o,customer_phone:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Phone",error:!!(e!=null&&e.customer_phone),helperText:e==null?void 0:e.customer_phone,variant:"outlined"})]}),i.jsxs(s,{title:"Device",children:[i.jsx(D,{id:"free-solo-demo",fullWidth:!0,freeSolo:!0,value:o.device||"",options:x.map(t=>t.device),renderInput:t=>i.jsx(n,{error:!!(e!=null&&e.device),helperText:e==null?void 0:e.device,value:o.device||"",onChange:d=>l({...o,device:d.target.value}),...t,label:"Device"})}),i.jsx(n,{value:o.problem_description||"",onChange:t=>l({...o,problem_description:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Problem description",error:!!(e!=null&&e.problem_description),helperText:e==null?void 0:e.problem_description,variant:"outlined"})]}),i.jsx(s,{title:"Need to order",other:{flexDirection:"column"},children:i.jsx(n,{value:o.component||"",onChange:t=>l({...o,component:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Parts",error:!!(e!=null&&e.component),helperText:e==null?void 0:e.component,variant:"outlined"})}),i.jsx(s,{title:"Result of repair",other:{flexDirection:"column"},children:i.jsx(n,{value:o.solution_description||"",onChange:t=>l({...o,solution_description:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Description",error:!!(e!=null&&e.solution_description),helperText:e==null?void 0:e.solution_description,variant:"outlined"})}),i.jsxs(s,{title:"Invoice",children:[i.jsx(n,{value:o.price||"",onChange:t=>l({...o,price:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Price",error:!!(e!=null&&e.price),helperText:e==null?void 0:e.price,variant:"outlined"}),i.jsx(n,{value:o.cost||"",onChange:t=>l({...o,cost:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Cost",error:!!(e!=null&&e.cost),helperText:e==null?void 0:e.cost,variant:"outlined"}),i.jsx(n,{value:o.invoice||"",onChange:t=>l({...o,invoice:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Invoice",error:!!(e!=null&&e.invoice),helperText:e==null?void 0:e.invoice,variant:"outlined"})]}),c.length&&i.jsx(s,{title:"Employeer",children:i.jsxs(S,{fullWidth:!0,children:[i.jsx(T,{id:"demo-simple-select-label",children:"Employee"}),i.jsx(y,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o.user_id||"",label:"Employee",onChange:t=>l({...o,user_id:t.target.value}),children:c.map(t=>i.jsx(E,{value:t.id,children:t.name},t.id))})]})}),i.jsx(s,{title:"Note",children:i.jsx(n,{value:o.note||"",onChange:t=>l({...o,note:t.target.value}),fullWidth:!0,id:"outlined-basic",label:"Note",error:!!(e!=null&&e.note),helperText:e==null?void 0:e.note,variant:"outlined"})}),i.jsxs(M,{sx:{display:"flex",gap:5,flexDirection:"row"},children:[i.jsx(I,{fullWidth:!0,size:"large",color:"success",loading:b,variant:"contained",onClick:j,children:"Save"}),i.jsx(v,{fullWidth:!0,variant:"contained",onClick:u.clear,children:"Cancel"}),i.jsx(v,{fullWidth:!0,variant:"contained",color:"error",onClick:u.clear,children:"Delete"})]})]})};export{ne as default};