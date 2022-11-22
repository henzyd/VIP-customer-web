import styled from "styled-components";
import tick from "./assets/consultation-bg.png";

export const ConsultPageWrap = styled.div`
  padding-top: 100px;

  background-size: 30%;
  .back-btn {
    background: #091540;
    box-shadow: 0px 1.16791px 2.33582px rgba(0, 0, 0, 0.14);
    color: #fff;
    padding: 0.5rem 1.43rem;
    font-weight: 600;
    font-size: 14px;
    border-radius: 8px;
    margin: 2rem 3rem;
    position: relative;
    top: 2rem;
  }
`;

export const FormStyled = styled.form`
  border: 1px solid #848a9f;
  padding: 1.25rem 1.875rem 3.125rem;
  border-radius: 8px;
`;

export const ConsultStyled = styled.section`
  background-image: url(${tick});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  .consult-inner {
    width: 80%;
    margin: 4rem auto 0;
    padding-bottom: 10rem;

    @media only screen and (min-width: 768px) {
      width: 70%;
      @media screen and (min-width: 992px) {
        width: 60%;
      }
    }

    h1,
    p {
      text-align: center;
      color: #121212;
    }

    p {
      padding-block: 1.1rem 2rem;
      font-size: 1.75rem;
    }
  }
`;

export const BtnContainer = styled.div`
  margin-block: 2.5rem 3.5rem;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    width: fit-content;
    margin-right: auto;
  }

  button {
    padding: 0.5rem 1.43rem;
    font-weight: 600;
    font-size: 14px;
    border-radius: 8px;

    &.submit {
      background: #091540;
      box-shadow: 0px 1.16791px 2.33582px rgba(0, 0, 0, 0.14);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding-block: 0.2rem;
    }

    &.reset {
      border: 1px solid #848aa0;
      color: #848aa0;
    }

    &:disabled {
      background: #adb1bf;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
      border-radius: 4.67164px;
      color: #fff;
      cursor: not-allowed;
    }
  }
`;
