import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as T}from"./index-DJO9vBfz.js";import{c as m}from"./index-i5X67GZP.js";function u(s){const{value:r="",onChange:i=()=>{},option:o=[],name:q="",label:y="",disabled:n=!1,className:w,size:j="small",rounded:N="none",orientation:h="horizontal"}=s;return e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm",children:y}),e.jsx("div",{className:m("flex gap-5",{"flex-col":h==="vertical","pointer-events-none cursor-not-allowed":n}),children:o.map(a=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{onClick:()=>i(a.value),className:m("w-4 h-4 border border-solid rounded-full cursor-pointer","box-border",{"border-4 border-primary":a.value===r&&!n,"border-gray-300":n,"border-4":a.value===r})}),e.jsx("span",{className:m("cursor-default text-sm mt-[2px]",{"text-gray-500":n}),children:a.label})]},a.value))})]})}u.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},option:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string | number;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],raw:`Array<{\r
  label: string;\r
  value: string | number;\r
}>`},description:""},name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const z={title:"Radio",component:u,tags:["autodocs"]},f=s=>{const[r,i]=T.useState("");return e.jsx(u,{...s,value:r,onChange:o=>i(o)})},x=[{label:"Option1",value:"item 1"},{label:"Option2",value:"item 2"},{label:"Option3",value:"item 3"},{label:"Option4",value:"item 4"},{label:"Option5",value:"item 5"}],l={args:{label:"Select an option",option:x},render:f},t={args:{label:"Select an option",option:x,orientation:"vertical"},render:f};var d,p,c;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    option: option
  },
  render: Template
} as {
  args: RadioProps;
}`,...(c=(p=l.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,v,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    option: option,
    orientation: "vertical"
  },
  render: Template
} as {
  args: RadioProps;
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const _=["Basic","VerticalOption"];export{l as Basic,t as VerticalOption,_ as __namedExportsOrder,z as default};
