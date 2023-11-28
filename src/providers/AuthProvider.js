import {createContext, useContext, useState} from 'react';

const context = createContext();

export const useAuth = function() {
  return useContext(context);
};

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform login for the user & save authID, etc
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
  const value = {auth, user, login, logout};

  // We can use this component to wrap any content we want to share this context
  return (
    <context.Provider value={value}>
      {props.children}
    </context.Provider>
  );
};
