"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65829],{23985:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"@podman-desktop/namespaces/containerEngine/functions/listInfos","title":"Function: listInfos()","description":"listInfos(options?): Promise\\\\","source":"@site/api/@podman-desktop/namespaces/containerEngine/functions/listInfos.md","sourceDirName":"@podman-desktop/namespaces/containerEngine/functions","slug":"/@podman-desktop/namespaces/containerEngine/functions/listInfos","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listInfos","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"listImages","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listImages"},"next":{"title":"listNetworks","permalink":"/api/@podman-desktop/namespaces/containerEngine/functions/listNetworks"}}');var o=s(62540),t=s(43023);const r={},a="Function: listInfos()",c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"options?",id:"options",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"function-listinfos",children:"Function: listInfos()"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"listInfos"}),"(",(0,o.jsx)(e.code,{children:"options"}),"?): ",(0,o.jsx)(e.code,{children:"Promise"}),"<",(0,o.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,o.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Defined in: ",(0,o.jsx)(e.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/b98fdc67815b47d824d2552008b5c6af4a5782ce/packages/extension-api/src/extension-api.d.ts#L3941",children:"packages/extension-api/src/extension-api.d.ts:3941"})]}),"\n",(0,o.jsx)(e.p,{children:"List the engines information."}),"\n",(0,o.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(e.h3,{id:"options",children:"options?"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"/api/interfaces/ListInfosOptions",children:(0,o.jsx)(e.code,{children:"ListInfosOptions"})})}),"\n",(0,o.jsx)(e.p,{children:"optional options for listing information"}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Promise"}),"<",(0,o.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:(0,o.jsx)(e.code,{children:"ContainerEngineInfo"})}),"[]>"]}),"\n",(0,o.jsx)(e.p,{children:"A promise resolving to an array of engine information."}),"\n",(0,o.jsx)(e.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(e.p,{children:["only returns the ",(0,o.jsx)(e.a,{href:"/api/interfaces/ContainerEngineInfo",children:"ContainerEngineInfo"})," of ",(0,o.jsx)(e.strong,{children:"running"})," connections"]}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"// Example 1: List all engine information when no specific provider is provided.\nconst infos = await listInfos();\nconsole.log(infos);\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"// Example 2: List information for a specific provider.\nconst provider = provider.getContainerConnections().find(connection => connection.connection.status() === 'started');\nconst info = await listInfos({ provider: provider.connection });\nconsole.log(info);\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},43023:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>a});var i=s(63696);const o={},t=i.createContext(o);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);