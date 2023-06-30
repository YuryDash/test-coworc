import { useDispatch, useSelector } from "react-redux";
import { AppRCStateType, useAppDispatch } from "../../redux/ReduxStoreCounter";
import { SuperButton } from "../btn/SuperButton";
import s from "./Settings.module.css";
import { SuperInput } from "./superInput/SuperInput";
import { addMaxValueAC, addMinValueAC } from "../../redux/reducers/maxMinReducer";
import { saveCounterSettings } from "../../redux/async/fetchCounterThunk";
import { setNumberValueAC } from "../../redux/reducers/reduxCounterReducer";

export const SettingsR = () => {
  const dispatch = useAppDispatch();
  const minValue = useSelector<AppRCStateType, number>((state) => state.maxMinReValue.numberValueMin);
  const maxValue = useSelector<AppRCStateType, number>((state) => state.maxMinReValue.numberValueMax);
  const access = useSelector<AppRCStateType, boolean>((state) => state.countReValue.setAccess);
  const currentNumber = useSelector<AppRCStateType, number>((state) => state.countReValue.counterValue);

  const changeMaxValueHandler = (maxValueChange: number) => {
    dispatch(addMaxValueAC(maxValueChange));
  };
  const changeMinValueHandler = (minValueChange: number) => {
    dispatch(addMinValueAC(minValueChange));
  };

  const setMinValueHandler = () => {
    dispatch(saveCounterSettings(maxValue, minValue));
    dispatch(setNumberValueAC(minValue, maxValue));
  };
  return (
    <div className={s.wrapper}>
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
