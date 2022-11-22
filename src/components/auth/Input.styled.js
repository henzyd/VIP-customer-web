import styled from "styled-components";

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  color: black;

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const InputStyles = styled.input`
  display: block;
  margin-block: 0.6rem;
  border: 1px solid #adb1bf;
  border-radius: 8px;
  padding: 1rem 1.6rem;
  cursor: text;
  width: 100%;
  color: black;
  font-size: 1.4rem;

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }

  &:focus {
    border: 1px solid #091540;
  }

  &::placeholder {
    color: #adb1bf;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 1.4rem;
  color: #ff414e;
  font-weight: 400;

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
