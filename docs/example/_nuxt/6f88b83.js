(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{315:function(t,e,r){"use strict";(function(t){r(65);var n=r(83),o=r(316),c=r(38),d=r(312),l=r(317),f=r(43),h=new l.a;function m(t){return t.type===Object(d.a)("webp")}e.a={props:{sources:{type:Array,default:function(){return[]}},preload:{type:Array,default:function(){return[]}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head:function(){var e=this,data={};if(this.preload.length&&(this.isCritical||this.visible)){var source=function(t){return t.filter((function(source){return!m(source)||m(source)&&o.b}))}(this.preload)[0];h.getPromise(Object(f.a)(source.srcset),(function(r,n){Object(o.a)()?data={link:[Object(c.b)(source,e.crossorigin,r)]}:function(e,r,n){var o=e.srcset,c=e.sizes;void 0===n&&(n=function(){});var img=new t.Image;img.onload=n,img.crossorigin=r,img.sizes=c,img.srcset=o}(source,e.crossorigin,r)})).then((function(t){return e.onPreload(t)}))}return data},watch:{sources:function(){this.imageSources.length||(this.imageSources=this.sources)}},mounted:function(){var t=this;Object(n.a)(this.$el,(function(e){t.visible=!0,t.$emit("enter",e)}))},destroyed:function(){Object(n.b)(this.$el)},methods:{onPreload:function(t){this.style.backgroundImage="url("+this.$refs.image.currentSrc+")",this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")}}}}).call(this,r(16))},318:function(t,e,r){var content=r(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("8424d666",content,!0,{sourceMap:!1})},319:function(t,e,r){var content=r(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("74502007",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";(function(t){r(323);t.IntersectionObserver=t.IntersectionObserver||function(){function t(){}var e=t.prototype;return e.observe=function(){},e.unobserve=function(){},t}(),e.a={abstract:!0,props:{root:{type:t.HTMLElement,default:null},rootMargin:{type:String,default:"0px"},threshold:{type:Array,default:function(){return[0]}},trackVisibility:{type:Boolean,default:!1},delay:{type:Number,default:0}},created:function(){var t,e=this;if(!this.$attrs.critical||!this.$options.critical){var r={root:(t=this).root,rootMargin:t.rootMargin,threshold:t.threshold,trackVisibility:t.trackVisibility,delay:t.delay};this.observer=new IntersectionObserver((function(t){var r=t[0];return e.onIntersect(r)}),r)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(t){t.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(t){this.$emit("enter",t)}},render:function(){try{return this.$slots.default[0]}catch(t){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(16))},324:function(t,e,r){var content=r(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("a41e071a",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(318)},327:function(t,e,r){var n=r(14)(!1);n.push([t.i,"picture[data-v-22740056]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-22740056]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-22740056]{filter:blur(10px);transform:scale(1.1)}",""]),t.exports=n},328:function(t,e,r){"use strict";r(319)},329:function(t,e,r){var n=r(14)(!1);n.push([t.i,".nuxt-speedkit__noscript[data-v-e63e686a]{display:block;height:inherit}",""]),t.exports=n},332:function(t,e,r){"use strict";r(64),r(26);var n=r(312),o=r(38),c=r(333),d=r(334),l={components:{CustomPicture:c.a,CustomNoScript:d.a},props:{sources:{type:Array,default:function(){return[]}},placeholders:{type:Array,default:function(){return[]}},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:function(){return{noscript:[Object(o.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}},computed:{hasSlot:function(){return this.$slots.caption}},methods:{getPlaceholders:function(){return this.placeholders.map((function(t){var e=t.media,r=t.url,o=t.format;return{media:e,url:r,type:Object(n.a)(o)}}))},getSources:function(){return this.sources.map((function(t){var e=t.sizes,r=t.format;return{media:t.media,srcset:e.map((function(t){var e=t.width,r=t.url;return e?r+" "+e+"w":r})).join(", "),sizes:e.map((function(t){var e=t.width,r=t.media;return r?r+" "+e+"px":e+"px"})).sort((function(a,b){return a.width>b.width?1:-1})).join(", "),type:Object(n.a)(r)}}))}}},f=(r(337),r(4)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.resolvedPlacholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"231a42ed",null);e.a=component.exports},333:function(t,e,r){"use strict";var n=r(315).a,o=(r(326),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return r("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),r("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"22740056",null);e.a=component.exports},334:function(t,e,r){"use strict";r(328);var n=r(4),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"e63e686a",null);e.a=component.exports},337:function(t,e,r){"use strict";r(324)},338:function(t,e,r){var n=r(14)(!1);n.push([t.i,".nuxt-speedkit__speedkit-picture[data-v-231a42ed]{width:100%;height:inherit;margin:0}",""]),t.exports=n},341:function(t,e,r){"use strict";var n=r(320).a,o=r(4),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.a=component.exports},381:function(t,e,r){var content=r(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("eff07002",content,!0,{sourceMap:!1})},395:function(t,e,r){"use strict";r(41);var n=r(7),o=r(343),c=r.n(o),d=r(114),l=r(341),f=r(332),h={components:{IntersectionObserver:l.a,SpeedkitPicture:f.a},props:{id:{type:String,required:!0},autoplay:{type:Boolean,default:!1},poster:{type:Object,default:function(){return{}}}},data:function(){return{playing:!1,loading:!1,player:null,playerReady:new d.a,deferred:new d.a}},mounted:function(){var t=this;this.playerReady.promise.then((function(){t.$emit("ready")}))},methods:{onClick:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.deferred.resolve(),e.next=3,t.play();case 3:case"end":return e.stop()}}),e)})))()},onEnter:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$emit("enter"),t.deferred.resolve(),!t.autoplay){e.next=5;break}return e.next=5,t.play();case 5:case"end":return e.stop()}}),e)})))()},play:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.$emit("loading"),e.next=4,t.playerReady.promise;case 4:t.player.playVideo();case 5:case"end":return e.stop()}}),e)})))()},onLoad:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deferred.promise;case 2:t.loadPlayer();case 3:case"end":return e.stop()}}),e)})))()},loadPlayer:function(){var t=this;this.player=c()(this.$refs.youtube,{host:"https://www.youtube-nocookie.com",videoId:this.id,playerVars:{playsinline:1,modestbranding:1}}),this.player.on("ready",(function(){t.playerReady.resolve()})),this.player.on("stateChange",(function(e){1===e.data&&(t.loading=!1,t.playing=!0,t.$emit("playing"))}))}}},m=(r(450),r(4)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("intersection-observer",{attrs:{threshold:[1],"track-visibility":"",delay:350},on:{enter:t.onEnter}},[r("div",{staticClass:"nuxt-speedkit__speedkit-youtube",class:{"js--playing":t.playing,"js--loading":t.loading}},[r("div",{ref:"youtube",attrs:{loading:"lazy"}}),t._v(" "),r("button",{staticClass:"poster",attrs:{"aria-label":"Play"},on:{click:t.onClick}},[r("speedkit-picture",t._b({on:{load:t.onLoad}},"speedkit-picture",t.poster,!1)),t._v(" "),t.loading||t.playing?t._e():r("span",{staticClass:"icon"},[r("svg",{attrs:{version:"1.1",viewBox:"0 0 68 48"}},[r("path",{attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),r("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]),t._v(" "),t.loading?r("div",{staticClass:"spinner"},[r("div",{staticClass:"spinner-container"},[r("div",{staticClass:"spinner-rotator"},[r("div",{staticClass:"spinner-left"},[r("div",{staticClass:"spinner-circle"})]),t._v(" "),r("div",{staticClass:"spinner-right"},[r("div",{staticClass:"spinner-circle"})])])])]):t._e()],1)])])}),[],!1,null,"1d573cb7",null);e.a=component.exports},450:function(t,e,r){"use strict";r(381)},451:function(t,e,r){var n=r(14)(!1);n.push([t.i,'div[data-v-1d573cb7]{position:relative;overflow:hidden}.nuxt-speedkit__speedkit-youtube[data-v-1d573cb7]{width:100%}.nuxt-speedkit__speedkit-youtube[data-v-1d573cb7] iframe{position:absolute;top:0;width:100%;height:100%}.nuxt-speedkit__speedkit-youtube .poster[data-v-1d573cb7]{position:relative;display:block;width:100%;padding:0;cursor:pointer;background:transparent;border:none;border-radius:0;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:opacity .2s ease-in}.nuxt-speedkit__speedkit-youtube .poster .icon[data-v-1d573cb7]{position:absolute;top:50%;left:50%;width:68px;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .poster .icon path[data-v-1d573cb7]:first-child{fill:#212121;fill-opacity:.8;transition:fill .1s cubic-bezier(.4,0,1,1),fill-opacity .1s cubic-bezier(.4,0,1,1)}.nuxt-speedkit__speedkit-youtube .poster:hover path[data-v-1d573cb7]:first-child{fill:red;fill-opacity:1;transition:fill .1s cubic-bezier(0,0,.2,1),fill-opacity .1s cubic-bezier(0,0,.2,1)}.nuxt-speedkit__speedkit-youtube svg[data-v-1d573cb7]{transition:opacity .2s linear,transform .2s linear}.nuxt-speedkit__speedkit-youtube.js--playing .poster[data-v-1d573cb7]{pointer-events:none;opacity:0}.nuxt-speedkit__speedkit-youtube .spinner[data-v-1d573cb7]{position:absolute;top:50%;left:50%;z-index:18;width:48px;pointer-events:none;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .spinner[data-v-1d573cb7]:before{display:block;padding-top:100%;content:""}.nuxt-speedkit__speedkit-youtube .spinner .spinner-container[data-v-1d573cb7]{position:absolute;top:50%;left:50%;width:100%;padding-bottom:100%;margin-top:-50%;margin-left:-50%;pointer-events:none;-webkit-animation:spinner-linspin-data-v-1d573cb7 1568.23529647ms linear infinite;animation:spinner-linspin-data-v-1d573cb7 1568.23529647ms linear infinite}.nuxt-speedkit__speedkit-youtube .spinner .spinner-rotator[data-v-1d573cb7]{position:absolute;width:100%;height:100%;-webkit-animation:spinner-easespin-data-v-1d573cb7 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-easespin-data-v-1d573cb7 5332ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left[data-v-1d573cb7]{position:absolute;top:0;right:49%;bottom:0;left:0;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right[data-v-1d573cb7]{position:absolute;top:0;right:0;bottom:0;left:49%;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-circle[data-v-1d573cb7]{position:absolute;box-sizing:border-box;width:200%;height:100%;border:4px solid #b81c22;border-bottom-color:transparent;border-radius:50%}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left .spinner-circle[data-v-1d573cb7]{border-right-color:transparent;-webkit-animation:spinner-left-spin-data-v-1d573cb7 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-left-spin-data-v-1d573cb7 1333ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right .spinner-circle[data-v-1d573cb7]{left:-100%;border-left-color:transparent;-webkit-animation:spinner-right-spin-data-v-1d573cb7 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-right-spin-data-v-1d573cb7 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes rotate-data-v-1d573cb7{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotate-data-v-1d573cb7{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes spinner-linspin-data-v-1d573cb7{to{transform:rotate(1turn)}}@keyframes spinner-linspin-data-v-1d573cb7{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-easespin-data-v-1d573cb7{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes spinner-easespin-data-v-1d573cb7{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes spinner-left-spin-data-v-1d573cb7{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes spinner-left-spin-data-v-1d573cb7{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes spinner-right-spin-data-v-1d573cb7{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes spinner-right-spin-data-v-1d573cb7{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}',""]),t.exports=n}}]);