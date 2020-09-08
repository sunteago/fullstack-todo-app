import React from "react";
import classes from "./TextInput.module.css";

interface ITextInput {
  type: string;
  placeholder: string;
  onChange: any;
  value: string;
}

export default function TextInput({
  type,
  placeholder,
  onChange,
  value,
}: ITextInput) {
  return (
    <input
      className={classes.TextInput}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
