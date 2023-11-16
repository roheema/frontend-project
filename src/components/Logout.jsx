import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomLoader from '../components/Loader';

const Logout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logout = async () => {
      // Simulate an asynchronous operation, like making an API call for logout
      // You can replace this with your actual logout logic
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear the authentication token (or session)
      localStorage.removeItem("authToken"); // Adjust this according to how you store the token

      // Redirect to the home page
      navigate("/");
    };

    logout().finally(() => setLoading(false));
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <CustomLoader /> // Replace with your loader component
      ) : (
        <div>Logout complete!</div>
      )}
    </div>
  );
};

export default Logout;
