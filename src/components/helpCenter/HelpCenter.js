import React from "react";
import { Link } from "react-router-dom";
import styles from "./HelpCenter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { MdOutlineSettings } from "react-icons/md";

import { Footer, Navbar } from "components/general";

const HelpCenter = () => {
  return (
    <>
      <Navbar />
      <div className={styles.help_center}>
        <div>
          <h3 className={styles.helpcenter_headings}>
            We are here to help you
          </h3>
          <p className={styles.helpcenter_paragraphs}>
            Find advice and answers from our support team fast or get in touch
          </p>
        </div>
        <div className={styles.helpcenter_search_container}>
          <div className={styles.helpcenter_search_div}>
            <AiOutlineSearch className={styles.helpcenter_searchIcon} />
            <input
              type="text"
              placeholder="Search for answers..."
              className={styles.helpcenter_inputs}
            />
          </div>
        </div>
        <div className={styles.helpcenter_category_div}>
          <h5 className={styles.helpcenter_headings}>Browse the Categories</h5>
          <div className={styles.helpcenter_cards}>
            <Link to="/faq">
              <div className={styles.helpcenter_card}>
                <TiMessages className={styles.helpcenter_icons} />
                <h6>FAQs</h6>
                <p>Get answers to questions frequently asked by users</p>
              </div>
            </Link>
            <Link to="/docs">
              <div className={styles.helpcenter_card}>
                <RiFileList2Line className={styles.helpcenter_icons} />
                <h6>API Documentation</h6>
                <p>
                  Detailed instructions on how to effectively use and integrate
                  our API
                </p>
              </div>
            </Link>
            <div className={styles.helpcenter_card}>
              <MdOutlineSettings className={styles.helpcenter_icons} />
              <h6>Settings</h6>
              <p>Answers to most configuration issues</p>
            </div>
          </div>
        </div>
        <div className={styles.helpcenter_question_div}>
          <h5 className={styles.helpcenter_headings}>
            Didn’t find an answer to your questions?
          </h5>
          <p className={styles.helpcenter_paragraphs}>
            Get in touch with us for details on additional support and services
          </p>
          <form className={styles.helpcenter_forms}>
            <div className={styles.helpcenter_forms_div}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <textarea
              name="question"
              id="questions"
              cols="30"
              rows="10"
              placeholder="Enter your question here..."
              required></textarea>
            <input
              type="submit"
              value={"Get in Touch"}
              className={styles.helpcenter_submit}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HelpCenter;
