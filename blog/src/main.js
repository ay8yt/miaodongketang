import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import axios from 'axios';
import _ from 'lodash';

Vue.config.productionTip = false;

Vue.use(VueMaterial); //Material风格的UI框架
Vue.prototype.$axios = axios; //由于axios没有按vue插件标准编写，无法使用use方法
Vue.prototype._ = _; //添加lodash工具函数

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
