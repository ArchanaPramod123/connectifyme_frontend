// PrivateLayout.jsx
import React from "react";
import NavBar from "../pages/user/usercommon/Navbar";

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default PrivateLayout;
