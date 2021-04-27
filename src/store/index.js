import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions.js"
import mutations from "./mutations.js"
import getters from "./getters.js"
Vue.use(Vuex)

const state={
  carList: []
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
export default store
