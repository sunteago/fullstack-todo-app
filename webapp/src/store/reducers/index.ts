import { combineReducers } from "redux";
import todosReducer from "./todos";
import { ITodosState } from "./todos";

export interface IState {
  todos: ITodosState;
}

export default combineReducers<IState>({
  todos: todosReducer,
});
