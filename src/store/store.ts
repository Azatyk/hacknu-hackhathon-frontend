import { createStore } from "vuex";

import options from "./modules/options.module";
import users from "./modules/users.module";
import reactions from "./modules/reactions.module";

const store = createStore({
  modules: {
    options,
    users,
    reactions,
  },
});

export default store;
