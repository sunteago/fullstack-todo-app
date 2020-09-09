import React from "react";
import classes from "./Header.module.css";

export default function Header({ email }: { email?: string }): JSX.Element {
  return (
    <header className={classes.Header}>
      <h1>TodoApp</h1>
      {email ? (
        <p className={classes.LoggedAs}>
          Logged in as <span>{email}</span>
        </p>
      ) : null}
    </header>
  );
}
