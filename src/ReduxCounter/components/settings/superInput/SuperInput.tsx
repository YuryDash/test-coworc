import React, {ChangeEvent} from "react";
import s from "./SuperInput.module.css"

type InputPropsType = {
    maxValue?: number
    minValue?: number
    value: number
    title: string
    callback: (valueForChange: number)=>void
}

export const SuperInput: React.FC<InputPropsType> = ({
                                                         maxValue,
                                                         minValue,
                                                         value,
                                                         title,
                                                         callback,
                                                     }) => {

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        callback(+e.currentTarget.value)
    }

    return (
        <div className={s.wrapper}>
            <h3>{title}</h3>
            <input
                type="number"
                value={value}
                max={maxValue}
                min={minValue}
                onChange={onChangeHandle}
            />
        </div>
    )
}