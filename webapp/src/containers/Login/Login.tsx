import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/actions/actions";
import { useHistory } from "react-router-dom";
import { isValidLogin } from "../../common/validation";
import AuthForm from "../AuthForm/AuthForm";

export default function Login(): JSX.Element {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!isValidLogin(values, setErrors)) return;
    const { email, password } = values;
    dispatch(logIn({ email, password }, history));
  };

  return (
    <AuthForm
      setErrors={setErrors}
      submitText="Log in"
      onSubmitHandler={onSubmitHandler}
      values={values}
      setValues={setValues}
      textInputArr={textInputArr}
      errors={errors}
    />
  );
}

const textInputArr = [
  {
    type: "email",
    name: "email",
    placeholder: "e.g. test@test.com",
    label: "Email",
    error: "",
  },
  {
    type: "password",
    name: "password",
    placeholder: "At least 6 characters",
    label: "Password",
    error: "",
  },
];
