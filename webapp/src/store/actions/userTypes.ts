import { IAuthResponse } from "./userActions";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const LOGOUT_USER = "LOGOUT_USER";

export const CLEAR_ERRORS = "CLEAR_ERRORS";

interface ICreateUserStart {
  type: typeof CREATE_USER_START;
}

interface ICreateUserSuccess {
  type: typeof CREATE_USER_SUCCESS;
  payload: IAuthResponse;
}

interface ICreateUserFailed {
  type: typeof CREATE_USER_FAILED;
  payload: string;
}

interface ILoginUserStart {
  type: typeof LOGIN_USER_START;
}

interface ILoginUserSuccess {
  type: typeof LOGIN_USER_SUCCESS;
  payload: {
    email: string;
    token: string;
  };
}

interface ILoginUserFailed {
  type: typeof LOGIN_USER_FAILED;
  payload: string;
}

export interface ILogoutUser {
  type: typeof LOGOUT_USER;
}

export interface IClearErrors {
  type: typeof CLEAR_ERRORS;
}

export type UserTypes =
  | ICreateUserStart
  | ICreateUserSuccess
  | ICreateUserFailed
  | ILoginUserStart
  | ILoginUserSuccess
  | ILoginUserFailed
  | ILogoutUser
  | IClearErrors;
