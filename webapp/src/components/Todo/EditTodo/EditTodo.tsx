import React, { useState, useEffect } from "react";
import classes from "./EditTodo.module.css";
import {
  createTodoItem,
  updateTodoItem,
  setCurrentTodo,
} from "../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";
import FieldError from "../../common/FieldError/FieldError";

import { IState } from "../../../store/reducers";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

export default function AddTodo(): JSX.Element {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  const currentTodo = useSelector((state: IState) => state.todos.currentTodo);
  const { token } = useSelector((state: IState) => state.user.currentUser);

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

  const clearErrors = () => {
    setError("");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  const isValid = (): boolean => {
    if (task.trim() === "") {
      setError("Task cannot be empty");
      return false;
    }
    if (task.trim().length < 5) {
      setError("Task should be at least 5 characters long");
      return false;
    }
    return true;
  };

  const onAddTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!isValid()) return;
    if (currentTodo) {
      dispatch(updateTodoItem(currentTodo.uuid, task, currentTodo.done, token));
    } else {
      dispatch(createTodoItem(task, token));
    }
    setTask("");
  };

  const onClearHandler = (e: React.MouseEvent): void => {
    if (currentTodo) dispatch(setCurrentTodo(null));
    setTask("");
  };

  return (
    <>
      <SectionTitle>Add a new task</SectionTitle>
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
      <FieldError name="task" error={error} clearErrors={clearErrors} />
    </>
  );
}
