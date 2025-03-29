import React, { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Récupérer les données de session à partir du local storage ou de l'API
    const userSession = JSON.parse(localStorage.getItem("users"));
    setSession(userSession);
  }, []);

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};
