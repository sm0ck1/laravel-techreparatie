import{j as t}from"./app-c1ae2f9b.js";import{B as r}from"./BlockInfoLayout-d413fe30.js";import{T as o}from"./TextField-97ca1765.js";import"./Box-cc0e80d2.js";import"./createTheme-2a584c85.js";import"./extendSxProp-7eaa493f.js";import"./Typography-77bfcf87.js";import"./styled-3dbe4f1c.js";import"./dividerClasses-9fbcdebd.js";import"./createSvgIcon-6c3c73c6.js";import"./useId-01cb7c8b.js";import"./Menu-16967673.js";import"./Modal-c9c900f6.js";import"./TransitionGroupContext-d15b2f66.js";const F=({repair:e})=>{var i;return e.is_fixed?t.jsxs(r,{title:"Fixed",date:e.date_fixed,children:[t.jsx(o,{size:"small",label:"Who fixed",defaultValue:((i=e.user)==null?void 0:i.name)||"None",InputProps:{readOnly:!0}}),t.jsx(o,{size:"small",label:"Solution description",defaultValue:e.solution_description||"None",InputProps:{readOnly:!0}}),t.jsx(o,{size:"small",label:"Price",defaultValue:e.price,InputProps:{readOnly:!0}})]}):t.jsx(t.Fragment,{})};export{F as default};