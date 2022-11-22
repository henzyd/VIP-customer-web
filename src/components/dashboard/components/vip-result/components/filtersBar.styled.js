import styled from "styled-components";

export const FilterBarWrapper = styled.div`
  position: relative;
  width: 30%;
  min-width: 140px;
  border: 1px solid #848aa0;
  border-radius: 4px;
  color: #323c60;
  cursor: pointer;
  margin-left: 10px;

  .bar {
    height: 100%;
    display: flex;
    padding: 3px 7px;
    align-items: center;
  }

  span {
    font-size: 1.2rem;
    pointer-events: none;
  }

  span:last-of-type {
    margin-left: 7px;
  }
`;

export const SortBarWrapper = styled(FilterBarWrapper)``;

export const OptionsCard = styled.form`
  position: absolute;
  transform-origin: top;
  visibility: ${({ showOptions }) => (showOptions ? "visible" : "hidden")};
  cursor: default;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  box-shadow: 0px 10px 42px rgba(18, 18, 18, 0.24);
  border-radius: 4px;
  padding: 10px;
  width: 120%;

  .options__select {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;

    .checkbox {
      display: block;
      height: 15px;
      width: 15px;
      border: 1px solid #091540;
      border-radius: 2px;
      margin-right: 7px;
      overflow: hidden;
    }

    .text {
      color: #121212;
      font-size: 1.2rem;
    }

    .tick {
      display: none;
    }

    .checkbox.check .tick {
      display: block;
      background-color: #091540;
      border: none;
      color: white;
    }
  }

  .options__select * {
    pointer-events: none;
  }
`;
