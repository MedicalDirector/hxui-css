webpackJsonp([10],{AO3K:function(e,i,t){var s=t("P1tt");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("06f35967",s,!1)},MjQU:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("OCyO"),n=t("i16c"),a=!1;var d=function(e){a||t("AO3K")},c=t("VU/8")(s.a,n.a,!1,d,null,null);c.options.__file="pages\\sidebar.vue",i.default=c.exports},OCyO:function(e,i,t){"use strict";var s=t("Zjej");i.a={data:function(){return{examples:[{title:"Default",code:'\n<div class="hx-card is-flex mb-2" style="height: 10rem">\n  \x3c!-- no gradient (.hx-sidebar still works)--\x3e\n  <div class="hx-drawer is-active"></div>\n  \x3c!-- Main content --\x3e\n  <div class="content py-3 px-6">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n\n<div class="hx-card is-flex" style="height: 10rem">\n  \x3c!--  purple gradient --\x3e\n  <div class="hx-drawer has-purple-gradient is-active"></div>\n  \x3c!-- Main content --\x3e\n  <div class="content py-3 px-6">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n\n\x3c!--\n<div class="hx-card mb-2" style="height: 10rem">\n  <div class="hx-drawer has-purple-gradient"></div>\n</div>\n\n<div class="hx-card mb-2" style="height: 10rem">\n  <div class="hx-drawer has-orange-gradient"></div>\n</div>\n--\x3e\n        '},{title:"Navigation drawer",code:'\n<div class="hx-card is-flex" style="height: 10rem">\n  <div class="is-flex">\n    <div class="hx-drawer has-purple-gradient is-minified is-active"></div>\n    <div class="hx-drawer is-active"></div>\n  </div>\n  \x3c!-- Main content --\x3e\n  <div class="content py-3 px-6">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n        '},{title:"Sizes",code:'\n<div class="hx-card is-flex mb-2" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-active is-minified"></div>\n  <div class="content py-4 px-6">\n    <h3>Minimised</h3>\n    <p>Add class <code>is-minified</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n<div class="hx-card is-flex mb-2" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-active"></div>\n  <div class="content py-4 px-6">\n    <h3>Default</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n<div class="hx-card is-flex mb-2" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-active is-expanded"></div>\n  <div class="content py-4 px-6">\n    <h3>Expanded</h3>\n    <p>Add class <code>is-expanded</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n        '},{title:"Right aligned",code:'\n<div class="hx-card is-flex mb-2" style="height: 10rem">\n  <div class="content py-3 px-6">\n    <p>Add class <code>is-right</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n  <div class="hx-drawer hx-bg-purple is-active is-right"></div>\n</div>\n        '},{title:"With overlay",code:'\n<div class="hx-card is-flex" style="height: 10rem">\n  <div class="hx-drawer hx-bg-purple is-absolute is-active"></div>\n  <div class="hx-drawer-bg is-active"></div>\n  <div class="content py-4 px-6">\n    <p>Add class <code>is-expanded</code> to the drawer.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet pellentesque finibus. Vestibulum consequat maximus sem, vitae tincidunt eros pharetra lacinia.</p>\n  </div>\n</div>\n        '},{title:"Top level",code:"\n<p>To have the drawer on the top level and not in a container, add class <code>is-fixed</code> to the drawer.</p>\n        "}]}},components:{ExpandingCodeExample:s.a}}},P1tt:function(e,i,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},R7UG:function(e,i,t){"use strict";i.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},R9iE:function(e,i,t){var s=t("uCJM");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("6679862f",s,!1)},UEhm:function(e,i,t){"use strict";var s=function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"hx-card example is-flat mb-3"},[i("div",{staticClass:"hx-card-header"},[i("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?i("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),i("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[i("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),i("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("span",{staticClass:"hx-icon-control"},[i("i",{staticClass:"hx-icon icon-code is-medium"})])}]};i.a=n},Zjej:function(e,i,t){"use strict";var s=t("R7UG"),n=t("UEhm"),a=!1;var d=function(e){a||t("R9iE")},c=t("VU/8")(s.a,n.a,!1,d,"data-v-a0505dc6",null);c.options.__file="components\\ExpandingCodeExample.vue",i.a=c.exports},i16c:function(e,i,t){"use strict";var s=function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"sidebar"}},[i("h1",{staticClass:"hx-title"},[this._v("Sidebar / Drawer")]),i("h2",{staticClass:"hx-subtitle"},[this._v("Primarily used for navigation or meta data.")]),i("hr"),this._l(this.examples,function(e,t){return i("expanding-code-example",{key:t,attrs:{title:e.title,code:e.code,example:e.code,visible:!1,background:e.bg}})})],2)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};i.a=n},uCJM:function(e,i,t){(e.exports=t("FZ+f")(!1)).push([e.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});