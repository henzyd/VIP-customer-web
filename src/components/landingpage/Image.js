import React from "react";
import DATA_IMAGE from "../general/assests/images/data.png";
import { ImageWrapper } from "./image.styled";

const Image = () => {
  return (
    <ImageWrapper>
      <img src={DATA_IMAGE} alt="data image" />
    </ImageWrapper>
  );
};

export default Image;
