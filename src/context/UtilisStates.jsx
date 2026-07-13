import { createContext, useContext, useState } from "react";

const UtilisContext = createContext();

export const UtilisProvider = ({ children }) => {
  const [searchField, setSearchField] = useState("");

  return (
    <UtilisContext.Provider
      value={{
        searchField,
        setSearchField,
      }}
    >
      {children}
    </UtilisContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(UtilisContext);
};