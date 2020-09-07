import { ITodo } from "../../common/types";
import { TodosTypes } from "../actions/actionTypes";
import * as actionTypes from "../actions/actionTypes";

export interface ITodosState {
  todos: ITodo[];
}

const initialState: ITodosState = {
  todos: [],
};

export default (state: ITodosState = initialState, action: TodosTypes) => {
  switch (action.type) {
    case actionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case actionTypes.DELETE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(
          (todoItem) => todoItem.uuid !== action.payload
        ),
      };
    case actionTypes.DELETE_TODO_ITEM_FAILED:
    case actionTypes.DELETE_TODO_ITEM_START:
    case actionTypes.CREATE_TODO_ITEM_START:
    case actionTypes.GET_TODOS_START:
    case actionTypes.CREATE_TODO_ITEM_SUCCESS:
    case actionTypes.CREATE_TODO_ITEM_FAILED:
    case actionTypes.GET_TODOS_FAILED:
    default:
      return state;
  }
};
