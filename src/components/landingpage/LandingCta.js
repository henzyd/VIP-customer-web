import React from "react";
import { CtaHeader, CtaSubtext, LandingCtaWraper } from "./landingcta.styled";
import Button from "../general/Button";

const LandingCta = () => {
  return (
    <LandingCtaWraper>
      <CtaHeader>Ready to identify your website VIP’s?</CtaHeader>
      <CtaSubtext>
        Sign up today and view all very important personalities on your website
      </CtaSubtext>
      <Button
        text="Get Started"
        style={{
          padding: "16px 51px",
          width: "194px",
          height: "56px",
          color: "#121212",
          border: "1px solid #333333",
          borderRadius: "4px"
        }}
      />
    </LandingCtaWraper>
  );
};
export default LandingCta;
