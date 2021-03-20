import Gender from "@/interfaces/gender.interface";
import Orientation from "@/interfaces/orientation.interface";

interface State {
  genders: Gender[];
  orientations: Orientation[];
}

export default {
  state: {
    genders: [],
    orientations: [],
  },
  mutations: {
    setGenders(state: State, genders: Gender[]) {
      state.genders = genders;
    },
    setOrientations(state: State, orientations: Orientation[]) {
      state.orientations = orientations;
    },
  },
  getters: {
    genders: (state: State) => state.genders,
    orientations: (state: State) => state.orientations,
  },
};
