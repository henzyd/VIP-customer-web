import styled from "styled-components";

export const ResultsWrapper = styled.section`
  .f {
    display: flex;
  }

  .fcenter {
    justify-content: center;
    align-items: center;
  }

  .red {
    border: 2px solid red;
  }

  max-width: 1200px;
  width: 100%;
  padding: 10px;
  margin: 0 auto;

  .wrapper__container {
    padding: 15px;
    height: 600px;
    border: 1px solid #adb1bf;
    overflow-x: auto;
    border-radius: 12px;
  }
`;

export const Tablet = styled.section`
  display: none;
  @media screen and (min-width: 500px) {
    display: block;
  }
`;

export const Mobile = styled.section`
  display: block;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const TabletRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
`;

export const MobileWrapper = styled.div`
  padding: 15px;
  border: 1px solid #adb1bf;
  border-radius: 12px;
`;

export const MobileRow = styled.div`
  border-bottom: 2px solid #ced0d9;
  margin-bottom: 10px;
  padding: 10px;

  .row {
    display: flex;
  }

  span {
    width: 35%;
    margin-right: 10px;
    font-size: 1.6rem;
  }

  p {
    align-self: flex-start;
    font-size: 1.6rem;
  }
`;
