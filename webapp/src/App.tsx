import React from "react";
import Main from "./containers/Main";
import EditTodo from "./components/Todo/EditTodo/EditTodo";
import Layout from "./containers/Layout";

function App(): JSX.Element {
  return (
    <Layout>
      <EditTodo />
      <Main />
    </Layout>
  );
}

export default App;
