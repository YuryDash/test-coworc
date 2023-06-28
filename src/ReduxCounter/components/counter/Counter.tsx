import s from "./Counter.module.css";
import { SuperButton } from "../btn/SuperButton";
import { useDispatch, useSelector } from "react-redux";
// import {RootStateType} from "../../redux/store";
// import {comparisonMaxCeilingAC, CounterStateType, incrementAC, resetCounterAC} from "../../reducers/counterReducer";

export const CounterR = () => {
  // const counterNumber = useSelector<RootStateType, CounterStateType>( state => state.countReValue )
  // const maxValueForComparison = useSelector<RootStateType, number>( state => state.maxReValue.numberValueMax )
  // const minValueForReset = useSelector<RootStateType, number>( state => state.minReValue.numberValueMin )
  const dispatch = useDispatch();
  const incHandle = () => {
    // dispatch(incrementAC())
    // dispatch(comparisonMaxCeilingAC(maxValueForComparison, counterNumber.countNumber))
  };
  const resetHandle = () => {
    // dispatch(resetCounterAC(minValueForReset))
  };
  let lol = {
    fontSize: "25px",
    color: "red",
    border: "2px solid red",
    padding: "5px",
    margin: "20px",
  };

  let lal = {
    fontSize: "55px",
    backgroundColor: "black",
  };
  let counterNumber = {
    countNumber: 1,
    countTextError: 1,
  };
  let maxValueForComparison = 1;
  let minValueForReset = 0;

  let countTextError = "lol";
  return (
    <div className={s.wrapper}>
      <h3>This is Counter</h3>
      <div className={s.counter}>
        <div style={counterNumber.countTextError ? lol : lal}>
          {counterNumber.countTextError ? counterNumber.countTextError : counterNumber.countNumber}
        </div>
        <div className={s.counter__buttons}>
          {counterNumber.countNumber !== maxValueForComparison ? (
            <SuperButton enabled={true} callback={incHandle} btnText={"increment"} />
          ) : (
            <SuperButton enabled={false} callback={() => {}} btnText={"increment"} />
          )}

          {counterNumber.countNumber === minValueForReset ? (
            <SuperButton callback={resetHandle} btnText={"reset"} enabled={false} />
          ) : (
            <SuperButton callback={resetHandle} btnText={"reset"} enabled={true} />
          )}
        </div>
      </div>
    </div>
  );
};
