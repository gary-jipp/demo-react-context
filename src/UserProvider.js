import { createContext, useState } from 'react';

const UserProvider = function (props) {
  const [user, setUser] = useState({ email: "", name: "" });

  const userData = { user, setUser };

  // We can use this component to wrap any content we want to share this context
  return (
    <userContext.Provider value={userData}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
export const userContext = createContext();