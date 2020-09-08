import React from "react";
import classes from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ITodo } from "../../../common/types";

interface ITodoItemProps {
  todo: ITodo;
  toggleTodo: Function;
  deleteTodo: Function;
}

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
}: ITodoItemProps) {
  return (
    <li className={classes.TodoItem}>
      <p
        onClick={() => toggleTodo(todo)}
        className={`${classes.Task} ${todo.done ? classes.Done : ""}`}
      >
        {todo.task}
      </p>

      <span
        onClick={() => deleteTodo(todo.uuid)}
        className={classes.DeleteTodo}
      >
        <FontAwesomeIcon icon={faTimes} />
      </span>
      {/* <span
        className={classes.Delete}
        onClick={() => dispatch(actions.deleteTodoItem(todo.uuid))}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
      <span onClick={() => dispatch(actions.setCurrentTodo(todo))}>
        Update;
      </span> */}
    </li>
  );
}
