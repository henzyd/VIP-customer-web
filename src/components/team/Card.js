import React from "react";
import PropTypes from "prop-types";

export const Card = ({ img_url, name, position }) => {
  return (
    <div className={"card"}>
      <img src={img_url} alt="team" />
      <h4 className={"team__name"}>{name}</h4>
      <p className={"team__position"}>{position}</p>
    </div>
  );
};

Card.propTypes = {
  img_url: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
};
