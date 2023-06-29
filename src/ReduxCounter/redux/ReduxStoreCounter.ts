import { combineReducers, legacy_createStore } from "redux";
import { reduxCounterReducer } from "./reducers/reduxCounterReducer";
import { maxMinReducer } from "./reducers/maxMinReducer";

const rootReduxCounterReducer = combineReducers({
  countReValue: reduxCounterReducer,
  maxMinReValue: maxMinReducer,
});
console.log(rootReduxCounterReducer);

export const reduxCounterStore = legacy_createStore(rootReduxCounterReducer);
export type AppRCStateType = ReturnType<typeof rootReduxCounterReducer>;
