import UserProvider from './UserProvider';
import UserInfo from './UserInfo';
import UserEdit from './UserEdit';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <h2>Context Demo</h2>
      {/* Wrap children in this provider */}
      <UserProvider>
        <UserEdit />
        <UserInfo />
      </UserProvider>
    </div>
  );
}