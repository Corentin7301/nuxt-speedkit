(window.webpackJsonp=window.webpackJsonp||[]).push([[18,30,36],{252:function(e,t,n){"use strict";n.r(t);var r=n(5),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{d:"M9 5l7 7-7 7"}})])}),[],!1,null,null,null);t.default=component.exports},253:function(e,t,n){"use strict";n.r(t);var r=n(5),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])}),[],!1,null,null,null);t.default=component.exports},286:function(e,t,n){"use strict";n.r(t);n(155),n(24);var r=n(4),o={data:function(){return{q:"",focus:!1,focusIndex:-1,open:!1,searching:!1,results:[]}},watch:{q:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.focusIndex=-1,e){n.next=5;break}return t.searching=!1,t.results=[],n.abrupt("return");case 5:return t.searching=!0,n.next=8,t.$content(t.$i18n.locale,{deep:!0}).sortBy("position","asc").only(["title","slug","category","to"]).limit(12).search(e).fetch();case 8:t.results=n.sent,t.searching=!1;case 10:case"end":return n.stop()}}),n)})))()}},mounted:function(){window.addEventListener("keyup",this.keyup)},beforeDestroy:function(){window.removeEventListener("keyup",this.keyup)},methods:{onFocus:function(){this.focus=!0,this.$emit("focus",!0)},onBlur:function(){this.focus=!1,this.$emit("focus",!1)},keyup:function(e){"/"===e.key&&this.$refs.search.focus()},increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){if(0!==this.results.length){var e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex];this.$router.push(this.$contentLocalePath(e.to)),this.$refs.search.blur(),this.q=""}}}},c=n(5),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full relative flex flex-col justify-between"},[n("div",{staticClass:"w-full relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[n("label",{staticClass:"sr-only",attrs:{for:"search"}},[e._v("Search")]),e._v(" "),n("div",{staticClass:"relative"},[n("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[n("IconSearch",{staticClass:"h-5 w-5 text-gray-500"})],1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],ref:"search",staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800",class:{"rounded-b-none":e.focus&&(e.searching||e.results.length)},attrs:{id:"search",placeholder:e.$t("search.placeholder"),type:"search",autocomplete:"off"},domProps:{value:e.q},on:{focus:e.onFocus,blur:e.onBlur,input:function(t){t.target.composing||(e.q=t.target.value)}}})])]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.focus&&(e.searching||e.results.length),expression:"focus && (searching || results.length)"}],staticClass:"z-10 absolute w-full flex-1 top-0 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden",class:{"rounded-t-none":e.focus&&(e.searching||e.results.length)},staticStyle:{"margin-top":"37px"}},[e.searching&&!e.results.length?n("li",{staticClass:"px-4 py-2"},[e._v("Searching...")]):e._e(),e._v(" "),e._l(e.results,(function(t,r){return n("li",{key:t.slug,on:{mouseenter:function(t){e.focusIndex=r},mousedown:e.go}},[n("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150",class:{"text-primary-500 dark:text-primary-400 bg-gray-200 dark:bg-gray-800":e.focusIndex===r},attrs:{to:e.$contentLocalePath(t.to)},on:{click:function(t){e.focus=!1}}},[t.category?n("span",{staticClass:"font-bold"},[e._v(e._s(t.category))]):e._e(),e._v(" "),t.category?n("IconChevronRight",{staticClass:"w-3 h-3 mx-1"}):e._e(),e._v("\n        "+e._s(t.title)+"\n      ")],1)],1)}))],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IconSearch:n(253).default,IconChevronRight:n(252).default})}}]);