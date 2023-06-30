const initialState: CounterStateType = {
  counterValue: 1,
  errorText: "",
  setAccess: false,
};

export type CounterStateType = {
  counterValue: number;
  errorText: string;
  setAccess: boolean;
};

export const reduxCounterReducer = (state = initialState, action: ActionType): CounterStateType => {
  switch (action.type) {
    case "SET_COUNTER_VALUE":
      if (action.payload.minCounterValue < action.payload.maxCounterValue) {
        return { ...state, counterValue: action.payload.minCounterValue, setAccess: true, errorText: "" };
      } else {
        return { ...state, errorText: "Incorrect max/min value" };
      }
    case "INCREMENT_COUNTER_VALUE":
      const increment = state.counterValue;
      return state.setAccess ? { ...state, counterValue: increment + 1 } : { ...state, errorText: "Press Set Button" };

    case "SET_ERROR":
      return { ...state, errorText: action.payload.errorValue };

    case "RESET_VALUE":
      if (action.payload.minValue < action.payload.maxValue) {
        return { ...state, counterValue: action.payload.minValue, errorText: "", setAccess: false };
      } else {
        return { ...state, errorText: "Incorrect min value" };
      }

    case "SET_ACCESS":
      return { ...state, setAccess: action.payload.setBoo };

    default:
      return state;
  }
};

//ActionCreators
export const setNumberValueAC = (minCounterValue: number, maxCounterValue: number) => {
  return {
    type: "SET_COUNTER_VALUE",
    payload: {
      minCounterValue,
      maxCounterValue,
    },
  } as const;
};

export const incrementAC = () => {
  return {
    type: "INCREMENT_COUNTER_VALUE",
  } as const;
};

export const setErrorAC = (errorValue: string) => {
  return {
    type: "SET_ERROR",
    payload: {
      errorValue,
    },
  } as const;
};

export const resetValueAC = (minValue: number, maxValue: number) => {
  return {
    type: "RESET_VALUE",
    payload: {
      minValue,
      maxValue,
    },
  } as const;
};

export const setAccessAC = (setBoo: boolean) => {
  return {
    type: "SET_ACCESS",
    payload: {
      setBoo,
    },
  } as const;
};
//types
type addNumberValueAT = ReturnType<typeof setNumberValueAC>;
type incrementAT = ReturnType<typeof incrementAC>;
export type setErrorAT = ReturnType<typeof setErrorAC>;
type resetValueAT = ReturnType<typeof resetValueAC>;
type setAccessAT = ReturnType<typeof setAccessAC>;
type ActionType = addNumberValueAT | incrementAT | setErrorAT | resetValueAT | setAccessAT;
