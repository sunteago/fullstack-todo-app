import React from "react";
import Todo from "./containers/Todo";
import EditTodo from "./components/EditTodo";

function App(): JSX.Element {
  return (
    <div className="container">
      <header>Ensolvers</header>
      <EditTodo />
      <Todo />
      <footer>Developed my Santiago Vallejo for Ensolvers</footer>
    </div>
  );
}

export default App;
