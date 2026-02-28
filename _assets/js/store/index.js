import { createStore } from 'vuex'


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



const store = createStore({
  state,
  mutations,
  actions
})

export default store
