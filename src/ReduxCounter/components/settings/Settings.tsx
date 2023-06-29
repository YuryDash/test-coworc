import { useDispatch, useSelector } from "react-redux";
import { AppRCStateType } from "../../redux/ReduxStoreCounter";
import { addNumberValueAC } from "../../redux/reducers/reduxCounterReducer";
import { SuperButton } from "../btn/SuperButton";
import s from "./Settings.module.css";
import { SuperInput } from "./superInput/SuperInput";
import { addMaxValueAC, addMinValueAC } from "../../redux/reducers/maxMinReducer";

export const SettingsR = () => {
  const dispatch = useDispatch();
  const minValue = useSelector<AppRCStateType, number>((state) => state.maxMinReValue.numberValueMin);
  const maxValue = useSelector<AppRCStateType, number>((state) => state.maxMinReValue.numberValueMax);
  const access = useSelector<AppRCStateType, boolean>((state) => state.countReValue.setAccess);

  const changeMaxValueHandler = (maxValueChange: number) => {
    dispatch(addMaxValueAC(maxValueChange));
  };
  const changeMinValueHandler = (minValueChange: number) => {
    dispatch(addMinValueAC(minValueChange));
  };

  const setMinValueHandler = () => {
    dispatch(addNumberValueAC(minValue, maxValue));
  };
  return (
    <div className={s.wrapper}>
      {/* {errorValue && <div className={s.counter__error}>{errorValue}</div>} */}
      <div className={s.input}>
        <SuperInput
          callback={changeMaxValueHandler}
          maxValue={1000}
          minValue={1}
          value={maxValue}
          title={"max value"}
        />
      </div>

      <div className={s.input}>
        <SuperInput callback={changeMinValueHandler} maxValue={999} value={minValue} minValue={0} title={"min value"} />
      </div>

      {!access ? (
        <SuperButton callback={setMinValueHandler} btnText={"SET"} enabled={true} />
      ) : (
        <SuperButton callback={() => {}} btnText={"SET"} enabled={false} />
      )}
    </div>
  );
};
