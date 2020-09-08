import React from "react";
import { ITodo } from "../../../common/types";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: Function;
}

export default function TodoList({ todos, toggleTodo }: ITodoListProps) {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.uuid} todo={todoItem} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}
