import apiConfig from "../../config/api";
import * as actionTypes from "./actionTypes";

import { Credentials } from "../../common/types";
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

export const createAccount = (newAcc: Credentials): AppThunk => (dispatch) => {
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
        throw new Error("There was a problem");
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
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.CREATE_USER_FAILED,
        payload: err,
      });
    });
};

export const logIn = (newAcc: Credentials): AppThunk => (dispatch) => {
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
        throw new Error("There was a problem");
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
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.LOGIN_USER_FAILED,
        payload: err,
      });
    });
};

export const checkIsAuth = (history: any): AppThunk => (dispatch) => {
  const token = localStorage.getItem("ens_token");
  if (!token) {
    return dispatch({ type: actionTypes.LOGOUT_USER_SUCCESS });
  }
  history.push("/login");
  dispatch({ type: actionTypes.LOGOUT_USER_SUCCESS });
};
