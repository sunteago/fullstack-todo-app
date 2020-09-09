import React, { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import classes from "./FieldError.module.css";

interface IFieldError {
  error: string;
  name: string;
  clearErrors: () => void;
}

export default function FieldError({
  error,
  clearErrors,
  name,
}: IFieldError): JSX.Element {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (error) {
      timer = setTimeout(() => {
        clearErrors();
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [error]);

  return (
    <p className={`${classes.FieldError} ${error ? classes.Error : ""}`}>
      {error}
    </p>
  );
}
