import React from "react";
import { useDispatch } from "react-redux";
import { ITodo } from "../../../common/types";
import classes from "./TodoListContainer.module.css";
import TodoList from "./TodoList";
import * as actions from "../../../store/actions/actions";

export default function TodoListContainer({ todos }: { todos: ITodo[] }) {
  const dispatch = useDispatch();

  const doneTodos: ITodo[] = [];
  const notDoneTodos: ITodo[] = [];
  todos.forEach((todoItem) => {
    if (todoItem.done === true) doneTodos.push(todoItem);
    else notDoneTodos.push(todoItem);
  });

  const toggleTodo = (todo: ITodo) => {
    const { uuid, task, done } = todo;
    dispatch(actions.updateTodoItem(uuid, task, !done));
  };

  return (
    <div className={classes.TodosContainer}>
      <h1 className={classes.Title}>To do!</h1>
      <TodoList todos={notDoneTodos} toggleTodo={toggleTodo} />
      <h1 className={classes.Title}>Already Done!</h1>
      <TodoList todos={doneTodos} toggleTodo={toggleTodo} />
    </div>
  );
}
