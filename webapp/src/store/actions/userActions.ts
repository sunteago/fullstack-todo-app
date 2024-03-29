import apiConfig from "../../config/api";
import * as actionTypes from "./actionTypes";
import { getInitialTodos } from "./todosActions";

import { Credentials, IErrMsg } from "../../common/types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITodosState } from "../reducers/todos";

type AppThunk<ReturnType = void> = ThunkAction<
  void,
  ITodosState,
  unknown,
  Action<string>
>;

export interface IAuthResponse {
  msg: string;
  token: string;
  email: string;
}

export const createAccount = (newAcc: Credentials, history: any): AppThunk => (
  dispatch
) => {
  dispatch({ type: actionTypes.CREATE_USER_START });
  fetch(`${apiConfig.baseUrl}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAcc),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          "There was a problem trying to create an new account, maybe that email is already in use"
        );
      }
      return res;
    })
    .then((res) => res.json())
    .then((credentials: IAuthResponse): void => {
      dispatch({
        type: actionTypes.CREATE_USER_SUCCESS,
        payload: credentials,
      });
      localStorage.setItem("ens_token", credentials.token);
      dispatch(getInitialTodos(credentials.token, history));
    })
    .catch((err: IErrMsg) => {
      localStorage.removeItem("ens_token");
      dispatch({
        type: actionTypes.CREATE_USER_FAILED,
        payload: err.message,
      });
      dispatch(clearErrors());
    });
};

export const logIn = (newAcc: Credentials, history: any): AppThunk => (
  dispatch
) => {
  dispatch({ type: actionTypes.LOGIN_USER_START });
  fetch(`${apiConfig.baseUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAcc),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          "There was a problem trying to login, please check your credentials"
        );
      }
      return res;
    })
    .then((res) => res.json())
    .then((credentials: IAuthResponse): void => {
      dispatch({
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload: credentials,
      });
      localStorage.setItem("ens_token", credentials.token);
      dispatch(getInitialTodos(credentials.token, history));
    })
    .catch((err: IErrMsg) => {
      localStorage.removeItem("ens_token");
      dispatch({
        type: actionTypes.LOGIN_USER_FAILED,
        payload: err.message,
      });
      dispatch(clearErrors());
    });
};

export const logOut = (history: any) => {
  history.push("/login");
  localStorage.removeItem("ens_token");
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const checkIsAuth = (history: any, pathname: string): AppThunk => (
  dispatch
) => {
  const token = localStorage.getItem("ens_token");
  if (!token) {
    dispatch({ type: actionTypes.LOGOUT_USER });
    return history.push(pathname || "/login");
  }
  dispatch(getInitialTodos(token, history));
  fetch(`${apiConfig.baseUrl}/user/auth`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("There was a problem");
      }
      return res;
    })
    .then((res) => res.json())
    .then((res: { msg: string; email: string }) => {
      dispatch({
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload: {
          email: res.email,
          token,
        },
      });
    })
    .catch((err: IErrMsg) => {
      localStorage.removeItem("ens_token");
      dispatch({ type: actionTypes.LOGIN_USER_FAILED, payload: err.message });
      dispatch(clearErrors());
    });
};

export const clearErrors = (): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: actionTypes.CLEAR_ERRORS,
    });
  }, 3000);
};
