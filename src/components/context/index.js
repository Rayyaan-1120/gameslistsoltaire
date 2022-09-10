import { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [admin, setadmin] = useState(false);

  return (
    <AppContext.Provider value={{ admin, setadmin }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
