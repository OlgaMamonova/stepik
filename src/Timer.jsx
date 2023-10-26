import React, { useEffect, useState, useRef } from "react";

function setDefaultValue() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

export default function Timer() {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setCounting] = useState(false);
  const timerIdRef = useRef(null);

  const handleReset = () => {
    setCount(0);
    setCounting(false);
  };

  const handleStart = () => {
    setCounting(true);
  };

  const handleStop = () => {
    setCounting(false);
  };

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div className="timer">
      <h2>React Timer</h2>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
