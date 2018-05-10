webpackJsonp([1],{"+5Ym":function(t,e,i){"use strict";e.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(t,e,i){var n=i("gIdq");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("27cae0c4",n,!1)},"2fAS":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("FUFq"),l=i("xZpG"),s=!1;var o=function(t){s||i("ITjI")},d=i("VU/8")(n.a,l.a,!1,o,null,null);d.options.__file="pages/typography.vue",e.default=d.exports},"9HKM":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hx-card example is-flat mb-3"},[i("div",{staticClass:"hx-card-header"},[i("h4",{staticClass:"hx-card-header-title my-2"},[t._v(t._s(t.title))]),"<h1>Code here</h1>"!==t.code?i("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:t.toggleCode}},[t._m(0)]):t._e()]),i("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:t.ht+"px"}},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[i("code",{staticClass:"html"},[t._v("\n"+t._s(t.code)+"\n      ")])])]),i("div",{staticClass:"hx-card-content",class:t.background,domProps:{innerHTML:t._s(t.example)}})])};n._withStripped=!0;var l={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hx-icon-control"},[e("i",{staticClass:"hx-icon icon-code is-medium"})])}]};e.a=l},FUFq:function(t,e,i){"use strict";var n=i("Zjej");e.a={data:function(){return{examples:[{title:"Titles",code:'\n<p>There are <strong>2 types</strong> of titles:</p>\n<ul>\n  <li><code>.hx-title</code></li>\n  <li><code>.hx-subtitle</code></li>\n</ul>\n<br>\n<h1 class="hx-title">Title</h1>\n<h2 class="hx-subtitle">Subtitle</h2>\n          '},{title:"Headings",code:"\n<p>There are <strong>6 sizes</strong> available:</p>\n<ul>\n  <li><code>&lt;h1&gt;</code> or <code>.h1</code></li>\n  <li><code>&lt;h2&gt;</code> or <code>.h2</code></li>\n  <li><code>&lt;h3&gt;</code> or <code>.h3</code></li>\n  <li><code>&lt;h4&gt;</code> or <code>.h4</code></li>\n  <li><code>&lt;h5&gt;</code> or <code>.h5</code></li>\n  <li><code>&lt;h6&gt;</code> or <code>.h6</code></li>\n</ul>\n<br>\n<h1>h1. HxUI heading</h1>\n<h2>h2. HxUI heading</h2>\n<h3>h3. HxUI heading</h3>\n<h4>h4. HxUI heading</h4>\n<h5>h5. HxUI heading</h5>\n<h6>h6. HxUI heading</h6>\n          "},{title:"Paragraphs and Inline text elements",code:'\n<div class="hx-columns">\n  <div class="hx-column is-4">\n    <ul>\n      <li><code>&lt;p&gt;</code> Paragraphs</li>\n      <li><code>&lt;mark&gt;</code> Mark</li>\n      <li><code>&lt;del&gt;</code> Delete</li>\n      <li><code>&lt;s&gt;</code> Strikeline</li>\n      <li><code>&lt;ins&gt;</code> Insert</li>\n      <li><code>&lt;u&gt;</code> Underline</li>\n      <li><code>&lt;small&gt;</code> Small</li>\n      <li><code>&lt;strong&gt;</code> Strong</li>\n      <li><code>&lt;em&gt;</code> Emphasized</li>\n    </ul>\n  </div>\n  <div class="hx-column">\n    <p>This is a paragraph.</p>\n    <p>You can use the mark tag to <mark>highlight</mark> text.</p>\n    <p><del>This line of text is meant to be treated as deleted text.</del></p>\n    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n    <p><u>This line of text will render as underlined</u></p>\n    <p><small>This line of text is meant to be treated as fine print.</small></p>\n    <p><strong>This line rendered as bold text.</strong></p>\n    <p><em>This line rendered as italicized text.</em></p>\n  </div>\n</div>\n          '},{title:"Lists",code:'\n<div class="hx-columns">\n  <div class="hx-column is-4">\n    <p>Use an unordered list to list things, if the order of the items doesn\'t matter.</p>\n    <p>And a definition list <code>&lt;dl&gt;</code> is used to display name-value pairs, <br>like metadata or a dictionary definition. <br>Each term <code>&lt;dt&gt;</code> is paired with one or more definitions <code>&lt;dd&gt;</code>.</p>\n    <ul>\n      <li><code>&lt;ul&gt;</code> Unorder list</li>\n      <li><code>&lt;ol&gt;</code> Order list</li>\n      <li><code>&lt;dl&gt;</code> Definition Lists</li>\n    </ul>\n  </div>\n  <div class="hx-column is-2 is-offset-1">\n    <p><strong>Unordered lists</strong></p>\n    <ul>\n      <li>List item</li>\n      <li>List item</li>\n      <ul>\n        <li>List item</li>\n      </ul>\n    </ul>\n    <p><strong>Ordered lists</strong></p>\n    <ol>\n      <li>List item</li>\n      <li>List item</li>\n      <ol>\n        <li>List item</li>\n      </ol>\n    </ol>\n  </div>\n  <div class="hx-column is-3">\n    <p><strong>Definition list</strong></p>\n    <dl>\n      <dt>Time</dt>\n      <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>\n      <dt>Space</dt>\n      <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>\n      <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>\n    </dl>\n  </div>\n</div>\n          '},{title:"Alignments",code:'\n<table class="hx-table is-striped">\n  <thead>\n    <tr>\n      <th>Class</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>.is-text-nowrap</code></td>\n      <td class="is-text-nowrap">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-text-truncate</code></td>\n      <td class="is-text-truncate">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-text-center</code></td>\n      <td class="is-text-center">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Transformation",code:'\n<table class="hx-table is-striped">\n  <thead>\n    <tr>\n      <th>Class</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>.is-text-lowercase</code></td>\n      <td class="is-text-lowercase">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-text-uppercase</code></td>\n      <td class="is-text-uppercase">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-text-capitalise</code></td>\n      <td class="is-text-capitalise">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Weights & italics",code:'\n<table class="hx-table is-striped">\n  <thead>\n    <tr>\n      <th>Class</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>.is-text-weight-normal</code></td>\n      <td class="is-text-weight-normal">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-text-bold</code></td>\n      <td class="is-text-bold">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-text-italic</code></td>\n      <td class="is-text-italic">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n  </tbody>\n</table>\n          '},{title:"Colours",code:'\n<p>Easily colour text with text colour classes</p>\n<table class="hx-table is-striped">\n  <thead>\n    <tr>\n      <th>Class</th>\n      <th>Example</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>.is-white</code></td>\n      <td class="is-white">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-black</code></td>\n      <td class="is-black">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-lighter</code></td>\n      <td class="is-lighter">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-light</code></td>\n      <td class="is-light">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-dark</code></td>\n      <td class="is-dark">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-primary</code></td>\n      <td class="is-primary">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-info</code></td>\n      <td class="is-info">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-warning</code></td>\n      <td class="is-warning">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n    <tr>\n      <td><code>.is-danger</code></td>\n      <td class="is-danger">Lorizzle ipsum bow wow wow fizzle amet, shizzle my nizzle crocodizzle adipiscing elit.</td>\n    </tr>\n  </tbody>\n</table>\n          '}]}},components:{ExpandingCodeExample:n.a}}},ITjI:function(t,e,i){var n=i("xrS8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("3714aead",n,!1)},Zjej:function(t,e,i){"use strict";var n=i("+5Ym"),l=i("9HKM"),s=!1;var o=function(t){s||i("0dgp")},d=i("VU/8")(n.a,l.a,!1,o,"data-v-735a47f0",null);d.options.__file="components/ExpandingCodeExample.vue",e.a=d.exports},gIdq:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},xZpG:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"typo"}},[e("h1",{staticClass:"hx-title"},[this._v("Typography")]),e("h2",{staticClass:"hx-subtitle"},[this._v("Simple typography to add depth to your page")]),e("hr"),this._l(this.examples,function(t,i){return e("expanding-code-example",{key:i,attrs:{title:t.title,code:t.code,example:t.code,visible:!1}})})],2)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};e.a=l},xrS8:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])}});