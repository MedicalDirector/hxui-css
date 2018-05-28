webpackJsonp([29],{IqWD:function(s,n,i){(s.exports=i("FZ+f")(!1)).push([s.i,"",""])},JqAm:function(s,n,i){"use strict";var e=function(){var s=this.$createElement,n=this._self._c||s;return n("div",{attrs:{id:"alerts"}},[n("h1",{staticClass:"hx-title"},[this._v("Alerts")]),n("h2",{staticClass:"hx-subtitle"},[this._v("The alert component is a small complete navigation component.")]),n("hr"),this._l(this.examples,function(s,i){return n("expanding-code-example",{key:i,attrs:{title:s.title,code:s.code,example:s.code,visible:!1}})})],2)};e._withStripped=!0;var a={render:e,staticRenderFns:[]};n.a=a},R7UG:function(s,n,i){"use strict";n.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},R9iE:function(s,n,i){var e=i("uCJM");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("rjj0")("6679862f",e,!1)},RtGT:function(s,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("jgms"),a=i("JqAm"),t=!1;var c=function(s){t||i("oVy4")},l=i("VU/8")(e.a,a.a,!1,c,null,null);l.options.__file="pages\\alerts.vue",n.default=l.exports},UEhm:function(s,n,i){"use strict";var e=function(){var s=this.$createElement,n=this._self._c||s;return n("div",{staticClass:"hx-card example is-flat mb-3"},[n("div",{staticClass:"hx-card-header"},[n("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?n("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),n("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[n("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),n("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};e._withStripped=!0;var a={render:e,staticRenderFns:[function(){var s=this.$createElement,n=this._self._c||s;return n("span",{staticClass:"hx-icon-control"},[n("i",{staticClass:"hx-icon icon-code is-medium"})])}]};n.a=a},Zjej:function(s,n,i){"use strict";var e=i("R7UG"),a=i("UEhm"),t=!1;var c=function(s){t||i("R9iE")},l=i("VU/8")(e.a,a.a,!1,c,"data-v-a0505dc6",null);l.options.__file="components\\ExpandingCodeExample.vue",n.a=l.exports},jgms:function(s,n,i){"use strict";var e=i("Zjej");n.a={data:function(){return{examples:[{title:"Contextual",code:'\n<p>The <code>.hx-alert</code> component comes in 4 variations, success, info, warning and error. They can have icons assigned which can be changed and represent different actions.</p>\n\n<div class="hx-alert">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert\n  </span>\n</div>\n<div class="hx-alert is-info">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert\n  </span>\n</div>\n<div class="hx-alert is-success">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-check"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a success alert\n  </span>\n</div>\n<div class="hx-alert is-warning">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a warning alert\n  </span>\n</div>\n<div class="hx-alert is-danger">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a danger alert\n  </span>\n</div>\n          '},{title:"Closable",code:'\n<p>A close button can be added.</p>\n\n<div class="hx-alert">\n  <span class="hx-icon-control mr-2"><i class="hx-icon is-medium icon-information"></i></span>\n  <span class="hx-flex-1">This is the default alert</span>\n  <span class="hx-icon-control ml-2">\n    <button class="hx-delete"></button>\n  </span>\n</div>\n          '},{title:"Custom icon / No icon",code:'\n<p>You can easily assign a custom icon or remove it all together.</p>\n\n<div class="hx-alert is-success">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-credit-card"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a success alert with a custom icon.\n  </span>\n</div>\n<div class="hx-alert">\n  <span class="hx-flex-1">\n    This is an error alert with no icon.\n  </span>\n</div>'},{title:"Modifiers",code:'\n<h5>Inverted</h5>\n<p>Invert the alert style by using the <code>.is-inverse</code> modifier. </p>\n<div class="hx-alert is-inverse">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert. <a href="">Click here</a> to URL.\n  </span>\n  <span class="hx-icon-control ml-2">\n    <button class="hx-delete"></button>\n  </span>\n</div>\n<div class="hx-alert is-info is-inverse">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert. <a href="">Click here</a> to URL.\n  </span>\n  <span class="hx-icon-control ml-2">\n    <button class="hx-delete"></button>\n  </span>\n</div>\n<div class="hx-alert is-success is-inverse">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-check"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a success alert. <a href="">Click here</a> to URL.\n  </span>\n  <span class="hx-icon-control ml-2">\n    <button class="hx-delete"></button>\n  </span>\n</div>\n<div class="hx-alert is-warning is-inverse">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a warning alert. <a href="">Click here</a> to URL.\n  </span>\n  <span class="hx-icon-control ml-2">\n    <button class="hx-delete"></button>\n  </span>\n</div>\n<div class="hx-alert is-danger is-inverse">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a danger alert. <a href="">Click here</a> to URL.\n  </span>\n  <span class="hx-icon-control ml-2">\n    <button class="hx-delete"></button>\n  </span>\n</div>\n\n<p>&nbsp;</p>\n<h5>Bordered</h5>\n<p>Inverted styles are predominantly designed to work on white backgrounds. <br>\nIn some cases they will go on other background colours that make the inverted style hard to see. <br>\nUse the  <code>.is-bordered</code> modifier to make it stand out. </p>\n\n<div class="hx-alert is-inverse is-bordered">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-info is-inverse is-bordered">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-success is-inverse is-bordered">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-check"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a success alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-warning is-inverse is-bordered">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a warning alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-danger is-inverse is-bordered">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a danger alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n\n<p>&nbsp;</p>\n<h5>Sizes</h5>\n<p>Add the  <code>.is-small</code> modifier to reduce padding and overall size of alerts. </p>\n\n<div class="hx-alert is-inverse is-bordered is-small">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-info is-inverse is-bordered is-small">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-information"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is the default alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-success is-inverse is-bordered is-small">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-check"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a success alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-warning is-inverse is-bordered is-small">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a warning alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n<div class="hx-alert is-danger is-inverse is-bordered is-small">\n  <span class="hx-icon-control mr-2">\n    <i class="hx-icon is-medium icon-exclamation"></i>\n  </span>\n  <span class="hx-flex-1">\n    This is a danger alert. <a href="">Click here</a> to URL.\n  </span>\n</div>\n          '}]}},components:{ExpandingCodeExample:e.a}}},oVy4:function(s,n,i){var e=i("IqWD");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);i("rjj0")("c6142c46",e,!1)},uCJM:function(s,n,i){(s.exports=i("FZ+f")(!1)).push([s.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});