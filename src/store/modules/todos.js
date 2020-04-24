// import axios from "axios";

import Axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "Todo One"
    },
    {
      id: 2,
      title: "Todo Tow"
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodo({ commit }) {
    const response = await Axios.get("https://jsonplaceholder.typicode.com/todos");

    console.log(response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};

export default {
  state,
  getters,
  actions,
  mutations
};
