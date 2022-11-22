import React, { useEffect, useState } from "react";
import Header from "../components/profile/Header";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/images/arrow.png";
import Settings from "../assets/images/settings.png";
import Notification from "../assets/images/notification.png";
import Security from "../assets/images/security.png";
import Help from "../assets/images/help.png";
import Logout from "../assets/images/logout.png";
import Girl from "../assets/images/girl.png";
import Rou from "../assets/images/rou.png";
import Upload from "../assets/images/upload.png";
import ProfileMobileNav from "../components/profile/ProfileMobileNav";
import "../components/profile/profile.css";
import LogoutPage from "components/auth/logoutpage";

const Profile = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [activeSection, setActiveSection] = useState("all");

  const [modalShow, setModalShow] = React.useState(false);
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
                to="/"
                style={{ display: "flex", gap: "8px", alignItem: "center" }}>
                <span>
                  <img src={Arrow} alt="" />
                </span>
                <span>Profile</span>
              </NavLink>
            </div>

            <div className="side-nav-body">
              <ul>
                <li>
                  <NavLink to="/profile/edit">
                    <span>
                      <img className="link-image" src={Settings} alt="" />
                    </span>
                    <span className="link-text">Settings</span>
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
                    <span
                      className="link-text"
                      onClick={() => setModalShow(true)}>
                      Logout
                    </span>
                    <LogoutPage
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
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
                  <h2>Profile</h2>
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
                  <input type="email" placeholder="axe.business@gmail.com" />
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
              </form>

              <div>
                <div className="user-box">
                  <div>
                    <h3>User Activities</h3>
                  </div>
                  <div className="user-box-head">
                    <span onClick={() => setActiveSection("all")}>All</span>
                    <span onClick={() => setActiveSection("login")}>
                      Login History
                    </span>
                    <span onClick={() => setActiveSection("processes")}>
                      Processes
                    </span>
                  </div>

                  {activeSection === "all" && (
                    <div className="user-box-body">
                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          alignItems: "center",
                          margin: "20px 0"
                        }}>
                        <img src={Rou} alt="" />
                        <div>
                          <h5>Running Newsletter</h5>
                          <span>16 November 2022 at 12:00</span>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          alignItems: "center"
                        }}>
                        <img src={Upload} alt="" />
                        <div>
                          <h5>Uploading CSV</h5>
                          <span>16 November 2022 at 2:00pm</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "login" && (
                    <div className="user-box-body">
                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          alignItems: "center",
                          margin: "20px 0"
                        }}>
                        <img src={Rou} alt="" />
                        <div>
                          <h5>Running Newsletter</h5>
                          <span>16 November 2022 at 12:00</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "processes" && (
                    <div className="user-box-body">
                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          alignItems: "center"
                        }}>
                        <img src={Upload} alt="" />
                        <div>
                          <h5>Uploading CSV</h5>
                          <span>16 November 2022 at 2:00pm</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ProfileMobileNav mobileActive={mobileActive} closeNav={closeNav} />
    </>
  );
};

export default Profile;
