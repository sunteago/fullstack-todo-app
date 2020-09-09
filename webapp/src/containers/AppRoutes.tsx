import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../store/reducers/index";
import { checkIsAuth } from "../store/actions/userActions";
import Main from "./Main";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Spinner from "../components/common/Spinner/Spinner";
import About from "./About/About";

export default function AppRoutes() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state: IState) => state.user.isAuthenticated);

  useEffect(() => {
    dispatch(checkIsAuth(history));
  }, [dispatch, history]);

  return isAuth === null ? (
    <Spinner />
  ) : (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <About />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}
