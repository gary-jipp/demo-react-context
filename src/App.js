import UserProvider from './UserProvider';
import UserInfo from './UserInfo';
import Login from './Login';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <h2>Context Demo</h2>
      {/* Wrap children in this provider */}
      <UserProvider>
        <Login />
        <UserInfo />
      </UserProvider>
    </div>
  );
}