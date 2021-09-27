import { useState } from "react";
import 'App.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  // Functions to change  the counter state item
  const increment = function() {
    setCounter(counter + 1);
  };
  const decrement = function() {
    setCounter(counter - 1);
  };

  const clear = function() {
    setCounter(0);
  };

  return (
    <div>
      Counter: <span className="counter"> {counter} </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
    </div>
  );
}