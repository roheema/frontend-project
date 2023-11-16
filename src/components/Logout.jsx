import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'


const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the authentication token (or session)
    localStorage.removeItem("authToken"); // Adjust this according to how you store the token

    // Redirect to the home page
    navigate("/");
  }, [navigate]);

  return <div className="logout"><h1>Logging Out...</h1></div>
};

export default Logout;
