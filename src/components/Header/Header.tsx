import { useNavigate } from "react-router-dom";
import { Btn } from "../Btn/Btn";
import s from "./header.module.scss";

export function Header() {
  const navigateSimleCounter = useNavigate();
  const navigateReduxCounter = useNavigate();

  const onCLickSimpleCounterHandler = () => {
    navigateSimleCounter("/simple-counter");
  };
  const onCLickReduxCounterHandler = () => {
    navigateSimleCounter("/redux-counter");
  };
  const onCLickRTKCounterHandler = () => {
    navigateSimleCounter("/RTK-counter");
  };
  return (
    <>
      <div className={s.header}>
        <div className={s.header__buttons}>
          <Btn name="Simple Counter" onClick={onCLickSimpleCounterHandler} className={s.header__button} />
          <Btn name="Redux Counter" onClick={onCLickReduxCounterHandler} className={s.header__button} />
          <Btn name="RTK Counter" onClick={onCLickRTKCounterHandler} className={s.header__button} />
        </div>
      </div>
    </>
  );
}
