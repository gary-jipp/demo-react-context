import { createContext, useState } from 'react';

export default function UserProvider(props) {
  const [user, setUser] = useState({ email: "", name: "" });

  const userData = { user, setUser };

  // We can use this component to wrap any content we want to share this context
  return (
    <userContext.Provider value={userData}>
      {props.children}
    </userContext.Provider>
  );
};

export const userContext = createContext();