import React, { useState } from "react";
import { createTodoItem } from "../store/actions/actions";
import { useDispatch } from "react-redux";

export default function AddTodo(): JSX.Element {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  const onAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (task.trim() === "") return;
    dispatch(createTodoItem(task));
  };

  return (
    <form onSubmit={onAddTodo}>
      <input onChange={onChangeHandler} type="text" placeholder="Task" />
      <input type="submit" value="Add" />
    </form>
  );
}
