import { useState } from "react";
import Chai from "./chai";
function App() {
  let [counter, setCounter] = useState(0);
  const incrementValue = () => {
    if (counter >= 20) return;
    setCounter(counter + 1);
  };

  const decrementValue = () => {
    if (counter < 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Value {counter}</h1>
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
      <p>{counter}</p>
      <h1>{counter}</h1>
    </>
  );
}

export default App;
