import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../store/actions/actions";
import { useHistory } from "react-router-dom";
import { isValidSignup } from "../../common/validation";

import AuthForm from "../AuthForm/AuthForm";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

export default function Signup(): JSX.Element {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!isValidSignup(values, setErrors)) return;
    const { email, password } = values;
    dispatch(createAccount({ email, password }, history));
  };

  return (
    <>
      <SectionTitle>Sign up</SectionTitle>
      <AuthForm
        setErrors={setErrors}
        errors={errors}
        submitText="Sign up"
        onSubmitHandler={onSubmitHandler}
        values={values}
        setValues={setValues}
        textInputArr={textInputArr}
      />
    </>
  );
}

const textInputArr = [
  {
    type: "email",
    name: "email",
    placeholder: "e.g. test@test.com",
    label: "Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "At least 6 characters",
    label: "Password",
  },
  {
    type: "password",
    name: "cpassword",
    placeholder: "Repeat password",
    label: "Confirm Password",
  },
];
