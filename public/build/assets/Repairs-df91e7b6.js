import{r as m,j as a,d as vo}from"./app-2d73ea55.js";import ho from"./RepairsLayout-f022d4f6.js";import{T as xo,a as io,b as Co,c as R,R as Bo}from"./Row-d51b6890.js";import $o from"./ModalEdit-16185ef7.js";import Ro from"./ModalCreate-ef9ff07c.js";import{r as V}from"./repairStore-4e972204.js";import{B as L}from"./Box-0aebc8bf.js";import{a as yo,b as To,B as S}from"./Button-44ae99c3.js";import{f as d,_ as p,b as _,e as P,i as Oo}from"./createTheme-156a7933.js";import{a as N,g as H,s as M,b as k,c as U}from"./styled-da10e864.js";import{u as eo}from"./Autocomplete-69be9359.js";import{b as oo}from"./Modal-75514fbd.js";import"./DashboardLayout-5084a019.js";import"./createSvgIcon-f157a86e.js";import"./createSvgIcon-fb97631e.js";import"./useId-f0ba7148.js";import"./TransitionGroupContext-391a7c7f.js";import"./ButtonBase-da9039f2.js";import"./Container-b6fa0376.js";import"./styled-423efc69.js";import"./IconButton-93defd9c.js";import"./Menu-0f06de44.js";import"./MenuItem-93a2108f.js";import"./dividerClasses-ae5404e9.js";import"./Typography-6359d7c6.js";import"./extendSxProp-73dc8921.js";import"./Popper-67470bd8.js";import"./BlockInfo-489913a6.js";import"./editStore-d065645d.js";import"./vanilla-8854675d.js";import"./BlockInfoCustomer-7599a799.js";import"./BlockInfoLayout-0ce08b92.js";import"./TextField-fd9bad2e.js";import"./BlockInfoOrdered-863d22bc.js";import"./BlockInfoFixed-9353c519.js";import"./BlockInfoDiagnostic-21a05e72.js";import"./BlockFixed-d0c0155c.js";import"./Check-edb6ead8.js";import"./ConfirmDialog-1a912fd8.js";import"./Modal-759e09ca.js";import"./useMutation-463f253a.js";import"./LoadingButton-a5f2cb57.js";import"./BlockPickedUp-ff95b60a.js";import"./BlockOrdered-27ee8cff.js";import"./LocalShipping-26fcb881.js";import"./BlockCalled-6bfdb4a8.js";import"./BlockDiagnostic-9610900d.js";import"./BlockDivider-1f99c70e.js";import"./InputText-4d409ae2.js";function jo(r){const{badgeContent:o,invisible:t=!1,max:i=99,showZero:c=!1}=r,n=eo({badgeContent:o,max:i});let s=t;t===!1&&o===0&&!c&&(s=!0);const{badgeContent:e,max:l=i}=s?n:r,b=e&&Number(e)>l?`${l}+`:e;return{badgeContent:e,invisible:s,max:l,displayValue:b}}function Po(r){return H("MuiBadge",r)}const Mo=N("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),y=Mo,zo=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],A=10,Z=4,_o=r=>{const{color:o,anchorOrigin:t,invisible:i,overlap:c,variant:n,classes:s={}}=r,e={root:["root"],badge:["badge",n,i&&"invisible",`anchorOrigin${d(t.vertical)}${d(t.horizontal)}`,`anchorOrigin${d(t.vertical)}${d(t.horizontal)}${d(c)}`,`overlap${d(c)}`,o!=="default"&&`color${d(o)}`]};return U(e,Po,s)},No=M("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,o)=>o.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Ho=M("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,o)=>{const{ownerState:t}=r;return[o.badge,o[t.variant],o[`anchorOrigin${d(t.anchorOrigin.vertical)}${d(t.anchorOrigin.horizontal)}${d(t.overlap)}`],t.color!=="default"&&o[`color${d(t.color)}`],t.invisible&&o.invisible]}})(({theme:r,ownerState:o})=>p({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:A*2,lineHeight:1,padding:"0 6px",height:A*2,borderRadius:A,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},o.color!=="default"&&{backgroundColor:(r.vars||r).palette[o.color].main,color:(r.vars||r).palette[o.color].contrastText},o.variant==="dot"&&{borderRadius:Z,height:Z*2,minWidth:Z*2,padding:0},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${y.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${y.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${y.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${y.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${y.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${y.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${y.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${y.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})),ko=m.forwardRef(function(o,t){var i,c,n,s,e,l;const b=k({props:o,name:"MuiBadge"}),{anchorOrigin:f={vertical:"top",horizontal:"right"},className:h,component:u,components:x={},componentsProps:C={},children:T,overlap:O="rectangular",color:j="default",invisible:B=!1,max:G=99,badgeContent:E,slots:v,slotProps:$,showZero:W=!1,variant:z="standard"}=b,no=_(b,zo),{badgeContent:X,invisible:so,max:lo,displayValue:co}=jo({max:G,invisible:B,badgeContent:E,showZero:W}),po=eo({anchorOrigin:f,color:j,overlap:O,variant:z,badgeContent:E}),q=so||X==null&&z!=="dot",{color:uo=j,overlap:go=O,anchorOrigin:mo=f,variant:J=z}=q?po:b,K=J!=="dot"?co:void 0,D=p({},b,{badgeContent:X,invisible:q,max:lo,displayValue:K,showZero:W,anchorOrigin:mo,color:uo,overlap:go,variant:J}),Q=_o(D),Y=(i=(c=v==null?void 0:v.root)!=null?c:x.Root)!=null?i:No,w=(n=(s=v==null?void 0:v.badge)!=null?s:x.Badge)!=null?n:Ho,F=(e=$==null?void 0:$.root)!=null?e:C.root,I=(l=$==null?void 0:$.badge)!=null?l:C.badge,bo=oo({elementType:Y,externalSlotProps:F,externalForwardedProps:no,additionalProps:{ref:t,as:u},ownerState:D,className:P(F==null?void 0:F.className,Q.root,h)}),fo=oo({elementType:w,externalSlotProps:I,ownerState:D,className:P(Q.badge,I==null?void 0:I.className)});return a.jsxs(Y,p({},bo,{children:[T,a.jsx(w,p({},fo,{children:K}))]}))}),Uo=ko;function Wo(r){return H("MuiButtonGroup",r)}const Eo=N("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),g=Eo,Lo=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],Go=(r,o)=>{const{ownerState:t}=r;return[{[`& .${g.grouped}`]:o.grouped},{[`& .${g.grouped}`]:o[`grouped${d(t.orientation)}`]},{[`& .${g.grouped}`]:o[`grouped${d(t.variant)}`]},{[`& .${g.grouped}`]:o[`grouped${d(t.variant)}${d(t.orientation)}`]},{[`& .${g.grouped}`]:o[`grouped${d(t.variant)}${d(t.color)}`]},{[`& .${g.firstButton}`]:o.firstButton},{[`& .${g.lastButton}`]:o.lastButton},{[`& .${g.middleButton}`]:o.middleButton},o.root,o[t.variant],t.disableElevation===!0&&o.disableElevation,t.fullWidth&&o.fullWidth,t.orientation==="vertical"&&o.vertical]},Do=r=>{const{classes:o,color:t,disabled:i,disableElevation:c,fullWidth:n,orientation:s,variant:e}=r,l={root:["root",e,s==="vertical"&&"vertical",n&&"fullWidth",c&&"disableElevation"],grouped:["grouped",`grouped${d(s)}`,`grouped${d(e)}`,`grouped${d(e)}${d(s)}`,`grouped${d(e)}${d(t)}`,i&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return U(l,Wo,o)},Fo=M("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Go})(({theme:r,ownerState:o})=>p({display:"inline-flex",borderRadius:(r.vars||r).shape.borderRadius},o.variant==="contained"&&{boxShadow:(r.vars||r).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${g.grouped}`]:p({minWidth:40,"&:hover":p({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"}),[`& .${g.firstButton},& .${g.middleButton}`]:p({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:r.vars?`1px solid rgba(${r.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${r.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${g.disabled}`]:{borderRight:`1px solid ${(r.vars||r).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:r.vars?`1px solid rgba(${r.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${r.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${g.disabled}`]:{borderBottom:`1px solid ${(r.vars||r).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:r.vars?`rgba(${r.vars.palette[o.color].mainChannel} / 0.5)`:Oo(r.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(r.vars||r).palette.grey[400]}`,[`&.${g.disabled}`]:{borderRight:`1px solid ${(r.vars||r).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(r.vars||r).palette.grey[400]}`,[`&.${g.disabled}`]:{borderBottom:`1px solid ${(r.vars||r).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(r.vars||r).palette[o.color].dark},{"&:hover":p({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${g.lastButton},& .${g.middleButton}`]:p({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1})})),Io=m.forwardRef(function(o,t){const i=k({props:o,name:"MuiButtonGroup"}),{children:c,className:n,color:s="primary",component:e="div",disabled:l=!1,disableElevation:b=!1,disableFocusRipple:f=!1,disableRipple:h=!1,fullWidth:u=!1,orientation:x="horizontal",size:C="medium",variant:T="outlined"}=i,O=_(i,Lo),j=p({},i,{color:s,component:e,disabled:l,disableElevation:b,disableFocusRipple:f,disableRipple:h,fullWidth:u,orientation:x,size:C,variant:T}),B=Do(j),G=m.useMemo(()=>({className:B.grouped,color:s,disabled:l,disableElevation:b,disableFocusRipple:f,disableRipple:h,fullWidth:u,size:C,variant:T}),[s,l,b,f,h,u,C,T,B.grouped]),E=(v,$)=>{const W=v===0,z=v===m.Children.count($)-1;return W&&z?"":W?B.firstButton:z?B.lastButton:B.middleButton};return a.jsx(Fo,p({as:e,role:"group",className:P(B.root,n),ref:t,ownerState:j},O,{children:a.jsx(yo.Provider,{value:G,children:m.Children.map(c,(v,$)=>m.isValidElement(v)?a.jsx(To.Provider,{value:E($,c),children:v}):v)})}))}),Vo=Io;function Ao(r){return H("MuiTable",r)}N("MuiTable",["root","stickyHeader"]);const Zo=["className","component","padding","size","stickyHeader"],Xo=r=>{const{classes:o,stickyHeader:t}=r;return U({root:["root",t&&"stickyHeader"]},Ao,o)},qo=M("table",{name:"MuiTable",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:t}=r;return[o.root,t.stickyHeader&&o.stickyHeader]}})(({theme:r,ownerState:o})=>p({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":p({},r.typography.body2,{padding:r.spacing(2),color:(r.vars||r).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})),ro="table",Jo=m.forwardRef(function(o,t){const i=k({props:o,name:"MuiTable"}),{className:c,component:n=ro,padding:s="normal",size:e="medium",stickyHeader:l=!1}=i,b=_(i,Zo),f=p({},i,{component:n,padding:s,size:e,stickyHeader:l}),h=Xo(f),u=m.useMemo(()=>({padding:s,size:e,stickyHeader:l}),[s,e,l]);return a.jsx(xo.Provider,{value:u,children:a.jsx(qo,p({as:n,role:n===ro?null:"table",ref:t,className:P(h.root,c),ownerState:f},b))})}),Ko=Jo;function Qo(r){return H("MuiTableBody",r)}N("MuiTableBody",["root"]);const Yo=["className","component"],wo=r=>{const{classes:o}=r;return U({root:["root"]},Qo,o)},So=M("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(r,o)=>o.root})({display:"table-row-group"}),or={variant:"body"},to="tbody",rr=m.forwardRef(function(o,t){const i=k({props:o,name:"MuiTableBody"}),{className:c,component:n=to}=i,s=_(i,Yo),e=p({},i,{component:n}),l=wo(e);return a.jsx(io.Provider,{value:or,children:a.jsx(So,p({className:P(l.root,c),as:n,ref:t,role:n===to?null:"rowgroup",ownerState:e},s))})}),tr=rr;function ar(r){return H("MuiTableContainer",r)}N("MuiTableContainer",["root"]);const ir=["className","component"],er=r=>{const{classes:o}=r;return U({root:["root"]},ar,o)},nr=M("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(r,o)=>o.root})({width:"100%",overflowX:"auto"}),sr=m.forwardRef(function(o,t){const i=k({props:o,name:"MuiTableContainer"}),{className:c,component:n="div"}=i,s=_(i,ir),e=p({},i,{component:n}),l=er(e);return a.jsx(nr,p({ref:t,as:n,className:P(l.root,c),ownerState:e},s))}),lr=sr;function dr(r){return H("MuiTableHead",r)}N("MuiTableHead",["root"]);const cr=["className","component"],pr=r=>{const{classes:o}=r;return U({root:["root"]},dr,o)},ur=M("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(r,o)=>o.root})({display:"table-header-group"}),gr={variant:"head"},ao="thead",mr=m.forwardRef(function(o,t){const i=k({props:o,name:"MuiTableHead"}),{className:c,component:n=ao}=i,s=_(i,cr),e=p({},i,{component:n}),l=pr(e);return a.jsx(io.Provider,{value:gr,children:a.jsx(ur,p({as:n,className:P(l.root,c),ref:t,role:n===ao?null:"rowgroup",ownerState:e},s))})}),br=mr,pt=({repairs:r,employees:o,groupWhereOrdered:t,groupDevices:i})=>{const[c,n]=m.useState(!1),[s,e]=m.useState(!1),[l,b]=m.useState([{name:"All",url:""},{name:"Not called",url:"?filter[is_called]=0&filter[is_picked_up]=0&filter[is_fixed]=1"},{name:"Not fixed",url:"?filter[is_fixed]=0&filter[is_ordered_component]=0"},{name:"Awaits order",url:"?filter[is_fixed]=0&filter[is_ordered_component]=1&filter[is_picked_up]=0"},{name:"Not taken yet",url:"?filter[is_picked_up]=0&filter[is_fixed]=1"}]);m.useEffect(()=>{V.employees=o,V.groupWhereOrdered=t||[],V.groupDevices=i||[]},[t]),m.useEffect(()=>{l.map((u,x)=>{axios.get("/repairs/counter"+u.url).then(C=>{b(T=>T.map((O,j)=>(x===j&&(O.counter=C.data.total),O)))})})},[]);const f=()=>{n(!1)},h={"&.Mui-disabled":{color:"white",backgroundColor:"#719ef8"}};return a.jsxs(ho,{children:[a.jsx(Ro,{open:c,handleClose:f}),a.jsx($o,{}),a.jsxs(L,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5,mb:2},children:[a.jsx(L,{children:a.jsx(S,{variant:"contained",color:"success",onClick:()=>n(!0),children:"New repair"})}),a.jsx(L,{sx:{display:"flex",flexDirection:"row",gap:2},children:a.jsx(Vo,{variant:"contained","aria-label":"outlined primary button group",children:l.map((u,x)=>a.jsx(Uo,{color:"secondary",badgeContent:u.counter||0,children:a.jsx(S,{sx:h,disabled:location.search===u.url,component:vo,href:"/repairs"+u.url,children:u.name})},x))})})]}),r.data.length>0&&a.jsx(a.Fragment,{children:a.jsx(lr,{children:a.jsxs(Ko,{"aria-label":"simple table",size:"small",children:[a.jsx(br,{children:a.jsxs(Co,{children:[a.jsx(R,{}),a.jsx(R,{}),a.jsx(R,{}),a.jsx(R,{align:"center",children:"Diagnostic"}),a.jsx(R,{align:"center",children:"Ordered"}),a.jsx(R,{align:"center",children:"Fixed"}),a.jsx(R,{align:"center",children:"Called"}),a.jsx(R,{align:"center",children:"Picked up"})]})}),a.jsx(tr,{children:r.data.map(u=>a.jsx(Bo,{repair:u,open:s,setOpen:e},u.id))})]})})}),r.data.length===0&&a.jsx(L,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:a.jsx("h2",{children:"No data"})})]})};export{pt as default};