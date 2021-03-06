// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/js/common.js')


import Vue from 'vue'
import App from './App'
import router from './router'
import VueImg from 'v-img';
var VueScrollTo = require('vue-scrollto');
import vueScrollBehavior from 'vue-scroll-behavior'
import ScrollToPlugin from "gsap/ScrollToPlugin";
// import "babel-polyfill";
// require("babel-polyfill");
// require('polyfills')

// Using vueScrollBehavior 
// Vue.use(vueScrollBehavior, {
//   router: router,
//   maxLength: 100,
//   // ignore: [/\/website/, /\/zoo/],
// })

// router.beforeEach(function (to, from, next) {
//   window.scrollTo(0, window.pageYOffset)
//   console.log(window.pageYOffset);
//   next()
// })
 
Vue.use(VueScrollTo)


Vue.use(VueImg);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
