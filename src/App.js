import { useState } from 'react';
import Info from 'pages/Info';
import Login from 'pages/Login';
import 'App.css';
import useAuth from 'hooks/useAuth';

export default function App() {

  const {auth, user, login, logout} = useAuth();


  return (
    <div className="App">
      <h1>My App</h1>
      {!auth && <Login login={login} />}
      {auth && <Info logout={logout} user={user} />}
    </div>
  );
}