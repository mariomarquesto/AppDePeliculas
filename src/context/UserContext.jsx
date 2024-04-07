import { createContext, useState } from "react";


const initialState= {}
export const UserContext = createContext(initialState);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);


  return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
