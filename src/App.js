import { useState } from 'react';
import Info from 'pages/Info';
import Login from 'pages/Login';
import 'App.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  // Functions to change  the counter state item
  const increment = function() {
    setCount(count + 1);
  };
  const decrement = function() {
    setCount(count - 1);
  };
  const clear = function() {
    setCount(0);
  };


  // Perform some login process for the user
  const login = function(email, password) {
    const id = "1234-1234-1234";
    setUser({ email, id, name: "Test User" });
  };

  const logout = function() {
    setUser(null);
  };

  return (
    <div className="App">
      <h1>My App</h1>

      {!user && <Login
        login={login}
        count={count}
        increment={increment}
        decrement={decrement}
        clear={clear}
      />}


      {!!user && <Info
        logout={logout}
        user={user}
        count={count}
        increment={increment}
        decrement={decrement}
        clear={clear}
      />}

    </div>
  );
}