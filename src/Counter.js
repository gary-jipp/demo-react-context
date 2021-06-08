import { useContext } from 'react';
import { stateContext } from 'StateProvider';

export default function Counter() {
  const { counter, increment, clear } = useContext(stateContext);

  return (
    <div>
      Counter: <span> {counter} </span>
      <button onClick={increment}>+1</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}