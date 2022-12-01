import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      <h2>Your Text will appear below here</h2>
      <h4> {inputValue}</h4>
    </div>
  );
}

export default App;
