import React, { useState } from "react";
import {
  Items,
  LogoWrapper,
  MobileNavWrapper,
  NavItemsWrapper,
  NavWrapper
} from "./navbar.styled";
import Button from "../Button";
import LOGO from "../assests/icons/logo.svg";
import MenuBtn from "./MenuBtn";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useScreenSize from "hooks/useScreenSize";

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const { screenWidth } = useScreenSize();
  const mobile = screenWidth <= 690;
  const tablet = screenWidth <= 1024;

  /*!IMPORTANT-
This may not be the best way to effect this...in case it slows down page,
implementation should be changed
*/

  //get all anchor tags in .nav--link--items
  const navLinks = document.querySelectorAll(".nav--link--items > a");
  const navLogo = document.querySelector(".nav--logo");
  const removeClass = (items) => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };
  //loop through links
  navLinks.forEach((link) => {
    //add a click listener to each
    link.addEventListener("click", (e) => {
      //onclick
      removeClass(navLinks);
      e.currentTarget.classList.add("active");
    });
  });

  navLogo?.addEventListener("click", () => removeClass(navLinks));

  return (
    /* Link currently does not have a route

    this should be implemented when the routes are confirmed*/

    <NavWrapper tablet={tablet} mobile={mobile}>
      <NavItemsWrapper>
        <Items className="nav--logo">
          <Link to="/">
            <LogoWrapper mobile={mobile} tablet={tablet}>
              <img src={LOGO} alt="axeapi logo" />
            </LogoWrapper>
          </Link>
        </Items>
        {tablet && (
          /* on click of the menu_btn on tablet & mobile toggle menu*/
          <Items onClick={() => setMenuOpen(!menuopen)}>
            {/*changes color of component if menu is open*/}
            <MenuBtn menuopen={menuopen} />
          </Items>
        )}
        <Items className="nav--link--items" tablet={tablet}>
          <Link
            to="/
          ">
            Products
          </Link>
          <Link>Resourses</Link>
          <Link to={"/team"}>The Team</Link>
          <Link to="/about-us">About Us</Link>
        </Items>
        <Items className="nav--link--items" tablet={tablet}>
          <Link to="/login">Log in</Link>
          <Link to="/signup">
            {/* this a reusable button component */}
            <Button
              style={{ padding: "12px 24px", fontWeight: "700" }}
              text="Get Started"
            />
          </Link>
        </Items>
      </NavItemsWrapper>
      {tablet && (
        /* display on tablet screen size */
        <MobileNavWrapper
          tablet={tablet}
          mobile={mobile}
          style={{ color: "#fff" }}
          className={`${menuopen && "open"} nav--link--items`}>
          <Link to="/">Products</Link>
          <Link to="/">Resourses</Link>
          <Link to={"/team"}>The Team</Link>
          <Link to="/login">Log in</Link>
          <Link to="signup">Get Started</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Get Started</Link>
        </MobileNavWrapper>
      )}
    </NavWrapper>
  );
};

export default Navbar;
Navbar.propTypes = {
  mobile: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired
};
