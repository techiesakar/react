import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  let body = document.body;
  const [mode, setMode] = useState("light");
  const handleMode = () => {
    mode == "light" ? setMode("dark") : setMode("light");
  };

  const changeMode = () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light")
      body.classList.add(mode);
    }
    else{
      body.classList.remove("dark")
      body.classList.add(mode);
    }
  };
  changeMode();
  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      <h2>Your Text will appear below here</h2>
      <h4> {inputValue}</h4>
      <button onClick={handleMode}>Button</button>
    </div>
  );
}

export default App;


