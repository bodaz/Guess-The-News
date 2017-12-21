import { createStore } from "redux";

import { rootReducer } from "../models";

/**
 * why you might want to use Redux DevTools in production
 * https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
 */
const store = createStore(rootReducer);

export default store;
