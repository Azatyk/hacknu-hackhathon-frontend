interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthday: string;
  orientationId: number;
  genderId: number;
  createdAt: string;
  phoneNumber: string;
  avatar: string;
  avatarPreview: string;
}

interface State {
  likedByUser: User[];
  likedToUser: User[];
}

export default {
  state: {
    likedByUser: [],
    likedToUser: [],
  },

  mutations: {
    setLikedByUser(state: State, users: User[]) {
      state.likedByUser = users;
    },
    setLikedToUser(state: State, users: User[]) {
      state.likedToUser = users;
    },
  },

  getters: {
    likedByUser: (state: State) => state.likedByUser,
    likedToUser: (state: State) => state.likedToUser,
  },
};
