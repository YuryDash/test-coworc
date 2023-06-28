import React from "react";
import s from "./Settings.module.css";
import { SuperInput } from "./superInput/SuperInput";
import { useDispatch, useSelector } from "react-redux";
// import { RootStateType } from "../../redux/store";
// import { addMinValueAC, comparisonMinMaxAC, MinStateType } from "../../reducers/minReducer";
// import { addMaxValueAC, comparisonMaxMinAC, MaxStateType } from "../../reducers/maxReducer";
import { SuperButton } from "../btn/SuperButton";
// import { addNumberValueAC, resetErrorAC } from "../../reducers/counterReducer";

export const SettingsR = () => {
  const dispatch = useDispatch();
  //   const minValue = useSelector<RootStateType, MinStateType>((state) => state.minReValue);
  //   const maxValue = useSelector<RootStateType, MaxStateType>((state) => state.maxReValue);

  const changeMaxValueHandler = (maxValueChange: number) => {
    // dispatch(addMaxValueAC(maxValueChange));
    // dispatch(comparisonMaxMinAC(minValue.numberValueMin));
  };
  const changeMinValueHandler = (minValueChange: number) => {
    // dispatch(addMinValueAC(minValueChange));
    // dispatch(comparisonMinMaxAC(maxValue.numberValueMax));
  };

  const setMinValueHandler = () => {
    // dispatch(addNumberValueAC(minValue.numberValueMin));
    // dispatch(resetErrorAC());
  };
  return (
    <div className={s.wrapper}>
      {/* {(maxValue.textErrorMax || minValue.textErrorMin) && <div className={s.counter__error}>{"Incorrect Values"}</div>} */}
      <div className={s.input}>
        <SuperInput
          callback={changeMaxValueHandler}
          maxValue={1000}
          minValue={1}
          //   value={maxValue.numberValueMax}
          title={"max value"}
          value={0}
        />
      </div>

      <div className={s.input}>
        <SuperInput
          callback={changeMinValueHandler}
          maxValue={999}
          //   value={minValue.numberValueMin}
          minValue={0}
          title={"min value"}
          value={0}
        />
      </div>

      <SuperButton callback={setMinValueHandler} btnText={"SET"} enabled={true} />
    </div>
  );
};
