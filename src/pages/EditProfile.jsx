import React, { useEffect, useState } from "react";
import Header from "../components/profile/Header";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/images/arrow.png";
import Notification from "../assets/images/notification.png";
import Security from "../assets/images/security.png";
import Help from "../assets/images/help.png";
import Logout from "../assets/images/logout.png";
import Girl from "../assets/images/girl.png";
import Pen from "../assets/images/pen.png";
import ProfileMobileNav from "../components/profile/ProfileMobileNav";
import Check from "../assets/images/check.png";
import "../components/profile/profile.css";

const EditProfile = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  function openNav() {
    setMobileActive(true);
    console.log("nav open");
  }

  function closeNav() {
    setMobileActive(false);
  }

  return (
    <>
      <main className="profile-page">
        <Header openNav={openNav} />
        <section className="profile-content">
          <div className="side-nav">
            <div className="side-nav-head">
              <NavLink
                to="/profile"
                style={{ display: "flex", gap: "8px", alignItem: "center" }}>
                <span>
                  <img src={Arrow} alt="" />
                </span>
                <span>Settings</span>
              </NavLink>
            </div>

            <div className="side-nav-body">
              <ul>
                <li>
                  <NavLink to="/edit-profile">
                    <span>
                      <img className="link-image" src={Pen} alt="" />
                    </span>
                    <span className="link-text">Edit Profile</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/profile">
                    <span>
                      <img className="link-image" src={Notification} alt="" />
                    </span>
                    <span className="link-text">Notification</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/profile">
                    <span>
                      <img className="link-image" src={Security} alt="" />
                    </span>
                    <span className="link-text">Security</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/profile">
                    <span>
                      <img className="link-image" src={Help} alt="" />
                    </span>
                    <span className="link-text">Help</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/profile">
                    <span>
                      <img className="link-image" src={Logout} alt="" />
                    </span>
                    <span className="link-text">Logout</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-main-content">
            <div className="profile-main-content-box">
              <div
                className="profile-main-content-head"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px"
                }}>
                <div>
                  <h2>Edit Profile</h2>
                </div>
                <div>
                  <img src={Girl} width="120" alt="" />
                </div>
              </div>

              <form className="profile-form">
                <div className="double-input">
                  <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="Rika" />
                  </div>

                  <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Timmy" />
                  </div>
                </div>
                <div className="single-input">
                  <label htmlFor="">Company Email</label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="email"
                      placeholder="axe.business@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {email.length >= 8 && (
                      <img
                        src={Check}
                        alt=""
                        width="25"
                        style={{
                          position: "absolute",
                          top: "16px",
                          right: "10px"
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="single-input">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="33062 Zboncak isle"
                  />
                </div>

                <div className="single-input">
                  <label htmlFor="">Contact Number</label>
                  <input type="tel" placeholder="58077.79" />
                </div>

                <div className="double-input">
                  <div>
                    <label htmlFor="city">City</label>
                    <select name="city" id="city">
                      <option value="mehrab">Mehrab</option>
                      <option value="lagos">Lagos</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
                      <option value="borzogi">Borzogi</option>
                      <option value="Banghad">Banghad</option>
                    </select>
                  </div>
                </div>

                <div className="single-input">
                  <label htmlFor="">Password</label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="password"
                      placeholder="sbdfbnd65sfdvb s"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {password.length >= 8 && (
                      <img
                        src={Check}
                        alt=""
                        width="25"
                        style={{
                          position: "absolute",
                          top: "16px",
                          right: "10px"
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="profile-form-buttons">
                  <button className="cancel-btn">Cancel</button>
                  <button className="save-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <ProfileMobileNav mobileActive={mobileActive} closeNav={closeNav} />
    </>
  );
};

export default EditProfile;
