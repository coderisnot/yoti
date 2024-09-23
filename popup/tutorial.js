(()=>{"use strict";const t="LOCKED",e="LOGGED_OUT",n="LOGGED_IN";class s{static get browserRuntime(){return CHANNEL_SERVICE_CONFIG.browserEngine}static get KEY_LAST_CHECKIN(){return"lastCheckin"}static get KEY_KEY_PAIR(){return"keyPair"}static get KEY_CLOUD_ID(){return"cloudId"}static save(t,e){return new Promise(((n,a)=>{const c={};c[t]=e,this.browserRuntime.storage.local.set(c,(()=>{s.checkError(),n()}))}))}static find(t){return new Promise((e=>{this.browserRuntime.storage.local.get(t,(n=>{s.checkError(),e(n[t])}))}))}static checkError(){if(this.browserRuntime.runtime.lastError)throw{name:"StorageApi",message:this.browserRuntime.runtime.lastError}}static cleanStorage(){this.browserRuntime.storage.local.clear()}}const a=["Step1.json","Step2.json","Step3.json","Step4_1.json","Step4_2.json"],{browserEngine:c}=CHANNEL_SERVICE_CONFIG,r={[e]:{title:"You are signed out of<br/> Yoti Password Manager",body:"Tap the icon in the toolbar to access<br/> your account."},[t]:{title:"Yoti Password Manager<br/> is now locked",body:"Tap the icon in the toolbar to access<br/> your logins."}};let o=0,i=0,u=n,l=!1;const g={container:"",renderer:"svg",loop:!0,autoplay:!0,path:`../resources/animations/${a[o]}`},d=()=>{const n=()=>{!function(){const t=u?r[u]:r.LOGGED_OUT;document.getElementById("yotiTutorialWrapper").style.display="block",document.getElementById("yotiTutorialStatusTitle").innerHTML=t.title,document.getElementById("yotiTutorialStatusBody").innerHTML=t.body}(),document.getElementById("tryAutolock").style.display="none",document.getElementById("tryAutolockDone").style.display="block",i++,b()};u&&u!==t&&u!==e?class{static get browserRuntime(){return CHANNEL_SERVICE_CONFIG.browserEngine}static handleResponse(t){return t.response}static background({funcName:t,isAsync:e,args:n}){return CHANNEL_SERVICE_CONFIG.browserEngine.runtime.sendMessage({target:"background",funcName:t,isAsync:e,args:n}).then((t=>this.handleResponse(t))).catch((t=>{}))}static enableIcon(){this.background({funcName:"enableIcon"})}static lockIcon(){this.background({funcName:"lockIcon"})}static async save(t,e){this.background({funcName:"save",args:[t,e],isAsync:!0})}static async find(t){return this.background({funcName:"find",args:[t],isAsync:!0})}static setSelected(t,e){this.background({funcName:"setSelected",args:[t,e]})}static openUrl(t){t.startsWith("http")||(t=`https://${t}`),this.browserRuntime.tabs.create({url:t})}static openYotiUrl(t){const e=this.browserRuntime.runtime.getURL(t);this.browserRuntime.tabs.create({url:e})}static checkError(){if(this.browserRuntime.runtime.lastError)throw{name:"StorageApi",message:this.browserRuntime.runtime.lastError}}static async checkSessionTimeout(t){return this.background({funcName:"checkSessionTimeout",isAsync:!0,...t&&{args:[t]}}).then((t=>t))}static checkIn(t=Date.now()){this.background({funcName:"checkIn",args:[t]})}static async checkOut(){return this.background({funcName:"sendLockRequest",isAsync:!0})}static async logOut(){this.background({funcName:"sendLogoutRequest",isAsync:!0}).catch((t=>{})).then(this.cleanStorage)}static cleanStorage(){s.cleanStorage()}static cleanUp(){this.background({funcName:"cleanUp"})}static async fetchContent(t){return this.background({funcName:"fetchContent",isAsync:!0,args:[t]})}static async fetchGlobalSettings(){return this.background({funcName:"fetchGlobalSettings",isAsync:!0})}static async fetchEncryptedContent(t){return this.background({funcName:"fetchEncryptedContent",isAsync:!0,args:[t]})}static async decryptContent(t,e){return this.background({funcName:"decryptContent",isAsync:!0,args:[t,e]})}static async getSecrets(){return this.background({funcName:"getSecrets",isAsync:!0})}static setSecrets(t){this.background({funcName:"setSecrets",args:[t]})}static async hasSecrets(){return this.background({funcName:"hasSecrets",isAsync:!0})}static storeLogo(t,e){this.background({funcName:"storeLogo",args:[t,e]})}static get logos(){return this.background({funcName:"getLogos"})}static async globalSettings(){return this.background({funcName:"getGlobalSettings",isAsync:!0})}static setGlobalSettings(t){return this.background({funcName:"setGlobalSettings",args:[t]})}static async createWebSocket(t,e){return this.background({funcName:"createWebSocket",isAsync:!0,args:[t,e]})}static closeWebSocket(){this.background({funcName:"closeWebSocket"})}static checkWebSocketOpen(){return this.background({funcName:"isWsOpen"})}static async saveRequest(t){return this.background({funcName:"saveRequest",isAsync:!0,args:[t]})}static registerWSListener(t){this.background({funcName:"registerSocketListener",args:[t]})}static removeWSListener(t){this.background({funcName:"removeSocketListener",args:[t]})}static broadcastMessage(t){this.background({funcName:"broadcastMessage",args:[t]})}static loadFromInternalState(t){return this.background({funcName:"getFromInternalState",args:[t]})}static saveOnInternalState(t,e){return this.background({funcName:"saveOnInternalState",args:[t,e]})}static async isNewEnrolment(){return this.background({funcName:"isNewEnrolment"})}static isTutorialPassed(){return this.background({funcName:"isTutorialPassed"})}static updateNewEnrolment(t){this.background({funcName:"updateNewEnrolment",args:[t],isAsync:!0})}static async logIn(){return this.background({funcName:"loggedIn",isAsync:!0})}static unlockFromPopUp(){return this.background({funcName:"unlockFromPopUp"})}static async getTimeout(){return this.background({funcName:"getTimeout",isAsync:!0})}static async validateSession(){return this.background({funcName:"validateSession",isAsync:!0}).then((t=>t?()=>t:void 0))}}.checkOut().then((t=>{n()})):n()},m=()=>{document.getElementById("nextTutorialButton").disabled=!1,document.getElementById("yotiTutorialWrapper").style.display="none",l=!0};function y(t){o+=t,t<0?(i=o,l=!1,document.getElementById("tryAutolock").style.display="block",document.getElementById("tryAutolockDone").style.display="none"):i+=t,h(o)}(()=>{document.getElementById("nextTutorialButton").addEventListener("click",(()=>y(1)));document.getElementById("prevTutorialButton").addEventListener("click",(()=>y(-1)));document.getElementById("tryOutLock").addEventListener("click",d),c.runtime.onMessage.addListener((s=>{switch(s.type){case t:case e:u=s.type;break;case n:u=s.type,m();break;default:return}}))})(),h(o);function h(t){const e=document.getElementsByClassName("mySlides"),n=document.getElementsByClassName("dot"),s=document.getElementById("nextTutorialButton"),a=document.getElementById("prevTutorialButton");if(document.getElementById("yotiTutorialWrapper").style.display="none",s.innerText="NEXT",a.style.display="",s.disabled=3===o,0===t)a.style.display="none";else{if(t===n.length)return void c.tabs.getCurrent((t=>{c.tabs.remove(t.id)}));t===n.length-1&&(s.innerText="FINISH")}for(let t=0;t<n.length;t++)e[t>=e.length?e.length-1:t].style.display="none",n[t].className=n[t].className.replace(" active","");e[o>=e.length?e.length-1:o].style.display="block",n[o].className+=" active",b()}function b(){const t=document.getElementById(`bm-${o+1}`);i<0||i>=a.length||!t||(g.path=`../resources/animations/${a[i]}`,g.container=t,lottie.destroy(),lottie.loadAnimation(g))}})();