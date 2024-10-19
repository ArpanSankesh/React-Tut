import { createContext } from "react";

export const DataContext = createContext();

export const UserContext = ({ children }) => {
  const username = "max";

  return (
    <div>
      <DataContext.Provider value={username}>{children}</DataContext.Provider>
    </div>
  );
};
