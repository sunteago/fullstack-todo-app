import * as actionTypes from "../actions/actionTypes";
import { UserTypes } from "../actions/actionTypes";

export interface IUserState {
  currentUser: {
    email: string;
    token: string;
  };
}

const initialState: IUserState = {
  currentUser: {
    email: "",
    token: "",
  },
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
    case actionTypes.CREATE_USER_START:
    default:
      return state;
  }
};
