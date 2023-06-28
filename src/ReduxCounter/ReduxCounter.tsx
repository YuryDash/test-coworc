import { CounterR } from "./components/counter/Counter";
import { SettingsR } from "./components/settings/Settings";
import s from "./reduxCounter.module.scss";

export function ReduxCounter() {
  return (
    <div className={s.wrapper}>
      <div className={s.reduxCounter}>
        <CounterR />
        <SettingsR />
      </div>
    </div>
  );
}
