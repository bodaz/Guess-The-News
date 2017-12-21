import { combineReducers } from "redux";

import { counterReducer } from "./counter";
import { statusReducer } from "./status";

export const rootReducer = combineReducers({
  counter: counterReducer,
  status: statusReducer
});
