import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as P}from"./index-DJO9vBfz.js";import{c as _}from"./index-i5X67GZP.js";import{c as o}from"./createLucideIcon-DGAn-sPI.js";import{X as B}from"./x-BoXa7sCr.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=o("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=o("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=o("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function A(N){const{message:I,type:s,description:c,showIcon:S=!0,closeable:C=!1}=N,[v,q]=P.useState(!0);if(!v)return null;const z=_("p-3 border border-solid rounded-sm",{"border-green-500 bg-opacity-10 bg-green-500":s==="success","border-red-500 bg-opacity-10 bg-red-500":s==="error","border-yellow-500 bg-opacity-10 bg-yellow-500":s==="warning","border-blue-500 bg-opacity-10 bg-blue-500":s==="info"});return e.jsxs("div",{className:z,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"text-sm flex items-center gap-2",children:[S&&e.jsxs("span",{children:[s==="info"&&e.jsx(L,{size:16,className:"text-blue-500"}),s==="success"&&e.jsx(E,{size:16,className:"text-green-500"}),s==="error"&&e.jsx(W,{size:16,className:"text-red-500"}),s==="warning"&&e.jsx(M,{size:16,className:"text-yellow-500"})]}),I]}),e.jsx("span",{children:C&&e.jsx(B,{size:18,className:"cursor-pointer",onClick:()=>q(!1)})})]}),c&&e.jsx("p",{className:"mt-2 text-xs text-gray-700",children:c})]})}A.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},closeable:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Alert",component:A,tags:["autodocs"]},r={args:{message:"This is an alert",description:"This is the description of the alert,it can be multilines",type:"info"}},a={args:{message:"This is a success alert",description:"This is the description of the success alert,it can be multilines",type:"success"}},t={args:{message:"This is a warning alert",description:"This is the description of the warning alert,it can be multilines",type:"warning"}},i={args:{message:"This is an alert without icon",description:"This is the description of the alert with icon,it can be multilines",type:"info",showIcon:!1}},n={args:{message:"This is a closeable alert",description:"This is the description of the closeable alert,it can be multilines",type:"warning",closable:!1}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: "This is an alert",
    description: "This is the description of the alert,it can be multilines",
    type: "info"
  }
} as {
  args: AlertProps;
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    message: "This is a success alert",
    description: "This is the description of the success alert,it can be multilines",
    type: "success"
  }
} as {
  args: AlertProps;
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    message: "This is a warning alert",
    description: "This is the description of the warning alert,it can be multilines",
    type: "warning"
  }
} as {
  args: AlertProps;
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,x,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    message: "This is an alert without icon",
    description: "This is the description of the alert with icon,it can be multilines",
    type: "info",
    showIcon: false
  }
} as {
  args: AlertProps;
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var T,j,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "This is a closeable alert",
    description: "This is the description of the closeable alert,it can be multilines",
    type: "warning",
    closable: false
  }
} as {
  args: AlertProps;
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const H=["Basic","Success","Warning","WithoutIcon","Closeable"];export{r as Basic,n as Closeable,a as Success,t as Warning,i as WithoutIcon,H as __namedExportsOrder,G as default};
