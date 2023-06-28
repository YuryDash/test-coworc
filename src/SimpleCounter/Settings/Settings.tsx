import { Input } from "../../components/Input/Input";
import s from "./Settings.module.scss";
import { Btn } from "../../components/Btn/Btn";
import React from "react";

type SettingsPropsType = {
  setMaxValue: (num: number) => void;
  setMinValue: (num: number) => void;
  maxValue: number;
  minValue: number;
  setCurrentCountValue: (num: number) => void;
};
export const Settings: React.FC<SettingsPropsType> = ({
  setMaxValue,
  setMinValue,
  maxValue,
  minValue,
  setCurrentCountValue,
}) => {
  const onChangeMaxHandler = (numMax: number) => {
    numMax > 0 ? setMaxValue(numMax) : setMaxValue(1);
  };

  const onChangeMinHandler = (numMin: number) => {
    numMin > 0 ? setMinValue(numMin) : setMinValue(0);
    setCurrentCountValue(numMin < 0 ? 0 : numMin);
  };

  const onCLickButtonSet = () => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
    localStorage.setItem("minValue", JSON.stringify(minValue));
  };
  const onCLickButtonError = () => {};

  return (
    <div className={s.settings}>
      <div className={s.settings__title}>
        <div className={s.settings__item}>
          <Input onChangeHandler={onChangeMaxHandler} numberValue={maxValue} title={"Max-Value"} />
        </div>
        <div className={s.settings__item}>
          <Input onChangeHandler={onChangeMinHandler} numberValue={minValue} title={"Min-Value"} />
          {maxValue <= minValue && <div className={s.settings__errorDiv}>INCORRECT VALUE</div>}
        </div>
      </div>
      <div className={s.settings__button}>
        {maxValue <= minValue ? (
          <Btn className={s.button__error} name={"Incorrect Value"} onClick={onCLickButtonError} />
        ) : (
          <Btn className={s.button__normal} name={"Save Count Value"} onClick={onCLickButtonSet} />
        )}
      </div>
    </div>
  );
};
