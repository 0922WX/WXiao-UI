import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as E}from"./index-DJO9vBfz.js";import{c as d}from"./index-i5X67GZP.js";function u(l){const{label:i="",checked:e=!1,onChange:z,disabled:j=!1,rounded:c="full",orientation:m="vertical"}=l;return r.jsxs("div",{className:d("flex gap-1",{"flex-row items-center":m==="horizontal","flex-col":m==="vertical"}),children:[r.jsx("span",{className:"text-sm select-none",children:i}),r.jsx("div",{className:d("bg-gray-400 w-10 p-1 cursor-pointer flex","transition-all duration-500 ease-in-out",{"bg-primary transition-all duration-500 ease-in-out":e,"opacity-50  pointer-events-none cursor-not-allowed":j,"rounded-full":c==="full","rounded-none":c==="none"}),onClick:()=>z(!e),children:r.jsx("div",{className:d("w-4 h-4 rounded-full bg-white","transition-all duration-500 ease-in-out",{"rounded-none":c==="none","transform translate-x-4":e})})})]})}u.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked:boolean)=>void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"full"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' |'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}}};const _={title:"Switch",component:u,tags:["autodocs"]},o=l=>{const[i,e]=E.useState(!1);return r.jsx(u,{...l,checked:i,onChange:e})},a={args:{label:"Is Active ?",checked:!1,disabled:!1},render:o},n={args:{label:"Horizontal",checked:!1,orientation:"horizontal"},render:o},s={args:{label:"Vertical",checked:!1,orientation:"vertical"},render:o},t={args:{label:"Disabled",checked:!0,disabled:!0},render:o};var p,h,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Is Active ?",
    checked: false,
    disabled: false
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Horizontal",
    checked: false,
    orientation: "horizontal"
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,x,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Vertical",
    checked: false,
    orientation: "vertical"
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,y,T;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    checked: true,
    disabled: true
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const D=["Basic","Horizontal","vertical","Disabled"];export{a as Basic,t as Disabled,n as Horizontal,D as __namedExportsOrder,_ as default,s as vertical};
