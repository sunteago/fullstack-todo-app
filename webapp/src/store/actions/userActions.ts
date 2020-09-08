import apiConfig from "../../config/api";
import * as actionTypes from "./actionTypes";

import { INewAccount } from "../../common/types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITodosState } from "../reducers/todos";

type AppThunk<ReturnType = void> = ThunkAction<
  void,
  ITodosState,
  unknown,
  Action<string>
>;

export interface ISignupResponse {
  msg: string;
  token: string;
  email: string;
}

export const createAccount = (newAcc: INewAccount): AppThunk => (dispatch) => {
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
    .then((credentials: ISignupResponse): void => {
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
