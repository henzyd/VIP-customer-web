import styled from "styled-components";

const FooterWrapper = styled.main`
  background-color: #091540;
  padding: 2rem 5rem;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  display: flex;

  .footbar {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .footbarone {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .footlink {
    font-weight: 300;
  }

  @media (max-width: 997px) {
    padding: 1rem 2rem;
    flex-direction: column;

    .footbar {
      flex-wrap: wrap;
    }
    .footbar {
      gap: 1.5rem;
      justify-content: space-between;
    }
  }
`;

export default FooterWrapper;
