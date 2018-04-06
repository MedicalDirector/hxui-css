webpackJsonp([20],{"+5Ym":function(i,e,t){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(i,e,t){var s=t("gIdq");"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);t("rjj0")("27cae0c4",s,!1)},"9HKM":function(i,e,t){"use strict";var s=function(){var i=this.$createElement,e=this._self._c||i;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var i=this.$createElement,e=this._self._c||i;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=a},"B+xy":function(i,e,t){(i.exports=t("FZ+f")(!1)).push([i.i,"",""])},HQxC:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("Sz95"),a=t("Ly1W"),n=!1;var l=function(i){n||t("T40L")},r=t("VU/8")(s.a,a.a,!1,l,null,null);r.options.__file="pages/breadcrumbs.vue",e.default=r.exports},Ly1W:function(i,e,t){"use strict";var s=function(){var i=this.$createElement,e=this._self._c||i;return e("div",{attrs:{id:"breadcrumbs"}},[e("h1",{staticClass:"hx-title"},[this._v("Breadcrumbs")]),this._m(0),e("hr"),this._l(this.examples,function(i,t){return e("expanding-code-example",{key:t,attrs:{title:i.title,code:i.code,example:i.code,visible:!1}})})],2)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var i=this.$createElement,e=this._self._c||i;return e("h2",{staticClass:"hx-subtitle"},[this._v("The "),e("code",[this._v("hx-breadcrumb")]),this._v(" component is a navigational helper for pages. It can accept a Icons or characters as a divider.")])}]};e.a=a},Sz95:function(i,e,t){"use strict";var s=t("Zjej");e.a={data:function(){return{examples:[{title:"Usage",code:'\n<ul class="hx-breadcrumb">\n  <li class="">\n    <a href="#">Dashboard</a>\n  </li>\n  <li class="hx-breadcrumb-divider">/</li>\n  <li class="">\n    <a href="#">Parent</a>\n  </li>\n  <li class="hx-breadcrumb-divider">/</li>\n  <li class=" is-disabled">\n    <a href="#">Child page</a>\n  </li>\n</ul>\n\n<ul class="hx-breadcrumb">\n  <li class="">\n    <a href="#">Dashboard</a>\n  </li>\n  <li class="hx-breadcrumb-divider">-</li>\n  <li class="">\n    <a href="#">Parent</a>\n  </li>\n  <li class="hx-breadcrumb-divider">-</li>\n  <li class=" is-disabled">\n    <a href="#">Child page</a>\n  </li>\n</ul>\n        '},{title:"Using icons",code:'\n<ul class="hx-breadcrumb">\n  <li class="">\n    <a href="#">Dashboard</a>\n  </li>\n  <li class="hx-breadcrumb-divider">\n    <i class="hx-icon icon-angle-right"></i>\n  </li>\n  <li class="">\n    <a href="#">Parent</a>\n  </li>\n  <li class="hx-breadcrumb-divider">\n    <i class="hx-icon icon-angle-right"></i>\n  </li>\n  <li class=" is-disabled">\n    <a href="#">Child page</a>\n  </li>\n</ul>\n\n<ul class="hx-breadcrumb">\n  <li class="">\n    <a href="#">Dashboard</a>\n  </li>\n  <li class="hx-breadcrumb-divider">\n    <i class="hx-icon icon-arrow-right"></i>\n  </li>\n  <li class="">\n    <a href="#">Parent</a>\n  </li>\n  <li class="hx-breadcrumb-divider">\n    <i class="hx-icon icon-arrow-right"></i>\n  </li>\n  <li class=" is-disabled">\n    <a href="#">Child page</a>\n  </li>\n</ul>\n        '}]}},components:{ExpandingCodeExample:s.a}}},T40L:function(i,e,t){var s=t("B+xy");"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);t("rjj0")("2eb6ef66",s,!1)},Zjej:function(i,e,t){"use strict";var s=t("+5Ym"),a=t("9HKM"),n=!1;var l=function(i){n||t("0dgp")},r=t("VU/8")(s.a,a.a,!1,l,"data-v-735a47f0",null);r.options.__file="components/ExpandingCodeExample.vue",e.a=r.exports},gIdq:function(i,e,t){(i.exports=t("FZ+f")(!1)).push([i.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});