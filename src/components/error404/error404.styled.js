import styled from "styled-components";

const ErrorPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
`;

const ErrorPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-items: center;
  justify-content: center;
`;
const ErrorText = styled.p`
  color: #091540;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  line-height: 28px;
  @media (max-width: 690px) {
    font-size: 20px;
    width: 100%;
    max-width: 300px;
    line-height: 24px;
  }
`;
const Span = styled.span`
  color: #c04a1c;
`;

const ImageWrapper = styled.div`
  width: 70%;
  height: 70%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export { ErrorPageContainer, ErrorPageWrapper, ErrorText, ImageWrapper, Span };
