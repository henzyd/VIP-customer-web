import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #091540;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 13vw;

  @media screen and (max-width: 768px) {
    padding-inline: 2.4rem;
  }

  & > * {
    flex: 1;
  }
`;

export const ContentWrapper = styled.div`
  width: 44.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: 4rem;
  margin-bottom: 6.4rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 3.2rem;
  }
`;

export const White = styled.div`
  background-color: white;
  color: #121212;
  width: 100%;
  padding-top: 6.8rem;
  padding-inline: 2.6rem;
  padding-bottom: 6.8rem;
  display: flex;
  justify-content: center;

  h3 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  .text {
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 3.2rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 5.8rem;
    padding-bottom: 16rem;
  }
`;

export const Button = styled.button`
  background-color: #091540;
  text-align: center;
  width: 100%;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 5.8rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
