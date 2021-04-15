import { createContext, useState } from 'react';
import uuid from 'react-uuid';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [, setId] = useState();
  const [user, setUser] = useState({ email: "", name: "", });

  // Perform login process for the user & save authID, etc
  const login = function (email, password) {
    const id = uuid();
    setUser({ email, id, name: "Test User" });
    setAuth(true);
  };

  const logout = function (email, password) {
    setUser({ email: "", name: "" });
    setId(uuid());
    setAuth(false);
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};

export const authContext = createContext();