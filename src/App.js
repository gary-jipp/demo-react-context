
import { useContext } from 'react';
import { authContext } from 'providers/AuthProvider';
import StateProvider from 'providers/StateProvider';
import UserInfo from 'pages/UserInfo';
import UserLogin from 'pages/UserLogin';
import 'App.css';

export default function App() {

  // We can use this because we even wrapped <App> in our Provider (in index.js)
  const { auth } = useContext(authContext);

  return (
    <div className="App">
      <StateProvider>
        {!auth && <UserLogin />}
        {auth && <UserInfo />}
      </StateProvider>
    </div>
  );
}