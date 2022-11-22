import React from "react";
// import LOGO from "../../assests/icons/logo.svg";

const Footer = () => {
  return (
    <div className={`footer `}>
      <div>{/* <img src={LOGO} alt="" /> */}</div>
      <div>
        <h3 className="features">Features</h3>
        <h4>AXE API Feature</h4>
        <h4>How it Works</h4>
      </div>
      <div>
        <h3 className="features">Help & Support</h3>
        <h4>FAQ</h4>
        <h4>Help Center</h4>
      </div>
      <div>
        <h3 className="features">Terms & Conditions</h3>
        <h4>Privacy Policy</h4>
      </div>
      <div>
        <h3 className="features">Company</h3>

        <h4>About Us</h4>
        <h4>Meet our Team</h4>
        <h4>Vision & Mission</h4>
      </div>
    </div>
  );
};

export default Footer;
