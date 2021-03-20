import { useContext } from 'react';
import { userContext } from './UserProvider';

export default function UserInfo() {
  const { user } = useContext(userContext);

  return (
    <div className="UserInfo">
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  );
};
