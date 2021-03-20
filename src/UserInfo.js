import { useContext } from 'react';
import { userContext } from './UserProvider';

export default function UserInfo() {
  const { user } = useContext(userContext);
  
  return (
    <div className="UserInfo">
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};
