import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {Btn} from "./Btn/Btn";
import {Input} from './Input/Input';

function App() {


    const onClickInc = () => {
        minValue < maxValue &&  maxValue > a ? setA(a + 1) : setA(a)
    }
    const onClickReset = () => {
        setA(minValue)
    }
    const onCLickAlert = () => alert('INCORRECT MIN_VALUES')
    //======================================================================================================
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)
    let [a, setA] = useState(minValue)

    useEffect( ()=> {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }, [maxValue,minValue])


    useEffect(()=> {
        let valueStrMax = localStorage.getItem('maxValue')
        let valueStrMin = localStorage.getItem('minValue');

        console.log(valueStrMax ? JSON.parse(valueStrMax) : 'lol')
        console.log(valueStrMin ? JSON.parse(valueStrMin) : 'lol')

        valueStrMax !== null ? setMaxValue(JSON.parse(valueStrMax)) : setMaxValue(6);
        valueStrMin !== null ? setMinValue(JSON.parse(valueStrMin)) : setMinValue(1);
    }, [])



    const onCLickButtonSet = ( ) => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }

    const onChangeMaxHandler = (numMax: number) => {
        numMax > 0 ? setMaxValue(numMax) : setMaxValue(1)
    }
    const onChangeMinHandler = (numMin: number) => {
        numMin > 0  ? setMinValue(numMin) : setMinValue(0)
        setA(numMin < 0 ? 0: numMin)
    }




    return (

        <div className={s.container}>

            <div className='settings'>
                <div className="settings__title">
                    <div className={'settings__item'}>
                        <div className="settings__name">max-value</div>
                        <Input onChangeHandler={onChangeMaxHandler} numberValue={maxValue}/>
                    </div>
                    <div className={'settings__item'}>
                        <div className="settings__name">min-value</div>
                        <Input onChangeHandler={onChangeMinHandler} numberValue={minValue} />
                        {maxValue <= minValue && <div className={s.errorDiv}>INCORRECT VALUE</div>}
                    </div>
                </div>
                <div>
                    {maxValue <= minValue
                        ? <button disabled={true}>SetValues</button>
                        : <Btn className={s.button} name={'SetValues'} onClick={onCLickButtonSet}/>
                    }

                </div>
            </div>




            <div className={s.count}>
                <div className={s.count__title}>
                    {minValue >= maxValue
                        ? <h1>INCORRECT COUNT</h1>
                        : <h1>Count</h1>
                    }
                    <h1 className={`${a >= maxValue ? s.redBred : ''}`}>{a}</h1>
                </div>
                <div className={s.count__btn}>
                    <Btn className={`${s.inc} + ${a >= maxValue ? s.disabled : ''}`} onClick={onClickInc} name={"Inc"}/>
                    {maxValue <= minValue
                        ? <Btn className={`${s.reset} + ${maxValue <= minValue ? s.disabled : ''}`} onClick={onCLickAlert} name={"Reset"}/>
                        : <Btn className={`${s.reset} + ${a === minValue ? s.disabled : ''}`} onClick={onClickReset} name={"Reset"}/>
                    }
                </div>
            </div>
        </div>

    );


}

export default App;
