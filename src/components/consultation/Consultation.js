import Navbar from "../general/navbar/Navbar";
import React, { useState } from "react";
import Input from "../auth/Input";
import {
  BtnContainer,
  ConsultPageWrap,
  ConsultStyled,
  FormStyled
} from "./Consultation.styled";
import tick from "./assets/small.png";
import { Link } from "react-router-dom";
import { Footer } from "components/general";

const Consultation = () => {
  const [formDetails, setFormDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    location: ""
  });

  const [formError, setFormError] = useState({
    fname: false,
    lname: false,
    email: false,
    mobile: false,
    location: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (value.trim().length > 0) {
      setFormError((prevFormError) => {
        return { ...prevFormError, [name]: false };
      });
    }

    setFormDetails((prevFormDetails) => {
      return { ...prevFormDetails, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formDetails.fname.trim().length === 0) {
      setFormError((prevFormError) => {
        return { ...prevFormError, fname: true };
      });
    }
    if (formDetails.lname.trim().length === 0) {
      setFormError((prevFormError) => {
        return { ...prevFormError, lname: true };
      });
    }
    if (formDetails.email.trim().length === 0) {
      setFormError((prevFormError) => {
        return { ...prevFormError, email: true };
      });
    }
    if (formDetails.mobile.trim().length === 0) {
      setFormError((prevFormError) => {
        return { ...prevFormError, mobile: true };
      });
    }
    if (formDetails.location.trim().length === 0) {
      setFormError((prevFormError) => {
        return { ...prevFormError, location: true };
      });
    }

    if (
      formDetails.fname.trim().length === 0 ||
      formDetails.lname.trim().length === 0 ||
      formDetails.email.trim().length === 0 ||
      formDetails.mobile.trim().length === 0 ||
      formDetails.location.trim().length === 0
    ) {
      return;
    }

    setFormDetails({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      location: ""
    });
  };

  return (
    <ConsultPageWrap>
      <Navbar />
      <Link to="/demo" className="back-btn">
        Back
      </Link>
      <ConsultStyled>
        <div className="consult-inner">
          <h1>Schedule a consultation</h1>
          <p>Complete form to schedule a consultation with us</p>

          <FormStyled method="post" onSubmit={handleSubmit}>
            <Input
              label="First Name *"
              id="fname"
              errorMessage="Please input a valid first name"
              isError={formError.fname}
              type="text"
              onChange={handleInputChange}
              value={formDetails.fname}
            />
            <Input
              label="Last Name *"
              id="lname"
              errorMessage="Please input a valid last name"
              isError={formError.lname}
              type="text"
              onChange={handleInputChange}
              value={formDetails.lname}
            />
            <Input
              label="Email *"
              id="email"
              errorMessage="Please input a valid email"
              isError={formError.email}
              type="email"
              onChange={handleInputChange}
              value={formDetails.email}
            />
            <Input
              label="Mobile *"
              id="mobile"
              errorMessage="Please input a valid mobile number"
              isError={formError.mobile}
              type="number"
              onChange={handleInputChange}
              value={formDetails.mobile}
            />
            <Input
              label="Location *"
              id="location"
              errorMessage="Please input a valid location"
              isError={formError.location}
              type="text"
              onChange={handleInputChange}
              value={formDetails.location}
            />
            <BtnContainer>
              <button type="submit" className="submit">
                Schedule a call <img src={tick} alt="" />
              </button>
              <button type="reset" className="reset" disabled={true}>
                Reset
              </button>
            </BtnContainer>
          </FormStyled>
        </div>
      </ConsultStyled>
      <Footer />
    </ConsultPageWrap>
  );
};

export default Consultation;
