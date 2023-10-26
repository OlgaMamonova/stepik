import React, { useState } from "react";
import Clicker from "./Clicker";
import Timer from "./Timer";
function App() {
  const [isClicker, setClicker] = useState(false);

  return (
    <>
      <div className="clicker">
        <h2>React Clicker</h2>
        <button
          onClick={() => {
            setClicker(!isClicker);
          }}
        >
          Toggle Clicker
        </button>
        {isClicker && <Clicker />}
      </div>
      <Timer />
    </>
  );
}

export default App;
