webpackJsonp([11],{"+5Ym":function(t,e,s){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(t,e,s){var i=s("gIdq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("27cae0c4",i,!1)},"5xTQ":function(t,e,s){var i=s("8tbx");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("048da3d4",i,!1)},"8tbx":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".elipsedText{width:250px}",""])},"9HKM":function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=n},K842:function(t,e,s){"use strict";var i=s("Zjej");e.a={data:function(){return{examples:[{title:"Set Scrolling",code:'\n<table class="hx-table is-striped">\n  <thead>\n    <tr>\n      <th>Class</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n   <tr>\n      <td><code>.is-scrollable-y</code></td>\n      <td>Set scrolling on the y axis</td>\n    </tr>\n     <tr>\n      <td><code>.is-scrollable-x</code></td>\n      <td>Set scrolling on the x axis</td>\n    </tr>\n    <tr>\n      <td><code>.is-scrollable</code></td>\n      <td>Set scrolling on both the x & y axis</td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Unset Scrolling",code:'\n<table class="hx-table is-striped">\n  <thead>\n    <tr>\n      <th>Class</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n     <tr>\n      <td><code>.not-scrollable-y</code></td>\n      <td>Unset scrolling on the y axis</td>\n    </tr>\n     <tr>\n      <td><code>.not-scrollable-x</code></td>\n      <td>Unset scrolling on the x axis</td>\n    </tr>\n    <tr>\n      <td><code>.not-scrollable</code></td>\n      <td>Unset scrolling on both the x & y axis</td>\n    </tr>\n  </tbody>\n</table>\n          '}]}},components:{ExpandingCodeExample:i.a}}},Zblb:function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"scrollable"}},[e("h1",{staticClass:"hx-title"},[this._v("Scrollable")]),e("h2",{staticClass:"hx-subtitle"},[this._v("Helpers when working with scrollable containers")]),e("hr"),this._l(this.examples,function(t,s){return e("expanding-code-example",{key:s,attrs:{title:t.title,code:t.code,example:t.code,visible:!1}})})],2)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},Zjej:function(t,e,s){"use strict";var i=s("+5Ym"),n=s("9HKM"),a=!1;var o=function(t){a||s("0dgp")},l=s("VU/8")(i.a,n.a,!1,o,"data-v-735a47f0",null);l.options.__file="components/ExpandingCodeExample.vue",e.a=l.exports},"cC/F":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("K842"),n=s("Zblb"),a=!1;var o=function(t){a||s("5xTQ")},l=s("VU/8")(i.a,n.a,!1,o,null,null);l.options.__file="pages/scrollable.vue",e.default=l.exports},gIdq:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});