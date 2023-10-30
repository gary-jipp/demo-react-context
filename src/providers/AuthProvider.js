import {createContext, useContext, useState} from 'react';

export const authContext = createContext();

export const useAuth = function() {
  return useContext(authContext);
};

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform login process for the user & save authID, etc
  const login = function(email, password) {
    setAuth(true);
    const id = "1234-1234-1234";  // Some random userId
    setUser({email, id, name: "Test User"});
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  // authContext will expose these items
  const userData = {auth, user, login, logout};

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};
