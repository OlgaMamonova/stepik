import React, { useState } from "react";
import Clicker from "./Clicker";
function App() {
  const [isClicker, setClicker] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setClicker(!isClicker);
        }}
      >
        Toggle Clicker
      </button>
      {isClicker && <Clicker />}
    </div>
  );
}

export default App;
