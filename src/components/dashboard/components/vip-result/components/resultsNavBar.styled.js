import styled from "styled-components";

export const ResultsNavBarWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .filters__container,
  .header {
    width: 50%;
  }

  .filters__container {
    margin-right: 0px;
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;

    form {
      margin-left: 10px;
    }
  }

  .header {
    color: #f05d23;
    font-weight: 600;
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 360px) {
    flex-direction: row;

    .header {
      margin-bottom: 0px;
    }
  }
`;
