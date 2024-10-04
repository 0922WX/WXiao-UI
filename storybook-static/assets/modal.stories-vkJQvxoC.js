import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as M}from"./index-DJO9vBfz.js";import{c as T}from"./index-i5X67GZP.js";import{B as i}from"./index-BhakQPDc.js";import{X as v}from"./x-BoXa7sCr.js";import"./index-CPSBcHtu.js";import"./createLucideIcon-DGAn-sPI.js";function d(o){const{title:t,footer:s=!0,children:l,showmodal:j,onCancel:c,onOk:w,size:n="small",className:b}=o;if(!j)return null;const y=T("bg-white border-2 border-black border-solid rounded shadow-sm p-5 flex flex-col gap-3",b,{"w-1/4":n==="small","w-2/4":n==="medium","w-3/4":n==="large"});return e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center",children:e.jsxs("div",{className:y,children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-lg font-normal",children:t}),e.jsx(v,{className:"cursor-pointer",onClick:c})]}),e.jsx("hr",{}),e.jsx("div",{className:"text-sm",children:l}),s&&e.jsxs("div",{className:"flex justify-end gap-3 mt-3",children:[e.jsx(i,{onClick:c,children:"取消"}),e.jsx(i,{onClick:w,children:"确定"})]})]})})}d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showmodal:{required:!1,tsType:{name:"boolean"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOk:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Modal",component:d,tags:["autodocs"]},x=o=>{const[t,s]=M.useState(!1),l=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx(i,{title:"Open Modal",onClick:()=>s(!0),variant:"outlined",rounded:"medium"}),e.jsx(d,{...o,showmodal:t,onCancel:()=>s(!1),onOk:l})]})},a={args:{showmodal:!0,title:"Modal Title",children:"Modal Content",closabel:!1,size:"small"},render:x},r={args:{showmodal:!0,title:"Modal Title",children:"Modal Content",closabel:!1,size:"small",footer:!1},render:x};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showmodal: true,
    title: "Modal Title",
    children: "Modal Content",
    closabel: false,
    size: "small"
  },
  render: Template
} as {
  args: ModalProps;
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,h,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showmodal: true,
    title: "Modal Title",
    children: "Modal Content",
    closabel: false,
    size: "small",
    footer: false
  },
  render: Template
} as {
  args: ModalProps;
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const B=["Basic","WithoutFooter"];export{a as Basic,r as WithoutFooter,B as __namedExportsOrder,_ as default};
