import { ITodo } from "../../common/types";
import { TodosTypes } from "../actions/actionTypes";
import * as actionTypes from "../actions/actionTypes";

export interface ITodosState {
  todos: ITodo[];
  currentTodo: ITodo | null;
}

const initialState: ITodosState = {
  todos: [],
  currentTodo: null,
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
    case actionTypes.CREATE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case actionTypes.SET_CURRENT_TODO:
      return {
        ...state,
        currentTodo: action.payload,
      };
    case actionTypes.UPDATE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todoItem) => {
          if (todoItem.uuid === action.payload.uuid) {
            todoItem.done = action.payload.done;
            todoItem.task = action.payload.task;
          }
          return todoItem;
        }),
      };
    case actionTypes.LOGOUT_USER:
      return initialState;
    case actionTypes.DELETE_TODO_ITEM_FAILED:
    case actionTypes.DELETE_TODO_ITEM_START:
    case actionTypes.CREATE_TODO_ITEM_START:
    case actionTypes.GET_TODOS_START:
    case actionTypes.CREATE_TODO_ITEM_FAILED:
    case actionTypes.GET_TODOS_FAILED:
    default:
      return state;
  }
};
