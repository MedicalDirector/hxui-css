webpackJsonp([8],{"+5Ym":function(s,t,n){"use strict";t.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(s,t,n){var a=n("gIdq");"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);n("rjj0")("27cae0c4",a,!1)},"46WQ":function(s,t,n){"use strict";var a=n("Zjej");t.a={data:function(){return{examples:[{title:"Position",code:'\n<p>The standard <code>.hx-snackbar</code> is useful for calling attention to some function that has just happened.</p>\n<hr />\n<p class="mt-5">By default, the snackbar will be displayed on the bottom center</p>\n<div class="hx-card pa-10" style="overflow: hidden">\n  <h5 class="mt-0 mb-0 has-text-centered">Bottom center</h5>\n  <p class="mb-10 pb-10 has-text-centered">Aligning snackbar to the bottom center of the page.</p>\n  <div class="hx-snackbar is-absolute is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>\n<p class="mt-10">To align the snackbar to the top, just include class <code>.is-top</code> to the <code>.hx-snackbar</code>.</p>\n<div class="hx-card mt-2 pa-10" style="overflow: hidden">\n  <h5 class="mt-10 mb-0 pt-10 has-text-centered">Top center</h5>\n  <p class="has-text-centered">Aligning snackbar to the top center of the page.</p>\n  <div class="hx-snackbar is-absolute is-top is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>\n<p class="mt-10">To align the snackbar to the top right, just include class <code>.is-top</code> and <code>.is-right</code> to the <code>.hx-snackbar</code>.</p>\n<div class="hx-card mt-2 pa-10" style="overflow: hidden">\n  <h5 class="mb-0 mt-2 has-text-centered">Top right</h5>\n  <p class="has-text-centered">Aligning snackbar to the top right of the page.</p>\n  <div class="hx-snackbar is-absolute is-top is-right is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>\n<p class="mt-10">To align the snackbar to the bottom left, just include class <code>.is-left</code> to the <code>.hx-snackbar</code>.</p>\n<div class="hx-card mt-2 pa-10" style="overflow: hidden">\n  <h5 class="mb-0 mt-2 has-text-centered">Bottom left</h5>\n  <p class="has-text-centered">Aligning snackbar to the top center of the page.</p>\n  <div class="hx-snackbar is-absolute is-left is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>\n          '},{title:"Contextual",code:'\n<p>The <code>.hx-snackbar</code> component comes in 4 variations, success, warning and error.</p>\n\n<div class="hx-card mt-2 pa-10" style="overflow: hidden">\n  <h5 class="mt-0 mb-10 pb-10 has-text-centered">Default</h5>\n  <div class="hx-snackbar is-absolute is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-danger is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>\n<div class="hx-card mt-2 pa-10" style="overflow: hidden">\n  <h5 class="mt-0 mb-10 pb-10 has-text-centered">Success</h5>\n  <div class="hx-snackbar is-absolute is-success is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-light is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>\n<div class="hx-card mt-2 pa-10" style="overflow: hidden">\n  <h5 class="mt-0 mb-10 pb-10 has-text-centered">Warning</h5>\n  <div class="hx-snackbar is-absolute is-warning is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-light is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>\n<div class="hx-card mt-2 pa-10" style="overflow: hidden">\n  <h5 class="mt-0 mb-10 pb-10 has-text-centered">Error</h5>\n  <div class="hx-snackbar is-absolute is-error is-active">\n    <div class="hx-snackbar-content">\n      Hello, I\'m a snackbar\n      <button class="hx-button is-light is-flat is-small is-round" flat color="pink" @click.native="snackbar = false">\n        <span class="hx-icon-control">\n          <i class="hx-icon icon-close-empty is-medium"></i>\n        </span>\n      </button>\n    </div>\n  </div>\n</div>          '}]}},components:{ExpandingCodeExample:a.a}}},"9HKM":function(s,t,n){"use strict";var a=function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"hx-card example is-flat mb-3"},[t("div",{staticClass:"hx-card-header"},[t("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?t("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),t("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[t("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),t("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};a._withStripped=!0;var e={render:a,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hx-icon-control"},[t("i",{staticClass:"hx-icon icon-code is-medium"})])}]};t.a=e},Au3x:function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("46WQ"),e=n("wnFX"),i=!1;var c=function(s){i||n("VaJm")},o=n("VU/8")(a.a,e.a,!1,c,null,null);o.options.__file="pages/snackbars-toasts.vue",t.default=o.exports},Ns9d:function(s,t,n){(s.exports=n("FZ+f")(!1)).push([s.i,"",""])},VaJm:function(s,t,n){var a=n("Ns9d");"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);n("rjj0")("7780e1d0",a,!1)},Zjej:function(s,t,n){"use strict";var a=n("+5Ym"),e=n("9HKM"),i=!1;var c=function(s){i||n("0dgp")},o=n("VU/8")(a.a,e.a,!1,c,"data-v-735a47f0",null);o.options.__file="components/ExpandingCodeExample.vue",t.a=o.exports},gIdq:function(s,t,n){(s.exports=n("FZ+f")(!1)).push([s.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},wnFX:function(s,t,n){"use strict";var a=function(){var s=this.$createElement,t=this._self._c||s;return t("div",{attrs:{id:"snackbars"}},[t("h1",{staticClass:"hx-title"},[this._v("Snackbars & toasts")]),t("h2",{staticClass:"hx-subtitle"},[this._v("The snackbar/toast component is used to display a quick message to a user.")]),t("hr"),this._l(this.examples,function(s,n){return t("expanding-code-example",{key:n,attrs:{title:s.title,code:s.code,example:s.code,visible:!1}})})],2)};a._withStripped=!0;var e={render:a,staticRenderFns:[]};t.a=e}});