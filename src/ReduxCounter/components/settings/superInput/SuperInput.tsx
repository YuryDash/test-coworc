import React, { ChangeEvent } from "react";
import s from "./SuperInput.module.css";

type InputPropsType = {
  maxValue?: number;
  minValue?: number;
  value: number;
  title: string;
  callback: (valueForChange: number) => void;
};

export const SuperInput: React.FC<InputPropsType> = ({ maxValue, minValue, value, title, callback }) => {
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    let value = +e.currentTarget.value;
    if (value <= 1000 && maxValue) {
      callback(+e.currentTarget.value);
    } else {
      callback(999);
    }
  };

  return (
    <div className={s.wrapper}>
      <h3>{title}</h3>
      <input type="number" value={value} max={maxValue} min={minValue} onChange={onChangeHandle} maxLength={3} />
    </div>
  );
};
