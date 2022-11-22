import styled from "styled-components";

/* colors used here are for samples. */
/* all colors will be  declared in the theme.js file and applied dynamically  */
/* eg

.color{
  color: ${(props) => props.color}
}
*/

const HeaderWrapper = styled.main`
  color: lemonchiffon;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: skyblue;
`;

export { HeaderWrapper };
