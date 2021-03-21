import { useState, useContext, useEffect } from 'react';
import { authContext } from './AuthProvider';

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onEmailChange = function (event) {
    setEmail(event.target.value);
  };

  const onPasswordChange = function (event) {
    setPassword(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();
    if (email)
      login(email, password);
  };

  useEffect(() => {
    setPassword("");
    setEmail("");
  }, [

  ]);

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="login"
            value={email} placeholder="Username or Email Address"
            onChange={onEmailChange} />
        </p>
        <p>
          <input type="password" name="password"
            value={password} placeholder="Password"
            onChange={onPasswordChange} />
        </p>
        <p className="submit">
          <input type="submit" name="commit" value="Login" />
        </p>
      </form>
    </div>
  );
};