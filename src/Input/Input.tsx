import s from "./Input.module.scss"
import {ChangeEvent} from "react";
type PropsType = {
    numberValue: number
    onChangeHandler: (num: number)=> void
}

export const Input = (props: PropsType) => {
    const onChangeNum = (e:ChangeEvent<HTMLInputElement>) => {
        let current = e.target.value
        props.onChangeHandler(+current)
    }
    return(
        <div className={s.wrapper}>
            <input type="number" value={props.numberValue} onChange={onChangeNum}/>
        </div>
    )
}