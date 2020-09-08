import React from "react";
import { ITodo } from "../../../common/types";
import { useDispatch } from "react-redux";
import classes from "./TodoListContainer.module.css";
import TodoList from "./TodoList";

export default function TodoListContainer({ todos }: { todos: ITodo[] }) {
  const dispatch = useDispatch();

  const doneTodos: ITodo[] = [];
  const notDoneTodos: ITodo[] = [];
  todos.forEach((todoItem) => {
    if (todoItem.done === true) doneTodos.push(todoItem);
    else notDoneTodos.push(todoItem);
  });

  return (
    <div className={classes.TodosContainer}>
      <h1 className={classes.Title}>To do!</h1>
      <TodoList todos={notDoneTodos} />
      <h1 className={classes.Title}>Already Done!</h1>
      <TodoList todos={doneTodos} />
    </div>
  );
}
