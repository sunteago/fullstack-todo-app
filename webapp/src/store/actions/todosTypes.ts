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

export const UPDATE_TODO_ITEM_START = "UPDATE_TODO_ITEM_START";
export const UPDATE_TODO_ITEM_SUCCESS = "UPDATE_TODO_ITEM_SUCCESS";
export const UPDATE_TODO_ITEM_FAILED = "UPDATE_TODO_ITEM_FAILED";

export const SET_CURRENT_TODO = "SET_CURRENT_TODO";

interface ICreateTodoItemStart {
  type: typeof CREATE_TODO_ITEM_START;
}

interface ICreateTodoItemSuccess {
  type: typeof CREATE_TODO_ITEM_SUCCESS;
  payload: ITodo[];
}

interface ICreateTodoItemFailed {
  type: typeof CREATE_TODO_ITEM_FAILED;
}

interface IGetTodosStart {
  type: typeof GET_TODOS_START;
}

interface IGetTodosSuccess {
  type: typeof GET_TODOS_SUCCESS;
  payload: ITodo[];
}

interface IGetTodosFailed {
  type: typeof GET_TODOS_FAILED;
}

interface IDelteTodoItemStart {
  type: typeof DELETE_TODO_ITEM_START;
}

interface IDeleteTodoItemSuccess {
  type: typeof DELETE_TODO_ITEM_SUCCESS;
  payload: string;
}

interface IDeleteTodoItemFailed {
  type: typeof DELETE_TODO_ITEM_FAILED;
}

interface IUpdateTodoItemStart {
  type: typeof UPDATE_TODO_ITEM_START;
}

interface IUpdateTodoItemSuccess {
  type: typeof UPDATE_TODO_ITEM_SUCCESS;
  payload: ITodo;
}

interface IUpdateTodoItemFailed {
  type: typeof UPDATE_TODO_ITEM_FAILED;
}

interface ISetCurrentTodo {
  type: typeof SET_CURRENT_TODO;
  payload: ITodo;
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
  | IDeleteTodoItemFailed
  | IUpdateTodoItemStart
  | IUpdateTodoItemSuccess
  | IUpdateTodoItemFailed
  | ISetCurrentTodo;
