import React from "react";
import PropTypes from "prop-types";

import styles from "./progress.module.css";
import Iconone from "./assets/Iconone.svg";
import Icontwo from "./assets/Icontwo.svg";
import Iconthree from "./assets/Iconthree.svg";

const progressData = [
  { id: 0, image: Iconone, status: "active" },
  { id: 1, image: Icontwo, status: "active" },
  { id: 2, image: Iconthree, status: "active" }
];

export default function ProgressBar(props) {
  const { step } = props;

  return (
    <div className={styles.progressbar}>
      <div
        className={`${styles.background_line} ${
          step === 2 ? styles.filled : ""
        }`}></div>
      {progressData.map((item) => {
        return (
          <div key={item.id} className={styles.progress_step}>
            {/* image */}
            <div
              className={styles.image_box}
              style={{
                backgroundColor:
                  step > item.id || step === 2
                    ? "#091540"
                    : step === item.id
                    ? "#CED0D9"
                    : "#CED0D9"
              }}>
              <img src={item.image} alt="icon" />
            </div>

            {/* line */}
            <div
              className={styles.line}
              style={{
                display: item.id === 2 ? "none" : "",
                backgroundColor:
                  step > item.id
                    ? "#091540"
                    : step === item.id
                    ? "#CED0D9"
                    : "#CED0D9",
                zIndex: step > item.id ? "10" : step === item.id ? "1" : "1"
              }}></div>
          </div>
        );
      })}
    </div>
  );
}

ProgressBar.propTypes = {
  step: PropTypes.number
};
