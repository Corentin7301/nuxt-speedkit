(window.webpackJsonp=window.webpackJsonp||[]).push([[10],Array(127).concat([function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const o={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function r(e){return o[String(e)]}},function(e,t,n){var content=n(135);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("034cbc3a",content,!0,{sourceMap:!1})},function(e,t,n){var content=n(137);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("74502007",content,!0,{sourceMap:!1})},,,function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));const o=function(){const t=e.document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}();function r(){{const t=e.document.createElement("link").relList;return function(element,t){let n={};e.document&&(n=e.document.createElement(element));if(t in n)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}}).call(this,n(6))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(18);class r{constructor(){this.map=new Map}getPromise(e,t){if(!this.map.has(e)){const n=new o.a;this.map.set(e,n.promise),t(n.resolve,n.reject)}return this.map.get(e)}}},function(e,t,n){"use strict";n(128)},function(e,t,n){var o=n(3)(!1);o.push([e.i,"picture[data-v-07eac400]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-07eac400]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-07eac400]{filter:blur(10px);transform:scale(1.1)}",""]),e.exports=o},function(e,t,n){"use strict";n(129)},function(e,t,n){var o=n(3)(!1);o.push([e.i,".nuxt-speedkit__noscript[data-v-e63e686a]{display:block;height:inherit}",""]),e.exports=o},,,,function(e,t,n){"use strict";var o=n(14),r=n(132),A=n(12),c=n(127),l=n(133),d=n(9);const m=new l.a;function h({type:e}){return e===Object(c.a)("webp")}var w={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||!0&this.visible)){const e=function(e,t){return e.filter((source=>!h(source)||h(source)&&t))}(this.preload,r.b),[source]=e;m.getPromise(Object(d.a)(source.srcset),((e,t)=>{Object(r.a)()?data={link:[Object(A.b)(source,this.crossorigin,e)]}:function({srcset:e,sizes:t},n,o=(()=>{})){const img=new Image;img.onload=o,img.crossorigin=n,img.sizes=t,img.srcset=e}(source,this.crossorigin,e)})).then((e=>this.onPreload(e)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(o.a)(this.$el,(()=>{this.visible=!0}))},destroyed(){Object(o.b)(this.$el)},methods:{onPreload(e){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")}}},f=(n(134),n(2)),component=Object(f.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("picture",{style:e.style},[e._l(e.imageSources,(function(source,e){return n("source",{key:e,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),e._v(" "),n("img",{ref:"image",class:{"in-progress":e.inProgress},attrs:{loading:"lazy",alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],2)}),[],!1,null,"07eac400",null);t.a=component.exports},function(e,t,n){"use strict";n(136);var o=n(2),component=Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"e63e686a",null);t.a=component.exports},,function(e,t,n){var content=n(164);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("6299c55a",content,!0,{sourceMap:!1})},function(e,t,n){"use strict";var o=n(127),r=n(12),A=n(141),c=n(142),l={components:{CustomPicture:A.a,CustomNoScript:c.a},props:{sources:{type:Array,default:()=>[]},placeholders:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:()=>({noscript:[Object(r.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},methods:{getPlaceholders(){return this.placeholders.map((({media:e,url:t,format:n})=>({media:e,url:t,type:Object(o.a)(n)})))},getSources(){return this.sources.map((({sizes:e,format:t,media:n})=>({media:n,srcset:e.map((({width:e,url:t})=>e?`${t} ${e}w`:t)).join(", "),sizes:e.map((({width:e,media:t})=>t?`${t} ${e}px`:`${e}px`)).reverse().join(", "),type:Object(o.a)(t)})))}}},d=(n(163),n(2)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[n("custom-no-script",[n("custom-picture",{attrs:{sources:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],1),e._v(" "),n("custom-picture",e._g({attrs:{sources:e.resolvedPlacholders,preload:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}},e.$listeners)),e._v(" "),e.hasSlot?n("figcaption",[e._t("caption")],2):e._e()],1)}),[],!1,null,"06f20260",null);t.a=component.exports},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n(144)},function(e,t,n){var o=n(3)(!1);o.push([e.i,".nuxt-speedkit__speedkit-picture[data-v-06f20260]{width:100%;height:inherit;margin:0}",""]),e.exports=o},,,,,,,,,,,,function(e,t,n){var content=n(291);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("4cc69e4e",content,!0,{sourceMap:!1})},function(e,t,n){var content=n(293);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("5311b5dd",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"img/576.f83ae28.webp"},function(e,t,n){e.exports=n.p+"img/768.cb92a1d.webp"},function(e,t,n){e.exports=n.p+"img/1024.c50907f.webp"},function(e,t,n){e.exports=n.p+"img/1280.3e3f9ac.webp"},function(e,t,n){e.exports=n.p+"img/1680.85d353d.webp"},function(e,t,n){e.exports=n.p+"img/1920.5739e31.webp"},function(e,t,n){e.exports=n.p+"img/576.694773c.jpg"},function(e,t,n){e.exports=n.p+"img/768.454bc70.jpg"},function(e,t,n){e.exports=n.p+"img/1024.938fe57.jpg"},function(e,t,n){e.exports=n.p+"img/1280.2e1f5c8.jpg"},function(e,t,n){e.exports=n.p+"img/1680.86d5950.jpg"},function(e,t,n){e.exports=n.p+"img/1920.4bdc6b5.jpg"},function(e,t,n){e.exports=n.p+"img/414.a0f5077.webp"},function(e,t,n){e.exports=n.p+"img/414.01a8fcc.jpg"},function(e,t,n){e.exports=n.p+"img/414.2959315.webp"},function(e,t,n){e.exports=n.p+"img/576.24ab176.webp"},function(e,t,n){e.exports=n.p+"img/768.17074af.webp"},function(e,t,n){e.exports=n.p+"img/1024.4186569.webp"},function(e,t,n){e.exports=n.p+"img/1280.af3abdb.webp"},function(e,t,n){e.exports=n.p+"img/414.4c00400.jpg"},function(e,t,n){e.exports=n.p+"img/576.65e4eb6.jpg"},function(e,t,n){e.exports=n.p+"img/768.a1dfc54.jpg"},function(e,t,n){e.exports=n.p+"img/1024.d6d18e1.jpg"},function(e,t,n){e.exports=n.p+"img/1280.a766dca.jpg"},function(e,t,n){e.exports=n.p+"img/placeholder_landscape.fc0a41b.jpg"},function(e,t,n){e.exports=n.p+"img/placeholder_portrait.17d3a36.jpg"},function(e,t,n){e.exports=n.p+"img/576.087d6df.webp"},function(e,t,n){e.exports=n.p+"img/768.e133e2d.webp"},function(e,t,n){e.exports=n.p+"img/1024.693554f.webp"},function(e,t,n){e.exports=n.p+"img/1280.3f61846.webp"},function(e,t,n){e.exports=n.p+"img/1680.11c0580.webp"},function(e,t,n){e.exports=n.p+"img/1920.9e702f1.webp"},function(e,t,n){e.exports=n.p+"img/576.7fa687b.jpg"},function(e,t,n){e.exports=n.p+"img/768.5ff9fd5.jpg"},function(e,t,n){e.exports=n.p+"img/1024.54e9af8.jpg"},function(e,t,n){e.exports=n.p+"img/1280.df077f3.jpg"},function(e,t,n){e.exports=n.p+"img/1680.c731814.jpg"},function(e,t,n){e.exports=n.p+"img/1920.78038a0.jpg"},function(e,t,n){e.exports=n.p+"img/414.5d8501e.webp"},function(e,t,n){e.exports=n.p+"img/414.21076cd.jpg"},function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAATAB4DAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABAcFBggD/8QAGAEBAQEBAQAAAAAAAAAAAAAAAwQCAAH/2gAMAwEAAhADEAAAADMPRid3ZxN+cratU4l2cshSFlc7mDZJ1wsNVL//xAArEAABBAEEAQMBCQAAAAAAAAABAgMEEQUABhIhIgcTURQkMTJBU2FxgdH/2gAIAQEAAT8AxPovmI7nJzBJe65ckOoVQ0d64SBmGIjX0iYrvuKQ9LW4DICDRS3wSQlR7KeV3rGbLiPkOke8g0UnhZogEXX50dSdmRvBQiOAVVe0f81P9VdxZvagaZysGEucx9oRDYWXG2lAJJKifH4AHar1j/S/C7X3dt9qVMl51lqamPNZjAcMeVi23KT97Z68tYvPRMa3IYkj2KJS2tBHEpAFLKQLAP76c3/hmk0rKNJd/RLoSpI+TevTHCQNz7RjTsrFRIlFxTBX2i20L8E0mhQvR2HgITGOVGhutF5wpXwlOjkPj8Wl4tgPxWOcotIWWwkynTaeZ6Pl2P51l0IhyBCabQI6CpQCkBRvrsqNk/2df//EAB0RAAIDAAIDAAAAAAAAAAAAAAACAQMSEzEQEVH/2gAIAQIBAT8AmiwVGby99jLkWWUWzWTCiRBxJ8OFNdC1r66P/8QAHxEBAAEDBAMAAAAAAAAAAAAAAgADEBEBEhMyMVFS/9oACAEDAQE/ACzME9riiTZ0l2mxfNuZ+5yLbNWs+Z//2Q=="},function(e,t,n){e.exports=n.p+"img/placeholder_portrait.02fb7e7.jpg"},function(e,t,n){e.exports=n.p+"img/576.513e63b.webp"},function(e,t,n){e.exports=n.p+"img/768.39c8d6e.webp"},function(e,t,n){e.exports=n.p+"img/1024.808e056.webp"},function(e,t,n){e.exports=n.p+"img/1280.9614a45.webp"},function(e,t,n){e.exports=n.p+"img/1680.26e79db.webp"},function(e,t,n){e.exports=n.p+"img/1920.6815870.webp"},function(e,t,n){e.exports=n.p+"img/576.413adc8.jpg"},function(e,t,n){e.exports=n.p+"img/768.fb1f53b.jpg"},function(e,t,n){e.exports=n.p+"img/1024.f1da684.jpg"},function(e,t,n){e.exports=n.p+"img/1280.a7334d5.jpg"},function(e,t,n){e.exports=n.p+"img/1680.b716dfb.jpg"},function(e,t,n){e.exports=n.p+"img/1920.c5148d8.jpg"},function(e,t,n){e.exports=n.p+"img/414.ac6072d.webp"},function(e,t,n){e.exports=n.p+"img/414.0e504a2.jpg"},function(e,t,n){"use strict";n(176)},function(e,t,n){var o=n(3)(!1);o.push([e.i,".component-stage[data-v-a7dfba1a]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-a7dfba1a]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-a7dfba1a]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-a7dfba1a]{font-size:40px;line-height:80px}}.component-stage h1[data-v-a7dfba1a]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-a7dfba1a]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}",""]),e.exports=o},function(e,t,n){"use strict";n(177)},function(e,t,n){var o=n(3)(!1);o.push([e.i,".page-full-example-with-components[data-v-17f65b01]{padding:0 0 25px;font-size:1.25em}.page-full-example-with-components>*[data-v-17f65b01]{margin:25px 0}.page-full-example-with-components[data-v-17f65b01]>:first-child{margin-top:0}",""]),e.exports=o},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o={components:{SpeedkitPicture:n(145).a},props:{picture:{type:Object,default:()=>({})},headline:{type:String,default:()=>"Headline"},claim:{type:String,default:()=>"Claim"}}},r=(n(290),n(2)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-stage"},[n("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1)),e._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),e.$getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[e._v(e._s(e.headline))]),e._v(" "),n("span",{staticClass:"claim"},[e._v(e._s(e.claim))])])],1)}),[],!1,null,"a7dfba1a",null);t.default=component.exports},,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var o={asyncData:()=>({contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"nuxt-speedkit",claim:"powered by Grabarz & Partner",picture:{placeholders:[{media:"(min-width: 576px)",format:"jpg",url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCAATAB4DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUIBgf/xAAZAQACAwEAAAAAAAAAAAAAAAACBAEDBQD/2gAMAwEAAhADEAAAAKNUucnAdw85i2eMLQaIOpGBUN1WFqZOqKAeLO9P/8QAKxAAAQMDBAEDAgcAAAAAAAAAAgEDBAUREgAGByExExRBM2EjJDJDUXHh/9oACAEBAAE/ANrclUGYB+2ZqZqyKEf5ayD/AAile19UnkeiSBd92EqEIdg4tnWnB+VzHoVTu6FbXI3JG1Ns7Pk7gmVUH2GgFWm2DzOQpLYUH+1+dce8s0bkOBJkw2HYjsZ1LNGX1mivi4N/uioqao9X5PpLrCUmk16NSKUzEhTqVIZuwyRX9QrfuOkSp2i9dqq21O3Dv+k7pearu2a9ECSZswIMeyFULWVTaMboaY+E8LftU1zGxyzPoBpD463WFMbAJriyKYaOP26Fs0G6iQa4Pm1k9xHEl0Sr0dpqAag7UmXIzf62/wAPNQXIvKolvF9UOfKXf7tDzD2CUpJXo+kP1Fdxvla9rfF7apThFWWxLEsWCESIUUhHLwheUT7a3JVajErEZuNMdbA6ijJCi9KGK9f751vCU+U3EzyS6rYhRdf/xAAmEQACAAUDAgcAAAAAAAAAAAABAgADBBEhBRIxFKEgQVGRsdHw/9oACAECAQE/ABrUg8K3sPuJerJkTVK9x2iZqUhcBrnyEU1cJpKthh6cQEO1ke185iZSTWsFPziKTT2QjeM3/GOkO697QAAePB//xAAmEQABAwIDCQEAAAAAAAAAAAABAAIDBBEhMUEFEBMVMkJRkaGx/9oACAEDAQE/AOVzAdTU7Zs2HDId8/VHQzuNi2w8qooXRWLcQfaL2XBbdRzQgEk5KWqjIJBT6oOAbmu260Wm7//Z"},{format:"jpg",url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAtAB4DAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAABwgGCQX/xAAbAQABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//aAAwDAQACEAMQAAAA7Jmh/hN1leUfv030JZCzp+Ks9p7232CDPBvUueeirnVm/eBHNytmDspagXsYJ7ImG10YHk03AA/K68fTi7UME+lSN0//xAAyEAABAwIFAQQIBwAAAAAAAAABAgMEBQYABxESIQgJEzFBChQiMlFhYnEVFlJTcoGR/9oACAEBAAE/AJ0x3n2WAB9RxU5zmnBj6/3i4H5LDRKw2gK/UhWLjnvF3l1gc/tHD96Qn55hJcbM4oLgj96kOEa/A6Y7QztF6VkBNi2fR31/mFxZerTjRJVT44bKwwgp5W+4Sn2Uc6eYxbvaqV2lZk0qtUCVFqFHjVJqBcNNfRIZekxXeUuhtalAKQoKT9yk6jE7NaHc1DgVijw5NQpdVaTJiOpdQA40oapVqf8ANPiDhjqPq9516ZAnVGWu2rHYakyQnc6qU2ptam2xqdyypWmvJOiFYz9zNpWaXVLbtRce/E7cuGcmPVCl0spQ0pSg4d3BQUEIUk8Ecg46WVohZWyiIzbFfYrURffLWV+uQXWVtH3iSO7kJSo7fJ7djoQv9d4zallnKnQobdpMKlRXX4InkAuBDjQJUn2QVII/ljPfqnlUsQrXamNs1Z2MoS3F8JdLKlNB0aEbzt00T9Zxd+ZFQy4mpkzYhqFOrz57xxtJR3iR724HXVQ1HI8QSD4DETNik1VcVqlsRI6xtLXq7W0L18Eaa6p0Og+eOzEzhp7Gbd3VgUG6bnapFJj0epzLet52uoanLcLuxwNOJ2HY2QFchRQrF/8Ao7OUGZjNCnT76vtio0OKGGH2iyVFBWVKC1bQVlXmSMdSnozFuZiUmAi1sza/R2KfvcLb0FE5bz54BSorQUJ+OJno01wW28WF5q1GKgsnvZTNvI0UfuH9cdAHRDeHZei5Y9uVRm9YV29wZTFRiLgJYeY3gONrQVFQIcIIVig3PIuinqrCXH4hlylRxGQ5q02WyUagaeCiNxB8/PGSvUDVLtvm6bbqUdmU3a76YUaepxfrsoFRBU+rXYo6njahHAA5PJvSummyXGkMoJKuFlR1BPnhy7JVRq8uOQ2hMdXvJB1Ufnj/xAArEQABAwIFAwIHAQAAAAAAAAABAAIDBBEFEiFBsRMiURQxECNSYZGhwfD/2gAIAQIBAT8AzBZ/CIduEHBCsZuFimM9Y+lo3W+pw4B5TZqjD5RJC8m+17tduQ4HzsQocUjljEsbTldqFJVVVQR15C4D7nhYUTkdFe3iyqCXPGZxNttt1gdTklfTSGzbZhwR/VQ0RLS540044VDSRv1j7cv+/BU1O7KSRYrCqD53VeO3LYeTr767aKLB4o43RsOhVNR+nByC6IN++O6dUSB/Uy6+26CPa8s8Afv4By//xAApEQABAwMEAQEJAAAAAAAAAAABAAIDBBEhBRIiURMxFEJhcZGhscHh/9oACAEDAQE/AA5oW1N25sVZChf2tJ0fx3qaobgBxb2eyOul7JBqEHjewA99dEH8gqWgkje6J5yDY4KZBFGSY2AE/BTj3rXVNGws4gBrh9FrEIxUMGb2P6UjuVmqokczi7N/uP4qaoY0jNwOu1qNXeKzTku7wLD0+eUNWmDw+wwqjUDUW34N/UI1BLTsdZRxN2eIHAyjxwcoC8Yl7Tcrav/Z"}],sources:[{media:"(min-width: 576px)",format:"webp",sizes:[{width:576,media:"(min-width: 576px)",url:n(234)},{width:768,media:"(min-width: 768px)",url:n(235)},{width:1024,media:"(min-width: 1024px)",url:n(236)},{width:1280,media:"(min-width: 1200px)",url:n(237)},{width:1680,media:"(min-width: 1600px)",url:n(238)},{width:1920,media:"(min-width: 1900)",url:n(239)}]},{media:"(min-width: 576px)",format:"jpg",sizes:[{width:576,media:"(min-width: 576px)",url:n(240)},{width:768,media:"(min-width: 768px)",url:n(241)},{width:1024,media:"(min-width: 1024px)",url:n(242)},{width:1280,media:"(min-width: 1200px)",url:n(243)},{width:1680,media:"(min-width: 1600px)",url:n(244)},{width:1920,media:"(min-width: 1900)",url:n(245)}]},{format:"webp",sizes:[{width:414,media:"all",url:n(246)}]},{format:"jpg",sizes:[{width:414,media:"all",url:n(247)}]}]}},youtubePlayer:{id:"cLKvbhfVBUU",poster:{alt:"Youtube Alt Text",title:"Youtube Title Text",placeholders:[{url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAARAB4DAREAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAACQMEBQYIB//EABoBAAIDAQEAAAAAAAAAAAAAAAUGAwcIAgT/2gAMAwEAAhADEAAAAL/mlzd2cDRdodE5AZQ02iErjZJzyzB5QMfMY/7M7yhbfjjDgAj+TT//xAAzEAABBAEDAgIEDwAAAAAAAAADAQIEBQYHCBIAEwkUESE0tQoiIzEyODlEUnF0d4Wxwf/aAAgBAQABPwCi1T0mu90+rGLZtbQ7KZXam2ieQk2RkSPHFLltcNwWGa74xSBf3Gqz2djPWjndar5lothVCWAF0ZbCxvp46mW47O+NEWM5FkfKL6ERCPZw4B5cWF+ZURd3e73SfAtqcCNjmR0MuZFrYZzUr6aQK1kTpTWIEQJJIyJGRpiCIc6Gd6QOZ2Gk4qI3hpjhZxt3wDWWznMW6tMZsgzgxwvjhlkbYow0sQF9fYe4LXBcTm/slYqOa1/BPGg0aq9A93WtmVZHf5HKFf6iOdhjI1DBlRbOeaFX3FnElvWQwkJkUVvE7T0iyUPz4uVjmvf1gO3TevqXtdibmtG8M1QyulBGv7/I59jTVddQ1ceuIB8osGS6Uq2DlRyNcHywubwyRhbKWKbhg25bLbKmBjWp8CzFjnkXjivszuA8TDSpKlIApEK9zAuJ3G8WPdzG9PpK3rwD/EV1G3Vai1O3rP6Or7enmkJ41Tb1cvsukRI8mphgHIi/jYIbOJUX1N68e/7WnWT+G9zQuq/2Cu/Wk/pevvTvy/1OvguP1/co/ZWf71p+v//EACwRAAIBAgUEAAQHAAAAAAAAAAECAwQRAAUGEiEHCBMyEBQ3szFBQlFhcnT/2gAIAQIBAT8A0jlM9b04yVxUNCpo4BuEcbG/jiKkGVHW6qpX1PD/ALhSNN5BI8C1MzpKWNnHhQJdVNzEBZ4y7lWbySTgKmxQpYvifIqSKlMvyyWHPqv4A8n1x3bLlsWhqVIoFR/mY/0ruF4Z7ji9vyuAbXGOg+uJ876d5NQ0sUYMVOon3O4KIrzU8DoPGUkMr00m9TLGY8P1a0pp/WD5BmNRBFOWgSNVeRpXkn3bFeJYQIxxe5lcbXQyCISR7mzFWppEQiR19eS3NgQH5PP8m3FjjvFomOi6WsBsWqlDC3FzDLYg2FrWPGO376PZT/R/uP8AAemO7/6Y0f8Asj+zUY//xAArEQEAAgAGAQIDCQAAAAAAAAABAhEAAwQSITEFE0EGFFEyNDVxcpGxsvH/2gAIAQMBAT8AzPR+YnAgKNvPPP1r2eeHGvz/AEs5yCVbYx920b7rh6eSMcePzdPLV+m5pFbO15euD6/ud48Vp5afV5kvUJnISN22XIEjcRlSFm6MZU0h1jWePI+Rnm6pZlu3bxfuD2m0Yl07q6MeQ0Of5CfrQkzE5ZBJojXKrb7WF8Xa4loDL1Uc6NwJfbqgOW9hwhtSjlu6THw/qZkJZAFHTxYClVb3d3/r5b8Qn+UP6GDrE+nHg/vsv0v8mP/Z"}],sources:[{format:"webp",sizes:[{width:414,media:"",url:n(248)},{width:576,media:"(min-width: 576px)",url:n(249)},{width:768,media:"(min-width: 768px)",url:n(250)},{width:1024,media:"(min-width: 1024px)",url:n(251)},{width:1280,media:"(min-width: 1200px)",url:n(252)}]},{format:"jpg",sizes:[{width:414,media:"",url:n(253)},{width:576,media:"(min-width: 576px)",url:n(254)},{width:768,media:"(min-width: 768px)",url:n(255)},{width:1024,media:"(min-width: 1024px)",url:n(256)},{width:1280,media:"(min-width: 1200px)",url:n(257)}]}]}},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{placeholders:[{media:"(min-width: 576px)",url:n(258)},{url:n(259)}],sources:[{media:"(min-width: 576px)",format:"webp",sizes:[{width:576,media:"(min-width: 576px)",url:n(260)},{width:768,media:"(min-width: 768px)",url:n(261)},{width:1024,media:"(min-width: 1024px)",url:n(262)},{width:1280,media:"(min-width: 1200px)",url:n(263)},{width:1680,media:"(min-width: 1600px)",url:n(264)},{width:1920,media:"(min-width: 1900)",url:n(265)}]},{media:"(min-width: 576px)",format:"jpg",sizes:[{width:576,media:"(min-width: 576px)",url:n(266)},{width:768,media:"(min-width: 768px)",url:n(267)},{width:1024,media:"(min-width: 1024px)",url:n(268)},{width:1280,media:"(min-width: 1200px)",url:n(269)},{width:1680,media:"(min-width: 1600px)",url:n(270)},{width:1920,media:"(min-width: 1900)",url:n(271)}]},{format:"webp",sizes:[{width:414,media:"all",url:n(272)}]},{format:"jpg",sizes:[{width:414,media:"all",url:n(273)}]}]}},imageTextB:{alignRight:!0,text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{placeholders:[{media:"(min-width: 576px)",url:n(274)},{url:n(275)}],sources:[{media:"(min-width: 576px)",format:"webp",sizes:[{width:576,media:"(min-width: 576px)",url:n(276)},{width:768,media:"(min-width: 768px)",url:n(277)},{width:1024,media:"(min-width: 1024px)",url:n(278)},{width:1280,media:"(min-width: 1200px)",url:n(279)},{width:1680,media:"(min-width: 1600px)",url:n(280)},{width:1920,media:"(min-width: 1900)",url:n(281)}]},{media:"(min-width: 576px)",format:"jpg",sizes:[{width:576,media:"(min-width: 576px)",url:n(282)},{width:768,media:"(min-width: 768px)",url:n(283)},{width:1024,media:"(min-width: 1024px)",url:n(284)},{width:1280,media:"(min-width: 1200px)",url:n(285)},{width:1680,media:"(min-width: 1600px)",url:n(286)},{width:1920,media:"(min-width: 1900)",url:n(287)}]},{format:"webp",sizes:[{width:414,media:"all",url:n(288)}]},{format:"jpg",sizes:[{width:414,media:"all",url:n(289)}]}]}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}),speedkitComponents:{ComponentStage:()=>Promise.resolve().then(n.bind(null,314)),ComponentTextA:()=>n.e(1).then(n.bind(null,329)),ComponentTextImage:()=>n.e(23).then(n.bind(null,332)),ComponentTextB:()=>n.e(2).then(n.bind(null,331)),ComponentSpeedkitYoutube:()=>Promise.all([n.e(0),n.e(20)]).then(n.bind(null,323))},methods:{onLoadFont(e){}}},r=(n(292),n(2)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-full-example-with-components"},[n("component-stage",e._b({},"component-stage",e.stage,!1)),e._v(" "),n("component-text-a",e._b({},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextA,!1)),e._v(" "),n("ComponentSpeedkitYoutube",e._b({},"ComponentSpeedkitYoutube",e.youtubePlayer,!1)),e._v(" "),n("component-text-a",e._b({},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextB,!1)),e._v(" "),n("component-text-b",e._b({},"component-text-b",e.textB,!1))],1)}),[],!1,null,"17f65b01",null);t.default=component.exports}])]);