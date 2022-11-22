import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarWrapper = styled.div`
  display: none;
  color: white;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const SignUpBtn = styled.button`
  width: 100%;
  background-color: #091540;
  color: white;
  text-align: center;
  font-weight: 600;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const LinkStyles = styled(Link)`
  color: #f05d23;
  white-space: nowrap;
`;

export const Names = styled.form`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  & > * {
    flex: 1;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap: 2.4rem;
    align-items: stretch;
  }
`;

export const Form = styled.form`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    gap: 2.4rem;
  }
`;

export const OrDemarcation = styled.div`
  text-align: center;
  position: relative;
  margin-top: 2rem;
  font-size: 2.5rem;
  color: #121212;

  span {
    padding-inline: 10px;
    background-color: white;
    padding: 0.7rem 1.5rem;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    border-top: 1px solid black;
    height: 0;
    position: absolute;
    right: 0;
    top: 55%;
    z-index: -1;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;

export const GoogleSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  font-size: 1.8rem;
  color: #121212;
  border: 2px solid #091540;
  border-radius: 7px;
  padding-block: 1.6rem;
  width: 100%;
  cursor: pointer;

  span {
    font-size: 3rem;
    display: grid;
    place-items: center;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding-block: 1.4rem;
    padding-inline: 1.6rem;
    justify-content: flex-start;

    border: 1px solid #adb1bf;

    span {
      font-size: 2rem;
    }
  }
`;

export const Right = styled.div`
  flex: 1.2;
  display: grid;
  place-items: center;
  padding: 7rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 4.2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 6.5rem 4.2rem 4.3rem;
  }

  & > div {
    width: 100%;
    max-width: 58.8rem;
  }
`;

export const Socials = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 7rem;

  @media only screen and (max-width: 768px) {
    margin: 1.3rem 0 3.3rem;
  }
`;

export const LoginText = styled.div`
  font-size: 1.8rem;
  margin-top: 7rem;

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 1.4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  background-color: #091540;
  display: flex;
  justify-content: center;
  padding-top: 30vh;
  padding-inline: 4.2rem;
  text-align: center;
  color: white;

  h3 {
    font-weight: 700;
    font-size: 3.2rem;
    margin-top: 7rem;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    flex: 0;
    padding-top: 5.5rem;

    h3 {
      font-size: 1.8rem;
      margin-top: 0;
    }
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
