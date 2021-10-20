import { useState } from 'react';
import { authContext } from 'providers/AuthProvider';
import { useContext } from 'react/cjs/react.development';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onEmailChange = function(event) {
    setEmail(event.target.value);
  };

  const onPasswordChange = function(event) {
    setPassword(event.target.value);
  };

  const onSubmit = function(event) {
    event.preventDefault();
    if (email)
      login(email, password);
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="username"
            value={email} placeholder="Enter Username or email"
            onChange={onEmailChange} />
        </p>
        <p>
          <input type="password" name="password"
            value={password} placeholder="Password"
            onChange={onPasswordChange} />
        </p>
        <p className="submit">
          <button type="submit" name="commit">Login</button>
        </p>
      </form>
    </div>
  );
};