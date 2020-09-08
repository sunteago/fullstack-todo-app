import * as actionTypes from "../actions/actionTypes";
import { UserTypes } from "../actions/actionTypes";

export interface IUserState {
  currentUser: {
    email: string;
    token: string;
  };
  isAuthenticated: null | boolean;
}

const initialState: IUserState = {
  currentUser: {
    email: "",
    token: "",
  },
  isAuthenticated: null,
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
      };
    case actionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...initialState,
        isAuthenticated: false,
      };
    case actionTypes.CREATE_USER_START:
    default:
      return state;
  }
};
