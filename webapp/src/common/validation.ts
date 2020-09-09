import { Dispatch, SetStateAction } from "react";

interface ILoginValues {
  email: string;
  password: string;
}

interface ISignupValues {
  email: string;
  password: string;
  cpassword: string;
}

const validEmail = (email: string) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const validPassword = (password: string) => {
  return !(password.trim() === "" || password.length < 6);
};

const isEqual = (password: string, cpassword: string) => {
  return password === cpassword;
};

export const isValidLogin = (
  values: ILoginValues,
  setErrors: Dispatch<SetStateAction<ILoginValues>>
): boolean => {
  const { email, password } = values;
  let isInvalid = false;
  const invalid: ILoginValues = {
    email: "",
    password: "",
  };
  if (!validEmail(email)) {
    invalid.email = "Invalid Email";
    isInvalid = true;
  }
  if (!validPassword(password)) {
    invalid.password = "Password invalid or too short";
    isInvalid = true;
  }

  if (isInvalid) {
    setErrors(invalid);
    return false;
  }
  return true;
};

export const isValidSignup = (
  values: ISignupValues,
  setErrors: Dispatch<SetStateAction<ISignupValues>>
): boolean => {
  const { email, password, cpassword } = values;

  let isInvalid = false;
  const invalid: ISignupValues = {
    email: "",
    password: "",
    cpassword: "",
  };
  if (!validEmail(email)) {
    invalid.email = "Invalid Email";
    isInvalid = true;
  }
  if (!validPassword(password)) {
    invalid.password = "Password invalid or too short";
    isInvalid = true;
  }
  if (!isEqual(password, cpassword)) {
    invalid.cpassword = "Passwords don't match";
    isInvalid = true;
  }
  if (isInvalid) {
    setErrors(invalid);
    return false;
  }
  return true;
};
