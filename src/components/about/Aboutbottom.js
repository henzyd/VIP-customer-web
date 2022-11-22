import React from "react";
import styles from "./About.module.css";

const Aboutbottom = () => {
  return (
    <div className={styles.bottCont}>
      <div className={styles.bottom}>
        <div className={styles.bottomImg}></div>
        <div className={styles.textDiv}>
          <h3 className={styles.bottText}>
            See how AxeAPI can help your business leverage customer information,
            to make more informed business development decisions today
          </h3>
          <button className={styles.signupBtn}>Click Here to Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutbottom;
