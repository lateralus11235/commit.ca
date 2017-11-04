import svg4everybody from 'svg4everybody'

import Vue from 'vue'
//import { sync } from 'vuex-router-sync'
import App from './components/App.vue'

import store from './store'

const app = new Vue({

  store,
  el: '#app', 
  components:{
    App,
  }
})


export { app, store }