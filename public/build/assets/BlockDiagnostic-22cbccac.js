import{y as b,r as a,j as e}from"./app-8bfa598a.js";import{d as M,a as w}from"./Check-44f72559.js";import{M as B}from"./Modal-4342cdca.js";import D from"./ConfirmDialog-16042b20.js";import{u as F}from"./useMutation-e596a6e6.js";import{B as r}from"./Box-c3bcb5bf.js";import{T as h}from"./TextField-72c6bf8f.js";import{L as j}from"./LoadingButton-c952b147.js";import{B as E}from"./Button-f80121a0.js";import"./createSvgIcon-fcfa2ec4.js";import"./createSvgIcon-720c9648.js";import"./createTheme-428a024d.js";import"./styled-9a5592bd.js";import"./generateUtilityClasses-e7b23a81.js";import"./useId-10c2ae54.js";import"./TransitionGroupContext-5e7c6940.js";import"./isMuiElement-17093264.js";import"./ButtonBase-5a468970.js";import"./Modal-b84eed1f.js";import"./Container-b34a53b0.js";import"./styled-15713ffe.js";import"./Typography-696c5318.js";import"./extendSxProp-d41d6d52.js";import"./Menu-6587255b.js";const O=()=>F({mutationFn:async({id:s,props:i})=>{try{const{data:o}=await axios.patch(route("repairs.update.diagnostic",s),i);return Promise.resolve(o)}catch(o){return Promise.reject(o.response.data.errors)}},onSuccess:()=>{b.reload({only:["repairs"]})}}),oe=({repair:s})=>{const i="is_diagnostic",[o,d]=a.useState(!1),[v,p]=a.useState(!1),[y,l]=a.useState(!1),[n,m]=a.useState({diagnostic_description:"",component:"",[i]:!1}),{mutate:u,isPending:x,error:t,isError:C,isSuccess:f}=O();a.useEffect(()=>{d(!!s[i])},[]),a.useEffect(()=>{f&&(l(!1),d(!o))},[f]);const S=async c=>{s[i]?p(!0):l(!0)},_=async()=>{u({id:s.id,props:{[i]:!1,diagnostic_description:""}})},g=()=>{l(!1)},k=()=>{u({id:s.id,props:{...n,[i]:!0}})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{open:y,onClose:g,title:"Diagnostic",children:e.jsxs(r,{sx:{display:"flex",gap:5,flexDirection:"column"},children:[e.jsx(r,{children:e.jsx(h,{value:n.diagnostic_description||"",rows:4,multiline:!0,onChange:c=>m({...n,diagnostic_description:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Result diagnostic",error:C,helperText:t==null?void 0:t.diagnostic_description,variant:"outlined"})}),e.jsx(r,{children:e.jsx(h,{value:n.component||"",onChange:c=>m({...n,component:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Need to order",error:!!(t!=null&&t.component),helperText:t==null?void 0:t.component,variant:"outlined"})}),e.jsxs(r,{sx:{display:"flex",gap:3,justifyContent:"space-between"},children:[e.jsx(r,{sx:{display:"flex",gap:3},children:e.jsx(j,{color:"success",disabled:!n.diagnostic_description,loading:x,variant:"contained",onClick:k,children:"Save"})}),e.jsx(r,{children:e.jsx(E,{variant:"contained",color:"primary",onClick:g,children:"Cancel"})})]})]})}),e.jsx(D,{title:"Unmarked Picked Up?",open:v,setOpen:p,onConfirm:_,children:"Are you sure? It will be unmarked as diagnostic."}),e.jsx(j,{loading:x,color:o?"success":"error",size:"small",variant:"text",onClick:S,children:o?e.jsx(e.Fragment,{children:e.jsx(M,{})}):e.jsx(w,{})})]})};export{oe as default};