import{L as o,M as c,N as l}from"./props-c-7Hur7Y.js";let n=!1;function g(s,t,r,a){var i=s.__attributes??(s.__attributes={});i[t]!==(i[t]=r)&&(t==="loading"&&(s[o]=r),r==null?s.removeAttribute(t):typeof r!="string"&&p(s).includes(t)?s[t]=r:s.setAttribute(t,r))}var _=new Map;function p(s){var t=_.get(s.nodeName);if(t)return t;_.set(s.nodeName,t=[]);for(var r,a=c(s),i=Element.prototype;i!==a;){r=l(a);for(var e in r)r[e].set&&t.push(e);a=c(a)}return t}function v(s,t){var r=s.__className,a=f(t);(r!==a||n)&&(a===""?s.removeAttribute("class"):s.setAttribute("class",a),s.__className=a)}function N(s,t){var r=s.__className,a=f(t);(r!==a||n)&&(t==null?s.removeAttribute("class"):s.className=a,s.__className=a)}function f(s){return s??""}function A(s,t,r){if(r){if(s.classList.contains(t))return;s.classList.add(t)}else{if(!s.classList.contains(t))return;s.classList.remove(t)}}export{v as a,N as b,n as h,g as s,A as t};
