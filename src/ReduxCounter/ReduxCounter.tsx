import { useSelector } from "react-redux";
import { CounterR } from "./components/counter/Counter";
import { SettingsR } from "./components/settings/Settings";
import s from "./reduxCounter.module.scss";
import { AppRCStateType } from "./redux/ReduxStoreCounter";

export function ReduxCounter() {
  let error = useSelector<AppRCStateType, string>((state) => state.countReValue.errorText);
  return (
    <div className={s.wrapper}>
      <div className={error ? s.errorReduxCounter : s.reduxCounter}>
        <CounterR />
        <SettingsR />
      </div>
    </div>
  );
}
