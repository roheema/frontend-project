// Loader.jsx
import React from "react";
import img1 from '../assets/images/Frame 13 (2).png';

const Loader = () => {
  return (
    <div className="loading">
      <img src={img1} alt="Loading..." />
    </div>
  );
};

export default Loader;