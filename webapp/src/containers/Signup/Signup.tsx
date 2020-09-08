import React, { useState } from "react";
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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClearHandler = (e: any, name: string = "") => {
    setValues({ ...values, [name]: "" });
  };

  return (
    <form className={classes.Form}>
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
