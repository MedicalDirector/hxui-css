webpackJsonp([30],{FR9Y:function(i,e,t){"use strict";var a=function(){var i=this.$createElement,e=this._self._c||i;return e("div",{attrs:{id:"accordion"}},[e("h1",{staticClass:"hx-title"},[this._v("Accordions")]),this._m(0),e("hr"),this._l(this.examples,function(i,t){return e("expanding-code-example",{key:t,attrs:{title:i.title,code:i.code,example:i.code,visible:!1,background:i.bg}})})],2)};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var i=this.$createElement,e=this._self._c||i;return e("h2",{staticClass:"hx-subtitle"},[this._v("The "),e("code",[this._v("hx-accordion")]),this._v(" component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one accordion-panel body at a time, however, with the "),e("code",[this._v("expandable")]),this._v(" property, the accordion-panel can remain open until explicitly closed.")])}]};e.a=s},S9se:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("xNMT"),s=t("FR9Y"),n=!1;var l=function(i){n||t("qpJz")},r=t("VU/8")(a.a,s.a,!1,l,null,null);r.options.__file="pages\\accordions.vue",e.default=r.exports},UEhm:function(i,e,t){"use strict";var a=function(){var i=this.$createElement,e=this._self._c||i;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var i=this.$createElement,e=this._self._c||i;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=s},Zjej:function(i,e,t){"use strict";var a=t("deq0"),s=t("UEhm"),n=!1;var l=function(i){n||t("lj5b")},r=t("VU/8")(a.a,s.a,!1,l,"data-v-a0505dc6",null);r.options.__file="components\\ExpandingCodeExample.vue",e.a=r.exports},deq0:function(i,e,t){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},lj5b:function(i,e,t){var a=t("x8Dn");"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);t("rjj0")("a8db8192",a,!1)},qpJz:function(i,e,t){var a=t("wz4O");"string"==typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);t("rjj0")("6eb8381e",a,!1)},wz4O:function(i,e,t){(i.exports=t("FZ+f")(!1)).push([i.i,"",""])},x8Dn:function(i,e,t){(i.exports=t("FZ+f")(!1)).push([i.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},xNMT:function(i,e,t){"use strict";var a=t("Zjej");e.a={data:function(){return{demo:[{title:"Item 1",content:"\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>\n        "},{title:"Item 2",content:"\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>\n        "},{title:"Item 3",content:"\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>\n        "}],examples:[{title:"Examples",code:'\n<ul class="hx-accordion">\n  <li class="hx-accordion-container is-active">\n    <a class="hx-accordion-header">\n      <div class="header-title">Item 1</div>\n      <div class="header-icon">\n        <i class="hx-icon is-small icon-angle-down" style="display: none"></i>\n        <i class="hx-icon is-small icon-angle-up"></i>\n      </div>\n    </a>\n    <div class="hx-accordion-body">\n      <div class="hx-accordion-body-wrapper">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>\n      </div>\n    </div>\n  </li>\n  <li class="hx-accordion-container">\n    <a class="hx-accordion-header">\n      <div class="header-title">Item 2</div>\n      <div class="header-icon">\n        <i class="hx-icon is-small icon-angle-down"></i>\n        <i class="hx-icon is-small icon-angle-up" style="display: none"></i>\n      </div>\n    </a>\n    <div class="hx-accordion-body" style="height: 0">\n      <div class="hx-accordion-body-wrapper">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>\n      </div>\n    </div>\n  </li>\n  <li class="hx-accordion-container">\n    <a class="hx-accordion-header">\n      <div class="header-title">Item 3</div>\n      <div class="header-icon">\n        <i class="hx-icon is-small icon-angle-down"></i>\n        <i class="hx-icon is-small icon-angle-up" style="display: none"></i>\n      </div>\n    </a>\n    <div class="hx-accordion-body" style="height: 0">\n      <div class="hx-accordion-body-wrapper">\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>\n      </div>\n    </div>\n  </li>\n</ul>\n        '}]}},components:{ExpandingCodeExample:a.a}}}});