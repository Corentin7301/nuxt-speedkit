(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{172:function(e,t,r){var content=r(174);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("7d9112ab",content,!0,{sourceMap:!1})},173:function(e,t,r){"use strict";var n=r(172);r.n(n).a},174:function(e,t,r){(t=r(35)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}.preview-container .preview-container__preview>article p{font-family:var(--font-family)}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},175:function(e,t,r){"use strict";r.r(t);var n={},o=(r(173),r(15)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},177:function(e,t,r){"use strict";(function(e){r(17),r(21);e.IntersectionObserver=e.IntersectionObserver||class{observe(){}unobserve(){}},t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]}},created(){if(!this.$options.critical){var e=(e=>{var{root:t,rootMargin:r,threshold:n}=e;return{root:t,rootMargin:r,threshold:n}})(this);this.observer=new IntersectionObserver(e=>{var[t]=e;return this.onIntersect(t)},e)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(e){this.$emit("enter",e)}},render(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(16))},181:function(e,t,r){var content=r(197);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("2c5ad93a",content,!0,{sourceMap:!1})},193:function(e,t,r){"use strict";var n=r(177).a,o=r(15),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);t.a=component.exports},196:function(e,t,r){"use strict";var n=r(181);r.n(n).a},197:function(e,t,r){(t=r(35)(!1)).push([e.i,"",""]),e.exports=t},198:function(e,t,r){"use strict";r.r(t);var n={components:{IntersectionObserver:r(193).a},props:{src:{type:String,default:()=>null}},data:()=>({lazySrc:null}),methods:{onEnter(e){this.lazySrc=this.src}}},o=(r(196),r(15)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("intersection-observer",{on:{enter:this.onEnter}},[t("iframe",this._b({staticClass:"lazy-iframe",attrs:{src:this.lazySrc,loading:"lazy"}},"iframe",this.$attrs,!1))])}),[],!1,null,"4ec2f79b",null);t.default=component.exports},236:function(e,t,r){"use strict";r.r(t);var n={layout:"detail",data:()=>({iframeA:{src:"https://grabarzundpartner.de"}})},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-preview-container",{attrs:{critical:""},scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("LazyIframe")])]},proxy:!0}])},[[r("LazyIframe",e._b({},"LazyIframe",e.iframeA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LazyIframe:r(198).default,OrganismPreviewContainer:r(175).default})}}]);