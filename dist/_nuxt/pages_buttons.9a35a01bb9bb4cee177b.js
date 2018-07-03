webpackJsonp([25],{"2iZt":function(n,s,t){(n.exports=t("FZ+f")(!1)).push([n.i,"",""])},"9/WN":function(n,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("YcOh"),i=t("KlbV"),o=!1;var c=function(n){o||t("ctoh")},e=t("VU/8")(a.a,i.a,!1,c,null,null);e.options.__file="pages\\buttons.vue",s.default=e.exports},KlbV:function(n,s,t){"use strict";var a=function(){var n=this.$createElement,s=this._self._c||n;return s("div",{attrs:{id:"buttons"}},[s("h1",{staticClass:"hx-title"},[this._v("Buttons")]),s("h2",{staticClass:"hx-subtitle"},[this._v("The classic button, in different colors, sizes, and states")]),s("hr"),this._l(this.examples,function(n,t){return s("expanding-code-example",{key:t,attrs:{title:n.title,code:n.code,example:n.code,visible:!1}})})],2)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};s.a=i},UEhm:function(n,s,t){"use strict";var a=function(){var n=this.$createElement,s=this._self._c||n;return s("div",{staticClass:"hx-card example is-flat mb-3"},[s("div",{staticClass:"hx-card-header"},[s("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?s("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),s("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[s("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),s("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var n=this.$createElement,s=this._self._c||n;return s("span",{staticClass:"hx-icon-control"},[s("i",{staticClass:"hx-icon icon-code is-medium"})])}]};s.a=i},YcOh:function(n,s,t){"use strict";var a=t("Zjej");s.a={data:function(){return{examples:[{title:"Button colours",code:'\n<div class="has-text-centered">\n  <a class="hx-button">Button</a>\n  <a class="hx-button is-white">White</a>\n  <a class="hx-button is-light">Light</a>\n  <a class="hx-button is-dark">Dark</a>\n  <a class="hx-button is-black">Black</a>\n  <a class="hx-button is-primary">Primary</a>\n  <a class="hx-button is-info">Info</a>\n  <a class="hx-button is-warning">Warning</a>\n  <a class="hx-button is-danger">Danger</a>\n  <a class="hx-button is-link">Link</a>\n  <a class="hx-button is-transparent">Transparent</a>\n</div>\n          '},{title:"Sizes",code:'\n<div class="has-text-centered">\n  <a class="hx-button is-small">Small</a>\n  <a class="hx-button">Normal</a>\n  <a class="hx-button is-large">Large</a>\n</div>\n          '},{title:"Flat",code:'\n<div class="has-text-centered">\n  <a class="hx-button is-flat">Flat</a>\n  <a class="hx-button is-primary is-flat">Flat</a>\n  <a class="hx-button is-info is-flat">Flat</a>\n  <a class="hx-button is-danger is-flat">Flat</a>\n</div>\n          '},{title:"Outlined",code:'\n<div class="has-text-centered">\n  <a class="hx-button is-outlined">Outlined</a>\n  <a class="hx-button is-primary is-outlined">Outlined</a>\n  <a class="hx-button is-info is-outlined">Outlined</a>\n  <a class="hx-button is-danger is-outlined">Outlined</a>\n</div>\n          '},{title:"States",code:'\n<div class="has-text-centered">\n  <p>Hover</p>\n  <a class="hx-button is-hovered">Hover</a>\n  <a class="hx-button is-primary is-hovered">Hover</a>\n  <a class="hx-button is-info is-hovered">Hover</a>\n  <a class="hx-button is-warning is-hovered">Hover</a>\n  <a class="hx-button is-danger is-hovered">Hover</a>\n  <p class="mt-5">Focus</p>\n  <a class="hx-button is-focused">Focus</a>\n  <a class="hx-button is-primary is-focused">Focus</a>\n  <a class="hx-button is-info is-focused">Focus</a>\n  <a class="hx-button is-warning is-focused">Focus</a>\n  <a class="hx-button is-danger is-focused">Focus</a>\n  <p class="mt-5">Active</p>\n  <a class="hx-button is-active">Active</a>\n  <a class="hx-button is-primary is-active">Active</a>\n  <a class="hx-button is-info is-active">Active</a>\n  <a class="hx-button is-warning is-active">Active</a>\n  <a class="hx-button is-danger is-active">Active</a>\n</div>\n          '},{title:"Loading",code:'\n<div class="has-text-centered">\n  <a class="hx-button is-loading">Loading</a>\n  <a class="hx-button is-primary is-loading">Loading</a>\n  <a class="hx-button is-info is-loading">Loading</a>\n  <a class="hx-button is-warning is-loading">Loading</a>\n  <a class="hx-button is-danger is-loading">Loading</a>\n</div>\n          '},{title:"Disabled",code:'\n<div class="has-text-centered">\n  <a class="hx-button" disabled>Disabled</a>\n  <a class="hx-button is-primary" disabled>Disabled</a>\n  <a class="hx-button is-info" disabled>Disabled</a>\n  <a class="hx-button is-warning" disabled>Disabled</a>\n  <a class="hx-button is-danger" disabled>Disabled</a>\n</div>\n          '},{title:"With icons",code:'\n<div class="has-text-centered">\n  <p>\n    <a class="hx-button">\n      <span class="hx-icon-control"><i class="icon icon-helix"></i></span>\n      <span>Helix</span>\n    </a>\n    <a class="hx-button">\n      <span>Helix</span>\n      <span class="hx-icon-control"><i class="icon icon-helix"></i></span>\n    </a>\n    <a class="hx-button is-success">\n      <span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span>\n      <span>Add</span>\n    </a>\n    <a class="hx-button is-info">\n      <span>More</span>\n      <span class="hx-icon-control"><i class="icon icon-more"></i></span>\n    </a>\n    <a class="hx-button is-danger">\n      <span class="hx-icon-control"><i class="icon icon-close-empty"></i></span>\n      <span>Remove</span>\n    </a>\n  </p>\n  <p>\n    <a class="hx-button is-primary is-outlined">\n      <span class="hx-icon-control"><i class="icon icon-helix"></i></span>\n    </a>\n    <a class="hx-button is-warning">\n      <span class="hx-icon-control"><i class="icon icon-plus-empty"></i></span>\n    </a>\n    <a class="hx-button is-dark">\n      <span class="hx-icon-control"><i class="icon icon-angle-left"></i></span>\n    </a>\n    <a class="hx-button is-success">\n      <span class="hx-icon-control"><i class="icon icon-angle-right"></i></span>\n    </a>\n    <a class="hx-button is-danger">\n      <span class="hx-icon-control"><i class="icon icon-heart"></i></span>\n    </a>\n  </p>\n  <p>\n    <a class="hx-button is-small">\n      <span>Small</span>\n      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>\n    </a>\n    <a class="hx-button">\n      <span>Medium</span>\n      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>\n    </a>\n    <a class="hx-button is-large">\n      <span>Large</span>\n      <span class="hx-icon-control"><i class="icon icon-angle-down"></i></span>\n    </a>\n  </p>\n</div>\n          '},{title:"Round icon buttons",code:'\n<div class="has-text-centered">\n  <button class="hx-button is-round is-light is-small">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-minus-empty"></i>\n    </span>\n  </button>\n  <button class="hx-button is-round is-danger is-small">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-heart"></i>\n    </span>\n  </button>\n  <button class="hx-button is-round">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-plus-empty is-medium"></i>\n    </span>\n  </button>\n  <button class="hx-button is-info is-round">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-medications is-medium"></i>\n    </span>\n  </button>\n  <button class="hx-button is-round is-light is-large">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-email-outline is-large"></i>\n    </span>\n  </button>\n  <button class="hx-button is-round is-black is-large">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-paperclip is-large"></i>\n    </span>\n  </button>\n</div>\n          '},{title:"Button group",code:'\n<p class="has-text-centered">These are examples of the Button Group.</p>\n<div class="hx-button-group mb-3 has-text-centered">\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-email-outline"></i>\n    </span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-printer-outline"></i>\n    </span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-credit-card"></i>\n    </span>\n  </a>\n</div>\n<div class="hx-button-group mb-3 has-text-centered">\n  <a class="hx-button">\n    Left\n  </a>\n  <a class="hx-button">\n    Middle\n  </a>\n  <a class="hx-button">\n    Right\n  </a>\n</div>\n<div class="hx-button-group has-text-centered">\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-email-outline"></i>\n    </span>\n    <span>Email</span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-printer-outline"></i>\n    </span>\n    <span>Print</span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-credit-card"></i>\n    </span>\n    <span>Pay</span>\n  </a>\n</div>\n<p class="mt-5 has-text-centered">You can change the button style in button group addons using the button modifiers such as <code>.is-info</code> or <code>.is-primary</code>, etc.</p>\n<div class="hx-button-group mb-3 has-text-centered">\n  <a class="hx-button is-info">\n    Left\n  </a>\n  <a class="hx-button is-info">\n    Middle\n  </a>\n  <a class="hx-button is-info">\n    Right\n  </a>\n</div>\n<div class="hx-button-group has-text-centered">\n  <a class="hx-button is-primary">\n    Left\n  </a>\n  <a class="hx-button is-primary">\n    Middle\n  </a>\n  <a class="hx-button is-primary">\n    Right\n  </a>\n</div>\n<br />\n<p class="has-text-centered">Make the group of buttons stretch to the entire width of its parent. Just add class <code>is-fullwidth</code> to the group.</p>\n<div class="hx-button-group has-text-centered is-fullwidth">\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-email-outline"></i>\n    </span>\n    <span>Email to the patient</span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-printer-outline"></i>\n    </span>\n    <span>Print invoice</span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-credit-card"></i>\n    </span>\n    <span>Pay bill with credit card</span>\n  </a>\n</div>\n<br />\n<p class="has-text-centered">Make a group of buttons stretch at equal sizes to span the entire width of its parent. Add another class <code>is-justified</code> to the group.</p>\n<div class="hx-button-group has-text-centered is-fullwidth is-justified">\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-email-outline"></i>\n    </span>\n    <span>Email to the patient</span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-printer-outline"></i>\n    </span>\n    <span>Print invoice</span>\n  </a>\n  <a class="hx-button">\n    <span class="hx-icon-control">\n      <i class="hx-icon icon-credit-card"></i>\n    </span>\n    <span>Pay bill with credit card</span>\n  </a>\n</div>\n          '},{title:"Split buttons",code:'\n            <div class="hx-flex hx-flex-justify-around">\n                <div class="hx-button-split">\n                    <button type="button" class="hx-button is-primary is-small">Create recall</button>\n                    <button type="button" class="hx-button is-primary is-small"><i class="icon icon-angle-down"></i></button>\n                </div>\n\n                <div class="hx-button-split">\n                    <button type="button" class="hx-button is-primary">Create recall</button>\n                    <button type="button" class="hx-button is-primary"><i class="icon icon-angle-down"></i></button>\n                </div>\n                <div class="hx-button-split">\n                    <button type="button" class="hx-button is-primary is-large">Create recall</button>\n                    <button type="button" class="hx-button is-primary is-large"><i class="icon icon-angle-down"></i></button>\n                </div>\n            </div>\n          '}]}},components:{ExpandingCodeExample:a.a}}},Zjej:function(n,s,t){"use strict";var a=t("deq0"),i=t("UEhm"),o=!1;var c=function(n){o||t("lj5b")},e=t("VU/8")(a.a,i.a,!1,c,"data-v-a0505dc6",null);e.options.__file="components\\ExpandingCodeExample.vue",s.a=e.exports},ctoh:function(n,s,t){var a=t("2iZt");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("2764d6fc",a,!1)},deq0:function(n,s,t){"use strict";s.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},lj5b:function(n,s,t){var a=t("x8Dn");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("a8db8192",a,!1)},x8Dn:function(n,s,t){(n.exports=t("FZ+f")(!1)).push([n.i,".hx-code[data-v-a0505dc6]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])}});