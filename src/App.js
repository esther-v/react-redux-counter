import React, {useEffect, useState} from "react"
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default App;
