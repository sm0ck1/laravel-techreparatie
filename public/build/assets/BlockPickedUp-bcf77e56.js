import{y as S,r as i,j as e}from"./app-f1c828f7.js";import{d as M,a as P}from"./Check-09186f61.js";import F from"./ConfirmDialog-dc49bdec.js";import{M as O}from"./Modal-a9b3aa1d.js";import{u as B}from"./useMutation-ac1b88b9.js";import{B as n}from"./Box-f07d3107.js";import{T as E}from"./TextField-786e87d4.js";import{L as u}from"./LoadingButton-46b470b3.js";import"./createSvgIcon-5ef262e0.js";import"./createSvgIcon-636eeff5.js";import"./createTheme-41447446.js";import"./styled-3cd3900f.js";import"./useId-c9e8e77e.js";import"./TransitionGroupContext-4c204ff9.js";import"./ButtonBase-8b99eabd.js";import"./Modal-52c5d07f.js";import"./Typography-aadd2b68.js";import"./extendSxProp-af694d93.js";import"./Button-d62b349f.js";import"./Container-6b860eac.js";import"./styled-aff25966.js";import"./Menu-9bd5f357.js";const U=()=>B({mutationFn:async({id:t,props:o})=>{try{const{data:s}=await axios.patch(route("repairs.update.picked",t),o);return Promise.resolve(s)}catch(s){return Promise.reject(s.response.data.errors)}},onSuccess:()=>{S.reload({only:["repairs"]})}}),ee=({repair:t})=>{const o="is_picked_up",[s,f]=i.useState(!1),[x,l]=i.useState(!1),[h,c]=i.useState(!1),{mutate:d,isPending:p,error:a,isError:j,isSuccess:_}=U(),[r,v]=i.useState({invoice:"",[o]:!1});i.useEffect(()=>{f(!!t[o])},[t]);const k=async()=>{t[o]?l(!0):c(!0)},y=async()=>{d({id:t.id,props:{[o]:!1,invoice:""}})},g=async()=>{d({id:t.id,props:{...r,[o]:!0}}),m()},m=()=>{c(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(O,{open:h,onClose:m,title:"Picked Up",children:e.jsxs(n,{sx:{display:"flex",gap:5,flexDirection:"column"},children:[e.jsx(n,{children:e.jsx(E,{value:r.invoice,onChange:C=>v({...r,invoice:C.target.value}),error:j,helperText:a==null?void 0:a.invoice,sx:{width:"100%"},id:"outlined-basic",label:"Invoice #",variant:"outlined"})}),e.jsx(n,{sx:{display:"flex",gap:3},children:e.jsx(u,{loading:p,variant:"contained",onClick:g,children:"Save"})})]})}),e.jsx(F,{title:"Unmarked Called?",open:x,setOpen:l,onConfirm:y,children:"Are you sure? It will be unmarked as picked up."}),e.jsx(u,{loading:p,color:s?"success":"error",size:"small",variant:"text",onClick:k,children:s?e.jsx(M,{}):e.jsx(P,{})})]})};export{ee as default};