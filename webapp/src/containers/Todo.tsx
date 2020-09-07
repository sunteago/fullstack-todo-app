import React, { useState, useEffect } from "react";

import { ITodo } from "../common/types";

export default function Todo(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      todoId: "1234",
      task: "test todo",
      done: false,
    },
    {
      todoId: "34567",
      task: "test todo 2",
      done: false,
    },
  ]);

  useEffect(() => {
    //TODO: fetch todos
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <ul>
          {todos.map((todo) => (
            <li>
              <p>{todo.task}</p>
              <span>{todo.done ? "done" : "not done"} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
