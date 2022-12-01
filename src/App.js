import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const body = document.body;

  darkMode ? body.classList.add(`dark`) : body.classList.remove(`dark`);
  return (
    <div className="App">
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? `Dark` : `Light`}
      </button>
    </div>
  );
}

export default App;
