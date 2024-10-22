(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"23df678fdd9d7220399dd7259c6e41ae","url":"404.html"},{"revision":"4a30e0992a6a9401f7f666bf4fc5df74","url":"assets/css/styles.099fe1a9.css"},{"revision":"d7f0affdeb30fc18cfd7298c6fe6e010","url":"assets/js/1128852d.a7ea77ca.js"},{"revision":"5f1a962b86be7197886ebc8ad15fba5a","url":"assets/js/131.f0c1f399.js"},{"revision":"10ccfd77abbf0377e129a4f697b2cb72","url":"assets/js/137b52b7.a9872a9f.js"},{"revision":"0bb7585c4beec85c1dd534e1f7037369","url":"assets/js/17896441.c1fcb11a.js"},{"revision":"63e691facf4b503f69a14e9a454c6a9e","url":"assets/js/1be78505.28ccb9e4.js"},{"revision":"b39284552123026de6111fb3464f7ffe","url":"assets/js/283.5773b0e2.js"},{"revision":"14b120158f0c1a39f4ef025c4ff4b448","url":"assets/js/4f74eb78.d87669e1.js"},{"revision":"2d487a455517eaa97be42100728c2f0a","url":"assets/js/539.12278b8a.js"},{"revision":"ba81627ad053dd48779f29eada8eb003","url":"assets/js/5cd13e5c.93d98249.js"},{"revision":"17e141792ab3fa4633d33f8afe459327","url":"assets/js/84585675.902c623e.js"},{"revision":"c75bc03cdfb9df6d7486d47952a07a84","url":"assets/js/935f2afb.b5c82aa4.js"},{"revision":"820b271e315744cc98df905ea028ea44","url":"assets/js/972.864c4332.js"},{"revision":"bd9368a4210527a812b8631d433d51af","url":"assets/js/c0e20c00.1f32b6c5.js"},{"revision":"f40a1aca8a7a415d9dd4895353fbc992","url":"assets/js/c79a5049.b29a2203.js"},{"revision":"95376be40680e119eb3815a9764c0e9e","url":"assets/js/eb6a5da1.127e41cd.js"},{"revision":"bddc791bee39e4fdde0435e5357587ac","url":"assets/js/fc32d178.78ba6042.js"},{"revision":"82a85f860030dbb70f13345112f078cd","url":"assets/js/main.7630a282.js"},{"revision":"e9c6432007575a0b108df2cd0b8f2445","url":"assets/js/runtime~main.c96f6edc.js"},{"revision":"5c9cbd90070eb97ebea1ef36090c53a2","url":"Assignments/assignment1.html"},{"revision":"e3a9db4868ec20141e00a30d2df11a57","url":"Assignments/assignment2.html"},{"revision":"3ed269fc41ccdaa16c447999b8e98e77","url":"index.html"},{"revision":"d1bee6497904b9c97b59f718a2f33c01","url":"Labs/lab1.html"},{"revision":"496dc5e7941fbd706156f7f130e66d9c","url":"Labs/lab2.html"},{"revision":"a29bedaaec84352e4492ea1de0f98ce4","url":"Labs/lab3.html"},{"revision":"95c8412198c881060c4b4cc159ae38bb","url":"Labs/lab4.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"75d2c84041600834e066d00cd15f09c4","url":"weekly-schedule.html"},{"revision":"a3502d52fc24a87a994cb4be768d5d3b","url":"assets/images/a2_beanstalk-environment-variables-example-e2740d37c7ab387737870eba993d463a.png"},{"revision":"591fdbae9ef3b70d206205e873cb106e","url":"assets/images/a2_wp-config-example-a18dab092f2a26d1055cc1e476f6c901.png"},{"revision":"73e588aa341efb26242b99c305984eb9","url":"assets/images/apache-status-adb192804f847b83674de31f14744716.png"},{"revision":"0807ee0ce65d9a72d6251d7fd7f2bffb","url":"assets/images/apt-update-ae71118453248d396e4ad4033d13221b.png"},{"revision":"298bb0775e00437e06e6ae41049fe510","url":"assets/images/azure-cmdssh-login-215094b605d9dece8d2379958baf28ba.png"},{"revision":"9364a79aa2a4b70bb935215823ee03d1","url":"assets/images/azure-deallocated-730a3ca2469cfa2107a3688a87f5cd0f.png"},{"revision":"8872b2341830ccf124eda048551aa48e","url":"assets/images/azure-rdp-71e3b3bf1df22ab1fd8f73bd71634414.png"},{"revision":"d6858559a9dbcd96983055b7c6f5b536","url":"assets/images/azure-vm-labresource-1ff20f1467e633f1d697d31b89292545.png"},{"revision":"b2833f7a537d7fd0567c9f9e87d6e2c6","url":"assets/images/custom-listen-sshd-6d82ab8b025a396b45d9cf405c1a56fb.png"},{"revision":"770bab4e685e81ee8c7fbc29b72c4819","url":"assets/images/custom-ssh-firewall-rule-0ecf032dc3e3f2e4d90d0b0e643cdb3a.png"},{"revision":"ff9fc71cf042efb80d54552732af6218","url":"assets/images/default-iptables-944477fc6f99e2f0ec9d5c0943b6d48f.png"},{"revision":"5e028a9d05d7c0de03269f53631f560c","url":"assets/images/disable-passauth-de34cfa1017cf10f3a2d11ed6863e61c.png"},{"revision":"14a53e246280ecfdcba2191203680ca3","url":"assets/images/filezilla-connect-5c352959e8fbb057902ce2c94d1af060.png"},{"revision":"350057287162c1749f59a0cc60ceae02","url":"assets/images/firewall-status-276ca14d4b6a36ee8dcf2cda4d73faca.png"},{"revision":"f2de3a9e2bb23c2eacc1eb9fc6ebc86e","url":"assets/images/forward-80-13bdc52a6ee6f36c604835e1a50d6e3e.png"},{"revision":"f3d5d91fdc8aba0a9b787203d1ef760a","url":"assets/images/iis-explore-74fa9b3b4025af682022186b08013477.png"},{"revision":"27a025cb2febae18ce176e7bd10e18fb","url":"assets/images/iis-installing-7bdebd17b4fcda9fed526ee6854abef1.png"},{"revision":"e2530539eddc02fdf4095c98525786dd","url":"assets/images/ip-forwarding-824ba42cb64f83aebc381ba9bb54b2e0.png"},{"revision":"fee4b498b631b859b33fffcc2c1a2ff7","url":"assets/images/L3I1-directorystructure-e89162f1d5d6b4a56945268adb5b802c.png"},{"revision":"7d50beb599e379e62c5e4b866eaaa412","url":"assets/images/L3I2-directorystructure-aeb87b61b6ce60f6d63ae94205e1798c.png"},{"revision":"b4a9dc7143a5dc87134740d5bbda5901","url":"assets/images/lab2-artifacts-98aeabff9448db909697ce073cb04f4b.jpeg"},{"revision":"094e1b84fd6fa19a1d76a9a42e9d0f8a","url":"assets/images/labcheck2-49fb6b62aed9bbfe4483c5e31f172f05.png"},{"revision":"7f9dc8925664c8d8d6273f198debe7d9","url":"assets/images/linux-common-directories-070fa12eb09e7f4a6d2c9c41946a3e46.png"},{"revision":"cf98aa8208b23387e9bfa5e5d21b244b","url":"assets/images/linux-directory-structure-fa337dd97d1302f88eb6a63d2dba8f03.png"},{"revision":"e987da00d4c6cf9402c9ddd50a493e01","url":"assets/images/linux-pathname-151303df3e375d3dbdc0ade3a170159a.png"},{"revision":"407818d72a38da764a70088c69eb606e","url":"assets/images/listed-git-files-9bc8613b59389997481e79f905f598e7.png"},{"revision":"a23ee94d813634d98ff3ce66b101b107","url":"assets/images/modified-iptables-53473897346c64c4b9ece8029b3ba992.png"},{"revision":"8128fd7e6f08e22bd76b7c4868e808c2","url":"assets/images/nat-networking-c05f8efa0a8a73a9d38e28148dad9b85.png"},{"revision":"3f24cba0a7c0dac77f1e7788086449eb","url":"assets/images/nat-tables-ea640d1219d196601f37ebe5bbba0f19.png"},{"revision":"3e5b0a94648a386a687bfc1f461144de","url":"assets/images/rule-80-b2c6cbedb82a3b557542dd88f6d38714.png"},{"revision":"f30a2925cb2ff8b5790d457979a796f9","url":"assets/images/servermanager-manage-47155ebbe4fdfb15f30822d138b9c637.png"},{"revision":"35b61001525dd679e1cb3c801af41851","url":"assets/images/servermanager-role-iis-35bfbb3a76679088496bf5df2ce897c0.png"},{"revision":"28c559c40276de97d0872e748998ac18","url":"assets/images/servermanager-role-iis-add-features-834371ea284626a9871129e7452c3f18.png"},{"revision":"50d1fd444608918aa8d99f457169b93f","url":"assets/images/ubuntu-iis-curl-7b60e482fd814230841f93b9a28e7519.png"},{"revision":"eb735fa9658ac87ece542a7583711976","url":"assets/images/vi-text-editor-b-0384506dfa3355cd1609d95963c875f2.png"},{"revision":"e338ff204a6aa228c2910eca990be2ac","url":"assets/images/winserv-ipconfig-fc11db517c2cbb1bf9fcb8fe3fc4bf13.png"},{"revision":"a3502d52fc24a87a994cb4be768d5d3b","url":"img/a2_beanstalk-environment-variables-example.png"},{"revision":"591fdbae9ef3b70d206205e873cb106e","url":"img/a2_wp-config-example.png"},{"revision":"73e588aa341efb26242b99c305984eb9","url":"img/apache-status.png"},{"revision":"0807ee0ce65d9a72d6251d7fd7f2bffb","url":"img/apt-update.png"},{"revision":"298bb0775e00437e06e6ae41049fe510","url":"img/azure-cmdssh-login.png"},{"revision":"9364a79aa2a4b70bb935215823ee03d1","url":"img/azure-deallocated.png"},{"revision":"8872b2341830ccf124eda048551aa48e","url":"img/azure-rdp.png"},{"revision":"d6858559a9dbcd96983055b7c6f5b536","url":"img/azure-vm-labresource.png"},{"revision":"b2833f7a537d7fd0567c9f9e87d6e2c6","url":"img/custom-listen-sshd.png"},{"revision":"770bab4e685e81ee8c7fbc29b72c4819","url":"img/custom-ssh-firewall-rule.png"},{"revision":"ff9fc71cf042efb80d54552732af6218","url":"img/default-iptables.png"},{"revision":"5e028a9d05d7c0de03269f53631f560c","url":"img/disable-passauth.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"14a53e246280ecfdcba2191203680ca3","url":"img/filezilla-connect.png"},{"revision":"350057287162c1749f59a0cc60ceae02","url":"img/firewall-status.png"},{"revision":"f2de3a9e2bb23c2eacc1eb9fc6ebc86e","url":"img/forward-80.png"},{"revision":"31ee0b63b4803567a77576c783807907","url":"img/iis-artifact.png"},{"revision":"f3d5d91fdc8aba0a9b787203d1ef760a","url":"img/iis-explore.png"},{"revision":"27a025cb2febae18ce176e7bd10e18fb","url":"img/iis-installing.png"},{"revision":"e2530539eddc02fdf4095c98525786dd","url":"img/ip-forwarding.png"},{"revision":"fee4b498b631b859b33fffcc2c1a2ff7","url":"img/L3I1-directorystructure.png"},{"revision":"7d50beb599e379e62c5e4b866eaaa412","url":"img/L3I2-directorystructure.png"},{"revision":"b4a9dc7143a5dc87134740d5bbda5901","url":"img/lab2-artifacts.jpeg"},{"revision":"094e1b84fd6fa19a1d76a9a42e9d0f8a","url":"img/labcheck2.png"},{"revision":"7f9dc8925664c8d8d6273f198debe7d9","url":"img/linux-common-directories.png"},{"revision":"cf98aa8208b23387e9bfa5e5d21b244b","url":"img/linux-directory-structure.png"},{"revision":"e987da00d4c6cf9402c9ddd50a493e01","url":"img/linux-pathname.png"},{"revision":"407818d72a38da764a70088c69eb606e","url":"img/listed-git-files.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"a23ee94d813634d98ff3ce66b101b107","url":"img/modified-iptables.png"},{"revision":"8128fd7e6f08e22bd76b7c4868e808c2","url":"img/nat-networking.png"},{"revision":"3f24cba0a7c0dac77f1e7788086449eb","url":"img/nat-tables.png"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"3e5b0a94648a386a687bfc1f461144de","url":"img/rule-80.png"},{"revision":"f30a2925cb2ff8b5790d457979a796f9","url":"img/servermanager-manage.png"},{"revision":"28c559c40276de97d0872e748998ac18","url":"img/servermanager-role-iis-add-features.png"},{"revision":"35b61001525dd679e1cb3c801af41851","url":"img/servermanager-role-iis.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"50d1fd444608918aa8d99f457169b93f","url":"img/ubuntu-iis-curl.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"eb735fa9658ac87ece542a7583711976","url":"img/vi-text-editor-b.png"},{"revision":"e338ff204a6aa228c2910eca990be2ac","url":"img/winserv-ipconfig.png"},{"revision":"80e7c2adb3b5e6ac8b6c8af1a3728574","url":"img/yum-update.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();