import Counter from 'Counter';

export default function Info(props) {
  const logout = props.logout;
  const user = props.user;

  // Show user Info
  return (
    <div className="UserInfo">
      <div>You are logged in</div>
      <div>Email: {user.email}</div>
      <div>Name: {user.name}</div>
      <div>UserId: {user.id}</div>

      <Counter />

      <button type="button" onClick={logout}>Logout</button>
    </div >
  );
};
