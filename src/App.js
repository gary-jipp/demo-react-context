import { useContext, useState } from 'react';
import { DemoContext } from './DemoContext';
import './App.css';

export default function App() {

  const [user, setUser] = useState({
    name: "Test User",
    email: "test@aa.com"
  });

  return (
    <div className="App">
      <h2>Context Demo</h2>
      {/* Wrap children in this provider */}
      <DemoContext.Provider value={{ user, setUser }}>
        <UserEdit />
        <UserInfo />

      </DemoContext.Provider>
    </div>
  );
}

const UserInfo = function () {
  const { user } = useContext(DemoContext);
  return (
    <div className="UserInfo">
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

const UserEdit = function () {
  const { user, setUser } = useContext(DemoContext);

  const onNameChange = function (event) {
    setUser({ ...user, name: event.target.value });
  };
  const onEmailChange = function (event) {
    setUser({ ...user, email: event.target.value });
  };

  return (
    <div className="UserEdit">
      <div>
        <input type="text" value={user.name} onChange={onNameChange} />
      </div>
      <div>
        <input type="text" value={user.email} onChange={onEmailChange} />
      </div>
    </div>
  );
};;
