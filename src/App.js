
import { useState } from 'react';
import StateProvider from 'providers/StateProvider';
import Info from 'pages/Info';
import Login from 'pages/Login';
import 'App.css';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform login process for the user & save authID, etc
  const login = function(email, password) {
    setAuth(true);
    setUser({ email, name: "Test user" });
  };

  const logout = function() {
    setAuth(false);
  };

  return (
    <div className="App">
      <StateProvider>
        {!auth && <Login login={login} />}
        {auth && <Info logout={logout} user={user} />}
      </StateProvider>
    </div>
  );
}