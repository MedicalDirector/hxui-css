webpackJsonp([13],{"+5Ym":function(s,i,t){"use strict";i.a={props:{title:{default:"Example title",type:String},code:{default:"<h1>Code here</h1>",type:String},example:{default:"Example goes here",type:String},background:{default:"",type:String},visible:{default:!1,type:Boolean}},data:function(){return{ht:0,codeVisible:this.visible}},methods:{toggleCode:function(){this.codeVisible=!this.codeVisible,0===this.ht?this.getHeight():this.ht=0},getHeight:function(){this.ht=this.$refs.code.clientHeight}},mounted:function(){!0===this.codeVisible&&this.getHeight()}}},"0dgp":function(s,i,t){var n=t("gIdq");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("27cae0c4",n,!1)},"2K/r":function(s,i,t){"use strict";var n=function(){var s=this.$createElement,i=this._self._c||s;return i("div",{attrs:{id:"lists"}},[i("h1",{staticClass:"hx-title"},[this._v("Lists")]),this._m(0),i("hr"),this._l(this.examples,function(s,t){return i("expanding-code-example",{key:t,attrs:{title:s.title,code:s.code,example:s.code,visible:!1,background:s.bg}})})],2)};n._withStripped=!0;var e={render:n,staticRenderFns:[function(){var s=this.$createElement,i=this._self._c||s;return i("h2",{staticClass:"hx-subtitle"},[this._v("A simple configurable way of using "),i("code",[this._v("ul")]),this._v(" list.")])}]};i.a=e},"7iHV":function(s,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("9KY1"),e=t("2K/r"),l=!1;var a=function(s){l||t("jiV/")},c=t("VU/8")(n.a,e.a,!1,a,null,null);c.options.__file="pages/lists.vue",i.default=c.exports},"9HKM":function(s,i,t){"use strict";var n=function(){var s=this.$createElement,i=this._self._c||s;return i("div",{staticClass:"hx-card example is-flat mb-3"},[i("div",{staticClass:"hx-card-header"},[i("h4",{staticClass:"hx-card-header-title my-2"},[this._v(this._s(this.title))]),"<h1>Code here</h1>"!==this.code?i("button",{staticClass:"hx-button is-round is-transparent is-small is-pulled-right mx-4",on:{click:this.toggleCode}},[this._m(0)]):this._e()]),i("div",{staticClass:"hx-card-content pa-0 hx-code",style:{height:this.ht+"px"}},[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],ref:"code"},[i("code",{staticClass:"html"},[this._v("\n"+this._s(this.code)+"\n      ")])])]),i("div",{staticClass:"hx-card-content",class:this.background,domProps:{innerHTML:this._s(this.example)}})])};n._withStripped=!0;var e={render:n,staticRenderFns:[function(){var s=this.$createElement,i=this._self._c||s;return i("span",{staticClass:"hx-icon-control"},[i("i",{staticClass:"hx-icon icon-code is-medium"})])}]};i.a=e},"9KY1":function(s,i,t){"use strict";var n=t("Zjej");i.a={data:function(){return{examples:[{title:"Standard list",code:'\n<p>A simple <strong>Unordered</strong> list with the option to change bullet colours. </p>\n<p>Simply add a class <code>.hx-list</code> to the list and add either <code>.is-success</code>, <code>.is-success</code> or  <code>.is-danger</code> to the list item.</p>\n<ul class="hx-list">\n  <li>Item one - default</li>\n  <li class="is-success">Item two - success</li>\n  <li class="is-warning">Item three - warning</li>\n  <li class="is-danger">Item four - danger</li>\n</ul>\n          '},{title:"List with status",code:'\n<p>An <strong>Unordered</strong> list with <strong>status</strong> gives the option not only to change bullet colours, but to also changing the bullet to symbolises status. </p>\n<p>Simply add a class <code>.hx-list</code> <code>.has-status</code> to the list. To change colours, add either <code>.is-success</code>, <code>.is-success</code> or  <code>.is-danger</code> to the list item.</p>\n<ul class="hx-list has-status">\n  <li>Item one - default</li>\n  <li class="is-success">Item two - success</li>\n  <li class="is-warning">Item three - warning</li>\n  <li class="is-danger">Item four - danger</li>\n</ul>\n<br />\n<p>To turn the bullets into <strong>Unchecked</strong> circles, simply add <code>.is-not-checked</code> to the list item.</p>\n<ul class="hx-list has-status">\n  <li class="is-not-checked">Item one - default</li>\n  <li class="is-not-checked is-success">Item two - success</li>\n  <li class="is-not-checked is-warning">Item three - warning</li>\n  <li class="is-not-checked is-danger">Item four - danger</li>\n</ul>\n<br />\n<p>To turn the bullets into <strong>Checked</strong> circles, simply add <code>.is-checked</code> to the list item.</p>\n<ul class="hx-list has-status">\n  <li class="is-checked">Item one - default</li>\n  <li class="is-checked is-success">Item two - success</li>\n  <li class="is-checked is-warning">Item three - warning</li>\n  <li class="is-checked is-danger">Item four - danger</li>\n</ul>\n          '},{title:"Progress list",code:'\n<p>A <strong>Progress list</strong> is an extension to the <strong>List with Status</strong>.</p>\n<p>It creates a line that "join" all the bullets together to symbolises progression in terms of steps or time. Just add class <code>.is-joined</code> to the list.</p>\n<ul class="hx-list has-status is-joined">\n  <li class="is-success is-checked">\n    <h6 class="hx-title">Booked <i class="hx-icon icon-angle-up"></i></h6>\n    <div class="hx-collapsible">\n      <div class="hx-group">\n        <p><strong>SMS sent: Appointment Reminder</strong><p>\n        <p><em>16.04.2017</em></p>\n      </div>\n      <div class="hx-group">\n        <p><strong>SMS sent: Appointment booked</strong><p>\n        <p><em>20.04.2017</em></p>\n      </div>\n      <div class="hx-group">\n        <p>You have an appointment with Dr John GP at 1:30pm on 06/03/2017 at 45 Mariposa Parade, South Yackandandah, VIC 3749.\n  You can reply \'YES\' to this message to confirm, or \'NO\' to cancel.\n  If you need to reschedule. please call us at 03 3482 2181.</p>\n      </div>\n    </div>\n  </li>\n  <li class="is-not-checked is-success">\n    <h6 class="hx-title">Confirmed <i class="hx-icon icon-angle-up"></i></h6>\n    <div class="hx-collapsible">\n      <div class="hx-group">\n        <p><strong>SMS rec\'d: Patient Confirmed</strong><p>\n        <p><em>20.03.2017</em></p>\n        <p>YES</p>\n      </div>\n    </div>\n  </li>\n  <li class="is-not-checked is-warning">\n    <h6 class="hx-title">Checked in <i class="hx-icon icon-angle-up"></i></h6>\n    <div class="hx-collapsible">\n      <div class="hx-group">\n        <p class="is-warning"><strong>SMS rec\'d: Patient Replied at 3:55pm.</strong><p>\n        <p><em>20.03.2017</em></p>\n        <p>YES</p>\n      </div>\n    </div>\n  </li>\n  <li class="is-not-checked is-danger">\n    <h6 class="hx-title">Waiting <i class="hx-icon icon-angle-up"></i></h6>\n    <div class="hx-collapsible">\n      <div class="hx-group">\n        <p class="is-danger"><strong>SMS rec\'d: Patient Declined at 4:05pm.</strong><p>\n        <p><em>20.03.2017</em></p>\n        <p>YES</p>\n      </div>\n    </div>\n  </li>\n  <li></li>\n</ul>\n          '},{title:"List group",code:'\n<p>The most basic list group is an unordered list with list items and the proper classes</p>\n<div class="hx-columns mt-5">\n  <div class="hx-column is-4 is-offset-4">\n    <div class="hx-card">\n      <ul class="hx-list-group">\n        <li class="">\n          <a>Cras justo odio</a>\n        </li>\n        <li class="">\n          <a>Dapibus ac facilisis in</a>\n        </li>\n        <li class="">\n          <a>Morbi leo risus</a>\n        </li>\n        <li class="">\n          <a>Porta ac consectetur ac</a>\n        </li>\n        <li class="">\n          <a>Vestibulum at eros</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<br />\n<p>Adding actions into the list</p>\n<div class="hx-columns mt-5">\n  <div class="hx-column is-4 is-offset-4">\n    <div class="hx-card">\n      <ul class="hx-list-group">\n        <li class="">\n          <a>\n            <div class="hx-list-action">\n              <button class="hx-info is-small"></button>\n            </div>\n            <div class="hx-list-content">Cras justo odio</div>\n            <div class="hx-list-action">\n              <button class="hx-delete is-small"></button>\n            </div>\n          </a>\n        </li>\n        <li class="">\n          <a>\n            <div class="hx-list-action">\n              <button class="hx-info is-small"></button>\n            </div>\n            <div class="hx-list-content">Dapibus ac facilisis in</div>\n            <div class="hx-list-action">\n              <button class="hx-delete is-small"></button>\n            </div>\n          </a>\n        </li>\n        <li class="">\n          <a>\n            <div class="hx-list-action">\n              <button class="hx-info is-small"></button>\n            </div>\n            <div class="hx-list-content">Morbi leo risus</div>\n            <div class="hx-list-action">\n              <button class="hx-delete is-small"></button>\n            </div>\n          </a>\n        </li>\n        <li class="">\n          <a>\n            <div class="hx-list-action">\n              <button class="hx-info is-small"></button>\n            </div>\n            <div class="hx-list-content">Porta ac consectetur ac</div>\n            <div class="hx-list-action">\n              <button class="hx-delete is-small"></button>\n            </div>\n          </a>\n        </li>\n        <li class="">\n          <a>\n            <div class="hx-list-action">\n              <button class="hx-info is-small"></button>\n            </div>\n            <div class="hx-list-content">Vestibulum at eros</div>\n            <div class="hx-list-action">\n              <button class="hx-delete is-small"></button>\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<p>Adding textfield into the list</p>\n<div class="hx-columns mt-5">\n  <div class="hx-column is-4 is-offset-4">\n    <div class="hx-card">\n      <ul class="hx-list-group">\n        <li class="">\n          <a>\n            Bring the dog out for a walk\n          </a>\n        </li>\n        <li class="">\n          <a>\n            Clear the rubbish\n          </a>\n        </li>\n        <li class="has-text-field">\n          <input type="text" placeholder="Add item here" />\n        </li>\n        <li class="">\n          <a href="#" class="is-gray">\n            <i class="hx-icon icon-plus-outline mr-2"></i>\n            Add another row\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n          '}]}},components:{ExpandingCodeExample:n.a}}},GOWO:function(s,i,t){(s.exports=t("FZ+f")(!1)).push([s.i,"",""])},Zjej:function(s,i,t){"use strict";var n=t("+5Ym"),e=t("9HKM"),l=!1;var a=function(s){l||t("0dgp")},c=t("VU/8")(n.a,e.a,!1,a,"data-v-735a47f0",null);c.options.__file="components/ExpandingCodeExample.vue",i.a=c.exports},gIdq:function(s,i,t){(s.exports=t("FZ+f")(!1)).push([s.i,".hx-code[data-v-735a47f0]{overflow:auto;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}",""])},"jiV/":function(s,i,t){var n=t("GOWO");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("03280476",n,!1)}});