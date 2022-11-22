import React from "react";
import Logo from "../../assets/images/logo.png";
import Girl from "../../assets/images/girl.png";
import House from "../../assets/images/house.png";
import Bolt from "../../assets/images/bolt.png";
import Calender from "../../assets/images/calender2.png";
import Bell from "../../assets/images/bell.png";
import { FaBars } from "react-icons/fa";
import Search from "../../assets/images/search.png";
import PropTypes from "prop-types";

const Header = ({ openNav }) => {
  return (
    <header>
      <div className="logo-div">
        <img src={Logo} className="profile-logo" alt="axes logo" />
      </div>
      <div className="icon-box">
        <div className="header-search" style={{ position: "relative" }}>
          <input type="search" name="" placeholder="Search" id="search" />
          <img
            src={Search}
            style={{ position: "absolute", top: "7px", left: "7px" }}
            alt=""
          />
        </div>
        <div className="hamburger" onClick={openNav}>
          <FaBars />
        </div>
        <div className="header-icon-box">
          <span>
            <img src={House} width="33" className="header-icons" alt="house" />
          </span>
          <span>
            <img src={Bell} width="23" className="header-icons" alt="bell" />
          </span>
          <span>
            <img
              src={Calender}
              width="23"
              className="header-icons"
              alt="calender"
            />
          </span>
          <span>
            <img src={Bolt} width="33" className="header-icons" alt="bolt" />
          </span>
          <span>
            <img src={Girl} alt="girl" className="header-girl" />
          </span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  openNav: PropTypes.func
};

export default Header;
