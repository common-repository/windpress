var a;import{c as s}from"./virtual-D4KiWvGj.js";import{l as d}from"./logger-BTW-zIW3.js";import{L as c}from"./windpress-a09-ZfRP.min.js";import{bdeIframe as m}from"./constant-BZV3uY6b.js";import{w as l}from"./runtime-core.esm-bundler-BgTOpYpR.min.js";import"./index-BJHYLQGk.min.js";import"./isObject-CRxghtyK.min.js";import"./set-B6rMqs6z.min.js";const u=".topbar-section.undo-redo-top-bar-section",b=document.createRange().createContextualFragment(`
    <div class="topbar-section topbar-section-bl">
        <div id="windpressbreakdance-settings-button" class="breakdance-toolbar-icon-button">
            <div class="breakdance-icon" style="width: 18px; height: 18px;">
                ${c}
            </div>
        </div>
    </div>
`),{getVirtualRef:t}=s({},{persist:"windpress.ui.state"}),o=document.querySelector(u);o.parentNode.insertBefore(b,o.previousElementSibling);const i=document.querySelector("#windpressbreakdance-settings-button"),n=(a=m)==null?void 0:a.contentDocument.querySelector("#windpress-iframe");function p(){const e=t("window.minimized",!1).value;t("window.minimized",!1).value=!e}function r(e){e?i.classList.add("breakdance-toolbar-icon-button-active"):i.classList.remove("breakdance-toolbar-icon-button-active"),n&&(n.style.display=e?"block":"none")}i.addEventListener("click",e=>{p()}),l(()=>t("window.minimized",!1).value,e=>{r(!e)}),r(!t("window.minimized",!1).value),d("Module loaded!",{module:"settings"});
