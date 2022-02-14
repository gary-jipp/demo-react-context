import { useState } from 'react';
import 'App.css';

export default function Counter(this.props.) {

  // Functions to change  the counter state item
  const increment = function() {
    setCount(counter + 1);
  };
  const decrement = function() {
    setCount(counter - 1);
  };
  const clear = function() {
    setCount(0);
  };

  return (
    <div>
      Counter: <span className="counter"> {props.count} </span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
    </div>
  );
}