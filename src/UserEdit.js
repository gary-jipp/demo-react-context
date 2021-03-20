import { useContext } from 'react';
import { userContext } from './UserProvider';

export default function UserEdit() {
  const { user, setUser } = useContext(userContext);

  const onNameChange = function (event) {
    setUser({ ...user, name: event.target.value });
  };
  const onEmailChange = function (event) {
    setUser({ ...user, email: event.target.value });
  };

  return (
    <div className="UserEdit">
      <div>
        <input type="text" value={user.name} onChange={onNameChange} />
      </div>
      <div>
        <input type="text" value={user.email} onChange={onEmailChange} />
      </div>
    </div>
  );
};