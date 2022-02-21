// User info state
export default {
  actions: {
    // Fetch all users from API
    async fetchAll(ctx) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/");
      const users = await res.json();

      ctx.commit("updateUsers", users);
    },

    // Fetch one user from API by id
    async fetchById(ctx, id) {
      ctx.commit("updateFetchStatus", true);
      
      let user = ctx.state.users.find((user) => user.id == id)

      ctx.commit("updateCurrentUser", user);
      ctx.commit("updateFetchStatus", false);
    },

    addUser(ctx, user) {
      user = {
        ...user,
        id: ctx.state.currentId,
        phone: "No phone for synthetic user",
        website: "synthetic-user.com",
        address: {
          street: "Not exists",
          suite: "Not exists",
          city: "Not exists",
        }
      }

      ctx.commit("updateId", 1)
      ctx.commit("updateAddUser", user);
    },

    delUser(ctx, userId) {
      ctx.commit("updateDelUser", userId);
    },

    setFilterValue(ctx, newValue) {
      ctx.commit("updateFilterValue", newValue);
    },
  },

  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },

    updateId(state, updId) {
      state.currentId += updId;
    },

    updateCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },

    updateFetchStatus(state, newStatus) {
      state.fetchStatus = newStatus;
    },

    updateAddUser(state, user) {
      state.users.unshift(user);
    },

    updateDelUser(state, userId) {
      state.users = state.users.filter((user) => user.id != userId);
    },

    updateFilterValue(state, newValue) {
      state.filterValue = newValue;
    },
  },

  state: {
    users: [], //contains full users list
    currentId: 11,
    filterValue: "",
    currentUser: {}, //contains current chosen user for UserPage component
    fetchStatus: null, //represents current user fetching status to lead Loader component
  },

  getters: {
    getAllUsers(state) {
      return state.users;
    },

    getCurrentUser(state) {
      return state.currentUser;
    },

    getFilterValue(state) {
      return state.filterValue.toLowerCase();
    },

    isFetching(state) {
      return state.fetchStatus;
    },
  },
};
