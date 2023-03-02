import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCheck = (e) => {
    let textExtension = e.target.value.length;
    setCounter(textExtension);
  };

  return (
    <div className="container">
      <textarea rows="3" onChange={handleCheck}></textarea>
      <div className="counter">{counter}</div>
    </div>
  );
}

export default App;
