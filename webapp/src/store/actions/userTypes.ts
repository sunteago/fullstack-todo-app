import { IAuthResponse } from "./userActions";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILED = "LOGOUT_USER_FAILED";

interface ICreateUserStart {
  type: typeof CREATE_USER_START;
}

interface ICreateUserSuccess {
  type: typeof CREATE_USER_SUCCESS;
  payload: IAuthResponse;
}

interface ICreateUserFailed {
  type: typeof CREATE_USER_FAILED;
}

interface ILoginUserStart {
  type: typeof LOGIN_USER_START;
}

interface ILoginUserSuccess {
  type: typeof LOGIN_USER_SUCCESS;
}

interface ILoginUserFailed {
  type: typeof LOGIN_USER_FAILED;
}

interface ILogoutUserStart {
  type: typeof LOGOUT_USER_START;
}

interface ILogoutUserSuccess {
  type: typeof LOGOUT_USER_SUCCESS;
}

interface ILogoutUserFailed {
  type: typeof LOGOUT_USER_FAILED;
}

export type UserTypes =
  | ICreateUserStart
  | ICreateUserSuccess
  | ICreateUserFailed
  | ILoginUserStart
  | ILoginUserSuccess
  | ILoginUserFailed
  | ILogoutUserStart
  | ILogoutUserSuccess
  | ILogoutUserFailed;
