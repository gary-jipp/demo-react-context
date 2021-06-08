import { useContext } from 'react';
import { stateContext } from 'providers/StateProvider';

export default function Counter() {
  const { counter, increment, decrement, clear } = useContext(stateContext);

  return (
    <div>
      Counter: <span> {counter} </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
    </div>
  );
}