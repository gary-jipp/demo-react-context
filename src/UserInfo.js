import { useContext } from 'react';
import { authContext } from './AuthProvider';

export default function UserInfo() {
  const { user, logout } = useContext(authContext);

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
      <input type="button" value="Logout" onClick={onLogout} />
    </div>
  );
};
