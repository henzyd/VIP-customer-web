import React from "react";
import SearchInput from "../searchinput";

import styles from "./nav.module.css";

import dummmy_dp from "../../assets/dummy_dp.png";
import Logo from "./assets/Logo.svg";
import MobileLogo from "./assets/MobileLogo.svg";
import SearchIcon from "./assets/SearchIcon.svg";

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo__container}>
          <img src={Logo} alt="Axe api" />
        </div>

        <div className={styles.search__user_img}>
          <SearchInput />
          <img src={dummmy_dp} alt="user" />
        </div>

        <div className={styles.mobile__logo}>
          <img src={MobileLogo} alt="search" />
        </div>

        <div className={styles.mobile__search}>
          <img src={SearchIcon} alt="search" />
        </div>
      </div>
    </header>
  );
}
