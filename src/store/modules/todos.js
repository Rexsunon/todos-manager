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
  },

  async deleteTodo({ commit }, id) {
    await Axios.delete(`/${id}`);

    commit("removeTodo", id);
  },

  async filterTodos({ commit }, e) {
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

    const response = await Axios.get(`?limit=${limit}`);

    commit("setTodos", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
