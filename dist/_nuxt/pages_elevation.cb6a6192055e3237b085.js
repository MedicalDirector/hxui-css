webpackJsonp([37],{"64sa":function(e,t,a){var s=a("WA3F");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("2002eb97",s,!1)},QpbK:function(e,t,a){"use strict";t.a={data:function(){return{n:0}}}},WA3F:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:2px;background:#d3d3d3;outline:none;-webkit-transition:opacity .3s;transition:opacity .3s}.slider,.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:100%;background-color:#eee;border:4px solid #41b987;cursor:pointer;position:relative;opacity:1}",""])},Z4WU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("QpbK"),i=a("q8ma"),n=!1;var o=function(e){n||a("64sa")},r=a("VU/8")(s.a,i.a,!1,o,null,null);r.options.__file="pages\\elevation.vue",t.default=r.exports},q8ma:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"elevation"},[a("h1",{staticClass:"hx-title"},[e._v("Elevation")]),a("h2",{staticClass:"hx-subtitle"},[e._v("The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.")]),a("hr"),a("h3",{staticClass:"mt-10 mb-2"},[e._v("Variants")]),e._m(0),a("h3",{staticClass:"mt-10"},[e._v("Playground")]),a("div",{staticClass:"hx-columns"},[a("div",{staticClass:"hx-column"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.n,expression:"n"}],staticClass:"slider my-3",attrs:{type:"range",min:"0",max:"24",id:"myRange"},domProps:{value:e.n},on:{__r:function(t){e.n=t.target.value}}})]),a("div",{staticClass:"hx-column"},[a("div",{staticClass:"hx-card",class:"is-elevate-"+e.n},[a("div",{staticClass:"hx-card-content"},[a("h4",{staticClass:"has-text-centered mt-3 mb-0"},[e._v("Elevation "+e._s(e.n))]),a("p",{staticClass:"has-text-centered"},[a("code",[e._v("is-elevate-"+e._s(e.n))])])])])])])])};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There's a total of 25 elevation levels. You can set an element's elevation by using the class "),t("code",[this._v("is-elevate-N")]),this._v(", where N is a integer between 0-24 corresponding to the desired elevation.")])}]};t.a=i}});