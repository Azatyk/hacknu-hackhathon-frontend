import { createStore } from "vuex";

import options from "./modules/options.module";

const store = createStore({
  modules: {
    options,
  },
});

export default store;
