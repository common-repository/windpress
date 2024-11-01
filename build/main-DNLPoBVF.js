import{c as s}from"./virtual-D4KiWvGj.js";import{l as n}from"./logger-BTW-zIW3.js";import{L as o}from"./windpress-a09-ZfRP.min.js";import"./index-BJHYLQGk.min.js";import"./isObject-CRxghtyK.min.js";import"./runtime-core.esm-bundler-BgTOpYpR.min.js";import"./set-B6rMqs6z.min.js";const a=document.createRange().createContextualFragment(`
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${o}
        </span>
    </button>
`),{getVirtualRef:i}=s({},{persist:"windpress.ui.state"}),r=document.querySelector(".uniTopPanel__rightCol");r.prepend(a);const e=document.querySelector("#windpressbuilderius-settings-navbar");function d(){const t=i("window.minimized",!1).value;i("window.minimized",!1).value=!t,t?e.classList.add("active"):e.classList.remove("active")}e.addEventListener("click",t=>{d()}),n("Module loaded!",{module:"settings"});
