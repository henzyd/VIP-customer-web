import styled from "styled-components";

const FooterContainer = styled.footer`
  postition: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: #091540;
  padding: 22px;
  display: flex;
  color: white;
  justify-content: center;
`;
const LogoWrapper = styled.div`
  width: ${({ mobile, tablet }) =>
    mobile ? "48.9%" : tablet ? "73.46%" : "164.63px"};
  height: ${({ mobile, tablet }) =>
    mobile ? "48.9%" : tablet ? "73.46%" : "49px"};
  & > img{
    width:100%;
    height:100%
    object-fit:cover;
  }
`;

const FooterWrapper = styled.div`
  max-width: 1097px;
  width: 100%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: ${({ mobile, tablet }) =>
      mobile ? "80.5px" : tablet ? "120.63px" : "164.63px"} 1fr;
  gap: ${({ tablet }) => (tablet ? "0px" : "50px")};
  & > div.wrapper {
    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        ${({ tablet, mobile }) =>
          tablet ? "120px" : mobile ? " 80px" : "180px"},
        1fr
      )
    );
    grid-auto-rows: 120px;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & a.active {
    color: #c04a1c;
  }
`;

const FooterHeader = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ tablet, mobile }) =>
    tablet ? "20px" : mobile ? " 16px" : "24px"};
  line-height: ${({ tablet, mobile }) =>
    tablet ? "26px" : mobile ? " 22px" : "28px"};
`;

const FooterText = styled(FooterHeader)`
  width: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: ${({ tablet, mobile }) =>
    tablet ? "16px" : mobile ? " 12px" : "20px"};
  line-height: ${({ tablet, mobile }) =>
    tablet ? "20px" : mobile ? " 16px" : "28px"}; ;
`;

export {
  FooterContainer,
  FooterWrapper,
  FooterHeader,
  FooterText,
  SectionWrapper,
  LogoWrapper
};
