// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false

window.Event = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
