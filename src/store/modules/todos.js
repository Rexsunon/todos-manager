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
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await Axios.post("", { title, completed: false });

    commit("newTodo", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
  state,
  getters,
  actions,
  mutations
};
