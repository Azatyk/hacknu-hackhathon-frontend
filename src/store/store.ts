import { createStore } from "vuex";

import options from "./modules/options.module";
import users from "./modules/users.module";

const store = createStore({
  modules: {
    options,
    users,
  },
});

export default store;
