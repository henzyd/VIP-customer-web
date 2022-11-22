import React from "react";

import styles from "./search.module.css";
import SearchIcon from "./assets/SearchIcon.svg";

function SearchInput() {
  return (
    <div className={styles.searchinput}>
      <input type="text" name="name" id="name" placeholder="Search" />
      <span className={styles.icon}>
        <img src={SearchIcon} alt="Search" />
      </span>
    </div>
  );
}

export default SearchInput;
