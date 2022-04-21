import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos
    }
  },
  actions: {
    GET_TODOS({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          commit('setTodos', res.data)
        })
    }
  },
  modules: {
  }
})
