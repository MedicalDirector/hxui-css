webpackJsonp([15],{"6Sjw":function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"other"}},[e("h1",{staticClass:"hx-title"},[this._v("Other")]),e("h2",{staticClass:"hx-subtitle"},[this._v("Generic helper css classes")]),e("hr"),this._l(this.examples,function(t,i){return e("expanding-code-example",{key:i,attrs:{title:t.title,code:t.code,example:t.code,visible:!1}})})],2)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},UEhm:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hx-card example is-flat mb-3"},[e("div",{staticClass:"hx-card-header"},[e("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?e("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),e("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[e("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),e("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=n},X3Uc:function(t,e,i){"use strict";var s=i("Zjej");e.a={data:function(){return{examples:[{title:"Utilities",code:'\n<table class="hx-table is-striped">\n  <thead>\n    <tr>\n      <th>Class</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>\n   <tr>\n      <td><code>.is-clipped</code></td>\n      <td>Sets overflow:hidden;</td>\n    </tr>\n     <tr>\n      <td><code>.is-overlay</code></td>\n      <td>Sets position:absolute; and top,right,bottom,left positions to 0;</td>\n    </tr>\n     <tr>\n      <td><code>.has-pointer</code></td>\n      <td>Adds hand pointer to any element</td>\n    </tr>\n     <tr>\n      <td><code>.is-disabled</code></td>\n      <td>Removes pointer events from element</td>\n    </tr>\n    <tr>\n      <td><code>.is-marginless</code></td>\n      <td>Removes all margins from element</td>\n    </tr>\n    <tr>\n      <td><code>.is-paddingless</code></td>\n      <td>Removes all padding from element</td>\n    </tr>\n  </tbody>\n</table>\n          '}]}},components:{ExpandingCodeExample:s.a}}},Zjej:function(t,e,i){"use strict";var s=i("deq0"),n=i("UEhm"),o=!1;var a=function(t){o||i("lj5b")},d=i("VU/8")(s.a,n.a,!1,a,"data-v-a0505dc6",null);d.options.__file="components\\ExpandingCodeExample.vue",e.a=d.exports},deq0:function(t,e,i){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},jBro:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".elipsedText{width:250px}",""])},lj5b:function(t,e,i){var s=i("x8Dn");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("a8db8192",s,!1)},nbFT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("X3Uc"),n=i("6Sjw"),o=!1;var a=function(t){o||i("v4ry")},d=i("VU/8")(s.a,n.a,!1,a,null,null);d.options.__file="pages\\other.vue",e.default=d.exports},v4ry:function(t,e,i){var s=i("jBro");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("21192635",s,!1)},x8Dn:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});