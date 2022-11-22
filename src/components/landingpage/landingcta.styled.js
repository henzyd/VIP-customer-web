import styled from "styled-components";

const LandingCtaWraper = styled.aside`
  color: white;
  max-width: 732px;
  margin: 68px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    padding: 22px;
  }
`;
const CtaHeader = styled.h3`
  font-style: normal;
  color: #121212;
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height, or 122% */

  text-align: center;
`;

const CtaSubtext = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Default 121212 */

  color: #121212;
`;

export { LandingCtaWraper, CtaHeader, CtaSubtext };
