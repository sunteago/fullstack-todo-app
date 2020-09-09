import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../store/actions/actions";
import { useHistory } from "react-router-dom";

import AuthForm from "../AuthForm/AuthForm";

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

export default function Signup(): JSX.Element {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    const { email, password } = values;
    if (email.trim() === "" || password.trim() === "") return;
    dispatch(createAccount({ email, password }, history));
  };

  return (
    <AuthForm
      submitText="Sign up"
      onSubmitHandler={onSubmitHandler}
      values={values}
      setValues={setValues}
      textInputArr={textInputArr}
    />
  );
}
