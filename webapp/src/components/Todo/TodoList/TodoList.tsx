import React from "react";
import { ITodo } from "../../../common/types";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: Function;
  deleteTodo: Function;
  setCurrentTodo: Function;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  setCurrentTodo,
}: ITodoListProps) {
  return todos.length > 0 ? (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.uuid}
          todo={todoItem}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          setCurrentTodo={setCurrentTodo}
        />
      ))}
    </ul>
  ) : (
    <p className={classes.NoItems}>No items here yet!</p>
  );
}
