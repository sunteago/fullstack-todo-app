import { combineReducers } from "redux";
import todosReducer from "./todos";
import userReducer from "./user";
import { ITodosState } from "./todos";
import { IUserState } from "./user";

export interface IState {
  todos: ITodosState;
  user: IUserState;
}

export default combineReducers<IState>({
  todos: todosReducer,
  user: userReducer,
});
