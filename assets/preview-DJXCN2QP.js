import{ah as i,ai as p,aj as A}from"./chunk-HLWAVYOI-DUTb1G6O.js";import{g as C}from"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-ClL0Fqnp.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";var _="DARK_MODE",D=function t(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var n,a,o;if(Array.isArray(r)){if(n=r.length,n!=e.length)return!1;for(a=n;a--!==0;)if(!t(r[a],e[a]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if(o=Object.keys(r),n=o.length,n!==Object.keys(e).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[a]))return!1;for(a=n;a--!==0;){var u=o[a];if(!t(r[u],e[u]))return!1}return!0}return r!==r&&e!==e};const b=C(D);function l(t){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},l(t)}var y;function E(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function w(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?E(Object(e),!0).forEach(function(n){T(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function T(t,r,e){return r=M(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function M(t){var r=I(t,"string");return l(r)==="symbol"?r:String(r)}function I(t,r){if(l(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r||"default");if(l(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function f(t){return N(t)||K(t)||x(t)||R()}function R(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,r){if(t){if(typeof t=="string")return m(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(t,r)}}function K(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function N(t){if(Array.isArray(t))return m(t)}function m(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}const{global:B}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_CORE_EVENTS__;var k=B,L=k.document,c=k.window,j="sb-addon-themes-3";(y=c.matchMedia)===null||y===void 0||y.call(c,"(prefers-color-scheme: dark)");var g={classTarget:"body",dark:i.dark,darkClass:["dark"],light:i.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},P=function(r){c.localStorage.setItem(j,JSON.stringify(r))},q=function(r,e){var n=e.current,a=e.darkClass,o=a===void 0?g.darkClass:a,u=e.lightClass,d=u===void 0?g.lightClass:u;if(n==="dark"){var v,O;(v=r.classList).remove.apply(v,f(s(d))),(O=r.classList).add.apply(O,f(s(o)))}else{var h,S;(h=r.classList).remove.apply(h,f(s(o))),(S=r.classList).add.apply(S,f(s(d)))}},s=function(r){var e=[];return e.concat(r).map(function(n){return n})},U=function(r){var e=L.querySelector(r.classTarget);e&&q(e,r)},Y=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.localStorage.getItem(j);if(typeof e=="string"){var n=JSON.parse(e);return r&&(r.dark&&!b(n.dark,r.dark)&&(n.dark=r.dark,P(n)),r.light&&!b(n.light,r.light)&&(n.light=r.light,P(n))),n}return w(w({},g),r)};U(Y());__STORYBOOK_MODULE_PREVIEW_API__;const z={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},darkMode:{current:"light",darkClass:"dark",lightClass:"light",dark:{...i.dark,appPreviewBg:"transparent"},light:{...i.light,appPreviewBg:"transparent"},stylePreview:!0},docs:{container:t=>{const[r,e]=p.useState(!0);p.useEffect(()=>(t.context.channel.on(_,e),()=>t.context.channel.removeListener(_,e)),[t.context.channel]);const n={...t};return n.theme=r?i.dark:i.light,p.createElement(A,n)}}}};export{z as default};
