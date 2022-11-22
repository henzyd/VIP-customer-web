import React from "react";
// import { Navbar } from "../components/general";
// import Footer from "../components/general/otherfooter/Footer";
import LandingPage from "../components/landingpage/LandingPage";
import { Navbar, Footer } from "components/general";

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;
