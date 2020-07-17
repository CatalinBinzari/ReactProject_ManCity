import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./Resources/firebase";
const App = () => {
  //wwhatever inside browserrouter is going to be our main app
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
