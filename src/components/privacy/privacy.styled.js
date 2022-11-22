import styled from "styled-components";

const PrivacyWrapper = styled.main`
  width: 100%;
  padding: 3rem 5rem;
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;

  h3 {
    color: #091540;
    font-weight: bold;
  }

  h2 {
    color: #091540;
    font-weight: bolder;
    text-align: center;
    font-style: normal;
  }

  p {
    color: #000000;
    margin-top: 10px;
    font-size:18px;
  }

  span {
    color: #121212;
    font-weight: bold;
  }

  div {
    padding: 1rem 0;
  }
  div p {
    white-space: pre-line;
  }

  @media (max-width: 997px) {
    padding:1rem 2rem;
`;

export default PrivacyWrapper;
