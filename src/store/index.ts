// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

// store.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    // Your state variables go here
    users: [],
  },
  mutations: {
    // Mutations to modify the state go here
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    // Actions that can be asynchronous go here
    async fetchUsers({ commit }) {
      try {
        // Make an HTTP request using Axios
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        // Commit a mutation to update the state with the fetched data
        commit('setUsers', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
  getters: {
    // Getters to access state variables go here
    getUsers: (state) => state.users,
  },
});
