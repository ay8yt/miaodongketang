import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(VueMaterial); //Material风格的UI框架
Vue.prototype.$axios = axios; //由于axios没有按vue插件标准编写，无法使用use方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
