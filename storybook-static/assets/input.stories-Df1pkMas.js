import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{c as H}from"./index-i5X67GZP.js";import{T as J}from"./index-CPSBcHtu.js";import"./index-DJO9vBfz.js";function _(M){const{value:B,onChange:p,name:D,placeholder:L,disabled:i,label:W,styles:A,children:K,type:F="text",size:u="medium",rounded:e="none",error:d="",className:O}=M,k=H("px-5 border-solid",O,{"h-8":u==="small","h-10":u==="medium","h-12":u==="large","rounded-none":e==="none","rounded-sm":e==="small","rounded-md":e==="medium","rounded-lg":e==="large","rounded-full":e==="full","border-primary focus:outline-none":!i,"border-2 border-red-500 border-solid":d,"cursor-not-allowed pointer-events-none bg-gray-100 text-gray-500":i});return r.jsx(J,{children:r.jsxs("div",{className:"flex flex-col gap-1",children:[r.jsx("label",{htmlFor:"input",className:"text-sm",children:W}),r.jsx("input",{style:A,type:F,name:D,value:B,placeholder:L,disabled:i,onChange:G=>p&&p(G.target.value),className:k}),d&&r.jsx("div",{className:"text-red-500",children:d})]})})}_.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},styles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:""},error:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Z={title:"Input",component:_,tags:["autodocs"]},a={args:{label:"Username",placeholder:"Enter your username"}},s={args:{label:"Username",placeholder:"Enter your username",error:"This field is required"}},n={args:{label:"Username",placeholder:"Enter your username",disabled:!0,value:"wx"}},l={args:{label:"Username",placeholder:"Enter your username",size:"small"}},o={args:{label:"Username",placeholder:"Enter your username",size:"medium"}},t={args:{label:"Username",placeholder:"Enter your username",size:"large"}},m={args:{label:"Username",placeholder:"Enter your username",rounded:"large"}};var c,g,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username"
  }
} as {
  args: InputProps;
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,h,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    error: "This field is required"
  }
} as {
  args: InputProps;
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,x,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    disabled: true,
    value: "wx"
  }
} as {
  args: InputProps;
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var T,q,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "small"
  }
} as {
  args: InputProps;
}`,...(w=(q=l.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var U,S,I;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "medium"
  }
} as {
  args: InputProps;
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,P,R;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "large"
  }
} as {
  args: InputProps;
}`,...(R=(P=t.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var z,j,C;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    rounded: "large"
  }
} as {
  args: InputProps;
}`,...(C=(j=m.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const $=["Basic","WithError","Disabled","Small","Medium","Large","Rounded"];export{a as Basic,n as Disabled,t as Large,o as Medium,m as Rounded,l as Small,s as WithError,$ as __namedExportsOrder,Z as default};
