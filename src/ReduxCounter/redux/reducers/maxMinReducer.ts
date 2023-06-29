type addMinValueAT = ReturnType<typeof addMinValueAC>;
type addMaxValueAT = ReturnType<typeof addMaxValueAC>;

type ActionType = addMinValueAT | addMaxValueAT;

const initialState: MaxMinStateType = {
  numberValueMin: 0,
  numberValueMax: 1,
};

export type MaxMinStateType = {
  numberValueMin: number;
  numberValueMax: number;
};

export const maxMinReducer = (state = initialState, action: ActionType): MaxMinStateType => {
  switch (action.type) {
    case "ADD_MIN_VALUE":
      return { ...state, numberValueMin: action.payload.minValue };
    case "ADD_MAX_VALUE":
      return { ...state, numberValueMax: action.payload.maxValue };
    default:
      return state;
  }
};

export const addMinValueAC = (minValue: number) => {
  return {
    type: "ADD_MIN_VALUE",
    payload: {
      minValue,
    },
  } as const;
};

export const addMaxValueAC = (maxValue: number) => {
  return {
    type: "ADD_MAX_VALUE",
    payload: {
      maxValue,
    },
  } as const;
};
