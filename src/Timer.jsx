import React, {
  useEffect,
  // useState,
  //  useRef,
  useReducer,
} from "react";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

const countReducer = (state, { type }) => {
  if (type === "START") {
    return {
      ...state,
      isCounting: true,
    };
  }
  if (type === "STOP") {
    return {
      ...state,
      isCounting: false,
    };
  }
  if (type === "RESET") {
    return {
      count: 0,
      isCounting: false,
    };
  }
  if (type === "TICK") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
};

// export default function Timer() {
// const [count, setCount] = useState(setDefaultValue());
// const [isCounting, setCounting] = useState(false);
// const timerIdRef = useRef(null);

// const handleReset = () => {
//   setCount(0);
//   setCounting(false);
// };

// const handleStart = () => {
//   setCounting(true);
// };

// const handleStop = () => {
//   setCounting(false);
// };

// useEffect(() => {
//   localStorage.setItem("count", count);
// }, [count]);

// useEffect(() => {
//   if (isCounting) {
//     timerIdRef.current = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//   }
//   return () => {
//     timerIdRef.current && clearInterval(timerIdRef.current);
//     timerIdRef.current = null;
//   };
// }, [isCounting]);

// return (
//   <div className="timer">
//     <h2>React Timer</h2>
//     <h3>{count}</h3>
//     {!isCounting ? (
//       <button onClick={handleStart}>Start</button>
//     ) : (
//       <button onClick={handleStop}>Stop</button>
//     )}
//     <button onClick={handleReset}>Reset</button>
//   </div>
// );
export default function Timer() {
  const [{ count, isCounting }, dispatch] = useReducer(countReducer, {
    count: setDefaultValue(),
    isCounting: false,
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    let timerId;
    if (isCounting) {
      timerId = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => {
      timerId && clearInterval(timerId);
      timerId = null;
    };
  }, [isCounting]);

  return (
    <div className="timer">
      <h2>React Timer</h2>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={() => dispatch({ type: "START" })}>Start</button>
      ) : (
        <button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
      )}
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
