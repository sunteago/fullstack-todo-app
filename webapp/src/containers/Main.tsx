import React from "react";
import { IState } from "../store/reducers";
import { useSelector } from "react-redux";
import TodoListContainer from "../components/Todo/TodoList/TodoListContainer";
import EditTodo from "../components/Todo/EditTodo/EditTodo";
import { Redirect } from "react-router-dom";

export default function Todo(): JSX.Element {
  const todos = useSelector((state: IState) => state.todos.todos);
  const isAuth = useSelector((state: IState) => state.user.isAuthenticated);

  return isAuth ? (
    <div>
      <EditTodo />
      <TodoListContainer todos={todos} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
}
