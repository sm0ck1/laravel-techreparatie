import{y as b,r as a,j as e}from"./app-f1c828f7.js";import{d as M,a as w}from"./Check-09186f61.js";import{M as B}from"./Modal-a9b3aa1d.js";import D from"./ConfirmDialog-dc49bdec.js";import{u as F}from"./useMutation-ac1b88b9.js";import{B as r}from"./Box-f07d3107.js";import{T as h}from"./TextField-786e87d4.js";import{L as j}from"./LoadingButton-46b470b3.js";import{B as E}from"./Button-d62b349f.js";import"./createSvgIcon-5ef262e0.js";import"./createSvgIcon-636eeff5.js";import"./createTheme-41447446.js";import"./styled-3cd3900f.js";import"./useId-c9e8e77e.js";import"./TransitionGroupContext-4c204ff9.js";import"./ButtonBase-8b99eabd.js";import"./Modal-52c5d07f.js";import"./Container-6b860eac.js";import"./styled-aff25966.js";import"./Typography-aadd2b68.js";import"./extendSxProp-af694d93.js";import"./Menu-9bd5f357.js";const O=()=>F({mutationFn:async({id:o,props:i})=>{try{const{data:s}=await axios.patch(route("repairs.update.diagnostic",o),i);return Promise.resolve(s)}catch(s){return Promise.reject(s.response.data.errors)}},onSuccess:()=>{b.reload({only:["repairs"]})}}),te=({repair:o})=>{const i="is_diagnostic",[s,d]=a.useState(!1),[v,p]=a.useState(!1),[y,l]=a.useState(!1),[n,m]=a.useState({diagnostic_description:"",component:"",[i]:!1}),{mutate:u,isPending:x,error:t,isError:C,isSuccess:f}=O();a.useEffect(()=>{d(!!o[i])},[]),a.useEffect(()=>{f&&(l(!1),d(!s))},[f]);const S=async c=>{o[i]?p(!0):l(!0)},_=async()=>{u({id:o.id,props:{[i]:!1,diagnostic_description:""}})},g=()=>{l(!1)},k=()=>{u({id:o.id,props:{...n,[i]:!0}})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{open:y,onClose:g,title:"Diagnostic",children:e.jsxs(r,{sx:{display:"flex",gap:5,flexDirection:"column"},children:[e.jsx(r,{children:e.jsx(h,{value:n.diagnostic_description||"",rows:4,multiline:!0,onChange:c=>m({...n,diagnostic_description:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Result diagnostic",error:C,helperText:t==null?void 0:t.diagnostic_description,variant:"outlined"})}),e.jsx(r,{children:e.jsx(h,{value:n.component||"",onChange:c=>m({...n,component:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Need to order",error:!!(t!=null&&t.component),helperText:t==null?void 0:t.component,variant:"outlined"})}),e.jsxs(r,{sx:{display:"flex",gap:3,justifyContent:"space-between"},children:[e.jsx(r,{sx:{display:"flex",gap:3},children:e.jsx(j,{color:"success",disabled:!n.diagnostic_description,loading:x,variant:"contained",onClick:k,children:"Save"})}),e.jsx(r,{children:e.jsx(E,{variant:"contained",color:"primary",onClick:g,children:"Cancel"})})]})]})}),e.jsx(D,{title:"Unmarked Picked Up?",open:v,setOpen:p,onConfirm:_,children:"Are you sure? It will be unmarked as diagnostic."}),e.jsx(j,{loading:x,color:s?"success":"error",size:"small",variant:"text",onClick:S,children:s?e.jsx(e.Fragment,{children:e.jsx(M,{})}):e.jsx(w,{})})]})};export{te as default};