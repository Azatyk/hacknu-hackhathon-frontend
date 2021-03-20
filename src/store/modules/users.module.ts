import User from "@/interfaces/user.interface";

interface State {
  user: User;
}

export default {
  state: {
    user: {},
  },
  mutations: {
    setUser(state: State, user: User) {
      state.user = user;
    },
  },
  getters: {
    user: (state: State) => state.user,
  },
};
