import { Navbar, Footer } from "components/general";
import React from "react";
import Display from "../display/Display";
import Experience from "../experience/Experience";
import GetStarted from "../getstarted/GetStarted";
import classes from "./Index.module.css";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.gridcontainer}>
          <GetStarted />
          <Display />
        </div>
        <Experience />
      </div>
      <Footer />
    </>
  );
};
export default Index;
