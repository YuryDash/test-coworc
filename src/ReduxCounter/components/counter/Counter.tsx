import s from "./Counter.module.css";
import { SuperButton } from "../btn/SuperButton";
import { useDispatch, useSelector } from "react-redux";
import {
  CounterStateType,
  incrementAC,
  resetValueAC,
  setAccessAC,
  setErrorAC,
} from "../../redux/reducers/reduxCounterReducer";
import { AppRCStateType } from "../../redux/ReduxStoreCounter";

export const CounterR = () => {
  const counterNumber = useSelector<AppRCStateType, CounterStateType>((state) => state.countReValue);
  const minValue = useSelector<AppRCStateType, number>((state) => state.maxMinReValue.numberValueMin);
  const maxValue = useSelector<AppRCStateType, number>((state) => state.maxMinReValue.numberValueMax);
  const comparisonCounterValue = useSelector<AppRCStateType, number>((state) => state.countReValue.counterValue);
  const accessBoo = useSelector<AppRCStateType, boolean>((state) => state.countReValue.setAccess);
  const error = useSelector<AppRCStateType, string>((state) => state.countReValue.errorText);

  const dispatch = useDispatch();
  const incHandle = () => {
    if (maxValue > comparisonCounterValue) {
      dispatch(incrementAC());
    } else {
      dispatch(setErrorAC(`max value: ${maxValue}`));
    }
  };
  const resetHandle = () => {
    dispatch(resetValueAC(minValue, maxValue));
    dispatch(setAccessAC(false));
  };
  let varOne = {
    fontSize: "25px",
    color: "red",
    border: "2px solid red",
    padding: "5px",
    margin: "20px",
  };
  let varTwo = {
    fontSize: "55px",
    backgroundColor: "black",
  };

  return (
    <div className={s.wrapper}>
      {!error ? !accessBoo ? <h4>choose a number and press set</h4> : <h4>press inc</h4> : ""}
      <div className={s.counter}>
        <div style={counterNumber.errorText ? varOne : varTwo}>
          {counterNumber.errorText ? counterNumber.errorText : counterNumber.counterValue}
        </div>
        <div className={s.counter__buttons}>
          {!counterNumber.errorText ? (
            <SuperButton enabled={true} callback={incHandle} btnText={"increment"} />
          ) : (
            <SuperButton enabled={false} callback={() => {}} btnText={"increment"} />
          )}

          {!counterNumber.errorText ? (
            <SuperButton callback={() => {}} btnText={"reset"} enabled={false} />
          ) : (
            <SuperButton callback={resetHandle} btnText={"reset"} enabled={true} />
          )}
        </div>
      </div>
    </div>
  );
};
