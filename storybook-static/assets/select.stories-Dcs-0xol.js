import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as q}from"./index-DJO9vBfz.js";import{c as p}from"./index-i5X67GZP.js";import{T as E}from"./index-CPSBcHtu.js";import{c as k}from"./createLucideIcon-DGAn-sPI.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=k("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=k("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function g(a){const[l,i]=q.useState(!1),{value:t="",onChange:C=()=>{},option:v=[],name:U="",placeholder:N="",disabled:D=!1,className:z,size:c="small",rounded:s="none",childrenrounded:o="none"}=a;let r=null;t&&(r=v.find(n=>n.value===t));let _=r?e.jsxs("div",{className:"flex items-center gap-2",children:[r.image&&e.jsx("img",{src:r.image,alt:r.label,className:"w-6 h-6 mr-2"}),r.label]}):N;const I=p("border border-solid  p-2 border-primary cursor-pointer px-3 flex justify-between","items-center gap-2",z,{"h-6":c==="small","h-8":c==="medium","h-10":c==="large","rounded-none":s==="none","rounded-sm":s==="small","rounded-md":s==="medium","rounded-lg":s==="large","rounded-full":s==="full","bg-gray-200 cursor-not-allowed pointer-events-none":D}),P=p("flex flex-col gap-3 border border-solid ","p-2 cursor-pointer mt-1",{"rounded-none":o==="none","rounded-sm":o==="small","rounded-md":o==="medium","rounded-lg":o==="large"});return e.jsx(E,{children:e.jsxs("div",{className:"w-max",children:[e.jsxs("div",{className:I,onClick:()=>i(!l),children:[_,e.jsx("span",{children:l?e.jsx(B,{size:15,className:"text-pretty"}):e.jsx(A,{size:15,className:"text-pretty"})})]}),l&&e.jsx("div",{className:P,children:v.map(n=>e.jsxs("div",{className:p("hover:bg-gray-300 transition-all duration-500 ease-in-out"," p-1 rounded-sm flex items-center gap-2",{"bg-gray-300":n.value===t}),onClick:()=>{C(n.value),i(!1)},children:[n.image&&e.jsx("img",{src:n.image,alt:n.label,className:"w-6 h-6 mr-2"}),n.label]},n.value))})]})})}g.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},option:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  value: string | number;\r
  image?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:`Array<{\r
  label: string;\r
  value: string | number;\r
  image?: string;\r
}>`},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:""},childrenrounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""}}};const G={title:"Select",component:g,tags:["autodocs"]},b=a=>{const[l,i]=q.useState("");return e.jsx(g,{...a,onChange:t=>i(t),value:l})},m={args:{placeholder:"Select an option",option:[{label:"Option 1",value:"item 1"},{label:"Option 2",value:"item 2"},{label:"Option 3",value:"item 3"},{label:"Option 4",value:"item 4"}],onChange:a=>console.log(a)},render:b},d={args:{placeholder:"Select an option",option:[{label:"Option 1",value:"item 1",image:"https://picture.gptkong.com/20241003/1545a83ebdd8fb46309028d0b4abedd81d.jpg"},{label:"Option 2",value:"item 2",image:"https://picture.gptkong.com/20241003/1543c44d4b8da444e69e1f7a8dd4efa881.jpg"},{label:"Option 3",value:"item 3",image:"https://picture.gptkong.com/20241003/1544c256f1bcb2464db62cd55c74be348c.jpg"}],onChange:a=>console.log(a)},render:b},u={args:{placeholder:"Disabled  option",option:[],disabled:!0},render:b};var h,f,y;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an option",
    option: [{
      label: "Option 1",
      value: "item 1"
    }, {
      label: "Option 2",
      value: "item 2"
    }, {
      label: "Option 3",
      value: "item 3"
    }, {
      label: "Option 4",
      value: "item 4"
    }],
    onChange: (value: any) => console.log(value)
  },
  render: Template
} as {
  args: SelectProps;
}`,...(y=(f=m.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,j,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Select an option",
    option: [{
      label: "Option 1",
      value: "item 1",
      image: "https://picture.gptkong.com/20241003/1545a83ebdd8fb46309028d0b4abedd81d.jpg"
    }, {
      label: "Option 2",
      value: "item 2",
      image: "https://picture.gptkong.com/20241003/1543c44d4b8da444e69e1f7a8dd4efa881.jpg"
    }, {
      label: "Option 3",
      value: "item 3",
      image: "https://picture.gptkong.com/20241003/1544c256f1bcb2464db62cd55c74be348c.jpg"
    }],
    onChange: (value: any) => console.log(value)
  },
  render: Template
} as {
  args: SelectProps;
}`,...(O=(j=d.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var w,S,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled  option",
    option: [],
    disabled: true
  },
  render: Template
} as {
  args: SelectProps;
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const H=["Basic","WithImage","DisabledOption"];export{m as Basic,u as DisabledOption,d as WithImage,H as __namedExportsOrder,G as default};
