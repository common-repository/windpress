import{d as u,e as f,__tla as y}from"../../../../../module-D_6o7GTg.js";import{b as p}from"../../../../../build-Bp4LfGl5.js";import{__tla as w}from"../../../../../monaco-editor-00CT0F_7.min.js";import"../../../../../index-CKpsDP-T.min.js";import{__tla as _}from"../../../../../index-MUO2ju4c.min.js";Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return w}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let s,o=new Set;const n=document.querySelector('script[type="text/tailwindcss"]');n&&(l(),new MutationObserver(async()=>{await r()}).observe(n,{characterData:!0,subtree:!0})),new MutationObserver(async e=>{const t=["STYLE","SCRIPT"];let a=!0;for(let c of e){const i=c.target;i.nodeType===1&&t.includes(i.tagName)&&(a=!1);for(let m of c.addedNodes){const d=m;d.nodeType===1&&t.includes(d.tagName)&&(a=!1)}}a&&await r()}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"],subtree:!0,childList:!0});async function r(){const e=new Set;if(document.querySelectorAll("[class]").forEach(t=>{t.classList.forEach(a=>e.add(a))}),document.body&&e.size>0){if((!s||!s.isConnected)&&(s=document.createElement("style"),document.head.append(s)),o.size===e.size){let t=!1;for(let a of e)if(!o.has(a)){t=!0;break}if(!t)return}o=e,s.textContent=await p({candidates:Array.from(e),entrypoint:"/main.css",volume:u(n.textContent)})}}await r();function l(){new BroadcastChannel("windpress").addEventListener("message",async e=>{const t=e.data;t.source==="windpress/dashboard"&&t.target==="windpress/observer"&&t.task==="windpress.code-editor.saved"&&(n.textContent=f(JSON.stringify(t.payload.volume)),await r())})}});
