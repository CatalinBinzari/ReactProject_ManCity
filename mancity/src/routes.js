import React, { Component } from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/signin";

import Dashboard from "./Components/admin/Dashboard";

import PrivateRoute from "./Components/authRouters/privateRoutes";
import PublicRoute from "./Components/authRouters/publicRoutes.js";
import AdminMatches from "./Components/admin/matches";
import AddEditMatch from "./Components/admin/matches/addEditMatch";
import AdminPlayers from "./Components/admin/players";
import AddEditPlayers from "./Components/admin/players/addEditPlayers";

//whatever components between header and footer
const Routes = (props) => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />

        <PrivateRoute
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />

        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />

        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />

        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />

        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />

        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />

        <PublicRoute
          {...props}
          restricted={true} //anyone can view
          path="/sign_in"
          exact
          component={SignIn}
        />

        <PublicRoute
          {...props}
          restricted={false} //if user is sign_in, he will not be able to see this
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
