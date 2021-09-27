import { createContext, useState } from 'react';

export const stateContext = createContext();

export default function StateProvider(props) {

  // Here is our Shared State Object
  const [state, setState] = useState({
    counter: 0,
    item1: 'more stuff 1',
    item2: 'more stuff 2',
  });

  // Functions to change  the counter state item
  const increment = function() {
    setState({ ...state, counter: state.counter + 1 });
  };
  const decrement = function() {
    setState({ ...state, counter: state.counter - 1 });
  };
  const clear = function() {
    setState({ ...state, counter: 0 });
  };

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = { state, counter: state.counter, increment, decrement, clear };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
};