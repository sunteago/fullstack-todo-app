import React, { useState, useEffect } from "react";
import { createTodoItem, updateTodoItem } from "../../../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../../store/reducers";
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";
import classes from "./EditTodo.module.css";

export default function AddTodo(): JSX.Element {
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  const inputRef = React.createRef<HTMLInputElement>();
  const dispatch = useDispatch();
  const currentTodo = useSelector((state: IState) => state.todos.currentTodo);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    console.log(inputRef.current);
  }, [inputRef]);

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
    <>
      <form className={classes.Form} onSubmit={onAddTodo}>
        <TextInput
          onChange={onChangeHandler}
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
