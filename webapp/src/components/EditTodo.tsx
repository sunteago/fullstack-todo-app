import React, { useState } from "react";
import apiConfig from "../config/api";

export default function AddTodo(): JSX.Element {
  const [task, setTask] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  const onAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (task.trim() === "") return;
    fetch(`${apiConfig.baseUrl}/todos/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });
  };

  return (
    <form onSubmit={onAddTodo}>
      <input onChange={onChangeHandler} type="text" placeholder="Task" />
      <input type="submit" value="Add" />
    </form>
  );
}
