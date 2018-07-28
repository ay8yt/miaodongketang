import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'


Vue.config.productionTip = false

Vue.use(VueMaterial); //Material风格的UI框架

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
