
import { useContext } from 'react';
import { authContext } from 'providers/AuthProvider';
import StateProvider from 'providers/StateProvider';
import Info from 'pages/Info';
import Login from 'pages/Login';
import 'App.css';

export default function App() {

  // We can use this because we wrapped <App> in AuthProvider (in index.js)
  const { auth } = useContext(authContext);

  return (
    <div className="App">
      <StateProvider>
        {!auth && <Login />}
        {auth && <Info />}
      </StateProvider>
    </div>
  );
}