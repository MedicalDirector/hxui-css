webpackJsonp([19],{"+5Ym":function(s,e,a){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(s,e,a){var t=a("gIdq");"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);a("rjj0")("27cae0c4",t,!1)},"91jS":function(s,e,a){(s.exports=a("FZ+f")(!1)).push([s.i,"",""])},"9HKM":function(s,e,a){"use strict";var t=function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};t._withStripped=!0;var n={render:t,staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=n},Ku96:function(s,e,a){var t=a("91jS");"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);a("rjj0")("20c1689c",t,!1)},VkR5:function(s,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a("oWPs"),n=a("rpQU"),i=!1;var l=function(s){i||a("Ku96")},d=a("VU/8")(t.a,n.a,!1,l,null,null);d.options.__file="pages/badges.vue",e.default=d.exports},Zjej:function(s,e,a){"use strict";var t=a("+5Ym"),n=a("9HKM"),i=!1;var l=function(s){i||a("0dgp")},d=a("VU/8")(t.a,n.a,!1,l,"data-v-735a47f0",null);d.options.__file="components/ExpandingCodeExample.vue",e.a=d.exports},gIdq:function(s,e,a){(s.exports=a("FZ+f")(!1)).push([s.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},oWPs:function(s,e,a){"use strict";var t=a("Zjej");e.a={data:function(){return{examples:[{title:"Badges for text",code:'\n<div class="has-text-centered">\n  <span class="hx-badge">Default</span>\n  <span class="hx-badge is-white">White</span>\n  <span class="hx-badge is-outlined">Outlined</span>\n  <span class="hx-badge is-dark">Dark</span>\n  <span class="hx-badge is-black">Black</span>\n  <span class="hx-badge is-primary">Primary</span>\n  <span class="hx-badge is-info">Info</span>\n  <span class="hx-badge is-warning">Warning</span>\n  <span class="hx-badge is-danger">Danger</span>\n</div>\n          '},{title:"Badges for numerical values",code:'\n<div class="has-text-centered">\n  <span class="hx-badge">0</span>\n  <span class="hx-badge is-white">34</span>\n  <span class="hx-badge is-outlined">83</span>\n  <span class="hx-badge is-dark">87</span>\n  <span class="hx-badge is-black">59</span>\n  <span class="hx-badge is-primary">99+</span>\n  <span class="hx-badge is-info">3</span>\n  <span class="hx-badge is-warning">6</span>\n  <span class="hx-badge is-danger">2</span>\n</div>\n          '},{title:"Sizes",code:'\n<div class="has-text-centered">\n  <p>There are 4 additional sizes</p>\n  <p>\n    <span class="hx-badge is-outlined is-small">Small</span>\n  </p>\n  <p>\n    <span class="hx-badge is-outlined">Default</span>\n  </p>\n  <p>\n    <span class="hx-badge is-outlined is-medium">Medium</span>\n  </p>\n  <p>\n    <span class="hx-badge is-danger is-large">Large</span>\n  </p>\n</div>\n          '},{title:"Add a delete button",code:'\n<div class="has-text-centered">\n  <p>Add a delete button</p>\n  <p>\n    <span class="hx-badge is-outlined">Default\n      <button class="hx-delete is-small"></button>\n    </span>\n  </p>\n  <p>\n    <span class="hx-badge is-warning is-medium">Medium\n      <button class="hx-delete is-small"></button>\n    </span>\n  </p>\n  <p>\n    <span class="hx-badge is-danger is-large">Large\n      <button class="hx-delete"></button>\n    </span>\n  </p>\n</div>\n          '}]}},components:{ExpandingCodeExample:t.a}}},rpQU:function(s,e,a){"use strict";var t=function(){var s=this.$createElement,e=this._self._c||s;return e("div",{attrs:{id:"badges"}},[e("h1",{staticClass:"hx-title"},[this._v("Badges")]),e("h2",{staticClass:"hx-subtitle"},[this._v("Small and adaptive tag for adding context to just about any content.")]),e("hr"),this._l(this.examples,function(s,a){return e("expanding-code-example",{key:a,attrs:{title:s.title,code:s.code,example:s.code,visible:!1}})})],2)};t._withStripped=!0;var n={render:t,staticRenderFns:[]};e.a=n}});