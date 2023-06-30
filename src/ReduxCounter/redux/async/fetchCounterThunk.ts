import { Dispatch } from "redux";
import { addMaxValueAC, addMinValueAC } from "../reducers/maxMinReducer";
import { setErrorAC, setNumberValueAC } from "../reducers/reduxCounterReducer";

export const saveCounterSettings = (maxValue: number, minValue: number) => {
  return (dispatch: Dispatch) => {
    try {
      localStorage.setItem("maxReduxValue", maxValue.toString());
      localStorage.setItem("minReduxValue", minValue.toString());
    } catch (error) {
      console.log("Error saving counter settings:", error);
    }
  };
};

export const loadCounterSettings = () => {
  return (dispatch: Dispatch) => {
    try {
      const maxValue = parseInt(localStorage.getItem("maxReduxValue") || "1");
      const minValue = parseInt(localStorage.getItem("minReduxValue") || "0");
      dispatch(addMinValueAC(minValue));
      dispatch(addMaxValueAC(maxValue));
      dispatch(setNumberValueAC(minValue, maxValue));
      console.log(minValue, maxValue);
    } catch (error) {
      let serError = "Error loading counter settings:" + error;
      error && dispatch(setErrorAC(serError));
      dispatch(addMinValueAC(0));
      dispatch(addMaxValueAC(1));
    }
  };
};
