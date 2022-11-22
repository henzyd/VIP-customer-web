import React from "react";
import styles from "./About.module.css";

const Aboutmain = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h2 className={styles.mainHeading}>Our Benefits</h2>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <div className={styles.textCont}>
              <h2 className={styles.h2Main}>
                Simple software that identifies VIPs
              </h2>
              <p className={styles.para}>
                Our API helps users identify the highest ranking customers that
                visit their website. It is easy to use and understand
              </p>
            </div>
            <div className={styles.textCont}>
              <h2 className={styles.h2Main}>Strict privacy policy</h2>
              <p className={styles.para}>
                Our rigorous privacy policy prevents us from disclosing consumer
                information to any outside parties. Therefore you can rest easy,
                knowing that all personal data is secure.
              </p>
            </div>
            <div className={styles.textCont}>
              <h2 className={styles.h2Main}>Helping business generate sales</h2>
              <p className={styles.para}>
                We give you all the information you need to better serve your
                customers the type of special offers and services they require
              </p>
            </div>
          </div>
          <div className={styles.imgContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Aboutmain;
