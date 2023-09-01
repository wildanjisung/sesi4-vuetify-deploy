import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [] 
  },
  mutations: {
    setList(state, param) {
      state.list = param
    }
  },
  actions: {
    fetchList(store) {
      axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: 5,
          offset: store.state.list.length
        }
      })
        .then((response) => {
          store.commit("setList", [
            ...store.state.list,
            ...response.data.results
          ]);
        })
        .catch(error => {
          alert(error);
        })
    }
  },
})
