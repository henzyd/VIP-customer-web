import React, { useState } from "react";
import Shell from "./Shell";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

export default function Change() {
  const navigate = useNavigate();

  return (
    <Shell
      title="Change password"
      buttonText="Ready to go"
      onBtnClick={() => navigate("/login")}>
      <Input
        label="Enter new password"
        id="password"
        type="password"
        placeholder="Maximum of 8 characters"
      />
      <div style={{ marginTop: "3.2rem" }}>
        <Input
          label="Confirm the new password"
          id="new-password"
          type="password"
          placeholder="Ensure it is the same"
          errorMessage="Enter a valid email address"
        />
      </div>
    </Shell>
  );
}
