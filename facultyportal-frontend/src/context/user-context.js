import { createContext, useState, useMemo } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={providerUser}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
