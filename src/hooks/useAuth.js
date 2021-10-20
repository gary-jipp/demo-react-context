import { useState } from 'react';

const useAuth = function() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform some login process for the user
  const login = function(email, password) {
    setAuth(true);
    const id = "1234-1234-1234";  // Some random userId
    setUser({ email, id, name: "Test User" });
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  return { auth, user, login, logout };
};

export default useAuth;