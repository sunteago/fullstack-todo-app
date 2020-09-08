import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../store/actions/actions";

import TextInput from "../../components/common/TextInput/TextInput";
import Button from "../../components/common/Button/Button";
import classes from "./Signup.module.css";

interface ISignupValues {
  email: string;
  password: string;
  cpassword: string;
}

export default function Signup(): JSX.Element {
  const [values, setValues] = useState<ISignupValues>({
    email: "",
    password: "",
    cpassword: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClearHandler = (e: any, name: string = "") => {
    setValues({ ...values, [name]: "" });
  };

  const onSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    const { email, password } = values;
    if (email.trim() === "" || password.trim() === "") return;
    dispatch(createAccount({ email, password }));
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.Form}>
      <label htmlFor="email">E-mail</label>
      <TextInput
        onChange={onChangeHandler}
        onClear={onClearHandler}
        value={values.email}
        type="email"
        placeholder="e.g. test@test.com"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <TextInput
        onChange={onChangeHandler}
        onClear={onClearHandler}
        value={values.password}
        type="password"
        placeholder="6 characters min"
        name="password"
      />
      <label htmlFor="cpassword">Confirm Password</label>
      <TextInput
        onChange={onChangeHandler}
        onClear={onClearHandler}
        value={values.cpassword}
        type="password"
        placeholder="repeat password"
        name="cpassword"
      />
      <Button type="submit" value="Sign up" />
    </form>
  );
}
