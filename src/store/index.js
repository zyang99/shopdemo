import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 1, name: 'zyang', age: 18 },
      { id: 2, name: 'why', age: 10 },
      { id: 3, name: 'zng', age: 48 },
      { id: 4, name: 'yng', age: 38 },
      { id: 5, name: 'zang', age: 28 },
    ]
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20student(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20studentLength(state, getters) {
      return getters.more20student.length
    },
    moreagestu(state) {
      return age => state.students.filter(s => s.age > age)
    }
  },
  mutations: {
    decrement(state) {
      state.counter--
    },
    increment(state) {
      state.counter++
    },
  },
  actions: {
    decrement(context,payload){
      setTimeout(() => {
        context.commit('decrement')
        console.log(payload);
      }, 1000);
    }
  },
  modules: {
  }
})
export default store
