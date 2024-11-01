import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count == 0) return;
    setCount(count - 1);
  };
  const reset = () => {
    if (count) return;
    setCount(count);
  };

  return (
    <div className="counter">
      <div className="counter-monotonic__btn">
        <button onClick={decrease}>-</button>
        {count}
        <button onClick={increase}>+</button>
      </div>
      <div className="counter-reset__btn">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
