import React from "react";
import classes from "./TodoItem.module.css";
import * as actions from "../../../store/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ITodo } from "../../../common/types";
import { useDispatch } from "react-redux";

export default function TodoItem({ todo }: { todo: ITodo }) {
  const dispatch = useDispatch();
  return (
    <li className={classes.TodoItem}>
      <p className={`${classes.Task} ${todo.done ? classes.Done : ""}`}>
        {todo.task}
      </p>

      {todo.done && (
        <span className={classes.DoneTodo}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      )}

      <span className={classes.DeleteTodo}>
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
