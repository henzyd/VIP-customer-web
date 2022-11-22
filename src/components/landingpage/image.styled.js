import styled from "styled-components";

const ImageWrapper = styled.div`
  margin: 68px auto;
  width: 100%;
  & > img {
    margin: 0 auto;
    display: block;
    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 1024px) {
    padding: 22px;
  }
`;

export { ImageWrapper };
