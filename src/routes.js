import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components";
import { HomePage } from "./pages";

const Routes = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <div className="content" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <HomePage />
      </div>
    </div>
  </BrowserRouter>
);

export default Routes;
