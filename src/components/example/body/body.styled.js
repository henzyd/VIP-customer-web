import styled from "styled-components";

const BodyWrapper = styled.main`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: tomato;

  p {
    color: ${({ theme }) => theme.example};
    padding: 30px 0px;
  }
`;

export default BodyWrapper;
