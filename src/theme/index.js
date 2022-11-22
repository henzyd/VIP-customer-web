import { createGlobalStyle } from "styled-components";

// all colors are currently temporal
const Themes = {
  light: {
    color: "#000000",
    bg: "#ffffff",
    example: "yellow"

    //.. others
  },
  dark: {
    color: "#000000",
    bg: "#ffffff",
    example: "pink"

    // others
  }
};

const GLobalStyles = createGlobalStyle`
/* style general classes here that needs theeming */
/* example */
body {
    background-color: ${({ theme }) => theme.bg};
    margin:0 auto;
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    transition:color 0.2s linear, background-color 0.2s linear;
  }

.btn{
  min-width:7rem;
  padding:7px 10px;
  border: 2px solid ${({ theme }) => theme.color};
  transition:all 0.3s linear;
  text-transform:uppercase;
  font-size:1rem;
}

/* example */






`;

export { Themes, GLobalStyles };
