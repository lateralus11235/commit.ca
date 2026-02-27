import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  navOpen: false,
  ...window.commitData
}

const mutations = {
  TOGGLE_NAV (state, newValue) {
    if (typeof newValue === 'boolean') {
      state.navOpen = newValue
      return
    }
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
