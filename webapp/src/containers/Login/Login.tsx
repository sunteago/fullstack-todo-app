import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/actions/actions";

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
];

export default function Login(): JSX.Element {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    const { email, password } = values;
    if (email.trim() === "" || password.trim() === "") return;
    dispatch(logIn({ email, password }));
  };

  return (
    <AuthForm
      submitText="Log in"
      onSubmitHandler={onSubmitHandler}
      values={values}
      setValues={setValues}
      textInputArr={textInputArr}
    />
  );
}
