(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{105:function(e,t,o){var content=o(110);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(6).default)("6ff4a064",content,!0,{sourceMap:!1})},106:function(e,t,o){var content=o(112);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(6).default)("40ede033",content,!0,{sourceMap:!1})},107:function(e,t,o){"use strict";(function(e){let n;function r(){return n||(n=new Promise(t=>{const img=new e.Image;img.onload=()=>t(!0),img.onerror=()=>t(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),n}function l(element,t){let o={};return e.document&&(o=e.document.createElement(element)),t in o}o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return l}))}).call(this,o(3))},108:function(e,t,o){var content=o(114);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(6).default)("64109a53",content,!0,{sourceMap:!1})},109:function(e,t,o){"use strict";o(105)},110:function(e,t,o){(t=o(5)(!1)).push([e.i,'.nuxt-speedkit__image-container[data-v-cf96f8a0]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-cf96f8a0]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),e.exports=t},111:function(e,t,o){"use strict";o(106)},112:function(e,t,o){(t=o(5)(!1)).push([e.i,".nuxt-speedkit__noscript[data-v-dd0bafc0]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=t},113:function(e,t,o){"use strict";o(108)},114:function(e,t,o){(t=o(5)(!1)).push([e.i,".nuxt-speedkit__custom-image[data-v-f068eaf6]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},115:function(e,t,o){"use strict";var n={props:{loading:{type:Boolean,default:()=>!1}},computed:{hasSlot(){return this.$slots.caption}}},r=(o(109),o(2)),component=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("figure",{staticClass:"nuxt-speedkit__image-container"},[this._t("default"),this._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"}),this._v(" "),this.hasSlot?t("figcaption",[this._t("caption")],2):this._e()],2)}),[],!1,null,"cf96f8a0",null);t.a=component.exports},116:function(e,t,o){"use strict";var n=o(12),r=o(107),l=o(118);var c={props:{preload:{type:Array,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},fetchOnServer:!1,data(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},async fetch(){this.webpSupport=await Object(r.b)()},head(){return this.preload&&this.visible&&this.preload&&this.preload.length?Object(l.a)((e=this.preload,this.webpSupport&&e.find(source=>"image/webp"===source.type)||e.find(source=>"image/webp"!==source.type)),()=>this.onPreload(),this.crossorigin):{};var e},mounted(){Object(n.a)(this.$el,()=>{this.visible=!0})},destroyed(){Object(n.b)(this.$el)},methods:{onLoad(e){this.preloaded&&this.$emit("load",e.target)},onPreload(){this.preloaded=!0,this.$emit("preload")}}},d=(o(113),o(2)),component=Object(d.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:this.crossorigin},on:{load:this.onLoad}})}),[],!1,null,"f068eaf6",null);t.a=component.exports},117:function(e,t,o){"use strict";o(111);var n=o(2),component=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"dd0bafc0",null);t.a=component.exports},118:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var n=o(17);var r=o(10),l=o(107);const c=new class{constructor(){this.map=new Map}getEntry(e){return this.map.has(e)||this.map.set(e,new n.a),this.map.get(e)}};function d(e,t,o){const n=Object(r.a)(e.srcset),d=c.getEntry(n);return d.promise.then(()=>t()),Object(l.a)("link","imageSrcset")?{link:[h(e,n,d.resolve,o)]}:function(e,t,o){const img=new Image;img.onload=t,img.crossorigin=o,img.srcset=e.srcset}(e,d.resolve,o)}function h(e,t,o,n){return{hid:t,rel:"preload",as:"image",crossorigin:n,callback:o,imageSrcset:e.srcset}}},119:function(e,t,o){"use strict";var n=o(115),r=o(117),l=o(116),c={components:{ImageContainer:n.a,CustomNoScript:r.a,CustomImage:l.a},props:{sources:{type:Array,default:()=>[]},placeholder:{type:Object,default:()=>({})},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},width:{type:Number,default:()=>null},height:{type:Number,default:()=>null},crossorigin:{type:String,default:()=>"anonymous"}},data(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{preparedPlaceholder(){return Object.assign({base64:void 0,url:void 0},this.placeholder)},hasSlot(){return this.$slots.caption}},mounted(){this.loading=!0},methods:{onLoad(e){this.loading=!1,this.$emit("load")},onPreload(){this.preloadedSources=this.sources}}},d=o(2),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("image-container",{staticClass:"nuxt-speedkit__speedkit-picture",attrs:{loading:e.loading},scopedSlots:e._u([{key:"default",fn:function(){return[o("picture",[e._l(e.preloadedSources,(function(source,t){return o("source",e._b({key:t},"source",source,!1))})),e._v(" "),o("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.preparedPlaceholder.base64,preload:e.sources,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2),e._v(" "),o("custom-no-script",[o("picture",[e._l(e.sources,(function(source,t){return o("source",e._b({key:t},"source",source,!1))})),e._v(" "),o("custom-image",e._b({on:{load:e.onLoad,preload:e.onPreload}},"custom-image",{src:e.preparedPlaceholder.url,width:e.width,height:e.height,alt:e.alt,title:e.title,crossorigin:e.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[e._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);t.a=component.exports},120:function(e,t,o){var n={src:o.p+"img/3bdc01d.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff1' d='M2264 1223.4L154.8 2254.7l2146.9 290.6z'/%3E%3Cpath fill='%23461f00' d='M-145.3 689l2043.7-834.3-806.2 1950z'/%3E%3Cpath fill='%23340000' d='M-145.3 2376.6V-51.6l487.5 778.2z'/%3E%3Cpath fill='%23fae0a6' d='M2320.3 2207.8L417.2 2545.3 182.8 1354.7z'/%3E%3Cpath fill='%23371b05' d='M932.8 754.7l-450-900L1936 801.6z'/%3E%3Cpath fill='%23b8ae8f' d='M511 1242.2l121.8-421.9 1518.8 206.3z'/%3E%3Cpath fill='%23692500' d='M1364 1786l-459.3-628.2 787.5 18.8z'/%3E%3Cpath fill='%23f1c88a' d='M1673.4 42.2l703.2-187.5 168.7 1096.9z'/%3E%3Cpath fill='%23bc7b29' d='M295.3 792.2l-440.6 1518.7 675 234.4z'/%3E%3Cpath fill='%231b0400' d='M1354.7 736l-281.3-300 647-450z'/%3E%3Cpath fill='%23eeebc7' d='M2207.8 1092.2l-140.6 1256.2-1284.4 197z'/%3E%3Cpath fill='%23b97e3b' d='M698.4 1045.3l-843.7-881.2 956.2 309.3z'/%3E%3Cpath fill='%23220500' d='M389 595.3l-534.3 1209.4V932.8z'/%3E%3Cpath fill='%23e5ca9e' d='M1617.2 1045.3l-206.3 318.8 65.7-768.8z'/%3E%3Cpath fill='%23d1912d' d='M1139 257.8L145.4-145.3h1837.5z'/%3E%3Cpath fill='%23040000' d='M1007.8 1017.2l-37.5 393.7 271.9 159.4z'/%3E%3Cpath fill='%239c6c38' d='M1711 1711l-262.6-122 459.4-665.6z'/%3E%3Cpath fill='%2382500e' d='M2545.3 1026.6l-140.6 1200-168.8-1059.4z'/%3E%3Cpath fill='%23d0ad8e' d='M1720.3 126.6l468.8-272-272 1247z'/%3E%3Cpath fill='%23e4be86' d='M1036 1804.7l-900-253.1 328 993.7z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};e.exports=n.preview,e.exports=Object.assign(e.exports,n)},123:function(e,t,o){e.exports={srcSet:o.p+"img/00b4f63-480.webp 480w,"+o.p+"img/7e328ce-768.webp 768w,"+o.p+"img/ff303bf-960.webp 960w,"+o.p+"img/011a37a-1080.webp 1080w,"+o.p+"img/104d21d-1200.webp 1200w,"+o.p+"img/dd4364f-1536.webp 1536w,"+o.p+"img/13f3ee4-2160.webp 2160w,"+o.p+"img/1ab22ac-2400.webp 2400w",images:[{path:o.p+"img/00b4f63-480.webp",width:480,height:480},{path:o.p+"img/7e328ce-768.webp",width:768,height:768},{path:o.p+"img/ff303bf-960.webp",width:960,height:960},{path:o.p+"img/011a37a-1080.webp",width:1080,height:1080},{path:o.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:o.p+"img/dd4364f-1536.webp",width:1536,height:1536},{path:o.p+"img/13f3ee4-2160.webp",width:2160,height:2160},{path:o.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:o.p+"img/00b4f63-480.webp",toString:function(){return o.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRv4CAABXRUJQVlA4IPICAACwDgCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTK4yZe18qDX144Odt1dx7vKsbg8JfCD6r/zst3dyoHuR1e8z3yYfVHAZIEC4jOSqdWagWrP2JEH2tHObHlZac17xTvvnD9/lEBCcDXrU93rlm9nLgmFzu1uYTMheExe6V1YAA/rhRXFitIlFiUnfkaCxMB3q4+H2j7FJ+uqIBzd2FZXmGQSKbFRJ/APHJXS3+FsIrYXnwsBXhXOqsm/5NcygWAwOy58pW699xO2dmMSRnZ2N66//InVKIsra0tRGQnBnLaG/894gtodAxr77KkJOtr6TMn4+NuQi7eG1E+Z/S67/4vDlI0rgpNxQHuaRpOpl0tUXLn/CP0bt52kUlFH9Fk+38XWsI/aTUyT6uVREShMkiN7Nzi1SiDDdyUBO5YKGVuyhPFO/eFPo46LzK8W7Nwvv3zV1yi1wh4v45wKfdOIv99JRk/eIM0++mOzdLuNY6kEb7F9jYvP58Mz5JfCHXsjqg3EDcXGkXqIrHFKRAxqau7Gk0p857vRKPIL1zaOEJrhyBfIwb3cc0aq431k7OvlFnencXCs+e+5WRS5b+3DBlG7c3AdIiR+OO79Dh8wLLkTujsGEvVvHAy737PA6fM7aYX3M5Rv7H7fMOhEWFcC/RWs9MhGBpf9sWi33oTjLpccFK2HIHa6t50dviHoVKHK7BJvewCErA2qbO61QqJQ1e3vdOHyRv3dtf2JCDtQ9+cSLYVfDi8bKvsr2K+M5PKwGS32rxAB/HDnxstsvlV+m1iudHoxO/s3NcHTpXckxiK0GrrsvPMLwR7tIrRbHtX85AJJ6JtZJYRwAz/asvVFCKPDoxcnPXbvIS7Nauu1EF4ZvidXkvq4oLI74sqIABKbyl6K3ohK9Xzktqq9kbS166PveR0OOTsKXxURZI0T2YWaBW9EQwbuVS3wXSsa38568I11ZSVat1YfwFO9HYoDbB8bYfF6UB8jqtFSrPPivwwAAA",width:480,height:480}},124:function(e,t,o){e.exports={srcSet:o.p+"img/de71c67-480.webp 480w,"+o.p+"img/729de95-768.webp 768w,"+o.p+"img/b9f70ed-960.webp 960w,"+o.p+"img/0d8cbc2-1080.webp 1080w,"+o.p+"img/803a7ac-1200.webp 1200w,"+o.p+"img/5d6bf38-1536.webp 1536w,"+o.p+"img/ad67b53-2160.webp 2160w,"+o.p+"img/84a0d62-2400.webp 2400w",images:[{path:o.p+"img/de71c67-480.webp",width:480,height:480},{path:o.p+"img/729de95-768.webp",width:768,height:768},{path:o.p+"img/b9f70ed-960.webp",width:960,height:960},{path:o.p+"img/0d8cbc2-1080.webp",width:1080,height:1080},{path:o.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:o.p+"img/5d6bf38-1536.webp",width:1536,height:1536},{path:o.p+"img/ad67b53-2160.webp",width:2160,height:2160},{path:o.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:o.p+"img/de71c67-480.webp",toString:function(){return o.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAAAQDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMoR2xI7sjVqiZQstuBzsummxubwX8Sa1izDNKVwoz/RUz/vUfsDim0At7R42LgSfd6INzWRVtjLzkthUEbyLx5q+1kdZeB3nGIBi6vPu3O4CwCEHk4QR79nPUSvngAAP756+GOs5Hd0r5vv8Lc/6iV7u8uAAZ/Sr9YDB6yB1HOWm+ZSg7bhxw6W2ddkIrCMjtHyz/UrOtqOZh5zI+F/y+uR+U4HSljRxbZbAWwMebwcikDV81VuiY3E3HjdoNeV+32aPjZA9rU++YsXzww7Ugp+r4nJetS6zFLhP//xRGjZFbFIi38G3RNZVmrJUX7y28NdbI+76ykfzeGZsR23TLLM355T+u6HjxqgiR+G+4sGhxmciK0zDC84fytRbT8pHmrKzE15x01PqJ5xSd5m0cuBgbpXIqe1030U1Tys1AGA5xNiaKlAUO6LYmkdLVVF8hWtclQbvUiqfpUI87dTwmLv8IcQuVlE5zQSuuN7MDwuX315gDrpEKQ256Be+i8TDGWya2+ZsneZS+J+95HvqYSHQsrpHj29ftNP1NZx+NPQjxvbrqWP/xLi42k7Cfnqd0EwxcTsW9ivBAnFBWc4oL5DsVO6OqHRZGOWXGcm3UIQBkvxB8qrJZ5qw8ac+UbJp5g05e6nSRT2GLvew+m6YneVGCIzLVIi3jB5C2cPa+HDs68xpbBiMsAao6t3SVSyT3CWVshNEDcJJkNChVHL4Xzz3C3rzv3N+sCitWxqdF59wYvAmSfF3kBMYFDlwE3CkBYDrC4SnpqiAH5LRVoSbcsfHHVkNHWZqKjnEOBCE79Y+M2tyGjtdvIdxEJ8UVGvKrJ7H642pNGijTAdmi9Iyv5PqnSszKI++MrdUWmPYZ4hTWCqFpf4/Sed8jWrMV+OnduLa41u4TDZWwyv9F3fT3PhGfFXdj7j5GCCr6mQEBy3hrs1sZK11OyuH9wIW3WRg3J8RgaLgus8M2++F1WTSIsu2LiFwmtVgHMg0yLcCSjQpIFeIcHvBufeLSxuQWpKVKwoMTHN5MjzCr/w2qtHSuP3Kqv3O2Y3hzgSZfEuDENNdBeGayFO55oYQVYrrDxAAAA",width:480,height:480}},125:function(e,t,o){var n={src:o.p+"img/41dd76a.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23a29673' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fff' d='M286 1214L736-145.2l1406.2 2690.6z'/%3E%3Cpath fill='%23311400' d='M2545.3 1232.8L717.2 689.1l1640.6-834.4z'/%3E%3Cpath fill='%231b0700' d='M604.7-145.3l-750 187.5 337.5 1359.4z'/%3E%3Cpath fill='%23fff' d='M1954.7 2086L989 623.3 867 2404.7z'/%3E%3Cpath fill='%23523908' d='M1279.7 1139L1092.2-145.2 2545.3 89z'/%3E%3Cpath fill='%23fff' d='M454.7 426.6l684.4 178-65.7-675z'/%3E%3Cpath fill='%23888927' d='M332.8 2545.3l9.4-1996.9-487.5 1725z'/%3E%3Cpath fill='%23a1943e' d='M2545.3 914v1528.2L1092.2 839z'/%3E%3Cpath fill='%23705d2e' d='M1082.8 2301.6l478.1 243.7-243.7-590.6z'/%3E%3Cpath fill='%23f7ebd5' d='M2545.3 2151.6l-1115.6 140.6 300-346.9z'/%3E%3Cpath fill='%23d3d9d0' d='M351.6 2367.2l543.7-206.3L436 1739.1z'/%3E%3Cpath fill='%23241900' d='M632.8 1523.4l-225-121.8 93.8-178.2z'/%3E%3Cpath fill='%23a49274' d='M548.4 773.4l290.7 309.4L951.6 211z'/%3E%3Cpath fill='%23fffdf6' d='M1120.3 623.4l-440.6 609.4 628.1 693.8z'/%3E%3Cpath fill='%238b7f32' d='M1654.7 2207.8l487.5 337.5 403.1-262.5z'/%3E%3Cpath fill='%2352411a' d='M548.4-145.3l-93.7 900-600 309.4z'/%3E%3Cpath fill='%23726e0d' d='M632.8 1954.7l131.3 590.6-309.4-28.1z'/%3E%3Cpath fill='%23564424' d='M1167.2-117.2L2545.3 736 1186 933z'/%3E%3Cpath fill='%23fff' d='M1195.3 482.8L1036 51.6l-281.2 75z'/%3E%3Cpath fill='%23a17d44' d='M1317.2 1120.3L1729.7-23.4l-75 1425z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};e.exports=n.preview,e.exports=Object.assign(e.exports,n)},126:function(e,t,o){e.exports={srcSet:o.p+"img/59e11e9-480.jpg 480w,"+o.p+"img/19da376-768.jpg 768w,"+o.p+"img/7b1d988-960.jpg 960w,"+o.p+"img/bd65a00-1080.jpg 1080w,"+o.p+"img/de250d4-1200.jpg 1200w,"+o.p+"img/d6672be-1536.jpg 1536w,"+o.p+"img/5d6c464-2160.jpg 2160w,"+o.p+"img/b17eca7-2400.jpg 2400w",images:[{path:o.p+"img/59e11e9-480.jpg",width:480,height:480},{path:o.p+"img/19da376-768.jpg",width:768,height:768},{path:o.p+"img/7b1d988-960.jpg",width:960,height:960},{path:o.p+"img/bd65a00-1080.jpg",width:1080,height:1080},{path:o.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:o.p+"img/d6672be-1536.jpg",width:1536,height:1536},{path:o.p+"img/5d6c464-2160.jpg",width:2160,height:2160},{path:o.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:o.p+"img/59e11e9-480.jpg",toString:function(){return o.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAACAQMDAgUDAwUAAAAAAAABAgMEBREAEiEGMQcUQVFhEyIyFXGRUoKhsdH/xAAZAQADAQEBAAAAAAAAAAAAAAADBAUGAQL/xAAgEQACAwACAwADAAAAAAAAAAABAgADEQQSISIxI0HB/9oADAMBAAIRAxEAPwDYsXU0MFrpoBMqSRyFXz/SSSM8j5/jU/8AEG+X2h6lhWzUzBZ843qRGT6kk8YI5yPbSt0f1Pdau4RVEdMklJC+ZN6BhuxheD++ny8U1deZ6KHyjMatgQ+5V2exAJHHYHHbPbWQUEEI42aggYWUxbm8VJ6aL6MGY6gHbuXBXOcHuNbfgbVXusvs1Xd2lqp6lBJHUSylvsPIVc/iBnt750m3bou9LHZ6iaiSKulUO9O5xJDI277WU+mVB/uOql0nYb305VpDUUsK0rVRijkZjlodqfTcd8AkkZPt86YFFVS/j+wJuZz7eJTKao3Vc+9XBXC/fwc9zn/GjSta6ypN0rKyeq+rHPtQD1VkyO/yMfxo1MvJLnYUAZI/4fdI3Gbo52SqFGs05d5F/IAAcAngfv6aaqa801uqPKGkoo5I4kiaOvnYxsyMSrrIoYlTk5UjnAwdPPh1RQPZVpCowhI599bvUXRNFf7a8Qp44a1AfpTxxorcj9v96Yo5D9y85yK1K9G+SD9L9Xz31LW9xjd6mnkWKVjwXVSdr47424Az6DVEh6nu94q7ikVE5jau8vGIaUkywJtZQJQ34FlwQF3cEZHfXak8KYKcJcq0yC7b1p2jjjOySEnG4hRwy5zntxjjvqr9JdH0nTtRF+ntN5Gng2U0MpO5WJyzH3JJJ01SbQ5YDAYLkGgVj9kfyTvqW0PbLLJe5aXytVLMhqVRNiliO+30PoTo08eKUKt0Tdg2WxTs/wA5HOjSt9evs90vqydeHl1j83W08bAJHNtB+ffVWtNQmQwG7PJJPc+2jRoVJxvELyFB2MVHIrKC6rkDvjXRnEalSePQ/wDdGjVhSeshso7ZJ/4rXKKPpu4whwoaAqze2eBo0aNJn2JJlRB1UAT/2Q==",width:480,height:480}},127:function(e,t,o){e.exports={srcSet:o.p+"img/c8f1ba0-480.jpg 480w,"+o.p+"img/d4c360b-768.jpg 768w,"+o.p+"img/64541ee-960.jpg 960w,"+o.p+"img/ddae62c-1080.jpg 1080w,"+o.p+"img/06e8966-1200.jpg 1200w,"+o.p+"img/100d05f-1536.jpg 1536w,"+o.p+"img/5a01275-2160.jpg 2160w,"+o.p+"img/21b757b-2400.jpg 2400w",images:[{path:o.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:o.p+"img/d4c360b-768.jpg",width:768,height:768},{path:o.p+"img/64541ee-960.jpg",width:960,height:960},{path:o.p+"img/ddae62c-1080.jpg",width:1080,height:1080},{path:o.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:o.p+"img/100d05f-1536.jpg",width:1536,height:1536},{path:o.p+"img/5a01275-2160.jpg",width:2160,height:2160},{path:o.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:o.p+"img/c8f1ba0-480.jpg",toString:function(){return o.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcGCAEEBQP/xAAuEAABAwMDAgUDBAMAAAAAAAABAgMEBREhAAYSMUETIlFhcQcUgSMyobEIFcH/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQACAwH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHLhbZ4lCQclXHpq5219rwKNt5xyXQU1ipTW4r70R1aAhbrSEBJBVhPGwycY99Vh+nuz5lf3fDpUBDTawrxS4+ohCEIIUokjJwLYznVgtyOz6q5/rYDs2l1RE3lFkoUrg6lGQu4xxPIgpPS3ew0op4gZkRgSx7AYs/wDKj7ym/VJNQPiqYkQ23I61J8iSkWLfIdci+c+b86V8qc8aCzLkJLsmU4pWeiUj09c30yPrttGswt1Rn6kpyXKnRErcfWvkVFJUnj5bJsBboAc51AK/Tpr8ONFaiOlDbQ4njbNz/GdD1lTV6C01TJRve00oVSMqSiK8tTZQLtKx0tkX/kfGjWYdIqbcZtyUy2wQvkoKV5lD/ujVqaKL2nciY9dmiFt/cBrUhspahsPuL4Ni9g2QbaaWzqhQ641Eq1NcUfuWgtCXCAQPjv36aU8CoIfq0cBgIQ++loNOq4+KpQPJIvjva/vrs7ZlO06rwktRTGR43FUdHXiSVCwNrEk3P51OXudPFh5+IK4JJMdO9Nrwt1beTT3iGnm/1Iz1r+Gq39HuNV2rNEeh1VyJIs2/GX4a0qBPmHf47399WMnTX3ZMcw57MVDQAfbUgL5Ej9pzcWuOnrqH/VihPPRI1fCEcwgNTfC6eiVj+vbGteY0M11FHUen1K0qhXtPmJRNGPI+WMu+QAjv8nRrsrUXHnCWrtk3C8gLt0HvjN9GkeZhN2nhsdMWRvSC67wS1GClgIJthJsbHAIxn4139syqLU6oinKkPKlsz0qjOc+TriAQLFXfp39dGjR3C1CgRRsSfaDNteb+/wCuSaduOIxTXHQzELBDbpJWpsp6KOSb9fwNS6sb6gKoyoT8ByY0+wlRKEck8TbBt0z3PS2jRo5q7hmHj9l8AbSA1SfttyG4+qCuPJZADamyf1VWI/acXI7i2jRo0kqVCTtNDP/Z",width:480,height:480}},140:function(e,t,o){var content=o(158);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(6).default)("1bd49fec",content,!0,{sourceMap:!1})},157:function(e,t,o){"use strict";o(140)},158:function(e,t,o){(t=o(5)(!1)).push([e.i,'.page-full-example-without-components[data-v-6a3e2fce]{font-size:1.25em}.page-full-example-without-components>*[data-v-6a3e2fce]{margin:40px 0}.page-full-example-without-components[data-v-6a3e2fce]>:first-child{margin-top:0}.page-full-example-without-components[data-v-6a3e2fce]>:last-child{margin-bottom:0}.page-full-example-without-components .component-image-text[data-v-6a3e2fce] img{width:100%;height:100%}@media (min-width:768px){.page-full-example-without-components .component-image-text[data-v-6a3e2fce]{display:flex}.page-full-example-without-components .component-image-text>*[data-v-6a3e2fce]{width:50%}}.page-full-example-without-components .component-image-text .text[data-v-6a3e2fce]{padding:2%}.page-full-example-without-components .component-stage[data-v-6a3e2fce]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.page-full-example-without-components .component-stage .claim[data-v-6a3e2fce]{display:block;font-size:25px;line-height:50px;text-transform:none}.page-full-example-without-components .component-stage .headline[data-v-6a3e2fce]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.page-full-example-without-components .component-stage .headline[data-v-6a3e2fce]{font-size:40px;line-height:80px}}.page-full-example-without-components .component-stage[data-v-6a3e2fce] picture:before{display:block;padding-top:56.25%;content:""}.page-full-example-without-components .component-stage[data-v-6a3e2fce] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.page-full-example-without-components .component-stage h1[data-v-6a3e2fce]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.page-full-example-without-components .component-stage h1[data-v-6a3e2fce]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}.page-full-example-without-components .component-text-font-a[data-v-6a3e2fce],.page-full-example-without-components .component-text-font-b[data-v-6a3e2fce]{padding:0 10%}',""]),e.exports=t},221:function(e,t,o){"use strict";o.r(t);var n={components:{SpeedkitPicture:o(119).a},asyncData(){const e=o(123),t=o(126),n=o(120),r=o(124),l=o(127),c=o(125);return{contentA:"<p>This is a basic test with single font variant.</p>",textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:r.srcSet,type:"image/webp"},{srcset:l.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(c),width:l.width,height:l.height,alt:"Alt Text",title:"Title Text",caption:null}},stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:e.srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n),width:t.width,height:t.height,alt:"Alt Text",title:"Title Text",caption:null}}}}},r=(o(157),o(2)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-full-example-without-components"},[o("div",{staticClass:"component-stage"},[o("speedkit-picture",e._b({},"speedkit-picture",e.stage.picture,!1)),e._v(" "),o("h1",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),e.$getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n        $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n        $getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n      ]"}]},[o("span",{staticClass:"headline"},[e._v(e._s(e.stage.headline))]),e._v(" "),o("span",{staticClass:"claim"},[e._v(e._s(e.stage.claim))])])],1),e._v(" "),o("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Comic Neue",400,"normal"),e.$getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),e.$getFont("Comic Neue",400,"italic",{selector:"i"}),e.$getFont("Comic Neue",700,"normal",{selector:"b,strong"}),e.$getFont("Comic Neue",700,"italic",{selector:"i b,i strong"}),e.$getFont("Comic Neue",700,"italic",{selector:"b i, strong i"}),e.$getFont("Comic Neue",400,"italic",{selector:"i > b, i > strong"})],expression:"[\n      $getFont('Comic Neue', 400, 'normal'),\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $getFont('Comic Neue', 400, 'italic', {selector: 'i'}),\n      $getFont('Comic Neue', 700, 'normal', {selector: 'b,strong'}),\n      $getFont('Comic Neue', 700, 'italic', {selector: 'i b,i strong'}),\n      $getFont('Comic Neue', 700, 'italic', {selector: 'b i, strong i'}),\n      $getFont('Comic Neue', 400, 'italic', {selector: 'i > b, i > strong'})\n    ]"}],staticClass:"component-text-font-a",domProps:{innerHTML:e._s(e.textA.text)}}),e._v(" "),o("div",{staticClass:"component-image-text"},[o("speedkit-picture",e._b({},"speedkit-picture",e.imageTextA.picture,!1)),e._v(" "),o("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Comic Neue",400,"normal"),e.$getFont("Montserrat Alternates",700,"normal",{selector:"h2"})],expression:"[\n        $getFont('Comic Neue', 400, 'normal'),\n        $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"}],staticClass:"text",domProps:{innerHTML:e._s(e.imageTextA.text)}})],1),e._v(" "),o("div",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Comic Neue",400,"normal"),e.$getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),e.$getFont("Montserrat Alternates",400,"italic",{selector:"i"}),e.$getFont("Montserrat Alternates",700,"normal",{selector:"b"}),e.$getFont("Montserrat Alternates",700,"italic",{selector:"i b"}),e.$getFont("Montserrat Alternates",700,"italic",{selector:"b i"})],expression:"[\n      $getFont('Comic Neue', 400, 'normal'),\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $getFont('Montserrat Alternates', 400, 'italic', {selector: 'i'}),\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: 'b'}),\n      $getFont('Montserrat Alternates', 700, 'italic', {selector: 'i b'}),\n      $getFont('Montserrat Alternates', 700, 'italic', {selector: 'b i'})\n    ]"}],staticClass:"component-text-font-b",domProps:{innerHTML:e._s(e.textB.text)}})])}),[],!1,null,"6a3e2fce",null);t.default=component.exports}}]);