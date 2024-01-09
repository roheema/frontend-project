import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const auth = localStorage.getItem("auth");

    if (storedToken) {
      setToken(storedToken);
    }

    if(auth){
      const parsedAuth = JSON.parse(auth);
      setUser(parsedAuth?.user);
    }

  }, []);

  console.log(user);
  console.log(token);

  return (

    <AuthContext.Provider value={{ user, setUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
