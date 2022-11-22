import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Linkbtn = ({ href, child, className }) => {
  return (
    <>
      <Link to={href} className={className}>
        {child}
      </Link>
    </>
  );
};

Linkbtn.PropTypes = {
  href: PropTypes.any,
  children: PropTypes.string,
  className: PropTypes.any
};

export default Linkbtn;
