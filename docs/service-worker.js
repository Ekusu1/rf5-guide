if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let d={};const t=e=>i(e,o),u={module:{uri:o},exports:d,require:t};r[o]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(n(...e),d)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rf5-guide"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/rf5-guide/css/app.a7783ccd.css",revision:null},{url:"/rf5-guide/index.html",revision:"5ef6bd7c6e7bd8467cefd9cd73a6244d"},{url:"/rf5-guide/js/app.c220b946.js",revision:null},{url:"/rf5-guide/js/chunk-vendors.9de75153.js",revision:null},{url:"/rf5-guide/manifest.json",revision:"92d45d7139ac5ea17e7e707f8da5345b"},{url:"/rf5-guide/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
