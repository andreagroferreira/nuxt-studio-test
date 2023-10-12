import{d as Y,u as V,r as $,o as j,_ as ee,a as te,b as q,c as L,n as ne,F as oe,e as w,f as K,g as O,w as J,T as B,t as ie,h as D,p as se,i as ae,j as W,k as re,l as de,m as z,q as ce,s as U,v as E,x as Z,y as H,z as le,A as pe,B as ue,C as F}from"./entry.bffbf74c.js";import{r as ve}from"./asyncData.70f03ccd.js";const b=i=>(se("data-v-3d14b34d"),i=i(),ae(),i),fe=b(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),we=b(()=>w("span",null,"Preview mode enabled",-1)),_e={key:0},he=b(()=>w("div",{id:"__preview_background"},null,-1)),me=b(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ye=b(()=>w("p",null,"Initializing the preview...",-1)),ge={key:0},ke=b(()=>w("div",{id:"__preview_background"},null,-1)),Ce={id:"__preview_loader"},Ie=Y({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const s=i,c=["__nuxt_preview","__preview_enabled"],v=W(),m=V(),r=$(!0),g=$(!1),o=$(!1),l=$("");let a;const h=async()=>{D("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await m.replace({query:{preview:void 0}}),window.location.reload()},A=async T=>{const _=await s.syncPreview(T);if(o.value!==!0){if(!_){setTimeout(()=>A(T),1e3);return}D("previewToken").value&&(o.value=!0,await m.replace({query:{}}),v.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&a.disconnect())}};return j(async()=>{a=(await ee(()=>import("./index.17e44084.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let _;a.on("connect",()=>{_=setTimeout(()=>{o.value||(_=setTimeout(()=>{l.value="Preview sync timed out",o.value=!1},3e4),a.emit("draft:requestSync"))},3e4)});const I=()=>{_&&(clearTimeout(_),_=null)};a.on("draft:sync",async P=>{if(I(),!P){try{a.once("draft:ready",()=>{a.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch(R){switch(I(),R.response.status){case 404:l.value="Preview draft not found",o.value=!1;break;default:l.value="An error occurred while syncing preview",o.value=!1}}return}A(P)}),a.on("draft:unauthorized",()=>{I(),l.value="Unauthorized preview token",o.value=!1}),a.on("disconnect",()=>{I()}),document.body.classList.add(...c),a.on("draft:update",P=>{g.value=!0,s.syncPreview(P),g.value=!1})}),te(()=>{document.body.classList.remove(...c)}),(T,_)=>(q(),L("div",null,[r.value?(q(),L("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:o.value,__preview_refreshing:g.value})},[o.value?(q(),L(oe,{key:0},[fe,we,w("button",{onClick:h}," Close ")],64)):K("",!0)],2)):K("",!0),O(B,{name:"preview-loading"},{default:J(()=>[r.value&&!o.value&&!l.value?(q(),L("div",_e,[he,w("div",{id:"__preview_loader"},[me,ye,w("button",{onClick:h}," Cancel ")])])):K("",!0)]),_:1}),O(B,{name:"preview-loading"},{default:J(()=>[l.value?(q(),L("div",ge,[ke,w("div",Ce,[w("p",null,ie(l.value),1),w("button",{onClick:h}," Exit preview ")])])):K("",!0)]),_:1})]))}});const Pe=re(Ie,[["__scopeId","data-v-3d14b34d"]]),Se=(i=[],s,c)=>{const v=[...s||[]],m=[...c||[]],r=JSON.parse(JSON.stringify(i));for(const o of v)if(o.oldPath)if(m.splice(m.findIndex(a=>a.path===o.oldPath),1),v.find(a=>a.path===o.oldPath))r.push({path:o.path,parsed:o.parsed});else{const a=r.find(h=>h.path===o.oldPath);a&&(a.path=o.path,o.parsed?a.parsed=o.parsed:o.pathMeta&&["_file","_path","_id","_locale"].forEach(h=>{a.parsed[h]=o.pathMeta[h]}))}else if(o.new)r.push({path:o.path,parsed:o.parsed});else{const l=r.find(a=>a.path===o.path);l&&Object.assign(l,{path:o.path,parsed:o.parsed})}for(const o of m)r.splice(r.findIndex(l=>l.path===o.path),1);const g=new Intl.Collator(void 0,{numeric:!0});return r.sort((o,l)=>g.compare(o.path,l.path)),r},C={appConfig:"app.config.ts",tokensConfig:"tokens.config.ts"},Te=i=>{let s;return(...c)=>(s||(s=i()),s)};function G(i,s){for(const c in i){const v=s[c];c in s||delete i[c],v!==null&&typeof v=="object"&&G(i[c],s[c])}}function Q(i,s){for(const c in s){const v=s[c];v!==null&&typeof v=="object"?(i[c]=i[c]||{},Q(i[c],v)):i[c]=v}}const xe=Te(()=>JSON.parse(JSON.stringify(Z()))),Le=()=>{const i=W(),{studio:s,content:c}=de().public,v=xe();let m;const r=z("studio-client-db",()=>null),g=z("studio-preview-db-files",()=>[]);r.value||(i.hook("content:storage",e=>{r.value=e}),ce("/non-existing-path").findOne());const o=async(e,n,d=!0)=>{const u=window.sessionStorage.getItem("previewToken"),f=await e.getKeys(`${u}:`);await Promise.all(f.map(p=>e.removeItem(p)));const t=new Set(n.map(p=>p.parsed._id.split(":").shift()));await e.setItem(`${u}$`,JSON.stringify({ignoreSources:Array.from(t)})),await Promise.all(n.map(p=>e.setItem(`${u}:${p.parsed._id}`,JSON.stringify(p.parsed))))},l=e=>{const n=E(i,Z);Q(n,H(e,v)),e||G(n,v)},a=e=>{var d,u,f,t;const n=(t=(f=(u=(d=i==null?void 0:i.vueApp)==null?void 0:d._context)==null?void 0:u.config)==null?void 0:f.globalProperties)==null?void 0:t.$pinceauTheme;!n||!(n!=null&&n.updateTheme)||(m||(m=JSON.parse(JSON.stringify((n==null?void 0:n.theme.value)||{}))),E(i,n.updateTheme,[H(e,m)]))},h=async e=>{if(g.value=e.files=e.files||g.value||[],!r.value)return!1;const n=Se(e.files,e.additions,e.deletions),d=n.filter(t=>![C.appConfig,C.tokensConfig].includes(t.path));await o(r.value,d,(e.files||[]).length!==0);const u=n.find(t=>t.path===C.appConfig);l(u==null?void 0:u.parsed);const f=n.find(t=>t.path===C.tokensConfig);return a(f==null?void 0:f.parsed),R(),!0},A=async()=>{const e=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:s==null?void 0:s.apiURL,method:"POST",params:{token:e}})},T=()=>{const e=window.sessionStorage.getItem("previewToken"),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),le(Pe,{previewToken:e,apiURL:s==null?void 0:s.apiURL,syncPreview:h,requestPreviewSyncAPI:A}).mount(n)},_=async e=>{var u,f,t;const n=window.sessionStorage.getItem("previewToken");if(!e)return null;e=e.replace(/\/$/,"");let d=await((u=r.value)==null?void 0:u.getItem(`${n}:${e}`));return d||(d=await((f=r.value)==null?void 0:f.getItem(`cached:${e}`))),d||(d=d=await((t=r.value)==null?void 0:t.getItem(e))),d},I=e=>{var d;const n=window.sessionStorage.getItem("previewToken");r.value&&r.value.setItem(`${n}:${(d=e.parsed)==null?void 0:d._id}`,JSON.stringify(e.parsed))},P=async e=>{var d;const n=window.sessionStorage.getItem("previewToken");await((d=r.value)==null?void 0:d.removeItem(`${n}:${e}`))},R=async()=>{if(c!=null&&c.documentDriven){const{pages:e}=E(i,pe);for(const n in e.value)e.value[n]&&(e.value[n]=await _(e.value[n]._id))}ue(()=>{E(i,ve)})};return{apiURL:s==null?void 0:s.apiURL,contentStorage:r,syncPreviewFiles:o,syncPreviewAppConfig:l,syncPreviewTokensConfig:a,requestPreviewSynchronization:A,findContentWithId:_,updateContent:I,removeContentWithId:P,requestRerender:R,mountPreviewUI:T,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const e=V(),n=U(),d=$(""),u=t=>({path:t.path,query:F(t.query),params:F(t.params),fullPath:t.fullPath,meta:F(t.meta)});window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:t.key,metaKey:t.metaKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey}},"*")}),window.addEventListener("message",async t=>{if(!["https://nuxt.studio","https://dev.nuxt.studio"].includes(t.origin))return;const{type:p,payload:x={}}=t.data||{};switch(p){case"nuxt-studio:editor:file-selected":{const y=await _(x.path);y&&(y._partial||y._path!==U().path&&(d.value=y._path,e.push(y._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:y=[],deletions:N=[]}=x;for(const k of y)await I(k);for(const k of N)await P(k.path);R();break}case"nuxt-studio:preview:sync":{h(x);break}case"nuxt-studio:config:file-changed":{const{additions:y=[],deletions:N=[]}=x,k=y.find(S=>S.path===C.appConfig);k&&l(k==null?void 0:k.parsed),N.find(S=>S.path===C.appConfig)&&l(void 0);const M=y.find(S=>S.path===C.tokensConfig);M&&a(M==null?void 0:M.parsed),N.find(S=>S.path===C.tokensConfig)&&a(void 0);break}}}),i.hook("page:finish",()=>{f()}),i.hook("content:document-driven:finish",({route:t,page:p})=>{t.meta.studio_page_contentId=p==null?void 0:p._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:u(U())},"*"),setTimeout(()=>{f()},100)});function f(){const t=Array.from(window.document.querySelectorAll("[data-content-id]")).map(x=>x.getAttribute("data-content-id")),p=Array.from(new Set([n.meta.studio_page_contentId,...t])).filter(Boolean);if(d.value===p[0]){d.value="";return}window.openContentInStudioEditor(p,{navigate:!0,pageContentId:n.meta.studio_page_contentId})}window.openContentInStudioEditor=(t,p={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...u(n),contentIds:t,...p}},"*")}}};export{Le as useStudio};
