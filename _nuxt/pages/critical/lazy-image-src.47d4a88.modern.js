(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{172:function(e,t,n){var content=n(174);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("7d9112ab",content,!0,{sourceMap:!1})},173:function(e,t,n){"use strict";var r=n(172);n.n(r).a},174:function(e,t,n){(t=n(35)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}.preview-container .preview-container__preview>article p{font-family:var(--font-family)}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},175:function(e,t,n){"use strict";n.r(t);var r={},o=(n(173),n(15)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},242:function(e,t,n){"use strict";n.r(t);var r={layout:"detail",data:()=>({imageA:{caption:null,alt:"Alt Text",title:"Title Text",src:"https://dummyimage.com/1080x1080/eeeeee/000000.jpg?text=C"}})},o=n(15),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-preview-container",{attrs:{critical:""},scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("LazyImage - SRC")])]},proxy:!0}])},[[n("LazyImage",e._b({},"LazyImage",e.imageA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LazyImage:n(180).default,OrganismPreviewContainer:n(175).default})}}]);