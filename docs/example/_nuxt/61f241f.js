(window.webpackJsonp=window.webpackJsonp||[]).push([[8,21],{311:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(e){return r[String(e)]}},315:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));n(322);var r=n(125);var o,c=!(!(o=e.document.createElement("canvas")).getContext||!o.getContext("2d"))&&0===o.toDataURL("image/webp").indexOf("data:image/webp");function l(){if(Object(r.a)())return!1;var t=e.document.createElement("link").relList;return function(element,t){var n={};e.document&&(n=e.document.createElement(element));if(t in n)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}).call(this,n(15))},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(37),n(28),n(111),n(10),n(38),n(112),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(43);var r=n(110),o=function(){function e(){this.map=new Map}return e.prototype.getPromise=function(e,t){if(!this.map.has(e)){var n=new r.a;this.map.set(e,n.promise),t(n.resolve,n.reject)}return this.map.get(e)},e}()},336:function(e,t,n){var content=n(347);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("6e178917",content,!0,{sourceMap:!1})},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));n(128),n(37),n(28),n(36),n(10),n(38),n(43),n(39);var r=n(6);function o(e,t,n){return Promise.all(e.map(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(source){var r,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(source);case 2:return r=e.sent,o=r[0].url,c=r[1],d=r[2].placeholder,e.abrupt("return",Object.assign(l(o,m(c)),{dataURI:n&&d}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then(d)}function c(e,t){return Promise.all(e.map(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(source){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(source);case 2:return n=e.sent,r=n[0].url,o=n[1],e.abrupt("return",l(r,m(o)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then(d)}function l(e,t){var n=t.min;return{size:t,media:n.media,breakpoint:n.breakpoint,width:t.max.width,url:e}}function m(e){var t=Array.from(e).sort((function(a,b){return a.width>b.width?1:-1})),n=t.shift();return{min:n,max:t.pop()||n}}function d(e){return e.sort((function(a,b){return a.width<b.width?1:-1}))}},346:function(e,t,n){"use strict";n(336)},347:function(e,t,n){var r=n(13)(!1);r.push([e.i,".component-stage[data-v-0aa7fe9f]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-0aa7fe9f]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-0aa7fe9f]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-0aa7fe9f]{font-size:40px;line-height:80px}}.component-stage h1[data-v-0aa7fe9f]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-0aa7fe9f]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}",""]),e.exports=r},377:function(e,t,n){var content=n(403);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("6b37a042",content,!0,{sourceMap:!1})},394:function(e,t,n){"use strict";n.r(t);var r={components:{SpeedkitPicture:n(344).a},props:{picture:{type:Object,default:function(){return{}}},headline:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},o=(n(346),n(4)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-stage"},[e.picture?n("speedkit-picture",e._b({},"speedkit-picture",e.picture,!1)):e._e(),e._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),e.$getFont("Merriweather",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Merriweather', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[e._v(e._s(e.headline))]),e._v(" "),n("span",{staticClass:"claim"},[e._v(e._s(e.claim))])])],1)}),[],!1,null,"0aa7fe9f",null);t.default=component.exports},402:function(e,t,n){"use strict";n(377)},403:function(e,t,n){var r=n(13)(!1);r.push([e.i,".page-experimentel-index[data-v-ce893b46]{padding:0 0 1.5625em}.page-experimentel-index>*[data-v-ce893b46]{margin:1.5625em 0}.page-experimentel-index[data-v-ce893b46]>:first-child{margin-top:0}",""]),e.exports=r},544:function(e,t,n){"use strict";n.r(t);n(10);var r={asyncData:function(){return{contentA:"<p>This is a basic test with single font variant.</p>",stage:{critical:!0,headline:"nuxt-speedkit",claim:"powered by Grabarz & Partner",picture:{sources:[{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/portrait.jpg",sizes:"414,576:576,768:768"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-1/landscape.jpg",sizes:"1024:1024,1280:1280,1680:1680,1920:1920"}]}},youtubePlayer:{id:"cLKvbhfVBUU"},textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-2/jpg/1920.jpg",sizes:"414"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-2/jpg/1920.jpg",sizes:"576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920"}]}},imageTextB:{alignRight:!0,text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-3/jpg/1920.jpg",sizes:"414"},{src:"https://nuxt-speedkit.grabarzundpartner.dev/example/img/image-content-3/jpg/1920.jpg",sizes:"576:576,768:768,1024:1024,1200:1280,1600:1680,1900:1920"}]}},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <strong>anim vehicula</strong> varius eget feugiat beatae. <em><strong>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</strong></em>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"}}},speedkitComponents:{ComponentStage:function(){return Promise.resolve().then(n.bind(null,394))},ComponentTextA:function(){return n.e(2).then(n.bind(null,549))},ComponentTextImage:function(){return n.e(24).then(n.bind(null,550))},ComponentTextB:function(){return n.e(3).then(n.bind(null,551))},ComponentSpeedkitYoutube:function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,542))}}},o=(n(402),n(4)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-experimentel-index"},[n("component-stage",e._b({},"component-stage",e.stage,!1)),e._v(" "),n("component-text-a",e._b({},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextA,!1)),e._v(" "),n("ComponentSpeedkitYoutube",e._b({},"ComponentSpeedkitYoutube",e.youtubePlayer,!1)),e._v(" "),n("component-text-a",e._b({},"component-text-a",e.textA,!1)),e._v(" "),n("component-text-image",e._b({},"component-text-image",e.imageTextB,!1)),e._v(" "),n("component-text-b",e._b({},"component-text-b",e.textB,!1))],1)}),[],!1,null,"ce893b46",null);t.default=component.exports}}]);