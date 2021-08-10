import { createStore } from 'vuex'

export default createStore({
  state: {
    couter: 0,
  },
  mutations: {
    changeCouter(state, couter) {
      state.couter = couter
    },
  },
})
