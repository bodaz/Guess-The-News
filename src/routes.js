import React from "react";
import { BrowserRouter } from "react-router-dom";

import { HomePage } from "./pages";

const Routes = () => (
  <BrowserRouter>
    <div className="app">
      <HomePage />
    </div>
  </BrowserRouter>
);

export default Routes;
