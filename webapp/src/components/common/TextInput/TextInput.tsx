import React from "react";
import classes from "./TextInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ITextInput {
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
  value: string;
  onClear: (e: React.MouseEvent, name?: string) => void;
  id?: string;
  name?: string;
}

export default React.forwardRef(
  (
    { type, placeholder, onChange, value, onClear, id, name }: ITextInput,
    ref: any
  ) => (
    <div className={classes.InputContainer}>
      <input
        className={classes.TextInput}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        ref={ref}
        id={id}
        name={name}
      />
      <FontAwesomeIcon
        onClick={(e) => onClear(e, name)}
        className={classes.TimesIcon}
        icon={faTimes}
      />
    </div>
  )
);
