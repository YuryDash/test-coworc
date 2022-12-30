import s from "./Count.module.scss";
import {Btn} from "../Btn/Btn";
import React from "react";

type CountPropsType = {
    maxValue: number
    minValue: number
    setCurrentCountValue: (num: number) => void
    currentCountValue: number
}

export const Count: React.FC<CountPropsType> = ({
                                                    maxValue,
                                                    minValue,
                                                    currentCountValue,
                                                    setCurrentCountValue,
                                                }) => {

    const onClickInc = () => {
        minValue < maxValue && maxValue > currentCountValue ? setCurrentCountValue(currentCountValue + 1) : setCurrentCountValue(currentCountValue)
    }
    const onClickReset = () => {
        setCurrentCountValue(minValue)
    }
    const onCLickAlert = () => alert('INCORRECT MIN_VALUES')

    return (
        <div className={s.count}>
            <div className={s.count__title}>
                {minValue >= maxValue
                    ? <h2>Incorrect value</h2>
                    : <h2>Count</h2>
                }
                <h2 className={`${currentCountValue >= maxValue ? s.redBred : s.whiteBred}`}>{currentCountValue}</h2>
            </div>
            <div className={s.count__btn}>
                <Btn className={`${s.inc} + ${currentCountValue >= maxValue ? s.disabled : ''}`} onClick={onClickInc} name={"Inc"}/>
                {maxValue <= minValue
                    ? <Btn className={`${s.reset} + ${maxValue <= minValue ? s.disabled : ''}`} onClick={onCLickAlert}
                           name={"Reset"}/>
                    : <Btn className={`${s.reset} + ${currentCountValue === minValue ? s.disabled : ''}`} onClick={onClickReset}
                           name={"Reset"}/>
                }
            </div>
        </div>
    )
}