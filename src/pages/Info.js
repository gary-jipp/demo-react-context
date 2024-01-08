import Counter from 'Counter';

export default function Info(props) {
  const logout = props.logout;
  const user = props.user;

  // Show user Info
  return (
    <div>
      <Counter
        count={props.count}
        increment={props.increment}
        decrement={props.decrement}
        clear={props.clear}
      />

      <p className="UserInfo">
        <div>You are logged in</div>
        <div>Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>UserId: {user.id}</div>
      </p >
      <p>
        <button type="button" onClick={logout}>Logout</button>
      </p>


    </div>
  );
};
