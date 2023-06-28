import s from "./Input.module.scss";
import { ChangeEvent } from "react";
import { Grid, TextField } from "@mui/material";
type PropsType = {
  numberValue: number;
  onChangeHandler: (num: number) => void;
  title: string;
};

export const Input = (props: PropsType) => {
  const onChangeNum = (e: ChangeEvent<HTMLInputElement>) => {
    // let current = e.target.value;
    // props.onChangeHandler(+current)
    const value = e.target.value;
    if (value.length <= 3) {
      // проверяем, что длина значения не больше 2 символов
      props.onChangeHandler(+value);
    }
  };

  return (
    <div className={s.wrapper}>
      <Grid container spacing={0}>
        <TextField
          inputProps={{
            maxLength: 2,
          }}
          className={s.input}
          label={props.title}
          type="number"
          size={"small"}
          value={props.numberValue}
          onChange={onChangeNum}
          variant={"outlined"}
          color={"secondary"}
        />
      </Grid>
      {/*<input type="number" value={props.numberValue} onChange={onChangeNum}/>*/}
    </div>
  );
};
