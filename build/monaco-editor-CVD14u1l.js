import{l as c,__tla as _}from"./assets/dashboard-CH0T7-Rh.js";import{m as l,__tla as f}from"./monaco-editor-00CT0F_7.min.js";import"./_plugin-vue_export-helper-C8Ev41l5.min.js";import"./runtime-core.esm-bundler-BgTOpYpR.min.js";import"./isObject-CRxghtyK.min.js";import"./xmark-K-HL8reD.min.js";import"./virtual-D4KiWvGj.js";import"./index-BJHYLQGk.min.js";import"./set-B6rMqs6z.min.js";import{__tla as u}from"./module-D_6o7GTg.js";import"./index.browser-CJrp5d7n.min.js";import"./_initCloneObject-Cw8oFim1.min.js";import"./build-Bp4LfGl5.js";import"./index-CKpsDP-T.min.js";import{__tla as y}from"./index-MUO2ju4c.min.js";import{__tla as h}from"./oxide_parser_wasm-2P4Lcsn7.min.js";import{__tla as U}from"./build-BhUYuKC2.js";import"./resolve-config-xoBbP6QF.js";import"./didyoumean-DsuBqNMC.min.js";import"./intellisense-D4O0Eoz-.js";Promise.all([(()=>{try{return _}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return U}catch{}})()]).then(async()=>{const a=""+new URL("assets/editor.worker-DtMH2fvJ.min.js",import.meta.url).href,m=""+new URL("assets/css.worker-BY5GoDrs.min.js",import.meta.url).href,s=""+new URL("assets/ts.worker-kEcVoscU.min.js",import.meta.url).href;function i(r,t){const n=`import ${JSON.stringify(new URL(r,import.meta.url))}`,p=new Blob([n],{type:"application/javascript"}),o=URL.createObjectURL(p),e=new Worker(o,{type:"module",name:t==null?void 0:t.name});return e.addEventListener("error",w=>{URL.revokeObjectURL(o)}),e}self.MonacoEnvironment={async getWorker(r,t){return i(t==="css"||t==="scss"||t==="less"?m:t==="javascript"||t==="typescript"?s:a)}},c.config({monaco:l})});
