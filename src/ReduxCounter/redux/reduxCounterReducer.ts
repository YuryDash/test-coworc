import { AppRCStateType } from "./ReduxStoreCounter";

type ActionType = any;

const initialState: InitialStateType = {
  counterValueMax: 1,
  counterValueMin: 0,
};

type InitialStateType = {
  counterValueMax: number;
  counterValueMin: number;
};

export const reduxCounterReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case "value":
      return state;
    default:
      return state;
  }
};
