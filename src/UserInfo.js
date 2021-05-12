import { useContext } from 'react';
import { authContext } from './AuthProvider';
import Counter from './Counter';

export default function UserInfo() {
  const { user, logout } = useContext(authContext);

  const onLogout = function (event) {
    logout();
  };

  // Show user Info
  return (
    <div className="UserInfo">
      <div>You are logged in</div>
      <div>Email: {user.email}</div>
      <div>Name: {user.name}</div>
      <div>UserId: {user.id}</div>

      <Counter />

      <input type="button" value="Logout" onClick={onLogout} />
    </div>
  );
};
