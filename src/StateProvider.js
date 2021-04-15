import { createContext, useState } from 'react';

export default function StateProvider(props) {
  const [state, setState] = useState({
    counter: 0
  });

  // Function to change one of the state items
  const increment = function () {
    setState({ ...state, counter: state.counter + 1 });
  };

  const clear = function () {
    setState({ ...state, counter: 0 });
  };

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const stateData = { state, counter: state.counter, increment, clear };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <stateContext.Provider value={stateData}>
      {props.children}
    </stateContext.Provider>
  );
};

export const stateContext = createContext();