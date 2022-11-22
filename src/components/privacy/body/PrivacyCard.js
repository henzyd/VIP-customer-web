import React from "react";
import { PropTypes } from "prop-types";

// eslint-disable-next-line react/prop-types
const PrivacyCard = ({ plist }) => {
  // eslint-disable-next-line react/prop-types
  const { title, body } = plist;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

PrivacyCard.PropTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default PrivacyCard;
