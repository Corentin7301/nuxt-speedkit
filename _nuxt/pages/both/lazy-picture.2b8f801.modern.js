(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{172:function(e,t,r){var content=r(174);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("7d9112ab",content,!0,{sourceMap:!1})},173:function(e,t,r){"use strict";var n=r(172);r.n(n).a},174:function(e,t,r){(t=r(35)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}.preview-container .preview-container__preview>article p{font-family:var(--font-family)}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},175:function(e,t,r){"use strict";r.r(t);var n={},c=(r(173),r(15)),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},178:function(e,t,r){var content=r(190);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("03907b63",content,!0,{sourceMap:!1})},179:function(e,t,r){var content=r(192);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("f3aa63aa",content,!0,{sourceMap:!1})},185:function(e,t,r){"use strict";r.r(t);r(186);var n=r(187),c=r.n(n);function o(e){return e=e.map(source=>(source.media=source.media||"all",source)),c()(e,"media").reverse()}var l=r(199),m=r(195),f=r.n(m),v=r(194),h={props:{srcset:{type:Array,default:()=>null}},computed:{preparedSrcset(){return f.a.stringify(Object(v.a)(this.srcset||[]))||null}}},d=(r(189),r(15)),w=Object(d.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("source",this._b({attrs:{srcset:this.preparedSrcset}},"source",this.$attrs,!1))}),[],!1,null,"61ed09b6",null).exports,_=r(180),x={components:{CustomImage:l.a,CustomSource:w,LazyImage:_.default},props:{sources:{type:Array,default:()=>[]}},computed:{fallbackImage(){var e=o(this.sources)[0];return{src:e.src,srcset:e.srcset}},sortedSources(){return o(this.sources)}}},y=(r(191),Object(d.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("lazy-image",e._b({attrs:{src:e.fallbackImage.src,srcset:e.fallbackImage.srcset},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.width,c=t.height;return[r("picture",[e._l(e.sortedSources,(function(source,t){return r("custom-source",e._b({key:t},"custom-source",source,!1))})),e._v(" "),r("custom-image",e._b({attrs:{src:e.fallbackImage.src,srcset:e.fallbackImage.srcset,width:n,height:c}},"custom-image",e.$attrs,!1))],2)]}},{key:"caption",fn:function(){return[e._t("caption")]},proxy:!0}],null,!0)},"lazy-image",e.$attrs,!1))}),[],!1,null,"0b321c64",null));t.default=y.exports},186:function(e,t,r){"use strict";var n=r(7),c=r(47),o=[].reverse,l=[1,2];n({target:"Array",proto:!0,forced:String(l)===String(l.reverse())},{reverse:function(){return c(this)&&(this.length=this.length),o.call(this)}})},187:function(e,t,r){var n=r(188),c=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function o(e){return function(a,b){var t=a.sortVal,r=b.sortVal,n=a.item.__media,c=b.item.__media;if(e=void 0!==e&&e,t===r){if(n.match(/print/))return 1;if(c.match(/print/))return-1}return e?r-t:t-r}}function l(e,t,r){switch(function(e,t,r){return e&&e.length&&"string"!=typeof e?("object"!==t||r&&"string"==typeof r)&&function(e,t,r){for(var n=!0,i=0,c=e.length;i<c;i++)if(typeof e[i]!==t||r&&!e[i].hasOwnProperty(r)){n=!1;break}return n}(e,t,r)?"all":"some":"none"}(e,t,r)){case"none":return[];case"some":return e}var l=function(){for(var e={},i=0,t=c.length;i<t;i++)e[c[i]]=[];return e}();return e=function(e,t,r){for(var c=[],o={},i=0,l=e.length;i<l;i++)"string"===t?o=n({},{__media:e[i]}):(o=n({},e[i])).__media=e[i][r],c.push(o);return c}(e,t,r),function(e,t){for(var i=0,r=t.length;i<r;i++){var n=t[i],c=n.__media,o="blank",l=c.match(/\d+/g);c.match(/min-width/)?o="minWidth":c.match(/min-height/)?o="minHeight":c.match(/max-width/)?o="maxWidth":c.match(/max-height/)?o="maxHeight":c.match(/print/)?o="print":c.match(/all/)&&(o="all"),e[o].push({item:n,sortVal:l?l[0]:0})}}(l,e),function(e){var t;for(var r in e)e.hasOwnProperty(r)&&(t=o(!1),"maxWidth"!==r&&"maxHeight"!==r||(t=o(!0)),e[r].sort(t))}(l),function(e,t,r){var n=[];function o(e){for(var r,i=0,c=e.length;i<c;i++)"string"===t?r=e[i].item.__media:delete(r=e[i].item).__media,n.push(r)}for(var i=0,l=c.length;i<l;i++)o(e[c[i]]);return n}(l,t)}e.exports=function(e,t){return e?t?l(e,"object",t):l(e,"string"):[]}},188:function(e,t){e.exports=function(){for(var e={},i=0;i<arguments.length;i++){var source=arguments[i];for(var t in source)r.call(source,t)&&(e[t]=source[t])}return e};var r=Object.prototype.hasOwnProperty},189:function(e,t,r){"use strict";var n=r(178);r.n(n).a},190:function(e,t,r){(t=r(35)(!1)).push([e.i,"",""]),e.exports=t},191:function(e,t,r){"use strict";var n=r(179);r.n(n).a},192:function(e,t,r){(t=r(35)(!1)).push([e.i,"",""]),e.exports=t},239:function(e,t,r){"use strict";r.r(t);var n={layout:"detail",data:()=>({pictureA:{alt:"Alt Text",title:"Title Text",sources:[{srcset:[{url:"https://dummyimage.com/1200x1200/eeeeee/000000.jpg?text=C"},{url:"https://dummyimage.com/2400x2400/eeeeee/000000.jpg?text=C",density:2}],media:"(min-width: 768px)"},{srcset:[{url:"https://dummyimage.com/768x768/eeeeee/000000.jpg?text=C"},{url:"https://dummyimage.com/1536x1536/eeeeee/000000.jpg?text=C",density:2}]}]},pictureB:{alt:"Alt Text",title:"Title Text",sources:[{srcset:[{url:"https://dummyimage.com/1200x1200/eeeeee/000000.jpg?text=L"},{url:"https://dummyimage.com/2400x2400/eeeeee/000000.jpg?text=L",density:2}],media:"(min-width: 768px)"},{srcset:[{url:"https://dummyimage.com/768x768/eeeeee/000000.jpg?text=L"},{url:"https://dummyimage.com/1536x1536/eeeeee/000000.jpg?text=L",density:2}]}]}})},c=r(15),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-preview-container",{attrs:{critical:""},scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("LazyPicture"),r("br"),e._v("Source Switch by >768px")])]},proxy:!0}])},[[r("LazyPicture",e._b({},"LazyPicture",e.pictureA,!1))]],2),e._v(" "),r("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("LazyPicture"),r("br"),e._v("Source Switch by >768px")])]},proxy:!0}])},[[r("LazyPicture",e._b({},"LazyPicture",e.pictureB,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LazyPicture:r(185).default,OrganismPreviewContainer:r(175).default})}}]);