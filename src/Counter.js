import { useContext } from 'react';
import { counterContext } from 'providers/CounterProvider';
import 'App.css';

export default function Counter() {
  const { counter, increment, decrement, clear } = useContext(counterContext);

  return (
    <div>
      Counter: <span className="counter"> {counter} </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
    </div>
  );
}