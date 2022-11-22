import React from "react";
import Abouttop from "components/about/Abouttop";
import Aboutmain from "components/about/Aboutmain";
import Aboutbottom from "components/about/Aboutbottom";
import { Navbar, Footer } from "components/general";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <Abouttop />
      <Aboutmain />
      <Aboutbottom />
      <Footer />
    </div>
  );
};
export default Aboutus;
