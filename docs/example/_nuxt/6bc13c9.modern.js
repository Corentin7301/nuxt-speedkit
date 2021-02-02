/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{127:function(e,t,r){"use strict";(function(e){var n=r(14),o=r(133),c=r(12),l=r(128),d=r(134),f=r(9);const y=new d.a;function h({type:e}){return e===Object(l.a)("webp")}t.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||!0&this.visible)){const t=function(e,t){return e.filter((source=>!h(source)||h(source)&&t))}(this.preload,o.b),[source]=t;y.getPromise(Object(f.a)(source.srcset),((t,r)=>{Object(o.a)()?data={link:[Object(c.b)(source,this.crossorigin,t)]}:function({srcset:t,sizes:r},n,o=(()=>{})){{const img=new e.Image;img.onload=o,img.crossorigin=n,img.sizes=r,img.srcset=t}}(source,this.crossorigin,t)})).then((e=>this.onPreload(e)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(n.a)(this.$el,(()=>{this.visible=!0}))},destroyed(){Object(n.b)(this.$el)},methods:{onPreload(e){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")}}}}).call(this,r(6))},129:function(e,t,r){var content=r(136);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("62c1a5d0",content,!0,{sourceMap:!1})},130:function(e,t,r){var content=r(138);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("74502007",content,!0,{sourceMap:!1})},135:function(e,t,r){"use strict";r(129)},136:function(e,t,r){var n=r(3)(!1);n.push([e.i,"picture[data-v-4022b340]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-4022b340]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-4022b340]{filter:blur(10px);transform:scale(1.1)}",""]),e.exports=n},137:function(e,t,r){"use strict";r(130)},138:function(e,t,r){var n=r(3)(!1);n.push([e.i,".nuxt-speedkit__noscript[data-v-e63e686a]{display:block;height:inherit}",""]),e.exports=n},139:function(e,t,r){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||class{observe(){}unobserve(){}},t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]},trackVisibility:{type:Boolean,default:()=>!1},delay:{type:Number,default:0}},created(){if(!this.$attrs.critical||!this.$options.critical){const e=(({root:e,rootMargin:t,threshold:r,trackVisibility:n,delay:o})=>({root:e,rootMargin:t,threshold:r,trackVisibility:n,delay:o}))(this);this.observer=new IntersectionObserver((([e])=>this.onIntersect(e)),e)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(e){this.$emit("enter",e)}},render(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(6))},142:function(e,t,r){"use strict";var n=r(127).a,o=(r(135),r(2)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("picture",{style:e.style},[e._l(e.imageSources,(function(source,e){return r("source",{key:e,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),e._v(" "),r("img",{ref:"image",class:{"in-progress":e.inProgress},attrs:{loading:"lazy",alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],2)}),[],!1,null,"4022b340",null);t.a=component.exports},143:function(e,t,r){"use strict";r(137);var n=r(2),component=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"e63e686a",null);t.a=component.exports},144:function(e,t,r){var content=r(151);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("2dce3734",content,!0,{sourceMap:!1})},148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=d(r(153)),c=d(r(154)),l=d(r(156));function d(e){return e&&e.__esModule?e:{default:e}}var f=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=(0,o.default)();if(f||(f=(0,c.default)(d)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=l.default.proxyEvents(d);var y=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):f.then((function(n){var o=new n.Player(e,t);return d.on("ready",(function(){r(o)})),null}))})),h=l.default.promisifyPlayer(y,r);return h.on=d.on,h.off=d.off,h},e.exports=t.default},149:function(e,t,r){"use strict";var n=r(147),o=r(128),c=r(12),l=r(142),d=r(143);function f(e,t){f=function(e,t){return new c(e,void 0,t)};var r=h(RegExp),n=RegExp.prototype,o=new WeakMap;function c(e,t,n){var c=r.call(this,e,t);return o.set(c,n||o.get(e)),c}function l(e,t){var g=o.get(t);return Object.keys(g).reduce((function(t,r){return t[r]=e[g[r]],t}),Object.create(null))}return y(c,r),c.prototype.exec=function(e){var t=n.exec.call(this,e);return t&&(t.groups=l(t,this)),t},c.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var r=o.get(this);return n[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+r[t]})))}if("function"==typeof t){var c=this;return n[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(l(e,c)),t.apply(this,e)}))}return n[Symbol.replace].call(this,e,t)},f.apply(this,arguments)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return m(e,arguments,_(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),w(n,e)})(e)}function m(e,t,r){return(m=v()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var n=new(Function.bind.apply(e,a));return r&&w(n,r.prototype),n}).apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e,p){return(w=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e})(e,p)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k={components:{CustomPicture:l.a,CustomNoScript:d.a},props:{sources:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{placeholders:[],resolvedSources:this.getSources()}},async fetch(){this.placeholders=await this.fetchMeta()},head:()=>({noscript:[Object(c.c)(".nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},watch:{async sources(){this.placeholders=await this.fetchMeta()}},methods:{async fetchMeta(){return Object(n.a)(this.sources,(({src:e,sizes:t})=>Promise.all([this.$img(e,{width:30}),this.$img.sizes(e,t)])))},getSources(){var e;return(e=this.sources,[...new Set(["webp"].concat(e.map((source=>function(e){const t=e.match(f(/\.(png|jpe?g)/i,{ext:1}));return t&&t.groups.ext}(source.src)||"jpg"))).map((e=>"jpeg"===e?"jpg":e)))]).map((e=>this.sources.map((({src:t,sizes:r})=>this.$img.sizes(t,r,{format:e}))).flat())).map((e=>({srcset:e.map((({width:e,url:t})=>e?`${t} ${e}w`:t)).join(", "),sizes:e.map((({width:e,media:t})=>t?`${t} ${e}px`:`${e}px`)).reverse().join(", "),type:Object(o.a)(e[0].format)})))}}},x=(r(150),r(2)),component=Object(x.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"nuxt-speedkit__experimental__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],1),e._v(" "),r("custom-picture",e._g({attrs:{sources:e.placeholders,preload:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}},e.$listeners)),e._v(" "),e.hasSlot?r("figcaption",[e._t("caption")],2):e._e()],1)}),[],!1,null,"d73c6ca6",null);t.a=component.exports},150:function(e,t,r){"use strict";r(144)},151:function(e,t,r){var n=r(3)(!1);n.push([e.i,".nuxt-speedkit__experimental__speedkit-picture[data-v-d73c6ca6]{width:100%;height:inherit;margin:0}",""]),e.exports=n},153:function(e,t,r){"use strict";var n;n=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,data){var i,r=t[e];if(r)for(i=r.length;i--;)r[i].handler(data)},e},e.exports=n},154:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(155),c=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,c.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},155:function(e,t){function r(script,e){script.onload=function(){this.onerror=this.onload=null,e(null,script)},script.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),script)}}function n(script,e){script.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,script))}}e.exports=function(e,t,o){var head=document.head||document.getElementsByTagName("head")[0],script=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},script.type=t.type||"text/javascript",script.charset=t.charset||"utf8",script.async=!("async"in t)||!!t.async,script.src=e,t.attrs&&function(script,e){for(var t in e)script.setAttribute(t,e[t])}(script,t.attrs),t.text&&(script.text=""+t.text),("onload"in script?r:n)(script,o),script.onload||r(script,o),head.appendChild(script)}},156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(r(157)),o=d(r(160)),c=d(r(161)),l=d(r(162));function d(e){return e&&e.__esModule?e:{default:e}}var f=(0,n.default)("youtube-player"),y={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){f('event "%s"',n,t),e.trigger(r,t)}},n=!0,o=!1,l=void 0;try{for(var d,y=c.default[Symbol.iterator]();!(n=(d=y.next()).done);n=!0){r(d.value)}}catch(e){o=!0,l=e}finally{try{!n&&y.return&&y.return()}finally{if(o)throw l}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&l.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=l.default[n],o=e.getPlayerState(),c=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var o=e.getPlayerState(),c=void 0;"number"==typeof t.timeout&&(c=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(c),r())}))})).then((function(){return c})):c}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){return e[n].apply(e,r)}))}},c=!0,d=!1,f=void 0;try{for(var y,h=o.default[Symbol.iterator]();!(c=(y=h.next()).done);c=!0){var m=y.value;n(m)}}catch(e){d=!0,f=e}finally{try{!c&&h.return&&h.return()}finally{if(d)throw f}}return r}};t.default=y,e.exports=t.default},157:function(e,t,r){(function(n){function o(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG),e}(t=e.exports=r(158)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,c=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(c=o))})),e.splice(c,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())}).call(this,r(67))},158:function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,c=o-(n||o);e.diff=c,e.prev=n,e.curr=o,n=o;for(var l=new Array(arguments.length),i=0;i<l.length;i++)l[i]=arguments[i];l[0]=t.coerce(l[0]),"string"!=typeof l[0]&&l.unshift("%O");var d=0;l[0]=l[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;d++;var o=t.formatters[n];if("function"==typeof o){var c=l[d];r=o.call(e,c),l.splice(d,1),d--}return r})),t.formatArgs.call(e,l);var f=r.log||t.log||console.log.bind(console);f.apply(e,l)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var i,r=0;for(i in e)r=(r<<5)-r+e.charCodeAt(i),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,i=0;i<n;i++)r[i]&&("-"===(e=r[i].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var i,r;for(i=0,r=t.skips.length;i<r;i++)if(t.skips[i].test(e))return!1;for(i=0,r=t.names.length;i<r;i++)if(t.names[i].test(e))return!0;return!1},t.humanize=r(159),t.names=[],t.skips=[],t.formatters={}},159:function(e,t){var s=1e3,r=60*s,n=60*r,o=24*n,c=365.25*o;function l(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){t=t||{};var d,f=typeof e;if("string"===f&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var l=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return l*c;case"days":case"day":case"d":return l*o;case"hours":case"hour":case"hrs":case"hr":case"h":return l*n;case"minutes":case"minute":case"mins":case"min":case"m":return l*r;case"seconds":case"second":case"secs":case"sec":case"s":return l*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}(e);if("number"===f&&!1===isNaN(e))return t.long?l(d=e,o,"day")||l(d,n,"hour")||l(d,r,"minute")||l(d,s,"second")||d+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=s)return Math.round(e/s)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},160:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},161:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(163),c=(n=o)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[c.default.ENDED,c.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[c.default.ENDED,c.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[c.default.ENDED,c.default.PLAYING,c.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},163:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},166:function(e,t,r){"use strict";var n=r(139).a,o=r(2),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);t.a=component.exports},175:function(e,t,r){var content=r(202);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("df8dc302",content,!0,{sourceMap:!1})},191:function(e,t,r){"use strict";var n=r(148),o=r.n(n),c=r(18),l=r(166),d=r(149),f={components:{IntersectionObserver:l.a,SpeedkitPicture:d.a},props:{id:{type:String,required:!0},autoplay:{type:Boolean,default:!1}},data:()=>({playing:!1,loading:!1,player:null,playerReady:new c.a,deferred:new c.a}),computed:{sources(){return[{src:`https://img.youtube.com/vi/${this.id}/maxresdefault.jpg`,sizes:this.sizes}]}},methods:{async onClick(){this.deferred.resolve(),await this.play()},async onEnter(){this.deferred.resolve(),this.autoplay&&await this.play()},async play(){this.loading=!0,await this.playerReady.promise,this.player.playVideo()},async onLoad(){await this.deferred.promise,this.loadPlayer()},loadPlayer(){this.player=o()(this.$refs.youtube,{host:"https://www.youtube-nocookie.com",videoId:this.id,playerVars:{playsinline:1,modestbranding:1}}),this.player.on("ready",(()=>{this.playerReady.resolve()})),this.player.on("stateChange",(e=>{1===e.data&&(this.loading=!1,this.playing=!0)}))}}},y=(r(201),r(2)),component=Object(y.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("intersection-observer",{attrs:{threshold:[1],"track-visibility":"",delay:350},on:{enter:e.onEnter}},[r("div",{staticClass:"nuxt-speedkit__speedkit-youtube",class:{"js--playing":e.playing,"js--loading":e.loading}},[r("div",{ref:"youtube",attrs:{loading:"lazy"}}),e._v(" "),r("button",{staticClass:"poster",attrs:{"aria-label":"Play"},on:{click:e.onClick}},[r("speedkit-picture",{attrs:{sources:e.sources},on:{load:e.onLoad}}),e._v(" "),e.loading||e.playing?e._e():r("span",{staticClass:"icon"},[r("svg",{attrs:{version:"1.1",viewBox:"0 0 68 48"}},[r("path",{attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),r("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]),e._v(" "),e.loading?r("div",{staticClass:"spinner"},[r("div",{staticClass:"spinner-container"},[r("div",{staticClass:"spinner-rotator"},[r("div",{staticClass:"spinner-left"},[r("div",{staticClass:"spinner-circle"})]),e._v(" "),r("div",{staticClass:"spinner-right"},[r("div",{staticClass:"spinner-circle"})])])])]):e._e()],1)])])}),[],!1,null,"5539ad4a",null);t.a=component.exports},201:function(e,t,r){"use strict";r(175)},202:function(e,t,r){var n=r(3)(!1);n.push([e.i,'div[data-v-5539ad4a]{position:relative;overflow:hidden}.nuxt-speedkit__speedkit-youtube[data-v-5539ad4a]{width:100%}.nuxt-speedkit__speedkit-youtube[data-v-5539ad4a] iframe{position:absolute;top:0;width:100%;height:100%}.nuxt-speedkit__speedkit-youtube .poster[data-v-5539ad4a]{position:relative;display:block;width:100%;padding:0;cursor:pointer;background:transparent;border:none;border-radius:0;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:opacity .2s ease-in}.nuxt-speedkit__speedkit-youtube .poster .icon[data-v-5539ad4a]{position:absolute;top:50%;left:50%;width:68px;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .poster .icon path[data-v-5539ad4a]:first-child{fill:#212121;fill-opacity:.8;transition:fill .1s cubic-bezier(.4,0,1,1),fill-opacity .1s cubic-bezier(.4,0,1,1)}.nuxt-speedkit__speedkit-youtube .poster:hover path[data-v-5539ad4a]:first-child{fill:red;fill-opacity:1;transition:fill .1s cubic-bezier(0,0,.2,1),fill-opacity .1s cubic-bezier(0,0,.2,1)}.nuxt-speedkit__speedkit-youtube svg[data-v-5539ad4a]{transition:opacity .2s linear,transform .2s linear}.nuxt-speedkit__speedkit-youtube.js--playing .poster[data-v-5539ad4a]{pointer-events:none;opacity:0}.nuxt-speedkit__speedkit-youtube .spinner[data-v-5539ad4a]{position:absolute;top:50%;left:50%;z-index:18;width:48px;pointer-events:none;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .spinner[data-v-5539ad4a]:before{display:block;padding-top:100%;content:""}.nuxt-speedkit__speedkit-youtube .spinner .spinner-container[data-v-5539ad4a]{position:absolute;top:50%;left:50%;width:100%;padding-bottom:100%;margin-top:-50%;margin-left:-50%;pointer-events:none;-webkit-animation:spinner-linspin-data-v-5539ad4a 1568.23529647ms linear infinite;animation:spinner-linspin-data-v-5539ad4a 1568.23529647ms linear infinite}.nuxt-speedkit__speedkit-youtube .spinner .spinner-rotator[data-v-5539ad4a]{position:absolute;width:100%;height:100%;-webkit-animation:spinner-easespin-data-v-5539ad4a 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-easespin-data-v-5539ad4a 5332ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left[data-v-5539ad4a]{position:absolute;top:0;right:49%;bottom:0;left:0;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right[data-v-5539ad4a]{position:absolute;top:0;right:0;bottom:0;left:49%;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-circle[data-v-5539ad4a]{position:absolute;box-sizing:border-box;width:200%;height:100%;border:4px solid #b81c22;border-bottom-color:transparent;border-radius:50%}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left .spinner-circle[data-v-5539ad4a]{border-right-color:transparent;-webkit-animation:spinner-left-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-left-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right .spinner-circle[data-v-5539ad4a]{left:-100%;border-left-color:transparent;-webkit-animation:spinner-right-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-right-spin-data-v-5539ad4a 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes rotate-data-v-5539ad4a{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotate-data-v-5539ad4a{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes spinner-linspin-data-v-5539ad4a{to{transform:rotate(1turn)}}@keyframes spinner-linspin-data-v-5539ad4a{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-easespin-data-v-5539ad4a{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes spinner-easespin-data-v-5539ad4a{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes spinner-left-spin-data-v-5539ad4a{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes spinner-left-spin-data-v-5539ad4a{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes spinner-right-spin-data-v-5539ad4a{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes spinner-right-spin-data-v-5539ad4a{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}',""]),e.exports=n}}]);