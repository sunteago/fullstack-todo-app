import React from "react";
import Layout from "./containers/Layout";
import AppRoutes from "./containers/AppRoutes";

function App(): JSX.Element {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
