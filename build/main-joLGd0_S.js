import{i as We,_ as N,T as ze,e as qe,d as je}from"./_plugin-vue_export-helper-C8Ev41l5.min.js";import{l as Q}from"./logger-BTW-zIW3.js";import{L as Me,_ as Fe,G as Oe,I as Ve}from"./xmark-K-HL8reD.min.js";import{oxyIframe as De}from"./constant-DFowkQsk.js";import{i as I,q as Z,z as Ue,A as H,x as u,u as v,v as g,C as h,D as P,B as T,H as Be,r as x,w as R,T as ee,L as W,M as E,G as j,J as M,K as F,E as G,F as He,S as Re}from"./runtime-core.esm-bundler-BgTOpYpR.min.js";import{d as Ge,__tla as Ke}from"./module-D_6o7GTg.js";import"./index-CKpsDP-T.min.js";import{__tla as Xe}from"./monaco-editor-00CT0F_7.min.js";import{__tla as Ye}from"./oxide_parser_wasm-2P4Lcsn7.min.js";import{g as Je}from"./intellisense-D4O0Eoz-.js";import{_ as Ne}from"./chevron-right-NRNjl7DH.min.js";import{a as Qe}from"./index-BJHYLQGk.min.js";import{s as Ze}from"./set-B6rMqs6z.min.js";import"./isObject-CRxghtyK.min.js";Promise.all([(()=>{try{return Ke}catch{}})(),(()=>{try{return Xe}catch{}})(),(()=>{try{return Ye}catch{}})()]).then(async()=>{We({scope:"#windpressoxygen-variable-app"});const te={id:"windpressoxygen-variable-app-header",class:"bg:$(oxy-dark) cursor:grab bb:1|solid|gray-60"},ne={class:"flex gap:10 align-items:center fg:$(oxy-light-text)"},oe={class:"flex align-items:center px:12 py:2"},ae={class:"text-transform:none font:medium text:center flex-grow:1 gap:10 align-items:center cursor:default px:12 py:2"},ie={__name:"PanelHeader",setup(n){const t=I("variableApp"),a=I("isOpen");function m(){const o=t.querySelector("#windpressoxygen-variable-app-header");let c=x(!1),i=0,d=0;R(c,b=>{b?(document.body.style.userSelect="none",document.body.querySelector("#ct-viewport-container").style.pointerEvents="none",o.style.cursor="grabbing"):(document.body.style.removeProperty("user-select"),document.body.querySelector("#ct-viewport-container").style.removeProperty("pointer-events"),o.style.cursor="grab")});const r=b=>{c.value=!0;const k=o.getBoundingClientRect();i=b.clientX-k.left,d=b.clientY-k.top};o.removeEventListener("mousedown",r),o.addEventListener("mousedown",r);const w=b=>{if(!c.value)return;const k=o.getBoundingClientRect(),y=b.clientX,p=b.clientY,l=y-i,f=p-d,L=l<0?0:l>window.innerWidth-k.width?window.innerWidth-k.width:l,$=f<0?0:f>window.innerHeight-k.height?window.innerHeight-k.height:f;t.style.left=`${L}px`,t.style.top=`${$}px`};document.removeEventListener("mousemove",w),document.addEventListener("mousemove",w);const S=b=>{c.value=!1};document.removeEventListener("mouseup",S),document.addEventListener("mouseup",S)}return Z(()=>{m()}),(o,c)=>{const i=Ue("inline-svg"),d=Fe,r=H("tooltip");return u(),v("div",te,[g("div",ne,[g("div",oe,[h(i,{src:P(Me),class:"inline-svg fill:current font:24"},null,8,["src"])]),T((u(),v("div",ae,c[1]||(c[1]=[Be(" WindPress ")]))),[[r,{placement:"top",content:`v${o.windpressoxygen._version}`}]]),T((u(),v("button",{onClick:c[0]||(c[0]=w=>a.value=!P(a)),class:"flex align-items:center py:10 px:12 b:none fg:$(oxy-light-text) bg:transparent bg:$(oxy-hover):hover cursor:pointer"},[h(d,{class:"iconify font:16"})])),[[r,{placement:"top",content:"Close"}]])])])}}},se={class:"flex-grow:1"},le={key:0,class:"expansion-panel__body"},re={__name:"ExpansionPanel",props:{namespace:{type:String,required:!0},name:{type:String,required:!0}},setup(n,{expose:t}){const a=n,m=x(null),o=Qe(`windpressoxygen-variable-app.ui.expansion-panels.${a.namespace}`,{[`${a.name}`]:!1},void 0,{mergeDefaults:!0});function c(d){o.value[a.name]=d===null?!o.value[a.name]:d}function i(){m.value.scrollIntoView()}return t({togglePanel:c,scrollIntoView:i}),(d,r)=>{const w=Ne;return u(),v("div",{ref_key:"sectionRef",ref:m,class:"expansion-panel mx:10 py:8 mr:4"},[g("div",{onClick:r[0]||(r[0]=S=>P(o)[n.name]=!P(o)[n.name]),class:W([{},"expansion-panel__header flex justify-content:space-between p:10 r:8 cursor:pointer"])},[g("div",se,[ee(d.$slots,"header",{},void 0,!0)]),g("div",null,[h(w,{class:W([{"rotate(-90)":P(o)[n.name]},"iconify ~duration:300 font:18"])},null,8,["class"])])]),h(ze,null,{default:E(()=>[P(o)[n.name]?(u(),v("div",le,[ee(d.$slots,"default",{},void 0,!0)])):j("",!0)]),_:3})],512)}}},O=N(re,[["__scopeId","data-v-da5a74a7"]]),ce={class:"{m:10;pb:15}>div"},pe={class:"variable-section-title font:14 my:10"},ue={class:"variable-section-items flex flex:row gap:8 flex-wrap:wrap"},de=["onClick","onMouseenter"],ve={class:"font:14"},K={__name:"CommonVariableItems",props:{variableItems:{type:Object,required:!0}},setup(n){return(t,a)=>{const m=H("tooltip");return u(),v("div",ce,[(u(!0),v(M,null,F(n.variableItems,(o,c)=>(u(),v("div",{key:c,class:""},[g("div",pe,G(c.replace("_","-")),1),g("div",ue,[o.length>0?(u(!0),v(M,{key:0},F(o,(i,d)=>T((u(),v("button",{key:d,onClick:r=>t.$emit("previewChose",r,i.key),onMouseenter:r=>t.$emit("previewEnter",r,i.key),onMouseleave:a[0]||(a[0]=r=>t.$emit("previewLeave")),class:"px:12 py:8 r:8 font:medium fg:$(oxy-light-text) bg:$(oxy-mid) bg:$(oxy-hover):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% cursor:pointer {opacity:.5}>span opacity:100:hover>span"},[g("span",ve,G(i.label),1)],40,de)),[[m,{placement:"top",content:`var(${i.key}, ${i.value})`}]])),128)):j("",!0)])]))),128))])}}},me={class:"{m:10;pb:15}>div"},ye={class:"variable-section-title font:14 my:10"},fe={key:0,class:"variable-section-items"},ge=["onClick","onMouseenter"],be=["onClick","onMouseenter"],he={__name:"ColorVariableItems",props:{variableItems:{type:Object,required:!0}},setup(n){return(t,a)=>{const m=H("tooltip");return u(),v("div",me,[(u(!0),v(M,null,F(n.variableItems,(o,c)=>(u(),v("div",{key:c,class:""},[g("div",ye,G(c),1),o.DEFAULT?(u(),v("div",fe,[T(g("button",{onClick:i=>t.$emit("previewChose",i,o.DEFAULT.key),onMouseenter:i=>t.$emit("previewEnter",i,o.DEFAULT.key),onMouseleave:a[0]||(a[0]=i=>t.$emit("previewLeave")),class:W([`bg:$(${o.DEFAULT.key.slice(2)})`,"w:full r:4 h:24 border:1|solid|transparent border:white:hover cursor:pointer"])},null,42,ge),[[m,{placement:"top",content:`var(${o.DEFAULT.key}, ${o.DEFAULT.value})`}]])])):j("",!0),o.shades&&Object.keys(o.shades).length>0?(u(),v("div",{key:1,class:W([[{},Object.keys(o.shades).length>1?"rl:4>div:first-child>button rr:4>div:last-child>button":"",`grid-template-cols:repeat(${Object.keys(o.shades).length},auto)`],"variable-section-items grid r:4 overflow:hidden"])},[(u(!0),v(M,null,F(o.shades,(i,d)=>(u(),v("div",{key:d,class:"flex gap:10"},[T(g("button",{onClick:r=>t.$emit("previewChose",r,i.key),onMouseenter:r=>t.$emit("previewEnter",r,i.key),onMouseleave:a[1]||(a[1]=r=>t.$emit("previewLeave")),class:W([`bg:$(${i.key.slice(2)})`,"w:full h:24 border:1|solid|transparent border:white:hover cursor:pointer"])},null,42,be),[[m,{placement:"top",content:`var(${i.key}, ${i.value})`}]])]))),128))],2)):j("",!0)]))),128))])}}},ke={id:"windpressoxygen-variable-app-body",class:"bg:$(oxy-dark) fg:$(oxy-light-text) rel w:full h:full overflow-y:scroll! bb:1|solid|gray-60>div:not(:last-child)"},we=1e3,xe={__name:"PanelBody",setup(n){const t=x({colors:{},typography:{},sizing:{}}),a=I("focusedInput"),m=I("recentVariableSelectionTimestamp"),o=I("tempInputValue"),c=I("variableApp");async function i(){const y=De.contentWindow.document.querySelector('script[type="text/tailwindcss"]'),p=Ge(y.textContent),l=await Je({volume:p});let f=c.querySelector("style#windpressoxygen-variable-app-body-style");f||(f=document.createElement("style"),f.id="windpressoxygen-variable-app-body-style",c.appendChild(f)),f.innerHTML=`
        #windpressoxygen-variable-app-body, #oxygen-sidebar {
            ${l.map(e=>`${e.key}:${e.value};`).join("")}
        }
    `;const L={};l.filter(e=>e.key.startsWith("--color")).forEach(e=>{const s=e.key.slice(8),U=s.split("-");let B="";if(U.length>1){const Te=U[0],Ae=U.slice(1).join("-");B=`${Te}.shades.'${Ae}'`}else B=`${s}.DEFAULT`;Ze(L,B,e)}),t.value.colors=Object.keys(L).sort().reduce((e,s)=>(e[s]=L[s],e),{});const $={font_size:[],line_height:[],letter_spacing:[]};l.filter(e=>e.key.startsWith("--font-size-")&&!e.key.endsWith("--line-height")).forEach(e=>{const s=e.key.slice(12);$.font_size.push({key:e.key,label:s,value:e.value})}),l.filter(e=>e.key.startsWith("--line-height-")||e.key.endsWith("--line-height")).forEach(e=>{const s=e.key.startsWith("--line-height-")?e.key.slice(14):e.key.slice(2,-13);$.line_height.push({key:e.key,label:s,value:e.value})}),$.line_height.sort((e,s)=>e.label.startsWith("font-size-")&&!s.label.startsWith("font-size-")?1:!e.label.startsWith("font-size-")&&s.label.startsWith("font-size-")?-1:0),l.filter(e=>e.key.startsWith("--letter-spacing-")).forEach(e=>{const s=e.key.slice(17);$.letter_spacing.push({key:e.key,label:s,value:e.value})}),t.value.typography=$;const C={spacing:[],width:[],breakpoint:[]};l.filter(e=>e.key.startsWith("--spacing-")).forEach(e=>{const s=e.key.slice(10);C.spacing.push({key:e.key,label:s,value:e.value})}),l.filter(e=>e.key.startsWith("--width-")).forEach(e=>{const s=e.key.slice(8);C.width.push({key:e.key,label:s,value:e.value})}),l.filter(e=>e.key.startsWith("--breakpoint-")).forEach(e=>{const s=e.key.slice(13);C.breakpoint.push({key:e.key,label:s,value:e.value})}),t.value.sizing=C}const d=x(null),r=x(null),w=x(null);R(a,y=>{var p;if(y){const l=y,f=(p=l==null?void 0:l.parentElement)==null?void 0:p.classList.contains("oxygen-color-picker"),L=["font-size"].some(e=>{var s;return(s=l==null?void 0:l.getAttribute("data-option"))==null?void 0:s.includes(e)}),$=["padding","margin","gap","width","height"].some(e=>{var s;return(s=l==null?void 0:l.getAttribute("data-option"))==null?void 0:s.includes(e)});r.value.togglePanel(!1),w.value.togglePanel(!1),d.value.togglePanel(!1);async function C(){y.parentElement.querySelector(".oxygen-measure-box-unit-selector .oxygen-measure-box-units .oxygen-measure-box-unit:last-child").click(),setTimeout(()=>{y.focus()},100)}f?(d.value.togglePanel(!0),d.value.scrollIntoView()):L?(r.value.togglePanel(!0),r.value.scrollIntoView(),C()):$&&(w.value.togglePanel(!0),w.value.scrollIntoView(),C())}});function S(y,p){performance.now()-m.value<we||a.value&&(a.value.value=`var(${p})`,a.value.dispatchEvent(new Event("input")),a.value.focus())}function b(y){!a.value||o.value===null||(a.value.value=o.value,a.value.dispatchEvent(new Event("input")),a.value.focus())}function k(y,p){var l,f;a.value&&(a.value.value=`var(${p})`,a.value.dispatchEvent(new Event("input")),a.value.focus(),o.value=`var(${p})`,m.value=performance.now(),(f=(l=a.value)==null?void 0:l.parentElement)!=null&&f.classList.contains("oxygen-color-picker")&&a.value.parentElement.querySelector(".oxygen-color-picker-color button")&&(a.value.parentElement.querySelector(".oxygen-color-picker-color button").style.backgroundColor=`var(${p})`))}return Z(()=>{i()}),new BroadcastChannel("windpress").addEventListener("message",async y=>{const p=y.data;p.source==="windpress/autocomplete"&&p.task==="windpress.code-editor.saved.done"&&setTimeout(()=>{i()},1e3)}),(y,p)=>(u(),v("div",ke,[h(O,{namespace:"variable",name:"color",ref_key:"sectionColor",ref:d},{header:E(()=>p[0]||(p[0]=[g("span",{class:"font:semibold"},"Color",-1)])),default:E(()=>[h(he,{variableItems:t.value.colors,onPreviewEnter:S,onPreviewLeave:b,onPreviewChose:k},null,8,["variableItems"])]),_:1},512),h(O,{namespace:"variable",name:"typography",ref_key:"sectionTypography",ref:r},{header:E(()=>p[1]||(p[1]=[g("span",{class:"font:semibold"},"Typography",-1)])),default:E(()=>[h(K,{variableItems:t.value.typography,onPreviewEnter:S,onPreviewLeave:b,onPreviewChose:k},null,8,["variableItems"])]),_:1},512),h(O,{namespace:"variable",name:"spacing",ref_key:"sectionSpacing",ref:w,class:""},{header:E(()=>p[2]||(p[2]=[g("span",{class:"font:semibold"},"Sizing",-1)])),default:E(()=>[h(K,{variableItems:t.value.sizing,onPreviewEnter:S,onPreviewLeave:b,onPreviewChose:k},null,8,["variableItems"])]),_:1},512)]))}},_e=N(xe,[["__scopeId","data-v-3e2ea5f9"]]),$e={id:"windpressoxygen-variable-app-container",class:"flex flex:column w:full h:full"},Ee={__name:"App",setup(n){const t=I("isOpen");return(a,m)=>T((u(),v("div",$e,[h(ie),(u(),He(Re,null,{default:E(()=>[h(_e)]),_:1}))],512)),[[qe,P(t)]])}};function Se({selector:n,callback:t,options:a}){const m=new MutationObserver(t),o=document.querySelector(n);if(!o){Q(`Target not found for selector: ${n}`,{module:"variable-picker",type:"error"});return}const c={childList:!0,subtree:!0};m.observe(o,Object.assign(Object.assign({},c),a))}const z=document.createElement("windpressoxygen-variable-app");z.id="windpressoxygen-variable-app",document.body.appendChild(z);const A=x(!1),q=x(null),V=x(null),Le=x(0),_=je(Ee);_.config.globalProperties.windpressoxygen=window.windpressoxygen,_.provide("variableApp",z),_.provide("isOpen",A),_.provide("focusedInput",q),_.provide("tempInputValue",V),_.provide("recentVariableSelectionTimestamp",Le),_.use(Oe,{container:"#windpressoxygen-variable-app"}),_.component("inline-svg",Ve),_.mount("#windpressoxygen-variable-app");function X(n){var t;!n.shiftKey||!n.target||((t=document==null?void 0:document.getSelection())==null||t.removeAllRanges(),n.preventDefault(),n.stopPropagation(),q.value=n.target,V.value=n.target.value,A.value=!0)}function Y(n){q.value=n.target}const Ce=["iframeScope.component.options[iframeScope.component.active.id]['model']['background-image']","iframeScope.component.options[iframeScope.component.active.id]['model']['icon-size']","iframeScope.fontsFilter","postsFilter","currentlyEditingFilter","iframeScope.iconFilter.title","iframeScope.component.options[iframeScope.component.active.id]['model']['z-index']","iframeScope.component.options[iframeScope.component.active.id]['model']['src']","iframeScope.component.options[iframeScope.component.active.id]['model']['rel']","iframeScope.component.options[iframeScope.component.active.id]['model']['url']","iframeScope.component.options[iframeScope.component.active.id]['model']['testimonial_photo']","iframeScope.component.options[iframeScope.component.active.id]['model']['pricing_box_price"],Ie=["iframeScope.component.options[iframeScope.component.active.id]['model']['title-*']","iframeScope.component.options[iframeScope.component.active.id]['model']['icon-*']","duration","url","speed","time","address","zoom"].map(n=>n.replace("*']","")),Pe=`.oxygen-control input[type="text"]:not(.ct-iris-colorpicker):not([ng-model*="shortcode"])${Ce.map(n=>`:not([ng-model="${n}"])`).join("")}${Ie.map(n=>`:not([ng-model*="${n}"])`).join("")}`;function J(){setTimeout(()=>{let n=!1;[...document.querySelectorAll(Pe)].forEach(t=>{(t==null?void 0:t.getAttribute("windpressoxygen-variable-app"))!=="listened"&&(t==null||t.removeEventListener("click",X),t==null||t.addEventListener("click",X),t==null||t.removeEventListener("focus",Y),t==null||t.addEventListener("focus",Y),t==null||t.setAttribute("windpressoxygen-variable-app","listened"),n=!0)}),n&&(q.value=null,V.value=null)},100)}let D=!1;Se({selector:"#oxygen-sidebar",options:{subtree:!0,childList:!0},callback(n){D||(D=!0,J(),setTimeout(()=>{D=!1},100))}}),J(),document.addEventListener("keydown",n=>{n.key==="Escape"&&A.value&&(A.value=!1)}),R(A,n=>{z.style.zIndex=n?"calc(Infinity)":"-1"}),Q("Module loaded!",{module:"variable-picker"})});
