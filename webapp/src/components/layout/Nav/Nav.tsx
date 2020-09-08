import React, { useState } from "react";
import classes from "./Nav.module.css";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div onClick={() => setToggled(!toggled)} className={classes.MobileNav}>
        <div className={classes.Toggle}>
          <div
            className={`${classes.Bar}  ${toggled ? classes.Toggled : ""}`}
          ></div>
        </div>
      </div>
      <div
        className={`${classes.NavigationBar} ${
          toggled ? classes.Toggled : classes.Hide
        }`}
      >
        <h3 className={classes.MenuHeading}>Menu</h3>
        <nav>
          <ul>
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Sign out</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
