import React from "react";
import logo from "../assets/DevTech.svg";

const FooterComponent = () => {
  return (
    <div>
      <footer className="footer">
        <span>All rights reserved 2024 by</span>
        <img
          src={logo}
          alt="TechDev Logo"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
      </footer>
    </div>
  );
};

export default FooterComponent;
