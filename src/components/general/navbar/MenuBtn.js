import React from "react";
import PropTypes from "prop-types";
const MenuBtn = ({ menuopen }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 6.5H21V8.5H3V6.5ZM3 11.5H21V13.5H3V11.5ZM3 16.5H21V18.5H3V16.5Z"
        fill={`${menuopen ? "#C04A1C" : "#FFFAFB"}  `}
      />
    </svg>
  );
};

export default MenuBtn;

MenuBtn.propTypes = {
  menuopen: PropTypes.bool.isRequired
};
