import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{c as h}from"./index-i5X67GZP.js";import"./index-DJO9vBfz.js";function o(l){const{children:d,direction:c="column",justify:r="start",align:n="top",gap:m,height:u,showborder:p=!1}=l;return e.jsx("div",{style:{height:u,gap:m},className:h("flex",{"flex-col":c==="column","justify-start":r==="start","justify-end":r==="end","justify-center":r==="center","items-start":n==="top","items-end":n==="bottom","border border-gray-500 border-solid":p}),children:d})}o.__docgenInfo={description:"",methods:[],displayName:"FlexContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"row" | "column"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'}]},description:""},justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"top" | "end" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"end"'},{name:"literal",value:'"bottom"'}]},description:""},gap:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},showborder:{required:!1,tsType:{name:"boolean"},description:""}}};const y={title:"FlexContainer",component:o,tags:["autodocs"]},f=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"p-5 bg-blue-500 text-white h-max",children:"Child 1"}),e.jsx("div",{className:"p-5 bg-red-500 text-white h-max",children:"Child 2"}),e.jsx("div",{className:"p-5 bg-green-500 text-white h-max",children:"Child 3"})]}),t={args:{children:f,justify:"start",align:"end",direction:"row",height:300,showborder:!0}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children,
    justify: "start",
    align: "end",
    direction: "row",
    height: 300,
    showborder: true
  }
} as {
  args: FlexContainerProps;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,y as default};
