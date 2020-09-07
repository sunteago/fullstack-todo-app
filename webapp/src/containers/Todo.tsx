import React, { useEffect } from "react";
import { IState } from "../store/reducers";
import * as actions from "../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { ITodo } from "../common/types";

export default function Todo(): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos.todos);

  useEffect(() => {
    dispatch(actions.getTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <ul>
          {todos.map((todo: ITodo) => (
            <li key={todo.uuid}>
              <p>{todo.task}</p>
              <span>{todo.done ? "done" : "not done"} </span>
              <span onClick={() => dispatch(actions.deleteTodoItem(todo.uuid))}>
                Delete &times;
              </span>
              <span onClick={() => dispatch(actions.setCurrentTodo(todo))}>
                Update TODO;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
