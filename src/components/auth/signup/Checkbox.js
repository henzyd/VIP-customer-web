import React from "react";
import PropTypes from "prop-types";
import { GoCheck } from "react-icons/go";
import { Container, Input, Label } from "./Checkbox.styled";

export default function Checkbox({ children, id, ...rest }) {
  return (
    <Container>
      <Input type="checkbox" name={id} id={id} {...rest} />
      <Label htmlFor={id}>
        <span>
          <div className="checkmark">
            <GoCheck />
          </div>
        </span>
        {children}
      </Label>
    </Container>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string
};
