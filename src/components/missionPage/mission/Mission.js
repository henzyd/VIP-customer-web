import React from "react";
import styles from "./mission.module.css";
// import image
import MissionImg from "../assets/mission.webp";
const Mission = () => {
  return (
    <div className={styles.mission}>
      {" "}
      <div className={styles.container}>
        <img className={styles.img} src={MissionImg} />
        <div className={styles.misssion}>
          <h2 className={styles.h2}>Our Mission</h2>
          <p className={styles.p}>
            Our Mission is to provide businesses and brands with unique customer
            identification service which will help tailor sales and effort to
            target specific User profiles.
            <br />
            <br />
            <span className={styles.span}>
              {" "}
              We do this by filtering through the user profiles of those who
              visits your websites to know if a particular visitor is ranked as
              a VIP customer. This API will scrap various social media platforms
              and the internet to find out if the user fits into a preset
              criteria of VIP guest
            </span>
          </p>
          <button className={styles.button}> Request a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
