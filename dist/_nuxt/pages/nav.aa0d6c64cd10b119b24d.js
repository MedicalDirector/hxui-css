webpackJsonp([11],{"+5Ym":function(e,t,a){"use strict";t.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(e,t,a){var i=a("gIdq");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("27cae0c4",i,!1)},"0iFr":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("kJpN"),s=a("YNg6"),n=!1;var l=function(e){n||a("FrpX")},c=a("VU/8")(i.a,s.a,!1,l,null,null);c.options.__file="pages/nav.vue",t.default=c.exports},"9HKM":function(e,t,a){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hx-card example is-flat mb-3"},[t("div",{staticClass:"hx-card-header"},[t("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?t("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),t("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[t("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),t("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"hx-icon-control"},[t("i",{staticClass:"hx-icon icon-code is-medium"})])}]};t.a=s},EZHA:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},FrpX:function(e,t,a){var i=a("EZHA");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("1faee318",i,!1)},YNg6:function(e,t,a){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"nav"}},[t("h1",{staticClass:"hx-title"},[this._v("Nav")]),t("h2",{staticClass:"hx-subtitle"},[this._v("A responsive horizontal nav bar that can contain links, tabs, buttons, icons, and a logo")]),t("hr"),this._l(this.examples,function(e,a){return t("expanding-code-example",{key:a,attrs:{title:e.title,code:e.code,example:e.code,visible:!1,background:e.bg}})})],2)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s},Zjej:function(e,t,a){"use strict";var i=a("+5Ym"),s=a("9HKM"),n=!1;var l=function(e){n||a("0dgp")},c=a("VU/8")(i.a,s.a,!1,l,"data-v-735a47f0",null);c.options.__file="components/ExpandingCodeExample.vue",t.a=c.exports},gIdq:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},kJpN:function(e,t,a){"use strict";var i=a("Zjej");t.a={data:function(){return{examples:[{title:"Basic nav",code:'\n<p>Note the nav requires the <code>.hx-nav</code> base class.</p>\n<br>\n<ul class="hx-nav">\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">News & data</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link is-active">Status board</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">Custom</a>\n  </li>\n</ul>\n          '},{title:"Alignments",code:'\n<h5>Center aligned</h5>\n<p>Centering the nav can be easily done by adding the modifier <code>.is-centered</code> to the <code>.hx-nav</code> base class.</p>\n<br>\n<ul class="hx-nav is-centered">\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">News & data</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link is-active">Status board</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">Custom</a>\n  </li>\n</ul>\n<hr />\n<h5>Right aligned</h5>\n<p>To align the nav to the right can be easily achieved by adding the modifier <code>.is-right</code> to the <code>.hx-nav</code> base class.</p>\n<br>\n<ul class="hx-nav is-right">\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">News & data</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link is-active">Status board</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">Custom</a>\n  </li>\n</ul>\n          '},{title:"Vertical nav",code:'\n<p>Note the vertical nav requires the modifier <code>.is-vertical</code> added to <code>.hx-nav</code> base class.</p>\n<br>\n<ul class="hx-nav is-vertical">\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">News & data</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link is-active">Status board</a>\n  </li>\n  <li class="hx-nav-item">\n    <a href="#" class="hx-nav-link">Custom</a>\n  </li>\n</ul>\n          '}]}},components:{ExpandingCodeExample:i.a}}}});