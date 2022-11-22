import React from "react";
// import "../css/header.css";
import LOGO from "../../assests/icons/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={LOGO} alt="" />
      <div className="center">
        <Link to="/">Products</Link>
        <Link to="/">Resources</Link>
        <Link to="/">About us</Link>
      </div>
      <div className="end">
        <button style={{ color: "white" }} className="btn">
          Login
        </button>
        <button style={{ color: "white" }} className="btn outline">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
