import React, { useEffect } from "react";
import { IState } from "../store/reducers";
import * as actions from "../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import TodoListContainer from "../components/Todo/TodoList/TodoListContainer";
import EditTodo from "../components/Todo/EditTodo/EditTodo";
import { Redirect } from "react-router-dom";

export default function Todo(): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos.todos);
  const isAuth = useSelector((state: IState) => state.user.isAuthenticated);

  useEffect(() => {
    // dispatch(actions.getTodos());
  }, [dispatch]);

  return isAuth ? (
    <div>
      <EditTodo />
      <TodoListContainer todos={todos} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
}
