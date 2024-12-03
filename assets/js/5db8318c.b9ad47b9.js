"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17853],{82473:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"namespaces/commands/functions/registerCommand","title":"Function: registerCommand()","description":"registerCommand(command, callback, thisArg?): Disposable","source":"@site/api/namespaces/commands/functions/registerCommand.md","sourceDirName":"namespaces/commands/functions","slug":"/namespaces/commands/functions/registerCommand","permalink":"/api/namespaces/commands/functions/registerCommand","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"executeCommand","permalink":"/api/namespaces/commands/functions/executeCommand"},"next":{"title":"configuration","permalink":"/api/namespaces/configuration/"}}');var i=s(62540),c=s(43023);const t={},r="Function: registerCommand()",o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"command",id:"command",level:3},{value:"callback",id:"callback",level:3},{value:"thisArg?",id:"thisarg",level:3},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"function-registercommand",children:"Function: registerCommand()"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"registerCommand"}),"(",(0,i.jsx)(n.code,{children:"command"}),", ",(0,i.jsx)(n.code,{children:"callback"}),", ",(0,i.jsx)(n.code,{children:"thisArg"}),"?): ",(0,i.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Define a command, to be executed later, either by calling ",(0,i.jsx)(n.a,{href:"/api/namespaces/commands/functions/executeCommand",children:"commands.executeCommand"})," or by referencing its name in the ",(0,i.jsx)(n.code,{children:"command"})," field of a ",(0,i.jsx)(n.a,{href:"/api/interfaces/StatusBarItem",children:"StatusBarItem"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For examples, see ",(0,i.jsx)(n.a,{href:"/api/namespaces/commands/",children:"commands"})," and ",(0,i.jsx)(n.a,{href:"/api/namespaces/window/functions/createStatusBarItem",children:"window.createStatusBarItem"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.h3,{id:"command",children:"command"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsx)(n.p,{children:"the name of the command. The name must be unique over all extensions. It is recommended to prefix this name with the name of the extension, to avoid conflicts with commands from other extensions."}),"\n",(0,i.jsx)(n.h3,{id:"callback",children:"callback"}),"\n",(0,i.jsxs)(n.p,{children:["(...",(0,i.jsx)(n.code,{children:"args"}),") => ",(0,i.jsx)(n.code,{children:"any"})]}),"\n",(0,i.jsx)(n.p,{children:"the command to execute"}),"\n",(0,i.jsx)(n.h3,{id:"thisarg",children:"thisArg?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"any"})}),"\n",(0,i.jsxs)(n.p,{children:["The value of ",(0,i.jsx)(n.code,{children:"this"})," provided for the call to callback"]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})}),"\n",(0,i.jsx)(n.p,{children:"A disposable that unregisters this command when being disposed"}),"\n",(0,i.jsx)(n.h2,{id:"throws",children:"Throws"}),"\n",(0,i.jsx)(n.p,{children:"if a command with the same name is already registered."}),"\n",(0,i.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/858ef08a7e17e3bd86f83713a9a9271c3f549f28/packages/extension-api/src/extension-api.d.ts#L739",children:"packages/extension-api/src/extension-api.d.ts:739"})})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var a=s(63696);const i={},c=a.createContext(i);function t(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);