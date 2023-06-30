import { useSelector } from "react-redux";
import { CounterR } from "./components/counter/Counter";
import { SettingsR } from "./components/settings/Settings";
import s from "./reduxCounter.module.scss";
import { AppRCStateType, useAppDispatch } from "./redux/ReduxStoreCounter";
import { useEffect } from "react";
import { loadCounterSettings } from "./redux/async/fetchCounterThunk";

export function ReduxCounter() {
  let error = useSelector<AppRCStateType, string>((state) => state.countReValue.errorText);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCounterSettings());
  }, []);
  return (
    <div className={s.wrapper}>
      <div className={error ? s.errorReduxCounter : s.reduxCounter}>
        <CounterR />
        <SettingsR />
      </div>
    </div>
  );
}
