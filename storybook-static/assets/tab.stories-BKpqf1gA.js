import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as q}from"./index-DJO9vBfz.js";import{c as s}from"./index-i5X67GZP.js";function l(d){const{tabsData:n,activeTab:e,onTabChange:j,disabledTabIndexes:N=[],orientation:r="horizontal"}=d,w=s("flex",{"flex-row justify-start":r==="vertical","flex-col justify-start":r==="horizontal"}),R=s("flex gap-5 border-0 border-solid border-gray-400",{"flex-col mr-5 border-r":r==="vertical","flex-row  border-b":r==="horizontal"});return t.jsxs("div",{className:w,children:[t.jsx("div",{className:R,children:n.map((D,a)=>t.jsx("div",{className:s("px-1 py-2 pr-2 cursor-pointer",{"border-primary border-solid border-b-4 border-0":e===a&&r==="horizontal","border-primary border-solid border-r-4 border-0":e===a&&r==="vertical","opacity-50 cursor-not-allowed pointer-events-none":N.includes(a)}),onClick:()=>j(a),children:t.jsx("span",{className:s("text-sm text-gray-500",{"text-primary":e===a}),children:D.title})},a))}),t.jsx("div",{className:"text-sm",children:n[e].content})]})}l.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabsData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  title: string;\r
  content: React.ReactNode;\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:`Array<{\r
  title: string;\r
  content: React.ReactNode;\r
}>`},description:""},activeTab:{required:!0,tsType:{name:"number"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},disabledTabIndexes:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const I={title:"Tabs",component:l,tags:["autodocs"]},m=[{title:"Tab1",content:"content of tab1"},{title:"Tab2",content:"content of tab2"},{title:"Tab3",content:"content of tab3"}],b=d=>{const[n,e]=q.useState(0);return t.jsx(l,{...d,activeTab:n,onTabChange:e})},o={args:{tabsData:m},render:b},i={args:{tabsData:m,disabledTabIndexes:[1]},render:b},c={args:{tabsData:m,orientation:"vertical"},render:b};var p,u,T;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tabsData
  },
  render: Template
} as {
  args: TabProps;
  render: () => JSX.Element;
}`,...(T=(u=o.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var g,x,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tabsData,
    disabledTabIndexes: [1]
  },
  render: Template
} as {
  args: TabProps;
  render: () => JSX.Element;
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,f,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tabsData,
    orientation: "vertical"
  },
  render: Template
} as {
  args: TabProps;
  render: () => JSX.Element;
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _=["Basic","WithDisabledTab","Vertical"];export{o as Basic,c as Vertical,i as WithDisabledTab,_ as __namedExportsOrder,I as default};
