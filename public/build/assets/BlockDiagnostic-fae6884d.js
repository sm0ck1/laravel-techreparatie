import{y as k,r as o,j as e}from"./app-3202f596.js";import{d as M,a as B}from"./Check-798d69d4.js";import{M as D}from"./Modal-e122baf5.js";import F from"./ConfirmDialog-56d74f25.js";import{u as b}from"./useMutation-fe1021bb.js";import{B as a}from"./Box-132a8830.js";import{T as E}from"./TextField-94f03ebe.js";import{L as g}from"./LoadingButton-f9168bcf.js";import{B as O}from"./Button-69efd48b.js";import"./createSvgIcon-5ec9d790.js";import"./createSvgIcon-74e13a21.js";import"./createTheme-e443a688.js";import"./styled-6ddd3ae9.js";import"./useId-95af0284.js";import"./TransitionGroupContext-bf46694f.js";import"./ButtonBase-bd429d2a.js";import"./Modal-012e7dea.js";import"./Container-acfea48f.js";import"./styled-6f8de2aa.js";import"./Typography-58006bdd.js";import"./extendSxProp-5b301ce9.js";import"./Menu-f2ff0f34.js";const w=()=>b({mutationFn:async({id:i,props:t})=>{try{const{data:s}=await axios.patch(route("repairs.update.diagnostic",i),t);return Promise.resolve(s)}catch(s){return Promise.reject(s.response.data.errors)}},onSuccess:()=>{k.reload({only:["repairs"]})}}),te=({repair:i})=>{const t="is_diagnostic",[s,l]=o.useState(!1),[h,d]=o.useState(!1),[j,r]=o.useState(!1),[n,y]=o.useState({diagnostic_description:"",[t]:!1}),{mutate:p,isPending:m,error:c,isError:C,isSuccess:u}=w();o.useEffect(()=>{l(!!i[t])},[]),o.useEffect(()=>{u&&(r(!1),l(!s))},[u]);const v=async x=>{i[t]?d(!0):r(!0)},S=async()=>{p({id:i.id,props:{[t]:!1,diagnostic_description:""}})},f=()=>{r(!1)},_=()=>{p({id:i.id,props:{...n,[t]:!0}})};return e.jsxs(e.Fragment,{children:[e.jsx(D,{open:j,onClose:f,title:"Diagnostic",children:e.jsxs(a,{sx:{display:"flex",gap:5,flexDirection:"column"},children:[e.jsx(a,{children:e.jsx(E,{value:n.diagnostic_description||"",onChange:x=>y({...n,diagnostic_description:x.target.value}),sx:{width:"100%"},id:"outlined-basic",label:"Result diagnostic",error:C,helperText:c==null?void 0:c.diagnostic_description,variant:"outlined"})}),e.jsxs(a,{sx:{display:"flex",gap:3,justifyContent:"space-between"},children:[e.jsx(a,{sx:{display:"flex",gap:3},children:e.jsx(g,{color:"success",disabled:!n.diagnostic_description,loading:m,variant:"contained",onClick:_,children:"Save"})}),e.jsx(a,{children:e.jsx(O,{variant:"contained",color:"primary",onClick:f,children:"Cancel"})})]})]})}),e.jsx(F,{title:"Unmarked Picked Up?",open:h,setOpen:d,onConfirm:S,children:"Are you sure? It will be unmarked as diagnostic."}),e.jsx(g,{loading:m,color:s?"success":"error",size:"small",variant:"text",onClick:v,children:s?e.jsx(e.Fragment,{children:e.jsx(M,{})}):e.jsx(B,{})})]})};export{te as default};