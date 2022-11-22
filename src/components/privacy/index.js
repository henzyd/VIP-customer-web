import React from "react";
import PrivacyWrapper from "./privacy.styled";
import PrivacyCard from "./body/PrivacyCard";
import PrivacyList from "./body/PrivacyList";
import PrivacyListTwo from "./body/PrivacyListTwo";
import { Navbar, Footer } from "components/general";

const list = PrivacyList.map((plist, idx) => (
  <PrivacyCard key={idx} plist={plist} />
));
const listTwo = PrivacyListTwo.map((plist, idx) => (
  <PrivacyCard key={idx} plist={plist} />
));
const Privacy = () => (
  <>
    <Navbar />
    <PrivacyWrapper>
      <section>
        <h2>PRIVACY POLICY</h2>
        <p>
          TeamAxe Privacy Policy is designed to help you understand how we
          collect and use the personal information you decide to share, and help
          you make informed decisions when using{" "}
          <span>
            <a href="#">TeamAxe.com</a>
          </span>
          . By using or accepting TeamAxe you are accepting the practices
          described in this policy. If you have questions regarding this
          statement, you can send us email to{" "}
          <span>
            <a href="#">contact@TeamAxe.com</a>
          </span>
          .
        </p>
        <div>{list}</div>
      </section>
      <section>
        <h2>Terms of Use, Notices and Revisions</h2>
        <div>{listTwo}</div>
      </section>
    </PrivacyWrapper>
    <Footer />
  </>
);

export default Privacy;
