import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      setToken(storedToken);

      const fetchUser = async () => {
        const api_url = import.meta.env.VITE_REACT_APP_BACKEND_API;

        try {
          const response = await axios.get(`${api_url}/protected`, {
            headers: {
              'auth-token': storedToken,
            },
          });

          if (response.status === 200) {
            setUser(response.data.user);
          }
        } catch (error) {
          // Handle errors more gracefully (e.g., redirect to login page)
          console.error("Failed to fetch user data:", error);
          // Clear the token in case of an error
          setToken(null);
          localStorage.removeItem("authToken");
        }
      };

      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
