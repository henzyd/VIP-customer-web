import React from "react";
import styles from "./values.module.css";
import listIcon from "../assets/listIcon.svg";
import ValuesImg from "../assets/values.webp";

const Values = () => {
  return (
    <div className={styles.values}>
      <div className={styles.container}>
        <img className={styles.img} src={ValuesImg} />
        <div>
          {" "}
          <h2 className={styles.h2}>Our Core Values</h2>
          <p className={styles.p}>
            We Strive daily to provide our users with :
          </p>
          <ul className={styles.ul}>
            <li>
              <img src={listIcon} />
              <span>Speed</span>
            </li>
            <li>
              <img src={listIcon} />
              <span>Reliability</span>
            </li>
            <li>
              <img src={listIcon} />
              <span>Privacy</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.connect}>
        <h2>Get Connected with us</h2>
        <div>
          <p className={styles.email}>Email Address</p>
          <button className={styles.button}>subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Values;
