import { useContext } from 'react';
import { authContext } from './AuthProvider';
import { stateContext } from './StateProvider';

export default function UserInfo() {
  const { user, logout } = useContext(authContext);
  const { counter, increment, clear } = useContext(stateContext);

  const onLogout = function (event) {
    logout();
  };

  // Show user Info if logged in
  return (
    <div className="UserInfo">
      <div>You are logged in</div>
      <div>Email: {user.email}</div>
      <div>Name: {user.name}</div>
      <div>UserId: {user.id}</div>

      {/* We could have used counter or state.counter here */}
      <div>Counter: <span> {counter} </span>
        <button onClick={increment}>+1</button>
        <button onClick={clear}>Clear</button>
      </div>
      <input type="button" value="Logout" onClick={onLogout} />
    </div>
  );
};
