import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderContentWrapper,
  HeaderWrapper,
  Heading,
  Span,
  SubHeading,
  HeaderButton
} from "./header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <SubHeading>
          Let’s Identify your <Span>VIP’s</Span> And Convert Them To{" "}
          <Span>Sales</Span>
        </SubHeading>
        <Heading>
          Axe API identifies very important personas that visits your website
          and converts them to high leads.
        </Heading>
        <HeaderButton>
          <Link to="/demo">Try Our Demo</Link>
        </HeaderButton>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};
export default Header;
