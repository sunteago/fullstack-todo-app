import React from "react";

import TextInput from "../../components/common/TextInput/TextInput";
import Button from "../../components/common/Button/Button";
import classes from "./AuthForm.module.css";

interface IAuthFormProps {
  onSubmitHandler: React.FormEventHandler;
  submitText: string;
  setValues: Function;
  values: {
    [index: string]: string;
  };
  textInputArr: {
    type: string;
    name: string;
    label: string;
    placeholder: string;
  }[];
}

export default function AuthForm(props: IAuthFormProps): JSX.Element {
  const {
    onSubmitHandler,
    submitText,
    setValues,
    values,
    textInputArr,
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClearHandler = (e: any, name: string = "") => {
    setValues({ ...values, [name]: "" });
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.Form}>
      {textInputArr.map((input) => {
        return (
          <React.Fragment key={input.name}>
            <label htmlFor={input.name}>{input.label}</label>
            <TextInput
              onChange={onChangeHandler}
              onClear={onClearHandler}
              value={values[input.name]}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              id={input.name}
            />
          </React.Fragment>
        );
      })}
      <Button type="submit" value={submitText} />
    </form>
  );
}
