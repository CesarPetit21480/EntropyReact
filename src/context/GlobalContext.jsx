import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = () => useContext(GlobalContext);

const GlobalGeneral = ({ children }) => {
  const [userLog, setuserLog] = useState(false);
  const [userStorage, setUserStorage] = useState([]);

  const loginStorage = (id) => {
    setUserStorage("HOLA");
  };

  const validoLogin = (usuario, password) => {
    setuserLog("hola");
  };

  return (
    <GlobalContext.Provider value={{
      userLog,
      userStorage,
      loginStorage,
      validoLogin,      
      }}>
      {children}
  </GlobalContext.Provider>
  );
};
export default GlobalGeneral;
