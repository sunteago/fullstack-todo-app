import * as actionTypes from "../actions/actionTypes";
import { UserTypes } from "../actions/actionTypes";

export interface IUserState {
  currentUser: {
    email: string;
    token: string;
  };
  isAuthenticated: null | boolean;
  error: string;
}

const initialState: IUserState = {
  currentUser: {
    email: "",
    token: "",
  },
  isAuthenticated: null,
  error: "",
};

export default (state: IUserState = initialState, action: UserTypes) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: {
          email: action.payload.email,
          token: action.payload.token,
        },
        isAuthenticated: true,
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email: action.payload.email,
          token: action.payload.token,
        },
        isAuthenticated: true,
      };
    case actionTypes.CREATE_USER_FAILED:
    case actionTypes.LOGIN_USER_FAILED:
      return {
        ...initialState,
        isAuthenticated: false,
        error: action.payload,
      };
    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: "",
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...initialState,
        isAuthenticated: false,
      };
    case actionTypes.CREATE_USER_START:
    default:
      return state;
  }
};
