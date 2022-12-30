import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {Settings} from "./Settings/Settings";
import {Count} from "./Count/Count";

function App() {



    //======================================================================================================
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)
    let [currentCountValue, setCurrentCountValue] = useState(minValue)

    useEffect(()=> {
        let valueStrMax = localStorage.getItem('maxValue')
        let valueStrMin = localStorage.getItem('minValue');
        console.log(valueStrMax ? JSON.parse(valueStrMax) : 'lol')
        console.log(valueStrMin ? JSON.parse(valueStrMin) : 'lol')

        valueStrMax !== null ? setMaxValue(JSON.parse(valueStrMax)) : setMaxValue(6);
        valueStrMin !== null ? setMinValue(JSON.parse(valueStrMin)) : setMinValue(1);
        setCurrentCountValue(valueStrMin ? JSON.parse(valueStrMin) : minValue)

    }, [])
    // useEffect( ()=> {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    // }, [maxValue,minValue])

    return (
        <div className={s.container}>
            <Settings
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                minValue={minValue}
                setCurrentCountValue={setCurrentCountValue}
            />

            <Count maxValue={maxValue}
                   minValue={minValue}
                   setCurrentCountValue={setCurrentCountValue}
                   currentCountValue={currentCountValue}
            />
        </div>
    );
}

export default App;
