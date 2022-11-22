import React from "react";
import Header from "./Header";
import LandingCta from "./LandingCta";
import Image from "./Image";
import LandingVideo from "./LandingVideo";

const LandingPage = () => {
  return (
    <>
      <Header />
      <LandingVideo />
      <Image />
      <LandingCta />
    </>
  );
};
export default LandingPage;
