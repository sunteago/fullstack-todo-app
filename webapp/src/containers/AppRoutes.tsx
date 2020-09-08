import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../store/reducers/index";
import { checkIsAuth } from "../store/actions/userActions";
import Main from "./Main";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Spinner from "../components/common/Spinner/Spinner";

export default function AppRoutes() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state: IState) => state.user.isAuthenticated);

  useEffect(() => {
    dispatch(checkIsAuth(history));
  }, []);

  return isAuth === null ? (
    <Spinner />
  ) : (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}
