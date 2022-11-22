import React from "react";
import { ButtonWrapper } from "./button.styled";
import PropTypes from "prop-types";

/*
This is a reusable Button Component

Button component takes in props

<<<<<<< HEAD

@PROPS TYPE - STRINGS

 fw - font-weight,
 fz - font-size,
 bg - background,
 fw - font-weight,
 padding - padding - (sides),
 border - border -(width,weight,color),
 height - height,
 width  - width
=======
 style - overides default styling - (object),
 onClick - on click function,
 text - strings/children
>>>>>>> d22d36248e98332ebc366b4dba9639bb1e03dcf0
*/
const Button = ({ style, text, onClick }) => {
  return (
    <ButtonWrapper style={style} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
Button.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};
