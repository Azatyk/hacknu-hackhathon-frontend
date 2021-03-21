import User from "@/interfaces/user.interface";

interface State {
  user: User;
}

export default {
  state: {
    user: { phoneNumber: "77072050716" },
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
