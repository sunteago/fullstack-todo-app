import React from "react";
import classes from "./Button.module.css";

interface IButton {
  type: string;
  onClick?: any;
  value: string;
}

export default function Button({ type, value, onClick }: IButton) {
  return (
    <input
      onClick={onClick}
      className={classes.Button}
      type={type}
      value={value}
    />
  );
}
