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
    case actionTypes.CREATE_TODO_ITEM_START:
      return {
        ...state,
      };
    case actionTypes.CREATE_TODO_ITEM_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.CREATE_TODO_ITEM_FAILED:
      return {
        ...state,
      };
    case actionTypes.GET_TODOS_START:
      return {
        ...state,
      };
    case actionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case actionTypes.GET_TODOS_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
