import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  navOpen: false
}

const mutations = {
  TOGGLE_NAV (state) {
    state.navOpen = !state.navOpen
  },
}

const actions = {
}



const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
