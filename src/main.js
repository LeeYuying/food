import Vue from 'vue'
import App from './App.vue'

import vueRouter from 'vue-router'
import router from './assets/js/router.js'
Vue.use(vueRouter)

import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css';

import axios from 'axios'
Vue.prototype.$http = axios;


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});