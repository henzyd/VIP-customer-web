import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Linkbtn = ({ href, child, className }) => {
  return (
    <>
      <a href={href} className={className}>
        {child}
      </a>
    </>
  );
};

Linkbtn.PropTypes = {
  href: PropTypes.any,
  children: PropTypes.string,
  className: PropTypes.any
};

export default Linkbtn;
