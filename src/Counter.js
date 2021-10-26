import { useContext, useState } from 'react';
import 'App.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Counter: <span className="counter"> {counter} </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
    </div>
  );
}