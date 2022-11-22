import React from "react";
import styles from "./footer.module.css";
import { Store } from "../../../store/contexts/AppContext";

const Footer = () => {
  const { theme } = Store();

  return (
    <footer className={styles.footer}>
      <h4>HNG</h4>

      <div>
        <p className={theme ? "" : "dark"}>
          I am PINK when the theme is Dark <br /> And YELLOW when the team is
          white
        </p>

        <small>I was implemented with vanilla css</small>
      </div>

      <h4>Axe</h4>
    </footer>
  );
};

export default Footer;
