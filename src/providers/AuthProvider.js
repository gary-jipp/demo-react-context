import { createContext, useState } from 'react';
import uuid from 'react-uuid';

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({ email: "", name: "", id: "" });

  // Perform login process for the user & save authID, etc
  const login = function (email, password) {
    const id = uuid();  // Some random userId
    setUser({ email, id, name: "Test User" });
    setAuth(true);
  };

  const logout = function (email, password) {
    setUser({ email: "", name: "" });
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