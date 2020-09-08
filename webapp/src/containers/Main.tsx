import React, { useEffect } from "react";
import { IState } from "../store/reducers";
import * as actions from "../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import TodoListContainer from "../components/Todo/TodoList/TodoListContainer";

export default function Todo(): JSX.Element {
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todos.todos);

  useEffect(() => {
    dispatch(actions.getTodos());
  }, [dispatch]);

  return (
    <div>
      <TodoListContainer todos={todos} />
    </div>
  );
}