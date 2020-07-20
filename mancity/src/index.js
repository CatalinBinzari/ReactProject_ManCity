import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./firebase";
const App = (props) => {
  //wwhatever inside browserrouter is going to be our main app
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};

//when we authenticate or deauth, this func is called
//null if he is not auth
firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
