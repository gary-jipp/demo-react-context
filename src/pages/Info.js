import {useAuth} from 'providers/AuthProvider';
import Counter from 'Counter';

export default function Info() {
  const {user, logout} = useAuth();

  // Show user Info
  return (
    <div>
      <Counter />
      <div className="UserInfo">
        <div>You are logged in</div>
        <div>Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>UserId: {user.id}</div>
      </div >
      <div>
        <button type="button" onClick={logout}>Logout</button>
      </div>

    </div>
  );
};
