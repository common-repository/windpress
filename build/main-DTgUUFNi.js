import{i as Pe,_ as B,T as Ae,e as qe,d as We}from"./_plugin-vue_export-helper-C8Ev41l5.min.js";import{l as q}from"./logger-BTW-zIW3.js";import{L as Ve,_ as ze,G as De,I as Me}from"./xmark-K-HL8reD.min.js";import{brx as J,brxGlobalProp as R,brxIframe as Oe}from"./constant-C-1OIyW7.js";import{i as _,q as Q,z as je,A as U,x as b,u as f,v as w,C as E,D as I,B as T,H as Fe,r as $,w as W,T as Z,L,M as C,G as V,J as z,K as D,E as H,F as Be,S as Re,n as Ue}from"./runtime-core.esm-bundler-BgTOpYpR.min.js";import{d as He,__tla as Ge}from"./module-D_6o7GTg.js";import"./index-CKpsDP-T.min.js";import{__tla as Ke}from"./monaco-editor-00CT0F_7.min.js";import{__tla as Ne}from"./oxide_parser_wasm-2P4Lcsn7.min.js";import{g as Xe}from"./intellisense-D4O0Eoz-.js";import{_ as Ye}from"./chevron-right-NRNjl7DH.min.js";import{a as Je}from"./index-BJHYLQGk.min.js";import{s as Qe}from"./set-B6rMqs6z.min.js";import"./virtual-D4KiWvGj.js";import"./isObject-CRxghtyK.min.js";Promise.all([(()=>{try{return Ge}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Ne}catch{}})()]).then(async()=>{Pe({scope:"#windpressbricks-variable-app",rootSize:10});const ee={id:"windpressbricks-variable-app-header",class:"bg:$(builder-bg) cursor:grab bb:1|solid|$(builder-border-color)"},te={class:"flex gap:10 align-items:center"},oe={class:"flex align-items:center px:12 py:2"},re={class:"font:bold gap:10 text:center flex-grow:1 align-items:center cursor:default px:12 py:2"},le={__name:"PanelHeader",setup(l){const t=_("variableApp"),o=_("isOpen");function g(){const c=t.querySelector("#windpressbricks-variable-app-header");let p=$(!1),h=0,v=0;W(p,a=>{a?(document.body.style.userSelect="none",J.style.pointerEvents="none",c.style.cursor="grabbing"):(document.body.style.removeProperty("user-select"),J.style.removeProperty("pointer-events"),c.style.cursor="grab")});const s=a=>{p.value=!0;const r=c.getBoundingClientRect();h=a.clientX-r.left,v=a.clientY-r.top};c.removeEventListener("mousedown",s),c.addEventListener("mousedown",s);const d=a=>{if(!p.value)return;const r=c.getBoundingClientRect(),u=a.clientX,e=a.clientY,n=u-h,i=e-v,y=n<0?0:n>window.innerWidth-r.width?window.innerWidth-r.width:n,k=i<0?0:i>window.innerHeight-r.height?window.innerHeight-r.height:i;t.style.left=`${y}px`,t.style.top=`${k}px`};document.removeEventListener("mousemove",d),document.addEventListener("mousemove",d);const m=a=>{p.value=!1};document.removeEventListener("mouseup",m),document.addEventListener("mouseup",m)}return Q(()=>{g()}),(c,p)=>{const h=je("inline-svg"),v=ze,s=U("tooltip");return b(),f("div",ee,[w("div",te,[w("div",oe,[E(h,{src:I(Ve),class:"inline-svg fill:current font:24"},null,8,["src"])]),T((b(),f("div",re,p[1]||(p[1]=[Fe(" WindPress ")]))),[[s,{placement:"top",content:`v${c.windpressbricks._version}`}]]),T((b(),f("button",{onClick:p[0]||(p[0]=d=>o.value=!I(o)),class:"flex align-items:center py:10 px:12 bg:transparent bg:$(builder-bg-accent):hover"},[E(v,{class:"iconify fg:$(builder-color)"})])),[[s,{placement:"top",content:"Close"}]])])])}}},ne={class:"flex-grow:1"},ae={key:0,class:"expansion-panel__body"},se={__name:"ExpansionPanel",props:{namespace:{type:String,required:!0},name:{type:String,required:!0}},setup(l,{expose:t}){const o=l,g=$(null),c=Je(`windpressbricks-variable-app.ui.expansion-panels.${o.namespace}`,{[`${o.name}`]:!1},void 0,{mergeDefaults:!0});function p(v){c.value[o.name]=v===null?!c.value[o.name]:v}function h(){g.value.scrollIntoView()}return t({togglePanel:p,scrollIntoView:h}),(v,s)=>{const d=Ye;return b(),f("div",{ref_key:"sectionRef",ref:g,class:"expansion-panel mx:10 py:8 mr:4"},[w("div",{onClick:s[0]||(s[0]=m=>I(c)[l.name]=!I(c)[l.name]),class:L([{},"expansion-panel__header flex justify-content:space-between p:10 r:8 cursor:pointer"])},[w("div",ne,[Z(v.$slots,"header",{},void 0,!0)]),w("div",null,[E(d,{class:L([{"rotate(-90)":I(c)[l.name]},"iconify ~duration:300 font:18"])},null,8,["class"])])]),E(Ae,null,{default:C(()=>[I(c)[l.name]?(b(),f("div",ae,[Z(v.$slots,"default",{},void 0,!0)])):V("",!0)]),_:3})],512)}}},M=B(se,[["__scopeId","data-v-520ff9a7"]]),ie={class:"{m:10;pb:15}>div"},ce={class:"variable-section-title font:14 my:10"},ue={class:"variable-section-items flex flex:row gap:8 flex-wrap:wrap"},pe=["onClick","onMouseenter"],de={class:"font:14"},ve=1e3,G={__name:"CommonVariableItems",props:{variableItems:{type:Object,required:!0}},setup(l){const t=_("focusedInput"),o=_("recentVariableSelectionTimestamp"),g=_("tempInputValue");function c(v,s){performance.now()-o.value<ve||t.value&&(t.value.value=`var(${s})`,t.value.dispatchEvent(new Event("input")),t.value.focus())}function p(v){!t.value||g.value===null||(t.value.value=g.value,t.value.dispatchEvent(new Event("input")),t.value.focus())}function h(v,s){t.value&&(t.value.value=`var(${s})`,t.value.dispatchEvent(new Event("input")),t.value.focus(),g.value=`var(${s})`,o.value=performance.now())}return(v,s)=>{const d=U("tooltip");return b(),f("div",ie,[(b(!0),f(z,null,D(l.variableItems,(m,a)=>(b(),f("div",{key:a,class:""},[w("div",ce,H(a.replace("_","-")),1),w("div",ue,[m.length>0?(b(!0),f(z,{key:0},D(m,(r,u)=>T((b(),f("button",{key:u,onClick:e=>h(e,r.key),onMouseenter:e=>c(e,r.key),onMouseleave:p,class:"px:12 py:8 r:$(builder-border-radius) fg:$(builder-color) bg:$(builder-bg-2) bg:$(builder-bg-3):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% text:center {opacity:.5;font:semibold}>span opacity:100:hover>span"},[w("span",de,H(r.label),1)],40,pe)),[[d,{placement:"top",content:`var(${r.key}, ${r.value})`}]])),128)):V("",!0)])]))),128))])}}};function O(){var t,o;if(R.$_state.activePanel!=="element")return null;const l=(t=R.$_state)==null?void 0:t.activeElement.id;return(o=R.$_getIframeDoc())==null?void 0:o.getElementById(`brxe-${l}`)}function be({selector:l,callback:t,options:o}){const g=new MutationObserver(t),c=document.querySelector(l);if(!c){q(`Target not found for selector: ${l}`,{module:"variable-picker",type:"error"});return}const p={childList:!0,subtree:!0};g.observe(c,Object.assign(Object.assign({},p),o))}const me={class:"{m:10;pb:15}>div"},fe={class:"variable-section-title font:14 my:10"},ye={key:0,class:"variable-section-items"},ge=["onClick","onMouseenter"],he=["onClick","onMouseenter"],ke=1e3,we={__name:"ColorVariableItems",props:{variableItems:{type:Object,required:!0}},setup(l){const t=_("focusedInput"),o=_("recentColorPickerTarget"),g=_("recentVariableSelectionTimestamp"),c=_("tempInputValue");function p(a,r){var u;if(!(performance.now()-g.value<ke)){if(!t.value){const e=O();if(!e)return;const n=[{property:"color",control:"typography"},{property:"backgroundColor",control:"background"},{property:"borderColor",control:"border"}];for(const{property:i,control:y}of n)(u=o.value)!=null&&u.closest(`[data-control="${y}"]`)&&(e.style[i]=`var(${r})`);return}t.value.value=`var(${r})`,t.value.dispatchEvent(new Event("input")),t.value.focus()}}function h(a){var r;if(!t.value||c.value===null){const u=O();if(!u)return;const e=[{property:"color",control:"typography"},{property:"backgroundColor",control:"background"},{property:"borderColor",control:"border"}];for(const{property:n,control:i}of e)(r=o.value)!=null&&r.closest(`[data-control="${i}"]`)&&(u.style[n]="");return}t.value.value=c.value,t.value.dispatchEvent(new Event("input")),t.value.focus()}function v(a,r){if(a.stopPropagation(),a.preventDefault(),!t.value){const u=o.value;m(r),g.value=performance.now(),setTimeout(()=>{const e=O();if(!e)return;const n=[{property:"color",control:"typography"},{property:"backgroundColor",control:"background"},{property:"borderColor",control:"border"}];for(const{property:i,control:y}of n)u!=null&&u.closest(`[data-control="${y}"]`)&&(e.style[i]="")},5);return}t.value.value=`var(${r})`,t.value.dispatchEvent(new Event("input")),t.value.focus(),c.value=`var(${r})`,g.value=performance.now()}function s(){document.querySelectorAll(".windpressbricks-variable-app-colorpopup").forEach(a=>{a.remove()})}function d(){if(document.querySelector(".windpressbricks-variable-app-colorpopup"))return;const a=".bricks-control-popup { display: none !important; }",r=document.createElement("style");r.id="windpressbricks-variable-app-bricks-popup",r.appendChild(document.createTextNode(a)),r.classList.add("windpressbricks-variable-app-colorpopup"),document.head.appendChild(r)}async function m(a){var u,e,n,i,y;d(),document.querySelector(".bricks-control-popup .color-palette.grid")||((e=(u=o.value)==null?void 0:u.closest(".bricks-control-preview"))==null||e.click(),await new Promise(k=>setTimeout(k,25)));const r=document.querySelector(".bricks-control-popup .color-palette.grid");r?(i=(n=r.querySelector(`[data-balloon="var(${a})"]`))==null?void 0:n.parentElement)==null||i.click():q("Failed to select color. Color grid not found.",{module:"variable-picker",type:"error"}),(y=document.querySelector("body"))==null||y.click(),await new Promise(k=>setTimeout(k,2)),document.querySelector(".bricks-control-popup")?(setTimeout(()=>{var k;(k=document.querySelector("body"))==null||k.click(),setTimeout(()=>{s()},5)},5),q("Failed to close color picker. Delaying close.",{module:"variable-picker",type:"error"})):s()}return(a,r)=>{const u=U("tooltip");return b(),f("div",me,[(b(!0),f(z,null,D(l.variableItems,(e,n)=>(b(),f("div",{key:n,class:""},[w("div",fe,H(n),1),e.DEFAULT?(b(),f("div",ye,[T(w("button",{onClick:i=>v(i,e.DEFAULT.key),onMouseenter:i=>p(i,e.DEFAULT.key),onMouseleave:h,class:L([`bg:$(${e.DEFAULT.key.slice(2)})`,"w:full r:4 h:24 border:1|solid|transparent border:white:hover"])},null,42,ge),[[u,{placement:"top",content:`var(${e.DEFAULT.key}, ${e.DEFAULT.value})`}]])])):V("",!0),e.shades&&Object.keys(e.shades).length>0?(b(),f("div",{key:1,class:L([[{},Object.keys(e.shades).length>1?"rl:4>div:first-child>button rr:4>div:last-child>button":"",`grid-template-cols:repeat(${Object.keys(e.shades).length},auto)`],"variable-section-items grid r:4 overflow:hidden"])},[(b(!0),f(z,null,D(e.shades,(i,y)=>(b(),f("div",{key:y,class:"flex gap:10"},[T(w("button",{onClick:k=>v(k,i.key),onMouseenter:k=>p(k,i.key),onMouseleave:h,class:L([`bg:$(${i.key.slice(2)})`,"w:full h:24 border:1|solid|transparent border:white:hover"])},null,42,he),[[u,{placement:"top",content:`var(${i.key}, ${i.value})`}]])]))),128))],2)):V("",!0)]))),128))])}}},_e={id:"windpressbricks-variable-app-body",class:"rel w:full h:full overflow-y:scroll! bb:1|solid|$(builder-border-color)>div:not(:last-child)"},Ee={__name:"PanelBody",setup(l){const t=$({colors:{},typography:{},sizing:{}}),o=_("focusedInput"),g=_("recentColorPickerTarget");async function c(){const s=Oe.contentWindow.document.querySelector('script[type="text/tailwindcss"]'),d=He(s.textContent),m=await Xe({volume:d}),a={};m.filter(e=>e.key.startsWith("--color")).forEach(e=>{const n=e.key.slice(8),i=n.split("-");let y="";if(i.length>1){const k=i[0],Le=i.slice(1).join("-");y=`${k}.shades.'${Le}'`}else y=`${n}.DEFAULT`;Qe(a,y,e)}),t.value.colors=Object.keys(a).sort().reduce((e,n)=>(e[n]=a[n],e),{});const r={font_size:[],line_height:[],letter_spacing:[]};m.filter(e=>e.key.startsWith("--font-size-")&&!e.key.endsWith("--line-height")).forEach(e=>{const n=e.key.slice(12);r.font_size.push({key:e.key,label:n,value:e.value})}),m.filter(e=>e.key.startsWith("--line-height-")||e.key.endsWith("--line-height")).forEach(e=>{const n=e.key.startsWith("--line-height-")?e.key.slice(14):e.key.slice(2,-13);r.line_height.push({key:e.key,label:n,value:e.value})}),r.line_height.sort((e,n)=>e.label.startsWith("font-size-")&&!n.label.startsWith("font-size-")?1:!e.label.startsWith("font-size-")&&n.label.startsWith("font-size-")?-1:0),m.filter(e=>e.key.startsWith("--letter-spacing-")).forEach(e=>{const n=e.key.slice(17);r.letter_spacing.push({key:e.key,label:n,value:e.value})}),t.value.typography=r;const u={spacing:[],width:[],breakpoint:[]};m.filter(e=>e.key.startsWith("--spacing-")).forEach(e=>{const n=e.key.slice(10);u.spacing.push({key:e.key,label:n,value:e.value})}),m.filter(e=>e.key.startsWith("--width-")).forEach(e=>{const n=e.key.slice(8);u.width.push({key:e.key,label:n,value:e.value})}),m.filter(e=>e.key.startsWith("--breakpoint-")).forEach(e=>{const n=e.key.slice(13);u.breakpoint.push({key:e.key,label:n,value:e.value})}),t.value.sizing=u}const p=$(null),h=$(null),v=$(null);return W(o,s=>{var d,m,a,r;if(s){const u=((m=(d=s.closest("[data-controlkey]"))==null?void 0:d.dataset.controlkey)==null?void 0:m.toLocaleLowerCase())??"",e=["typography","font"].some(y=>u.includes(y)),n=["padding","margin","gap","width","height"].some(y=>u.includes(y)),i=(r=(a=s.parentElement)==null?void 0:a.parentElement)==null?void 0:r.classList.contains("color-input");h.value.togglePanel(!1),v.value.togglePanel(!1),p.value.togglePanel(!1),i?(p.value.togglePanel(!0),p.value.scrollIntoView()):e?(h.value.togglePanel(!0),h.value.scrollIntoView()):n&&(v.value.togglePanel(!0),v.value.scrollIntoView())}}),W(g,s=>{s&&(p.value.togglePanel(!0),p.value.scrollIntoView())}),Q(()=>{c()}),new BroadcastChannel("windpress").addEventListener("message",async s=>{const d=s.data;d.source==="windpress/autocomplete"&&d.task==="windpress.code-editor.saved.done"&&setTimeout(()=>{c()},1e3)}),(s,d)=>(b(),f("div",_e,[E(M,{namespace:"variable",name:"color",ref_key:"sectionColor",ref:p},{header:C(()=>d[0]||(d[0]=[w("span",{class:"font:semibold"},"Color",-1)])),default:C(()=>[E(we,{variableItems:t.value.colors},null,8,["variableItems"])]),_:1},512),E(M,{namespace:"variable",name:"typography",ref_key:"sectionTypography",ref:h},{header:C(()=>d[1]||(d[1]=[w("span",{class:"font:semibold"},"Typography",-1)])),default:C(()=>[E(G,{variableItems:t.value.typography},null,8,["variableItems"])]),_:1},512),E(M,{namespace:"variable",name:"spacing",ref_key:"sectionSpacing",ref:v,class:""},{header:C(()=>d[2]||(d[2]=[w("span",{class:"font:semibold"},"Sizing",-1)])),default:C(()=>[E(G,{variableItems:t.value.sizing},null,8,["variableItems"])]),_:1},512)]))}},$e=B(Ee,[["__scopeId","data-v-422f03a3"]]),xe={id:"windpressbricks-variable-app-container",class:"flex flex:column w:full h:full fg:$(builder-color) bg:$(builder-bg)"},Ce={__name:"App",setup(l){const t=_("isOpen");return(o,g)=>T((b(),f("div",xe,[E(le),(b(),Be(Re,null,{default:C(()=>[E($e)]),_:1}))],512)),[[qe,I(t)]])}},Ie=B(Ce,[["__scopeId","data-v-382f3901"]]),P=document.createElement("windpressbricks-variable-app");P.id="windpressbricks-variable-app",document.body.appendChild(P);const S=$(!1),A=$(null),K=$(null),j=$(null),Se=$(0),x=We(Ie);x.config.globalProperties.windpressbricks=window.windpressbricks,x.provide("variableApp",P),x.provide("isOpen",S),x.provide("focusedInput",A),x.provide("tempInputValue",K),x.provide("recentColorPickerTarget",j),x.provide("recentVariableSelectionTimestamp",Se),x.use(De,{container:"#windpressbricks-variable-app"}),x.component("inline-svg",Me),x.mount("#windpressbricks-variable-app");function N(l){var t;!l.shiftKey||!l.target||((t=document==null?void 0:document.getSelection())==null||t.removeAllRanges(),l.preventDefault(),l.stopPropagation(),A.value=l.target,K.value=l.target.value,S.value=!0)}function X(l){A.value=l.target}const Te=['div[data-control="number"]',{selector:'div[data-control="text"]',hasChild:["#_flexBasis","#_overflow","#_gridTemplateColumns","#_gridTemplateRows","#_gridAutoColumns","#_gridAutoRows","#_objectPosition",'[id^="raw-"]']}];function Y(){setTimeout(()=>{Te.forEach(l=>{(typeof l=="string"?[...document.querySelectorAll(l)]:[...document.querySelectorAll(l.selector)].filter(t=>l.hasChild.some(o=>t.querySelector(o)))).forEach(t=>{const o=t.querySelector("input[type='text']");(o==null?void 0:o.getAttribute("windpressbricks-variable-app"))!=="listened"&&(o==null||o.removeEventListener("click",N),o==null||o.addEventListener("click",N),o==null||o.removeEventListener("focus",X),o==null||o.addEventListener("focus",X),o==null||o.setAttribute("windpressbricks-variable-app","listened"),o==null||o.parentNode.setAttribute("data-balloon","Shift + click to open the Variable Picker"),o==null||o.parentNode.setAttribute("data-balloon-pos","bottom-right"))})}),[...document.querySelectorAll(".bricks-control-preview")].filter(l=>{var t,o;return((o=(t=l.closest(".control-inner"))==null?void 0:t.querySelector("label"))==null?void 0:o.getAttribute("for"))==="color"}).forEach(l=>{l.addEventListener("contextmenu",t=>{var o;!t.shiftKey||!t.target||(t.preventDefault(),t.stopPropagation(),(o=document==null?void 0:document.getSelection())==null||o.removeAllRanges(),A.value=null,S.value=!0,j.value=null,Ue(()=>{j.value=t.target}))})})},100)}let F=!1;be({selector:"#bricks-panel-inner",options:{subtree:!0,childList:!0},callback(){F||(F=!0,Y(),setTimeout(()=>{F=!1},100))}}),Y(),document.addEventListener("keydown",l=>{l.key==="Escape"&&S.value&&(S.value=!1)}),W(S,l=>{P.style.zIndex=l?"calc(Infinity)":"-1"}),q("Module loaded!",{module:"variable-picker"})});
