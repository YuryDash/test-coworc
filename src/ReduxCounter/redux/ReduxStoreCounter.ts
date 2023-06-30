import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reduxCounterReducer } from "./reducers/reduxCounterReducer";
import { maxMinReducer } from "./reducers/maxMinReducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReduxCounterReducer = combineReducers({
  countReValue: reduxCounterReducer,
  maxMinReValue: maxMinReducer,
});

export const reduxCounterStore = legacy_createStore(rootReduxCounterReducer, applyMiddleware(thunk));

export type AppRCStateType = ReturnType<typeof rootReduxCounterReducer>;
export type AppThunkDispatch = ThunkDispatch<AppRCStateType, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRCStateType> = useSelector;
