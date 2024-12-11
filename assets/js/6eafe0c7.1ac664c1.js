"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16256],{10974:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"interfaces/EndpointSettings","title":"Interface: EndpointSettings","description":"Properties","source":"@site/api/interfaces/EndpointSettings.md","sourceDirName":"interfaces","slug":"/interfaces/EndpointSettings","permalink":"/api/interfaces/EndpointSettings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"EndpointIPAMConfig","permalink":"/api/interfaces/EndpointIPAMConfig"},"next":{"title":"Event","permalink":"/api/interfaces/Event"}}');var s=i(62540),r=i(43023);const t={},a="Interface: EndpointSettings",o={},l=[{value:"Properties",id:"properties",level:2},{value:"Aliases?",id:"aliases",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"DNSNames?",id:"dnsnames",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"DriverOpts?",id:"driveropts",level:3},{value:"Index Signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"EndpointID?",id:"endpointid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Gateway?",id:"gateway",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"GlobalIPv6Address?",id:"globalipv6address",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"GlobalIPv6PrefixLen?",id:"globalipv6prefixlen",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"IPAddress?",id:"ipaddress",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"IPAMConfig?",id:"ipamconfig",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"IPPrefixLen?",id:"ipprefixlen",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"IPv6Gateway?",id:"ipv6gateway",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"Links?",id:"links",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"MacAddress?",id:"macaddress",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"NetworkID?",id:"networkid",level:3},{value:"Defined in",id:"defined-in-13",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-endpointsettings",children:"Interface: EndpointSettings"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"aliases",children:"Aliases?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"Aliases"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3027",children:"packages/extension-api/src/extension-api.d.ts:3027"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"dnsnames",children:"DNSNames?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"DNSNames"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"List of all DNS names an endpoint has on a specific network. This list is based on the container name, network\naliases, container short ID, and hostname."}),"\n",(0,s.jsxs)(n.p,{children:["These DNS names are non-fully qualified but can contain several dots. You can get fully qualified DNS names by\nappending ",(0,s.jsx)(n.code,{children:".<network-name>"}),". For instance, if container name is ",(0,s.jsx)(n.code,{children:"my.ctr"})," and the network is named\n",(0,s.jsx)(n.code,{children:"testnet"}),", ",(0,s.jsx)(n.code,{children:"DNSNames"})," will contain ",(0,s.jsx)(n.code,{children:"my.ctr"})," and the FQDN will be ",(0,s.jsx)(n.code,{children:"my.ctr.testnet"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3082",children:"packages/extension-api/src/extension-api.d.ts:3082"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"driveropts",children:"DriverOpts?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"DriverOpts"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"DriverOpts is a mapping of driver options and values. These options are passed directly to the driver and are driver specific."}),"\n",(0,s.jsx)(n.h4,{id:"index-signature",children:"Index Signature"}),"\n",(0,s.jsxs)(n.p,{children:["[",(0,s.jsx)(n.code,{children:"key"}),": ",(0,s.jsx)(n.code,{children:"string"}),"]: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3072",children:"packages/extension-api/src/extension-api.d.ts:3072"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"endpointid",children:"EndpointID?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"EndpointID"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Unique ID for the service endpoint in a Sandbox."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3037",children:"packages/extension-api/src/extension-api.d.ts:3037"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"gateway",children:"Gateway?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"Gateway"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Gateway address for this network."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3042",children:"packages/extension-api/src/extension-api.d.ts:3042"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"globalipv6address",children:"GlobalIPv6Address?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"GlobalIPv6Address"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Global IPv6 address."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3062",children:"packages/extension-api/src/extension-api.d.ts:3062"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"globalipv6prefixlen",children:"GlobalIPv6PrefixLen?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"GlobalIPv6PrefixLen"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Mask length of the global IPv6 address."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3067",children:"packages/extension-api/src/extension-api.d.ts:3067"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ipaddress",children:"IPAddress?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"IPAddress"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"IPv4 address."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3047",children:"packages/extension-api/src/extension-api.d.ts:3047"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ipamconfig",children:"IPAMConfig?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"IPAMConfig"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/EndpointIPAMConfig",children:(0,s.jsx)(n.code,{children:"EndpointIPAMConfig"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"EndpointIPAMConfig represents an endpoint's IPAM configuration."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3018",children:"packages/extension-api/src/extension-api.d.ts:3018"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ipprefixlen",children:"IPPrefixLen?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"IPPrefixLen"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Mask length of the IPv4 address."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3052",children:"packages/extension-api/src/extension-api.d.ts:3052"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ipv6gateway",children:"IPv6Gateway?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"IPv6Gateway"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"IPv6 gateway address."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3057",children:"packages/extension-api/src/extension-api.d.ts:3057"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"Links"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3020",children:"packages/extension-api/src/extension-api.d.ts:3020"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"macaddress",children:"MacAddress?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"MacAddress"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"MAC address for the endpoint on this network. The network driver might ignore this parameter."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3025",children:"packages/extension-api/src/extension-api.d.ts:3025"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"networkid",children:"NetworkID?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"NetworkID"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Unique ID of the network."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ekidneyrh/podman-desktop/blob/fbba37b4369da57ddd6ffe8794ab180557099ef0/packages/extension-api/src/extension-api.d.ts#L3032",children:"packages/extension-api/src/extension-api.d.ts:3032"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var d=i(63696);const s={},r=d.createContext(s);function t(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);