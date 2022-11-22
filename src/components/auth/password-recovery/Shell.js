import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  ContentWrapper,
  Title,
  White,
  Button
} from "./shell.styled";

export default function Shell({ title, buttonText, children, onBtnClick }) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <White>
          <ContentWrapper>
            <div>{children}</div>
            <Button onClick={onBtnClick}>{buttonText}</Button>
          </ContentWrapper>
        </White>
      </div>
    </Container>
  );
}

Shell.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node,
  onBtnClick: PropTypes.func
};
