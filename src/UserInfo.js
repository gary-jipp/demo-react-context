import { useContext } from 'react';
import { userContext } from './UserProvider';

export default function UserInfo() {
  const { auth, user, logout } = useContext(userContext);

  const onLogout = function (event) {
    logout();
  };

  // Show user Info if logged in
  return (
    <div className="UserInfo">
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <input type="button" value="Logout" onClick={onLogout} />
    </div>
  );
};
