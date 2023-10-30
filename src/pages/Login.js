import {useState} from 'react';
import {authContext, useAuth} from 'providers/AuthProvider';
import Counter from 'Counter';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth(authContext);

  const onSubmit = function(event) {
    event.preventDefault();
    email && login(email, password);
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="username"
            value={email} placeholder="Enter Username or email"
            onChange={event => setEmail(event.target.value)} />
        </div>
        <div>
          <input type="password" name="password"
            value={password} placeholder="Password"
            onChange={event => setPassword(event.target.value)} />
        </div>
        <div className="submit">
          <button type="submit" name="commit">Login</button>
        </div>
      </form>

      <Counter />
    </div>
  );
};
