import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assests/icons/logo.svg";
import PropTypes from "prop-types";

import {
  FooterContainer,
  FooterWrapper,
  FooterHeader,
  FooterText,
  SectionWrapper,
  LogoWrapper
} from "./footer.styled";

const Footer = ({ mobile, tablet }) => {
  const footerLinks = document.querySelectorAll(".footer-links-wrapper  a");

  const footerLogo = document.querySelector(".footer--link");
  const removeClass = (items) => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };
  //loop through links
  footerLinks.forEach((link) => {
    //add a click listener to each
    link.addEventListener("click", (e) => {
      //onclick
      removeClass(footerLinks);
      e.currentTarget.classList.add("active");
    });
  });

  footerLogo?.addEventListener("click", () => removeClass(footerLinks));

  return (
    <FooterContainer>
      <FooterWrapper tablet={tablet}>
        <SectionWrapper logo>
          <Link className="footer--link">
            {" "}
            <LogoWrapper tablet={tablet} mobile={mobile}>
              <img src={LOGO} alt="axeapi logo" />
            </LogoWrapper>
          </Link>
        </SectionWrapper>
        <div className="wrapper footer-links-wrapper">
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              Features
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>AXE API Feature</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>How it works</Link>
            </FooterText>
          </SectionWrapper>
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              Help & Support
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>FAQ</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Help center</Link>
            </FooterText>
          </SectionWrapper>
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              Terms &amp; condition
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Privacy</Link>
            </FooterText>
          </SectionWrapper>
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              sCompany
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>About Us</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Meet Our Team</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Vision and Mission</Link>
            </FooterText>
          </SectionWrapper>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

Footer.propTypes = {
  mobile: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired
};
