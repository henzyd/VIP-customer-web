import styled from "styled-components";

export const Input = styled.input`
  display: none;

  &:checked + label span {
    .checkmark {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 4.1rem;
  font-size: 1.8rem;

  span {
    height: 2rem;
    width: 2rem;
    display: inline-block;
    border: 1px solid black;
    border-radius: 6px;
    position: absolute;
    left: 0;
    top: 0.45rem;

    .checkmark {
      font-size: 1.8rem;
      position: absolute;
      top: -0.2rem;
      opacity: 0;
      color: #f05d23;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding-left: 3rem;

    span {
      height: 1.4rem;
      width: 1.4rem;
      border-radius: 4px;
      top: 0.3rem;

      .checkmark {
        font-size: 1.2rem;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1.2rem;
`;
