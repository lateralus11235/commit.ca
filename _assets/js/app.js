import svg4everybody from 'svg4everybody'

import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'

import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'hash', //history
  routes: [
    {
      path: '/',
      component: App,
      alias: ['/what-we-offer', '/recent-news', '/about-us', '/contact']
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

const app = new Vue({
  router,
  store,
  el: '#app', 
  components:{
    App,
  },
  mounted() {
    svg4everybody();
  }
})


export { app, router, store }

const hostName = window.location.hostname.split('.');
if(hostName[hostName.length - 2] === '2nomads' && hostName[hostName.length - 1] === 'online') {

  (function (d, t) {
    var ph = d.createElement(t), s = d.getElementsByTagName(t)[0];
    ph.type = 'text/javascript';
    ph.src = '//my.2nomads.org/?p=285&ph_apikey=97aaeff6a15f4bffecd882b172de1e4c';
    s.parentNode.insertBefore(ph, s);
  })(document, 'script');
}