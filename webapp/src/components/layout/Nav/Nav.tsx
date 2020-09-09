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

  const { isAuthenticated: isAuth } = user;

  const history = useHistory();

  const onClickMenuHandler = (e: any) => {
    if (e.target.tagName.toLowerCase() === "a") {
      setToggled(false);
    }
  };

  const onLogoutHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logOut(history));
  };

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
        <nav onClick={onClickMenuHandler}>
          <div>
            {!isAuth ? (
              <>
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Log in</Link>
              </>
            ) : (
              <>
                <Link to="/main">Main</Link>
                <a href="/" onClick={onLogoutHandler}>
                  Logout
                </a>
              </>
            )}
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
