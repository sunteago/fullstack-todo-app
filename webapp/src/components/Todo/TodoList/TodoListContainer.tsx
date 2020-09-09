import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "../../../common/types";
import classes from "./TodoListContainer.module.css";
import TodoList from "./TodoList";
import {
  deleteTodoItem,
  updateTodoItem,
  setCurrentTodo,
} from "../../../store/actions/actions";
import { IState } from "../../../store/reducers";

export default function TodoListContainer({ todos }: { todos: ITodo[] }) {
  const dispatch = useDispatch();

  const { token } = useSelector((state: IState) => state.user.currentUser);

  const doneTodos: ITodo[] = [];
  const notDoneTodos: ITodo[] = [];
  todos.forEach((todoItem) => {
    if (todoItem.done === true) doneTodos.push(todoItem);
    else notDoneTodos.push(todoItem);
  });

  const toggleTodo = (todo: ITodo): void => {
    const { uuid, task, done } = todo;
    dispatch(updateTodoItem(uuid, task, !done, token));
  };

  const deleteTodo = (uid: string): void => {
    dispatch(deleteTodoItem(uid, token));
  };

  const setCurrentTodo = (todo: ITodo): void => {
    dispatch(setCurrentTodo(todo));
  };

  return (
    <div className={classes.TodosContainer}>
      <h1 className={classes.Title}>To do!</h1>
      <TodoList
        todos={notDoneTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setCurrentTodo={setCurrentTodo}
      />
      <h1 className={classes.Title}>Already Done!</h1>
      <TodoList
        todos={doneTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setCurrentTodo={setCurrentTodo}
      />
    </div>
  );
}
