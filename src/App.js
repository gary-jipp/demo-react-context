
import { useContext } from 'react';
import { authContext } from './AuthProvider';
import StateProvider from './StateProvider';
import UserInfo from './UserInfo';
import UserLogin from './UserLogin';
import './App.css';

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