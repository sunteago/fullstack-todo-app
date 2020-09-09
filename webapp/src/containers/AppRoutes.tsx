import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const locationRef = React.useRef(location.pathname);

  useEffect(() => {
    dispatch(checkIsAuth(history, locationRef.current));
  }, [dispatch, history]);

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
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}
