(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43320,69983],{44656:(e,t,o)=>{"use strict";o.d(t,{A:()=>X});var l=o(63696),s=o(92575),i=o(11750),a=o(27412),r=o(20699),n=o(6590),c=o(33699);const d="collapseSidebarButton_oTwn",b="collapseSidebarButtonIcon_pMEX";var p=o(62540);function y(e){let{onClick:t}=e;return(0,p.jsx)("button",{type:"button",title:(0,n.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,n.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",d),onClick:t,children:(0,p.jsx)(c.A,{className:b})})}var u=o(53237),k=o(43043),m=o(90766),h=o(22454),f=o(15198);const g=Symbol("EmptyContext"),x=l.createContext(g);function v(e){let{children:t}=e;const[o,s]=(0,l.useState)(null),i=(0,l.useMemo)((()=>({expandedItem:o,setExpandedItem:s})),[o]);return(0,p.jsx)(x.Provider,{value:i,children:t})}var C=o(32432),j=o(34379),_=o(45968),A=o(86681);function S(e){let{collapsed:t,categoryLabel:o,onClick:l}=e;return(0,p.jsx)("button",{"aria-label":t?(0,n.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:o}):(0,n.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:o}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:l})}function D(e){let{item:t,onItemClick:o,activePath:s,level:r,index:n,...c}=e;const{items:d,label:b,collapsible:y,className:k,href:m}=t,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,a.p)(),D=function(e){const t=(0,A.A)();return(0,l.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,h.Nr)(e):void 0),[e,t])}(t),w=(0,h.w8)(t,s),I=(0,j.ys)(m,s),{collapsed:B,setCollapsed:L}=(0,C.u)({initialState:()=>!!y&&(!w&&t.collapsed)}),{expandedItem:N,setExpandedItem:E}=function(){const e=(0,l.useContext)(x);if(e===g)throw new f.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!B),E(e?null:n),L(e)};return function(e){let{isActive:t,collapsed:o,updateCollapsed:s}=e;const i=(0,f.ZC)(t);(0,l.useEffect)((()=>{t&&!i&&o&&s(!1)}),[t,i,o,s])}({isActive:w,collapsed:B,updateCollapsed:T}),(0,l.useEffect)((()=>{y&&null!=N&&N!==n&&v&&L(!0)}),[y,N,n,L,v]),(0,p.jsxs)("li",{className:(0,i.A)(u.G.docs.docSidebarItemCategory,u.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":B},k),children:[(0,p.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":I}),children:[(0,p.jsx)(_.A,{className:(0,i.A)("menu__link",{"menu__link--sublist":y,"menu__link--sublist-caret":!m&&y,"menu__link--active":w}),onClick:y?e=>{o?.(t),m?T(!1):(e.preventDefault(),T())}:()=>{o?.(t)},"aria-current":I?"page":void 0,role:y&&!m?"button":void 0,"aria-expanded":y&&!m?!B:void 0,href:y?D??"#":D,...c,children:b}),m&&y&&(0,p.jsx)(S,{collapsed:B,categoryLabel:b,onClick:e=>{e.preventDefault(),T()}})]}),(0,p.jsx)(C.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:B,children:(0,p.jsx)(M,{items:d,tabIndex:B?-1:0,onItemClick:o,activePath:s,level:r+1})})]})}var w=o(52616),I=o(79016);const B="menuExternalLink_BiEj";function L(e){let{item:t,onItemClick:o,activePath:l,level:s,index:a,...r}=e;const{href:n,label:c,className:d,autoAddBaseUrl:b}=t,y=(0,h.w8)(t,l),k=(0,w.A)(n);return(0,p.jsx)("li",{className:(0,i.A)(u.G.docs.docSidebarItemLink,u.G.docs.docSidebarItemLinkLevel(s),"menu__list-item",d),children:(0,p.jsxs)(_.A,{className:(0,i.A)("menu__link",!k&&B,{"menu__link--active":y}),autoAddBaseUrl:b,"aria-current":y?"page":void 0,to:n,...k&&{onClick:o?()=>o(t):void 0},...r,children:[c,!k&&(0,p.jsx)(I.A,{})]})},c)}const N="menuHtmlItem_OniL";function E(e){let{item:t,level:o,index:l}=e;const{value:s,defaultStyle:a,className:r}=t;return(0,p.jsx)("li",{className:(0,i.A)(u.G.docs.docSidebarItemLink,u.G.docs.docSidebarItemLinkLevel(o),a&&[N,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:s}},l)}function T(e){let{item:t,...o}=e;switch(t.type){case"category":return(0,p.jsx)(D,{item:t,...o});case"html":return(0,p.jsx)(E,{item:t,...o});default:return(0,p.jsx)(L,{item:t,...o})}}function R(e){let{items:t,...o}=e;const l=(0,h.Y)(t,o.activePath);return(0,p.jsx)(v,{children:l.map(((e,t)=>(0,p.jsx)(T,{item:e,index:t,...o},t)))})}const M=(0,l.memo)(R),P="menu_jmj1",G="menuWithAnnouncementBar_YufC";function H(e){let{path:t,sidebar:o,className:s}=e;const a=function(){const{isActive:e}=(0,k.M)(),[t,o]=(0,l.useState)(e);return(0,m.Mq)((t=>{let{scrollY:l}=t;e&&o(0===l)}),[e]),e&&t}();return(0,p.jsx)("nav",{"aria-label":(0,n.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",P,a&&G,s),children:(0,p.jsx)("ul",{className:(0,i.A)(u.G.docs.docSidebarMenu,"menu__list"),children:(0,p.jsx)(M,{items:o,activePath:t,level:1})})})}const q="sidebar_CUen",O="sidebarWithHideableNavbar_w4KB",U="sidebarHidden_k6VE",z="sidebarLogo_CYvI";function W(e){let{path:t,sidebar:o,onCollapse:l,isHidden:s}=e;const{navbar:{hideOnScroll:n},docs:{sidebar:{hideable:c}}}=(0,a.p)();return(0,p.jsxs)("div",{className:(0,i.A)(q,n&&O,s&&U),children:[n&&(0,p.jsx)(r.A,{tabIndex:-1,className:z}),(0,p.jsx)(H,{path:t,sidebar:o}),c&&(0,p.jsx)(y,{onClick:l})]})}const V=l.memo(W);var Y=o(65454),F=o(59539);const J=e=>{let{sidebar:t,path:o}=e;const l=(0,F.M)();return(0,p.jsx)("ul",{className:(0,i.A)(u.G.docs.docSidebarMenu,"menu__list"),children:(0,p.jsx)(M,{items:t,activePath:o,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1})})};function K(e){return(0,p.jsx)(Y.GX,{component:J,props:e})}const $=l.memo(K);function X(e){const t=(0,s.l)(),o="desktop"===t||"ssr"===t,l="mobile"===t;return(0,p.jsxs)(p.Fragment,{children:[o&&(0,p.jsx)(V,{...e}),l&&(0,p.jsx)($,{...e})]})}},33699:(e,t,o)=>{"use strict";o.d(t,{A:()=>s});o(63696);var l=o(62540);function s(e){return(0,l.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,l.jsxs)("g",{fill:"#7a7a7a",children:[(0,l.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,l.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}},55938:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});o(63696);var l=o(62540);function s(){return(0,l.jsx)("div",{className:"justify-center items-center grow flex w-full",children:(0,l.jsx)("span",{children:"No component selected"})})}},91673:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>m});var l=o(49519),s=o(72363),i=o(53237),a=o(55938),r=o(44656),n=o(6072),c=o(11750),d=o(63696),b=o(84224),p=o.n(b);const y={docSidebarContainer:"docSidebarContainer_JCC2",docSidebarContainerHidden:"docSidebarContainerHidden_PAws",sidebarViewport:"sidebarViewport_KdtS",storybookRoot:"storybookRoot_nsIy"};var u=o(62540);function k(){const e=(0,d.useRef)(null),{colorMode:t}=(0,s.G)(),{search:o}=(0,l.zy)(),[n,b]=d.useState(void 0);(0,d.useEffect)((()=>{const e=new URLSearchParams(o).get("id");e&&b(e)}),[o]);const k=()=>{e?.current?.contentWindow?.postMessage(JSON.stringify({key:"storybook-channel",event:{type:"DARK_MODE",args:["dark"===t]}}))};return(0,d.useEffect)((()=>{k()}),[t]),(0,u.jsxs)("div",{className:(0,c.A)(y.storybookRoot),children:[(0,u.jsx)("aside",{className:(0,c.A)(i.G.docs.docSidebarContainer,y.docSidebarContainer),children:(0,u.jsx)(r.A,{isHidden:!1,onCollapse:()=>{},sidebar:p(),path:`/storybook?id=${n}`})}),n?(0,u.jsx)("iframe",{ref:e,onLoad:t=>{!function(e){const t=e.contentDocument?.body;if(!t)return;new ResizeObserver((o=>{window.requestAnimationFrame((()=>{Array.isArray(o)&&o.length&&(e.style.height=`${t.scrollHeight}px`)}))})).observe(t)}(t.currentTarget),window.addEventListener("message",(t=>{if(t.source!==e?.current?.contentWindow)return;const o=JSON.parse(t.data);"key"in o&&"storybook-channel"===o.key&&"event"in o&&"object"==typeof o.event&&"docsRendered"===o.event.type&&k()}))},src:`/storybook-iframe?id=${n}`,style:{width:"100%",height:"100%"}}):(0,u.jsx)(a.default,{})]})}function m(){return(0,u.jsx)(n.A,{title:"Storybook",children:(0,u.jsx)(k,{})})}},84224:e=>{e.exports=[{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=checkbox--docs"},{type:"link",label:"Basic",href:"/storybook?id=checkbox--basic"},{type:"link",label:"Checked",href:"/storybook?id=checkbox--checked"},{type:"link",label:"Indeterminate",href:"/storybook?id=checkbox--indeterminate"},{type:"link",label:"Disabled",href:"/storybook?id=checkbox--disabled"},{type:"link",label:"Disabled with custom tooltip",href:"/storybook?id=checkbox--disabled-with-custom-tooltip"},{type:"link",label:"Required",href:"/storybook?id=checkbox--required"}],collapsed:!1,collapsible:!0,label:"Checkbox"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=dropdown--docs"},{type:"link",label:"Basic",href:"/storybook?id=dropdown--basic"},{type:"link",label:"Disabled",href:"/storybook?id=dropdown--disabled"}],collapsed:!1,collapsible:!0,label:"Dropdown"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=dropdownmenu--docs"},{type:"link",label:"Basic",href:"/storybook?id=dropdownmenu--basic"}],collapsed:!1,collapsible:!0,label:"DropdownMenu"},{type:"category",items:[{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=alert-errormessage--docs"},{type:"link",label:"Basic",href:"/storybook?id=alert-errormessage--basic"},{type:"link",label:"Icon only",href:"/storybook?id=alert-errormessage--icon-only"},{type:"link",label:"Icon only and wrap",href:"/storybook?id=alert-errormessage--icon-only-and-wrap"}],collapsed:!1,collapsible:!0,label:"ErrorMessage"}],collapsed:!1,collapsible:!0,label:"Alert"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=link--docs"},{type:"link",label:"Basic",href:"/storybook?id=link--basic"},{type:"link",label:"Custom icon",href:"/storybook?id=link--custom-icon"}],collapsed:!1,collapsible:!0,label:"Link"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=statusicon--docs"},{type:"link",label:"Starting",href:"/storybook?id=statusicon--starting"},{type:"link",label:"Running",href:"/storybook?id=statusicon--running"},{type:"link",label:"Used",href:"/storybook?id=statusicon--used"},{type:"link",label:"Degraded",href:"/storybook?id=statusicon--degraded"},{type:"link",label:"Deleting",href:"/storybook?id=statusicon--deleting"},{type:"link",label:"Created",href:"/storybook?id=statusicon--created"}],collapsed:!1,collapsible:!0,label:"StatusIcon"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=tab--docs"},{type:"link",label:"Basic",href:"/storybook?id=tab--basic"},{type:"link",label:"Selected",href:"/storybook?id=tab--selected"}],collapsed:!1,collapsible:!0,label:"Tab"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=table--docs"},{type:"link",label:"Basic",href:"/storybook?id=table--basic"}],collapsed:!1,collapsible:!0,label:"Table"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=tooltip--docs"},{type:"link",label:"Basic",href:"/storybook?id=tooltip--basic"},{type:"link",label:"Top",href:"/storybook?id=tooltip--top"},{type:"link",label:"Top Left",href:"/storybook?id=tooltip--top-left"},{type:"link",label:"Top Right",href:"/storybook?id=tooltip--top-right"},{type:"link",label:"Right",href:"/storybook?id=tooltip--right"},{type:"link",label:"Bottom",href:"/storybook?id=tooltip--bottom"},{type:"link",label:"Bottom Left",href:"/storybook?id=tooltip--bottom-left"},{type:"link",label:"Bottom Right",href:"/storybook?id=tooltip--bottom-right"},{type:"link",label:"Left",href:"/storybook?id=tooltip--left"}],collapsed:!1,collapsible:!0,label:"Tooltip"},{type:"category",items:[{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=button-button--docs"},{type:"link",label:"Primary",href:"/storybook?id=button-button--primary"},{type:"link",label:"Secondary",href:"/storybook?id=button-button--secondary"},{type:"link",label:"Danger",href:"/storybook?id=button-button--danger"},{type:"link",label:"With icon",href:"/storybook?id=button-button--with-icon"},{type:"link",label:"Disabled",href:"/storybook?id=button-button--disabled"},{type:"link",label:"Loading",href:"/storybook?id=button-button--loading"}],collapsed:!1,collapsible:!0,label:"Button"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=button-closebutton--docs"},{type:"link",label:"Basic",href:"/storybook?id=button-closebutton--basic"}],collapsed:!1,collapsible:!0,label:"CloseButton"}],collapsed:!1,collapsible:!0,label:"Button"},{type:"category",items:[{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=icon-containericon--docs"},{type:"link",label:"Basic",href:"/storybook?id=icon-containericon--basic"}],collapsed:!1,collapsible:!0,label:"ContainerIcon"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=icon-staricon--docs"},{type:"link",label:"Basic",href:"/storybook?id=icon-staricon--basic"}],collapsed:!1,collapsible:!0,label:"StarIcon"}],collapsed:!1,collapsible:!0,label:"Icon"},{type:"category",items:[{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=input-input--docs"},{type:"link",label:"Basic",href:"/storybook?id=input-input--basic"},{type:"link",label:"Readonly",href:"/storybook?id=input-input--readonly"},{type:"link",label:"Required",href:"/storybook?id=input-input--required"},{type:"link",label:"Clearable",href:"/storybook?id=input-input--clearable"},{type:"link",label:"Disabled",href:"/storybook?id=input-input--disabled"},{type:"link",label:"Error",href:"/storybook?id=input-input--error"}],collapsed:!1,collapsible:!0,label:"Input"}],collapsed:!1,collapsible:!0,label:"Input"},{type:"category",items:[{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=progress-linearprogress--docs"},{type:"link",label:"Basic",href:"/storybook?id=progress-linearprogress--basic"}],collapsed:!1,collapsible:!0,label:"LinearProgress"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=progress-spinner--docs"},{type:"link",label:"Basic",href:"/storybook?id=progress-spinner--basic"}],collapsed:!1,collapsible:!0,label:"Spinner"}],collapsed:!1,collapsible:!0,label:"Progress"},{type:"category",items:[{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=screen-emptyscreen--docs"},{type:"link",label:"Basic",href:"/storybook?id=screen-emptyscreen--basic"},{type:"link",label:"Custom title & message",href:"/storybook?id=screen-emptyscreen--custom-title-message"},{type:"link",label:"Custom title & message & details",href:"/storybook?id=screen-emptyscreen--custom-title-message-details"},{type:"link",label:"Custom command",href:"/storybook?id=screen-emptyscreen--custom-command"}],collapsed:!1,collapsible:!0,label:"EmptyScreen"},{type:"category",items:[{type:"link",label:"Docs",href:"/storybook?id=screen-filteredemptyscreen--docs"},{type:"link",label:"Example",href:"/storybook?id=screen-filteredemptyscreen--example"}],collapsed:!1,collapsible:!0,label:"FilteredEmptyScreen"}],collapsed:!1,collapsible:!0,label:"Screen"}]}}]);