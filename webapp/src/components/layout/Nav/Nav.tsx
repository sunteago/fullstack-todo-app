import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../../../store/actions/actions";

import classes from "./Nav.module.css";

import { IState } from "../../../store/reducers";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state: IState) => state.user);

  const history = useHistory();

  return (
    <>
      <div
        onClick={() => setToggled(!toggled)}
        className={`${classes.MobileNav}  ${toggled ? classes.Toggled : ""}`}
      >
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
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li onClick={() => dispatch(logOut(history))}>Logout</li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
