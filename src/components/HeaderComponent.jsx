import React from "react";
import logo from "../assets/DevTech.svg";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="https://github.com/Theni016">
            <img
              src={logo}
              alt="TechDev Logo"
              width="100"
              height="100"
              className="d-inline-block align-top"
              style={{
                marginTop: "0px",
                marginRight: "20px",
                marginBottom: "0px",
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
