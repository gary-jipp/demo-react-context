import { useContext } from 'react';
import Info from 'pages/Info';
import Login from 'pages/Login';
import { authContext } from 'providers/AuthProvider';
import 'App.css';

export default function App() {
  const { auth } = useContext(authContext);

  return (
    <div className="App">
      <h1>My App</h1>
      {!auth && <Login />}
      {auth && <Info />}
    </div>
  );
}