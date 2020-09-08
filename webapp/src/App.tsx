import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Layout from "./containers/Layout";
import AppRoutes from "./containers/AppRoutes";

function App(): JSX.Element {
  return (
    <Layout>
      <Router>
        <AppRoutes />
      </Router>
    </Layout>
  );
}

export default App;
