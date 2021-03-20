import { useState, useContext } from 'react';
import { userContext } from './UserProvider';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(userContext);

  const onSubmdit = function (event) {
    setUser({ ...user, name: event.target.value });
  };

  const onEmailChange = function (event) {
    setEmail(event.target.value);
  };

  const onPasswordChange = function (event) {
    setPassword(event.target.value);
  };

  const onSubmit = function (event) {
    event.preventDefault();

  };


  return (
    <div className="UserEdit">
      <div className="login">
        <form onSubmit={onSubmit}>
          <p><input type="text" name="login" value={email} placeholder="Username or Email" onChange={onEmailChange} /></p>
          <p><input type="password" name="password" value={password} placeholder="Password" onChange={onPasswordChange} /></p>
          <p className="remember_me">
            <label>
              <input type="checkbox" name="remember_me" id="remember_me" />Remember me on this computer</label>
          </p>
          <p className="submit"><input type="submit" name="commit" value="Login" /></p>
        </form>
      </div>

      <div className="login-help">
        <p>Forgot your password? <a href="#">Click here to reset</a>.</p>
      </div>

    </div>
  );
};