import React from "react";
import FooterWrapper from "./footer.styled";
import axeLogo from "./images/logos.png";
import Linkbtn from "./LinkBtn";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <img src={axeLogo} alt="Axe API" />
      </div>
      <div className="footbar">
        <div className="footbarone">
          <h4>Features</h4>
          <Linkbtn
            href="/feature"
            child="Axe API Feature"
            classname="footlink"
          />
          <Linkbtn href="#" child="How it works" classname="footlink" />
          <Linkbtn href="/demo" child="How it works" classname="footlink" />
        </div>
        <div className="footbarone">
          <h4>Help & Support</h4>
          <Linkbtn href="/faq" child="FAQ" classname="footlink" />
          <Linkbtn href="/help" child="Help Center" classname="footlink" />
        </div>
        <div className="footbarone">
          <h4>Terms & Condition</h4>
          <Linkbtn
            href="/privacy"
            child="Privacy Policy"
            classname="footlink"
          />
        </div>
        <div className="footbarone">
          <h4>Company</h4>
          <Linkbtn href="/about-us" child="About us" classname="footlink" />
          <Linkbtn href="/meet" child="Meet our team" classname="footlink" />
          <Linkbtn
            href="/mission"
            child="Vision & Mission"
            classname="footlink"
          />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
