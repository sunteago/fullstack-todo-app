import React from "react";
import classes from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ITodo } from "../../../common/types";

interface ITodoItemProps {
  todo: ITodo;
  toggleTodo: Function;
  deleteTodo: Function;
  setCurrentTodo: Function;
}

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  setCurrentTodo,
}: ITodoItemProps) {
  return (
    <li className={classes.TodoItem}>
      <p
        onClick={() => toggleTodo(todo)}
        className={`${classes.Task} ${todo.done ? classes.Done : ""}`}
      >
        {todo.task}
      </p>

      <div className={classes.Buttons}>
        {!todo.done ? (
          <span
            onClick={() => setCurrentTodo(todo)}
            className={classes.EditTodo}
          >
            <FontAwesomeIcon icon={faEdit} />
          </span>
        ) : null}

        <span
          onClick={() => deleteTodo(todo.uuid)}
          className={classes.DeleteTodo}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    </li>
  );
}
