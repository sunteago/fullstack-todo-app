import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Layout from "./containers/Layout";
import AppRoutes from "./containers/AppRoutes";

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
