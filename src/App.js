import { useState } from 'react';
import StateProvider from 'providers/StateProvider';
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
      <StateProvider>
        {!auth && <Login login={login} />}
        {auth && <Info logout={logout} user={user} />}
      </StateProvider>
    </div>
  );
}