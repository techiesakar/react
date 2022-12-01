import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Set to Zero
      </button>
      <h4>Counter: {counter}</h4>
    </div>
  );
}

export default App;
