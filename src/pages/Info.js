import { useContext } from 'react';
import { authContext } from 'providers/AuthProvider';
import Counter from 'Counter';

export default function Info() {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <p className="UserInfo">
        <div>You are logged in</div>
        <div>Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>UserId: {user.id}</div>
      </p >
      <p>
        <button type="button" onClick={logout}>Logout</button>
      </p>

      <Counter />
    </div>
  );
};
