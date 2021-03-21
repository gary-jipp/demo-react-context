import { createContext, useState } from 'react';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({ email: "", name: "", });

  const login = function (email, password) {
    setUser({ email, name: "Test User" });
    setAuth(true);
  };

  const logout = function (email, password) {
    setUser({ email: "", name: "" });
    setAuth(false);
  };

  const userData = { auth, user, login, logout };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};

export const authContext = createContext();