import React from "react";
import logo from "../assets/DEV1.png";
import "../components/HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-dark bg-blueviolet">
          <a className="navbar-brand" href="https://github.com/Theni016">
            <img
              src={logo}
              alt="TechDev Logo"
              width="100"
              height="100"
              className="d-inline-block align-top"
              style={{
                marginTop: "-20px",
                marginRight: "0px",
                marginBottom: "-20px",
                marginLeft: "20px",
              }}
            />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
