import { combineReducers, legacy_createStore } from "redux";
import { reduxCounterReducer } from "./reduxCounterReducer";

const rootReduxCounterReducer = combineReducers({
  reduxReducer: reduxCounterReducer,
});

export const reduxCounterStore = legacy_createStore(rootReduxCounterReducer);
export type AppRCStateType = ReturnType<typeof rootReduxCounterReducer>;
