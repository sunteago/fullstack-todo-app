import React from "react";
import classes from "./TextInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ITextInput {
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
  value: string;
  onClear: React.MouseEventHandler;
}

export default React.forwardRef(
  ({ type, placeholder, onChange, value, onClear }: ITextInput, ref: any) => (
    <div className={classes.InputContainer}>
      <input
        className={classes.TextInput}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        ref={ref}
      />
      <FontAwesomeIcon
        onClick={onClear}
        className={classes.TimesIcon}
        icon={faTimes}
      />
    </div>
  )
);
