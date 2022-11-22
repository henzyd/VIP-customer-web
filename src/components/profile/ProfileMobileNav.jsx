import React from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import House from "../../assets/images/house.png";
import Bolt from "../../assets/images/bolt.png";
import Calender from "../../assets/images/calender.png";
import Bell from "../../assets/images/bell.png";
import Settings from "../../assets/images/settings.png";
import Notification from "../../assets/images/notification.png";
import Security from "../../assets/images/security.png";
import Help from "../../assets/images/help.png";
import Logout from "../../assets/images/logout.png";
import Pen from "../../assets/images/pen.png";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileMobileNav = ({ mobileActive, closeNav }) => {
  return (
    <div className={`profile-mobile-nav ${mobileActive ? "active" : ""}`}>
      <div className="profile-nav-head">
        <img src={Logo} alt="" />
        <FaTimes onClick={closeNav} />
      </div>
      <div>
        <input
          type="search"
          name=""
          placeholder="Search"
          style={{ position: "relative" }}
          id=""
        />
      </div>
      <div className="profile-mobile-nav-icons">
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
      </div>

      <ul className="profile-mobile-nav-list">
        <li>
          <NavLink to="/profile/edit">
            <span>
              <img className="link-image" src={Pen} alt="" />
            </span>
            <span className="link-text">Edit Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Settings} alt="" />
            </span>
            <span className="link-text">Settings</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Notification} alt="" />
            </span>
            <span className="link-text">Notification</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Security} alt="" />
            </span>
            <span className="link-text">Security</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Help} alt="" />
            </span>
            <span className="link-text">Help</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Logout} alt="" />
            </span>
            <span className="link-text">Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

ProfileMobileNav.propTypes = {
  closeNav: PropTypes.func,
  mobileActive: PropTypes.bool
};

export default ProfileMobileNav;
