(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{127:function(e,t,r){"use strict";(function(e){var n=r(14),o=r(133),c=r(12),l=r(128),d=r(134),f=r(9);const m=new d.a;function h({type:e}){return e===Object(l.a)("webp")}t.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||!0&this.visible)){const t=function(e,t){return e.filter((source=>!h(source)||h(source)&&t))}(this.preload,o.b),[source]=t;m.getPromise(Object(f.a)(source.srcset),((t,r)=>{Object(o.a)()?data={link:[Object(c.b)(source,this.crossorigin,t)]}:function({srcset:t,sizes:r},n,o=(()=>{})){{const img=new e.Image;img.onload=o,img.crossorigin=n,img.sizes=r,img.srcset=t}}(source,this.crossorigin,t)})).then((e=>this.onPreload(e)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(n.a)(this.$el,(()=>{this.visible=!0}))},destroyed(){Object(n.b)(this.$el)},methods:{onPreload(e){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")}}}}).call(this,r(6))},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const n={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(e){return n[String(e)]}},129:function(e,t,r){var content=r(136);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("62c1a5d0",content,!0,{sourceMap:!1})},130:function(e,t,r){var content=r(138);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("74502007",content,!0,{sourceMap:!1})},131:function(e,t,r){var content=r(141);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("841b0088",content,!0,{sourceMap:!1})},132:function(e,t,r){"use strict";r(140);var n=r(2),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preview-container"},[r("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),r("div",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[e._t("title",[r("p",[e._v("Preview Info")])])],2)])}),[],!1,null,"fa2458f0",null);t.a=component.exports},133:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(19);const o=function(){const t=e.document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}();function c(){if(Object(n.a)())return!1;{const t=e.document.createElement("link").relList;return function(element,t){let r={};e.document&&(r=e.document.createElement(element));if(t in r)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}}).call(this,r(6))},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(18);class o{constructor(){this.map=new Map}getPromise(e,t){if(!this.map.has(e)){const r=new n.a;this.map.set(e,r.promise),t(r.resolve,r.reject)}return this.map.get(e)}}},135:function(e,t,r){"use strict";r(129)},136:function(e,t,r){var n=r(3)(!1);n.push([e.i,"picture[data-v-4022b340]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-4022b340]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-4022b340]{filter:blur(10px);transform:scale(1.1)}",""]),e.exports=n},137:function(e,t,r){"use strict";r(130)},138:function(e,t,r){var n=r(3)(!1);n.push([e.i,".nuxt-speedkit__noscript[data-v-e63e686a]{display:block;height:inherit}",""]),e.exports=n},140:function(e,t,r){"use strict";r(131)},141:function(e,t,r){var n=r(3)(!1);n.push([e.i,".preview-container[data-v-fa2458f0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-fa2458f0]:first-child{margin-top:0}.preview-container[data-v-fa2458f0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-fa2458f0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-fa2458f0]{flex-direction:row}}.preview-container>div[data-v-fa2458f0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-fa2458f0]{font-size:2em}.preview-container .preview-container__info p[data-v-fa2458f0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-fa2458f0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-fa2458f0]{font-size:1.125em;--bg-opacity:1;background-color:rgb(0 0 0/40%)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-fa2458f0]{background-color:rgb(255 255 255/40%)}}.preview-container .preview-container__preview>article[data-v-fa2458f0]{text-align:center}.preview-container .preview-container__preview>article[data-v-fa2458f0],.preview-container .preview-container__preview>div[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-fa2458f0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-fa2458f0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-fa2458f0]{position:relative;width:100%;height:100%}",""]),e.exports=n},142:function(e,t,r){"use strict";var n=r(127).a,o=(r(135),r(2)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("picture",{style:e.style},[e._l(e.imageSources,(function(source,e){return r("source",{key:e,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),e._v(" "),r("img",{ref:"image",class:{"in-progress":e.inProgress},attrs:{loading:"lazy",alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],2)}),[],!1,null,"4022b340",null);t.a=component.exports},143:function(e,t,r){"use strict";r(137);var n=r(2),component=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"e63e686a",null);t.a=component.exports},145:function(e,t,r){var content=r(165);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("6299c55a",content,!0,{sourceMap:!1})},146:function(e,t,r){"use strict";var n=r(128),o=r(12),c=r(142),l=r(143),d={components:{CustomPicture:c.a,CustomNoScript:l.a},props:{sources:{type:Array,default:()=>[]},placeholders:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:()=>({noscript:[Object(o.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},methods:{getPlaceholders(){return this.placeholders.map((({media:e,url:t,format:r})=>({media:e,url:t,type:Object(n.a)(r)})))},getSources(){return this.sources.map((({sizes:e,format:t,media:r})=>({media:r,srcset:e.map((({width:e,url:t})=>e?`${t} ${e}w`:t)).join(", "),sizes:e.map((({width:e,media:t})=>t?`${t} ${e}px`:`${e}px`)).reverse().join(", "),type:Object(n.a)(t)})))}}},f=(r(164),r(2)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],1),e._v(" "),r("custom-picture",e._g({attrs:{sources:e.resolvedPlacholders,preload:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}},e.$listeners)),e._v(" "),e.hasSlot?r("figcaption",[e._t("caption")],2):e._e()],1)}),[],!1,null,"06f20260",null);t.a=component.exports},164:function(e,t,r){"use strict";r(145)},165:function(e,t,r){var n=r(3)(!1);n.push([e.i,".nuxt-speedkit__speedkit-picture[data-v-06f20260]{width:100%;height:inherit;margin:0}",""]),e.exports=n},203:function(e,t,r){e.exports=r.p+"img/414.c18a756.webp"},204:function(e,t,r){e.exports=r.p+"img/576.4f9fdc0.webp"},205:function(e,t,r){e.exports=r.p+"img/768.90cbc1e.webp"},206:function(e,t,r){e.exports=r.p+"img/1024.9b261f3.webp"},207:function(e,t,r){e.exports=r.p+"img/1280.60356c7.webp"},208:function(e,t,r){e.exports=r.p+"img/1680.aaf62d9.webp"},209:function(e,t,r){e.exports=r.p+"img/1920.8a4c25e.webp"},210:function(e,t,r){e.exports=r.p+"img/414.d71c0d7.jpg"},211:function(e,t,r){e.exports=r.p+"img/576.cca0bd8.jpg"},212:function(e,t,r){e.exports=r.p+"img/768.a13f32a.jpg"},213:function(e,t,r){e.exports=r.p+"img/1024.4337ebf.jpg"},214:function(e,t,r){e.exports=r.p+"img/1280.476672b.jpg"},215:function(e,t,r){e.exports=r.p+"img/1680.44d44f0.jpg"},216:function(e,t,r){e.exports=r.p+"img/1920.a702b7c.jpg"},217:function(e,t,r){e.exports=r.p+"img/placeholder.5a208b2.jpg"},218:function(e,t,r){e.exports=r.p+"img/414.e879e2a.webp"},219:function(e,t,r){e.exports=r.p+"img/576.d66eca7.webp"},220:function(e,t,r){e.exports=r.p+"img/768.fb99262.webp"},221:function(e,t,r){e.exports=r.p+"img/1024.f1cbbb0.webp"},222:function(e,t,r){e.exports=r.p+"img/1280.e9f3d59.webp"},223:function(e,t,r){e.exports=r.p+"img/1680.d9c9dc3.webp"},224:function(e,t,r){e.exports=r.p+"img/1920.5961fe5.webp"},225:function(e,t,r){e.exports=r.p+"img/414.350df4a.jpg"},226:function(e,t,r){e.exports=r.p+"img/576.d0c0bf9.jpg"},227:function(e,t,r){e.exports=r.p+"img/768.cfef123.jpg"},228:function(e,t,r){e.exports=r.p+"img/1024.e759c95.jpg"},229:function(e,t,r){e.exports=r.p+"img/1280.df26ccb.jpg"},230:function(e,t,r){e.exports=r.p+"img/1680.bbba996.jpg"},231:function(e,t,r){e.exports=r.p+"img/1920.1fec178.jpg"},320:function(e,t,r){"use strict";r.r(t);var n=r(132),o=r(146),c={components:{OrganismPreviewContainer:n.a,SpeedkitPicture:o.a},data:()=>({picture:{placeholders:[{url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wgARCAAeAB4DAREAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAABggCBwQFCf/EABkBAAMBAQEAAAAAAAAAAAAAAAMEBQYCB//aAAwDAQACEAMQAAAA3Xlfoq7McFri7gxDc/6RLUflF5ODDNVMpZsQsJWqYEg8jsiuzmhzJFTlKzG0n//EAC0QAAICAQQBAwIEBwAAAAAAAAEDAgQFBgcREgAIEzEVIRQiI1EyQVKBg9Lx/9oACAEBAAE/ANLbi2MzgV6ZrVS9aKDVWBIxKTES5hNh+YD7gc/v4/dDdnbh2SOUsKysYWGCvUhyTXSAZBvu/J7R+IAHjqfPTpqPcHcHdVW4GqM663VYiVddW0ZM+nqEYmLFQH5R3B/MeO/mLzSW2cmsPrsZXuSQ0qd7gBEYngy/n9pA/wB/Nh8XZWvC6iuOyLrecuTq2HTaFVK1SE+Iza2fEFgknj55PA8y+D2pDDX1Hl22dQZGhkWUabLcyFjsr3ltBjErasw/RMZEH9XgdCCdBaL2k0tpjAW6uRsQ1IrGpyT0qeyYnD8Uw1zIR4hEsJb2nOQAhCPAkR5F7tHFz7CqoRlnsfXvVjL2r6onhbesgJQl1IBjIcjjzanbrBZfbWhgHViyolc0WUQPQujIkTj8H581z6NMzmdR4yjgNS2q2DSJtxGXyDmP+hNlx3jJf8MoTjELPHB482b9MuKV9N1NqqpUzVO2vo9FhMoNo165Ps04EcBkJN7OMiOR24Hnq209RTozCOqIhUNXJyVAVl8AQYqRMeP8Y82D1abdLI1imcUV8i9UID+gS4805eYVxUVr68dZR4+x/wCDx1sRErHEuswIyH7fsR56tNYrr4ajVmlwQMkOPb4EjMKl/t5//8QAKBEAAgEDAgUDBQAAAAAAAAAAAQIDAAQRMUESEyFRcQVh0RQVIzKB/9oACAECAQE/ALa4PI5B0FfaLW+CmElTue58U1rFYIsS6g5Jxr58bV6jI8k5D7afP9q94XkaCPAC4PuSdqdfobZJI2BBxnGo81GYryCR5pMMP1Hc/FX8ZVwPaoCzymXPWlM7twYBVsBtgR7nUFT1qwsJbQLxtlepIGdc69e4xpV7GG2qL8bYqzmJAWi3XNStzpCNhX//xAApEQACAQIEBQMFAAAAAAAAAAABAgMABBEhQVEFEhMiMTJhcTNSodHx/9oACAEDAQE/AHgX6uOZPjWjeNblusoI03oSm5LOBgNBt/ajVVUclQkoglfMn8CopmvrmSJ0I5fB0Px7607T2s6JFGSh9TfaP3tvUR6q4irkhO3So5oYwXbHmXMDUH2HjMVxjicVw7iIYNkATt8DxhVhKWBq5AJxq9hGbY0kePbtVrD04xX/2Q=="}],sources:[{format:"webp",sizes:[{width:414,media:"",url:r(203)},{width:576,media:"(min-width: 576px)",url:r(204)},{width:768,media:"(min-width: 768px)",url:r(205)},{width:1024,media:"(min-width: 1024px)",url:r(206)},{width:1280,media:"(min-width: 1200px)",url:r(207)},{width:1680,media:"(min-width: 1600px)",url:r(208)},{width:1920,media:"(min-width: 1900)",url:r(209)}]},{format:"jpg",sizes:[{width:414,media:"",url:r(210)},{width:576,media:"(min-width: 576px)",url:r(211)},{width:768,media:"(min-width: 768px)",url:r(212)},{width:1024,media:"(min-width: 1024px)",url:r(213)},{width:1280,media:"(min-width: 1200px)",url:r(214)},{width:1680,media:"(min-width: 1600px)",url:r(215)},{width:1920,media:"(min-width: 1900)",url:r(216)}]}]}})},l=r(2),d=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{attrs:{id:"criticalContainer"},scopedSlots:e._u([{key:"default",fn:function(){return[r("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("Critical - SpeedkitPicture")])]},proxy:!0}])})}),[],!1,null,null,null).exports,f={components:{OrganismPreviewContainer:n.a,SpeedkitPicture:o.a},data:()=>({picture:{placeholders:[{url:r(217)}],sources:[{format:"webp",sizes:[{width:414,url:r(218)},{width:576,media:"(min-width: 576px)",url:r(219)},{width:768,media:"(min-width: 768px)",url:r(220)},{width:1024,media:"(min-width: 1024px)",url:r(221)},{width:1280,media:"(min-width: 1200px)",url:r(222)},{width:1680,media:"(min-width: 1600px)",url:r(223)},{width:1920,media:"(min-width: 1900)",url:r(224)}]},{format:"jpg",sizes:[{width:414,url:r(225)},{width:576,media:"(min-width: 576px)",url:r(226)},{width:768,media:"(min-width: 768px)",url:r(227)},{width:1024,media:"(min-width: 1024px)",url:r(228)},{width:1280,media:"(min-width: 1200px)",url:r(229)},{width:1680,media:"(min-width: 1600px)",url:r(230)},{width:1920,media:"(min-width: 1900)",url:r(231)}]}]}})},m={components:{Critical:d,Lazy:Object(l.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{attrs:{id:"lazyContainer"},scopedSlots:e._u([{key:"default",fn:function(){return[r("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("Lazy - SpeedkitPicture")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},h=Object(l.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("critical",{attrs:{critical:""}}),e._v(" "),r("lazy")],1)}),[],!1,null,null,null);t.default=h.exports}}]);