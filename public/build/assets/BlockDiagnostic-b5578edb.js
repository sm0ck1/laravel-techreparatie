import{y as b,r as a,j as e}from"./app-c1ae2f9b.js";import{d as M,a as w}from"./Check-a3c5b70a.js";import{M as B}from"./Modal-4c58f1ff.js";import D from"./ConfirmDialog-2fae8166.js";import{u as F}from"./useMutation-56120274.js";import{B as r}from"./Box-cc0e80d2.js";import{T as h}from"./TextField-97ca1765.js";import{L as j}from"./LoadingButton-e9d784a4.js";import{B as E}from"./Button-4d352c1e.js";import"./createSvgIcon-21f6ebc5.js";import"./createSvgIcon-6c3c73c6.js";import"./createTheme-2a584c85.js";import"./styled-3dbe4f1c.js";import"./useId-01cb7c8b.js";import"./TransitionGroupContext-d15b2f66.js";import"./ButtonBase-f1c282fb.js";import"./Modal-c9c900f6.js";import"./Container-7a26f43f.js";import"./styled-70bb7cee.js";import"./Typography-77bfcf87.js";import"./extendSxProp-7eaa493f.js";import"./Menu-16967673.js";const O=()=>F({mutationFn:async({id:o,props:i})=>{try{const{data:s}=await axios.patch(route("repairs.update.diagnostic",o),i);return Promise.resolve(s)}catch(s){return Promise.reject(s.response.data.errors)}},onSuccess:()=>{b.reload({only:["repairs"]})}}),te=({repair:o})=>{const i="is_diagnostic",[s,d]=a.useState(!1),[v,p]=a.useState(!1),[y,l]=a.useState(!1),[n,m]=a.useState({diagnostic_description:"",component:"",[i]:!1}),{mutate:u,isPending:x,error:t,isError:C,isSuccess:f}=O();a.useEffect(()=>{d(!!o[i])},[]),a.useEffect(()=>{f&&(l(!1),d(!s))},[f]);const S=async c=>{o[i]?p(!0):l(!0)},_=async()=>{u({id:o.id,props:{[i]:!1,diagnostic_description:""}})},g=()=>{l(!1)},k=()=>{u({id:o.id,props:{...n,[i]:!0}})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{open:y,onClose:g,title:"Diagnostic",children:e.jsxs(r,{sx:{display:"flex",gap:5,flexDirection:"column"},children:[e.jsx(r,{children:e.jsx(h,{value:n.diagnostic_description||"",rows:4,multiline:!0,onChange:c=>m({...n,diagnostic_description:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Result diagnostic",error:C,helperText:t==null?void 0:t.diagnostic_description,variant:"outlined"})}),e.jsx(r,{children:e.jsx(h,{value:n.component||"",onChange:c=>m({...n,component:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Need to order",error:!!(t!=null&&t.component),helperText:t==null?void 0:t.component,variant:"outlined"})}),e.jsxs(r,{sx:{display:"flex",gap:3,justifyContent:"space-between"},children:[e.jsx(r,{sx:{display:"flex",gap:3},children:e.jsx(j,{color:"success",disabled:!n.diagnostic_description,loading:x,variant:"contained",onClick:k,children:"Save"})}),e.jsx(r,{children:e.jsx(E,{variant:"contained",color:"primary",onClick:g,children:"Cancel"})})]})]})}),e.jsx(D,{title:"Unmarked Picked Up?",open:v,setOpen:p,onConfirm:_,children:"Are you sure? It will be unmarked as diagnostic."}),e.jsx(j,{loading:x,color:s?"success":"error",size:"small",variant:"text",onClick:S,children:s?e.jsx(e.Fragment,{children:e.jsx(M,{})}):e.jsx(w,{})})]})};export{te as default};