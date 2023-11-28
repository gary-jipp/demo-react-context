import {createContext, useContext, useState} from 'react';

// Create a Context
export const counterContext = createContext();

// Custom Hook to use Counter Context
export const useCounter = function() {
  return useContext(counterContext);
};

// Create a Component wrapper from Context.Provider
export default function CounterProvider(props) {

  // Here is our Shared State Object
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

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const value = {counter, increment, decrement, clear};

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <counterContext.Provider value={value}>
      {props.children}
    </counterContext.Provider>
  );
};