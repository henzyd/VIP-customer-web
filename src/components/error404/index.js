import React from "react";
import {
  ErrorPageContainer,
  ErrorPageWrapper,
  ErrorText,
  ImageWrapper,
  Span
} from "./error404.styled";
import ErrorImage from "./assets/errorImage.svg";
import { Link } from "react-router-dom";
import Button from "components/general/Button";
const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorPageWrapper>
        <ErrorText>
          Oops! looks like you have a <Span>broken</Span> Link
        </ErrorText>
        <ImageWrapper>
          <img src={ErrorImage} alt=" 404" />
        </ImageWrapper>
        <Link to="/">
          <Button
            text="Go to Home"
            style={{
              width: "200px",
              height: "40px",
              color: "white",
              background: "#091540"
            }}
          />
        </Link>
      </ErrorPageWrapper>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
