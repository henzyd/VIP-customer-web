import React from "react";
import PropTypes from "prop-types";
import { Label, InputStyles, Error } from "./Input.styled";

function Input({ label, id, errorMessage, isError, ...rest }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputStyles name={id} {...rest} />
      {isError && <Error>{errorMessage}</Error>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool
};

export default Input;
