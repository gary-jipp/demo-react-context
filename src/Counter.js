import 'App.css';
import useCounter from './hooks/useCounter';

export default function Counter() {
  const { counter, increment, decrement, clear } = useCounter();

  return (
    <div>
      Counter: <span className="counter"> {counter} </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
    </div>
  );
}