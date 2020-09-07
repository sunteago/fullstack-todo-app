import { ITodo } from "../../common/types";

export const CREATE_TODO_ITEM_START = "CREATE_TODO_ITEM_START";
export const CREATE_TODO_ITEM_SUCCESS = "CREATE_TODO_ITEM_SUCCESS";
export const CREATE_TODO_ITEM_FAILED = "CREATE_TODO_ITEM_FAILED";

export const GET_TODOS_START = "GET_TODOS_START";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const DELETE_TODO_ITEM_START = "DELETE_TODO_ITEM_START";
export const DELETE_TODO_ITEM_SUCCESS = "DELETE_TODO_ITEM_SUCCESS";
export const DELETE_TODO_ITEM_FAILED = "DELETE_TODO_ITEM_FAILED";

export interface ICreateTodoItemStart {
  type: typeof CREATE_TODO_ITEM_START;
}

export interface ICreateTodoItemSuccess {
  type: typeof CREATE_TODO_ITEM_SUCCESS;
  payload: ITodo[];
}

export interface ICreateTodoItemFailed {
  type: typeof CREATE_TODO_ITEM_FAILED;
}

export interface IGetTodosStart {
  type: typeof GET_TODOS_START;
}

export interface IGetTodosSuccess {
  type: typeof GET_TODOS_SUCCESS;
  payload: ITodo[];
}

export interface IGetTodosFailed {
  type: typeof GET_TODOS_FAILED;
}

export interface IDelteTodoItemStart {
  type: typeof DELETE_TODO_ITEM_START;
}

export interface IDeleteTodoItemSuccess {
  type: typeof DELETE_TODO_ITEM_SUCCESS;
  payload: string;
}

export interface IDeleteTodoItemFailed {
  type: typeof DELETE_TODO_ITEM_FAILED;
}

export type TodosTypes =
  | ICreateTodoItemStart
  | ICreateTodoItemSuccess
  | ICreateTodoItemFailed
  | IGetTodosStart
  | IGetTodosSuccess
  | IGetTodosFailed
  | IDelteTodoItemStart
  | IDeleteTodoItemSuccess
  | IDeleteTodoItemFailed;
