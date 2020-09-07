import React, { useState, useEffect } from "react";
import { createTodoItem, updateTodoItem } from "../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../store/reducers";

export default function AddTodo(): JSX.Element {
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  const dispatch = useDispatch();
  const currentTodo = useSelector((state: IState) => state.todos.currentTodo);

  useEffect(() => {
    if (currentTodo) {
      setTask(currentTodo.task);
      setDone(currentTodo.done);
    }
  }, [currentTodo, dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  const onAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (task.trim() === "") return;
    //TODO: Edit this dummy behaviour
    if (currentTodo) {
      dispatch(updateTodoItem(currentTodo.uuid, task, currentTodo.done));
    } else {
      dispatch(createTodoItem(task));
    }
  };

  return (
    <form onSubmit={onAddTodo}>
      <input
        onChange={onChangeHandler}
        value={task}
        type="text"
        placeholder="Task"
      />
      <button type="button" onClick={() => setDone(!done)}>
        {done ? "Done!" : "Not Done"}
      </button>
      <input type="submit" value="Add" />
    </form>
  );
}
