import React from "react";
import { ITodo } from "../../../common/types";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos }: { todos: ITodo[] }) {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.uuid} todo={todoItem} />
      ))}
    </ul>
  );
}
