import { useState } from 'react';
import CounterProvider from 'providers/CounterProvider';
import Info from 'pages/Info';
import Login from 'pages/Login';
import 'App.css';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform some login process for the user
  const login = function(email, password) {
    setAuth(true);
    setUser({ email, name: "Test user", id: "1234-5678-90ab" });
  };

  const logout = function() {
    setAuth(false);
  };

  return (
    <div className="App">
     <h1>My App</h1>
      <CounterProvider>
        {!auth && <Login login={login} />}
        {auth && <Info logout={logout} user={user} />}
      </CounterProvider>
    </div>
  );
}