
import { useContext } from 'react';
import { authContext } from './AuthProvider';
import UserInfo from './UserInfo';
import UserLogin from './UserLogin';
import './App.css';

export default function App() {

  const { auth } = useContext(authContext);

  return (
    <div className="App">
      {!auth && <UserLogin />}
      {auth && <UserInfo />}
    </div>
  );
}