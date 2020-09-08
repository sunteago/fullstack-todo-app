import React from "react";
import { ITodo } from "../../../common/types";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: Function;
  deleteTodo: Function;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: ITodoListProps) {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.uuid}
          todo={todoItem}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}
