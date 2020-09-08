import React, { useState, useEffect } from "react";
import classes from "./EditTodo.module.css";

import {
  createTodoItem,
  updateTodoItem,
  setCurrentTodo,
} from "../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../../store/reducers";
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";

export default function AddTodo(): JSX.Element {
  const [task, setTask] = useState("");

  const currentTodo = useSelector((state: IState) => state.todos.currentTodo);

  const inputRef = React.createRef<HTMLInputElement>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef]);

  useEffect(() => {
    if (currentTodo) {
      setTask(currentTodo.task);
    }
  }, [currentTodo, dispatch]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  const onAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (task.trim() === "") return;
    if (currentTodo) {
      dispatch(updateTodoItem(currentTodo.uuid, task, currentTodo.done));
    } else {
      dispatch(createTodoItem(task));
    }
    setTask("");
  };

  const onClearHandler = (e: React.MouseEvent): void => {
    if (currentTodo) dispatch(setCurrentTodo(null));
    setTask("");
  };

  return (
    <>
      <form className={classes.Form} onSubmit={onAddTodo}>
        <TextInput
          onChange={onChangeHandler}
          onClear={onClearHandler}
          value={task}
          type="text"
          placeholder="Task"
          ref={inputRef}
        />

        <Button type="submit" value={currentTodo ? "Update" : "Add"} />
      </form>
    </>
  );
}
