import{y as b,r as a,j as e}from"./app-2228c071.js";import{d as M,a as w}from"./Check-b7a3b9ba.js";import{M as B}from"./Modal-8f48e42c.js";import D from"./ConfirmDialog-8b7e1793.js";import{u as F}from"./useMutation-2404ef3d.js";import{B as r}from"./Box-742bb19f.js";import{T as h}from"./TextField-e356d9ab.js";import{L as j}from"./LoadingButton-3f6e2ce0.js";import{B as E}from"./Button-73b0cdb9.js";import"./createSvgIcon-15455139.js";import"./createSvgIcon-e2e03bc9.js";import"./createTheme-dcf84243.js";import"./styled-fdc8b611.js";import"./generateUtilityClasses-96161c6c.js";import"./useId-e7280e90.js";import"./TransitionGroupContext-1e4adf20.js";import"./isMuiElement-3d2ef873.js";import"./ButtonBase-d5dccd8f.js";import"./Modal-b8baee57.js";import"./Container-d8f66ffa.js";import"./styled-f28284cf.js";import"./Typography-c3dc3365.js";import"./extendSxProp-a075ea99.js";import"./Menu-00a6b054.js";const O=()=>F({mutationFn:async({id:s,props:i})=>{try{const{data:o}=await axios.patch(route("repairs.update.diagnostic",s),i);return Promise.resolve(o)}catch(o){return Promise.reject(o.response.data.errors)}},onSuccess:()=>{b.reload({only:["repairs"]})}}),oe=({repair:s})=>{const i="is_diagnostic",[o,d]=a.useState(!1),[v,p]=a.useState(!1),[y,l]=a.useState(!1),[n,m]=a.useState({diagnostic_description:"",component:"",[i]:!1}),{mutate:u,isPending:x,error:t,isError:C,isSuccess:f}=O();a.useEffect(()=>{d(!!s[i])},[]),a.useEffect(()=>{f&&(l(!1),d(!o))},[f]);const S=async c=>{s[i]?p(!0):l(!0)},_=async()=>{u({id:s.id,props:{[i]:!1,diagnostic_description:""}})},g=()=>{l(!1)},k=()=>{u({id:s.id,props:{...n,[i]:!0}})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{open:y,onClose:g,title:"Diagnostic",children:e.jsxs(r,{sx:{display:"flex",gap:5,flexDirection:"column"},children:[e.jsx(r,{children:e.jsx(h,{value:n.diagnostic_description||"",rows:4,multiline:!0,onChange:c=>m({...n,diagnostic_description:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Result diagnostic",error:C,helperText:t==null?void 0:t.diagnostic_description,variant:"outlined"})}),e.jsx(r,{children:e.jsx(h,{value:n.component||"",onChange:c=>m({...n,component:c.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Need to order",error:!!(t!=null&&t.component),helperText:t==null?void 0:t.component,variant:"outlined"})}),e.jsxs(r,{sx:{display:"flex",gap:3,justifyContent:"space-between"},children:[e.jsx(r,{sx:{display:"flex",gap:3},children:e.jsx(j,{color:"success",disabled:!n.diagnostic_description,loading:x,variant:"contained",onClick:k,children:"Save"})}),e.jsx(r,{children:e.jsx(E,{variant:"contained",color:"primary",onClick:g,children:"Cancel"})})]})]})}),e.jsx(D,{title:"Unmarked Picked Up?",open:v,setOpen:p,onConfirm:_,children:"Are you sure? It will be unmarked as diagnostic."}),e.jsx(j,{loading:x,color:o?"success":"error",size:"small",variant:"text",onClick:S,children:o?e.jsx(e.Fragment,{children:e.jsx(M,{})}):e.jsx(w,{})})]})};export{oe as default};