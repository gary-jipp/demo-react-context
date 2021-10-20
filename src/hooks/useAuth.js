import { useState } from 'react';

const useAuth = function() {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform some login process for the user
  const login = function(email, password) {
    setAuth(true);
    setUser({ email, name: "Test user", id: "1234-5678-90ab" });
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  return { auth, user, login, logout };
};

export default useAuth;