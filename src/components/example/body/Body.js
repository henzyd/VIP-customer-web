import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BodyWrapper from "./body.styled";
import { Link } from "react-router-dom";
import { Store } from "store/contexts/AppContext";

const Body = () => {
  const { changeTheme } = Store();

  return (
    <BodyWrapper>
      <h3>Hello Dev</h3>
      <p>Find below buttons on the Body folder of example components</p>
      <Button />
      <Button background="green" text="second btn" />
      <Button onClick={changeTheme} style={{ color: "blue" }} text="Click me" />
      <p>
        I am PINK when the theme is Dark <br /> And YELLOW when the team is
        white
      </p>
      <small>I was implemented with styled components</small> <br />
      <Link className="btn" to="/">
        Back to home
      </Link>
    </BodyWrapper>
  );
};

export default Body;

const Button = ({
  text = "Default",
  background = "yellow",
  onClick,
  style
}) => {
  return (
    <ButtonWrapper background={background} style={style} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  color: red;
  background-color: ${({ background }) => background};
  width: 200px;
  font-size: 30px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  background: PropTypes.string
};
