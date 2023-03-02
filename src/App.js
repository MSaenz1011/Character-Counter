import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);

  const handleCheck = (e) => {
    let currentText = e.target.value;
    let textExtension = currentText.length;
    setText(currentText);
    setCounter(textExtension);
  };

  return (
    <div className="container">
      <textarea rows="3" value={text} onChange={handleCheck}></textarea>
      <div className="counter">{counter}</div>
    </div>
  );
}

export default App;
