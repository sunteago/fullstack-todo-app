import React from "react";
import classes from "./TextInput.module.css";

interface ITextInput {
  type: string;
  placeholder: string;
  onChange: any;
  value: string;
}

export default React.forwardRef(
  ({ type, placeholder, onChange, value }: ITextInput, ref: any) => (
    <input
      className={classes.TextInput}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      ref={ref}
    />
  )
);
