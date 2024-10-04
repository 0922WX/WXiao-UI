import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{c as z}from"./index-i5X67GZP.js";import"./index-DJO9vBfz.js";function b(S){const{size:o,color:a}=S,f=z("border border-solid border-t-transparent rounded-full animate-spin",{"h-12 w-12 border-4":o==="small","h-16 w-16 border-8":o==="medium","h-20 w-20 border-8":o==="large"});return n.jsx("div",{className:"w-max ",children:n.jsx("div",{className:f,style:{borderTopColor:"transparent",borderRightColor:a,borderBottomColor:a,borderLeftColor:a}})})}b.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Spinner",component:b,tags:["autodocs"]},r={args:{size:"small",color:"green"}},e={args:{size:"medium",color:"blue"}},s={args:{size:"large",color:"red"}};var l,i,t;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "small",
    color: "green"
  }
} as {
  args: SpinnerProps;
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var m,d,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "medium",
    color: "blue"
  }
} as {
  args: SpinnerProps;
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "large",
    color: "red"
  }
} as {
  args: SpinnerProps;
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const _=["Small","Medium","Large"];export{s as Large,e as Medium,r as Small,_ as __namedExportsOrder,w as default};
