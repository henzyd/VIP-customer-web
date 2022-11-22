import React from "react";
import Mission from "./mission/Mission.js";
import Vision from "./vision/Vision.js";
import Values from "./values/Values.js";
import styles from "./missionPage.module.css";
// import Header from "components/layout/Header.jsx";
// import Vision from "components/mission/vision/Vision.js";
// import Values from "components/mission/values/Values.js";
import { Navbar, Footer } from "components/general";

const MissionVV = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Mission />
      <Vision />
      <Values />
      <Footer />
    </div>
  );
};

export default MissionVV;
