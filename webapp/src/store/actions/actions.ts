import apiConfig from "../../config/api";
import * as actionTypes from "./actionTypes";

import { ITodo } from "../../common/types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITodosState } from "../reducers/todos";

type AppThunk<ReturnType = void> = ThunkAction<
  void,
  ITodosState,
  unknown,
  Action<string>
>;

interface IGetTodosRequest {
  msg: string;
  data: ITodo[];
}

interface ICreateTodoItem {
  msg: string;
  data: ITodo;
}

export const createTodoItem = (task: string): AppThunk => (dispatch) => {
  dispatch({ type: actionTypes.CREATE_TODO_ITEM_START });
  fetch(`${apiConfig.baseUrl}/todos/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("There was a problem");
      }
      return res;
    })
    .then((res) => res.json())
    .then((todoItem: ICreateTodoItem) => {
      //we dont fetch the todos again to avoid innecesary requests
      dispatch({
        type: actionTypes.CREATE_TODO_ITEM_SUCCESS,
        payload: todoItem.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: actionTypes.CREATE_TODO_ITEM_FAILED,
        payload: err,
      })
    );
};

export const getTodos = (): AppThunk => (dispatch) => {
  dispatch({ type: actionTypes.GET_TODOS_START });
  fetch(`${apiConfig.baseUrl}/todos`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("There was a problem");
      }
      return res;
    })
    .then((res) => res.json())
    .then((todosReq: IGetTodosRequest) => {
      dispatch({
        type: actionTypes.GET_TODOS_SUCCESS,
        payload: todosReq.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_TODOS_FAILED,
        payload: err,
      })
    );
};
export const updateTodoItem = (
  uuid: string,
  task: string,
  done: boolean
): AppThunk => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_TODO_ITEM_START });
  fetch(`${apiConfig.baseUrl}/todos/${uuid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task,
      done,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("There was a problem");
      }
      return res;
    })
    .then(() => {
      //we dont fetch the todos again to avoid innecesary requests
      dispatch({
        type: actionTypes.UPDATE_TODO_ITEM_SUCCESS,
        payload: {
          uuid,
          task,
          done,
        },
      });
    })
    .catch((err) =>
      dispatch({
        type: actionTypes.UPDATE_TODO_ITEM_FAILED,
        payload: err,
      })
    );
};

export const deleteTodoItem = (taskUid: string): AppThunk => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_TODO_ITEM_START });
  fetch(`${apiConfig.baseUrl}/todos/${taskUid}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("There was a problem");
      }
      return res;
    })
    .then(() =>
      dispatch({ type: actionTypes.DELETE_TODO_ITEM_SUCCESS, payload: taskUid })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.DELETE_TODO_ITEM_FAILED,
        payload: err,
      })
    );
};

export const setCurrentTodo = (todo: ITodo) => {
  return { type: actionTypes.SET_CURRENT_TODO, payload: todo };
};
