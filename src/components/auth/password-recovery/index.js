import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import Shell from "./Shell";

const index = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    if (!enteredEmail) setIsError(true);
    else navigate("change");
  }

  return (
    <Shell
      title="Password Recovery"
      buttonText="Next"
      onBtnClick={handleSubmit}>
      <h3>Forgot your password?</h3>
      <div className="text">
        You can easily request your password reset below, a password reset link
        would be sent to the registered email address, kindly ensure it is
        correct.
      </div>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="JohnDoe@gmail.com"
        value={enteredEmail}
        onChange={(e) => setEnteredEmail(e.target.value)}
        isError={isError}
        errorMessage="Enter a valid email address"
      />
    </Shell>
  );
};

export default index;
